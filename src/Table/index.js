/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import tw , {  css } from "twin.macro"; 


const Table = React.forwardRef(({ children, addEdgesPadding, ...props }, ref) => (
  <table tw="w-full max-w-full" {...props} ref={ref}
    css={[
      addEdgesPadding  && css` 
        th:first-of-type, td:first-of-type > div, td:first-of-type > a > div, td:first-of-type > button > div {
          padding-left: 1.5rem; 
        } 
        th:last-of-type, td:last-of-type > div, td:last-of-type > a > div, td:last-of-type > button > div {
          padding-right: 1.5rem
        }
      `,
      !addEdgesPadding && css` 
        th:first-of-type, td:first-of-type > div, td:first-of-type > a > div, td:first-of-type > button > div {
          padding-left: 0
        }
        th:last-of-type, td:last-of-type > div, td:last-of-type > a > div, 
        td:last-of-type > button > div {
          padding-right: 0
        }
      `
    ]}
  > 
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
      isClickable && css`
        &:hover td:not(.opacity-100) {
          opacity: .5; 
        }
      `,
      !isClickable && css`
        a[href]:hover, button:hover {
          opacity: .5
        }
      `,
      isClickable && tw`cursor-pointer`
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
  addEdgesPadding:  PropTypes.bool, 
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
