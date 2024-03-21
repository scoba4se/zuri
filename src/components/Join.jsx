import React from "react";
import d from "../assets/d.svg";

const Join = () => {
  return (
    <div className="bg-[#410306] justify-center  flex flex-col   items-center md:items-center text-center  ">
      <img src={d} alt="king" />
      <div className="text-[#ffffff] mt-10   flex ">
        <div className="text-center ">
          <ul>
            <li className="text-[#ed4c4e]">Join Us</li>
            <li className="font-bold text-[40px] mt-8 px-6 py-3  md:mt-20">
              Empowering African Youths
            </li>
            <li className="font-bold text-[40px]">Through Tech</li>
            <li className="mt-10">
              <button className="bg-red-500 text-white py-4 px-12 rounded-[8px]">
                Partner with us
              </button>
            </li>
          </ul>
          <div className="bg-[#ffffff67] w-[1200px] h-[2px] mt-20 ml-40 "></div>
        </div>
      </div>
    </div>
  );
};

export default Join;
