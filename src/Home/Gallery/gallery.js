import React from "react";
import image1 from "../../Assets/12.png";
import image2 from "../../Assets/2.jpeg";
import image3 from "../../Assets/3.png";
import image4 from "../../Assets/4.jpg";
import image6 from "../../Assets/6.jpg";
import image7 from "../../Assets/7.jpg";
import image8 from "../../Assets/8.jpg";
import image9 from "../../Assets/9.jpg";
import image10 from "../../Assets/10.jpg";
import image11 from "../../Assets/11.jpeg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-20">
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />  
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
        </div>
      </div>
      <div className="grid gap-10">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
        </div>
        
      </div>
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image11} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image10} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
