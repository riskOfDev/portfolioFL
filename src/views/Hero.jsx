import React, { useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import HoverEffect from "../components/HoverEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const helloControls = useAnimation();
  const designerControls = useAnimation();
  const { ref: helloRef, inView: helloInView } = useInView({
    triggerOnce: true,
  });
  const { ref: designerRef, inView: designerInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (helloInView) {
      setTimeout(() => {
        helloControls.start("visible").then(() => {
          designerControls.start("visible");
        });
      }, 1350); // Delay both animations by 1 second
    }
  }, [helloControls, helloInView, designerControls]);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent, white)",
      }}
      id="home"
    >
      <div style={{ position: "relative" }}>
        <HoverEffect />

        <div className={styles.container} style={{ height: "100vh" }}>
          <div style={{ height: "80px" }}></div>

          <div className={styles.title}>
            <motion.div
              ref={helloRef}
              initial="hidden"
              animate={helloControls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <h1>HELLO, I&apos;M FLORENCIA</h1>
            </motion.div>
            <motion.div
              ref={designerRef}
              initial="hidden"
              animate={designerControls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
              transition={{ delay: 0.5 }} // Delay the fade-in of h2 by 0.5 seconds
            >
              <h2>UX/UI DESIGNER</h2>
            </motion.div>
          </div>

          <div>
            <div className={styles.line}>
              <img alt="line" src="/line/ESCALERA.png" />
            </div>
          </div>

          <div className={styles.socialMedia}>
            <ul>
              <li>
                <a href="florencialopez271100@gmail.com" target="_blank">
                  <Image
                    alt="mail"
                    width="50"
                    height="50"
                    src="/social/mail.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/florencialpez5"
                  target="_blank"
                >
                  <Image
                    alt="behance"
                    width="50"
                    height="50"
                    src="/social/behance.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/florencia-l%C3%B3pez-uxui/"
                  target="_blank"
                >
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
