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
    if (window.innerWidth < 1025) {
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
      setMobileView(window.innerWidth < 1025);
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
      className={`z-50 bg-black text-white p-4 lg:p-6 flex justify-between items-center fixed w-full ${
        isScrolling ? "bg-opacity-80" : "bg-opacity-100"
      }`}
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
                  HOME
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/about"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/about")}
                >
                  ABOUT
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/innovate"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/innovate")}
                >
                  INNOVATE PAKISTAN
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
                  SECTORS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/events"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/events")}
                >
                  EVENTS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/partnerships"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/partnerships")}
                >
                  ASSOCIATIONS & PARTNERSHIPS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/mentors"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/mentors")}
                >
                  MENTORS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/tenants"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/tenants")}
                >
                  TENANTS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/contact"
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => handleClick("/contact")}
                >
                  CONTACT
                </a>
                <a
                  className="hover:text-gray-800 bg-green-500 text-black font-bold px-4 py-1 rounded-full cursor-pointer"
                  onClick={() => handleClick("/tenancy")}
                >
                  PITCH US
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex space-x-5 items-center text-sm font-bold">
          <a
            href="#"
            className={`cursor-pointer ${
              activeLink === "/" ? "text-green-500" : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/")}
          >
            HOME
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/about" ? "text-green-500" : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/about")}
          >
            ABOUT
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/innovate"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/innovate")}
          >
            INNOVATE PAKISTAN
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
            SECTORS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/events" ? "text-green-500" : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/events")}
          >
            EVENTS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/partnerships"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/partnerships")}
          >
            ASSOCIATIONS & PARTNERSHIPS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/mentors"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/mentors")}
          >
            MENTORS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/tenants"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/tenants")}
          >
            TENANTS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/contact"
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
            onClick={() => handleClick("/contact")}
          >
            CONTACT
          </a>
          <a
            className="hover:text-gray-800 bg-green-500 text-black font-bold px-4 py-1 rounded-full cursor-pointer"
            onClick={() => handleClick("/tenancy")}
          >
            PITCH US
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
