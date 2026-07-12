import { notFound } from "next/navigation";
import { getAdminProduct, getAdminProducts } from "@/lib/queries";
import ProductForm from "../../../components/ProductForm";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  if (!Number.isInteger(productId)) notFound();

  const [product, products] = await Promise.all([
    getAdminProduct(productId),
    getAdminProducts(),
  ]);
  if (!product) notFound();

  const relatedOptions = products.map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-warm-brown">{product.name}</h1>
        <a
          href={`/productos/${product.category}/${product.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted transition-colors hover:text-brand"
        >
          Ver en el sitio ↗
        </a>
      </div>
      <ProductForm initial={product} relatedOptions={relatedOptions} />
    </>
  );
}
