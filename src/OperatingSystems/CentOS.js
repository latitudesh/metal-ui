import React from "react";
import PropTypes from "prop-types";
import OperatingSystem from "./OperatingSystem";

const CentOS = ({ size = 40 }) => {
  return (
    <OperatingSystem size={size}>
      <path d="M51.6 27.1H37.4c3.2-3.2 6.7-6.6 10.1-10.1 1 1 2.4 2.5 4.1 4.4v5.7zM12.9 16.8L23.1 27H8.5v-5.9c1.4-1.4 2.9-2.9 4.4-4.3zm10.3 15.8c-3.6 3.6-7.1 7-10.5 10.5-1.3-1.4-2.6-2.9-4.2-4.6v-5.9h14.7zm4.1 18.6H21l-4.1-4.1c3.5-3.4 7-6.8 10.4-10.2v14.3zm9.8-18.6h14.5v5.6c-1.6 1.5-3.1 3-4.5 4.4-3.3-3.3-6.6-6.7-10-10zm-9.8-9.8C24 19.4 20.5 16 17 12.4c1.2-1.1 2.6-2.4 4.4-3.9h5.9v14.3zm15.3 24.5c-1 .9-2.5 2.3-4.3 3.9h-5.4V37.5c3 3 6.4 6.4 9.7 9.8zM32.8 8.5h5.8c1.6 1.5 3.1 2.9 4.3 4L32.8 22.6V8.5z"></path>
      <path d="M30.5 33.8c.1.7.4 1.3.4 2v17.4h5.6c-2.4 2.3-4.6 4.4-6.7 6.4-1.8-1.9-4.1-4.2-6.2-6.4h5.5c0-.9.1-1.5.1-2.1V35.8c0-.7.2-1.3.3-2h1zm-4.4-3.6c-.7.1-1.3.4-2 .4H6.5v5.8L0 29.9c2-2 4.2-4.1 6.4-6.3V29c.8 0 1.4.1 2 .1h15.7c.6 0 1.3.2 1.9.3 0 .3.1.5.1.8zM47 45.6c1.5-1.3 2.9-2.6 4.5-4.1v9.6h-9.6c1.3-1.4 2.5-2.8 3.8-4.2-.6-.6-1-1.1-1.4-1.5L33.7 34.8c-.5-.5-.8-1.1-1.3-1.7 1.3-.8 1.8 0 2.3.5 3.6 3.6 7.2 7.2 10.9 10.8.5.3.9.7 1.4 1.2zM29.2 6.4h-5.7C25.7 4.2 27.8 2 29.8 0c2 2 4.1 4.2 6.3 6.4h-5.2c0 .9-.1 1.5-.1 2.1v15.2c0 .7-.3 1.5-.4 2.2-1.5-.3-1.2-1.2-1.2-1.9V6.4zM13 13.9c-1.5 1.4-2.9 2.7-4.5 4.3V8.6h9.6c-1.3 1.4-2.5 2.7-3.9 4.1.4.5.8.9 1.2 1.3 3.7 3.7 7.4 7.4 11 11.2.4.5.8 1 1.2 1.6-1.3.8-1.7-.1-2.3-.6L14.2 15.1 13 13.9zm47 15.9c-2 2-4.2 4.2-6.4 6.5v-5.7H36c-.7 0-1.3-.2-2-.3v-.7c.7-.1 1.4-.3 2-.3h17.5v-5.9c2.3 2.1 4.4 4.2 6.5 6.4zm-27-2.5c-.7-1.3.1-1.7.6-2.2L44.7 14c.4-.4.8-.8 1.3-1.4-1.3-1.3-2.5-2.6-3.9-4.1h9.5v9.4c-1.5-1.4-2.9-2.8-4.4-4.2-.6.5-1 .9-1.5 1.4L34.6 26.2c-.4.5-1 .8-1.6 1.1zM12.9 45.9c3.3-3.4 6.6-6.6 9.8-9.8l3-3c.4-.4 1-.5 1.6-.5-.8 2.2-2.6 3.4-4.1 4.9-1.5 1.6-3.1 3.1-4.6 4.6-1.5 1.5-3.1 3.1-4.8 4.7 1.3 1.4 2.6 2.7 4 4.2H8.4v-9.4c1.6 1.5 2.9 2.8 4.5 4.3z"></path>
    </OperatingSystem>
  );
};

CentOS.propTypes = {
  size: PropTypes.number
};

export default CentOS;