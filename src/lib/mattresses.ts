import type { Product } from "@/data/types";

// Display order requested by the client; any other brand goes last, in catalog order.
export const MATTRESS_BRANDS = ["Cannon", "King Koil", "Inducol", "Elegante", "Deseo"];

export const MATTRESS_VARIANTS = ["Espuma", "Resorte"] as const;

export interface MattressBrandGroup {
  brand: string;
  id: string;
  variants: { variant: string; products: Product[] }[];
}

// "Resorte Pocket" and similar belong under "Resorte"; anything else without a known variant goes under "Otros".
function variantGroup(variant?: string): string {
  const v = variant?.toLowerCase() ?? "";
  if (v.startsWith("espuma")) return "Espuma";
  if (v.startsWith("resorte")) return "Resorte";
  return "Otros";
}

export function brandAnchor(brand: string): string {
  return brand
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function groupMattresses(products: Product[]): MattressBrandGroup[] {
  const byBrand = new Map<string, Product[]>();
  for (const p of products) {
    const brand = p.brand?.trim() || "Otras marcas";
    byBrand.set(brand, [...(byBrand.get(brand) ?? []), p]);
  }

  const rank = (b: string) => {
    const i = MATTRESS_BRANDS.indexOf(b);
    return i === -1 ? MATTRESS_BRANDS.length : i;
  };

  return [...byBrand.entries()]
    .sort(([a], [b]) => rank(a) - rank(b))
    .map(([brand, items]) => ({
      brand,
      id: brandAnchor(brand),
      variants: [...MATTRESS_VARIANTS, "Otros"]
        .map((variant) => ({
          variant,
          products: items.filter((p) => variantGroup(p.variant) === variant),
        }))
        .filter((v) => v.products.length > 0),
    }));
}
