import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Content = ({ children, size, className, bg }) => {
  const base = (
    <div
      className={classNames(
        "p-8 h-full overflow-y-auto",
        {
          "bg-background": size !== "full" && !bg,
          "bg-white": size === "full" && !bg,
          [`bg-${bg}`]: bg,
        },
        className
      )}
    >
      <div
        className={classNames("mx-auto", {
          "max-w-3xl": size === "small",
          "max-w-5xl": size === "default" || !size,
          "max-w-full": size === "full",
          "px-4 sm:px-6 md:px-8": size !== "full",
        })}
      >
        {children}
      </div>
    </div>
  );

  return base;
};

Content.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
  bg: PropTypes.string,
};

export default Content;
