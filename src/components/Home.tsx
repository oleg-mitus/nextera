"use client";

import Image from "next/image";
import { FC, useState } from "react";
import bg from "@/../public/images/reel.gif";
import VideoModal from "./videoModal/VideoModal";

const HomeText: FC<{ lang: "ru" | "en" }> = ({ lang = "ru" }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#17292d] z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      )}

      <div className="main-page h-full w-full flex items-center justify-center grow absolute inset-0">
        <div className="main-page-bg absolute inset-0 w-full h-full">
          <Image
            src={bg}
            alt=""
            fill
            onLoad={() => setLoading(false)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="main-page-block p-5">
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="text-center max-w-200"
          >
            <h1 className="text-5xl font-sans lg:text-7xl">
              NEXTERA production
            </h1>
            <p className="text-lg lg:text-2xl 2xl:text-3xl mt-5">
              Мы — продакшн полного цикла, готовый воплотить в жизнь самые
              смелые идеи
            </p>

            <VideoModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeText;
