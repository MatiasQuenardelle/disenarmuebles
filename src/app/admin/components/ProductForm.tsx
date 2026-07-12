"use client";

import { useState, useTransition } from "react";
import { categories } from "@/data/categories";
import type { AdminProduct } from "@/lib/queries";
import { saveProduct, type ProductInput } from "../actions";
import ArrayField from "./ArrayField";
import ImageManager from "./ImageManager";
import DeleteButton from "./DeleteButton";

const inputCls =
  "w-full rounded-lg border border-brand-light/40 bg-white px-3.5 py-2.5 text-sm text-warm-brown outline-none focus:border-brand";
const labelCls = "mb-1.5 block text-sm font-medium text-warm-brown";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toInput(p?: AdminProduct): ProductInput {
  return {
    id: p?.id,
    slug: p?.slug ?? "",
    name: p?.name ?? "",
    subtitle: p?.subtitle ?? "",
    category: p?.category ?? categories[0].slug,
    isHero: p?.isHero ?? false,
    shortDescription: p?.shortDescription ?? "",
    longDescription: p?.longDescription ?? "",
    features: p?.features ?? [],
    specs: p?.specs ?? [],
    stats: p?.stats ?? [],
    delivery: p?.delivery ?? [],
    images: p?.images ?? [],
    price: p?.price ?? "",
    sizes: p?.sizes ?? [],
    brand: p?.brand ?? "",
    variant: p?.variant ?? "",
    subtype: p?.subtype ?? "",
    relatedSlugs: p?.relatedSlugs ?? [],
    seoTitle: p?.seo.title ?? "",
    seoDescription: p?.seo.description ?? "",
  };
}

