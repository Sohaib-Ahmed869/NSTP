import React from "react";
import { LiaBuildingSolid } from "react-icons/lia";

const Partners = () => {
  return (
    <div className="flex bg-white items-center justify-between p-5 lg:p-20">
      <div className="flex flex-row">
        <div>
          <div className="p-5">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <LiaBuildingSolid className=" text-black" />
              View Our Partners
            </h1>
            <p className="mt-10 text-md">
              We are proud to have partnered with some of the best companies in
              the world. Our partners are the best in their field and we are
              proud to have them on board. We are always looking for new
              partners to work with. If you are interested in partnering with us
              please get in touch.
            </p>
            <button
              className="bg-primary hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg mt-5"
              onClick={() => (window.location.href = "/partnerships")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
