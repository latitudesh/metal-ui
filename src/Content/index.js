import React from "react";
import PropTypes from "prop-types";

const Content = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div className="py-8">{children}</div>
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
