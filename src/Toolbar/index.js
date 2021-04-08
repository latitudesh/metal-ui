/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw, { styled, css, theme } from "twin.macro";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import PropTypes from "prop-types";

/*
 * Styles
 */

const commonStyles = css`
  ${tw`flex items-center focus:outline-none text-sm transition ease-in-out duration-150 text-accent-five font-normal border-b-2 border-transparent mr-6 py-2 px-0.5`}
  margin-bottom: -1px;
`;

const itemHover = css`
  ${tw`text-foreground`}
`;

const itemActive = css`
  ${tw`text-foreground border-foreground border-b-2`}
`;

/*
 * Components
 */

const Toolbar = styled(ToolbarPrimitive.Root)(() => [
  tw`flex flex-nowrap items-baseline overflow-x-auto`,
  css`
    padding-bottom: 1px;
    box-shadow: 0 -1px 0 ${theme`colors.accent.three`} inset;
    > button:first-of-type {
      padding-left: 0;
    }
  `,
]);

const ToolbarButton = styled(ToolbarPrimitive.Button, {
  shouldForwardProp: (prop) => {
    // Prevent forwarding `active` prop to <button> tag as it's managed by react-dom
    if (prop === "active") return false;
    return true;
  },
})(({ active }) => [
  commonStyles,
  active && itemActive,
  css`
    &:hover {
      ${!active && itemHover}
    }
    ,
    &[data-state="open"] {
      ${itemActive}
    }
  `,
]);

const ToolbarLink = styled(ToolbarPrimitive.Link, {
  shouldForwardProp: (prop) => {
    // Prevent forwarding `active` prop to <a> tag as it's managed by react-dom
    if (prop === "active") return false;
    return true;
  },
})(({ active }) => [
  commonStyles,
  active && itemActive,
  css`
    &:hover {
      ${!active && itemHover}
    }
    ,
    &[data-state="open"] {
      ${itemActive}
    }
  `,
]);

[ToolbarLink, ToolbarButton].propTypes = {
  active: PropTypes.bool,
};

[ToolbarLink, ToolbarButton].defaultProps = {
  active: false,
};

export { Toolbar, ToolbarButton, ToolbarLink };
