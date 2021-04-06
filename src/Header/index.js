import React from "react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import tw from "twin.macro";

const Header = ({ title, actions, nav, filters }) => (
  <div tw="relative pt-4 px-8 w-full bg-white shadow pb-2">
    <div tw="flex flex-row items-center justify-between my-2" className="title">
      <div tw="flex flex-row items-center min-w-0">
        <Heading size={1} tw="truncate pr-0.5">
          {title}
        </Heading>
      </div>
      {actions && (
        <div tw="flex flex-row items-center justify-end ml-2">
          <div tw="inline-flex ml-0">{actions}</div>
        </div>
      )}
    </div>
    {(nav || filters) && (
      <div tw="flex flex-row items-center py-2">
        <div tw="flex flex-row my-0 p-0 mr-0">{nav}</div>
        <div tw="flex flex-row items-center flex-grow justify-end p-0">
          {filters}
        </div>
      </div>
    )}
  </div>
);

Header.defaultProps = {
  title: null,
  actions: null,
  nav: null,
  filters: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.node,
  nav: PropTypes.node,
  filters: PropTypes.node,
};

export default Header;
