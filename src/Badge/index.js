import React from "react";
import classNames from "classnames";

const Badge = ({ style, children, minimal, className, rounded }) => {
  let badgeStyle = [
    {
      "text-success": style === "positive",
      "text-warning": style === "warning",
      "text-violet": style === "attention",
      "text-error": style === "danger",
    },
  ];

  let isRounded = [
    {
      "rounded-full bg-foreground text-white": rounded,
    },
  ];

  return (
    <div
      className={classNames(
        "border border-border inline-flex items-center px-2.5 rounded-md text-sm font-medium h-6 leading-6",
        badgeStyle,
        isRounded,
        className
      )}
    >
      {!minimal && (
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

export default Badge;
