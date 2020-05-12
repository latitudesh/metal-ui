import React from "react";
import PropTypes from "prop-types";

const OperatingSystem = ({
  size = 40,
  children
}) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      enableBackground="new 0 0 60 60"
      x="0"
      y="0"
    >
      {children}
    </svg>
  );
};

OperatingSystem.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default OperatingSystem;
