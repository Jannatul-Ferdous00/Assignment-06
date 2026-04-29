import React from "react";
import BannerImage from "../assets/banner.png";
import DotSign from "../assets/DotSign.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative flex overflow-hidden items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2 bg-blue-100 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full max-w-full">
            <img src={DotSign} className="w-4 h-4" />{" "}
            <p className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              {" "}
              New: AI-Powered Tools Available
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Supercharge Your
            <br />
            <span className=" bg-clip-text">Digital Workflow</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
            <button
              className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                      rounded-4xl py-6 px-8 font-semibold text-sm flex items-center justify-center gap-3 text-white w-full sm:w-auto
                         transition-all duration-300 hover:from-[#9514FA] hover:to-[#4F39F6]"
            >
              Explore Products
            </button>
            <button className="btn btn-primary btn-outline rounded-4xl py-6 font-semibold text-sm flex items-center justify-center gap-3 group w-full sm:w-auto">
              {" "}
              <FaPlay></FaPlay> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
