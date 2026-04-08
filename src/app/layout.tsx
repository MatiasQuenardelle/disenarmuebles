import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Diseñar Muebles | Camas y Muebles en Argentina",
    template: "%s | Diseñar Muebles",
  },
  description:
    "Diseñar Muebles — Fábrica de camas, base box y muebles de calidad en Córdoba Capital. Fabricación propia, materiales premium, entrega a domicilio.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Diseñar Muebles",
    title: "Diseñar Muebles | Camas y Muebles en Argentina",
    description:
      "Fábrica de camas, base box y muebles de calidad en Córdoba Capital. Fabricación propia, materiales premium, entrega a domicilio.",
    images: [{ url: "/products/genesis/hero.jpeg", alt: "Diseñar Muebles" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
