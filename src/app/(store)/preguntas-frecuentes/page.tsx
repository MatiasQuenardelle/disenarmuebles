import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import FAQAccordion from "@/app/components/FAQAccordion";
import { FAQPageJsonLd } from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Diseñar Muebles",
  description:
    "Respondemos tus dudas sobre entrega, armado, garantía, medios de pago y envíos. Diseñar Muebles, Buenos Aires.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <FAQPageJsonLd faqs={faqs} />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
            FAQ
          </p>
          <h1 className="mb-12 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
            Preguntas Frecuentes
          </h1>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
