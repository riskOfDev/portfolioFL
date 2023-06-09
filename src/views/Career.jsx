import React from "react";
import styles from "../styles/Career.module.css";

const Career = () => {
  return (
    <div>
      <div className={styles.container}>
        {/* Side Left */}
        <div className={styles.verticalLetters}>
          <span>C</span>
          <span>A</span>
          <span>R</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
        </div>

        {/* Content */}
        <div className={styles.mainContent}>
          I'm a digital enthusiast, obssesed with delivering immaculatte
          <br />
          products that deliver transformative user experiences.
        </div>
        {/* Side Right */}
        <div className={styles.verticalLettersRight}>
          <span>C</span>
          <span>A</span>
          <span>R</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
        </div>
      </div>
    </div>
  );
};

export default Career;
