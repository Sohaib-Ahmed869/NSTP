// Timeline.js
import React from "react";
import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaBook,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const steps = [
  { title: "Orientation", icon: <FaLightbulb />, month: "Month 1" },
  {
    title: "Mentorship and Coaching",
    icon: <FaChalkboardTeacher />,
    month: "Month 2",
  },
  { title: "Curriculum Sessions", icon: <FaBook />, month: "Month 3" },
  { title: "Workshops and CEO Insights", icon: <FaUsers />, month: "Month 4" },
  { title: "Graduation", icon: <FaGraduationCap />, month: "Month 5" },
];

const Timeline = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0  mt-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center">
              {/* Timeline Line */}
              {index > 0 && (
                <div className="h-1 w-10 bg-gray-400 md:w-24"></div>
              )}

              {/* Step Circle with Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl">
                {step.icon}
              </div>

              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="h-1 w-10 bg-gray-400 md:w-24"></div>
              )}
            </div>

            {/* Step Title */}
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-500">{step.month}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
