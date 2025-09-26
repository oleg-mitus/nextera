"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC } from "react";
import logo from "@/../public/images/logo.png";

const Footer: FC = () => {
  const pathname = usePathname();
  if (pathname === "/") return "";

  return (
    <footer className="w-full inset-x-0 overflow-hidden px-4 lg:px-10 h-20 lg:h-25">
      <div className="flex justify-between items-center w-full relative">
        <Link href="/" aria-label="Home">
          <Image
            src={logo}
            alt="Logo"
            width={240}
            height={60}
            className="w-40 lg:w-60"
          />
        </Link>
        <Link
          href="/about#contacts"
          scroll={false}
          className="lg:text-2xl pt-2"
        >
          Контакты
        </Link>
      </div>
      <div className="w-full text-center text-sm mt-2.5">© Nextera | All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
