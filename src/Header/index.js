/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import { theme, css } from "twin.macro";

const Header = ({ title, actions, nav }) => (
  <div
    tw="relative w-full bg-white"
    css={
      !nav && css({ boxShadow: `0 -1px 0 ${theme`colors.accent.three`} inset` })
    }
  >
    <div
      tw="flex flex-row items-center justify-between py-4 px-8"
      className="title"
    >
      <div tw="flex flex-row items-center min-w-0">
        <Heading size={3} tw="truncate pr-0.5 font-semibold">
          {title}
        </Heading>
      </div>
      {actions && (
        <div tw="flex flex-row items-center justify-end ml-2">
          <div tw="inline-flex ml-0">{actions}</div>
        </div>
      )}
    </div>
    {nav && <div>{nav}</div>}
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
