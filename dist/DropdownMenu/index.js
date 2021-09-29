'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var C$1 = require('react');
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

var C__namespace = /*#__PURE__*/_interopNamespace(C$1);
var C__default = /*#__PURE__*/_interopDefaultLegacy(C$1);
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

        mergedProps.theme = C$1.useContext(react.ThemeContext);
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
      var ele = /*#__PURE__*/C$1.createElement(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/C$1.createElement(C$1.Fragment, null, /*#__PURE__*/C$1.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
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

const t$3 = {
  prefix: Math.round(1e10 * Math.random()),
  current: 0
},
      n$2 = /*#__PURE__*/C__namespace.createContext(t$3);
function useId(r) {
  const o = C__namespace.useContext(n$2);
  return Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) || o !== t$3 || console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."), C__namespace.useMemo(() => r || `radix-id-${o.prefix}-${++o.current}`, [r]);
}

let t$2 = 0;
function useFocusGuards() {
  C__namespace.useEffect(() => {
    var e, n;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : o$4()), document.body.insertAdjacentElement("beforeend", null !== (n = r[1]) && void 0 !== n ? n : o$4()), t$2++, () => {
      1 === t$2 && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), t$2--;
    };
  }, []);
}

function o$4() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}

function useCallbackRef$1(r) {
  const t = C__namespace.useRef(r);
  return C__namespace.useEffect(() => {
    t.current = r;
  }), C__namespace.useCallback((...e) => {
    var r;
    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
  }, []);
}

function useDirection(t, n) {
  const [r, o] = C__namespace.useState("ltr"),
        [i, u] = C__namespace.useState(),
        c = C__namespace.useRef(0);
  return C__namespace.useEffect(() => {
    if (void 0 === n && null != t && t.parentElement) {
      const e = getComputedStyle(t.parentElement);
      u(e);
    }
  }, [t, n]), C__namespace.useEffect(() => (void 0 === n && function e() {
    c.current = requestAnimationFrame(() => {
      const t = null == i ? void 0 : i.direction;
      t && o(t), e();
    });
  }(), () => cancelAnimationFrame(c.current)), [i, n, o]), n || r;
}

function composeRefs(...o) {
  return e => o.forEach(o => function (o, e) {
    "function" == typeof o ? o(e) : null != o && (o.current = e);
  }(o, e));
}
function useComposedRefs(...e) {
  return C__namespace.useCallback(composeRefs(...e), e);
}

const Slot = /*#__PURE__*/C__namespace.forwardRef((e, o) => {
  const {
    children: l,
    ...c
  } = e;
  return 1 === C__namespace.Children.count(l) ? /*#__PURE__*/C__namespace.createElement(r$4, _extends({}, c, {
    ref: o
  }), l) : /*#__PURE__*/C__namespace.createElement(C__namespace.Fragment, null, C__namespace.Children.map(l, e => /*#__PURE__*/C__namespace.isValidElement(e) && e.type === Slottable ? /*#__PURE__*/C__namespace.createElement(r$4, _extends({}, c, {
    ref: o
  }), e.props.children) : e));
});
Slot.displayName = "Slot";
const r$4 = /*#__PURE__*/C__namespace.forwardRef((n, r) => {
  const {
    children: l,
    ...c
  } = n,
        i = C__namespace.Children.only(l);
  

  return C__namespace.isValidElement(i) ? /*#__PURE__*/C__namespace.cloneElement(i, { ...o$3(c, i.props),
    ref: composeRefs(r, i.ref)
  }) : null;
});
r$4.displayName = "SlotClone";
const Slottable = ({
  children: e
}) => e;

function o$3(e, t) {
  const n = { ...t
  };

  for (const r in t) {
    const o = e[r],
          c = t[r];
    /^on[A-Z]/.test(r) ? n[r] = l$4(c, o) : "style" === r && (n[r] = { ...o,
      ...c
    });
  }

  return { ...e,
    ...n
  };
}

function l$4(e, t) {
  return function (...n) {
    null == e || e(...n);
    n[0] instanceof Event && n[0].defaultPrevented || null == t || t(...n);
  };
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
    const n = C__namespace.useState(o),
          [a] = n,
          u = C__namespace.useRef(a),
          c = useCallbackRef$1(r);
    return C__namespace.useEffect(() => {
      u.current !== a && (c(a), u.current = a);
    }, [a, u, c]), n;
  }({
    defaultProp: r,
    onChange: n
  }),
        c = void 0 !== o,
        f = c ? o : a,
        l = useCallbackRef$1(n);

  return [f, C__namespace.useCallback(e => {
    if (c) {
      const t = e,
            r = "function" == typeof e ? t(o) : e;
      r !== o && l(r);
    } else u(e);
  }, [c, o, u, l])];
}

const r$3 = "div";
const Primitive = /*#__PURE__*/C__namespace.forwardRef((o, i) => {
  const {
    as: n = r$3,
    ...a
  } = o;
  

  return C__namespace.createElement(n, _extends({}, a, {
    ref: i
  }));
});
function extendPrimitive(r, o) {
  const i = /*#__PURE__*/C__namespace.forwardRef((i, n) => {
    const a = r,
          s = { ...o.defaultProps,
      ...i
    };
    

    return C__namespace.createElement(a, _extends({}, s, {
      ref: n
    }));
  });
  return i.displayName = o.displayName || "Extended" + r.displayName, i;
}

function createContext(t) {
  const r = /*#__PURE__*/C__namespace.createContext(null);

  function n(t) {
    const {
      children: n,
      ...o
    } = t,
          u = C__namespace.useMemo(() => o, Object.values(o));
    

    return C__namespace.createElement(r.Provider, {
      value: u
    }, n);
  }

  return n.displayName = t + "Provider", [n, function (n) {
    const o = C__namespace.useContext(r);
    if (null === o) throw new Error(`\`${n}\` must be used within \`${t}\``);
    return o;
  }];
}

function createCollection() {
  const n = /*#__PURE__*/C__default['default'].createContext({}),
        o = e => {
    const {
      children: r
    } = e,
          o = C__default['default'].useRef(null),
          c = C__default['default'].useRef(new Map()).current;
    

    return C__default['default'].createElement(n.Provider, {
      value: C__default['default'].useMemo(() => ({
        itemMap: c,
        collectionRef: o
      }), [c])
    }, r);
  },
        c = /*#__PURE__*/C__default['default'].forwardRef((o, c) => {
    const {
      children: f
    } = o,
          l = C__default['default'].useContext(n),
          u = useComposedRefs(c, l.collectionRef);
    

    return C__default['default'].createElement(Slot, {
      ref: u
    }, f);
  }),
        f = "data-radix-collection-item",
        l = /*#__PURE__*/C__default['default'].forwardRef((o, c) => {
    const {
      children: l,
      ...u
    } = o,
          i = C__default['default'].useRef(null),
          a = useComposedRefs(c, i),
          s = C__default['default'].useContext(n);
    return C__default['default'].useEffect(() => (s.itemMap.set(i, {
      ref: i,
      ...u
    }), () => {
      s.itemMap.delete(i);
    })), /*#__PURE__*/C__default['default'].createElement(Slot, {
      [f]: "",
      ref: a
    }, l);
  });

  return [o, c, l, function () {
    const e = C__default['default'].useContext(n);
    return {
      getItems() {
        const r = Array.from(e.collectionRef.current.querySelectorAll(`[${f}]`));
        return Array.from(e.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current));
      }

    };
  }];
}

