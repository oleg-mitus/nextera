"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamItem {
  id: number;
  name: string;
  post: string;
  image: StaticImageData;
}

const SwiperComponent = ({ items }: { items: TeamItem[] }) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null);
  const swiperSlider = useRef<SwiperClass | null>(null);
  if (items.length === 0) return "";

  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Mousewheel, Controller]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={false}
        controller={{ control: controlledSwiper }}
        
        onSlideChange={(swiper) => swiperSlider.current?.slideTo(swiper.realIndex)}
        effect="coverflow"
        mousewheel
        grabCursor
        centeredSlides
        loop
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          0: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
        }}
        className="team-swiper max-w-400"
      >
        {items.map((item) => (
          <SwiperSlide
            className="max-h-50 h-50 lg:max-h-80 lg:h-80 overflow-hidden cursor-pointer"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={400}
              placeholder="blur"
              className="w-full h-full object-cover"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => {
          swiperSlider.current = swiper;
        }}
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={false}
        pagination={false}
        navigation={false}
        
        centeredSlides
        speed={1400}
        loop
        className="max-w-140 mt-10"
      >
        {items.map((item) => (
          <SwiperSlide
            className="max-h-50 h-50 lg:max-h-80 lg:h-80 overflow-hidden cursor-pointer"
            key={item.id}
          >
            <div className="text-2xl font-sans text-center">
              {item.name}
            </div>
            <div className="text-lg text-center">{item.post}</div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default SwiperComponent;
