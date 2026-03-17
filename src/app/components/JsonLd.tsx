import type { Product } from "@/data/types";
import type { FAQ } from "@/data/types";
import { siteInfo, SITE_URL } from "@/data/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: siteInfo.name,
    description: siteInfo.tagline,
    url: SITE_URL,
    telephone: siteInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteInfo.city,
      addressCountry: "AR",
    },
    openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
    paymentAccepted: siteInfo.paymentMethods.join(", "),
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `${SITE_URL}${img.src}`),
    brand: {
      "@type": "Brand",
      name: siteInfo.name,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/productos/${product.category}/${product.slug}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "ARS",
      seller: {
        "@type": "Organization",
        name: siteInfo.name,
      },
    },
    ...(product.stats.find((s) => s.label === "Meses de garantía") && {
      hasWarranty: {
        "@type": "WarrantyPromise",
        durationOfWarranty: {
          "@type": "QuantitativeValue",
          value: product.stats.find((s) => s.label === "Meses de garantía")?.value,
          unitCode: "MON",
        },
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
