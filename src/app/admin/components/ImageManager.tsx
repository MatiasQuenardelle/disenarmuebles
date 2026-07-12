"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import type { ProductImage } from "@/data/types";

export async function uploadImage(file: File, folder: string): Promise<string> {
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const blob = await upload(`${folder}/${safeName}`, file, {
    access: "public",
    handleUploadUrl: "/api/admin/upload",
  });
  return blob.url;
}

export default function ImageManager({
  images,
  onChange,
  folder,
}: {
  images: ProductImage[];
  onChange: (images: ProductImage[]) => void;
  folder: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded: ProductImage[] = [];
      for (const file of Array.from(files)) {
        const url = await uploadImage(file, folder);
        uploaded.push({ src: url, alt: "" });
      }
      onChange([...images, ...uploaded]);
    } catch {
      setError("Error al subir la imagen. Intentá de nuevo.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= images.length) return;
    const next = [...images];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div>
      <p className="mb-1 block text-sm font-medium text-warm-brown">Imágenes</p>
      <p className="mb-3 text-xs text-text-muted">
        La primera imagen es la principal (se muestra en el catálogo y al compartir el link).
      </p>

      <div className="space-y-3">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="flex items-center gap-3 rounded-xl border border-brand-light/30 bg-white p-3"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-cream-dark">
              <Image src={img.src} alt={img.alt || "Imagen del producto"} fill className="object-cover" sizes="80px" />
            </div>
            <div className="min-w-0 flex-1">
              {i === 0 && (
                <span className="mb-1 inline-block rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                  Principal
                </span>
              )}
              <input
                type="text"
                value={img.alt}
                onChange={(e) => {
                  const next = [...images];
                  next[i] = { ...img, alt: e.target.value };
                  onChange(next);
                }}
                placeholder="Descripción de la imagen (para Google y accesibilidad)"
                className="w-full rounded-lg border border-brand-light/40 px-3 py-1.5 text-sm text-warm-brown outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-shrink-0 gap-1">
              <button
                type="button"
                onClick={() => move(i, -1)}
                disabled={i === 0}
                aria-label="Subir imagen"
                className="rounded border border-brand-light/40 px-2.5 py-1.5 text-xs text-text-muted hover:border-brand disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => move(i, 1)}
                disabled={i === images.length - 1}
                aria-label="Bajar imagen"
                className="rounded border border-brand-light/40 px-2.5 py-1.5 text-xs text-text-muted hover:border-brand disabled:opacity-30"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => onChange(images.filter((_, j) => j !== i))}
                aria-label="Quitar imagen"
                className="rounded border border-red-200 px-2.5 py-1.5 text-xs text-red-500 hover:border-red-400"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="mt-3 rounded-full border border-brand-light/40 px-5 py-2 text-sm font-medium text-brand hover:border-brand disabled:opacity-60"
      >
        {uploading ? "Subiendo..." : "+ Agregar imágenes"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
