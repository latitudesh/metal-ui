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
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
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

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
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

  return _extends$5.apply(this, arguments);
}

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
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

  return _extends$4.apply(this, arguments);
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser$1 = typeof document !== 'undefined';

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

var insertStyles = function insertStyles(cache, serialized, isStringTag) {
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
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
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

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
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

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser = typeof document !== 'undefined';

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
      var finalTag = shouldUseAs && props.as || baseTag;
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
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
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
      var ele = /*#__PURE__*/React.createElement(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }

      return ele;
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
      return createStyled(nextTag, _extends$4({}, options, nextOptions, {
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
  }], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9xQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuXHJcbmNvbnN0IFNwaW5uaW5nRG90cyA9ICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgY3NzIH0pID0+IHtcclxuICBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmkoKCkgPT4gW1xyXG4gICAgdHdgYW5pbWF0ZS1wdWxzZSBoLTAgdy0wIHJvdW5kZWQtZnVsbCBib3JkZXItd2lkdGhbM3B4XWAsXHJcbiAgICB2YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiB0d2B0ZXh0LWFjY2VudC1zaXhgLFxyXG4gICAgdmFyaWFudCA9PT0gXCJsaWdodFwiICYmIHR3YHRleHQtYWNjZW50LXRocmVlYCxcclxuICAgIHZhcmlhbnQgPT09IFwiZGFya1wiICYmIHR3YHRleHQtYWNjZW50LWVpZ2h0YCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIGNzcz17W3R3YGlubGluZSBwLTAgaC1hdXRvIHctZnVsbCB0ZXh0LWNlbnRlcmAsIC4uLmNzc119XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHR3PVwiaW5saW5lLWZsZXggcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGgtMiB0ZXh0LWNlbnRlciBvcGFjaXR5LTUwIHctMTBcIj5cclxuICAgICAgICA8ZGl2IHR3PVwiZmxleCB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiLS4xNXNcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNzczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXHJcbn07XHJcblxyXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gIGNzczogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uaW5nRG90cztcclxuIl19 */");

  return react.jsx("div", {
    className: className,
    css: ["display:inline;padding:0px;height:auto;width:100%;text-align:center;", ...css, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuXHJcbmNvbnN0IFNwaW5uaW5nRG90cyA9ICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgY3NzIH0pID0+IHtcclxuICBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmkoKCkgPT4gW1xyXG4gICAgdHdgYW5pbWF0ZS1wdWxzZSBoLTAgdy0wIHJvdW5kZWQtZnVsbCBib3JkZXItd2lkdGhbM3B4XWAsXHJcbiAgICB2YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiB0d2B0ZXh0LWFjY2VudC1zaXhgLFxyXG4gICAgdmFyaWFudCA9PT0gXCJsaWdodFwiICYmIHR3YHRleHQtYWNjZW50LXRocmVlYCxcclxuICAgIHZhcmlhbnQgPT09IFwiZGFya1wiICYmIHR3YHRleHQtYWNjZW50LWVpZ2h0YCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIGNzcz17W3R3YGlubGluZSBwLTAgaC1hdXRvIHctZnVsbCB0ZXh0LWNlbnRlcmAsIC4uLmNzc119XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHR3PVwiaW5saW5lLWZsZXggcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGgtMiB0ZXh0LWNlbnRlciBvcGFjaXR5LTUwIHctMTBcIj5cclxuICAgICAgICA8ZGl2IHR3PVwiZmxleCB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiLS4xNXNcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNzczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXHJcbn07XHJcblxyXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gIGNzczogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uaW5nRG90cztcclxuIl19 */", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuXHJcbmNvbnN0IFNwaW5uaW5nRG90cyA9ICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgY3NzIH0pID0+IHtcclxuICBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmkoKCkgPT4gW1xyXG4gICAgdHdgYW5pbWF0ZS1wdWxzZSBoLTAgdy0wIHJvdW5kZWQtZnVsbCBib3JkZXItd2lkdGhbM3B4XWAsXHJcbiAgICB2YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiB0d2B0ZXh0LWFjY2VudC1zaXhgLFxyXG4gICAgdmFyaWFudCA9PT0gXCJsaWdodFwiICYmIHR3YHRleHQtYWNjZW50LXRocmVlYCxcclxuICAgIHZhcmlhbnQgPT09IFwiZGFya1wiICYmIHR3YHRleHQtYWNjZW50LWVpZ2h0YCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIGNzcz17W3R3YGlubGluZSBwLTAgaC1hdXRvIHctZnVsbCB0ZXh0LWNlbnRlcmAsIC4uLmNzc119XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHR3PVwiaW5saW5lLWZsZXggcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGgtMiB0ZXh0LWNlbnRlciBvcGFjaXR5LTUwIHctMTBcIj5cclxuICAgICAgICA8ZGl2IHR3PVwiZmxleCB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiLS4xNXNcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNzczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXHJcbn07XHJcblxyXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gIGNzczogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uaW5nRG90cztcclxuIl19 */"]
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
  className: PropTypes__default['default'].string,
  css: PropTypes__default['default'].array,
  variant: PropTypes__default['default'].oneOf(["default", "inherit", "light", "dark"])
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

const Button = /*#__PURE__*/React__default['default'].forwardRef(({
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
  return react.jsx("button", _extends$5({
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
      "borderColor": "transparent",
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
      "borderColor": "transparent",
      "backgroundColor": "transparent",
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
  disabled: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string,
  iconBefore: PropTypes__default['default'].element,
  iconAfter: PropTypes__default['default'].element,
  label: PropTypes__default['default'].string,
  onClick: PropTypes__default['default'].func,
  type: PropTypes__default['default'].string,
  variant: PropTypes__default['default'].oneOf(["default", "secondary", "danger", "disabled", "minimal"]),
  size: PropTypes__default['default'].oneOf(["small", "normal", "large"]),
  isLoading: PropTypes__default['default'].bool
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

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "65loc0-Input",
  styles: "position:relative;label:Input;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

const Input = /*#__PURE__*/React__default['default'].forwardRef(({
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
  ...rest
}, ref) => {
  const handleChange = React.useCallback(event => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [onChange]);
  const brandDarkStyles = {
    "borderColor": "transparent",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "0.2",
    "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
    "::placeholder": {
      "--tw-placeholder-opacity": "1",
      "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
    },
    ":hover, :focus": {
      "borderColor": "transparent",
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
    }, process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */"]
  }, label), react.jsx("div", {
    css: _ref$1
  }, react.jsx("input", _extends$5({
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
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}", inputClassName && inputClassName, !error && !disabled && {
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
                background-position-y: 50%;`], process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */"]
  }, rest))));
});
Input.propTypes = {
  onChange: PropTypes__default['default'].func,
  inputClassName: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string,
  defaultValue: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string,
  error: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  variant: PropTypes__default['default'].oneOf(["brand", "brand-dark"])
};

const Textarea = /*#__PURE__*/React__default['default'].forwardRef(({
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
  }, label), react.jsx("textarea", _extends$5({
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
      "borderColor": "transparent",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
      },
      ":hover, :focus": {
        "borderColor": "transparent",
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
  onChange: PropTypes__default['default'].func,
  textareaClassName: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string,
  defaultValue: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string.isRequired,
  error: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  rows: PropTypes__default['default'].number,
  variant: PropTypes__default['default'].oneOf(["brand", "brand-dark"]),
  resize: PropTypes__default['default'].bool.isRequired
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
    return react.jsx(Tag, _extends$5({
      className: classNames__default['default'](className, color, {
        "font-semibold": Boolean(bold),
        "font-normal": !Boolean(bold),
        "text-base": !Boolean(small),
        "text-sm": Boolean(small)
      })
    }, props));
  }

}

_defineProperty(Text, "propTypes", {
  bold: PropTypes__default['default'].bool,
  color: PropTypes__default['default'].string,
  is: PropTypes__default['default'].oneOf(["span", "p", "li"]).isRequired,
  className: PropTypes__default['default'].string
});

_defineProperty(Text, "defaultProps", {
  className: null,
  color: "text-foreground",
  is: "span"
});

function SvgComponent$3(props) {
  return react.jsx("svg", _extends$5({
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
  return react.jsx("svg", _extends$5({
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
  return react.jsx("svg", _extends$5({
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
  return react.jsx("svg", _extends$5({
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

function useControlledState(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = React.useState(value || defaultValue);
  let ref = React.useRef(value !== undefined);
  let wasControlled = ref.current;
  let isControlled = value !== undefined; // Internal state reference for useCallback

  let stateRef = React.useRef(stateValue);

  if (wasControlled !== isControlled) {
    console.warn("WARN: A component changed from " + (wasControlled ? 'controlled' : 'uncontrolled') + " to " + (isControlled ? 'controlled' : 'uncontrolled') + ".");
  }

  ref.current = isControlled;
  let setValue = React.useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    let onChangeCaller = function onChangeCaller(value) {
      if (onChange) {
        if (!Object.is(stateRef.current, value)) {
          for (var _len2 = arguments.length, onChangeArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            onChangeArgs[_key2 - 1] = arguments[_key2];
          }

          onChange(value, ...onChangeArgs);
        }
      }

      if (!isControlled) {
        stateRef.current = value;
      }
    };

    if (typeof value === 'function') {
      // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
      // when someone using useControlledState calls setControlledState(myFunc)
      // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
      // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
      // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
      let updateFunction = function updateFunction(oldValue) {
        for (var _len3 = arguments.length, functionArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          functionArgs[_key3 - 1] = arguments[_key3];
        }

        let interceptedValue = value(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);

        if (!isControlled) {
          return interceptedValue;
        }

        return oldValue;
      };

      setStateValue(updateFunction);
    } else {
      if (!isControlled) {
        setStateValue(value);
      }

      onChangeCaller(value, ...args);
    }
  }, [isControlled, onChange]); // If a controlled component's value prop changes, we need to update stateRef

  if (isControlled) {
    stateRef.current = value;
  } else {
    value = stateValue;
  }

  return [value, setValue];
}

let $eaf77ba5e143129c6bb329a6e66020d3$var$instance = Math.round(Math.random() * 10000000000);
let $eaf77ba5e143129c6bb329a6e66020d3$var$i = 0;
/**
 * Provides state management for a radio group component. Provides a name for the group,
 * and manages selection and focus state.
 */

function useRadioGroupState(props) {
  // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
  let name = React.useMemo(() => props.name || "radio-group-" + $eaf77ba5e143129c6bb329a6e66020d3$var$instance + "-" + ++$eaf77ba5e143129c6bb329a6e66020d3$var$i, [props.name]);
  let [selectedValue, setSelected] = useControlledState(props.value, props.defaultValue, props.onChange);
  let [lastFocusedValue, setLastFocusedValue] = React.useState(null);

  let setSelectedValue = value => {
    if (!props.isReadOnly && !props.isDisabled) {
      setSelected(value);
    }
  };

  return {
    name,
    selectedValue,
    setSelectedValue,
    lastFocusedValue,
    setLastFocusedValue,
    isDisabled: props.isDisabled || false,
    isReadOnly: props.isReadOnly || false
  };
}

// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.

const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/React__default['default'].createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = React.useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return React.useMemo(() => defaultId || "react-aria-" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */

function useIsSSR() {
  let cur = React.useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = React.useState(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      setIsSSR(false);
    }, []);
  }

  return isSSR;
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
// https://en.wikipedia.org/wiki/Right-to-left

const $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']);
const $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']);
/**
 * Determines if a locale is read right to left using [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */

function $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) {
  // If the Intl.Locale API is available, use it to get the script for the locale.
  // This is more accurate than guessing by language, since languages can be written in multiple scripts.
  // @ts-ignore
  if (Intl.Locale) {
    // @ts-ignore
    let script = new Intl.Locale(locale).maximize().script;
    return $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS.has(script);
  } // If not, just guess by the language (first part of the locale)


  let lang = locale.split('-')[0];
  return $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS.has(lang);
}
/**
 * Gets the locale setting of the browser.
 */


function $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale() {
  // @ts-ignore
  let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
  return {
    locale,
    direction: $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) ? 'rtl' : 'ltr'
  };
}

let $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();
let $e851d0b81d46abd5f971c8e95c27f1$var$listeners = new Set();

function $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale() {
  $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();

  for (let listener of $e851d0b81d46abd5f971c8e95c27f1$var$listeners) {
    listener($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
  }
}
/**
 * Returns the current browser/system language, and updates when it changes.
 */


function $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale() {
  let isSSR = useIsSSR();
  let [defaultLocale, setDefaultLocale] = React.useState($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
  React.useEffect(() => {
    if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
      window.addEventListener('languagechange', $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
    }

    $e851d0b81d46abd5f971c8e95c27f1$var$listeners.add(setDefaultLocale);
    return () => {
      $e851d0b81d46abd5f971c8e95c27f1$var$listeners.delete(setDefaultLocale);

      if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
        window.removeEventListener('languagechange', $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
      }
    };
  }, []); // We cannot determine the browser's language on the server, so default to
  // en-US. This will be updated after hydration on the client to the correct value.

  if (isSSR) {
    return {
      locale: 'en-US',
      direction: 'ltr'
    };
  }

  return defaultLocale;
}

const $cff8541df3b5c83067b2ab3ee0d20$var$I18nContext = /*#__PURE__*/React__default['default'].createContext(null);
/**
 * Returns the current locale and layout direction.
 */

function useLocale() {
  let defaultLocale = $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale();
  let context = React.useContext($cff8541df3b5c83067b2ab3ee0d20$var$I18nContext);
  return context || defaultLocale;
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

function _clsx () {
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

// Since neither useLayoutEffect nor useEffect run on the server,
// we can suppress this by replace it with a noop on the server.

const useLayoutEffect$1 = typeof window !== 'undefined' ? React__default['default'].useLayoutEffect : () => {};
let $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap = new Map();
/**
 * If a default is not provided, generate an id.
 * @param defaultId - Default component id.
 */

function useId$1(defaultId) {
  let isRendering = React.useRef(true);
  isRendering.current = true;
  let [value, setValue] = React.useState(defaultId);
  let nextId = React.useRef(null); // don't memo this, we want it new each render so that the Effects always run

  let updateValue = val => {
    if (!isRendering.current) {
      setValue(val);
    } else {
      nextId.current = val;
    }
  };

  useLayoutEffect$1(() => {
    isRendering.current = false;
  }, [updateValue]);
  React.useEffect(() => {
    let newId = nextId.current;

    if (newId) {
      setValue(newId);
      nextId.current = null;
    }
  }, [setValue, updateValue]);
  let res = useSSRSafeId(value);
  $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.set(res, updateValue);
  return res;
}
/**
 * Merges two ids.
 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
 */

function mergeIds(idA, idB) {
  if (idA === idB) {
    return idA;
  }

  let setIdA = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idA);

  if (setIdA) {
    setIdA(idB);
    return idB;
  }

  let setIdB = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idB);

  if (setIdB) {
    setIdB(idA);
    return idA;
  }

  return idB;
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

/**
 * Calls all functions in the order they were chained with the same arguments.
 */

function chain() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return function () {
    for (let callback of callbacks) {
      if (typeof callback === 'function') {
        callback(...arguments);
      }
    }
  };
}
/**
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, and ids are deduplicated - different ids
 * will trigger a side-effect and re-render components hooked up with `useId`.
 * For all other props, the last prop object overrides all previous ones.
 * @param args - Multiple sets of props to merge together.
 */

function mergeProps() {
  let result = {};

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (let props of args) {
    for (let key in result) {
      // Chain events
      if (/^on[A-Z]/.test(key) && typeof result[key] === 'function' && typeof props[key] === 'function') {
        result[key] = chain(result[key], props[key]); // Merge classnames, sometimes classNames are empty string which eval to false, so we just need to do a type check
      } else if (key === 'className' && typeof result.className === 'string' && typeof props.className === 'string') {
        result[key] = _clsx(result.className, props.className);
      } else if (key === 'UNSAFE_className' && typeof result.UNSAFE_className === 'string' && typeof props.UNSAFE_className === 'string') {
        result[key] = _clsx(result.UNSAFE_className, props.UNSAFE_className);
      } else if (key === 'id' && result.id && props.id) {
        result.id = mergeIds(result.id, props.id); // Override others
      } else {
        result[key] = props[key] !== undefined ? props[key] : result[key];
      }
    } // Add props from b that are not in a


    for (let key in props) {
      if (result[key] === undefined) {
        result[key] = props[key];
      }
    }
  }

  return result;
}
const $f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames = new Set(['id']);
const $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']);
const $f6a965352cabf1a7c37e8c1337e5eab$var$propRe = /^(data-.*)$/;
/**
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */

function filterDOMProps(props, opts) {
  if (opts === void 0) {
    opts = {};
  }

  let {
    labelable,
    propNames
  } = opts;
  let filteredProps = {};

  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames.has(prop) || labelable && $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames.has(prop) || propNames != null && propNames.has(prop) || $f6a965352cabf1a7c37e8c1337e5eab$var$propRe.test(prop))) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
} // Currently necessary for Safari and old Edge:
// https://caniuse.com/#feat=mdn-api_htmlelement_focus_preventscroll_option
// See https://bugs.webkit.org/show_bug.cgi?id=178583
//
// Original licensing for the following methods can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/calvellido/focus-options-polyfill

function focusWithoutScrolling(element) {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll()) {
    element.focus({
      preventScroll: true
    });
  } else {
    let scrollableElements = $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element);
    element.focus();
    $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements);
  }
}
let $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = null;

function $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll() {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached == null) {
    $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = false;

    try {
      var focusElem = document.createElement('div');
      focusElem.focus({
        get preventScroll() {
          $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = true;
          return true;
        }

      });
    } catch (e) {// Ignore
    }
  }

  return $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached;
}

function $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;

  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }

    parent = parent.parentNode;
  }

  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }

  return scrollableElements;
}

function $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements) {
  for (let {
    element,
    scrollTop,
    scrollLeft
  } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.

let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement = new Map(); // A list of callbacks to call once there are no transitioning elements.

let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks = new Set();

function $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents() {
  if (typeof window === 'undefined') {
    return;
  }

  let onTransitionStart = e => {
    // Add the transitioning property to the list for this element.
    let transitions = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

    if (!transitions) {
      transitions = new Set();
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.set(e.target, transitions); // The transitioncancel event must be registered on the element itself, rather than as a global
      // event. This enables us to handle when the node is deleted from the document while it is transitioning.
      // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.

      e.target.addEventListener('transitioncancel', onTransitionEnd);
    }

    transitions.add(e.propertyName);
  };

  let onTransitionEnd = e => {
    // Remove property from list of transitioning properties.
    let properties = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

    if (!properties) {
      return;
    }

    properties.delete(e.propertyName); // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.

    if (properties.size === 0) {
      e.target.removeEventListener('transitioncancel', onTransitionEnd);
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.delete(e.target);
    } // If no transitioning elements, call all of the queued callbacks.


    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      for (let cb of $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks) {
        cb();
      }

      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.clear();
    }
  };

  document.body.addEventListener('transitionrun', onTransitionStart);
  document.body.addEventListener('transitionend', onTransitionEnd);
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents();
  } else {
    document.addEventListener('DOMContentLoaded', $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents);
  }
}

function runAfterTransition(fn) {
  // Wait one frame to see if an animation starts, e.g. a transition on mount.
  requestAnimationFrame(() => {
    // If no transitions are running, call the function immediately.
    // Otherwise, add it to a list of callbacks to run at the end of the animation.
    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      fn();
    } else {
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.add(fn);
    }
  });
} // Keep track of elements that we are currently handling dragging for via useDrag1D.
function useGlobalListeners() {
  let globalListeners = React.useRef(new Map());
  let addGlobalListener = React.useCallback((eventTarget, type, listener, options) => {
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = React.useCallback((eventTarget, type, listener, options) => {
    eventTarget.removeEventListener(type, listener, options);
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
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
/**
 * Merges aria-label and aria-labelledby into aria-labelledby when both exist.
 * @param props - Aria label props.
 * @param defaultLabel - Default value for aria-label when not present.
 */

function useLabels(props, defaultLabel) {
  let {
    id,
    'aria-label': label,
    'aria-labelledby': labelledBy
  } = props; // If there is both an aria-label and aria-labelledby,
  // combine them by pointing to the element itself.

  id = useId$1(id);

  if (labelledBy && label) {
    let ids = new Set([...labelledBy.trim().split(/\s+/), id]);
    labelledBy = [...ids].join(' ');
  } else if (labelledBy) {
    labelledBy = labelledBy.trim().split(/\s+/).join(' ');
  } // If no labels are provided, use the default


  if (!label && !labelledBy && defaultLabel) {
    label = defaultLabel;
  }

  return {
    id,
    'aria-label': label,
    'aria-labelledby': labelledBy
  };
} // Like useEffect, but only called for updates after the initial render.

function useSyncRef(context, ref) {
  useLayoutEffect$1(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [context, ref]);
}

function $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(re) {
  return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : false;
}

function isMac() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^Mac/);
}

/**
 * Provides the accessibility implementation for labels and their associated elements.
 * Labels provide context for user inputs.
 * @param props - The props for labels and fields.
 */

function useLabel(props) {
  let {
    id,
    label,
    'aria-labelledby': ariaLabelledby,
    'aria-label': ariaLabel,
    labelElementType = 'label'
  } = props;
  id = useId$1(id);
  let labelId = useId$1();
  let labelProps = {};

  if (label) {
    ariaLabelledby = ariaLabelledby ? ariaLabelledby + " " + labelId : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === 'label' ? id : undefined
    };
  } else if (!ariaLabelledby && !ariaLabel) {
    console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
  }

  let fieldProps = useLabels({
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
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

  return _extends$3.apply(this, arguments);
}

let $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
let $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';

function $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection() {
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'default') {
    $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
    document.documentElement.style.webkitUserSelect = 'none';
  }

  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'disabled';
}

function $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection() {
  // If the state is already default, there's nothing to do.
  // If it is restoring, then there's no need to queue a second restore.
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state !== 'disabled') {
    return;
  }

  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'restoring'; // There appears to be a delay on iOS where selection still might occur
  // after pointer up, so wait a bit before removing user-select.

  setTimeout(() => {
    // Wait for any CSS transitions to complete so we don't recompute style
    // for the whole page in the middle of the animation and cause jank.
    runAfterTransition(() => {
      // Avoid race conditions
      if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'restoring') {
        if (document.documentElement.style.webkitUserSelect === 'none') {
          document.documentElement.style.webkitUserSelect = $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect || '';
        }

        $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';
        $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
      }
    });
  }, 300);
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
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.


function $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(event) {
  // JAWS/NVDA with Firefox.
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }

  return event.detail === 0 && !event.pointerType;
}

const $a3ff51240de6f955c79cf17a88e349$export$PressResponderContext = /*#__PURE__*/React__default['default'].createContext(null);

$a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.displayName = 'PressResponderContext';

function $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props) {
  // Consume context from <PressResponder> and merge with props.
  let context = React.useContext($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);

  if (context) {
    let {
      register
    } = context,
        contextProps = _objectWithoutPropertiesLoose$1(context, ["register"]);

    props = mergeProps(contextProps, props);
    register();
  }

  useSyncRef(context, props.ref);
  return props;
}
/**
 * Handles press interactions across mouse, touch, keyboard, and screen readers.
 * It normalizes behavior across browsers and platforms, and handles many nuances
 * of dealing with pointer and keyboard events.
 */


function usePress(props) {
  let _usePressResponderCon = $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props),
      {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress
  } = _usePressResponderCon,
      domProps = _objectWithoutPropertiesLoose$1(_usePressResponderCon, ["onPress", "onPressChange", "onPressStart", "onPressEnd", "onPressUp", "isDisabled", "isPressed", "preventFocusOnPress", "ref"]);

  let propsRef = React.useRef(null);
  propsRef.current = {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled
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
    addGlobalListener,
    removeAllGlobalListeners
  } = useGlobalListeners();
  let pressProps = React.useMemo(() => {
    let state = ref.current;

    let triggerPressStart = (originalEvent, pointerType) => {
      let {
        onPressStart,
        onPressChange,
        isDisabled
      } = propsRef.current;

      if (isDisabled || state.didFirePressStart) {
        return;
      }

      if (onPressStart) {
        onPressStart({
          type: 'pressstart',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }

      if (onPressChange) {
        onPressChange(true);
      }

      state.didFirePressStart = true;
      setPressed(true);
    };

    let triggerPressEnd = function triggerPressEnd(originalEvent, pointerType, wasPressed) {
      if (wasPressed === void 0) {
        wasPressed = true;
      }

      let {
        onPressEnd,
        onPressChange,
        onPress,
        isDisabled
      } = propsRef.current;

      if (!state.didFirePressStart) {
        return;
      }

      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;

      if (onPressEnd) {
        onPressEnd({
          type: 'pressend',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }

      if (onPressChange) {
        onPressChange(false);
      }

      setPressed(false);

      if (onPress && wasPressed && !isDisabled) {
        onPress({
          type: 'press',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }
    };

    let triggerPressUp = (originalEvent, pointerType) => {
      let {
        onPressUp,
        isDisabled
      } = propsRef.current;

      if (isDisabled) {
        return;
      }

      if (onPressUp) {
        onPressUp({
          type: 'pressup',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }
    };

    let cancel = e => {
      if (state.isPressed) {
        if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }

        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
      }
    };

    let pressProps = {
      onKeyDown(e) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
          e.preventDefault();
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
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) {
          triggerPressUp($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard');
        }
      },

      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) {
          return;
        }

        if (e && e.button === 0) {
          e.stopPropagation();

          if (isDisabled) {
            e.preventDefault();
          } // If triggered from a screen reader or by using element.click(),
          // trigger as if it were a keyboard click.


          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent)) {
            // Ensure the element receives focus (VoiceOver on iOS does not do this)
            if (!isDisabled && !preventFocusOnPress) {
              focusWithoutScrolling(e.currentTarget);
            }

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
      if (state.isPressed && $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e)) {
        e.preventDefault();
        e.stopPropagation();
        state.isPressed = false;
        triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard', e.target === state.target);
        removeAllGlobalListeners(); // If the target is a link, trigger the click method to open the URL,
        // but defer triggering pressEnd until onClick event handler.

        if (e.target === state.target && $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') {
          state.target.click();
        }
      }
    };

    if (typeof PointerEvent !== 'undefined') {
      pressProps.onPointerDown = e => {
        // Only handle left clicks, and ignore events that bubbled through portals.
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on pointer down and handle focusing the pressable element ourselves.


        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
          e.preventDefault();
        } // iOS safari fires pointer events from VoiceOver (but only when outside an iframe...)
        // https://bugs.webkit.org/show_bug.cgi?id=222627


        state.pointerType = $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(e.nativeEvent) ? 'virtual' : e.pointerType;
        e.stopPropagation();

        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;

          if (!isDisabled && !preventFocusOnPress) {
            focusWithoutScrolling(e.currentTarget);
          }

          $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
          triggerPressStart(e, state.pointerType);
          addGlobalListener(document, 'pointermove', onPointerMove, false);
          addGlobalListener(document, 'pointerup', onPointerUp, false);
          addGlobalListener(document, 'pointercancel', onPointerCancel, false);
        }
      };

      pressProps.onMouseDown = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        if (e.button === 0) {
          // Chrome and Firefox on touch Windows devices require mouse down events
          // to be canceled in addition to pointer events, or an extra asynchronous
          // focus event will be fired.
          if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
            e.preventDefault();
          }

          e.stopPropagation();
        }
      };

      pressProps.onPointerUp = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        } // Only handle left clicks
        // Safari on iOS sometimes fires pointerup events, even
        // when the touch isn't over the target, so double check.


        if (e.button === 0 && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
        }
      }; // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
      // Use pointer move events instead to implement our own hit testing.
      // See https://bugs.webkit.org/show_bug.cgi?id=199803


      let onPointerMove = e => {
        if (e.pointerId !== state.activePointerId) {
          return;
        }

        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }
      };

      let onPointerUp = e => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
          if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
          } else if (state.isOverTarget) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
          }

          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        }
      };

      let onPointerCancel = e => {
        cancel(e);
      };

      pressProps.onDragStart = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        } // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.


        cancel(e);
      };
    } else {
      pressProps.onMouseDown = e => {
        // Only handle left clicks
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on mouse down and handle focusing the pressable element ourselves.


        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
          e.preventDefault();
        }

        e.stopPropagation();

        if (state.ignoreEmulatedMouseEvents) {
          return;
        }

        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse';

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget);
        }

        triggerPressStart(e, state.pointerType);
        addGlobalListener(document, 'mouseup', onMouseUp, false);
      };

      pressProps.onMouseEnter = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e, state.pointerType);
        }
      };

      pressProps.onMouseLeave = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
        }
      };

      pressProps.onMouseUp = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
          triggerPressUp(e, state.pointerType);
        }
      };

      let onMouseUp = e => {
        // Only handle left clicks
        if (e.button !== 0) {
          return;
        }

        state.isPressed = false;
        removeAllGlobalListeners();

        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }

        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }

        state.isOverTarget = false;
      };

      pressProps.onTouchStart = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();
        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(e.nativeEvent);

        if (!touch) {
          return;
        }

        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = 'touch'; // Due to browser inconsistencies, especially on mobile browsers, we prevent default
        // on the emulated mouse event and handle focusing the pressable element ourselves.

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget);
        }

        $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
        triggerPressStart(e, state.pointerType);
        addGlobalListener(window, 'scroll', onScroll, true);
      };

      pressProps.onTouchMove = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (!state.isPressed) {
          return;
        }

        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
        }
      };

      pressProps.onTouchEnd = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (!state.isPressed) {
          return;
        }

        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
          triggerPressEnd(e, state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd(e, state.pointerType, false);
        }

        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        removeAllGlobalListeners();
      };

      pressProps.onTouchCancel = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (state.isPressed) {
          cancel(e);
        }
      };

      let onScroll = e => {
        if (state.isPressed && e.target.contains(state.target)) {
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
          });
        }
      };

      pressProps.onDragStart = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        cancel(e);
      };
    }

    return pressProps;
  }, [addGlobalListener, isDisabled, preventFocusOnPress, removeAllGlobalListeners]); // Remove user-select: none in case component unmounts immediately after pressStart
  // eslint-disable-next-line arrow-body-style

  React.useEffect(() => {
    return () => $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
  }, []);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: mergeProps(domProps, pressProps)
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(target) {
  return target.tagName === 'A' && target.hasAttribute('href');
}

function $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(event) {
  const {
    key,
    target
  } = event;
  const element = target;
  const {
    tagName,
    isContentEditable
  } = element;
  const role = element.getAttribute('role'); // Accessibility for keyboards. Space and Enter only.
  // "Spacebar" is for IE 11

  return (key === 'Enter' || key === ' ' || key === 'Spacebar') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && ( // A link with a valid href should be handled natively,
  // unless it also has role='button' and was triggered using Space.
  !$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
  !(role === 'link' && key !== 'Enter');
}

function $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(event) {
  const {
    targetTouches
  } = event;

  if (targetTouches.length > 0) {
    return targetTouches[0];
  }

  return null;
}

function $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;

  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];

    if (touch.identifier === pointerId) {
      return touch;
    }
  }

  return null;
}

function $ffc54430b1dbeee65879852feaaff07d$var$createEvent(target, e) {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(a, b) {
  // check if they cannot overlap on x axis
  if (a.left > b.right || b.left > a.right) {
    return false;
  } // check if they cannot overlap on y axis


  if (a.top > b.bottom || b.top > a.bottom) {
    return false;
  }

  return true;
}

function $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point);
  return $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(rect, pointRect);
}

function $ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(target) {
  // We cannot prevent default if the target is inside a draggable element.
  return !target.closest('[draggable="true"]');
}

function $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(event) {
  // If the pointer size is zero, then we assume it's from a screen reader.
  return event.width === 0 && event.height === 0;
}
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */

function useFocus(props) {
  if (props.isDisabled) {
    return {
      focusProps: {}
    };
  }

  let onFocus, onBlur;

  if (props.onFocus || props.onFocusChange) {
    onFocus = e => {
      if (e.target === e.currentTarget) {
        if (props.onFocus) {
          props.onFocus(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(true);
        }
      }
    };
  }

  if (props.onBlur || props.onFocusChange) {
    onBlur = e => {
      if (e.target === e.currentTarget) {
        if (props.onBlur) {
          props.onBlur(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }
      }
    };
  }

  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = null;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers = new Set();
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = false;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false; // Only Tab or Esc keys will make focus visible on text input elements

const $d01f69bb2ab5f70dfd0005370a2a2cbc$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, e) {
  for (let handler of $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers) {
    handler(modality, e);
  }
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */


function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e) {
  // Control and Shift keys trigger when navigating back to the tab with keyboard.
  return !(e.metaKey || !isMac() && e.altKey || e.ctrlKey || e.type === 'keyup' && (e.key === 'Control' || e.key === 'Shift'));
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent(e) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;

  if ($d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'keyboard';
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('keyboard', e);
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent(e) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'pointer';

  if (e.type === 'mousedown' || e.type === 'pointerdown') {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('pointer', e);
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent(e) {
  if ($f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'virtual';
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent(e) {
  // Firefox fires two extra focus events when the user first clicks into an iframe:
  // first on the window, then on the document. We ignore these events so they don't
  // cause keyboard focus rings to appear.
  if (e.target === window || e.target === document) {
    return;
  } // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
  // This occurs, for example, when navigating a form with the next/previous buttons on iOS.


  if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'virtual';
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('virtual', e);
  }

  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false;
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur() {
  // When the window is blurred, reset state. This is necessary when tabbing out of the window,
  // for example, since a subsequent focus event won't be fired.
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */


function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents() {
  if (typeof window === 'undefined' || $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners) {
    return;
  } // Programmatic focus() calls shouldn't affect the current input modality.
  // However, we need to detect other cases when a focus event occurs without
  // a preceding user event (e.g. screen reader focus). Overriding the focus
  // method on HTMLElement.prototype is a bit hacky, but works.


  let focus = HTMLElement.prototype.focus;

  HTMLElement.prototype.focus = function () {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };

  document.addEventListener('keydown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener('keyup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener('click', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent, true); // Register focus events on the window so they are sure to happen
  // before React's event listeners (registered on the document).

  window.addEventListener('focus', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent, true);
  window.addEventListener('blur', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur, false);

  if (typeof PointerEvent !== 'undefined') {
    document.addEventListener('pointerdown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('pointermove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('pointerup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  } else {
    document.addEventListener('mousedown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('mousemove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('mouseup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  }

  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = true;
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  } else {
    document.addEventListener('DOMContentLoaded', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents);
  }
}
/**
 * If true, keyboard focus is visible.
 */


function isFocusVisible() {
  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality !== 'pointer';
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
/**
 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
 */

function useFocusVisibleListener(fn, deps, opts) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  React.useEffect(() => {
    let handler = (modality, e) => {
      if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$isKeyboardFocusEvent(opts == null ? void 0 : opts.isTextInput, modality, e)) {
        return;
      }

      fn(isFocusVisible());
    };

    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.add(handler);
    return () => $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.delete(handler);
  }, deps);
}
/**
 * Handles focus events for the target and its descendants.
 */

function useFocusWithin(props) {
  let state = React.useRef({
    isFocusWithin: false
  }).current;

  if (props.isDisabled) {
    return {
      focusWithinProps: {}
    };
  }

  let onFocus = e => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin) {
        props.onFocusWithin(e);
      }

      if (props.onFocusWithinChange) {
        props.onFocusWithinChange(true);
      }

      state.isFocusWithin = true;
    }
  };

  let onBlur = e => {
    // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
    // when moving focus inside the element. Only trigger if the currentTarget doesn't
    // include the relatedTarget (where focus is moving).
    if (state.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
      if (props.onBlurWithin) {
        props.onBlurWithin(e);
      }

      if (props.onFocusWithinChange) {
        props.onFocusWithinChange(false);
      }

      state.isFocusWithin = false;
    }
  };

  return {
    focusWithinProps: {
      onFocus: onFocus,
      onBlur: onBlur
    }
  };
} // iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
/**
 * This function wraps a React event handler to make stopPropagation the default, and support continuePropagation instead.
 */


function $dc0d75166de722fbf58eb6c3552$export$createEventHandler(handler) {
  if (!handler) {
    return;
  }

  let shouldStopPropagation = true;
  return e => {
    let event = _extends$3({}, e, {
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

    });

    handler(event);

    if (shouldStopPropagation) {
      e.stopPropagation();
    }
  };
}
/**
 * Handles keyboard interactions for a focusable element.
 */


function useKeyboard(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyDown),
      onKeyUp: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyUp)
    }
  };
}

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
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

function $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
    return false;
  }

  let {
    display,
    visibility
  } = element.style;
  let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';

  if (isVisible) {
    const {
      getComputedStyle
    } = element.ownerDocument.defaultView;
    let {
      display: computedDisplay,
      visibility: computedVisibility
    } = getComputedStyle(element);
    isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
  }

  return isVisible;
}

function $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
/**
 * Adapted from https://github.com/testing-library/jest-dom and 
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 * @param element - Element to evaluate for display or visibility.
 */


function $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element, childElement) {
  return element.nodeName !== '#comment' && $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) && $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element.parentElement, element));
}

const $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'];
const $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');

function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(element, scope) {
  return scope.some(node => node.contains(element));
}
/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */


function getFocusableTreeWalker(root, opts, scope) {
  let selector = opts != null && opts.tabbable ? $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR : $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var _opts$from; // Skip nodes inside the starting node.


      if (opts != null && (_opts$from = opts.from) != null && _opts$from.contains(node)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (node.matches(selector) && $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(node) && (!scope || $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope))) {
        return NodeFilter.FILTER_ACCEPT;
      }

      return NodeFilter.FILTER_SKIP;
    }

  });

  if (opts != null && opts.from) {
    walker.currentNode = opts.from;
  }

  return walker;
}
/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */


function useFocusRing(props) {
  if (props === void 0) {
    props = {};
  }

  let {
    autoFocus = false,
    isTextInput,
    within
  } = props;
  let state = React.useRef({
    isFocused: false,
    isFocusVisible: autoFocus || isFocusVisible()
  }).current;
  let [isFocusVisibleState, setFocusVisible] = React.useState(() => state.isFocused && state.isFocusVisible);

  let updateState = () => setFocusVisible(state.isFocused && state.isFocusVisible);

  let onFocusChange = isFocused => {
    state.isFocused = isFocused;
    updateState();
  };

  useFocusVisibleListener(isFocusVisible => {
    state.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let {
    focusProps
  } = useFocus({
    isDisabled: within,
    onFocusChange
  });
  let {
    focusWithinProps
  } = useFocusWithin({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused: state.isFocused,
    isFocusVisible: state.isFocused && isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

let $e11539c8317b2d21639df611cb5658f$var$FocusableContext = /*#__PURE__*/React__default['default'].createContext(null);

function $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(ref) {
  let context = React.useContext($e11539c8317b2d21639df611cb5658f$var$FocusableContext) || {};
  useSyncRef(context, ref);
  return context;
}
/**
 * Used to make an element focusable and capable of auto focus.
 */

function useFocusable(props, domRef) {
  let {
    focusProps
  } = useFocus(props);
  let {
    keyboardProps
  } = useKeyboard(props);
  let interactions = mergeProps(focusProps, keyboardProps);
  let domProps = $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  React.useEffect(() => {
    if (props.autoFocus && domRef.current) {
      domRef.current.focus();
    }
  }, [props.autoFocus, domRef]);
  return {
    focusableProps: mergeProps(_extends$2({}, interactions, {
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
    }), interactionProps)
  };
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

const $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames = new WeakMap();
/**
 * Provides the behavior and accessibility implementation for an individual
 * radio button in a radio group.
 * @param props - Props for the radio.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 * @param ref - Ref to the HTML input element.
 */

function useRadio(props, state, ref) {
  let {
    value,
    isRequired,
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  } = props;
  const isDisabled = props.isDisabled || state.isDisabled; // Individual radios cannot be readonly

  const isReadOnly = state.isReadOnly;
  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;

  if (!hasChildren && !hasAriaLabel) {
    console.warn('If you do not provide children, you must specify an aria-label for accessibility');
  }

  let checked = state.selectedValue === value;

  let onChange = e => {
    e.stopPropagation();
    state.setSelectedValue(value);
  };

  let {
    pressProps
  } = usePress({
    isDisabled
  });
  let {
    focusableProps
  } = useFocusable(mergeProps(props, {
    onFocus: () => state.setLastFocusedValue(value)
  }), ref);
  let interactions = mergeProps(pressProps, focusableProps);
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;

  if (isDisabled) {
    tabIndex = undefined;
  }

  return {
    inputProps: mergeProps(domProps, _extends$1({}, interactions, {
      type: 'radio',
      name: $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames.get(state),
      tabIndex,
      disabled: isDisabled,
      'aria-readonly': isReadOnly || undefined,
      required: isRequired,
      checked,
      value,
      onChange
    }))
  };
}
/**
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */

function useRadioGroup(props, state) {
  let {
    name,
    validationState,
    isReadOnly,
    isRequired,
    isDisabled,
    orientation = 'vertical'
  } = props;
  let {
    direction
  } = useLocale();
  let {
    labelProps,
    fieldProps
  } = useLabel(_extends$1({}, props, {
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: 'span'
  }));
  let domProps = filterDOMProps(props, {
    labelable: true
  }); // When the radio group loses focus, reset the focusable radio to null if
  // there is no selection. This allows tabbing into the group from either
  // direction to go to the first or last radio.

  let {
    focusWithinProps
  } = useFocusWithin({
    onBlurWithin() {
      if (!state.selectedValue) {
        state.setLastFocusedValue(null);
      }
    }

  });

  let onKeyDown = e => {
    let nextDir;

    switch (e.key) {
      case 'ArrowRight':
        if (direction === 'rtl' && orientation !== 'vertical') {
          nextDir = 'prev';
        } else {
          nextDir = 'next';
        }

        break;

      case 'ArrowLeft':
        if (direction === 'rtl' && orientation !== 'vertical') {
          nextDir = 'next';
        } else {
          nextDir = 'prev';
        }

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
    let walker = getFocusableTreeWalker(e.currentTarget, {
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

  let groupName = useId$1(name);
  $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames.set(state, groupName);
  return {
    radioGroupProps: mergeProps(domProps, _extends$1({
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: 'radiogroup',
      onKeyDown,
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-readonly': isReadOnly || undefined,
      'aria-required': isRequired || undefined,
      'aria-disabled': isDisabled || undefined,
      'aria-orientation': orientation
    }, fieldProps, focusWithinProps)),
    labelProps
  };
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const $f431c2c11cc559fa3c5864caafbcfd19$var$styles = {
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
/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */

function useVisuallyHidden(props) {
  if (props === void 0) {
    props = {};
  }

  let {
    style,
    isFocusable
  } = props;
  let [isFocused, setFocused] = React.useState(false);
  let {
    focusProps
  } = useFocus({
    isDisabled: !isFocusable,
    onFocusChange: setFocused
  }); // If focused, don't hide the element.

  let combinedStyles = React.useMemo(() => {
    if (isFocused) {
      return style;
    } else if (style) {
      return _extends({}, $f431c2c11cc559fa3c5864caafbcfd19$var$styles, style);
    } else {
      return $f431c2c11cc559fa3c5864caafbcfd19$var$styles;
    }
  }, [isFocused]);
  return {
    visuallyHiddenProps: _extends({}, focusProps, {
      style: combinedStyles
    })
  };
}
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */

function VisuallyHidden(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let {
    children,
    elementType: Element = 'div'
  } = props,
      otherProps = _objectWithoutPropertiesLoose(props, ["children", "elementType", "isFocusable", "style"]);

  let {
    visuallyHiddenProps
  } = useVisuallyHidden(props);
  return /*#__PURE__*/React__default['default'].createElement(Element, mergeProps(otherProps, visuallyHiddenProps), children);
}

const FeedbackButton = /*#__PURE__*/React__default['default'].forwardRef(({
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
  return react.jsx(Button, _extends$5({
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

  var deep = function (parent) {
    if (!parent || targets.indexOf(parent) >= 0) {
      return;
    }

    Array.prototype.forEach.call(parent.children, function (node) {
      if (targets.some(function (target) {
        return node.contains(target);
      })) {
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
  var styles = window.getComputedStyle(node);
  return styles.overflowX !== 'hidden' && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
  ;
};

var locationCouldBeScrolled = function (axis, node) {
  var current = node;

  do {
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

var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
  var delta = sourceDelta; // find scrollable target

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

    var elementScroll = scroll_1 - capacity - position;

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
var o$5 = ReactRemoveScroll;

const useLayoutEffect = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? React__namespace.useLayoutEffect : () => {};

const r$3 = React__namespace["useId".toString()] || (() => {});

let i$2 = 0;
function useId(n) {
  const [o, s] = React__namespace.useState(r$3());
  return useLayoutEffect(() => {
    n || s(e => null != e ? e : String(i$2++));
  }, [n]), n || (o ? `radix-${o}` : "");
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
  return React__namespace.Children.toArray(a).some(l$2) ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, React__namespace.Children.map(a, e => l$2(e) ? /*#__PURE__*/React__namespace.createElement(n$2, _extends$4({}, s, {
    ref: o
  }), e.props.children) : e)) : /*#__PURE__*/React__namespace.createElement(n$2, _extends$4({}, s, {
    ref: o
  }), a);
});
Slot.displayName = "Slot";
const n$2 = /*#__PURE__*/React__namespace.forwardRef((r, n) => {
  const {
    children: l,
    ...a
  } = r;
  

  return React__namespace.isValidElement(l) ? /*#__PURE__*/React__namespace.cloneElement(l, { ...o$4(a, l.props),
    ref: composeRefs(n, l.ref)
  }) : React__namespace.Children.count(l) > 1 ? React__namespace.Children.only(null) : null;
});
n$2.displayName = "SlotClone";
const Slottable = ({
  children: e
}) => /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, e);

function l$2(e) {
  
  return React__namespace.isValidElement(e) && e.type === Slottable;
}

function o$4(e, t) {
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

const Primitive = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "p", "span", "svg", "ul"].reduce((t, s) => ({ ...t,
  [s]: /*#__PURE__*/React__namespace.forwardRef((t, n) => {
    const {
      asChild: a,
      ...m
    } = t,
          d = a ? Slot : s;
    return React__namespace.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), t.as && console.error(o$3), /*#__PURE__*/React__namespace.createElement(d, _extends$4({}, m, {
      ref: n
    }));
  })
}), {});
const o$3 = "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element";

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
  }, []), m ? /*#__PURE__*/e__default['default'].createPortal( /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends$4({
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
        F.contains(t) ? y.current = t : a$2(y.current, {
          select: !0
        });
      }

      function t(e) {
        !h.paused && F && (F.contains(e.relatedTarget) || a$2(y.current, {
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

          for (const o of e) if (a$2(o, {
            select: t
          }), document.activeElement !== n) return;
        }((e = r$1(F), e.filter(e => "A" !== e.tagName)), {
          select: !0
        }), document.activeElement === t && a$2(F));
      }

      return () => {
        F.removeEventListener("focusScope.autoFocusOnMount", b), setTimeout(() => {
          const e = new Event("focusScope.autoFocusOnUnmount", c$3);
          F.addEventListener("focusScope.autoFocusOnUnmount", T), F.dispatchEvent(e), e.defaultPrevented || a$2(null != t ? t : document.body, {
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

      o && u ? e.shiftKey || n !== u ? e.shiftKey && n === o && (e.preventDefault(), l && a$2(u, {
        select: !0
      })) : (e.preventDefault(), l && a$2(o, {
        select: !0
      })) : n === t && e.preventDefault();
    }
  }, [l, m, h.paused]);
  

  return React__namespace.createElement(Primitive.div, _extends$4({
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

function a$2(e, {
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
      t !== n && (null == n || n.pause()), e = f$2(e, t), e.unshift(t);
    },

    remove(t) {
      var n;
      e = f$2(e, t), null === (n = e[0]) || void 0 === n || n.resume();
    }

  };
}();

function f$2(e, t) {
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
  const u = React__namespace.useRef(!1),
        c = React__namespace.useRef(!1);
  React__namespace.useEffect(() => {
    const e = e => {
      const t = "mouse" === e.pointerType;
      u.current = !t, c.current = t && 0 === e.button;
    },
          t = () => {
      u.current = !1, c.current = !1;
    };

    return document.addEventListener("pointerdown", e), document.addEventListener("pointerup", t), () => {
      document.removeEventListener("pointerdown", e), document.removeEventListener("pointerup", t);
    };
  }, []), useLayoutEffect(() => {
    if (r) {
      function e() {
        o$1--, 0 === o$1 && (document.body.style.pointerEvents = n$1);
      }

      return 0 === o$1 && (n$1 = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o$1++, () => {
        u.current ? document.addEventListener("click", e, {
          once: !0
        }) : c.current ? document.addEventListener("pointerup", e, {
          once: !0
        }) : e();
      };
    }
  }, [r]);
}

function createContext(t, n) {
  const o = /*#__PURE__*/React__namespace.createContext(n);

  function r(t) {
    const {
      children: n,
      ...r
    } = t,
          c = React__namespace.useMemo(() => r, Object.values(r));
    

    return React__namespace.createElement(o.Provider, {
      value: c
    }, n);
  }

  return r.displayName = t + "Provider", [r, function (r) {
    const c = React__namespace.useContext(o);
    if (c) return c;
    if (void 0 !== n) return n;
    throw new Error(`\`${r}\` must be used within \`${t}\``);
  }];
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
  }, t$2(c, ...o)];
}

function t$2(...t) {
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

function composeEventHandlers(e, n, {
  checkForDefaultPrevented: t = !0
} = {}) {
  return function (r) {
    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
  };
}

const [a$1, c$2] = C$1(),
      [l$1, d$1] = b(),
      [m$1, f$1] = C$1(),
      [p$1, v] = b();
const DismissableLayer = /*#__PURE__*/React__namespace.forwardRef((e, t) => {
  const n = 0 === d$1(),
        r = /*#__PURE__*/React__namespace.createElement(E$1, _extends$4({}, e, {
    ref: t
  }));
  return n ? /*#__PURE__*/React__namespace.createElement(a$1, null, /*#__PURE__*/React__namespace.createElement(m$1, null, r)) : r;
});


const E$1 = /*#__PURE__*/React__namespace.forwardRef((r, a) => {
  const {
    disableOutsidePointerEvents: m = !1,
    onEscapeKeyDown: E,
    onPointerDownOutside: C,
    onFocusOutside: b,
    onInteractOutside: w,
    onDismiss: L,
    ...y
  } = r,
        D = c$2(),
        P = d$1() + 1,
        T = P === D,
        g = f$1(m),
        x = v() + (m ? 1 : 0),
        O = x < g;
  useBodyPointerEvents({
    disabled: m
  }), useEscapeKeydown(e => {
    T && (null == E || E(e), e.defaultPrevented || null == L || L());
  });

  const {
    onPointerDownCapture: R
  } = function (e) {
    const n = useCallbackRef(e),
          r = React__namespace.useRef(!1);
    return React__namespace.useEffect(() => {
      const e = e => {
        const t = e.target;

        if (t && !r.current) {
          const r = new CustomEvent("dismissableLayer.pointerDownOutside", {
            bubbles: !1,
            cancelable: !0,
            detail: {
              originalEvent: e
            }
          });
          t.addEventListener("dismissableLayer.pointerDownOutside", n, {
            once: !0
          }), t.dispatchEvent(r);
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
    O || (null == C || C(e), null == w || w(e), e.defaultPrevented || null == L || L());
  }),
        {
    onBlurCapture: h,
    onFocusCapture: F
  } = function (e) {
    const n = useCallbackRef(e),
          r = React__namespace.useRef(!1);
    return React__namespace.useEffect(() => {
      const e = e => {
        const t = e.target;

        if (t && !r.current) {
          const r = new CustomEvent("dismissableLayer.focusOutside", {
            bubbles: !1,
            cancelable: !0,
            detail: {
              originalEvent: e
            }
          });
          t.addEventListener("dismissableLayer.focusOutside", n, {
            once: !0
          }), t.dispatchEvent(r);
        }
      };

      return document.addEventListener("focusin", e), () => document.removeEventListener("focusin", e);
    }, [n]), {
      onFocusCapture: () => r.current = !0,
      onBlurCapture: () => r.current = !1
    };
  }(e => {
    null == b || b(e), null == w || w(e), e.defaultPrevented || null == L || L();
  }),
        k = g > 0 && !O;
  


  return React__namespace.createElement(l$1, {
    runningCount: P
  }, /*#__PURE__*/React__namespace.createElement(p$1, {
    runningCount: x
  }, /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends$4({}, y, {
    ref: a,
    style: {
      pointerEvents: k ? "auto" : void 0,
      ...y.style
    },
    onPointerDownCapture: composeEventHandlers(r.onPointerDownCapture, R),
    onBlurCapture: composeEventHandlers(r.onBlurCapture, h),
    onFocusCapture: composeEventHandlers(r.onFocusCapture, F)
  }))));
});

function C$1(e) {
  const [t, n] = createContext("TotalLayerCount", {
    total: 0,
    onTotalIncrease: () => {},
    onTotalDecrease: () => {}
  }),
        o = ({
    children: e
  }) => {
    const [n, r] = React__namespace.useState(0);
    

    return React__namespace.createElement(t, {
      total: n,
      onTotalIncrease: React__namespace.useCallback(() => r(e => e + 1), []),
      onTotalDecrease: React__namespace.useCallback(() => r(e => e - 1), [])
    }, e);
  };

  return [o, function (e = !0) {
    const {
      total: t,
      onTotalIncrease: r,
      onTotalDecrease: o
    } = n("TotalLayerCountConsumer");
    return React__namespace.useLayoutEffect(() => {
      if (e) return r(), () => o();
    }, [e, r, o]), t;
  }];
}

function b(e) {
  const [t, n] = createContext("RunningLayerCount", {
    count: 0
  }),
        o = e => {
    const {
      children: n,
      runningCount: r
    } = e;
    

    return React__namespace.createElement(t, {
      count: r
    }, n);
  };

  return [o, function () {
    return n("RunningLayerCountConsumer").count || 0;
  }];
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
      }), () => {
        t(void 0), e.unobserve(r);
      };
    }
  }, [r]), i;
}

function observeElementRect(n, o) {
  const i = e$1.get(n);
  return void 0 === i ? (e$1.set(n, {
    rect: {},
    callbacks: [o]
  }), 1 === e$1.size && (t$1 = requestAnimationFrame(c$1))) : (i.callbacks.push(o), o(n.getBoundingClientRect())), () => {
    const c = e$1.get(n);
    if (void 0 === c) return;
    const i = c.callbacks.indexOf(o);
    i > -1 && c.callbacks.splice(i, 1), 0 === c.callbacks.length && (e$1.delete(n), 0 === e$1.size && cancelAnimationFrame(t$1));
  };
}
let t$1;
const e$1 = new Map();

function c$1() {
  const n = [];
  e$1.forEach((t, e) => {
    const c = e.getBoundingClientRect();
    var o, i;
    o = t.rect, i = c, (o.width !== i.width || o.height !== i.height || o.top !== i.top || o.right !== i.right || o.bottom !== i.bottom || o.left !== i.left) && (t.rect = c, n.push(t));
  }), n.forEach(t => {
    t.callbacks.forEach(e => e(t.rect));
  }), t$1 = requestAnimationFrame(c$1);
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
  }), n ? null : /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends$4({}, p, {
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
  }, /*#__PURE__*/React__namespace.createElement(Primitive.div, _extends$4({
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
        i = /*#__PURE__*/React__namespace.createElement(Primitive.button, _extends$4({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": c.open,
    "aria-controls": c.contentId,
    "data-state": w(c.open)
  }, n, {
    ref: s,
    onClick: composeEventHandlers(e.onClick, c.onOpenToggle)
  }));
  return c.hasCustomAnchor ? i : /*#__PURE__*/React__namespace.createElement(Anchor, _extends$4({
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
  }, c.modal ? /*#__PURE__*/React__namespace.createElement(A, _extends$4({}, t, {
    ref: o
  })) : /*#__PURE__*/React__namespace.createElement(O, _extends$4({}, t, {
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
  

  return React__namespace.createElement(d, null, /*#__PURE__*/React__namespace.createElement(o$5, {
    allowPinchZoom: n
  }, /*#__PURE__*/React__namespace.createElement(R, _extends$4({}, s, {
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
  

  return React__namespace.createElement(s, null, /*#__PURE__*/React__namespace.createElement(R, _extends$4({}, t, {
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
  }, /*#__PURE__*/React__namespace.createElement(Content$1, _extends$4({
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
let RadioContext = /*#__PURE__*/React__default['default'].createContext(null); // https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#example

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
  } = useRadioGroup(props, state);
  return react.jsx("div", _extends$5({}, radioGroupProps, {
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
  let state = React__default['default'].useContext(RadioContext);
  let ref = React__default['default'].useRef(null);
  let {
    inputProps
  } = useRadio(props, state, ref);
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const selected = state.selectedValue === props.value;
  return react.jsx("label", {
    onFocus: props.onFocus,
    css: ["--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));display:inline-flex;background-color:transparent;padding:0px;margin:0px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;border-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));cursor:pointer;text-align:center;border-radius:9999px;:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}:active{--tw-scale-x:1.05;--tw-scale-y:1.05;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}outline:2px solid transparent;outline-offset:2px;:focus{outline:2px solid transparent;outline-offset:2px;}", selected && {
      "--tw-scale-x": "1.1",
      "--tw-scale-y": "1.1",
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
  }, react.jsx(VisuallyHidden, null, react.jsx("input", _extends$5({}, inputProps, focusProps, {
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
  const emojiState = useRadioGroupState(props);
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

  const TriggerButton = /*#__PURE__*/React__default['default'].forwardRef((_, ref) => children ? children({
    open,
    setOpen: handleTriggerButton,
    ref: ref
  }) : react.jsx(FeedbackButton, {
    open: open,
    setOpen: handleTriggerButton,
    ref: ref
  }));
  return react.jsx("div", _extends$5({
    title: "Share any feedback about our products and services",
    css: ["padding:0px;position:relative;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;:focus{outline:2px solid transparent;outline-offset:2px;}:active{outline:2px solid transparent;outline-offset:2px;}", errorMessage && {
      "color": "transparent"
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
  }, react.jsx(Input, _extends$5({
    id: "feedback-email",
    type: "email",
    disabled: disableInputs,
    onChange: setEmailValue,
    value: emailValue
  }, combinedEmailProps))), enableFeedbackText && react.jsx("div", {
    className: "input"
  }, react.jsx(Textarea, _extends$5({
    id: "feedback-text",
    value: feedbackText,
    onChange: e => setFeedbackText(e),
    disabled: disableInputs // Disable the Grammarly extension on this textarea
    ,
    textareaClassName: classNames__default['default']("feedback-input", {
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
  }, react.jsx(Button, _extends$5({
    disabled: loading,
    "data-testid": "submit-button",
    type: "submit"
  }, combinedSubmitButtonProps))))))));
};

Feedback.propTypes = {
  /**
   Show text area to collect feedback text
   */
  enableFeedbackText: PropTypes__default['default'].bool,

  /**
   Show emoji selection buttons
   */
  enableEmoji: PropTypes__default['default'].bool,

  /**
   Don't make the http request
   */
  dryRun: PropTypes__default['default'].bool,

  /**
   URL to make the POST request
   */
  url: PropTypes__default['default'].string,

  /**
   Don't show the email input field and use the specified email instead
   */
  email: PropTypes__default['default'].string,

  /**
   Props to pass on to the email input field
   */
  emailProps: PropTypes__default['default'].any,

  /**
   Props to pass on to the feedback text area
   */
  feedbackTextProps: PropTypes__default['default'].any,

  /**
   Props to pass on to the submit button
   */
  submitButtonProps: PropTypes__default['default'].any,

  /**
   The preferred side of the anchor to render against when open.
  */
  side: PropTypes__default['default'].oneOf(["top", "right", "bottom", "left"]),

  /**
   The distance in pixels from the anchor.
  */
  sideOffset: PropTypes__default['default'].number,

  /**
    The preferred alignment against the anchor. May change when collisions occur.
  */
  align: PropTypes__default['default'].oneOf(["start", "center", "end"])
};

module.exports = Feedback;
