import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "../Typography/Text";

const Table = ({ children, className }) => (
  <table className={classNames("w-full max-w-full", className)}>
    {children}
  </table>
);

Table.Head = ({ children, className }) => (
  <thead className={classNames("border border-border rounded", className)}>
    {children}
  </thead>
);

Table.Body = ({ children, className }) => (
  <tbody className={classNames("bg-white", className)}>{children}</tbody>
);

Table.HeaderCell = ({ children, className }) => (
  <th
    className={classNames(
      "px-6 py-2 bg-accents-two text-left text-xs leading-4 font-medium text-foreground uppercase tracking-wider",
      className
    )}
  >
    {children}
  </th>
);

Table.Row = ({ children, className, onClick, isSelectable }) => (
  <tr
    onClick={onClick}
    className={classNames({
      "hover:bg-accents-two focus:outline-none focus:bg-accents-two cursor-pointer":
        onClick || isSelectable,
      className,
    })}
  >
    {children}
  </tr>
);

Table.Cell = ({ children, className }) => (
  <td className={classNames("px-6 py-4", className)}>
    <Text small>{children}</Text>
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
      <span
        className={classNames("font-semibold", {
          [primaryClassname]: primaryClassname,
        })}
      >
        {primary}
      </span>
    )}
    {secondary && (
      <span
        className={classNames("block", {
          [secondaryClassname]: secondaryClassname,
        })}
      >
        {secondary}
      </span>
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
