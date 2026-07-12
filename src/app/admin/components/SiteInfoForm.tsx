"use client";

import { useRef, useState, useTransition } from "react";
import Image from "next/image";
import type { SiteInfo } from "@/data/types";
import { saveSiteInfo } from "../actions";
import ArrayField from "./ArrayField";
import { uploadImage } from "./ImageManager";

const inputCls =
  "w-full rounded-lg border border-brand-light/40 bg-white px-3.5 py-2.5 text-sm text-warm-brown outline-none focus:border-brand";
const labelCls = "mb-1.5 block text-sm font-medium text-warm-brown";

export default function SiteInfoForm({ initial }: { initial: SiteInfo }) {
  const [form, setForm] = useState<SiteInfo>(initial);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [pending, startTransition] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof SiteInfo>(key: K, value: SiteInfo[K]) => {
    setSaved(false);
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleHeroUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadImage(files[0], "site");
      set("heroImage", url);
    } catch {
      setError("Error al subir la imagen. Intentá de nuevo.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const submit = () => {
    setError(null);
    setSaved(false);
    startTransition(async () => {
      const result = await saveSiteInfo(form);
      if (result?.error) setError(result.error);
      else setSaved(true);
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
      {/* Portada */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-5 font-heading text-lg font-semibold text-warm-brown">
          Portada de la página principal
        </h2>
        <div className="space-y-4">
          <div>
            <label className={labelCls}>Foto de portada</label>
            <div className="flex items-center gap-4">
              <div className="relative aspect-[4/3] w-48 overflow-hidden rounded-xl border border-brand-light/30 bg-white">
                {form.heroImage && (
                  <Image
                    src={form.heroImage}
                    alt="Foto de portada"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                )}
              </div>
              <div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => handleHeroUpload(e.target.files)}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="rounded-full border border-brand-light/40 px-5 py-2 text-sm font-medium text-brand hover:border-brand disabled:opacity-60"
                >
                  {uploading ? "Subiendo..." : "Cambiar foto"}
                </button>
                <p className="mt-2 text-xs text-text-muted">
                  Ideal: foto horizontal de buena calidad (mínimo 1200px de ancho).
                </p>
              </div>
            </div>
          </div>
          <div>
            <label className={labelCls}>Título principal</label>
            <input
              type="text"
              value={form.heroHeading}
              onChange={(e) => set("heroHeading", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Descripción</label>
            <textarea
              rows={3}
              value={form.heroDescription}
              onChange={(e) => set("heroDescription", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Frase superior (tagline)</label>
            <input
              type="text"
              value={form.tagline}
              onChange={(e) => set("tagline", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <h2 className="mb-5 font-heading text-lg font-semibold text-warm-brown">
          Contacto y negocio
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>WhatsApp (solo números, con código de país)</label>
            <input
              type="text"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              placeholder="543512305102"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>WhatsApp (cómo se muestra)</label>
            <input
              type="text"
              value={form.whatsappDisplay}
              onChange={(e) => set("whatsappDisplay", e.target.value)}
              placeholder="+54 0351 230-5102"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Teléfono</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Instagram (link completo)</label>
            <input
              type="text"
              value={form.socialMedia.instagram ?? ""}
              onChange={(e) => set("socialMedia", { instagram: e.target.value })}
              placeholder="https://www.instagram.com/..."
              className={inputCls}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Dirección</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Ciudad</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Horarios</label>
            <input
              type="text"
              value={form.hours}
              onChange={(e) => set("hours", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </section>

      {/* Medios de pago */}
      <section className="rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
        <ArrayField
          label="Medios de pago (se muestran en el pie de página y en Contacto)"
          items={form.paymentMethods}
          onChange={(paymentMethods) => set("paymentMethods", paymentMethods)}
          newItem={() => ""}
          addLabel="Agregar medio de pago"
          renderItem={(item, update) => (
            <input
              type="text"
              value={item}
              onChange={(e) => update(e.target.value)}
              placeholder="Ej: Mercado Pago"
              className={inputCls}
            />
          )}
        />
      </section>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      {saved && (
        <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Cambios guardados. Ya están visibles en el sitio.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-brand rounded-full px-10 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Guardando..." : "Guardar cambios"}
      </button>
    </form>
  );
}
