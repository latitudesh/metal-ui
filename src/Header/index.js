import React from "react";
import PropTypes from "prop-types";

const Header = ({ leftContent, centerContent, rightContent }) => (
  <div className="relative w-full bg-white shadow">
    <div className="flex p-4 px-8 flex-nowrap justify-between items-center relative flex-row flex-grow h-16">
      <div className="flex flex-1 flex-grow flex-shrink-0 min-w-0">
        <div className="flex items-center flex-grow-0 flex-row">
          {leftContent}
        </div>
      </div>
      <div className="flex flex-shrink p-0 w-auto items-center justify-between">
        {centerContent}
      </div>
      <div className="flex flex-grow p-0">
        <div className="flex flex-grow flex-row items-center justify-end max-w-full">
          {rightContent}
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  leftContent: PropTypes.node,
  centerContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default Header;
