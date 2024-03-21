import React from "react";
import Option from "../assets/option.svg";

const Training = () => {
  return (
    <div className="text-[#410603] bg-[#f5f0ee] py-10 pt-40  md:px-20 flex flex-col md:flex-row items-center justify-center">
      <div className="text-center md:text-left md:mr-20">
        <p className="text-[#ed4c4e] ">Training Options</p>
        <h1 className="text-[45px] font-bold  ">
          Entry level, intermediate, and up-
        </h1>
        <h1 className="font-bold text-[45px] ">skilling training options</h1>
      </div>
      <img
        src={Option}
        alt="Training Options"
        className="mt-4  max-w-xs ml-20 md:mt-0"
      />
    </div>
  );
};

export default Training;
