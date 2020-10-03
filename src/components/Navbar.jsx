import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="flex flex-col px-48 pb-16 pt-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <img className="mr-6" alt="Sigma Icon" />

          <div className="flex flex-col">
            <h3 className="text-lg">University of Waterloo</h3>
            <h1 className="font-medium text-2xl">Statistics Club</h1>
          </div>
        </div>

        <ul className="flex items-center w-1/4 justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>

      <br />
    </nav>
  );
};

export default Navbar;
