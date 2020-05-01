import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const SortingIcon = ({ onClick, color = "#000", size = 24 }) => {
  return (
    <Icon onClick={onClick} size={size} color={color}>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        aria-labelledby="sortingIconTitle"
        stroke={color}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        color={color}
      >
        <polyline points="8 8.333 12 4.333 16 8.333 16 8.333" />
        <polyline points="16 15.667 12 19.667 8 15.667 8 15.667" />
      </svg>
    </Icon>
  );
};

SortingIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default SortingIcon;
