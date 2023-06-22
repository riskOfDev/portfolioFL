import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Career.module.css";
import HorizontalTextAnimation from "../components/HorizontalTextAnimation";

const MotionBox = chakra(motion.div);

const Career = () => {
  const controlsLeft = useAnimation();
  const controlsContent = useAnimation();
  const controlsRight = useAnimation();

  const { ref: refLeft, inView: inViewLeft } = useInView({ triggerOnce: true });
  const { ref: refContent, inView: inViewContent } = useInView({
    triggerOnce: true,
  });
  const { ref: refRight, inView: inViewRight } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inViewLeft) controlsLeft.start("visible");
    if (inViewContent) controlsContent.start("visible");
    if (inViewRight) controlsRight.start("visible");
  }, [
    controlsLeft,
    inViewLeft,
    controlsContent,
    inViewContent,
    controlsRight,
    inViewRight,
  ]);

  return (
    <div style={{ height: "100vh" }} id="career">
      <HorizontalTextAnimation text="WEB DESIGN — INTERFACES — UI/UX — SITE WEB — LOGO — BRANDING — VISUAL IDENTITY — APP DESIGN — MOBILE DESIGN — GRAPHIC DESIGN — TYPOGRAPHY — PRODUCT DESIGN — ANIMATION — DIGITAL MARKETING — RESPONSIVE DESIGN — PRINT DESIGN — ILLUSTRATION — WEB DEVELOPMENT — USER RESEARCH — PROTOTYPE DESIGN — CONTENT STRATEGY — SOCIAL MEDIA DESIGN — SEARCH ENGINE OPTIMIZATION — CUSTOMER EXPERIENCE — LANDING PAGE DESIGN — MARKETING STRATEGY — INFORMATION ARCHITECTURE — USER TESTING — E-COMMERCE DESIGN — DIGITAL STRATEGY — USER PERSONAS — WIREFRAMING" />
      <div style={{ height: "120px" }}></div>

      <Box className={styles.container}>
        <MotionBox
          ref={refLeft}
          initial="hidden"
          animate={controlsLeft}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
          className={styles.verticalLetters}
        >
          <span>C</span>
          <span>A</span>
          <span>R</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
        </MotionBox>

        <MotionBox
          ref={refContent}
          initial="hidden"
          animate={controlsContent}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8 } },
          }}
          className={styles.mainContent}
        >
          I am a digital enthusiast, obssesed with delivering immaculate
          <br />
          products that brings transformative user experiences.
          <br />
          I hold a certification as a UI/UX Designer from Coderhouse.
          <br />
          Currently, I am working as a UI/UX Designer at riskOfDev ( since
          February 2023 ) ( Ad honorem )
        </MotionBox>

        <MotionBox
          ref={refRight}
          initial="hidden"
          animate={controlsRight}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
          className={styles.verticalLettersRight}
        >
          <span>C</span>
          <span>A</span>
          <span>R</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
        </MotionBox>
      </Box>

      <div style={{ height: "120px" }}></div>

      <HorizontalTextAnimation
        defaultDirection="left"
        defaultOffset={-1600}
        text="WEB DESIGN — INTERFACES — UI/UX — SITE WEB — LOGO — BRANDING — VISUAL IDENTITY — APP DESIGN — MOBILE DESIGN — GRAPHIC DESIGN — TYPOGRAPHY — PRODUCT DESIGN — ANIMATION — DIGITAL MARKETING — RESPONSIVE DESIGN — PRINT DESIGN — ILLUSTRATION — WEB DEVELOPMENT — USER RESEARCH — PROTOTYPE DESIGN — CONTENT STRATEGY — SOCIAL MEDIA DESIGN — SEARCH ENGINE OPTIMIZATION — CUSTOMER EXPERIENCE — LANDING PAGE DESIGN — MARKETING STRATEGY — INFORMATION ARCHITECTURE — USER TESTING — E-COMMERCE DESIGN — DIGITAL STRATEGY — USER PERSONAS — WIREFRAMING"
      />
    </div>
  );
};

export default Career;
