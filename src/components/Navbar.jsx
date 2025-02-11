import React, { useState } from "react";
import NavLinks from "./constants";

const NavItems = () => {
  return (
    <ul className="md:flex gap-1 justify-center items-center">
      {NavLinks.map(({ index, href, title }) => (
        <li
          key={index}
          className="text-neutral-400 px-5 text-xl text-center
                hover:text-black hover:font-bold transition-colors "
        >
          <a href={href}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default function Navbar(props) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex justify-around items-center py-3 
            mx-auto c-space"
        >
          <a href="#">Terzo</a>
          <button
            onClick={() => {
              setisOpen((p) => !p);
            }}
            className="text-neutral-400 hover:text-white focus:outline-none md:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden md:flex">
            
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`nav-sidebar ${isOpen ? `max-h-screen` : `max-h-0`}
                absolute left-0 right-0 bg-black-200 backdrop-blur-sm 
                transition-all duration-300 ease-in-out overflow-hidden 
                z-20 mx-auto md:hidden block`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}
