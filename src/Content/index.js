import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Content = ({ children, size, className }) => {
  const base = (
    <div
      className={classNames(
        "mx-auto px-4 sm:px-6 md:px-8",
        {
          "max-w-xl": size === "small",
          "max-w-5xl": size === "default" || !size,
          "max-w-full": size === "full",
        },
        className
      )}
    >
      <div className="py-8">{children}</div>
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
