import React, { useState, useEffect, useCallback } from "react";

import PropTypes, { bool, string } from "prop-types";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import tw, { styled, css } from "twin.macro";


const Option = styled.label(({ variant, isChecked }) => [
  variant === "card" ?
    tw` flex items-center gap-2  flex-row-reverse justify-between rounded shadow-sm border border-border px-6 py-4 cursor-pointer flex focus:outline-none`
    :
    tw`cursor-pointer flex items-center gap-2`,

  isChecked && variant === "card" &&
  tw`bg-accent-two ring-2 ring-offset-2 ring-offset-brand-uv ring-white`

]);


const StyledRadio = styled(RadioGroupPrimitive.Item)(({ variant }) => [
  variant === "card" ?
    tw`w-6 h-6 flex items-center justify-center `
    :
    tw`w-3.5 h-3.5 rounded-full block border border-accent-three flex items-center justify-center`
]);

const StyledIndicator = styled(RadioGroupPrimitive.Indicator)(({ variant }) => [
  variant === "card" ?
    tw`block rounded-full w-6 h-6 rounded-full bg-brand-uv text-white`
    :
    tw`w-2 h-2 block  rounded-full  bg-foreground`,
]);


const styleCard = tw`bg-accent-two ring-2 ring-offset-2 ring-offset-brand-uv ring-white`;

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 13l3 3 7-7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RadioGroup = ({ variant, children, onChange, required, className, defaultValue, value, arialLabel }) => {

  const [internalValue, setInternalValue] = useState("");

  useEffect(() => {
    setInternalValue(defaultValue);
  }, [defaultValue]);


  const handleChange = useCallback(
    (value) => {
      setInternalValue(value);
      if (onChange) {
        onChange(value);
      }
    },
    [setInternalValue, onChange]
  );


  return (
    <RadioGroupPrimitive.Root
      defaultValue={defaultValue}
      aria-label={arialLabel}
      onValueChange={value => handleChange(value)}
      className={className}
      required={required}
    >
      {children.map((child, index) => {
        return <Option
          key={index}
          variant={variant}
          className={child.props.className}
          isChecked={internalValue === child.props.value}>
          <StyledRadio value={child.props.value} id={`r${index}`} variant={variant}>
            <StyledIndicator variant={variant}>
              {variant === "card" && <CheckIcon />}
            </StyledIndicator>
          </StyledRadio>
          <div>
            {child}
          </div>
        </Option>;
      })
      }
    </RadioGroupPrimitive.Root >
  );
};


RadioGroup.Item = ({ children }) => {
  return <div> {children} </div>;
};

RadioGroup.defaultProps = {
  variant: "default",
  required: false,
};

RadioGroup.propTypes = {
  variant: PropTypes.oneOf(["default", "card"]),
  className: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  arialLabel: PropTypes.string,
};

export default RadioGroup;
