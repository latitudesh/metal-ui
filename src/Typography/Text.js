import classNames from "classnames";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Text extends PureComponent {
  static propTypes = {
    /**
     * When true, makes Text semi-bold.
     */
    bold: PropTypes.bool,

    color: PropTypes.string,
  };

  static defaultProps = {
    color: "text-gray-800",
  };

  render() {
    const { className, bold, color, small, ...props } = this.props;

    return (
      <span
        className={classNames(color, {
          "font-semibold": Boolean(bold),
          "text-base": !Boolean(small),
          "text-sm": Boolean(small)
        })}
        {...props}
      />
    );
  }
}

export default Text;
