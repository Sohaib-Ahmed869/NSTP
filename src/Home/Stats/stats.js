import React from "react";
import "../../App.css";

const Statistics = () => {
  const stats = {
    revenebyTenants: 2500000000,
    fundingRaisedbyEntites: 830000,
    knowledgeWorkers: 1500,
    IPsGeneratedAndIdentified: 100,
    startupsIncubated: 20,
    startupsGraduated: 10,
  };

  const convertNumber = (num) => {
    //if number is greater than 1000 then convert it to K or M
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "K";
    } else if (num > 999999) {
      return (num / 1000000).toFixed(0) + "M";
    } else {
      return num;
    }
  };

  return (
    <div className="bg-black text-white p-20 flex flex-col items-center mb-36">
      <div className="flex justify-between w-full">
        <div className="">
          <h2 className="hollow-text">
            PKR{convertNumber(stats.revenebyTenants)}
          </h2>
          <p className="text-md font-bold text-side">Revenue by Tenants</p>
        </div>
        <div className="text-container">
          <h2 className="hollow-text">
            ${convertNumber(stats.fundingRaisedbyEntites)}
          </h2>
          <p className="text-md font-bold text-side">
            Funding Raised by Entities
          </p>
        </div>
        <div className="text-container">
          <h2 className="hollow-text">
            {convertNumber(stats.knowledgeWorkers)}
          </h2>
          <p className="text-md font-bold text-side">Knowledge Workers</p>
        </div>

        <div className="text-container">
          <h2 className="hollow-text">
            {convertNumber(stats.IPsGeneratedAndIdentified)}
          </h2>
          <p className="text-md font-bold text-side">
            IPs Generated and Identified
          </p>
        </div>
        <div className="text-container">
          <h2 className="hollow-text">
            {convertNumber(stats.startupsIncubated)}
          </h2>
          <p className="text-md font-bold text-side">Startups Incubated</p>
        </div>
        <div className="text-container">
          <h2 className="hollow-text">
            {convertNumber(stats.startupsGraduated)}
          </h2>
          <p className="text-md font-bold text-side">Startups Graduated</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
