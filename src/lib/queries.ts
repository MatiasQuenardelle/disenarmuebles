import { cache } from "react";
import { sql } from "./db";
import type { Product, SiteInfo } from "@/data/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function rowToProduct(row: Record<string, any>): Product {
  return {
    slug: row.slug,
    name: row.name,
    subtitle: row.subtitle,
    category: row.category,
    isHero: row.is_hero,
    shortDescription: row.short_description,
    longDescription: row.long_description,
    features: row.features,
    specs: row.specs,
    stats: row.stats,
    delivery: row.delivery,
    images: row.images,
    price: row.price ?? undefined,
    sizes: row.sizes ?? undefined,
    brand: row.brand ?? undefined,
    variant: row.variant ?? undefined,
    subtype: row.subtype ?? undefined,
    relatedSlugs: row.related_slugs,
    seo: { title: row.seo_title, description: row.seo_description },
  };
}

export const getAllProducts = cache(async (): Promise<Product[]> => {
  const rows = await sql`SELECT * FROM products ORDER BY sort_order, id`;
  return rows.map(rowToProduct);
});

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((p) => p.slug === slug);
}

export async function getProductsByCategorySlugs(category: string): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.category === category);
}

export async function getHeroProducts(): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.isHero);
}

export async function getComplementaryProducts(product?: Product): Promise<Product[]> {
  // Show up to 6 non-hero products that have images, from different categories than the current product
  const products = await getAllProducts();
  return products
    .filter(
      (p) =>
        !p.isHero &&
        p.images.length > 0 &&
        (!product || (p.slug !== product.slug && p.category !== product.category))
    )
    .slice(0, 6);
}

export async function getAllProductSlugs(): Promise<{ category: string; slug: string }[]> {
  const products = await getAllProducts();
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  const products = await getAllProducts();
  const fromSlugs = product.relatedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
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

export const getSiteInfo = cache(async (): Promise<SiteInfo> => {
  const [row] = await sql`SELECT value FROM site_settings WHERE key = 'site_info'`;
  return row.value as SiteInfo;
});

// --- Admin queries (require id / updated_at) ---

export type AdminProduct = Product & { id: number; updatedAt: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToAdminProduct(row: Record<string, any>): AdminProduct {
  return {
    ...rowToProduct(row),
    id: row.id,
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

export async function getAdminProducts(): Promise<AdminProduct[]> {
  const rows = await sql`SELECT * FROM products ORDER BY sort_order, id`;
  return rows.map(rowToAdminProduct);
}

export async function getAdminProduct(id: number): Promise<AdminProduct | undefined> {
  const rows = await sql`SELECT * FROM products WHERE id = ${id}`;
  return rows[0] ? rowToAdminProduct(rows[0]) : undefined;
}
