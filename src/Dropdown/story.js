import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./index";
import Button from "../Button";

storiesOf("Dropdown", module).add("default", () => (
  <Dropdown>
    <Button type="secondary" label="click here" />
  </Dropdown>
));
