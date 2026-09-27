import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = {
  title: z.string(),
  description: z.string(),
  locale: z.enum(['en', 'zh']),
  translationKey: z.string(),
  slug: z.string(),
  routeSlug: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  seoImage: z.string().optional()
};

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    researchQuestion: z.string(),
    datasets: z.array(z.string()),
    methods: z.array(z.string()),
    findings: z.array(z.string()),
    impact: z.array(z.string()),
    figures: z.array(z.string()),
    relatedPublications: z.array(z.string())
  })
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'chapter', 'article']),
    doi: z.url().optional(),
    pdf: z.string().optional(),
    code: z.url().optional(),
    citation: z.string().optional(),
    contribution: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    category: z.enum(['milestone', 'recognition', 'award']),
    externalUrl: z.url().optional(),
    externalLabel: z.string().optional()
  })
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.json' }),
  schema: z.object({
    locale: z.enum(['en', 'zh']),
    translationKey: z.string(),
    items: z.array(z.object({
      period: z.string(),
      title: z.string(),
      organization: z.string(),
      description: z.string(),
      category: z.enum(['education', 'research', 'teaching', 'award'])
    }))
  })
});

export const collections = { research, publications, news, experience };
