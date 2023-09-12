import React from "react";
import Aos from "aos";
import { useEffect } from "react";

const Services = () => {
  useEffect(() =>{
    Aos.init({duration: 1200})
  })
  return (
    <div className="h-screen flex flex-col items-center pt-14">
      <p className=" mb-2 text-sm">Explore My</p>
      <h1 className=" font-semibold text-4xl bg-gradient-to-r from-pink-800 via-purple-500 to-green-500 bg-clip-text text-transparent">
        Services
      </h1>

      <div className=" flex flex-row gap-10 mt-8 text-white">
        <div className=" flex flex-col items-center w-[15rem] h-[22rem] p-6 flex-1 rounded-2xl border border-purple-950  hover:md:scale-105"data-aos="fade-up-right">
          <p className=" items-center font-semibold text-xl">UI/UX Designs</p>

          <p className=" items-center text-center whitespace-normal overflow-y-auto mt-8">
            Passionate UI/UX designer crafting seamless digital experiences that
            blend aesthetics with function. Transforming complexity into
            intuitive interfaces. Meticulous, user-centric design for engaging
            user journeys. Wireframing to pixel-perfection, enhancing
            satisfaction through strategic UI/UX.
          </p>
        </div>
        <div className=" flex flex-col items-center w-[25rem] h-[22rem] p-6 flex-1 rounded-2xl border border-pink-950 hover:md:scale-105" data-aos="fade-up">
          <p className=" items-center font-semibold text-xl">
            Responsive Web Designs
          </p>

          <p className=" items-center text-center whitespace-normal overflow-y-auto mt-8">
            I create adaptable websites for all devices. With mobile-first
            design, I ensure optimal user experiences on smartphones, tablets,
            and desktops. Using fluid layouts and media queries, your site will
            look great and work flawlessly. Let's build a responsive web
            presence that impresses every user.
          </p>
        </div>
        <div className=" flex flex-col items-center w-[25rem] h-[22rem] p-6 flex-1 rounded-2xl border border-purple-950  hover:md:scale-105" data-aos="fade-up-left">
          <p className=" items-center font-semibold text-xl">
            Mobile App Designs
          </p>

          <p className=" items-center text-center whitespace-normal overflow-y-auto mt-8">
            I specialize in user-friendly mobile apps. Prioritizing clarity and
            aesthetics, I ensure delightful experiences on iOS and Android. With
            intuitive navigation and captivating visuals, I enhance usability
            and engagement. Let's create your standout app together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
