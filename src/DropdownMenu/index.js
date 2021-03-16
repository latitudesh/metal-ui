import tw, { styled, css } from "twin.macro";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export const Dropdown = DropdownPrimitive.Root;
export const DropdownTrigger = DropdownPrimitive.Trigger;

export const DropdownContent = styled(DropdownPrimitive.Content)(() => [
  tw`mt-2 shadow-lg bg-white rounded`,
  css`
    min-width: 130px;
  `,
]);

export const DropdownLabel = styled(DropdownPrimitive.Label)(() => [
  tw`px-4 py-2 text-xs text-gray-600 uppercase`,
]);

export const DropdownItem = styled(DropdownPrimitive.Item)(() => [
  tw`rounded block px-4 py-2 text-gray-600 text-sm cursor-pointer`,
  tw`focus:(bg-gray-100 text-gray-900 outline-none)`,

  css`
    &[data-disabled] {
      ${tw`text-gray-300 cursor-default`}
    }
  `,
]);

export const DropdownSeparator = styled(DropdownPrimitive.Separator)(() => [
  tw`bg-gray-100 border-b border-gray-100`,
]);