import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";

const Input = React.forwardRef(
  (
    { onChange, inputClassName, className, value, label, id, error, ...rest },
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
            className="leading-normal text-gray-800 font-normal text-sm"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        <input
          id={id}
          ref={ref}
          onChange={handleChange}
          defaultValue={internalValue}
          aria-label={label}
          aria-required={label ? true : false}
          aria-invalid={error ? true : false}
          className={classNames(
            "form-input appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight",
            inputClassName,
            {
              "bg-red-100 border border-red-400": error,
            }
          )}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
