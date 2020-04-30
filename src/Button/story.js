import React from "react";
import { storiesOf } from "@storybook/react";
import { SettingsIcon } from "../Icon";
import Button from "./index";

storiesOf("Button", module)
  .add("default", () => <Button label="Create server" />)
  .add("disabled props", () => <Button disabled label="Create server" />)
  .add("type='danger' props", () => (
    <Button type="danger" label="Create server" />
  ))
  .add("type='secondary' props", () => (
    <Button type="secondary" label="Create server" />
  ))
  .add("appearance='minimal' props", () => (
    <Button appearance="minimal" label="Create server" />
  ))
  .add("component props", () => (
    <Button component={<a href="javascript:void()">link</a>} />
  ))
  .add("iconBefore props", () => (
    <Button iconBefore={<SettingsIcon />} type="secondary" label="Settings" />
  ))
  .add("iconAfter props", () => (
    <Button iconAfter={<SettingsIcon />} type="secondary" label="Settings" />
  ));
