'use strict';

var react = require('@emotion/react');
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var e$2 = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var e__default = /*#__PURE__*/_interopDefaultLegacy(e$2);

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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
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

function memoize$1(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser$2 = typeof document !== 'undefined';

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}

var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};

var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$2 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$2 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;

var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var isBrowser = typeof document !== 'undefined';
var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
  create();
};

function useInsertionEffectMaybe(create) {
  if (!isBrowser) {
    return create();
  }

  useInsertionEffect(create);
}

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$1 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = react.withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = React.useContext(react.ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/React.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$3 = process.env.NODE_ENV === "production" ? {
  name: "fhgur2",
  styles: "display:inline-flex;position:relative;vertical-align:middle;height:0.5rem;text-align:center;opacity:0.5;width:2.5rem"
} : {
  name: "1v4ub7g-SpinningDots",
  styles: "display:inline-flex;position:relative;vertical-align:middle;height:0.5rem;text-align:center;opacity:0.5;width:2.5rem;label:SpinningDots;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

var _ref2$2 = process.env.NODE_ENV === "production" ? {
  name: "1lxykmj",
  styles: "display:flex;width:100%;justify-content:space-around"
} : {
  name: "12ggswq-SpinningDots",
  styles: "display:flex;width:100%;justify-content:space-around;label:SpinningDots;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

const SpinningDots = ({
  className,
  variant,
  css
}) => {
  const StyledIcon = createStyled("i", process.env.NODE_ENV === "production" ? {
    target: "ejico0d0"
  } : {
    target: "ejico0d0",
    label: "StyledIcon"
  })(() => [{
    "animation": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "height": "0px",
    "width": "0px",
    "borderRadius": "9999px",
    "borderWidth": "3px"
  }, variant === "default" && {
    "--tw-text-opacity": "1",
    "color": "rgba(68, 68, 68, var(--tw-text-opacity))"
  }, variant === "light" && {
    "--tw-text-opacity": "1",
    "color": "rgba(229, 231, 235, var(--tw-text-opacity))"
  }, variant === "dark" && {
    "--tw-text-opacity": "1",
    "color": "rgba(17, 17, 17, var(--tw-text-opacity))"
  }], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9xQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IFNwaW5uaW5nRG90cyA9ICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgY3NzIH0pID0+IHtcbiAgY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pKCgpID0+IFtcbiAgICB0d2BhbmltYXRlLXB1bHNlIGgtMCB3LTAgcm91bmRlZC1mdWxsIGJvcmRlci13aWR0aFszcHhdYCxcbiAgICB2YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiB0d2B0ZXh0LWFjY2VudC1zaXhgLFxuICAgIHZhcmlhbnQgPT09IFwibGlnaHRcIiAmJiB0d2B0ZXh0LWFjY2VudC10aHJlZWAsXG4gICAgdmFyaWFudCA9PT0gXCJkYXJrXCIgJiYgdHdgdGV4dC1hY2NlbnQtZWlnaHRgLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgY3NzPXtbdHdgaW5saW5lIHAtMCBoLWF1dG8gdy1mdWxsIHRleHQtY2VudGVyYCwgLi4uY3NzXX1cbiAgICA+XG4gICAgICA8c3BhbiB0dz1cImlubGluZS1mbGV4IHJlbGF0aXZlIGFsaWduLW1pZGRsZSBoLTIgdGV4dC1jZW50ZXIgb3BhY2l0eS01MCB3LTEwXCI+XG4gICAgICAgIDxkaXYgdHc9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uMTVzXCIgfX0gLz5cbiAgICAgICAgICA8U3R5bGVkSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3NzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXG59O1xuXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgY3NzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5pbmdEb3RzO1xuIl19 */");

  return react.jsx("div", {
    className: className,
    css: ["display:inline;padding:0px;height:auto;width:100%;text-align:center;", ...css, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IFNwaW5uaW5nRG90cyA9ICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgY3NzIH0pID0+IHtcbiAgY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pKCgpID0+IFtcbiAgICB0d2BhbmltYXRlLXB1bHNlIGgtMCB3LTAgcm91bmRlZC1mdWxsIGJvcmRlci13aWR0aFszcHhdYCxcbiAgICB2YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiB0d2B0ZXh0LWFjY2VudC1zaXhgLFxuICAgIHZhcmlhbnQgPT09IFwibGlnaHRcIiAmJiB0d2B0ZXh0LWFjY2VudC10aHJlZWAsXG4gICAgdmFyaWFudCA9PT0gXCJkYXJrXCIgJiYgdHdgdGV4dC1hY2NlbnQtZWlnaHRgLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgY3NzPXtbdHdgaW5saW5lIHAtMCBoLWF1dG8gdy1mdWxsIHRleHQtY2VudGVyYCwgLi4uY3NzXX1cbiAgICA+XG4gICAgICA8c3BhbiB0dz1cImlubGluZS1mbGV4IHJlbGF0aXZlIGFsaWduLW1pZGRsZSBoLTIgdGV4dC1jZW50ZXIgb3BhY2l0eS01MCB3LTEwXCI+XG4gICAgICAgIDxkaXYgdHc9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uMTVzXCIgfX0gLz5cbiAgICAgICAgICA8U3R5bGVkSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3NzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXG59O1xuXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgY3NzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5pbmdEb3RzO1xuIl19 */", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IFNwaW5uaW5nRG90cyA9ICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgY3NzIH0pID0+IHtcbiAgY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pKCgpID0+IFtcbiAgICB0d2BhbmltYXRlLXB1bHNlIGgtMCB3LTAgcm91bmRlZC1mdWxsIGJvcmRlci13aWR0aFszcHhdYCxcbiAgICB2YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiB0d2B0ZXh0LWFjY2VudC1zaXhgLFxuICAgIHZhcmlhbnQgPT09IFwibGlnaHRcIiAmJiB0d2B0ZXh0LWFjY2VudC10aHJlZWAsXG4gICAgdmFyaWFudCA9PT0gXCJkYXJrXCIgJiYgdHdgdGV4dC1hY2NlbnQtZWlnaHRgLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgY3NzPXtbdHdgaW5saW5lIHAtMCBoLWF1dG8gdy1mdWxsIHRleHQtY2VudGVyYCwgLi4uY3NzXX1cbiAgICA+XG4gICAgICA8c3BhbiB0dz1cImlubGluZS1mbGV4IHJlbGF0aXZlIGFsaWduLW1pZGRsZSBoLTIgdGV4dC1jZW50ZXIgb3BhY2l0eS01MCB3LTEwXCI+XG4gICAgICAgIDxkaXYgdHc9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uMTVzXCIgfX0gLz5cbiAgICAgICAgICA8U3R5bGVkSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3NzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXG59O1xuXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgY3NzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5pbmdEb3RzO1xuIl19 */"]
  }, react.jsx("span", {
    css: _ref$3
  }, react.jsx("div", {
    css: _ref2$2
  }, react.jsx(StyledIcon, {
    style: {
      animationDelay: "-.3s"
    }
  }), react.jsx(StyledIcon, {
    style: {
      animationDelay: "-.15s"
    }
  }), react.jsx(StyledIcon, null))));
};

SpinningDots.propTypes = {
  className: PropTypes__default["default"].string,
  css: PropTypes__default["default"].array,
  variant: PropTypes__default["default"].oneOf(["default", "inherit", "light", "dark"])
};
SpinningDots.defaultProps = {
  variant: "default",
  css: []
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$2 = process.env.NODE_ENV === "production" ? {
  name: "ro053d",
  styles: "display:flex;margin-right:0.5rem"
} : {
  name: "qzicg-ButtonContent",
  styles: "display:flex;margin-right:0.5rem;label:ButtonContent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "1h52dri",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : {
  name: "1661tgp-ButtonContent",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;label:ButtonContent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var _ref3$1 = process.env.NODE_ENV === "production" ? {
  name: "1gj7rap",
  styles: "display:flex;margin-left:0.5rem"
} : {
  name: "jqkqtd-ButtonContent",
  styles: "display:flex;margin-left:0.5rem;label:ButtonContent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var _ref4$1 = process.env.NODE_ENV === "production" ? {
  name: "a4hmbt",
  styles: "position:absolute"
} : {
  name: "1h821oj-Button",
  styles: "position:absolute;label:Button;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFMEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcGlubmluZ0RvdHMgZnJvbSBcIi4uL1NwaW5uaW5nRG90c1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGljb25CZWZvcmUsXG4gICAgICBpY29uQWZ0ZXIsXG4gICAgICBvbkNsaWNrLFxuICAgICAgbGFiZWwsXG4gICAgICB0eXBlLFxuICAgICAgc2l6ZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICBibG9jayxcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBCdXR0b25Db250ZW50ID0gKFxuICAgICAgPGRpdlxuICAgICAgICB0dz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgY3NzPXtbaXNMb2FkaW5nID8gdHdgb3BhY2l0eS0wYCA6IHR3YG9wYWNpdHktMTAwYF19XG4gICAgICA+XG4gICAgICAgIHtpY29uQmVmb3JlICYmIDxzcGFuIHR3PVwiZmxleCBtci0yXCI+e2Nsb25lRWxlbWVudChpY29uQmVmb3JlKX08L3NwYW4+fVxuICAgICAgICA8c3BhbiB0dz1cInRydW5jYXRlXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAge2ljb25BZnRlciAmJiA8c3BhbiB0dz1cImZsZXggbWwtMlwiPntjbG9uZUVsZW1lbnQoaWNvbkFmdGVyKX08L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAgdHdgcmVsYXRpdmUgYm9yZGVyIGl0ZW1zLWNlbnRlciBmbGV4IGZvbnQtbWVkaXVtIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTAganVzdGlmeS1jZW50ZXIgbWF4LXctZnVsbCBjdXJzb3ItcG9pbnRlcmAsXG4gICAgICAgICAgIWRpc2FibGVkICYmIHR3YGhvdmVyOnNoYWRvd2AsXG4gICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZm91ciBob3Zlcjp0ZXh0LWFjY2VudC1mb3VyIGFjdGl2ZTp0ZXh0LWFjY2VudC1mb3VyIGJnLWFjY2VudC10d28gaG92ZXI6YmctYWNjZW50LXR3byBhY3RpdmU6YmctYWNjZW50LXR3byBjdXJzb3Itbm90LWFsbG93ZWRgLFxuICAgICAgICAgIHZhcmlhbnQgPT09IFwiZGVmYXVsdFwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWZvcmVncm91bmQgaG9jdXM6KGJnLWFjY2VudC1laWdodCBvcGFjaXR5LTk1KWAsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJzZWNvbmRhcnlcIiAmJlxuICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICB0d2Bib3JkZXItc2Vjb25kYXJ5IHRleHQtZm9yZWdyb3VuZCBiZy13aGl0ZWAsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJkYW5nZXJcIiAmJlxuICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICB0d2Bib3JkZXItZXJyb3ItZGFyayB0ZXh0LXdoaXRlIGJnLWVycm9yLWRhcmsgaG9jdXM6KG9wYWNpdHktOTUpYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcIm1pbmltYWxcIiAmJlxuICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgaG9jdXM6KHRleHQtYWNjZW50LXNldmVuIGJvcmRlci1zZWNvbmRhcnkgYm9yZGVyKSB0ZXh0LWZvcmVncm91bmRgLFxuICAgICAgICAgIHNpemUgPT09IFwic21hbGxcIiAmJiB0d2BweC00IGgtOCBsZWFkaW5nLTggdGV4dC1zbWAsXG4gICAgICAgICAgc2l6ZSA9PT0gXCJub3JtYWxcIiAmJiB0d2BweC02IGgtOSBsZWFkaW5nLTkgdGV4dC1zbWAsXG4gICAgICAgICAgc2l6ZSA9PT0gXCJsYXJnZVwiICYmIHR3YHB4LTEyIGgtMTAgbGVhZGluZy0xMCB0ZXh0LWJhc2VgLFxuICAgICAgICAgIGJsb2NrICYmIHR3YHctZnVsbGAsXG4gICAgICAgIF19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5pbmdEb3RzIHZhcmlhbnQ9XCJpbmhlcml0XCIgY3NzPXtbdHdgYWJzb2x1dGVgXX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge0J1dHRvbkNvbnRlbnR9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG4pO1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbkJlZm9yZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGljb25BZnRlcjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcImRlZmF1bHRcIixcbiAgICBcInNlY29uZGFyeVwiLFxuICAgIFwiZGFuZ2VyXCIsXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwibWluaW1hbFwiLFxuICBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtYWxsXCIsIFwibm9ybWFsXCIsIFwibGFyZ2VcIl0pLFxuICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogXCJub3JtYWxcIixcbiAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gIHR5cGU6IFwiYnV0dG9uXCIsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

const Button = /*#__PURE__*/React__default["default"].forwardRef(({
  disabled,
  iconBefore,
  iconAfter,
  onClick,
  label,
  type,
  size,
  variant,
  block,
  isLoading,
  className,
  ...rest
}, ref) => {
  const ButtonContent = react.jsx("div", {
    css: ["display:flex;align-items:center;justify-content:center;", isLoading ? {
      "opacity": "0"
    } : {
      "opacity": "1"
    }, process.env.NODE_ENV === "production" ? "" : ";label:ButtonContent;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaWNvbkJlZm9yZSxcbiAgICAgIGljb25BZnRlcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBsYWJlbCxcbiAgICAgIHR5cGUsXG4gICAgICBzaXplLFxuICAgICAgdmFyaWFudCxcbiAgICAgIGJsb2NrLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IEJ1dHRvbkNvbnRlbnQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIHR3PVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICBjc3M9e1tpc0xvYWRpbmcgPyB0d2BvcGFjaXR5LTBgIDogdHdgb3BhY2l0eS0xMDBgXX1cbiAgICAgID5cbiAgICAgICAge2ljb25CZWZvcmUgJiYgPHNwYW4gdHc9XCJmbGV4IG1yLTJcIj57Y2xvbmVFbGVtZW50KGljb25CZWZvcmUpfTwvc3Bhbj59XG4gICAgICAgIDxzcGFuIHR3PVwidHJ1bmNhdGVcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB0d2ByZWxhdGl2ZSBib3JkZXIgaXRlbXMtY2VudGVyIGZsZXggZm9udC1tZWRpdW0gcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1mdWxsIGN1cnNvci1wb2ludGVyYCxcbiAgICAgICAgICAhZGlzYWJsZWQgJiYgdHdgaG92ZXI6c2hhZG93YCxcbiAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1mb3VyIGhvdmVyOnRleHQtYWNjZW50LWZvdXIgYWN0aXZlOnRleHQtYWNjZW50LWZvdXIgYmctYWNjZW50LXR3byBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1hY2NlbnQtdHdvIGN1cnNvci1ub3QtYWxsb3dlZGAsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJkZWZhdWx0XCIgJiZcbiAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctZm9yZWdyb3VuZCBob2N1czooYmctYWNjZW50LWVpZ2h0IG9wYWNpdHktOTUpYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcInNlY29uZGFyeVwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1zZWNvbmRhcnkgdGV4dC1mb3JlZ3JvdW5kIGJnLXdoaXRlYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1lcnJvci1kYXJrIHRleHQtd2hpdGUgYmctZXJyb3ItZGFyayBob2N1czoob3BhY2l0eS05NSlgLFxuICAgICAgICAgIHZhcmlhbnQgPT09IFwibWluaW1hbFwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob2N1czoodGV4dC1hY2NlbnQtc2V2ZW4gYm9yZGVyLXNlY29uZGFyeSBib3JkZXIpIHRleHQtZm9yZWdyb3VuZGAsXG4gICAgICAgICAgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgICAgYmxvY2sgJiYgdHdgdy1mdWxsYCxcbiAgICAgICAgXX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmluZ0RvdHMgdmFyaWFudD1cImluaGVyaXRcIiBjc3M9e1t0d2BhYnNvbHV0ZWBdfSAvPlxuICAgICAgICApfVxuICAgICAgICB7QnV0dG9uQ29udGVudH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uQmVmb3JlOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgaWNvbkFmdGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiZGVmYXVsdFwiLFxuICAgIFwic2Vjb25kYXJ5XCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJtaW5pbWFsXCIsXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21hbGxcIiwgXCJub3JtYWxcIiwgXCJsYXJnZVwiXSksXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiBcIm5vcm1hbFwiLFxuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgdHlwZTogXCJidXR0b25cIixcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:ButtonContent;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaWNvbkJlZm9yZSxcbiAgICAgIGljb25BZnRlcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBsYWJlbCxcbiAgICAgIHR5cGUsXG4gICAgICBzaXplLFxuICAgICAgdmFyaWFudCxcbiAgICAgIGJsb2NrLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IEJ1dHRvbkNvbnRlbnQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIHR3PVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICBjc3M9e1tpc0xvYWRpbmcgPyB0d2BvcGFjaXR5LTBgIDogdHdgb3BhY2l0eS0xMDBgXX1cbiAgICAgID5cbiAgICAgICAge2ljb25CZWZvcmUgJiYgPHNwYW4gdHc9XCJmbGV4IG1yLTJcIj57Y2xvbmVFbGVtZW50KGljb25CZWZvcmUpfTwvc3Bhbj59XG4gICAgICAgIDxzcGFuIHR3PVwidHJ1bmNhdGVcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB0d2ByZWxhdGl2ZSBib3JkZXIgaXRlbXMtY2VudGVyIGZsZXggZm9udC1tZWRpdW0gcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1mdWxsIGN1cnNvci1wb2ludGVyYCxcbiAgICAgICAgICAhZGlzYWJsZWQgJiYgdHdgaG92ZXI6c2hhZG93YCxcbiAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1mb3VyIGhvdmVyOnRleHQtYWNjZW50LWZvdXIgYWN0aXZlOnRleHQtYWNjZW50LWZvdXIgYmctYWNjZW50LXR3byBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1hY2NlbnQtdHdvIGN1cnNvci1ub3QtYWxsb3dlZGAsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJkZWZhdWx0XCIgJiZcbiAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctZm9yZWdyb3VuZCBob2N1czooYmctYWNjZW50LWVpZ2h0IG9wYWNpdHktOTUpYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcInNlY29uZGFyeVwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1zZWNvbmRhcnkgdGV4dC1mb3JlZ3JvdW5kIGJnLXdoaXRlYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1lcnJvci1kYXJrIHRleHQtd2hpdGUgYmctZXJyb3ItZGFyayBob2N1czoob3BhY2l0eS05NSlgLFxuICAgICAgICAgIHZhcmlhbnQgPT09IFwibWluaW1hbFwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob2N1czoodGV4dC1hY2NlbnQtc2V2ZW4gYm9yZGVyLXNlY29uZGFyeSBib3JkZXIpIHRleHQtZm9yZWdyb3VuZGAsXG4gICAgICAgICAgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgICAgYmxvY2sgJiYgdHdgdy1mdWxsYCxcbiAgICAgICAgXX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmluZ0RvdHMgdmFyaWFudD1cImluaGVyaXRcIiBjc3M9e1t0d2BhYnNvbHV0ZWBdfSAvPlxuICAgICAgICApfVxuICAgICAgICB7QnV0dG9uQ29udGVudH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uQmVmb3JlOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgaWNvbkFmdGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiZGVmYXVsdFwiLFxuICAgIFwic2Vjb25kYXJ5XCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJtaW5pbWFsXCIsXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21hbGxcIiwgXCJub3JtYWxcIiwgXCJsYXJnZVwiXSksXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiBcIm5vcm1hbFwiLFxuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgdHlwZTogXCJidXR0b25cIixcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"]
  }, iconBefore && react.jsx("span", {
    css: _ref$2
  }, /*#__PURE__*/React.cloneElement(iconBefore)), react.jsx("span", {
    css: _ref2$1
  }, label), iconAfter && react.jsx("span", {
    css: _ref3$1
  }, /*#__PURE__*/React.cloneElement(iconAfter)));
  return react.jsx("button", _extends$1({
    type: type,
    onClick: onClick,
    disabled: disabled || isLoading,
    className: className,
    ref: ref,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;position:relative;border-width:1px;align-items:center;display:flex;font-weight:500;border-radius:5px;:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}justify-content:center;max-width:100%;cursor:pointer;", !disabled && {
      ":hover": {
        "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(136, 136, 136, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      ":active": {
        "--tw-text-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
      "cursor": "not-allowed"
    }, variant === "default" && !disabled && {
      "borderColor": "rgba(0, 0, 0, 0)",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
      ":hover, :focus": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(17, 17, 17, var(--tw-bg-opacity))",
        "opacity": "0.95"
      }
    }, variant === "secondary" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(208, 211, 215, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
    }, variant === "danger" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(197, 0, 0, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(197, 0, 0, var(--tw-bg-opacity))",
      ":hover, :focus": {
        "opacity": "0.95"
      }
    }, variant === "minimal" && !disabled && {
      "borderColor": "rgba(0, 0, 0, 0)",
      "backgroundColor": "rgba(0, 0, 0, 0)",
      ":hover, :focus": {
        "--tw-text-opacity": "1",
        "color": "rgba(51, 51, 51, var(--tw-text-opacity))",
        "--tw-border-opacity": "1",
        "borderColor": "rgba(208, 211, 215, var(--tw-border-opacity))",
        "borderWidth": "1px"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }, size === "small" && {
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "height": "2rem",
      "lineHeight": "1.25rem",
      "fontSize": "0.875rem"
    }, size === "normal" && {
      "paddingLeft": "1.5rem",
      "paddingRight": "1.5rem",
      "height": "2.25rem",
      "lineHeight": "1.25rem",
      "fontSize": "0.875rem"
    }, size === "large" && {
      "paddingLeft": "3rem",
      "paddingRight": "3rem",
      "height": "2.5rem",
      "lineHeight": "1.5rem",
      "fontSize": "1rem"
    }, block && {
      "width": "100%"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Button;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaWNvbkJlZm9yZSxcbiAgICAgIGljb25BZnRlcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBsYWJlbCxcbiAgICAgIHR5cGUsXG4gICAgICBzaXplLFxuICAgICAgdmFyaWFudCxcbiAgICAgIGJsb2NrLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IEJ1dHRvbkNvbnRlbnQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIHR3PVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICBjc3M9e1tpc0xvYWRpbmcgPyB0d2BvcGFjaXR5LTBgIDogdHdgb3BhY2l0eS0xMDBgXX1cbiAgICAgID5cbiAgICAgICAge2ljb25CZWZvcmUgJiYgPHNwYW4gdHc9XCJmbGV4IG1yLTJcIj57Y2xvbmVFbGVtZW50KGljb25CZWZvcmUpfTwvc3Bhbj59XG4gICAgICAgIDxzcGFuIHR3PVwidHJ1bmNhdGVcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB0d2ByZWxhdGl2ZSBib3JkZXIgaXRlbXMtY2VudGVyIGZsZXggZm9udC1tZWRpdW0gcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1mdWxsIGN1cnNvci1wb2ludGVyYCxcbiAgICAgICAgICAhZGlzYWJsZWQgJiYgdHdgaG92ZXI6c2hhZG93YCxcbiAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1mb3VyIGhvdmVyOnRleHQtYWNjZW50LWZvdXIgYWN0aXZlOnRleHQtYWNjZW50LWZvdXIgYmctYWNjZW50LXR3byBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1hY2NlbnQtdHdvIGN1cnNvci1ub3QtYWxsb3dlZGAsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJkZWZhdWx0XCIgJiZcbiAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctZm9yZWdyb3VuZCBob2N1czooYmctYWNjZW50LWVpZ2h0IG9wYWNpdHktOTUpYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcInNlY29uZGFyeVwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1zZWNvbmRhcnkgdGV4dC1mb3JlZ3JvdW5kIGJnLXdoaXRlYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1lcnJvci1kYXJrIHRleHQtd2hpdGUgYmctZXJyb3ItZGFyayBob2N1czoob3BhY2l0eS05NSlgLFxuICAgICAgICAgIHZhcmlhbnQgPT09IFwibWluaW1hbFwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob2N1czoodGV4dC1hY2NlbnQtc2V2ZW4gYm9yZGVyLXNlY29uZGFyeSBib3JkZXIpIHRleHQtZm9yZWdyb3VuZGAsXG4gICAgICAgICAgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgICAgYmxvY2sgJiYgdHdgdy1mdWxsYCxcbiAgICAgICAgXX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmluZ0RvdHMgdmFyaWFudD1cImluaGVyaXRcIiBjc3M9e1t0d2BhYnNvbHV0ZWBdfSAvPlxuICAgICAgICApfVxuICAgICAgICB7QnV0dG9uQ29udGVudH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uQmVmb3JlOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgaWNvbkFmdGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiZGVmYXVsdFwiLFxuICAgIFwic2Vjb25kYXJ5XCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJtaW5pbWFsXCIsXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21hbGxcIiwgXCJub3JtYWxcIiwgXCJsYXJnZVwiXSksXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiBcIm5vcm1hbFwiLFxuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgdHlwZTogXCJidXR0b25cIixcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Button;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaWNvbkJlZm9yZSxcbiAgICAgIGljb25BZnRlcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBsYWJlbCxcbiAgICAgIHR5cGUsXG4gICAgICBzaXplLFxuICAgICAgdmFyaWFudCxcbiAgICAgIGJsb2NrLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IEJ1dHRvbkNvbnRlbnQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIHR3PVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICBjc3M9e1tpc0xvYWRpbmcgPyB0d2BvcGFjaXR5LTBgIDogdHdgb3BhY2l0eS0xMDBgXX1cbiAgICAgID5cbiAgICAgICAge2ljb25CZWZvcmUgJiYgPHNwYW4gdHc9XCJmbGV4IG1yLTJcIj57Y2xvbmVFbGVtZW50KGljb25CZWZvcmUpfTwvc3Bhbj59XG4gICAgICAgIDxzcGFuIHR3PVwidHJ1bmNhdGVcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB0d2ByZWxhdGl2ZSBib3JkZXIgaXRlbXMtY2VudGVyIGZsZXggZm9udC1tZWRpdW0gcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1mdWxsIGN1cnNvci1wb2ludGVyYCxcbiAgICAgICAgICAhZGlzYWJsZWQgJiYgdHdgaG92ZXI6c2hhZG93YCxcbiAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1mb3VyIGhvdmVyOnRleHQtYWNjZW50LWZvdXIgYWN0aXZlOnRleHQtYWNjZW50LWZvdXIgYmctYWNjZW50LXR3byBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1hY2NlbnQtdHdvIGN1cnNvci1ub3QtYWxsb3dlZGAsXG4gICAgICAgICAgdmFyaWFudCA9PT0gXCJkZWZhdWx0XCIgJiZcbiAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctZm9yZWdyb3VuZCBob2N1czooYmctYWNjZW50LWVpZ2h0IG9wYWNpdHktOTUpYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcInNlY29uZGFyeVwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1zZWNvbmRhcnkgdGV4dC1mb3JlZ3JvdW5kIGJnLXdoaXRlYCxcbiAgICAgICAgICB2YXJpYW50ID09PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci1lcnJvci1kYXJrIHRleHQtd2hpdGUgYmctZXJyb3ItZGFyayBob2N1czoob3BhY2l0eS05NSlgLFxuICAgICAgICAgIHZhcmlhbnQgPT09IFwibWluaW1hbFwiICYmXG4gICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob2N1czoodGV4dC1hY2NlbnQtc2V2ZW4gYm9yZGVyLXNlY29uZGFyeSBib3JkZXIpIHRleHQtZm9yZWdyb3VuZGAsXG4gICAgICAgICAgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgICBzaXplID09PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgICAgYmxvY2sgJiYgdHdgdy1mdWxsYCxcbiAgICAgICAgXX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmluZ0RvdHMgdmFyaWFudD1cImluaGVyaXRcIiBjc3M9e1t0d2BhYnNvbHV0ZWBdfSAvPlxuICAgICAgICApfVxuICAgICAgICB7QnV0dG9uQ29udGVudH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uQmVmb3JlOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgaWNvbkFmdGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiZGVmYXVsdFwiLFxuICAgIFwic2Vjb25kYXJ5XCIsXG4gICAgXCJkYW5nZXJcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJtaW5pbWFsXCIsXG4gIF0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21hbGxcIiwgXCJub3JtYWxcIiwgXCJsYXJnZVwiXSksXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiBcIm5vcm1hbFwiLFxuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgdHlwZTogXCJidXR0b25cIixcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"]
  }, rest), isLoading && react.jsx(SpinningDots, {
    variant: "inherit",
    css: _ref4$1
  }), ButtonContent);
});
Button.propTypes = {
  disabled: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  iconBefore: PropTypes__default["default"].element,
  iconAfter: PropTypes__default["default"].element,
  label: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  type: PropTypes__default["default"].string,
  variant: PropTypes__default["default"].oneOf(["default", "secondary", "danger", "disabled", "minimal"]),
  size: PropTypes__default["default"].oneOf(["small", "normal", "large"]),
  isLoading: PropTypes__default["default"].bool
};
Button.defaultProps = {
  size: "normal",
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const ErrorSvgDataURI = "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Ccircle fill='%236359F9' cx='10' cy='10' r='10'/%3E%3Cpath d='M9 6.848c0-.909.4-1.515 1-1.515s1 .606 1 1.515v3.637c0 .909-.4 1.515-1 1.515s-1-.606-1-1.515V6.848Zm1 7.819c-.583 0-1-.417-1-1 0-.584.417-1 1-1s1 .416 1 1c0 .583-.417 1-1 1Z' fill='%232B223C'/%3E%3C/g%3E%3C/svg%3E%0A";

const Addon = ({
  children,
  position
}) => {
  return react.jsx("div", {
    css: ["--tw-bg-opacity:1;background-color:rgba(234, 234, 234, var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;display:flex;align-items:center;justify-content:center;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));", position === "left" && {
      "borderTopLeftRadius": "5px",
      "borderBottomLeftRadius": "5px"
    }, position === "right" && {
      "borderTopRightRadius": "5px",
      "borderBottomRightRadius": "5px"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Addon;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuY29uc3QgRXJyb3JTdmdEYXRhVVJJID1cbiAgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbC1ydWxlPSdub256ZXJvJyBmaWxsPSdub25lJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM2MzU5RjknIGN4PScxMCcgY3k9JzEwJyByPScxMCcvJTNFJTNDcGF0aCBkPSdNOSA2Ljg0OGMwLS45MDkuNC0xLjUxNSAxLTEuNTE1czEgLjYwNiAxIDEuNTE1djMuNjM3YzAgLjkwOS0uNCAxLjUxNS0xIDEuNTE1cy0xLS42MDYtMS0xLjUxNVY2Ljg0OFptMSA3LjgxOWMtLjU4MyAwLTEtLjQxNy0xLTEgMC0uNTg0LjQxNy0xIDEtMXMxIC40MTYgMSAxYzAgLjU4My0uNDE3IDEtMSAxWicgZmlsbD0nJTIzMkIyMjNDJy8lM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIjtcblxuY29uc3QgQWRkb24gPSAoe2NoaWxkcmVuLCBwb3NpdGlvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W1xuICAgICAgdHdgYmctYm9yZGVyIHB4LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LXNtIHRleHQtc20gdGV4dC1hY2NlbnQtZml2ZWAsXG4gICAgICBwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdHdgcm91bmRlZC1sYCxcbiAgICAgIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgJiYgdHdgcm91bmRlZC1yYCxcbiAgICBdfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBwcmVmaXgsXG4gICAgICBzdWZmaXgsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZSBmbGV4XCI+XG4gICAgICAgICAge3ByZWZpeCAmJiA8QWRkb24gcG9zaXRpb249e1wibGVmdFwifT57cHJlZml4fTwvQWRkb24+fVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNSBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgICBzdWZmaXggJiYgdHdgcm91bmRlZC1sYCxcbiAgICAgICAgICAgICAgcHJlZml4ICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiBzdWZmaXggJiYgdHdgcm91bmRlZC1ub25lYCxcbiAgICAgICAgICAgICAgIXByZWZpeCAmJiAhc3VmZml4ICYmIHR3YHJvdW5kZWRgLFxuICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZSAmJiBpbnB1dENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYWNjZW50LWZpdmUgYmctYmFja2dyb3VuZCBjdXJzb3Itbm90LWFsbG93ZWQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kXCIgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYnJhbmQtdXYgaG9jdXM6Ym9yZGVyLWJyYW5kLXV2IHBsYWNlaG9sZGVyLWFjY2VudC1mb3VyYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIGJyYW5kRGFya1N0eWxlcyxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIFtcbiAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7RXJyb3JTdmdEYXRhVVJJfVwiKTtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7YCxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzdWZmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcInJpZ2h0XCJ9PntzdWZmaXh9PC9BZGRvbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHN1ZmZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Addon;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuY29uc3QgRXJyb3JTdmdEYXRhVVJJID1cbiAgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbC1ydWxlPSdub256ZXJvJyBmaWxsPSdub25lJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM2MzU5RjknIGN4PScxMCcgY3k9JzEwJyByPScxMCcvJTNFJTNDcGF0aCBkPSdNOSA2Ljg0OGMwLS45MDkuNC0xLjUxNSAxLTEuNTE1czEgLjYwNiAxIDEuNTE1djMuNjM3YzAgLjkwOS0uNCAxLjUxNS0xIDEuNTE1cy0xLS42MDYtMS0xLjUxNVY2Ljg0OFptMSA3LjgxOWMtLjU4MyAwLTEtLjQxNy0xLTEgMC0uNTg0LjQxNy0xIDEtMXMxIC40MTYgMSAxYzAgLjU4My0uNDE3IDEtMSAxWicgZmlsbD0nJTIzMkIyMjNDJy8lM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIjtcblxuY29uc3QgQWRkb24gPSAoe2NoaWxkcmVuLCBwb3NpdGlvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W1xuICAgICAgdHdgYmctYm9yZGVyIHB4LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LXNtIHRleHQtc20gdGV4dC1hY2NlbnQtZml2ZWAsXG4gICAgICBwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdHdgcm91bmRlZC1sYCxcbiAgICAgIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgJiYgdHdgcm91bmRlZC1yYCxcbiAgICBdfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBwcmVmaXgsXG4gICAgICBzdWZmaXgsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZSBmbGV4XCI+XG4gICAgICAgICAge3ByZWZpeCAmJiA8QWRkb24gcG9zaXRpb249e1wibGVmdFwifT57cHJlZml4fTwvQWRkb24+fVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNSBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgICBzdWZmaXggJiYgdHdgcm91bmRlZC1sYCxcbiAgICAgICAgICAgICAgcHJlZml4ICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiBzdWZmaXggJiYgdHdgcm91bmRlZC1ub25lYCxcbiAgICAgICAgICAgICAgIXByZWZpeCAmJiAhc3VmZml4ICYmIHR3YHJvdW5kZWRgLFxuICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZSAmJiBpbnB1dENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYWNjZW50LWZpdmUgYmctYmFja2dyb3VuZCBjdXJzb3Itbm90LWFsbG93ZWQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kXCIgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYnJhbmQtdXYgaG9jdXM6Ym9yZGVyLWJyYW5kLXV2IHBsYWNlaG9sZGVyLWFjY2VudC1mb3VyYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIGJyYW5kRGFya1N0eWxlcyxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIFtcbiAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7RXJyb3JTdmdEYXRhVVJJfVwiKTtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7YCxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzdWZmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcInJpZ2h0XCJ9PntzdWZmaXh9PC9BZGRvbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHN1ZmZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */"]
  }, children);
};

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "8k1832",
  styles: "position:relative;display:flex"
} : {
  name: "16kijgz-Input",
  styles: "position:relative;display:flex;label:Input;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

const Input = /*#__PURE__*/React__default["default"].forwardRef(({
  onChange,
  inputClassName,
  className,
  variant,
  value,
  defaultValue,
  label,
  id,
  error,
  disabled,
  prefix,
  suffix,
  ...rest
}, ref) => {
  const handleChange = React.useCallback(event => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [onChange]);
  const brandDarkStyles = {
    "borderColor": "rgba(0, 0, 0, 0)",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "0.2",
    "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
    "::placeholder": {
      "--tw-placeholder-opacity": "1",
      "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
    },
    ":hover, :focus": {
      "borderColor": "rgba(0, 0, 0, 0)",
      "--tw-bg-opacity": "0.3"
    }
  };
  return react.jsx("div", {
    className: className
  }, label && react.jsx("label", {
    htmlFor: id,
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));text-transform:none;margin-bottom:0.25rem;", variant === "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IEFkZG9uID0gKHtjaGlsZHJlbiwgcG9zaXRpb259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tcbiAgICAgIHR3YGJnLWJvcmRlciBweC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbSB0ZXh0LXNtIHRleHQtYWNjZW50LWZpdmVgLFxuICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICBjb25zdCBicmFuZERhcmtTdHlsZXMgPSB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG5vcm1hbC1jYXNlIG1iLTFcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHR3PVwicmVsYXRpdmUgZmxleFwiPlxuICAgICAgICAgIHtwcmVmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcImxlZnRcIn0+e3ByZWZpeH08L0FkZG9uPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHBhc3MgZGVmYXVsdFZhbHVlIGNoYW5nZXMgdG8gdGhlIERPTSBhZnRlciBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3VuY29udHJvbGxlZC1jb21wb25lbnRzLmh0bWwjZGVmYXVsdC12YWx1ZXNcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc3VmZml4ICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiB0d2Byb3VuZGVkLXJgLFxuICAgICAgICAgICAgICBwcmVmaXggJiYgc3VmZml4ICYmIHR3YHJvdW5kZWQtbm9uZWAsXG4gICAgICAgICAgICAgICFwcmVmaXggJiYgIXN1ZmZpeCAmJiB0d2Byb3VuZGVkYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0Vycm9yU3ZnRGF0YVVSSX1cIik7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO2AsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c3VmZml4ICYmIDxBZGRvbiBwb3NpdGlvbj17XCJyaWdodFwifT57c3VmZml4fTwvQWRkb24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzdWZmaXg6IFByb3BUeXBlcy5ub2RlLFxuICBwcmVmaXg6IFByb3BUeXBlcy5ub2RlLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IEFkZG9uID0gKHtjaGlsZHJlbiwgcG9zaXRpb259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tcbiAgICAgIHR3YGJnLWJvcmRlciBweC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbSB0ZXh0LXNtIHRleHQtYWNjZW50LWZpdmVgLFxuICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICBjb25zdCBicmFuZERhcmtTdHlsZXMgPSB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG5vcm1hbC1jYXNlIG1iLTFcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHR3PVwicmVsYXRpdmUgZmxleFwiPlxuICAgICAgICAgIHtwcmVmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcImxlZnRcIn0+e3ByZWZpeH08L0FkZG9uPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHBhc3MgZGVmYXVsdFZhbHVlIGNoYW5nZXMgdG8gdGhlIERPTSBhZnRlciBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3VuY29udHJvbGxlZC1jb21wb25lbnRzLmh0bWwjZGVmYXVsdC12YWx1ZXNcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc3VmZml4ICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiB0d2Byb3VuZGVkLXJgLFxuICAgICAgICAgICAgICBwcmVmaXggJiYgc3VmZml4ICYmIHR3YHJvdW5kZWQtbm9uZWAsXG4gICAgICAgICAgICAgICFwcmVmaXggJiYgIXN1ZmZpeCAmJiB0d2Byb3VuZGVkYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0Vycm9yU3ZnRGF0YVVSSX1cIik7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO2AsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c3VmZml4ICYmIDxBZGRvbiBwb3NpdGlvbj17XCJyaWdodFwifT57c3VmZml4fTwvQWRkb24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzdWZmaXg6IFByb3BUeXBlcy5ub2RlLFxuICBwcmVmaXg6IFByb3BUeXBlcy5ub2RlLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */"]
  }, label), react.jsx("div", {
    css: _ref$1
  }, prefix && react.jsx(Addon, {
    position: "left"
  }, prefix), react.jsx("input", _extends$1({
    id: id,
    ref: ref,
    onChange: handleChange // React does not pass defaultValue changes to the DOM after initial render
    // https://reactjs.org/docs/uncontrolled-components.html#default-values
    ,
    defaultValue: defaultValue,
    "aria-label": label,
    "aria-required": !!label,
    "aria-invalid": !!error,
    disabled: disabled,
    value: value,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}", suffix && {
      "borderTopLeftRadius": "5px",
      "borderBottomLeftRadius": "5px"
    }, prefix && {
      "borderTopRightRadius": "5px",
      "borderBottomRightRadius": "5px"
    }, prefix && suffix && {
      "borderRadius": "0px"
    }, !prefix && !suffix && {
      "borderRadius": "5px"
    }, inputClassName && inputClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, !disabled && variant === "brand" && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(99, 89, 249, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(99, 89, 249, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-placeholder-opacity))"
      }
    }, !disabled && variant === "brand-dark" && brandDarkStyles, error && {
      "--tw-text-opacity": "1",
      "color": "rgba(238, 0, 0, var(--tw-text-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(238, 0, 0, var(--tw-placeholder-opacity))"
      }
    }, error && variant === "brand-dark" && [brandDarkStyles, `background-image: url("${ErrorSvgDataURI}");background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 50%;`], process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IEFkZG9uID0gKHtjaGlsZHJlbiwgcG9zaXRpb259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tcbiAgICAgIHR3YGJnLWJvcmRlciBweC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbSB0ZXh0LXNtIHRleHQtYWNjZW50LWZpdmVgLFxuICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICBjb25zdCBicmFuZERhcmtTdHlsZXMgPSB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG5vcm1hbC1jYXNlIG1iLTFcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHR3PVwicmVsYXRpdmUgZmxleFwiPlxuICAgICAgICAgIHtwcmVmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcImxlZnRcIn0+e3ByZWZpeH08L0FkZG9uPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHBhc3MgZGVmYXVsdFZhbHVlIGNoYW5nZXMgdG8gdGhlIERPTSBhZnRlciBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3VuY29udHJvbGxlZC1jb21wb25lbnRzLmh0bWwjZGVmYXVsdC12YWx1ZXNcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc3VmZml4ICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiB0d2Byb3VuZGVkLXJgLFxuICAgICAgICAgICAgICBwcmVmaXggJiYgc3VmZml4ICYmIHR3YHJvdW5kZWQtbm9uZWAsXG4gICAgICAgICAgICAgICFwcmVmaXggJiYgIXN1ZmZpeCAmJiB0d2Byb3VuZGVkYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0Vycm9yU3ZnRGF0YVVSSX1cIik7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO2AsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c3VmZml4ICYmIDxBZGRvbiBwb3NpdGlvbj17XCJyaWdodFwifT57c3VmZml4fTwvQWRkb24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzdWZmaXg6IFByb3BUeXBlcy5ub2RlLFxuICBwcmVmaXg6IFByb3BUeXBlcy5ub2RlLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IEFkZG9uID0gKHtjaGlsZHJlbiwgcG9zaXRpb259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tcbiAgICAgIHR3YGJnLWJvcmRlciBweC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbSB0ZXh0LXNtIHRleHQtYWNjZW50LWZpdmVgLFxuICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICBjb25zdCBicmFuZERhcmtTdHlsZXMgPSB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG5vcm1hbC1jYXNlIG1iLTFcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHR3PVwicmVsYXRpdmUgZmxleFwiPlxuICAgICAgICAgIHtwcmVmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcImxlZnRcIn0+e3ByZWZpeH08L0FkZG9uPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHBhc3MgZGVmYXVsdFZhbHVlIGNoYW5nZXMgdG8gdGhlIERPTSBhZnRlciBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3VuY29udHJvbGxlZC1jb21wb25lbnRzLmh0bWwjZGVmYXVsdC12YWx1ZXNcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc3VmZml4ICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiB0d2Byb3VuZGVkLXJgLFxuICAgICAgICAgICAgICBwcmVmaXggJiYgc3VmZml4ICYmIHR3YHJvdW5kZWQtbm9uZWAsXG4gICAgICAgICAgICAgICFwcmVmaXggJiYgIXN1ZmZpeCAmJiB0d2Byb3VuZGVkYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0Vycm9yU3ZnRGF0YVVSSX1cIik7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO2AsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c3VmZml4ICYmIDxBZGRvbiBwb3NpdGlvbj17XCJyaWdodFwifT57c3VmZml4fTwvQWRkb24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzdWZmaXg6IFByb3BUeXBlcy5ub2RlLFxuICBwcmVmaXg6IFByb3BUeXBlcy5ub2RlLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */"]
  }, rest)), suffix && react.jsx(Addon, {
    position: "right"
  }, suffix)));
});
Input.propTypes = {
  onChange: PropTypes__default["default"].func,
  inputClassName: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string,
  defaultValue: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  id: PropTypes__default["default"].string,
  error: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  suffix: PropTypes__default["default"].node,
  prefix: PropTypes__default["default"].node,
  variant: PropTypes__default["default"].oneOf(["brand", "brand-dark"])
};

const Textarea = /*#__PURE__*/React__default["default"].forwardRef(({
  onChange,
  textareaClassName,
  className,
  value,
  defaultValue,
  label,
  id,
  error,
  disabled,
  rows,
  variant,
  resize,
  ...rest
}, ref) => {
  const handleChange = React.useCallback(event => {
    if (onChange) {
      onChange(event.target.value);
    }
  }, [onChange]);
  return react.jsx("div", {
    className: className
  }, label && react.jsx("label", {
    htmlFor: id,
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));margin-bottom:0.25rem;text-transform:none;", variant === "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */"]
  }, label), react.jsx("textarea", _extends$1({
    id: id,
    ref: ref,
    rows: rows,
    onChange: handleChange,
    defaultValue: defaultValue,
    "aria-label": label,
    "aria-required": !!label,
    "aria-invalid": !!error,
    disabled: disabled,
    value: value,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.5rem;}", textareaClassName && textareaClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, error && {
      "--tw-text-opacity": "1",
      "color": "rgba(238, 0, 0, var(--tw-text-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(238, 0, 0, var(--tw-placeholder-opacity))"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, variant === "brand" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(99, 89, 249, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(99, 89, 249, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-placeholder-opacity))"
      }
    }, variant === "brand-dark" && !disabled && {
      "borderColor": "rgba(0, 0, 0, 0)",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
      },
      ":hover, :focus": {
        "borderColor": "rgba(0, 0, 0, 0)",
        "--tw-bg-opacity": "0.3"
      }
    }, resize && {
      "resize": "none"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */"]
  }, rest)));
});
Textarea.defaultProps = {
  resize: true,
  rows: 3
};
Textarea.propTypes = {
  onChange: PropTypes__default["default"].func,
  textareaClassName: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string,
  defaultValue: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  id: PropTypes__default["default"].string.isRequired,
  error: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  rows: PropTypes__default["default"].number,
  variant: PropTypes__default["default"].oneOf(["brand", "brand-dark"]),
  resize: PropTypes__default["default"].bool.isRequired
};

class Text extends React.PureComponent {
  render() {
    const {
      className,
      bold,
      color,
      small,
      is,
      ...props
    } = this.props;
    const Tag = is;
    return react.jsx(Tag, _extends$1({
      className: classNames__default["default"](className, color, {
        "font-semibold": Boolean(bold),
        "font-normal": !Boolean(bold),
        "text-base": !Boolean(small),
        "text-sm": Boolean(small)
      })
    }, props));
  }

}

_defineProperty(Text, "propTypes", {
  bold: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  is: PropTypes__default["default"].oneOf(["span", "p", "li"]).isRequired,
  className: PropTypes__default["default"].string
});

_defineProperty(Text, "defaultProps", {
  className: null,
  color: "text-foreground",
  is: "span"
});

function SvgComponent$3(props) {
  return react.jsx("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, props), react.jsx("path", {
    fill: "#FFCC4D",
    d: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
  }), react.jsx("path", {
    fill: "#664500",
    d: "M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
  }), react.jsx("path", {
    fill: "#FFF",
    d: "M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"
  }), react.jsx("path", {
    fill: "#E95F28",
    d: "M15.682 4.413l-4.542.801L8.8.961a1.252 1.252 0 00-2.331.411l-.745 4.797-4.542.801a1.25 1.25 0 00-.318 2.361l4.07 1.932-.748 4.812a1.253 1.253 0 001.235 1.442c.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145a1.25 1.25 0 001.631-1.731L13.625 9.73l3.165-3.208a1.252 1.252 0 00-1.108-2.109zm4.636 0l4.542.801L27.2.961a1.251 1.251 0 012.33.411l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812a1.253 1.253 0 01-1.235 1.442c-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145a1.25 1.25 0 01-1.631-1.731l2.348-4.267-3.165-3.208a1.252 1.252 0 01-.217-1.459 1.259 1.259 0 011.326-.65z"
  }));
}

function SvgComponent$2(props) {
  return react.jsx("svg", _extends$1({
    viewBox: "0 0 43 43",
    width: 43,
    height: 43,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react.jsx("g", {
    fill: "none"
  }, react.jsx("path", {
    d: "M43 21.75C43 33.486 33.486 43 21.75 43S.5 33.486.5 21.75 10.014.5 21.75.5 43 10.014 43 21.75",
    fill: "#FFCC4D"
  }), react.jsx("path", {
    d: "M21.75 25.5c-4.529 0-7.534-.527-11.25-1.25-.849-.164-2.5 0-2.5 2.5C8 31.75 13.744 38 21.75 38c8.005 0 13.75-6.25 13.75-11.25 0-2.5-1.651-2.665-2.5-2.5-3.716.723-6.721 1.25-11.25 1.25m-10-10s0-2.5 2.5-2.5 2.5 2.5 2.5 2.5V18s0 2.5-2.5 2.5-2.5-2.5-2.5-2.5v-2.5zm15 0s0-2.5 2.5-2.5 2.5 2.5 2.5 2.5V18s0 2.5-2.5 2.5-2.5-2.5-2.5-2.5v-2.5z",
    fill: "#664500"
  }), react.jsx("path", {
    d: "M10.5 26.75S14.25 28 21.75 28 33 26.75 33 26.75s-2.5 5-11.25 5-11.25-5-11.25-5",
    fill: "#FFF"
  })));
}

function SvgComponent$1(props) {
  return react.jsx("svg", _extends$1({
    viewBox: "0 0 48 48",
    width: 48,
    height: 48,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react.jsx("g", {
    fill: "none"
  }, react.jsx("path", {
    d: "M47.5 24.25C47.5 37.367 36.867 48 23.75 48 10.634 48 0 37.367 0 24.25 0 11.134 10.634.5 23.75.5 36.867.5 47.5 11.134 47.5 24.25",
    fill: "#FFCC4D"
  }), react.jsx("path", {
    d: "M18.162 22.154c0 2.702-1.564 4.89-3.493 4.89-1.93 0-3.493-2.188-3.493-4.89 0-2.7 1.564-4.89 3.493-4.89 1.93 0 3.493 2.19 3.493 4.89m18.162 0c0 2.702-1.564 4.89-3.493 4.89-1.93 0-3.493-2.188-3.493-4.89 0-2.7 1.564-4.89 3.493-4.89 1.93 0 3.493 2.19 3.493 4.89M15.368 38.22c2.794-6.985 18.161-6.985 18.161-4.19 0 1.396-11.176-1.398-18.161 4.19",
    fill: "#664500"
  })));
}

function SvgComponent(props) {
  return react.jsx("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, props), react.jsx("path", {
    fill: "#FFCC4D",
    d: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
  }), react.jsx("path", {
    fill: "#664500",
    d: "M22 27c0 2.763-1.791 3-4 3-2.21 0-4-.237-4-3 0-2.761 1.79-6 4-6 2.209 0 4 3.239 4 6zm8-12a.987.987 0 01-.371-.072c-5.229-2.091-7.372-5.241-7.461-5.374a1 1 0 011.662-1.113c.019.027 1.93 2.785 6.541 4.629A1 1 0 0130 15zM6 15a1.001 1.001 0 01-.372-1.929c4.612-1.844 6.523-4.602 6.542-4.629a1.002 1.002 0 011.387-.27.998.998 0 01.275 1.383c-.089.133-2.232 3.283-7.46 5.374A1.015 1.015 0 016 15z"
  }), react.jsx("path", {
    fill: "#5DADEC",
    d: "M24 16h4v19l-4-.046V16zM8 35l4-.046V16H8v19z"
  }), react.jsx("path", {
    fill: "#664500",
    d: "M14.999 18c-.15 0-.303-.034-.446-.105-3.512-1.756-7.07-.018-7.105 0a1 1 0 11-.895-1.789c.182-.09 4.498-2.197 8.895 0A1 1 0 0114.999 18zm14 0c-.15 0-.303-.034-.446-.105-3.513-1.756-7.07-.018-7.105 0a1 1 0 11-.895-1.789c.182-.09 4.501-2.196 8.895 0A1 1 0 0128.999 18z"
  }), react.jsx("ellipse", {
    fill: "#5DADEC",
    cx: 18,
    cy: 34,
    rx: 18,
    ry: 2
  }), react.jsx("ellipse", {
    fill: "#E75A70",
    cx: 18,
    cy: 27,
    rx: 3,
    ry: 2
  }));
}

function $parcel$export$a(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $bfee1151ccb0650f$exports = {};
$parcel$export$a($bfee1151ccb0650f$exports, "useControlledState", () => $bfee1151ccb0650f$export$40bfa8c7b0832715);

function $bfee1151ccb0650f$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
  let [stateValue, setStateValue] = React.useState(value1 || defaultValue);
  let ref = React.useRef(value1 !== undefined);
  let wasControlled = ref.current;
  let isControlled = value1 !== undefined; // Internal state reference for useCallback

  let stateRef = React.useRef(stateValue);
  if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
  ref.current = isControlled;
  let setValue = React.useCallback((value2, ...args) => {
    let onChangeCaller = (value, ...onChangeArgs) => {
      if (onChange) {
        if (!Object.is(stateRef.current, value)) onChange(value, ...onChangeArgs);
      }

      if (!isControlled) stateRef.current = value;
    };

    if (typeof value2 === 'function') {
      console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'); // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
      // when someone using useControlledState calls setControlledState(myFunc)
      // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
      // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
      // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same

      let updateFunction = (oldValue, ...functionArgs) => {
        let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled) return interceptedValue;
        return oldValue;
      };

      setStateValue(updateFunction);
    } else {
      if (!isControlled) setStateValue(value2);
      onChangeCaller(value2, ...args);
    }
  }, [isControlled, onChange]); // If a controlled component's value prop changes, we need to update stateRef

  if (isControlled) stateRef.current = value1;else value1 = stateValue;
  return [value1, setValue];
}

var $48d9f1d165180307$exports = {};
$parcel$export$a($48d9f1d165180307$exports, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export$a($48d9f1d165180307$exports, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
$parcel$export$a($48d9f1d165180307$exports, "toFixedNumber", () => $48d9f1d165180307$export$b6268554fba451f);

function $48d9f1d165180307$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}

function $48d9f1d165180307$export$cb6e0bb50bc19463(value, min, max, step) {
  let remainder = (value - (isNaN(min) ? 0 : min)) % step;
  let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;

  if (!isNaN(min)) {
    if (snappedValue < min) snappedValue = min;else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
  } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step; // correct floating point behavior by rounding to step precision


  let string = step.toString();
  let index = string.indexOf('.');
  let precision = index >= 0 ? string.length - index : 0;

  if (precision > 0) {
    let pow = Math.pow(10, precision);
    snappedValue = Math.round(snappedValue * pow) / pow;
  }

  return snappedValue;
}

function $48d9f1d165180307$export$b6268554fba451f(value, digits, base = 10) {
  const pow = Math.pow(base, digits);
  return Math.round(value * pow) / pow;
}

function $parcel$export$9(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $a54cdc5c1942b639$exports = {};
$parcel$export$9($a54cdc5c1942b639$exports, "useRadioGroupState", () => $a54cdc5c1942b639$export$bca9d026f8e704eb);
let $a54cdc5c1942b639$var$instance = Math.round(Math.random() * 10000000000);
let $a54cdc5c1942b639$var$i = 0;

function $a54cdc5c1942b639$export$bca9d026f8e704eb(props) {
  // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
  let name = React.useMemo(() => props.name || `radio-group-${$a54cdc5c1942b639$var$instance}-${++$a54cdc5c1942b639$var$i}`, [props.name]);
  let [selectedValue, setSelected] = $bfee1151ccb0650f$export$40bfa8c7b0832715(props.value, props.defaultValue, props.onChange);
  let [lastFocusedValue, setLastFocusedValue] = React.useState(null);

  let setSelectedValue = value => {
    if (!props.isReadOnly && !props.isDisabled) setSelected(value);
  };

  return {
    name: name,
    selectedValue: selectedValue,
    setSelectedValue: setSelectedValue,
    lastFocusedValue: lastFocusedValue,
    setLastFocusedValue: setLastFocusedValue,
    isDisabled: props.isDisabled || false,
    isReadOnly: props.isReadOnly || false
  };
}

function $parcel$export$8(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $9d939cbc98267846$exports = {};
$parcel$export$8($9d939cbc98267846$exports, "SSRProvider", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);
$parcel$export$8($9d939cbc98267846$exports, "useSSRSafeId", () => $9d939cbc98267846$export$619500959fc48b26);
$parcel$export$8($9d939cbc98267846$exports, "useIsSSR", () => $9d939cbc98267846$export$535bd6ca7f90a273); // Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.

const $9d939cbc98267846$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0
};
const $9d939cbc98267846$var$SSRContext = /*#__PURE__*/React__default["default"].createContext($9d939cbc98267846$var$defaultContext);

function $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {
  let cur = React.useContext($9d939cbc98267846$var$SSRContext);
  let value = React.useMemo(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $9d939cbc98267846$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
    current: 0
  }), [cur]);
  return /*#__PURE__*/React__default["default"].createElement($9d939cbc98267846$var$SSRContext.Provider, {
    value: value
  }, props.children);
}

let $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

function $9d939cbc98267846$export$619500959fc48b26(defaultId) {
  let ctx = React.useContext($9d939cbc98267846$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  return React.useMemo(() => defaultId || `react-aria${ctx.prefix}-${++ctx.current}`, [defaultId]);
}

function $9d939cbc98267846$export$535bd6ca7f90a273() {
  let cur = React.useContext($9d939cbc98267846$var$SSRContext);
  let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;
  let [isSSR, setIsSSR] = React.useState(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      setIsSSR(false);
    }, []);
  return isSSR;
}

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function $6nfFC$clsx () {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}

function $parcel$export$7(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $bdb11010cef70236$exports = {};
$parcel$export$7($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export$7($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export$7($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);
var $f0a04ccd8dbdd83b$exports = {};
$parcel$export$7($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== 'undefined' ? React__default["default"].useLayoutEffect : () => {};
let $bdb11010cef70236$var$idsUpdaterMap = new Map();

function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let isRendering = React.useRef(true);
  isRendering.current = true;
  let [value, setValue] = React.useState(defaultId);
  let nextId = React.useRef(null);
  let res = $9d939cbc98267846$export$619500959fc48b26(value); // don't memo this, we want it new each render so that the Effects always run

  let updateValue = val => {
    if (!isRendering.current) setValue(val);else nextId.current = val;
  };

  $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    isRendering.current = false;
  }, [updateValue]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let r = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r);
    };
  }, [res]);
  React.useEffect(() => {
    let newId = nextId.current;

    if (newId) {
      setValue(newId);
      nextId.current = null;
    }
  }, [setValue, updateValue]);
  return res;
}

function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);

  if (setIdA) {
    setIdA(idB);
    return idB;
  }

  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);

  if (setIdB) {
    setIdB(idA);
    return idA;
  }

  return idB;
}

function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f25(id);
  let updateId = React.useCallback(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : null;
    });
  }, [id, setResolvedId]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updateId, [id, updateId, ...depArray]);
  return resolvedId;
}

var $ff5963eb1fccf552$exports = {};
$parcel$export$7($ff5963eb1fccf552$exports, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e);

function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === 'function') callback(...args);
  };
}

var $3ef42575df84b30b$exports = {};
$parcel$export$7($3ef42575df84b30b$exports, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe928);

function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  // Start with a base clone of the first argument. This is a lot faster than starting
  // with an empty object and adding properties as we go.
  let result = { ...args[0]
  };

  for (let i = 1; i < args.length; i++) {
    let props = args[i];

    for (let key in props) {
      let a = result[key];
      let b = props[key]; // Chain events

      if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
      key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >=
      /* 'A' */
      65 && key.charCodeAt(2) <=
      /* 'Z' */
      90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = $6nfFC$clsx(a, b);else if (key === 'id' && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);else result[key] = b !== undefined ? b : a;
    }
  }

  return result;
}

var $65484d02dcb7eb3e$exports = {};
$parcel$export$7($65484d02dcb7eb3e$exports, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f);
const $65484d02dcb7eb3e$var$DOMPropNames = new Set(['id']);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;

function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let {
    labelable: labelable,
    propNames: propNames
  } = opts;
  let filteredProps = {};

  for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];

  return filteredProps;
}

var $7215afc6de606d6b$exports = {};
$parcel$export$7($7215afc6de606d6b$exports, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f3);

function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}

let $7215afc6de606d6b$var$supportsPreventScrollCached = null;

function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;

    try {
      var focusElem = document.createElement('div');
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }

      });
    } catch (e) {// Ignore
    }
  }

  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}

function $7215afc6de606d6b$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;

  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }

  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}

function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let {
    element: element,
    scrollTop: scrollTop,
    scrollLeft: scrollLeft
  } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

var $ab71dadb03a6fb2e$exports = {};
$parcel$export$7($ab71dadb03a6fb2e$exports, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d);

function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
  let rect = element.getBoundingClientRect();
  if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
  return orientation === 'horizontal' ? rect.left : rect.top;
}

var $103b0e103f1b5952$exports = {};
$parcel$export$7($103b0e103f1b5952$exports, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export$7($103b0e103f1b5952$exports, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
var $bbed8b41f857bcc0$exports = {};
$parcel$export$7($bbed8b41f857bcc0$exports, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c430);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.

let $bbed8b41f857bcc0$var$transitionsByElement = new Map(); // A list of callbacks to call once there are no transitioning elements.

let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();

function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === 'undefined') return;

  let onTransitionStart = e => {
    // Add the transitioning property to the list for this element.
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);

    if (!transitions) {
      transitions = new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions); // The transitioncancel event must be registered on the element itself, rather than as a global
      // event. This enables us to handle when the node is deleted from the document while it is transitioning.
      // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.

      e.target.addEventListener('transitioncancel', onTransitionEnd);
    }

    transitions.add(e.propertyName);
  };

  let onTransitionEnd = e => {
    // Remove property from list of transitioning properties.
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName); // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.

    if (properties.size === 0) {
      e.target.removeEventListener('transitioncancel', onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    } // If no transitioning elements, call all of the queued callbacks.


    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();

      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };

  document.body.addEventListener('transitionrun', onTransitionStart);
  document.body.addEventListener('transitionend', onTransitionEnd);
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}

function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  // Wait one frame to see if an animation starts, e.g. a transition on mount.
  requestAnimationFrame(() => {
    // If no transitions are running, call the function immediately.
    // Otherwise, add it to a list of callbacks to run at the end of the animation.
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

var $9cc09df9fd7676be$exports = {};
$parcel$export$7($9cc09df9fd7676be$exports, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba39706); // Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.

const $9cc09df9fd7676be$var$draggingElements = [];

function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
  console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
  let {
    containerRef: containerRef,
    reverse: reverse,
    orientation: orientation,
    onHover: onHover,
    onDrag: onDrag,
    onPositionChange: onPositionChange,
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    onIncrementToMax: onIncrementToMax,
    onDecrementToMin: onDecrementToMin,
    onCollapseToggle: onCollapseToggle
  } = props;

  let getPosition = e => orientation === 'horizontal' ? e.clientX : e.clientY;

  let getNextOffset = e => {
    let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };

  let dragging = React.useRef(false);
  let prevPosition = React.useRef(0); // Keep track of the current handlers in a ref so that the events can access them.

  let handlers = React.useRef({
    onPositionChange: onPositionChange,
    onDrag: onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;

  let onMouseDragged = e => {
    e.preventDefault();
    let nextOffset = getNextOffset(e);

    if (!dragging.current) {
      dragging.current = true;
      if (handlers.current.onDrag) handlers.current.onDrag(true);
      if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
    }

    if (prevPosition.current === nextOffset) return;
    prevPosition.current = nextOffset;
    if (onPositionChange) onPositionChange(nextOffset);
  };

  let onMouseUp = e => {
    const target = e.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e);
    if (handlers.current.onDrag) handlers.current.onDrag(false);
    if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
    $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
    window.removeEventListener('mouseup', onMouseUp, false);
    window.removeEventListener('mousemove', onMouseDragged, false);
  };

  let onMouseDown = e => {
    const target = e.currentTarget; // If we're already handling dragging on a descendant with useDrag1D, then
    // we don't want to handle the drag motion on this target as well.

    if ($9cc09df9fd7676be$var$draggingElements.some(elt => target.contains(elt))) return;
    $9cc09df9fd7676be$var$draggingElements.push(target);
    window.addEventListener('mousemove', onMouseDragged, false);
    window.addEventListener('mouseup', onMouseUp, false);
  };

  let onMouseEnter = () => {
    if (onHover) onHover(true);
  };

  let onMouseOut = () => {
    if (onHover) onHover(false);
  };

  let onKeyDown = e => {
    switch (e.key) {
      case 'Left':
      case 'ArrowLeft':
        if (orientation === 'horizontal') {
          e.preventDefault();
          if (onDecrement && !reverse) onDecrement();else if (onIncrement && reverse) onIncrement();
        }

        break;

      case 'Up':
      case 'ArrowUp':
        if (orientation === 'vertical') {
          e.preventDefault();
          if (onDecrement && !reverse) onDecrement();else if (onIncrement && reverse) onIncrement();
        }

        break;

      case 'Right':
      case 'ArrowRight':
        if (orientation === 'horizontal') {
          e.preventDefault();
          if (onIncrement && !reverse) onIncrement();else if (onDecrement && reverse) onDecrement();
        }

        break;

      case 'Down':
      case 'ArrowDown':
        if (orientation === 'vertical') {
          e.preventDefault();
          if (onIncrement && !reverse) onIncrement();else if (onDecrement && reverse) onDecrement();
        }

        break;

      case 'Home':
        e.preventDefault();
        if (onDecrementToMin) onDecrementToMin();
        break;

      case 'End':
        e.preventDefault();
        if (onIncrementToMax) onIncrementToMax();
        break;

      case 'Enter':
        e.preventDefault();
        if (onCollapseToggle) onCollapseToggle();
        break;
    }
  };

  return {
    onMouseDown: onMouseDown,
    onMouseEnter: onMouseEnter,
    onMouseOut: onMouseOut,
    onKeyDown: onKeyDown
  };
}

var $03deb23ff14920c4$exports = {};
$parcel$export$7($03deb23ff14920c4$exports, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed6);

function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = React.useRef(new Map());
  let addGlobalListener = React.useCallback((eventTarget, type, listener, options) => {
    // Make sure we remove the listener after it is called with the `once` option.
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type: type,
      eventTarget: eventTarget,
      fn: fn,
      options: options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = React.useCallback((eventTarget, type, listener, options) => {
    var ref;
    let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = React.useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [removeGlobalListener]); // eslint-disable-next-line arrow-body-style

  React.useEffect(() => {
    return removeAllGlobalListeners;
  }, [removeAllGlobalListeners]);
  return {
    addGlobalListener: addGlobalListener,
    removeGlobalListener: removeGlobalListener,
    removeAllGlobalListeners: removeAllGlobalListeners
  };
}

var $313b98861ee5dd6c$exports = {};
$parcel$export$7($313b98861ee5dd6c$exports, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b44);

function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let {
    id: id,
    'aria-label': label,
    'aria-labelledby': labelledBy
  } = props; // If there is both an aria-label and aria-labelledby,
  // combine them by pointing to the element itself.

  id = $bdb11010cef70236$export$f680877a34711e37(id);

  if (labelledBy && label) {
    let ids = new Set([...labelledBy.trim().split(/\s+/), id]);
    labelledBy = [...ids].join(' ');
  } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' '); // If no labels are provided, use the default


  if (!label && !labelledBy && defaultLabel) label = defaultLabel;
  return {
    id: id,
    'aria-label': label,
    'aria-labelledby': labelledBy
  };
}

var $df56164dff5785e2$exports = {};
$parcel$export$7($df56164dff5785e2$exports, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf666);

function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = React.useRef();
  /**
  * We're using `useLayoutEffect` here instead of `useEffect` because we want
  * to make sure that the `ref` value is up to date before other places in the
  * the execution cycle try to read it.
  */

  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') forwardedRef(objRef.current);else forwardedRef.current = objRef.current;
  }, [forwardedRef]);
  return objRef;
}

var $4f58c5f72bcf79f7$exports = {};
$parcel$export$7($4f58c5f72bcf79f7$exports, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d9602);

function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
  const isInitialMount = React.useRef(true);
  React.useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;else effect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

var $9daab02d461809db$exports = {};
$parcel$export$7($9daab02d461809db$exports, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea);

function $9daab02d461809db$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== 'undefined';
}

function $9daab02d461809db$export$683480f191c0e3ea(options) {
  const {
    ref: ref,
    onResize: onResize
  } = options;
  React.useEffect(() => {
    let element = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!element) return;

    if (!$9daab02d461809db$var$hasResizeObserver()) {
      window.addEventListener('resize', onResize, false);
      return () => {
        window.removeEventListener('resize', onResize, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver(entries => {
        if (!entries.length) return;
        onResize();
      });
      resizeObserverInstance.observe(element);
      return () => {
        if (element) resizeObserverInstance.unobserve(element);
      };
    }
  }, [onResize, ref]);
}

var $e7801be82b4b2a53$exports = {};
$parcel$export$7($e7801be82b4b2a53$exports, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e);

function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [context, ref]);
}

var $62d8ded9296f3872$exports = {};
$parcel$export$7($62d8ded9296f3872$exports, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e87938781);

function $62d8ded9296f3872$export$cfa2225e87938781(node) {
  while (node && !$62d8ded9296f3872$var$isScrollable(node)) node = node.parentElement;

  return node || document.scrollingElement || document.documentElement;
}

function $62d8ded9296f3872$var$isScrollable(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}

var $5df64b3807dc15ee$exports = {};
$parcel$export$7($5df64b3807dc15ee$exports, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca); // @ts-ignore

let $5df64b3807dc15ee$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;

function $5df64b3807dc15ee$export$d699905dd57c73ca() {
  let [size1, setSize] = React.useState(() => $5df64b3807dc15ee$var$getViewportSize());
  React.useEffect(() => {
    // Use visualViewport api to track available height even on iOS virtual keyboard opening
    let onResize = () => {
      setSize(size => {
        let newSize = $5df64b3807dc15ee$var$getViewportSize();
        if (newSize.width === size.width && newSize.height === size.height) return size;
        return newSize;
      });
    };

    if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener('resize', onResize);else $5df64b3807dc15ee$var$visualViewport.addEventListener('resize', onResize);
    return () => {
      if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener('resize', onResize);else $5df64b3807dc15ee$var$visualViewport.removeEventListener('resize', onResize);
    };
  }, []);
  return size1;
}

function $5df64b3807dc15ee$var$getViewportSize() {
  return {
    width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
    height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
  };
}

var $ef06256079686ba0$exports = {};
$parcel$export$7($ef06256079686ba0$exports, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa1);
let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();

function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id1, setId] = React.useState(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!description) return;
    let desc = $ef06256079686ba0$var$descriptionNodes.get(description);

    if (!desc) {
      let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
      setId(id);
      let node = document.createElement('div');
      node.id = id;
      node.style.display = 'none';
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $ef06256079686ba0$var$descriptionNodes.set(description, desc);
    } else setId(desc.element.id);

    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes.delete(description);
      }
    };
  }, [description]);
  return {
    'aria-describedby': description ? id1 : undefined
  };
}

var $c87311424ea30a05$exports = {};
$parcel$export$7($c87311424ea30a05$exports, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea10);
$parcel$export$7($c87311424ea30a05$exports, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d99);
$parcel$export$7($c87311424ea30a05$exports, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e4224);
$parcel$export$7($c87311424ea30a05$exports, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f1);
$parcel$export$7($c87311424ea30a05$exports, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b);
$parcel$export$7($c87311424ea30a05$exports, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a98);
$parcel$export$7($c87311424ea30a05$exports, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e);
$parcel$export$7($c87311424ea30a05$exports, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

function $c87311424ea30a05$var$testUserAgent(re) {
  var ref;
  if (typeof window === 'undefined' || window.navigator == null) return false;
  return ((ref = window.navigator['userAgentData']) === null || ref === void 0 ? void 0 : ref.brands.some(brand => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}

function $c87311424ea30a05$var$testPlatform(re) {
  return typeof window !== 'undefined' && window.navigator != null ? re.test((window.navigator['userAgentData'] || window.navigator).platform) : false;
}

function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}

function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}

function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}

function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}

function $c87311424ea30a05$export$e1865c3bedcd822b() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}

function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}

function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}

function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}

var $e9faafb641e167db$exports = {};
$parcel$export$7($e9faafb641e167db$exports, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c);

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler1, options) {
  let handlerRef = React.useRef(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  React.useEffect(() => {
    if (isDisabled) return;
    let element = ref.current;

    let handler = e => handlerRef.current.call(this, e);

    element.addEventListener(event, handler, options);
    return () => {
      element.removeEventListener(event, handler, options);
    };
  }, [ref, event, options, isDisabled]);
}

var $1dbecbe27a04f9af$exports = {};
$parcel$export$7($1dbecbe27a04f9af$exports, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f25);

function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = React.useState(defaultValue);
  let valueRef = React.useRef(value);
  let effect = React.useRef(null);
  valueRef.current = value; // Store the function in a ref so we can always access the current version
  // which has the proper `value` in scope.

  let nextRef = React.useRef(null);

  nextRef.current = () => {
    // Run the generator to the next yield.
    let newValue = effect.current.next(); // If the generator is done, reset the effect.

    if (newValue.done) {
      effect.current = null;
      return;
    } // If the value is the same as the current value,
    // then continue to the next yield. Otherwise,
    // set the value in state and wait for the next layout effect.


    if (value === newValue.value) nextRef.current();else setValue(newValue.value);
  };

  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    // If there is an effect currently running, continue to the next yield.
    if (effect.current) nextRef.current();
  });
  let queue = React.useCallback(fn => {
    effect.current = fn(valueRef.current);
    nextRef.current();
  }, [effect, nextRef]);
  return [value, queue];
}

var $2f04cbc44ee30ce0$exports = {};
$parcel$export$7($2f04cbc44ee30ce0$exports, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd);

function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
  let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
  let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x = scrollView.scrollLeft;
  let y = scrollView.scrollTop;
  let maxX = x + scrollView.offsetWidth;
  let maxY = y + scrollView.offsetHeight;
  if (offsetX <= x) x = offsetX;else if (offsetX + width > maxX) x += offsetX + width - maxX;
  if (offsetY <= y) y = offsetY;else if (offsetY + height > maxY) y += offsetY + height - maxY;
  scrollView.scrollLeft = x;
  scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */


function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
  const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
  let sum = 0;

  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor) break;else if (child.offsetParent.contains(ancestor)) {
      // If the ancestor is not `position:relative`, then we stop at
      // _its_ offset parent, and we subtract off _its_ offset, so that
      // we end up with the proper offset from child to ancestor.
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }

  return sum;
}

function $parcel$export$6(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $3b117e43dc0ca95d$exports = {};
$parcel$export$6($3b117e43dc0ca95d$exports, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e99);
var $f6c31cce2adf654f$exports = {};
$parcel$export$6($f6c31cce2adf654f$exports, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad21); // Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually

let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();

function $14c0b72509d70225$export$16a4697467175487(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state === 'default') {
      $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
      document.documentElement.style.webkitUserSelect = 'none';
    }

    $14c0b72509d70225$var$state = 'disabled';
  } else if (target) {
    // If not iOS, store the target's original user-select and change to user-select: none
    // Ignore state since it doesn't apply for non iOS
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = 'none';
  }
}

function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    // If the state is already default, there's nothing to do.
    // If it is restoring, then there's no need to queue a second restore.
    if ($14c0b72509d70225$var$state !== 'disabled') return;
    $14c0b72509d70225$var$state = 'restoring'; // There appears to be a delay on iOS where selection still might occur
    // after pointer up, so wait a bit before removing user-select.

    setTimeout(() => {
      // Wait for any CSS transitions to complete so we don't recompute style
      // for the whole page in the middle of the animation and cause jank.
      $bbed8b41f857bcc0$export$24490316f764c430(() => {
        // Avoid race conditions
        if ($14c0b72509d70225$var$state === 'restoring') {
          if (document.documentElement.style.webkitUserSelect === 'none') document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
          $14c0b72509d70225$var$savedUserSelect = '';
          $14c0b72509d70225$var$state = 'default';
        }
      });
    }, 300);
  } else // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === 'none') target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute('style') === '') target.removeAttribute('style');
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
}

function $8a9cb279dc87e130$export$60278871457622de(event) {
  // JAWS/NVDA with Firefox.
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  return event.detail === 0 && !event.pointerType;
}

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }

  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }

  stopPropagation() {
    this.nativeEvent.stopPropagation();

    this.isPropagationStopped = () => true;
  }

  isPropagationStopped() {
    return false;
  }

  persist() {}

  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }

}

function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = React.useRef({
    isFocused: false,
    onBlur: onBlur,
    observer: null
  });
  let state1 = stateRef.current;
  state1.onBlur = onBlur; // Clean up MutationObserver on unmount. See below.
  // eslint-disable-next-line arrow-body-style

  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    return () => {
      if (state1.observer) {
        state1.observer.disconnect();
        state1.observer = null;
      }
    };
  }, [state1]); // This function is called during a React onFocus event.

  return e1 => {
    // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
    // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
    // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
    // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
    if (e1.target instanceof HTMLButtonElement || e1.target instanceof HTMLInputElement || e1.target instanceof HTMLTextAreaElement || e1.target instanceof HTMLSelectElement) {
      state1.isFocused = true;
      let target = e1.target;

      let onBlurHandler = e => {
        var // For backward compatibility, dispatch a (fake) React synthetic event.
        ref;
        let state = stateRef.current;
        state.isFocused = false;
        if (target.disabled) (ref = state.onBlur) === null || ref === void 0 ? void 0 : ref.call(state, new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e)); // We no longer need the MutationObserver once the target is blurred.

        if (state.observer) {
          state.observer.disconnect();
          state.observer = null;
        }
      };

      target.addEventListener('focusout', onBlurHandler, {
        once: true
      });
      state1.observer = new MutationObserver(() => {
        if (state1.isFocused && target.disabled) {
          state1.observer.disconnect();
          target.dispatchEvent(new FocusEvent('blur'));
          target.dispatchEvent(new FocusEvent('focusout', {
            bubbles: true
          }));
        }
      });
      state1.observer.observe(target, {
        attributes: true,
        attributeFilter: ['disabled']
      });
    }
  };
}

const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = React__default["default"].createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';

function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  // Consume context from <PressResponder> and merge with props.
  let context = React.useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);

  if (context) {
    let {
      register: register,
      ...contextProps
    } = context;
    props = $3ef42575df84b30b$export$9d1611c77c2fe928(contextProps, props);
    register();
  }

  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, props.ref);
  return props;
}

function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    isPressed: isPressedProp,
    preventFocusOnPress: preventFocusOnPress,
    shouldCancelOnPointerExit: shouldCancelOnPointerExit,
    allowTextSelectionOnPress: allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let propsRef = React.useRef(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit: shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = React.useState(false);
  let ref = React.useRef({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let {
    addGlobalListener: addGlobalListener,
    removeAllGlobalListeners: removeAllGlobalListeners
  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let pressProps1 = React.useMemo(() => {
    let state = ref.current;

    let triggerPressStart = (originalEvent, pointerType) => {
      let {
        onPressStart: onPressStart,
        onPressChange: onPressChange,
        isDisabled: isDisabled
      } = propsRef.current;
      if (isDisabled || state.didFirePressStart) return;
      if (onPressStart) onPressStart({
        type: 'pressstart',
        pointerType: pointerType,
        target: originalEvent.currentTarget,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
      if (onPressChange) onPressChange(true);
      state.didFirePressStart = true;
      setPressed(true);
    };

    let triggerPressEnd = (originalEvent, pointerType, wasPressed = true) => {
      let {
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        isDisabled: isDisabled
      } = propsRef.current;
      if (!state.didFirePressStart) return;
      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;
      if (onPressEnd) onPressEnd({
        type: 'pressend',
        pointerType: pointerType,
        target: originalEvent.currentTarget,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
      if (onPressChange) onPressChange(false);
      setPressed(false);
      if (onPress && wasPressed && !isDisabled) onPress({
        type: 'press',
        pointerType: pointerType,
        target: originalEvent.currentTarget,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    };

    let triggerPressUp = (originalEvent, pointerType) => {
      let {
        onPressUp: onPressUp,
        isDisabled: isDisabled
      } = propsRef.current;
      if (isDisabled) return;
      if (onPressUp) onPressUp({
        type: 'pressup',
        pointerType: pointerType,
        target: originalEvent.currentTarget,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    };

    let cancel = e => {
      if (state.isPressed) {
        if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
      }
    };

    let pressProps = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
          e.stopPropagation(); // If the event is repeating, it may have started on a different element
          // after which focus moved to the current element. Ignore these events and
          // only handle the first key down event.

          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            triggerPressStart(e, 'keyboard'); // Focus may move before the key up event, so register the event on the document
            // instead of the same element where the key down event occurred.

            addGlobalListener(document, 'keyup', onKeyUp, false);
          }
        }
      },

      onKeyUp(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
      },

      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) return;

        if (e && e.button === 0) {
          e.stopPropagation();
          if (isDisabled1) e.preventDefault(); // If triggered from a screen reader or by using element.click(),
          // trigger as if it were a keyboard click.

          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === 'virtual' || $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent))) {
            // Ensure the element receives focus (VoiceOver on iOS does not do this)
            if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
            triggerPressStart(e, 'virtual');
            triggerPressUp(e, 'virtual');
            triggerPressEnd(e, 'virtual');
          }

          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }

    };

    let onKeyUp = e => {
      if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e)) {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
        e.stopPropagation();
        state.isPressed = false;
        let target = e.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', state.target.contains(target));
        removeAllGlobalListeners(); // If the target is a link, trigger the click method to open the URL,
        // but defer triggering pressEnd until onClick event handler.

        if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') state.target.click();
      }
    };

    if (typeof PointerEvent !== 'undefined') {
      pressProps.onPointerDown = e => {
        // Only handle left clicks, and ignore events that bubbled through portals.
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return; // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
        // Ignore and let the onClick handler take care of it instead.
        // https://bugs.webkit.org/show_bug.cgi?id=222627
        // https://bugs.webkit.org/show_bug.cgi?id=223202

        if ($f6c31cce2adf654f$var$isVirtualPointerEvent(e.nativeEvent)) {
          state.pointerType = 'virtual';
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on pointer down and handle focusing the pressable element ourselves.


        if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
        state.pointerType = e.pointerType;
        e.stopPropagation();

        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
          if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
          triggerPressStart(e, state.pointerType);
          addGlobalListener(document, 'pointermove', onPointerMove, false);
          addGlobalListener(document, 'pointerup', onPointerUp, false);
          addGlobalListener(document, 'pointercancel', onPointerCancel, false);
        }
      };

      pressProps.onMouseDown = e => {
        if (!e.currentTarget.contains(e.target)) return;

        if (e.button === 0) {
          // Chrome and Firefox on touch Windows devices require mouse down events
          // to be canceled in addition to pointer events, or an extra asynchronous
          // focus event will be fired.
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
          e.stopPropagation();
        }
      };

      pressProps.onPointerUp = e => {
        // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
        if (!e.currentTarget.contains(e.target) || state.pointerType === 'virtual') return; // Only handle left clicks
        // Safari on iOS sometimes fires pointerup events, even
        // when the touch isn't over the target, so double check.

        if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
      }; // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
      // Use pointer move events instead to implement our own hit testing.
      // See https://bugs.webkit.org/show_bug.cgi?id=199803


      let onPointerMove = e => {
        if (e.pointerId !== state.activePointerId) return;

        if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
        }
      };

      let onPointerUp = e => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
          if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        }
      };

      let onPointerCancel = e => {
        cancel(e);
      };

      pressProps.onDragStart = e => {
        if (!e.currentTarget.contains(e.target)) return; // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.

        cancel(e);
      };
    } else {
      pressProps.onMouseDown = e => {
        // Only handle left clicks
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return; // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on mouse down and handle focusing the pressable element ourselves.

        if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
        e.stopPropagation();
        if (state.ignoreEmulatedMouseEvents) return;
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent) ? 'virtual' : 'mouse';
        if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
        triggerPressStart(e, state.pointerType);
        addGlobalListener(document, 'mouseup', onMouseUp, false);
      };

      pressProps.onMouseEnter = e => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e, state.pointerType);
        }
      };

      pressProps.onMouseLeave = e => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
        }
      };

      pressProps.onMouseUp = e => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType);
      };

      let onMouseUp = e => {
        // Only handle left clicks
        if (e.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();

        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }

        if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
        state.isOverTarget = false;
      };

      pressProps.onTouchStart = e => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = 'touch'; // Due to browser inconsistencies, especially on mobile browsers, we prevent default
        // on the emulated mouse event and handle focusing the pressable element ourselves.

        if (!isDisabled1 && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
        if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
        triggerPressStart(e, state.pointerType);
        addGlobalListener(window, 'scroll', onScroll, true);
      };

      pressProps.onTouchMove = e => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        if (!state.isPressed) return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
        }
      };

      pressProps.onTouchEnd = e => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        if (!state.isPressed) return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
          triggerPressEnd(e, state.pointerType);
        } else if (state.isOverTarget) triggerPressEnd(e, state.pointerType, false);

        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        removeAllGlobalListeners();
      };

      pressProps.onTouchCancel = e => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        if (state.isPressed) cancel(e);
      };

      let onScroll = e => {
        if (state.isPressed && e.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };

      pressProps.onDragStart = e => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    }

    return pressProps;
  }, [addGlobalListener, isDisabled1, preventFocusOnPress, removeAllGlobalListeners, allowTextSelectionOnPress]); // Remove user-select: none in case component unmounts immediately after pressStart
  // eslint-disable-next-line arrow-body-style

  React.useEffect(() => {
    return () => {
      if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(ref.current.target);
    };
  }, [allowTextSelectionOnPress]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, pressProps1)
  };
}

function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === 'A' && target.hasAttribute('href');
}

function $f6c31cce2adf654f$var$isValidKeyboardEvent(event) {
  const {
    key: key,
    code: code,
    target: target
  } = event;
  const element = target;
  const {
    tagName: tagName,
    isContentEditable: isContentEditable
  } = element;
  const role = element.getAttribute('role'); // Accessibility for keyboards. Space and Enter only.
  // "Spacebar" is for IE 11

  return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
  !(role === 'link' && key !== 'Enter');
}

function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const {
    targetTouches: targetTouches
  } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}

function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;

  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId) return touch;
  }

  return null;
}

function $f6c31cce2adf654f$var$createEvent(target, e) {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey
  };
}

function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}

function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
  // check if they cannot overlap on x axis
  if (a.left > b.right || b.left > a.right) return false; // check if they cannot overlap on y axis

  if (a.top > b.bottom || b.top > a.bottom) return false;
  return true;
}

function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}

function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  // We cannot prevent default if the target is a draggable element.
  return !target.draggable;
}

function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target) {
  return !((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit');
}

function $f6c31cce2adf654f$var$isVirtualPointerEvent(event) {
  // If the pointer size is zero, then we assume it's from a screen reader.
  // Android TalkBack double tap will sometimes return a event with width and height of 1
  // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
  // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
  // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0;
}

const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/React__default["default"].forwardRef(({
  children: children,
  ...props
}, ref) => {
  let newRef = React.useRef();
  ref = ref !== null && ref !== void 0 ? ref : newRef;
  let {
    pressProps: pressProps
  } = $f6c31cce2adf654f$export$45712eceda6fad21({ ...props,
    ref: ref
  });
  let child = React__default["default"].Children.only(children);
  return /*#__PURE__*/React__default["default"].cloneElement(child, // @ts-ignore
  {
    ref: ref,
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(child.props, pressProps)
  });
});
var $f1ab8c75478c6f73$exports = {};
$parcel$export$6($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);
const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/React__default["default"].forwardRef(({
  children: children,
  ...props
}, ref) => {
  let isRegistered = React.useRef(false);
  let prevContext = React.useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
  let context = $3ef42575df84b30b$export$9d1611c77c2fe928(prevContext || {}, { ...props,
    ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),

    register() {
      isRegistered.current = true;
      if (prevContext) prevContext.register();
    }

  });
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(prevContext, ref);
  React.useEffect(() => {
    if (!isRegistered.current) console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /*#__PURE__*/React__default["default"].createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
});
var $a1ea59d68270f0dd$exports = {};
$parcel$export$6($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);

function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let onBlur;
  if (!props.isDisabled && (props.onBlur || props.onFocusChange)) onBlur = e => {
    if (e.target === e.currentTarget) {
      if (props.onBlur) props.onBlur(e);
      if (props.onFocusChange) props.onFocusChange(false);
      return true;
    }
  };else onBlur = null;
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus;
  if (!props.isDisabled && (props.onFocus || props.onFocusChange || props.onBlur)) onFocus = e => {
    if (e.target === e.currentTarget) {
      if (props.onFocus) props.onFocus(e);
      if (props.onFocusChange) props.onFocusChange(true);
      onSyntheticFocus(e);
    }
  };
  return {
    focusProps: {
      onFocus: onFocus,
      onBlur: onBlur
    }
  };
}

var $507fabe10e71c6fb$exports = {};
$parcel$export$6($507fabe10e71c6fb$exports, "isFocusVisible", () => $507fabe10e71c6fb$export$b9b3dfddab17db27);
$parcel$export$6($507fabe10e71c6fb$exports, "getInteractionModality", () => $507fabe10e71c6fb$export$630ff653c5ada6a9);
$parcel$export$6($507fabe10e71c6fb$exports, "setInteractionModality", () => $507fabe10e71c6fb$export$8397ddfc504fdb9a);
$parcel$export$6($507fabe10e71c6fb$exports, "useInteractionModality", () => $507fabe10e71c6fb$export$98e20ec92f614cfe);
$parcel$export$6($507fabe10e71c6fb$exports, "useFocusVisible", () => $507fabe10e71c6fb$export$ffd9e5021c1fb2d6);
$parcel$export$6($507fabe10e71c6fb$exports, "useFocusVisibleListener", () => $507fabe10e71c6fb$export$ec71b4b83ac08ec3);
let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false; // Only Tab or Esc keys will make focus visible on text input elements

const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};

function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */


function $507fabe10e71c6fb$var$isValidKey(e) {
  // Control and Shift keys trigger when navigating back to the tab with keyboard.
  return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}

function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;

  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = 'keyboard';
    $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
  }
}

function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = 'pointer';

  if (e.type === 'mousedown' || e.type === 'pointerdown') {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
  }
}

function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ($8a9cb279dc87e130$export$60278871457622de(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = 'virtual';
  }
}

function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  // Firefox fires two extra focus events when the user first clicks into an iframe:
  // first on the window, then on the document. We ignore these events so they don't
  // cause keyboard focus rings to appear.
  if (e.target === window || e.target === document) return; // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
  // This occurs, for example, when navigating a form with the next/previous buttons on iOS.

  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = 'virtual';
    $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
  }

  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}

function $507fabe10e71c6fb$var$handleWindowBlur() {
  // When the window is blurred, reset state. This is necessary when tabbing out of the window,
  // for example, since a subsequent focus event won't be fired.
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */


function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
  if (typeof window === 'undefined' || $507fabe10e71c6fb$var$hasSetupGlobalListeners) return; // Programmatic focus() calls shouldn't affect the current input modality.
  // However, we need to detect other cases when a focus event occurs without
  // a preceding user event (e.g. screen reader focus). Overriding the focus
  // method on HTMLElement.prototype is a bit hacky, but works.

  let focus = HTMLElement.prototype.focus;

  HTMLElement.prototype.focus = function () {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };

  document.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true); // Register focus events on the window so they are sure to happen
  // before React's event listeners (registered on the document).

  window.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
  window.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);

  if (typeof PointerEvent !== 'undefined') {
    document.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    document.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
  }

  $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents();else document.addEventListener('DOMContentLoaded', $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}

function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}

function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}

function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
  $507fabe10e71c6fb$var$currentModality = modality;
  $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}

function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  let [modality, setModality] = React.useState($507fabe10e71c6fb$var$currentModality);
  React.useEffect(() => {
    let handler = () => {
      setModality($507fabe10e71c6fb$var$currentModality);
    };

    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, []);
  return modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */


function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}

function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
  let {
    isTextInput: isTextInput,
    autoFocus: autoFocus
  } = props;
  let [isFocusVisibleState, setFocusVisible] = React.useState(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3($507fabe10e71c6fb$export$b9b3dfddab17db27 => {
    setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db27);
  }, [isTextInput], {
    isTextInput: isTextInput
  });
  return {
    isFocusVisible: isFocusVisibleState
  };
}

function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  React.useEffect(() => {
    let handler = (modality, e) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };

    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

var $9ab94262bd0047c7$exports = {};
$parcel$export$6($9ab94262bd0047c7$exports, "useFocusWithin", () => $9ab94262bd0047c7$export$420e68273165f4ec);

function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let state = React.useRef({
    isFocusWithin: false
  }).current;
  let onBlur = props.isDisabled ? null : e => {
    // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
    // when moving focus inside the element. Only trigger if the currentTarget doesn't
    // include the relatedTarget (where focus is moving).
    if (state.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
      state.isFocusWithin = false;
      if (props.onBlurWithin) props.onBlurWithin(e);
      if (props.onFocusWithinChange) props.onFocusWithinChange(false);
    }
  };
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus = props.isDisabled ? null : e => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin) props.onFocusWithin(e);
      if (props.onFocusWithinChange) props.onFocusWithinChange(true);
      state.isFocusWithin = true;
      onSyntheticFocus(e);
    }
  };
  return {
    focusWithinProps: {
      onFocus: onFocus,
      onBlur: onBlur
    }
  };
}

var $6179b936705e76d3$exports = {};
$parcel$export$6($6179b936705e76d3$exports, "useHover", () => $6179b936705e76d3$export$ae780daf29e6d456); // iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.

let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;

function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true; // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
  // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
  // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
  // the distant future because a user previously touched the element.

  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}

function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}

function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === 'undefined') return;
  if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}

function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let {
    onHoverStart: onHoverStart,
    onHoverChange: onHoverChange,
    onHoverEnd: onHoverEnd,
    isDisabled: isDisabled
  } = props;
  let [isHovered, setHovered] = React.useState(false);
  let state = React.useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: '',
    target: null
  }).current;
  React.useEffect($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let {
    hoverProps: hoverProps1,
    triggerHoverEnd: triggerHoverEnd1
  } = React.useMemo(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart) onHoverStart({
        type: 'hoverstart',
        target: target,
        pointerType: pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };

    let triggerHoverEnd = (event, pointerType) => {
      state.pointerType = '';
      state.target = null;
      if (pointerType === 'touch' || !state.isHovered) return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd) onHoverEnd({
        type: 'hoverend',
        target: target,
        pointerType: pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };

    let hoverProps = {};

    if (typeof PointerEvent !== 'undefined') {
      hoverProps.onPointerEnter = e => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
        triggerHoverStart(e, e.pointerType);
      };

      hoverProps.onPointerLeave = e => {
        if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };

      hoverProps.onMouseEnter = e => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
        state.ignoreEmulatedMouseEvents = false;
      };

      hoverProps.onMouseLeave = e => {
        if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
      };
    }

    return {
      hoverProps: hoverProps,
      triggerHoverEnd: triggerHoverEnd
    };
  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state]);
  React.useEffect(() => {
    // Call the triggerHoverEnd as soon as isDisabled changes to true
    // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
    if (isDisabled) triggerHoverEnd1({
      currentTarget: state.target
    }, state.pointerType);
  }, [isDisabled]);
  return {
    hoverProps: hoverProps1,
    isHovered: isHovered
  };
}

var $e0b6e0b68ec7f50f$exports = {};
$parcel$export$6($e0b6e0b68ec7f50f$exports, "useInteractOutside", () => $e0b6e0b68ec7f50f$export$872b660ac5a1ff98);

function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
  let {
    ref: ref,
    onInteractOutside: onInteractOutside,
    isDisabled: isDisabled,
    onInteractOutsideStart: onInteractOutsideStart
  } = props;
  let stateRef = React.useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside: onInteractOutside,
    onInteractOutsideStart: onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  React.useEffect(() => {
    if (isDisabled) return;

    let onPointerDown = e => {
      if ($e0b6e0b68ec7f50f$var$isValidEvent(e, ref) && state.onInteractOutside) {
        if (state.onInteractOutsideStart) state.onInteractOutsideStart(e);
        state.isPointerDown = true;
      }
    }; // Use pointer events if available. Otherwise, fall back to mouse and touch events.


    if (typeof PointerEvent !== 'undefined') {
      let onPointerUp = e => {
        if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e);
        }
      }; // changing these to capture phase fixed combobox


      document.addEventListener('pointerdown', onPointerDown, true);
      document.addEventListener('pointerup', onPointerUp, true);
      return () => {
        document.removeEventListener('pointerdown', onPointerDown, true);
        document.removeEventListener('pointerup', onPointerUp, true);
      };
    } else {
      let onMouseUp = e => {
        if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e);
        }
      };

      let onTouchEnd = e => {
        state.ignoreEmulatedMouseEvents = true;

        if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e);
        }
      };

      document.addEventListener('mousedown', onPointerDown, true);
      document.addEventListener('mouseup', onMouseUp, true);
      document.addEventListener('touchstart', onPointerDown, true);
      document.addEventListener('touchend', onTouchEnd, true);
      return () => {
        document.removeEventListener('mousedown', onPointerDown, true);
        document.removeEventListener('mouseup', onMouseUp, true);
        document.removeEventListener('touchstart', onPointerDown, true);
        document.removeEventListener('touchend', onTouchEnd, true);
      };
    }
  }, [ref, state, isDisabled]);
}

function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
  if (event.button > 0) return false; // if the event target is no longer in the document

  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
  }

  return ref.current && !ref.current.contains(event.target);
}

var $46d819fcbaf35654$exports = {};
$parcel$export$6($46d819fcbaf35654$exports, "useKeyboard", () => $46d819fcbaf35654$export$8f71654801c2f7cd);

function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler) return;
  let shouldStopPropagation = true;
  return e => {
    let event = { ...e,

      preventDefault() {
        e.preventDefault();
      },

      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },

      stopPropagation() {
        console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
      },

      continuePropagation() {
        shouldStopPropagation = false;
      }

    };
    handler(event);
    if (shouldStopPropagation) e.stopPropagation();
  };
}

function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
      onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
    }
  };
}

var $e8a7022cf87cba2a$exports = {};
$parcel$export$6($e8a7022cf87cba2a$exports, "useMove", () => $e8a7022cf87cba2a$export$36da96379f79f245);

function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
  let {
    onMoveStart: onMoveStart,
    onMove: onMove,
    onMoveEnd: onMoveEnd
  } = props;
  let state = React.useRef({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let {
    addGlobalListener: addGlobalListener,
    removeGlobalListener: removeGlobalListener
  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let moveProps1 = React.useMemo(() => {
    let moveProps = {};

    let start = () => {
      $14c0b72509d70225$export$16a4697467175487();
      state.current.didMove = false;
    };

    let move = (originalEvent, pointerType, deltaX, deltaY) => {
      if (deltaX === 0 && deltaY === 0) return;

      if (!state.current.didMove) {
        state.current.didMove = true;
        onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
          type: 'movestart',
          pointerType: pointerType,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }

      onMove({
        type: 'move',
        pointerType: pointerType,
        deltaX: deltaX,
        deltaY: deltaY,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    };

    let end = (originalEvent, pointerType) => {
      $14c0b72509d70225$export$b0d6fa1ab32e3295();
      if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
        type: 'moveend',
        pointerType: pointerType,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    };

    if (typeof PointerEvent === 'undefined') {
      let onMouseMove = e => {
        if (e.button === 0) {
          move(e, 'mouse', e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };

      let onMouseUp = e => {
        if (e.button === 0) {
          end(e, 'mouse');
          removeGlobalListener(window, 'mousemove', onMouseMove, false);
          removeGlobalListener(window, 'mouseup', onMouseUp, false);
        }
      };

      moveProps.onMouseDown = e => {
        if (e.button === 0) {
          start();
          e.stopPropagation();
          e.preventDefault();
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          addGlobalListener(window, 'mousemove', onMouseMove, false);
          addGlobalListener(window, 'mouseup', onMouseUp, false);
        }
      };

      let onTouchMove = e => {
        let touch = [...e.changedTouches].findIndex(({
          identifier: identifier
        }) => identifier === state.current.id);

        if (touch >= 0) {
          let {
            pageX: pageX,
            pageY: pageY
          } = e.changedTouches[touch];
          move(e, 'touch', pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: pageX,
            pageY: pageY
          };
        }
      };

      let onTouchEnd = e => {
        let touch = [...e.changedTouches].findIndex(({
          identifier: identifier
        }) => identifier === state.current.id);

        if (touch >= 0) {
          end(e, 'touch');
          state.current.id = null;
          removeGlobalListener(window, 'touchmove', onTouchMove);
          removeGlobalListener(window, 'touchend', onTouchEnd);
          removeGlobalListener(window, 'touchcancel', onTouchEnd);
        }
      };

      moveProps.onTouchStart = e => {
        if (e.changedTouches.length === 0 || state.current.id != null) return;
        let {
          pageX: pageX,
          pageY: pageY,
          identifier: identifier
        } = e.changedTouches[0];
        start();
        e.stopPropagation();
        e.preventDefault();
        state.current.lastPosition = {
          pageX: pageX,
          pageY: pageY
        };
        state.current.id = identifier;
        addGlobalListener(window, 'touchmove', onTouchMove, false);
        addGlobalListener(window, 'touchend', onTouchEnd, false);
        addGlobalListener(window, 'touchcancel', onTouchEnd, false);
      };
    } else {
      let onPointerMove = e => {
        if (e.pointerId === state.current.id) {
          let pointerType = e.pointerType || 'mouse'; // Problems with PointerEvent#movementX/movementY:
          // 1. it is always 0 on macOS Safari.
          // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS

          move(e, pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };

      let onPointerUp = e => {
        if (e.pointerId === state.current.id) {
          let pointerType = e.pointerType || 'mouse';
          end(e, pointerType);
          state.current.id = null;
          removeGlobalListener(window, 'pointermove', onPointerMove, false);
          removeGlobalListener(window, 'pointerup', onPointerUp, false);
          removeGlobalListener(window, 'pointercancel', onPointerUp, false);
        }
      };

      moveProps.onPointerDown = e => {
        if (e.button === 0 && state.current.id == null) {
          start();
          e.stopPropagation();
          e.preventDefault();
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          state.current.id = e.pointerId;
          addGlobalListener(window, 'pointermove', onPointerMove, false);
          addGlobalListener(window, 'pointerup', onPointerUp, false);
          addGlobalListener(window, 'pointercancel', onPointerUp, false);
        }
      };
    }

    let triggerKeyboardMove = (e, deltaX, deltaY) => {
      start();
      move(e, 'keyboard', deltaX, deltaY);
      end(e, 'keyboard');
    };

    moveProps.onKeyDown = e => {
      switch (e.key) {
        case 'Left':
        case 'ArrowLeft':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, -1, 0);
          break;

        case 'Right':
        case 'ArrowRight':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 1, 0);
          break;

        case 'Up':
        case 'ArrowUp':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 0, -1);
          break;

        case 'Down':
        case 'ArrowDown':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 0, 1);
          break;
      }
    };

    return moveProps;
  }, [state, onMoveStart, onMove, onMoveEnd, addGlobalListener, removeGlobalListener]);
  return {
    moveProps: moveProps1
  };
}

var $7d0a636d7a4dcefd$exports = {};
$parcel$export$6($7d0a636d7a4dcefd$exports, "useScrollWheel", () => $7d0a636d7a4dcefd$export$2123ff2b87c81ca);

function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
  let {
    onScroll: onScroll,
    isDisabled: isDisabled
  } = props;
  let onScrollHandler = React.useCallback(e => {
    // If the ctrlKey is pressed, this is a zoom event, do nothing.
    if (e.ctrlKey) return; // stop scrolling the page

    e.preventDefault();
    e.stopPropagation();
    if (onScroll) onScroll({
      deltaX: e.deltaX,
      deltaY: e.deltaY
    });
  }, [onScroll]);
  $e9faafb641e167db$export$90fc3a17d93f704c(ref, 'wheel', isDisabled ? null : onScrollHandler);
}

var $8a26561d2877236e$exports = {};
$parcel$export$6($8a26561d2877236e$exports, "useLongPress", () => $8a26561d2877236e$export$c24ed0104d07eab9);
const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;

function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
  let {
    isDisabled: isDisabled,
    onLongPressStart: onLongPressStart,
    onLongPressEnd: onLongPressEnd,
    onLongPress: onLongPress,
    threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD,
    accessibilityDescription: accessibilityDescription
  } = props;
  const timeRef = React.useRef(null);
  let {
    addGlobalListener: addGlobalListener,
    removeGlobalListener: removeGlobalListener
  } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let {
    pressProps: pressProps
  } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: isDisabled,

    onPressStart(e1) {
      if (e1.pointerType === 'mouse' || e1.pointerType === 'touch') {
        if (onLongPressStart) onLongPressStart({ ...e1,
          type: 'longpressstart'
        });
        timeRef.current = setTimeout(() => {
          // Prevent other usePress handlers from also handling this event.
          e1.target.dispatchEvent(new PointerEvent('pointercancel', {
            bubbles: true
          }));
          if (onLongPress) onLongPress({ ...e1,
            type: 'longpress'
          });
          timeRef.current = null;
        }, threshold); // Prevent context menu, which may be opened on long press on touch devices

        if (e1.pointerType === 'touch') {
          let onContextMenu = e => {
            e.preventDefault();
          };

          addGlobalListener(e1.target, 'contextmenu', onContextMenu, {
            once: true
          });
          addGlobalListener(window, 'pointerup', () => {
            // If no contextmenu event is fired quickly after pointerup, remove the handler
            // so future context menu events outside a long press are not prevented.
            setTimeout(() => {
              removeGlobalListener(e1.target, 'contextmenu', onContextMenu);
            }, 30);
          }, {
            once: true
          });
        }
      }
    },

    onPressEnd(e) {
      if (timeRef.current) clearTimeout(timeRef.current);
      if (onLongPressEnd && (e.pointerType === 'mouse' || e.pointerType === 'touch')) onLongPressEnd({ ...e,
        type: 'longpressend'
      });
    }

  });
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : null);
  return {
    longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}

function $parcel$export$5(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $9bf71ea28793e738$exports = {};
$parcel$export$5($9bf71ea28793e738$exports, "FocusScope", () => $9bf71ea28793e738$export$20e40289641fbbb6);
$parcel$export$5($9bf71ea28793e738$exports, "useFocusManager", () => $9bf71ea28793e738$export$10c5169755ce7bd7);
$parcel$export$5($9bf71ea28793e738$exports, "getFocusableTreeWalker", () => $9bf71ea28793e738$export$2d6ec8fc375ceafa);
$parcel$export$5($9bf71ea28793e738$exports, "createFocusManager", () => $9bf71ea28793e738$export$c5251b9e124bf29);
var $6a99195332edec8b$exports = {};
$parcel$export$5($6a99195332edec8b$exports, "focusSafely", () => $6a99195332edec8b$export$80f3e147d781571c);

function $6a99195332edec8b$export$80f3e147d781571c(element) {
  // If the user is interacting with a virtual cursor, e.g. screen reader, then
  // wait until after any animated transitions that are currently occurring on
  // the page before shifting focus. This avoids issues with VoiceOver on iOS
  // causing the page to scroll when moving focus if the element is transitioning
  // from off the screen.
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === 'virtual') {
    let lastFocusedElement = document.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430(() => {
      // If focus did not move and the element is still in the document, focus it.
      if (document.activeElement === lastFocusedElement && document.contains(element)) $7215afc6de606d6b$export$de79e2c695e052f3(element);
    });
  } else $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */


function $645f2e67b85a24c9$var$isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
  let {
    display: display,
    visibility: visibility
  } = element.style;
  let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';

  if (isVisible) {
    const {
      getComputedStyle: getComputedStyle
    } = element.ownerDocument.defaultView;
    let {
      display: computedDisplay,
      visibility: computedVisibility
    } = getComputedStyle(element);
    isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
  }

  return isVisible;
}

function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}

function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
  return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}

const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/React__default["default"].createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
let $9bf71ea28793e738$var$scopes = new Map();

function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
  let {
    children: children,
    contain: contain,
    restoreFocus: restoreFocus,
    autoFocus: autoFocus
  } = props;
  let startRef = React.useRef();
  let endRef = React.useRef();
  let scopeRef = React.useRef([]);
  let ctx = React.useContext($9bf71ea28793e738$var$FocusContext);
  let parentScope = ctx === null || ctx === void 0 ? void 0 : ctx.scopeRef;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    // Find all rendered nodes between the sentinels and add them to the scope.
    let node = startRef.current.nextSibling;
    let nodes = [];

    while (node && node !== endRef.current) {
      nodes.push(node);
      node = node.nextSibling;
    }

    scopeRef.current = nodes;
  }, [children, parentScope]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    $9bf71ea28793e738$var$scopes.set(scopeRef, parentScope);
    return () => {
      // Restore the active scope on unmount if this scope or a descendant scope is active.
      // Parent effect cleanups run before children, so we need to check if the
      // parent scope actually still exists before restoring the active scope to it.
      if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$var$scopes.has(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
      $9bf71ea28793e738$var$scopes.delete(scopeRef);
    };
  }, [scopeRef, parentScope]);
  $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
  $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
  let focusManager = $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef);
  return /*#__PURE__*/React__default["default"].createElement($9bf71ea28793e738$var$FocusContext.Provider, {
    value: {
      scopeRef: scopeRef,
      focusManager: focusManager
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: startRef
  }), children, /*#__PURE__*/React__default["default"].createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: endRef
  }));
}

function $9bf71ea28793e738$export$10c5169755ce7bd7() {
  var ref;
  return (ref = React.useContext($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
}

function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
  return {
    focusNext(opts = {}) {
      let scope = scopeRef.current;
      let {
        from: from,
        tabbable: tabbable,
        wrap: wrap
      } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[0].previousElementSibling;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: tabbable
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let nextNode = walker.nextNode();

      if (!nextNode && wrap) {
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
      }

      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },

    focusPrevious(opts = {}) {
      let scope = scopeRef.current;
      let {
        from: from,
        tabbable: tabbable,
        wrap: wrap
      } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[scope.length - 1].nextElementSibling;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: tabbable
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let previousNode = walker.previousNode();

      if (!previousNode && wrap) {
        walker.currentNode = sentinel;
        previousNode = walker.previousNode();
      }

      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },

    focusFirst(opts = {}) {
      let scope = scopeRef.current;
      let {
        tabbable: tabbable
      } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: tabbable
      }, scope);
      walker.currentNode = scope[0].previousElementSibling;
      let nextNode = walker.nextNode();
      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },

    focusLast(opts = {}) {
      let scope = scopeRef.current;
      let {
        tabbable: tabbable
      } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: tabbable
      }, scope);
      walker.currentNode = scope[scope.length - 1].nextElementSibling;
      let previousNode = walker.previousNode();
      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    }

  };
}

const $9bf71ea28793e738$var$focusableElements = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');

function $9bf71ea28793e738$var$getScopeRoot(scope) {
  return scope[0].parentElement;
}

function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
  let focusedNode = React.useRef();
  let raf = React.useRef(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let scope1 = scopeRef.current;
    if (!contain) return; // Handle the Tab key to contain focus within the scope

    let onKeyDown = e => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope) return;
      let focusedElement = document.activeElement;
      let scope = scopeRef.current;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: true
      }, scope);
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();

      if (!nextElement) {
        walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
        nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      }

      e.preventDefault();
      if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
    };

    let onFocus = e => {
      // If focusing an element in a child scope of the currently active scope, the child becomes active.
      // Moving out of the active scope to an ancestor is not allowed.
      if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
        $9bf71ea28793e738$var$activeScope = scopeRef;
        focusedNode.current = e.target;
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
        // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
        // restore focus to the previously focused node or the first tabbable element in the active scope.
        if (focusedNode.current) focusedNode.current.focus();else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope) focusedNode.current = e.target;
    };

    let onBlur = e => {
      // Firefox doesn't shift focus back to the Dialog properly without this
      raf.current = requestAnimationFrame(() => {
        // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
        if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
          $9bf71ea28793e738$var$activeScope = scopeRef;
          focusedNode.current = e.target;
          focusedNode.current.focus();
        }
      });
    };

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('focusin', onFocus, false);
    scope1.forEach(element => element.addEventListener('focusin', onFocus, false));
    scope1.forEach(element => element.addEventListener('focusout', onBlur, false));
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
      document.removeEventListener('focusin', onFocus, false);
      scope1.forEach(element => element.removeEventListener('focusin', onFocus, false));
      scope1.forEach(element => element.removeEventListener('focusout', onBlur, false));
    };
  }, [scopeRef, contain]); // eslint-disable-next-line arrow-body-style

  React.useEffect(() => {
    return () => cancelAnimationFrame(raf.current);
  }, [raf]);
}

function $9bf71ea28793e738$var$isElementInAnyScope(element) {
  for (let scope of $9bf71ea28793e738$var$scopes.keys()) {
    if ($9bf71ea28793e738$var$isElementInScope(element, scope.current)) return true;
  }

  return false;
}

function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  return scope.some(node => node.contains(element));
}

function $9bf71ea28793e738$var$isElementInChildScope(element, scope) {
  // node.contains in isElementInScope covers child scopes that are also DOM children,
  // but does not cover child scopes in portals.
  for (let s of $9bf71ea28793e738$var$scopes.keys()) {
    if ((s === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s)) && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
  }

  return false;
}

function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
  let parent = $9bf71ea28793e738$var$scopes.get(scope);
  if (!parent) return false;
  if (parent === ancestor) return true;
  return $9bf71ea28793e738$var$isAncestorScope(ancestor, parent);
}

function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
  if (element != null && !scroll) try {
    $6a99195332edec8b$export$80f3e147d781571c(element);
  } catch (err) {// ignore
  } else if (element != null) try {
    element.focus();
  } catch (err1) {// ignore
  }
}

function $9bf71ea28793e738$var$focusFirstInScope(scope) {
  let sentinel = scope[0].previousElementSibling;
  let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
    tabbable: true
  }, scope);
  walker.currentNode = sentinel;
  $9bf71ea28793e738$var$focusElement(walker.nextNode());
}

function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
  const autoFocusRef = React__default["default"].useRef(autoFocus);
  React.useEffect(() => {
    if (autoFocusRef.current) {
      $9bf71ea28793e738$var$activeScope = scopeRef;
      if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current)) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
    }

    autoFocusRef.current = false;
  }, []);
}

function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
  const nodeToRestoreRef = React.useRef(typeof document !== 'undefined' ? document.activeElement : null); // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.

  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let nodeToRestore = nodeToRestoreRef.current;
    if (!restoreFocus) return; // Handle the Tab key so that tabbing out of the scope goes to the next element
    // after the node that had focus when the scope mounted. This is important when
    // using portals for overlays, so that focus goes to the expected element when
    // tabbing out of the overlay.

    let onKeyDown = e => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) return;
      let focusedElement = document.activeElement;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return; // Create a DOM tree walker that matches all tabbable elements

      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
        tabbable: true
      }); // Find the next tabbable element after the currently focused element

      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) nodeToRestore = null; // If there is no next element, or it is outside the current scope, move focus to the
      // next element after the node to restore to instead.

      if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
        walker.currentNode = nodeToRestore; // Skip over elements within the scope, in case the scope immediately follows the node to restore.

        do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode(); while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));

        e.preventDefault();
        e.stopPropagation();
        if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
          // then move focus to the body.
          // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
          if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
      }
    };

    if (!contain) document.addEventListener('keydown', onKeyDown, true);
    return () => {
      if (!contain) document.removeEventListener('keydown', onKeyDown, true);
      if (restoreFocus && nodeToRestore && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) requestAnimationFrame(() => {
        if (document.body.contains(nodeToRestore)) $9bf71ea28793e738$var$focusElement(nodeToRestore);
      });
    };
  }, [scopeRef, restoreFocus, contain]);
}

function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
  let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var ref; // Skip nodes inside the starting node.

      if (opts === null || opts === void 0 ? void 0 : (ref = opts.from) === null || ref === void 0 ? void 0 : ref.contains(node)) return NodeFilter.FILTER_REJECT;
      if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope))) return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }

  });
  if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
  return walker;
}

function $9bf71ea28793e738$export$c5251b9e124bf29(ref) {
  return {
    focusNext(opts = {}) {
      let root = ref.current;
      let {
        from: from,
        tabbable: tabbable,
        wrap: wrap
      } = opts;
      let node = from || document.activeElement;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable: tabbable
      });
      if (root.contains(node)) walker.currentNode = node;
      let nextNode = walker.nextNode();

      if (!nextNode && wrap) {
        walker.currentNode = root;
        nextNode = walker.nextNode();
      }

      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },

    focusPrevious(opts = {}) {
      let root = ref.current;
      let {
        from: from,
        tabbable: tabbable,
        wrap: wrap
      } = opts;
      let node = from || document.activeElement;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable: tabbable
      });
      if (root.contains(node)) walker.currentNode = node;else {
        let next = $9bf71ea28793e738$var$last(walker);
        if (next) $9bf71ea28793e738$var$focusElement(next, true);
        return next;
      }
      let previousNode = walker.previousNode();

      if (!previousNode && wrap) {
        walker.currentNode = root;
        previousNode = $9bf71ea28793e738$var$last(walker);
      }

      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },

    focusFirst(opts = {}) {
      let root = ref.current;
      let {
        tabbable: tabbable
      } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable: tabbable
      });
      let nextNode = walker.nextNode();
      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },

    focusLast(opts = {}) {
      let root = ref.current;
      let {
        tabbable: tabbable
      } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable: tabbable
      });
      let next = $9bf71ea28793e738$var$last(walker);
      if (next) $9bf71ea28793e738$var$focusElement(next, true);
      return next;
    }

  };
}

function $9bf71ea28793e738$var$last(walker) {
  let next;
  let last;

  do {
    last = walker.lastChild();
    if (last) next = last;
  } while (last);

  return next;
}

var $907718708eab68af$exports = {};
$parcel$export$5($907718708eab68af$exports, "FocusRing", () => $907718708eab68af$export$1a38b4ad7f578e1d);
var $f7dceffc5ad7768b$exports = {};
$parcel$export$5($f7dceffc5ad7768b$exports, "useFocusRing", () => $f7dceffc5ad7768b$export$4e328f61c538687f);

function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let {
    autoFocus = false,
    isTextInput: isTextInput,
    within: within
  } = props;
  let state = React.useRef({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  }).current;
  let [isFocused1, setFocused] = React.useState(false);
  let [isFocusVisibleState, setFocusVisible] = React.useState(() => state.isFocused && state.isFocusVisible);

  let updateState = () => setFocusVisible(state.isFocused && state.isFocusVisible);

  let onFocusChange = isFocused => {
    state.isFocused = isFocused;
    setFocused(isFocused);
    updateState();
  };

  $507fabe10e71c6fb$export$ec71b4b83ac08ec3(isFocusVisible => {
    state.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput: isTextInput
  });
  let {
    focusProps: focusProps
  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange: onFocusChange
  });
  let {
    focusWithinProps: focusWithinProps
  } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused: isFocused1,
    isFocusVisible: state.isFocused && isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
  let {
    children: children,
    focusClass: focusClass,
    focusRingClass: focusRingClass
  } = props;
  let {
    isFocused: isFocused,
    isFocusVisible: isFocusVisible,
    focusProps: focusProps
  } = $f7dceffc5ad7768b$export$4e328f61c538687f(props);
  let child = React__default["default"].Children.only(children);
  return /*#__PURE__*/React__default["default"].cloneElement(child, $3ef42575df84b30b$export$9d1611c77c2fe928(child.props, { ...focusProps,
    className: $6nfFC$clsx({
      [focusClass || '']: isFocused,
      [focusRingClass || '']: isFocusVisible
    })
  }));
}

var $e6afbd83fe6ebbd2$exports = {};
$parcel$export$5($e6afbd83fe6ebbd2$exports, "FocusableProvider", () => $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5);
$parcel$export$5($e6afbd83fe6ebbd2$exports, "useFocusable", () => $e6afbd83fe6ebbd2$export$4c014de7c8940b4c);
let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/React__default["default"].createContext(null);

function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = React.useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref); // eslint-disable-next-line

  let {
    ref: _,
    ...otherProps
  } = context;
  return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */


function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let {
    children: children,
    ...otherProps
  } = props;
  let context = { ...otherProps,
    ref: ref
  };
  return /*#__PURE__*/React__default["default"].createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}

let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/React__default["default"].forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);

function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let {
    focusProps: focusProps
  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let {
    keyboardProps: keyboardProps
  } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = React.useRef(props.autoFocus);
  React.useEffect(() => {
    if (autoFocusRef.current && domRef.current) domRef.current.focus();
    autoFocusRef.current = false;
  }, []);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({ ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
    }, interactionProps)
  };
}

function $parcel$export$4(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $2baaea4c71418dea$exports = {};
$parcel$export$4($2baaea4c71418dea$exports, "useField", () => $2baaea4c71418dea$export$294aa081a6c6f55d);
var $d191a55c9702f145$exports = {};
$parcel$export$4($d191a55c9702f145$exports, "useLabel", () => $d191a55c9702f145$export$8467354a121f1b9f);

function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let {
    id: id,
    label: label,
    'aria-labelledby': ariaLabelledby,
    'aria-label': ariaLabel,
    labelElementType = 'label'
  } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  let labelId = $bdb11010cef70236$export$f680877a34711e37();
  let labelProps = {};

  if (label) {
    ariaLabelledby = ariaLabelledby ? `${ariaLabelledby} ${labelId}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === 'label' ? id : undefined
    };
  } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');

  let fieldProps = $313b98861ee5dd6c$export$d6875122194c7b44({
    id: id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  });
  return {
    labelProps: labelProps,
    fieldProps: fieldProps
  };
}

function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
  let {
    description: description,
    errorMessage: errorMessage,
    validationState: validationState
  } = props;
  let {
    labelProps: labelProps,
    fieldProps: fieldProps
  } = $d191a55c9702f145$export$8467354a121f1b9f(props);
  let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8([Boolean(description), Boolean(errorMessage), validationState]);
  let errorMessageId = $bdb11010cef70236$export$b4cc09c592e8fdb8([Boolean(description), Boolean(errorMessage), validationState]);
  fieldProps = $3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, {
    'aria-describedby': [descriptionId, // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
    errorMessageId, props['aria-describedby']].filter(Boolean).join(' ') || undefined
  });
  return {
    labelProps: labelProps,
    fieldProps: fieldProps,
    descriptionProps: {
      id: descriptionId
    },
    errorMessageProps: {
      id: errorMessageId
    }
  };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign$2 = function () {
  __assign$2 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$2.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var ErrorKind;

(function (ErrorKind) {
  /** Argument is unclosed (e.g. `{0`) */
  ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  /** Argument is empty (e.g. `{}`). */

  ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
  /** Argument is malformed (e.g. `{foo!}``) */

  ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
  /** Expect an argument type (e.g. `{foo,}`) */

  ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
  /** Unsupported argument type (e.g. `{foo,foo}`) */

  ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
  /** Expect an argument style (e.g. `{foo, number, }`) */

  ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
  /** The number skeleton is invalid. */

  ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
  /** The date time skeleton is invalid. */

  ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
  /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */

  ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
  /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */

  ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
  /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */

  ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  /** Missing select argument options (e.g. `{foo, select}`) */

  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */

  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */

  ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  /** Expecting a selector in `select` argument (e.g `{foo, select}`) */

  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */

  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */

  ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  /**
   * Expecting a message fragment after the `plural` or `selectordinal` selector
   * (e.g. `{foo, plural, one}`)
   */

  ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */

  ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  /**
   * Duplicate selectors in `plural` or `selectordinal` argument.
   * (e.g. {foo, plural, one {#} one {#}})
   */

  ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  /** Duplicate selectors in `select` argument.
   * (e.g. {foo, select, apple {apple} apple {apple}})
   */

  ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  /** Plural or select argument option must have `other` clause. */

  ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
  /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */

  ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
  /** The tag name is invalid. (e.g. `<123>foo</123>`) */

  ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
  /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */

  ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
  /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */

  ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

var TYPE;

(function (TYPE) {
  /**
   * Raw text
   */
  TYPE[TYPE["literal"] = 0] = "literal";
  /**
   * Variable w/o any format, e.g `var` in `this is a {var}`
   */

  TYPE[TYPE["argument"] = 1] = "argument";
  /**
   * Variable w/ number format
   */

  TYPE[TYPE["number"] = 2] = "number";
  /**
   * Variable w/ date format
   */

  TYPE[TYPE["date"] = 3] = "date";
  /**
   * Variable w/ time format
   */

  TYPE[TYPE["time"] = 4] = "time";
  /**
   * Variable w/ select format
   */

  TYPE[TYPE["select"] = 5] = "select";
  /**
   * Variable w/ plural format
   */

  TYPE[TYPE["plural"] = 6] = "plural";
  /**
   * Only possible within plural argument.
   * This is the `#` symbol that will be substituted with the count.
   */

  TYPE[TYPE["pound"] = 7] = "pound";
  /**
   * XML-like tag
   */

  TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));

var SKELETON_TYPE;

(function (SKELETON_TYPE) {
  SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
  SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */


function isLiteralElement(el) {
  return el.type === TYPE.literal;
}
function isArgumentElement(el) {
  return el.type === TYPE.argument;
}
function isNumberElement(el) {
  return el.type === TYPE.number;
}
function isDateElement(el) {
  return el.type === TYPE.date;
}
function isTimeElement(el) {
  return el.type === TYPE.time;
}
function isSelectElement(el) {
  return el.type === TYPE.select;
}
function isPluralElement(el) {
  return el.type === TYPE.plural;
}
function isPoundElement(el) {
  return el.type === TYPE.pound;
}
function isTagElement(el) {
  return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
  return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
  return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}

// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */

function parseDateTimeSkeleton(skeleton) {
  var result = {};
  skeleton.replace(DATE_TIME_REGEX, function (match) {
    var len = match.length;

    switch (match[0]) {
      // Era
      case 'G':
        result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
        break;
      // Year

      case 'y':
        result.year = len === 2 ? '2-digit' : 'numeric';
        break;

      case 'Y':
      case 'u':
      case 'U':
      case 'r':
        throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
      // Quarter

      case 'q':
      case 'Q':
        throw new RangeError('`q/Q` (quarter) patterns are not supported');
      // Month

      case 'M':
      case 'L':
        result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
        break;
      // Week

      case 'w':
      case 'W':
        throw new RangeError('`w/W` (week) patterns are not supported');

      case 'd':
        result.day = ['numeric', '2-digit'][len - 1];
        break;

      case 'D':
      case 'F':
      case 'g':
        throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
      // Weekday

      case 'E':
        result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
        break;

      case 'e':
        if (len < 4) {
          throw new RangeError('`e..eee` (weekday) patterns are not supported');
        }

        result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
        break;

      case 'c':
        if (len < 4) {
          throw new RangeError('`c..ccc` (weekday) patterns are not supported');
        }

        result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
        break;
      // Period

      case 'a':
        // AM, PM
        result.hour12 = true;
        break;

      case 'b': // am, pm, noon, midnight

      case 'B':
        // flexible day periods
        throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
      // Hour

      case 'h':
        result.hourCycle = 'h12';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;

      case 'H':
        result.hourCycle = 'h23';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;

      case 'K':
        result.hourCycle = 'h11';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;

      case 'k':
        result.hourCycle = 'h24';
        result.hour = ['numeric', '2-digit'][len - 1];
        break;

      case 'j':
      case 'J':
      case 'C':
        throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
      // Minute

      case 'm':
        result.minute = ['numeric', '2-digit'][len - 1];
        break;
      // Second

      case 's':
        result.second = ['numeric', '2-digit'][len - 1];
        break;

      case 'S':
      case 'A':
        throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
      // Zone

      case 'z':
        // 1..3, 4: specific non-location format
        result.timeZoneName = len < 4 ? 'short' : 'long';
        break;

      case 'Z': // 1..3, 4, 5: The ISO8601 varios formats

      case 'O': // 1, 4: miliseconds in day short, long

      case 'v': // 1, 4: generic non-location format

      case 'V': // 1, 2, 3, 4: time zone ID or city

      case 'X': // 1, 2, 3, 4: The ISO8601 varios formats

      case 'x':
        // 1, 2, 3, 4: The ISO8601 varios formats
        throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
    }

    return '';
  });
  return result;
}

// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

function parseNumberSkeletonFromString(skeleton) {
  if (skeleton.length === 0) {
    throw new Error('Number skeleton cannot be empty');
  } // Parse the skeleton


  var stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter(function (x) {
    return x.length > 0;
  });
  var tokens = [];

  for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
    var stringToken = stringTokens_1[_i];
    var stemAndOptions = stringToken.split('/');

    if (stemAndOptions.length === 0) {
      throw new Error('Invalid number skeleton');
    }

    var stem = stemAndOptions[0],
        options = stemAndOptions.slice(1);

    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
      var option = options_1[_a];

      if (option.length === 0) {
        throw new Error('Invalid number skeleton');
      }
    }

    tokens.push({
      stem: stem,
      options: options
    });
  }

  return tokens;
}

function icuUnitToEcma(unit) {
  return unit.replace(/^(.*?)-/, '');
}

var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;

function parseSignificantPrecision(str) {
  var result = {};

  if (str[str.length - 1] === 'r') {
    result.roundingPriority = 'morePrecision';
  } else if (str[str.length - 1] === 's') {
    result.roundingPriority = 'lessPrecision';
  }

  str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
    // @@@ case
    if (typeof g2 !== 'string') {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length;
    } // @@@+ case
    else if (g2 === '+') {
      result.minimumSignificantDigits = g1.length;
    } // .### case
    else if (g1[0] === '#') {
      result.maximumSignificantDigits = g1.length;
    } // .@@## or .@@@ case
    else {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
    }

    return '';
  });
  return result;
}

function parseSign(str) {
  switch (str) {
    case 'sign-auto':
      return {
        signDisplay: 'auto'
      };

    case 'sign-accounting':
    case '()':
      return {
        currencySign: 'accounting'
      };

    case 'sign-always':
    case '+!':
      return {
        signDisplay: 'always'
      };

    case 'sign-accounting-always':
    case '()!':
      return {
        signDisplay: 'always',
        currencySign: 'accounting'
      };

    case 'sign-except-zero':
    case '+?':
      return {
        signDisplay: 'exceptZero'
      };

    case 'sign-accounting-except-zero':
    case '()?':
      return {
        signDisplay: 'exceptZero',
        currencySign: 'accounting'
      };

    case 'sign-never':
    case '+_':
      return {
        signDisplay: 'never'
      };
  }
}

function parseConciseScientificAndEngineeringStem(stem) {
  // Engineering
  var result;

  if (stem[0] === 'E' && stem[1] === 'E') {
    result = {
      notation: 'engineering'
    };
    stem = stem.slice(2);
  } else if (stem[0] === 'E') {
    result = {
      notation: 'scientific'
    };
    stem = stem.slice(1);
  }

  if (result) {
    var signDisplay = stem.slice(0, 2);

    if (signDisplay === '+!') {
      result.signDisplay = 'always';
      stem = stem.slice(2);
    } else if (signDisplay === '+?') {
      result.signDisplay = 'exceptZero';
      stem = stem.slice(2);
    }

    if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
      throw new Error('Malformed concise eng/scientific notation');
    }

    result.minimumIntegerDigits = stem.length;
  }

  return result;
}

function parseNotationOptions(opt) {
  var result = {};
  var signOpts = parseSign(opt);

  if (signOpts) {
    return signOpts;
  }

  return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */


function parseNumberSkeleton(tokens) {
  var result = {};

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    switch (token.stem) {
      case 'percent':
      case '%':
        result.style = 'percent';
        continue;

      case '%x100':
        result.style = 'percent';
        result.scale = 100;
        continue;

      case 'currency':
        result.style = 'currency';
        result.currency = token.options[0];
        continue;

      case 'group-off':
      case ',_':
        result.useGrouping = false;
        continue;

      case 'precision-integer':
      case '.':
        result.maximumFractionDigits = 0;
        continue;

      case 'measure-unit':
      case 'unit':
        result.style = 'unit';
        result.unit = icuUnitToEcma(token.options[0]);
        continue;

      case 'compact-short':
      case 'K':
        result.notation = 'compact';
        result.compactDisplay = 'short';
        continue;

      case 'compact-long':
      case 'KK':
        result.notation = 'compact';
        result.compactDisplay = 'long';
        continue;

      case 'scientific':
        result = __assign$2(__assign$2(__assign$2({}, result), {
          notation: 'scientific'
        }), token.options.reduce(function (all, opt) {
          return __assign$2(__assign$2({}, all), parseNotationOptions(opt));
        }, {}));
        continue;

      case 'engineering':
        result = __assign$2(__assign$2(__assign$2({}, result), {
          notation: 'engineering'
        }), token.options.reduce(function (all, opt) {
          return __assign$2(__assign$2({}, all), parseNotationOptions(opt));
        }, {}));
        continue;

      case 'notation-simple':
        result.notation = 'standard';
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h

      case 'unit-width-narrow':
        result.currencyDisplay = 'narrowSymbol';
        result.unitDisplay = 'narrow';
        continue;

      case 'unit-width-short':
        result.currencyDisplay = 'code';
        result.unitDisplay = 'short';
        continue;

      case 'unit-width-full-name':
        result.currencyDisplay = 'name';
        result.unitDisplay = 'long';
        continue;

      case 'unit-width-iso-code':
        result.currencyDisplay = 'symbol';
        continue;

      case 'scale':
        result.scale = parseFloat(token.options[0]);
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width

      case 'integer-width':
        if (token.options.length > 1) {
          throw new RangeError('integer-width stems only accept a single optional option');
        }

        token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
          if (g1) {
            result.minimumIntegerDigits = g2.length;
          } else if (g3 && g4) {
            throw new Error('We currently do not support maximum integer digits');
          } else if (g5) {
            throw new Error('We currently do not support exact integer digits');
          }

          return '';
        });
        continue;
    } // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width


    if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
      result.minimumIntegerDigits = token.stem.length;
      continue;
    }

    if (FRACTION_PRECISION_REGEX.test(token.stem)) {
      // Precision
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
      // precision-integer case
      if (token.options.length > 1) {
        throw new RangeError('Fraction-precision stems only accept a single optional option');
      }

      token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
        // .000* case (before ICU67 it was .000+)
        if (g2 === '*') {
          result.minimumFractionDigits = g1.length;
        } // .### case
        else if (g3 && g3[0] === '#') {
          result.maximumFractionDigits = g3.length;
        } // .00## case
        else if (g4 && g5) {
          result.minimumFractionDigits = g4.length;
          result.maximumFractionDigits = g4.length + g5.length;
        } else {
          result.minimumFractionDigits = g1.length;
          result.maximumFractionDigits = g1.length;
        }

        return '';
      });
      var opt = token.options[0]; // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display

      if (opt === 'w') {
        result = __assign$2(__assign$2({}, result), {
          trailingZeroDisplay: 'stripIfInteger'
        });
      } else if (opt) {
        result = __assign$2(__assign$2({}, result), parseSignificantPrecision(opt));
      }

      continue;
    } // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision


    if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
      result = __assign$2(__assign$2({}, result), parseSignificantPrecision(token.stem));
      continue;
    }

    var signOpts = parseSign(token.stem);

    if (signOpts) {
      result = __assign$2(__assign$2({}, result), signOpts);
    }

    var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);

    if (conciseScientificAndEngineeringOpts) {
      result = __assign$2(__assign$2({}, result), conciseScientificAndEngineeringOpts);
    }
  }

  return result;
}

var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));

function createLocation(start, end) {
  return {
    start: start,
    end: end
  };
} // #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging


var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger ? Number.isSafeInteger : function (n) {
  return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 0x1fffffffffffff;
}; // IE11 does not support y and u.

var REGEX_SUPPORTS_U_AND_Y = true;

try {
  var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
  /**
   * legacy Edge or Xbox One browser
   * Unicode flag support: supported
   * Pattern_Syntax support: not supported
   * See https://github.com/formatjs/formatjs/issues/2822
   */

  REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
} catch (_) {
  REGEX_SUPPORTS_U_AND_Y = false;
}

var startsWith = hasNativeStartsWith ? // Native
function startsWith(s, search, position) {
  return s.startsWith(search, position);
} : // For IE11
function startsWith(s, search, position) {
  return s.slice(position, position + search.length) === search;
};
var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint : // IE11
function fromCodePoint() {
  var codePoints = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }

  var elements = '';
  var length = codePoints.length;
  var i = 0;
  var code;

  while (length > i) {
    code = codePoints[i++];
    if (code > 0x10ffff) throw RangeError(code + ' is not a valid code point');
    elements += code < 0x10000 ? String.fromCharCode(code) : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00);
  }

  return elements;
};
var fromEntries = // native
hasNativeFromEntries ? Object.fromEntries : // Ponyfill
function fromEntries(entries) {
  var obj = {};

  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a = entries_1[_i],
        k = _a[0],
        v = _a[1];
    obj[k] = v;
  }

  return obj;
};
var codePointAt = hasNativeCodePointAt ? // Native
function codePointAt(s, index) {
  return s.codePointAt(index);
} : // IE 11
function codePointAt(s, index) {
  var size = s.length;

  if (index < 0 || index >= size) {
    return undefined;
  }

  var first = s.charCodeAt(index);
  var second;
  return first < 0xd800 || first > 0xdbff || index + 1 === size || (second = s.charCodeAt(index + 1)) < 0xdc00 || second > 0xdfff ? first : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
};
var trimStart = hasTrimStart ? // Native
function trimStart(s) {
  return s.trimStart();
} : // Ponyfill
function trimStart(s) {
  return s.replace(SPACE_SEPARATOR_START_REGEX, '');
};
var trimEnd = hasTrimEnd ? // Native
function trimEnd(s) {
  return s.trimEnd();
} : // Ponyfill
function trimEnd(s) {
  return s.replace(SPACE_SEPARATOR_END_REGEX, '');
}; // Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.

function RE(s, flag) {
  return new RegExp(s, flag);
} // #endregion


var matchIdentifierAtIndex;

if (REGEX_SUPPORTS_U_AND_Y) {
  // Native
  var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');

  matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var _a;

    IDENTIFIER_PREFIX_RE_1.lastIndex = index;
    var match = IDENTIFIER_PREFIX_RE_1.exec(s);
    return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
  };
} else {
  // IE11
  matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var match = [];

    while (true) {
      var c = codePointAt(s, index);

      if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
        break;
      }

      match.push(c);
      index += c >= 0x10000 ? 2 : 1;
    }

    return fromCodePoint.apply(void 0, match);
  };
}

var Parser =
/** @class */
function () {
  function Parser(message, options) {
    if (options === void 0) {
      options = {};
    }

    this.message = message;
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    };
    this.ignoreTag = !!options.ignoreTag;
    this.requiresOtherClause = !!options.requiresOtherClause;
    this.shouldParseSkeletons = !!options.shouldParseSkeletons;
  }

  Parser.prototype.parse = function () {
    if (this.offset() !== 0) {
      throw Error('parser can only be used once');
    }

    return this.parseMessage(0, '', false);
  };

  Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
    var elements = [];

    while (!this.isEOF()) {
      var char = this.char();

      if (char === 123
      /* `{` */
      ) {
        var result = this.parseArgument(nestingLevel, expectingCloseTag);

        if (result.err) {
          return result;
        }

        elements.push(result.val);
      } else if (char === 125
      /* `}` */
      && nestingLevel > 0) {
        break;
      } else if (char === 35
      /* `#` */
      && (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
        var position = this.clonePosition();
        this.bump();
        elements.push({
          type: TYPE.pound,
          location: createLocation(position, this.clonePosition())
        });
      } else if (char === 60
      /* `<` */
      && !this.ignoreTag && this.peek() === 47 // char code for '/'
      ) {
        if (expectingCloseTag) {
          break;
        } else {
          return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
        }
      } else if (char === 60
      /* `<` */
      && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
        var result = this.parseTag(nestingLevel, parentArgType);

        if (result.err) {
          return result;
        }

        elements.push(result.val);
      } else {
        var result = this.parseLiteral(nestingLevel, parentArgType);

        if (result.err) {
          return result;
        }

        elements.push(result.val);
      }
    }

    return {
      val: elements,
      err: null
    };
  };
  /**
   * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
   * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
   * are accepted:
   *
   * ```
   * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
   * tagName ::= [a-z] (PENChar)*
   * PENChar ::=
   *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
   *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
   *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
   * ```
   *
   * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
   * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
   * since other tag-based engines like React allow it
   */


  Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
    var startPosition = this.clonePosition();
    this.bump(); // `<`

    var tagName = this.parseTagName();
    this.bumpSpace();

    if (this.bumpIf('/>')) {
      // Self closing tag
      return {
        val: {
          type: TYPE.literal,
          value: "<".concat(tagName, "/>"),
          location: createLocation(startPosition, this.clonePosition())
        },
        err: null
      };
    } else if (this.bumpIf('>')) {
      var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);

      if (childrenResult.err) {
        return childrenResult;
      }

      var children = childrenResult.val; // Expecting a close tag

      var endTagStartPosition = this.clonePosition();

      if (this.bumpIf('</')) {
        if (this.isEOF() || !_isAlpha(this.char())) {
          return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }

        var closingTagNameStartPosition = this.clonePosition();
        var closingTagName = this.parseTagName();

        if (tagName !== closingTagName) {
          return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
        }

        this.bumpSpace();

        if (!this.bumpIf('>')) {
          return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }

        return {
          val: {
            type: TYPE.tag,
            value: tagName,
            children: children,
            location: createLocation(startPosition, this.clonePosition())
          },
          err: null
        };
      } else {
        return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
      }
    } else {
      return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
    }
  };
  /**
   * This method assumes that the caller has peeked ahead for the first tag character.
   */


  Parser.prototype.parseTagName = function () {
    var startOffset = this.offset();
    this.bump(); // the first tag name character

    while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
      this.bump();
    }

    return this.message.slice(startOffset, this.offset());
  };

  Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
    var start = this.clonePosition();
    var value = '';

    while (true) {
      var parseQuoteResult = this.tryParseQuote(parentArgType);

      if (parseQuoteResult) {
        value += parseQuoteResult;
        continue;
      }

      var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);

      if (parseUnquotedResult) {
        value += parseUnquotedResult;
        continue;
      }

      var parseLeftAngleResult = this.tryParseLeftAngleBracket();

      if (parseLeftAngleResult) {
        value += parseLeftAngleResult;
        continue;
      }

      break;
    }

    var location = createLocation(start, this.clonePosition());
    return {
      val: {
        type: TYPE.literal,
        value: value,
        location: location
      },
      err: null
    };
  };

  Parser.prototype.tryParseLeftAngleBracket = function () {
    if (!this.isEOF() && this.char() === 60
    /* `<` */
    && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
    !_isAlphaOrSlash(this.peek() || 0))) {
      this.bump(); // `<`

      return '<';
    }

    return null;
  };
  /**
   * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
   * a character that requires quoting (that is, "only where needed"), and works the same in
   * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
   */


  Parser.prototype.tryParseQuote = function (parentArgType) {
    if (this.isEOF() || this.char() !== 39
    /* `'` */
    ) {
      return null;
    } // Parse escaped char following the apostrophe, or early return if there is no escaped char.
    // Check if is valid escaped character


    switch (this.peek()) {
      case 39
      /* `'` */
      :
        // double quote, should return as a single quote.
        this.bump();
        this.bump();
        return "'";
      // '{', '<', '>', '}'

      case 123:
      case 60:
      case 62:
      case 125:
        break;

      case 35:
        // '#'
        if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
          break;
        }

        return null;

      default:
        return null;
    }

    this.bump(); // apostrophe

    var codePoints = [this.char()]; // escaped char

    this.bump(); // read chars until the optional closing apostrophe is found

    while (!this.isEOF()) {
      var ch = this.char();

      if (ch === 39
      /* `'` */
      ) {
        if (this.peek() === 39
        /* `'` */
        ) {
          codePoints.push(39); // Bump one more time because we need to skip 2 characters.

          this.bump();
        } else {
          // Optional closing apostrophe.
          this.bump();
          break;
        }
      } else {
        codePoints.push(ch);
      }

      this.bump();
    }

    return fromCodePoint.apply(void 0, codePoints);
  };

  Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
    if (this.isEOF()) {
      return null;
    }

    var ch = this.char();

    if (ch === 60
    /* `<` */
    || ch === 123
    /* `{` */
    || ch === 35
    /* `#` */
    && (parentArgType === 'plural' || parentArgType === 'selectordinal') || ch === 125
    /* `}` */
    && nestingLevel > 0) {
      return null;
    } else {
      this.bump();
      return fromCodePoint(ch);
    }
  };

  Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
    var openingBracePosition = this.clonePosition();
    this.bump(); // `{`

    this.bumpSpace();

    if (this.isEOF()) {
      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }

    if (this.char() === 125
    /* `}` */
    ) {
      this.bump();
      return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    } // argument name


    var value = this.parseIdentifierIfPossible().value;

    if (!value) {
      return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }

    this.bumpSpace();

    if (this.isEOF()) {
      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }

    switch (this.char()) {
      // Simple argument: `{name}`
      case 125
      /* `}` */
      :
        {
          this.bump(); // `}`

          return {
            val: {
              type: TYPE.argument,
              // value does not include the opening and closing braces.
              value: value,
              location: createLocation(openingBracePosition, this.clonePosition())
            },
            err: null
          };
        }
      // Argument with options: `{name, format, ...}`

      case 44
      /* `,` */
      :
        {
          this.bump(); // `,`

          this.bumpSpace();

          if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }

          return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
        }

      default:
        return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
  };
  /**
   * Advance the parser until the end of the identifier, if it is currently on
   * an identifier character. Return an empty string otherwise.
   */


  Parser.prototype.parseIdentifierIfPossible = function () {
    var startingPosition = this.clonePosition();
    var startOffset = this.offset();
    var value = matchIdentifierAtIndex(this.message, startOffset);
    var endOffset = startOffset + value.length;
    this.bumpTo(endOffset);
    var endPosition = this.clonePosition();
    var location = createLocation(startingPosition, endPosition);
    return {
      value: value,
      location: location
    };
  };

  Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
    var _a; // Parse this range:
    // {name, type, style}
    //        ^---^


    var typeStartPosition = this.clonePosition();
    var argType = this.parseIdentifierIfPossible().value;
    var typeEndPosition = this.clonePosition();

    switch (argType) {
      case '':
        // Expecting a style string number, date, time, plural, selectordinal, or select.
        return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));

      case 'number':
      case 'date':
      case 'time':
        {
          // Parse this range:
          // {name, number, style}
          //              ^-------^
          this.bumpSpace();
          var styleAndLocation = null;

          if (this.bumpIf(',')) {
            this.bumpSpace();
            var styleStartPosition = this.clonePosition();
            var result = this.parseSimpleArgStyleIfPossible();

            if (result.err) {
              return result;
            }

            var style = trimEnd(result.val);

            if (style.length === 0) {
              return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
            }

            var styleLocation = createLocation(styleStartPosition, this.clonePosition());
            styleAndLocation = {
              style: style,
              styleLocation: styleLocation
            };
          }

          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);

          if (argCloseResult.err) {
            return argCloseResult;
          }

          var location_1 = createLocation(openingBracePosition, this.clonePosition()); // Extract style or skeleton

          if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
            // Skeleton starts with `::`.
            var skeleton = trimStart(styleAndLocation.style.slice(2));

            if (argType === 'number') {
              var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);

              if (result.err) {
                return result;
              }

              return {
                val: {
                  type: TYPE.number,
                  value: value,
                  location: location_1,
                  style: result.val
                },
                err: null
              };
            } else {
              if (skeleton.length === 0) {
                return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
              }

              var style = {
                type: SKELETON_TYPE.dateTime,
                pattern: skeleton,
                location: styleAndLocation.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(skeleton) : {}
              };
              var type = argType === 'date' ? TYPE.date : TYPE.time;
              return {
                val: {
                  type: type,
                  value: value,
                  location: location_1,
                  style: style
                },
                err: null
              };
            }
          } // Regular style or no style.


          return {
            val: {
              type: argType === 'number' ? TYPE.number : argType === 'date' ? TYPE.date : TYPE.time,
              value: value,
              location: location_1,
              style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null
            },
            err: null
          };
        }

      case 'plural':
      case 'selectordinal':
      case 'select':
        {
          // Parse this range:
          // {name, plural, options}
          //              ^---------^
          var typeEndPosition_1 = this.clonePosition();
          this.bumpSpace();

          if (!this.bumpIf(',')) {
            return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign$2({}, typeEndPosition_1)));
          }

          this.bumpSpace(); // Parse offset:
          // {name, plural, offset:1, options}
          //                ^-----^
          //
          // or the first option:
          //
          // {name, plural, one {...} other {...}}
          //                ^--^

          var identifierAndLocation = this.parseIdentifierIfPossible();
          var pluralOffset = 0;

          if (argType !== 'select' && identifierAndLocation.value === 'offset') {
            if (!this.bumpIf(':')) {
              return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
            }

            this.bumpSpace();
            var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);

            if (result.err) {
              return result;
            } // Parse another identifier for option parsing


            this.bumpSpace();
            identifierAndLocation = this.parseIdentifierIfPossible();
            pluralOffset = result.val;
          }

          var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);

          if (optionsResult.err) {
            return optionsResult;
          }

          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);

          if (argCloseResult.err) {
            return argCloseResult;
          }

          var location_2 = createLocation(openingBracePosition, this.clonePosition());

          if (argType === 'select') {
            return {
              val: {
                type: TYPE.select,
                value: value,
                options: fromEntries(optionsResult.val),
                location: location_2
              },
              err: null
            };
          } else {
            return {
              val: {
                type: TYPE.plural,
                value: value,
                options: fromEntries(optionsResult.val),
                offset: pluralOffset,
                pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                location: location_2
              },
              err: null
            };
          }
        }

      default:
        return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
    }
  };

  Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
    // Parse: {value, number, ::currency/GBP }
    //
    if (this.isEOF() || this.char() !== 125
    /* `}` */
    ) {
      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }

    this.bump(); // `}`

    return {
      val: true,
      err: null
    };
  };
  /**
   * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
   */


  Parser.prototype.parseSimpleArgStyleIfPossible = function () {
    var nestedBraces = 0;
    var startPosition = this.clonePosition();

    while (!this.isEOF()) {
      var ch = this.char();

      switch (ch) {
        case 39
        /* `'` */
        :
          {
            // Treat apostrophe as quoting but include it in the style part.
            // Find the end of the quoted literal text.
            this.bump();
            var apostrophePosition = this.clonePosition();

            if (!this.bumpUntil("'")) {
              return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
            }

            this.bump();
            break;
          }

        case 123
        /* `{` */
        :
          {
            nestedBraces += 1;
            this.bump();
            break;
          }

        case 125
        /* `}` */
        :
          {
            if (nestedBraces > 0) {
              nestedBraces -= 1;
            } else {
              return {
                val: this.message.slice(startPosition.offset, this.offset()),
                err: null
              };
            }

            break;
          }

        default:
          this.bump();
          break;
      }
    }

    return {
      val: this.message.slice(startPosition.offset, this.offset()),
      err: null
    };
  };

  Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
    var tokens = [];

    try {
      tokens = parseNumberSkeletonFromString(skeleton);
    } catch (e) {
      return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
    }

    return {
      val: {
        type: SKELETON_TYPE.number,
        tokens: tokens,
        location: location,
        parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
      },
      err: null
    };
  };
  /**
   * @param nesting_level The current nesting level of messages.
   *     This can be positive when parsing message fragment in select or plural argument options.
   * @param parent_arg_type The parent argument's type.
   * @param parsed_first_identifier If provided, this is the first identifier-like selector of
   *     the argument. It is a by-product of a previous parsing attempt.
   * @param expecting_close_tag If true, this message is directly or indirectly nested inside
   *     between a pair of opening and closing tags. The nested message will not parse beyond
   *     the closing tag boundary.
   */


  Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
    var _a;

    var hasOtherClause = false;
    var options = [];
    var parsedSelectors = new Set();
    var selector = parsedFirstIdentifier.value,
        selectorLocation = parsedFirstIdentifier.location; // Parse:
    // one {one apple}
    // ^--^

    while (true) {
      if (selector.length === 0) {
        var startPosition = this.clonePosition();

        if (parentArgType !== 'select' && this.bumpIf('=')) {
          // Try parse `={number}` selector
          var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);

          if (result.err) {
            return result;
          }

          selectorLocation = createLocation(startPosition, this.clonePosition());
          selector = this.message.slice(startPosition.offset, this.offset());
        } else {
          break;
        }
      } // Duplicate selector clauses


      if (parsedSelectors.has(selector)) {
        return this.error(parentArgType === 'select' ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
      }

      if (selector === 'other') {
        hasOtherClause = true;
      } // Parse:
      // one {one apple}
      //     ^----------^


      this.bumpSpace();
      var openingBracePosition = this.clonePosition();

      if (!this.bumpIf('{')) {
        return this.error(parentArgType === 'select' ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
      }

      var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);

      if (fragmentResult.err) {
        return fragmentResult;
      }

      var argCloseResult = this.tryParseArgumentClose(openingBracePosition);

      if (argCloseResult.err) {
        return argCloseResult;
      }

      options.push([selector, {
        value: fragmentResult.val,
        location: createLocation(openingBracePosition, this.clonePosition())
      }]); // Keep track of the existing selectors

      parsedSelectors.add(selector); // Prep next selector clause.

      this.bumpSpace();
      _a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location;
    }

    if (options.length === 0) {
      return this.error(parentArgType === 'select' ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
    }

    if (this.requiresOtherClause && !hasOtherClause) {
      return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
    }

    return {
      val: options,
      err: null
    };
  };

  Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
    var sign = 1;
    var startingPosition = this.clonePosition();

    if (this.bumpIf('+')) ; else if (this.bumpIf('-')) {
      sign = -1;
    }

    var hasDigits = false;
    var decimal = 0;

    while (!this.isEOF()) {
      var ch = this.char();

      if (ch >= 48
      /* `0` */
      && ch <= 57
      /* `9` */
      ) {
        hasDigits = true;
        decimal = decimal * 10 + (ch - 48);
        this.bump();
      } else {
        break;
      }
    }

    var location = createLocation(startingPosition, this.clonePosition());

    if (!hasDigits) {
      return this.error(expectNumberError, location);
    }

    decimal *= sign;

    if (!isSafeInteger(decimal)) {
      return this.error(invalidNumberError, location);
    }

    return {
      val: decimal,
      err: null
    };
  };

  Parser.prototype.offset = function () {
    return this.position.offset;
  };

  Parser.prototype.isEOF = function () {
    return this.offset() === this.message.length;
  };

  Parser.prototype.clonePosition = function () {
    // This is much faster than `Object.assign` or spread.
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  };
  /**
   * Return the code point at the current position of the parser.
   * Throws if the index is out of bound.
   */


  Parser.prototype.char = function () {
    var offset = this.position.offset;

    if (offset >= this.message.length) {
      throw Error('out of bound');
    }

    var code = codePointAt(this.message, offset);

    if (code === undefined) {
      throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
    }

    return code;
  };

  Parser.prototype.error = function (kind, location) {
    return {
      val: null,
      err: {
        kind: kind,
        message: this.message,
        location: location
      }
    };
  };
  /** Bump the parser to the next UTF-16 code unit. */


  Parser.prototype.bump = function () {
    if (this.isEOF()) {
      return;
    }

    var code = this.char();

    if (code === 10
    /* '\n' */
    ) {
      this.position.line += 1;
      this.position.column = 1;
      this.position.offset += 1;
    } else {
      this.position.column += 1; // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.

      this.position.offset += code < 0x10000 ? 1 : 2;
    }
  };
  /**
   * If the substring starting at the current position of the parser has
   * the given prefix, then bump the parser to the character immediately
   * following the prefix and return true. Otherwise, don't bump the parser
   * and return false.
   */


  Parser.prototype.bumpIf = function (prefix) {
    if (startsWith(this.message, prefix, this.offset())) {
      for (var i = 0; i < prefix.length; i++) {
        this.bump();
      }

      return true;
    }

    return false;
  };
  /**
   * Bump the parser until the pattern character is found and return `true`.
   * Otherwise bump to the end of the file and return `false`.
   */


  Parser.prototype.bumpUntil = function (pattern) {
    var currentOffset = this.offset();
    var index = this.message.indexOf(pattern, currentOffset);

    if (index >= 0) {
      this.bumpTo(index);
      return true;
    } else {
      this.bumpTo(this.message.length);
      return false;
    }
  };
  /**
   * Bump the parser to the target offset.
   * If target offset is beyond the end of the input, bump the parser to the end of the input.
   */


  Parser.prototype.bumpTo = function (targetOffset) {
    if (this.offset() > targetOffset) {
      throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
    }

    targetOffset = Math.min(targetOffset, this.message.length);

    while (true) {
      var offset = this.offset();

      if (offset === targetOffset) {
        break;
      }

      if (offset > targetOffset) {
        throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
      }

      this.bump();

      if (this.isEOF()) {
        break;
      }
    }
  };
  /** advance the parser through all whitespace to the next non-whitespace code unit. */


  Parser.prototype.bumpSpace = function () {
    while (!this.isEOF() && _isWhiteSpace(this.char())) {
      this.bump();
    }
  };
  /**
   * Peek at the *next* Unicode codepoint in the input without advancing the parser.
   * If the input has been exhausted, then this returns null.
   */


  Parser.prototype.peek = function () {
    if (this.isEOF()) {
      return null;
    }

    var code = this.char();
    var offset = this.offset();
    var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
    return nextCode !== null && nextCode !== void 0 ? nextCode : null;
  };

  return Parser;
}();
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */

function _isAlpha(codepoint) {
  return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}

function _isAlphaOrSlash(codepoint) {
  return _isAlpha(codepoint) || codepoint === 47;
  /* '/' */
}
/** See `parseTag` function docs. */


function _isPotentialElementNameChar(c) {
  return c === 45
  /* '-' */
  || c === 46
  /* '.' */
  || c >= 48 && c <= 57
  /* 0..9 */
  || c === 95
  /* '_' */
  || c >= 97 && c <= 122
  /** a..z */
  || c >= 65 && c <= 90
  /* A..Z */
  || c == 0xb7 || c >= 0xc0 && c <= 0xd6 || c >= 0xd8 && c <= 0xf6 || c >= 0xf8 && c <= 0x37d || c >= 0x37f && c <= 0x1fff || c >= 0x200c && c <= 0x200d || c >= 0x203f && c <= 0x2040 || c >= 0x2070 && c <= 0x218f || c >= 0x2c00 && c <= 0x2fef || c >= 0x3001 && c <= 0xd7ff || c >= 0xf900 && c <= 0xfdcf || c >= 0xfdf0 && c <= 0xfffd || c >= 0x10000 && c <= 0xeffff;
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */


function _isWhiteSpace(c) {
  return c >= 0x0009 && c <= 0x000d || c === 0x0020 || c === 0x0085 || c >= 0x200e && c <= 0x200f || c === 0x2028 || c === 0x2029;
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */


function _isPatternSyntax(c) {
  return c >= 0x0021 && c <= 0x0023 || c === 0x0024 || c >= 0x0025 && c <= 0x0027 || c === 0x0028 || c === 0x0029 || c === 0x002a || c === 0x002b || c === 0x002c || c === 0x002d || c >= 0x002e && c <= 0x002f || c >= 0x003a && c <= 0x003b || c >= 0x003c && c <= 0x003e || c >= 0x003f && c <= 0x0040 || c === 0x005b || c === 0x005c || c === 0x005d || c === 0x005e || c === 0x0060 || c === 0x007b || c === 0x007c || c === 0x007d || c === 0x007e || c === 0x00a1 || c >= 0x00a2 && c <= 0x00a5 || c === 0x00a6 || c === 0x00a7 || c === 0x00a9 || c === 0x00ab || c === 0x00ac || c === 0x00ae || c === 0x00b0 || c === 0x00b1 || c === 0x00b6 || c === 0x00bb || c === 0x00bf || c === 0x00d7 || c === 0x00f7 || c >= 0x2010 && c <= 0x2015 || c >= 0x2016 && c <= 0x2017 || c === 0x2018 || c === 0x2019 || c === 0x201a || c >= 0x201b && c <= 0x201c || c === 0x201d || c === 0x201e || c === 0x201f || c >= 0x2020 && c <= 0x2027 || c >= 0x2030 && c <= 0x2038 || c === 0x2039 || c === 0x203a || c >= 0x203b && c <= 0x203e || c >= 0x2041 && c <= 0x2043 || c === 0x2044 || c === 0x2045 || c === 0x2046 || c >= 0x2047 && c <= 0x2051 || c === 0x2052 || c === 0x2053 || c >= 0x2055 && c <= 0x205e || c >= 0x2190 && c <= 0x2194 || c >= 0x2195 && c <= 0x2199 || c >= 0x219a && c <= 0x219b || c >= 0x219c && c <= 0x219f || c === 0x21a0 || c >= 0x21a1 && c <= 0x21a2 || c === 0x21a3 || c >= 0x21a4 && c <= 0x21a5 || c === 0x21a6 || c >= 0x21a7 && c <= 0x21ad || c === 0x21ae || c >= 0x21af && c <= 0x21cd || c >= 0x21ce && c <= 0x21cf || c >= 0x21d0 && c <= 0x21d1 || c === 0x21d2 || c === 0x21d3 || c === 0x21d4 || c >= 0x21d5 && c <= 0x21f3 || c >= 0x21f4 && c <= 0x22ff || c >= 0x2300 && c <= 0x2307 || c === 0x2308 || c === 0x2309 || c === 0x230a || c === 0x230b || c >= 0x230c && c <= 0x231f || c >= 0x2320 && c <= 0x2321 || c >= 0x2322 && c <= 0x2328 || c === 0x2329 || c === 0x232a || c >= 0x232b && c <= 0x237b || c === 0x237c || c >= 0x237d && c <= 0x239a || c >= 0x239b && c <= 0x23b3 || c >= 0x23b4 && c <= 0x23db || c >= 0x23dc && c <= 0x23e1 || c >= 0x23e2 && c <= 0x2426 || c >= 0x2427 && c <= 0x243f || c >= 0x2440 && c <= 0x244a || c >= 0x244b && c <= 0x245f || c >= 0x2500 && c <= 0x25b6 || c === 0x25b7 || c >= 0x25b8 && c <= 0x25c0 || c === 0x25c1 || c >= 0x25c2 && c <= 0x25f7 || c >= 0x25f8 && c <= 0x25ff || c >= 0x2600 && c <= 0x266e || c === 0x266f || c >= 0x2670 && c <= 0x2767 || c === 0x2768 || c === 0x2769 || c === 0x276a || c === 0x276b || c === 0x276c || c === 0x276d || c === 0x276e || c === 0x276f || c === 0x2770 || c === 0x2771 || c === 0x2772 || c === 0x2773 || c === 0x2774 || c === 0x2775 || c >= 0x2794 && c <= 0x27bf || c >= 0x27c0 && c <= 0x27c4 || c === 0x27c5 || c === 0x27c6 || c >= 0x27c7 && c <= 0x27e5 || c === 0x27e6 || c === 0x27e7 || c === 0x27e8 || c === 0x27e9 || c === 0x27ea || c === 0x27eb || c === 0x27ec || c === 0x27ed || c === 0x27ee || c === 0x27ef || c >= 0x27f0 && c <= 0x27ff || c >= 0x2800 && c <= 0x28ff || c >= 0x2900 && c <= 0x2982 || c === 0x2983 || c === 0x2984 || c === 0x2985 || c === 0x2986 || c === 0x2987 || c === 0x2988 || c === 0x2989 || c === 0x298a || c === 0x298b || c === 0x298c || c === 0x298d || c === 0x298e || c === 0x298f || c === 0x2990 || c === 0x2991 || c === 0x2992 || c === 0x2993 || c === 0x2994 || c === 0x2995 || c === 0x2996 || c === 0x2997 || c === 0x2998 || c >= 0x2999 && c <= 0x29d7 || c === 0x29d8 || c === 0x29d9 || c === 0x29da || c === 0x29db || c >= 0x29dc && c <= 0x29fb || c === 0x29fc || c === 0x29fd || c >= 0x29fe && c <= 0x2aff || c >= 0x2b00 && c <= 0x2b2f || c >= 0x2b30 && c <= 0x2b44 || c >= 0x2b45 && c <= 0x2b46 || c >= 0x2b47 && c <= 0x2b4c || c >= 0x2b4d && c <= 0x2b73 || c >= 0x2b74 && c <= 0x2b75 || c >= 0x2b76 && c <= 0x2b95 || c === 0x2b96 || c >= 0x2b97 && c <= 0x2bff || c >= 0x2e00 && c <= 0x2e01 || c === 0x2e02 || c === 0x2e03 || c === 0x2e04 || c === 0x2e05 || c >= 0x2e06 && c <= 0x2e08 || c === 0x2e09 || c === 0x2e0a || c === 0x2e0b || c === 0x2e0c || c === 0x2e0d || c >= 0x2e0e && c <= 0x2e16 || c === 0x2e17 || c >= 0x2e18 && c <= 0x2e19 || c === 0x2e1a || c === 0x2e1b || c === 0x2e1c || c === 0x2e1d || c >= 0x2e1e && c <= 0x2e1f || c === 0x2e20 || c === 0x2e21 || c === 0x2e22 || c === 0x2e23 || c === 0x2e24 || c === 0x2e25 || c === 0x2e26 || c === 0x2e27 || c === 0x2e28 || c === 0x2e29 || c >= 0x2e2a && c <= 0x2e2e || c === 0x2e2f || c >= 0x2e30 && c <= 0x2e39 || c >= 0x2e3a && c <= 0x2e3b || c >= 0x2e3c && c <= 0x2e3f || c === 0x2e40 || c === 0x2e41 || c === 0x2e42 || c >= 0x2e43 && c <= 0x2e4f || c >= 0x2e50 && c <= 0x2e51 || c === 0x2e52 || c >= 0x2e53 && c <= 0x2e7f || c >= 0x3001 && c <= 0x3003 || c === 0x3008 || c === 0x3009 || c === 0x300a || c === 0x300b || c === 0x300c || c === 0x300d || c === 0x300e || c === 0x300f || c === 0x3010 || c === 0x3011 || c >= 0x3012 && c <= 0x3013 || c === 0x3014 || c === 0x3015 || c === 0x3016 || c === 0x3017 || c === 0x3018 || c === 0x3019 || c === 0x301a || c === 0x301b || c === 0x301c || c === 0x301d || c >= 0x301e && c <= 0x301f || c === 0x3020 || c === 0x3030 || c === 0xfd3e || c === 0xfd3f || c >= 0xfe45 && c <= 0xfe46;
}

function pruneLocation(els) {
  els.forEach(function (el) {
    delete el.location;

    if (isSelectElement(el) || isPluralElement(el)) {
      for (var k in el.options) {
        delete el.options[k].location;
        pruneLocation(el.options[k].value);
      }
    } else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
      delete el.style.location;
    } else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) {
      delete el.style.location;
    } else if (isTagElement(el)) {
      pruneLocation(el.children);
    }
  });
}

function parse$1(message, opts) {
  if (opts === void 0) {
    opts = {};
  }

  opts = __assign$2({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, opts);
  var result = new Parser(message, opts).parse();

  if (result.err) {
    var error = SyntaxError(ErrorKind[result.err.kind]); // @ts-expect-error Assign to error object

    error.location = result.err.location; // @ts-expect-error Assign to error object

    error.originalMessage = result.err.message;
    throw error;
  }

  if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
    pruneLocation(result.val);
  }

  return result.val;
}

//
// Main
//
function memoize(fn, options) {
  var cache = options && options.cache ? options.cache : cacheDefault;
  var serializer = options && options.serializer ? options.serializer : serializerDefault;
  var strategy = options && options.strategy ? options.strategy : strategyDefault;
  return strategy(fn, {
    cache: cache,
    serializer: serializer
  });
} //
// Strategy
//

function isPrimitive(value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);

  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }

  return computedValue;
}

function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);

  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }

  return computedValue;
}

function assemble(fn, context, strategy, cache, serialize) {
  return strategy.bind(context, fn, cache, serialize);
}

function strategyDefault(fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}

function strategyVariadic(fn, options) {
  return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}

function strategyMonadic(fn, options) {
  return assemble(fn, this, monadic, options.cache.create(), options.serializer);
} //
// Serializer
//


var serializerDefault = function () {
  return JSON.stringify(arguments);
}; //
// Cache
//


function ObjectWithoutPrototypeCache() {
  this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key];
};

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};

var cacheDefault = {
  create: function create() {
    // @ts-ignore
    return new ObjectWithoutPrototypeCache();
  }
};
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};

var ErrorCode;

(function (ErrorCode) {
  // When we have a placeholder but no value to format
  ErrorCode["MISSING_VALUE"] = "MISSING_VALUE"; // When value supplied is invalid

  ErrorCode["INVALID_VALUE"] = "INVALID_VALUE"; // When we need specific Intl API but it's not available

  ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));

var FormatError =
/** @class */
function (_super) {
  __extends(FormatError, _super);

  function FormatError(msg, code, originalMessage) {
    var _this = _super.call(this, msg) || this;

    _this.code = code;
    _this.originalMessage = originalMessage;
    return _this;
  }

  FormatError.prototype.toString = function () {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  };

  return FormatError;
}(Error);

var InvalidValueError =
/** @class */
function (_super) {
  __extends(InvalidValueError, _super);

  function InvalidValueError(variableId, value, options, originalMessage) {
    return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }

  return InvalidValueError;
}(FormatError);

var InvalidValueTypeError =
/** @class */
function (_super) {
  __extends(InvalidValueTypeError, _super);

  function InvalidValueTypeError(value, type, originalMessage) {
    return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }

  return InvalidValueTypeError;
}(FormatError);

var MissingValueError =
/** @class */
function (_super) {
  __extends(MissingValueError, _super);

  function MissingValueError(variableId, originalMessage) {
    return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
  }

  return MissingValueError;
}(FormatError);

var PART_TYPE;

(function (PART_TYPE) {
  PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
  PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));

function mergeLiteral(parts) {
  if (parts.length < 2) {
    return parts;
  }

  return parts.reduce(function (all, part) {
    var lastPart = all[all.length - 1];

    if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
      all.push(part);
    } else {
      lastPart.value += part.value;
    }

    return all;
  }, []);
}

function isFormatXMLElementFn(el) {
  return typeof el === 'function';
} // TODO(skeleton): add skeleton support

function formatToParts(els, locales, formatters, formats, values, currentPluralValue, // For debugging
originalMessage) {
  // Hot path for straight simple msg translations
  if (els.length === 1 && isLiteralElement(els[0])) {
    return [{
      type: PART_TYPE.literal,
      value: els[0].value
    }];
  }

  var result = [];

  for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
    var el = els_1[_i]; // Exit early for string parts.

    if (isLiteralElement(el)) {
      result.push({
        type: PART_TYPE.literal,
        value: el.value
      });
      continue;
    } // TODO: should this part be literal type?
    // Replace `#` in plural rules with the actual numeric value.


    if (isPoundElement(el)) {
      if (typeof currentPluralValue === 'number') {
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getNumberFormat(locales).format(currentPluralValue)
        });
      }

      continue;
    }

    var varName = el.value; // Enforce that all required values are provided by the caller.

    if (!(values && varName in values)) {
      throw new MissingValueError(varName, originalMessage);
    }

    var value = values[varName];

    if (isArgumentElement(el)) {
      if (!value || typeof value === 'string' || typeof value === 'number') {
        value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
      }

      result.push({
        type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
        value: value
      });
      continue;
    } // Recursively format plural and select parts' option — which can be a
    // nested pattern structure. The choosing of the option to use is
    // abstracted-by and delegated-to the part helper object.


    if (isDateElement(el)) {
      var style = typeof el.style === 'string' ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : undefined;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }

    if (isTimeElement(el)) {
      var style = typeof el.style === 'string' ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : undefined;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }

    if (isNumberElement(el)) {
      var style = typeof el.style === 'string' ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : undefined;

      if (style && style.scale) {
        value = value * (style.scale || 1);
      }

      result.push({
        type: PART_TYPE.literal,
        value: formatters.getNumberFormat(locales, style).format(value)
      });
      continue;
    }

    if (isTagElement(el)) {
      var children = el.children,
          value_1 = el.value;
      var formatFn = values[value_1];

      if (!isFormatXMLElementFn(formatFn)) {
        throw new InvalidValueTypeError(value_1, 'function', originalMessage);
      }

      var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
      var chunks = formatFn(parts.map(function (p) {
        return p.value;
      }));

      if (!Array.isArray(chunks)) {
        chunks = [chunks];
      }

      result.push.apply(result, chunks.map(function (c) {
        return {
          type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
          value: c
        };
      }));
    }

    if (isSelectElement(el)) {
      var opt = el.options[value] || el.options.other;

      if (!opt) {
        throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
      }

      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
      continue;
    }

    if (isPluralElement(el)) {
      var opt = el.options["=".concat(value)];

      if (!opt) {
        if (!Intl.PluralRules) {
          throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
        }

        var rule = formatters.getPluralRules(locales, {
          type: el.pluralType
        }).select(value - (el.offset || 0));
        opt = el.options[rule] || el.options.other;
      }

      if (!opt) {
        throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
      }

      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
      continue;
    }
  }

  return mergeLiteral(result);
}

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

function mergeConfig(c1, c2) {
  if (!c2) {
    return c1;
  }

  return __assign$2(__assign$2(__assign$2({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function (all, k) {
    all[k] = __assign$2(__assign$2({}, c1[k]), c2[k] || {});
    return all;
  }, {}));
}

function mergeConfigs(defaultConfig, configs) {
  if (!configs) {
    return defaultConfig;
  }

  return Object.keys(defaultConfig).reduce(function (all, k) {
    all[k] = mergeConfig(defaultConfig[k], configs[k]);
    return all;
  }, __assign$2({}, defaultConfig));
}

function createFastMemoizeCache(store) {
  return {
    create: function () {
      return {
        get: function (key) {
          return store[key];
        },
        set: function (key, value) {
          store[key] = value;
        }
      };
    }
  };
}

function createDefaultFormatters(cache) {
  if (cache === void 0) {
    cache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
  }

  return {
    getNumberFormat: memoize(function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.number),
      strategy: strategies.variadic
    }),
    getDateTimeFormat: memoize(function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.dateTime),
      strategy: strategies.variadic
    }),
    getPluralRules: memoize(function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.pluralRules),
      strategy: strategies.variadic
    })
  };
}

var IntlMessageFormat =
/** @class */
function () {
  function IntlMessageFormat(message, locales, overrideFormats, opts) {
    var _this = this;

    if (locales === void 0) {
      locales = IntlMessageFormat.defaultLocale;
    }

    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };

    this.format = function (values) {
      var parts = _this.formatToParts(values); // Hot path for straight simple msg translations


      if (parts.length === 1) {
        return parts[0].value;
      }

      var result = parts.reduce(function (all, part) {
        if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== 'string') {
          all.push(part.value);
        } else {
          all[all.length - 1] += part.value;
        }

        return all;
      }, []);

      if (result.length <= 1) {
        return result[0] || '';
      }

      return result;
    };

    this.formatToParts = function (values) {
      return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
    };

    this.resolvedOptions = function () {
      return {
        locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
      };
    };

    this.getAst = function () {
      return _this.ast;
    };

    if (typeof message === 'string') {
      this.message = message;

      if (!IntlMessageFormat.__parse) {
        throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
      } // Parse string messages into an AST.


      this.ast = IntlMessageFormat.__parse(message, {
        ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag
      });
    } else {
      this.ast = message;
    }

    if (!Array.isArray(this.ast)) {
      throw new TypeError('A message must be provided as a String or AST.');
    } // Creates a new object with the specified `formats` merged with the default
    // formats.


    this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats); // Defined first because it's used to build the format pattern.

    this.locales = locales;
    this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
  }

  Object.defineProperty(IntlMessageFormat, "defaultLocale", {
    get: function () {
      if (!IntlMessageFormat.memoizedDefaultLocale) {
        IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
      }

      return IntlMessageFormat.memoizedDefaultLocale;
    },
    enumerable: false,
    configurable: true
  });
  IntlMessageFormat.memoizedDefaultLocale = null;
  IntlMessageFormat.__parse = parse$1; // Default format options used as the prototype of the `formats` provided to the
  // constructor. These are used when constructing the internal Intl.NumberFormat
  // and Intl.DateTimeFormat instances.

  IntlMessageFormat.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: 'currency'
      },
      percent: {
        style: 'percent'
      }
    },
    date: {
      short: {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
      },
      medium: {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      long: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      },
      full: {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    time: {
      short: {
        hour: 'numeric',
        minute: 'numeric'
      },
      medium: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      },
      long: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      },
      full: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      }
    }
  };
  return IntlMessageFormat;
}();

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var $1Ofoe$intlmessageformat = IntlMessageFormat;

function $parcel$export$3(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $70eee6030fd7c1a1$exports = {};
$parcel$export$3($70eee6030fd7c1a1$exports, "MessageDictionary", () => $70eee6030fd7c1a1$export$64839e615120df17);

class $70eee6030fd7c1a1$export$64839e615120df17 {
  getStringForLocale(key, locale) {
    let strings = this.messages[locale];

    if (!strings) {
      strings = $70eee6030fd7c1a1$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
      this.messages[locale] = strings;
    }

    let string = strings[key];
    if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
    return string;
  }

  constructor(messages, defaultLocale = 'en-US') {
    // Clone messages so we don't modify the original object.
    this.messages = { ...messages
    };
    this.defaultLocale = defaultLocale;
  }

}

function $70eee6030fd7c1a1$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
  // If there is an exact match, use it.
  if (strings[locale]) return strings[locale]; // Attempt to find the closest match by language.
  // For example, if the locale is fr-CA (French Canadian), but there is only
  // an fr-FR (France) set of strings, use that.
  // This could be replaced with Intl.LocaleMatcher once it is supported.
  // https://github.com/tc39/proposal-intl-localematcher

  let language = $70eee6030fd7c1a1$var$getLanguage(locale);

  for (let key in strings) {
    if (key.startsWith(language + '-')) return strings[key];
  } // Nothing close, use english.


  return strings[defaultLocale];
}

function $70eee6030fd7c1a1$var$getLanguage(locale) {
  // @ts-ignore
  if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
  return locale.split('-')[0];
}

var $a96338b8d4eb3cb0$exports = {};
$parcel$export$3($a96338b8d4eb3cb0$exports, "MessageFormatter", () => $a96338b8d4eb3cb0$export$526ebc05ff964723);

class $a96338b8d4eb3cb0$export$526ebc05ff964723 {
  format(key, variables) {
    let message = this.cache[key];

    if (!message) {
      let msg = this.messages.getStringForLocale(key, this.locale);
      if (!msg) throw new Error(`Could not find intl message ${key} in ${this.locale} locale`);
      message = new $1Ofoe$intlmessageformat(msg, this.locale);
      this.cache[key] = message;
    }

    let varCopy;
    if (variables) varCopy = Object.keys(variables).reduce((acc, key) => {
      acc[key] = variables[key] == null ? false : variables[key];
      return acc;
    }, {});
    return message.format(varCopy);
  }

  constructor(locale, messages) {
    this.locale = locale;
    this.messages = messages;
    this.cache = {};
  }

}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

let $fb18d541ea1ad717$var$formatterCache = new Map();

class $fb18d541ea1ad717$export$ad991b66133851cf {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(value) {
    return this.formatter.format(value);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */


  formatToParts(value) {
    return this.formatter.formatToParts(value);
  }
  /** Formats a date range as a string. */


  formatRange(start, end) {
    // @ts-ignore
    if (typeof this.formatter.formatRange === 'function') // @ts-ignore
      return this.formatter.formatRange(start, end);
    if (end < start) throw new RangeError('End date must be >= start date'); // Very basic fallback for old browsers.

    return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
  }
  /** Formats a date range as an array of parts. */


  formatRangeToParts(start, end) {
    // @ts-ignore
    if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
      return this.formatter.formatRangeToParts(start, end);
    if (end < start) throw new RangeError('End date must be >= start date');
    let startParts = this.formatter.formatToParts(start);
    let endParts = this.formatter.formatToParts(end);
    return [...startParts.map(p => ({ ...p,
      source: 'startRange'
    })), {
      type: 'literal',
      value: ' – ',
      source: 'shared'
    }, ...endParts.map(p => ({ ...p,
      source: 'endRange'
    }))];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */


  resolvedOptions() {
    let resolvedOptions = this.formatter.resolvedOptions();

    if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
      if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
      resolvedOptions.hourCycle = this.resolvedHourCycle;
      resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
    }

    return resolvedOptions;
  }

  constructor(locale, options = {}) {
    this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
    this.options = options;
  }

} // There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802


const $fb18d541ea1ad717$var$hour12Preferences = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: 'h11'
  },
  false: {}
};

function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
  // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
  // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
  if (typeof options.hour12 === 'boolean' && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
    options = { ...options
    };
    let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
    let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
    options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
    delete options.hour12;
  }

  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');
  if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.DateTimeFormat(locale, options);
  $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}

let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;

function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
  if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false
  }).format(new Date(2020, 2, 3, 0)) === '24';
  return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}

let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;

function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
  if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
    hour: 'numeric',
    hour12: false
  }).resolvedOptions().hourCycle === 'h12';
  return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}

function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
  if (!options.timeStyle && !options.hour) return undefined; // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
  // Format the minimum possible hour and maximum possible hour in a day and parse the results.

  locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
  locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
  let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, { ...options,
    timeZone: undefined // use local timezone

  });
  let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find(p => p.type === 'hour').value, 10);
  let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find(p => p.type === 'hour').value, 10);
  if (min === 0 && max === 23) return 'h23';
  if (min === 24 && max === 23) return 'h24';
  if (min === 0 && max === 11) return 'h11';
  if (min === 12 && max === 11) return 'h12';
  throw new Error('Unexpected hour cycle result');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;

try {
  // @ts-ignore
  $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
    signDisplay: 'exceptZero'
  }).resolvedOptions().signDisplay === 'exceptZero'; // eslint-disable-next-line no-empty
} catch (e) {}

let $488c6ddbf4ef74c2$var$supportsUnit = false;

try {
  // @ts-ignore
  $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
    style: 'unit',
    unit: 'degree'
  }).resolvedOptions().style === 'unit'; // eslint-disable-next-line no-empty
} catch (e1) {} // Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.


const $488c6ddbf4ef74c2$var$UNITS = {
  degree: {
    narrow: {
      default: '°',
      'ja-JP': ' 度',
      'zh-TW': '度',
      'sl-SI': ' °'
    }
  }
};

class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(value) {
    let res = '';
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);else res = this.numberFormatter.format(value);

    if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
      var ref;
      let {
        unit: unit,
        unitDisplay = 'short',
        locale: locale
      } = this.resolvedOptions();
      let values = (ref = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || ref === void 0 ? void 0 : ref[unitDisplay];
      res += values[locale] || values.default;
    }

    return res;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */


  formatToParts(value) {
    // TODO: implement signDisplay for formatToParts
    // @ts-ignore
    return this.numberFormatter.formatToParts(value);
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */


  resolvedOptions() {
    let options = this.numberFormatter.resolvedOptions();
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = { ...options,
      signDisplay: this.options.signDisplay
    };
    if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = { ...options,
      style: 'unit',
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    };
    return options;
  }

  constructor(locale, options = {}) {
    this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
    this.options = options;
  }

}

function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
  let {
    numberingSystem: numberingSystem
  } = options;
  if (numberingSystem && locale.indexOf('-u-nu-') === -1) locale = `${locale}-u-nu-${numberingSystem}`;

  if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
    var ref;
    let {
      unit: unit,
      unitDisplay = 'short'
    } = options;
    if (!unit) throw new Error('unit option must be provided with style: "unit"');
    if (!((ref = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || ref === void 0 ? void 0 : ref[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
    options = { ...options,
      style: 'decimal'
    };
  }

  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');
  if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.NumberFormat(locale, options);
  $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}

function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
  if (signDisplay === 'auto') return numberFormat.format(num);else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));else {
    let needsPositiveSign = false;
    if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);else if (signDisplay === 'exceptZero') {
      if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);else needsPositiveSign = num > 0;
    }

    if (needsPositiveSign) {
      let negative = numberFormat.format(-num);
      let noSign = numberFormat.format(num); // ignore RTL/LTR marker character

      let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
      if ([...minus].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
      let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
      return positive;
    } else return numberFormat.format(num);
  }
}

function $parcel$export$2(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $18f2051aff69b9bf$exports = {};
$parcel$export$2($18f2051aff69b9bf$exports, "I18nProvider", () => $18f2051aff69b9bf$export$a54013f0d02a8f82);
$parcel$export$2($18f2051aff69b9bf$exports, "useLocale", () => $18f2051aff69b9bf$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// https://en.wikipedia.org/wiki/Right-to-left

const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']);

function $148a7a147e38ea7f$export$702d680b21cbd764(locale) {
  // If the Intl.Locale API is available, use it to get the script for the locale.
  // This is more accurate than guessing by language, since languages can be written in multiple scripts.
  // @ts-ignore
  if (Intl.Locale) {
    // @ts-ignore
    let script = new Intl.Locale(locale).maximize().script;
    return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(script);
  } // If not, just guess by the language (first part of the locale)


  let lang = locale.split('-')[0];
  return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}

function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
  // @ts-ignore
  let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
  return {
    locale: locale,
    direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
  };
}

let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();

function $1e5a04cdaf7d1af8$var$updateLocale() {
  $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();

  for (let listener of $1e5a04cdaf7d1af8$var$listeners) listener($1e5a04cdaf7d1af8$var$currentLocale);
}

function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
  let isSSR = $9d939cbc98267846$export$535bd6ca7f90a273();
  let [defaultLocale, setDefaultLocale] = React.useState($1e5a04cdaf7d1af8$var$currentLocale);
  React.useEffect(() => {
    if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
    $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
    return () => {
      $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
      if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
    };
  }, []); // We cannot determine the browser's language on the server, so default to
  // en-US. This will be updated after hydration on the client to the correct value.

  if (isSSR) return {
    locale: 'en-US',
    direction: 'ltr'
  };
  return defaultLocale;
}

const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/React__default["default"].createContext(null);

function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
  let {
    locale: locale,
    children: children
  } = props;
  let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
  let value = locale ? {
    locale: locale,
    direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
  } : defaultLocale;
  return /*#__PURE__*/React__default["default"].createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
    value: value
  }, children);
}

function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
  let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
  let context = React.useContext($18f2051aff69b9bf$var$I18nContext);
  return context || defaultLocale;
}

var $321bc95feeb923dd$exports = {};
$parcel$export$2($321bc95feeb923dd$exports, "useMessageFormatter", () => $321bc95feeb923dd$export$ec23bf898b1eed85);
const $321bc95feeb923dd$var$cache = new WeakMap();

function $321bc95feeb923dd$var$getCachedDictionary(strings) {
  let dictionary = $321bc95feeb923dd$var$cache.get(strings);

  if (!dictionary) {
    dictionary = new $70eee6030fd7c1a1$export$64839e615120df17(strings);
    $321bc95feeb923dd$var$cache.set(strings, dictionary);
  }

  return dictionary;
}

function $321bc95feeb923dd$export$ec23bf898b1eed85(strings) {
  let {
    locale: locale
  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let dictionary = React.useMemo(() => $321bc95feeb923dd$var$getCachedDictionary(strings), [strings]);
  let formatter = React.useMemo(() => new $a96338b8d4eb3cb0$export$526ebc05ff964723(locale, dictionary), [locale, dictionary]);
  return React.useCallback((key, variables) => formatter.format(key, variables), [formatter]);
}

var $896ba0a80a8f4d36$exports = {};
$parcel$export$2($896ba0a80a8f4d36$exports, "useDateFormatter", () => $896ba0a80a8f4d36$export$85fd5fdf27bacc79);

function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
  // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
  let lastOptions = React.useRef(null);
  if (options && lastOptions.current && $896ba0a80a8f4d36$var$isEqual(options, lastOptions.current)) options = lastOptions.current;
  lastOptions.current = options;
  let {
    locale: locale
  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  return React.useMemo(() => new $fb18d541ea1ad717$export$ad991b66133851cf(locale, options), [locale, options]);
}

function $896ba0a80a8f4d36$var$isEqual(a, b) {
  if (a === b) return true;
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (let key of aKeys) {
    if (b[key] !== a[key]) return false;
  }

  return true;
}

var $a916eb452884faea$exports = {};
$parcel$export$2($a916eb452884faea$exports, "useNumberFormatter", () => $a916eb452884faea$export$b7a616150fdb9f44);

function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
  let {
    locale: locale
  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  return React.useMemo(() => new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(locale, options), [locale, options]);
}

var $325a3faab7a68acd$exports = {};
$parcel$export$2($325a3faab7a68acd$exports, "useCollator", () => $325a3faab7a68acd$export$a16aca283550c30d);
let $325a3faab7a68acd$var$cache = new Map();

function $325a3faab7a68acd$export$a16aca283550c30d(options) {
  let {
    locale: locale
  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');
  if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
  let formatter = new Intl.Collator(locale, options);
  $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
  return formatter;
}

var $bb77f239b46e8c72$exports = {};
$parcel$export$2($bb77f239b46e8c72$exports, "useFilter", () => $bb77f239b46e8c72$export$3274cf84b703fff);

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
  let collator = $325a3faab7a68acd$export$a16aca283550c30d({
    usage: 'search',
    ...options
  }); // TODO(later): these methods don't currently support the ignorePunctuation option.

  return {
    startsWith(string, substring) {
      if (substring.length === 0) return true; // Normalize both strings so we can slice safely
      // TODO: take into account the ignorePunctuation option as well...

      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      return collator.compare(string.slice(0, substring.length), substring) === 0;
    },

    endsWith(string, substring) {
      if (substring.length === 0) return true;
      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      return collator.compare(string.slice(-substring.length), substring) === 0;
    },

    contains(string, substring) {
      if (substring.length === 0) return true;
      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      let scan = 0;
      let sliceLen = substring.length;

      for (; scan + sliceLen <= string.length; scan++) {
        let slice = string.slice(scan, scan + sliceLen);
        if (collator.compare(substring, slice) === 0) return true;
      }

      return false;
    }

  };
}

function $parcel$export$1(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $0d5c49892c1215da$exports = {};
$parcel$export$1($0d5c49892c1215da$exports, "useRadio", () => $0d5c49892c1215da$export$37b0961d2f4751e2);
const $884aeceb3d67f00f$export$3b7b268d09480394 = new WeakMap();

function $0d5c49892c1215da$export$37b0961d2f4751e2(props, state, ref) {
  let {
    value: value,
    children: children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  } = props;
  const isDisabled = props.isDisabled || state.isDisabled;
  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel) console.warn('If you do not provide children, you must specify an aria-label for accessibility');
  let checked = state.selectedValue === value;

  let onChange = e => {
    e.stopPropagation();
    state.setSelectedValue(value);
  };

  let {
    pressProps: pressProps
  } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: isDisabled
  });
  let {
    focusableProps: focusableProps
  } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c($3ef42575df84b30b$export$9d1611c77c2fe928(props, {
    onFocus: () => state.setLastFocusedValue(value)
  }), ref);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, focusableProps);
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;
  if (isDisabled) tabIndex = undefined;
  return {
    inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, { ...interactions,
      type: 'radio',
      name: $884aeceb3d67f00f$export$3b7b268d09480394.get(state),
      tabIndex: tabIndex,
      disabled: isDisabled,
      checked: checked,
      value: value,
      onChange: onChange
    })
  };
}

var $430f30ed08ec25fa$exports = {};
$parcel$export$1($430f30ed08ec25fa$exports, "useRadioGroup", () => $430f30ed08ec25fa$export$62b9571f283ff5c2);

function $430f30ed08ec25fa$export$62b9571f283ff5c2(props, state) {
  let {
    name: name,
    validationState: validationState,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    isDisabled: isDisabled,
    orientation = 'vertical'
  } = props;
  let {
    direction: direction
  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let {
    labelProps: labelProps,
    fieldProps: fieldProps
  } = $d191a55c9702f145$export$8467354a121f1b9f({ ...props,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: 'span'
  });
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  }); // When the radio group loses focus, reset the focusable radio to null if
  // there is no selection. This allows tabbing into the group from either
  // direction to go to the first or last radio.

  let {
    focusWithinProps: focusWithinProps
  } = $9ab94262bd0047c7$export$420e68273165f4ec({
    onBlurWithin() {
      if (!state.selectedValue) state.setLastFocusedValue(null);
    }

  });

  let onKeyDown = e => {
    let nextDir;

    switch (e.key) {
      case 'ArrowRight':
        if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'prev';else nextDir = 'next';
        break;

      case 'ArrowLeft':
        if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'next';else nextDir = 'prev';
        break;

      case 'ArrowDown':
        nextDir = 'next';
        break;

      case 'ArrowUp':
        nextDir = 'prev';
        break;

      default:
        return;
    }

    e.preventDefault();
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(e.currentTarget, {
      from: e.target
    });
    let nextElem;

    if (nextDir === 'next') {
      nextElem = walker.nextNode();

      if (!nextElem) {
        walker.currentNode = e.currentTarget;
        nextElem = walker.firstChild();
      }
    } else {
      nextElem = walker.previousNode();

      if (!nextElem) {
        walker.currentNode = e.currentTarget;
        nextElem = walker.lastChild();
      }
    }

    if (nextElem) {
      // Call focus on nextElem so that keyboard navigation scrolls the radio into view
      nextElem.focus();
      state.setSelectedValue(nextElem.value);
    }
  };

  let groupName = $bdb11010cef70236$export$f680877a34711e37(name);
  $884aeceb3d67f00f$export$3b7b268d09480394.set(state, groupName);
  return {
    radioGroupProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: 'radiogroup',
      onKeyDown: onKeyDown,
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-readonly': isReadOnly || undefined,
      'aria-required': isRequired || undefined,
      'aria-disabled': isDisabled || undefined,
      'aria-orientation': orientation,
      ...fieldProps,
      ...focusWithinProps
    }),
    labelProps: labelProps
  };
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $5c3e21d68f1c4674$exports = {};
$parcel$export($5c3e21d68f1c4674$exports, "useVisuallyHidden", () => $5c3e21d68f1c4674$export$a966af930f325cab);
$parcel$export($5c3e21d68f1c4674$exports, "VisuallyHidden", () => $5c3e21d68f1c4674$export$439d29a4e110a164);
const $5c3e21d68f1c4674$var$styles = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  margin: '0 -1px -1px 0',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
  whiteSpace: 'nowrap'
};

function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
  let {
    style: style,
    isFocusable: isFocusable
  } = props;
  let [isFocused, setFocused] = React.useState(false);
  let {
    focusProps: focusProps
  } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: !isFocusable,
    onFocusChange: setFocused
  }); // If focused, don't hide the element.

  let combinedStyles = React.useMemo(() => {
    if (isFocused) return style;else if (style) return { ...$5c3e21d68f1c4674$var$styles,
      ...style
    };else return $5c3e21d68f1c4674$var$styles;
  }, [isFocused]);
  return {
    visuallyHiddenProps: { ...focusProps,
      style: combinedStyles
    }
  };
}

function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let {
    children: children,
    elementType: Element = 'div',
    isFocusable: isFocusable,
    style: style,
    ...otherProps
  } = props;
  let {
    visuallyHiddenProps: visuallyHiddenProps
  } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
  return /*#__PURE__*/React__default["default"].createElement(Element, $3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, visuallyHiddenProps), children);
}

const FeedbackButton = /*#__PURE__*/React__default["default"].forwardRef(({
  open,
  setOpen,
  ...props
}, ref) => {
  const combinedProps = {
    variant: "secondary",
    label: "Feedback",
    ...props
  };
  const onClick = React.useCallback(e => {
    e.preventDefault();
    setOpen(!open);
  }, [setOpen]);
  return react.jsx(Button, _extends$1({
    ref: ref,
    onClick: onClick
  }, combinedProps));
});

var getDefaultParent = function (originalTarget) {
  if (typeof document === 'undefined') {
    return null;
  }

  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};

var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var hideOthers = function (originalTarget, parentNode, markerName) {
  if (parentNode === void 0) {
    parentNode = getDefaultParent(originalTarget);
  }

  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }

  var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];

  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }

  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = new Set();

  var keep = function (el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }

    elementsToKeep.add(el);
    keep(el.parentNode);
  };

  targets.forEach(keep);

  var deep = function (parent) {
    if (!parent || targets.indexOf(parent) >= 0) {
      return;
    }

    Array.prototype.forEach.call(parent.children, function (node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        var attr = node.getAttribute('aria-hidden');
        var alreadyHidden = attr !== null && attr !== 'false';
        var counterValue = (counterMap.get(node) || 0) + 1;
        var markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);

        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }

        if (markerValue === 1) {
          node.setAttribute(markerName, 'true');
        }

        if (!alreadyHidden) {
          node.setAttribute('aria-hidden', 'true');
        }
      }
    });
  };

  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function () {
    hiddenNodes.forEach(function (node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);

      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute('aria-hidden');
        }

        uncontrolledNodes.delete(node);
      }

      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;

    if (!lockCount) {
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledNodes = new WeakMap();
      markerMap = {};
    }
  };
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign$1 = function () {
  __assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};
function __rest$1(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function ItoI(a) {
  return a;
}

function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }

  var buffer = [];
  var assigned = false;
  var medium = {
    read: function () {
      if (assigned) {
        throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
      }

      if (buffer.length) {
        return buffer[buffer.length - 1];
      }

      return defaults;
    },
    useMedium: function (data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function () {
        buffer = buffer.filter(function (x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function (cb) {
      assigned = true;

      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }

      buffer = {
        push: function (x) {
          return cb(x);
        },
        filter: function () {
          return buffer;
        }
      };
    },
    assignMedium: function (cb) {
      assigned = true;
      var pendingQueue = [];

      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }

      var executeQueue = function () {
        var cbs = pendingQueue;
        pendingQueue = [];
        cbs.forEach(cb);
      };

      var cycle = function () {
        return Promise.resolve().then(executeQueue);
      };

      cycle();
      buffer = {
        push: function (x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function (filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }

  var medium = innerCreateMedium(null);
  medium.options = __assign({
    async: true,
    ssr: false
  }, options);
  return medium;
}

var SideCar$1 = function (_a) {
  var sideCar = _a.sideCar,
      rest = __rest(_a, ["sideCar"]);

  if (!sideCar) {
    throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  }

  var Target = sideCar.read();

  if (!Target) {
    throw new Error('Sidecar medium not found');
  }

  return React__namespace.createElement(Target, __assign({}, rest));
};

SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$1;
}

var effectCar = createSidecarMedium();

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }

  return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */

function useCallbackRef$1(initialValue, callback) {
  var ref = React.useState(function () {
    return {
      // value
      value: initialValue,
      // last callback
      callback: callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },

        set current(value) {
          var last = ref.value;

          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }

      }
    };
  })[0]; // update callback

  ref.callback = callback;
  return ref.facade;
}

/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */

function useMergeRefs(refs, defaultValue) {
  return useCallbackRef$1(defaultValue, function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue);
    });
  });
}

var nothing = function () {
  return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */


var RemoveScroll = React__namespace.forwardRef(function (props, parentRef) {
  var ref = React__namespace.useRef(null);

  var _a = React__namespace.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }),
      callbacks = _a[0],
      setCallbacks = _a[1];

  var forwardProps = props.forwardProps,
      children = props.children,
      className = props.className,
      removeScrollBar = props.removeScrollBar,
      enabled = props.enabled,
      shards = props.shards,
      sideCar = props.sideCar,
      noIsolation = props.noIsolation,
      inert = props.inert,
      allowPinchZoom = props.allowPinchZoom,
      _b = props.as,
      Container = _b === void 0 ? 'div' : _b,
      rest = __rest$1(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);

  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);

  var containerProps = __assign$1({}, rest, callbacks);

  return React__namespace.createElement(React__namespace.Fragment, null, enabled && React__namespace.createElement(SideCar, {
    sideCar: effectCar,
    removeScrollBar: removeScrollBar,
    shards: shards,
    noIsolation: noIsolation,
    inert: inert,
    setCallbacks: setCallbacks,
    allowPinchZoom: !!allowPinchZoom,
    lockRef: ref
  }), forwardProps ? React__namespace.cloneElement(React__namespace.Children.only(children), __assign$1({}, containerProps, {
    ref: containerRef
  })) : React__namespace.createElement(Container, __assign$1({}, containerProps, {
    className: className,
    ref: containerRef
  }), children));
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

var getNonce = function () {

  if (typeof __webpack_nonce__ !== 'undefined') {
    return __webpack_nonce__;
  }

  return undefined;
};

function makeStyleTag() {
  if (!document) return null;
  var tag = document.createElement('style');
  tag.type = 'text/css';
  var nonce = getNonce();

  if (nonce) {
    tag.setAttribute('nonce', nonce);
  }

  return tag;
}

function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}

function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(tag);
}

var stylesheetSingleton = function () {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function (style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }

      counter++;
    },
    remove: function () {
      counter--;

      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

var styleHookSingleton = function () {
  var sheet = stylesheetSingleton();
  return function (styles) {
    React__namespace.useEffect(function () {
      sheet.add(styles);
      return function () {
        sheet.remove();
      };
    }, []);
  };
};

var styleSingleton = function () {
  var useStyle = styleHookSingleton();

  var Sheet = function (_a) {
    var styles = _a.styles;
    useStyle(styles);
    return null;
  };

  return Sheet;
};

var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};

var parse = function (x) {
  return parseInt(x || '', 10) || 0;
};

var getOffset = function (gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
  var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
  var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
  return [parse(left), parse(top), parse(right)];
};

var getGapWidth = function (gapMode) {
  if (gapMode === void 0) {
    gapMode = 'margin';
  }

  if (typeof window === 'undefined') {
    return zeroGap;
  }

  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

var Style = styleSingleton();

var getStyles = function (_a, allowRelative, gapMode, important) {
  var left = _a.left,
      top = _a.top,
      right = _a.right,
      gap = _a.gap;

  if (gapMode === void 0) {
    gapMode = 'margin';
  }

  return "\n  ." + noScrollbarsClassName + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [allowRelative && "position: relative " + important + ";", gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ", gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";"].filter(Boolean).join('') + "\n  }\n  \n  ." + zeroRightClassName + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + fullWidthClassName + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + zeroRightClassName + " ." + zeroRightClassName + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + fullWidthClassName + " ." + fullWidthClassName + " {\n    margin-right: 0 " + important + ";\n  }\n  \n  body {\n    " + removedBarSizeVariable + ": " + gap + "px;\n  }\n";
};

var RemoveScrollBar = function (props) {
  var _a = React__namespace.useState(getGapWidth(props.gapMode)),
      gap = _a[0],
      setGap = _a[1];

  React__namespace.useEffect(function () {
    setGap(getGapWidth(props.gapMode));
  }, [props.gapMode]);
  var noRelative = props.noRelative,
      noImportant = props.noImportant,
      _b = props.gapMode,
      gapMode = _b === void 0 ? 'margin' : _b;
  return React__namespace.createElement(Style, {
    styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '')
  });
};

var elementCouldBeVScrolled = function (node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowY !== 'hidden' && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
  ;
};

var elementCouldBeHScrolled = function (node) {
  var styles = window.getComputedStyle(node); // we allow horizontal scroll on range elements

  if (node.type === "range") {
    return true;
  }

  return styles.overflowX !== 'hidden' && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
  ;
};

var locationCouldBeScrolled = function (axis, node) {
  var current = node;

  do {
    // Skip over shadow root
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }

    var isScrollable = elementCouldBeScrolled(axis, current);

    if (isScrollable) {
      var _a = getScrollVariables(axis, current),
          s = _a[1],
          d = _a[2];

      if (s > d) {
        return true;
      }
    }

    current = current.parentNode;
  } while (current && current !== document.body);

  return false;
};

var getVScrollVariables = function (_a) {
  var scrollTop = _a.scrollTop,
      scrollHeight = _a.scrollHeight,
      clientHeight = _a.clientHeight;
  return [scrollTop, scrollHeight, clientHeight];
};

var getHScrollVariables = function (_a) {
  var scrollLeft = _a.scrollLeft,
      scrollWidth = _a.scrollWidth,
      clientWidth = _a.clientWidth;
  return [scrollLeft, scrollWidth, clientWidth];
};

var elementCouldBeScrolled = function (axis, node) {
  return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};

var getScrollVariables = function (axis, node) {
  return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};

var getDirectionFactor = function (axis, direction) {
  return (
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    axis === 'h' && direction === 'rtl' ? -1 : 1
  );
};

var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta; // find scrollable target

  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;

  do {
    var _a = getScrollVariables(axis, target),
        position = _a[0],
        scroll_1 = _a[1],
        capacity = _a[2];

    var elementScroll = scroll_1 - capacity - directionFactor * position;

    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }

    target = target.parentNode;
  } while ( // portaled content
  !targetInLock && target !== document.body || // self content
  targetInLock && (endTarget.contains(target) || endTarget === target));

  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }

  return shouldCancelScroll;
};

var passiveSupported = false;

if (typeof window !== 'undefined') {
  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}

var nonPassive = passiveSupported ? {
  passive: false
} : false;

var getTouchXY = function (event) {
  return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) {
  return [event.deltaX, event.deltaY];
};

var extractRef = function (ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var deltaCompare = function (x, y) {
  return x[0] === y[0] && x[1] === y[1];
};

var generateStyle = function (id) {
  return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n";
};

var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React__namespace.useRef([]);
  var touchStartRef = React__namespace.useRef([0, 0]);
  var activeAxis = React__namespace.useRef();
  var id = React__namespace.useState(idCounter++)[0];
  var Style = React__namespace.useState(function () {
    return styleSingleton();
  })[0];
  var lastProps = React__namespace.useRef(props);
  React__namespace.useEffect(function () {
    lastProps.current = props;
  }, [props]);
  React__namespace.useEffect(function () {
    if (props.inert) {
      document.body.classList.add("block-interactivity-" + id);
      var allow_1 = [props.lockRef.current].concat((props.shards || []).map(extractRef)).filter(Boolean);
      allow_1.forEach(function (el) {
        return el.classList.add("allow-interactivity-" + id);
      });
      return function () {
        document.body.classList.remove("block-interactivity-" + id);
        allow_1.forEach(function (el) {
          return el.classList.remove("allow-interactivity-" + id);
        });
      };
    }

    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React__namespace.useCallback(function (event, parent) {
    if ('touches' in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }

    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);

    if (!canBeScrolledInMainDirection) {
      return true;
    }

    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === 'v' ? 'h' : 'v';
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target); // other axis might be not scrollable
    }

    if (!canBeScrolledInMainDirection) {
      return false;
    }

    if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }

    if (!currentAxis) {
      return true;
    }

    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React__namespace.useCallback(function (_event) {
    var event = _event;

    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      // not the last active
      return;
    }

    var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function (e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0]; // self event, and should be canceled

    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    } // outside or shard event


    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function (node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;

      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React__namespace.useCallback(function (name, delta, target, should) {
    var event = {
      name: name,
      delta: delta,
      target: target,
      should: should
    };
    shouldPreventQueue.current.push(event);
    setTimeout(function () {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React__namespace.useCallback(function (event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = undefined;
  }, []);
  var scrollWheel = React__namespace.useCallback(function (event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React__namespace.useCallback(function (event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React__namespace.useEffect(function () {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener('wheel', shouldPrevent, nonPassive);
    document.addEventListener('touchmove', shouldPrevent, nonPassive);
    document.addEventListener('touchstart', scrollTouchStart, nonPassive);
    return function () {
      lockStack = lockStack.filter(function (inst) {
        return inst !== Style;
      });
      document.removeEventListener('wheel', shouldPrevent, nonPassive);
      document.removeEventListener('touchmove', shouldPrevent, nonPassive);
      document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar,
      inert = props.inert;
  return React__namespace.createElement(React__namespace.Fragment, null, inert ? React__namespace.createElement(Style, {
    styles: generateStyle(id)
  }) : null, removeScrollBar ? React__namespace.createElement(RemoveScrollBar, {
    gapMode: "margin"
  }) : null);
}

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = React__namespace.forwardRef(function (props, ref) {
  return React__namespace.createElement(RemoveScroll, __assign$1({}, props, {
    ref: ref,
    sideCar: SideCar
  }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var o$4 = ReactRemoveScroll;

const useLayoutEffect = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? React__namespace.useLayoutEffect : () => {};

const r$3 = React__namespace["useId".toString()] || (() => {});

let n$3 = 0;
function useId(o) {
  const [u, i] = React__namespace.useState(r$3());
  return useLayoutEffect(() => {
    o || i(t => null != t ? t : String(n$3++));
  }, [o]), o || (u ? `radix-${u}` : "");
}

function composeRefs(...o) {
  return e => o.forEach(o => function (o, e) {
    "function" == typeof o ? o(e) : null != o && (o.current = e);
  }(o, e));
}
function useComposedRefs(...e) {
  return React__namespace.useCallback(composeRefs(...e), e);
}

const Slot = /*#__PURE__*/React__namespace.forwardRef((e, o) => {
  const {
    children: a,
    ...s
  } = e;
  return React__namespace.Children.toArray(a).some(l$1) ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, React__namespace.Children.map(a, e => l$1(e) ? /*#__PURE__*/React__namespace.createElement(n$2, _extends({}, s, {
    ref: o
  }), e.props.children) : e)) : /*#__PURE__*/React__namespace.createElement(n$2, _extends({}, s, {
    ref: o
  }), a);
});
Slot.displayName = "Slot";
const n$2 = /*#__PURE__*/React__namespace.forwardRef((r, n) => {
  const {
    children: l,
    ...a
  } = r;
  

  return React__namespace.isValidElement(l) ? /*#__PURE__*/React__namespace.cloneElement(l, { ...o$3(a, l.props),
    ref: composeRefs(n, l.ref)
  }) : React__namespace.Children.count(l) > 1 ? React__namespace.Children.only(null) : null;
});
n$2.displayName = "SlotClone";
const Slottable = ({
  children: e
}) => /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, e);

function l$1(e) {
  
  return React__namespace.isValidElement(e) && e.type === Slottable;
}

function o$3(e, t) {
  const r = { ...t
  };

  for (const n in t) {
    const l = e[n],
          o = t[n];
    /^on[A-Z]/.test(n) ? r[n] = (...e) => {
      null == o || o(...e), null == l || l(...e);
    } : "style" === n ? r[n] = { ...l,
      ...o
    } : "className" === n && (r[n] = [l, o].filter(Boolean).join(" "));
  }

  return { ...e,
    ...r
  };
}

const Primitive = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((o, i) => ({ ...o,
  [i]: /*#__PURE__*/React__namespace.forwardRef((o, m) => {
    const {
      asChild: a,
      ...s
    } = o,
          n = a ? Slot : i;
    return React__namespace.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /*#__PURE__*/React__namespace.createElement(n, _extends({}, s, {
      ref: m
    }));
  })
}), {});

const Presence = u => {
  const {
    present: o,
    children: i
  } = u,
        s = function (n) {
    const [u, o] = React__namespace.useState(),
          i = React__namespace.useRef({}),
          s = React__namespace.useRef(n),
          c = React__namespace.useRef("none"),
          a = n ? "mounted" : "unmounted",
          [d, m] = function (e, n) {
      return React__namespace.useReducer((e, t) => {
        const r = n[e][t];
        return null != r ? r : e;
      }, e);
    }(a, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });

    return React__namespace.useEffect(() => {
      const e = r$2(i.current);
      c.current = "mounted" === d ? e : "none";
    }, [d]), useLayoutEffect(() => {
      const e = i.current,
            t = s.current;

      if (t !== n) {
        const u = c.current,
              o = r$2(e);
        if (n) m("MOUNT");else if ("none" === o || "none" === (null == e ? void 0 : e.display)) m("UNMOUNT");else {
          const e = u !== o;
          m(t && e ? "ANIMATION_OUT" : "UNMOUNT");
        }
        s.current = n;
      }
    }, [n, m]), useLayoutEffect(() => {
      if (u) {
        const e = e => {
          const n = r$2(i.current).includes(e.animationName);
          e.target === u && n && m("ANIMATION_END");
        },
              n = e => {
          e.target === u && (c.current = r$2(i.current));
        };

        return u.addEventListener("animationstart", n), u.addEventListener("animationcancel", e), u.addEventListener("animationend", e), () => {
          u.removeEventListener("animationstart", n), u.removeEventListener("animationcancel", e), u.removeEventListener("animationend", e);
        };
      }

      m("ANIMATION_END");
    }, [u, m]), {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: React__namespace.useCallback(e => {
        e && (i.current = getComputedStyle(e)), o(e);
      }, [])
    };
  }(o),
        c = "function" == typeof i ? i({
    present: s.isPresent
  }) : React__namespace.Children.only(i),
        a = useComposedRefs(s.ref, c.ref);

  return "function" == typeof i || s.isPresent ? /*#__PURE__*/React__namespace.cloneElement(c, {
    ref: a
  }) : null;
};

function r$2(e) {
  return (null == e ? void 0 : e.animationName) || "none";
}

Presence.displayName = "Presence";

let t$3 = 0;
function useFocusGuards() {
  React__namespace.useEffect(() => {
    var e, n;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : o$2()), document.body.insertAdjacentElement("beforeend", null !== (n = r[1]) && void 0 !== n ? n : o$2()), t$3++, () => {
      1 === t$3 && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), t$3--;
    };
  }, []);
}

function o$2() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}

const Portal = /*#__PURE__*/React__namespace.forwardRef((a, i) => {
  var n, d;
  const {
    containerRef: s,
    style: u,
    ...c
  } = a,
        m = null !== (n = null == s ? void 0 : s.current) && void 0 !== n ? n : null === globalThis || void 0 === globalThis || null === (d = globalThis.document) || void 0 === d ? void 0 : d.body,
        [, f] = React__namespace.useState({});
  return useLayoutEffect(() => {
    f({});
  }, []), m ? /*#__PURE__*/e__default["default"].createPortal( /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends({
    "data-radix-portal": ""
  }, c, {
    ref: i,
    style: m === document.body ? {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2147483647,
      ...u
    } : void 0
  })), m) : null;
});

function useCallbackRef(r) {
  const t = React__namespace.useRef(r);
  return React__namespace.useEffect(() => {
    t.current = r;
  }), React__namespace.useMemo(() => (...e) => {
    var r;
    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
  }, []);
}

const c$3 = {
  bubbles: !1,
  cancelable: !0
};
const FocusScope = /*#__PURE__*/React__namespace.forwardRef((i, f) => {
  const {
    loop: l = !1,
    trapped: m = !1,
    onMountAutoFocus: p,
    onUnmountAutoFocus: v,
    ...E
  } = i,
        [F, S] = React__namespace.useState(null),
        b = useCallbackRef(p),
        T = useCallbackRef(v),
        y = React__namespace.useRef(null),
        L = useComposedRefs(f, e => S(e)),
        h = React__namespace.useRef({
    paused: !1,

    pause() {
      this.paused = !0;
    },

    resume() {
      this.paused = !1;
    }

  }).current;
  React__namespace.useEffect(() => {
    if (m) {
      function e(e) {
        if (h.paused || !F) return;
        const t = e.target;
        F.contains(t) ? y.current = t : a$1(y.current, {
          select: !0
        });
      }

      function t(e) {
        !h.paused && F && (F.contains(e.relatedTarget) || a$1(y.current, {
          select: !0
        }));
      }

      return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
        document.removeEventListener("focusin", e), document.removeEventListener("focusout", t);
      };
    }
  }, [m, F, h.paused]), React__namespace.useEffect(() => {
    if (F) {
      d$2.add(h);
      const t = document.activeElement;

      if (!F.contains(t)) {
        const n = new Event("focusScope.autoFocusOnMount", c$3);
        F.addEventListener("focusScope.autoFocusOnMount", b), F.dispatchEvent(n), n.defaultPrevented || (!function (e, {
          select: t = !1
        } = {}) {
          const n = document.activeElement;

          for (const o of e) if (a$1(o, {
            select: t
          }), document.activeElement !== n) return;
        }((e = r$1(F), e.filter(e => "A" !== e.tagName)), {
          select: !0
        }), document.activeElement === t && a$1(F));
      }

      return () => {
        F.removeEventListener("focusScope.autoFocusOnMount", b), setTimeout(() => {
          const e = new Event("focusScope.autoFocusOnUnmount", c$3);
          F.addEventListener("focusScope.autoFocusOnUnmount", T), F.dispatchEvent(e), e.defaultPrevented || a$1(null != t ? t : document.body, {
            select: !0
          }), F.removeEventListener("focusScope.autoFocusOnUnmount", T), d$2.remove(h);
        }, 0);
      };
    }

    var e;
  }, [F, b, T, h]);
  const N = React__namespace.useCallback(e => {
    if (!l && !m) return;
    if (h.paused) return;
    const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          n = document.activeElement;

    if (t && n) {
      const t = e.currentTarget,
            [o, u] = function (e) {
        const t = r$1(e),
              n = s$1(t, e),
              o = s$1(t.reverse(), e);
        return [n, o];
      }(t);

      o && u ? e.shiftKey || n !== u ? e.shiftKey && n === o && (e.preventDefault(), l && a$1(u, {
        select: !0
      })) : (e.preventDefault(), l && a$1(o, {
        select: !0
      })) : n === t && e.preventDefault();
    }
  }, [l, m, h.paused]);
  

  return React__namespace.createElement(Primitive.div, _extends({
    tabIndex: -1
  }, E, {
    ref: L,
    onKeyDown: N
  }));
});


function r$1(e) {
  const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: e => {
      const t = "INPUT" === e.tagName && "hidden" === e.type;
      return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });

  for (; n.nextNode();) t.push(n.currentNode);

  return t;
}

function s$1(e, t) {
  for (const n of e) if (!i$1(n, {
    upTo: t
  })) return n;
}

function i$1(e, {
  upTo: t
}) {
  if ("hidden" === getComputedStyle(e).visibility) return !0;

  for (; e;) {
    if (void 0 !== t && e === t) return !1;
    if ("none" === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }

  return !1;
}

function a$1(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && function (e) {
      return e instanceof HTMLInputElement && "select" in e;
    }(e) && t && e.select();
  }
}

const d$2 = function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (null == n || n.pause()), e = f$1(e, t), e.unshift(t);
    },

    remove(t) {
      var n;
      e = f$1(e, t), null === (n = e[0]) || void 0 === n || n.resume();
    }

  };
}();

function f$1(e, t) {
  const n = [...e],
        o = n.indexOf(t);
  return -1 !== o && n.splice(o, 1), n;
}

function useEscapeKeydown(n) {
  const o = useCallbackRef(n);
  React__namespace.useEffect(() => {
    const e = e => {
      "Escape" === e.key && o(e);
    };

    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
  }, [o]);
}

let n$1,
    o$1 = 0;
function useBodyPointerEvents({
  disabled: r
}) {
  const i = React__namespace.useRef(!1);
  useLayoutEffect(() => {
    if (r) {
      function e() {
        o$1--, 0 === o$1 && (document.body.style.pointerEvents = n$1);
      }

      function t(e) {
        i.current = "mouse" !== e.pointerType;
      }

      return 0 === o$1 && (n$1 = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o$1++, document.addEventListener("pointerup", t), () => {
        i.current ? document.addEventListener("click", e, {
          once: !0
        }) : e(), document.removeEventListener("pointerup", t);
      };
    }
  }, [r]);
}

function composeEventHandlers(e, n, {
  checkForDefaultPrevented: t = !0
} = {}) {
  return function (r) {
    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
  };
}

const u$1 = /*#__PURE__*/React__namespace.createContext({
  layers: new Set(),
  layersWithOutsidePointerEventsDisabled: new Set(),
  branches: new Set()
});
const DismissableLayer = /*#__PURE__*/React__namespace.forwardRef((l, m) => {
  const {
    disableOutsidePointerEvents: f = !1,
    onEscapeKeyDown: p,
    onPointerDownOutside: v,
    onFocusOutside: b,
    onInteractOutside: E,
    onDismiss: y,
    ...w
  } = l,
        h = React__namespace.useContext(u$1),
        [D, x] = React__namespace.useState(null),
        [, C] = React__namespace.useState({}),
        L = useComposedRefs(m, e => x(e)),
        P = Array.from(h.layers),
        [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
        g = P.indexOf(O),
        B = D ? P.indexOf(D) : -1,
        R = h.layersWithOutsidePointerEventsDisabled.size > 0,
        F = B >= g,
        S = function (e) {
    const n = useCallbackRef(e),
          r = React__namespace.useRef(!1);
    return React__namespace.useEffect(() => {
      const e = e => {
        if (e.target && !r.current) {
          d$1("dismissableLayer.pointerDownOutside", n, {
            originalEvent: e
          });
        }

        r.current = !1;
      },
            t = window.setTimeout(() => {
        document.addEventListener("pointerdown", e);
      }, 0);

      return () => {
        window.clearTimeout(t), document.removeEventListener("pointerdown", e);
      };
    }, [n]), {
      onPointerDownCapture: () => r.current = !0
    };
  }(e => {
    const t = e.target,
          n = [...h.branches].some(e => e.contains(t));
    F && !n && (null == v || v(e), null == E || E(e), e.defaultPrevented || null == y || y());
  }),
        W = function (e) {
    const n = useCallbackRef(e),
          r = React__namespace.useRef(!1);
    return React__namespace.useEffect(() => {
      const e = e => {
        if (e.target && !r.current) {
          d$1("dismissableLayer.focusOutside", n, {
            originalEvent: e
          });
        }
      };

      return document.addEventListener("focusin", e), () => document.removeEventListener("focusin", e);
    }, [n]), {
      onFocusCapture: () => r.current = !0,
      onBlurCapture: () => r.current = !1
    };
  }(e => {
    const t = e.target;
    [...h.branches].some(e => e.contains(t)) || (null == b || b(e), null == E || E(e), e.defaultPrevented || null == y || y());
  });

  return useEscapeKeydown(e => {
    B === h.layers.size - 1 && (null == p || p(e), e.defaultPrevented || null == y || y());
  }), useBodyPointerEvents({
    disabled: f
  }), React__namespace.useEffect(() => {
    D && (f && h.layersWithOutsidePointerEventsDisabled.add(D), h.layers.add(D), c$2());
  }, [D, f, h]), React__namespace.useEffect(() => () => {
    D && (h.layers.delete(D), h.layersWithOutsidePointerEventsDisabled.delete(D), c$2());
  }, [D, h]), React__namespace.useEffect(() => {
    const e = () => C({});

    return document.addEventListener("dismissableLayer.update", e), () => document.removeEventListener("dismissableLayer.update", e);
  }, []), /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends({}, w, {
    ref: L,
    style: {
      pointerEvents: R ? F ? "auto" : "none" : void 0,
      ...l.style
    },
    onFocusCapture: composeEventHandlers(l.onFocusCapture, W.onFocusCapture),
    onBlurCapture: composeEventHandlers(l.onBlurCapture, W.onBlurCapture),
    onPointerDownCapture: composeEventHandlers(l.onPointerDownCapture, S.onPointerDownCapture)
  }));
});


function c$2() {
  const e = new Event("dismissableLayer.update");
  document.dispatchEvent(e);
}

function d$1(e, t, n) {
  const r = n.originalEvent.target,
        s = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  return t && r.addEventListener(e, t, {
    once: !0
  }), !r.dispatchEvent(s);
}

function useSize(r) {
  const [i, t] = React__namespace.useState(void 0);
  return React__namespace.useEffect(() => {
    if (r) {
      const e = new ResizeObserver(e => {
        if (!Array.isArray(e)) return;
        if (!e.length) return;
        const i = e[0];
        let o, n;

        if ("borderBoxSize" in i) {
          const e = i.borderBoxSize,
                r = Array.isArray(e) ? e[0] : e;
          o = r.inlineSize, n = r.blockSize;
        } else {
          const e = r.getBoundingClientRect();
          o = e.width, n = e.height;
        }

        t({
          width: o,
          height: n
        });
      });
      return e.observe(r, {
        box: "border-box"
      }), () => e.unobserve(r);
    }

    t(void 0);
  }, [r]), i;
}

function observeElementRect(n, o) {
  const i = e$1.get(n);
  return void 0 === i ? (e$1.set(n, {
    rect: {},
    callbacks: [o]
  }), 1 === e$1.size && (t$2 = requestAnimationFrame(c$1))) : (i.callbacks.push(o), o(n.getBoundingClientRect())), () => {
    const c = e$1.get(n);
    if (void 0 === c) return;
    const i = c.callbacks.indexOf(o);
    i > -1 && c.callbacks.splice(i, 1), 0 === c.callbacks.length && (e$1.delete(n), 0 === e$1.size && cancelAnimationFrame(t$2));
  };
}
let t$2;
const e$1 = new Map();

function c$1() {
  const n = [];
  e$1.forEach((t, e) => {
    const c = e.getBoundingClientRect();
    var o, i;
    o = t.rect, i = c, (o.width !== i.width || o.height !== i.height || o.top !== i.top || o.right !== i.right || o.bottom !== i.bottom || o.left !== i.left) && (t.rect = c, n.push(t));
  }), n.forEach(t => {
    t.callbacks.forEach(e => e(t.rect));
  }), t$2 = requestAnimationFrame(c$1);
}

function useRect(e) {
  const [o, c] = React__namespace.useState();
  return React__namespace.useEffect(() => {
    if (e) {
      const r = observeElementRect(e, c);
      return () => {
        c(void 0), r();
      };
    }
  }, [e]), o;
}

function createContextScope(n, o = []) {
  let r = [];

  const c = () => {
    const t = r.map(t => /*#__PURE__*/React__namespace.createContext(t));
    return function (o) {
      const r = (null == o ? void 0 : o[n]) || t;
      return React__namespace.useMemo(() => ({
        [`__scope${n}`]: { ...o,
          [n]: r
        }
      }), [o, r]);
    };
  };

  return c.scopeName = n, [function (t, o) {
    const c = /*#__PURE__*/React__namespace.createContext(o),
          u = r.length;

    function s(t) {
      const {
        scope: o,
        children: r,
        ...s
      } = t,
            i = (null == o ? void 0 : o[n][u]) || c,
            a = React__namespace.useMemo(() => s, Object.values(s));
      

      return React__namespace.createElement(i.Provider, {
        value: a
      }, r);
    }

    return r = [...r, o], s.displayName = t + "Provider", [s, function (r, s) {
      const i = (null == s ? void 0 : s[n][u]) || c,
            a = React__namespace.useContext(i);
      if (a) return a;
      if (void 0 !== o) return o;
      throw new Error(`\`${r}\` must be used within \`${t}\``);
    }];
  }, t$1(c, ...o)];
}

function t$1(...t) {
  const n = t[0];
  if (1 === t.length) return n;

  const o = () => {
    const o = t.map(e => ({
      useScope: e(),
      scopeName: e.scopeName
    }));
    return function (t) {
      const r = o.reduce((e, {
        useScope: n,
        scopeName: o
      }) => ({ ...e,
        ...n(t)[`__scope${o}`]
      }), {});
      return React__namespace.useMemo(() => ({
        [`__scope${n.scopeName}`]: r
      }), [r]);
    };
  };

  return o.scopeName = n.scopeName, o;
}

function getPlacementData({
  anchorRect: p,
  popperSize: c,
  arrowSize: f,
  arrowOffset: l = 0,
  side: d,
  sideOffset: h = 0,
  align: x,
  alignOffset: g = 0,
  shouldAvoidCollisions: u = !0,
  collisionBoundariesRect: w,
  collisionTolerance: m = 0
}) {
  if (!p || !c || !w) return {
    popperStyles: o,
    arrowStyles: n
  };

  const y = function (e, r, o = 0, n = 0, i) {
    const p = i ? i.height : 0,
          a = t(r, e, "x"),
          s = t(r, e, "y"),
          c = s.before - o - p,
          f = s.after + o + p,
          l = a.before - o - p,
          d = a.after + o + p;
    return {
      top: {
        start: {
          x: a.start + n,
          y: c
        },
        center: {
          x: a.center,
          y: c
        },
        end: {
          x: a.end - n,
          y: c
        }
      },
      right: {
        start: {
          x: d,
          y: s.start + n
        },
        center: {
          x: d,
          y: s.center
        },
        end: {
          x: d,
          y: s.end - n
        }
      },
      bottom: {
        start: {
          x: a.start + n,
          y: f
        },
        center: {
          x: a.center,
          y: f
        },
        end: {
          x: a.end - n,
          y: f
        }
      },
      left: {
        start: {
          x: l,
          y: s.start + n
        },
        center: {
          x: l,
          y: s.center
        },
        end: {
          x: l,
          y: s.end - n
        }
      }
    };
  }(c, p, h, g, f),
        b = y[d][x];

  if (!1 === u) {
    const t = e(b);
    let o = n;
    f && (o = i({
      popperSize: c,
      arrowSize: f,
      arrowOffset: l,
      side: d,
      align: x
    }));
    return {
      popperStyles: { ...t,
        "--radix-popper-transform-origin": r(c, d, x, l, f)
      },
      arrowStyles: o,
      placedSide: d,
      placedAlign: x
    };
  }

  const S = DOMRect.fromRect({ ...c,
    ...b
  }),
        $ = (O = w, z = m, DOMRect.fromRect({
    width: O.width - 2 * z,
    height: O.height - 2 * z,
    x: O.left + z,
    y: O.top + z
  }));
  var O, z;

  const R = s(S, $),
        M = y[a(d)][x],
        D = function (t, e, r) {
    const o = a(t);
    return e[t] && !r[o] ? o : t;
  }(d, R, s(DOMRect.fromRect({ ...c,
    ...M
  }), $)),
        A = function (t, e, r, o, n) {
    const i = "top" === r || "bottom" === r,
          p = i ? "left" : "top",
          a = i ? "right" : "bottom",
          s = i ? "width" : "height",
          c = e[s] > t[s];
    if (("start" === o || "center" === o) && (n[p] && c || n[a] && !c)) return "end";
    if (("end" === o || "center" === o) && (n[a] && c || n[p] && !c)) return "start";
    return o;
  }(c, p, d, x, R),
        I = e(y[D][A]);

  let C = n;
  f && (C = i({
    popperSize: c,
    arrowSize: f,
    arrowOffset: l,
    side: D,
    align: A
  }));
  return {
    popperStyles: { ...I,
      "--radix-popper-transform-origin": r(c, D, A, l, f)
    },
    arrowStyles: C,
    placedSide: D,
    placedAlign: A
  };
}

function t(t, e, r) {
  const o = t["x" === r ? "left" : "top"],
        n = "x" === r ? "width" : "height",
        i = t[n],
        p = e[n];
  return {
    before: o - p,
    start: o,
    center: o + (i - p) / 2,
    end: o + i - p,
    after: o + i
  };
}

function e(t) {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "max-content",
    willChange: "transform",
    transform: `translate3d(${Math.round(t.x + window.scrollX)}px, ${Math.round(t.y + window.scrollY)}px, 0)`
  };
}

function r(t, e, r, o, n) {
  const i = "top" === e || "bottom" === e,
        p = n ? n.width : 0,
        a = n ? n.height : 0,
        s = p / 2 + o;
  let c = "",
      f = "";
  return i ? (c = {
    start: `${s}px`,
    center: "center",
    end: t.width - s + "px"
  }[r], f = "top" === e ? `${t.height + a}px` : -a + "px") : (c = "left" === e ? `${t.width + a}px` : -a + "px", f = {
    start: `${s}px`,
    center: "center",
    end: t.height - s + "px"
  }[r]), `${c} ${f}`;
}

const o = {
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0,
  transform: "translate3d(0, -200%, 0)"
},
      n = {
  position: "absolute",
  opacity: 0
};

function i({
  popperSize: t,
  arrowSize: e,
  arrowOffset: r,
  side: o,
  align: n
}) {
  const i = (t.width - e.width) / 2,
        a = (t.height - e.width) / 2,
        s = {
    top: 0,
    right: 90,
    bottom: 180,
    left: -90
  }[o],
        c = Math.max(e.width, e.height),
        f = {
    width: `${c}px`,
    height: `${c}px`,
    transform: `rotate(${s}deg)`,
    willChange: "transform",
    position: "absolute",
    [o]: "100%",
    direction: p(o, n)
  };
  return "top" !== o && "bottom" !== o || ("start" === n && (f.left = `${r}px`), "center" === n && (f.left = `${i}px`), "end" === n && (f.right = `${r}px`)), "left" !== o && "right" !== o || ("start" === n && (f.top = `${r}px`), "center" === n && (f.top = `${a}px`), "end" === n && (f.bottom = `${r}px`)), f;
}

function p(t, e) {
  return ("top" !== t && "right" !== t || "end" !== e) && ("bottom" !== t && "left" !== t || "end" === e) ? "ltr" : "rtl";
}

function a(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}

function s(t, e) {
  return {
    top: t.top < e.top,
    right: t.right > e.right,
    bottom: t.bottom > e.bottom,
    left: t.left < e.left
  };
}

const [c, l] = createContextScope("Popper");
const [f, d] = c("Popper");
const Popper = e => {
  const {
    __scopePopper: o,
    children: r
  } = e,
        [t, n] = React__namespace.useState(null);
  

  return React__namespace.createElement(f, {
    scope: o,
    anchor: t,
    onAnchorChange: n
  }, r);
};


const PopperAnchor = /*#__PURE__*/React__namespace.forwardRef((e, r) => {
  const {
    __scopePopper: t,
    virtualRef: n,
    ...p
  } = e,
        c = d("PopperAnchor", t),
        l = React__namespace.useRef(null),
        f = useComposedRefs(r, l);
  return React__namespace.useEffect(() => {
    c.onAnchorChange((null == n ? void 0 : n.current) || l.current);
  }), n ? null : /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends({}, p, {
    ref: f
  }));
});


const [u, m] = c("PopperContent");
const PopperContent = /*#__PURE__*/React__namespace.forwardRef((e, n) => {
  const {
    __scopePopper: c,
    side: l = "bottom",
    sideOffset: f,
    align: m = "center",
    alignOffset: w,
    collisionTolerance: h,
    avoidCollisions: x = !0,
    ...v
  } = e,
        P = d("PopperContent", c),
        [A, g] = React__namespace.useState(),
        E = useRect(P.anchor),
        [y, C] = React__namespace.useState(null),
        S = useSize(y),
        [R, O] = React__namespace.useState(null),
        _ = useSize(R),
        b = useComposedRefs(n, e => C(e)),
        z = function () {
    const [e, o] = React__namespace.useState(void 0);
    return React__namespace.useEffect(() => {
      let e;

      function r() {
        o({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }

      function t() {
        window.clearTimeout(e), e = window.setTimeout(r, 100);
      }

      return r(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, []), e;
  }(),
        T = z ? DOMRect.fromRect({ ...z,
    x: 0,
    y: 0
  }) : void 0,
        {
    popperStyles: k,
    arrowStyles: L,
    placedSide: B,
    placedAlign: D
  } = getPlacementData({
    anchorRect: E,
    popperSize: S,
    arrowSize: _,
    arrowOffset: A,
    side: l,
    sideOffset: f,
    align: m,
    alignOffset: w,
    shouldAvoidCollisions: x,
    collisionBoundariesRect: T,
    collisionTolerance: h
  }),
        H = void 0 !== B;
  


  return React__namespace.createElement("div", {
    style: k,
    "data-radix-popper-content-wrapper": ""
  }, /*#__PURE__*/React__namespace.createElement(u, {
    scope: c,
    arrowStyles: L,
    onArrowChange: O,
    onArrowOffsetChange: g
  }, /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends({
    "data-side": B,
    "data-align": D
  }, v, {
    style: { ...v.style,
      animation: H ? void 0 : "none"
    },
    ref: b
  }))));
});


const Root$1 = Popper;
const Anchor = PopperAnchor;
const Content$1 = PopperContent;

function useControllableState({
  prop: o,
  defaultProp: r,
  onChange: n = () => {}
}) {
  const [a, u] = function ({
    defaultProp: o,
    onChange: r
  }) {
    const n = React__namespace.useState(o),
          [a] = n,
          u = React__namespace.useRef(a),
          c = useCallbackRef(r);
    return React__namespace.useEffect(() => {
      u.current !== a && (c(a), u.current = a);
    }, [a, u, c]), n;
  }({
    defaultProp: r,
    onChange: n
  }),
        c = void 0 !== o,
        f = c ? o : a,
        l = useCallbackRef(n);

  return [f, React__namespace.useCallback(e => {
    if (c) {
      const t = e,
            r = "function" == typeof e ? t(o) : e;
      r !== o && l(r);
    } else u(e);
  }, [c, o, u, l])];
}

const [C, g] = createContextScope("Popover", [l]);
const x = l(),
      [h, E] = C("Popover");
const Popover = e => {
  const {
    __scopePopover: o,
    children: t,
    open: n,
    defaultOpen: c,
    onOpenChange: a,
    modal: s = !1
  } = e,
        i = x(o),
        u = React__namespace.useRef(null),
        [d, m] = React__namespace.useState(!1),
        [f = !1, P] = useControllableState({
    prop: n,
    defaultProp: c,
    onChange: a
  });
  

  return React__namespace.createElement(Root$1, i, /*#__PURE__*/React__namespace.createElement(h, {
    scope: o,
    contentId: useId(),
    triggerRef: u,
    open: f,
    onOpenChange: P,
    onOpenToggle: React__namespace.useCallback(() => P(e => !e), [P]),
    hasCustomAnchor: d,
    onCustomAnchorAdd: React__namespace.useCallback(() => m(!0), []),
    onCustomAnchorRemove: React__namespace.useCallback(() => m(!1), []),
    modal: s
  }, t));
};


const PopoverTrigger = /*#__PURE__*/React__namespace.forwardRef((e, o) => {
  const {
    __scopePopover: r,
    ...n
  } = e,
        c = E("PopoverTrigger", r),
        a = x(r),
        s = useComposedRefs(o, c.triggerRef),
        i = /*#__PURE__*/React__namespace.createElement(Primitive.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": c.open,
    "aria-controls": c.contentId,
    "data-state": w(c.open)
  }, n, {
    ref: s,
    onClick: composeEventHandlers(e.onClick, c.onOpenToggle)
  }));
  return c.hasCustomAnchor ? i : /*#__PURE__*/React__namespace.createElement(Anchor, _extends({
    asChild: !0
  }, a), i);
});


const PopoverContent = /*#__PURE__*/React__namespace.forwardRef((e, o) => {
  const {
    forceMount: r,
    ...t
  } = e,
        c = E("PopoverContent", e.__scopePopover);
  

  return React__namespace.createElement(Presence, {
    present: r || c.open
  }, c.modal ? /*#__PURE__*/React__namespace.createElement(A, _extends({}, t, {
    ref: o
  })) : /*#__PURE__*/React__namespace.createElement(O, _extends({}, t, {
    ref: o
  })));
});


const A = /*#__PURE__*/React__namespace.forwardRef((r, t) => {
  const {
    allowPinchZoom: n,
    portalled: c = !0,
    ...s
  } = r,
        i = E("PopoverContent", r.__scopePopover),
        p = React__namespace.useRef(null),
        u = useComposedRefs(t, p),
        l = React__namespace.useRef(!1);
  React__namespace.useEffect(() => {
    const o = p.current;
    if (o) return hideOthers(o);
  }, []);
  const d = c ? Portal : React__namespace.Fragment;
  

  return React__namespace.createElement(d, null, /*#__PURE__*/React__namespace.createElement(o$4, {
    allowPinchZoom: n
  }, /*#__PURE__*/React__namespace.createElement(R, _extends({}, s, {
    ref: u,
    trapFocus: i.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: composeEventHandlers(r.onCloseAutoFocus, e => {
      var o;
      e.preventDefault(), l.current || null === (o = i.triggerRef.current) || void 0 === o || o.focus();
    }),
    onPointerDownOutside: composeEventHandlers(r.onPointerDownOutside, e => {
      const o = e.detail.originalEvent,
            r = 0 === o.button && !0 === o.ctrlKey,
            t = 2 === o.button || r;
      l.current = t;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: composeEventHandlers(r.onFocusOutside, e => e.preventDefault(), {
      checkForDefaultPrevented: !1
    })
  }))));
}),
      O = /*#__PURE__*/React__namespace.forwardRef((e, o) => {
  const {
    portalled: r = !0,
    ...t
  } = e,
        n = E("PopoverContent", e.__scopePopover),
        c = React__namespace.useRef(!1),
        s = r ? Portal : React__namespace.Fragment;
  

  return React__namespace.createElement(s, null, /*#__PURE__*/React__namespace.createElement(R, _extends({}, t, {
    ref: o,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: o => {
      var r, t;
      (null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, o), o.defaultPrevented) || (c.current || null === (t = n.triggerRef.current) || void 0 === t || t.focus(), o.preventDefault());
      c.current = !1;
    },
    onInteractOutside: o => {
      var r, t;
      null === (r = e.onInteractOutside) || void 0 === r || r.call(e, o), o.defaultPrevented || (c.current = !0);
      const a = o.target;
      (null === (t = n.triggerRef.current) || void 0 === t ? void 0 : t.contains(a)) && o.preventDefault();
    }
  })));
}),
      R = /*#__PURE__*/React__namespace.forwardRef((e, o) => {
  const {
    __scopePopover: r,
    trapFocus: t,
    onOpenAutoFocus: n,
    onCloseAutoFocus: a,
    disableOutsidePointerEvents: u,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: m,
    onInteractOutside: f,
    ...C
  } = e,
        g = E("PopoverContent", r),
        h = x(r);
  return useFocusGuards(), /*#__PURE__*/React__namespace.createElement(FocusScope, {
    asChild: !0,
    loop: !0,
    trapped: t,
    onMountAutoFocus: n,
    onUnmountAutoFocus: a
  }, /*#__PURE__*/React__namespace.createElement(DismissableLayer, {
    asChild: !0,
    disableOutsidePointerEvents: u,
    onInteractOutside: f,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: m,
    onDismiss: () => g.onOpenChange(!1)
  }, /*#__PURE__*/React__namespace.createElement(Content$1, _extends({
    "data-state": w(g.open),
    role: "dialog",
    id: g.contentId
  }, h, C, {
    ref: o,
    style: { ...C.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)"
    }
  }))));
});


function w(e) {
  return e ? "open" : "closed";
}

const Root = Popover;
const Trigger = PopoverTrigger;
const Content = PopoverContent;

function on(obj) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}

var defaultEvents = ['mousedown', 'touchstart'];

var useClickAway = function (ref, onClickAway, events) {
  if (events === void 0) {
    events = defaultEvents;
  }

  var savedCallback = React.useRef(onClickAway);
  React.useEffect(function () {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  React.useEffect(function () {
    var handler = function (event) {
      var el = ref.current;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
      var eventName = events_1[_i];
      on(document, eventName, handler);
    }

    return function () {
      for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
        var eventName = events_2[_i];
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

var useClickAway$1 = useClickAway;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const EMOJIS = [{
  code: "f929",
  char: "🤩",
  svg: SvgComponent$3,
  label: "very-happy"
}, {
  code: "f600",
  char: "🙂",
  svg: SvgComponent$2,
  label: "happy"
}, {
  code: "f615",
  char: "😕",
  svg: SvgComponent$1,
  label: "meh"
}, {
  code: "f62d",
  char: "😭",
  svg: SvgComponent,
  label: "unhappy"
}];
let RadioContext = /*#__PURE__*/React__default["default"].createContext(null); // https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#example

var _ref = process.env.NODE_ENV === "production" ? {
  name: "34i93t",
  styles: "display:flex;> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}"
} : {
  name: "1vfyrxy-EmojiRadioGroup",
  styles: "display:flex;> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));};label:EmojiRadioGroup;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDOEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL0lucHV0XCI7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL1RleHRhcmVhXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IGY5MjkgZnJvbSBcIi4vc3Zncy9mOTI5LmpzXCI7XG5pbXBvcnQgZjYwMCBmcm9tIFwiLi9zdmdzL2Y2MDAuanNcIjtcbmltcG9ydCBmNjE1IGZyb20gXCIuL3N2Z3MvZjYxNS5qc1wiO1xuaW1wb3J0IGY2MmQgZnJvbSBcIi4vc3Zncy9mNjJkLmpzXCI7XG5pbXBvcnQgeyB1c2VSYWRpb0dyb3VwU3RhdGUgfSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvcmFkaW9cIjtcbmltcG9ydCB7IHVzZVJhZGlvLCB1c2VSYWRpb0dyb3VwIH0gZnJvbSBcIkByZWFjdC1hcmlhL3JhZGlvXCI7XG5pbXBvcnQgeyBWaXN1YWxseUhpZGRlbiB9IGZyb20gXCJAcmVhY3QtYXJpYS92aXN1YWxseS1oaWRkZW5cIjtcbmltcG9ydCB7IHVzZUZvY3VzUmluZyB9IGZyb20gXCJAcmVhY3QtYXJpYS9mb2N1c1wiO1xuaW1wb3J0IEZlZWRiYWNrQnV0dG9uIGZyb20gXCIuL0ZlZWRiYWNrQnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBQb3BvdmVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBFTU9KSVMgPSBbXG4gIHsgY29kZTogXCJmOTI5XCIsIGNoYXI6IFwi8J+kqVwiLCBzdmc6IGY5MjksIGxhYmVsOiBcInZlcnktaGFwcHlcIiB9LFxuICB7IGNvZGU6IFwiZjYwMFwiLCBjaGFyOiBcIvCfmYJcIiwgc3ZnOiBmNjAwLCBsYWJlbDogXCJoYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjE1XCIsIGNoYXI6IFwi8J+YlVwiLCBzdmc6IGY2MTUsIGxhYmVsOiBcIm1laFwiIH0sXG4gIHsgY29kZTogXCJmNjJkXCIsIGNoYXI6IFwi8J+YrVwiLCBzdmc6IGY2MmQsIGxhYmVsOiBcInVuaGFwcHlcIiB9LFxuXTtcblxubGV0IFJhZGlvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIGh0dHBzOi8vcmVhY3Qtc3BlY3RydW0uYWRvYmUuY29tL3JlYWN0LWFyaWEvdXNlUmFkaW9Hcm91cC5odG1sI2V4YW1wbGVcbmZ1bmN0aW9uIEVtb2ppUmFkaW9Hcm91cChwcm9wcykge1xuICBsZXQgeyBjaGlsZHJlbiwgbGFiZWwgfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBwcm9wcy5lbW9qaVN0YXRlO1xuICBsZXQgeyByYWRpb0dyb3VwUHJvcHMsIGxhYmVsUHJvcHMgfSA9IHVzZVJhZGlvR3JvdXAocHJvcHMsIHN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnJhZGlvR3JvdXBQcm9wc30gY3NzPXtbdHdgZmxleCBzcGFjZS14LTJgXX0+XG4gICAgICA8UmFkaW9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvUmFkaW9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBFbW9qaVJhZGlvKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChSYWRpb0NvbnRleHQpO1xuICBsZXQgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBsZXQgeyBpbnB1dFByb3BzIH0gPSB1c2VSYWRpbyhwcm9wcywgc3RhdGUsIHJlZik7XG4gIGxldCB7IGlzRm9jdXNWaXNpYmxlLCBmb2N1c1Byb3BzIH0gPSB1c2VGb2N1c1JpbmcoKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFZhbHVlID09PSBwcm9wcy52YWx1ZTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbFxuICAgICAgb25Gb2N1cz17cHJvcHMub25Gb2N1c31cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BpbmxpbmUtZmxleCBiZy10cmFuc3BhcmVudCBwLTAgbS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBib3JkZXIgYm9yZGVyLWJvcmRlciB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsYCxcbiAgICAgICAgdHdgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS0xMDUgaG92ZXI6Ymctd2hpdGUgYWN0aXZlOmJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYCxcbiAgICAgICAgc2VsZWN0ZWQgJiYgdHdgc2NhbGUtMTEwIGJvcmRlciBiZy13aGl0ZSBib3JkZXItd2FybmluZy1saWdodGAsXG4gICAgICAgIGlzRm9jdXNWaXNpYmxlICYmIHR3YHJpbmctMmAsXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxWaXN1YWxseUhpZGRlbj5cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSB7Li4uZm9jdXNQcm9wc30gcmVmPXtyZWZ9IC8+XG4gICAgICA8L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0dz17XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwifVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmNvbnN0IEZlZWRiYWNrID0gKHtcbiAgdXJsLFxuICBlbWFpbCxcbiAgZW5hYmxlRmVlZGJhY2tUZXh0ID0gdHJ1ZSxcbiAgZW5hYmxlRW1vamkgPSB0cnVlLFxuICBzaWRlID0gXCJib3R0b21cIixcbiAgc2lkZU9mZnNldCA9IDUsXG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBlbWFpbFByb3BzLFxuICBmZWVkYmFja1RleHRQcm9wcyxcbiAgc3VibWl0QnV0dG9uUHJvcHMsXG4gIGRyeVJ1biA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBlbmFibGVFbWFpbCA9ICFlbWFpbDtcbiAgY29uc3QgZW1haWxJbml0aWFsVmFsdWUgPSBlbWFpbCA/IGVtYWlsIDogXCJcIjtcbiAgY29uc3QgW2VtYWlsVmFsdWUsIHNldEVtYWlsVmFsdWVdID0gdXNlU3RhdGUoZW1haWxJbml0aWFsVmFsdWUpO1xuICBjb25zdCBbZmVlZGJhY2tUZXh0LCBzZXRGZWVkYmFja1RleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVtb2ppU3RhdGUgPSB1c2VSYWRpb0dyb3VwU3RhdGUocHJvcHMpO1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY29tYmluZWRFbWFpbFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZW1haWwgYWRkcmVzcy4uLlwiLFxuICAgIC4uLmVtYWlsUHJvcHMsXG4gIH07XG5cbiAgY29uc3QgY29tYmluZWRGZWVkYmFja1RleHRQcm9wcyA9IHtcbiAgICBsYWJlbDogXCJGZWVkYmFja1wiLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZmVlZGJhY2suLi5cIixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByb3dzOiAzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkZlZWRiYWNrIGlucHV0XCIsXG4gICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgXCJkYXRhLWdyYW1tLWVkaXRvclwiOiBmYWxzZSxcbiAgICAuLi5mZWVkYmFja1RleHRQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzID0ge1xuICAgIGxhYmVsOiBcIlNlbmRcIixcbiAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAuLi5zdWJtaXRCdXR0b25Qcm9wcyxcbiAgfTtcblxuICBjb25zdCBvbkVycm9yRGlzbWlzcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN1Y2Nlc3NEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VGZWVkYmFja0Zvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgb25FcnJvckRpc21pc3MoKTtcbiAgICBvblN1Y2Nlc3NEaXNtaXNzKCk7XG4gIH0sIFtvbkVycm9yRGlzbWlzcywgb25TdWNjZXNzRGlzbWlzc10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChmZWVkYmFja1RleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJZb3VyIGZlZWRiYWNrIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBub3RlOiBmZWVkYmFja1RleHQsXG4gICAgICBlbWFpbDogZW1haWxWYWx1ZSxcbiAgICAgIGVtb3Rpb246IGVtb2ppU3RhdGUuc2VsZWN0ZWRWYWx1ZSxcbiAgICB9O1xuICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChkcnlSdW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFNvcnJ5LCB3ZSBjb3VsZG4ndCBzZW5kIHlvdXIgZmVlZGJhY2suIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBmZWVkYmFja1RleHQgb24gc3VjY2Vzc1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gICAgICAgIHNldEZlZWRiYWNrVGV4dChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLm1ldGFLZXkpIHtcbiAgICAgICAgb25TdWJtaXQoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xvc2VGZWVkYmFja0Zvcm0sIG9uU3VibWl0XVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH07XG4gIH0sIFtvbktleURvd25dKTtcblxuICB1c2VDbGlja0F3YXkoZm9ybVJlZiwgY2xvc2VGZWVkYmFja0Zvcm0pO1xuXG4gIGNvbnN0IGRpc2FibGVJbnB1dHMgPSBCb29sZWFuKGxvYWRpbmcgfHwgZXJyb3JNZXNzYWdlKTtcblxuICBjb25zdCBoYW5kbGVUcmlnZ2VyQnV0dG9uID0gKHRvb2dsZVBvcG92ZXIpID0+IHtcbiAgICAvL2lmIHVzZXIgaGF2ZSBlcnJvck1lc3NhZ2Ugb3IgYSBzdWNjZXNzIGFuZCBhcmUgY2xvc2luZyB0aGUgcG9wb3ZlciBvbiBidXR0b25UcmlnZ2VyIGNsZWFyIGVycm9yIGFuZCBzdWNjZXNzXG4gICAgaWYgKChlcnJvck1lc3NhZ2UgfHwgc3VjY2VzcykgJiYgIXRvb2dsZVBvcG92ZXIpIHtcbiAgICAgIGNsb3NlRmVlZGJhY2tGb3JtKCk7XG4gICAgfVxuICAgIHNldE9wZW4odG9vZ2xlUG9wb3Zlcik7XG4gIH07XG5cbiAgY29uc3QgVHJpZ2dlckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF8sIHJlZikgPT5cbiAgICBjaGlsZHJlbiA/IChcbiAgICAgIGNoaWxkcmVuKHsgb3Blbiwgc2V0T3BlbjogaGFuZGxlVHJpZ2dlckJ1dHRvbiwgcmVmOiByZWYgfSlcbiAgICApIDogKFxuICAgICAgPEZlZWRiYWNrQnV0dG9uIG9wZW49e29wZW59IHNldE9wZW49e2hhbmRsZVRyaWdnZXJCdXR0b259IHJlZj17cmVmfSAvPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHRpdGxlPVwiU2hhcmUgYW55IGZlZWRiYWNrIGFib3V0IG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHAtMCByZWxhdGl2ZSBpbmxpbmUtYmxvY2sgYW50aWFsaWFzZWQgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpvdXRsaW5lLW5vbmVgLFxuICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdHdgdGV4dC10cmFuc3BhcmVudGAsXG4gICAgICBdfVxuICAgICAgYXJpYS1leHBhbmRlZD17b3Blbn1cbiAgICAgIGRhdGEtdGVzdGlkPVwiY29udGFpbmVyLXBvcG92ZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlJvb3Qgb25PcGVuQ2hhbmdlPXtjbG9zZUZlZWRiYWNrRm9ybX0gb3Blbj17b3Blbn0+XG4gICAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICA8VHJpZ2dlckJ1dHRvbiAvPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuVHJpZ2dlcj5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxuICAgICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICAgICAgc2lkZT17c2lkZX1cbiAgICAgICAgICBhbGlnbj17YWxpZ259XG4gICAgICAgID5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGgtYXV0byBib3JkZXItd2hpdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIGZsZXggbGVhZGluZy02IHRleHQtc20gcm91bmRlZCBzaGFkb3ctbGcgYmctd2hpdGUgYCxcbiAgICAgICAgICAgICAgdHdgcmVzaXplLW5vbmUgei01MCB0ZXh0LWZvcmVncm91bmQgZmxleC1jb2wganVzdGlmeS1zdGFydCByZWxhdGl2ZWAsXG4gICAgICAgICAgICAgIHR3YGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIGZvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIGFjdGl2ZTpib3JkZXItZm9yZWdyb3VuZGAsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjJyZW1cIiB9fVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmb3JtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWVycm9yTWVzc2FnZSAmJiAhc3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtbdHdgcC00IHJlbGF0aXZlYF19PlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHR3PXtcIm1iLTJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEVtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbWJpbmVkRW1haWxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7ZW5hYmxlRmVlZGJhY2tUZXh0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlZWRiYWNrLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmZWVkYmFja1RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGZWVkYmFja1RleHQoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWU9e2NuKFwiZmVlZGJhY2staW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJyYW5kLWdyYXlcIjogbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRGZWVkYmFja1RleHRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiOHB4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JEaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkdvIGJhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdHc9e1xuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXIgei01MFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgc21hbGwgaXM9XCJwXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIGZlZWRiYWNrIGhhcyBiZWVuIHJlY2VpdmVkIVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7IXN1Y2Nlc3MgJiYgIWVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgIHR3YHctZnVsbCBoLTE2IHAtNCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBnYXAtNCBiZy1iYWNrZ3JvdW5kIGJvcmRlci10IGJvcmRlci1ib3JkZXIgcG9pbnRlci1ldmVudHMtYXV0b2AsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbW9qaSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZW1vamlzXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8RW1vamlSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgYW4gZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppU3RhdGU9e2Vtb2ppU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7RU1PSklTLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFN2Z0NvbXBvbmVudCA9IGVtb2ppLnN2ZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtlbW9qaS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdDb21wb25lbnQgY3NzPXtbdHdgdy01IGgtNWBdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIHR3PXtcIm1sLWF1dG9cIn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17XCJzdWJtaXQtYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRTdWJtaXRCdXR0b25Qcm9wc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuQ29udGVudD5cbiAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Sb290PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmVlZGJhY2sucHJvcFR5cGVzID0ge1xuICAvKipcbiAgIFNob3cgdGV4dCBhcmVhIHRvIGNvbGxlY3QgZmVlZGJhY2sgdGV4dFxuICAgKi9cbiAgZW5hYmxlRmVlZGJhY2tUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBTaG93IGVtb2ppIHNlbGVjdGlvbiBidXR0b25zXG4gICAqL1xuICBlbmFibGVFbW9qaTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgRG9uJ3QgbWFrZSB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICBkcnlSdW46IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFVSTCB0byBtYWtlIHRoZSBQT1NUIHJlcXVlc3RcbiAgICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBEb24ndCBzaG93IHRoZSBlbWFpbCBpbnB1dCBmaWVsZCBhbmQgdXNlIHRoZSBzcGVjaWZpZWQgZW1haWwgaW5zdGVhZFxuICAgKi9cbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZW1haWwgaW5wdXQgZmllbGRcbiAgICovXG4gIGVtYWlsUHJvcHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZmVlZGJhY2sgdGV4dCBhcmVhXG4gICAqL1xuICBmZWVkYmFja1RleHRQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBzdWJtaXRCdXR0b25Qcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBUaGUgcHJlZmVycmVkIHNpZGUgb2YgdGhlIGFuY2hvciB0byByZW5kZXIgYWdhaW5zdCB3aGVuIG9wZW4uXG4gICovXG4gIHNpZGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAvKipcbiAgIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgYW5jaG9yLlxuICAqL1xuICBzaWRlT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICBUaGUgcHJlZmVycmVkIGFsaWdubWVudCBhZ2FpbnN0IHRoZSBhbmNob3IuIE1heSBjaGFuZ2Ugd2hlbiBjb2xsaXNpb25zIG9jY3VyLlxuICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcInN0YXJ0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function EmojiRadioGroup(props) {
  let {
    children,
    label
  } = props;
  let state = props.emojiState;
  let {
    radioGroupProps,
    labelProps
  } = $430f30ed08ec25fa$export$62b9571f283ff5c2(props, state);
  return react.jsx("div", _extends$1({}, radioGroupProps, {
    css: _ref
  }), react.jsx(RadioContext.Provider, {
    value: state
  }, children));
}

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1vcob1d",
  styles: "display:flex;justify-content:center;align-items:center"
} : {
  name: "11e77mp-EmojiRadio",
  styles: "display:flex;justify-content:center;align-items:center;label:EmojiRadio;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function EmojiRadio(props) {
  let {
    children
  } = props;
  let state = React__default["default"].useContext(RadioContext);
  let ref = React__default["default"].useRef(null);
  let {
    inputProps
  } = $0d5c49892c1215da$export$37b0961d2f4751e2(props, state, ref);
  let {
    isFocusVisible,
    focusProps
  } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const selected = state.selectedValue === props.value;
  return react.jsx("label", {
    onFocus: props.onFocus,
    css: ["transform:var(--tw-transform);display:inline-flex;background-color:rgba(0, 0, 0, 0);padding:0px;margin:0px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;border-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));cursor:pointer;text-align:center;border-radius:9999px;:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:var(--tw-transform);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}:active{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:var(--tw-transform);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}outline:2px solid transparent;outline-offset:2px;:focus{outline:2px solid transparent;outline-offset:2px;}", selected && {
      "--tw-scale-x": "1.1",
      "--tw-scale-y": "1.1",
      "transform": "var(--tw-transform)",
      "borderWidth": "1px",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(247, 185, 85, var(--tw-border-opacity))"
    }, isFocusVisible && {
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
      "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:EmojiRadio;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdETSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXRcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vVGV4dGFyZWFcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgZjkyOSBmcm9tIFwiLi9zdmdzL2Y5MjkuanNcIjtcbmltcG9ydCBmNjAwIGZyb20gXCIuL3N2Z3MvZjYwMC5qc1wiO1xuaW1wb3J0IGY2MTUgZnJvbSBcIi4vc3Zncy9mNjE1LmpzXCI7XG5pbXBvcnQgZjYyZCBmcm9tIFwiLi9zdmdzL2Y2MmQuanNcIjtcbmltcG9ydCB7IHVzZVJhZGlvR3JvdXBTdGF0ZSB9IGZyb20gXCJAcmVhY3Qtc3RhdGVseS9yYWRpb1wiO1xuaW1wb3J0IHsgdXNlUmFkaW8sIHVzZVJhZGlvR3JvdXAgfSBmcm9tIFwiQHJlYWN0LWFyaWEvcmFkaW9cIjtcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlblwiO1xuaW1wb3J0IHsgdXNlRm9jdXNSaW5nIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ZvY3VzXCI7XG5pbXBvcnQgRmVlZGJhY2tCdXR0b24gZnJvbSBcIi4vRmVlZGJhY2tCdXR0b25cIjtcbmltcG9ydCAqIGFzIFBvcG92ZXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5cbmNvbnN0IEVNT0pJUyA9IFtcbiAgeyBjb2RlOiBcImY5MjlcIiwgY2hhcjogXCLwn6SpXCIsIHN2ZzogZjkyOSwgbGFiZWw6IFwidmVyeS1oYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjAwXCIsIGNoYXI6IFwi8J+ZglwiLCBzdmc6IGY2MDAsIGxhYmVsOiBcImhhcHB5XCIgfSxcbiAgeyBjb2RlOiBcImY2MTVcIiwgY2hhcjogXCLwn5iVXCIsIHN2ZzogZjYxNSwgbGFiZWw6IFwibWVoXCIgfSxcbiAgeyBjb2RlOiBcImY2MmRcIiwgY2hhcjogXCLwn5itXCIsIHN2ZzogZjYyZCwgbGFiZWw6IFwidW5oYXBweVwiIH0sXG5dO1xuXG5sZXQgUmFkaW9Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gaHR0cHM6Ly9yZWFjdC1zcGVjdHJ1bS5hZG9iZS5jb20vcmVhY3QtYXJpYS91c2VSYWRpb0dyb3VwLmh0bWwjZXhhbXBsZVxuZnVuY3Rpb24gRW1vamlSYWRpb0dyb3VwKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuLCBsYWJlbCB9ID0gcHJvcHM7XG4gIGxldCBzdGF0ZSA9IHByb3BzLmVtb2ppU3RhdGU7XG4gIGxldCB7IHJhZGlvR3JvdXBQcm9wcywgbGFiZWxQcm9wcyB9ID0gdXNlUmFkaW9Hcm91cChwcm9wcywgc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmFkaW9Hcm91cFByb3BzfSBjc3M9e1t0d2BmbGV4IHNwYWNlLXgtMmBdfT5cbiAgICAgIDxSYWRpb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9SYWRpb0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEVtb2ppUmFkaW8ocHJvcHMpIHtcbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFJhZGlvQ29udGV4dCk7XG4gIGxldCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCB7IGlucHV0UHJvcHMgfSA9IHVzZVJhZGlvKHByb3BzLCBzdGF0ZSwgcmVmKTtcbiAgbGV0IHsgaXNGb2N1c1Zpc2libGUsIGZvY3VzUHJvcHMgfSA9IHVzZUZvY3VzUmluZygpO1xuICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IHByb3BzLnZhbHVlO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGlubGluZS1mbGV4IGJnLXRyYW5zcGFyZW50IHAtMCBtLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGJvcmRlciBib3JkZXItYm9yZGVyIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxgLFxuICAgICAgICB0d2Bob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTEwNSBob3ZlcjpiZy13aGl0ZSBhY3RpdmU6Ymctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBgLFxuICAgICAgICBzZWxlY3RlZCAmJiB0d2BzY2FsZS0xMTAgYm9yZGVyIGJnLXdoaXRlIGJvcmRlci13YXJuaW5nLWxpZ2h0YCxcbiAgICAgICAgaXNGb2N1c1Zpc2libGUgJiYgdHdgcmluZy0yYCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IHsuLi5mb2N1c1Byb3BzfSByZWY9e3JlZn0gLz5cbiAgICAgIDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHR3PXtcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuY29uc3QgRmVlZGJhY2sgPSAoe1xuICB1cmwsXG4gIGVtYWlsLFxuICBlbmFibGVGZWVkYmFja1RleHQgPSB0cnVlLFxuICBlbmFibGVFbW9qaSA9IHRydWUsXG4gIHNpZGUgPSBcImJvdHRvbVwiLFxuICBzaWRlT2Zmc2V0ID0gNSxcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGVtYWlsUHJvcHMsXG4gIGZlZWRiYWNrVGV4dFByb3BzLFxuICBzdWJtaXRCdXR0b25Qcm9wcyxcbiAgZHJ5UnVuID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVuYWJsZUVtYWlsID0gIWVtYWlsO1xuICBjb25zdCBlbWFpbEluaXRpYWxWYWx1ZSA9IGVtYWlsID8gZW1haWwgOiBcIlwiO1xuICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSB1c2VTdGF0ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IFtmZWVkYmFja1RleHQsIHNldEZlZWRiYWNrVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZW1vamlTdGF0ZSA9IHVzZVJhZGlvR3JvdXBTdGF0ZShwcm9wcyk7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjb21iaW5lZEVtYWlsUHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBlbWFpbCBhZGRyZXNzLi4uXCIsXG4gICAgLi4uZW1haWxQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzID0ge1xuICAgIGxhYmVsOiBcIkZlZWRiYWNrXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBmZWVkYmFjay4uLlwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJvd3M6IDMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiRmVlZGJhY2sgaW5wdXRcIixcbiAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICBcImRhdGEtZ3JhbW0tZWRpdG9yXCI6IGZhbHNlLFxuICAgIC4uLmZlZWRiYWNrVGV4dFByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGNvbWJpbmVkU3VibWl0QnV0dG9uUHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiU2VuZFwiLFxuICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIC4uLnN1Ym1pdEJ1dHRvblByb3BzLFxuICB9O1xuXG4gIGNvbnN0IG9uRXJyb3JEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU3VjY2Vzc0Rpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZUZlZWRiYWNrRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBvbkVycm9yRGlzbWlzcygpO1xuICAgIG9uU3VjY2Vzc0Rpc21pc3MoKTtcbiAgfSwgW29uRXJyb3JEaXNtaXNzLCBvblN1Y2Nlc3NEaXNtaXNzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGZlZWRiYWNrVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIllvdXIgZmVlZGJhY2sgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG5vdGU6IGZlZWRiYWNrVGV4dCxcbiAgICAgIGVtYWlsOiBlbWFpbFZhbHVlLFxuICAgICAgZW1vdGlvbjogZW1vamlTdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgIH07XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGRyeVJ1bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgU29ycnksIHdlIGNvdWxkbid0IHNlbmQgeW91ciBmZWVkYmFjay4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGZlZWRiYWNrVGV4dCBvbiBzdWNjZXNzXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRFbWFpbFZhbHVlKGVtYWlsSW5pdGlhbFZhbHVlKTtcbiAgICAgICAgc2V0RmVlZGJhY2tUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjbG9zZUZlZWRiYWNrRm9ybSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUubWV0YUtleSkge1xuICAgICAgICBvblN1Ym1pdChlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbG9zZUZlZWRiYWNrRm9ybSwgb25TdWJtaXRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuXG4gIHVzZUNsaWNrQXdheShmb3JtUmVmLCBjbG9zZUZlZWRiYWNrRm9ybSk7XG5cbiAgY29uc3QgZGlzYWJsZUlucHV0cyA9IEJvb2xlYW4obG9hZGluZyB8fCBlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRyaWdnZXJCdXR0b24gPSAodG9vZ2xlUG9wb3ZlcikgPT4ge1xuICAgIC8vaWYgdXNlciBoYXZlIGVycm9yTWVzc2FnZSBvciBhIHN1Y2Nlc3MgYW5kIGFyZSBjbG9zaW5nIHRoZSBwb3BvdmVyIG9uIGJ1dHRvblRyaWdnZXIgY2xlYXIgZXJyb3IgYW5kIHN1Y2Nlc3NcbiAgICBpZiAoKGVycm9yTWVzc2FnZSB8fCBzdWNjZXNzKSAmJiAhdG9vZ2xlUG9wb3Zlcikge1xuICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICB9XG4gICAgc2V0T3Blbih0b29nbGVQb3BvdmVyKTtcbiAgfTtcblxuICBjb25zdCBUcmlnZ2VyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoXywgcmVmKSA9PlxuICAgIGNoaWxkcmVuID8gKFxuICAgICAgY2hpbGRyZW4oeyBvcGVuLCBzZXRPcGVuOiBoYW5kbGVUcmlnZ2VyQnV0dG9uLCByZWY6IHJlZiB9KVxuICAgICkgOiAoXG4gICAgICA8RmVlZGJhY2tCdXR0b24gb3Blbj17b3Blbn0gc2V0T3Blbj17aGFuZGxlVHJpZ2dlckJ1dHRvbn0gcmVmPXtyZWZ9IC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgdGl0bGU9XCJTaGFyZSBhbnkgZmVlZGJhY2sgYWJvdXQgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgcC0wIHJlbGF0aXZlIGlubGluZS1ibG9jayBhbnRpYWxpYXNlZCBmb2N1czpvdXRsaW5lLW5vbmUgYWN0aXZlOm91dGxpbmUtbm9uZWAsXG4gICAgICAgIGVycm9yTWVzc2FnZSAmJiB0d2B0ZXh0LXRyYW5zcGFyZW50YCxcbiAgICAgIF19XG4gICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWluZXItcG9wb3ZlclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBvbk9wZW5DaGFuZ2U9e2Nsb3NlRmVlZGJhY2tGb3JtfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxUcmlnZ2VyQnV0dG9uIC8+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5UcmlnZ2VyPlxuICAgICAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgaC1hdXRvIGJvcmRlci13aGl0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgZmxleCBsZWFkaW5nLTYgdGV4dC1zbSByb3VuZGVkIHNoYWRvdy1sZyBiZy13aGl0ZSBgLFxuICAgICAgICAgICAgICB0d2ByZXNpemUtbm9uZSB6LTUwIHRleHQtZm9yZWdyb3VuZCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlYCxcbiAgICAgICAgICAgICAgdHdgaG92ZXI6Ym9yZGVyLWZvcmVncm91bmQgZm9jdXM6Ym9yZGVyLWZvcmVncm91bmQgYWN0aXZlOmJvcmRlci1mb3JlZ3JvdW5kYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMnJlbVwiIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvcm1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXJyb3JNZXNzYWdlICYmICFzdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e1t0d2BwLTQgcmVsYXRpdmVgXX0+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgdHc9e1wibWItMlwifT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVkYmFjay1lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRFbWFpbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtlbmFibGVGZWVkYmFja1RleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZlZWRiYWNrVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZlZWRiYWNrVGV4dChlKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZT17Y24oXCJmZWVkYmFjay1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnJhbmQtZ3JheVwiOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHR3PXtcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyIHotNTBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBpcz1cInBcIlxuICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI4cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvckRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR28gYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZmVlZGJhY2sgaGFzIGJlZW4gcmVjZWl2ZWQhXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGlzPVwicFwiPlxuICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshc3VjY2VzcyAmJiAhZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgdHdgdy1mdWxsIGgtMTYgcC00IGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC00IGJnLWJhY2tncm91bmQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwb2ludGVyLWV2ZW50cy1hdXRvYCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtb2ppICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbW9qaXNcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBlbW9qaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamlTdGF0ZT17ZW1vamlTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtFTU9KSVMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgU3ZnQ29tcG9uZW50ID0gZW1vamkuc3ZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppUmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Vtb2ppLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0NvbXBvbmVudCBjc3M9e1t0d2B3LTUgaC01YF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHNwYW4gdHc9e1wibWwtYXV0b1wifT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtcInN1Ym1pdC1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PlxuICAgICAgPC9Qb3BvdmVyUHJpbWl0aXZlLlJvb3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GZWVkYmFjay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgU2hvdyB0ZXh0IGFyZWEgdG8gY29sbGVjdCBmZWVkYmFjayB0ZXh0XG4gICAqL1xuICBlbmFibGVGZWVkYmFja1RleHQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFNob3cgZW1vamkgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICovXG4gIGVuYWJsZUVtb2ppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBEb24ndCBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gIGRyeVJ1bjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgVVJMIHRvIG1ha2UgdGhlIFBPU1QgcmVxdWVzdFxuICAgKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgIERvbid0IHNob3cgdGhlIGVtYWlsIGlucHV0IGZpZWxkIGFuZCB1c2UgdGhlIHNwZWNpZmllZCBlbWFpbCBpbnN0ZWFkXG4gICAqL1xuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBlbWFpbCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZW1haWxQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBmZWVkYmFjayB0ZXh0IGFyZWFcbiAgICovXG4gIGZlZWRiYWNrVGV4dFByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFByb3BzIHRvIHBhc3Mgb24gdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIHN1Ym1pdEJ1dHRvblByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFRoZSBwcmVmZXJyZWQgc2lkZSBvZiB0aGUgYW5jaG9yIHRvIHJlbmRlciBhZ2FpbnN0IHdoZW4gb3Blbi5cbiAgKi9cbiAgc2lkZTogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSBhbmNob3IuXG4gICovXG4gIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgIFRoZSBwcmVmZXJyZWQgYWxpZ25tZW50IGFnYWluc3QgdGhlIGFuY2hvci4gTWF5IGNoYW5nZSB3aGVuIGNvbGxpc2lvbnMgb2NjdXIuXG4gICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wic3RhcnRcIiwgXCJjZW50ZXJcIiwgXCJlbmRcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:EmojiRadio;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdETSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXRcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vVGV4dGFyZWFcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgZjkyOSBmcm9tIFwiLi9zdmdzL2Y5MjkuanNcIjtcbmltcG9ydCBmNjAwIGZyb20gXCIuL3N2Z3MvZjYwMC5qc1wiO1xuaW1wb3J0IGY2MTUgZnJvbSBcIi4vc3Zncy9mNjE1LmpzXCI7XG5pbXBvcnQgZjYyZCBmcm9tIFwiLi9zdmdzL2Y2MmQuanNcIjtcbmltcG9ydCB7IHVzZVJhZGlvR3JvdXBTdGF0ZSB9IGZyb20gXCJAcmVhY3Qtc3RhdGVseS9yYWRpb1wiO1xuaW1wb3J0IHsgdXNlUmFkaW8sIHVzZVJhZGlvR3JvdXAgfSBmcm9tIFwiQHJlYWN0LWFyaWEvcmFkaW9cIjtcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlblwiO1xuaW1wb3J0IHsgdXNlRm9jdXNSaW5nIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ZvY3VzXCI7XG5pbXBvcnQgRmVlZGJhY2tCdXR0b24gZnJvbSBcIi4vRmVlZGJhY2tCdXR0b25cIjtcbmltcG9ydCAqIGFzIFBvcG92ZXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5cbmNvbnN0IEVNT0pJUyA9IFtcbiAgeyBjb2RlOiBcImY5MjlcIiwgY2hhcjogXCLwn6SpXCIsIHN2ZzogZjkyOSwgbGFiZWw6IFwidmVyeS1oYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjAwXCIsIGNoYXI6IFwi8J+ZglwiLCBzdmc6IGY2MDAsIGxhYmVsOiBcImhhcHB5XCIgfSxcbiAgeyBjb2RlOiBcImY2MTVcIiwgY2hhcjogXCLwn5iVXCIsIHN2ZzogZjYxNSwgbGFiZWw6IFwibWVoXCIgfSxcbiAgeyBjb2RlOiBcImY2MmRcIiwgY2hhcjogXCLwn5itXCIsIHN2ZzogZjYyZCwgbGFiZWw6IFwidW5oYXBweVwiIH0sXG5dO1xuXG5sZXQgUmFkaW9Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gaHR0cHM6Ly9yZWFjdC1zcGVjdHJ1bS5hZG9iZS5jb20vcmVhY3QtYXJpYS91c2VSYWRpb0dyb3VwLmh0bWwjZXhhbXBsZVxuZnVuY3Rpb24gRW1vamlSYWRpb0dyb3VwKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuLCBsYWJlbCB9ID0gcHJvcHM7XG4gIGxldCBzdGF0ZSA9IHByb3BzLmVtb2ppU3RhdGU7XG4gIGxldCB7IHJhZGlvR3JvdXBQcm9wcywgbGFiZWxQcm9wcyB9ID0gdXNlUmFkaW9Hcm91cChwcm9wcywgc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmFkaW9Hcm91cFByb3BzfSBjc3M9e1t0d2BmbGV4IHNwYWNlLXgtMmBdfT5cbiAgICAgIDxSYWRpb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9SYWRpb0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEVtb2ppUmFkaW8ocHJvcHMpIHtcbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFJhZGlvQ29udGV4dCk7XG4gIGxldCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCB7IGlucHV0UHJvcHMgfSA9IHVzZVJhZGlvKHByb3BzLCBzdGF0ZSwgcmVmKTtcbiAgbGV0IHsgaXNGb2N1c1Zpc2libGUsIGZvY3VzUHJvcHMgfSA9IHVzZUZvY3VzUmluZygpO1xuICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IHByb3BzLnZhbHVlO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGlubGluZS1mbGV4IGJnLXRyYW5zcGFyZW50IHAtMCBtLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGJvcmRlciBib3JkZXItYm9yZGVyIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxgLFxuICAgICAgICB0d2Bob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTEwNSBob3ZlcjpiZy13aGl0ZSBhY3RpdmU6Ymctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBgLFxuICAgICAgICBzZWxlY3RlZCAmJiB0d2BzY2FsZS0xMTAgYm9yZGVyIGJnLXdoaXRlIGJvcmRlci13YXJuaW5nLWxpZ2h0YCxcbiAgICAgICAgaXNGb2N1c1Zpc2libGUgJiYgdHdgcmluZy0yYCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IHsuLi5mb2N1c1Byb3BzfSByZWY9e3JlZn0gLz5cbiAgICAgIDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHR3PXtcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuY29uc3QgRmVlZGJhY2sgPSAoe1xuICB1cmwsXG4gIGVtYWlsLFxuICBlbmFibGVGZWVkYmFja1RleHQgPSB0cnVlLFxuICBlbmFibGVFbW9qaSA9IHRydWUsXG4gIHNpZGUgPSBcImJvdHRvbVwiLFxuICBzaWRlT2Zmc2V0ID0gNSxcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGVtYWlsUHJvcHMsXG4gIGZlZWRiYWNrVGV4dFByb3BzLFxuICBzdWJtaXRCdXR0b25Qcm9wcyxcbiAgZHJ5UnVuID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVuYWJsZUVtYWlsID0gIWVtYWlsO1xuICBjb25zdCBlbWFpbEluaXRpYWxWYWx1ZSA9IGVtYWlsID8gZW1haWwgOiBcIlwiO1xuICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSB1c2VTdGF0ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IFtmZWVkYmFja1RleHQsIHNldEZlZWRiYWNrVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZW1vamlTdGF0ZSA9IHVzZVJhZGlvR3JvdXBTdGF0ZShwcm9wcyk7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjb21iaW5lZEVtYWlsUHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBlbWFpbCBhZGRyZXNzLi4uXCIsXG4gICAgLi4uZW1haWxQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzID0ge1xuICAgIGxhYmVsOiBcIkZlZWRiYWNrXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBmZWVkYmFjay4uLlwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJvd3M6IDMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiRmVlZGJhY2sgaW5wdXRcIixcbiAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICBcImRhdGEtZ3JhbW0tZWRpdG9yXCI6IGZhbHNlLFxuICAgIC4uLmZlZWRiYWNrVGV4dFByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGNvbWJpbmVkU3VibWl0QnV0dG9uUHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiU2VuZFwiLFxuICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIC4uLnN1Ym1pdEJ1dHRvblByb3BzLFxuICB9O1xuXG4gIGNvbnN0IG9uRXJyb3JEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU3VjY2Vzc0Rpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZUZlZWRiYWNrRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBvbkVycm9yRGlzbWlzcygpO1xuICAgIG9uU3VjY2Vzc0Rpc21pc3MoKTtcbiAgfSwgW29uRXJyb3JEaXNtaXNzLCBvblN1Y2Nlc3NEaXNtaXNzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGZlZWRiYWNrVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIllvdXIgZmVlZGJhY2sgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG5vdGU6IGZlZWRiYWNrVGV4dCxcbiAgICAgIGVtYWlsOiBlbWFpbFZhbHVlLFxuICAgICAgZW1vdGlvbjogZW1vamlTdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgIH07XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGRyeVJ1bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgU29ycnksIHdlIGNvdWxkbid0IHNlbmQgeW91ciBmZWVkYmFjay4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGZlZWRiYWNrVGV4dCBvbiBzdWNjZXNzXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRFbWFpbFZhbHVlKGVtYWlsSW5pdGlhbFZhbHVlKTtcbiAgICAgICAgc2V0RmVlZGJhY2tUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjbG9zZUZlZWRiYWNrRm9ybSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUubWV0YUtleSkge1xuICAgICAgICBvblN1Ym1pdChlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbG9zZUZlZWRiYWNrRm9ybSwgb25TdWJtaXRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuXG4gIHVzZUNsaWNrQXdheShmb3JtUmVmLCBjbG9zZUZlZWRiYWNrRm9ybSk7XG5cbiAgY29uc3QgZGlzYWJsZUlucHV0cyA9IEJvb2xlYW4obG9hZGluZyB8fCBlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRyaWdnZXJCdXR0b24gPSAodG9vZ2xlUG9wb3ZlcikgPT4ge1xuICAgIC8vaWYgdXNlciBoYXZlIGVycm9yTWVzc2FnZSBvciBhIHN1Y2Nlc3MgYW5kIGFyZSBjbG9zaW5nIHRoZSBwb3BvdmVyIG9uIGJ1dHRvblRyaWdnZXIgY2xlYXIgZXJyb3IgYW5kIHN1Y2Nlc3NcbiAgICBpZiAoKGVycm9yTWVzc2FnZSB8fCBzdWNjZXNzKSAmJiAhdG9vZ2xlUG9wb3Zlcikge1xuICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICB9XG4gICAgc2V0T3Blbih0b29nbGVQb3BvdmVyKTtcbiAgfTtcblxuICBjb25zdCBUcmlnZ2VyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoXywgcmVmKSA9PlxuICAgIGNoaWxkcmVuID8gKFxuICAgICAgY2hpbGRyZW4oeyBvcGVuLCBzZXRPcGVuOiBoYW5kbGVUcmlnZ2VyQnV0dG9uLCByZWY6IHJlZiB9KVxuICAgICkgOiAoXG4gICAgICA8RmVlZGJhY2tCdXR0b24gb3Blbj17b3Blbn0gc2V0T3Blbj17aGFuZGxlVHJpZ2dlckJ1dHRvbn0gcmVmPXtyZWZ9IC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgdGl0bGU9XCJTaGFyZSBhbnkgZmVlZGJhY2sgYWJvdXQgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgcC0wIHJlbGF0aXZlIGlubGluZS1ibG9jayBhbnRpYWxpYXNlZCBmb2N1czpvdXRsaW5lLW5vbmUgYWN0aXZlOm91dGxpbmUtbm9uZWAsXG4gICAgICAgIGVycm9yTWVzc2FnZSAmJiB0d2B0ZXh0LXRyYW5zcGFyZW50YCxcbiAgICAgIF19XG4gICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWluZXItcG9wb3ZlclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBvbk9wZW5DaGFuZ2U9e2Nsb3NlRmVlZGJhY2tGb3JtfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxUcmlnZ2VyQnV0dG9uIC8+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5UcmlnZ2VyPlxuICAgICAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgaC1hdXRvIGJvcmRlci13aGl0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgZmxleCBsZWFkaW5nLTYgdGV4dC1zbSByb3VuZGVkIHNoYWRvdy1sZyBiZy13aGl0ZSBgLFxuICAgICAgICAgICAgICB0d2ByZXNpemUtbm9uZSB6LTUwIHRleHQtZm9yZWdyb3VuZCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlYCxcbiAgICAgICAgICAgICAgdHdgaG92ZXI6Ym9yZGVyLWZvcmVncm91bmQgZm9jdXM6Ym9yZGVyLWZvcmVncm91bmQgYWN0aXZlOmJvcmRlci1mb3JlZ3JvdW5kYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMnJlbVwiIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvcm1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXJyb3JNZXNzYWdlICYmICFzdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e1t0d2BwLTQgcmVsYXRpdmVgXX0+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgdHc9e1wibWItMlwifT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVkYmFjay1lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRFbWFpbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtlbmFibGVGZWVkYmFja1RleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZlZWRiYWNrVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZlZWRiYWNrVGV4dChlKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZT17Y24oXCJmZWVkYmFjay1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnJhbmQtZ3JheVwiOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHR3PXtcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyIHotNTBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBpcz1cInBcIlxuICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI4cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvckRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR28gYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZmVlZGJhY2sgaGFzIGJlZW4gcmVjZWl2ZWQhXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGlzPVwicFwiPlxuICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshc3VjY2VzcyAmJiAhZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgdHdgdy1mdWxsIGgtMTYgcC00IGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC00IGJnLWJhY2tncm91bmQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwb2ludGVyLWV2ZW50cy1hdXRvYCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtb2ppICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbW9qaXNcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBlbW9qaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamlTdGF0ZT17ZW1vamlTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtFTU9KSVMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgU3ZnQ29tcG9uZW50ID0gZW1vamkuc3ZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppUmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Vtb2ppLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0NvbXBvbmVudCBjc3M9e1t0d2B3LTUgaC01YF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHNwYW4gdHc9e1wibWwtYXV0b1wifT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtcInN1Ym1pdC1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PlxuICAgICAgPC9Qb3BvdmVyUHJpbWl0aXZlLlJvb3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GZWVkYmFjay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgU2hvdyB0ZXh0IGFyZWEgdG8gY29sbGVjdCBmZWVkYmFjayB0ZXh0XG4gICAqL1xuICBlbmFibGVGZWVkYmFja1RleHQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFNob3cgZW1vamkgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICovXG4gIGVuYWJsZUVtb2ppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBEb24ndCBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gIGRyeVJ1bjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgVVJMIHRvIG1ha2UgdGhlIFBPU1QgcmVxdWVzdFxuICAgKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgIERvbid0IHNob3cgdGhlIGVtYWlsIGlucHV0IGZpZWxkIGFuZCB1c2UgdGhlIHNwZWNpZmllZCBlbWFpbCBpbnN0ZWFkXG4gICAqL1xuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBlbWFpbCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZW1haWxQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBmZWVkYmFjayB0ZXh0IGFyZWFcbiAgICovXG4gIGZlZWRiYWNrVGV4dFByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFByb3BzIHRvIHBhc3Mgb24gdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIHN1Ym1pdEJ1dHRvblByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFRoZSBwcmVmZXJyZWQgc2lkZSBvZiB0aGUgYW5jaG9yIHRvIHJlbmRlciBhZ2FpbnN0IHdoZW4gb3Blbi5cbiAgKi9cbiAgc2lkZTogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSBhbmNob3IuXG4gICovXG4gIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgIFRoZSBwcmVmZXJyZWQgYWxpZ25tZW50IGFnYWluc3QgdGhlIGFuY2hvci4gTWF5IGNoYW5nZSB3aGVuIGNvbGxpc2lvbnMgb2NjdXIuXG4gICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wic3RhcnRcIiwgXCJjZW50ZXJcIiwgXCJlbmRcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XG4iXX0= */"]
  }, react.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, null, react.jsx("input", _extends$1({}, inputProps, focusProps, {
    ref: ref
  }))), react.jsx("div", null, react.jsx("span", {
    css: _ref2,
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%"
    }
  }, children)));
}

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "zhlx2k",
  styles: "height:auto;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));appearance:none;border-width:0px;display:flex;line-height:1.25rem;font-size:0.875rem;border-radius:5px;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));resize:none;z-index:50;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));flex-direction:column;justify-content:flex-start;position:relative;:hover{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}:focus{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}:active{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}"
} : {
  name: "1b6rown-Feedback",
  styles: "height:auto;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));appearance:none;border-width:0px;display:flex;line-height:1.25rem;font-size:0.875rem;border-radius:5px;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));resize:none;z-index:50;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));flex-direction:column;justify-content:flex-start;position:relative;:hover{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}:focus{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}:active{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));};label:Feedback;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBQWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXRcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vVGV4dGFyZWFcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgZjkyOSBmcm9tIFwiLi9zdmdzL2Y5MjkuanNcIjtcbmltcG9ydCBmNjAwIGZyb20gXCIuL3N2Z3MvZjYwMC5qc1wiO1xuaW1wb3J0IGY2MTUgZnJvbSBcIi4vc3Zncy9mNjE1LmpzXCI7XG5pbXBvcnQgZjYyZCBmcm9tIFwiLi9zdmdzL2Y2MmQuanNcIjtcbmltcG9ydCB7IHVzZVJhZGlvR3JvdXBTdGF0ZSB9IGZyb20gXCJAcmVhY3Qtc3RhdGVseS9yYWRpb1wiO1xuaW1wb3J0IHsgdXNlUmFkaW8sIHVzZVJhZGlvR3JvdXAgfSBmcm9tIFwiQHJlYWN0LWFyaWEvcmFkaW9cIjtcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlblwiO1xuaW1wb3J0IHsgdXNlRm9jdXNSaW5nIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ZvY3VzXCI7XG5pbXBvcnQgRmVlZGJhY2tCdXR0b24gZnJvbSBcIi4vRmVlZGJhY2tCdXR0b25cIjtcbmltcG9ydCAqIGFzIFBvcG92ZXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5cbmNvbnN0IEVNT0pJUyA9IFtcbiAgeyBjb2RlOiBcImY5MjlcIiwgY2hhcjogXCLwn6SpXCIsIHN2ZzogZjkyOSwgbGFiZWw6IFwidmVyeS1oYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjAwXCIsIGNoYXI6IFwi8J+ZglwiLCBzdmc6IGY2MDAsIGxhYmVsOiBcImhhcHB5XCIgfSxcbiAgeyBjb2RlOiBcImY2MTVcIiwgY2hhcjogXCLwn5iVXCIsIHN2ZzogZjYxNSwgbGFiZWw6IFwibWVoXCIgfSxcbiAgeyBjb2RlOiBcImY2MmRcIiwgY2hhcjogXCLwn5itXCIsIHN2ZzogZjYyZCwgbGFiZWw6IFwidW5oYXBweVwiIH0sXG5dO1xuXG5sZXQgUmFkaW9Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gaHR0cHM6Ly9yZWFjdC1zcGVjdHJ1bS5hZG9iZS5jb20vcmVhY3QtYXJpYS91c2VSYWRpb0dyb3VwLmh0bWwjZXhhbXBsZVxuZnVuY3Rpb24gRW1vamlSYWRpb0dyb3VwKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuLCBsYWJlbCB9ID0gcHJvcHM7XG4gIGxldCBzdGF0ZSA9IHByb3BzLmVtb2ppU3RhdGU7XG4gIGxldCB7IHJhZGlvR3JvdXBQcm9wcywgbGFiZWxQcm9wcyB9ID0gdXNlUmFkaW9Hcm91cChwcm9wcywgc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmFkaW9Hcm91cFByb3BzfSBjc3M9e1t0d2BmbGV4IHNwYWNlLXgtMmBdfT5cbiAgICAgIDxSYWRpb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9SYWRpb0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEVtb2ppUmFkaW8ocHJvcHMpIHtcbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFJhZGlvQ29udGV4dCk7XG4gIGxldCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCB7IGlucHV0UHJvcHMgfSA9IHVzZVJhZGlvKHByb3BzLCBzdGF0ZSwgcmVmKTtcbiAgbGV0IHsgaXNGb2N1c1Zpc2libGUsIGZvY3VzUHJvcHMgfSA9IHVzZUZvY3VzUmluZygpO1xuICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IHByb3BzLnZhbHVlO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGlubGluZS1mbGV4IGJnLXRyYW5zcGFyZW50IHAtMCBtLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGJvcmRlciBib3JkZXItYm9yZGVyIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxgLFxuICAgICAgICB0d2Bob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTEwNSBob3ZlcjpiZy13aGl0ZSBhY3RpdmU6Ymctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBgLFxuICAgICAgICBzZWxlY3RlZCAmJiB0d2BzY2FsZS0xMTAgYm9yZGVyIGJnLXdoaXRlIGJvcmRlci13YXJuaW5nLWxpZ2h0YCxcbiAgICAgICAgaXNGb2N1c1Zpc2libGUgJiYgdHdgcmluZy0yYCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IHsuLi5mb2N1c1Byb3BzfSByZWY9e3JlZn0gLz5cbiAgICAgIDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHR3PXtcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuY29uc3QgRmVlZGJhY2sgPSAoe1xuICB1cmwsXG4gIGVtYWlsLFxuICBlbmFibGVGZWVkYmFja1RleHQgPSB0cnVlLFxuICBlbmFibGVFbW9qaSA9IHRydWUsXG4gIHNpZGUgPSBcImJvdHRvbVwiLFxuICBzaWRlT2Zmc2V0ID0gNSxcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGVtYWlsUHJvcHMsXG4gIGZlZWRiYWNrVGV4dFByb3BzLFxuICBzdWJtaXRCdXR0b25Qcm9wcyxcbiAgZHJ5UnVuID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVuYWJsZUVtYWlsID0gIWVtYWlsO1xuICBjb25zdCBlbWFpbEluaXRpYWxWYWx1ZSA9IGVtYWlsID8gZW1haWwgOiBcIlwiO1xuICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSB1c2VTdGF0ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IFtmZWVkYmFja1RleHQsIHNldEZlZWRiYWNrVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZW1vamlTdGF0ZSA9IHVzZVJhZGlvR3JvdXBTdGF0ZShwcm9wcyk7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjb21iaW5lZEVtYWlsUHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBlbWFpbCBhZGRyZXNzLi4uXCIsXG4gICAgLi4uZW1haWxQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzID0ge1xuICAgIGxhYmVsOiBcIkZlZWRiYWNrXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBmZWVkYmFjay4uLlwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJvd3M6IDMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiRmVlZGJhY2sgaW5wdXRcIixcbiAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICBcImRhdGEtZ3JhbW0tZWRpdG9yXCI6IGZhbHNlLFxuICAgIC4uLmZlZWRiYWNrVGV4dFByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGNvbWJpbmVkU3VibWl0QnV0dG9uUHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiU2VuZFwiLFxuICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIC4uLnN1Ym1pdEJ1dHRvblByb3BzLFxuICB9O1xuXG4gIGNvbnN0IG9uRXJyb3JEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU3VjY2Vzc0Rpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZUZlZWRiYWNrRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBvbkVycm9yRGlzbWlzcygpO1xuICAgIG9uU3VjY2Vzc0Rpc21pc3MoKTtcbiAgfSwgW29uRXJyb3JEaXNtaXNzLCBvblN1Y2Nlc3NEaXNtaXNzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGZlZWRiYWNrVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIllvdXIgZmVlZGJhY2sgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG5vdGU6IGZlZWRiYWNrVGV4dCxcbiAgICAgIGVtYWlsOiBlbWFpbFZhbHVlLFxuICAgICAgZW1vdGlvbjogZW1vamlTdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgIH07XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGRyeVJ1bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgU29ycnksIHdlIGNvdWxkbid0IHNlbmQgeW91ciBmZWVkYmFjay4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGZlZWRiYWNrVGV4dCBvbiBzdWNjZXNzXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRFbWFpbFZhbHVlKGVtYWlsSW5pdGlhbFZhbHVlKTtcbiAgICAgICAgc2V0RmVlZGJhY2tUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjbG9zZUZlZWRiYWNrRm9ybSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUubWV0YUtleSkge1xuICAgICAgICBvblN1Ym1pdChlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbG9zZUZlZWRiYWNrRm9ybSwgb25TdWJtaXRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuXG4gIHVzZUNsaWNrQXdheShmb3JtUmVmLCBjbG9zZUZlZWRiYWNrRm9ybSk7XG5cbiAgY29uc3QgZGlzYWJsZUlucHV0cyA9IEJvb2xlYW4obG9hZGluZyB8fCBlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRyaWdnZXJCdXR0b24gPSAodG9vZ2xlUG9wb3ZlcikgPT4ge1xuICAgIC8vaWYgdXNlciBoYXZlIGVycm9yTWVzc2FnZSBvciBhIHN1Y2Nlc3MgYW5kIGFyZSBjbG9zaW5nIHRoZSBwb3BvdmVyIG9uIGJ1dHRvblRyaWdnZXIgY2xlYXIgZXJyb3IgYW5kIHN1Y2Nlc3NcbiAgICBpZiAoKGVycm9yTWVzc2FnZSB8fCBzdWNjZXNzKSAmJiAhdG9vZ2xlUG9wb3Zlcikge1xuICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICB9XG4gICAgc2V0T3Blbih0b29nbGVQb3BvdmVyKTtcbiAgfTtcblxuICBjb25zdCBUcmlnZ2VyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoXywgcmVmKSA9PlxuICAgIGNoaWxkcmVuID8gKFxuICAgICAgY2hpbGRyZW4oeyBvcGVuLCBzZXRPcGVuOiBoYW5kbGVUcmlnZ2VyQnV0dG9uLCByZWY6IHJlZiB9KVxuICAgICkgOiAoXG4gICAgICA8RmVlZGJhY2tCdXR0b24gb3Blbj17b3Blbn0gc2V0T3Blbj17aGFuZGxlVHJpZ2dlckJ1dHRvbn0gcmVmPXtyZWZ9IC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgdGl0bGU9XCJTaGFyZSBhbnkgZmVlZGJhY2sgYWJvdXQgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgcC0wIHJlbGF0aXZlIGlubGluZS1ibG9jayBhbnRpYWxpYXNlZCBmb2N1czpvdXRsaW5lLW5vbmUgYWN0aXZlOm91dGxpbmUtbm9uZWAsXG4gICAgICAgIGVycm9yTWVzc2FnZSAmJiB0d2B0ZXh0LXRyYW5zcGFyZW50YCxcbiAgICAgIF19XG4gICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWluZXItcG9wb3ZlclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBvbk9wZW5DaGFuZ2U9e2Nsb3NlRmVlZGJhY2tGb3JtfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxUcmlnZ2VyQnV0dG9uIC8+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5UcmlnZ2VyPlxuICAgICAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgaC1hdXRvIGJvcmRlci13aGl0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgZmxleCBsZWFkaW5nLTYgdGV4dC1zbSByb3VuZGVkIHNoYWRvdy1sZyBiZy13aGl0ZSBgLFxuICAgICAgICAgICAgICB0d2ByZXNpemUtbm9uZSB6LTUwIHRleHQtZm9yZWdyb3VuZCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlYCxcbiAgICAgICAgICAgICAgdHdgaG92ZXI6Ym9yZGVyLWZvcmVncm91bmQgZm9jdXM6Ym9yZGVyLWZvcmVncm91bmQgYWN0aXZlOmJvcmRlci1mb3JlZ3JvdW5kYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMnJlbVwiIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvcm1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXJyb3JNZXNzYWdlICYmICFzdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e1t0d2BwLTQgcmVsYXRpdmVgXX0+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgdHc9e1wibWItMlwifT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVkYmFjay1lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRFbWFpbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtlbmFibGVGZWVkYmFja1RleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZlZWRiYWNrVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZlZWRiYWNrVGV4dChlKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZT17Y24oXCJmZWVkYmFjay1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnJhbmQtZ3JheVwiOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHR3PXtcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyIHotNTBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBpcz1cInBcIlxuICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI4cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvckRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR28gYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZmVlZGJhY2sgaGFzIGJlZW4gcmVjZWl2ZWQhXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGlzPVwicFwiPlxuICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshc3VjY2VzcyAmJiAhZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgdHdgdy1mdWxsIGgtMTYgcC00IGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC00IGJnLWJhY2tncm91bmQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwb2ludGVyLWV2ZW50cy1hdXRvYCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtb2ppICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbW9qaXNcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBlbW9qaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamlTdGF0ZT17ZW1vamlTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtFTU9KSVMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgU3ZnQ29tcG9uZW50ID0gZW1vamkuc3ZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppUmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Vtb2ppLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0NvbXBvbmVudCBjc3M9e1t0d2B3LTUgaC01YF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHNwYW4gdHc9e1wibWwtYXV0b1wifT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtcInN1Ym1pdC1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PlxuICAgICAgPC9Qb3BvdmVyUHJpbWl0aXZlLlJvb3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GZWVkYmFjay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgU2hvdyB0ZXh0IGFyZWEgdG8gY29sbGVjdCBmZWVkYmFjayB0ZXh0XG4gICAqL1xuICBlbmFibGVGZWVkYmFja1RleHQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFNob3cgZW1vamkgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICovXG4gIGVuYWJsZUVtb2ppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBEb24ndCBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gIGRyeVJ1bjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgVVJMIHRvIG1ha2UgdGhlIFBPU1QgcmVxdWVzdFxuICAgKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgIERvbid0IHNob3cgdGhlIGVtYWlsIGlucHV0IGZpZWxkIGFuZCB1c2UgdGhlIHNwZWNpZmllZCBlbWFpbCBpbnN0ZWFkXG4gICAqL1xuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBlbWFpbCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZW1haWxQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBmZWVkYmFjayB0ZXh0IGFyZWFcbiAgICovXG4gIGZlZWRiYWNrVGV4dFByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFByb3BzIHRvIHBhc3Mgb24gdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIHN1Ym1pdEJ1dHRvblByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFRoZSBwcmVmZXJyZWQgc2lkZSBvZiB0aGUgYW5jaG9yIHRvIHJlbmRlciBhZ2FpbnN0IHdoZW4gb3Blbi5cbiAgKi9cbiAgc2lkZTogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSBhbmNob3IuXG4gICovXG4gIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgIFRoZSBwcmVmZXJyZWQgYWxpZ25tZW50IGFnYWluc3QgdGhlIGFuY2hvci4gTWF5IGNoYW5nZSB3aGVuIGNvbGxpc2lvbnMgb2NjdXIuXG4gICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wic3RhcnRcIiwgXCJjZW50ZXJcIiwgXCJlbmRcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "dweznn",
  styles: "padding:1rem;position:relative"
} : {
  name: "1eflo63-Feedback",
  styles: "padding:1rem;position:relative;label:Feedback;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9RbUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL0lucHV0XCI7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL1RleHRhcmVhXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IGY5MjkgZnJvbSBcIi4vc3Zncy9mOTI5LmpzXCI7XG5pbXBvcnQgZjYwMCBmcm9tIFwiLi9zdmdzL2Y2MDAuanNcIjtcbmltcG9ydCBmNjE1IGZyb20gXCIuL3N2Z3MvZjYxNS5qc1wiO1xuaW1wb3J0IGY2MmQgZnJvbSBcIi4vc3Zncy9mNjJkLmpzXCI7XG5pbXBvcnQgeyB1c2VSYWRpb0dyb3VwU3RhdGUgfSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvcmFkaW9cIjtcbmltcG9ydCB7IHVzZVJhZGlvLCB1c2VSYWRpb0dyb3VwIH0gZnJvbSBcIkByZWFjdC1hcmlhL3JhZGlvXCI7XG5pbXBvcnQgeyBWaXN1YWxseUhpZGRlbiB9IGZyb20gXCJAcmVhY3QtYXJpYS92aXN1YWxseS1oaWRkZW5cIjtcbmltcG9ydCB7IHVzZUZvY3VzUmluZyB9IGZyb20gXCJAcmVhY3QtYXJpYS9mb2N1c1wiO1xuaW1wb3J0IEZlZWRiYWNrQnV0dG9uIGZyb20gXCIuL0ZlZWRiYWNrQnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBQb3BvdmVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBFTU9KSVMgPSBbXG4gIHsgY29kZTogXCJmOTI5XCIsIGNoYXI6IFwi8J+kqVwiLCBzdmc6IGY5MjksIGxhYmVsOiBcInZlcnktaGFwcHlcIiB9LFxuICB7IGNvZGU6IFwiZjYwMFwiLCBjaGFyOiBcIvCfmYJcIiwgc3ZnOiBmNjAwLCBsYWJlbDogXCJoYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjE1XCIsIGNoYXI6IFwi8J+YlVwiLCBzdmc6IGY2MTUsIGxhYmVsOiBcIm1laFwiIH0sXG4gIHsgY29kZTogXCJmNjJkXCIsIGNoYXI6IFwi8J+YrVwiLCBzdmc6IGY2MmQsIGxhYmVsOiBcInVuaGFwcHlcIiB9LFxuXTtcblxubGV0IFJhZGlvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIGh0dHBzOi8vcmVhY3Qtc3BlY3RydW0uYWRvYmUuY29tL3JlYWN0LWFyaWEvdXNlUmFkaW9Hcm91cC5odG1sI2V4YW1wbGVcbmZ1bmN0aW9uIEVtb2ppUmFkaW9Hcm91cChwcm9wcykge1xuICBsZXQgeyBjaGlsZHJlbiwgbGFiZWwgfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBwcm9wcy5lbW9qaVN0YXRlO1xuICBsZXQgeyByYWRpb0dyb3VwUHJvcHMsIGxhYmVsUHJvcHMgfSA9IHVzZVJhZGlvR3JvdXAocHJvcHMsIHN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnJhZGlvR3JvdXBQcm9wc30gY3NzPXtbdHdgZmxleCBzcGFjZS14LTJgXX0+XG4gICAgICA8UmFkaW9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvUmFkaW9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBFbW9qaVJhZGlvKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChSYWRpb0NvbnRleHQpO1xuICBsZXQgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBsZXQgeyBpbnB1dFByb3BzIH0gPSB1c2VSYWRpbyhwcm9wcywgc3RhdGUsIHJlZik7XG4gIGxldCB7IGlzRm9jdXNWaXNpYmxlLCBmb2N1c1Byb3BzIH0gPSB1c2VGb2N1c1JpbmcoKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFZhbHVlID09PSBwcm9wcy52YWx1ZTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbFxuICAgICAgb25Gb2N1cz17cHJvcHMub25Gb2N1c31cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BpbmxpbmUtZmxleCBiZy10cmFuc3BhcmVudCBwLTAgbS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBib3JkZXIgYm9yZGVyLWJvcmRlciB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsYCxcbiAgICAgICAgdHdgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS0xMDUgaG92ZXI6Ymctd2hpdGUgYWN0aXZlOmJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYCxcbiAgICAgICAgc2VsZWN0ZWQgJiYgdHdgc2NhbGUtMTEwIGJvcmRlciBiZy13aGl0ZSBib3JkZXItd2FybmluZy1saWdodGAsXG4gICAgICAgIGlzRm9jdXNWaXNpYmxlICYmIHR3YHJpbmctMmAsXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxWaXN1YWxseUhpZGRlbj5cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSB7Li4uZm9jdXNQcm9wc30gcmVmPXtyZWZ9IC8+XG4gICAgICA8L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0dz17XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwifVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmNvbnN0IEZlZWRiYWNrID0gKHtcbiAgdXJsLFxuICBlbWFpbCxcbiAgZW5hYmxlRmVlZGJhY2tUZXh0ID0gdHJ1ZSxcbiAgZW5hYmxlRW1vamkgPSB0cnVlLFxuICBzaWRlID0gXCJib3R0b21cIixcbiAgc2lkZU9mZnNldCA9IDUsXG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBlbWFpbFByb3BzLFxuICBmZWVkYmFja1RleHRQcm9wcyxcbiAgc3VibWl0QnV0dG9uUHJvcHMsXG4gIGRyeVJ1biA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBlbmFibGVFbWFpbCA9ICFlbWFpbDtcbiAgY29uc3QgZW1haWxJbml0aWFsVmFsdWUgPSBlbWFpbCA/IGVtYWlsIDogXCJcIjtcbiAgY29uc3QgW2VtYWlsVmFsdWUsIHNldEVtYWlsVmFsdWVdID0gdXNlU3RhdGUoZW1haWxJbml0aWFsVmFsdWUpO1xuICBjb25zdCBbZmVlZGJhY2tUZXh0LCBzZXRGZWVkYmFja1RleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVtb2ppU3RhdGUgPSB1c2VSYWRpb0dyb3VwU3RhdGUocHJvcHMpO1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY29tYmluZWRFbWFpbFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZW1haWwgYWRkcmVzcy4uLlwiLFxuICAgIC4uLmVtYWlsUHJvcHMsXG4gIH07XG5cbiAgY29uc3QgY29tYmluZWRGZWVkYmFja1RleHRQcm9wcyA9IHtcbiAgICBsYWJlbDogXCJGZWVkYmFja1wiLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZmVlZGJhY2suLi5cIixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByb3dzOiAzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkZlZWRiYWNrIGlucHV0XCIsXG4gICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgXCJkYXRhLWdyYW1tLWVkaXRvclwiOiBmYWxzZSxcbiAgICAuLi5mZWVkYmFja1RleHRQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzID0ge1xuICAgIGxhYmVsOiBcIlNlbmRcIixcbiAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAuLi5zdWJtaXRCdXR0b25Qcm9wcyxcbiAgfTtcblxuICBjb25zdCBvbkVycm9yRGlzbWlzcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN1Y2Nlc3NEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VGZWVkYmFja0Zvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgb25FcnJvckRpc21pc3MoKTtcbiAgICBvblN1Y2Nlc3NEaXNtaXNzKCk7XG4gIH0sIFtvbkVycm9yRGlzbWlzcywgb25TdWNjZXNzRGlzbWlzc10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChmZWVkYmFja1RleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJZb3VyIGZlZWRiYWNrIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBub3RlOiBmZWVkYmFja1RleHQsXG4gICAgICBlbWFpbDogZW1haWxWYWx1ZSxcbiAgICAgIGVtb3Rpb246IGVtb2ppU3RhdGUuc2VsZWN0ZWRWYWx1ZSxcbiAgICB9O1xuICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChkcnlSdW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFNvcnJ5LCB3ZSBjb3VsZG4ndCBzZW5kIHlvdXIgZmVlZGJhY2suIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBmZWVkYmFja1RleHQgb24gc3VjY2Vzc1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gICAgICAgIHNldEZlZWRiYWNrVGV4dChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLm1ldGFLZXkpIHtcbiAgICAgICAgb25TdWJtaXQoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xvc2VGZWVkYmFja0Zvcm0sIG9uU3VibWl0XVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH07XG4gIH0sIFtvbktleURvd25dKTtcblxuICB1c2VDbGlja0F3YXkoZm9ybVJlZiwgY2xvc2VGZWVkYmFja0Zvcm0pO1xuXG4gIGNvbnN0IGRpc2FibGVJbnB1dHMgPSBCb29sZWFuKGxvYWRpbmcgfHwgZXJyb3JNZXNzYWdlKTtcblxuICBjb25zdCBoYW5kbGVUcmlnZ2VyQnV0dG9uID0gKHRvb2dsZVBvcG92ZXIpID0+IHtcbiAgICAvL2lmIHVzZXIgaGF2ZSBlcnJvck1lc3NhZ2Ugb3IgYSBzdWNjZXNzIGFuZCBhcmUgY2xvc2luZyB0aGUgcG9wb3ZlciBvbiBidXR0b25UcmlnZ2VyIGNsZWFyIGVycm9yIGFuZCBzdWNjZXNzXG4gICAgaWYgKChlcnJvck1lc3NhZ2UgfHwgc3VjY2VzcykgJiYgIXRvb2dsZVBvcG92ZXIpIHtcbiAgICAgIGNsb3NlRmVlZGJhY2tGb3JtKCk7XG4gICAgfVxuICAgIHNldE9wZW4odG9vZ2xlUG9wb3Zlcik7XG4gIH07XG5cbiAgY29uc3QgVHJpZ2dlckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF8sIHJlZikgPT5cbiAgICBjaGlsZHJlbiA/IChcbiAgICAgIGNoaWxkcmVuKHsgb3Blbiwgc2V0T3BlbjogaGFuZGxlVHJpZ2dlckJ1dHRvbiwgcmVmOiByZWYgfSlcbiAgICApIDogKFxuICAgICAgPEZlZWRiYWNrQnV0dG9uIG9wZW49e29wZW59IHNldE9wZW49e2hhbmRsZVRyaWdnZXJCdXR0b259IHJlZj17cmVmfSAvPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHRpdGxlPVwiU2hhcmUgYW55IGZlZWRiYWNrIGFib3V0IG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHAtMCByZWxhdGl2ZSBpbmxpbmUtYmxvY2sgYW50aWFsaWFzZWQgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpvdXRsaW5lLW5vbmVgLFxuICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdHdgdGV4dC10cmFuc3BhcmVudGAsXG4gICAgICBdfVxuICAgICAgYXJpYS1leHBhbmRlZD17b3Blbn1cbiAgICAgIGRhdGEtdGVzdGlkPVwiY29udGFpbmVyLXBvcG92ZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlJvb3Qgb25PcGVuQ2hhbmdlPXtjbG9zZUZlZWRiYWNrRm9ybX0gb3Blbj17b3Blbn0+XG4gICAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICA8VHJpZ2dlckJ1dHRvbiAvPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuVHJpZ2dlcj5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxuICAgICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICAgICAgc2lkZT17c2lkZX1cbiAgICAgICAgICBhbGlnbj17YWxpZ259XG4gICAgICAgID5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGgtYXV0byBib3JkZXItd2hpdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIGZsZXggbGVhZGluZy02IHRleHQtc20gcm91bmRlZCBzaGFkb3ctbGcgYmctd2hpdGUgYCxcbiAgICAgICAgICAgICAgdHdgcmVzaXplLW5vbmUgei01MCB0ZXh0LWZvcmVncm91bmQgZmxleC1jb2wganVzdGlmeS1zdGFydCByZWxhdGl2ZWAsXG4gICAgICAgICAgICAgIHR3YGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIGZvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIGFjdGl2ZTpib3JkZXItZm9yZWdyb3VuZGAsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjJyZW1cIiB9fVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmb3JtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWVycm9yTWVzc2FnZSAmJiAhc3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtbdHdgcC00IHJlbGF0aXZlYF19PlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHR3PXtcIm1iLTJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEVtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbWJpbmVkRW1haWxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7ZW5hYmxlRmVlZGJhY2tUZXh0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlZWRiYWNrLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmZWVkYmFja1RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGZWVkYmFja1RleHQoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWU9e2NuKFwiZmVlZGJhY2staW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJyYW5kLWdyYXlcIjogbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRGZWVkYmFja1RleHRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiOHB4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JEaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkdvIGJhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdHc9e1xuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXIgei01MFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgc21hbGwgaXM9XCJwXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIGZlZWRiYWNrIGhhcyBiZWVuIHJlY2VpdmVkIVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7IXN1Y2Nlc3MgJiYgIWVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgIHR3YHctZnVsbCBoLTE2IHAtNCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBnYXAtNCBiZy1iYWNrZ3JvdW5kIGJvcmRlci10IGJvcmRlci1ib3JkZXIgcG9pbnRlci1ldmVudHMtYXV0b2AsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbW9qaSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZW1vamlzXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8RW1vamlSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgYW4gZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppU3RhdGU9e2Vtb2ppU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7RU1PSklTLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFN2Z0NvbXBvbmVudCA9IGVtb2ppLnN2ZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtlbW9qaS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdDb21wb25lbnQgY3NzPXtbdHdgdy01IGgtNWBdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIHR3PXtcIm1sLWF1dG9cIn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17XCJzdWJtaXQtYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRTdWJtaXRCdXR0b25Qcm9wc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuQ29udGVudD5cbiAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Sb290PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmVlZGJhY2sucHJvcFR5cGVzID0ge1xuICAvKipcbiAgIFNob3cgdGV4dCBhcmVhIHRvIGNvbGxlY3QgZmVlZGJhY2sgdGV4dFxuICAgKi9cbiAgZW5hYmxlRmVlZGJhY2tUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBTaG93IGVtb2ppIHNlbGVjdGlvbiBidXR0b25zXG4gICAqL1xuICBlbmFibGVFbW9qaTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgRG9uJ3QgbWFrZSB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICBkcnlSdW46IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFVSTCB0byBtYWtlIHRoZSBQT1NUIHJlcXVlc3RcbiAgICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBEb24ndCBzaG93IHRoZSBlbWFpbCBpbnB1dCBmaWVsZCBhbmQgdXNlIHRoZSBzcGVjaWZpZWQgZW1haWwgaW5zdGVhZFxuICAgKi9cbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZW1haWwgaW5wdXQgZmllbGRcbiAgICovXG4gIGVtYWlsUHJvcHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZmVlZGJhY2sgdGV4dCBhcmVhXG4gICAqL1xuICBmZWVkYmFja1RleHRQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBzdWJtaXRCdXR0b25Qcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBUaGUgcHJlZmVycmVkIHNpZGUgb2YgdGhlIGFuY2hvciB0byByZW5kZXIgYWdhaW5zdCB3aGVuIG9wZW4uXG4gICovXG4gIHNpZGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAvKipcbiAgIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgYW5jaG9yLlxuICAqL1xuICBzaWRlT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICBUaGUgcHJlZmVycmVkIGFsaWdubWVudCBhZ2FpbnN0IHRoZSBhbmNob3IuIE1heSBjaGFuZ2Ugd2hlbiBjb2xsaXNpb25zIG9jY3VyLlxuICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcInN0YXJ0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "1gok8e8",
  styles: "margin-bottom:0.5rem"
} : {
  name: "1xrwcof-Feedback",
  styles: "margin-bottom:0.5rem;label:Feedback;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref6 = process.env.NODE_ENV === "production" ? {
  name: "1iasts7",
  styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;z-index:50"
} : {
  name: "15k0n1c-Feedback",
  styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;z-index:50;label:Feedback;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref7 = process.env.NODE_ENV === "production" ? {
  name: "1iasts7",
  styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;z-index:50"
} : {
  name: "15k0n1c-Feedback",
  styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;z-index:50;label:Feedback;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref8 = process.env.NODE_ENV === "production" ? {
  name: "1jscwas",
  styles: "width:100%;height:4rem;padding:1rem;display:flex;justify-content:flex-end;align-items:center;gap:1rem;--tw-bg-opacity:1;background-color:rgba(244, 245, 247, var(--tw-bg-opacity));border-top-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));pointer-events:auto"
} : {
  name: "13uq7j6-Feedback",
  styles: "width:100%;height:4rem;padding:1rem;display:flex;justify-content:flex-end;align-items:center;gap:1rem;--tw-bg-opacity:1;background-color:rgba(244, 245, 247, var(--tw-bg-opacity));border-top-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));pointer-events:auto;label:Feedback;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStVZ0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL0lucHV0XCI7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL1RleHRhcmVhXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IGY5MjkgZnJvbSBcIi4vc3Zncy9mOTI5LmpzXCI7XG5pbXBvcnQgZjYwMCBmcm9tIFwiLi9zdmdzL2Y2MDAuanNcIjtcbmltcG9ydCBmNjE1IGZyb20gXCIuL3N2Z3MvZjYxNS5qc1wiO1xuaW1wb3J0IGY2MmQgZnJvbSBcIi4vc3Zncy9mNjJkLmpzXCI7XG5pbXBvcnQgeyB1c2VSYWRpb0dyb3VwU3RhdGUgfSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvcmFkaW9cIjtcbmltcG9ydCB7IHVzZVJhZGlvLCB1c2VSYWRpb0dyb3VwIH0gZnJvbSBcIkByZWFjdC1hcmlhL3JhZGlvXCI7XG5pbXBvcnQgeyBWaXN1YWxseUhpZGRlbiB9IGZyb20gXCJAcmVhY3QtYXJpYS92aXN1YWxseS1oaWRkZW5cIjtcbmltcG9ydCB7IHVzZUZvY3VzUmluZyB9IGZyb20gXCJAcmVhY3QtYXJpYS9mb2N1c1wiO1xuaW1wb3J0IEZlZWRiYWNrQnV0dG9uIGZyb20gXCIuL0ZlZWRiYWNrQnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBQb3BvdmVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBFTU9KSVMgPSBbXG4gIHsgY29kZTogXCJmOTI5XCIsIGNoYXI6IFwi8J+kqVwiLCBzdmc6IGY5MjksIGxhYmVsOiBcInZlcnktaGFwcHlcIiB9LFxuICB7IGNvZGU6IFwiZjYwMFwiLCBjaGFyOiBcIvCfmYJcIiwgc3ZnOiBmNjAwLCBsYWJlbDogXCJoYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjE1XCIsIGNoYXI6IFwi8J+YlVwiLCBzdmc6IGY2MTUsIGxhYmVsOiBcIm1laFwiIH0sXG4gIHsgY29kZTogXCJmNjJkXCIsIGNoYXI6IFwi8J+YrVwiLCBzdmc6IGY2MmQsIGxhYmVsOiBcInVuaGFwcHlcIiB9LFxuXTtcblxubGV0IFJhZGlvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIGh0dHBzOi8vcmVhY3Qtc3BlY3RydW0uYWRvYmUuY29tL3JlYWN0LWFyaWEvdXNlUmFkaW9Hcm91cC5odG1sI2V4YW1wbGVcbmZ1bmN0aW9uIEVtb2ppUmFkaW9Hcm91cChwcm9wcykge1xuICBsZXQgeyBjaGlsZHJlbiwgbGFiZWwgfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBwcm9wcy5lbW9qaVN0YXRlO1xuICBsZXQgeyByYWRpb0dyb3VwUHJvcHMsIGxhYmVsUHJvcHMgfSA9IHVzZVJhZGlvR3JvdXAocHJvcHMsIHN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnJhZGlvR3JvdXBQcm9wc30gY3NzPXtbdHdgZmxleCBzcGFjZS14LTJgXX0+XG4gICAgICA8UmFkaW9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvUmFkaW9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBFbW9qaVJhZGlvKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChSYWRpb0NvbnRleHQpO1xuICBsZXQgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBsZXQgeyBpbnB1dFByb3BzIH0gPSB1c2VSYWRpbyhwcm9wcywgc3RhdGUsIHJlZik7XG4gIGxldCB7IGlzRm9jdXNWaXNpYmxlLCBmb2N1c1Byb3BzIH0gPSB1c2VGb2N1c1JpbmcoKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFZhbHVlID09PSBwcm9wcy52YWx1ZTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbFxuICAgICAgb25Gb2N1cz17cHJvcHMub25Gb2N1c31cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BpbmxpbmUtZmxleCBiZy10cmFuc3BhcmVudCBwLTAgbS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBib3JkZXIgYm9yZGVyLWJvcmRlciB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsYCxcbiAgICAgICAgdHdgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS0xMDUgaG92ZXI6Ymctd2hpdGUgYWN0aXZlOmJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYCxcbiAgICAgICAgc2VsZWN0ZWQgJiYgdHdgc2NhbGUtMTEwIGJvcmRlciBiZy13aGl0ZSBib3JkZXItd2FybmluZy1saWdodGAsXG4gICAgICAgIGlzRm9jdXNWaXNpYmxlICYmIHR3YHJpbmctMmAsXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxWaXN1YWxseUhpZGRlbj5cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSB7Li4uZm9jdXNQcm9wc30gcmVmPXtyZWZ9IC8+XG4gICAgICA8L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0dz17XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwifVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmNvbnN0IEZlZWRiYWNrID0gKHtcbiAgdXJsLFxuICBlbWFpbCxcbiAgZW5hYmxlRmVlZGJhY2tUZXh0ID0gdHJ1ZSxcbiAgZW5hYmxlRW1vamkgPSB0cnVlLFxuICBzaWRlID0gXCJib3R0b21cIixcbiAgc2lkZU9mZnNldCA9IDUsXG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBlbWFpbFByb3BzLFxuICBmZWVkYmFja1RleHRQcm9wcyxcbiAgc3VibWl0QnV0dG9uUHJvcHMsXG4gIGRyeVJ1biA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBlbmFibGVFbWFpbCA9ICFlbWFpbDtcbiAgY29uc3QgZW1haWxJbml0aWFsVmFsdWUgPSBlbWFpbCA/IGVtYWlsIDogXCJcIjtcbiAgY29uc3QgW2VtYWlsVmFsdWUsIHNldEVtYWlsVmFsdWVdID0gdXNlU3RhdGUoZW1haWxJbml0aWFsVmFsdWUpO1xuICBjb25zdCBbZmVlZGJhY2tUZXh0LCBzZXRGZWVkYmFja1RleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVtb2ppU3RhdGUgPSB1c2VSYWRpb0dyb3VwU3RhdGUocHJvcHMpO1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY29tYmluZWRFbWFpbFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZW1haWwgYWRkcmVzcy4uLlwiLFxuICAgIC4uLmVtYWlsUHJvcHMsXG4gIH07XG5cbiAgY29uc3QgY29tYmluZWRGZWVkYmFja1RleHRQcm9wcyA9IHtcbiAgICBsYWJlbDogXCJGZWVkYmFja1wiLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZmVlZGJhY2suLi5cIixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByb3dzOiAzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkZlZWRiYWNrIGlucHV0XCIsXG4gICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgXCJkYXRhLWdyYW1tLWVkaXRvclwiOiBmYWxzZSxcbiAgICAuLi5mZWVkYmFja1RleHRQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzID0ge1xuICAgIGxhYmVsOiBcIlNlbmRcIixcbiAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAuLi5zdWJtaXRCdXR0b25Qcm9wcyxcbiAgfTtcblxuICBjb25zdCBvbkVycm9yRGlzbWlzcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN1Y2Nlc3NEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VGZWVkYmFja0Zvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgb25FcnJvckRpc21pc3MoKTtcbiAgICBvblN1Y2Nlc3NEaXNtaXNzKCk7XG4gIH0sIFtvbkVycm9yRGlzbWlzcywgb25TdWNjZXNzRGlzbWlzc10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChmZWVkYmFja1RleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJZb3VyIGZlZWRiYWNrIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBub3RlOiBmZWVkYmFja1RleHQsXG4gICAgICBlbWFpbDogZW1haWxWYWx1ZSxcbiAgICAgIGVtb3Rpb246IGVtb2ppU3RhdGUuc2VsZWN0ZWRWYWx1ZSxcbiAgICB9O1xuICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChkcnlSdW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFNvcnJ5LCB3ZSBjb3VsZG4ndCBzZW5kIHlvdXIgZmVlZGJhY2suIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBmZWVkYmFja1RleHQgb24gc3VjY2Vzc1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gICAgICAgIHNldEZlZWRiYWNrVGV4dChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLm1ldGFLZXkpIHtcbiAgICAgICAgb25TdWJtaXQoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xvc2VGZWVkYmFja0Zvcm0sIG9uU3VibWl0XVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH07XG4gIH0sIFtvbktleURvd25dKTtcblxuICB1c2VDbGlja0F3YXkoZm9ybVJlZiwgY2xvc2VGZWVkYmFja0Zvcm0pO1xuXG4gIGNvbnN0IGRpc2FibGVJbnB1dHMgPSBCb29sZWFuKGxvYWRpbmcgfHwgZXJyb3JNZXNzYWdlKTtcblxuICBjb25zdCBoYW5kbGVUcmlnZ2VyQnV0dG9uID0gKHRvb2dsZVBvcG92ZXIpID0+IHtcbiAgICAvL2lmIHVzZXIgaGF2ZSBlcnJvck1lc3NhZ2Ugb3IgYSBzdWNjZXNzIGFuZCBhcmUgY2xvc2luZyB0aGUgcG9wb3ZlciBvbiBidXR0b25UcmlnZ2VyIGNsZWFyIGVycm9yIGFuZCBzdWNjZXNzXG4gICAgaWYgKChlcnJvck1lc3NhZ2UgfHwgc3VjY2VzcykgJiYgIXRvb2dsZVBvcG92ZXIpIHtcbiAgICAgIGNsb3NlRmVlZGJhY2tGb3JtKCk7XG4gICAgfVxuICAgIHNldE9wZW4odG9vZ2xlUG9wb3Zlcik7XG4gIH07XG5cbiAgY29uc3QgVHJpZ2dlckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF8sIHJlZikgPT5cbiAgICBjaGlsZHJlbiA/IChcbiAgICAgIGNoaWxkcmVuKHsgb3Blbiwgc2V0T3BlbjogaGFuZGxlVHJpZ2dlckJ1dHRvbiwgcmVmOiByZWYgfSlcbiAgICApIDogKFxuICAgICAgPEZlZWRiYWNrQnV0dG9uIG9wZW49e29wZW59IHNldE9wZW49e2hhbmRsZVRyaWdnZXJCdXR0b259IHJlZj17cmVmfSAvPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHRpdGxlPVwiU2hhcmUgYW55IGZlZWRiYWNrIGFib3V0IG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHAtMCByZWxhdGl2ZSBpbmxpbmUtYmxvY2sgYW50aWFsaWFzZWQgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpvdXRsaW5lLW5vbmVgLFxuICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdHdgdGV4dC10cmFuc3BhcmVudGAsXG4gICAgICBdfVxuICAgICAgYXJpYS1leHBhbmRlZD17b3Blbn1cbiAgICAgIGRhdGEtdGVzdGlkPVwiY29udGFpbmVyLXBvcG92ZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlJvb3Qgb25PcGVuQ2hhbmdlPXtjbG9zZUZlZWRiYWNrRm9ybX0gb3Blbj17b3Blbn0+XG4gICAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICA8VHJpZ2dlckJ1dHRvbiAvPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuVHJpZ2dlcj5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxuICAgICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICAgICAgc2lkZT17c2lkZX1cbiAgICAgICAgICBhbGlnbj17YWxpZ259XG4gICAgICAgID5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGgtYXV0byBib3JkZXItd2hpdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIGZsZXggbGVhZGluZy02IHRleHQtc20gcm91bmRlZCBzaGFkb3ctbGcgYmctd2hpdGUgYCxcbiAgICAgICAgICAgICAgdHdgcmVzaXplLW5vbmUgei01MCB0ZXh0LWZvcmVncm91bmQgZmxleC1jb2wganVzdGlmeS1zdGFydCByZWxhdGl2ZWAsXG4gICAgICAgICAgICAgIHR3YGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIGZvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIGFjdGl2ZTpib3JkZXItZm9yZWdyb3VuZGAsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjJyZW1cIiB9fVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmb3JtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWVycm9yTWVzc2FnZSAmJiAhc3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtbdHdgcC00IHJlbGF0aXZlYF19PlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHR3PXtcIm1iLTJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEVtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbWJpbmVkRW1haWxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7ZW5hYmxlRmVlZGJhY2tUZXh0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlZWRiYWNrLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmZWVkYmFja1RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGZWVkYmFja1RleHQoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWU9e2NuKFwiZmVlZGJhY2staW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJyYW5kLWdyYXlcIjogbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRGZWVkYmFja1RleHRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiOHB4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JEaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkdvIGJhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdHc9e1xuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXIgei01MFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgc21hbGwgaXM9XCJwXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIGZlZWRiYWNrIGhhcyBiZWVuIHJlY2VpdmVkIVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7IXN1Y2Nlc3MgJiYgIWVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgIHR3YHctZnVsbCBoLTE2IHAtNCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBnYXAtNCBiZy1iYWNrZ3JvdW5kIGJvcmRlci10IGJvcmRlci1ib3JkZXIgcG9pbnRlci1ldmVudHMtYXV0b2AsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbW9qaSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZW1vamlzXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8RW1vamlSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgYW4gZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppU3RhdGU9e2Vtb2ppU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7RU1PSklTLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFN2Z0NvbXBvbmVudCA9IGVtb2ppLnN2ZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtlbW9qaS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdDb21wb25lbnQgY3NzPXtbdHdgdy01IGgtNWBdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIHR3PXtcIm1sLWF1dG9cIn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17XCJzdWJtaXQtYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRTdWJtaXRCdXR0b25Qcm9wc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuQ29udGVudD5cbiAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Sb290PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmVlZGJhY2sucHJvcFR5cGVzID0ge1xuICAvKipcbiAgIFNob3cgdGV4dCBhcmVhIHRvIGNvbGxlY3QgZmVlZGJhY2sgdGV4dFxuICAgKi9cbiAgZW5hYmxlRmVlZGJhY2tUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBTaG93IGVtb2ppIHNlbGVjdGlvbiBidXR0b25zXG4gICAqL1xuICBlbmFibGVFbW9qaTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgRG9uJ3QgbWFrZSB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICBkcnlSdW46IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFVSTCB0byBtYWtlIHRoZSBQT1NUIHJlcXVlc3RcbiAgICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBEb24ndCBzaG93IHRoZSBlbWFpbCBpbnB1dCBmaWVsZCBhbmQgdXNlIHRoZSBzcGVjaWZpZWQgZW1haWwgaW5zdGVhZFxuICAgKi9cbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZW1haWwgaW5wdXQgZmllbGRcbiAgICovXG4gIGVtYWlsUHJvcHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZmVlZGJhY2sgdGV4dCBhcmVhXG4gICAqL1xuICBmZWVkYmFja1RleHRQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBzdWJtaXRCdXR0b25Qcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBUaGUgcHJlZmVycmVkIHNpZGUgb2YgdGhlIGFuY2hvciB0byByZW5kZXIgYWdhaW5zdCB3aGVuIG9wZW4uXG4gICovXG4gIHNpZGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAvKipcbiAgIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgYW5jaG9yLlxuICAqL1xuICBzaWRlT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICBUaGUgcHJlZmVycmVkIGFsaWdubWVudCBhZ2FpbnN0IHRoZSBhbmNob3IuIE1heSBjaGFuZ2Ugd2hlbiBjb2xsaXNpb25zIG9jY3VyLlxuICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcInN0YXJ0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref9 = process.env.NODE_ENV === "production" ? {
  name: "1h7ldow",
  styles: "width:1.25rem;height:1.25rem"
} : {
  name: "vskhbv-Feedback",
  styles: "width:1.25rem;height:1.25rem;label:Feedback;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlXMEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL0lucHV0XCI7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL1RleHRhcmVhXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IGY5MjkgZnJvbSBcIi4vc3Zncy9mOTI5LmpzXCI7XG5pbXBvcnQgZjYwMCBmcm9tIFwiLi9zdmdzL2Y2MDAuanNcIjtcbmltcG9ydCBmNjE1IGZyb20gXCIuL3N2Z3MvZjYxNS5qc1wiO1xuaW1wb3J0IGY2MmQgZnJvbSBcIi4vc3Zncy9mNjJkLmpzXCI7XG5pbXBvcnQgeyB1c2VSYWRpb0dyb3VwU3RhdGUgfSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvcmFkaW9cIjtcbmltcG9ydCB7IHVzZVJhZGlvLCB1c2VSYWRpb0dyb3VwIH0gZnJvbSBcIkByZWFjdC1hcmlhL3JhZGlvXCI7XG5pbXBvcnQgeyBWaXN1YWxseUhpZGRlbiB9IGZyb20gXCJAcmVhY3QtYXJpYS92aXN1YWxseS1oaWRkZW5cIjtcbmltcG9ydCB7IHVzZUZvY3VzUmluZyB9IGZyb20gXCJAcmVhY3QtYXJpYS9mb2N1c1wiO1xuaW1wb3J0IEZlZWRiYWNrQnV0dG9uIGZyb20gXCIuL0ZlZWRiYWNrQnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBQb3BvdmVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBFTU9KSVMgPSBbXG4gIHsgY29kZTogXCJmOTI5XCIsIGNoYXI6IFwi8J+kqVwiLCBzdmc6IGY5MjksIGxhYmVsOiBcInZlcnktaGFwcHlcIiB9LFxuICB7IGNvZGU6IFwiZjYwMFwiLCBjaGFyOiBcIvCfmYJcIiwgc3ZnOiBmNjAwLCBsYWJlbDogXCJoYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjE1XCIsIGNoYXI6IFwi8J+YlVwiLCBzdmc6IGY2MTUsIGxhYmVsOiBcIm1laFwiIH0sXG4gIHsgY29kZTogXCJmNjJkXCIsIGNoYXI6IFwi8J+YrVwiLCBzdmc6IGY2MmQsIGxhYmVsOiBcInVuaGFwcHlcIiB9LFxuXTtcblxubGV0IFJhZGlvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIGh0dHBzOi8vcmVhY3Qtc3BlY3RydW0uYWRvYmUuY29tL3JlYWN0LWFyaWEvdXNlUmFkaW9Hcm91cC5odG1sI2V4YW1wbGVcbmZ1bmN0aW9uIEVtb2ppUmFkaW9Hcm91cChwcm9wcykge1xuICBsZXQgeyBjaGlsZHJlbiwgbGFiZWwgfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBwcm9wcy5lbW9qaVN0YXRlO1xuICBsZXQgeyByYWRpb0dyb3VwUHJvcHMsIGxhYmVsUHJvcHMgfSA9IHVzZVJhZGlvR3JvdXAocHJvcHMsIHN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnJhZGlvR3JvdXBQcm9wc30gY3NzPXtbdHdgZmxleCBzcGFjZS14LTJgXX0+XG4gICAgICA8UmFkaW9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvUmFkaW9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBFbW9qaVJhZGlvKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChSYWRpb0NvbnRleHQpO1xuICBsZXQgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBsZXQgeyBpbnB1dFByb3BzIH0gPSB1c2VSYWRpbyhwcm9wcywgc3RhdGUsIHJlZik7XG4gIGxldCB7IGlzRm9jdXNWaXNpYmxlLCBmb2N1c1Byb3BzIH0gPSB1c2VGb2N1c1JpbmcoKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFZhbHVlID09PSBwcm9wcy52YWx1ZTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbFxuICAgICAgb25Gb2N1cz17cHJvcHMub25Gb2N1c31cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BpbmxpbmUtZmxleCBiZy10cmFuc3BhcmVudCBwLTAgbS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBib3JkZXIgYm9yZGVyLWJvcmRlciB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsYCxcbiAgICAgICAgdHdgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS0xMDUgaG92ZXI6Ymctd2hpdGUgYWN0aXZlOmJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYCxcbiAgICAgICAgc2VsZWN0ZWQgJiYgdHdgc2NhbGUtMTEwIGJvcmRlciBiZy13aGl0ZSBib3JkZXItd2FybmluZy1saWdodGAsXG4gICAgICAgIGlzRm9jdXNWaXNpYmxlICYmIHR3YHJpbmctMmAsXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxWaXN1YWxseUhpZGRlbj5cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSB7Li4uZm9jdXNQcm9wc30gcmVmPXtyZWZ9IC8+XG4gICAgICA8L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0dz17XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwifVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmNvbnN0IEZlZWRiYWNrID0gKHtcbiAgdXJsLFxuICBlbWFpbCxcbiAgZW5hYmxlRmVlZGJhY2tUZXh0ID0gdHJ1ZSxcbiAgZW5hYmxlRW1vamkgPSB0cnVlLFxuICBzaWRlID0gXCJib3R0b21cIixcbiAgc2lkZU9mZnNldCA9IDUsXG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBlbWFpbFByb3BzLFxuICBmZWVkYmFja1RleHRQcm9wcyxcbiAgc3VibWl0QnV0dG9uUHJvcHMsXG4gIGRyeVJ1biA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBlbmFibGVFbWFpbCA9ICFlbWFpbDtcbiAgY29uc3QgZW1haWxJbml0aWFsVmFsdWUgPSBlbWFpbCA/IGVtYWlsIDogXCJcIjtcbiAgY29uc3QgW2VtYWlsVmFsdWUsIHNldEVtYWlsVmFsdWVdID0gdXNlU3RhdGUoZW1haWxJbml0aWFsVmFsdWUpO1xuICBjb25zdCBbZmVlZGJhY2tUZXh0LCBzZXRGZWVkYmFja1RleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVtb2ppU3RhdGUgPSB1c2VSYWRpb0dyb3VwU3RhdGUocHJvcHMpO1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY29tYmluZWRFbWFpbFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZW1haWwgYWRkcmVzcy4uLlwiLFxuICAgIC4uLmVtYWlsUHJvcHMsXG4gIH07XG5cbiAgY29uc3QgY29tYmluZWRGZWVkYmFja1RleHRQcm9wcyA9IHtcbiAgICBsYWJlbDogXCJGZWVkYmFja1wiLFxuICAgIHBsYWNlaG9sZGVyOiBcIllvdXIgZmVlZGJhY2suLi5cIixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByb3dzOiAzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkZlZWRiYWNrIGlucHV0XCIsXG4gICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgXCJkYXRhLWdyYW1tLWVkaXRvclwiOiBmYWxzZSxcbiAgICAuLi5mZWVkYmFja1RleHRQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzID0ge1xuICAgIGxhYmVsOiBcIlNlbmRcIixcbiAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAuLi5zdWJtaXRCdXR0b25Qcm9wcyxcbiAgfTtcblxuICBjb25zdCBvbkVycm9yRGlzbWlzcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN1Y2Nlc3NEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VGZWVkYmFja0Zvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgb25FcnJvckRpc21pc3MoKTtcbiAgICBvblN1Y2Nlc3NEaXNtaXNzKCk7XG4gIH0sIFtvbkVycm9yRGlzbWlzcywgb25TdWNjZXNzRGlzbWlzc10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChmZWVkYmFja1RleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJZb3VyIGZlZWRiYWNrIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBub3RlOiBmZWVkYmFja1RleHQsXG4gICAgICBlbWFpbDogZW1haWxWYWx1ZSxcbiAgICAgIGVtb3Rpb246IGVtb2ppU3RhdGUuc2VsZWN0ZWRWYWx1ZSxcbiAgICB9O1xuICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChkcnlSdW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFNvcnJ5LCB3ZSBjb3VsZG4ndCBzZW5kIHlvdXIgZmVlZGJhY2suIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBmZWVkYmFja1RleHQgb24gc3VjY2Vzc1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gICAgICAgIHNldEZlZWRiYWNrVGV4dChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLm1ldGFLZXkpIHtcbiAgICAgICAgb25TdWJtaXQoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xvc2VGZWVkYmFja0Zvcm0sIG9uU3VibWl0XVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH07XG4gIH0sIFtvbktleURvd25dKTtcblxuICB1c2VDbGlja0F3YXkoZm9ybVJlZiwgY2xvc2VGZWVkYmFja0Zvcm0pO1xuXG4gIGNvbnN0IGRpc2FibGVJbnB1dHMgPSBCb29sZWFuKGxvYWRpbmcgfHwgZXJyb3JNZXNzYWdlKTtcblxuICBjb25zdCBoYW5kbGVUcmlnZ2VyQnV0dG9uID0gKHRvb2dsZVBvcG92ZXIpID0+IHtcbiAgICAvL2lmIHVzZXIgaGF2ZSBlcnJvck1lc3NhZ2Ugb3IgYSBzdWNjZXNzIGFuZCBhcmUgY2xvc2luZyB0aGUgcG9wb3ZlciBvbiBidXR0b25UcmlnZ2VyIGNsZWFyIGVycm9yIGFuZCBzdWNjZXNzXG4gICAgaWYgKChlcnJvck1lc3NhZ2UgfHwgc3VjY2VzcykgJiYgIXRvb2dsZVBvcG92ZXIpIHtcbiAgICAgIGNsb3NlRmVlZGJhY2tGb3JtKCk7XG4gICAgfVxuICAgIHNldE9wZW4odG9vZ2xlUG9wb3Zlcik7XG4gIH07XG5cbiAgY29uc3QgVHJpZ2dlckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF8sIHJlZikgPT5cbiAgICBjaGlsZHJlbiA/IChcbiAgICAgIGNoaWxkcmVuKHsgb3Blbiwgc2V0T3BlbjogaGFuZGxlVHJpZ2dlckJ1dHRvbiwgcmVmOiByZWYgfSlcbiAgICApIDogKFxuICAgICAgPEZlZWRiYWNrQnV0dG9uIG9wZW49e29wZW59IHNldE9wZW49e2hhbmRsZVRyaWdnZXJCdXR0b259IHJlZj17cmVmfSAvPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHRpdGxlPVwiU2hhcmUgYW55IGZlZWRiYWNrIGFib3V0IG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHAtMCByZWxhdGl2ZSBpbmxpbmUtYmxvY2sgYW50aWFsaWFzZWQgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpvdXRsaW5lLW5vbmVgLFxuICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdHdgdGV4dC10cmFuc3BhcmVudGAsXG4gICAgICBdfVxuICAgICAgYXJpYS1leHBhbmRlZD17b3Blbn1cbiAgICAgIGRhdGEtdGVzdGlkPVwiY29udGFpbmVyLXBvcG92ZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlJvb3Qgb25PcGVuQ2hhbmdlPXtjbG9zZUZlZWRiYWNrRm9ybX0gb3Blbj17b3Blbn0+XG4gICAgICAgIDxQb3BvdmVyUHJpbWl0aXZlLlRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICA8VHJpZ2dlckJ1dHRvbiAvPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuVHJpZ2dlcj5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxuICAgICAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICAgICAgc2lkZT17c2lkZX1cbiAgICAgICAgICBhbGlnbj17YWxpZ259XG4gICAgICAgID5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGgtYXV0byBib3JkZXItd2hpdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIGZsZXggbGVhZGluZy02IHRleHQtc20gcm91bmRlZCBzaGFkb3ctbGcgYmctd2hpdGUgYCxcbiAgICAgICAgICAgICAgdHdgcmVzaXplLW5vbmUgei01MCB0ZXh0LWZvcmVncm91bmQgZmxleC1jb2wganVzdGlmeS1zdGFydCByZWxhdGl2ZWAsXG4gICAgICAgICAgICAgIHR3YGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIGZvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIGFjdGl2ZTpib3JkZXItZm9yZWdyb3VuZGAsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjJyZW1cIiB9fVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmb3JtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWVycm9yTWVzc2FnZSAmJiAhc3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtbdHdgcC00IHJlbGF0aXZlYF19PlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHR3PXtcIm1iLTJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEVtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbWJpbmVkRW1haWxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7ZW5hYmxlRmVlZGJhY2tUZXh0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlZWRiYWNrLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmZWVkYmFja1RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGZWVkYmFja1RleHQoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVJbnB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSB0aGUgR3JhbW1hcmx5IGV4dGVuc2lvbiBvbiB0aGlzIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWU9e2NuKFwiZmVlZGJhY2staW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJyYW5kLWdyYXlcIjogbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRGZWVkYmFja1RleHRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiOHB4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JEaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkdvIGJhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdHc9e1xuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXIgei01MFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgc21hbGwgaXM9XCJwXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIGZlZWRiYWNrIGhhcyBiZWVuIHJlY2VpdmVkIVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7IXN1Y2Nlc3MgJiYgIWVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgIHR3YHctZnVsbCBoLTE2IHAtNCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBnYXAtNCBiZy1iYWNrZ3JvdW5kIGJvcmRlci10IGJvcmRlci1ib3JkZXIgcG9pbnRlci1ldmVudHMtYXV0b2AsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbmFibGVFbW9qaSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZW1vamlzXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8RW1vamlSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgYW4gZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppU3RhdGU9e2Vtb2ppU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7RU1PSklTLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFN2Z0NvbXBvbmVudCA9IGVtb2ppLnN2ZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbW9qaS5jaGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtlbW9qaS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdDb21wb25lbnQgY3NzPXtbdHdgdy01IGgtNWBdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0Vtb2ppUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIHR3PXtcIm1sLWF1dG9cIn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17XCJzdWJtaXQtYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRTdWJtaXRCdXR0b25Qcm9wc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L1BvcG92ZXJQcmltaXRpdmUuQ29udGVudD5cbiAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Sb290PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmVlZGJhY2sucHJvcFR5cGVzID0ge1xuICAvKipcbiAgIFNob3cgdGV4dCBhcmVhIHRvIGNvbGxlY3QgZmVlZGJhY2sgdGV4dFxuICAgKi9cbiAgZW5hYmxlRmVlZGJhY2tUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBTaG93IGVtb2ppIHNlbGVjdGlvbiBidXR0b25zXG4gICAqL1xuICBlbmFibGVFbW9qaTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgRG9uJ3QgbWFrZSB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICBkcnlSdW46IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFVSTCB0byBtYWtlIHRoZSBQT1NUIHJlcXVlc3RcbiAgICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBEb24ndCBzaG93IHRoZSBlbWFpbCBpbnB1dCBmaWVsZCBhbmQgdXNlIHRoZSBzcGVjaWZpZWQgZW1haWwgaW5zdGVhZFxuICAgKi9cbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZW1haWwgaW5wdXQgZmllbGRcbiAgICovXG4gIGVtYWlsUHJvcHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgUHJvcHMgdG8gcGFzcyBvbiB0byB0aGUgZmVlZGJhY2sgdGV4dCBhcmVhXG4gICAqL1xuICBmZWVkYmFja1RleHRQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBzdWJtaXRCdXR0b25Qcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBUaGUgcHJlZmVycmVkIHNpZGUgb2YgdGhlIGFuY2hvciB0byByZW5kZXIgYWdhaW5zdCB3aGVuIG9wZW4uXG4gICovXG4gIHNpZGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAvKipcbiAgIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgYW5jaG9yLlxuICAqL1xuICBzaWRlT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICBUaGUgcHJlZmVycmVkIGFsaWdubWVudCBhZ2FpbnN0IHRoZSBhbmNob3IuIE1heSBjaGFuZ2Ugd2hlbiBjb2xsaXNpb25zIG9jY3VyLlxuICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcInN0YXJ0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref10 = process.env.NODE_ENV === "production" ? {
  name: "1o3nkn",
  styles: "margin-left:auto"
} : {
  name: "1avdod-Feedback",
  styles: "margin-left:auto;label:Feedback;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Feedback = ({
  url,
  email,
  enableFeedbackText = true,
  enableEmoji = true,
  side = "bottom",
  sideOffset = 5,
  align = "start",
  emailProps,
  feedbackTextProps,
  submitButtonProps,
  dryRun = false,
  children,
  ...props
}) => {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const enableEmail = !email;
  const emailInitialValue = email ? email : "";
  const [emailValue, setEmailValue] = React.useState(emailInitialValue);
  const [feedbackText, setFeedbackText] = React.useState("");
  const emojiState = $a54cdc5c1942b639$export$bca9d026f8e704eb(props);
  const formRef = React.useRef();
  const combinedEmailProps = {
    required: true,
    label: "Email",
    autoFocus: true,
    placeholder: "Your email address...",
    ...emailProps
  };
  const combinedFeedbackTextProps = {
    label: "Feedback",
    placeholder: "Your feedback...",
    required: true,
    rows: 3,
    "aria-label": "Feedback input",
    // Disable the Grammarly extension on this textarea
    "data-gramm-editor": false,
    ...feedbackTextProps
  };
  const combinedSubmitButtonProps = {
    label: "Send",
    variant: "default",
    ...submitButtonProps
  };
  const onErrorDismiss = React.useCallback(() => {
    setErrorMessage("");
  }, []);
  const onSuccessDismiss = React.useCallback(() => {
    setSuccess(false);
  }, []);
  const closeFeedbackForm = React.useCallback(() => {
    setOpen(false);
    onErrorDismiss();
    onSuccessDismiss();
  }, [onErrorDismiss, onSuccessDismiss]);

  const onSubmit = event => {
    event.preventDefault();

    if (feedbackText.trim() === "") {
      setErrorMessage("Your feedback can't be empty");
      return;
    }

    setLoading(true);
    const body = {
      url: url,
      note: feedbackText,
      email: emailValue,
      emotion: emojiState.selectedValue
    };
    Promise.resolve().then(() => {
      if (dryRun) {
        return;
      }

      return fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
      });
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Sorry, we couldn't send your feedback. Status: ${response.status}`);
      }

      return response.json();
    }).then(() => {
      // Reset the textarea feedbackText on success
      setLoading(false);
      setSuccess(true);
      setEmailValue(emailInitialValue);
      setFeedbackText("");
    }).catch(err => {
      setLoading(false);
      setErrorMessage(err.message);
    });
  };

  const onKeyDown = React.useCallback(e => {
    if (e.key === "Escape") {
      closeFeedbackForm();
    } else if (e.key === "Enter" && e.metaKey) {
      onSubmit(e);
    }
  }, [closeFeedbackForm, onSubmit]);
  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  useClickAway$1(formRef, closeFeedbackForm);
  const disableInputs = Boolean(loading || errorMessage);

  const handleTriggerButton = tooglePopover => {
    //if user have errorMessage or a success and are closing the popover on buttonTrigger clear error and success
    if ((errorMessage || success) && !tooglePopover) {
      closeFeedbackForm();
    }

    setOpen(tooglePopover);
  };

  const TriggerButton = /*#__PURE__*/React__default["default"].forwardRef((_, ref) => children ? children({
    open,
    setOpen: handleTriggerButton,
    ref: ref
  }) : react.jsx(FeedbackButton, {
    open: open,
    setOpen: handleTriggerButton,
    ref: ref
  }));
  return react.jsx("div", _extends$1({
    title: "Share any feedback about our products and services",
    css: ["padding:0px;position:relative;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;:focus{outline:2px solid transparent;outline-offset:2px;}:active{outline:2px solid transparent;outline-offset:2px;}", errorMessage && {
      "color": "rgba(0, 0, 0, 0)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Feedback;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVPTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXRcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vVGV4dGFyZWFcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgZjkyOSBmcm9tIFwiLi9zdmdzL2Y5MjkuanNcIjtcbmltcG9ydCBmNjAwIGZyb20gXCIuL3N2Z3MvZjYwMC5qc1wiO1xuaW1wb3J0IGY2MTUgZnJvbSBcIi4vc3Zncy9mNjE1LmpzXCI7XG5pbXBvcnQgZjYyZCBmcm9tIFwiLi9zdmdzL2Y2MmQuanNcIjtcbmltcG9ydCB7IHVzZVJhZGlvR3JvdXBTdGF0ZSB9IGZyb20gXCJAcmVhY3Qtc3RhdGVseS9yYWRpb1wiO1xuaW1wb3J0IHsgdXNlUmFkaW8sIHVzZVJhZGlvR3JvdXAgfSBmcm9tIFwiQHJlYWN0LWFyaWEvcmFkaW9cIjtcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlblwiO1xuaW1wb3J0IHsgdXNlRm9jdXNSaW5nIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ZvY3VzXCI7XG5pbXBvcnQgRmVlZGJhY2tCdXR0b24gZnJvbSBcIi4vRmVlZGJhY2tCdXR0b25cIjtcbmltcG9ydCAqIGFzIFBvcG92ZXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5cbmNvbnN0IEVNT0pJUyA9IFtcbiAgeyBjb2RlOiBcImY5MjlcIiwgY2hhcjogXCLwn6SpXCIsIHN2ZzogZjkyOSwgbGFiZWw6IFwidmVyeS1oYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjAwXCIsIGNoYXI6IFwi8J+ZglwiLCBzdmc6IGY2MDAsIGxhYmVsOiBcImhhcHB5XCIgfSxcbiAgeyBjb2RlOiBcImY2MTVcIiwgY2hhcjogXCLwn5iVXCIsIHN2ZzogZjYxNSwgbGFiZWw6IFwibWVoXCIgfSxcbiAgeyBjb2RlOiBcImY2MmRcIiwgY2hhcjogXCLwn5itXCIsIHN2ZzogZjYyZCwgbGFiZWw6IFwidW5oYXBweVwiIH0sXG5dO1xuXG5sZXQgUmFkaW9Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gaHR0cHM6Ly9yZWFjdC1zcGVjdHJ1bS5hZG9iZS5jb20vcmVhY3QtYXJpYS91c2VSYWRpb0dyb3VwLmh0bWwjZXhhbXBsZVxuZnVuY3Rpb24gRW1vamlSYWRpb0dyb3VwKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuLCBsYWJlbCB9ID0gcHJvcHM7XG4gIGxldCBzdGF0ZSA9IHByb3BzLmVtb2ppU3RhdGU7XG4gIGxldCB7IHJhZGlvR3JvdXBQcm9wcywgbGFiZWxQcm9wcyB9ID0gdXNlUmFkaW9Hcm91cChwcm9wcywgc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmFkaW9Hcm91cFByb3BzfSBjc3M9e1t0d2BmbGV4IHNwYWNlLXgtMmBdfT5cbiAgICAgIDxSYWRpb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9SYWRpb0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEVtb2ppUmFkaW8ocHJvcHMpIHtcbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFJhZGlvQ29udGV4dCk7XG4gIGxldCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCB7IGlucHV0UHJvcHMgfSA9IHVzZVJhZGlvKHByb3BzLCBzdGF0ZSwgcmVmKTtcbiAgbGV0IHsgaXNGb2N1c1Zpc2libGUsIGZvY3VzUHJvcHMgfSA9IHVzZUZvY3VzUmluZygpO1xuICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IHByb3BzLnZhbHVlO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGlubGluZS1mbGV4IGJnLXRyYW5zcGFyZW50IHAtMCBtLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGJvcmRlciBib3JkZXItYm9yZGVyIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxgLFxuICAgICAgICB0d2Bob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTEwNSBob3ZlcjpiZy13aGl0ZSBhY3RpdmU6Ymctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBgLFxuICAgICAgICBzZWxlY3RlZCAmJiB0d2BzY2FsZS0xMTAgYm9yZGVyIGJnLXdoaXRlIGJvcmRlci13YXJuaW5nLWxpZ2h0YCxcbiAgICAgICAgaXNGb2N1c1Zpc2libGUgJiYgdHdgcmluZy0yYCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IHsuLi5mb2N1c1Byb3BzfSByZWY9e3JlZn0gLz5cbiAgICAgIDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHR3PXtcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuY29uc3QgRmVlZGJhY2sgPSAoe1xuICB1cmwsXG4gIGVtYWlsLFxuICBlbmFibGVGZWVkYmFja1RleHQgPSB0cnVlLFxuICBlbmFibGVFbW9qaSA9IHRydWUsXG4gIHNpZGUgPSBcImJvdHRvbVwiLFxuICBzaWRlT2Zmc2V0ID0gNSxcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGVtYWlsUHJvcHMsXG4gIGZlZWRiYWNrVGV4dFByb3BzLFxuICBzdWJtaXRCdXR0b25Qcm9wcyxcbiAgZHJ5UnVuID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVuYWJsZUVtYWlsID0gIWVtYWlsO1xuICBjb25zdCBlbWFpbEluaXRpYWxWYWx1ZSA9IGVtYWlsID8gZW1haWwgOiBcIlwiO1xuICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSB1c2VTdGF0ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IFtmZWVkYmFja1RleHQsIHNldEZlZWRiYWNrVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZW1vamlTdGF0ZSA9IHVzZVJhZGlvR3JvdXBTdGF0ZShwcm9wcyk7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjb21iaW5lZEVtYWlsUHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBlbWFpbCBhZGRyZXNzLi4uXCIsXG4gICAgLi4uZW1haWxQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzID0ge1xuICAgIGxhYmVsOiBcIkZlZWRiYWNrXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBmZWVkYmFjay4uLlwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJvd3M6IDMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiRmVlZGJhY2sgaW5wdXRcIixcbiAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICBcImRhdGEtZ3JhbW0tZWRpdG9yXCI6IGZhbHNlLFxuICAgIC4uLmZlZWRiYWNrVGV4dFByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGNvbWJpbmVkU3VibWl0QnV0dG9uUHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiU2VuZFwiLFxuICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIC4uLnN1Ym1pdEJ1dHRvblByb3BzLFxuICB9O1xuXG4gIGNvbnN0IG9uRXJyb3JEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU3VjY2Vzc0Rpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZUZlZWRiYWNrRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBvbkVycm9yRGlzbWlzcygpO1xuICAgIG9uU3VjY2Vzc0Rpc21pc3MoKTtcbiAgfSwgW29uRXJyb3JEaXNtaXNzLCBvblN1Y2Nlc3NEaXNtaXNzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGZlZWRiYWNrVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIllvdXIgZmVlZGJhY2sgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG5vdGU6IGZlZWRiYWNrVGV4dCxcbiAgICAgIGVtYWlsOiBlbWFpbFZhbHVlLFxuICAgICAgZW1vdGlvbjogZW1vamlTdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgIH07XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGRyeVJ1bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgU29ycnksIHdlIGNvdWxkbid0IHNlbmQgeW91ciBmZWVkYmFjay4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGZlZWRiYWNrVGV4dCBvbiBzdWNjZXNzXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRFbWFpbFZhbHVlKGVtYWlsSW5pdGlhbFZhbHVlKTtcbiAgICAgICAgc2V0RmVlZGJhY2tUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjbG9zZUZlZWRiYWNrRm9ybSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUubWV0YUtleSkge1xuICAgICAgICBvblN1Ym1pdChlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbG9zZUZlZWRiYWNrRm9ybSwgb25TdWJtaXRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuXG4gIHVzZUNsaWNrQXdheShmb3JtUmVmLCBjbG9zZUZlZWRiYWNrRm9ybSk7XG5cbiAgY29uc3QgZGlzYWJsZUlucHV0cyA9IEJvb2xlYW4obG9hZGluZyB8fCBlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRyaWdnZXJCdXR0b24gPSAodG9vZ2xlUG9wb3ZlcikgPT4ge1xuICAgIC8vaWYgdXNlciBoYXZlIGVycm9yTWVzc2FnZSBvciBhIHN1Y2Nlc3MgYW5kIGFyZSBjbG9zaW5nIHRoZSBwb3BvdmVyIG9uIGJ1dHRvblRyaWdnZXIgY2xlYXIgZXJyb3IgYW5kIHN1Y2Nlc3NcbiAgICBpZiAoKGVycm9yTWVzc2FnZSB8fCBzdWNjZXNzKSAmJiAhdG9vZ2xlUG9wb3Zlcikge1xuICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICB9XG4gICAgc2V0T3Blbih0b29nbGVQb3BvdmVyKTtcbiAgfTtcblxuICBjb25zdCBUcmlnZ2VyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoXywgcmVmKSA9PlxuICAgIGNoaWxkcmVuID8gKFxuICAgICAgY2hpbGRyZW4oeyBvcGVuLCBzZXRPcGVuOiBoYW5kbGVUcmlnZ2VyQnV0dG9uLCByZWY6IHJlZiB9KVxuICAgICkgOiAoXG4gICAgICA8RmVlZGJhY2tCdXR0b24gb3Blbj17b3Blbn0gc2V0T3Blbj17aGFuZGxlVHJpZ2dlckJ1dHRvbn0gcmVmPXtyZWZ9IC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgdGl0bGU9XCJTaGFyZSBhbnkgZmVlZGJhY2sgYWJvdXQgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgcC0wIHJlbGF0aXZlIGlubGluZS1ibG9jayBhbnRpYWxpYXNlZCBmb2N1czpvdXRsaW5lLW5vbmUgYWN0aXZlOm91dGxpbmUtbm9uZWAsXG4gICAgICAgIGVycm9yTWVzc2FnZSAmJiB0d2B0ZXh0LXRyYW5zcGFyZW50YCxcbiAgICAgIF19XG4gICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWluZXItcG9wb3ZlclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBvbk9wZW5DaGFuZ2U9e2Nsb3NlRmVlZGJhY2tGb3JtfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxUcmlnZ2VyQnV0dG9uIC8+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5UcmlnZ2VyPlxuICAgICAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgaC1hdXRvIGJvcmRlci13aGl0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgZmxleCBsZWFkaW5nLTYgdGV4dC1zbSByb3VuZGVkIHNoYWRvdy1sZyBiZy13aGl0ZSBgLFxuICAgICAgICAgICAgICB0d2ByZXNpemUtbm9uZSB6LTUwIHRleHQtZm9yZWdyb3VuZCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlYCxcbiAgICAgICAgICAgICAgdHdgaG92ZXI6Ym9yZGVyLWZvcmVncm91bmQgZm9jdXM6Ym9yZGVyLWZvcmVncm91bmQgYWN0aXZlOmJvcmRlci1mb3JlZ3JvdW5kYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMnJlbVwiIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvcm1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXJyb3JNZXNzYWdlICYmICFzdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e1t0d2BwLTQgcmVsYXRpdmVgXX0+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgdHc9e1wibWItMlwifT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVkYmFjay1lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRFbWFpbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtlbmFibGVGZWVkYmFja1RleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZlZWRiYWNrVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZlZWRiYWNrVGV4dChlKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZT17Y24oXCJmZWVkYmFjay1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnJhbmQtZ3JheVwiOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHR3PXtcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyIHotNTBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBpcz1cInBcIlxuICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI4cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvckRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR28gYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZmVlZGJhY2sgaGFzIGJlZW4gcmVjZWl2ZWQhXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGlzPVwicFwiPlxuICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshc3VjY2VzcyAmJiAhZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgdHdgdy1mdWxsIGgtMTYgcC00IGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC00IGJnLWJhY2tncm91bmQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwb2ludGVyLWV2ZW50cy1hdXRvYCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtb2ppICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbW9qaXNcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBlbW9qaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamlTdGF0ZT17ZW1vamlTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtFTU9KSVMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgU3ZnQ29tcG9uZW50ID0gZW1vamkuc3ZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppUmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Vtb2ppLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0NvbXBvbmVudCBjc3M9e1t0d2B3LTUgaC01YF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHNwYW4gdHc9e1wibWwtYXV0b1wifT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtcInN1Ym1pdC1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PlxuICAgICAgPC9Qb3BvdmVyUHJpbWl0aXZlLlJvb3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GZWVkYmFjay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgU2hvdyB0ZXh0IGFyZWEgdG8gY29sbGVjdCBmZWVkYmFjayB0ZXh0XG4gICAqL1xuICBlbmFibGVGZWVkYmFja1RleHQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFNob3cgZW1vamkgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICovXG4gIGVuYWJsZUVtb2ppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBEb24ndCBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gIGRyeVJ1bjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgVVJMIHRvIG1ha2UgdGhlIFBPU1QgcmVxdWVzdFxuICAgKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgIERvbid0IHNob3cgdGhlIGVtYWlsIGlucHV0IGZpZWxkIGFuZCB1c2UgdGhlIHNwZWNpZmllZCBlbWFpbCBpbnN0ZWFkXG4gICAqL1xuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBlbWFpbCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZW1haWxQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBmZWVkYmFjayB0ZXh0IGFyZWFcbiAgICovXG4gIGZlZWRiYWNrVGV4dFByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFByb3BzIHRvIHBhc3Mgb24gdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIHN1Ym1pdEJ1dHRvblByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFRoZSBwcmVmZXJyZWQgc2lkZSBvZiB0aGUgYW5jaG9yIHRvIHJlbmRlciBhZ2FpbnN0IHdoZW4gb3Blbi5cbiAgKi9cbiAgc2lkZTogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSBhbmNob3IuXG4gICovXG4gIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgIFRoZSBwcmVmZXJyZWQgYWxpZ25tZW50IGFnYWluc3QgdGhlIGFuY2hvci4gTWF5IGNoYW5nZSB3aGVuIGNvbGxpc2lvbnMgb2NjdXIuXG4gICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wic3RhcnRcIiwgXCJjZW50ZXJcIiwgXCJlbmRcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Feedback;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVPTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXRcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vVGV4dGFyZWFcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgZjkyOSBmcm9tIFwiLi9zdmdzL2Y5MjkuanNcIjtcbmltcG9ydCBmNjAwIGZyb20gXCIuL3N2Z3MvZjYwMC5qc1wiO1xuaW1wb3J0IGY2MTUgZnJvbSBcIi4vc3Zncy9mNjE1LmpzXCI7XG5pbXBvcnQgZjYyZCBmcm9tIFwiLi9zdmdzL2Y2MmQuanNcIjtcbmltcG9ydCB7IHVzZVJhZGlvR3JvdXBTdGF0ZSB9IGZyb20gXCJAcmVhY3Qtc3RhdGVseS9yYWRpb1wiO1xuaW1wb3J0IHsgdXNlUmFkaW8sIHVzZVJhZGlvR3JvdXAgfSBmcm9tIFwiQHJlYWN0LWFyaWEvcmFkaW9cIjtcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlblwiO1xuaW1wb3J0IHsgdXNlRm9jdXNSaW5nIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ZvY3VzXCI7XG5pbXBvcnQgRmVlZGJhY2tCdXR0b24gZnJvbSBcIi4vRmVlZGJhY2tCdXR0b25cIjtcbmltcG9ydCAqIGFzIFBvcG92ZXJQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5cbmNvbnN0IEVNT0pJUyA9IFtcbiAgeyBjb2RlOiBcImY5MjlcIiwgY2hhcjogXCLwn6SpXCIsIHN2ZzogZjkyOSwgbGFiZWw6IFwidmVyeS1oYXBweVwiIH0sXG4gIHsgY29kZTogXCJmNjAwXCIsIGNoYXI6IFwi8J+ZglwiLCBzdmc6IGY2MDAsIGxhYmVsOiBcImhhcHB5XCIgfSxcbiAgeyBjb2RlOiBcImY2MTVcIiwgY2hhcjogXCLwn5iVXCIsIHN2ZzogZjYxNSwgbGFiZWw6IFwibWVoXCIgfSxcbiAgeyBjb2RlOiBcImY2MmRcIiwgY2hhcjogXCLwn5itXCIsIHN2ZzogZjYyZCwgbGFiZWw6IFwidW5oYXBweVwiIH0sXG5dO1xuXG5sZXQgUmFkaW9Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuLy8gaHR0cHM6Ly9yZWFjdC1zcGVjdHJ1bS5hZG9iZS5jb20vcmVhY3QtYXJpYS91c2VSYWRpb0dyb3VwLmh0bWwjZXhhbXBsZVxuZnVuY3Rpb24gRW1vamlSYWRpb0dyb3VwKHByb3BzKSB7XG4gIGxldCB7IGNoaWxkcmVuLCBsYWJlbCB9ID0gcHJvcHM7XG4gIGxldCBzdGF0ZSA9IHByb3BzLmVtb2ppU3RhdGU7XG4gIGxldCB7IHJhZGlvR3JvdXBQcm9wcywgbGFiZWxQcm9wcyB9ID0gdXNlUmFkaW9Hcm91cChwcm9wcywgc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmFkaW9Hcm91cFByb3BzfSBjc3M9e1t0d2BmbGV4IHNwYWNlLXgtMmBdfT5cbiAgICAgIDxSYWRpb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9SYWRpb0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEVtb2ppUmFkaW8ocHJvcHMpIHtcbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFJhZGlvQ29udGV4dCk7XG4gIGxldCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCB7IGlucHV0UHJvcHMgfSA9IHVzZVJhZGlvKHByb3BzLCBzdGF0ZSwgcmVmKTtcbiAgbGV0IHsgaXNGb2N1c1Zpc2libGUsIGZvY3VzUHJvcHMgfSA9IHVzZUZvY3VzUmluZygpO1xuICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IHByb3BzLnZhbHVlO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGlubGluZS1mbGV4IGJnLXRyYW5zcGFyZW50IHAtMCBtLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGJvcmRlciBib3JkZXItYm9yZGVyIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGxgLFxuICAgICAgICB0d2Bob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTEwNSBob3ZlcjpiZy13aGl0ZSBhY3RpdmU6Ymctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBgLFxuICAgICAgICBzZWxlY3RlZCAmJiB0d2BzY2FsZS0xMTAgYm9yZGVyIGJnLXdoaXRlIGJvcmRlci13YXJuaW5nLWxpZ2h0YCxcbiAgICAgICAgaXNGb2N1c1Zpc2libGUgJiYgdHdgcmluZy0yYCxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IHsuLi5mb2N1c1Byb3BzfSByZWY9e3JlZn0gLz5cbiAgICAgIDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHR3PXtcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuY29uc3QgRmVlZGJhY2sgPSAoe1xuICB1cmwsXG4gIGVtYWlsLFxuICBlbmFibGVGZWVkYmFja1RleHQgPSB0cnVlLFxuICBlbmFibGVFbW9qaSA9IHRydWUsXG4gIHNpZGUgPSBcImJvdHRvbVwiLFxuICBzaWRlT2Zmc2V0ID0gNSxcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGVtYWlsUHJvcHMsXG4gIGZlZWRiYWNrVGV4dFByb3BzLFxuICBzdWJtaXRCdXR0b25Qcm9wcyxcbiAgZHJ5UnVuID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGVuYWJsZUVtYWlsID0gIWVtYWlsO1xuICBjb25zdCBlbWFpbEluaXRpYWxWYWx1ZSA9IGVtYWlsID8gZW1haWwgOiBcIlwiO1xuICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSB1c2VTdGF0ZShlbWFpbEluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IFtmZWVkYmFja1RleHQsIHNldEZlZWRiYWNrVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZW1vamlTdGF0ZSA9IHVzZVJhZGlvR3JvdXBTdGF0ZShwcm9wcyk7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjb21iaW5lZEVtYWlsUHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBlbWFpbCBhZGRyZXNzLi4uXCIsXG4gICAgLi4uZW1haWxQcm9wcyxcbiAgfTtcblxuICBjb25zdCBjb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzID0ge1xuICAgIGxhYmVsOiBcIkZlZWRiYWNrXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiWW91ciBmZWVkYmFjay4uLlwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJvd3M6IDMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiRmVlZGJhY2sgaW5wdXRcIixcbiAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICBcImRhdGEtZ3JhbW0tZWRpdG9yXCI6IGZhbHNlLFxuICAgIC4uLmZlZWRiYWNrVGV4dFByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGNvbWJpbmVkU3VibWl0QnV0dG9uUHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiU2VuZFwiLFxuICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIC4uLnN1Ym1pdEJ1dHRvblByb3BzLFxuICB9O1xuXG4gIGNvbnN0IG9uRXJyb3JEaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU3VjY2Vzc0Rpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbG9zZUZlZWRiYWNrRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBvbkVycm9yRGlzbWlzcygpO1xuICAgIG9uU3VjY2Vzc0Rpc21pc3MoKTtcbiAgfSwgW29uRXJyb3JEaXNtaXNzLCBvblN1Y2Nlc3NEaXNtaXNzXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGZlZWRiYWNrVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIllvdXIgZmVlZGJhY2sgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG5vdGU6IGZlZWRiYWNrVGV4dCxcbiAgICAgIGVtYWlsOiBlbWFpbFZhbHVlLFxuICAgICAgZW1vdGlvbjogZW1vamlTdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgIH07XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGRyeVJ1bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgU29ycnksIHdlIGNvdWxkbid0IHNlbmQgeW91ciBmZWVkYmFjay4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGZlZWRiYWNrVGV4dCBvbiBzdWNjZXNzXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRFbWFpbFZhbHVlKGVtYWlsSW5pdGlhbFZhbHVlKTtcbiAgICAgICAgc2V0RmVlZGJhY2tUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjbG9zZUZlZWRiYWNrRm9ybSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUubWV0YUtleSkge1xuICAgICAgICBvblN1Ym1pdChlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbG9zZUZlZWRiYWNrRm9ybSwgb25TdWJtaXRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuXG4gIHVzZUNsaWNrQXdheShmb3JtUmVmLCBjbG9zZUZlZWRiYWNrRm9ybSk7XG5cbiAgY29uc3QgZGlzYWJsZUlucHV0cyA9IEJvb2xlYW4obG9hZGluZyB8fCBlcnJvck1lc3NhZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRyaWdnZXJCdXR0b24gPSAodG9vZ2xlUG9wb3ZlcikgPT4ge1xuICAgIC8vaWYgdXNlciBoYXZlIGVycm9yTWVzc2FnZSBvciBhIHN1Y2Nlc3MgYW5kIGFyZSBjbG9zaW5nIHRoZSBwb3BvdmVyIG9uIGJ1dHRvblRyaWdnZXIgY2xlYXIgZXJyb3IgYW5kIHN1Y2Nlc3NcbiAgICBpZiAoKGVycm9yTWVzc2FnZSB8fCBzdWNjZXNzKSAmJiAhdG9vZ2xlUG9wb3Zlcikge1xuICAgICAgY2xvc2VGZWVkYmFja0Zvcm0oKTtcbiAgICB9XG4gICAgc2V0T3Blbih0b29nbGVQb3BvdmVyKTtcbiAgfTtcblxuICBjb25zdCBUcmlnZ2VyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoXywgcmVmKSA9PlxuICAgIGNoaWxkcmVuID8gKFxuICAgICAgY2hpbGRyZW4oeyBvcGVuLCBzZXRPcGVuOiBoYW5kbGVUcmlnZ2VyQnV0dG9uLCByZWY6IHJlZiB9KVxuICAgICkgOiAoXG4gICAgICA8RmVlZGJhY2tCdXR0b24gb3Blbj17b3Blbn0gc2V0T3Blbj17aGFuZGxlVHJpZ2dlckJ1dHRvbn0gcmVmPXtyZWZ9IC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgdGl0bGU9XCJTaGFyZSBhbnkgZmVlZGJhY2sgYWJvdXQgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgcC0wIHJlbGF0aXZlIGlubGluZS1ibG9jayBhbnRpYWxpYXNlZCBmb2N1czpvdXRsaW5lLW5vbmUgYWN0aXZlOm91dGxpbmUtbm9uZWAsXG4gICAgICAgIGVycm9yTWVzc2FnZSAmJiB0d2B0ZXh0LXRyYW5zcGFyZW50YCxcbiAgICAgIF19XG4gICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWluZXItcG9wb3ZlclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFBvcG92ZXJQcmltaXRpdmUuUm9vdCBvbk9wZW5DaGFuZ2U9e2Nsb3NlRmVlZGJhY2tGb3JtfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgIDxUcmlnZ2VyQnV0dG9uIC8+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5UcmlnZ2VyPlxuICAgICAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgaC1hdXRvIGJvcmRlci13aGl0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgZmxleCBsZWFkaW5nLTYgdGV4dC1zbSByb3VuZGVkIHNoYWRvdy1sZyBiZy13aGl0ZSBgLFxuICAgICAgICAgICAgICB0d2ByZXNpemUtbm9uZSB6LTUwIHRleHQtZm9yZWdyb3VuZCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHJlbGF0aXZlYCxcbiAgICAgICAgICAgICAgdHdgaG92ZXI6Ym9yZGVyLWZvcmVncm91bmQgZm9jdXM6Ym9yZGVyLWZvcmVncm91bmQgYWN0aXZlOmJvcmRlci1mb3JlZ3JvdW5kYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMnJlbVwiIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvcm1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXJyb3JNZXNzYWdlICYmICFzdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e1t0d2BwLTQgcmVsYXRpdmVgXX0+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgdHc9e1wibWItMlwifT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVkYmFjay1lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29tYmluZWRFbWFpbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtlbmFibGVGZWVkYmFja1RleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVlZGJhY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZlZWRiYWNrVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZlZWRiYWNrVGV4dChlKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUlucHV0c31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBHcmFtbWFybHkgZXh0ZW5zaW9uIG9uIHRoaXMgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZT17Y24oXCJmZWVkYmFjay1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYnJhbmQtZ3JheVwiOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZEZlZWRiYWNrVGV4dFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHR3PXtcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyIHotNTBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBpcz1cInBcIlxuICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI4cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvckRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR28gYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB0dz17XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciB6LTUwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBpcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZmVlZGJhY2sgaGFzIGJlZW4gcmVjZWl2ZWQhXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGlzPVwicFwiPlxuICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshc3VjY2VzcyAmJiAhZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgdHdgdy1mdWxsIGgtMTYgcC00IGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC00IGJnLWJhY2tncm91bmQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwb2ludGVyLWV2ZW50cy1hdXRvYCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VuYWJsZUVtb2ppICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbW9qaXNcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxFbW9qaVJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBlbW9qaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamlTdGF0ZT17ZW1vamlTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtFTU9KSVMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgU3ZnQ29tcG9uZW50ID0gZW1vamkuc3ZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppUmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Vtb2ppLmNoYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Vtb2ppLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z0NvbXBvbmVudCBjc3M9e1t0d2B3LTUgaC01YF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvRW1vamlSYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHNwYW4gdHc9e1wibWwtYXV0b1wifT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtcInN1Ym1pdC1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb21iaW5lZFN1Ym1pdEJ1dHRvblByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PlxuICAgICAgPC9Qb3BvdmVyUHJpbWl0aXZlLlJvb3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GZWVkYmFjay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgU2hvdyB0ZXh0IGFyZWEgdG8gY29sbGVjdCBmZWVkYmFjayB0ZXh0XG4gICAqL1xuICBlbmFibGVGZWVkYmFja1RleHQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgIFNob3cgZW1vamkgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICovXG4gIGVuYWJsZUVtb2ppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICBEb24ndCBtYWtlIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gIGRyeVJ1bjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgVVJMIHRvIG1ha2UgdGhlIFBPU1QgcmVxdWVzdFxuICAgKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgIERvbid0IHNob3cgdGhlIGVtYWlsIGlucHV0IGZpZWxkIGFuZCB1c2UgdGhlIHNwZWNpZmllZCBlbWFpbCBpbnN0ZWFkXG4gICAqL1xuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBlbWFpbCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZW1haWxQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICBQcm9wcyB0byBwYXNzIG9uIHRvIHRoZSBmZWVkYmFjayB0ZXh0IGFyZWFcbiAgICovXG4gIGZlZWRiYWNrVGV4dFByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFByb3BzIHRvIHBhc3Mgb24gdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIHN1Ym1pdEJ1dHRvblByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgIFRoZSBwcmVmZXJyZWQgc2lkZSBvZiB0aGUgYW5jaG9yIHRvIHJlbmRlciBhZ2FpbnN0IHdoZW4gb3Blbi5cbiAgKi9cbiAgc2lkZTogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSBhbmNob3IuXG4gICovXG4gIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgIFRoZSBwcmVmZXJyZWQgYWxpZ25tZW50IGFnYWluc3QgdGhlIGFuY2hvci4gTWF5IGNoYW5nZSB3aGVuIGNvbGxpc2lvbnMgb2NjdXIuXG4gICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wic3RhcnRcIiwgXCJjZW50ZXJcIiwgXCJlbmRcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XG4iXX0= */"],
    "aria-expanded": open,
    "data-testid": "container-popover"
  }, props), react.jsx(Root, {
    onOpenChange: closeFeedbackForm,
    open: open
  }, react.jsx(Trigger, {
    asChild: true
  }, react.jsx(TriggerButton, null)), react.jsx(Content, {
    sideOffset: sideOffset,
    side: side,
    align: align
  }, react.jsx("form", {
    ref: formRef,
    css: _ref3,
    style: {
      width: "22rem"
    },
    onSubmit: onSubmit,
    "data-testid": "form"
  }, !errorMessage && !success && react.jsx("div", {
    css: _ref4
  }, enableEmail && react.jsx("div", {
    css: _ref5
  }, react.jsx(Input, _extends$1({
    id: "feedback-email",
    type: "email",
    disabled: disableInputs,
    onChange: setEmailValue,
    value: emailValue
  }, combinedEmailProps))), enableFeedbackText && react.jsx("div", {
    className: "input"
  }, react.jsx(Textarea, _extends$1({
    id: "feedback-text",
    value: feedbackText,
    onChange: e => setFeedbackText(e),
    disabled: disableInputs // Disable the Grammarly extension on this textarea
    ,
    textareaClassName: classNames__default["default"]("feedback-input", {
      "text-brand-gray": loading
    })
  }, combinedFeedbackTextProps)))), errorMessage && react.jsx("div", {
    css: _ref6
  }, react.jsx(Text, {
    is: "p",
    small: true,
    color: "text-red-600",
    style: {
      marginBottom: "8px"
    }
  }, errorMessage), react.jsx(Button, {
    type: "minimal",
    onClick: e => {
      e.preventDefault();
      onErrorDismiss();
    },
    autoFocus: true,
    label: "Go back"
  })), success && react.jsx("div", {
    css: _ref7
  }, react.jsx(Text, {
    small: true,
    is: "p"
  }, "Your feedback has been received!"), react.jsx(Text, {
    small: true,
    is: "p"
  }, "Thank you for your help.")), !success && !errorMessage && react.jsx("div", {
    css: _ref8
  }, enableEmoji && react.jsx("span", {
    className: "emojis"
  }, react.jsx(EmojiRadioGroup, {
    label: "Select an emoji",
    emojiState: emojiState
  }, EMOJIS.map(emoji => {
    const SvgComponent = emoji.svg;
    return react.jsx(EmojiRadio, {
      key: emoji.char,
      value: emoji.char,
      label: emoji.label
    }, react.jsx(SvgComponent, {
      css: _ref9
    }));
  }))), react.jsx("span", {
    css: _ref10
  }, react.jsx(Button, _extends$1({
    disabled: loading,
    "data-testid": "submit-button",
    type: "submit"
  }, combinedSubmitButtonProps))))))));
};

Feedback.propTypes = {
  /**
   Show text area to collect feedback text
   */
  enableFeedbackText: PropTypes__default["default"].bool,

  /**
   Show emoji selection buttons
   */
  enableEmoji: PropTypes__default["default"].bool,

  /**
   Don't make the http request
   */
  dryRun: PropTypes__default["default"].bool,

  /**
   URL to make the POST request
   */
  url: PropTypes__default["default"].string,

  /**
   Don't show the email input field and use the specified email instead
   */
  email: PropTypes__default["default"].string,

  /**
   Props to pass on to the email input field
   */
  emailProps: PropTypes__default["default"].any,

  /**
   Props to pass on to the feedback text area
   */
  feedbackTextProps: PropTypes__default["default"].any,

  /**
   Props to pass on to the submit button
   */
  submitButtonProps: PropTypes__default["default"].any,

  /**
   The preferred side of the anchor to render against when open.
  */
  side: PropTypes__default["default"].oneOf(["top", "right", "bottom", "left"]),

  /**
   The distance in pixels from the anchor.
  */
  sideOffset: PropTypes__default["default"].number,

  /**
    The preferred alignment against the anchor. May change when collisions occur.
  */
  align: PropTypes__default["default"].oneOf(["start", "center", "end"])
};

module.exports = Feedback;
