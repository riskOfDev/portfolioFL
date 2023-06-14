import React, { useEffect, useRef } from "react";
import styles from "../styles/HoverEffect.module.css";

const HoverEffect = () => {
  const containerRef = useRef(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      cursorPosRef.current = { x: event.clientX, y: event.clientY };
      const x = event.clientX + window.pageXOffset;
      const y = event.clientY + window.pageYOffset;
      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    const onScroll = () => {
      const x = cursorPosRef.current.x + window.pageXOffset;
      const y = cursorPosRef.current.y + window.pageYOffset;
      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
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
