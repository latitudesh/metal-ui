/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import tw, { theme, css, styled } from "twin.macro";

const Nav = styled.div(() => [
  css`
    [role="tablist"] {
      ${tw`px-8`}
    }
  `,
]);

const Header = ({ title, actions, nav }) => (
  <div
    tw="relative w-full bg-white"
    css={
      !nav && css({ boxShadow: `0 -1px 0 ${theme`colors.accent.three`} inset` })
    }
  >
    <div
      tw="flex flex-row items-center justify-between px-8"
      css={[nav ? tw`pt-6 pb-4` : tw`py-6`]}
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
    {nav && <Nav>{nav}</Nav>}
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
