import React from "react";
import email from "../../assets/email.png";
import linkedin_black from "../../assets/linkedin_black.png";

const ContactMe = () => {
  const emailAddress = "shazna464@gmail.com";

  const handleOnClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/fathima-shazna-58b524208 ";
  };
  return (
    <div className="h-screen flex flex-col items-center pt-40">
      <p className="mb-2 text-sm">Get In Touch</p>
      <h1 className=" mb-5 font-semibold text-4xl bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">
        Contact Me
      </h1>

      <div className=" flex flex-row gap-10 mt-8 text-black ">
        <div className=" flex flex-row items-center w-[26rem] h-[4rem] p-6 flex-1 rounded-full border border-gray-300 bg-white">
          <img className="h-8 w-8 rounded-2xl mr-2" src={email} alt="email image" />
          <a href={`mailto:${emailAddress}`} className="hover:underline">
            {emailAddress}
          </a>

          <img
            className="h-7 w-7 rounded-2xl ml-8"
            src={linkedin_black}
            alt="linkedin image"
          />
          <p
            className=" items-center text-base ml-3 cursor-pointer"
            onClick={handleOnClick}
          >
            LinkedIn
          </p>
        </div>
      </div>
      <p className=" p-[13rem] text-xs text-slate-400">Copyright @ 2023 Fathima Shazna. All Rights Resereved</p>
    </div>
  );
};

export default ContactMe;
