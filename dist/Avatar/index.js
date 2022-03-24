'use strict';

var react = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var react$1 = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(v => v && v[0].toUpperCase()) // Watch out for empty strings
  .join('');
}

// http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
function hashCode(s) {
  const str = String(s);
  let hash = 0;
  let char;
  if (str.trim().length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; // Convert to 32bit integer

    hash &= hash;
  }

  return Math.abs(hash);
}

/**
 * Neutrals and Blue are special.
 * They need more variations to properly express all of our UI.
 */
var scales = {
  neutral: {
    N1: '#F9F9FB',
    N2: '#F5F6F7',
    N3: '#EDF0F2',
    N4: '#E4E7EB',
    N5: '#C7CED4',
    N6: '#A6B1BB',
    N7: '#7B8B9A',
    // Large Text AA
    N8: '#66788A',
    // Normal Text AA
    N9: '#425A70',
    // Normal Text AAA
    N10: '#234361',
    // Normal Text AAA
    // Transparent variants.
    N1A: 'rgba(67, 90, 111, 0.04)',
    N2A: 'rgba(67, 90, 111, 0.06)',
    N3A: 'rgba(67, 90, 111, 0.09)',
    N4A: 'rgba(67, 90, 111, 0.14)',
    N5A: 'rgba(67, 90, 111, 0.3)',
    N6A: 'rgba(67, 90, 111, 0.47)',
    N7A: 'rgba(67, 90, 111, 0.7)',
    N8A: 'rgba(67, 90, 111, 0.81)'
  },
  blue: {
    B1: '#f7f9fd',
    B2: '#f1f7fc',
    B3: '#e9f2fa',
    B4: '#ddebf7',
    B5: '#b7d4ef',
    B6: '#8fbce6',
    B7: '#579ad9',
    // Large Text AA
    B8: '#3d8bd4',
    // Normal Text AA
    B9: '#1070ca',
    // Normal Text AAA
    B10: '#084b8a',
    // Normal Text AAA
    // Transparent variants.
    B1A: 'rgba(16, 112, 202, 0.04)',
    B2A: 'rgba(16, 112, 202, 0.06)',
    B3A: 'rgba(16, 112, 202, 0.09)',
    B4A: 'rgba(16, 112, 202, 0.14)',
    B5A: 'rgba(16, 112, 202, 0.3)',
    B6A: 'rgba(16, 112, 202, 0.47)',
    B7A: 'rgba(16, 112, 202, 0.7)',
    B8A: 'rgba(16, 112, 202, 0.81)'
  }
};

var palette = {
  neutral: {
    lightest: scales.neutral.N1,
    light: scales.neutral.N4,
    base: scales.neutral.N9,
    dark: scales.neutral.N10
  },
  blue: {
    lightest: scales.blue.B1,
    light: scales.blue.B4,
    base: scales.blue.B9,
    dark: scales.blue.B10
  },
  red: {
    lightest: '#fef6f6',
    light: '#fae2e2',
    base: '#ec4c47',
    dark: '#bf0e08'
  },
  orange: {
    lightest: '#fdf8f3',
    light: '#fae3cd',
    base: '#d9822b',
    dark: '#95591e'
  },
  yellow: {
    lightest: '#fef8e7',
    light: '#fbe6a2',
    base: '#f7d154',
    dark: '#7e6514'
  },
  green: {
    lightest: '#f1faf5',
    light: '#d4eee2',
    base: '#47b881',
    dark: '#00783e'
  },
  teal: {
    lightest: '#f1fbfc',
    light: '#d2eef3',
    base: '#14b5d0',
    dark: '#007489'
  },
  purple: {
    lightest: '#f8f7fc',
    light: '#eae7f8',
    base: '#735dd0',
    dark: '#37248f'
  }
};

/**
 * This object are functional colors being used the default theme.
 * A required property is required by the default theme NOT by Evergreen itself.
 */

var colors = {
  /**
   * Available on Pane as `<Pane background="tint1" />`
   * @property {string} background.tint1 - Lightest tinted background color. Required property.
   * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
   * @property {string} background.overlay - color used for the overlay
   */
  background: {
    tint1: scales.neutral.N1,
    tint2: scales.neutral.N2,
    overlay: scales.neutral.N7A,
    // Non required.
    yellowTint: palette.yellow.lightest,
    greenTint: palette.green.lightest,
    orangeTint: palette.orange.lightest,
    redTint: palette.red.lightest,
    blueTint: palette.blue.lightest,
    purpleTint: palette.purple.lightest,
    tealTint: palette.teal.lightest
  },

  /**
   * Available on Pane as `<Pane borderBottom borderRight="muted" />`
   * @property {string} text.default - Required property.
   * @property {string} text.muted - Slightly lighter color than default. Required property.
   */
  border: {
    default: scales.neutral.N4,
    // Was BorderColors.muted in v3 and under.
    muted: scales.neutral.N3 // Was BorderColors.extraMuted in v3 and under

  },

  /**
   * Text colors available on Text as `<Text color="muted" />`.
   * @property {string} text.muted - Required property.
   * @property {string} text.default - Required property. Default for text.
   * @property {string} text.dark - Required property. Default for headings.
   */
  text: {
    muted: scales.neutral.N8,
    default: scales.neutral.N9,
    dark: scales.neutral.N10,
    selected: palette.blue.base,
    // Intent.
    success: palette.green.dark,
    info: palette.blue.dark,
    danger: palette.red.dark,
    warning: palette.orange.dark
  },

  /**
   * Icon colors available on Icon.
   * @property {string} icon.default - Required property.
   * @property {string} icon.muted - Required property.
   * @property {string} icon.selected - Required property.
   */
  icon: {
    default: scales.neutral.N8,
    muted: scales.neutral.N7,
    disabled: scales.neutral.N5A,
    selected: palette.blue.base,
    // Intent.
    success: palette.green.base,
    info: palette.blue.base,
    danger: palette.red.base,
    warning: palette.orange.base
  },

  /**
   * Used for Alerts and other (future) componentes that express intent.
   * @property {string} intent.none - Required property.
   * @property {string} intent.success - Required property.
   * @property {string} intent.danger - Required property.
   * @property {string} intent.warning - Required property.
   */
  intent: {
    none: palette.blue.base,
    success: palette.green.base,
    danger: palette.red.base,
    warning: palette.orange.base
  }
};

