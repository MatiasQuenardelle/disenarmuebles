import { getSiteInfo } from "@/lib/queries";
import SiteInfoForm from "../../components/SiteInfoForm";

export const dynamic = "force-dynamic";

export default async function ConfiguracionPage() {
  const siteInfo = await getSiteInfo();

  return (
    <>
      <h1 className="mb-2 font-heading text-2xl font-semibold text-warm-brown">Configuración</h1>
      <p className="mb-8 text-sm text-text-muted">
        Portada de la página principal e información del negocio.
      </p>
      <SiteInfoForm initial={siteInfo} />
    </>
  );
}
