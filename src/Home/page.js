import React from "react";
import Service from "./Services/service";
import Statistics from "./Stats/stats";

import pitchus from "../Assets/pitchus.png";
import { FiArrowUpRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import nstplogocolored from "../Assets/nstplogocolored.png";

import ban from "../Assets/nstp.jpg";
import nstp from "../Assets/nstp.png";
import decor from "../Assets/robo-arm.png";

import { BiCalendar, BiWorld } from "react-icons/bi";
import { FaSchool, FaSeedling, FaUserFriends } from "react-icons/fa";
import { PiPerson } from "react-icons/pi";

import Footer from "../Components/footer";

import "../App.css";

const NSTPStats = [
  {
    icon: <BiCalendar size={50} />,
    title: "Oct 2020",
    value: "Established",
  },
  {
    icon: <FaSchool size={50} />,
    title: "100+",
    value: "Hi-Tech Companies",
  },
  {
    icon: <FaSeedling size={50} />,
    title: "64",
    value: "Startups",
  },
  {
    icon: <BiWorld size={50} />,
    title: "15+",
    value: "International Firms",
  },
  {
    icon: <PiPerson size={50} />,
    title: "6000+",
    value: "Hi-Tech Jobs Created",
  },
  {
    icon: <FaUserFriends size={50} />,
    title: "2000+",
    value: "Internships Provided",
  },
];

const NSTPAbout = () => {
  return (
    <div className="p-6 lg:p-32 lg:pt-40 lg:h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-20">
        <img
          src={nstplogocolored}
          alt="NSTP Logo"
          className="w-2/5 lg:w-1/5"
        ></img>
        <div className="w-full lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL SCIENCE AND TECHNOLOGY PARK -{" "}
            <span className="text-green-400">
              PAKISTAN'S PREMIER TECHNOLOGY PARK FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-md font-normal text-gray-500 mb-10 lg:leading-6 lg:text-justify">
            National Science and Technology Park (NSTP) is a technology park
            located in Islamabad, Pakistan. The park is home to a number of
            high-tech companies, startups, and international firms. The park is
            designed to foster innovation and collaboration among its tenants,
            and to provide them with the resources they need to succeed. NSTP is
            also home to a number of research centers and institutes, and is
            known for its strong research program. The park is also home to a
            number of educational institutions, and is a hub for technology
            education and training. NSTP is committed to promoting science and
            technology in Pakistan, and to helping the country develop a strong,
            knowledge-based economy.
          </p>
        </div>
      </div>
      {
        <div className="grid grid-cols-3 lg:grid-cols-6 mt-0 lg:mt-20 w-full">
          {NSTPStats.map((stat) => (
            <div className="flex flex-col items-center mt-3">
              <div className="rounded-full p-2 lg:p-4 bg-[#d6f8cb]">
                {stat.icon}
              </div>
              <div className="text-md lg:text-lg font-bold mt-4">{stat.title}</div>
              <p className="text-sm lg:text-md text-center font-normal text-gray-500">{stat.value}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

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
        className="flex flex-col items-start"
      >
        <div className="flex items-center lg:p-10 px-5 pt-10 pb-2 mt-28">
          <div>
            <p className="text-5xl text-white text-left mt-5 font-bold slide-left hollow-text">
              NATIONAL SCIENCE & TECHNOLOGY PARK
            </p>
            {/* <p className="text-2xl text-white text-left slide-left">
              Defining Innovation
            </p> */}
            <h3 className="text-xl md:text-3xl text-white italic text-left mt-3 font-bold">
              Pakistan's First Science Park
            </h3>
            <h2 className="text-sm md:text-xl text-white text-left mt-2 italic">
              Hi-Tech Economic Zone
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center font-bold p-5 pt-0 gap-3 lg:gap-5 lg:ml-5">
          <button className="lg:text-md md:text-sm text-xs bg-transparent border border-white text-white lg:py-3 lg:px-5 px-3 py-2 hover:bg-green-600 hover:text-white rounded-lg">
            Learn More
          </button>
          <button className="lg:text-md md:text-sm text-xs bg-transparent border border-white text-white lg:py-3 lg:px-5 px-3 py-2 hover:bg-green-600 hover:text-white rounded-lg">
            Contact Us
          </button>
        </div>

        <div className="flex w-full bottom-0 absolute justify-between pr-5 lg:pr-10">
          <div className="relative flex items-center justify-center">
            <div
              className="text-white absolute z-20 flex flex-col items-center rounded-full hover:bg-black hover:text-white py-5 px-4 lg:py-3 lg:px-5 cursor-pointer"
              onClick={() => (window.location.href = "/tenancy")}
            >
              <FiArrowUpRight className="text-2xl lg:text-5xl" />
              <h1 className="text-xs lg:text-sm font-bold">Pitch Us</h1>
            </div>
            <img
              src={pitchus}
              alt="pitchus"
              className="w-40 lg:w-44 animate-spin-slow"
            />
          </div>
          <div className="text-right flex flex-col items-end justify-end mb-10 gap-1 lg:gap-5">
            <h1 className="text-lg lg:text-4xl text-white text-right flex items-baseline">
              Pakistan's
              <div className="flex ml-1">
                <span className="text-green-400 hollow-text3">1</span>
                <span className="text-white hollow-text2 text-sm items-start justify-start">
                  st
                </span>
              </div>
              <br />
            </h1>
            <h1 className="text-md lg:text-4xl text-white text-right flex items-center">
              Technology & Science Park
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="lg:p-0 p-5">
          <div className="flex flex-col lg:flex-row text-left lg:items-end lg:p-20 lg:pb-4">
            <h1 className="text-2xl lg:text-4xl font-bold lg:text-left">
              We Support Your{" "}
            </h1>
            <div className="lg:ml-3 text-3xl lg:text-5xl font-bold gradient-text text-green-400">
              <Typewriter
                options={{
                  strings: [
                    " Startup Growth",
                    " Business Innovation",
                    " AgriTech Business",
                    " AutoTech Business",
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
          <h1 className="text-2xl lg:text-5xl font-bold lg:p-20 lg:pt-0 tracking-tighter">
            Journey From Zero To One
          </h1>
        </div>
        <img src={decor} alt="decor" className="lg:w-1/4 lg:block hidden" />
      </div>
      <Statistics />
      <Service />
      <NSTPAbout />
      <Footer />
    </div>
  );
};

export default Home;
