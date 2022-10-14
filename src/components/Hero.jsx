import React from "react";
import styles from "../style";
import { logo, heroImage } from "../assets";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={logo} alt="dalio-logo" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Welcome </span>
            to my <span className="text-white">portfolio</span> enjoy
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hello i'm
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Dalion</span>
          </h1>
        </div>

        <h1 className="font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <span>| </span>
          <Typewriter
            words={["Developer", "Designer", "Student"]}
            loop={0}
            typeSpeed={70}
            deleteSpeed={70}
          />
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This page was created by Daniel Martinez, using react and other
          dependencies, if you want to learn more about me:{" "}
          <a href="https://github.com/D4lion">GitHub</a>{" "}
          <a href="https://www.instagram.com/aloofdann/">Instagram</a>
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={heroImage} className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      </div>
    </section>
  );
};

export default Hero;
