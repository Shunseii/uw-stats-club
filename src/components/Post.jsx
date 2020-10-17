import React from "react";
import PropTypes from "prop-types";

const Post = ({ children, title }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium mb-2">{title}</h2>
      {children}
    </div>
  );
};

Post.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  title: PropTypes.string
};

export default Post;
