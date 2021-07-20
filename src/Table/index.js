/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "../Typography/Text";
import tw from "twin.macro";

const Table = ({ children, className }) => (
  <table tw="w-full max-w-full" className={className}>
    {children}
  </table>
);

Table.Head = ({ children, className }) => (
  <thead tw="border-b border-border rounded" className={className}>
    {children}
  </thead>
);

Table.Body = ({ children, className }) => (
  <tbody tw="bg-white" className={className}>
    {children}
  </tbody>
);

Table.HeaderCell = ({ children, className }) => (
  <th
    tw="px-6 py-2 bg-white text-left text-xs leading-5 font-medium text-foreground uppercase tracking-wider"
    className={className}
  >
    {children}
  </th>
);

Table.Row = ({ children, className, onClick, isSelectable }) => (
  <tr
    onClick={onClick}
    css={[
      onClick || isSelectable
        ? tw`hover:bg-accent-two focus:outline-none focus:bg-accent-two cursor-pointer`
        : null,
    ]}
    className={className}
  >
    {children}
  </tr>
);

Table.Cell = ({ children, className }) => (
  <td tw="px-6 py-4" className={className}>
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
