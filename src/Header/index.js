/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Heading from "../Typography/Heading";
import tw, { theme, css, styled } from "twin.macro";

const Nav = styled.div(() => [
  css`
    [role="tablist"] {
      ${tw`mx-10`}
    }
  `,
]);

const Header = ({ title, actions, nav }) => (
  <div tw="relative w-full bg-white">
    <div
      tw="flex flex-row items-center justify-between px-10"
      css={[nav ? tw`pt-4 pb-1` : tw`py-4`]}
    >
      <div tw="flex flex-row items-center min-w-0 py-2">
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
  title: PropTypes.node,
  actions: PropTypes.node,
  nav: PropTypes.node,
  filters: PropTypes.node,
};

export default Header;
