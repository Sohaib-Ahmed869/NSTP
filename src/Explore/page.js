import React, { useState, useEffect } from "react";
import internship from "../Assets/internships.png";
import corworking from "../Assets/corworking.png";
import explore from "../Assets/explore.png";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./explore.css";

const Students = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-4xl">
        You have been matched with the below programs:
      </h1>
      <div className="mt-5">
        <p className="text-gray-700">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="bg-gray-100 p-5 rounded-lg w-1/2 relative z-10">
          <div className="w-5/6">
            <h1 className="text-primary">Internship Program</h1>
            <p className="text-gray-700">
              NSTP offers a 6-month internship program for students in their
              final year of graduation. The program is designed to give students
              real-world experience in the tech industry.
            </p>
          </div>
          <div className="w-1/3 flex justify-end">
            <img
              src={internship}
              alt="coworking"
              className="h-24 absolute right-2 bottom-2"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg w-1/2 relative z-10">
          <div className="w-5/6">
            <h1 className="text-primary">Hatch 8 Incubation Program</h1>
            <p className="text-gray-700">
              NSTP offers a co-working space for students who are working on
              their startup ideas. The program provides mentorship, networking
              opportunities, and access to resources to help students grow their
              startups.
            </p>
          </div>
          <div className="w-1/3 flex justify-end">
            <img
              src={corworking}
              alt="coworking"
              className="h-24 absolute right-2 bottom-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationalInstitutes = () => {
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-4xl">
        You have been matched with the below programs:
      </h1>

      <div className="mt-5">
        <p className="text-gray-700">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="bg-gray-100 p-5 rounded-lg w-full relative z-10">
          <div className="w-5/6">
            <h1 className="text-primary">Book a Tour</h1>
            <p className="text-gray-700">
              NSTP offers a 6-month internship program for students in their
              final year of graduation. The program is designed to give students
              real-world experience in the tech industry. Get a chance to visit
              the NSTP campus and explore the facilities and programs offered by
              NSTP. This will help you understand how NSTP can help your
              students grow and develop their skills.
            </p>
            <button className="text-black flex items-center">
              Learn More <HiArrowRight />
            </button>
          </div>
          <img
            src={explore}
            alt="explore"
            className="h-36 absolute right-2 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

const Startup = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-4xl">
        You have been matched with the below programs:
      </h1>

      <div className="mt-5">
        <p className="text-gray-700">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="flex flex-row gap-5 mt-5 w-1/2">
          <div className="bg-gray-100 p-5 rounded-lg w-full relative z-10">
            <div className="w-5/6">
              <h1 className="text-primary">Hatch 8 Incubation Program</h1>
              <p className="text-gray-700">
                NSTP offers a co-working space for students who are working on
                their startup ideas. The program provides mentorship, networking
                opportunities, and access to resources to help students grow
                their startups.
              </p>
              <button
                className="text-black flex items-center"
                onClick={() => navigate("/explore/hatch")}
              >
                Learn More <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5 w-1/2">
          <div className="bg-gray-100 p-5 rounded-lg w-full relative z-10">
            <div className="w-5/6">
              <h1 className="text-primary">Cube 8 Accelerator Program</h1>
              <p className="text-gray-700">
                NSTP offers a working space for the startups who have already
                developed their product and are looking to scale. The program
                provides mentorship, networking opportunities, and access to
                resources to help startups grow their business.
              </p>
              <button
                className="text-black flex items-center"
                onClick={() => navigate("/explore/hatch")}
              >
                Learn More <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-4xl">
        You have been matched with the below programs:
      </h1>

      <div className="mt-5">
        <p className="text-gray-700">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="bg-gray-100 p-5 rounded-lg w-full relative z-10">
          <div className="w-5/6">
            <h1 className="text-primary">Corporate Innovation Program</h1>
            <p className="text-gray-700">
              NSTP offers a 6-month internship program for students in their
              final year of graduation. The program is designed to give students
              real-world experience in the tech industry. Get a chance to visit
              the NSTP campus and explore the facilities and programs offered by
              NSTP. This will help you understand how NSTP can help your
              students grow and develop their skills.
            </p>
            <button
              className="text-black flex items-center"
              onClick={() => navigate("/explore/company")}
            >
              Learn More <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExploreNSTP = () => {
  const navigate = useNavigate();
  const [possibleRoles, setPossibleRoles] = useState([
    "Student",
    "Educational Institute",
    "Startup",
    "Company",
  ]);
  const [selectedRole, setSelectedRole] = useState("");
  return (
    <div className="p-6 lg:p-20 mt-28 animate-fade-up">
      <h1 className="hollow-text-main">Explore NSTP</h1>

      <p className="mt-5 text-gray-700">
        Help us get you to the right place! We've put together tailored journeys
        based on your needs. Just select the category that applies to you.
      </p>

      <div className="mt-5">
        <p className="text-gray-700 text-xl">I am a...</p>
        <div className="grid grid-cols-4 gap-10 h-36 mt-4">
          {possibleRoles.map((role) => (
            <button
              key={role}
              className={`p-2 px-3 rounded-lg ${
                selectedRole === role
                  ? "bg-primary text-white"
                  : "bg-green-200 hover:bg-green-400"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      {selectedRole === "Student" && <Students />}
      {selectedRole === "Educational Institute" && <EducationalInstitutes />}
      {selectedRole === "Startup" && <Startup />}
      {selectedRole === "Company" && <Company />}
    </div>
  );
};

export default ExploreNSTP;
