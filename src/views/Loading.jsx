import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = ({ isVisible }) => {
  return (
    <div
      className={
        isVisible
          ? styles["loader-container"]
          : `${styles["loader-container"]} ${styles["fade-out"]}`
      }
    >
      <div
        className={`${styles.background} ${
          isVisible ? styles["bg-fade-in"] : styles["bg-fade-out"]
        }`}
      ></div>
      <div
        className={`${styles.loader} ${
          isVisible ? styles["fade-in"] : styles["fade-out"]
        }`}
      >
        Loading...
      </div>
    </div>
  );
};

export default Loading;
