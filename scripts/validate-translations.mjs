import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/content');
const groups = ['research', 'publications', 'news'];
let failed = false;

for (const group of groups) {
  const dir = path.join(root, group);
  const files = fs.readdirSync(dir).filter((name) => /\.(md|mdx)$/.test(name));
  const keys = new Map();
  for (const file of files) {
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    const key = text.match(/translationKey:\s*["']?([^"'\n]+)["']?/i)?.[1]?.trim();
    const locale = text.match(/locale:\s*(en|zh)/i)?.[1];
    if (!key || !locale) {
      console.error(`[${group}] Missing translationKey or locale: ${file}`);
      failed = true;
      continue;
    }
    if (!keys.has(key)) keys.set(key, new Set());
    keys.get(key).add(locale);
  }
  for (const [key, locales] of keys) {
    if (!locales.has('en') || !locales.has('zh')) {
      console.error(`[${group}] Translation pair incomplete: ${key}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log('Translation pairs validated.');
