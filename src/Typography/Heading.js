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
        className={classNames("", className, {
          "text-4xl font-bold tracking-tighter": size == 1,
          "text-3xl font-semibold tracking-tighter": size == 2,
          "text-2xl font-semibold tracking-tight": size == 3,
          "text-xl font-semibold tracking-tight": size == 4,
          "text-lg font-semibold": size == 5,
          "text-normal font-normal": size == 6,
          "text-foreground": color == "default",
          "text-error": color == "danger",
        })}
        {...props}
      />
    );
  }
}

export default Heading;
