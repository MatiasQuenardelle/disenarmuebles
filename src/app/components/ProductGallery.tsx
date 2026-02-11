"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/products/genesis/hero.jpeg", alt: "Base Box Génesis - Vista completa con colchón" },
  { src: "/products/genesis/cajones-abiertos.jpeg", alt: "Base Box Génesis - Cajones y zapatero abiertos" },
  { src: "/products/genesis/baulera-abierta.jpeg", alt: "Base Box Génesis - Baulera central abierta" },
  { src: "/products/genesis/baulera-detalle.jpeg", alt: "Base Box Génesis - Detalle del pistón neumático" },
  { src: "/products/genesis/estructura-frontal.jpeg", alt: "Base Box Génesis - Estructura frontal" },
  { src: "/products/genesis/estructura-superior.jpeg", alt: "Base Box Génesis - Vista superior" },
  { src: "/products/genesis/estructura-completa.jpeg", alt: "Base Box Génesis - Estructura completa" },
];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
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
                ? "ring-2 ring-zinc-900 ring-offset-2 dark:ring-white dark:ring-offset-zinc-950"
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
