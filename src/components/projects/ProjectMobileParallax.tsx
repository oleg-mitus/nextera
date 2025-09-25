"use client";

import { FC } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import image1 from "@/../public/line-2_1.svg";
import image2 from "@/../public/line-2_2.svg";
import image3 from "@/../public/line-2_3.svg";
import image4 from "@/../public/line-2_4.svg";
import image5 from "@/../public/line-2_5.svg";

const ProjectParallax: FC = () => {
  const { ref: line1 } = useParallax<HTMLDivElement>({ speed: 10 });
  const { ref: line2 } = useParallax<HTMLDivElement>({ speed: 24 });
  const { ref: line3 } = useParallax<HTMLDivElement>({ speed: 30 });
  const { ref: line4 } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: line5 } = useParallax<HTMLDivElement>({ speed: 43 });

  return (
    <motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] top-60"
        ref={line1}
      >
        <Image src={image1} width={1920} height={800} alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-full absolute inset-0 z-[-1] top-60"
        ref={line2}
      >
        <Image src={image2} width={1920} height={800} alt="" className="w-full h-auto" />
      </motion.div>
      <div
        className="w-full absolute inset-0 z-[-1] top-240"
        ref={line3}
      >
        <Image src={image3} width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-240"
        ref={line4}
      >
        <Image src={image4} width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full absolute inset-0 z-[-1] top-340"
        ref={line5}
      >
        <Image src={image5} width={1920} height={800} alt="" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};

export default ProjectParallax;
