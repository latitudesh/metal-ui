/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
const ErrorSvgDataURI =
  "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Ccircle fill='%236359F9' cx='10' cy='10' r='10'/%3E%3Cpath d='M9 6.848c0-.909.4-1.515 1-1.515s1 .606 1 1.515v3.637c0 .909-.4 1.515-1 1.515s-1-.606-1-1.515V6.848Zm1 7.819c-.583 0-1-.417-1-1 0-.584.417-1 1-1s1 .416 1 1c0 .583-.417 1-1 1Z' fill='%232B223C'/%3E%3C/g%3E%3C/svg%3E%0A";

const Addon = ({children, position}) => {
  return (
    <div css={[
        tw`bg-background px-3 flex items-center justify-center shadow-sm text-sm text-accent-five`,
        position === 'left' && tw`rounded-l`,
        position === 'right' && tw`rounded-r`,
      ]}>
      {children}
    </div>
  )
}
const Input = React.forwardRef(
  (
    {
      onChange,
      inputClassName,
      className,
      variant,
      value,
      defaultValue,
      label,
      id,
      error,
      disabled,
      leftAddon,
      rightAddon,
      ...rest
    },
    ref
  ) => {
    const handleChange = useCallback(
      (event) => {
        if (onChange) {
          onChange(event.target.value, event);
        }
      },
      [onChange]
    );

    const brandDarkStyles = tw`border-transparent text-white bg-brand-melrose bg-opacity-20 placeholder-brand-melrose hocus:(border-transparent bg-opacity-30)`;

    return (
      <div className={className}>
        {label && (
          <label
            tw="block text-sm leading-5 font-medium text-accent-six normal-case mb-1"
            htmlFor={id}
            css={[variant === "brand-dark" && !disabled && tw`text-white`]}
          >
            {label}
          </label>
        )}
        <div tw="relative flex">
          {leftAddon && <Addon position={'left'}>{leftAddon}</Addon>}
          <input
            id={id}
            ref={ref}
            onChange={handleChange}
            // React does not pass defaultValue changes to the DOM after initial render
            // https://reactjs.org/docs/uncontrolled-components.html#default-values
            defaultValue={defaultValue}
            aria-label={label}
            aria-required={!!label}
            aria-invalid={!!error}
            disabled={disabled}
            value={value}
            css={[
              tw`block w-full p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border shadow-sm focus:outline-none focus:ring-0 font-family[inherit]`,
              rightAddon && tw`rounded-l`,
              leftAddon && tw`rounded-r`,
              leftAddon && rightAddon && tw`rounded-none`,
              inputClassName && inputClassName,
              !error &&
                !disabled &&
                tw`border-border text-foreground hocus:border-accent-five placeholder-accent-five`,
              disabled &&
                tw`border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five`,
              !disabled &&
                variant === "brand" &&
                tw`border-border text-brand-uv hocus:border-brand-uv placeholder-accent-four`,
              !disabled && variant === "brand-dark" && brandDarkStyles,
              error &&
                tw`text-error border-error hocus:border-error placeholder-error`,
              error &&
                variant === "brand-dark" && [
                  brandDarkStyles,
                  `background-image: url("${ErrorSvgDataURI}");background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 50%;`,
                ],
            ]}
            {...rest}
          />
          {rightAddon && <Addon position={'right'}>{rightAddon}</Addon>}
        </div>
      </div>
    );
  }
);

Input.propTypes = {
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  rightAddon: PropTypes.node,
  leftAddon: PropTypes.node,
  variant: PropTypes.oneOf(["brand", "brand-dark"]),
};

export default Input;
