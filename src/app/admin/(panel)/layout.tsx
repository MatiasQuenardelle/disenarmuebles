import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { logout } from "../actions";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-brand-light/20 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-2 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/admin" className="font-heading text-lg font-semibold text-warm-brown">
              Diseñar Muebles <span className="text-sm font-normal text-brand">Admin</span>
            </Link>
            <nav className="flex gap-3 sm:gap-5">
              <Link
                href="/admin"
                className="text-sm font-medium text-warm-brown transition-colors hover:text-brand"
              >
                Productos
              </Link>
              <Link
                href="/admin/configuracion"
                className="text-sm font-medium text-warm-brown transition-colors hover:text-brand"
              >
                Configuración
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-text-muted transition-colors hover:text-brand sm:inline"
              aria-label="Ver sitio en nueva pestaña"
            >
              Ver sitio ↗
            </a>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-full border border-brand-light/40 px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-brand hover:text-brand sm:px-4"
              >
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
    </div>
  );
}
