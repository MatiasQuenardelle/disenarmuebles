import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";

export function HeroProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.category}/${product.slug}`}
      className="group overflow-hidden rounded-2xl border border-brand-light/30 bg-cream transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.images[0]?.src ?? ""}
          alt={product.images[0]?.alt ?? product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brand">
          {product.subtitle}
        </p>
        <h3 className="mb-2 text-lg font-bold text-warm-brown">{product.name}</h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {product.shortDescription}
        </p>
        <span className="mt-4 inline-block text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark">
          Ver producto →
        </span>
      </div>
    </Link>
  );
}

export function CompactProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.category}/${product.slug}`}
      className="group flex-shrink-0 overflow-hidden rounded-xl border border-brand-light/30 bg-cream transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.images[0]?.src ?? ""}
          alt={product.images[0]?.alt ?? product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
