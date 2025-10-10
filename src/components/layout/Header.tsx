'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useTranslation } from '@/composables/useTranslation';
import { usePathname } from 'next/navigation';
import logo from '@/../public/images/logo.png';
import logoMob from '@/../public/images/logo-mob.png';

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { translate, language, getLink } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        'fixed w-full inset-x-0 py-2.5 px-4 lg:px-10 h-16 lg:h-25 flex items-center z-10 bg-[#17292d]',
        { 'bg-transparent': pathname === '/' || pathname === '/en' }
      )}
    >
      <div className='flex justify-between items-center w-full'>
        <Link href={getLink('/')} aria-label='Home'>
          <Image
            src={logoMob}
            alt='Logo'
            sizes='100vw'
            width={60}
            height={60}
            className='flex lg:hidden'
            priority={true}
          />

          <Image
            src={logo}
            alt='Logo'
            sizes='100vw'
            width={240}
            height={60}
            className='hidden lg:flex'
            priority={true}
          />
        </Link>

        <button
          className={clsx('burger lg:hidden', { open: menuOpen })}
          onClick={() => setMenuOpen((v) => !v)}
          type='button'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Fullscreen nav panel */}
        <nav
          id='main-nav'
          className={clsx('nav', { open: menuOpen })}
          aria-hidden={!menuOpen}
        >
          {/* Кликаем по фону — закрываем меню */}
          <div onClick={() => setMenuOpen(false)} aria-hidden />
          <ul
            onClick={() => setMenuOpen(false)}
            className='flex gap-10 text-2xl font-sans uppercase'
          >
            <li>
              <Link href={getLink('/projects')}>
                {translate('Navigation', 'projects')}
              </Link>
            </li>
            <li>
              <Link href={getLink('/about')}>
                {translate('Navigation', 'about')}
              </Link>
            </li>
            <li>
              <Link href={getLink('/about#contacts')}>
                {translate('Navigation', 'contacts')}
              </Link>
            </li>
            <li>
              <Link href={language === 'ru' ? '/en' : '/'}>
                {translate('Navigation', 'locale')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='absolute bottom-0 left-4 lg:left-10 right-4 lg:right-10 border-b border-[#bfcfd1] opacity-50'></div>
    </header>
  );
};

export default Header;
