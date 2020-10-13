import React from "react";
import PropTypes from "prop-types";

import NavbarLink from "./Navbar-Link.jsx";

import SigmaIcon from "../images/sigma.svg";

const Navbar = ({ active }) => {
  return (
    <nav className="flex flex-col px-48 pb-16 pt-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <img className="w-3/25 mr-6" src={SigmaIcon} alt="Sigma Icon" />

          <div className="flex flex-col">
            <h3 className="text-lg">University of Waterloo</h3>
            <h1 className="font-medium text-3xl">Statistics Club</h1>
          </div>
        </div>

        <ul className="flex items-center w-1/4 justify-between">
          <NavbarLink active={active} name="Home" to="/" />
          <NavbarLink active={active} name="About" to="/about" />
          <NavbarLink active={active} name="Events" to="/events" />
          <NavbarLink active={active} name="Resources" to="/resources" />
        </ul>
      </div>

      <br />
    </nav>
  );
};

Navbar.propTypes = {
  active: PropTypes.string
};

export default Navbar;
