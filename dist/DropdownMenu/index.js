'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var E$1 = require('react');
var react = require('@emotion/react');
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

var E__namespace = /*#__PURE__*/_interopNamespace(E$1);
var E__default = /*#__PURE__*/_interopDefaultLegacy(E$1);
var e__default = /*#__PURE__*/_interopDefaultLegacy(e$2);

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

        mergedProps.theme = E$1.useContext(react.ThemeContext);
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
      var ele = /*#__PURE__*/E$1.createElement(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/E$1.createElement(E$1.Fragment, null, /*#__PURE__*/E$1.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
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
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

const useLayoutEffect = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? E__namespace.useLayoutEffect : () => {};

const r$3 = E__namespace["useId".toString()] || (() => {});

let i$3 = 0;
function useId(n) {
  const [o, s] = E__namespace.useState(r$3());
  return useLayoutEffect(() => {
    n || s(e => null != e ? e : String(i$3++));
  }, [n]), n || (o ? `radix-${o}` : "");
}

let t$3 = 0;
function useFocusGuards() {
  E__namespace.useEffect(() => {
    var e, n;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : o$4()), document.body.insertAdjacentElement("beforeend", null !== (n = r[1]) && void 0 !== n ? n : o$4()), t$3++, () => {
      1 === t$3 && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), t$3--;
    };
  }, []);
}

function o$4() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}

function useCallbackRef$1(r) {
  const t = E__namespace.useRef(r);
  return E__namespace.useEffect(() => {
    t.current = r;
  }), E__namespace.useMemo(() => (...e) => {
    var r;
    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
  }, []);
}

function useDirection(t, n) {
  const [r, o] = E__namespace.useState("ltr"),
        [i, u] = E__namespace.useState(),
        c = E__namespace.useRef(0);
  return E__namespace.useEffect(() => {
    if (void 0 === n && null != t && t.parentElement) {
      const e = getComputedStyle(t.parentElement);
      u(e);
    }
  }, [t, n]), E__namespace.useEffect(() => (void 0 === n && function e() {
    c.current = requestAnimationFrame(() => {
      const t = null == i ? void 0 : i.direction;
      t && o(t), e();
    });
  }(), () => cancelAnimationFrame(c.current)), [i, n, o]), n || r;
}

function useControllableState({
  prop: o,
  defaultProp: r,
  onChange: n = () => {}
}) {
  const [a, u] = function ({
    defaultProp: o,
    onChange: r
  }) {
    const n = E__namespace.useState(o),
          [a] = n,
          u = E__namespace.useRef(a),
          c = useCallbackRef$1(r);
    return E__namespace.useEffect(() => {
      u.current !== a && (c(a), u.current = a);
    }, [a, u, c]), n;
  }({
    defaultProp: r,
    onChange: n
  }),
        c = void 0 !== o,
        f = c ? o : a,
        l = useCallbackRef$1(n);

  return [f, E__namespace.useCallback(e => {
    if (c) {
      const t = e,
            r = "function" == typeof e ? t(o) : e;
      r !== o && l(r);
    } else u(e);
  }, [c, o, u, l])];
}

function composeRefs(...o) {
  return e => o.forEach(o => function (o, e) {
    "function" == typeof o ? o(e) : null != o && (o.current = e);
  }(o, e));
}
function useComposedRefs(...e) {
  return E__namespace.useCallback(composeRefs(...e), e);
}

const Slot = /*#__PURE__*/E__namespace.forwardRef((e, o) => {
  const {
    children: a,
    ...s
  } = e;
  return E__namespace.Children.toArray(a).some(l$4) ? /*#__PURE__*/E__namespace.createElement(E__namespace.Fragment, null, E__namespace.Children.map(a, e => l$4(e) ? /*#__PURE__*/E__namespace.createElement(n$2, _extends({}, s, {
    ref: o
  }), e.props.children) : e)) : /*#__PURE__*/E__namespace.createElement(n$2, _extends({}, s, {
    ref: o
  }), a);
});
Slot.displayName = "Slot";
const n$2 = /*#__PURE__*/E__namespace.forwardRef((r, n) => {
  const {
    children: l,
    ...a
  } = r;
  

  return E__namespace.isValidElement(l) ? /*#__PURE__*/E__namespace.cloneElement(l, { ...o$3(a, l.props),
    ref: composeRefs(n, l.ref)
  }) : E__namespace.Children.count(l) > 1 ? E__namespace.Children.only(null) : null;
});
n$2.displayName = "SlotClone";
const Slottable = ({
  children: e
}) => /*#__PURE__*/E__namespace.createElement(E__namespace.Fragment, null, e);

function l$4(e) {
  
  return E__namespace.isValidElement(e) && e.type === Slottable;
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

const Primitive = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "p", "span", "svg", "ul"].reduce((t, s) => ({ ...t,
  [s]: /*#__PURE__*/E__namespace.forwardRef((t, n) => {
    const {
      asChild: a,
      ...m
    } = t,
          d = a ? Slot : s;
    return E__namespace.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), t.as && console.error(o$2), /*#__PURE__*/E__namespace.createElement(d, _extends({}, m, {
      ref: n
    }));
  })
}), {});
const o$2 = "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element";

