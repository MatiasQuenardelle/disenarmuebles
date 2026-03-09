import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/productos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/preguntas-frecuentes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/productos/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/productos/${product.category}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: product.isHero ? 0.9 : 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
