import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#f5f0ee] text-[#410603] flex ">
      <div className=" items-center md:items-center text-center ">
        <p className="text-[#ed4c4e] ">Testimonials</p>
        <h1 className="font-bold text-[50px] ml-20">
          What our beneficiaries say about us
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 pr-10 pl-10  ">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-[10px] py-10 ml-6 mb-6 bg-[#fff] child-floated"
            >
              <ul className="pl-4 pr-2 ">
                <li>This is my first ever training in my journey</li>
                <li>into tech, but it definitely was worth it. I</li>
                <li>say this because I had tried studying on</li>
                <li>my own for months with not much</li>
                <li>progress, but coming across this training</li>
                <li>gave me a good feel of what this area of</li>
                <li>life truly entails. Thank you for having me,</li>
                <li>and expect me back in another cohort</li>
                <li>(the essence of this is accountability).</li>
                <h1 className="pt-6">Chidozie Ogbuji</h1>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
