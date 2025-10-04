"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamItem {
  id: number;
  name: string;
  post: string;
  image: StaticImageData;
}

const variants: Variants = {
  initial: { transform: "translateX(250px)", animationDuration: 1500 },
  animate: { transform: "translateX(0px)", animationDuration: 1500 },
  exit: { transform: "translateX(-250px)", animationDuration: 1500 },
};

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
      {activeItem && (
        <div className="mt-8 w-full flex items-center justify-center flex-col">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            key={activeItem.id}
          >
            <div className="text-2xl font-sans text-center">
              {activeItem.name}
            </div>
            <div className="text-lg text-center">{activeItem.post}</div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SwiperComponent;
