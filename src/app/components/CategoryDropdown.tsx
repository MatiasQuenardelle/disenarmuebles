"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";

export default function CategoryDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/productos"
        className="flex items-center gap-1 transition-colors hover:text-brand"
      >
        Productos
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div className="min-w-48 rounded-xl border border-brand-light/30 bg-cream p-2 shadow-lg">
            <Link
              href="/productos"
              className="block rounded-lg px-4 py-2 text-sm text-warm-brown transition-colors hover:bg-cream-dark hover:text-brand"
            >
              Ver todos
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/productos/${cat.slug}`}
                className="block rounded-lg px-4 py-2 text-sm text-text-muted transition-colors hover:bg-cream-dark hover:text-brand"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
