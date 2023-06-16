import React from "react";
import styles from "../styles/Career.module.css";
import HorizontalTextAnimation from "../components/HorizontalTextAnimation";

const Career = () => {
  return (
    <div style={{ height: "100vh" }} id="career">
      <HorizontalTextAnimation
        text="WEB DESIGN — INTERFACES — UI/UX — SITE WEB — LOGO — BRANDING — VISUAL
          IDENTITY — APP DESIGN — MOBILE DESIGN — GRAPHIC DESIGN — TYPOGRAPHY — PRODUCT DESIGN — ANIMATION — DIGITAL MARKETING — RESPONSIVE DESIGN — PRINT DESIGN — ILLUSTRATION — WEB DEVELOPMENT — USER RESEARCH — PROTOTYPE DESIGN — CONTENT STRATEGY — SOCIAL MEDIA DESIGN — SEARCH ENGINE OPTIMIZATION — CUSTOMER EXPERIENCE — LANDING PAGE DESIGN — MARKETING STRATEGY — INFORMATION ARCHITECTURE — USER TESTING — E-COMMERCE DESIGN — DIGITAL STRATEGY — USER PERSONAS — WIREFRAMING"
      />
      <div style={{ height: "120px" }}></div>

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
      <div style={{ height: "120px" }}></div>
      <HorizontalTextAnimation
        defaultDirection="left"
        defaultOffset={-1400}
        text="WEB DESIGN — INTERFACES — UI/UX — SITE WEB — LOGO — BRANDING — VISUAL
          IDENTITY — APP DESIGN — MOBILE DESIGN — GRAPHIC DESIGN — TYPOGRAPHY — PRODUCT DESIGN — ANIMATION — DIGITAL MARKETING — RESPONSIVE DESIGN — PRINT DESIGN — ILLUSTRATION — WEB DEVELOPMENT — USER RESEARCH — PROTOTYPE DESIGN — CONTENT STRATEGY — SOCIAL MEDIA DESIGN — SEARCH ENGINE OPTIMIZATION — CUSTOMER EXPERIENCE — LANDING PAGE DESIGN — MARKETING STRATEGY — INFORMATION ARCHITECTURE — USER TESTING — E-COMMERCE DESIGN — DIGITAL STRATEGY — USER PERSONAS — WIREFRAMING"
      />
    </div>
  );
};

export default Career;
