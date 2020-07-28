import React, { useState, useEffect, useCallback } from "react";
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
            className="block text-sm leading-5 font-medium text-gray-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        <textarea
          id={id}
          ref={ref}
          onChange={handleChange}
          defaultValue={internalValue}
          aria-label={label}
          aria-required={label ? true : false}
          aria-invalid={error ? true : false}
          disabled
          className={classNames(
            "form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5",
            textareaClassName,
            {
              "bg-red-100 border border-red-400 focus:border-red-300 focus:shadow-outline-red": error,
              "bg-gray-100 cursor-not-allowed": disabled,
            }
          )}
          {...rest}
        />
      </div>
    );
  }
);

export default Textarea;