function composeEventHandlers(e, n, {
  checkForDefaultPrevented: t = !0
} = {}) {
  return function (r) {
    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
  };
}

const f$3 = {
  bubbles: !1,
  cancelable: !0
},
      [l$3, m$2, p$3, d$3] = createCollection(),
      v$1 = "span",
      [g$1, w] = createContext("RovingFocusGroup");
const RovingFocusGroup = /*#__PURE__*/C__namespace.forwardRef((e, t) => /*#__PURE__*/C__namespace.createElement(l$3, null, /*#__PURE__*/C__namespace.createElement(m$2, null, /*#__PURE__*/C__namespace.createElement(b, _extends({}, e, {
  ref: t
})))));


const b = /*#__PURE__*/C__namespace.forwardRef((o, n) => {
  const {
    as: a = v$1,
    orientation: l,
    dir: m = "ltr",
    loop: p = !1,
    currentTabStopId: w,
    defaultCurrentTabStopId: b,
    onCurrentTabStopIdChange: x,
    onEntryFocus: F,
    ...I
  } = o,
        R = C__namespace.useRef(null),
        h = useComposedRefs(n, R),
        [T = null, A] = useControllableState({
    prop: w,
    defaultProp: b,
    onChange: x
  }),
        [y, D] = C__namespace.useState(!1),
        S = useCallbackRef$1(F),
        {
    getItems: C
  } = d$3(),
        G = C__namespace.useRef(!1);
  return C__namespace.useEffect(() => {
    const e = R.current;
    if (e) return e.addEventListener("rovingFocusGroup.onEntryFocus", S), () => e.removeEventListener("rovingFocusGroup.onEntryFocus", S);
  }, [S]), /*#__PURE__*/C__namespace.createElement(g$1, {
    orientation: l,
    dir: m,
    loop: p,
    currentTabStopId: T,
    onItemFocus: C__namespace.useCallback(e => A(e), [A]),
    onItemShiftTab: C__namespace.useCallback(() => D(!0), [])
  }, /*#__PURE__*/C__namespace.createElement(Primitive, _extends({
    tabIndex: y ? -1 : 0,
    "aria-orientation": l,
    "data-orientation": l
  }, I, {
    as: a,
    ref: h,
    style: {
      outline: "none",
      ...o.style
    },
    onMouseDown: composeEventHandlers(o.onMouseDown, () => {
      G.current = !0;
    }),
    onFocus: composeEventHandlers(o.onFocus, e => {
      const t = !G.current;

      if (e.target === e.currentTarget && t && !y) {
        const t = new Event("rovingFocusGroup.onEntryFocus", f$3);

        if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
          const e = C().filter(e => e.focusable);
          E$2([e.find(e => e.active), e.find(e => e.id === T), ...e].filter(Boolean).map(e => e.ref.current));
        }
      }

      G.current = !1;
    }),
    onBlur: composeEventHandlers(o.onBlur, () => D(!1))
  })));
}),
      x = "span";
const RovingFocusItem = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    as: n = x,
    focusable: i = !0,
    active: a = !1,
    ...f
  } = e,
        l = useId(),
        m = w("RovingFocusItem"),
        v = m.currentTabStopId === l,
        {
    getItems: g
  } = d$3();
  

  return C__namespace.createElement(p$3, {
    id: l,
    focusable: i,
    active: a
  }, /*#__PURE__*/C__namespace.createElement(Primitive, _extends({
    tabIndex: v ? 0 : -1,
    "data-orientation": m.orientation
  }, f, {
    as: n,
    ref: t,
    onMouseDown: composeEventHandlers(e.onMouseDown, e => {
      i ? m.onItemFocus(l) : e.preventDefault();
    }),
    onFocus: composeEventHandlers(e.onFocus, () => m.onItemFocus(l)),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      if ("Tab" === e.key && e.shiftKey) return void m.onItemShiftTab();
      if (e.target !== e.currentTarget) return;

      const t = function (e, t, r) {
        const o = function (e, t) {
          return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
        }(e.key, r);

        return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : F$1[o];
      }(e, m.orientation, m.dir);

      if (void 0 !== t) {
        e.preventDefault();
        let n = g().filter(e => e.focusable).map(e => e.ref.current);
        if ("last" === t) n.reverse();else if ("prev" === t || "next" === t) {
          "prev" === t && n.reverse();
          const i = n.indexOf(e.currentTarget);
          n = m.loop ? (o = i + 1, (r = n).map((e, t) => r[(o + t) % r.length])) : n.slice(i + 1);
        }
        setTimeout(() => E$2(n));
      }

      var r, o;
    })
  })));
});


const F$1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};

function E$2(e) {
  const t = document.activeElement;

  for (const r of e) {
    if (r === t) return;
    if (r.focus(), document.activeElement !== t) return;
  }
}

const useLayoutEffect = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? C__namespace.useLayoutEffect : () => {};

const Portal = /*#__PURE__*/C__namespace.forwardRef((a, i) => {
  var n, d;
  const {
    containerRef: m,
    style: s,
    ...u
  } = a,
        c = null !== (n = null == m ? void 0 : m.current) && void 0 !== n ? n : null === globalThis || void 0 === globalThis || null === (d = globalThis.document) || void 0 === d ? void 0 : d.body,
        [, f] = C__namespace.useState({});
  return useLayoutEffect(() => {
    f({});
  }, []), c ? /*#__PURE__*/e__default['default'].createPortal( /*#__PURE__*/C__namespace.createElement(Primitive, _extends({
    "data-radix-portal": ""
  }, u, {
    ref: i,
    style: c === document.body ? {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2147483647,
      ...s
    } : void 0
  })), c) : null;
});

