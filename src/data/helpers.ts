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

export function getComplementaryProducts(): Product[] {
  return products.filter((p) => !p.isHero);
}

export function getAllProductSlugs(): { category: string; slug: string }[] {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);
}
