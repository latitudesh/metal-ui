import tw, { styled, css } from "twin.macro";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

const Toolbar = styled(ToolbarPrimitive.Root)(() => [tw`flex`]);

const itemStyles = css`
  ${tw`appearance-none bg-transparent border border-border py-1 px-2 my-0 mx-2 shadow overflow-hidden rounded-sm text-sm`}
  :first-child {
    ${tw`mx-0`}
  }
`;

const ToolbarButton = styled(ToolbarPrimitive.Button)(() => [itemStyles]);

const ToolbarLink = styled(ToolbarPrimitive.Link)(() => [
  itemStyles,
  tw`inline-flex justify-center items-center`,
]);

const ToolbarSeparator = styled(ToolbarPrimitive.Separator)(() => [
  tw`bg-accent-four`,
  css`
    width: 1px;
    margin: 5px;
  `,
]);

export { Toolbar, ToolbarButton, ToolbarLink, ToolbarSeparator };
