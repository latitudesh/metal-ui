import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./index";

storiesOf("Header", module).add("default", () => (
  <Header
    leftContent={<p>Left content</p>}
    centerContent={<p>Center content</p>}
    rightContent={<p>Right content</p>}
  />
));