/**
 * Fills are used in Avatars and Badges.
 */

const fills = {};
fills.solid = {
  neutral: {
    color: 'white',
    backgroundColor: palette.neutral.base
  },
  blue: {
    color: 'white',
    backgroundColor: palette.blue.base
  },
  red: {
    color: 'white',
    backgroundColor: palette.red.base
  },
  orange: {
    color: 'white',
    backgroundColor: palette.orange.base
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.base
  },
  green: {
    color: 'white',
    backgroundColor: palette.green.base
  },
  teal: {
    color: 'white',
    backgroundColor: palette.teal.base
  },
  purple: {
    color: 'white',
    backgroundColor: palette.purple.base
  }
};
fills.subtle = {
  neutral: {
    color: colors.text.default,
    backgroundColor: palette.neutral.light
  },
  blue: {
    color: palette.blue.dark,
    backgroundColor: palette.blue.light
  },
  red: {
    color: palette.red.dark,
    backgroundColor: palette.red.light
  },
  orange: {
    color: palette.orange.dark,
    backgroundColor: palette.orange.light
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.light
  },
  green: {
    color: palette.green.dark,
    backgroundColor: palette.green.light
  },
  teal: {
    color: palette.teal.dark,
    backgroundColor: palette.teal.light
  },
  purple: {
    color: palette.purple.dark,
    backgroundColor: palette.purple.light
  }
};
fills.options = Object.keys(fills.solid);

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */

const getAvatarProps = ({
  isSolid,
  color,
  hashValue
}) => {
  const appearances = fills[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    const keys = Object.keys(appearances);
    const key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter) => {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
};

class Avatar extends react.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "getColorProps", () => {
      const {
        isSolid,
        color,
        hashValue: propsHashValue,
        name
      } = this.props;

      if (color === "automatic") {
        const hashValue = hashCode(propsHashValue || name);
        return getAvatarProps({
          isSolid,
          color,
          hashValue
        });
      }

      return getAvatarProps({
        isSolid,
        color
      });
    });
  }

  render() {
    const {
      className,
      size,
      name,
      isSolid,
      isDashed,
      hashValue: propsHashValue,
      getInitials,
      color: propsColor,
      sizeLimitOneCharacter,
      ...props
    } = this.props;
    const initialsFontSize = `${getAvatarInitialsFontSize(size, sizeLimitOneCharacter)}px`;
    let initials = getInitials(name);

    if (size <= sizeLimitOneCharacter) {
      initials = initials.slice(0, 1);
    }

    const colorProps = this.getColorProps();
    return react$1.jsx("div", _extends({
      className: classNames__default["default"]("overflow-hidden relative inline-flex flex-shrink-0 justify-center", className, {
        "rounded-full": !Boolean(isDashed),
        "rounded border-2 border-dashed border-accent-four": Boolean(isDashed)
      }),
      style: {
        backgroundColor: isDashed ? "transparent" : colorProps.backgroundColor,
        width: size,
        height: size
      },
      title: name
    }, props), react$1.jsx("span", {
      className: classNames__default["default"]("relative flex justify-center items-center", {
        "text-accent-four": Boolean(isDashed)
      }),
      style: {
        color: !isDashed && colorProps.color,
        fontSize: initialsFontSize,
        lineHeight: initialsFontSize,
        width: size,
        height: isDashed ? size - 4 : size
      }
    }, initials));
  }

}

_defineProperty(Avatar, "propTypes", {
  /**
   * The size of the avatar.
   */
  size: PropTypes__default["default"].number,

  /**
   * The name used for the initials and title attribute.
   */
  name: PropTypes__default["default"].string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: PropTypes__default["default"].string,

  /**
   * When true, renders a solid avatar.
   */
  isSolid: PropTypes__default["default"].bool,

  /**
   * When true, renders a square avatar with dashed borders.
   * Overrides isSolid and color.
   */
  isDashed: PropTypes__default["default"].bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: PropTypes__default["default"].string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: PropTypes__default["default"].func,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: PropTypes__default["default"].number
});

_defineProperty(Avatar, "defaultProps", {
  color: "automatic",
  size: 24,
  isSolid: false,
  isDashed: false,
  getInitials: getInitials,
  sizeLimitOneCharacter: 20
});

module.exports = Avatar;
