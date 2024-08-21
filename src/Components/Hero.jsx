import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      <div className="max-w-[1000PX] mx-auto px-8 h-full items-center flex flex-col justify-center">
        <div className="">
          <p className="text-[20px] font-semibold text-white">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#398676]">
            Nathaniel Idyege
          </h1>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#398676]">
            I am a Frontend Developer.
          </h2>
          <p className="text-gray-400 py-4 max-w-[700px]">
            I'm currently focused on creating visually appealing, and
            user-friendly web applications that provide excellent user
            experience.
          </p>
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
