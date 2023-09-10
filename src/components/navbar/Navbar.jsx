import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const HomePageClick = () => {
    window.location.href = "./#profile";
  };

  return (
    <nav className="sticky top-0 left-0 right-0 py-2 mb-4 bg-slate-900">
      <div className=" flex flex-row justify-between  max-container items-center">
        <div>
          <div
            className="text-xl whitespace-nowrap sticky ml-6 cursor-pointer"
            onClick={HomePageClick}
          >
            Fathima Shazna
          </div>
        </div>
        <div className="sm:flex-row">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:flex-row gap-10`}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li className=" mr-10">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
