'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

import image1 from '@/../public/line-2_1.svg';
import image2 from '@/../public/line-2_2.svg';
import image3 from '@/../public/line-2_3.svg';
import image4 from '@/../public/line-2_4.svg';
import image5 from '@/../public/line-2_5.svg';

const ProjectParallax: FC = () => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 5 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 12 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 15 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 20 });
  const { ref: line5 } = useParallax<HTMLDivElement>({ speed: 21 });

  return (
    <motion.div>
      <motion.div className='w-full absolute inset-0 z-[-1] top-60' ref={line1}>
        <motion.div
          animate={{
            translateY: [0, -50, 30, -100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 150, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
          style={{ scale: 2 }}
        >
          <Image
            src={image1}
            width={1920}
            height={800}
            alt=''
            className='w-full h-auto'
            priority={true}
          />
        </motion.div>
      </motion.div>
      <motion.div className='w-full absolute inset-0 z-[-1] top-60' ref={line2}>
        <motion.div
          animate={{
            translateY: [-70, 120, 0, 100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 150, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
          style={{ scale: 2 }}
        >
          <Image
            src={image2}
            width={1920}
            height={800}
            alt=''
            className='w-full h-auto'
            priority={true}
          />
        </motion.div>
      </motion.div>
      <div className='w-full absolute inset-0 z-[-1] top-280' ref={line3}>
        <motion.div
          animate={{
            translateY: [0, -50, 30, -100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 150, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
          style={{ scale: 2 }}
        >
          <Image
            src={image3}
            width={1920}
            height={800}
            alt=''
            className='w-full h-auto'
            priority={true}
          />
        </motion.div>
      </div>
      <div className='w-full absolute inset-0 z-[-1] top-280' ref={line4}>
        <motion.div
          animate={{
            translateY: [-70, 120, 0, 100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 150, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
          style={{ scale: 2 }}
        >
          <Image
            src={image4}
            width={1920}
            height={800}
            alt=''
            className='w-full h-auto'
            priority={true}
          />
        </motion.div>
      </div>
      <div className='w-full absolute inset-0 z-[-1] top-440' ref={line5}>
        <motion.div
          animate={{
            translateY: [0, -50, 30, -100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 150, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
          style={{ scale: 2 }}
        >
          <Image
            src={image5}
            width={1920}
            height={800}
            alt=''
            className='w-full h-auto'
            priority={true}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectParallax;
