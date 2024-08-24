import React, { useState } from "react";
import pfp2 from "../Assets/pfp2.jpeg";
import Footer from "../Components/footer";

const data = [
  {
    image: pfp2,
    name: "Ahmed Haq",
    position: "Client Services Professional - Rogers Communication",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Ansir Junaid",
    position: "Chairman - SupplySide Group",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Dr Seemab Latif",
    position: "Founder - Aawaz",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Dr. Rafia Mumtaz",
    position: "Assistant Professor - NUST University",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Fahad Tiwana",
    position: "CEO - Tech Valley",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Ahmed Haq",
    position: "Client Services Professional - Rogers Communication",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Ansir Junaid",
    position: "Chairman - SupplySide Group",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr Seemab Latif",
    position: "Founder - Aawaz",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr. Rafia Mumtaz",
    position: "Assistant Professor - NUST University",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Fahad Tiwana",
    position: "CEO - Tech Valley",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Ahmed Haq",
    position: "Client Services Professional - Rogers Communication",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Ansir Junaid",
    position: "Chairman - SupplySide Group",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr Seemab Latif",
    position: "Founder - Aawaz",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr. Rafia Mumtaz",
    position: "Assistant Professor - NUST University",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Fahad Tiwana",
    position: "CEO - Tech Valley",
    department: "Software Engineering",
  },
];

const Mentors = () => {
  const [departments, setDepartments] = useState([
    "Computer Science",
    "Software Engineering",
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState("All");
  return (
    <div>
      <div className="p-20 mt-28">
        <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center flex gap-2">
          MEET OUR <span className="text-green-400">MENTORS</span>{" "}
        </h1>
        <button
          className={`bg-black text-white p-2 px-10 rounded-lg mr-5 ${
            selectedDepartment === "All" ? "bg-green-500" : "hover:bg-green-500"
          }`}
          onClick={() => setSelectedDepartment("All")}
        >
          All
        </button>
        {departments.map((department) => (
          <button
            className={`bg-black text-white p-2 rounded-lg mr-5 ${
              selectedDepartment === department
                ? "bg-green-500"
                : "hover:bg-green-500"
            }`}
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </button>
        ))}
        <div className="grid grid-cols-3 gap-5 items-center mt-10">
          {data.map(
            (mentor) =>
              (selectedDepartment === "All" ||
                mentor.department === selectedDepartment) && (
                <div className="flex items-center gap-4 p-4 rounded-2xl shadow-xl">
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
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
