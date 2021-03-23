import classNames from "classnames";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Heading extends PureComponent {
  static propTypes = {
    /**
     * Each size represents its corresponding Heading element.
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    /**
     * You can set any other available color
     */
    color: PropTypes.oneOf(["default", "danger"]).isRequired,

    className: PropTypes.string,
  };

  static defaultProps = {
    size: 1,
    color: "default",
    className: "",
  };

  render() {
    const { className, color, size, ...props } = this.props;
    const HTag = `h${this.props.size}`;

    return (
      <HTag
        className={classNames("font-medium leading-normal", className, {
          "text-4xl tracking-tighter": size == 1,
          "text-3xl tracking-tighter": size == 2,
          "text-xl tracking-tight": size == 3,
          "text-lg": size == 4,
          "text-base": size == 5,
          "text-sm": size == 6,
          "text-accent-seven": color == "default",
          "text-error": color == "danger",
        })}
        {...props}
      />
    );
  }
}

export default Heading;
