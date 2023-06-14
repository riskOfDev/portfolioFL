import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import HoverEffect from "../components/HoverEffect";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent, white)",
      }}
    >
      <div style={{ position: "relative" }}>
        <HoverEffect />

        <div className={styles.container} style={{ height: "100vh" }}>
          <div style={{ height: "80px" }}></div>

          <div className={styles.title}>
            <h1>HELLO, I'M FLORENCIA</h1>
            <h2>UX/UI DESIGNER</h2>
          </div>

          <div>
            <div className={styles.line}>
              <img alt="line" src="/line/ESCALERA.png" />
            </div>
          </div>

          <div className={styles.socialMedia}>
            <ul>
              <li>
                <a href="florencialopez271100@gmail.com">
                  <Image
                    alt="mail"
                    width="50"
                    height="50"
                    src="/social/mail.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/florencialpez5">
                  <Image
                    alt="behance"
                    width="50"
                    height="50"
                    src="/social/behance.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/florencia-l%C3%B3pez-uxui/">
                  <Image
                    alt="linkedin"
                    width="50"
                    height="50"
                    src="/social/linkedin.png"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
