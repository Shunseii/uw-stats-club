import React, { Fragment } from "react";
import PropTypes from "prop-types";

const RoleTitle = ({ title }) => {
  return (
    <Fragment>
      <h4 className="text-2xl font-medium mb-4">{title}</h4>
    </Fragment>
  );
};

RoleTitle.propTypes = {
  title: PropTypes.string
};

export default RoleTitle;
