import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const ActivityIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon className={className} onClick={onClick} size={size} color={color}>
      <path
        id="icon-status_svg__a"
        d="M7.32296704,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 L8,11 C8.40890459,11 8.77661334,11.2489509 8.92847669,11.6286093 L10,14.3074176 L13.0715233,6.62860932 C13.4067816,5.79046356 14.5932184,5.79046356 14.9284767,6.62860932 L16.677033,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L16,13 C15.5910954,13 15.2233867,12.7510491 15.0715233,12.3713907 L14,9.6925824 L10.9284767,17.3713907 C10.5932184,18.2095364 9.40678162,18.2095364 9.07152331,17.3713907 L7.32296704,13 Z"
      />
    </Icon>
  );
};

ActivityIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default ActivityIcon;
