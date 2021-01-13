import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Dropdown = ({ children, className }) => (
  <DropdownMenu.Root className={classNames("", className)}>
    {children}
  </DropdownMenu.Root>
);

Dropdown.Trigger = ({ children, className, as }) => (
  <DropdownMenu.Trigger
    as={as}
    className={classNames({
      "inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none": !as,
      className,
    })}
  >
    {children}
  </DropdownMenu.Trigger>
);

Dropdown.Content = ({ children, className }) => (
  <DropdownMenu.Content className={classNames("", className)}>
    {children}
  </DropdownMenu.Content>
);

Dropdown.Label = ({ as, children }) => (
  <DropdownMenu.Label as={as} className={classNames("", className)}>
    {children}
  </DropdownMenu.Label>
);

Dropdown.Item = ({
  children,
  className,
  onSelect,
  as,
  disabled,
  textValue,
}) => (
  <DropdownMenu.Item
    onSelect={onSelect}
    as={as}
    disabled={disabled}
    textValue={textValue}
    className={classNames({
      "": onSelect,
      className,
    })}
  >
    {children}
  </DropdownMenu.Item>
);

Dropdown.Group = ({ children, as, value, onValueChange }) => (
  <DropdownMenu.Group as={as} value={value} onValueChange={onValueChange}>
    {children}
  </DropdownMenu.Group>
);

Dropdown.CheckboxItem = ({
  children,
  className,
  as,
  checked,
  onCheckedChange,
  disabled,
  onSelect,
  textValue,
}) => (
  <DropdownMenu.CheckboxItem
    as={as}
    checked={checked}
    onCheckedChange={onCheckedChange}
    disabled={disabled}
    onSelect={onSelect}
    textValue={textValue}
    className={classNames("", className)}
  >
    {children}
  </DropdownMenu.CheckboxItem>
);

Dropdown.ItemIndicator = ({ className, as }) => (
  <DropdownMenu.ItemIndicator
    as={as}
    forceMount={forceMount}
    className={classNames("", className)}
  />
);

Dropdown.RadioGroup = ({ children, className }) => (
  <DropdownMenu.RadioGroup className={classNames("", className)}>
    {children}
  </DropdownMenu.RadioGroup>
);

Dropdown.RadioItem = ({
  children,
  className,
  as,
  value,
  disabled,
  onSelect,
  textValue,
}) => (
  <DropdownMenu.RadioItem
    as={as}
    value={value}
    disabled={disabled}
    onSelect={onSelect}
    textValue={textValue}
    className={classNames("", className)}
  >
    {children}
  </DropdownMenu.RadioItem>
);

Dropdown.Separator = ({ as }) => <DropdownMenu.Separator as={as} />;

Dropdown.Arrow = () => <DropdownMenu.Arrow />;

Dropdown.Content = ({ children, className }) => (
  <DropdownMenu.Content className={classNames("", className)}>
    {children}
  </DropdownMenu.Content>
);

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.object,
};

Dropdown.Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.object,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
  textValue: PropTypes.string,
};

Dropdown.Group.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.enum,
};

Dropdown.Content.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.enum,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
  textValue: PropTypes.string,
};

Dropdown.RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.enum,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
};

Dropdown.RadioItem.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.enum,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
  textValue: PropTypes.string,
};

Dropdown.ItemIndicator.propTypes = {
  as: PropTypes.enum,
  forceMount: PropTypes.bool,
};

Dropdown.Separator.propTypes = {
  as: PropTypes.enum,
};

export default Dropdown;
