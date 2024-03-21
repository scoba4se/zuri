import React from "react";
import hd from "../assets/hd.webp";
const Performance = () => {
  return (
    <div className="bg-[#410603] flex text-[#f5f0ee] justify-center   flex-wrap p-20  ">
      <img className="w-[700px]" src={hd} alt="k" />
      <div className="pl-20">
        <p className="text-[#ed4c4e]">Performance</p>
        <h1 className="text-[50px] font-bold">Download our</h1>
        <h1 className="text-[50px] font-bold">Impact Report</h1>
        <ul className="pt-10">
          <li>Our team of experts takes care of the handling and</li>
          <li>management of your training projects so you can focus on</li>
          <li>what matters most: your business. With our comprehensive</li>
          <li>approach and cutting-edge technology, we'll work with you</li>
          <li>every step of the way to create and deliver impactful,</li>
          <li>engaging training programs that drive results.</li>
          <div className="bg-[#ed4c4e] h-[70px] w-[300px] py-6 pl-12 rounded-[10px] mt-10 ">
            Download our Impact Report
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Performance;
