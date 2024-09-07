import React from "react";
import image from '../../Assets/8.jpg';

const Partners = () => {
  return (
    <div className="flex bg-white items-center justify-between p-20">
      <div className="flex flex-row">
        <img
          src={image}
          className="w-96 rounded-full shadow-2xl object-cover mr-10"
        />
        <div>
          <div className="p-5">
            <h1 className="text-5xl font-bold">View Our Partners</h1>
            <p className="mt-10"> 
              We are proud to have partnered with some of the best companies in
              the world. Our partners are the best in their field and we are
              proud to have them on board. We are always looking for new
              partners to work with. If you are interested in partnering with us
              please get in touch.
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={() => (window.location.href = "/partnerships")}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
