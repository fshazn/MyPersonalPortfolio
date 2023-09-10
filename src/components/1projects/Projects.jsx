import React from "react";
import projectpic1 from "../../assets/projectpic1.jpg";

const Projects = () => {
  return (
    <div className="h-screen flex flex-col items-center pt-14">
      <p className="mb-2 text-sm">Browse My Recent</p>
      <h1 className="font-semibold text-4xl bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className=" flex flex-row gap-8 mt-8 text-white ">
        <div className=" flex flex-col items-center w-[18rem] h-[25rem] p-6 flex-1 rounded-2xl border border-gray-300">
          <img
            className="h-[15rem] w-60 rounded-2xl"
            src={projectpic1}
            alt="project image"
          />
          <p className=" items-center font-semibold text-xl mt-5 text-center">Sales and Inventory Management System</p>
          <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent">
            GitHub
          </button>
        </div>

        <div className=" flex flex-row gap-10 text-white">
          <div className=" flex flex-col items-center w-[18rem] h-[25rem] p-6 flex-1 rounded-2xl border border-gray-300">
            <img
              className="h-[15rem] w-60 rounded-2xl"
              src={projectpic1}
              alt="project image"
            />
            <p className=" items-center font-semibold text-xl mt-5 text-center">
              Home Service On Demand Application
            </p>
            <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent">
              GitHub
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-10 text-white">
          <div className=" flex flex-col items-center w-[18rem] h-[25rem] p-6 flex-1 rounded-2xl border border-gray-300">
            <img
              className="h-[15rem] w-60 rounded-2xl"
              src={projectpic1}
              alt="project image"
            />
            <p className=" items-center font-semibold text-xl mt-5 text-center">
              E-Chanelling Web Application
            </p>
            <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent">
              GitHub
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-10 text-white">
          <div className=" flex flex-col items-center w-[18rem] h-[25rem] p-6 flex-1 rounded-2xl border border-gray-300">
            <img
              className="h-[15rem] w-60 rounded-2xl"
              src={projectpic1}
              alt="project image"
            />
            <p className=" items-center font-semibold text-xl mt-5 text-center">
              Forex Trade Journaling & Risk/Profit Management System
            </p>
            <button className="border-solid rounded-full border-white px-6 py-2 sm:mr-2 sm:mb-0 mt-5 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 text-white text-transparent">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
