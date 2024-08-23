import React from "react";
import Service from "./Services/service";
import Statistics from "./Stats/stats";

import pitchu from "../Assets/pitchus.png";
import { FiArrowUpRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import nstplogocolored from "../Assets/nstplogocolored.png";

import ban from "../Assets/nstp.jpg";
import nstp from "../Assets/nstp.png";
import decor from "../Assets/robo-arm.png";

import { BiCalendar, BiWorld } from "react-icons/bi";
import { FaSchool, FaSeedling, FaUserFriends } from "react-icons/fa";
import { PiPerson } from "react-icons/pi";

import Footer from "../Footer/footer";

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
    <div className="p-40">
      <div className="flex flex-row justify-between items-center gap-20">
        <div className="w-3/4">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL SCIENCE AND TECHNOLOGY PARK -{" "}
            <span className="text-green-400">
              PAKISTAN'S PREMIER TECHNOLOGY PARK FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
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
        <img src={nstplogocolored} alt="Pakistan Map" className="w-1/5"></img>
      </div>
      {
        <div className="flex flex-row justify-between gap-20 mt-20">
          {NSTPStats.map((stat) => (
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 bg-[#d6f8cb]">{stat.icon}</div>
              <h2 className="text-lg font-bold mt-4">{stat.title}</h2>
              <p className="text-md font-normal text-gray-500">{stat.value}</p>
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
        <div className="flex items-center p-10 mt-28">
          <div>
            <p className="text-5xl text-white text-left mt-5 font-bold slide-left hollow-text">
              NATIONAL SCIENCE & TECHNOLOGY PARK
            </p>
            {/* <p className="text-2xl text-white text-left slide-left">
              Defining Innovation
            </p> */}
            <h3 className="text-3xl text-white italic text-left mt-3 font-bold">
              Pakistan's First Science Park
            </h3>
            <h2 className="text-xl text-white text-left mt-2 italic">
              Hi-Tech Economic Zone
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center font-bold p-5 pt-0">
          <button className="bg-transparent border border-white text-white p-3 px-5 hover:bg-green-600 hover:text-white rounded-lg ml-5">
            Learn More
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-green-600 hover:text-white p-3 px-5 rounded-lg ml-5">
            Contact Us
          </button>
        </div>

        <div className="flex w-full bottom-0 absolute justify-between pr-10">
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
          <div className="text-right flex flex-col items-end gap-5">
            <h1 className="text-4xl text-white text-right flex items-baseline">
              Pakistan's
              <div className="flex">
                <span className="text-green-400 hollow-text3">1</span>
                <span className="text-white hollow-text2 text-sm items-start justify-start">
                  st
                </span>
              </div>
              <br />
            </h1>
            <h1 className="text-4xl text-white text-right flex items-center">
              Technology & Science Park
            </h1>
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
      <NSTPAbout />
      <Footer />
    </div>
  );
};

export default Home;
