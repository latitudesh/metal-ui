import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "./index";

storiesOf("Box", module)
  .addDecorator((getStory) => (
    <div style={{ width: 500, padding: 10 }}>{getStory()}</div>
  ))
  .add("default", () => <Box>content</Box>)
  .add("backgroundColor props", () => (
    <Box backgroundColor="gray-100">content</Box>
  ))
  .add("rootCard props", () => <Box rootCard>content</Box>)
  .add("noPadding props", () => (
    <Box noPadding rootCard>
      content
    </Box>
  ));
