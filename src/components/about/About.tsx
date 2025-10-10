"use client";

import TeamSlider from "@/components/about/TeamSlider";
import AboutParallax from "@/components/about/AboutParallax";
import AboutMobileParallax from "@/components/projects/ProjectMobileParallax";
import { useMediaQuery } from "usehooks-ts";
import teamItems from "@/data/team";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import AOS from "aos";
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
      if (window.location.hash === "#contacts") {
        scrollToSection("contacts");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

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

  return (
    <>
      {!contentVisible && <Loading />}
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
            <h3>ОБОРУДОВАНИЕ И КОМАНДА</h3>
            <p>
              У нас есть свой обширный парк современного оборудования и
              постоянная команда, обеспечивающая бесперебойную работу над любым
              проектом.
            </p>
            <h3>ТВОРЧЕСКИЙ ПОДХОД</h3>
            <p>
              Гордимся нашим пулом талантливых творческих специалистов, которые
              с любовью подходят к каждому проекту.
            </p>
            <h3>МАСШТАБ И ГИБКОСТЬ</h3>
            <p>
              NEXTERA production готовы к работе с большими объёмами
              производства и активно участвует в тендерах, предлагая оптимальные
              решения для ваших задач.
            </p>
            <h3>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</h3>
            <p>
              Мы делаем то, что любим, и любим то, что делаем.
              <br />
              Сотрудничайте с нами, чтобы вместе создавать выдающиеся проекты!
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
              style={{ overflow: "hidden" }}
            >
              {/* Content that expands/collapses */}
              <p>
                Мы живём в эпоху, где видео стало главным языком общения.
                Истории больше не просто развлекают — они объединяют людей,
                формируют ценности и создают новые смыслы. И именно на этой
                границе будущего работает NextEra Production.
              </p>
              <p>
                Мы — команда, которая превращает идеи в живое дыхание кадра. Для
                нас кино и видео — это не просто контент, а инструмент диалога и
                культурного влияния. Мы соединяем эстетику и стратегию, эмоцию и
                технологию, чтобы каждый проект был не только красивым, но и
                значимым.
              </p>
              <p>
                Сегодня мы создаём документальные фильмы, корпоративные проекты,
                клипы, веб-сериалы. Завтра — выходим на территорию большого кино
                и сериалов, которые смогут конкурировать на крупнейших
                фестивалях и digital-платформах. Наши амбиции — международные:
                Китай, Дубай, Европа, США. Мы строим сеть связей и партнёрств,
                которая открывает новые рынки и горизонты.
              </p>
              <p>
                Мы работаем с лучшими: у нас есть ядро постоянной команды и
                широкий пул специалистов из разных сфер — от опытных мастеров до
                молодых, смелых и дерзких талантов. Эта комбинация даёт нам
                энергию быть актуальными, модными и яркими.
              </p>
              <p>
                Мы ищем не просто клиентов — мы ищем партнёров. Людей и
                компании, которые хотят мыслить масштабно и действовать смело.
                Вместе мы можем создавать проекты, которые будут влиять,
                вдохновлять и оставаться в памяти.
              </p>
              <p>
                NextEra Production — это продакшн, где рождается новое поколение
                историй. Историй, которые говорят за нас, говорят о нас и
                говорят с миром.
              </p>
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
    </>
  );
}
