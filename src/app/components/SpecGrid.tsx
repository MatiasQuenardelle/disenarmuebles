import type { Spec } from "@/data/types";

export default function SpecGrid({ specs }: { specs: Spec[] }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
          Especificaciones
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
          Ficha Técnica
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div
              key={spec.title}
              className="rounded-2xl border border-brand-light/30 bg-cream-dark p-6"
            >
              <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                {spec.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
