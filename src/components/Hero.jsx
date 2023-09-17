import React from "react";
import Social from "./Hero/Social";
import MyDetails from "./Hero/MyDetails";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-4 sm:justify-between sm:gap-0 sm:h-screen items-center mt-16 sm:mt-0">
      <Social />
      <div className="flex flex-col-reverse sm:flex-row gap-8 items-center">
        <MyDetails />
        <div className="hero-img"></div>
      </div>
    </section>
  );
};

export default Hero;
