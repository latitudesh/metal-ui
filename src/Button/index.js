/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import React, { cloneElement } from "react";
import SpinningDots from "../SpinningDots";
import tw from "twin.macro";

const Button = React.forwardRef(
  (
    {
      disabled,
      iconBefore,
      iconAfter,
      onClick,
      label,
      type,
      size,
      variant,
      block,
      isLoading,
      className,
      ...rest
    },
    ref
  ) => {
    const ButtonContent = (
      <div
        tw="flex items-center justify-center"
        css={[isLoading ? tw`opacity-0` : tw`opacity-100`]}
      >
        {iconBefore && <span tw="flex mr-2">{cloneElement(iconBefore)}</span>}
        <span tw="truncate">{label}</span>
        {iconAfter && <span tw="flex ml-2">{cloneElement(iconAfter)}</span>}
      </div>
    );

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={className}
        ref={ref}
        css={[
          tw`relative border items-center flex font-medium rounded focus:outline-none focus:ring transition ease-in-out duration-150 justify-center max-w-full cursor-pointer select-none`,
          !disabled && tw`hover:shadow`,
          disabled &&
            tw`border-border text-accent-four hover:text-accent-four active:text-accent-four bg-accent-two hover:bg-accent-two active:bg-accent-two cursor-not-allowed`,
          variant === "default" &&
            !disabled &&
            tw`border-transparent text-white bg-foreground hocus:(bg-accent-eight opacity-95)`,
          variant === "secondary" &&
            !disabled &&
            tw`border-secondary text-foreground bg-white`,
          variant === "danger" &&
            !disabled &&
            tw`border-error-dark text-white bg-error-dark hocus:(opacity-95)`,
          variant === "minimal" &&
            !disabled &&
            tw`border-transparent bg-transparent hocus:(text-accent-seven border-secondary border) text-foreground`,
          size === "xsmall" && tw`px-4 h-6 leading-6 text-[13px]`,
          size === "small" && tw`px-4 h-8 leading-8 text-sm`,
          size === "normal" && tw`px-6 h-9 leading-9 text-sm`,
          size === "large" && tw`px-12 h-10 leading-10 text-base`,
          block && tw`w-full`
        ]}
        {...rest}
      >
        {isLoading && <SpinningDots variant="inherit" css={[tw`absolute`]} />}
        {ButtonContent}
      </button>
    );
  }
);

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
    "minimal"
  ]),
  size: PropTypes.oneOf(["xsmall", "small", "normal", "large"]),
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  size: "normal",
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false
};

export default Button;
