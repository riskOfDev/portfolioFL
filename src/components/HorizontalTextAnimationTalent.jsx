import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  position: "sticky",
  top: "0",
};

const titleStyle = {
  fontFamily: "var(--font-primary)",
  fontSize: "13vh",
  zIndex: 1,
  margin: 0,
  whiteSpace: "nowrap",
  marginTop: "auto",
  transition: "transform 0.3s ease-in-out",
};

const HorizontalTextAnimationTalent = ({
  text,
  defaultDirection = "right",
  type = "notMiddle",
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateX, setTranslateX] = useState(-3100);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      let newTranslateX;
      if (defaultDirection === "right") {
        newTranslateX = translateX + (scrollPosition - currentPosition) * 0.5;
      } else {
        newTranslateX = translateX - (scrollPosition - currentPosition) * 0.5;
      }
      setTranslateX(newTranslateX);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, translateX, defaultDirection]);

  return (
    <div
      style={{
        ...containerStyle,
        backgroundColor: type === "middle" ? "transparent" : "#8F00FF",
      }}
    >
      <h1
        style={{
          ...titleStyle,
          color: type === "middle" ? "#8F00FF" : "white",
          transform: `translateX(${translateX}px)`,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default HorizontalTextAnimationTalent;
