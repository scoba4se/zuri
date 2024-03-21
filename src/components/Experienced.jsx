import React from "react";
import km from "../assets/km.webp";

const Experienced = () => {
  return (
    <div className="bg-[#f5f0ee] flex flex-col md:flex-row justify-center items-center py-10 px-5 md:px-20 text-[#410603]">
      <img src={km} alt="Team" className="w-[600px]" />
      <div className="pl-10">
        <p className="text-[#ed4c4e] text- text-lg md:text-xl mb-2 pt-10">
          Experienced Professional Trainers
        </p>
        <h1 className="font-bold text-2xl md:text-5xl">Industry-Experienced</h1>
        <h1 className="font-bold text-2xl md:text-5xl mb-4">
          Counselors and Mentors
        </h1>

        <ul className="text-lg">
          <li>
            At Zuri, we are proud to have a team of professional and
            industry-experienced counselors and mentors who are committed to
            guiding and supporting our community. Our counselors bring a wealth
            of knowledge and expertise in various tech fields, ensuring that our
            members receive the best guidance and mentorship to navigate their
            career paths.
          </li>
          <li>
            Whether it's providing insights, sharing industry trends, or
            offering personalized advice, our counselors and mentors play a
            crucial role in empowering individuals to excel in their chosen tech
            professions.
          </li>
          <li>
            With their guidance, our members gain valuable insights, enhance
            their skills, and build the confidence needed to thrive in the tech
            industry.
          </li>
        </ul>
        <div className="w-full md:w-[220px] py-3 md:py-5 px-14 md:px-10 rounded-[7px] h-[50px] md:h-[65px] bg-[#ed4c4e] text-[#f5f0ee] mt-8 md:mt-10">
          See the Team
        </div>
      </div>
    </div>
  );
};

export default Experienced;
