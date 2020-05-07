import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const CheveronDownIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon className={className} onClick={onClick} size={size} color={color}>
      <path
        className="secondary"
        fillRule="evenodd"
        d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
      />
    </Icon>
  );
};

CheveronDownIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default CheveronDownIcon;