function createContext(t, n) {
  const o = /*#__PURE__*/E__namespace.createContext(n);

  function r(t) {
    const {
      children: n,
      ...r
    } = t,
          c = E__namespace.useMemo(() => r, Object.values(r));
    

    return E__namespace.createElement(o.Provider, {
      value: c
    }, n);
  }

  return r.displayName = t + "Provider", [r, function (r) {
    const c = E__namespace.useContext(o);
    if (c) return c;
    if (void 0 !== n) return n;
    throw new Error(`\`${r}\` must be used within \`${t}\``);
  }];
}
function createContextScope(n, o = []) {
  let r = [];

  const c = () => {
    const t = r.map(t => /*#__PURE__*/E__namespace.createContext(t));
    return function (o) {
      const r = (null == o ? void 0 : o[n]) || t;
      return E__namespace.useMemo(() => ({
        [`__scope${n}`]: { ...o,
          [n]: r
        }
      }), [o, r]);
    };
  };

  return c.scopeName = n, [function (t, o) {
    const c = /*#__PURE__*/E__namespace.createContext(o),
          u = r.length;

    function s(t) {
      const {
        scope: o,
        children: r,
        ...s
      } = t,
            i = (null == o ? void 0 : o[n][u]) || c,
            a = E__namespace.useMemo(() => s, Object.values(s));
      

      return E__namespace.createElement(i.Provider, {
        value: a
      }, r);
    }

    return r = [...r, o], s.displayName = t + "Provider", [s, function (r, s) {
      const i = (null == s ? void 0 : s[n][u]) || c,
            a = E__namespace.useContext(i);
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
      return E__namespace.useMemo(() => ({
        [`__scope${n.scopeName}`]: r
      }), [r]);
    };
  };

  return o.scopeName = n.scopeName, o;
}

function createCollection(c) {
  const n = c + "CollectionProvider",
        [l, i] = createContextScope(n),
        [f, a] = l(n, {
    collectionRef: {
      current: null
    },
    itemMap: new Map()
  }),
        u = e => {
    const {
      scope: r,
      children: t
    } = e,
          c = E__default['default'].useRef(null),
          n = E__default['default'].useRef(new Map()).current;
    

    return E__default['default'].createElement(f, {
      scope: r,
      itemMap: n,
      collectionRef: c
    }, t);
  },
        m = c + "CollectionSlot",
        s = /*#__PURE__*/E__default['default'].forwardRef((t, c) => {
    const {
      scope: n,
      children: l
    } = t,
          i = a(m, n),
          f = useComposedRefs(c, i.collectionRef);
    

    return E__default['default'].createElement(Slot, {
      ref: f
    }, l);
  }),
        p = c + "CollectionItemSlot",
        d = "data-radix-collection-item",
        R = /*#__PURE__*/E__default['default'].forwardRef((t, c) => {
    const {
      scope: n,
      children: l,
      ...i
    } = t,
          f = E__default['default'].useRef(null),
          u = useComposedRefs(c, f),
          m = a(p, n);
    return E__default['default'].useEffect(() => (m.itemMap.set(f, {
      ref: f,
      ...i
    }), () => {
      m.itemMap.delete(f);
    })), /*#__PURE__*/E__default['default'].createElement(Slot, {
      [d]: "",
      ref: u
    }, l);
  });

  return [{
    Provider: u,
    Slot: s,
    ItemSlot: R
  }, function (e) {
    const r = a(c + "CollectionConsumer", e);
    return E__default['default'].useCallback(() => {
      const e = r.collectionRef.current;
      if (!e) return [];
      const t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
    }, [r.collectionRef, r.itemMap]);
  }, i];
}

function composeEventHandlers(e, n, {
  checkForDefaultPrevented: t = !0
} = {}) {
  return function (r) {
    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
  };
}

const f$4 = {
  bubbles: !1,
  cancelable: !0
},
      [p$2, l$3, m$3] = createCollection("RovingFocusGroup"),
      [d$3, v$1] = createContextScope("RovingFocusGroup", [m$3]);
const [g$1, F$1] = d$3("RovingFocusGroup");
const RovingFocusGroup = /*#__PURE__*/E__namespace.forwardRef((e, o) => /*#__PURE__*/E__namespace.createElement(p$2.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /*#__PURE__*/E__namespace.createElement(p$2.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /*#__PURE__*/E__namespace.createElement(w$1, _extends({}, e, {
  ref: o
})))));


const w$1 = /*#__PURE__*/E__namespace.forwardRef((t, n) => {
  const {
    __scopeRovingFocusGroup: c,
    orientation: p,
    dir: m = "ltr",
    loop: d = !1,
    currentTabStopId: v,
    defaultCurrentTabStopId: F,
    onCurrentTabStopIdChange: w,
    onEntryFocus: b,
    ...x
  } = t,
        E = E__namespace.useRef(null),
        I = useComposedRefs(n, E),
        [G = null, h] = useControllableState({
    prop: v,
    defaultProp: F,
    onChange: w
  }),
        [T, A] = E__namespace.useState(!1),
        y = useCallbackRef$1(b),
        D = l$3(c),
        S = E__namespace.useRef(!1);
  return E__namespace.useEffect(() => {
    const e = E.current;
    if (e) return e.addEventListener("rovingFocusGroup.onEntryFocus", y), () => e.removeEventListener("rovingFocusGroup.onEntryFocus", y);
  }, [y]), /*#__PURE__*/E__namespace.createElement(g$1, {
    scope: c,
    orientation: p,
    dir: m,
    loop: d,
    currentTabStopId: G,
    onItemFocus: E__namespace.useCallback(e => h(e), [h]),
    onItemShiftTab: E__namespace.useCallback(() => A(!0), [])
  }, /*#__PURE__*/E__namespace.createElement(Primitive.div, _extends({
    tabIndex: T ? -1 : 0,
    "data-orientation": p
  }, x, {
    ref: I,
    style: {
      outline: "none",
      ...t.style
    },
    onMouseDown: composeEventHandlers(t.onMouseDown, () => {
      S.current = !0;
    }),
    onFocus: composeEventHandlers(t.onFocus, e => {
      const o = !S.current;

      if (e.target === e.currentTarget && o && !T) {
        const o = new Event("rovingFocusGroup.onEntryFocus", f$4);

        if (e.currentTarget.dispatchEvent(o), !o.defaultPrevented) {
          const e = D().filter(e => e.focusable);
          R$1([e.find(e => e.active), e.find(e => e.id === G), ...e].filter(Boolean).map(e => e.ref.current));
        }
      }

      S.current = !1;
    }),
    onBlur: composeEventHandlers(t.onBlur, () => A(!1))
  })));
});
const RovingFocusGroupItem = /*#__PURE__*/E__namespace.forwardRef((e, o) => {
  const {
    __scopeRovingFocusGroup: n,
    focusable: i = !0,
    active: c = !1,
    ...f
  } = e,
        m = useId(),
        d = F$1("RovingFocusGroupItem", n),
        v = d.currentTabStopId === m,
        g = l$3(n);
  

  return E__namespace.createElement(p$2.ItemSlot, {
    scope: n,
    id: m,
    focusable: i,
    active: c
  }, /*#__PURE__*/E__namespace.createElement(Primitive.span, _extends({
    tabIndex: v ? 0 : -1,
    "data-orientation": d.orientation
  }, f, {
    ref: o,
    onMouseDown: composeEventHandlers(e.onMouseDown, e => {
      i ? d.onItemFocus(m) : e.preventDefault();
    }),
    onFocus: composeEventHandlers(e.onFocus, () => d.onItemFocus(m)),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      if ("Tab" === e.key && e.shiftKey) return void d.onItemShiftTab();
      if (e.target !== e.currentTarget) return;

      const o = function (e, o, r) {
        const t = function (e, o) {
          return "rtl" !== o ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
        }(e.key, r);

        return "vertical" === o && ["ArrowLeft", "ArrowRight"].includes(t) || "horizontal" === o && ["ArrowUp", "ArrowDown"].includes(t) ? void 0 : b$2[t];
      }(e, d.orientation, d.dir);

      if (void 0 !== o) {
        e.preventDefault();
        let n = g().filter(e => e.focusable).map(e => e.ref.current);
        if ("last" === o) n.reverse();else if ("prev" === o || "next" === o) {
          "prev" === o && n.reverse();
          const i = n.indexOf(e.currentTarget);
          n = d.loop ? (t = i + 1, (r = n).map((e, o) => r[(t + o) % r.length])) : n.slice(i + 1);
        }
        setTimeout(() => R$1(n));
      }

      var r, t;
    })
  })));
});


const b$2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};

function R$1(e) {
  const o = document.activeElement;

  for (const r of e) {
    if (r === o) return;
    if (r.focus(), document.activeElement !== o) return;
  }
}

const Root$3 = RovingFocusGroup;
const Item$2 = RovingFocusGroupItem;

