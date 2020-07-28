import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";

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
      error,
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
            className="leading-normal text-gray-800 font-normal text-sm"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        <select
          id={id}
          ref={ref}
          onChange={handleChange}
          value={internalValue}
          className={classNames(
            "form-select appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight",
            selectClassName,
            {
              "bg-red-100 border border-red-400": error,
            }
          )}
          {...rest}
        >
          {options.map((item, index) => (
            <option key={`${item.value}-${index}`} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
