/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw, { styled, css } from "twin.macro";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import PropTypes from "prop-types";

/*
* Styles
*/

const itemStyles = css`
  ${tw`appearance-none bg-transparent border border-transparent py-0.5 px-2 overflow-hidden rounded text-sm transition ease-in-out duration-150 text-foreground font-normal`}
  margin: 0 5px;
`;

const itemHover = css`
  ${tw`bg-accent-three text-accent-seven`}
`;

const itemActive = css`
  ${tw`bg-foreground text-white`}
`;

/*
* Components
*/

const Toolbar = styled(ToolbarPrimitive.Root)(() => [
  tw`flex`,
  css`
    margin: 0 -5px;
  `,
]);

const ToolbarButton = styled(ToolbarPrimitive.Button, {
  shouldForwardProp: prop => {
    // Prevent forwarding `active` prop to <button> tag as it's managed by react-dom
    if (prop === 'active') return false
    return true
  }
})(({ active }) => [
  itemStyles,
  active && itemActive,
  css`&:hover {
    ${!active && itemHover}
  },
    &[data-state="open"] {
      ${itemActive}
    }
  `,
]);

const ToolbarLink = styled(ToolbarPrimitive.Link, {
  shouldForwardProp: prop => {
    // Prevent forwarding `active` prop to <a> tag as it's managed by react-dom
    if (prop === 'active') return false
    return true
  }
})(({ active }) => [
  itemStyles,
  active && itemActive,
  css`&:hover {
    ${!active && itemHover}
  },
    &[data-state="open"] {
      ${itemActive}
    }
  `,
]);

const ToolbarSeparator = styled(ToolbarPrimitive.Separator)(() => [
  tw`bg-accent-three mx-2 my-1`,
  css`
    width: 1px;
  `,
]);

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

const ToolbarToggle = styled(ToolbarPrimitive.ToggleItem)(({ active }) => [
  itemStyles,
  active && itemActive,
  css`&:hover {
    ${!active && itemHover}
  },
    &[data-state="on"] {
      ${itemActive}
    }
  `,
]);

[ToolbarLink, ToolbarButton, ToolbarToggle].propTypes = {
  active: PropTypes.bool,
};

[ToolbarLink, ToolbarButton, ToolbarToggle].defaultProps = {
  active: false,
};

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggle,
};
