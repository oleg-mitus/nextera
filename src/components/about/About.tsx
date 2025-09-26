"use client";

import TeamSlider from "@/components/about/TeamSlider";
import AboutParallax from "@/components/about/AboutParallax";
import AboutMobileParallax from "@/components/about/AboutMobileParallax";
import { useMediaQuery } from "usehooks-ts";
import teamItems from "@/data/team";
import { useEffect, useState, type MouseEvent } from "react";
import AOS from "aos";
import useHash from "@/composables/useHash";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#17292d] z-1">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
    </div>
  );
};

export default function About() {
  const [contentVisible, setContentVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [hash] = useHash();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    console.log(hash);
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      scrollToSection(id);
    }
  }, [hash]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {contentVisible ? (
        <div
          className="about lg:px-10 py-10 relative"
          onMouseMove={(event) => handleMouseMove(event)}
        >
          {isSmallDevice ? (
            <AboutMobileParallax />
          ) : (
            <AboutParallax {...mousePosition} />
          )}
          <h1
            className="text-5xl lg:text-6xl 2xl:text-7xl font-sans lg:ml-30 px-4 lg:px-0"
            data-aos="fade-up"
          >
            О нас
          </h1>

          <div className="company mt-15 lg:mt-25 px-4 lg:px-0">
            <h2
              className="text-3xl lg:text-4xl 2xl:text-5xl font-sans"
              data-aos="fade-up"
            >
              Компания
            </h2>
            <div
              className="lg:pl-50 text-xl lg:text-2xl flex flex-col gap-10 max-w-400 mt-10 lg:mt-25"
              data-aos="fade-up"
            >
              <p>
                Мы — продакшн полного цикла, готовый воплотить в жизнь самые
                смелые идеи, а также предложить свои уникальные подходы к их
                реализации.
              </p>
              <p>
                <b>Что делает нас особенными?</b>
              </p>
              <p>
                <b>Собственное оборудование и надёжная команда:</b>
                <br /> у нас есть свой обширный парк современного оборудования и
                постоянная техническая команда, обеспечивающая бесперебойную
                работу над любым проектом.
              </p>
              <p>
                <b>Творческий подход:</b>
                <br />
                мы гордимся нашим большим пулом талантливых творческих
                специалистов, которые с любовью подходят к каждому проекту.
                <br />
                Мы делаем то, что любим, и любим то, что делаем!
              </p>
              <p>
                <b>Масштаб и гибкость:</b>
                <br />
                NEXTERA готова к работе с большими объёмами производства и
                активно участвует в тендерах, предлагая оптимальные решения для
                ваших задач. Сотрудничайте с нами, чтобы вместе создавать
                выдающиеся проекты!
              </p>
              <div className="mt-4 w-full flex justify-center">
                <button
                  className="mx-auto px-8 py-4 bg-white text-black text-base lg:text-xl font-sans md:w-auto uppercase cursor-pointer"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  Наш манифест
                </button>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: isExpanded ? "auto" : 0, opacity: 1 }}
                exit={{ height: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={}
              >
                {/* Content that expands/collapses */}
                <p>Какой-то манифест</p>
              </motion.div>
            </div>
          </div>
          <div className="team mt-10 lg:mt-25">
            <h2
              className="text-3xl lg:text-4xl 2xl:text-5xl font-sans px-4 lg:px-0"
              data-aos="fade-up"
            >
              Команда
            </h2>
            <div className="mt-10" data-aos="zoom-in-up">
              <TeamSlider items={teamItems} />
            </div>
          </div>
          <div className="contacts mt-15 lg:mt-25 px-4 lg:px-0" id="contacts">
            <h2
              className="text-3xl lg:text-4xl 2xl:text-5xl font-sans"
              data-aos="fade-up"
            >
              Контакты
            </h2>
            <div
              className="lg:min-h-150 w-full flex lg:items-center justify-center font-sans text-xl lg:text-2xl flex-col gap-5 mt-15 lg:mt-0"
              data-aos="fade-up"
            >
              <div className="">Телефон(CEO) - 8 800 235 35 35</div>
              <div className="">Телефон (Гендир) - 8 800 235 35 35</div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
