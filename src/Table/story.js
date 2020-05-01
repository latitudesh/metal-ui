import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "./index";

storiesOf("Table", module).add("default", () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell>IP</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>10.54.157.26</Table.Cell>
        <Table.Cell>Private IPMI</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>192.168.0.2</Table.Cell>
        <Table.Cell>Public IPv4</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
));
