import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const OkIcon = ({ onClick, color = "#000", size = 24 }) => {
  return (
    <Icon onClick={onClick} size={size} color={color}>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke={color}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="miter"
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
};

export default OkIcon;
