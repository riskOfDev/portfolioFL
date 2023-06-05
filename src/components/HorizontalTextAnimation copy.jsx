import React, { useEffect, useState } from "react";

const titleStyle = {
  fontFamily: "var(--font-primary)",
  color: "black",
  fontSize: "15px",
  zIndex: 1,
  margin: 0,
  whiteSpace: "nowrap",
  marginTop: "auto",
  transition: "transform 0.3s ease-in-out",
};

const HorizontalTextAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setTranslateX(translateX + (scrollPosition - currentPosition) * 0.5); // Modify 0.5 to change speed
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, translateX]);

  return (
    <div>
      <div style={{ position: "sticky", top: 0 }}>
        <h1 style={{ ...titleStyle, transform: `translateX(${translateX}px)` }}>
          WEB DESIGN — INTERFACES — UI/UX — SITE WEB — LOGO — BRANDING — VISUAL
          IDENTITY — APP DESIGN — MOBILE DESIGN — WEB DESIGN — INTERFACES —
          UI/UX — SITE WEB — LOGO — BRANDINGWEB DESIGN — INTERFACES — UI/UX —
          SITE WEB — LOGO — BRANDING — VISUAL IDENTITY — APP DESIGN — MOBILE
          DESIGN — WEB DESIGN — INTERFACES — UI/UX — SITE WEB — LOGO — BRANDING
        </h1>
      </div>
    </div>
  );
};

export default HorizontalTextAnimation;
