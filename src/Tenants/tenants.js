import React, { useState, useEffect } from "react";
import nstp from "../Assets/nstp.png";
import data from "./data";
import hexlerLogo from "../Assets/Hexler Logo.png";

const Tenants = () => {
  //get the floors from the data
  const [floors, setFloors] = useState([]);
  const [activeFloor, setActiveFloor] = useState("All");

  useEffect(() => {
    const floors = data.map((tenant) => tenant.floor);
    setFloors([...new Set(floors)]);
  }, []);

  // Group tenants by wing
  const groupedTenants = data.reduce((acc, tenant) => {
    if (tenant.floor === activeFloor || activeFloor === "All") {
      if (!acc[tenant.wing]) {
        acc[tenant.wing] = [];
      }
      acc[tenant.wing].push(tenant);
    }
    return acc;
  }, {});

  return (
    <div className="p-6 lg:p-20 mt-28">
      <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-center flex lg:flex-row flex-col lg:gap-4">
        <img src={nstp} alt="nstp" className="w-12" />
        <span className="text-green-400 lg:mt-1">NSTP</span>
        <span className="lg:mt-1"> IS HOME TO</span>{" "}
        <span className="text-green-400 lg:mt-1">OVER 80 COMPANIES</span>{" "}
      </h1>
      <button
        className={`bg-black text-white p-2 px-3 lg:px-10 rounded-lg mr-1 lg:mr-5 ${
          activeFloor === "All" ? "bg-[#4ade80]" : "hover:bg-[#4ade80]"
        }`}
        onClick={() => setActiveFloor("All")}
      >
        All
      </button>
      {
        //display the floors
        floors.map((floor) => (
          <button
            key={floor}
            className={`bg-black text-white p-2 px-3 lg:px-10 rounded-lg mr-1 lg:mr-5 ${
              activeFloor === floor ? "bg-[#4ade80]" : "hover:bg-[#4ade80]"
            }`}
            onClick={() => setActiveFloor(floor)}
          >
            {floor}
          </button>
        ))
      }
      <div className="mt-10">
        {Object.keys(groupedTenants).map((wing) => (
          <div key={wing} className="mb-10">
            <div
              className="flex items-center w-full mb-5 rounded-xl lg:rounded-2xl p-2 lg:p-7 justify-end"
              style={{
                background: "linear-gradient(to right, #a7f3d0, #4ade80)",
              }}
            >
              <h2 className="text-2xl ml-10 mb-0 hollow-text4">{wing}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 items-center">
              {groupedTenants[wing].map((tenant) => (
                <div
                  key={tenant.name}
                  className="flex items-center gap-4 p-4 rounded-xl lg:rounded-2xl shadow-md lg:shadow-xl border h-36"
                >
                  <img
                    src={hexlerLogo}
                    alt="tenant"
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="flex flex-col gap-1 lg:gap-3 ">
                    <h1 className="text-lg lg:text-xl leading-none font-semibold lg:font-bold">{tenant.name}</h1>
                    <p className="leading-none">
                      Office# {tenant.office_number}, {tenant.wing} -{" "}
                      {tenant.floor} Floor
                    </p>
                    {tenant.website && (
                      <a
                        href={tenant.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-green-500 underline"
                      >
                        Visit Website {">"}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tenants;
