"use client";

import { FC } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const ProjectParallax: FC = () => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 30 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 20 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line5 } = useParallax<HTMLDivElement>({ speed: 30 });

  return (
    <motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-40"
        ref={line1}
      >
        <Image src="line-3_1.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-40"
        ref={line2}
      >
        <Image src="line-3_2.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </motion.div>
      <div
        className="w-full absolute inset-0 z-[-1] top-300"
        ref={line3}
      >
        <Image src="line-3_3.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-300"
        ref={line4}
      >
        <Image src="line-3_4.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-500"
        ref={line5}
      >
        <Image src="line-3_5.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};

export default ProjectParallax;
