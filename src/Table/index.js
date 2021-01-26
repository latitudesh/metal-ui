import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Table = ({ children, className }) => (
  <table className={classNames("min-w-full", className)}>{children}</table>
);

Table.Head = ({ children, className }) => (
  <thead className={className}>{children}</thead>
);

Table.Body = ({ children, className }) => (
  <tbody className={classNames("bg-white", className)}>{children}</tbody>
);

Table.HeaderCell = ({ children, className }) => (
  <th
    className={classNames(
      "px-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",
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
      "hover:bg-gray-50 focus:outline-none focus:bg-gray-50 cursor-pointer":
        onClick || isSelectable,
      className,
    })}
  >
    {children}
  </tr>
);

Table.Cell = ({ children, className }) => (
  <td
    className={classNames(
      "px-6 py-4 text-sm leading-5 text-gray-500",
      className
    )}
  >
    {children}
  </td>
);

Table.TextCell = ({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname,
}) => (
  <div className="flex-col">
    {primary && (
      <div
        className={classNames({
          "text-sm font-medium leading-4 text-black truncate": !primaryClassname,
          [primaryClassname]: primaryClassname,
        })}
      >
        {primary}
      </div>
    )}
    {secondary && (
      <div
        className={classNames({
          "flex text-sm leading-4 text-gray-500": !secondaryClassname,
          [secondaryClassname]: secondaryClassname,
          "mt-1": primary,
        })}
      >
        {secondary}
      </div>
    )}
  </div>
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
