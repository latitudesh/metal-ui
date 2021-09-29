import classNames from "classnames";
import PropTypes from "prop-types";

const Box = ({
  flex,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding,
  backgroundColor = 'bg-white',
}) => {
  return (
    <div
      className={classNames("overflow-hidden", className, backgroundColor, {
        flex: Boolean(flex),
        "items-start": alignItems === 'start',
        "items-end": alignItems === 'end',
        "items-center": alignItems === 'center',
        "items-baseline": alignItems === 'baseline',
        "items-stretch": alignItems === 'stretch',

        "justify-start": justifyContent === 'start',
        "justify-end": justifyContent === 'end',
        "justify-center": justifyContent === 'center',
        "justify-between": justifyContent === 'between',
        "justify-around": justifyContent === 'around',
        "justify-evenly": justifyContent === 'evenly',

        "flex-row": flexDirection === 'row',
        "flex-row-reverse": flexDirection === 'row-reverse',
        "flex-col": flexDirection === 'col',
        "flex-col-reverse": flexDirection === 'col-reverse',

        [`mb-4 border border-border rounded shadow-sm`]: Boolean(rootCard),
        [`px-6 py-4`]: !Boolean(noPadding),

        "flex-wrap": flexWrap === 'wrap',
        "flex-wrap-reverse": flexWrap === 'wrap-reverse',
        "flex-nowrap": flexWrap === 'nowrap',

      })}
    >
      {children}
    </div>
  );
};

Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null,
};

Box.propTypes = {
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
  /**
   * Sets a background color. Should be a tailwind class.
   */
  backgroundColor: PropTypes.string,
};

export default Box;
