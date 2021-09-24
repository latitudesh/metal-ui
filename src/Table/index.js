/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import tw from "twin.macro";

const Table = ({ children, ...props }) => (
  <table tw="w-full max-w-full" {...props}>
    {children}
  </table>
);

Table.Head = ({ children, ...props }) => (
  <thead tw="border-b border-border rounded" {...props}>
    {children}
  </thead>
);

Table.Body = ({ children, ...props }) => (
  <tbody tw="bg-white" {...props}>
    {children}
  </tbody>
);

Table.HeaderCell = ({ children, ...props }) => (
  <th
    tw="px-6 py-2 bg-white text-left text-xs leading-5 font-medium text-accent-five uppercase tracking-wider"
    {...props}
  >
    {children}
  </th>
);

Table.Row = ({ children, onClick, isSelectable, ...props }) => (
  <tr
    onClick={onClick}
    css={[
      onClick || isSelectable
        ? tw`hover:bg-accent-two focus:outline-none focus:bg-accent-two cursor-pointer`
        : null,
    ]}
    {...props}
  >
    {children}
  </tr>
);

Table.Cell = ({ children, className, ...props }) => (
  <td tw="px-6 py-4" className={className} {...props}>
    {children}
  </td>
);

Table.TextCell = ({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname,
}) => (
  <>
    {primary && (
      <Text
        small
        tw="block font-medium truncate"
        css={[secondary && tw`mb-0.5`]}
        className={primaryClassname}
      >
        {primary}
      </Text>
    )}
    {secondary && (
      <Text
        small
        color="text-accent-five"
        tw="block truncate"
        className={secondaryClassname}
      >
        {secondary}
      </Text>
    )}
  </>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Table.Head.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Table.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Table.HeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Table.Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Table.Cell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Table.TextCell.propTypes = {
  primary: PropTypes.node,
  primaryClassname: PropTypes.string,
  secondary: PropTypes.node,
  secondaryClassname: PropTypes.string,
};

export default Table;
