"use client";

import { useTransition } from "react";
import { deleteProduct } from "../actions";

export default function DeleteButton({ id, name }: { id: number; name: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm(`¿Eliminar "${name}"? Esta acción no se puede deshacer.`)) {
          startTransition(() => deleteProduct(id));
        }
      }}
      className="rounded-full border border-red-300 px-6 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:opacity-60"
    >
      {pending ? "Eliminando..." : "Eliminar producto"}
    </button>
  );
}
