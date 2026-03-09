import type { Metadata } from "next";
import { siteInfo, valueProps } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros | Diseñar Muebles",
  description:
    "Conocé Diseñar Muebles. Fábrica argentina de camas y muebles de alta calidad en Buenos Aires.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Sobre Nosotros
          </p>
          <h1 className="mb-6 text-3xl font-bold text-warm-brown sm:text-4xl">
            {siteInfo.name}
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            Somos una fábrica argentina dedicada a la producción de camas y
            muebles de alta calidad. Con años de experiencia en el rubro,
            ofrecemos productos que combinan diseño, confort y durabilidad.
            Cada mueble es fabricado con materiales premium y pensado para
            optimizar los espacios de tu hogar.
          </p>
        </div>
      </section>

      <section className="border-y border-brand-light/30 bg-cream-dark px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-warm-brown">
            Nuestro Compromiso
          </h2>
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>
              En Diseñar Muebles trabajamos con un solo objetivo: que cada
              producto que sale de nuestra fábrica supere las expectativas de
              nuestros clientes. Desde la selección de materiales hasta el
              armado final en tu hogar, cuidamos cada detalle.
            </p>
            <p>
              Utilizamos MDF de primera calidad, herrajes metálicos reforzados
              y terminaciones premium. Nuestros productos se entregan armados
              y listos para usar, sin necesidad de instalación.
            </p>
            <p>
              Estamos ubicados en {siteInfo.address} y realizamos entregas con
              armado incluido. Todos nuestros productos cuentan con 12 meses
              de garantía en estructura y mecanismos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
