/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import "twin.macro";

const Header = ({ title, actions, nav }) => (
  <div tw="relative w-full bg-white shadow pb-2">
    <div tw="flex flex-row items-center justify-between my-2 pt-4 px-8" className="title">
      <div tw="flex flex-row items-center min-w-0">
        <Heading size={2} tw="truncate pr-0.5 font-semibold">
          {title}
        </Heading>
      </div>
      {actions && (
        <div tw="flex flex-row items-center justify-end ml-2">
          <div tw="inline-flex ml-0">{actions}</div>
        </div>
      )}
    </div>
    {nav && <div tw="mt-4">{nav}</div>}
  </div>
);

Header.defaultProps = {
  title: null,
  actions: null,
  nav: null,
};

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  actions: PropTypes.node,
  nav: PropTypes.node,
  filters: PropTypes.node,
};

export default Header;
