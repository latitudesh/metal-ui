import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
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
      disabled,
      placeholder,
      error,
      multiple,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(multiple ? [] : "");

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const handleChange = useCallback(
      (event) => {
        let newValue = event.target.value

        if (multiple) {
          newValue = [...internalValue]
          const foundIndex = newValue.indexOf(event.target.value)

          if (foundIndex !== -1) {
            newValue.splice(foundIndex, 1)
          } else {
            newValue.push(event.target.value)
          }
        }

        setInternalValue(newValue);
        if (onChange) {
          onChange(newValue);
        }
      },
      [setInternalValue, internalValue, onChange]
    );

    return (
      <div className={className}>
        {label && (
          <label
            className="block text-sm font-medium leading-5 text-accent-seven"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="mt-1 relative">
          <select
            id={id}
            ref={ref}
            onChange={handleChange}
            value={internalValue}
            disabled={disabled}
            multiple={multiple}
            className={classNames(
              "border rounded-md shadow-sm mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 sm:text-sm sm:leading-5 focus:ring-0 transition duration-150 ease-in-out",
              selectClassName,
              {
                "border-border text-foreground hover:border-accent-five focus:border-accent-five placeholder-accent-five": !error && !disabled,
                "text-error border-error hover:border-error focus:border-error placeholder-error": error,
                "border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five": disabled,
              }
            )}
            {...rest}
          >
            <option value="" disabled>
              {placeholder}
            </option>
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
  placeholder: "Chose one",
};

Select.propTypes = {
  onChange: PropTypes.func,
  selectClassName: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
};

export default Select;
