import React, { cloneElement } from "react";
import classNames from "classnames/bind";

const itemType = {
  iconAfter: "justify-between",
  disabled: "opacity-50",
  danger: "text-red-600 hover:text-red-600 focus:text-red-600",
  default: "text-gray-700 hover:text-gray-900 focus:text-gray-900",
};

const Menu = ({ children, className }) => (
  <div className={classNames("rounded-sm bg-white shadow-xs", className)}>
    {children}
  </div>
);

Menu.Group = ({ children, className }) => (
  <div className={className}>{children}</div>
);

Menu.Divider = () => <div className="border-t border-gray-100"></div>;

Menu.Item = ({
  iconBefore,
  iconAfter,
  disabled,
  onSelect,
  className,
  type,
  children,
  component,
}) => {
  const cx = classNames.bind(itemType);

  const content = (
    <>
      {iconBefore &&
        cloneElement(iconBefore, {
          className: "mr-2 transition ease-in-out duration-150",
        })}
      {children}
      {iconAfter &&
        cloneElement(iconAfter, {
          className: "mr-2 transition ease-in-out duration-150",
        })}
    </>
  );

  const classes = cx(
    "flex text-left min-w-full px-4 py-2 text-sm leading-5 focus:outline-none",
    {
      "focus:bg-gray-100 hover:bg-gray-100": !component,
      iconAfter: iconAfter,
      disabled: disabled && onSelect,
      default: !type && !component,
      [type]: true,
    },
    className
  );

  if (component) {
    if (
      component.props.children &&
      typeof component.props.children !== "string"
    ) {
      const children = cloneElement(component.props.children, {
        className: classes,
      });
      return cloneElement(component, {}, children);
    } else {
      return cloneElement(component, { className: classes });
    }
  } else {
    return (
      <button disabled={disabled} onClick={onSelect} className={classes}>
        {content}
      </button>
    );
  }
};

export default Menu;
