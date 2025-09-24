"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="main-page h-full w-full flex items-center justify-center grow absolute inset-0">
      <div className="main-page-block p-5">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="text-center max-w-250"
        >
          <h1 className="text-5xl font-sans lg:text-7xl">NextEra Production</h1>
          <p className="text-lg lg:text-2xl mt-5">
            Мы — продакшн полного цикла, готовый воплотить в жизнь самые смелые
            идеи
          </p>
          <button className="w-full px-8 py-4 bg-white text-black text-xl lg:text-2xl 2xl:text-3xl font-sans mt-8 md:w-auto">
            Смотреть шоурил
          </button>
        </div>
      </div>
    </div>
  );
}
