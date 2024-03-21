import React from "react";
import image from "../assets/image.png";
import p from "../assets/p.svg";
import pp from "../assets/pp.svg";
import s from "../assets/s.svg";

export const Hero = () => {
  return (
    <div className="flex text-[#410603] pt-20 pb-10 pl-14 bg-[#f5f0ee] text-center   flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col pr-20">
        <h1 className="text-[50px] font-bold">
          Driving <span className="text-[#ed4c4e]">Impact for</span>
        </h1>
        <h1 className="text-[50px] font-bold">
          <span className="text-[#ed4c4e]">Africans</span> through
        </h1>
        <h1 className="text-[50px] font-bold">Tech Empowerment</h1>
        <ul className="pt-10">
          <li>We are enhancing the economic potential of African youth by</li>
          <li>
            equipping them with technological skills, fostering a supportive
          </li>
          <li>
            community, creating employment opportunities, and opening doors to
          </li>
          <li>new possibilities.</li>
        </ul>
        <div className="flex mt-10">
          <button className="bg-[#ed4c4e] w-[140px] h-[55px] rounded text-[#f5f0ee]">
            Apply Now
          </button>
          <button className="w-[160px] rounded border ml-10">
            Partner With Us
          </button>
        </div>
        <div className="flex mt-10 ">
          <div className="flex items-center p-4 ">
            <img className="w-12" src={p} alt="king" />
            <div className="ml-1">
              <h2 className="text-[20px] font-bold">12K+</h2>
              <p className="">Professionals</p>
            </div>
          </div>
          <div className="h-[150px] ml-1 w-[2px] bg-[#410603]"></div>

          <div className="flex items-center p-4 ">
            <img className="w-10" src={pp} alt="king" />
            <div className="">
              <h2 className="text-[20px] font-bold">45</h2>
              <p className="">Skill Categories</p>
            </div>
          </div>
          <div className="h-[150px]  w-[1px] bg-[#410603]"></div>
          <div className="flex items-center p-4 ">
            <img className="w-10" src={s} alt="king" />
            <div className="">
              <h2 className="text-[20px] font-bold">115</h2>
              <p className="">Countries</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-[40px] pt-20 mt-10 bg-[#410603]">
        <img src={image} alt="king" />
      </div>
    </div>
  );
};
