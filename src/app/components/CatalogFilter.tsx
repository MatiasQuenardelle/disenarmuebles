"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories } from "@/data/categories";

export default function CatalogFilter() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("categoria");

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      <Link
        href="/productos"
        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
          !activeCategory
            ? "bg-brand text-white"
            : "border border-brand-light/40 text-text-muted hover:border-brand hover:text-brand"
        }`}
      >
        Todos
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/productos?categoria=${cat.slug}`}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeCategory === cat.slug
              ? "bg-brand text-white"
              : "border border-brand-light/40 text-text-muted hover:border-brand hover:text-brand"
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
