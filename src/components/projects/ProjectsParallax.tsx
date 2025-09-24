"use client";

import { FC } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const ProjectsParallax: FC<{ x: number; y: number }> = ({ x = 0, y = 0 }) => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 20 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 40 });

  const sx = (x / 100) * -2;
  const sy = (y / 100) * -2;

  const sx2 = (x / 100) * 2;
  const sy2 = (y / 100) * 3;

  const sx3 = (x / 100) * 2;
  const sy3 = (y / 100) * 3;

  const sx4 = (x / 100) * -2;
  const sy4 = (y / 100) * -1.5;

  return (
    <motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-20"
        ref={line1}
      >
        <div
          style={{
            scale: 1.1,
            transition: "all 0.3s ease-out",
            transform: `translate3d(${sx}px, ${sy}px, 0)`,
          }}
        >
          <Image
            src="/line-1_1.svg"
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-40"
        ref={line2}
      >
        <div
          style={{
            scale: 1.1,
            transition: "all 0.3s ease-out",
            transform: `translate3d(${sx2}px, ${sy2}px, 0)`,
          }}
        >
          <Image
            src="/line-2_2.svg"
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </motion.div>
      <div className="w-full absolute inset-0 z-[-1] top-280" ref={line3}>
        <div
          style={{
            scale: 1.1,
            transition: "all 0.3s ease-out",
            transform: `translate3d(${sx3}px, ${sy3}px, 0)`,
          }}
        >
          <Image
            src="/line-1_3.svg"
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full absolute inset-0 z-[-1] top-300" ref={line4}>
        <div
          style={{
            scale: 1.1,
            transition: "all 0.3s ease-out",
            transform: `translate3d(${sx4}px, ${sy4}px, 0)`,
          }}
        >
          <Image
            src="/line-1_4.svg"
            width={1920}
            height={800}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsParallax;
