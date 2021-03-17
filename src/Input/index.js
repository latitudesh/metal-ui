import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = React.forwardRef(
  (
    {
      onChange,
      inputClassName,
      className,
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
            className="block text-sm leading-5 font-medium text-gray-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id={id}
            ref={ref}
            onChange={handleChange}
            defaultValue={internalValue}
            aria-label={label}
            aria-required={label ? true : false}
            aria-invalid={error ? true : false}
            disabled={disabled}
            className={classNames(
              "form-input block w-full sm:text-sm sm:leading-5",
              inputClassName,
              {
                "bg-red-100 border border-red-400 focus:border-red-300 focus:ring focus:ring-1 focus:ring-red": error,
                "bg-gray-100 cursor-not-allowed": disabled,
              }
            )}
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
};

export default Input;
