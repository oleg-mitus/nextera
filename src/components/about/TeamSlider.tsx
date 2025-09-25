"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import any modules you need, e.g., Navigation, Pagination
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamItem {
  id: number;
  name: string;
  post: string;
  image: string;
}

const SwiperComponent = ({ items }: { items: TeamItem[] }) => {
  const [activeItem, setActiveItem] = useState<TeamItem | null>(null);

  if (items.length === 0) return "";

  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Mousewheel]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={false}
        onSlideChange={(swiper) => setActiveItem(items[swiper.realIndex])}
        onSwiper={(swiper) => console.log(swiper)}
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
        className="team-swiper"
      >
        {items.map((item) => (
          <SwiperSlide
            className="max-h-100 h-100 overflow-hidden"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={400}
              className="w-full h-full object-cover"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {activeItem && (
        <div className="mt-8 w-full flex items-center justify-center flex-col">
          <div className="text-2xl font-sans">{activeItem.name}</div>
          <div className="text-lg">{activeItem.post}</div>
        </div>
      )}
    </>
  );
};

export default SwiperComponent;
