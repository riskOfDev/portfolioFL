import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/LetsGetInTouch.module.css";

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
      color: "rgba(173, 0, 255, 0.4)",
      borderWidth: "1px",
    },
    {
      text: "LET'S GET IN TOUCH",
      color: "rgba(173, 0, 255, 0.3)",
      borderWidth: "1px",
    },
    {
      text: "LET'S GET IN TOUCH",
      color: "rgba(173, 0, 255, 0.2)",
      borderWidth: "1px",
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5, // Each element will start animating 0.5 second after the previous one
        duration: 1,
      },
    }),
  };

  return (
    <div ref={ref} className={styles.wrap} style={{ textAlign: "center" }}>
      {texts.map(({ text, color, borderWidth }, i) => (
        <motion.div
          custom={i}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          key={i}
          style={{
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
