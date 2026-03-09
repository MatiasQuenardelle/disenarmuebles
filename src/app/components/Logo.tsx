import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col">
      <span className="font-serif text-2xl italic text-brand">Diseñar</span>
      <span className="-mt-1 text-xl font-bold tracking-widest text-warm-brown">
        MUEBLES
      </span>
    </Link>
  );
}
