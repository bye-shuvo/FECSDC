import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className=" fixed w-full text-white flex items-center justify-evenly py-10 z-50">
      <div id="logo" className="flex items-center backdrop-blur-lg pr-3 rounded-full">
        <img
          className="h-12"
          src="/src/assets/fecsdc-logo.png"
          alt="fecsdc-logo"
        />
        <p className="text-xl">FECSDC</p>
      </div>
      <ul className="list-none flex gap-15 text-lg py-4 px-10 rounded-full bg-cta-btn/25 backdrop-blur-sm shadow-[0px_0px_8px_0px] shadow-cta-btn/80 hover:shadow-[0px_0px_20px_2px] transition-all ease-in-out">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/events"}>Events</Link>
        </li>
        <li>
          <Link to={"/roadmap"}>Roadmap</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/leaderboard"}>Leaderboard</Link>
        </li>
      </ul>
      <div
        id="user-login"
        className="py-2 px-4 rounded-full bg-linear-90 from-indigo-600 to-indigo-700 flex items-center gap-5"
      >
        <h3>Your Name</h3>
        <img
          src={"#"}
          className="h-10 w-10 rounded-full bg-secondary-header"
          alt="user-img"
        />
      </div>
    </div>
  );
};

export default Navbar;
