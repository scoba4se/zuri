import React from "react";
import fig from "../assets/fig.webp";

const Timeless = () => {
  return (
    <div className="bg-[#f5f0ee] text-[#410603] pt-20 pb-10 px-5 sm:px-20">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="max-w-[100%] sm:max-w-[50%] mb-10 sm:mb-0 sm:mr-10">
          <p className="text-[20px] text-[#ed4c4e] mb-2">Timeless Skills</p>
          <h2 className="text-[50px] font-bold mb-4">Enabling Africans with</h2>
          <h2 className="text-[50px] font-bold mb-4">
            Essential Skills for Today
          </h2>
          <h2 className="text-[50px] font-bold mb-8">and Tomorrow</h2>
          <ul className="mb-8">
            <li>Zuri is on a mission to empower Africans by equipping them</li>
            <li>with the essential skills required both in the present and</li>
            <li>future. Recognizing the transformative power of technology,</li>
            <li>we prepare African youth to thrive in the digital age.</li>
          </ul>

          <ul>
            <li>By offering cutting-edge tech skills, we ensure that</li>
            <li>individuals are prepared to meet the demands of the rapidly</li>
            <li>evolving technological landscape. Through this empowerment,</li>
            <li>
              we are paving the way for African youth to unlock their full
            </li>
            <li>
              potential and become valuable contributors to the global tech
            </li>
            <li>community.</li>
          </ul>
          <button className="bg-[#ed4c4e] px-8 py-4 rounded text-[#f5f0ee] mt-8">
            Apply Now
          </button>
        </div>
        <img src={fig} alt="Zuri" className="max-w-[100%] sm:max-w-[45%]" />
      </div>
    </div>
  );
};

export default Timeless;
