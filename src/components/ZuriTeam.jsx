import React from "react";
import zuriwhitelogo from "../assets/zuriwhitelogo.svg";

const ZuriTeam = () => {
  return (
    <div class=" bg-[#410306]  flex flex-col items-center justify-center md:flex-row">
      <div class="flex flex-col md:flex-row">
        <div className="pl-10 text-[#ffffff]">
          <img class="py-10 ml-10" src={zuriwhitelogo} alt="king" />
          <div class="flex justify-center md:pl-4">
            <ul class="p-6">
              <li class="font-bold">Company</li>
              <li class="py-2">For Businesses</li>
              <li class="py-2">For NGOs</li>
              <li class="py-2">Trainings</li>
              <li class="py-2">Team</li>
            </ul>

            <ul class="p-6">
              <li class="font-bold">Links</li>
              <li class="py-2">Partner with Us</li>
              <li class="py-2">Recruit Talent</li>
              <li class="py-2">Partner to train</li>
              <li class="py-2">Tracks</li>
            </ul>

            <ul class="p-6">
              <li class="font-bold">Resources</li>
              <li class="py-2">Articles</li>
              <li class="py-2">Our Why</li>
              <li class="py-2">FAQ</li>
              <li class="py-2">Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 md:mt-0 md:pl-80 pt-40 ">
          <h1 class="font-bold text-[#ffffff]">Newsletter</h1>
          <div class="  md:items-center bg-[#ffffff] mt-6 py-2 px-10 rounded-[10px] w-[450px] ">
            Enter Your Email Here
            <button class="bg-[#ed4c4e] text-[#ffffff] h-14 w-40 px-10  ml-10  rounded-md">
              Subscribe
            </button>
          </div>
          <div class="flex pt-6 text-[#ffffff]">
            <ul class="pr-8">
              <li class="font-bold py-2">Helpdesk</li>
              <li>help-desk.zuri.team</li>
            </ul>
            <ul className="ml-40">
              <li class="font-bold py-2">Email Us</li>
              <li>hello@zuri.team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZuriTeam;
