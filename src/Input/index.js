/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

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
        <div tw="relative">
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
              tw`block w-full rounded p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border shadow-sm focus:outline-none focus:ring-0 font-family[inherit]`,
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
                  `background-image: url(https://maxihost-assets.s3-sa-east-1.amazonaws.com/metal-ui/error-icon.svg);background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 9px;`,
                ],
            ]}
            {...rest}
          />
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
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["brand", "brand-dark"]),
};

export default Input;
