import React from "react";
import experience from "../../assets/experience.png";
import education from "../../assets/education.png";
import arrow from "../../assets/arrow.png";

const About = () => {
  // const handleImageClick = () => {
  //   window.location.href = "./#experience";
  // };

  return (
    <section className=" flex flex-col items-center max-container h-screen justify-center md:py-[15rem]">
      <p className=" mb-2 text-sm mt-6">Get To Know More</p>
      <h1 className=" font-semibold text-4xl bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className=" flex flex-row gap-14 mt-8 text-black ">
        <div className="rounded-2xl border border-gray-300 bg-white items-center p-4 flex flex-col w-[27rem]">
          <img className="h-10 w-10" src={experience} alt="experience image" />
          <p className=" items-center font-semibold mt-2 mb-2 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">
            Programing Skills
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["Java", "C#", "Kotlin", "SQL", "Firebase","React JS", "PHP","HTML","Tailwind CSS"].map(
              (item, index) => (
                <div key={index} className="flex items-center ">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className=" flex flex-col items-center  p-6 flex-1 bg-white rounded-2xl border border-gray-300 w-[27rem]">
          <img className="h-10 w-10" src={education} alt="education image" />
          <p className=" items-center font-semibold mt-2 mb-2 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">Education</p>
          <p className=" items-center whitespace-nowrap overflow-hidden">
            B.Sc.Higher Diploma in Software Engineering
          </p>
          <p className=" items-center whitespace-nowrap overflow-hidden">
            Diploma in Software Engineering
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center ml-23 mr-25 mt-10">
        <p className="max-w-2xl p-4 text-center">
          I am Fathima Shazna, a driven software engineering student. My passion
          lies in the art of UI/UX design, where I seamlessly merge technical
          acumen with design finesse. With a foundation in software engineering,
          I embark on a mission to harmonize functionality and aesthetics,
          creating designs that resonate. Welcome to my portfolio, a showcase of
          my dedication to crafting user-centric solutions.
        </p>
      </div>
      {/* <div>
        <img src={arrow}
        alt="arrow icon"
        className=" flex items-end h-8 w-8 absolute mr-[-5rem] mb-[2.5rem]"
        onclick={handleImageClick}
        />
      </div> */}
    </section>
  );
};

export default About;
