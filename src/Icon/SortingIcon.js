import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const SortingIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      fill={false}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <>
        <polyline points="8 8.333 12 4.333 16 8.333 16 8.333" />
        <polyline points="16 15.667 12 19.667 8 15.667 8 15.667" />
      </>
    </Icon>
  );
};

SortingIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default SortingIcon;
