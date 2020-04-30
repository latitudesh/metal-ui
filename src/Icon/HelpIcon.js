import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const HelpIcon = ({ onClick, color = "#000", size = 24 }) => {
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
        <path d="M12 14C12 12 13.576002 11.6652983 14.1186858 11.1239516 14.663127 10.5808518 15 9.82976635 15 9 15 7.34314575 13.6568542 6 12 6 11.1040834 6 10.2998929 6.39272604 9.75018919 7.01541737 9.49601109 7.30334431 9.29624369 7.64043912 9.16697781 8.01061095" />
        <line x1="12" y1="17" x2="12" y2="17" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    </Icon>
  );
};

HelpIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default HelpIcon;
