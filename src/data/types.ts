export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  isHero: boolean;
  shortDescription: string;
  longDescription: string;
  features: string[];
  specs: Spec[];
  stats: Stat[];
  delivery: DeliveryOption[];
  images: ProductImage[];
  price?: string;
  sizes?: string[];
  relatedSlugs: string[];
  seo: SEO;
}

export interface Spec {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface DeliveryOption {
  title: string;
  description: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
  seo: SEO;
}

export interface Testimonial {
  name: string;
  text: string;
  product?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  heroHeading: string;
  heroDescription: string;
  heroImage: string;
  whatsapp: string;
  whatsappDisplay: string;
  phone: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  hours: string;
  paymentMethods: string[];
  socialMedia: {
    instagram?: string;
  };
}

export interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}
