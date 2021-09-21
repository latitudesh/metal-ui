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
          tw`relative border items-center flex font-medium rounded focus:outline-none focus:ring transition ease-in-out duration-150 justify-center max-w-full cursor-pointer antialiased`,
          disabled &&
            tw`border-border text-accent-four hover:text-accent-four active:text-accent-four bg-accent-two hover:bg-accent-two active:bg-accent-two cursor-not-allowed`,
          variant == "default" &&
            !disabled &&
            tw`border-transparent text-white hover:text-white bg-brand-uv hover:bg-opacity-90 active:bg-opacity-90 active:text-white`,
          variant == "secondary" &&
            !disabled &&
            tw`border-secondary hover:border-foreground text-secondary hover:text-foreground bg-white hover:bg-accent-two active:bg-foreground active:text-white`,
          variant == "danger" &&
            !disabled &&
            tw`border-error-dark hover:border-error-dark text-white hover:text-error-dark bg-error-dark hover:bg-accent-two active:bg-foreground active:text-white`,
          variant == "minimal" &&
            !disabled &&
            tw`border-transparent bg-transparent hover:bg-accent-three active:bg-accent-two text-foreground hover:text-accent-seven active:text-accent-five`,
          variant == "inverted" &&
            !disabled &&
            tw`border-brand-gray text-white hover:text-white bg-transparent hover:opacity-80 active:text-white`,
          size == "small" && tw`py-2 px-3 h-7 leading-5 text-sm`,
          size == "normal" && tw`py-2 px-6 h-9 leading-6 text-sm`,
          size == "large" && tw`py-2 px-8 h-11 leading-7 text-base`,
          block && tw`w-full`,
        ]}
        {...rest}
      >
        {isLoading && (
          <SpinningDots variant="inherit" className={tw`absolute`} />
        )}
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
    "minimal",
    "inverted",
  ]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  size: "normal",
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false,
};

export default Button;
