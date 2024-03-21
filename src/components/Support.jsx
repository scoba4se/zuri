import React from "react";
import star from "../assets/star.svg";
import support1 from "../assets/support1.webp";
import support from "../assets/support.webp";

const Support = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-20 pb-20">
      <div className="relative flex-shrink-0">
        <img className="w-48 md:w-72 mb-10" src={support} alt="king" />
        <img
          className="w-full md:w-auto absolute  top-0 right-0 md:right-auto md:relative "
          src={support1}
          alt="king"
        />
      </div>

      <div className="bg-[#410603]   md:p-16 ml-4 md:ml-10 rounded-md md:max-w-[550px]">
        <img
          className="absolute w-[120px]  md:w-40 mb-10 "
          src={star}
          alt="king"
        />
        <ul className="text-[#f5f0ee]  pt-40">
          <li>
            <p className="text-[#ed4c4e]">Support Us</p>
            <h1 className="font-bold text-3xl md:text-4xl mt-4 text-[#f5f0ee]">
              Support the Mission
            </h1>
            <p>
              We believe in the power of collective support to drive positive
              change. If you are passionate about transforming lives and
              empowering African youth through tech, there are various ways you
              can contribute and support our mission.
            </p>
            <p>
              Whether you are an individual, a company, or an organization, your
              support can make a significant impact. You can collaborate with us
              by providing mentorship opportunities, offering internships or job
              placements, sponsoring training programs, or even contributing to
              our scholarship funds.
            </p>
            <p>
              Together, we can create a thriving ecosystem where African youth
              have access to the necessary resources, opportunities, and support
              to excel in the tech industry. Join us in our mission and be part
              of the transformation by supporting Zuri's training programs
              today.
            </p>
            <div className="bg-[#ed4c4e] h-12 md:h-16 rounded-md text-[#fff] pl-4 flex items-center mt-8">
              Partner With Us
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
