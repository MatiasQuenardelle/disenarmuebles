import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";

export function HeroProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.category}/${product.slug}`}
      className="card-premium group overflow-hidden rounded-2xl border border-brand-light/20 bg-cream"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.images[0]?.src ?? ""}
          alt={product.images[0]?.alt ?? product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-7">
        <p className="mb-1.5 text-xs font-medium uppercase tracking-widest text-brand">
          {product.subtitle}
        </p>
        <h3 className="mb-2 font-heading text-lg font-semibold text-warm-brown">{product.name}</h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {product.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark">
          Ver producto
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function CompactProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.category}/${product.slug}`}
      className="card-premium group flex-shrink-0 overflow-hidden rounded-xl border border-brand-light/20 bg-cream"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.images[0]?.src ?? ""}
          alt={product.images[0]?.alt ?? product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 200px"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-warm-brown">{product.name}</h3>
        <p className="mt-1 text-xs text-text-muted line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
