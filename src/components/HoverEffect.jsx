import React, { useEffect, useRef } from "react";
import styles from "../styles/HoverEffect.module.css";

const HoverEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    containerRef.current.addEventListener("mousemove", onMouseMove);

    return () => {
      containerRef.current.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.backgroundOne} />
      <div className={styles.backgroundTwo} />
    </div>
  );
};

export default HoverEffect;
