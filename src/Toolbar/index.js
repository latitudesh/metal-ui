import tw, { styled, css } from "twin.macro";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

const Toolbar = styled(ToolbarPrimitive.Root)(() => [
  tw`flex`,
  css`
    margin: 0 -5px;
  `,
]);

const itemStyles = css`
  ${tw`appearance-none bg-transparent border border-border py-1 px-2 overflow-hidden rounded text-sm`}
  margin: 0 5px;
`;

const ToolbarButton = styled(ToolbarPrimitive.Button)(() => [itemStyles]);

const ToolbarLink = styled(ToolbarPrimitive.Link)(() => [
  itemStyles,
  tw`inline-flex justify-center items-center`,
]);

const ToolbarSeparator = styled(ToolbarPrimitive.Separator)(() => [
  tw`bg-accent-four mx-2 my-1`,
  css`
    width: 1px;
  `,
]);

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

const ToolbarToggle = styled(ToolbarPrimitive.ToggleItem)(() => [
  itemStyles,
  css`
    &[data-state="on"] {
      ${tw`bg-accent-three`};
    }
  `,
]);

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggle,
};
