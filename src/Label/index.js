/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

function Label({
                 variant,
                 disabled,
  htmlFor,
  children
               }) {
  return (
    <label
      tw="block text-sm leading-5 font-medium text-accent-six mb-1 normal-case"
      htmlFor={htmlFor}
      css={[variant === "brand-dark" && !disabled && tw`text-white`]}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
}

export default Label;
