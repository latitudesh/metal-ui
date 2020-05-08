import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Content = ({ children, size, centered, className }) => {
  const base = (
    <div
      className={classNames(
        "mx-auto px-4 sm:px-6 md:px-8",
        {
          "max-w-lg": size === "small",
          "max-w-full": size === "full",
          "max-w-7xl": size === "default" || !size,
          "flex-auto": centered,
        },
        className
      )}
    >
      <div className="py-8">{children}</div>
    </div>
  );

  if (centered) {
    return (
      <div class="flex h-full items-center justify-center w-full">{base}</div>
    );
  } else {
    return base;
  }
};

Content.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

export default Content;
