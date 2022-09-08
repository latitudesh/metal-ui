import tw, { styled, css } from "twin.macro";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import PropTypes from "prop-types";

import { keyframes } from "@emotion/react";

const Dropdown = DropdownPrimitive.Root;
const DropdownTrigger = DropdownPrimitive.Trigger;
const DropdownPortal = DropdownPrimitive.Portal;

const slideDown = keyframes`
  0% {
    opacity: 0; 
    transform: translateY(-2px)
  }
  to {
    opacity: 1;
    transform: translateY(0px)
  }`;
const slideUp = keyframes`
  0% {
    opacity: 1
  }
  to {
    opacity: 0;
    transform: translateY(-2px);
  }`;

const StyledDropdownContent = styled(DropdownPrimitive.Content)(({ animated }) => [
  tw`mt-2 shadow-lg bg-white rounded z-10`,
  css`
    min-width: 150px;
    &[data-state="open"] {
      animation: ${slideDown} 0.3s cubic-bezier(0, 0, 0.2, 1) forwards;
    }
    &[data-state="closed"] {
      animation: ${slideUp} 0.3s cubic-bezier(0, 0, 0.2, 1) forwards;
    }
  `
]);

const DropdownContent = ({ children, ...rest }) =>
  <DropdownPortal>
    <StyledDropdownContent {...rest} >
      {children}
    </StyledDropdownContent>
  </DropdownPortal>

const DropdownLabel = styled(DropdownPrimitive.Label)(() => [
  tw`px-4 py-2 text-xs text-accent-six uppercase`
]);

const DropdownItem = styled(DropdownPrimitive.Item)(() => [
  tw`rounded block px-4 py-2 text-accent-six text-sm cursor-pointer`,
  tw`focus:(bg-accent-two text-accent-eight outline-none)`,

  css`
    &[data-disabled] {
      ${tw`text-accent-three cursor-default`}
    }
  `
]);

const DropdownSeparator = styled(DropdownPrimitive.Separator)(() => [
  tw`bg-accent-two border-b border-border`
]);

DropdownContent.defaultProps = {
  onCloseAutoFocus: (e) => e.preventDefault(),
  disableOutsidePointerEvents: false
};

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator
};
