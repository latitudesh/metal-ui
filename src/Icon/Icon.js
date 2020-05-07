import React, { cloneElement } from "react";
import PropTypes from "prop-types";

const Icon = ({
  onClick,
  color = "#9fa6b2",
  size = 24,
  children,
  className,
  withStroke,
}) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      color={color}
      style={{ fill: color }}
    >
      {cloneElement(children, {
        color: color,
        stroke: withStroke && color,
      })}
    </svg>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  withStroke: PropTypes.bool,
};

export default Icon;
