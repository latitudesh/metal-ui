import React, { cloneElement } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import SpinningDots from "../SpinningDots";

const buttonTypes = {
  default:
    "border-transparent hover:border-accents-five text-white hover:text-foreground bg-foreground hover:bg-accents-two active:bg-foreground active:text-white",
  secondary:
    "border-secondary hover:border-foreground text-secondary hover:text-foreground bg-white hover:bg-accents-two active:bg-foreground active:text-white",
  danger:
    "border-error-dark hover:border-error-dark text-white hover:text-error-dark bg-error-dark hover:bg-accents-two active:bg-foreground active:text-white",
  disabled:
    "border-border text-accents-four hover:text-accents-four active:text-accents-four bg-accents-two hover:bg-accents-two active:bg-accents-two cursor-not-allowed",
  minimal:
    "border-transparent bg-transparent hover:bg-accents-three active:bg-accents-two text-foreground hover:text-accents-seven active:text-accents-five",
};

const Button = ({
  disabled,
  iconBefore,
  iconAfter,
  onClick,
  label,
  type,
  variant,
  component,
  block,
  large,
  isLoading,
}) => {
  const cx = classNames.bind(buttonTypes);

  const ButtonContent = (
    <div
      className={classNames("flex items-center justify-center", {
        "opacity-0": isLoading,
        "opacity-100": !isLoading,
      })}
    >
      {iconBefore && <span className="flex mr-2">{cloneElement(iconBefore)}</span>}
      <span className="truncate">{label}</span>
      {iconAfter && <span className="flex ml-2">{cloneElement(iconAfter)}</span>}
    </div>
  );

  const ButtonClasses = cx(
    "Button border items-center flex font-medium rounded-lg focus:outline-none transition ease-in-out duration-150 justify-center max-w-full cursor-pointer",
    {
      disabled: disabled,
      [variant]: Boolean(variant) && !disabled,
      "px-5 h-9 leading-9 text-sm": !Boolean(block),
      "px-12 h10 leading-10 w-full": Boolean(block),
      "px-12 h-10 leading-10": Boolean(large),
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
          type={type}
          onClick={onClick}
          disabled={disabled || isLoading}
          className={ButtonClasses}
        >
          {isLoading && <SpinningDots variant="light" className="absolute" />}
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
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "danger",
    "disabled",
    "minimal",
  ]),
  isLoading: PropTypes.bool,
  component: PropTypes.element,
};

Button.defaultProps = {
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false,
};

export default Button;
