import React from "react";
import { storiesOf } from "@storybook/react";
import SideSheet from "./index";
import Button from "../Button";

storiesOf("SideSheet", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("default", () => (
    <SideSheet content={<span className="text-gray-600">Content</span>}>
      <Button type="secondary" label="click here" />
    </SideSheet>
  ))
  .add("position='bottom' props", () => (
    <SideSheet position="bottom" content={<p>BOTTOM</p>}>
      <Button type="secondary" label="click here" />
    </SideSheet>
  ))
  .add("position='top' props", () => (
    <SideSheet position="top" content={<p>TOP</p>}>
      <Button type="secondary" label="click here" />
    </SideSheet>
  ))
  .add("position='left' props", () => (
    <SideSheet position="left" content={<p>LEFT</p>}>
      <Button type="secondary" label="click here" />
    </SideSheet>
  ))
  .add("width='600px' props", () => (
    <SideSheet width={600} position="left" content={<p>WIDTH 600</p>}>
      <Button type="secondary" label="click here" />
    </SideSheet>
  ));
