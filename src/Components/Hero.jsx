import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "react-scroll";
import { Info } from "../data/Constants";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      <div className="max-w-[1000PX] mx-auto px-8 h-full items-center flex flex-col justify-center">
        <div className="">
          <p className="text-[20px] font-semibold text-white">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#398676]">
            {Info.name}
          </h1>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#398676]">
            {Info.role}
          </h2>
          <p className="text-gray-400 py-4 max-w-[700px]">{Info.aim}</p>
          <div>
            <Button
              className="group flex items-center text-white border-2 mt-6 py-4 px-6 hover:bg-[#398676]"
              to="projectListings"
            >
              View Works
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <HiArrowNarrowRight className="ml-4" />{" "}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
