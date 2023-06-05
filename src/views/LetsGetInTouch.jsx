import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LetsGetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const texts = [
    "LET'S GET IN TOUCH",
    "LET'S GET IN TOUCH",
    "LET'S GET IN TOUCH",
    "LET'S GET IN TOUCH",
    "LET'S GET IN TOUCH",
  ];

  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5, // Each element will start animating 0.5 second after the previous one
        duration: 0.5,
      },
    }),
  };

  return (
    <div ref={ref}>
      {texts.map((text, i) => (
        <motion.div
          custom={i}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          key={i}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default LetsGetInTouch;
