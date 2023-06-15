import React from "react";
import styles from "../styles/Loading.module.css";

const total = 300;
const orbSize = "100px";
const particleSize = "2px";
const time = "14s";
const baseHue = 0;

const Loading = () => {
  const particles = Array.from({ length: total }, (_, i) => (
    <div
      key={i}
      className={styles.c}
      style={{
        animation: `orbit${i + 1} ${time} infinite`,
        animationDelay: `${i * 0.01}s`,
        backgroundColor: `hsla(${(40 / total) * i + baseHue}, 100%, 50%, 1)`,
      }}
    />
  ));

  return (
    <div
      className={styles.wrap}
      style={{
        "--orb-size": orbSize,
        "--particle-size": particleSize,
        "--time": time,
      }}
    >
      {particles}
    </div>
  );
};

export default Loading;
