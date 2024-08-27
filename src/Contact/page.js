import React, { useState } from "react";
import nstplogo from "../Assets/nstp.png";
import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import Footer from "../Components/footer";

// Website: nstp.pk
// Email: info@nstp.pk
// Ph: +92 51 9085 6428
// Fax: +92 51 9085 6429
// NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan

const contactInfo = {
  website: "nstp.pk",
  email: "info@nstp.pk",
  phone: "+92 51 9085 6428",
  fax: "+92 51 9085 6429",
  address: "NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row lg:justify-between mt-28 p-6 lg:p-20 gap-10 lg:gap-0"
        style={{ height: "90vh" }}
      >
        <form className="lg:p-20 lg:pt-0 lg:w-2/3">
          <h1 className=" text-2xl lg:text-4xl mb-2 lg:mb-5">Contact Us</h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_subject"
              id="floating_subject"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <label
              for="floating_subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="floating_message"
              id="floating_message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-24 lg:h-36"
              placeholder=" "
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <label
              for="floating_message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl lg:text-4xl mb-2 lg:mb-10">Contact Info</h1>
          <div className="flex items-center space-x-5 mb-0 lg:mb-5">
            <TbWorldWww size={30} />
            <p>{contactInfo.website}</p>
          </div>
          <div className="flex items-center space-x-5 mb-0 lg:mb-5">
            <MdEmail size={30} />
            <p>{contactInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 mb-0 lg:mb-5">
            <BiPhone size={30} />
            <p>{contactInfo.phone}</p>
          </div>
          <div className="flex items-center space-x-5 mb-0 lg:mb-5">
            <FaFax size={30} />
            <p>{contactInfo.fax}</p>
          </div>
          <div className="flex items-center space-x-5 mb-0 lg:mb-5">
            <BiLocationPlus size={30} />
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </div>
      <div className="google-map-code w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13286.264708969926!2d72.993001!3d33.6424888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology%20(NUST)!5e0!3m2!1sen!2s!4v1724059407242!5m2!1sen!2s"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          loading="lazy"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
