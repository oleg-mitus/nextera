/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import Image, { StaticImageData } from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Controller } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './test.css';

interface TeamItem {
  id: number;
  name: string;
  post: string;
  image: StaticImageData;
}

const SwiperComponent = ({ items }: { items: TeamItem[] }) => {
  const titleRefs = useRef([]);
  const [controlledSwiper] = useState<SwiperClass | null>(null);
  const swiperSlider = useRef<SwiperClass | null>(null);
  if (items.length === 0) return '';

  // Animate text in with scale and filter effects
  const animateTextIn = (index: number) => {
    const title = titleRefs.current[index];

    if (!title) return;

    const tl = gsap.timeline();

    // Title animation - scale up from small with blur
    tl.fromTo(
      title,
      {
        filter: 'blur(20px)',
        opacity: 0,
        scaleX: 2,
        scaleY: 0.5,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    );
  };

  // Animate text out with scale and filter
  const animateTextOut = (index: number) => {
    const title = titleRefs.current[index];

    if (!title) return;

    const tl = gsap.timeline();

    // Animate out both elements together
    tl.to([title], {
      filter: 'blur(25px)',
      opacity: 0,
      scaleX: 2,
      scaleY: 0.5,
      
      duration: 1,
      stagger: 0.1,
      ease: 'power2.in',
    });
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    // Animate out previous slide
    animateTextOut(swiper.previousIndex);

    // Animate in new slide
    setTimeout(() => {
      animateTextIn(swiper.activeIndex);
    }, 500);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Initial animation
    if (titleRefs.current[0]) {
      setTimeout(() => {
        animateTextIn(0);
      }, 500);
    }
  }, []);

  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Mousewheel, Controller]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={false}
        controller={{ control: controlledSwiper }}
        onSlideChange={(swiper) =>
          swiperSlider.current?.slideTo(swiper.realIndex)
        }
        effect='coverflow'
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
        className='team-swiper max-w-400'
      >
        {items.map((item) => (
          <SwiperSlide
            className='max-h-50 h-50 lg:max-h-80 lg:h-80 overflow-hidden cursor-pointer'
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={400}
              placeholder='blur'
              className='w-full h-full object-cover'
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='text-swiper-container'>
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
          
          onSlideChange={handleSlideChange}
          className=' mt-10 text-scale-swiper'
        >
          {items.map((item, index) => (
            <SwiperSlide
              className='max-h-50 h-50 lg:max-h-80 lg:h-80 overflow-hidden cursor-pointer'
              key={item.id}
            >
              <div className='slide-content'>
                <div className='text-center'>
                  <div
                    // @ts-expect-error
                    ref={(el) => (titleRefs.current[index] = el)}
                  >
                    <div className='text-2xl font-sans text-center'>
                      {item.name}
                    </div>
                    <div className='text-lg text-center'>{item.post}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperComponent;
