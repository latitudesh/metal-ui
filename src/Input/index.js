/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import Label from "../Label";
const ErrorSvgDataURI =
  "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Ccircle fill='%236359F9' cx='10' cy='10' r='10'/%3E%3Cpath d='M9 6.848c0-.909.4-1.515 1-1.515s1 .606 1 1.515v3.637c0 .909-.4 1.515-1 1.515s-1-.606-1-1.515V6.848Zm1 7.819c-.583 0-1-.417-1-1 0-.584.417-1 1-1s1 .416 1 1c0 .583-.417 1-1 1Z' fill='%232B223C'/%3E%3C/g%3E%3C/svg%3E%0A";

const Addon = ({ children, position }) => {
  return (
    <div
      css={[
        tw`bg-border px-3 flex items-center justify-center shadow-sm text-sm text-accent-five`,
        position === "left" && tw`rounded-l`,
        position === "right" && tw`rounded-r`
      ]}
    >
      {children}
    </div>
  );
};
const Input = React.forwardRef(
  (
    {
      onChange,
      inputClassName,
      className,
      variant,
      value,
      defaultValue,
      label,
      id,
      error,
      disabled,
      prefix,
      suffix,
      size,
      style = {},
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

    const brandDarkStyles = tw`border-transparent text-white bg-brand-melrose bg-opacity-20 placeholder-brand-melrose hocus:(border-transparent bg-opacity-30)`;

    const textEditableStyles = {
      letterSpacing: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
    }
    const isTextEditable = variant === 'text-editable'
    return (
      <div className={className}>
        {label && (
          <Label htmlFor={id} variant={variant} disabled={disabled}>
            {label}
          </Label>
        )}
        <div tw="relative flex">
          {prefix && <Addon position={"left"}>{prefix}</Addon>}
          <input
            id={id}
            ref={ref}
            onChange={handleChange}
            // React does not pass defaultValue changes to the DOM after initial render
            // https://reactjs.org/docs/uncontrolled-components.html#default-values
            defaultValue={defaultValue}
            aria-label={label}
            aria-required={!!label}
            aria-invalid={!!error}
            disabled={disabled}
            value={value}
            style={{
              ...style,
              ...(isTextEditable && textEditableStyles)
            }}
            css={[
              tw`block w-full p-2 transition duration-150 ease-in-out sm:leading-5 border focus:outline-none focus:ring-0 font-family[inherit]`,
              !isTextEditable && tw`shadow-sm`,
              isTextEditable && tw`border-transparent hover:border-border focus:border-accent-five `,
              suffix && tw`rounded-l`,
              prefix && tw`rounded-r`,
              prefix && suffix && tw`rounded-none`,
              !prefix && !suffix && tw`rounded`,
              inputClassName && inputClassName,
              !error &&
                !disabled && !isTextEditable &&
                tw`border-border text-foreground hocus:border-accent-five placeholder-accent-five`,
              disabled &&
                tw`border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five`,
              !disabled &&
                variant === "brand" &&
                tw`border-border text-brand-uv hocus:border-brand-uv placeholder-accent-four`,
              !disabled && variant === "brand-dark" && brandDarkStyles,
              error &&
                tw`text-error border-error hocus:border-error placeholder-error`,
              error &&
                variant === "brand-dark" && [
                brandDarkStyles,
                `background-image: url("${ErrorSvgDataURI}");background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 50%;`
              ],
              !isTextEditable && size === "small" && tw` h-8 leading-8 text-xs`,
              !isTextEditable && size === "normal" && tw` h-9 leading-9 text-sm`,
              !isTextEditable && size === "large" && tw` h-10 leading-10 text-base`
            ]}
            {...rest}
          />
          {suffix && <Addon position={"right"}>{suffix}</Addon>}
        </div>
      </div>
    );
  }
);

Input.defaultProps = {
  size: "normal"
};

Input.propTypes = {
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  suffix: PropTypes.node,
  prefix: PropTypes.node,
  variant: PropTypes.oneOf(["brand", "brand-dark", "text-editable"]),
  size: PropTypes.oneOf(["small", "normal", "large"])
};

export default Input;
