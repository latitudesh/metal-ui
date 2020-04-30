import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Icon = ({ onClick, color, size = 24, children, className }) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classNames(className, { "fill-current": Boolean(color) })}
      color={color}
    >
      {children}
    </svg>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Icon;
