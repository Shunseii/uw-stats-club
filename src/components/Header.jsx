import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return <h1 className="text-4xl text-center font-medium mb-8">{title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
