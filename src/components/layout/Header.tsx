"use client";
import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState, useRef } from "react";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  return (
    <header
      ref={headerRef}
      className="fixed w-full inset-x-0 py-2.5 px-10 h-25 flex items-center z-10"
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/" aria-label="Home">
          <Image src="/logo.png" alt="Logo" sizes="100vw" width={240} height={60} />
        </Link>

        {/* Burger */}
        <button
          className={``}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Fullscreen nav panel */}
        <nav id="main-nav" className={``} aria-hidden={!menuOpen}>
          {/* Кликаем по фону — закрываем меню */}
          <div onClick={() => setMenuOpen(false)} aria-hidden />
          <ul
            onClick={() => setMenuOpen(false)}
            className="flex gap-4 text-2xl font-sans"
          >
            <li>
              <Link href="/about">О Нас</Link>
            </li>
            <li>
              <Link href="/projects">Проекты</Link>
            </li>
            <li>
              <Link href="/about#contacts" scroll={false}>Контакты</Link>
            </li>
            <li>
              <Link href="/en">ENG</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-0 left-10 right-10 border-b border-white" id="contacts"></div>
    </header>
  );
};

export default Header;
