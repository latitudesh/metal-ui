import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";
import Heading from "./Heading";
import Box from "../Box";

storiesOf("Typography", module)
  .add("Headings", () => (
    <Box>
      <Text>Headings</Text>
      <Box rootCard className="mt-2 mb-5">
        <div>
          <Heading size={1}>The quick brown fox jumps.</Heading>
        </div>
        <div>
          <Heading size={2}>The quick brown fox jumps.</Heading>
        </div>
        <div>
          <Heading size={3} color="danger">
            The quick brown fox jumps.
          </Heading>
        </div>
        <div>
          <Heading size={4}>The quick brown fox jumps.</Heading>
        </div>
        <div>
          <Heading size={5}>The quick brown fox jumps.</Heading>
        </div>
        <div>
          <Heading size={6}>The quick brown fox jumps.</Heading>
        </div>
      </Box>
    </Box>
  ))
  .add("Text", () => (
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
          <Text bold>The quick brown fox jumps over the lazy dog</Text>
        </div>
      </Box>
    </Box>
  ));
