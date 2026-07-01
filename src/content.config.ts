import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const parts = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/parts' }),
  schema: z.object({
    name_en: z.string(),
    name_jp: z.string().optional(),
    system: z.enum([
      'engine',
      'filters',
      'electrical',
      'wipers',
      'tires-wheels',
      'brakes',
      'suspension',
      'body',
      'fluids',
    ]),
    oem_number: z.string(),
    superseded_numbers: z.array(z.string()).optional().default([]),
    applicability: z.object({
      chassis: z.array(z.string()),
      grades: z.array(z.string()),
      years: z.string(),
    }),
    alternatives: z
      .array(
        z.object({
          brand: z.string(),
          number: z.string(),
          note: z.string().optional().default(''),
        }),
      )
      .optional()
      .default([]),
    confidence: z.enum(['verified', 'probable', 'unconfirmed']),
    sources: z
      .array(
        z.object({
          url: z.url(),
          note: z.string().optional().default(''),
        }),
      )
      .min(1),
    price_jpy: z.number().optional(),
    notes: z.string().optional().default(''),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['easy', 'moderate', 'involved']),
    time_minutes: z.number(),
    interval: z.string().optional(),
    tools: z.array(z.string()).optional().default([]),
    parts: z.array(z.string()).optional().default([]),
    torque_specs: z
      .array(
        z.object({
          fastener: z.string(),
          nm: z.number(),
        }),
      )
      .optional()
      .default([]),
    fluids: z
      .array(
        z.object({
          name: z.string(),
          capacity: z.string(),
        }),
      )
      .optional()
      .default([]),
    phase: z.number(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { parts, guides };
