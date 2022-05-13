'use strict';

var React = require('react');
var react = require('@emotion/react');
var PropTypes = require('prop-types');
var HoverCard = require('@radix-ui/react-hover-card');

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
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var HoverCard__namespace = /*#__PURE__*/_interopNamespace(HoverCard);

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

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const fadeIn = react.keyframes`
  0% {
    opacity: 0
  }
  to {
    opacity: 1
  }`;
const fadeOut = react.keyframes`
  0% {
    opacity: 1
  }
  to {
    opacity: 0
  }`;

const HoverCardContent = /*#__PURE__*/createStyled(HoverCard__namespace.Content, process.env.NODE_ENV === "production" ? {
  target: "egsvb0g1"
} : {
  target: "egsvb0g1",
  label: "HoverCardContent"
})(() => [{
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "borderRadius": "5px"
}],
/*#__PURE__*/

/*#__PURE__*/

/*#__PURE__*/

/*#__PURE__*/
react.css("max-width:24em;&[data-state='open']{animation:", fadeIn, " .2s ease-out forwards;}&[data-state='closed']{animation:", fadeOut, " .1s ease-out forwards;}&[data-align='end']{transform:translateX(8px);}" + (process.env.NODE_ENV === "production" ? "" : ";label:HoverCardContent;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCOEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:HoverCardContent;", process.env.NODE_ENV === "production" ? "" : ";label:HoverCardContent;", process.env.NODE_ENV === "production" ? "" : ";label:HoverCardContent;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCeUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */");

const HoverCardTrigger = /*#__PURE__*/createStyled(HoverCard__namespace.Trigger, process.env.NODE_ENV === "production" ? {
  target: "egsvb0g0"
} : {
  target: "egsvb0g0",
  label: "HoverCardTrigger"
})(() => [{
  "display": "inline-block"
}], process.env.NODE_ENV === "production" ? {
  name: "108ufy5",
  styles: "width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block"
} : {
  name: "1r8foa1-HoverCardTrigger",
  styles: "width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block;label:HoverCardTrigger;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DeUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */");

const Tooltip = ({
  children,
  text,
  placement,
  className,
  showArrow,
  style,
  ...props
}) => {
  return react.jsx(HoverCard__namespace.Root, _extends$1({
    openDelay: 0,
    closeDelay: 200
  }, props), react.jsx(HoverCardTrigger, {
    className: className
  }, children), react.jsx(HoverCardContent, {
    side: placement,
    style: style,
    onClick: e => e.stopPropagation()
  }, text, showArrow && react.jsx(HoverCard__namespace.Arrow, {
    offset: 10
  })));
};

Tooltip.defaultProps = {
  placement: "top",
  showArrow: true
};
Tooltip.propTypes = {
  placement: PropTypes__default["default"].oneOf(["top", "right", "bottom", "left"]),
  showArrow: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string
};

module.exports = Tooltip;
