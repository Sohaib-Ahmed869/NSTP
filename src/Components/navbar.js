import React, { useEffect, useState } from "react";
import nstplogo from "../Assets/nstp.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
    if (window.innerWidth < 768) {
      setMobileView(true);
    }

    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setMobileView(window.innerWidth < 768);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const handleClick = (link) => {
    window.location.href = link;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`z-50 bg-black text-white p-4 lg:p-6 rounded-3xl mt-5 mb-5 border-2 border-gray-300 flex justify-between items-center fixed ${
        isScrolling ? "bg-opacity-80" : "bg-opacity-100"
      }`}
      style={{ width: "95%" }} // Adjust height as needed
    >
      <div className="flex space-x-3 items-center">
        <img src={nstplogo} alt="nstp" className="w-8 lg:w-12" />
        <h1 className="text-lg font-bold">NSTP</h1>
      </div>
      {mobileView ? (
        <div>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-4 bg-black p-5 rounded-xl border border-gray-300">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className={`cursor-pointer ${
                    activeLink === "/"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/")}
                >
                  Home
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/about"
                      ? "text-green-500"
                      : "hover:text-green-500"
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
                  Innovate Pakistan
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
                    activeLink === "/events"
                      ? "text-green-500"
                      : "hover:text-green-500"
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
                    activeLink === "/mentors"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/mentors")}
                >
                  Mentors
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/tenants"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/tenants")}
                >
                  Tenants
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
                  className="hover:text-gray-800 bg-green-500 text-black font-bold px-4 py-1 rounded-full cursor-pointer"
                  onClick={() => handleClick("/tenancy")}
                >
                  Pitch us
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
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
            Innovate Pakistan
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
              activeLink === "/mentors"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/mentors")}
          >
            Mentors
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/tenants"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/tenants")}
          >
            Tenants
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
            className="hover:text-gray-800 bg-green-500 text-black font-bold px-4 py-1 rounded-full cursor-pointer"
            onClick={() => handleClick("/tenancy")}
          >
            Pitch us
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
