/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import tw from "twin.macro";

const Table = React.forwardRef(({ children, ...props }, ref) => (
  <table tw="w-full max-w-full" {...props} ref={ref}>
    {children}
  </table>
));

Table.displayName = 'Table'

Table.Head = React.forwardRef(({ children, ...props }, ref) => (
  <thead tw="border-b border-border rounded" {...props} ref={ref}>
    {children}
  </thead>
));
Table.Head.displayName = 'TableHead'

Table.Body = React.forwardRef(({ children, ...props }, ref) => (
  <tbody tw="bg-white" {...props} ref={ref}>
    {children}
  </tbody>
));
Table.Body.displayName = 'TableBody'

Table.HeaderCell = React.forwardRef(({ children, ...props }, ref) => (
  <th
    tw="pl-2 pr-6 py-2 bg-white text-left text-xs leading-5 font-medium text-accent-five uppercase tracking-wider"
    {...props}
    ref={ref}
  >
    {children}
  </th>
));
Table.HeaderCell.displayName = 'TableHeaderCell'

Table.Row = React.forwardRef(({ children, onClick, isSelectable, ...props }, ref) => (
  <tr
    onClick={onClick}
    css={[
      onClick || isSelectable
        ? tw`hover:bg-accent-two focus:outline-none focus:bg-accent-two cursor-pointer`
        : null,
    ]}
    {...props}
    ref={ref}
  >
    {children}
  </tr>
));
Table.Row.displayName = 'TableRow'

Table.Cell = React.forwardRef(({ children, className, ...props }, ref) => (
  <td tw="pl-2 pr-6 py-4" className={className} {...props} ref={ref}>
    {children}
  </td>
));
Table.Cell.displayName = 'TableCell'

Table.TextCell = React.forwardRef(({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname,
}, ref) => (
  <>
    {primary && (
      <Text
        small
        tw="block font-medium truncate"
        css={[secondary && tw`mb-0.5`]}
        className={primaryClassname}
        ref={ref}
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
));
Table.TextCell.displayName = 'TableTextCell'

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.Head.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.HeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Table.Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.TextCell.propTypes = {
  primary: PropTypes.node,
  primaryClassname: PropTypes.string,
  secondary: PropTypes.node,
  secondaryClassname: PropTypes.string,
};

export default Table;
