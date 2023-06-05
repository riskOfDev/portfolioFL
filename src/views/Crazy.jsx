import Image from "next/image";
import React from "react";

import HorizontalTextAnimation from "../components/HorizontalTextAnimation";

const Crazy = () => {
  return (
    <div>
      {/*  */}
      <Image width={50} height={50} alt="smiley" />
      {/*  */}
      <div>
        <HorizontalTextAnimation
          text="HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / "
          defaultDirection="left"
        />
        <HorizontalTextAnimation
          text="WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / WORK TOGETHER / "
          defaultDirection="right"
        />
        <HorizontalTextAnimation
          text="HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / HIRE MY TALENT / "
          defaultDirection="left"
        />
      </div>
      {/*  */}
      <Image width={50} height={50} alt="smiley" />
    </div>
  );
};

export default Crazy;
