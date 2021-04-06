import React from "react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import tw, { styled, css } from "twin.macro";

const Header = ({ title, actions }) => (
  <div tw="relative pt-4 pb-2 px-8 w-full bg-white shadow">
    <div tw="flex flex-row items-center justify-between my-2" className="title">
      <div tw="flex flex-row items-center min-w-0">
        <Heading size={1} tw="truncate pr-0.5">
          {title}
        </Heading>
      </div>
      {actions && (
        <div tw="flex flex-row items-center justify-end ml-2">
          <div tw="inline-flex ml-0">
            {actions}
          </div>
        </div>
      )}
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.node,
};

export default Header;
