"use client";

import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/types";
import { HeroProductCard, CompactProductCard } from "./ProductCard";

export default function CatalogGrid({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("categoria");

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  if (filtered.length === 0) {
    return (
      <p className="py-12 text-center text-text-muted">
        No se encontraron productos en esta categoría.
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((product) =>
        product.isHero ? (
          <HeroProductCard key={product.slug} product={product} />
        ) : (
          <CompactProductCard key={product.slug} product={product} />
        )
      )}
    </div>
  );
}
