"use client";
import TeamSlider from "@/components/about/TeamSlider";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import teamItems from "@/data/team";

export default function About() {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 20 });
  return (
    <div className="about p-10">
      <div
        className="w-full absolute inset-0 z-[-1] top-0 h-full aspect-square"
        ref={line1}
      >
        <Image src="/line3.svg" fill alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-0 h-full aspect-square"
        ref={line2}
      >
        <Image src="/line4.svg" fill alt="" className="w-full h-auto" />
      </div>
      <h1 className="text-7xl font-sans">О нас</h1>
      <div className="team mt-25">
        <h2 className="text-5xl font-sans">Команда</h2>
        <div>
          <TeamSlider items={teamItems} />
        </div>
      </div>
      <div className="company mt-25">
        <h2 className="text-5xl font-sans">Компания</h2>
        <div className="pl-50 text-3xl flex flex-col gap-10 max-w-400 mt-25">
          <p>
            Мы — продакшн полного цикла, готовый воплотить в жизнь самые смелые
            идеи, а также предложить свои уникальные подходы к их реализации.
          </p>
          <p>
            <b>Что делает нас особенными?</b>
          </p>
          <p>
            <b>Собственное оборудование и надёжная команда:</b>
            <br /> у нас есть свой обширный парк современного оборудования и
            постоянная техническая команда, обеспечивающая бесперебойную работу
            над любым проектом.
          </p>
          <p>
            <b>Творческий подход:</b>
            <br />
            мы гордимся нашим большим пулом талантливых творческих специалистов,
            которые с любовью подходят к каждому проекту.
            <br />
            Мы делаем то, что любим, и любим то, что делаем!
          </p>
          <p>
            <b>Масштаб и гибкость:</b>
            <br />
            NEXTERA готова к работе с большими объёмами производства и активно
            участвует в тендерах, предлагая оптимальные решения для ваших задач.
            Сотрудничайте с нами, чтобы вместе создавать выдающиеся проекты!
          </p>
        </div>
      </div>
      <div className="contacts mt-25" id="contacts">
        <h2 className="text-5xl font-sans">Контакты</h2>
        <div className="min-h-150 w-full flex items-center justify-center font-sans text-3xl flex-col gap-5">
          <div className="">Телефон(CEO) - 8 800 235 35 35</div>
          <div className="">Телефон (Гендир) - 8 800 235 35 35</div>
        </div>
      </div>
    </div>
  );
}
