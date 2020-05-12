import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./index";
import Button from "../Button";

storiesOf("Dropdown", module)
  .addDecorator((getStory) => (
    <div className={"flex h-full items-center justify-center w-full mt-20"}>
      {getStory()}
    </div>
  ))
  .add("default", () => (
    <Dropdown content={<p>TEST</p>}>
      <Button type="secondary" label="click here" />
    </Dropdown>
  ))
  .add("position='RightBottom' props", () => (
    <Dropdown position="RightBottom" content={<p>TEST</p>}>
      <Button type="secondary" label="click here" />
    </Dropdown>
  ))
  .add("position='RightTop' props", () => (
    <Dropdown position="RightTop" content={<p>TEST</p>}>
      <Button type="secondary" label="click here" />
    </Dropdown>
  ))
  .add("position='LeftTop' props", () => (
    <Dropdown position="LeftTop" content={<p>TEST</p>}>
      <Button type="secondary" label="click here" />
    </Dropdown>
  ));
