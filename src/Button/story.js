import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M13 16v5a1 1 0 01-1 1H9l-3-6a2 2 0 01-2-2 2 2 0 01-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 012 2v14a2 2 0 01-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"
      ></path>
    </svg>
  );
}

storiesOf("Button", module)
  .add("default", () => <Button label="Create server" />)
  .add("disabled props", () => <Button disabled label="Create server" />)
  .add("type='danger' props", () => (
    <Button type="danger" label="Create server" />
  ))
  .add("type='dark' props", () => <Button type="dark" label="Create server" />)
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
    <Button iconBefore={<Icon />} type="secondary" label="Announcement" />
  ))
  .add("iconAfter props", () => (
    <Button iconAfter={<Icon />} type="secondary" label="Announcement" />
  ));
