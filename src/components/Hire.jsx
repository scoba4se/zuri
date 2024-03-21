import React from "react";
import option from "../assets/option.svg";
import hire from "../assets/hire.webp";
import divImage from "../assets/div.webp";

const Hire = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#f5f0ee] text-[#410603] py-10 md:py-20 px-5 md:px-20 pt-10">
      <div className="md:mr-20">
        <img className="w-full md:w-[250px] mb-4" src={option} alt="Option" />
        <p className="text-[#ed4c4e] text-center md:text-left">
          Hire Talents from Zuri
        </p>
        <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left mb-2">
          Unlock the Potential
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left mb-2">
          of Zuri Graduates for
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
          Your Organization
        </h1>

        <p className="text-center md:text-left">
          At Zuri, we are committed to nurturing exceptional talent in the tech
          industry. Our comprehensive training programs equip individuals with
          cutting-edge skills and empower them to excel in their careers.
        </p>
        <p className="text-center md:text-left">
          By hiring Zuri graduates, you gain access to a pool of highly skilled
          professionals who have undergone rigorous training and have a solid
          foundation in tech.
        </p>
        <p className="text-center md:text-left">
          Whether you're looking for developers, designers, data analysts, or
          other tech roles, our talented graduates are ready to contribute to
          the success of your organization.
        </p>
        <p className="text-center md:text-left">
          Join the growing list of companies that have benefited from hiring
          Zuri graduates and discover the transformative impact they can bring
          to your team.
        </p>

        <div className="bg-[#ed4c4e] text-[#f5f0ee] w-full md:w-[250px] rounded-[10px] h-[60px] py-4 mt-10 md:mt-20 flex justify-center items-center mx-auto md:mx-0">
          Hire Zuri Graduates
        </div>
      </div>
      <div className="relative mt-10 md:mt-0">
        <img
          className="absolute w-[200px]  bottom-[50px] left-1/2 transform -translate-x-1/2"
          src={divImage}
          alt="Decorative Divider"
        />
        <img className="mx-auto md:ml-20 " src={hire} alt="Hiring Image" />
      </div>
    </div>
  );
};

export default Hire;
