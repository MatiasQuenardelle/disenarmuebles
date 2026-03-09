"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/data/types";

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-dark">
        <Image
          src={images[selected].src}
          alt={images[selected].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={selected === 0}
        />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setSelected(i)}
            className={`relative aspect-square overflow-hidden rounded-lg transition-all ${
              selected === i
                ? "ring-2 ring-brand ring-offset-2 ring-offset-cream"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
