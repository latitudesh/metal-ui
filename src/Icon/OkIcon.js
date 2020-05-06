import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const OkIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      withStroke
    >
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        color={color}
      >
        <polyline points="4 13 9 18 20 7" />
      </svg>
    </Icon>
  );
};

OkIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default OkIcon;
