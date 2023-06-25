import React, { useEffect, useState } from "react";
import styles from "../styles/HorizontalTextAnimationTalent.module.css";

const HorizontalTextAnimationTalent = ({
  text,
  defaultDirection = "right",
  type = "notMiddle",
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateX, setTranslateX] = useState(-3400);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      let newTranslateX;
      if (defaultDirection === "right") {
        newTranslateX = translateX + (scrollPosition - currentPosition) * 0.5;
      } else {
        newTranslateX = translateX - (scrollPosition - currentPosition) * 0.5;
      }
      setTranslateX(newTranslateX);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, translateX, defaultDirection]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: type === "middle" ? "transparent" : "#8F00FF",
      }}
    >
      <h1
        className={styles.title}
        style={{
          color: type === "middle" ? "#8F00FF" : "white",
          transform: `translateX(${translateX}px)`,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default HorizontalTextAnimationTalent;
