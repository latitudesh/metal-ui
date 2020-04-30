import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "./index";

storiesOf("Box", module)
  .addDecorator((getStory) => (
    <div style={{ width: 500, padding: 10 }}>{getStory()}</div>
  ))
  .add("default", () => <Box>content</Box>)
  .add("with backgroundColor", () => (
    <Box backgroundColor="gray-100">content</Box>
  ))
  .add("with rootCard", () => <Box rootCard>content</Box>)
  .add("with noPadding", () => (
    <Box noPadding rootCard>
      content
    </Box>
  ));
