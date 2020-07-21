import React, { cloneElement } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const buttonTypes = {
  default:
    "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 focus:shadow-outline-indigo",
  secondary:
    "border-gray-300 text-gray-800 bg-white hover:bg-gray-50 active:bg-gray-50 focus:shadow-outline-blue",
  danger:
    "border-transparent text-white bg-red-600 hover:bg-red-700 active:bg-red-700 focus:shadow-outline-red",
  disabled: "opacity-50 cursor-default hover:bg-transparent",
};

const minimalTypes = {
  disabled: "opacity-50",
  danger:
    "border-transparent text-red-600 hover:text-red-500 active:text-red-700",
  secondary:
    "border-transparent text-gray-700 hover:text-gray-500 active:text-gray-700",
  default:
    "border-transparent text-indigo-600 hover:text-indigo-500 active:text-indigo-700",
};

const Button = ({
  appearance,
  disabled,
  className,
  iconBefore,
  iconAfter,
  onClick,
  label,
  type,
  component,
  block,
  large,
}) => {
  const minimal = appearance === "minimal";
  const cx = classNames.bind(minimal ? minimalTypes : buttonTypes);

  const ButtonContent = (
    <>
      {iconBefore && <span className="mr-2">{cloneElement(iconBefore)}</span>}
      <span>{label}</span>
      {iconAfter && <span className="ml-2">{cloneElement(iconAfter)}</span>}
    </>
  );

  const ButtonClasses = cx(
    "Button items-center border text-sm font-medium rounded-lg focus:outline-none transition ease-in-out duration-150",
    {
      disabled: disabled,
      default: !type,
      [type]: Boolean(type),
      "px-5 h-9 leading-9 inline-flex": !Boolean(block),
      "w-full h-11 leading-11 block": Boolean(block),
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
  appearance: PropTypes.string,
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
