/**
 * Everything a category page hands to <Layout>: the title, the description,
 * and the schema blocks. One function, so the five hub pages cannot drift.
 */
import { categories } from './data';
import { categoryContent } from './category-content';
import { breadcrumbLd, itemListLd, faqPageLd } from './seo';

const YEAR = new Date().getFullYear();

export function categoryPageMeta(id: string) {
  const category = categories.find((c) => c.id === id);
  const content = categoryContent[id];
  if (!category || !content) throw new Error(`categoryPageMeta: no content for "${id}"`);

  return {
    title: `${content.seoTitle} (${YEAR}) — OSI Affiliate`,
    description: content.seoDescription,
    path: category.hub,
    jsonld: [
      breadcrumbLd([
        { label: 'Home', href: '/' },
        { label: category.name, href: category.hub },
      ]),
      itemListLd(
        content.h1,
        category.picks.map((p) => ({ name: p.name, url: `${category.hub}/${p.slug}` })),
      ),
      faqPageLd(content.faqs),
    ],
  };
}
