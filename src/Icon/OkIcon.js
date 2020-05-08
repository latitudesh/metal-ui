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
      fill={false}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <polyline points="4 13 9 18 20 7" />
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
