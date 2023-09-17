import React from "react";
import Social from "./Hero/Social";
import MyDetails from "./Hero/MyDetails";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row md:mt-8 gap-4 md:gap-8 sm:justify-between lg:gap-0 lg:h-screen items-center mt-16 sm:mt-0">
      <Social />
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
        <MyDetails />
        <div className="hero-img"></div>
      </div>
    </section>
  );
};

export default Hero;
