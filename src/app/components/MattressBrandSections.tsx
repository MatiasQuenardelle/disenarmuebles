import type { Product } from "@/data/types";
import { groupMattresses } from "@/lib/mattresses";
import { HeroProductCard, CompactProductCard } from "./ProductCard";

export default function MattressBrandSections({ products }: { products: Product[] }) {
  const groups = groupMattresses(products);

  return (
    <>
      {/* Brand jump links */}
      <nav
        aria-label="Marcas de colchones"
        className="mb-14 flex flex-wrap justify-center gap-2"
      >
        {groups.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="rounded-full border border-brand-light/40 bg-cream-dark px-4 py-2 text-sm font-medium text-warm-brown transition-colors hover:border-brand hover:text-brand"
          >
            {g.brand}
          </a>
        ))}
      </nav>

      <div className="space-y-20">
        {groups.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-28">
            <h2 className="mb-8 border-b border-brand-light/30 pb-3 font-heading text-2xl font-bold text-warm-brown sm:text-3xl">
              {g.brand}
            </h2>
            <div className="space-y-10">
              {g.variants.map((v) => (
                <div key={v.variant}>
                  {(g.variants.length > 1 || v.variant !== "Otros") && (
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                      {v.variant === "Otros" ? "Otros modelos" : v.variant}
                    </h3>
                  )}
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {v.products.map((product) =>
                      product.isHero ? (
                        <HeroProductCard key={product.slug} product={product} />
                      ) : (
                        <CompactProductCard key={product.slug} product={product} />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
