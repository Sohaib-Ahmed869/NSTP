import React, { useState, useEffect } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import companies from "../../Assets/companies.jpg";
import { FaRegCircleDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer";
const CompanyInfoPage = () => {
  const navigate = useNavigate();
  const benefits = [
    "Cleaning Service (Subscription Based)",
    "CCTV Surveillance",
    "Free Internet",
    "Robust & Scalable Network Connection",
    "Security",
    "24/7/365 Access",
    "HVAC (Heating and Cooling)",
    "Fire Safety Systems",
    "Waste Management and Waste Treatment",
    "Access to Public Transport/Metro",
  ];

  return (
    <div>
      <div className="mt-28 lg:p-48 lg:pt-10">
        <div>
          <p className="text-primary flex items-center gap-2">
            <span className="underline cursor-pointer" onClick={() => navigate("/")}>Home</span> <HiArrowSmRight />{" "}
            <span className="underline cursor-pointer" onClick={() => navigate("/explore")}>
              Explore{" "}
            </span>
            <HiArrowSmRight /> Company
          </p>
          <h1 className="font-bold text-4xl mt-4">Company Office Space</h1>
          <p className="text-gray-600 mt-5 text-sm">
            NSTP offers the companies with the best office spaces. The office
            spaces are designed to provide a comfortable and productive
            environment for the employees. The office spaces are equipped with
            all the necessary facilities and amenities to ensure the smooth
            functioning of the company. The office spaces are available in
            different sizes and can be customized according to the requirements
            of the company. The office spaces are located in prime locations and
            are well connected to the major business hubs of the city.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src={companies}
            alt="companies"
            className="w-full hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </div>
        <div className="flex items-center mt-10">
          <h2 className="text-2xl font-bold w-1/3">Target Audience</h2>
          <p className="text-gray-600 text-sm w-2/3">
            Science parks, growth accelerators, agencies, universities, and
            entrepreneurial support organizations
          </p>
        </div>
        <div className="flex items-start mt-10">
          <h2 className="text-2xl font-bold w-1/3">Global Reach</h2>
          <p className="text-gray-600 text-sm w-2/3">
            NSTP has a global reach and has partnerships with companies and
            organizations around the world. The office spaces are designed to
            cater to the needs of companies of all sizes and from all
            industries.
          </p>
        </div>
        <div className="flex items-start mt-10">
          <h2 className="text-2xl font-bold w-1/3">Eligibility</h2>
          <ul className="text-gray-600 text-sm w-2/3 flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircleDot className="text-primary" />
              Companies with innovative ideas and products
            </li>
            <li className="flex items-center gap-2">
              <FaRegCircleDot className="text-primary" />
              Companies looking to expand their operations
            </li>
            <li className="flex items-center gap-2">
              <FaRegCircleDot className="text-primary" />
              Companies looking for a professional and productive work
              environment
            </li>
          </ul>
        </div>
        <div className="flex items-start mt-10">
          <h2 className="text-2xl font-bold w-1/3">Benefits</h2>
          <ul className="text-gray-600 text-sm w-2/3 flex flex-col gap-3">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-2">
                <FaRegCircleDot className="text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start mt-10">
          <h2 className="text-2xl font-bold w-1/3">How to Apply?</h2>
          <div className="text-gray-600 text-sm w-2/3">
            <p className="text-gray-600 text-sm">
              Companies interested in renting office spaces at NSTP can fill the
              application form available on the website. The applications will
              be reviewed by the NSTP team, and the companies meeting the
              eligibility criteria will be contacted for further details.
            </p>
            <button className="text-black flex items-center mt-5" onClick={() => navigate("/tenancy")}> 
              Apply Now <HiArrowSmRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyInfoPage;
