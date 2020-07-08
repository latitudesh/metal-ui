import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";
import Box from "../Box";

storiesOf("Typography", module).add("Text", () => (
  <Box>
    <Text>Span</Text>
    <Box rootCard className="mt-2 mb-5">
      <div>
        <Text small>The quick brown fox jumps over the lazy dog</Text>
      </div>
      <div>
        <Text>The quick brown fox jumps over the lazy dog</Text>
      </div>
      <div>
        <Text color="text-blue-700">
          The quick brown fox jumps over the lazy dog
        </Text>
      </div>
      <div>
        <Text strong>The quick brown fox jumps over the lazy dog</Text>
      </div>
    </Box>
  </Box>
));
