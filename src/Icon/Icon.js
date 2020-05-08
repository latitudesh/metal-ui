import React, { cloneElement } from "react";
import PropTypes from "prop-types";

const Icon = ({
  onClick,
  color = "#9fa6b2",
  size = 24,
  fill = true,
  children,
  className,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
}) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      className={className}
      fill={fill ? color : "none"}
      color={!fill ? color : "none"}
      stroke={strokeWidth ? color : "none"}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    >
      {cloneElement(children, {
        color: color,
      })}
    </svg>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  fill = PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
};

export default Icon;