export default function ProductForm({
  initial,
  relatedOptions,
}: {
  initial?: AdminProduct;
  relatedOptions: { slug: string; name: string }[];
}) {
  const isEdit = initial !== undefined;
  const [form, setForm] = useState<ProductInput>(() => toInput(initial));
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const set = <K extends keyof ProductInput>(key: K, value: ProductInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = () => {
    setError(null);
    startTransition(async () => {
      const result = await saveProduct(form);
      if (result?.error) setError(result.error);
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="space-y-8"
    >
      {/* Datos principales */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-5 font-heading text-lg font-semibold text-warm-brown">
          Datos principales
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelCls}>Nombre *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => {
                const name = e.target.value;
                setForm((f) => ({
                  ...f,
                  name,
                  slug: slugTouched ? f.slug : slugify(name),
                }));
              }}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Slug (URL) *</label>
            <input
              type="text"
              required
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                set("slug", e.target.value);
              }}
              className={inputCls}
            />
            <p className="mt-1 text-xs text-text-muted">
              disenarmuebles.com/productos/{form.category}/{form.slug || "..."}
            </p>
          </div>
          <div>
            <label className={labelCls}>Categoría *</label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              className={inputCls}
            >
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Subtítulo</label>
            <input
              type="text"
              value={form.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              className={inputCls}
            />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3 rounded-xl border border-brand-light/30 bg-white p-4">
            <input
              id="isHero"
              type="checkbox"
              checked={form.isHero}
              onChange={(e) => set("isHero", e.target.checked)}
              className="h-4 w-4 accent-[#B8956A]"
            />
            <label htmlFor="isHero" className="text-sm text-warm-brown">
              <span className="font-medium">Producto destacado</span> — aparece en la portada con
              ficha completa (especificaciones y entrega)
            </label>
          </div>
        </div>
      </section>

      {/* Descripciones */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-5 font-heading text-lg font-semibold text-warm-brown">Descripciones</h2>
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Descripción corta</label>
            <textarea
              rows={2}
              value={form.shortDescription}
              onChange={(e) => set("shortDescription", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Descripción larga</label>
            <textarea
              rows={5}
              value={form.longDescription}
              onChange={(e) => set("longDescription", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </section>

      {/* Imágenes */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <ImageManager
          images={form.images}
          onChange={(images) => set("images", images)}
          folder={`products/${form.slug || "nuevo"}`}
        />
      </section>

      {/* Características y medidas */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6 space-y-6">
        <ArrayField
          label="Características"
          items={form.features}
          onChange={(features) => set("features", features)}
          newItem={() => ""}
          addLabel="Agregar característica"
          renderItem={(item, update) => (
            <input
              type="text"
              value={item}
              onChange={(e) => update(e.target.value)}
              placeholder="Ej: 2 cajones con guías telescópicas"
              className={inputCls}
            />
          )}
        />
        <ArrayField
          label="Medidas disponibles"
          items={form.sizes}
          onChange={(sizes) => set("sizes", sizes)}
          newItem={() => ""}
          addLabel="Agregar medida"
          renderItem={(item, update) => (
            <input
              type="text"
              value={item}
              onChange={(e) => update(e.target.value)}
              placeholder="Ej: 2 Plazas (140x190)"
              className={inputCls}
            />
          )}
        />
      </section>

      {/* Especificaciones, stats y entrega */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6 space-y-6">
        <ArrayField
          label="Especificaciones técnicas"
          items={form.specs}
          onChange={(specs) => set("specs", specs)}
          newItem={() => ({ title: "", description: "" })}
          addLabel="Agregar especificación"
          renderItem={(item, update) => (
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                type="text"
                value={item.title}
                onChange={(e) => update({ ...item, title: e.target.value })}
                placeholder="Título (ej: MDF 18mm)"
                className={inputCls}
              />
              <input
                type="text"
                value={item.description}
                onChange={(e) => update({ ...item, description: e.target.value })}
                placeholder="Descripción"
                className={inputCls}
              />
            </div>
          )}
        />
        <ArrayField
          label="Números destacados"
          items={form.stats}
          onChange={(stats) => set("stats", stats)}
          newItem={() => ({ value: "", label: "" })}
          addLabel="Agregar número"
          renderItem={(item, update) => (
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                type="text"
                value={item.value}
                onChange={(e) => update({ ...item, value: e.target.value })}
                placeholder="Valor (ej: 600kg)"
                className={inputCls}
              />
              <input
                type="text"
                value={item.label}
                onChange={(e) => update({ ...item, label: e.target.value })}
                placeholder="Etiqueta (ej: Capacidad de carga)"
                className={inputCls}
              />
            </div>
          )}
        />
        <ArrayField
          label="Información de entrega"
          items={form.delivery}
          onChange={(delivery) => set("delivery", delivery)}
          newItem={() => ({ title: "", description: "" })}
          addLabel="Agregar item de entrega"
          renderItem={(item, update) => (
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                type="text"
                value={item.title}
                onChange={(e) => update({ ...item, title: e.target.value })}
                placeholder="Título (ej: Módulos Listos)"
                className={inputCls}
              />
              <input
                type="text"
                value={item.description}
                onChange={(e) => update({ ...item, description: e.target.value })}
                placeholder="Descripción"
                className={inputCls}
              />
            </div>
          )}
        />
      </section>

      {/* Datos opcionales */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-5 font-heading text-lg font-semibold text-warm-brown">
          Datos opcionales
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Precio</label>
            <input
              type="text"
              value={form.price}
              onChange={(e) => set("price", e.target.value)}
              placeholder="Se muestra solo si se completa"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Marca</label>
            <input
              type="text"
              value={form.brand}
              onChange={(e) => set("brand", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Variante</label>
            <input
              type="text"
              value={form.variant}
              onChange={(e) => set("variant", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Subtipo</label>
            <input
              type="text"
              value={form.subtype}
              onChange={(e) => set("subtype", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </section>

      {/* Productos relacionados */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-2 font-heading text-lg font-semibold text-warm-brown">
          Productos relacionados
        </h2>
        <p className="mb-4 text-xs text-text-muted">
          Se muestran al final de la página del producto. Si no elegís ninguno, se completan
          automáticamente con productos de la misma categoría.
        </p>
        <div className="grid max-h-64 gap-1 overflow-y-auto rounded-xl border border-brand-light/30 bg-white p-4 sm:grid-cols-2">
          {relatedOptions
            .filter((o) => o.slug !== form.slug)
            .map((o) => (
              <label key={o.slug} className="flex items-center gap-2 text-sm text-warm-brown">
                <input
                  type="checkbox"
                  checked={form.relatedSlugs.includes(o.slug)}
                  onChange={(e) =>
                    set(
                      "relatedSlugs",
                      e.target.checked
                        ? [...form.relatedSlugs, o.slug]
                        : form.relatedSlugs.filter((s) => s !== o.slug)
                    )
                  }
                  className="h-3.5 w-3.5 accent-[#B8956A]"
                />
                {o.name}
              </label>
            ))}
        </div>
      </section>

      {/* SEO */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-2 font-heading text-lg font-semibold text-warm-brown">SEO (Google)</h2>
        <p className="mb-4 text-xs text-text-muted">
          Si los dejás vacíos, se generan automáticamente con el nombre y la descripción corta.
        </p>
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Título para Google</label>
            <input
              type="text"
              value={form.seoTitle}
              onChange={(e) => set("seoTitle", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Descripción para Google</label>
            <textarea
              rows={2}
              value={form.seoDescription}
              onChange={(e) => set("seoDescription", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </section>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={pending}
          className="btn-brand rounded-full px-10 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Guardando..." : isEdit ? "Guardar cambios" : "Crear producto"}
        </button>
        {isEdit && initial && <DeleteButton id={initial.id} name={initial.name} />}
      </div>
    </form>
  );
}
