"use client";

import { FC } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const ProjectsParallax: FC = () => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 20 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 40 });

  return (
    <motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-20"
        ref={line1}
      >
        <Image src="line-1_1.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] -top-40"
        ref={line2}
      >
        <Image src="line-1_2.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </motion.div>
      <div
        className="w-full absolute inset-0 z-[-1] top-280"
        ref={line3}
      >
        <Image src="line-1_3.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-300"
        ref={line4}
      >
        <Image src="line-1_4.svg" width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};

export default ProjectsParallax;
