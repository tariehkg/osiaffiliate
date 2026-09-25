import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Authors live in one JSON array (src/data/authors.json). Each object's `id`
 * becomes the entry id, which is also the /authors/[id] URL segment and the
 * value a post's `author` field points at.
 *
 * `avatar` goes through image(), so the path is resolved relative to the JSON
 * file and checked at build time — a missing file fails the build instead of
 * shipping a broken image.
 */
const authors = defineCollection({
  loader: file('src/data/authors.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      avatar: image(),
    }),
});

/**
 * Blog posts are markdown files in src/content/blog/. The file name (minus
 * `.md`) is the entry id and the /blog/[id] URL segment.
 *
 * `draft: true` keeps a post out of every page — see getPublishedPosts() in
 * src/components/blog.ts, which is the only way the pages read this
 * collection.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: reference('authors'),
      tags: z.array(z.string()).default([]),
      featuredImage: z.object({
        src: image(),
        /** Describes the photo for screen readers — required, not optional. */
        alt: z.string(),
        /** Photographer and licence, shown under the image on the post page. */
        credit: z.string().optional(),
      }),
      draft: z.boolean().default(false),
    }),
});

export const collections = { authors, blog };
