import React, { useEffect, useState } from "react";
import styles from "../styles/Cursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: any) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const onScroll = () => {
    setPosition((prevState) => ({
      x: prevState.x,
      y: prevState.y + window.scrollY,
    }));
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
