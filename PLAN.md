# Diseñar Muebles — Website Expansion Plan

## Current State

- Next.js 16, React 19, Tailwind 4, TypeScript
- Warm brand palette: gold (#B8956A), cream (#FAF7F2), deep brown (#3D2E1F)
- 2 pages: Landing (`/`) and 1 product page (`/productos/base-box-genesis`)
- 1 reusable component: `ProductGallery.tsx`
- All data hardcoded in JSX, no data layer
- Spanish language, Buenos Aires Argentina

## Phase 1: Foundation (Data Layer + Shared Layout + Navigation)

### 1.1 Data Architecture

Create `src/data/` with typed TypeScript data files:

| File | Purpose |
|------|---------|
| `types.ts` | Product, Category, Testimonial, FAQ types |
| `products.ts` | All products with specs, images, features, related items |
| `categories.ts` | Category metadata + helper functions |
| `site.ts` | Business info (WhatsApp, address, hours, payment methods) |
| `testimonials.ts` | Customer testimonials |
| `faq.ts` | Frequently asked questions |
| `helpers.ts` | `getProductBySlug()`, `getHeroProducts()`, `getComplementaryProducts()`, etc. |

Key types:

- **Product** — slug, name, subtitle, category, isHero, shortDescription, longDescription, features[], specs[], stats[], delivery[], images[], price?, sizes?, relatedSlugs[], seo
- **CategoryMeta** — slug, name, description, seo
- **Testimonial** — name, text, product?
- **FAQ** — question, answer

### 1.2 Shared Layout & Navigation

Create a route group `(store)/` for shared header/footer:

```
src/app/(store)/
  layout.tsx              — shared Header + Footer
  page.tsx                — landing page (home)
  productos/...
  nosotros/...
  contacto/...
  preguntas-frecuentes/...
```

Components to build:

- **`Header.tsx`** — extract from current pages, add category dropdowns + mobile hamburger menu
- **`MobileMenu.tsx`** — slide-out menu (client component)
- **`Footer.tsx`** — extract + expand with columns: About, Categories, Contact, Payment methods
- **`Logo.tsx`** — the "Diseñar / MUEBLES" brand mark
- **`WhatsAppButton.tsx`** — floating green button (bottom-right), always visible on every page

### 1.3 Route Structure

```
src/app/(store)/
  layout.tsx
  page.tsx                          — landing page
  productos/
    page.tsx                        — full catalog with filtering
    [category]/
      page.tsx                      — category listing
      [slug]/
        page.tsx                    — individual product page
  nosotros/
    page.tsx                        — about us
  contacto/
    page.tsx                        — dedicated contact page
  preguntas-frecuentes/
    page.tsx                        — FAQ page
```

---

## Phase 2: Product Pages & Catalog

### 2.1 Dynamic Product Pages

Replace hardcoded `/productos/base-box-genesis/page.tsx` with dynamic `[category]/[slug]/page.tsx`:

- `generateStaticParams()` for static builds from data files
- `generateMetadata()` for dynamic SEO
- Hero products (isHero=true): full treatment — gallery, stats bar, specs grid, delivery info, related products
- Complementary products (isHero=false): simplified layout — gallery, description, specs, WhatsApp CTA

### 2.2 Catalog Page (`/productos`)

- Page header ("Nuestros Productos")
- Category filter tabs (horizontal scrollable pills)
- Product grid mixing hero and compact cards
- Client-side filtering with URL search params (`?categoria=base-box`)

### 2.3 Category Pages (`/productos/[category]`)

- Pre-filtered catalog for one category
- Category name + description from data
- SEO metadata from CategoryMeta

### 2.4 Shared Components

| Component | Description |
|-----------|-------------|
| `ProductCard.tsx` | Two variants: **hero** (large, for bed sets) and **compact** (small, for accessories) |
| `ProductGallery.tsx` | Refactor existing — accept images as props instead of hardcoded |
| `Breadcrumbs.tsx` | Generic breadcrumb from items array |
| `StatBar.tsx` | Reusable stats row (capacity, warranty, modules) |
| `SpecGrid.tsx` | Technical specification cards grid |
| `ProductCTA.tsx` | WhatsApp CTA pre-filled with product name |
| `RelatedProducts.tsx` | Cross-sell row using relatedSlugs |

---

## Phase 3: Landing Page Overhaul

Restructure homepage into data-driven sections:

1. **Hero** — keep current design, pull from `site.ts`
2. **Value Props** — keep 4-column grid, pull from data
3. **Hero Products Grid** — 4-6 bed sets with `ProductCard` hero variant (biggest visual upgrade)
4. **"Complementa tu dormitorio"** — horizontal scrollable strip of compact ProductCards for accessories
5. **Testimonials** — 3-4 customer quotes in card grid
6. **About** — condensed version of current section
7. **FAQ Preview** — 3-4 expandable accordion questions, link to full FAQ page
8. **WhatsApp CTA** — replace the dead contact form with direct WhatsApp block

---

## Phase 4: Complementary Product Handling

- Compact `ProductCard` variant for nightstands, headboards, protectors, pillows
- Simplified product page template for non-hero items
- "Complementa tu dormitorio" section on every hero product page for cross-selling
- `isHero` flag controls which template renders

---

## Phase 5: SEO & Technical

- **JSON-LD structured data**: `Product` schema on product pages, `LocalBusiness` on home, `FAQPage` on FAQ
- **`src/app/sitemap.ts`** — dynamic sitemap from product/category data
- **`src/app/robots.ts`** — standard robots configuration
- **Dynamic Open Graph** — product hero images as OG images
- **Dedicated pages**: `/nosotros`, `/contacto`, `/preguntas-frecuentes`

---

## Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| TypeScript data files, no CMS | 10-20 products, type-safe, zero infrastructure, instant builds |
| WhatsApp as primary CTA | How Argentine furniture stores actually sell |
| `[category]/[slug]` URL structure | SEO-friendly URLs + natural breadcrumbs |
| `generateStaticParams()` everywhere | Fully static, edge-deployable, zero cold starts |
| Route group `(store)` | Shared layout without URL nesting |
| Client components only where needed | Gallery, mobile menu, accordion, catalog filters — everything else server-rendered |

---

## Implementation Order

```
Phase 1 (Foundation)  -->  Phase 2 (Products & Catalog)  -->  Phase 3 (Landing Page)
                                                           -->  Phase 4 (Complementary Products)
                                                           -->  Phase 5 (SEO)
```

Phase 1 unblocks everything. Phase 2 is the highest-impact work. Phases 3-5 can overlap.
