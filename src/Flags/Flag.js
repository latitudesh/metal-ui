import React from "react";
import PropTypes from "prop-types";

const Flag = ({
  size = 256,
  children
}) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      {children}
    </svg>
  );
};

Flag.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  fill: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
};

export default Flag;
