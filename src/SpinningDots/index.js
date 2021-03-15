import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SpinningDots = ({ className, variant }) => {
  const i = classNames("animate-pulse w-1.5 h-1.5 rounded-full", {
    'bg-gray-300': variant === 'light',
    'bg-gray-600': variant === 'default',
  });

  return (
    <div
      className={classNames(
        "spinner inline p-0 h-auto w-full text-center",
        className
      )}
    >
      <span className="inline-flex relative align-middle h-2 text-center opacity-50 w-10">
        <div className="flex w-full justify-around">
          <i className={i} style={{ animationDelay: "-.2s" }}></i>
          <i className={i} style={{ animationDelay: "-.1s" }}></i>
          <i className={i}></i>
        </div>
      </span>
    </div>
  );
};

SpinningDots.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "light",
  ]),
};

SpinningDots.defaultProps = {
  variant: "default",
};

export default SpinningDots;
