import type { SiteInfo, ValueProp } from "./types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://disenarmuebles.com.ar";

export const siteInfo: SiteInfo = {
  name: "Diseñar Muebles",
  tagline: "Fabricamos muebles que transforman tu hogar",
  whatsapp: "5491112345678",
  whatsappDisplay: "+54 9 11 1234-5678",
  address: "Buenos Aires, Argentina",
  city: "Buenos Aires",
  hours: "Lunes a Viernes 9:00 - 18:00 | Sábados 9:00 - 13:00",
  paymentMethods: [
    "Transferencia bancaria",
    "Efectivo",
    "Tarjeta de crédito (hasta 12 cuotas)",
    "Mercado Pago",
  ],
  socialMedia: {
    instagram: "https://www.instagram.com/disenar_muebles",
  },
};

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
    title: "Entrega con Armado",
    description: "Lo llevamos y armamos en tu hogar",
    icon: "🚚",
  },
  {
    title: "Garantía 12 Meses",
    description: "Respaldo total en estructura y mecanismos",
    icon: "🛡️",
  },
];
