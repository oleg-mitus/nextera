import Image from "next/image";

export default function Home() {
  return (
    <div className="main-page h-full w-full flex items-center justify-center grow absolute inset-0">
      <div className="">
        <div data-aos="zoom-in-up" className="">
          <h1>NextEra Production</h1>
          <p>
            Мы — продакшн полного цикла, готовый воплотить в жизнь самые смелые
            идеи
          </p>
          <button className="">смотреть шоурил</button>
        </div>
      </div>
    </div>
  );
}
