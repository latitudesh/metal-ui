import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Menu from "./index";

function Icon() {
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

storiesOf("Menu", module)
  .add("default", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item>On</Menu.Item>
        <Menu.Item>Off</Menu.Item>
        <Menu.Item>Reboot</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("component props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item
          type="danger"
          component={<a href="javascript:void()">Product Docs</a>}
        />
        <Menu.Item component={<a href="javascript:void()">API Docs</a>} />
      </Menu.Group>
      <Menu.Divider />
    </Menu>
  ))
  .add("iconBefore props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item iconBefore={<Icon />}>Announcement</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("iconAfter props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item iconAfter={<Icon />}>Announcement</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("onSelect props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item onSelect={action("clicked")}>Announcement</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("type='danger' props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item type="danger">Announcement</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("type='dark' props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item type="dark">Announcement</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("type='disabled' props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item type="disabled">Announcement</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("with Dropdown", () => (
    <Dropdown
      position="LeftBottom"
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item iconAfter={<Icon />}>Announcement</Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button type="secondary" label="click here" />
    </Dropdown>
  ));
