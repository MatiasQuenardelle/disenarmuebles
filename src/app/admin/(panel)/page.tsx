import Link from "next/link";
import Image from "next/image";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getAdminProducts } from "@/lib/queries";
import { moveProduct } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; cat?: string }>;
}) {
  const { q = "", cat = "" } = await searchParams;
  const allProducts = await getAdminProducts();

  const query = q.trim().toLowerCase();
  const products = allProducts.filter(
    (p) =>
      (!query || p.name.toLowerCase().includes(query) || p.slug.includes(query)) &&
      (!cat || p.category === cat)
  );
  const filtering = query !== "" || cat !== "";

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-warm-brown">Productos</h1>
          <p className="mt-1 text-sm text-text-muted">
            {allProducts.length} productos en el catálogo
          </p>
        </div>
        <Link
          href="/admin/productos/nuevo"
          className="btn-brand rounded-full px-6 py-2.5 text-sm font-semibold text-white"
        >
          + Nuevo producto
        </Link>
      </div>

      <form method="get" className="mb-6 flex flex-wrap gap-3">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Buscar por nombre..."
          className="w-64 rounded-full border border-brand-light/40 bg-white px-4 py-2 text-sm text-warm-brown outline-none focus:border-brand"
        />
        <select
          name="cat"
          defaultValue={cat}
          className="rounded-full border border-brand-light/40 bg-white px-4 py-2 text-sm text-warm-brown outline-none focus:border-brand"
        >
          <option value="">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-full border border-brand-light/40 px-5 py-2 text-sm font-medium text-brand hover:border-brand"
        >
          Filtrar
        </button>
        {filtering && (
          <Link
            href="/admin"
            className="self-center text-sm text-text-muted underline hover:text-brand"
          >
            Limpiar
          </Link>
        )}
      </form>

      <div className="overflow-hidden rounded-2xl border border-brand-light/20 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-brand-light/20 bg-cream-dark text-xs uppercase tracking-wide text-text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="px-4 py-3 font-medium">Categoría</th>
              <th className="px-4 py-3 font-medium">Destacado</th>
              <th className="px-4 py-3 font-medium">Imágenes</th>
              <th className="px-4 py-3 font-medium">Última edición</th>
              <th className="px-4 py-3 font-medium">Orden</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-light/10">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-cream/60">
                <td className="px-4 py-3">
                  <Link href={`/admin/productos/${p.id}`} className="flex items-center gap-3">
                    <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-cream-dark">
                      {p.images[0] && (
                        <Image
                          src={p.images[0].src}
                          alt={p.images[0].alt || p.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      )}
                    </div>
                    <span className="font-medium text-warm-brown">{p.name}</span>
                  </Link>
                </td>
                <td className="px-4 py-3 text-text-muted">
                  {getCategoryBySlug(p.category)?.name ?? p.category}
                </td>
                <td className="px-4 py-3">
                  {p.isHero && (
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                      Destacado
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-text-muted">{p.images.length}</td>
                <td className="px-4 py-3 text-text-muted">
                  {new Date(p.updatedAt).toLocaleDateString("es-AR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3">
                  {!filtering && (
                    <div className="flex gap-1">
                      <form action={moveProduct.bind(null, p.id, "up")}>
                        <button
                          type="submit"
                          aria-label="Subir en el orden"
                          className="rounded border border-brand-light/40 px-2 py-1 text-xs text-text-muted hover:border-brand"
                        >
                          ↑
                        </button>
                      </form>
                      <form action={moveProduct.bind(null, p.id, "down")}>
                        <button
                          type="submit"
                          aria-label="Bajar en el orden"
                          className="rounded border border-brand-light/40 px-2 py-1 text-xs text-text-muted hover:border-brand"
                        >
                          ↓
                        </button>
                      </form>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/productos/${p.id}`}
                    className="text-sm font-medium text-brand hover:text-brand-dark"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-text-muted">
                  No se encontraron productos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