const Arrow$2 = /*#__PURE__*/C__namespace.forwardRef((i, n) => {
  const {
    as: s = o$2,
    ...a
  } = i;
  

  return C__namespace.createElement(Primitive, _extends({}, a, {
    as: s,
    ref: n
  }));
});
const o$2 = /*#__PURE__*/C__namespace.forwardRef((e, o) => {
  const {
    width: i = 10,
    height: n = 5,
    ...s
  } = e;
  

  return C__namespace.createElement("svg", _extends({}, s, {
    ref: o,
    width: i,
    height: n,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), /*#__PURE__*/C__namespace.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
});


const Root$3 = Arrow$2;

function useSize(r) {
  const [i, t] = C__namespace.useState(void 0);
  return C__namespace.useEffect(() => {
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
  const a = e$1.get(n);
  return void 0 === a ? (e$1.set(n, {
    rect: {},
    callbacks: [o]
  }), 1 === e$1.size && (t$1 = requestAnimationFrame(c$3))) : a.callbacks.push(o), () => {
    const c = e$1.get(n);
    if (void 0 === c) return;
    const a = c.callbacks.indexOf(o);
    a > -1 && c.callbacks.splice(a, 1), 0 === c.callbacks.length && (e$1.delete(n), 0 === e$1.size && cancelAnimationFrame(t$1));
  };
}
let t$1;
const e$1 = new Map();

function c$3() {
  const n = [];
  e$1.forEach((t, e) => {
    const c = e.getBoundingClientRect();
    var o, a;
    o = t.rect, a = c, (o.width !== a.width || o.height !== a.height || o.top !== a.top || o.right !== a.right || o.bottom !== a.bottom || o.left !== a.left) && (t.rect = c, n.push(t));
  }), n.forEach(t => {
    t.callbacks.forEach(e => e(t.rect));
  }), t$1 = requestAnimationFrame(c$3);
}

function useRect(e) {
  const [o, c] = C__namespace.useState();
  return C__namespace.useEffect(() => {
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
    f && (o = i$1({
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

  const R = s$3(S, $),
        M = y[a$2(d)][x],
        D = function (t, e, r) {
    const o = a$2(t);
    return e[t] && !r[o] ? o : t;
  }(d, R, s$3(DOMRect.fromRect({ ...c,
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
  f && (C = i$1({
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

function i$1({
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
    direction: p$2(o, n)
  };
  return "top" !== o && "bottom" !== o || ("start" === n && (f.left = `${r}px`), "center" === n && (f.left = `${i}px`), "end" === n && (f.right = `${r}px`)), "left" !== o && "right" !== o || ("start" === n && (f.top = `${r}px`), "center" === n && (f.top = `${a}px`), "end" === n && (f.bottom = `${r}px`)), f;
}

function p$2(t, e) {
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

function s$3(t, e) {
  return {
    top: t.top < e.top,
    right: t.right > e.right,
    bottom: t.bottom > e.bottom,
    left: t.left < e.left
  };
}

const [p$1, l$2] = createContext("Popper");
const Popper = ({
  children: e
}) => {
  const [r, o] = C__namespace.useState(null);
  

  return C__namespace.createElement(p$1, {
    anchor: r,
    onAnchorChange: o
  }, e);
};


const PopperAnchor = /*#__PURE__*/C__namespace.forwardRef((e, o) => {
  const {
    virtualRef: t,
    children: n,
    ...a
  } = e,
        p = l$2("PopperAnchor"),
        f = C__namespace.useRef(null),
        d = useComposedRefs(o, f);
  return C__namespace.useEffect(() => {
    p.onAnchorChange((null == t ? void 0 : t.current) || f.current);
  }), t ? null : /*#__PURE__*/C__namespace.createElement(Primitive, _extends({}, a, {
    ref: d
  }), n);
});


const [f$2, d$2] = createContext("PopperContent");
const PopperContent = /*#__PURE__*/C__namespace.forwardRef((e, n) => {
  const {
    side: p = "bottom",
    sideOffset: d,
    align: u = "center",
    alignOffset: m,
    collisionTolerance: w,
    avoidCollisions: h = !0,
    ...x
  } = e,
        A = l$2("PopperContent"),
        [v, g] = C__namespace.useState(),
        E = useRect(A.anchor),
        [y, C] = C__namespace.useState(null),
        P = useSize(y),
        [S, R] = C__namespace.useState(null),
        O = useSize(S),
        b = useComposedRefs(n, e => C(e)),
        z = function () {
    const [e, r] = C__namespace.useState(void 0);
    return C__namespace.useEffect(() => {
      let e;

      function o() {
        r({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }

      function t() {
        window.clearTimeout(e), e = window.setTimeout(o, 100);
      }

      return o(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
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
    popperSize: P,
    arrowSize: O,
    arrowOffset: v,
    side: p,
    sideOffset: d,
    align: u,
    alignOffset: m,
    shouldAvoidCollisions: h,
    collisionBoundariesRect: T,
    collisionTolerance: w
  }),
        H = void 0 !== B;
  


  return C__namespace.createElement("div", {
    style: k,
    "data-radix-popper-content-wrapper": ""
  }, /*#__PURE__*/C__namespace.createElement(f$2, {
    arrowStyles: L,
    onArrowChange: R,
    onArrowOffsetChange: g
  }, /*#__PURE__*/C__namespace.createElement(Primitive, _extends({
    "data-side": B,
    "data-align": D
  }, x, {
    style: { ...x.style,
      animation: H ? void 0 : "none"
    },
    ref: b
  }))));
});


const PopperArrow = /*#__PURE__*/C__namespace.forwardRef(function (r, o) {
  const {
    offset: t,
    ...n
  } = r,
        i = d$2("PopperArrow"),
        {
    onArrowOffsetChange: a
  } = i;
  return C__namespace.useEffect(() => a(t), [a, t]), /*#__PURE__*/C__namespace.createElement("span", {
    style: { ...i.arrowStyles,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/C__namespace.createElement("span", {
    ref: i.onArrowChange,
    style: {
      display: "inline-block",
      verticalAlign: "top",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/C__namespace.createElement(Root$3, _extends({}, n, {
    ref: o,
    style: { ...n.style,
      display: "block"
    }
  }))));
});


const Root$2 = Popper;
const Anchor$1 = PopperAnchor;
const Content$2 = PopperContent;
const Arrow$1 = PopperArrow;

const Presence = u => {
  const {
    present: o,
    children: i
  } = u,
        s = function (n) {
    const [u, o] = C__namespace.useState(),
          i = C__namespace.useRef({}),
          s = C__namespace.useRef(n),
          a = C__namespace.useRef(),
          c = n ? "mounted" : "unmounted",
          [d, m] = function (e, n) {
      return C__namespace.useReducer((e, t) => {
        const r = n[e][t];
        return null != r ? r : e;
      }, e);
    }(c, {
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

    return useLayoutEffect(() => {
      const e = i.current,
            t = s.current;

      if (t !== n) {
        const u = a.current,
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
          e.target === u && (a.current = r$1(i.current));
        };

        return u.addEventListener("animationstart", n), u.addEventListener("animationcancel", e), u.addEventListener("animationend", e), () => {
          u.removeEventListener("animationstart", n), u.removeEventListener("animationcancel", e), u.removeEventListener("animationend", e);
        };
      }
    }, [u, m]), {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: C__namespace.useCallback(e => {
        e && (i.current = getComputedStyle(e), o(e));
      }, [])
    };
  }(o),
        a = "function" == typeof i ? i({
    present: s.isPresent
  }) : C__namespace.Children.only(i),
        c = useComposedRefs(s.ref, a.ref);

  return "function" == typeof i || s.isPresent ? /*#__PURE__*/C__namespace.cloneElement(a, {
    ref: c
  }) : null;
};

function r$1(e) {
  return (null == e ? void 0 : e.animationName) || "none";
}

Presence.displayName = "Presence";

const c$2 = {
  bubbles: !1,
  cancelable: !0
};
const FocusScope = /*#__PURE__*/C__namespace.forwardRef((i, f) => {
  const {
    loop: l = !1,
    trapped: m = !1,
    onMountAutoFocus: p,
    onUnmountAutoFocus: v,
    ...E
  } = i,
        [F, S] = C__namespace.useState(null),
        b = useCallbackRef$1(p),
        T = useCallbackRef$1(v),
        y = C__namespace.useRef(null),
        L = useComposedRefs(f, e => S(e)),
        h = C__namespace.useRef({
    paused: !1,

    pause() {
      this.paused = !0;
    },

    resume() {
      this.paused = !1;
    }

  }).current;
  C__namespace.useEffect(() => {
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
  }, [m, F, h.paused]), C__namespace.useEffect(() => {
    if (F) {
      d$1.add(h);
      const e = document.activeElement;

      if (!F.contains(e)) {
        const t = new Event("focusScope.autoFocusOnMount", c$2);
        F.addEventListener("focusScope.autoFocusOnMount", b), F.dispatchEvent(t), t.defaultPrevented || (!function (e, {
          select: t = !1
        } = {}) {
          const n = document.activeElement;

          for (const o of e) if (a$1(o, {
            select: t
          }), document.activeElement !== n) return;
        }(r(F), {
          select: !0
        }), document.activeElement === e && a$1(F));
      }

      return () => {
        F.removeEventListener("focusScope.autoFocusOnMount", b), setTimeout(() => {
          const t = new Event("focusScope.autoFocusOnUnmount", c$2);
          F.addEventListener("focusScope.autoFocusOnUnmount", T), F.dispatchEvent(t), t.defaultPrevented || a$1(null != e ? e : document.body, {
            select: !0
          }), F.removeEventListener("focusScope.autoFocusOnUnmount", T), d$1.remove(h);
        }, 0);
      };
    }
  }, [F, b, T, h]);
  const x = C__namespace.useCallback(e => {
    if (!l && !m) return;
    if (h.paused) return;
    const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          n = document.activeElement;

    if (t && n) {
      const t = e.currentTarget,
            [o, u] = function (e) {
        const t = r(e),
              n = s$2(t, e),
              o = s$2(t.reverse(), e);
        return [n, o];
      }(t);

      o && u ? e.shiftKey || n !== u ? e.shiftKey && n === o && (e.preventDefault(), l && a$1(u, {
        select: !0
      })) : (e.preventDefault(), l && a$1(o, {
        select: !0
      })) : n === t && e.preventDefault();
    }
  }, [l, m, h.paused]);
  

  return C__namespace.createElement(Primitive, _extends({
    tabIndex: -1
  }, E, {
    ref: L,
    onKeyDown: x
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

function s$2(e, t) {
  for (const n of e) if (!i(n, {
    upTo: t
  })) return n;
}

function i(e, {
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
  const o = useCallbackRef$1(n);
  C__namespace.useEffect(() => {
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
  const u = C__namespace.useRef(!1),
        c = C__namespace.useRef(!1);
  C__namespace.useEffect(() => {
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
        0 === o && (document.body.style.pointerEvents = n);
      }

      return 0 === o && (n = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o++, () => {
        o--, u.current ? document.addEventListener("click", e, {
          once: !0
        }) : c.current ? document.addEventListener("pointerup", e, {
          once: !0
        }) : e();
      };
    }
  }, [r]);
}

const [s$1, a] = E$1(),
      [c$1, l$1] = C(),
      [d, m$1] = E$1(),
      [f, p] = C();
const DismissableLayer = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const n = 0 === l$1(),
        r = /*#__PURE__*/C__namespace.createElement(v, _extends({}, e, {
    ref: t
  }));
  return n ? /*#__PURE__*/C__namespace.createElement(s$1, null, /*#__PURE__*/C__namespace.createElement(d, null, r)) : r;
});


const v = /*#__PURE__*/C__namespace.forwardRef((s, d) => {
  const {
    disableOutsidePointerEvents: v = !1,
    onEscapeKeyDown: E,
    onPointerDownOutside: C,
    onFocusOutside: b,
    onInteractOutside: w,
    onDismiss: L,
    ...P
  } = s,
        y = a(),
        D = l$1() + 1,
        x = D === y,
        O = m$1(v),
        g = p() + (v ? 1 : 0),
        h = g < O;
  useBodyPointerEvents({
    disabled: v
  }), useEscapeKeydown(e => {
    x && (null == E || E(e), e.defaultPrevented || null == L || L());
  });

  const {
    onPointerDownCapture: R
  } = function (e) {
    const n = useCallbackRef$1(e),
          r = C__namespace.useRef(!1);
    return C__namespace.useEffect(() => {
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
    h || (null == C || C(e), null == w || w(e), e.defaultPrevented || null == L || L());
  }),
        {
    onBlurCapture: T,
    onFocusCapture: F
  } = function (e) {
    const n = useCallbackRef$1(e),
          r = C__namespace.useRef(!1);
    return C__namespace.useEffect(() => {
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
        B = O > 0 && !h;
  


  return C__namespace.createElement(c$1, {
    runningCount: D
  }, /*#__PURE__*/C__namespace.createElement(f, {
    runningCount: g
  }, /*#__PURE__*/C__namespace.createElement(Primitive, _extends({}, P, {
    ref: d,
    style: {
      pointerEvents: B ? "auto" : void 0,
      ...P.style
    },
    onPointerDownCapture: composeEventHandlers(s.onPointerDownCapture, R),
    onBlurCapture: composeEventHandlers(s.onBlurCapture, T),
    onFocusCapture: composeEventHandlers(s.onFocusCapture, F)
  }))));
});

function E$1(e) {
  const t = /*#__PURE__*/C__namespace.createContext({
    total: 0,
    setTotal: () => {}
  }),
        n = ({
    children: e
  }) => {
    const [n, r] = C__namespace.useState(0),
          o = C__namespace.useMemo(() => ({
      total: n,
      setTotal: r
    }), [n, r]);
    

    return C__namespace.createElement(t.Provider, {
      value: o
    }, e);
  };

  return [n, function (e = !0) {
    const {
      total: n,
      setTotal: r
    } = C__namespace.useContext(t);
    return C__namespace.useLayoutEffect(() => {
      if (e) return r(e => e + 1), () => r(e => e - 1);
    }, [e, r]), n;
  }];
}

function C(e) {
  const t = /*#__PURE__*/C__namespace.createContext(0),
        n = e => {
    const {
      children: n,
      runningCount: r
    } = e;
    

    return C__namespace.createElement(t.Provider, {
      value: r
    }, n);
  };

  return [n, function () {
    return C__namespace.useContext(t) || 0;
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

  return C__namespace.createElement(Target, __assign({}, rest));
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
  var ref = C$1.useState(function () {
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


var RemoveScroll = C__namespace.forwardRef(function (props, parentRef) {
  var ref = C__namespace.useRef(null);

  var _a = C__namespace.useState({
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

  return C__namespace.createElement(C__namespace.Fragment, null, enabled && C__namespace.createElement(SideCar, {
    sideCar: effectCar,
    removeScrollBar: removeScrollBar,
    shards: shards,
    noIsolation: noIsolation,
    inert: inert,
    setCallbacks: setCallbacks,
    allowPinchZoom: !!allowPinchZoom,
    lockRef: ref
  }), forwardProps ? C__namespace.cloneElement(C__namespace.Children.only(children), __assign$1({}, containerProps, {
    ref: containerRef
  })) : C__namespace.createElement(Container, __assign$1({}, containerProps, {
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
    C__namespace.useEffect(function () {
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
  var _a = C__namespace.useState(getGapWidth(props.gapMode)),
      gap = _a[0],
      setGap = _a[1];

  C__namespace.useEffect(function () {
    setGap(getGapWidth(props.gapMode));
  }, [props.gapMode]);
  var noRelative = props.noRelative,
      noImportant = props.noImportant,
      _b = props.gapMode,
      gapMode = _b === void 0 ? 'margin' : _b;
  return C__namespace.createElement(Style, {
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
  var shouldPreventQueue = C__namespace.useRef([]);
  var touchStartRef = C__namespace.useRef([0, 0]);
  var activeAxis = C__namespace.useRef();
  var id = C__namespace.useState(idCounter++)[0];
  var Style = C__namespace.useState(function () {
    return styleSingleton();
  })[0];
  var lastProps = C__namespace.useRef(props);
  C__namespace.useEffect(function () {
    lastProps.current = props;
  }, [props]);
  C__namespace.useEffect(function () {
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
  var shouldCancelEvent = C__namespace.useCallback(function (event, parent) {
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
  var shouldPrevent = C__namespace.useCallback(function (_event) {
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
  var shouldCancel = C__namespace.useCallback(function (name, delta, target, should) {
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
  var scrollTouchStart = C__namespace.useCallback(function (event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = undefined;
  }, []);
  var scrollWheel = C__namespace.useCallback(function (event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = C__namespace.useCallback(function (event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  C__namespace.useEffect(function () {
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
  return C__namespace.createElement(C__namespace.Fragment, null, inert ? C__namespace.createElement(Style, {
    styles: generateStyle(id)
  }) : null, removeScrollBar ? C__namespace.createElement(RemoveScrollBar, {
    gapMode: "margin"
  }) : null);
}

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = C__namespace.forwardRef(function (props, ref) {
  return C__namespace.createElement(RemoveScroll, __assign$1({}, props, {
    ref: ref,
    sideCar: SideCar
  }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var E = ReactRemoveScroll;

const M = ["Enter", " "],
      y = ["ArrowUp", "PageDown", "End"],
      R = ["ArrowDown", "PageUp", "Home", ...y],
      I = {
  ltr: [...M, "ArrowRight"],
  rtl: [...M, "ArrowLeft"]
},
      P = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
},
      [S, k] = createContext("Menu");
const Menu = e => {
  const {
    open: t = !1,
    children: o,
    onOpenChange: u,
    modal: a = !0
  } = e,
        [i, l] = C__namespace.useState(null),
        s = C__namespace.useRef(!1),
        d = useCallbackRef$1(u),
        m = useDirection(i, e.dir);
  return C__namespace.useEffect(() => {
    const e = () => s.current = !0,
          t = () => s.current = !1;

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
  }, []), /*#__PURE__*/C__namespace.createElement(Root$2, null, /*#__PURE__*/C__namespace.createElement(S, {
    isSubmenu: !1,
    isUsingKeyboardRef: s,
    dir: m,
    open: t,
    onOpenChange: d,
    content: i,
    onContentChange: l,
    onRootClose: C__namespace.useCallback(() => d(!1), [d]),
    modal: a
  }, o));
};


const MenuSub = t => {
  const {
    children: r,
    open: o = !1,
    onOpenChange: u
  } = t,
        a = k("MenuSub"),
        [i, l] = C__namespace.useState(null),
        [s, d] = C__namespace.useState(null),
        m = useCallbackRef$1(u);
  return C__namespace.useEffect(() => (!1 === a.open && m(!1), () => m(!1)), [a.open, m]), /*#__PURE__*/C__namespace.createElement(Root$2, null, /*#__PURE__*/C__namespace.createElement(S, {
    isSubmenu: !0,
    isUsingKeyboardRef: a.isUsingKeyboardRef,
    dir: a.dir,
    open: o,
    onOpenChange: m,
    content: s,
    onContentChange: d,
    onRootClose: a.onRootClose,
    contentId: useId(),
    trigger: i,
    onTriggerChange: l,
    triggerId: useId(),
    modal: !1
  }, r));
};


const [D, O, T, A] = createCollection(),
      [L, F] = createContext("MenuContent");
const MenuContent = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    forceMount: n,
    ...r
  } = e,
        o = k("MenuContent");
  

  return C__namespace.createElement(D, null, /*#__PURE__*/C__namespace.createElement(Presence, {
    present: n || o.open
  }, /*#__PURE__*/C__namespace.createElement(O, null, o.isSubmenu ? /*#__PURE__*/C__namespace.createElement(V, _extends({}, r, {
    ref: t
  })) : /*#__PURE__*/C__namespace.createElement(K, _extends({}, r, {
    ref: t
  })))));
});
const K = /*#__PURE__*/C__namespace.forwardRef((e, t) => k("MenuContent").modal ? /*#__PURE__*/C__namespace.createElement(G, _extends({}, e, {
  ref: t
})) : /*#__PURE__*/C__namespace.createElement(U, _extends({}, e, {
  ref: t
}))),
      G = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const n = k("MenuContent"),
        r = C__namespace.useRef(null),
        o = useComposedRefs(t, r);
  return C__namespace.useEffect(() => {
    const e = r.current;
    if (e) return hideOthers(e);
  }, []), /*#__PURE__*/C__namespace.createElement(N, _extends({}, e, {
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
      U = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const n = k("MenuContent");
  

  return C__namespace.createElement(N, _extends({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}),
      V = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const n = k("MenuContent"),
        r = C__namespace.useRef(null),
        o = useComposedRefs(t, r);
  return n.isSubmenu ? /*#__PURE__*/C__namespace.createElement(N, _extends({
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
            r = P[n.dir].includes(e.key);
      var o;
      t && r && (n.onOpenChange(!1), null === (o = n.trigger) || void 0 === o || o.focus());
    })
  })) : null;
}),
      N = /*#__PURE__*/C__namespace.forwardRef((e, n) => {
  const {
    loop: r = !1,
    trapFocus: a,
    onOpenAutoFocus: l,
    onCloseAutoFocus: s,
    disableOutsidePointerEvents: d,
    onEscapeKeyDown: p,
    onPointerDownOutside: g,
    onFocusOutside: h,
    onInteractOutside: b,
    onDismiss: M,
    disableOutsideScroll: I,
    portalled: P,
    ...S
  } = e,
        D = k("MenuContent"),
        {
    getItems: O
  } = A(),
        [T, F] = C__namespace.useState(null),
        K = C__namespace.useRef(null),
        G = useComposedRefs(n, K, D.onContentChange),
        U = C__namespace.useRef(0),
        V = C__namespace.useRef(""),
        N = C__namespace.useRef(0),
        X = C__namespace.useRef(null),
        B = C__namespace.useRef("right"),
        Y = C__namespace.useRef(0),
        z = P ? Portal : C__namespace.Fragment,
        H = I ? E : C__namespace.Fragment,
        j = e => {
    var t, n;

    const r = V.current + e,
          o = O().filter(e => !e.disabled),
          u = document.activeElement,
          a = null === (t = o.find(e => e.ref.current === u)) || void 0 === t ? void 0 : t.textValue,
          i = function (e, t, n) {
      const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
            o = n ? e.indexOf(n) : -1;
      let u = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
      var a, i;
      1 === r.length && (u = u.filter(e => e !== n));
      const c = u.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
      return c !== n ? c : void 0;
    }(o.map(e => e.textValue), r, a),
          c = null === (n = o.find(e => e.textValue === i)) || void 0 === n ? void 0 : n.ref.current;

    !function e(t) {
      V.current = t, window.clearTimeout(U.current), "" !== t && (U.current = window.setTimeout(() => e(""), 1e3));
    }(r), c && setTimeout(() => c.focus());
  };

  C__namespace.useEffect(() => () => window.clearTimeout(U.current), []), useFocusGuards();
  const J = C__namespace.useCallback(e => {
    var t, n;
    return B.current === (null === (t = X.current) || void 0 === t ? void 0 : t.side) && function (e, t) {
      if (!t) return !1;
      return function (e, t) {
        const {
          x: n,
          y: r
        } = e;
        let o = !1;

        for (let e = 0, u = t.length - 1; e < t.length; u = e++) {
          const a = t[e].x,
                i = t[e].y,
                c = t[u].x,
                l = t[u].y;
          i > r != l > r && n < (c - a) * (r - i) / (l - i) + a && (o = !o);
        }

        return o;
      }({
        x: e.clientX,
        y: e.clientY
      }, t);
    }(e, null === (n = X.current) || void 0 === n ? void 0 : n.area);
  }, []);
  

  return C__namespace.createElement(z, null, /*#__PURE__*/C__namespace.createElement(H, null, /*#__PURE__*/C__namespace.createElement(L, {
    searchRef: V,
    onItemEnter: C__namespace.useCallback(e => {
      J(e) && e.preventDefault();
    }, [J]),
    onItemLeave: C__namespace.useCallback(e => {
      var t;
      J(e) || (null === (t = K.current) || void 0 === t || t.focus(), F(null));
    }, [J]),
    onTriggerLeave: C__namespace.useCallback(e => {
      J(e) && e.preventDefault();
    }, [J]),
    pointerGraceTimerRef: N,
    onPointerGraceIntentChange: C__namespace.useCallback(e => {
      X.current = e;
    }, [])
  }, /*#__PURE__*/C__namespace.createElement(FocusScope, {
    as: Slot,
    trapped: a,
    onMountAutoFocus: composeEventHandlers(l, e => {
      var t;
      e.preventDefault(), null === (t = K.current) || void 0 === t || t.focus();
    }),
    onUnmountAutoFocus: s
  }, /*#__PURE__*/C__namespace.createElement(DismissableLayer, {
    as: Slot,
    disableOutsidePointerEvents: d,
    onEscapeKeyDown: p,
    onPointerDownOutside: g,
    onFocusOutside: h,
    onInteractOutside: b,
    onDismiss: M
  }, /*#__PURE__*/C__namespace.createElement(RovingFocusGroup, {
    as: Slot,
    dir: D.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: T,
    onCurrentTabStopIdChange: F,
    onEntryFocus: e => {
      D.isUsingKeyboardRef.current || e.preventDefault();
    }
  }, /*#__PURE__*/C__namespace.createElement(Content$2, _extends({
    role: "menu",
    dir: D.dir,
    "data-state": W(D.open)
  }, S, {
    ref: G,
    style: {
      outline: "none",
      ...S.style
    },
    onKeyDown: composeEventHandlers(S.onKeyDown, e => {
      const t = e.target,
            n = e.currentTarget.contains(t),
            r = e.ctrlKey || e.altKey || e.metaKey;
      n && !r && 1 === e.key.length && j(e.key), "Tab" === e.key && e.preventDefault();
      const o = K.current;
      if (e.target !== o) return;
      if (!R.includes(e.key)) return;
      e.preventDefault();
      const u = O().filter(e => !e.disabled).map(e => e.ref.current);
      y.includes(e.key) && u.reverse(), function (e) {
        const t = document.activeElement;

        for (const n of e) {
          if (n === t) return;
          if (n.focus(), document.activeElement !== t) return;
        }
      }(u);
    }),
    onBlur: composeEventHandlers(e.onBlur, e => {
      e.currentTarget.contains(e.target) || (window.clearTimeout(U.current), V.current = "");
    }),
    onPointerMove: composeEventHandlers(e.onPointerMove, q(e => {
      const t = e.target,
            n = Y.current !== e.clientX;

      if (e.currentTarget.contains(t) && n) {
        const t = e.clientX > Y.current ? "right" : "left";
        B.current = t, Y.current = e.clientX;
      }
    }))
  }))))))));
}),
      X = "div";
const MenuItem = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    disabled: n = !1,
    onSelect: r,
    ...o
  } = e,
        u = C__namespace.useRef(null),
        a = k("MenuItem"),
        i = F("MenuItem"),
        c = useComposedRefs(t, u),
        l = () => {
    const e = u.current;

    if (!n && e) {
      const t = new Event("menu.itemSelect", {
        bubbles: !0,
        cancelable: !0
      });
      if (e.addEventListener("menu.itemSelect", e => null == r ? void 0 : r(e), {
        once: !0
      }), e.dispatchEvent(t), t.defaultPrevented) return;
      a.onRootClose();
    }
  };
  


  return C__namespace.createElement(B, _extends({}, o, {
    ref: c,
    disabled: n,
    onPointerUp: composeEventHandlers(e.onPointerUp, l),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      const t = "" !== i.searchRef.current;
      n || t && " " === e.key || M.includes(e.key) && (" " === e.key && e.preventDefault(), l());
    })
  }));
});


const MenuSubTrigger = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const n = k("MenuSubTrigger"),
        r = F("MenuSubTrigger"),
        u = C__namespace.useRef(null),
        {
    pointerGraceTimerRef: a,
    onPointerGraceIntentChange: i
  } = r,
        c = C__namespace.useCallback(() => {
    u.current && window.clearTimeout(u.current), u.current = null;
  }, []);
  return C__namespace.useEffect(() => c, [c]), C__namespace.useEffect(() => {
    const e = a.current;
    return () => {
      window.clearTimeout(e), i(null);
    };
  }, [a, i]), n.isSubmenu ? /*#__PURE__*/C__namespace.createElement(MenuAnchor, {
    as: Slot
  }, /*#__PURE__*/C__namespace.createElement(B, _extends({
    id: n.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": n.contentId,
    "data-state": W(n.open)
  }, e, {
    ref: composeRefs(t, n.onTriggerChange),
    onPointerUp: composeEventHandlers(e.onPointerUp, (l = t => {
      r.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || n.onOpenChange(!0);
    }, e => "mouse" !== e.pointerType ? l(e) : void 0)),
    onPointerMove: composeEventHandlers(e.onPointerMove, q(t => {
      r.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || u.current || (r.onPointerGraceIntentChange(null), u.current = window.setTimeout(() => {
        n.onOpenChange(!0), c();
      }, 100));
    })),
    onPointerLeave: composeEventHandlers(e.onPointerLeave, q(e => {
      var t;
      c();
      const o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();

      if (o) {
        var u;
        const t = null === (u = n.content) || void 0 === u ? void 0 : u.dataset.side,
              i = "right" === t,
              c = i ? -5 : 5,
              l = o[i ? "left" : "right"],
              s = o[i ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [{
            x: e.clientX + c,
            y: e.clientY
          }, {
            x: l,
            y: o.top
          }, {
            x: s,
            y: o.top
          }, {
            x: s,
            y: o.bottom
          }, {
            x: l,
            y: o.bottom
          }],
          side: t
        }), window.clearTimeout(a.current), a.current = window.setTimeout(() => r.onPointerGraceIntentChange(null), 300);
      } else {
        if (r.onTriggerLeave(e), e.defaultPrevented) return;
        r.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: composeEventHandlers(e.onKeyDown, t => {
      const o = "" !== r.searchRef.current;
      var u;
      e.disabled || o && " " === t.key || I[n.dir].includes(t.key) && (n.onOpenChange(!0), null === (u = n.content) || void 0 === u || u.focus());
    })
  }))) : null;
  var l;
});


const B = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    as: n = X,
    disabled: r = !1,
    textValue: o,
    ...u
  } = e,
        i = C__namespace.useRef(null),
        c = useComposedRefs(t, i),
        l = F("MenuItem"),
        [s, d] = C__namespace.useState("");
  return C__namespace.useEffect(() => {
    const e = i.current;
    var t;
    e && d((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
  }, [u.children]), /*#__PURE__*/C__namespace.createElement(T, {
    disabled: r,
    textValue: null != o ? o : s
  }, /*#__PURE__*/C__namespace.createElement(RovingFocusItem, _extends({
    role: "menuitem",
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0,
    focusable: !r
  }, u, {
    as: n,
    ref: c,
    onPointerMove: composeEventHandlers(e.onPointerMove, q(e => {
      if (r) l.onItemLeave(e);else if (l.onItemEnter(e), !e.defaultPrevented) {
        e.currentTarget.focus();
      }
    })),
    onPointerLeave: composeEventHandlers(e.onPointerLeave, q(e => l.onItemLeave(e)))
  })));
});
const MenuCheckboxItem = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    checked: n = !1,
    onCheckedChange: r,
    ...o
  } = e;
  

  return C__namespace.createElement(H.Provider, {
    value: n
  }, /*#__PURE__*/C__namespace.createElement(MenuItem, _extends({
    role: "menuitemcheckbox",
    "aria-checked": n
  }, o, {
    ref: t,
    "data-state": j(n),
    onSelect: composeEventHandlers(o.onSelect, () => null == r ? void 0 : r(!n), {
      checkForDefaultPrevented: !1
    })
  })));
});


const Y = /*#__PURE__*/C__namespace.createContext({});
const MenuRadioGroup = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    value: r,
    onValueChange: o,
    ...u
  } = e,
        a = useCallbackRef$1(o),
        i = C__namespace.useMemo(() => ({
    value: r,
    onValueChange: a
  }), [r, a]);
  

  return C__namespace.createElement(Y.Provider, {
    value: i
  }, /*#__PURE__*/C__namespace.createElement(MenuGroup, _extends({}, u, {
    ref: t
  })));
});


const MenuRadioItem = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    value: n,
    ...r
  } = e,
        o = C__namespace.useContext(Y),
        u = n === o.value;
  

  return C__namespace.createElement(H.Provider, {
    value: u
  }, /*#__PURE__*/C__namespace.createElement(MenuItem, _extends({
    role: "menuitemradio",
    "aria-checked": u
  }, r, {
    ref: t,
    "data-state": j(u),
    onSelect: composeEventHandlers(r.onSelect, () => {
      var e;
      return null === (e = o.onValueChange) || void 0 === e ? void 0 : e.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
});


const z = "span",
      H = /*#__PURE__*/C__namespace.createContext(!1);
const MenuItemIndicator = /*#__PURE__*/C__namespace.forwardRef((e, t) => {
  const {
    as: n = z,
    forceMount: r,
    ...o
  } = e,
        u = C__namespace.useContext(H);
  

  return C__namespace.createElement(Presence, {
    present: r || u
  }, /*#__PURE__*/C__namespace.createElement(Primitive, _extends({}, o, {
    as: n,
    ref: t,
    "data-state": j(u)
  })));
});


const MenuAnchor = extendPrimitive(Anchor$1, {
  displayName: "MenuAnchor"
});
const MenuGroup = extendPrimitive(Primitive, {
  defaultProps: {
    role: "group"
  },
  displayName: "MenuGroup"
});
const MenuLabel = extendPrimitive(Primitive, {
  displayName: "MenuLabel"
});
const MenuSeparator = extendPrimitive(Primitive, {
  defaultProps: {
    role: "separator",
    "aria-orientation": "horizontal"
  },
  displayName: "MenuSeparator "
});
const MenuArrow = extendPrimitive(Arrow$1, {
  displayName: "MenuArrow"
});

function W(e) {
  return e ? "open" : "closed";
}

function j(e) {
  return e ? "checked" : "unchecked";
}

function q(e) {
  return t => "mouse" === t.pointerType ? e(t) : void 0;
}

const Root$1 = Menu;
const Sub = MenuSub;
const Anchor = MenuAnchor;
const SubTrigger = MenuSubTrigger;
const Content$1 = MenuContent;
const Group = MenuGroup;
const Label$1 = MenuLabel;
const Item$1 = MenuItem;
const CheckboxItem = MenuCheckboxItem;
const RadioGroup = MenuRadioGroup;
const RadioItem = MenuRadioItem;
const ItemIndicator = MenuItemIndicator;
const Separator$1 = MenuSeparator;
const Arrow = MenuArrow;

const [u, c] = createContext("DropdownMenu");
const DropdownMenu = e => {
  const {
    children: n,
    open: t,
    defaultOpen: p,
    onOpenChange: a,
    dir: i,
    modal: c = !0
  } = e,
        s = C__namespace.useContext(m),
        [g = !1, w] = useControllableState({
    prop: t,
    defaultProp: p,
    onChange: a
  }),
        D = C__namespace.useCallback(() => w(e => !e), [w]);
  return s ? /*#__PURE__*/C__namespace.createElement(u, {
    isRootMenu: !1,
    open: g,
    onOpenChange: w,
    onOpenToggle: D
  }, /*#__PURE__*/C__namespace.createElement(Sub, {
    open: g,
    onOpenChange: w
  }, n)) : /*#__PURE__*/C__namespace.createElement(l, {
    dir: i,
    open: g,
    onOpenChange: w,
    onOpenToggle: D,
    modal: c
  }, n);
};


const l = n => {
  const {
    children: r,
    dir: t,
    open: p,
    onOpenChange: a,
    onOpenToggle: i,
    modal: c = !0
  } = n,
        l = C__namespace.useRef(null);
  

  return C__namespace.createElement(u, {
    isRootMenu: !0,
    triggerId: useId(),
    triggerRef: l,
    contentId: useId(),
    open: p,
    onOpenChange: a,
    onOpenToggle: i,
    modal: c
  }, /*#__PURE__*/C__namespace.createElement(Root$1, {
    open: p,
    onOpenChange: a,
    dir: t,
    modal: c
  }, r));
},
      s = "button";

const DropdownMenuTrigger = /*#__PURE__*/C__namespace.forwardRef((e, n) => {
  const {
    as: r = s,
    ...t
  } = e,
        u = c("DropdownMenuTrigger");
  return u.isRootMenu ? /*#__PURE__*/C__namespace.createElement(Anchor, _extends({
    type: "button",
    id: u.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": !!u.open || void 0,
    "aria-controls": u.open ? u.contentId : void 0,
    "data-state": u.open ? "open" : "closed"
  }, t, {
    as: r,
    ref: composeRefs(n, u.triggerRef),
    onPointerDown: composeEventHandlers(e.onPointerDown, e => {
      0 === e.button && !1 === e.ctrlKey && (u.open || e.preventDefault(), u.onOpenToggle());
    }),
    onKeyDown: composeEventHandlers(e.onKeyDown, e => {
      [" ", "Enter", "ArrowDown"].includes(e.key) && (e.preventDefault(), u.onOpenChange(!0));
    })
  })) : null;
});


const m = /*#__PURE__*/C__namespace.createContext(!1);
const DropdownMenuContent = /*#__PURE__*/C__namespace.forwardRef((e, n) => {
  const r = c("DropdownMenuContent"),
        t = { ...e,
    style: { ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)"
    }
  };
  

  return C__namespace.createElement(m.Provider, {
    value: !0
  }, r.isRootMenu ? /*#__PURE__*/C__namespace.createElement(g, _extends({}, t, {
    ref: n
  })) : /*#__PURE__*/C__namespace.createElement(Content$1, _extends({}, t, {
    ref: n
  })));
});


const g = /*#__PURE__*/C__namespace.forwardRef((e, n) => {
  const {
    portalled: r = !0,
    ...t
  } = e,
        p = c("DropdownMenuContent"),
        a = C__namespace.useRef(!1);
  return p.isRootMenu ? /*#__PURE__*/C__namespace.createElement(Content$1, _extends({
    id: p.contentId,
    "aria-labelledby": p.triggerId
  }, t, {
    ref: n,
    portalled: r,
    onCloseAutoFocus: o => {
      var n, r;
      (null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, o), o.defaultPrevented) || (a.current || null === (r = p.triggerRef.current) || void 0 === r || r.focus(), o.preventDefault());
      a.current = !1;
    },
    onInteractOutside: o => {
      var n, r;

      if (null === (n = e.onInteractOutside) || void 0 === n || n.call(e, o), !o.defaultPrevented) {
        const e = o.detail.originalEvent,
              n = 0 === e.button && !0 === e.ctrlKey,
              r = 2 === e.button || n;
        p.modal && !r || (a.current = !0);
      }

      const t = o.target;
      (null === (r = p.triggerRef.current) || void 0 === r ? void 0 : r.contains(t)) && o.preventDefault();
    }
  })) : null;
});
extendPrimitive(Group, {
  displayName: "DropdownMenuGroup"
});
const DropdownMenuLabel = extendPrimitive(Label$1, {
  displayName: "DropdownMenuLabel"
});
extendPrimitive(SubTrigger, {
  displayName: "DropdownMenuTriggerItem"
});
const DropdownMenuItem = extendPrimitive(Item$1, {
  displayName: "DropdownMenuItem"
});
extendPrimitive(CheckboxItem, {
  displayName: "DropdownMenuCheckboxItem"
});
extendPrimitive(RadioGroup, {
  displayName: "DropdownMenuRadioGroup"
});
extendPrimitive(RadioItem, {
  displayName: "DropdownMenuRadioItem"
});
extendPrimitive(ItemIndicator, {
  displayName: "DropdownMenuItemIndicator"
});
const DropdownMenuSeparator = extendPrimitive(Separator$1, {
  displayName: "DropdownMenuSeparator"
});
extendPrimitive(Arrow, {
  displayName: "DropdownMenuArrow"
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
