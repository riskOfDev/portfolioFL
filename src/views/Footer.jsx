import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <hr className={styles.separator}></hr>
      <div>
        ©2023 Developed by riskOfDev & FL<br></br>
        with nextjs, chakraui and <span>love</span>
      </div>
    </div>
  );
};

export default Footer;
