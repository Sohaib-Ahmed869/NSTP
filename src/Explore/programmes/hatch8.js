import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { MdPublic } from "react-icons/md";
import {
  FaChartLine,
  FaLeaf,
  FaDollarSign,
  FaBusinessTime,
} from "react-icons/fa";
import Timeline from "./Hatch8Components/timeline";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Gi3dMeeple } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";
import hatch from "../../Assets/hatch.jpeg";
import Footer from "../../Components/footer";

const Hatch = () => {
  const navigate = useNavigate();
  const about =
    "Hatch 8 is the nurturing space for great minds and brilliant ideas. It is a 5-month Pre-Incubation Programme for early stage startups that ensures development of entrepreneurs and their businesses. Residents in Hatch 8 are provided fully enabled working space in a professional environment, along with access to dynamic innovation ecosystem.  Startups are also given support and guidance through expert mentorship and coaching, along with access to research facilities, labs and human resource.";
  const whatweoffer = [
    "Network of MNCs, Hi-Tech SMEs and High Potential Startups",
    "Network of experienced CEOs, Business Leaders, Mentors and Coaches",
    "Network of Venture Capitalists and Angel Investors",
    "Local and International Associations",
    "Legal, Intellectual Property and Technology Transfer Experts",
    "Fully enabled Working Space in a Professional Environment",
    "Multitude of Laboratories and Testing Facilities",
    "Highly Qualified Faculty Members to conduct Research and Industrial Projects",
    "Highly Employable human resource across multiple disciplines and specialisations for internships and jobs",
  ];
  const whatStartipsWillAchieve = [
    {
      name: "Understanding of Local and International Entrepreneurial Ecosystem",
      icon: <MdPublic />,
    }, // from react-icons/md
    { name: "Vision and Strategy for the Business", icon: <FaChartLine /> }, // from react-icons/fa
    { name: "Viable Business Model(s)", icon: <HiOutlineDocumentReport /> }, // from react-icons/hi
    { name: "Sustainable Business Plan(s)", icon: <FaLeaf /> }, // from react-icons/fa
    { name: "Prototype(s) (if applicable)", icon: <Gi3dMeeple /> }, // from react-icons/gi
    {
      name: "Understanding of Regulatory Landscape",
      icon: <RiGovernmentLine />,
    }, // from react-icons/ri
    {
      name: "Skills for Financial and Investor Management",
      icon: <FaDollarSign />,
    }, // from react-icons/fa
    {
      name: "Business Knowledge and Entrepreneurial Skillset",
      icon: <FaBusinessTime />,
    }, // from react-icons/fa
  ];

  return (
    <div>
      <div className="mt-28 lg:p-48 lg:pt-10">
        <div>
          <p className="text-primary flex items-center gap-2">
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            <HiArrowSmRight />{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/explore")}
            >
              Explore{" "}
            </span>
            <HiArrowSmRight /> Company
          </p>
          <h1 className="font-bold text-4xl mt-4">
            Hatch 8 Incubation Program
          </h1>
          <p className="text-gray-600 mt-5 text-md text-justify">{about}</p>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src={hatch}
            alt="companies"
            className="w-full hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </div>
        <div className="flex items-start mt-10">
          <h2 className="text-2xl font-bold w-1/3">Target Audience</h2>
          <p className="text-gray-600 text-md w-2/3">
            Science parks, growth accelerators, agencies, universities, and
            entrepreneurial support organizations
          </p>
        </div>
        <div className="flex items-start mt-20">
          <h2 className="text-2xl font-bold w-1/3">What We Offer</h2>
          <div className="text-gray-600 text-md w-2/3 flex flex-col gap-2">
            {whatweoffer.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaRegCircleDot className="text-primary" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start mt-10">
          <h2 className="text-2xl font-bold w-1/3">
            What Startups Will Achieve
          </h2>
          <div className="text-gray-600 text-md w-2/3 flex flex-col gap-2">
            {whatStartipsWillAchieve.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-green-700">{item.icon}</div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default Hatch;
