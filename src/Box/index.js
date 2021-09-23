import React from 'react'
import classNames from "classnames";
import PropTypes from "prop-types";

const Box = React.forwardRef(({
  flex,
  alignItems,
  justifyContent,
  backgroundColor,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding,
}, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("overflow-hidden", className, {
        flex: Boolean(flex),
        [`items-${alignItems}`]: Boolean(alignItems),
        [`justify-${justifyContent}`]: Boolean(justifyContent),
        [`bg-${backgroundColor}`]: Boolean(backgroundColor),
        [`flex-${flexDirection}`]: Boolean(flexDirection),
        [`mb-4 border border-border rounded shadow-sm`]: Boolean(rootCard),
        [`px-6 py-4`]: !Boolean(noPadding),
        [`flex-${flexWrap}`]: Boolean(flexWrap),
      })}
    >
      {children}
    </div>
  );
});

Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  backgroundColor: "white",
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null,
};

Box.propTypes = {
  /**
   * Sets the background color
   */
  backgroundColor: PropTypes.string,
  /**
   * When true, renders the Box with `display:flex`
   */
  flex: PropTypes.bool,
  /**
   * Controls item alignment with `align-items`. Only works when flex is true
   */
  alignItems: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
  ]),
  /**
   * Controls item positioning with `justify-content`. Only works when flex is true
   */
  justifyContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
  ]),
  /**
   * Controls the direction of flex items with `flex-direction`. Only works when flex is true
   */
  flexDirection: PropTypes.oneOf(["row", "row-reverse", "col", "col-reverse"]),
  /**
   * Controls how flex items wrap with `flex-wrap`. Only works when flex is true
   */
  flexWrap: PropTypes.oneOf(["wrap", "wrap-reverse", "nowrap"]),
  /**
   * Renders the content
   */
  children: PropTypes.node,
  /**
   * Adds border and shadow to the Box. Useful when using Box as the parent element of a section
   */
  rootCard: PropTypes.bool,
  /**
   * Removes the padding from the Box. Useful when using Box as a standard `div`.
   */
  noPadding: PropTypes.bool,
  className: PropTypes.string,
};

export default Box;
