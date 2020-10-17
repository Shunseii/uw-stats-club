import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <main className="mx-auto w-3/5">{children}</main>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Container;
