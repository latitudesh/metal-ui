/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { css } from '@emotion/react';

const SpinningDots = ({ className, variant }) => {
  const i = classNames("animate-pulse h-0 w-0 rounded-full", {
      'text-accent-six': variant === 'default',
      'text-accent-three': variant === 'light',
      'text-accent-eight': variant === 'dark',
    }
  );

  const iCss = css`
    border-width: 3px;
  `;

  return (
    <div
      className={classNames(
        "spinner inline p-0 h-auto w-full text-center",
        className
      )}
    >
      <span className="inline-flex relative align-middle h-2 text-center opacity-50 w-10">
        <div className="flex w-full justify-around">
          <i className={i} css={iCss} style={{ animationDelay: "-.2s" }}></i>
          <i className={i} css={iCss} style={{ animationDelay: "-.1s" }}></i>
          <i className={i} css={iCss}></i>
        </div>
      </span>
    </div>
  );
};

SpinningDots.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "inherit",
    "light",
    "dark",
  ]),
};

SpinningDots.defaultProps = {
  variant: "default",
};

export default SpinningDots;
