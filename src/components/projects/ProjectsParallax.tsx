'use client';

import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import { motion, useSpring, useTransform, useAnimation } from 'framer-motion';

const ProjectsParallax: FC<{ mouseEvent: MouseEvent }> = ({ mouseEvent }) => {
  const imgAnimation = useAnimation();

  useEffect(() => {
    if (mouseEvent)
    onMouseMoveHandler(mouseEvent);
  }, []);

  const x = useSpring(0, { stiffness: 250, damping: 0 });
  const y = useSpring(0, { stiffness: 250, damping: 0 });

  const primaryX = useTransform(x, (event) => event / 45);
  const primaryY = useTransform(y, (event) => event / 45);
  const secondaryX = useTransform(x, (event) => event / -45);
  const secondaryY = useTransform(y, (event) => event / -45);

  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 20 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 40 });

  const onMouseMoveHandler = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = -15;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  return (
    <motion.div>
      <motion.div
        style={{
          x: primaryX,
          y: primaryY,
        }}
        className='w-full absolute inset-0 z-[-1] -top-150 h-full aspect-square'
        ref={line1}
      >
        <Image src='/line-1_1.svg' fill alt='' className='w-full h-auto' />
      </motion.div>
      <motion.div
        onMouseMove={onMouseMoveHandler}
        animate={imgAnimation}
        style={{
          x: secondaryX,
          y: secondaryY,
        }}
        className='w-full absolute inset-0 z-[-1] -top-150 h-full aspect-square'
        ref={line2}
      >
        <Image src='/line-1_2.svg' fill alt='' className='w-full h-auto' />
      </motion.div>
      <div
        className='w-full absolute inset-0 z-[-1] top-150 h-full aspect-square'
        ref={line3}
      >
        <Image src='/line-1_3.svg' fill alt='' className='w-full h-auto' />
      </div>
      <div
        className='w-full absolute inset-0 z-[-1] top-200 h-full aspect-square'
        ref={line4}
      >
        <Image src='/line-1_4.svg' fill alt='' className='w-full h-auto' />
      </div>
    </motion.div>
  );
};

export default ProjectsParallax;
