import React from "react";
import PropTypes from "prop-types";

const Event = ({ children, title, date, time }) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-medium">{title}</h2>
      <ul className="my-2">
        <li className="text-lg font-light">{date}</li>
        <li className="text-lg font-light">{time}</li>
      </ul>
      {children}
    </div>
  );
};

Event.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string
};

export default Event;
