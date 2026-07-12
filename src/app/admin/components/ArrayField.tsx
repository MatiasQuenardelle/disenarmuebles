"use client";

type ArrayFieldProps<T> = {
  label: string;
  items: T[];
  onChange: (items: T[]) => void;
  newItem: () => T;
  addLabel: string;
  renderItem: (item: T, update: (item: T) => void) => React.ReactNode;
};

export default function ArrayField<T>({
  label,
  items,
  onChange,
  newItem,
  addLabel,
  renderItem,
}: ArrayFieldProps<T>) {
  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div>
      <p className="mb-2 block text-sm font-medium text-warm-brown">{label}</p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="flex-1">
              {renderItem(item, (updated) => {
                const next = [...items];
                next[i] = updated;
                onChange(next);
              })}
            </div>
            <div className="flex gap-1 pt-1.5">
              <button
                type="button"
                onClick={() => move(i, -1)}
                disabled={i === 0}
                aria-label="Subir"
                className="rounded border border-brand-light/40 px-2.5 py-1.5 text-xs text-text-muted hover:border-brand disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
                aria-label="Bajar"
                className="rounded border border-brand-light/40 px-2.5 py-1.5 text-xs text-text-muted hover:border-brand disabled:opacity-30"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => onChange(items.filter((_, j) => j !== i))}
                aria-label="Quitar"
                className="rounded border border-red-200 px-2.5 py-1.5 text-xs text-red-500 hover:border-red-400"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, newItem()])}
        className="mt-2 rounded-full border border-brand-light/40 px-4 py-1.5 text-xs font-medium text-brand hover:border-brand"
      >
        + {addLabel}
      </button>
    </div>
  );
}
