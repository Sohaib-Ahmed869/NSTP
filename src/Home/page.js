import React from "react";
import Service from "./Services/service";
import Statistics from "./Stats/stats";
import Gallery from "./Gallery/gallery";
import Companies from "./Companies/companies";
import Partners from "./Partners/partner";
import CTA from "./CTA/page";

import pitchus from "../Assets/preview.png";
import { FiArrowUpRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import nstplogocolored from "../Assets/nstplogocolored.png";

import ban from "../Assets/nstp.jpg";
import nstp from "../Assets/nstp.png";
import decor from "../Assets/robo-arm.png";

import { BiCalendar, BiWorld } from "react-icons/bi";
import { FaSchool, FaSeedling, FaUserFriends } from "react-icons/fa";
import { PiPerson } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa";

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
    <div className="p-6 md:p-32 lg:pt:40 lg:p-32 lg:pt-40 md:min-h-screen lg:min-h-screen">
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center gap-10 md:gap-20 lg:gap-20">
        <img
          src={nstplogocolored}
          alt="NSTP Logo"
          className="w-2/5 lg:w-1/5 md:w-1/5"
        ></img>
        <div className="w-full lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL SCIENCE AND TECHNOLOGY PARK -{" "}
            <span className="text-green-400">
              PAKISTAN'S PREMIER TECHNOLOGY PARK FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-md font-normal text-gray-500 mb-10 lg:leading-6 md:leading-6 md:text-justify lg:text-justify">
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
        <div className="grid grid-cols-3 lg:grid-cols-6 mt-0 lg:mt-20 w-full md:grid-cols-6 md:mt-20">
          {NSTPStats.map((stat) => (
            <div className="flex flex-col items-center mt-3">
              <div className="rounded-full p-2 lg:p-4 bg-[#d6f8cb]">
                {stat.icon}
              </div>
              <div className="text-md lg:text-lg font-bold mt-4">
                {stat.title}
              </div>
              <p className="text-sm lg:text-md text-center font-normal text-gray-500">
                {stat.value}
              </p>
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
            <h3 className="text-xl md:text-5xl text-white italic text-left mt-10 font-bold">
              Innovation PowerHouse of Pakistan
            </h3>
            <h2 className="text-sm md:text-xl text-white text-left mt-2 italic">
              Hi-Tech Economic Zone and STZA approved by GoP
            </h2>
          </div>
        </div>

        <div className="flex w-full bottom-0 absolute justify-between pr-5 lg:pr-10">
          <div className="relative flex items-center justify-center">
            <div
              className="text-white absolute z-20 flex flex-col items-center rounded-full hover:bg-[#90C74B] hover:text-white py-5 px-4 lg:py-3 lg:px-5 cursor-pointer"
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
                <span className="text-green-400 text-6xl md:text-8xl">1</span>
                <span className="text-white hollow-text2 text-sm items-start justify-start">
                  st
                </span>
              </div>
              <br />
            </h1>
            <h1 className="text-md lg:text-4xl text-white text-right flex items-center">
              Science & Technology Park
            </h1>
          </div>
        </div>
      </div>

      <NSTPAbout />
      <Statistics />
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center p-10 pr-0 lg:p-20 lg:pr-0 lg:pb-0 lg:pt-0">
        <div className="lg:p-0 pr-10 md:pr-0">
          <h1 className="text-2xl lg:text-5xl font-bold  tracking-tighter">
            Journey From Zero To One
          </h1>

          <h1 className="text-md lg:text-xl lg:text-left mt-5 text-justify">
            Founded by Pakistan's premier science and technology university,
            NUST, NSTP cultivates a vibrant ecosystem that supports startups and
            fosters advanced R&D and innovation for global entities. The Park is
            a hub for cutting-edge tech-based companies.
          </h1>

          <button
            className="bg-white text-black p-2 px-3 lg:px-10 mt-5 border-2 border-black w-auto sm:w-full md:w-auto lg:w-auto"
            onClick={() => (window.location.href = "/about")}
          >
            About Us
          </button>
        </div>
        <img src={decor} alt="decor" className="lg:w-1/4 lg:block md:w-1/4 md:block" />
      </div>
      <Service />
      <div className="flex flex-col items-center justify-center p-20 pb-0">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-3xl flex items-center justify-center gap-5">
          <FaCameraRetro className="text-black text-4xl lg:text-5xl" />
          Highlights
        </h1>
      </div>
      <Gallery />
      <Partners />
      <div className="flex flex-col items-center justify-center p-10 pt-0 pb-0">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-3xl">
          Companies at NSTP
        </h1>
      </div>
      <Companies />
      <div className="flex flex-col items-center justify-center p-10 pt-0 pb-0">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-sm font-small text-center text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-700 focus:z-10 focus:ring-4 focus:ring-blue-300" 
        >
          View All Companies
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
