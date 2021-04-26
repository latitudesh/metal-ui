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
      label,
      id,
      error,
      disabled,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState();

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const handleChange = useCallback(
      (event) => {
        setInternalValue(event.target.value);
        if (onChange) {
          onChange(event.target.value, event);
        }
      },
      [setInternalValue, onChange]
    );

    return (
      <div className={className}>
        {label && (
          <label
            tw="block text-sm leading-5 font-medium text-accent-six normal-case mb-1"
            htmlFor={id}
            css={[
              variant == "brand-dark" &&
                !disabled &&
                tw`text-white`,
            ]}
          >
            {label}
          </label>
        )}
        <div tw="mt-1 relative">
          <input
            id={id}
            ref={ref}
            onChange={handleChange}
            defaultValue={internalValue}
            aria-label={label}
            aria-required={label ? true : false}
            aria-invalid={error ? true : false}
            disabled={disabled}
            css={[
              tw`block w-full rounded p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border shadow-sm focus:outline-none focus:ring-0`,
              inputClassName && inputClassName,
              !error &&
                !disabled &&
                tw`border-border text-foreground hocus:border-accent-five placeholder-accent-five`,
              error &&
                tw`text-error border-error hocus:border-error placeholder-error`,
              disabled &&
                tw`border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five`,
              variant == "brand" &&
                !disabled &&
                tw`border-border text-brand-uv hocus:border-brand-uv placeholder-accent-four`,
              variant == "brand-dark" &&
                !disabled &&
                tw`border-brand-melrose border-opacity-20 text-white bg-brand-melrose bg-opacity-20 placeholder-brand-melrose hocus:(border-brand-melrose border-opacity-20 bg-opacity-30)`,
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
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["brand", "brand-dark"]),
};

export default Input;
