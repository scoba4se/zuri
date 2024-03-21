import React from "react";
import video from "../assets/video.webp";
import Play from "../assets/Play.png";

const Live = () => {
  return (
    <div className="flex justify-center items-center p-10 md:p-20 text-center">
      <div>
        <div className="text-center  justify-center ml-20">
          <p className="text-[#ed4c4e]">
            We’re In The Business of Changing Lives
          </p>
          <h1 className="font-bold text-[#410603] text-3xl md:text-5xl mt-2">
            We are dedicated to transforming
          </h1>
          <h1 className="font-bold text-[#410603] text-3xl md:text-5xl">
            lives and making a lasting impact
          </h1>
        </div>

        <div className="relative mt-10 md:mt-0 md:ml-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-20 w-20">
            <img className="m-7" src={Play} alt="Play" />
          </div>
          <img
            className="w-full md:w-[1000px] h-auto rounded-lg"
            src={video}
            alt="Video"
          />
        </div>
      </div>
    </div>
  );
};

export default Live;
