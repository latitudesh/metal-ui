import React, { cloneElement } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const buttonTypes = {
  default:
    "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 focus:shadow-outline-indigo",
  secondary:
    "border-gray-300 text-gray-800 bg-white hover:bg-gray-100 active:bg-gray-100 focus:shadow-outline-blue",
  danger:
    "border-none text-white bg-red-600 hover:bg-red-700 active:bg-red-700 focus:shadow-outline-red",
  disabled: "opacity-50 cursor-default hover:bg-transparent",
  minimal:
    "border-transparent text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-100",
};

const Button = ({
  disabled,
  iconBefore,
  iconAfter,
  onClick,
  label,
  type,
  component,
  block,
  large,
}) => {
  const cx = classNames.bind(buttonTypes);

  const ButtonContent = (
    <>
      {iconBefore && <span className="mr-2">{cloneElement(iconBefore)}</span>}
      <span>{label}</span>
      {iconAfter && <span className="ml-2">{cloneElement(iconAfter)}</span>}
    </>
  );

  const ButtonClasses = cx(
    "Button items-center border font-medium rounded-lg focus:outline-none transition ease-in-out duration-150 justify-center",
    {
      disabled: disabled,
      default: !type,
      [type]: Boolean(type),
      "px-5 h-9 leading-9 inline-flex text-sm": !Boolean(block),
      "w-full h-12 leading-12 text-base block": Boolean(block),
      "px-10 h-10 leading-10 inline-flex": Boolean(large),
    }
  );

  const RenderComponent = () => {
    if (
      component.props.children &&
      typeof component.props.children !== "string"
    ) {
      const children = cloneElement(component.props.children, {
        className: ButtonClasses,
      });
      return cloneElement(component, {}, children);
    } else {
      return cloneElement(component, { className: ButtonClasses });
    }
  };

  return (
    <>
      {component ? (
        <RenderComponent />
      ) : (
        <button
          type={"button"}
          onClick={onClick}
          disabled={disabled}
          className={ButtonClasses}
        >
          {ButtonContent}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  component: PropTypes.element,
};

export default Button;
