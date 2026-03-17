import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span className="font-heading text-2xl italic text-brand">Diseñar</span>
      <span className="-mt-0.5 text-[0.7rem] font-bold tracking-[0.3em] text-warm-brown">
        MUEBLES
      </span>
    </Link>
  );
}
