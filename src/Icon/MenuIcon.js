import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const MenuIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      withStroke
    >
      <svg className="h-6 w-6" stroke={color} fill="none" viewBox="0 0 24 24">
        <path
          className="inline-flex"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          className="hidden"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Icon>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default MenuIcon;
