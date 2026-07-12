import { getAdminProducts } from "@/lib/queries";
import ProductForm from "../../../components/ProductForm";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  const products = await getAdminProducts();
  const relatedOptions = products.map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <>
      <h1 className="mb-8 font-heading text-2xl font-semibold text-warm-brown">Nuevo producto</h1>
      <ProductForm relatedOptions={relatedOptions} />
    </>
  );
}
