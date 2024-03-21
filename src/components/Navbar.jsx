import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import zurilogo from "../assets/zurilogo.svg";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-[#f5f0ee] py-5 px-10 flex justify-between items-center">
      <img className="w-40" src={zurilogo} alt="zurilogo" />

      <ul className="hidden md:flex space-x-6 ">
        <li className="mt-2">For Businesses</li>
        <li className="mt-2">For NGOs</li>
        <li className="mt-2">Trainings</li>
        <li className="mt-2">Resources</li>
        <li>
          <button className=" border py-2 px-6 rounded">Partner with us</button>
        </li>
        <li>
          <button className="bg-[#ed4c4e] text-[#f5f0ee]  py-2 px-6  rounded">
            Apply Now
          </button>
        </li>
      </ul>

      <div className="md:hidden">
        <button onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={30} className="" />
          ) : (
            <AiOutlineMenuFold size={30} className="" />
          )}
        </button>
      </div>

      {nav && (
        <div className="md:hidden fixed text-center top-24 left-0 right-0 bg-[#410603] text-white py-4 px-6">
          <ul className="space-y-4">
            <li>For Businesses</li>
            <li>For NGOs</li>
            <li>Trainings</li>
            <li>Resources</li>
            <li>
              <button className="bg-gray-200 text-gray-800 py-2 px-8 rounded-[8px]">
                Partner with us
              </button>
            </li>
            <li>
              <button className="bg-red-500 text-white py-2 px-12 rounded-[8px]">
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
