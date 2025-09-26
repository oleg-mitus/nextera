"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import any modules you need, e.g., Navigation, Pagination
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

interface ProjectItem {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
}

const SwiperComponent = ({ items }: { items: ProjectItem[] }) => {
  const router = useRouter();
  if (items.length === 0) return "";

  const onClick = (id: number) => {
    router.push(`/projects/${id}`);
  };

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
        className="team-swiper mt-10 max-w-400"
      >
        {items.map((item) => (
          <SwiperSlide
            className="max-h-50 h-50 lg:max-h-80 lg:h-80 overflow-hidden cursor-pointer"
            key={item.id}
            onClick={() => onClick(item.id)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={250}
              className="w-full h-full object-cover"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
