/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw, { styled, css } from "twin.macro";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import PropTypes from "prop-types";

const Tabs = styled(TabsPrimitive.Root)(() => [tw`flex flex-col`]);

const TabsList = styled(TabsPrimitive.List)(() => [
  tw`flex flex-shrink-0 border-b border-accent-three`,
]);

const TabsTab = styled(TabsPrimitive.Trigger)(() => [
  tw`flex-shrink-0 py-2 px-1 mr-4 text-accent-five select-none outline-none cursor-pointer transition ease-in-out duration-150 font-normal text-sm`,
  tw`hover:(text-foreground)`,
  css`
    &[role="tab"]:first-of-type {
      padding-left: 0;
    }
    &[data-state="active"] {
      ${tw`text-foreground shadow`}
      box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
    }
  `,
]);

const TabsPanel = styled(TabsPrimitive.Content)(() => [tw`flex-grow p-6`]);

export { Tabs, TabsList, TabsTab, TabsPanel };
