import classNames from "classnames";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Text extends PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    
    color: PropTypes.string,

    is: PropTypes.oneOf(["span", "p", "li"]).isRequired,

    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    color: "text-accents-seven",
    is: "span",
  };

  render() {
    const { className, bold, color, small, is, ...props } = this.props;

    const Tag = is;

    return (
      <Tag
        className={classNames("leading-normal", className, color, {
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
