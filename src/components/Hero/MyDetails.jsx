import React from "react";

const MyDetails = () => {
  return (
    <div className="lg:w-2/3 flex flex-col items-center lg:items-start lg:ml-8 w-full p-3 sm:p-0">
      <h1 className="text-3xl  md:text-5xl lg:text-6xl font-bold flex gap-2 items-center">
        Gabriele Notonica <img src="./hand.svg" alt="Hand Emoji" />{" "}
      </h1>
      <h2 className="text-2xl md:text-2xl font-semibold mt-2">Full Stack Developer</h2>
      <p className="text-lg lg:text-xl text-gray-500 mt-8 text-center lg:text-left">
        I'm a full stack developer based in Agrigento, Italy with a passion for
        creating responsive and dynamic web applications that provide an
        excellent user experience.
      </p>
      <a href="./CVEng.pdf" target="_blank" className="bg-gray-700 hover:bg-[#f06a6a] text-white font-bold py-4 px-2 text-sm lg:text-xl  mt-8 rounded-2xl w-full md:w-1/3 xl:w-1/4 flex gap-4 items-center justify-center">
        Download CV
        <i class="bx bx-download"></i>
      </a>
    </div>
  );
};

export default MyDetails;
