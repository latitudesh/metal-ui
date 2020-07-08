import classNames from "classnames";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Text extends PureComponent {
  static propTypes = {
    /**
     * When true, makes Text semi-bold.
     */
    strong: PropTypes.bool,

    color: PropTypes.string,
  };

  static defaultProps = {
    color: "text-gray-800",
  };

  render() {
    const { className, strong, color, small, ...props } = this.props;

    return (
      <span
        className={classNames(color, {
          "font-semibold": Boolean(strong),
          "text-base": !Boolean(small),
          "text-sm": Boolean(small)
        })}
        {...props}
      />
    );
  }
}

export default Text;
