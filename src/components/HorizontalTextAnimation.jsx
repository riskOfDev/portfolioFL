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

const HorizontalTextAnimation = ({ text, defaultDirection = "right" }) => {
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
          {text}
        </h1>
      </div>
    </div>
  );
};

export default HorizontalTextAnimation;
