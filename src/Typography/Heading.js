import classNames from "classnames";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Heading extends PureComponent {
  static propTypes = {
    /**
     * Can be: 1, 2, 3, 4, 5, 6
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    /**
     * The only options are default and danger.
     */
    color: PropTypes.oneOf(["default", "danger"]).isRequired,
  };

  static defaultProps = {
    size: 1,
    color: "default",
  };

  render() {
    const { className, color, size, h, ...props } = this.props;
    const HTag = `h${this.props.size}`;

    return (
      <HTag
        className={classNames("leading-normal", {
          "text-5xl font-bold tracking-tighter": size == 1,
          "text-4xl font-semibold tracking-tighter": size == 2,
          "text-2xl font-semibold tracking-tight": size == 3,
          "text-xl font-medium": size == 4,
          "text-base font-medium": size == 5,
          "text-sm font-medium": size == 6,
          "text-gray-800": color == "default",
          "text-red-700": color == "danger",
        })}
        {...props}
      />
    );
  }
}

export default Heading;
