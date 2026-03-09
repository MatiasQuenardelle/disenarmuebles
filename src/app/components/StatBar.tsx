import type { Stat } from "@/data/types";

export default function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-brand-light/30 bg-cream-dark px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-brand">{stat.value}</p>
            <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
