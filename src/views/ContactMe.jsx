import React from "react";
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div id="contact">
      {/* Linea */}
      <div></div>
      <div className={styles.wanna}>
        <img className={styles.line} src="/footer/line.png"></img>
        <br />
        WANNA SEND <br /> ME A MESSAGE?
      </div>
      <div>
        <div>
          <div className={styles.ideas}>
            SEND ME YOUR <span className={styles.ideasWord}>IDEAS</span>
            <span className={styles.flechas}>
              <span style={{ color: "rgba(143, 0, 255, 0.2)" }}>{`>`}</span>
              <span style={{ color: "rgba(143, 0, 255, 0.3)" }}>{`>`}</span>
              <span style={{ color: "rgba(143, 0, 255, 0.4)" }}>{`>`}</span>
              <span style={{ color: "rgba(143, 0, 255, 1)" }}>{`>`}</span>
            </span>
            <span>
              <h1 className={styles.contact}>CONTACT</h1>
            </span>
          </div>
        </div>
        <div>
          <ul className={styles.contactList}>
            <a href="mailto: florencialopez271100@gmail.com">
              <li>EMAIL</li>
            </a>
            <a href="">
              <li>LINKEDIN</li>
            </a>
            <a href="">
              <li>BEHANCE</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
