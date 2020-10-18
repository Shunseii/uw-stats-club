import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="flex flex-col w-fit mx-auto mb-8">
      <h1 className="w-fit text-4xl text-center font-medium pb-2">{title}</h1>
      <hr className="border-black w-4/5 mx-auto" />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
