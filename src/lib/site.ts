export type Locale = 'en' | 'zh';

export const profile = {
  name: 'Mengxue Yao',
  email: 'm.yao@sheffield.ac.uk',
  github: 'https://github.com/11Mengxue',
  linkedin: 'https://www.linkedin.com/in/mengxue-yao-1a938b31a/',
  scholar: 'https://scholar.google.com/citations?user=4dZw5dMAAAAJ&hl=en&oi=ao',
  orcid: 'https://orcid.org/0009-0007-6204-397X',
  institution: 'University of Sheffield',
  cv: '/downloads/mengxue-yao-cv.pdf'
};

export const ui = {
  en: {
    localeName: '中文',
    skip: 'Skip to content',
    role: 'British Academy Postdoctoral Fellow',
    nav: [
      ['Research', '/research/'],
      ['Publications', '/publications/'],
      ['Teaching', '/teaching/'],
      ['Experience', '/experience/'],
      ['News', '/news/'],
      ['About', '/about/']
    ],
    footer: 'Researching healthier cities through environmental data, urban form and computational modelling.'
  },
  zh: {
    localeName: 'EN',
    skip: '跳转到正文',
    role: '英国国家学术院博士后研究员',
    nav: [
      ['研究', '/zh/research/'],
      ['成果', '/zh/publications/'],
      ['教学', '/zh/teaching/'],
      ['经历', '/zh/experience/'],
      ['动态', '/zh/news/'],
      ['关于', '/zh/about/']
    ],
    footer: '以环境数据、城市形态与计算建模，研究更健康、更宜居的城市。'
  }
} satisfies Record<Locale, any>;

export function alternatePath(pathname: string, locale: Locale) {
  if (locale === 'en') return pathname === '/' ? '/zh/' : `/zh${pathname}`;
  if (pathname === '/zh/404/') return '/404.html';
  const english = pathname.replace(/^\/zh/, '') || '/';
  return english;
}

export function localizedPath(path: string, locale: Locale) {
  return locale === 'zh' ? `/zh${path === '/' ? '/' : path}` : path;
}
