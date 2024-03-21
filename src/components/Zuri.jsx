import React from "react";
import d from "../assets/d.svg";
import zuriwhitelogo from "../assets/zuriwhitelogo.svg";
import twitters from "../assets/twitters.svg";
import facebook from "../assets/facebook.svg";
import ined from "../assets/ined.svg";
const Zuri = () => {
  return (
    <div className="bg-[#410306] text-[#ffffff]  justify-center  flex flex-col   items-center md:flex- ">
      <div className="bg-[#ffffff67] h-[2px] w-[1200px] mt-20 ml-40"></div>
      <div className="flex justify-between pt-20 ">
        <h1 className="ml-40">© Copyright 2024, All Rights Reserved</h1>
        <div className="flex pr-40">
          <img className="w-8 ml-6" src={twitters} alt="king" />
          <img className="w-4 ml-6" src={facebook} alt="king" />
          <img className="w-8 ml-6" src={ined} alt="king" />
        </div>
      </div>
      <div className="bg-[#ffffff67] h-[2px] w-[1200px] mt-20 text-center  ml-40"></div>
      <p className="pl-40 text-[13px] mt-20">
        Disclaimer: The roles listed on this website are based on real
        positions, but any images or photographs used on this site are stock
        photos and do not depict the actual individuals holding these positions.
        We
      </p>
      <p className=" text-[13px] ml-[40px] ">
        have taken this measure to protect the privacy and identities of the
        real people represented on this site.
      </p>

      <img className="mt-20" src={d} alt="king" />
    </div>
  );
};

export default Zuri;
