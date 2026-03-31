import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";

export function HeroProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.category}/${product.slug}`}
      className="card-premium group overflow-hidden rounded-2xl border border-brand-light/20 bg-cream"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        {product.images[0]?.src ? (
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt ?? product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-light/40">
            <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
          </div>
        )}
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
      <div className="relative aspect-square w-full overflow-hidden bg-cream-dark">
        {product.images[0]?.src ? (
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt ?? product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 200px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-light/40">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
          </div>
        )}
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
