/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

const Select = React.forwardRef(
  (
    {
      onChange,
      selectClassName,
      options,
      className,
      value,
      label,
      id,
      disabled,
      error,
      variant,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState("");

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
            tw="block text-sm font-medium leading-5 text-accent-six normal-case mb-1"
            css={[variant === "brand-dark" && !disabled && tw`text-white`]}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={id}
            ref={ref}
            onChange={handleChange}
            value={internalValue}
            disabled={disabled}
            css={[
              tw`border rounded shadow-sm block w-full pl-3 pr-10 py-2 text-base leading-6 sm:text-sm sm:leading-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-family[inherit]`,
              selectClassName && selectClassName,
              !error &&
                !disabled &&
                tw`border-border text-foreground hocus:border-accent-five placeholder-accent-five`,
              error &&
                tw`text-error border-error hocus:border-error placeholder-error`,
              disabled &&
                tw`border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five`,
              variant === "brand" &&
                !disabled &&
                tw`border-border text-brand-uv hocus:border-brand-uv placeholder-accent-four`,
              variant === "brand-dark" &&
                !disabled &&
                tw`border-transparent text-white bg-brand-melrose bg-opacity-20 placeholder-brand-melrose hocus:(border-transparent bg-opacity-30)`,
            ]}
            {...rest}
          >
            {options.map((item, index) => (
              <option
                key={`${item.value}-${index}`}
                value={item.value}
                disabled={item.disabled}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

Select.defaultProps = {
  options: [],
};

Select.propTypes = {
  onChange: PropTypes.func,
  selectClassName: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["brand", "brand-dark"]),
};

export default Select;
