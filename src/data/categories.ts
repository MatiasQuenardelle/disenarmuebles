import type { CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "base-box",
    name: "Base Box",
    description:
      "Bases box con almacenamiento integrado. Cajones, bauleras y espacio inteligente para tu dormitorio.",
    seo: {
      title: "Base Box con Almacenamiento | Diseñar Muebles",
      description:
        "Bases box funcionales con cajones y bauleras. Fabricación propia, materiales premium y entrega con armado en Buenos Aires.",
    },
  },
  {
    slug: "respaldos",
    name: "Respaldos",
    description:
      "Respaldos tapizados y de madera para complementar tu cama. Diseños modernos y clásicos.",
    seo: {
      title: "Respaldos para Camas | Diseñar Muebles",
      description:
        "Respaldos tapizados y de madera para tu dormitorio. Diseños modernos, fabricación propia en Buenos Aires.",
    },
  },
  {
    slug: "mesas-de-luz",
    name: "Mesas de Luz",
    description:
      "Mesas de luz modernas y funcionales. El complemento perfecto para tu dormitorio.",
    seo: {
      title: "Mesas de Luz | Diseñar Muebles",
      description:
        "Mesas de luz modernas y funcionales. Fabricación propia, entrega con armado en Buenos Aires.",
    },
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    description:
      "Protectores de colchón, almohadas y accesorios para completar tu descanso.",
    seo: {
      title: "Accesorios para Dormitorio | Diseñar Muebles",
      description:
        "Protectores de colchón, almohadas y accesorios de calidad. Complementá tu dormitorio con Diseñar Muebles.",
    },
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
