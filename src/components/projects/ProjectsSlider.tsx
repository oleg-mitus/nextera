"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import any modules you need, e.g., Navigation, Pagination
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const SwiperComponent = ({ items }: { items: ProjectItem[] }) => {
  if (items.length === 0) return "";

  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Mousewheel]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={false}
        onSlideChange={(swiper) => console.log(swiper)}
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
        className="team-swiper mt-10"
      >
        {items.map((item) => (
          <SwiperSlide
            className="max-h-50 h-50 lg:max-h-100 lg:h-100 overflow-hidden"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
