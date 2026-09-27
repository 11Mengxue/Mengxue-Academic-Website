import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const rootPath = root.pathname.replace(/^\/(?:[A-Za-z]:)/, (value) => value.slice(1));
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.html')) htmlFiles.push(path);
  }
}

function targetFor(url) {
  const pathname = decodeURIComponent(url.split(/[?#]/, 1)[0]);
  if (!pathname || pathname === '/') return join(rootPath, 'index.html');
  const clean = pathname.replace(/^\//, '');
  if (extname(clean)) return join(rootPath, clean);
  return join(rootPath, clean, 'index.html');
}

walk(rootPath);
const errors = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const label = relative(rootPath, file);
  if (!/<html\s+lang="[^"]+"/i.test(html)) errors.push(`${label}: missing lang`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(html)) errors.push(`${label}: missing description`);
  if (!/<link\s+rel="canonical"\s+href="[^"]+"/i.test(html)) errors.push(`${label}: missing canonical`);
  if (label !== '404.html' && !/<link\s+rel="alternate"\s+hreflang="[^"]+"/i.test(html)) errors.push(`${label}: missing hreflang`);

  for (const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*?(?:href|src)="([^"]+)"/gi)) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const target = targetFor(url);
    if (!existsSync(target)) errors.push(`${label}: broken internal reference ${url}`);
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt="[^"]*"/i.test(match[1])) errors.push(`${label}: image without alt attribute`);
  }
}

const routes = new Set(htmlFiles.map((file) => `/${relative(rootPath, file).replace(/\\/g, '/').replace(/index\.html$/, '')}`));
for (const route of routes) {
  if (route === '/404.html') continue;
  if (route.startsWith('/zh/')) {
    const english = route === '/zh/404/' ? '/404.html' : (route.replace(/^\/zh/, '') || '/');
    if (!routes.has(english)) errors.push(`${route}: missing English counterpart`);
  } else {
    const chinese = route === '/' ? '/zh/' : `/zh${route}`;
    if (!routes.has(chinese)) errors.push(`${route}: missing Chinese counterpart`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Build audit passed: ${htmlFiles.length} HTML pages, internal references, metadata, image alternatives and bilingual routes validated.`);
