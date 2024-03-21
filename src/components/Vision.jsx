import React from "react";
import d from "../assets/d.svg";
import Our from "../assets/Our.webp";

export const Vision = () => {
  return (
    <div className="text-[#f5f0ee]    ">
      <img src={d} alt="Logo" className="mx-auto" />
      <div className="bg-[#410603] pt-20 pb-20 flex flex-col md:flex-row items-center justify-center">
        <img
          src={Our}
          alt="Our Vision"
          className="w-full md:w-[600px] mr-0 md:mr-[100px] mb-8 md:mb-0"
        />
        <div className="text-white max-w-xl">
          <p className="text-[#ed4c4e] mb-4">Breaking the Barrier to Tech</p>
          <h1 className="font-bold text-2xl md:text-4xl mb-4">
            Making Tech Inclusive
          </h1>
          <h1 className="font-bold text-2xl md:text-4xl mb-8">
            and Accessible
          </h1>
          <ul>
            <li>
              We are dedicated to breaking down the barriers that often hinder
              individuals from accessing opportunities in the tech industry.
            </li>
            <li>
              Understanding the challenges faced by aspiring tech enthusiasts,
              we actively work to eliminate obstacles and create a level playing
              field.
            </li>
            <li>
              By providing accessible training programs, mentorship, and a
              supportive community, we ensure that no one is left behind due to
              financial constraints, lack of resources, or limited networks.
            </li>
            <li>
              Through our inclusive approach, we are democratizing tech
              education and opening doors for individuals from diverse
              backgrounds to pursue their passion and thrive in the tech field.
            </li>
          </ul>
          <button className="bg-[#ed4c4e] mt-8 px-6 py-3 rounded-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
