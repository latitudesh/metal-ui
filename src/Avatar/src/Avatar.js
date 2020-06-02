import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import globalGetInitials from "./utils/getInitials";
import globalHash from "./utils/hash";
import getAvatarProps from "./utils/getAvatarProps";
import getInitialsFontSize from "./utils/getInitialsFontSize";

const isObjectFitSupported =
  typeof document !== "undefined" &&
  "objectFit" in document.documentElement.style;

class Avatar extends PureComponent {
  static propTypes = {
    /**
     * The src attribute of the image.
     * When it's not available, render initials instead.
     */
    src: PropTypes.string,

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
     * When true, force show the initials.
     * This is useful in some cases when using Gravatar and transparent pngs.
     */
    forceShowInitials: PropTypes.bool,

    /**
     * When the size is smaller than this number, use a single initial for the avatar.
     */
    sizeLimitOneCharacter: PropTypes.number,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    color: "automatic",
    size: 24,
    isSolid: false,
    getInitials: globalGetInitials,
    forceShowInitials: false,
    sizeLimitOneCharacter: 20,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { imageHasFailedLoading: false };
  }

  handleError = () => {
    this.setState({ imageHasFailedLoading: true });
  };

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
      theme,
      src,
      size,
      name,
      isSolid,
      hashValue: propsHashValue,
      getInitials,
      color: propsColor,
      forceShowInitials,
      sizeLimitOneCharacter,
      ...props
    } = this.props;

    const { imageHasFailedLoading } = this.state;
    const imageUnavailable = !src || imageHasFailedLoading;
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
        className={`rounded-full overflow-hidden relative inline-flex flex-shrink-0 justify-center`}
        style={{
          backgroundColor: colorProps.backgroundColor,
          width: size,
          height: size,
        }}
        title={name}
        {...props}
      >
        {(imageUnavailable || forceShowInitials) && (
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
        )}
        {!imageUnavailable && (
          <span
            style={{ objectFit: "cover" }} // Unsupported by ui-box directly
            width={isObjectFitSupported ? "100%" : "auto"} // Fallback to old behaviour on IE
            height="100%"
            src={src}
            onError={this.handleError}
          />
        )}
      </div>
    );
  }
}

export default Avatar;
