import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProducts } from "@/lib/queries";
import CatalogFilter from "@/app/components/CatalogFilter";
import CatalogGrid from "@/app/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Productos | Diseñar Muebles",
  description:
    "Explorá nuestro catálogo completo: bases box, respaldos, mesitas de luz, cómodas, sillones, colchones y productos laqueados. Fabricación propia, materiales premium.",
};

export default async function ProductosPage() {
  const products = await getAllProducts();

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
          Catálogo
        </p>
        <h1 className="mb-8 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
          Nuestros Productos
        </h1>

        <Suspense fallback={null}>
          <CatalogFilter />
          <CatalogGrid products={products} />
        </Suspense>
      </div>
    </section>
  );
}
