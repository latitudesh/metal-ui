import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const ServersIcon = ({ className, onClick, color, size = 24 }) => {
  return (
    <Icon className={className} onClick={onClick} size={size} color={color}>
      <path
        id="icon-user_svg__a"
        d="M8.66245729,12.7230724 C7.64198532,11.8076578 7,10.4788007 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.4788007 16.3580147,11.8076578 15.3375427,12.7230724 C17.5093449,13.731343 19,15.6972696 19,18 C19,18.5522847 18.5522847,19 18,19 C17.4477153,19 17,18.5522847 17,18 C17,15.8352984 14.7976419,14 12,14 C9.20235808,14 7,15.8352984 7,18 C7,18.5522847 6.55228475,19 6,19 C5.44771525,19 5,18.5522847 5,18 C5,15.6972696 6.49065506,13.731343 8.66245729,12.7230724 Z M12,12 C13.6568542,12 15,10.6568542 15,9 C15,7.34314575 13.6568542,6 12,6 C10.3431458,6 9,7.34314575 9,9 C9,10.6568542 10.3431458,12 12,12 Z"
      ></path>
    </Icon>
  );
};

ServersIcon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default ServersIcon;
