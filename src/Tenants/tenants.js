import React, { useState, useEffect } from "react";
import nstp from "../Assets/nstp.png";
import data from "./data";
import hexlerLogo from "../Assets/Hexler Logo.png";

const Tenants = () => {
  //get the wings from the data
  const [wings, setWings] = useState([]);

  const [activeWing, setActiveWing] = useState("All");

  useEffect(() => {
    const wings = data.map((tenant) => tenant.floor);
    setWings([...new Set(wings)]);
  }, []);
  return (
    <div className="p-20 mt-28">
      <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center flex gap-4">
        <img src={nstp} alt="nstp" className="w-12" />
        <span className="text-green-400 mt-1">NSTP</span>
        <span className="mt-1"> IS HOME TO</span>{" "}
        <span className="text-green-400 mt-1">OVER 80 COMPANIES</span>{" "}
      </h1>
      <button
        className={`bg-black text-white p-2 px-10 rounded-lg mr-5 ${
          activeWing === "All" ? "bg-green-500" : "hover:bg-green-500"
        }`}
        onClick={() => setActiveWing("All")}
      >
        All
      </button>
      {
        //display the wings
        wings.map((wing) => (
          <button
            className={`bg-black text-white p-2 px-10 rounded-lg mr-5 ${
              activeWing === wing ? "bg-green-500" : "hover:bg-green-500"
            }`}
            onClick={() => setActiveWing(wing)}
          >
            {wing}
          </button>
        ))
      }
      <div className="grid grid-cols-3 gap-5 items-center mt-10">
        {data.map(
          (tenant) =>
            (tenant.floor === activeWing || activeWing === "All") && (
              <div className="flex items-center gap-4 p-4 rounded-2xl shadow-xl h-36">
                <img
                  src={hexlerLogo}
                  alt="tenant"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold">{tenant.name}</h1>
                  <p>
                    Office# {tenant.office_number}, {tenant.wing} -{" "}
                    {tenant.floor} Floor
                  </p>
                  {tenant.website && (
                    <a
                      href={tenant.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-500"
                    >
                      {tenant.website}
                    </a>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tenants;
