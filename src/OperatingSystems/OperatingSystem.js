import React from "react";
import PropTypes from "prop-types";

const OperatingSystem = ({
  size = 40,
  viewBox = '0 0 60 60',
  children
}) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      x="0"
      y="0"
      viewBox={viewBox}
      enableBackground="accumulate"
    >
      {children}
    </svg>
  );
};

OperatingSystem.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  viewBox: PropTypes.string
};

export default OperatingSystem;
