import React from "react";
import projectpic1 from "../../assets/projectpic1.jpg";
import project2 from "../../assets/project2.png"
import project1 from "../../assets/project1.png"
import project3 from "../../assets/project3.png"
import project4 from "../../assets/project4.png"
import Aos from "aos";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() =>{
    Aos.init({duration: 1200})
  })

  const handleProject1 = () => {
    window.location.href = "https://github.com/fshazn/Sales-and-inventory-management-system";
  };

  const handleProject2 = () => {
    window.location.href = "https://github.com/ViperXD99/Home_Service_App";
  };

  const handleProject3 = () => {
    window.location.href = "https://github.com/fshazn/E-Chanelling-System";
  };

  const handleProject4 = () => {
    window.location.href = "https://github.com/fshazn/Forex-Trade-Management-System";
  };

  return (
    <div className="min:h-screen flex flex-col items-center pt-14 max-container" >
      <p className="mb-2 text-sm">Browse My Recent</p>
      <h1 className="font-semibold text-4xl bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className=" flex flex-col md:flex-row gap-8 mt-8 text-white ">
        <div className=" flex flex-col items-center w-[18rem] h-[26rem] p-6 flex-1 rounded-2xl border border-gray-300"data-aos="flip-left">
          <img
            className="h-[15rem] w-60 rounded-2xl"
            src={project1}
            alt="project image"
            
          />
          <p className=" items-center font-semibold text-xl mt-5 text-center">Sales and Inventory Management System</p>
          <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent"
          onClick={handleProject1}>
            GitHub
          </button>
        </div>

        <div className=" flex flex-row gap-10 text-white"data-aos="flip-left">
          <div className=" flex flex-col items-center w-[18rem] h-[26rem] p-6 flex-1 rounded-2xl border border-gray-300">
            <img
              className="h-[15rem] w-60 rounded-2xl"
              src={project2}
              alt="project image"
            />
            <p className=" items-center font-semibold text-xl mt-5 text-center">
              Home Service On Demand Application
            </p>
            <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent"
            onClick={handleProject2}>
              GitHub
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-10 text-white"data-aos="flip-left">
          <div className=" flex flex-col items-center w-[18rem] h-[26rem] p-6 flex-1 rounded-2xl border border-gray-300">
            <img
              className="h-[15rem] w-60 rounded-2xl"
              src={project3}
              alt="project image"
            />
            <p className=" items-center font-semibold text-xl mt-5 text-center">
              E-Chanelling Web Application
            </p>
            <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent"
            onClick={handleProject3}>
              GitHub
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-10 text-white"data-aos="flip-left">
          <div className=" flex flex-col items-center w-[18rem] h-[26rem] p-6 flex-1 rounded-2xl border border-gray-300">
            <img
              className="h-[15rem] w-60 rounded-2xl"
              src={project4}
              alt="project image"
            />
            <p className=" items-center font-semibold text-xl mt-5 text-center">
              Forex Trade Journaling & Risk/Profit Management System
            </p>
            <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent"
            onClick={handleProject4}>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
