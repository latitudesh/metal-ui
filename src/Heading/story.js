import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./index";

storiesOf("Heading", module).add("default", () => (
  <Heading
    leftContent={<p>Left content</p>}
    centerContent={<p>Center content</p>}
    rightContent={<p>Right content</p>}
  />
));
