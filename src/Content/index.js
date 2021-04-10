import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Content = ({ children, size }) => {
  const base = (
    <div
      className={classNames("p-8 h-full overflow-y-auto", {
        "bg-background": size !== "full",
        "bg-white": size === "full",
      })}
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
};

export default Content;
