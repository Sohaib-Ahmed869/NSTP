import React, { useEffect, useState } from "react";
import nstplogo from "../Assets/nstp.png";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="z-10 bg-black text-white p-7 rounded-3xl mt-5 mb-5 w-4/5 border-4 border-gray-300 flex justify-between items-center fixed">
      <div className="flex space-x-5 items-center">
        <img src={nstplogo} alt="nstp" className="w-12" />
        <h1 className="text-2xl text-center border-r-2 pr-5 font-bold">NSTP</h1>
      </div>
      <div className="flex space-x-5 items-center">
        <a
          href="#"
          className={`cursor-pointer ${
            activeLink === "/" ? "text-green-500" : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/")}
        >
          Home
        </a>
        <a
          className={`cursor-pointer ${
            activeLink === "/about" ? "text-green-500" : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/about")}
        >
          About
        </a>
        <a
          className={`cursor-pointer ${
            activeLink === "/innovate"
              ? "text-green-500"
              : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/innovate")}
        >
          Innovate
        </a>
        <a
          href="#"
          className={`cursor-pointer ${
            activeLink === "/sectors"
              ? "text-green-500"
              : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/sectors")}
        >
          Sectors
        </a>
        <a
          className={`cursor-pointer ${
            activeLink === "/events" ? "text-green-500" : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/events")}
        >
          Events
        </a>
        <a
          className={`cursor-pointer ${
            activeLink === "/partnerships"
              ? "text-green-500"
              : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/partnerships")}
        >
          Associations & Partnerships
        </a>
        <a
          className={`cursor-pointer ${
            activeLink === "/contact"
              ? "text-green-500"
              : "hover:text-green-500"
          }`}
          onClick={() => handleClick("/contact")}
        >
          Contact
        </a>
        <a
          className="hover:text-gray-800 bg-green-500 text-black font-bold p-3 rounded-full cursor-pointer"
          onClick={() => handleClick("/tenancy")}
        >
          Pitch us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
