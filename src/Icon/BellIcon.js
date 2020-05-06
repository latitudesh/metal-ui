import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const BellIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon className={className} onClick={onClick} size={size} color={color}>
      <path
        id="icon-notifications-default_svg__a"
        d="M9,11 L9,15 L15,15 L15,11 C15,9.34314575 13.6568542,8 12,8 C10.3431458,8 9,9.34314575 9,11 Z M17,15 C17.5522847,15 18,15.4477153 18,16 C18,16.5522847 17.5522847,17 17,17 L7,17 C6.44771525,17 6,16.5522847 6,16 C6,15.4477153 6.44771525,15 7,15 L7,11 C7,8.70163744 8.55075381,6.76547284 10.6630137,6.18075397 C10.5587807,5.97645065 10.5,5.74508981 10.5,5.5 C10.5,4.67157288 11.1715729,4 12,4 C12.8284271,4 13.5,4.67157288 13.5,5.5 C13.5,5.74508981 13.4412193,5.97645065 13.3369863,6.18075396 C15.4492462,6.76547284 17,8.70163744 17,11 L17,15 Z M10,18 L14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 Z"
      ></path>
    </Icon>
  );
};

BellIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default BellIcon;
