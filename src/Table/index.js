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

Table.displayName = "Table";

Table.Head = React.forwardRef(({ children, ...props }, ref) => (
  <thead tw="border-b border-border rounded" {...props} ref={ref}>
    {children}
  </thead>
));
Table.Head.displayName = "TableHead";

Table.Body = React.forwardRef(({ children, ...props }, ref) => (
  <tbody tw="bg-white" {...props} ref={ref}>
    {children}
  </tbody>
));
Table.Body.displayName = "TableBody";

Table.HeaderCell = React.forwardRef(({ children, ...props }, ref) => (
  <th
    tw="px-6 py-2 bg-white text-left text-xs leading-5 font-medium text-accent-five uppercase tracking-wider"
    {...props}
    ref={ref}
  >
    {children}
  </th>
));
Table.HeaderCell.displayName = "TableHeaderCell";

Table.Row = React.forwardRef(({ children, isClickable, onClick, ...props }, ref) => (
  <tr
    onClick={onClick}
    css={[
      isClickable && tw`hover:bg-accent-two cursor-pointer`
    ]}
    {...props}
    ref={ref}
  >
    {children}
  </tr>
));
Table.Row.displayName = "TableRow";

Table.Cell = React.forwardRef(({ children, className, ...props }, ref) => (
  <td className={className} {...props} ref={ref}>
    {children}
  </td>
));
Table.Cell.displayName = "TableCell";

Table.CellContent = React.forwardRef(({ children, className, ...props }, ref) => (
  <div tw="px-6 py-4" className={className} {...props} ref={ref}>
    {children}
  </div>
));
Table.CellContent.displayName = "TableCellContent";

Table.TextCell = React.forwardRef(({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname,
  title
}, ref) => (
  <>
    {primary && (
      <Text
        small
        tw="block font-medium truncate"
        title={title || (typeof primary === 'string' ? primary : undefined)}
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
        title={title || (typeof secondary === 'string' ? secondary : undefined)}
        className={secondaryClassname}
      >
        {secondary}
      </Text>
    )}
  </>
));
Table.TextCell.displayName = "TableTextCell";

Table.Foot = React.forwardRef(({ children, className, ...props }, ref) => (
  <tfoot
    tw="border-t border-border"
    className={className}
    {...props}
    ref={ref}
  >
    {children}
  </tfoot>
));

Table.Foot.displayName = "TableFoot";

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
