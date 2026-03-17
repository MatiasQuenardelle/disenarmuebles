import type { SiteInfo, ValueProp } from "./types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://disenarmuebles.com.ar";

export const siteInfo: SiteInfo = {
  name: "Diseñar Muebles",
  tagline: "Fábrica de Muebles",
  heroHeading: "Muebles con diseño y calidad argentina",
  heroDescription:
    "Fabricamos camas, sommiers y muebles funcionales con los mejores materiales. Diseño pensado para optimizar cada espacio de tu hogar.",
  heroImage: "/products/genesis/hero.jpeg",
  whatsapp: "543512305102",
  whatsappDisplay: "+54 0351 230-5102",
  phone: "+54 0351 230-5102",
  address: "Av. Castro Barros 931, Córdoba, Argentina",
  city: "Córdoba",
  googleMapsUrl: "https://www.google.com/maps/place/Dise%C3%B1ar+Muebles/@-31.39698,-64.19971,17z/data=!4m2!3m1!1s0x9432a353e26cf433:0x37e4540d83fee0fb",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404!2d-64.19971!3d-31.39698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a353e26cf433%3A0x37e4540d83fee0fb!2sDise%C3%B1ar+Muebles!5e0!3m2!1ses!2sar",
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
