import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
            className="block text-sm leading-5 font-medium text-accents-six mb-1"
            htmlFor={id}
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
          className={classNames(
            "form-textarea block w-full rounded-md p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-border border shadow-sm focus:outline-none",
            textareaClassName,
            {
              "text-accents-six focus:border-accents-six": !error,
              "border border-error placeholder-error": error,
              "bg-gray-100 cursor-not-allowed": disabled,
            }
          )}
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
};

export default Textarea;
