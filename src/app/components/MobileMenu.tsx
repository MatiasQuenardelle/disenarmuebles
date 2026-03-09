"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-warm-brown"
        aria-label="Abrir menú"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-cream shadow-xl">
            <div className="flex items-center justify-between border-b border-brand-light/30 px-6 py-4">
              <span className="font-semibold text-warm-brown">Menú</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <svg className="h-6 w-6 text-warm-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 py-6">
              <Link href="/" onClick={() => setOpen(false)} className="py-3 text-warm-brown font-medium hover:text-brand transition-colors">
                Inicio
              </Link>
              <Link href="/productos" onClick={() => setOpen(false)} className="py-3 text-warm-brown font-medium hover:text-brand transition-colors">
                Todos los Productos
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/productos/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-2 pl-4 text-sm text-text-muted hover:text-brand transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
              <Link href="/nosotros" onClick={() => setOpen(false)} className="py-3 text-warm-brown font-medium hover:text-brand transition-colors">
                Nosotros
              </Link>
              <Link href="/preguntas-frecuentes" onClick={() => setOpen(false)} className="py-3 text-warm-brown font-medium hover:text-brand transition-colors">
                Preguntas Frecuentes
              </Link>
              <Link href="/contacto" onClick={() => setOpen(false)} className="py-3 text-warm-brown font-medium hover:text-brand transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
