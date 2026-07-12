"use client";

import { useActionState } from "react";
import { login } from "../actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-center font-heading text-2xl font-semibold text-warm-brown">
          Diseñar Muebles
        </h1>
        <p className="mb-8 text-center text-sm text-text-muted">
          Panel de administración
        </p>
        <form
          action={formAction}
          className="space-y-4 rounded-2xl border border-brand-light/20 bg-white p-8 shadow-sm"
        >
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-warm-brown">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="username"
              className="w-full rounded-lg border border-brand-light/40 px-3.5 py-2.5 text-sm text-warm-brown outline-none focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-warm-brown">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-brand-light/40 px-3.5 py-2.5 text-sm text-warm-brown outline-none focus:border-brand"
            />
          </div>
          {state?.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="btn-brand w-full rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {pending ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
