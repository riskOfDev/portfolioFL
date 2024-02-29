import React from "react";
import styles from "../styles/ContactMe.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const ContactMe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="contact"
      variants={variants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      {/* Linea */}
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
            <li>
              <a href="mailto: florencialopez.uxui@gmail.com">
                florencialopez.uxui@gmail.com
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/florencia-l%C3%B3pez-uxui/"
                target="_blank"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/florencialpez5" target="_blank">
                BEHANCE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
