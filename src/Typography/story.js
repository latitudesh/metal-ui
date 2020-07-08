import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";
import Heading from "./Heading";
import Box from "../Box";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";

storiesOf("Typography", module)
  .add("Headings", () => (
    <Box>
      <Heading size={3}>Headings</Heading>
      <Box rootCard className="mt-2 mb-5">
        <Heading size={1}>The quick brown fox jumps.</Heading>
        <Heading size={2}>The quick brown fox jumps.</Heading>
        <Heading size={3} color="danger">
          The quick brown fox jumps.
        </Heading>
        <Heading size={4}>The quick brown fox jumps.</Heading>
        <Heading size={5}>The quick brown fox jumps.</Heading>
        <Heading size={6}>The quick brown fox jumps.</Heading>
      </Box>
    </Box>
  ))
  .add("Text", () => (
    <Box>
      <Heading size={3}>Span</Heading>
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
      <Heading size={3}>Paragraph</Heading>
      <Box rootCard className="mt-2 mb-5">
        <Text is="p" small>
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text is="p">The quick brown fox jumps over the lazy dog</Text>
        <Text is="p" color="text-blue-700">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text is="p" bold>
          The quick brown fox jumps over the lazy dog
        </Text>
      </Box>
    </Box>
  ))
  .add("UnorderedList", () => (
    <Box>
      <Heading size={3}>Unordered List</Heading>
      <Text is="p">ListItem share its props with Text</Text>
      <Box rootCard className="mt-2 mb-5">
        <UnorderedList size={500}>
          <ListItem bold>The quick brown fox jumps over the lazy dog.</ListItem>
          <ListItem color="text-red-500">The quick brown fox jumps over the lazy dog.</ListItem>
          <ListItem small>The quick brown fox jumps over the lazy dog.</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  ));
