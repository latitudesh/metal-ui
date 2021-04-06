import React from "react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import tw, { styled, css } from "twin.macro";

const Header = ({ leftContent, rightContent }) => (
  <div tw="relative pt-4 pb-2 px-8 w-full bg-white shadow">
    <div tw="flex flex-row items-center justify-between my-2" className="title">
      <div tw="flex flex-row items-center min-w-0">
        <div tw="flex items-center flex-grow-0 flex-row">{leftContent}</div>
      </div>
      <div tw="flex flex-grow p-0">
        <div tw="flex flex-grow flex-row items-center justify-end max-w-full">
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
