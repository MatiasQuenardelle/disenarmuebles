import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { getSiteInfo } from "@/lib/queries";

export default async function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteInfo = await getSiteInfo();

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer siteInfo={siteInfo} />
      <WhatsAppButton whatsapp={siteInfo.whatsapp} />
    </div>
  );
}
