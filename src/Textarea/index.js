/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import Label from "../Label";

const Textarea = React.forwardRef(
  (
    {
      onChange,
      textareaClassName,
      className,
      value,
      defaultValue,
      label,
      id,
      error,
      disabled,
      rows,
      variant,
      resize,
      ...rest
    },
    ref
  ) => {

    const handleChange = useCallback(
      (event) => {
        if (onChange) {
          onChange(event.target.value, event);
        }
      },
      [onChange]
    );

    return (
      <div className={className}>
        {label && (
          <Label htmlFor={id} variant={variant} disabled={disabled}>
            {label}
          </Label>
        )}

        <textarea
          id={id}
          ref={ref}
          rows={rows}
          onChange={handleChange}
          defaultValue={defaultValue}
          aria-label={label}
          aria-required={!!label}
          aria-invalid={!!error}
          disabled={disabled}
          value={value}
          css={[
            tw`block w-full rounded p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-6 border shadow-sm focus:outline-none focus:ring-0 font-family[inherit]`,
            textareaClassName && textareaClassName,
            !error &&
              !disabled &&
              tw`border-border text-foreground hocus:border-foreground placeholder-accent-five`,
            error &&
              tw`text-error border-error hocus:border-error placeholder-error`,
            disabled &&
              tw`border-border bg-background cursor-not-allowed placeholder-accent-five`,
            variant === "brand" &&
              !disabled &&
              tw`border-border text-brand-uv hocus:border-brand-uv placeholder-accent-four`,
            variant === "brand-dark" &&
              !disabled &&
              tw`border-transparent text-white bg-brand-melrose bg-opacity-20 placeholder-brand-melrose hocus:(border-transparent bg-opacity-30)`,
            !resize && tw`resize-none`
          ]}
          {...rest}
        />
      </div>
    );
  }
);

Textarea.defaultProps = {
  resize: false,
  rows: 3,
};

Textarea.propTypes = {
  onChange: PropTypes.func,
  textareaClassName: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  variant: PropTypes.oneOf(["brand", "brand-dark"]),
  resize: PropTypes.bool.isRequired
};

export default Textarea;
