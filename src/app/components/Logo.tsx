import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src="/logo.png"
        alt="Diseñar Muebles — Fábrica de Muebles y Colchonería"
        width={360}
        height={360}
        className="h-auto w-[72px] sm:w-[84px]"
        priority
      />
    </Link>
  );
}
