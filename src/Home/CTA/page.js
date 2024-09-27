import React from "react";
import image from "../../Assets/8.jpg";

const CTA = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between p-10 lg:p-20">
       <img
        src={image}
        className="w-96 rounded-full lg:shadow-2xl object-cover mr-10 mb-10 lg:mb-0"
      />
      <div
        id="informational-banner"
        tabindex="-1"
        class="flex flex-col justify-between w-full border-b border-gray-200 bg-white"
      >
        <div className="mb-4 md:mb-0 md:me-4">
          <h2 className="mb-1 font-semibold text-gray-900 dark:text-black text-2xl">
            Visit NSTP - National Science and Technology Park, NUST, H-11/4,
            Islamabad
          </h2>
          <p className="flex items-center text-lg font-normal text-gray-500 dark:text-gray-400">
            NSTP Provides a platform for the growth of technology and innovation
            in Pakistan. You can rent office space, labs, and conference rooms
            at NSTP.{" "}
          </p>
        </div>
        <div className="flex items-center flex-shrink-0 mt-10 pb-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-3 py-2 me-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => (window.location.href = "/contact")}
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
            </svg>{" "}
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-3 py-2 me-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-blue-300"
            onClick={() => (window.location.href = "/tenancy")}
          >
            Get started{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default CTA;
