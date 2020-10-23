import React, { Fragment } from "react";
import Helmet from "react-helmet";

import NavbarLink from "./Navbar-Link.jsx";
import SigmaIcon from "../images/sigma.svg";

const Navbar = () => {
  return (
    <Fragment>
      <Helmet title="UW Statistics Club" />
      <nav className="mb-16 mt-12 w-9/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-row self-center mb-4 md:mb-0 md:self-baseline">
            <img
              className="w-8 mr-3 md:w-12 md:mr-6"
              src={SigmaIcon}
              alt="Sigma Icon"
            />

            <div className="flex flex-col justify-center">
              {/* Mobile Display */}
              <h3 className="md:block hidden lg:hidden text-sm md:text-lg -mb-2">
                UW
              </h3>
              <h1 className="md:block hidden lg:hidden font-medium text-xl md:text-3xl">
                SC
              </h1>

              {/* Desktop Display */}
              <h3 className="md:hidden block lg:block text-xs lg:text-lg -mb-2">
                University of Waterloo
              </h3>
              <h1 className="md:hidden block lg:block font-medium text-xl lg:text-3xl">
                Statistics Club
              </h1>
            </div>
          </div>

          <ul className="flex flex-row items-center justify-between">
            <NavbarLink name="Home" to="/" />
            <span className="text-xs font-light">•</span>
            <NavbarLink name="About" to="/about" />
            <span className="text-xs font-light">•</span>
            <NavbarLink name="Events" to="/events" />
            <span className="text-xs font-light">•</span>
            <NavbarLink name="Resources" to="/resources" />
          </ul>
        </div>
        <hr className="mt-6 border-black" />
      </nav>
    </Fragment>
  );
};

export default Navbar;
