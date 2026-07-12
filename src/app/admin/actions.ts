"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSessionToken, requireAdmin, SESSION_COOKIE } from "@/lib/auth";
import { sql } from "@/lib/db";
import type { DeliveryOption, ProductImage, SiteInfo, Spec, Stat } from "@/data/types";

export type FormState = { error: string } | null;

function revalidateStore() {
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  const ok =
    email === (process.env.ADMIN_EMAIL ?? "").toLowerCase() &&
    bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH ?? "");

  if (!ok) {
    await new Promise((r) => setTimeout(r, 500));
    return { error: "Email o contraseña incorrectos" };
  }

  const token = await createSessionToken();
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/admin");
}

export async function logout(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/login");
}

// --- Products ---

export type ProductInput = {
  id?: number;
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
  price: string;
  sizes: string[];
  brand: string;
  variant: string;
  subtype: string;
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};

function isUniqueViolation(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code: string }).code === "23505"
  );
}

export async function saveProduct(input: ProductInput): Promise<FormState> {
  await requireAdmin();

  const slug = input.slug.trim().toLowerCase();
  const name = input.name.trim();
  if (!name) return { error: "El nombre es obligatorio" };
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    return { error: "El slug solo puede tener letras minúsculas, números y guiones" };
  }
  if (!input.category) return { error: "La categoría es obligatoria" };

  const features = input.features.map((f) => f.trim()).filter(Boolean);
  const sizes = input.sizes.map((s) => s.trim()).filter(Boolean);
  const specs = input.specs.filter((s) => s.title.trim() || s.description.trim());
  const stats = input.stats.filter((s) => s.value.trim() || s.label.trim());
  const delivery = input.delivery.filter((d) => d.title.trim() || d.description.trim());
  const images = input.images.filter((img) => img.src.trim());
  const seoTitle = input.seoTitle.trim() || `${name} | Diseñar Muebles`;
  const seoDescription = input.seoDescription.trim() || input.shortDescription.trim();

  try {
    if (input.id) {
      const rows = await sql`
        UPDATE products SET
          slug = ${slug}, name = ${name}, subtitle = ${input.subtitle.trim()},
          category = ${input.category}, is_hero = ${input.isHero},
          short_description = ${input.shortDescription.trim()},
          long_description = ${input.longDescription.trim()},
          features = ${JSON.stringify(features)}::jsonb,
          specs = ${JSON.stringify(specs)}::jsonb,
          stats = ${JSON.stringify(stats)}::jsonb,
          delivery = ${JSON.stringify(delivery)}::jsonb,
          images = ${JSON.stringify(images)}::jsonb,
          price = ${input.price.trim() || null},
          sizes = ${sizes.length > 0 ? JSON.stringify(sizes) : null}::jsonb,
          brand = ${input.brand.trim() || null},
          variant = ${input.variant.trim() || null},
          subtype = ${input.subtype.trim() || null},
          related_slugs = ${JSON.stringify(input.relatedSlugs)}::jsonb,
          seo_title = ${seoTitle}, seo_description = ${seoDescription},
          updated_at = now()
        WHERE id = ${input.id}
        RETURNING id
      `;
      if (rows.length === 0) return { error: "Producto no encontrado" };
    } else {
      await sql`
        INSERT INTO products (
          slug, name, subtitle, category, is_hero, short_description, long_description,
          features, specs, stats, delivery, images, price, sizes, brand, variant, subtype,
          related_slugs, seo_title, seo_description, sort_order
        ) VALUES (
          ${slug}, ${name}, ${input.subtitle.trim()}, ${input.category}, ${input.isHero},
          ${input.shortDescription.trim()}, ${input.longDescription.trim()},
          ${JSON.stringify(features)}::jsonb, ${JSON.stringify(specs)}::jsonb,
          ${JSON.stringify(stats)}::jsonb, ${JSON.stringify(delivery)}::jsonb,
          ${JSON.stringify(images)}::jsonb, ${input.price.trim() || null},
          ${sizes.length > 0 ? JSON.stringify(sizes) : null}::jsonb,
          ${input.brand.trim() || null}, ${input.variant.trim() || null},
          ${input.subtype.trim() || null}, ${JSON.stringify(input.relatedSlugs)}::jsonb,
          ${seoTitle}, ${seoDescription},
          (SELECT COALESCE(MAX(sort_order), 0) + 10 FROM products)
        )
      `;
    }
  } catch (err) {
    if (isUniqueViolation(err)) {
      return { error: `Ya existe otro producto con el slug "${slug}"` };
    }
    throw err;
  }

  revalidateStore();
  redirect("/admin");
}

export async function deleteProduct(id: number): Promise<void> {
  await requireAdmin();
  await sql`DELETE FROM products WHERE id = ${id}`;
  revalidateStore();
  revalidatePath("/admin");
  redirect("/admin");
}

export async function moveProduct(id: number, direction: "up" | "down"): Promise<void> {
  await requireAdmin();
  const rows = await sql`SELECT id, sort_order FROM products ORDER BY sort_order, id`;
  const index = rows.findIndex((r) => r.id === id);
  const neighborIndex = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || neighborIndex < 0 || neighborIndex >= rows.length) return;

  const current = rows[index];
  const neighbor = rows[neighborIndex];
  let currentNew = neighbor.sort_order;
  const neighborNew = current.sort_order;
  if (currentNew === neighborNew) {
    // Break ties so the swap is visible
    currentNew = direction === "up" ? currentNew - 5 : currentNew + 5;
  }

  await sql.transaction([
    sql`UPDATE products SET sort_order = ${currentNew} WHERE id = ${current.id}`,
    sql`UPDATE products SET sort_order = ${neighborNew} WHERE id = ${neighbor.id}`,
  ]);

  revalidateStore();
  revalidatePath("/admin");
}

// --- Site settings ---

export async function saveSiteInfo(info: SiteInfo): Promise<FormState> {
  await requireAdmin();

  if (!info.name.trim()) return { error: "El nombre del negocio es obligatorio" };
  if (!/^\d{8,15}$/.test(info.whatsapp.trim())) {
    return { error: "El WhatsApp debe tener solo números, con código de país (ej: 543512305102)" };
  }
  if (!info.heroImage.trim()) return { error: "La imagen de portada es obligatoria" };

  const clean: SiteInfo = {
    ...info,
    name: info.name.trim(),
    tagline: info.tagline.trim(),
    heroHeading: info.heroHeading.trim(),
    heroDescription: info.heroDescription.trim(),
    heroImage: info.heroImage.trim(),
    whatsapp: info.whatsapp.trim(),
    whatsappDisplay: info.whatsappDisplay.trim(),
    phone: info.phone.trim(),
    address: info.address.trim(),
    city: info.city.trim(),
    hours: info.hours.trim(),
    paymentMethods: info.paymentMethods.map((m) => m.trim()).filter(Boolean),
    socialMedia: {
      instagram: info.socialMedia.instagram?.trim() || undefined,
    },
  };

  await sql`
    UPDATE site_settings SET value = ${JSON.stringify(clean)}::jsonb, updated_at = now()
    WHERE key = 'site_info'
  `;

  revalidateStore();
  revalidatePath("/admin/configuracion");
  return null;
}
