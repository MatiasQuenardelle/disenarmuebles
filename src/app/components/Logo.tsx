import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src="/logo.jpeg"
        alt="Diseñar Muebles — Fábrica de Muebles"
        width={140}
        height={70}
        className="h-auto w-[120px] sm:w-[140px]"
        priority
      />
    </Link>
  );
}
