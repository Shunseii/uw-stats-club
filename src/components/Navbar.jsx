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

          <div className="flex flex-col justify-center">
            {/* Mobile Display */}
            <h3 className="block lg:hidden text-lg">UW</h3>
            <h1 className="block lg:hidden font-medium text-3xl">SC</h1>

            {/* Desktop Display */}
            <h3 className="hidden lg:block text-lg">University of Waterloo</h3>
            <h1 className="hidden lg:block font-medium text-3xl">
              Statistics Club
            </h1>
          </div>
        </div>

        <ul className="flex flex-col md:flex-row items-center justify-between">
          <NavbarLink active={active} name="Home" to="/" />
          <span className="hidden md:block text-xs font-light">•</span>
          <NavbarLink active={active} name="About" to="/about" />
          <span className="hidden md:block text-xs font-light">•</span>
          <NavbarLink active={active} name="Events" to="/events" />
          <span className="hidden md:block text-xs font-light">•</span>
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
