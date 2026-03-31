import type { CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "base-box",
    name: "Bases Box Sommier",
    description:
      "Bases box con almacenamiento integrado. Cajones, bauleras y espacio inteligente para tu dormitorio.",
    seo: {
      title: "Bases Box Sommier | Diseñar Muebles",
      description:
        "Bases box funcionales con cajones y bauleras. 5 diseños, fabricación propia, materiales premium y entrega con armado.",
    },
  },
  {
    slug: "respaldos-madera",
    name: "Respaldos Madera",
    description:
      "Respaldos de madera para tu cama. Diseños modernos y naturales que complementan cualquier dormitorio.",
    seo: {
      title: "Respaldos de Madera | Diseñar Muebles",
      description:
        "Respaldos de madera para camas. 3 diseños modernos, fabricación propia. Diseñar Muebles.",
    },
  },
  {
    slug: "mesitas-de-luz",
    name: "Mesitas de Luz",
    description:
      "Mesitas de luz modernas y funcionales. El complemento perfecto para tu dormitorio.",
    seo: {
      title: "Mesitas de Luz | Diseñar Muebles",
      description:
        "Mesitas de luz modernas y funcionales. 5 diseños, fabricación propia, entrega con armado.",
    },
  },
  {
    slug: "respaldos-tapizados",
    name: "Respaldos Tapizados",
    description:
      "Respaldos tapizados en tela premium para tu cama. Confort y elegancia en múltiples diseños y colores.",
    seo: {
      title: "Respaldos Tapizados | Diseñar Muebles",
      description:
        "Respaldos tapizados para camas. 7 diseños, tela premium antimancha, fabricación propia.",
    },
  },
  {
    slug: "productos-laqueados",
    name: "Productos Laqueados",
    description:
      "Muebles con terminación laqueada de alta calidad. Cunas, cuchetas, camas, racks y más con acabado premium.",
    seo: {
      title: "Productos Laqueados | Diseñar Muebles",
      description:
        "Muebles laqueados: cunas, cuchetas, camas, racks, cómodas y más. Acabado premium, fabricación propia.",
    },
  },
  {
    slug: "comodas",
    name: "Cómodas",
    description:
      "Cómodas cajoneras de diseño minimalista. 6 cajones con guías telescópicas, fabricadas en MDF con canto ABS.",
    seo: {
      title: "Cómodas Cajoneras | Diseñar Muebles",
      description:
        "Cómodas cajoneras de 6 cajones con guías telescópicas reforzadas. 1 diseño en 3 medidas. Fabricación propia.",
    },
  },
  {
    slug: "sillones",
    name: "Sillones",
    description:
      "Sillones comunes y sofá cama. Diseños modernos con estructura reforzada y tapizado premium.",
    seo: {
      title: "Sillones y Sofá Cama | Diseñar Muebles",
      description:
        "Sillones comunes y sofá cama. 6 diseños, tapizado premium, fabricación propia.",
    },
  },
  {
    slug: "colchones",
    name: "Colchones",
    description:
      "Colchones de espuma y resorte de las mejores marcas: Taurus, Elegante, Deseo y Canon. Todas las medidas disponibles.",
    seo: {
      title: "Colchones | Diseñar Muebles",
      description:
        "Colchones de espuma y resorte. Marcas: Taurus, Elegante, Deseo, Canon. Todas las medidas, envío a domicilio.",
    },
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
