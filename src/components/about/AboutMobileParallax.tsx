"use client";

import { FC } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import image1 from "@/../public/line-3_1.svg";
import image2 from "@/../public/line-3_2.svg";
import image3 from "@/../public/line-3_3.svg";
import image4 from "@/../public/line-3_4.svg";
import image5 from "@/../public/line-3_5.svg";

const ProjectParallax: FC = () => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: -5 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 2 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: -5 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 5 });
  const { ref: line5 } = useParallax<HTMLDivElement>({ speed: -6 });

  return (
    <motion.div>
      <div
        className="w-full absolute inset-0 z-[-1] top-110"
        ref={line1}
        style={{scale: 1.3}}
      >
        <motion.div
          animate={{
            translateY: [0, -50, 30, -100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 100, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
        >
        <Image src={image1} width={1920} height={800} alt="" className="w-full h-auto" priority={true} />
        </motion.div>
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-80"
        ref={line2}
        style={{scale: 1.3}}
      >
        <Image src={image2} width={1920} height={800} alt="" className="w-full h-auto" priority={true} />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-360"
        ref={line3}
        style={{scale: 1.3}}
      >
        <motion.div
          animate={{
            translateY: [0, -50, 30, -100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 50, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
        >
        <Image src={image3} width={1920} height={800} alt="" className="w-full h-auto" priority={true} />
        </motion.div>
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-290"
        ref={line4}
        style={{scale: 1.3}}
      >
        <Image src={image4} width={1920} height={800} alt="" className="w-full h-auto" priority={true} />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-480"
        ref={line5}
        style={{scale: 1.3}}
      >
        <motion.div
          animate={{
            translateY: [0, -50, 30, -100, 0], // Animate x position from 0 to 100 and back to 0
          }}
          transition={{
            repeat: Infinity, // Loop the animation indefinitely
            duration: 50, // Animation duration for one cycle
            ease: 'easeInOut', // Easing function
          }}
        >
        <Image src={image5} width={1920} height={800} alt="" className="w-full h-auto scale-110" priority={true} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectParallax;
