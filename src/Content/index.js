import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

const Content = React.forwardRef(({ children, size, className, bg }, ref) => {
  const base = (
    <div
      ref={ref}
      className={classNames(
        "flex-1 relative overflow-y-auto focus:outline-none",
        {
          [`bg-${bg}`]: bg,
        },
        className
      )}
    >
      <div className="px-10 py-8">
        <div
          className={classNames("mx-auto", {
            "max-w-xs": size === "xsmall",
            "max-w-2xl": size === "small",
            "max-w-5xl": size === "default" || !size,
            "max-w-full": size === "full",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return base;
});

Content.defaultProps = {
  bg: "white",
};

Content.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
  /**
   * Overrides the default background color.
   */
  bg: PropTypes.string,
};

export default Content;
