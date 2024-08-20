import React from "react";
import nstplogo from "../Assets/nstp.png";
import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const contactInfo = {
  website: "nstp.pk",
  email: "info@nstp.pk",
  phone: "+92 51 9085 6428",
  fax: "+92 51 9085 6429",
  address: "NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan",
};

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between p-3 bg-black w-full">
      <div className="flex flex-row items-center">
        <img src={nstplogo} alt="nstp" className="w-12 me-2" />
        <h1 className="text-2xl text-center font-bold text-white">NSTP</h1>
      </div>
      <div className="flex flex-row items-start gap-10">
        <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
          <TbWorldWww />
          <p>{contactInfo.website}</p>
        </div>
        <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
          <MdEmail />
          <p>{contactInfo.email}</p>
        </div>
        <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
          <BiPhone />
          <p>{contactInfo.phone}</p>
        </div>
        <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
          <FaFax />
          <p>{contactInfo.fax}</p>
        </div>
        <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
          <BiLocationPlus />
          <p>{contactInfo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
