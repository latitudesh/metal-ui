import React from "react";
import PropTypes from "prop-types";
import OperatingSystem from "./OperatingSystem";

const WindowsOS = ({ size, viewBox, enableBackground }) => {
  return (
    <OperatingSystem
      size={size}
      viewBox="0 0 480 480"
      enableBackground={enableBackground}
    >
      <g>
        <path d="M.176 224L.001 67.963l192-26.072V224H.176zM224.001 37.241L479.937 0v224H224.001V37.241zM479.999 256l-.062 224-255.936-36.008V256h255.998zM192.001 439.918L.157 413.621.147 256h191.854v183.918z"></path>
      </g>
    </OperatingSystem>
  );
};

WindowsOS.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string,
  enableBackground: PropTypes.string,
};

export default WindowsOS;
