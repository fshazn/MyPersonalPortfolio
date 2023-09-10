import React from "react";
import {About, Navbar,Profile,Services,Projects, ContactMe} from "../components";

const Home = () => {
  return (
    <div className=" relative">
      <div>
        <Navbar />
        <section id="profile" className="section">
        <Profile />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
         <ContactMe />
        </section>
        
      </div>
    </div>
  );
};

export default Home;
