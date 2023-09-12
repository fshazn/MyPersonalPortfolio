import React from "react";
import profilepic from "../../assets/shazna.png";
import github1 from "../../assets/github1.png";
import linkedin from "../../assets/linkedin1.png";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import { useEffect } from "react";
import CV from "../../assets/CV_Fathima_Shaz.pdf";

const Profile = () => {
  const openCV = () => {
    window.open(CV, "_blank");
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const handleImageClick = () => {
    window.location.href = "https://github.com/fshazn";
  };

  const handleImageClick1 = () => {
    window.location.href =
      "https://www.linkedin.com/in/fathima-shazna-58b524208 ";
  };

  const handleContactInfo = () => {
    window.location.href = "./#contact";
  };

  const strings = [
    "UI/UX Designer",
    "Web Developer",
    "Mobile Application Developer",
  ];

  return (
    <div className="flex flex-col items-center md:gap-8 h-screen sm:flex-row  sm:justify-center max-container scroll-smooth mt-8 md:mt-[-4rem]">
      <div
        className="flex justify-center w-[12rem] h-[12rem] rounded-full overflow-hidden object-cover sm:items-center md:w-[18rem] md:h-[18rem]"
        data-aos="fade-right"
      >
        <img
          className="w-full h-full object-cover"
          src={profilepic}
          alt="Profile Picture"
        />
      </div>

      <div
        className="flex flex-col items-center mt-[2.5rem] sm:mt-0 sm:ml-4"
        data-aos="fade-left"
      >
        <p>Hello, I'm</p>
        <p className="font-sans text-fluid-1 font-bold">
          Fathima Shazna Ismail
        </p>
        <p className=" text-fluid-2 mb-2 md:mt-2 bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 font-black bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: strings,
              autoStart: true,
              loop: true,
            }}
          />
        </p>

        <div className="flex flex-col-2 gap-2 sm:flex-row sm:items-center sm:mt-4">
          <button
            className="border-solid rounded-full border-2 border-white px-4 py-2 sm:mr-2 sm:mb-0"
            onClick={openCV}
          >
            Download CV
          </button>
          <button
            className="border-solid rounded-full border-2 border-white text-white px-4 py-2"
            onClick={handleContactInfo}
          >
            Contact Info
          </button>
        </div>

        <div className="flex flex-col-2 sm:flex-row justify-center sm:justify-start gap-4 mt-4 items-center">
          <img
            className="w-[44px] h-[44px] cursor-pointer"
            src={github1}
            alt="github1"
            onClick={handleImageClick}
          />
          <img
            className="w-10 h-10 cursor-pointer"
            src={linkedin}
            alt="linkedin"
            onClick={handleImageClick1}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
