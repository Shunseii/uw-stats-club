import React from "react";
import PropTypes from "prop-types";

import NavbarLink from "./Navbar-Link.jsx";
import SigmaIcon from "../images/sigma.svg";

const Navbar = ({ active }) => {
  return (
    <nav className="mb-16 mt-12 w-9/12 mx-auto">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row">
          <img className="w-12 mr-6" src={SigmaIcon} alt="Sigma Icon" />

          <div className="flex flex-col">
            <h3 className="text-lg">University of Waterloo</h3>
            <h1 className="font-medium text-3xl">Statistics Club</h1>
          </div>
        </div>

        <ul className="flex items-center justify-between">
          <NavbarLink active={active} name="Home" to="/" />
          <span className="text-xs font-light">•</span>
          <NavbarLink active={active} name="About" to="/about" />
          <span className="text-xs font-light">•</span>
          <NavbarLink active={active} name="Events" to="/events" />
          <span className="text-xs font-light">•</span>
          <NavbarLink active={active} name="Resources" to="/resources" />
        </ul>
      </div>
      <hr className="mt-6 border-black" />
    </nav>
  );
};

Navbar.propTypes = {
  active: PropTypes.string
};

export default Navbar;
