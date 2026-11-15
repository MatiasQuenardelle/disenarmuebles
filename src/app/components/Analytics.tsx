"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 del sitio público, para el panel de analítica de Nubera (propiedad `564440578`, cuenta
 * Nubera). Va en el layout de `(store)`, así /admin no se mide.
 *
 * Las navegaciones con `next/link` no recargan la página: las cuenta la medición mejorada de
 * GA4 ("cambios de página según el historial"), que viene prendida en el stream.
 */
const TAG_ID = "G-J58HWJSTG2";

export function Analytics() {
  useEffect(() => {
    // Un listener delegado mide los toques a WhatsApp y teléfono sin tocar cada botón. Es el
    // evento `generate_lead` con `method`, que el panel usa para contar consultas por canal.
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const href = target.closest("a")?.getAttribute("href");
      if (!href) return;

      if (href.startsWith("https://wa.me/")) {
        window.gtag?.("event", "generate_lead", { method: "whatsapp", send_to: TAG_ID });
      } else if (href.startsWith("tel:")) {
        window.gtag?.("event", "generate_lead", { method: "phone", send_to: TAG_ID });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${TAG_ID}');`,
        }}
      />
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
