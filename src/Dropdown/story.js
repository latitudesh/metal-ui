import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./index";

storiesOf("Dropdown", module)
  .addDecorator((getStory) => <div style={{ padding: 10 }}>{getStory()}</div>)
  .add("default", () => (
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
      <button>click here</button>
    </Dropdown>
  ));
