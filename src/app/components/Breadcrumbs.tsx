import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-brand-light/20 px-6 py-3">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center gap-2 text-sm text-text-muted">
          <Link href="/" className="transition-colors hover:text-brand">
            Inicio
          </Link>
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span className="text-warm-brown">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
