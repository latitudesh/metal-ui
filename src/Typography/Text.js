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

    is: PropTypes.oneOf(['span', 'p', 'li']).isRequired,

    margin: PropTypes.string

  };

  static defaultProps = {
    color: "text-gray-700",
    is: "span",
    margin: ""
  };

  render() {
    const { className, bold, color, small, is, margin, ...props } = this.props;

    const Tag = is;

    return (
      <Tag
        className={classNames("leading-normal", margin, color, {
          "font-semibold": Boolean(bold),
          "font-normal": !Boolean(bold),
          "text-base": !Boolean(small),
          "text-sm": Boolean(small),
        })}
        {...props}
      />
    );
  }
}

export default Text;
