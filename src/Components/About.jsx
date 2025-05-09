import React from "react";
import { Info } from "../data/Constants";

const About = () => {
  return (
    <div name="about" className="bg-slate-900 w-full h-screen text-gray-300">
      <div className="max-w-[1000px] h-full mx-auto justify-center text-center py-20 items-center">
        <h2 className="text-center inline py-[5px] text-4xl font-bold border-b-4 border-[#398676] ">
          About
        </h2>
        <div className="w-full mx-auto grid grid-cols-1  gap-8 mt-4 p-4 text-[15px] text-justify md:text-xl text-gray-200">
          <p>{Info.experience}</p>
          <p>{Info.experiencePara}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
