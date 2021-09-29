/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import tw from 'twin.macro'
import classNames from 'classnames'

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
  ...props
}) => {
  return (
    <div
      className={classNames({
        className: Boolean(className),
        backgroundColor: Boolean(backgroundColor)
      })}
      css={[
        tw`overflow-hidden`,
        Boolean(flex) && tw`flex`,
        alignItems === 'start' && tw`items-start` ,
        alignItems === 'end' && tw`items-end` ,
        alignItems === 'center' && tw`items-center` ,
        alignItems === 'baseline' && tw`items-baseline` ,
        alignItems === 'stretch' && tw`items-stretch` ,

        justifyContent === 'start' && tw`justify-start` ,
        justifyContent === 'end' && tw`justify-end` ,
        justifyContent === 'center' && tw`justify-center` ,
        justifyContent === 'between' && tw`justify-between` ,
        justifyContent === 'around' && tw`justify-around` ,
        justifyContent === 'evenly' && tw`justify-evenly` ,

        flexDirection === 'row' && tw`flex-row` ,
        flexDirection === 'row-reverse' && tw`flex-row-reverse` ,
        flexDirection === 'col' && tw`flex-col` ,
        flexDirection === 'col-reverse' && tw`flex-col-reverse` ,

        Boolean(rootCard) && tw`mb-4 border border-border rounded shadow-sm` ,
        !Boolean(noPadding) && tw`px-6 py-4`,

        flexWrap === 'wrap' && tw`flex-wrap` ,
        flexWrap === 'wrap-reverse' && tw`flex-wrap-reverse` ,
        flexWrap === 'nowrap' && tw`flex-nowrap` ,
      ]}
      {...props}
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
