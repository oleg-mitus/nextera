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

const ProjectParallax: FC<{ x: number; y: number }> = ({ x = 0, y = 0 }) => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 30 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 60 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 70 });
  const { ref: line5 } = useParallax<HTMLDivElement>({ speed: 40 });

  const sx = (x / 100) * -8;
  const sy = (y / 100) * 8;

  const sx2 = (x / 100) * -3;
  const sy2 = (y / 100) * -3;

  const sx3 = (x / 100) * -8;
  const sy3 = (y / 100) * 8;

  const sx4 = (x / 100) * 1;
  const sy4 = (y / 100) * -3;

  return (
    <motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-40"
        ref={line1}
      >
        <div
          style={{
            scale: 1.2,
            transition: "all 0.3s ease-out",
            transform: `translate3d(${sx}px, ${sy}px, 0)`,
          }}
        >
          <Image
            src={image1}
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
            priority={true}
          />
        </div>
      </motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-40"
        ref={line2}
      >
        <div
          style={{
            scale: 1.2,
            transition: "all 0.7s ease-out",
            transform: `translate3d(${sx2}px, ${sy2}px, 0)`,
          }}
        >
          <Image
            src={image2}
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
            priority={true}
          />
        </div>
      </motion.div>
      <div className="w-full absolute inset-0 z-[-1] top-300" ref={line3}>
        <div
          style={{
            scale: 1.2,
            transition: "all 0.7s ease-out",
            transform: `translate3d(${sx3}px, ${sy3}px, 0)`,
          }}
        >
          <Image
            src={image3}
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
            priority={true}
          />
        </div>
      </div>
      <div className="w-full absolute inset-0 z-[-1] top-300" ref={line4}>
        <div
          style={{
            scale: 1.2,
            transition: "all 0.1s ease-out",
            transform: `translate3d(${sx4}px, ${sy4}px, 0)`,
          }}
        >
          <Image
            src={image4}
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
            priority={true}
          />
        </div>
      </div>
      <div className="w-full absolute inset-0 z-[-1] top-500" ref={line5}>
        <div
          style={{
            scale: 1.2,
            transition: "all 0.5s ease-out",
            transform: `translate3d(${sx}px, ${sy}px, 0)`,
          }}
        >
          <Image
            src={image5}
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
            priority={true}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectParallax;
