import React from "react";
import Service from "./Services/service";
import Statistics from "./Stats/stats";

import pitchu from "../Assets/pitchus.png";
import { FiArrowUpRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";

import ban from "../Assets/nstp.jpg";
import nstp from "../Assets/nstp.png";
import decor from "../Assets/robo-arm.png";

const Home = () => {
  return (
    <div className="">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${ban})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center justify-center"
      >
        <img src={nstp} alt="nstp" className="w-44" />
        <p className="text-4xl text-white text-center mt-5 font-bold slide-left">
          NSTP
        </p>
        <p className="text-2xl text-white text-center slide-left">
          Defining Innovation
        </p>
        <h3 className="text-4xl text-green-400 text-center mt-5 font-bold">
          Pakistan's First Science Park
        </h3>
        <h2 className="text-4xl text-white text-center mt-5">
          Hi-Tech Economic Zone
        </h2>
        <div className="flex w-full bottom-0 absolute">
          <div className="relative flex items-center justify-center">
            <div
              className=" text-white absolute z-20 flex flex-col items-center rounded-full hover:bg-black hover:text-white p-3 px-5 cursor-pointer"
              onClick={() => (window.location.href = "/tenancy")}
            >
              <FiArrowUpRight className="text-5xl" />
              <h1 className="text-sm font-bold">Pitch Us</h1>
            </div>
            <img src={pitchu} alt="pitchu" className="w-44 animate-spin-slow" />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="flex flex-row text-left items-end p-20 pb-4">
            <h1 className="text-4xl font-bold text-left">We Support Your </h1>
            <div className="ml-3 text-5xl font-bold gradient-text text-green-400">
              <Typewriter
                options={{
                  strings: [
                    " Startup Growth",
                    " Business Innovation",
                    " AgriTech Business",
                    " AutoTech BusinesS",
                    " DefTech Business",
                    " EdTech Business",
                    " EnergyTech Business",
                    " FinTech Business",
                    " HealthTech Business",
                    " SmartTech Business",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  pauseFor: 2000,
                }}
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold p-20 pt-0 tracking-tighter">
            Journey From Zero To One
          </h1>
        </div>
        <img src={decor} alt="decor" className="w-1/4" />
      </div>
      <Statistics />
      <Service />
    </div>
  );
};

export default Home;
