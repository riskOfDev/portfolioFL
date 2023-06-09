import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LetsGetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const texts = [
    { text: "LET'S GET IN TOUCH", color: "#8F00FF", borderWidth: "0px" },
    { text: "LET'S GET IN TOUCH", color: "#AD00FF", borderWidth: "1px" },
    {
      text: "LET'S GET IN TOUCH",
      color: "rgba(173, 0, 255, 0.9)",
      borderWidth: "1px",
    },
    {
      text: "LET'S GET IN TOUCH",
      color: "rgba(173, 0, 255, 0.8)",
      borderWidth: "1px",
    },
    {
      text: "LET'S GET IN TOUCH",
      color: "rgba(173, 0, 255, 0.7)",
      borderWidth: "1px",
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2, // Each element will start animating 0.5 second after the previous one
        duration: 0.5,
      },
    }),
  };

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      {texts.map(({ text, color, borderWidth }, i) => (
        <motion.div
          custom={i}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          key={i}
          style={{
            fontSize: "110px",
            color: color,
            WebkitTextFillColor: borderWidth === "0px" ? color : "transparent",
            WebkitTextStroke: `${borderWidth} ${color}`,
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default LetsGetInTouch;
