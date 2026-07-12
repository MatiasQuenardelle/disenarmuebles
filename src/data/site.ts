import type { ValueProp } from "./types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://disenarmuebles.com.ar";

export const valueProps: ValueProp[] = [
  {
    title: "Fabricación Propia",
    description: "Producción directa sin intermediarios",
    icon: "🏭",
  },
  {
    title: "Materiales Premium",
    description: "MDF de primera calidad y herrajes reforzados",
    icon: "✨",
  },
  {
    title: "Entrega a Domicilio",
    description: "Lo llevamos directo a tu hogar",
    icon: "🚚",
  },
  {
    title: "Garantía 12 Meses",
    description: "Respaldo total en estructura y mecanismos",
    icon: "🛡️",
  },
];
