import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <hr className={styles.separator}></hr>
      <div>
        ©{year} developed by riskOfDev & FL<br></br>
        with Nextjs, Chakra UI and <span className={styles.rainbow}>love</span>
      </div>
    </div>
  );
};

export default Footer;
