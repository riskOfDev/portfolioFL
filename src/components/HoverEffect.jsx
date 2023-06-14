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
    <div
      className={styles.container}
      ref={containerRef}
      style={{ position: "absolute", zIndex: -1 }}
    >
      <div className={styles.backgroundOne} />
      <div className={styles.backgroundTwo}>
        <video autoPlay loop muted>
          {/* <source src="/hero-background/pexels2.mp4" type="video/mp4" /> */}
          <source src="/hero-background/pexels4.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HoverEffect;
