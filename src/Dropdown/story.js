import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./index";
import Button from "../Button";

storiesOf("Dropdown", module).add("default", () => (
  <Dropdown
    position="bottomLeft"
    content={
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    }
  >
    <Button type="secondary" label="click here" />
  </Dropdown>
));
