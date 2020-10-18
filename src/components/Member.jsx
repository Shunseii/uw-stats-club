import React from "react";
import PropTypes from "prop-types";

const Member = ({ name, src }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="rounded-full w-32" src={src}></img>
      <h3 className="text-xl text-center font-semibold">{name}</h3>
    </div>
  );
};

Member.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
};

export default Member;