const Portal = /*#__PURE__*/E__namespace.forwardRef((a, i) => {
  var n, d;
  const {
    containerRef: s,
    style: u,
    ...c
  } = a,
        m = null !== (n = null == s ? void 0 : s.current) && void 0 !== n ? n : null === globalThis || void 0 === globalThis || null === (d = globalThis.document) || void 0 === d ? void 0 : d.body,
        [, f] = E__namespace.useState({});
  return useLayoutEffect(() => {
    f({});
  }, []), m ? /*#__PURE__*/e__default['default'].createPortal( /*#__PURE__*/E__namespace.createElement(Primitive.div, _extends({
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

function useSize(r) {
  const [i, t] = E__namespace.useState(void 0);
  return E__namespace.useEffect(() => {
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
  }), 1 === e$1.size && (t$1 = requestAnimationFrame(c$3))) : (i.callbacks.push(o), o(n.getBoundingClientRect())), () => {
    const c = e$1.get(n);
    if (void 0 === c) return;
    const i = c.callbacks.indexOf(o);
    i > -1 && c.callbacks.splice(i, 1), 0 === c.callbacks.length && (e$1.delete(n), 0 === e$1.size && cancelAnimationFrame(t$1));
  };
}
let t$1;
const e$1 = new Map();

function c$3() {
  const n = [];
  e$1.forEach((t, e) => {
    const c = e.getBoundingClientRect();
    var o, i;
    o = t.rect, i = c, (o.width !== i.width || o.height !== i.height || o.top !== i.top || o.right !== i.right || o.bottom !== i.bottom || o.left !== i.left) && (t.rect = c, n.push(t));
  }), n.forEach(t => {
    t.callbacks.forEach(e => e(t.rect));
  }), t$1 = requestAnimationFrame(c$3);
}

function useRect(e) {
  const [o, c] = E__namespace.useState();
  return E__namespace.useEffect(() => {
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
    popperStyles: o$1,
    arrowStyles: n$1
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
    let o = n$1;
    f && (o = i$2({
      popperSize: c,
      arrowSize: f,
      arrowOffset: l,
      side: d,
      align: x
    }));
    return {
      popperStyles: { ...t,
        "--radix-popper-transform-origin": r$2(c, d, x, l, f)
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

  const R = s$2(S, $),
        M = y[a$2(d)][x],
        D = function (t, e, r) {
    const o = a$2(t);
    return e[t] && !r[o] ? o : t;
  }(d, R, s$2(DOMRect.fromRect({ ...c,
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

  let C = n$1;
  f && (C = i$2({
    popperSize: c,
    arrowSize: f,
    arrowOffset: l,
    side: D,
    align: A
  }));
  return {
    popperStyles: { ...I,
      "--radix-popper-transform-origin": r$2(c, D, A, l, f)
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

function r$2(t, e, r, o, n) {
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

const o$1 = {
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0,
  transform: "translate3d(0, -200%, 0)"
},
      n$1 = {
  position: "absolute",
  opacity: 0
};

function i$2({
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
    direction: p$1(o, n)
  };
  return "top" !== o && "bottom" !== o || ("start" === n && (f.left = `${r}px`), "center" === n && (f.left = `${i}px`), "end" === n && (f.right = `${r}px`)), "left" !== o && "right" !== o || ("start" === n && (f.top = `${r}px`), "center" === n && (f.top = `${a}px`), "end" === n && (f.bottom = `${r}px`)), f;
}

function p$1(t, e) {
  return ("top" !== t && "right" !== t || "end" !== e) && ("bottom" !== t && "left" !== t || "end" === e) ? "ltr" : "rtl";
}

function a$2(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}

function s$2(t, e) {
  return {
    top: t.top < e.top,
    right: t.right > e.right,
    bottom: t.bottom > e.bottom,
    left: t.left < e.left
  };
}

const [c$2, l$2] = createContextScope("Popper");
const [f$3, d$2] = c$2("Popper");
const Popper = e => {
  const {
    __scopePopper: o,
    children: r
  } = e,
        [t, n] = E__namespace.useState(null);
  

  return E__namespace.createElement(f$3, {
    scope: o,
    anchor: t,
    onAnchorChange: n
  }, r);
};


const PopperAnchor = /*#__PURE__*/E__namespace.forwardRef((e, r) => {
  const {
    __scopePopper: t,
    virtualRef: n,
    ...p
  } = e,
        c = d$2("PopperAnchor", t),
        l = E__namespace.useRef(null),
        f = useComposedRefs(r, l);
  return E__namespace.useEffect(() => {
    c.onAnchorChange((null == n ? void 0 : n.current) || l.current);
  }), n ? null : /*#__PURE__*/E__namespace.createElement(Primitive.div, _extends({}, p, {
    ref: f
  }));
});


const [u, m$2] = c$2("PopperContent");
const PopperContent = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
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
        P = d$2("PopperContent", c),
        [A, g] = E__namespace.useState(),
        E = useRect(P.anchor),
        [y, C] = E__namespace.useState(null),
        S = useSize(y),
        [R, O] = E__namespace.useState(null),
        _ = useSize(R),
        b = useComposedRefs(n, e => C(e)),
        z = function () {
    const [e, o] = E__namespace.useState(void 0);
    return E__namespace.useEffect(() => {
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
  


  return E__namespace.createElement("div", {
    style: k,
    "data-radix-popper-content-wrapper": ""
  }, /*#__PURE__*/E__namespace.createElement(u, {
    scope: c,
    arrowStyles: L,
    onArrowChange: O,
    onArrowOffsetChange: g
  }, /*#__PURE__*/E__namespace.createElement(Primitive.div, _extends({
    "data-side": B,
    "data-align": D
  }, v, {
    style: { ...v.style,
      animation: H ? void 0 : "none"
    },
    ref: b
  }))));
});


const Root$2 = Popper;
const Anchor$1 = PopperAnchor;
const Content$2 = PopperContent;

const Presence = u => {
  const {
    present: o,
    children: i
  } = u,
        s = function (n) {
    const [u, o] = E__namespace.useState(),
          i = E__namespace.useRef({}),
          s = E__namespace.useRef(n),
          c = E__namespace.useRef("none"),
          a = n ? "mounted" : "unmounted",
          [d, m] = function (e, n) {
      return E__namespace.useReducer((e, t) => {
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

    return E__namespace.useEffect(() => {
      const e = r$1(i.current);
      c.current = "mounted" === d ? e : "none";
    }, [d]), useLayoutEffect(() => {
      const e = i.current,
            t = s.current;

      if (t !== n) {
        const u = c.current,
              o = r$1(e);
        if (n) m("MOUNT");else if ("none" === o || "none" === (null == e ? void 0 : e.display)) m("UNMOUNT");else {
          const e = u !== o;
          m(t && e ? "ANIMATION_OUT" : "UNMOUNT");
        }
        s.current = n;
      }
    }, [n, m]), useLayoutEffect(() => {
      if (u) {
        const e = e => {
          const n = r$1(i.current).includes(e.animationName);
          e.target === u && n && m("ANIMATION_END");
        },
              n = e => {
          e.target === u && (c.current = r$1(i.current));
        };

        return u.addEventListener("animationstart", n), u.addEventListener("animationcancel", e), u.addEventListener("animationend", e), () => {
          u.removeEventListener("animationstart", n), u.removeEventListener("animationcancel", e), u.removeEventListener("animationend", e);
        };
      }
    }, [u, m]), {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: E__namespace.useCallback(e => {
        e && (i.current = getComputedStyle(e)), o(e);
      }, [])
    };
  }(o),
        c = "function" == typeof i ? i({
    present: s.isPresent
  }) : E__namespace.Children.only(i),
        a = useComposedRefs(s.ref, c.ref);

  return "function" == typeof i || s.isPresent ? /*#__PURE__*/E__namespace.cloneElement(c, {
    ref: a
  }) : null;
};

function r$1(e) {
  return (null == e ? void 0 : e.animationName) || "none";
}

Presence.displayName = "Presence";

const c$1 = {
  bubbles: !1,
  cancelable: !0
};
const FocusScope = /*#__PURE__*/E__namespace.forwardRef((i, f) => {
  const {
    loop: l = !1,
    trapped: m = !1,
    onMountAutoFocus: p,
    onUnmountAutoFocus: v,
    ...E
  } = i,
        [F, S] = E__namespace.useState(null),
        b = useCallbackRef$1(p),
        T = useCallbackRef$1(v),
        y = E__namespace.useRef(null),
        L = useComposedRefs(f, e => S(e)),
        h = E__namespace.useRef({
    paused: !1,

    pause() {
      this.paused = !0;
    },

    resume() {
      this.paused = !1;
    }

  }).current;
  E__namespace.useEffect(() => {
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
  }, [m, F, h.paused]), E__namespace.useEffect(() => {
    if (F) {
      d$1.add(h);
      const t = document.activeElement;

      if (!F.contains(t)) {
        const n = new Event("focusScope.autoFocusOnMount", c$1);
        F.addEventListener("focusScope.autoFocusOnMount", b), F.dispatchEvent(n), n.defaultPrevented || (!function (e, {
          select: t = !1
        } = {}) {
          const n = document.activeElement;

          for (const o of e) if (a$1(o, {
            select: t
          }), document.activeElement !== n) return;
        }((e = r(F), e.filter(e => "A" !== e.tagName)), {
          select: !0
        }), document.activeElement === t && a$1(F));
      }

      return () => {
        F.removeEventListener("focusScope.autoFocusOnMount", b), setTimeout(() => {
          const e = new Event("focusScope.autoFocusOnUnmount", c$1);
          F.addEventListener("focusScope.autoFocusOnUnmount", T), F.dispatchEvent(e), e.defaultPrevented || a$1(null != t ? t : document.body, {
            select: !0
          }), F.removeEventListener("focusScope.autoFocusOnUnmount", T), d$1.remove(h);
        }, 0);
      };
    }

    var e;
  }, [F, b, T, h]);
  const N = E__namespace.useCallback(e => {
    if (!l && !m) return;
    if (h.paused) return;
    const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          n = document.activeElement;

    if (t && n) {
      const t = e.currentTarget,
            [o, u] = function (e) {
        const t = r(e),
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
  

  return E__namespace.createElement(Primitive.div, _extends({
    tabIndex: -1
  }, E, {
    ref: L,
    onKeyDown: N
  }));
});


function r(e) {
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

const d$1 = function () {
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
  const o = useCallbackRef$1(n);
  E__namespace.useEffect(() => {
    const e = e => {
      "Escape" === e.key && o(e);
    };

    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
  }, [o]);
}

let n,
    o = 0;
function useBodyPointerEvents({
  disabled: r
}) {
  const u = E__namespace.useRef(!1),
        c = E__namespace.useRef(!1);
  E__namespace.useEffect(() => {
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
        o--, 0 === o && (document.body.style.pointerEvents = n);
      }

      return 0 === o && (n = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o++, () => {
        u.current ? document.addEventListener("click", e, {
          once: !0
        }) : c.current ? document.addEventListener("pointerup", e, {
          once: !0
        }) : e();
      };
    }
  }, [r]);
}

const [a, c] = C$1(),
      [l$1, d] = b$1(),
      [m$1, f$1] = C$1(),
      [p, v] = b$1();
const DismissableLayer = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const n = 0 === d(),
        r = /*#__PURE__*/E__namespace.createElement(E, _extends({}, e, {
    ref: t
  }));
  return n ? /*#__PURE__*/E__namespace.createElement(a, null, /*#__PURE__*/E__namespace.createElement(m$1, null, r)) : r;
});


const E = /*#__PURE__*/E__namespace.forwardRef((r, a) => {
  const {
    disableOutsidePointerEvents: m = !1,
    onEscapeKeyDown: E,
    onPointerDownOutside: C,
    onFocusOutside: b,
    onInteractOutside: w,
    onDismiss: L,
    ...y
  } = r,
        D = c(),
        P = d() + 1,
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
    const n = useCallbackRef$1(e),
          r = E__namespace.useRef(!1);
    return E__namespace.useEffect(() => {
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
    const n = useCallbackRef$1(e),
          r = E__namespace.useRef(!1);
    return E__namespace.useEffect(() => {
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
  


  return E__namespace.createElement(l$1, {
    runningCount: P
  }, /*#__PURE__*/E__namespace.createElement(p, {
    runningCount: x
  }, /*#__PURE__*/E__namespace.createElement(Primitive.div, _extends({}, y, {
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
    const [n, r] = E__namespace.useState(0);
    

    return E__namespace.createElement(t, {
      total: n,
      onTotalIncrease: E__namespace.useCallback(() => r(e => e + 1), []),
      onTotalDecrease: E__namespace.useCallback(() => r(e => e - 1), [])
    }, e);
  };

  return [o, function (e = !0) {
    const {
      total: t,
      onTotalIncrease: r,
      onTotalDecrease: o
    } = n("TotalLayerCountConsumer");
    return E__namespace.useLayoutEffect(() => {
      if (e) return r(), () => o();
    }, [e, r, o]), t;
  }];
}

function b$1(e) {
  const [t, n] = createContext("RunningLayerCount", {
    count: 0
  }),
        o = e => {
    const {
      children: n,
      runningCount: r
    } = e;
    

    return E__namespace.createElement(t, {
      count: r
    }, n);
  };

  return [o, function () {
    return n("RunningLayerCountConsumer").count || 0;
  }];
}

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

  return E__namespace.createElement(Target, __assign({}, rest));
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

function useCallbackRef(initialValue, callback) {
  var ref = E$1.useState(function () {
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
  return useCallbackRef(defaultValue, function (newValue) {
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


var RemoveScroll = E__namespace.forwardRef(function (props, parentRef) {
  var ref = E__namespace.useRef(null);

  var _a = E__namespace.useState({
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

  return E__namespace.createElement(E__namespace.Fragment, null, enabled && E__namespace.createElement(SideCar, {
    sideCar: effectCar,
    removeScrollBar: removeScrollBar,
    shards: shards,
    noIsolation: noIsolation,
    inert: inert,
    setCallbacks: setCallbacks,
    allowPinchZoom: !!allowPinchZoom,
    lockRef: ref
  }), forwardProps ? E__namespace.cloneElement(E__namespace.Children.only(children), __assign$1({}, containerProps, {
    ref: containerRef
  })) : E__namespace.createElement(Container, __assign$1({}, containerProps, {
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
    E__namespace.useEffect(function () {
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
  var _a = E__namespace.useState(getGapWidth(props.gapMode)),
      gap = _a[0],
      setGap = _a[1];

  E__namespace.useEffect(function () {
    setGap(getGapWidth(props.gapMode));
  }, [props.gapMode]);
  var noRelative = props.noRelative,
      noImportant = props.noImportant,
      _b = props.gapMode,
      gapMode = _b === void 0 ? 'margin' : _b;
  return E__namespace.createElement(Style, {
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
  var shouldPreventQueue = E__namespace.useRef([]);
  var touchStartRef = E__namespace.useRef([0, 0]);
  var activeAxis = E__namespace.useRef();
  var id = E__namespace.useState(idCounter++)[0];
  var Style = E__namespace.useState(function () {
    return styleSingleton();
  })[0];
  var lastProps = E__namespace.useRef(props);
  E__namespace.useEffect(function () {
    lastProps.current = props;
  }, [props]);
  E__namespace.useEffect(function () {
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
  var shouldCancelEvent = E__namespace.useCallback(function (event, parent) {
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
  var shouldPrevent = E__namespace.useCallback(function (_event) {
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
  var shouldCancel = E__namespace.useCallback(function (name, delta, target, should) {
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
  var scrollTouchStart = E__namespace.useCallback(function (event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = undefined;
  }, []);
  var scrollWheel = E__namespace.useCallback(function (event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = E__namespace.useCallback(function (event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  E__namespace.useEffect(function () {
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
  return E__namespace.createElement(E__namespace.Fragment, null, inert ? E__namespace.createElement(Style, {
    styles: generateStyle(id)
  }) : null, removeScrollBar ? E__namespace.createElement(RemoveScrollBar, {
    gapMode: "margin"
  }) : null);
}

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = E__namespace.forwardRef(function (props, ref) {
  return E__namespace.createElement(RemoveScroll, __assign$1({}, props, {
    ref: ref,
    sideCar: SideCar
  }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var C = ReactRemoveScroll;

const x = ["Enter", " "],
      b = ["ArrowUp", "PageDown", "End"],
      R = ["ArrowDown", "PageUp", "Home", ...b],
      y = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
},
      [I, k, P] = createCollection("Menu"),
      [D$1, S] = createContextScope("Menu", [P, l$2, v$1]);
const O = l$2(),
      T = v$1(),
      [L, A] = D$1("Menu");
const Menu = e => {
  const {
    __scopeMenu: t,
    open: o = !1,
    children: u,
    onOpenChange: c,
    modal: i = !0
  } = e,
        s = O(t),
        [l, d] = E__namespace.useState(null),
        p = E__namespace.useRef(!1),
        f = useCallbackRef$1(c),
        m = useDirection(l, e.dir);
  return E__namespace.useEffect(() => {
    const e = () => p.current = !0,
          t = () => p.current = !1;

    return document.addEventListener("keydown", e, {
      capture: !0
    }), document.addEventListener("pointerdown", t, {
      capture: !0
    }), document.addEventListener("pointermove", t, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", e, {
        capture: !0
      }), document.removeEventListener("pointerdown", t, {
        capture: !0
      }), document.removeEventListener("pointermove", t, {
        capture: !0
      });
    };
  }, []), /*#__PURE__*/E__namespace.createElement(Root$2, s, /*#__PURE__*/E__namespace.createElement(L, {
    scope: t,
    isSubmenu: !1,
    isUsingKeyboardRef: p,
    dir: m,
    open: o,
    onOpenChange: f,
    content: l,
    onContentChange: d,
    onRootClose: E__namespace.useCallback(() => f(!1), [f]),
    modal: i
  }, u));
};


const MenuSub = t => {
  const {
    __scopeMenu: r,
    children: o,
    open: u = !1,
    onOpenChange: c
  } = t,
        i = A("MenuSub", r),
        s = O(r),
        [l, d] = E__namespace.useState(null),
        [p, f] = E__namespace.useState(null),
        m = useCallbackRef$1(c);
  return E__namespace.useEffect(() => (!1 === i.open && m(!1), () => m(!1)), [i.open, m]), /*#__PURE__*/E__namespace.createElement(Root$2, s, /*#__PURE__*/E__namespace.createElement(L, {
    scope: r,
    isSubmenu: !0,
    isUsingKeyboardRef: i.isUsingKeyboardRef,
    dir: i.dir,
    open: u,
    onOpenChange: m,
    content: p,
    onContentChange: f,
    onRootClose: i.onRootClose,
    contentId: useId(),
    trigger: l,
    onTriggerChange: d,
    triggerId: useId(),
    modal: !1
  }, o));
};


const MenuAnchor = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const {
    __scopeMenu: n,
    ...r
  } = e,
        o = O(n);
  

  return E__namespace.createElement(Anchor$1, _extends({}, o, r, {
    ref: t
  }));
});


const [F, K] = D$1("MenuContent");
const MenuContent = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const {
    forceMount: n,
    ...r
  } = e,
        o = A("MenuContent", e.__scopeMenu);
  

  return E__namespace.createElement(I.Provider, {
    scope: e.__scopeMenu
  }, /*#__PURE__*/E__namespace.createElement(Presence, {
    present: n || o.open
  }, /*#__PURE__*/E__namespace.createElement(I.Slot, {
    scope: e.__scopeMenu
  }, o.isSubmenu ? /*#__PURE__*/E__namespace.createElement(X, _extends({}, r, {
    ref: t
  })) : /*#__PURE__*/E__namespace.createElement(G, _extends({}, r, {
    ref: t
  })))));
});
const G = /*#__PURE__*/E__namespace.forwardRef((e, t) => A("MenuContent", e.__scopeMenu).modal ? /*#__PURE__*/E__namespace.createElement(U, _extends({}, e, {
  ref: t
})) : /*#__PURE__*/E__namespace.createElement(V, _extends({}, e, {
  ref: t
}))),
      U = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const n = A("MenuContent", e.__scopeMenu),
        r = E__namespace.useRef(null),
        o = useComposedRefs(t, r);
  return E__namespace.useEffect(() => {
    const e = r.current;
    if (e) return hideOthers(e);
  }, []), /*#__PURE__*/E__namespace.createElement(B, _extends({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: composeEventHandlers(e.onFocusOutside, e => e.preventDefault(), {
      checkForDefaultPrevented: !1
    }),
    onDismiss: () => n.onOpenChange(!1)
  }));
}),
      V = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const n = A("MenuContent", e.__scopeMenu);
  

  return E__namespace.createElement(B, _extends({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}),
      X = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const n = A("MenuContent", e.__scopeMenu),
        r = E__namespace.useRef(null),
        o = useComposedRefs(t, r);
  return n.isSubmenu ? /*#__PURE__*/E__namespace.createElement(B, _extends({
    id: n.contentId,
    "aria-labelledby": n.triggerId
  }, e, {
    ref: o,
    align: "start",
    side: "rtl" === n.dir ? "left" : "right",
    portalled: !0,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: e => {
      var t;
      n.isUsingKeyboardRef.current && (null === (t = r.current) || void 0 === t || t.focus()), e.preventDefault();
    },
    onCloseAutoFocus: e => e.preventDefault(),
    onFocusOutside: composeEventHandlers(e.onFocusOutside, e => {
      e.target !== n.trigger && n.onOpenChange(!1);
    }),
    onEscapeKeyDown: composeEventHandlers(e.onEscapeKeyDown, n.onRootClose),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      const t = e.currentTarget.contains(e.target),
            r = y[n.dir].includes(e.key);
      var o;
      t && r && (n.onOpenChange(!1), null === (o = n.trigger) || void 0 === o || o.focus(), e.preventDefault());
    })
  })) : null;
}),
      B = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeMenu: r,
    loop: u = !1,
    trapFocus: i,
    onOpenAutoFocus: s,
    onCloseAutoFocus: l,
    disableOutsidePointerEvents: f,
    onEscapeKeyDown: v,
    onPointerDownOutside: g,
    onFocusOutside: h,
    onInteractOutside: x,
    onDismiss: _,
    disableOutsideScroll: y,
    allowPinchZoom: I,
    portalled: P,
    ...D
  } = e,
        S = A("MenuContent", r),
        L = O(r),
        K = T(r),
        G = k(r),
        [U, V] = E__namespace.useState(null),
        X = E__namespace.useRef(null),
        B = useComposedRefs(n, X, S.onContentChange),
        Y = E__namespace.useRef(0),
        Z = E__namespace.useRef(""),
        z = E__namespace.useRef(0),
        H = E__namespace.useRef(null),
        W = E__namespace.useRef("right"),
        q = E__namespace.useRef(0),
        N = P ? Portal : E__namespace.Fragment,
        Q = y ? C : E__namespace.Fragment,
        $ = y ? {
    allowPinchZoom: I
  } : void 0,
        ee = e => {
    var t, n;

    const r = Z.current + e,
          o = G().filter(e => !e.disabled),
          u = document.activeElement,
          c = null === (t = o.find(e => e.ref.current === u)) || void 0 === t ? void 0 : t.textValue,
          a = function (e, t, n) {
      const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
            o = n ? e.indexOf(n) : -1;
      let u = (c = e, a = Math.max(o, 0), c.map((e, t) => c[(a + t) % c.length]));
      var c, a;
      1 === r.length && (u = u.filter(e => e !== n));
      const i = u.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
      return i !== n ? i : void 0;
    }(o.map(e => e.textValue), r, c),
          i = null === (n = o.find(e => e.textValue === a)) || void 0 === n ? void 0 : n.ref.current;

    !function e(t) {
      Z.current = t, window.clearTimeout(Y.current), "" !== t && (Y.current = window.setTimeout(() => e(""), 1e3));
    }(r), i && setTimeout(() => i.focus());
  };

  E__namespace.useEffect(() => () => window.clearTimeout(Y.current), []), useFocusGuards();
  const te = E__namespace.useCallback(e => {
    var t, n;
    return W.current === (null === (t = H.current) || void 0 === t ? void 0 : t.side) && function (e, t) {
      if (!t) return !1;
      return function (e, t) {
        const {
          x: n,
          y: r
        } = e;
        let o = !1;

        for (let e = 0, u = t.length - 1; e < t.length; u = e++) {
          const c = t[e].x,
                a = t[e].y,
                i = t[u].x,
                s = t[u].y;
          a > r != s > r && n < (i - c) * (r - a) / (s - a) + c && (o = !o);
        }

        return o;
      }({
        x: e.clientX,
        y: e.clientY
      }, t);
    }(e, null === (n = H.current) || void 0 === n ? void 0 : n.area);
  }, []);
  

  return E__namespace.createElement(N, null, /*#__PURE__*/E__namespace.createElement(Q, $, /*#__PURE__*/E__namespace.createElement(F, {
    scope: r,
    searchRef: Z,
    onItemEnter: E__namespace.useCallback(e => {
      te(e) && e.preventDefault();
    }, [te]),
    onItemLeave: E__namespace.useCallback(e => {
      var t;
      te(e) || (null === (t = X.current) || void 0 === t || t.focus(), V(null));
    }, [te]),
    onTriggerLeave: E__namespace.useCallback(e => {
      te(e) && e.preventDefault();
    }, [te]),
    pointerGraceTimerRef: z,
    onPointerGraceIntentChange: E__namespace.useCallback(e => {
      H.current = e;
    }, [])
  }, /*#__PURE__*/E__namespace.createElement(FocusScope, {
    asChild: !0,
    trapped: i,
    onMountAutoFocus: composeEventHandlers(s, e => {
      var t;
      e.preventDefault(), null === (t = X.current) || void 0 === t || t.focus();
    }),
    onUnmountAutoFocus: l
  }, /*#__PURE__*/E__namespace.createElement(DismissableLayer, {
    asChild: !0,
    disableOutsidePointerEvents: f,
    onEscapeKeyDown: v,
    onPointerDownOutside: g,
    onFocusOutside: h,
    onInteractOutside: x,
    onDismiss: _
  }, /*#__PURE__*/E__namespace.createElement(Root$3, _extends({
    asChild: !0
  }, K, {
    dir: S.dir,
    orientation: "vertical",
    loop: u,
    currentTabStopId: U,
    onCurrentTabStopIdChange: V,
    onEntryFocus: e => {
      S.isUsingKeyboardRef.current || e.preventDefault();
    }
  }), /*#__PURE__*/E__namespace.createElement(Content$2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": j(S.open),
    dir: S.dir
  }, L, D, {
    ref: B,
    style: {
      outline: "none",
      ...D.style
    },
    onKeyDown: composeEventHandlers(D.onKeyDown, e => {
      const t = e.target,
            n = e.currentTarget.contains(t),
            r = e.ctrlKey || e.altKey || e.metaKey;
      n && !r && 1 === e.key.length && ee(e.key), "Tab" === e.key && e.preventDefault();
      const o = X.current;
      if (e.target !== o) return;
      if (!R.includes(e.key)) return;
      e.preventDefault();
      const u = G().filter(e => !e.disabled).map(e => e.ref.current);
      b.includes(e.key) && u.reverse(), function (e) {
        const t = document.activeElement;

        for (const n of e) {
          if (n === t) return;
          if (n.focus(), document.activeElement !== t) return;
        }
      }(u);
    }),
    onBlur: composeEventHandlers(e.onBlur, e => {
      e.currentTarget.contains(e.target) || (window.clearTimeout(Y.current), Z.current = "");
    }),
    onPointerMove: composeEventHandlers(e.onPointerMove, J(e => {
      const t = e.target,
            n = q.current !== e.clientX;

      if (e.currentTarget.contains(t) && n) {
        const t = e.clientX > q.current ? "right" : "left";
        W.current = t, q.current = e.clientX;
      }
    }))
  }))))))));
});


const MenuLabel = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const {
    __scopeMenu: n,
    ...r
  } = e;
  

  return E__namespace.createElement(Primitive.div, _extends({}, r, {
    ref: t
  }));
});


const MenuItem = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const {
    disabled: n = !1,
    onSelect: r,
    ...o
  } = e,
        u = E__namespace.useRef(null),
        c = A("MenuItem", e.__scopeMenu),
        a = K("MenuItem", e.__scopeMenu),
        i = useComposedRefs(t, u),
        s = E__namespace.useRef(!1);
  

  return E__namespace.createElement(Y, _extends({}, o, {
    ref: i,
    disabled: n,
    onClick: composeEventHandlers(e.onClick, () => {
      const e = u.current;

      if (!n && e) {
        const t = new Event("menu.itemSelect", {
          bubbles: !0,
          cancelable: !0
        });
        e.addEventListener("menu.itemSelect", e => null == r ? void 0 : r(e), {
          once: !0
        }), e.dispatchEvent(t), t.defaultPrevented ? s.current = !1 : c.onRootClose();
      }
    }),
    onPointerDown: t => {
      var n;
      null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), s.current = !0;
    },
    onPointerUp: composeEventHandlers(e.onPointerUp, e => {
      var t;
      s.current || null === (t = e.currentTarget) || void 0 === t || t.click();
    }),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      const t = "" !== a.searchRef.current;
      n || t && " " === e.key || x.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
    })
  }));
});


const Y = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const {
    __scopeMenu: n,
    disabled: r = !1,
    textValue: u,
    ...c
  } = e,
        a = K("MenuItem", n),
        i = T(n),
        l = E__namespace.useRef(null),
        d = useComposedRefs(t, l),
        [p, f] = E__namespace.useState("");
  return E__namespace.useEffect(() => {
    const e = l.current;
    var t;
    e && f((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
  }, [c.children]), /*#__PURE__*/E__namespace.createElement(I.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: null != u ? u : p
  }, /*#__PURE__*/E__namespace.createElement(Item$2, _extends({
    asChild: !0
  }, i, {
    focusable: !r
  }), /*#__PURE__*/E__namespace.createElement(Primitive.div, _extends({
    role: "menuitem",
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, c, {
    ref: d,
    onPointerMove: composeEventHandlers(e.onPointerMove, J(e => {
      if (r) a.onItemLeave(e);else if (a.onItemEnter(e), !e.defaultPrevented) {
        e.currentTarget.focus();
      }
    })),
    onPointerLeave: composeEventHandlers(e.onPointerLeave, J(e => a.onItemLeave(e)))
  }))));
});


D$1("MenuRadioGroup", {
  value: void 0,
  onValueChange: () => {}
});


D$1("MenuItemIndicator", {
  checked: !1
});


const MenuSeparator = /*#__PURE__*/E__namespace.forwardRef((e, t) => {
  const {
    __scopeMenu: n,
    ...r
  } = e;
  

  return E__namespace.createElement(Primitive.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
});


function j(e) {
  return e ? "open" : "closed";
}

function J(e) {
  return t => "mouse" === t.pointerType ? e(t) : void 0;
}

const Root$1 = Menu;
const Sub = MenuSub;
const Anchor = MenuAnchor;
const Content$1 = MenuContent;
const Label$1 = MenuLabel;
const Item$1 = MenuItem;
const Separator$1 = MenuSeparator;

const [i, s] = createContextScope("DropdownMenu", [S]);
const l = S(),
      [m, w] = i("DropdownMenu");
const DropdownMenu = e => {
  const {
    __scopeDropdownMenu: n,
    children: r,
    open: p,
    defaultOpen: a,
    onOpenChange: d
  } = e,
        i = g("DropdownMenu", n),
        s = l(n),
        [w = !1, D] = useControllableState({
    prop: p,
    defaultProp: a,
    onChange: d
  }),
        M = E__namespace.useCallback(() => D(e => !e), [D]);
  return i.isInsideContent ? /*#__PURE__*/E__namespace.createElement(m, {
    scope: n,
    isRootMenu: !1,
    open: w,
    onOpenChange: D,
    onOpenToggle: M
  }, /*#__PURE__*/E__namespace.createElement(Sub, _extends({}, s, {
    open: w,
    onOpenChange: D
  }), r)) : /*#__PURE__*/E__namespace.createElement(f, _extends({}, e, {
    open: w,
    onOpenChange: D,
    onOpenToggle: M
  }), r);
};


const f = n => {
  const {
    __scopeDropdownMenu: r,
    children: t,
    dir: p,
    open: a,
    onOpenChange: d,
    onOpenToggle: i,
    modal: s = !0
  } = n,
        w = l(r),
        f = E__namespace.useRef(null);
  

  return E__namespace.createElement(m, {
    scope: r,
    isRootMenu: !0,
    triggerId: useId(),
    triggerRef: f,
    contentId: useId(),
    open: a,
    onOpenChange: d,
    onOpenToggle: i,
    modal: s
  }, /*#__PURE__*/E__namespace.createElement(Root$1, _extends({}, w, {
    open: a,
    onOpenChange: d,
    dir: p,
    modal: s
  }), t));
};

const DropdownMenuTrigger = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeDropdownMenu: t,
    disabled: p = !1,
    ...i
  } = e,
        s = w("DropdownMenuTrigger", t),
        m = l(t);
  return s.isRootMenu ? /*#__PURE__*/E__namespace.createElement(Anchor, _extends({
    asChild: !0
  }, m), /*#__PURE__*/E__namespace.createElement(Primitive.button, _extends({
    type: "button",
    id: s.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": !!s.open || void 0,
    "aria-controls": s.open ? s.contentId : void 0,
    "data-state": s.open ? "open" : "closed",
    "data-disabled": p ? "" : void 0,
    disabled: p
  }, i, {
    ref: composeRefs(n, s.triggerRef),
    onClick: composeEventHandlers(e.onClick, () => s.onOpenChange(!0)),
    onPointerDown: composeEventHandlers(e.onPointerDown, e => {
      p || 0 !== e.button || !1 !== e.ctrlKey || (s.open || e.preventDefault(), s.onOpenToggle());
    }),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      p || "ArrowDown" !== e.key || (e.preventDefault(), s.onOpenChange(!0));
    })
  }))) : null;
});


const [D, g] = i("DropdownMenuContent", {
  isInsideContent: !1
});
const DropdownMenuContent = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeDropdownMenu: r,
    ...t
  } = e,
        p = w("DropdownMenuContent", r),
        a = l(r),
        d = { ...t,
    style: { ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)"
    }
  };
  

  return E__namespace.createElement(D, {
    scope: r,
    isInsideContent: !0
  }, p.isRootMenu ? /*#__PURE__*/E__namespace.createElement(M, _extends({
    __scopeDropdownMenu: r
  }, d, {
    ref: n
  })) : /*#__PURE__*/E__namespace.createElement(Content$1, _extends({}, a, d, {
    ref: n
  })));
});


const M = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeDropdownMenu: r,
    portalled: t = !0,
    ...p
  } = e,
        a = w("DropdownMenuContent", r),
        d = l(r),
        i = E__namespace.useRef(!1);
  return a.isRootMenu ? /*#__PURE__*/E__namespace.createElement(Content$1, _extends({
    id: a.contentId,
    "aria-labelledby": a.triggerId
  }, d, p, {
    ref: n,
    portalled: t,
    onCloseAutoFocus: o => {
      var n, r;
      (null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, o), o.defaultPrevented) || (i.current || null === (r = a.triggerRef.current) || void 0 === r || r.focus(), o.preventDefault());
      i.current = !1;
    },
    onInteractOutside: o => {
      var n, r;

      if (null === (n = e.onInteractOutside) || void 0 === n || n.call(e, o), !o.defaultPrevented) {
        const e = o.detail.originalEvent,
              n = 0 === e.button && !0 === e.ctrlKey,
              r = 2 === e.button || n;
        a.modal && !r || (i.current = !0);
      }

      const t = o.target;
      (null === (r = a.triggerRef.current) || void 0 === r ? void 0 : r.contains(t)) && o.preventDefault();
    }
  })) : null;
});


const DropdownMenuLabel = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeDropdownMenu: r,
    ...t
  } = e,
        p = l(r);
  

  return E__namespace.createElement(Label$1, _extends({}, p, t, {
    ref: n
  }));
});


const DropdownMenuItem = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeDropdownMenu: r,
    ...t
  } = e,
        p = l(r);
  

  return E__namespace.createElement(Item$1, _extends({}, p, t, {
    ref: n
  }));
});


const DropdownMenuSeparator = /*#__PURE__*/E__namespace.forwardRef((e, n) => {
  const {
    __scopeDropdownMenu: r,
    ...t
  } = e,
        p = l(r);
  

  return E__namespace.createElement(Separator$1, _extends({}, p, t, {
    ref: n
  }));
});


const Root = DropdownMenu;
const Trigger = DropdownMenuTrigger;
const Content = DropdownMenuContent;
const Label = DropdownMenuLabel;
const Item = DropdownMenuItem;
const Separator = DropdownMenuSeparator;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const Dropdown = Root;
const DropdownTrigger = Trigger;

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1fmgkpl",
  styles: "min-width:150px"
} : {
  name: "1a67fds-DropdownContent",
  styles: "min-width:150px;label:DropdownContent;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3LCB7IHN0eWxlZCwgY3NzIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCAqIGFzIERyb3Bkb3duUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudVwiO1xuXG5jb25zdCBEcm9wZG93biA9IERyb3Bkb3duUHJpbWl0aXZlLlJvb3Q7XG5jb25zdCBEcm9wZG93blRyaWdnZXIgPSBEcm9wZG93blByaW1pdGl2ZS5UcmlnZ2VyO1xuXG5jb25zdCBEcm9wZG93bkNvbnRlbnQgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuQ29udGVudCkoKCkgPT4gW1xuICB0d2BtdC0yIHNoYWRvdy1sZyBiZy13aGl0ZSByb3VuZGVkYCxcbiAgY3NzYFxuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gIGAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25MYWJlbCA9IHN0eWxlZChEcm9wZG93blByaW1pdGl2ZS5MYWJlbCkoKCkgPT4gW1xuICB0d2BweC00IHB5LTIgdGV4dC14cyB0ZXh0LWFjY2VudC1zaXggdXBwZXJjYXNlYCxcbl0pO1xuXG5jb25zdCBEcm9wZG93bkl0ZW0gPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuSXRlbSkoKCkgPT4gW1xuICB0d2Byb3VuZGVkIGJsb2NrIHB4LTQgcHktMiB0ZXh0LWFjY2VudC1zaXggdGV4dC1zbSBjdXJzb3ItcG9pbnRlcmAsXG4gIHR3YGZvY3VzOihiZy1hY2NlbnQtdHdvIHRleHQtYWNjZW50LWVpZ2h0IG91dGxpbmUtbm9uZSlgLFxuXG4gIGNzc2BcbiAgICAmW2RhdGEtZGlzYWJsZWRdIHtcbiAgICAgICR7dHdgdGV4dC1hY2NlbnQtdGhyZWUgY3Vyc29yLWRlZmF1bHRgfVxuICAgIH1cbiAgYCxcbl0pO1xuXG5jb25zdCBEcm9wZG93blNlcGFyYXRvciA9IHN0eWxlZChEcm9wZG93blByaW1pdGl2ZS5TZXBhcmF0b3IpKCgpID0+IFtcbiAgdHdgYmctYWNjZW50LXR3byBib3JkZXItYiBib3JkZXItYm9yZGVyYFxuXSk7XG5cbkRyb3Bkb3duQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xvc2VBdXRvRm9jdXM6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksXG4gIGRpc2FibGVPdXRzaWRlUG9pbnRlckV2ZW50czogZmFsc2UsXG59O1xuXG5leHBvcnQge1xuICBEcm9wZG93bixcbiAgRHJvcGRvd25UcmlnZ2VyLFxuICBEcm9wZG93bkNvbnRlbnQsXG4gIERyb3Bkb3duTGFiZWwsXG4gIERyb3Bkb3duSXRlbSxcbiAgRHJvcGRvd25TZXBhcmF0b3IsXG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const DropdownContent = /*#__PURE__*/createStyled(Content, process.env.NODE_ENV === "production" ? {
  target: "etal6nb3"
} : {
  target: "etal6nb3",
  label: "DropdownContent"
})(() => [{
  "marginTop": "0.5rem",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "borderRadius": "5px"
}, _ref2], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU13QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0dywgeyBzdHlsZWQsIGNzcyB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgKiBhcyBEcm9wZG93blByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjtcblxuY29uc3QgRHJvcGRvd24gPSBEcm9wZG93blByaW1pdGl2ZS5Sb290O1xuY29uc3QgRHJvcGRvd25UcmlnZ2VyID0gRHJvcGRvd25QcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgRHJvcGRvd25Db250ZW50ID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkNvbnRlbnQpKCgpID0+IFtcbiAgdHdgbXQtMiBzaGFkb3ctbGcgYmctd2hpdGUgcm91bmRlZGAsXG4gIGNzc2BcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICBgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duTGFiZWwgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuTGFiZWwpKCgpID0+IFtcbiAgdHdgcHgtNCBweS0yIHRleHQteHMgdGV4dC1hY2NlbnQtc2l4IHVwcGVyY2FzZWAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25JdGVtID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkl0ZW0pKCgpID0+IFtcbiAgdHdgcm91bmRlZCBibG9jayBweC00IHB5LTIgdGV4dC1hY2NlbnQtc2l4IHRleHQtc20gY3Vyc29yLXBvaW50ZXJgLFxuICB0d2Bmb2N1czooYmctYWNjZW50LXR3byB0ZXh0LWFjY2VudC1laWdodCBvdXRsaW5lLW5vbmUpYCxcblxuICBjc3NgXG4gICAgJltkYXRhLWRpc2FibGVkXSB7XG4gICAgICAke3R3YHRleHQtYWNjZW50LXRocmVlIGN1cnNvci1kZWZhdWx0YH1cbiAgICB9XG4gIGAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25TZXBhcmF0b3IgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuU2VwYXJhdG9yKSgoKSA9PiBbXG4gIHR3YGJnLWFjY2VudC10d28gYm9yZGVyLWIgYm9yZGVyLWJvcmRlcmBcbl0pO1xuXG5Ecm9wZG93bkNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsb3NlQXV0b0ZvY3VzOiAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLFxuICBkaXNhYmxlT3V0c2lkZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuZXhwb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duVHJpZ2dlcixcbiAgRHJvcGRvd25Db250ZW50LFxuICBEcm9wZG93bkxhYmVsLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duU2VwYXJhdG9yLFxufTtcbiJdfQ== */");

const DropdownLabel = /*#__PURE__*/createStyled(Label, process.env.NODE_ENV === "production" ? {
  target: "etal6nb2"
} : {
  target: "etal6nb2",
  label: "DropdownLabel"
})(() => [{
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontSize": "0.75rem",
  "lineHeight": "1rem",
  "--tw-text-opacity": "1",
  "color": "rgba(68, 68, 68, var(--tw-text-opacity))",
  "textTransform": "uppercase"
}], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFzQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0dywgeyBzdHlsZWQsIGNzcyB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgKiBhcyBEcm9wZG93blByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjtcblxuY29uc3QgRHJvcGRvd24gPSBEcm9wZG93blByaW1pdGl2ZS5Sb290O1xuY29uc3QgRHJvcGRvd25UcmlnZ2VyID0gRHJvcGRvd25QcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgRHJvcGRvd25Db250ZW50ID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkNvbnRlbnQpKCgpID0+IFtcbiAgdHdgbXQtMiBzaGFkb3ctbGcgYmctd2hpdGUgcm91bmRlZGAsXG4gIGNzc2BcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICBgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duTGFiZWwgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuTGFiZWwpKCgpID0+IFtcbiAgdHdgcHgtNCBweS0yIHRleHQteHMgdGV4dC1hY2NlbnQtc2l4IHVwcGVyY2FzZWAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25JdGVtID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkl0ZW0pKCgpID0+IFtcbiAgdHdgcm91bmRlZCBibG9jayBweC00IHB5LTIgdGV4dC1hY2NlbnQtc2l4IHRleHQtc20gY3Vyc29yLXBvaW50ZXJgLFxuICB0d2Bmb2N1czooYmctYWNjZW50LXR3byB0ZXh0LWFjY2VudC1laWdodCBvdXRsaW5lLW5vbmUpYCxcblxuICBjc3NgXG4gICAgJltkYXRhLWRpc2FibGVkXSB7XG4gICAgICAke3R3YHRleHQtYWNjZW50LXRocmVlIGN1cnNvci1kZWZhdWx0YH1cbiAgICB9XG4gIGAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25TZXBhcmF0b3IgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuU2VwYXJhdG9yKSgoKSA9PiBbXG4gIHR3YGJnLWFjY2VudC10d28gYm9yZGVyLWIgYm9yZGVyLWJvcmRlcmBcbl0pO1xuXG5Ecm9wZG93bkNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsb3NlQXV0b0ZvY3VzOiAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLFxuICBkaXNhYmxlT3V0c2lkZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuZXhwb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duVHJpZ2dlcixcbiAgRHJvcGRvd25Db250ZW50LFxuICBEcm9wZG93bkxhYmVsLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duU2VwYXJhdG9yLFxufTtcbiJdfQ== */");

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1eql9ny",
  styles: "&[data-disabled]{--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity));cursor:default;;}"
} : {
  name: "1xnr8kt-DropdownItem",
  styles: "&[data-disabled]{--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity));cursor:default;;};label:DropdownItem;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0dywgeyBzdHlsZWQsIGNzcyB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgKiBhcyBEcm9wZG93blByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjtcblxuY29uc3QgRHJvcGRvd24gPSBEcm9wZG93blByaW1pdGl2ZS5Sb290O1xuY29uc3QgRHJvcGRvd25UcmlnZ2VyID0gRHJvcGRvd25QcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgRHJvcGRvd25Db250ZW50ID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkNvbnRlbnQpKCgpID0+IFtcbiAgdHdgbXQtMiBzaGFkb3ctbGcgYmctd2hpdGUgcm91bmRlZGAsXG4gIGNzc2BcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICBgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duTGFiZWwgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuTGFiZWwpKCgpID0+IFtcbiAgdHdgcHgtNCBweS0yIHRleHQteHMgdGV4dC1hY2NlbnQtc2l4IHVwcGVyY2FzZWAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25JdGVtID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkl0ZW0pKCgpID0+IFtcbiAgdHdgcm91bmRlZCBibG9jayBweC00IHB5LTIgdGV4dC1hY2NlbnQtc2l4IHRleHQtc20gY3Vyc29yLXBvaW50ZXJgLFxuICB0d2Bmb2N1czooYmctYWNjZW50LXR3byB0ZXh0LWFjY2VudC1laWdodCBvdXRsaW5lLW5vbmUpYCxcblxuICBjc3NgXG4gICAgJltkYXRhLWRpc2FibGVkXSB7XG4gICAgICAke3R3YHRleHQtYWNjZW50LXRocmVlIGN1cnNvci1kZWZhdWx0YH1cbiAgICB9XG4gIGAsXG5dKTtcblxuY29uc3QgRHJvcGRvd25TZXBhcmF0b3IgPSBzdHlsZWQoRHJvcGRvd25QcmltaXRpdmUuU2VwYXJhdG9yKSgoKSA9PiBbXG4gIHR3YGJnLWFjY2VudC10d28gYm9yZGVyLWIgYm9yZGVyLWJvcmRlcmBcbl0pO1xuXG5Ecm9wZG93bkNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsb3NlQXV0b0ZvY3VzOiAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLFxuICBkaXNhYmxlT3V0c2lkZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuZXhwb3J0IHtcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duVHJpZ2dlcixcbiAgRHJvcGRvd25Db250ZW50LFxuICBEcm9wZG93bkxhYmVsLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duU2VwYXJhdG9yLFxufTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const DropdownItem = /*#__PURE__*/createStyled(Item, process.env.NODE_ENV === "production" ? {
  target: "etal6nb1"
} : {
  target: "etal6nb1",
  label: "DropdownItem"
})(() => [{
  "borderRadius": "5px",
  "display": "block",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "--tw-text-opacity": "1",
  "color": "rgba(68, 68, 68, var(--tw-text-opacity))",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "cursor": "pointer"
}, {
  ":focus": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(17, 17, 17, var(--tw-text-opacity))",
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  }
}, _ref], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCcUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0ICogYXMgRHJvcGRvd25QcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5cbmNvbnN0IERyb3Bkb3duID0gRHJvcGRvd25QcmltaXRpdmUuUm9vdDtcbmNvbnN0IERyb3Bkb3duVHJpZ2dlciA9IERyb3Bkb3duUHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IERyb3Bkb3duQ29udGVudCA9IHN0eWxlZChEcm9wZG93blByaW1pdGl2ZS5Db250ZW50KSgoKSA9PiBbXG4gIHR3YG10LTIgc2hhZG93LWxnIGJnLXdoaXRlIHJvdW5kZWRgLFxuICBjc3NgXG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgYCxcbl0pO1xuXG5jb25zdCBEcm9wZG93bkxhYmVsID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkxhYmVsKSgoKSA9PiBbXG4gIHR3YHB4LTQgcHktMiB0ZXh0LXhzIHRleHQtYWNjZW50LXNpeCB1cHBlcmNhc2VgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9IHN0eWxlZChEcm9wZG93blByaW1pdGl2ZS5JdGVtKSgoKSA9PiBbXG4gIHR3YHJvdW5kZWQgYmxvY2sgcHgtNCBweS0yIHRleHQtYWNjZW50LXNpeCB0ZXh0LXNtIGN1cnNvci1wb2ludGVyYCxcbiAgdHdgZm9jdXM6KGJnLWFjY2VudC10d28gdGV4dC1hY2NlbnQtZWlnaHQgb3V0bGluZS1ub25lKWAsXG5cbiAgY3NzYFxuICAgICZbZGF0YS1kaXNhYmxlZF0ge1xuICAgICAgJHt0d2B0ZXh0LWFjY2VudC10aHJlZSBjdXJzb3ItZGVmYXVsdGB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duU2VwYXJhdG9yID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLlNlcGFyYXRvcikoKCkgPT4gW1xuICB0d2BiZy1hY2NlbnQtdHdvIGJvcmRlci1iIGJvcmRlci1ib3JkZXJgXG5dKTtcblxuRHJvcGRvd25Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZUF1dG9Gb2N1czogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcbiAgZGlzYWJsZU91dHNpZGVQb2ludGVyRXZlbnRzOiBmYWxzZSxcbn07XG5cbmV4cG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93blRyaWdnZXIsXG4gIERyb3Bkb3duQ29udGVudCxcbiAgRHJvcGRvd25MYWJlbCxcbiAgRHJvcGRvd25JdGVtLFxuICBEcm9wZG93blNlcGFyYXRvcixcbn07XG4iXX0= */");

const DropdownSeparator = /*#__PURE__*/createStyled(Separator, process.env.NODE_ENV === "production" ? {
  target: "etal6nb0"
} : {
  target: "etal6nb0",
  label: "DropdownSeparator"
})(() => [{
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
  "borderBottomWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))"
}], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0ICogYXMgRHJvcGRvd25QcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5cbmNvbnN0IERyb3Bkb3duID0gRHJvcGRvd25QcmltaXRpdmUuUm9vdDtcbmNvbnN0IERyb3Bkb3duVHJpZ2dlciA9IERyb3Bkb3duUHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IERyb3Bkb3duQ29udGVudCA9IHN0eWxlZChEcm9wZG93blByaW1pdGl2ZS5Db250ZW50KSgoKSA9PiBbXG4gIHR3YG10LTIgc2hhZG93LWxnIGJnLXdoaXRlIHJvdW5kZWRgLFxuICBjc3NgXG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgYCxcbl0pO1xuXG5jb25zdCBEcm9wZG93bkxhYmVsID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLkxhYmVsKSgoKSA9PiBbXG4gIHR3YHB4LTQgcHktMiB0ZXh0LXhzIHRleHQtYWNjZW50LXNpeCB1cHBlcmNhc2VgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9IHN0eWxlZChEcm9wZG93blByaW1pdGl2ZS5JdGVtKSgoKSA9PiBbXG4gIHR3YHJvdW5kZWQgYmxvY2sgcHgtNCBweS0yIHRleHQtYWNjZW50LXNpeCB0ZXh0LXNtIGN1cnNvci1wb2ludGVyYCxcbiAgdHdgZm9jdXM6KGJnLWFjY2VudC10d28gdGV4dC1hY2NlbnQtZWlnaHQgb3V0bGluZS1ub25lKWAsXG5cbiAgY3NzYFxuICAgICZbZGF0YS1kaXNhYmxlZF0ge1xuICAgICAgJHt0d2B0ZXh0LWFjY2VudC10aHJlZSBjdXJzb3ItZGVmYXVsdGB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IERyb3Bkb3duU2VwYXJhdG9yID0gc3R5bGVkKERyb3Bkb3duUHJpbWl0aXZlLlNlcGFyYXRvcikoKCkgPT4gW1xuICB0d2BiZy1hY2NlbnQtdHdvIGJvcmRlci1iIGJvcmRlci1ib3JkZXJgXG5dKTtcblxuRHJvcGRvd25Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZUF1dG9Gb2N1czogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcbiAgZGlzYWJsZU91dHNpZGVQb2ludGVyRXZlbnRzOiBmYWxzZSxcbn07XG5cbmV4cG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93blRyaWdnZXIsXG4gIERyb3Bkb3duQ29udGVudCxcbiAgRHJvcGRvd25MYWJlbCxcbiAgRHJvcGRvd25JdGVtLFxuICBEcm9wZG93blNlcGFyYXRvcixcbn07XG4iXX0= */");

DropdownContent.defaultProps = {
  onCloseAutoFocus: e => e.preventDefault(),
  disableOutsidePointerEvents: false
};

exports.Dropdown = Dropdown;
exports.DropdownContent = DropdownContent;
exports.DropdownItem = DropdownItem;
exports.DropdownLabel = DropdownLabel;
exports.DropdownSeparator = DropdownSeparator;
exports.DropdownTrigger = DropdownTrigger;
