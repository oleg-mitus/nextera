"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
