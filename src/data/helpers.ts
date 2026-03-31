import { products } from "./products";
import type { Product } from "./types";

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategorySlugs(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getHeroProducts(): Product[] {
  return products.filter((p) => p.isHero);
}

export function getComplementaryProducts(product?: Product): Product[] {
  // Show up to 6 non-hero products that have images, from different categories than the current product
  return products
    .filter(
      (p) =>
        !p.isHero &&
        p.images.length > 0 &&
        (!product || (p.slug !== product.slug && p.category !== product.category))
    )
    .slice(0, 6);
}

export function getAllProductSlugs(): { category: string; slug: string }[] {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export function getRelatedProducts(product: Product): Product[] {
  const fromSlugs = product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined && p.images.length > 0);

  // If we have enough, return up to 3
  if (fromSlugs.length >= 3) return fromSlugs.slice(0, 3);

  // Backfill with same-category products that have images
  const backfill = products.filter(
    (p) =>
      p.slug !== product.slug &&
      p.category === product.category &&
      p.images.length > 0 &&
      !fromSlugs.some((r) => r.slug === p.slug)
  );

  return [...fromSlugs, ...backfill].slice(0, 3);
}
