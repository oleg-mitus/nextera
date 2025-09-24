"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Footer: FC = () => {
  const pathname = usePathname();
  if (pathname === '/') return ''

  return (
    <footer className="w-full inset-x-0 overflow-hidden px-10 h-15 flex items-center">
      <div className="flex justify-between items-center w-full">
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Logo"
            sizes="100vw"
            width={160}
            height={32}
          />
        </Link>
        <Link href="/about#contacts" scroll={false}>Контакты</Link>
      </div>
    </footer>
  );
};

export default Footer;
