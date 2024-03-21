import React from "react";
import Cart1 from "../assets/cart1.png";
import Cart2 from "../assets/cart2.webp";
import Cart3 from "../assets/cart3.png";

const Card = () => {
  return (
    <div className="flex flex-col items-center p-5 md:p-20 bg-[#f5f0ee]">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-[#ffe8e9] rounded-xl p-5 flex flex-col items-center md:items-start">
          <img
            src={Cart1}
            alt="Software Development"
            className="w-32 h-32 md:w-auto md:h-auto"
          />
          <div className="text-[#410603] font-bold text-xl mt-4">01</div>
          <h1 className="text-[#410603] font-bold text-xl p-5">
            Software Development
          </h1>
          <ul className="text-[#410603] ml-3">
            <li>
              This option focuses on the practical side of software development,
              while we touch on the theoretical basis that form these concepts,
              our main focus is in actual applications. We offer several options
              including full-stack development using different languages or
              specialty in certain tracks. Either way, choosing us will be
              giving yourself the advantage over others.
            </li>
          </ul>
        </div>
        <div className="bg-[#410603] rounded-xl p-5 flex flex-col items-center md:items-start">
          <img
            src={Cart2}
            alt="Product Design"
            className="w-32 h-32 md:w-auto md:h-auto"
          />
          <div className="text-[#f5f0ee] font-bold text-xl mt-4">02</div>
          <h1 className="text-[#f5f0ee] font-bold text-xl p-5">
            Product (UI/UX) Design
          </h1>
          <ul className="text-[#f5f0ee] ml-5">
            <li>
              This option exposes you to the ins-and-outs of true product
              design. Here, you'll understand the core values and research
              principles that backs actual product development. Beyond UI, We
              also teach you how to understand the needs of the users,
              professionally handle stakeholders and ensure your product
              considers the users perspective (UX). Choose this course if you
              have a passion for research and applicable of results.
            </li>
          </ul>
        </div>
        <div className="bg-[#E4D3FF] rounded-xl p-5 flex flex-col items-center md:items-start">
          <img
            src={Cart3}
            alt="Continuous Development Training"
            className="w-32 h-32 md:w-auto md:h-auto"
          />
          <div className="text-[#410603] font-bold text-xl mt-4">03</div>
          <h1 className="text-[#410603] font-bold text-xl p-5">
            Continuous Development Training
          </h1>
          <ul className="text-[#410603] ml-5">
            <li>
              If you are not a novice nor beginner, but wishes to keep improving
              on your skills by working on actual projects, CDT Gives you a
              chance to collaborate with others, add more projects to your
              portfolio and generally give you better work experience. The
              training runs in cycles of 3 months, and within each cycle, we
              ensure you build and complete at least 1 project.
            </li>
          </ul>
        </div>
      </div>
      <button className="bg-[#ed4c4e] text-[#f5f0ee] mt-8 px-6 py-3 rounded-lg md:mt-20">
        Explore our Training
      </button>
    </div>
  );
};

export default Card;
