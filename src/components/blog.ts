/**
 * Blog helpers shared by the four blog/author pages and the design system.
 *
 * getPublishedPosts() is the one door into the `blog` collection. Every page
 * reads posts through it, so a post marked `draft: true` cannot turn up on the
 * index, an author profile, or as a generated /blog/[id] page — in dev or in
 * the build.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Author = CollectionEntry<'authors'>;

/** Published posts only, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Published posts by one author, newest first. */
export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.author.id === authorId);
}

/** "22 September 2026" — the site writes in British English. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Whole minutes at a steady 220 words a minute, never less than one. */
export function readingMinutes(body = ''): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
