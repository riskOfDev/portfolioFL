import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import HoverEffect from "../components/HoverEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [socialMediaControls] = useState([
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]);
  const helloControls = useAnimation();
  const designerControls = useAnimation();
  const { ref: helloRef, inView: helloInView } = useInView({
    triggerOnce: true,
  });
  const { ref: designerRef, inView: designerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: socialMediaRef, inView: socialMediaInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (helloInView) {
      setTimeout(() => {
        helloControls.start("visible").then(() => {
          designerControls.start("visible");
        });
      }, 1350);
    }

    if (socialMediaInView) {
      setTimeout(() => {
        // Add this setTimeout to delay the animations by 1 second
        socialMediaControls.forEach((control, i) => {
          setTimeout(() => {
            control.start("visible");
          }, i * 500); // delay each animation by 0.5 seconds
        });
      }, 1200);
    }
  }, [
    helloControls,
    helloInView,
    designerControls,
    socialMediaControls,
    socialMediaInView,
  ]);

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

          <div className={styles.socialMedia} ref={socialMediaRef}>
            <ul>
              {[
                "/social/mail.png",
                "/social/behance.png",
                "/social/linkedin.png",
              ].map((src, i) => (
                <li key={i}>
                  <motion.a
                    initial="hidden"
                    animate={socialMediaControls[i]}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.5 } },
                    }}
                    transition={{ delay: i * 0.5 }} // Delay each fade-in by 0.5 seconds
                  >
                    <Image
                      alt="social media"
                      width="50"
                      height="50"
                      src={src}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
