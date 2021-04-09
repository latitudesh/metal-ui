import React, { cloneElement } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import SpinningDots from "../SpinningDots";

const buttonTypes = {
  default:
    "border-transparent hover:border-accent-five text-white hover:text-foreground bg-foreground hover:bg-accent-two active:bg-foreground active:text-white",
  secondary:
    "border-secondary hover:border-foreground text-secondary hover:text-foreground bg-white hover:bg-accent-two active:bg-foreground active:text-white",
  danger:
    "border-error-dark hover:border-error-dark text-white hover:text-error-dark bg-error-dark hover:bg-accent-two active:bg-foreground active:text-white",
  disabled:
    "border-border text-accent-four hover:text-accent-four active:text-accent-four bg-accent-two hover:bg-accent-two active:bg-accent-two cursor-not-allowed",
  minimal:
    "border-transparent bg-transparent hover:bg-accent-three active:bg-accent-two text-foreground hover:text-accent-seven active:text-accent-five",
  small: "px-4 h-8 leading-8 text-sm",
  normal: "px-6 h-9 leading-9 text-sm",
  large: "px-12 h-10 leading-10 text-base",
};

const Button = ({
  disabled,
  iconBefore,
  iconAfter,
  onClick,
  label,
  type,
  size,
  variant,
  component,
  block,
  isLoading,
  className,
}) => {
  const cx = classNames.bind(buttonTypes);

  const ButtonContent = (
    <div
      className={classNames("flex items-center justify-center", {
        "opacity-0": isLoading,
        "opacity-100": !isLoading,
      })}
    >
      {iconBefore && (
        <span className="flex mr-2">{cloneElement(iconBefore)}</span>
      )}
      <span className="truncate">{label}</span>
      {iconAfter && (
        <span className="flex ml-2">{cloneElement(iconAfter)}</span>
      )}
    </div>
  );

  const ButtonClasses = cx(
    "Button relative border items-center flex font-medium rounded focus:outline-none transition ease-in-out duration-150 justify-center max-w-full cursor-pointer",
    className,
    {
      disabled: disabled,
      [variant]: Boolean(variant) && !disabled,
      [size]: Boolean(size),
      "block w-full": Boolean(block),
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
          {isLoading && <SpinningDots variant="inherit" className="absolute" />}
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
  size: PropTypes.oneOf(["small", "normal", "large"]),
  isLoading: PropTypes.bool,
  component: PropTypes.element,
};

Button.defaultProps = {
  size: "normal",
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false,
};

export default Button;
