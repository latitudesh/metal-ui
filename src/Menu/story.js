import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SettingsIcon } from "../Icon";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Menu from "./index";

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
        <Menu.Item iconBefore={<SettingsIcon />}>Settings</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("iconAfter props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item iconAfter={<SettingsIcon />}>Settings</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("onSelect props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item onSelect={action("clicked")}>Settings</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("type='danger' props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item type="danger">Settings</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("type='disabled' props", () => (
    <Menu>
      <Menu.Group>
        <Menu.Item type="disabled">Settings</Menu.Item>
      </Menu.Group>
    </Menu>
  ))
  .add("with Dropdown", () => (
    <Dropdown
      position="bottomLeft"
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item iconAfter={<SettingsIcon />}>Settings</Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button type="secondary" label="click here" />
    </Dropdown>
  ));
