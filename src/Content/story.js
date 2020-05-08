import React from "react";
import { storiesOf } from "@storybook/react";
import Content from "./index";

storiesOf("Content", module)
  .add("default", () => <Content>Text</Content>)
  .add("size='small' props", () => <Content size="small">Small</Content>)
  .add("size='full' props", () => <Content size="full">Full</Content>)
  .add("centered props", () => (
    <Content size="small" centered>
      centered
    </Content>
  ));
