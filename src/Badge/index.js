import React from 'react'
import classNames from "classnames";
import PropTypes from "prop-types";

const Badge = ({ style, children, minimal, className, rounded }) => {
  let badgeStyle = [
    {
      "text-foreground": style === "default",
      "text-success": style === "positive",
      "text-warning": style === "warning",
      "text-error": style === "danger",
    },
  ];

  let isRounded = [
    {
      "rounded-full text-white": rounded,
      "bg-foreground": style === "default",
      "bg-success": style == "positive",
      "bg-warning": style === "warning",
      "bg-error": style === "danger",
    },
  ];

  return (
    <div
      className={classNames(
        "inline-flex items-center px-2.5 rounded text-sm font-medium h-6 leading-6",
        !rounded && badgeStyle,
        !rounded && "border border-border",
        rounded && isRounded,
        className
      )}
    >
      {!minimal && !rounded && (
        <svg
          className={classNames("-ml-0.5 mr-1.5 h-2 w-2", badgeStyle)}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}
      {children}
    </div>
  );
};

Badge.defaultProps = {
  style: "default",
  rounded: false,
  minimal: false,
};

Badge.propTypes = {
  /**
   * The color of the badge.
   */
  style: PropTypes.oneOf(["default", "positive", "warning", "danger"]),
  /**
   * When true, renders a rounded badge with inverted colors.
   */
  rounded: PropTypes.bool,
  /**
   * When true, renders a badge without the prepending dot.
   */
  minimal: PropTypes.bool,
};

export default Badge;
