import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import globalGetInitials from "./utils/getInitials";
import globalHash from "./utils/hash";
import getAvatarProps from "./utils/getAvatarProps";
import getInitialsFontSize from "./utils/getInitialsFontSize";
import classNames from "classnames";

class Avatar extends PureComponent {
  static propTypes = {
    /**
     * The size of the avatar.
     */
    size: PropTypes.number,

    /**
     * The name used for the initials and title attribute.
     */
    name: PropTypes.string,

    /**
     * The value used for the hash function.
     * The name is used as the hashValue by default.
     * When dealing with anonymous users you should use the id instead.
     */
    hashValue: PropTypes.string,

    /**
     * When true, render a solid avatar.
     */
    isSolid: PropTypes.bool,

    /**
     * The color used for the avatar.
     * When the value is `automatic`, use the hash function to determine the color.
     */
    color: PropTypes.string.isRequired,

    /**
     * Function to get the initials based on the name.
     */
    getInitials: PropTypes.func,

    /**
     * When the size is smaller than this number, use a single initial for the avatar.
     */
    sizeLimitOneCharacter: PropTypes.number,
  };

  static defaultProps = {
    color: "automatic",
    size: 24,
    isSolid: false,
    getInitials: globalGetInitials,
    sizeLimitOneCharacter: 20,
  };

  constructor(props, context) {
    super(props, context);
  }

  getColorProps = () => {
    const { isSolid, color, hashValue: propsHashValue, name } = this.props;

    if (color === "automatic") {
      const hashValue = globalHash(propsHashValue || name);
      return getAvatarProps({ isSolid, color, hashValue });
    }

    return getAvatarProps({ isSolid, color });
  };

  render() {
    const {
      className,
      size,
      name,
      isSolid,
      hashValue: propsHashValue,
      getInitials,
      color: propsColor,
      sizeLimitOneCharacter,
      ...props
    } = this.props;

    const initialsFontSize = `${getInitialsFontSize(
      size,
      sizeLimitOneCharacter
    )}px`;

    let initials = getInitials(name);
    if (size <= sizeLimitOneCharacter) {
      initials = initials.slice(0, 1);
    }

    const colorProps = this.getColorProps();

    return (
      <div
        className={classNames(
          "rounded-full overflow-hidden relative inline-flex flex-shrink-0 justify-center",
          className,
          {}
        )}
        style={{
          backgroundColor: colorProps.backgroundColor,
          width: size,
          height: size,
        }}
        title={name}
        {...props}
      >
        <span
          className={`relative flex justify-center items-center`}
          style={{
            color: colorProps.color,
            fontSize: initialsFontSize,
            lineHeight: initialsFontSize,
            width: size,
            height: size,
          }}
        >
          {initials}
        </span>
      </div>
    );
  }
}

export default Avatar;
