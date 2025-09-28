'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TranslationProvider } from '@/composables/useTranslation'

export function Providers({ children, lang }: { children: React.ReactNode, lang: string }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <TranslationProvider lang={lang}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </TranslationProvider>
  );
}
