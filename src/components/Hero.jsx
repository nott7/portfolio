import React from "react";
import Social from "./Hero/Social";
import MyDetails from "./Hero/MyDetails";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between h-screen items-center">
      <Social />
      <div className="flex gap-8 items-center">
        <MyDetails />
        <div className="hero-img"></div>
      </div>
    </section>
  );
};

export default Hero;
