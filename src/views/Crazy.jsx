import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HorizontalTextAnimationTalent from "../components/HorizontalTextAnimationTalent";

const Crazy = () => {
  const { scrollYProgress } = useViewportScroll();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  const translateY1 = useTransform(
    scrollYProgress,
    [0, 1],
    startAnimation ? ["0%", "40%"] : ["0%", "0%"]
  );
  const translateY2 = useTransform(
    scrollYProgress,
    [0, 1],
    startAnimation ? ["0%", "-40%"] : ["0%", "0%"]
  );

  return (
    <div>
      <div
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <motion.div style={{ marginRight: "10px", translateY: translateY1 }}>
          <Image
            src={`/crazy/group7.png`}
            width={150}
            height={150}
            alt="smiley"
          />
        </motion.div>
        <motion.div style={{ marginLeft: "10px", translateY: translateY2 }}>
          <Image
            src={`/crazy/group8.png`}
            width={300}
            height={300}
            alt="smiley"
          />
        </motion.div>
      </div>
      <div>
        <HorizontalTextAnimationTalent
          text="HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / "
          defaultDirection="left"
        />
        <HorizontalTextAnimationTalent
          text="WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / "
          defaultDirection="right"
          type="middle"
        />
        <HorizontalTextAnimationTalent
          text="HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / "
          defaultDirection="left"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <motion.div style={{ marginRight: "10px", translateY: translateY1 }}>
          <Image
            src={`/crazy/group9.png`}
            width={300}
            height={300}
            alt="smiley"
          />
        </motion.div>
        <motion.div style={{ marginLeft: "10px", translateY: translateY2 }}>
          <Image
            src={`/crazy/group10.png`}
            width={200}
            height={200}
            alt="smiley"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Crazy;
