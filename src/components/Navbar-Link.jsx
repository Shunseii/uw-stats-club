import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavbarLink = ({ name, to }) => {
  return (
    <li className="px-3">
      <Link
        className={"text-md md:text-2xl pb-1 font-light"}
        activeClassName="border-b border-black font-normal"
        to={to}
      >
        {name}
      </Link>
    </li>
  );
};

NavbarLink.propTypes = {
  active: PropTypes.string,
  name: PropTypes.string,
  to: PropTypes.string
};

export default NavbarLink;
