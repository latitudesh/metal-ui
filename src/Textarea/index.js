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
            className="block text-sm leading-5 font-medium text-accent-six mb-1"
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
            "form-textarea block w-full rounded p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-6 border shadow-sm focus:ring-0",
            textareaClassName,
            {
              "border-border text-foreground hover:border-foreground focus:border-foreground placeholder-accent-five": !error && !disabled,
              "text-error border-error hover:border-error focus:border-error placeholder-error": error,
              "border-border bg-background cursor-not-allowed placeholder-accents-five": disabled,
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
