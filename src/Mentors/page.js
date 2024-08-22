import React from "react";
import pfp2 from "../Assets/pfp2.jpeg";

const data = [
  {
    image: pfp2,
    name: "John Doe",
    position: "CEO",
  },
  {
    image: pfp2,
    name: "Jane Doe",
    position: "CTO",
  },
  {
    image: pfp2,
    name: "John Smith",
    position: "COO",
  },
  {
    image: pfp2,
    name: "Jane Smith",
    position: "CFO",
  },
  {
    image: pfp2,
    name: "John Doe",
    position: "CEO",
  },
];

const Mentors = () => {
  return (
    <div className="p-20 mt-28">
      <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center flex gap-2">
        MEET OUR <span className="text-green-400">MENTORS</span>{" "}
      </h1>
      {data.map((mentor) => (
        <div className="grid grid-cols-2 gap-5 items-center">
          <img
            src={mentor.image}
            alt="mentor"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{mentor.name}</h1>
            <p>{mentor.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mentors;
