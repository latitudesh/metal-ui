/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

const Textarea = React.forwardRef(
  (
    {
      onChange,
      textareaClassName,
      className,
      value,
      label,
      id,
      error,
      disabled,
      rows,
      variant,
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
          onChange(event.target.value);
        }
      },
      [setInternalValue, onChange]
    );

    return (
      <div className={className}>
        {label && (
          <label
            tw="block text-sm leading-5 font-medium text-accent-six mb-1 normal-case"
            htmlFor={id}
            css={[variant == "brand-dark" && !disabled && tw`text-white`]}
          >
            {label}
          </label>
        )}

        <textarea
          id={id}
          ref={ref}
          rows={rows}
          onChange={handleChange}
          defaultValue={internalValue}
          aria-label={label}
          aria-required={label ? true : false}
          aria-invalid={error ? true : false}
          disabled={disabled}
          css={[
            tw`block w-full rounded p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-6 border shadow-sm focus:outline-none focus:ring-0`,
            textareaClassName && textareaClassName,
            !error &&
              !disabled &&
              tw`border-border text-foreground hocus:border-foreground placeholder-accent-five`,
            error &&
              tw`text-error border-error hocus:border-error placeholder-error`,
            disabled &&
              tw`border-border bg-background cursor-not-allowed placeholder-accent-five`,
            variant == "brand" &&
              !disabled &&
              tw`border-border text-brand-uv hocus:border-brand-uv placeholder-accent-four`,
            variant == "brand-dark" &&
              !disabled &&
              tw`border-transparent text-white bg-brand-melrose bg-opacity-20 placeholder-brand-melrose hocus:(border-transparent bg-opacity-30)`,
          ]}
          {...rest}
        />
      </div>
    );
  }
);

Textarea.defaultProps = {
  rows: 3,
};

Textarea.propTypes = {
  onChange: PropTypes.func,
  textareaClassName: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  variant: PropTypes.oneOf(["brand", "brand-dark"]),
};

export default Textarea;
