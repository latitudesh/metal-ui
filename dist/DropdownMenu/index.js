'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@emotion/react');
var r$3 = require('react-dom');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var r__default = /*#__PURE__*/_interopDefaultLegacy(r$3);

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
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

const t$b = {
  prefix: Math.round(1e10 * Math.random()),
  current: 0
},
      n$4 = React__namespace.createContext(t$b);
function useId(r) {
  const o = React__namespace.useContext(n$4);
  return Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) || o !== t$b || console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."), React__namespace.useMemo(() => r || "radix-id-".concat(o.prefix, "-").concat(++o.current), [r]);
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

function useCallbackRef$2(initialValue, callback) {
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
  return useCallbackRef$2(defaultValue, function (newValue) {
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
var t$a = ReactRemoveScroll;

let t$9 = 0;
function useFocusGuards() {
  React__namespace.useEffect(() => {
    var e, n;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : o$5()), document.body.insertAdjacentElement("beforeend", null !== (n = r[1]) && void 0 !== n ? n : o$5()), t$9++, () => {
      1 === t$9 && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), t$9--;
    };
  }, []);
}

function o$5() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}

function t$8() {
  return (t$8 = Object.assign || function (r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }

    return r;
  }).apply(this, arguments);
}

const e$5 = "div";
const Primitive$3 = React__namespace.forwardRef((n, i) => {
  const {
    as: o = e$5,
    ...a
  } = n;
  return React__namespace.createElement(o, t$8({}, a, {
    ref: i
  }));
});
Primitive$3.displayName = "Primitive";

const useLayoutEffect = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? React__namespace.useLayoutEffect : () => {};

function a$2() {
  return (a$2 = Object.assign || function (t) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];

      for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    }

    return t;
  }).apply(this, arguments);
}

const Portal = React__namespace.forwardRef((l, i) => {
  var n, c;
  const {
    containerRef: u,
    style: d,
    ...s
  } = l,
        p = null !== (n = null == u ? void 0 : u.current) && void 0 !== n ? n : null === globalThis || void 0 === globalThis || null === (c = globalThis.document) || void 0 === c ? void 0 : c.body,
        [, f] = React__namespace.useState({});
  return useLayoutEffect(() => {
    f({});
  }, []), p ? r__default['default'].createPortal(React__namespace.createElement(Primitive$3, a$2({
    "data-radix-portal": ""
  }, s, {
    ref: i,
    style: p === document.body ? {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2147483647,
      ...d
    } : void 0
  })), p) : null;
});
Portal.displayName = "Portal";

function useCallbackRef$1(r) {
  const t = React__namespace.useRef(r);
  return React__namespace.useEffect(() => {
    t.current = r;
  }), React__namespace.useCallback((...e) => {
    var r;
    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
  }, []);
}

function n$3(e) {
  const t = document.activeElement;

  function n(t) {
    if (c.paused) return;
    const n = "focusout" === t.type ? t.relatedTarget : t.target;
    e.contains(n) || o$4(e, n);
  }

  const c = {
    paused: !1,
    pause: () => c.paused = !0,
    resume: () => c.paused = !1,
    trap: function () {
      document.addEventListener("focusout", n, {
        capture: !0
      }), document.addEventListener("focusin", n, {
        capture: !0
      });
    },
    untrap: function () {
      document.removeEventListener("focusout", n, {
        capture: !0
      }), document.removeEventListener("focusin", n, {
        capture: !0
      });
    },
    destroy: () => {
      !function (e) {
        e.removeAttribute("tabIndex");
      }(e), c.untrap(), function () {
        const n = new Event("focusScope.autoFocusOnDestroy", {
          bubbles: !1,
          cancelable: !0
        });
        e.dispatchEvent(n), n.defaultPrevented || u$3(t);
      }(), r$2.remove(c);
    }
  };
  return r$2.add(c), function (e) {
    if (e.tabIndex > -1) return;
    e.tabIndex = -1;
  }(e), function () {
    const t = new Event("focusScope.autoFocusOnCreate", {
      bubbles: !1,
      cancelable: !0
    });
    e.dispatchEvent(t), t.defaultPrevented || o$4(e, null);
  }(), c;
}

function o$4(e, t) {
  const n = function (e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: e => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    });
  }(e),
        o = t ? t.compareDocumentPosition(e) : Node.DOCUMENT_POSITION_PRECEDING;

  var r;
  if (o & Node.DOCUMENT_POSITION_PRECEDING) u$3(null !== (r = n.firstChild()) && void 0 !== r ? r : e);else if (o & Node.DOCUMENT_POSITION_FOLLOWING) {
    var c;
    u$3(null !== (c = n.lastChild()) && void 0 !== c ? c : e);
  }
}

function u$3(e) {
  e && e.focus && (e.focus({
    preventScroll: !0
  }), function (e) {
    return e instanceof HTMLInputElement && "select" in e;
  }(e) && e.select());
}

const r$2 = function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (null == n || n.pause()), e = c$6(e, t), e.unshift(t);
    },

    remove(t) {
      var n;
      e = c$6(e, t), null === (n = e[0]) || void 0 === n || n.resume();
    },

    size: () => e.length
  };
}();

function c$6(e, t) {
  const n = [...e],
        o = n.indexOf(t);
  return -1 !== o && n.splice(o, 1), n;
}

function FocusScope(o) {
  const {
    children: u,
    trapped: r = !1
  } = o,
        c = React__namespace.useRef(null),
        s = React__namespace.useRef(),
        a = useCallbackRef$1(o.onMountAutoFocus),
        i = useCallbackRef$1(o.onUnmountAutoFocus);
  return React__namespace.useEffect(() => {
    const e = c.current;
    if (e) return e.addEventListener("focusScope.autoFocusOnCreate", a), e.addEventListener("focusScope.autoFocusOnDestroy", i), s.current = n$3(e), () => {
      e.removeEventListener("focusScope.autoFocusOnCreate", a), setTimeout(() => {
        var t;
        null === (t = s.current) || void 0 === t || t.destroy(), e.removeEventListener("focusScope.autoFocusOnDestroy", i);
      }, 0);
    };
  }, [c, a, i]), React__namespace.useEffect(() => {
    var e;
    if (r) return null === (e = s.current) || void 0 === e || e.trap(), () => {
      var e;
      return null === (e = s.current) || void 0 === e ? void 0 : e.untrap();
    };
  }, [r]), u({
    ref: c
  });
}

let t$7,
    o$3 = 0;
function useBodyPointerEvents({
  disabled: n
}) {
  useLayoutEffect(() => {
    if (n) return 0 === o$3 && (t$7 = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o$3++, () => {
      o$3--, 0 === o$3 && (document.body.style.pointerEvents = t$7);
    };
  }, [n]);
}

const [r$1, o$2] = m(),
      [u$2, s$2] = f(),
      [c$5, i$2] = m("TotalLayerCountWithDisabledOutsidePointerEventsProvider"),
      [a$1, l$3] = f("RunningLayerCountWithDisabledOutsidePointerEventsProvider");
function DismissableLayer(e) {
  const t = 0 === s$2(),
        o = React__namespace.createElement(d, e);
  return t ? React__namespace.createElement(r$1, null, React__namespace.createElement(c$5, null, o)) : o;
}

function d(r) {
  const {
    children: c,
    disableOutsidePointerEvents: d = !1,
    onEscapeKeyDown: m,
    onPointerDownOutside: f,
    onFocusOutside: v,
    onInteractOutside: E,
    onDismiss: p
  } = r,
        y = React__namespace.useRef(null),
        C = o$2(),
        w = s$2() + 1,
        L = w === C,
        P = i$2(d),
        b = l$3() + (d ? 1 : 0),
        h = b < P;
  useBodyPointerEvents({
    disabled: d
  }), function (t) {
    const r = useCallbackRef$1(t);
    React__namespace.useEffect(() => {
      const e = e => {
        "Escape" === e.key && r(e);
      };

      return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
    }, [r]);
  }(e => {
    L && (null == m || m(e), e.defaultPrevented || null == p || p());
  });

  const x = function (t) {
    const r = useCallbackRef$1(t),
          o = React__namespace.useRef(!1);
    React__namespace.useEffect(() => {
      const e = e => {
        o.current || r(e), o.current = !1;
      };

      return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
        document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e);
      };
    }, [r]);

    const u = () => {
      o.current = !0;
    };

    return {
      onMouseDownCapture: u,
      onTouchStartCapture: u
    };
  }(e => {
    h || (null == f || f(e), null == E || E(e), e.defaultPrevented || null == p || p());
  }),
        D = function (e) {
    const t = React__namespace.useRef(0);
    return {
      onBlurCapture: n => {
        n.persist(), t.current = window.setTimeout(() => {
          null == e || e(n);
        }, 0);
      },
      onFocusCapture: () => {
        window.clearTimeout(t.current);
      }
    };
  }(e => {
    null == v || v(e), null == E || E(e), e.defaultPrevented || null == p || p();
  }),
        T = P > 0 && !h;

  return React__namespace.createElement(u$2, {
    runningCount: w
  }, React__namespace.createElement(a$1, {
    runningCount: b
  }, c({
    ref: y,
    style: T ? {
      pointerEvents: "auto"
    } : {},
    ...x,
    ...D
  })));
}

function m(e) {
  const t = React__namespace.createContext({
    total: 0,
    setTotal: () => {}
  }),
        r = ({
    children: e
  }) => {
    const [r, o] = React__namespace.useState(0),
          u = React__namespace.useMemo(() => ({
      total: r,
      setTotal: o
    }), [r, o]);
    return React__namespace.createElement(t.Provider, {
      value: u
    }, e);
  };

  return e && (r.displayName = e), [r, function (e = !0) {
    const {
      total: r,
      setTotal: o
    } = React__namespace.useContext(t);
    return React__namespace.useLayoutEffect(() => {
      if (e) return o(e => e + 1), () => o(e => e - 1);
    }, [e, o]), r;
  }];
}

function f(e) {
  const t = React__namespace.createContext(0),
        r = e => {
    const {
      children: r,
      runningCount: o
    } = e;
    return React__namespace.createElement(t.Provider, {
      value: o
    }, r);
  };

  return e && (r.displayName = e), [r, function () {
    return React__namespace.useContext(t) || 0;
  }];
}

function t$6() {
  return (t$6 = Object.assign || function (r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }

    return r;
  }).apply(this, arguments);
}

const e$4 = "div";
const Primitive$2 = React__namespace.forwardRef((n, i) => {
  const {
    as: o = e$4,
    ...a
  } = n;
  return React__namespace.createElement(o, t$6({}, a, {
    ref: i
  }));
});
Primitive$2.displayName = "Primitive";

function t$5() {
  return (t$5 = Object.assign || function (r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];

      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    }

    return r;
  }).apply(this, arguments);
}

const Arrow$2 = React__namespace.forwardRef((n, a) => {
  const {
    as: i = o$1,
    ...s
  } = n;
  return React__namespace.createElement(Primitive$2, t$5({}, s, {
    as: i,
    ref: a
  }));
});
const o$1 = React__namespace.forwardRef((r, o) => {
  const {
    width: n = 10,
    height: a = 5,
    ...i
  } = r;
  return React__namespace.createElement("svg", t$5({}, i, {
    ref: o,
    width: n,
    height: a,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), React__namespace.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
Arrow$2.displayName = "Arrow";
const Root$3 = Arrow$2;

function t$4() {
  return (t$4 = Object.assign || function (r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }

    return r;
  }).apply(this, arguments);
}

const e$3 = "div";
const Primitive$1 = React__namespace.forwardRef((n, i) => {
  const {
    as: o = e$3,
    ...a
  } = n;
  return React__namespace.createElement(o, t$4({}, a, {
    ref: i
  }));
});
Primitive$1.displayName = "Primitive";

function n$2() {
  return (n$2 = Object.assign || function (r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }

    return r;
  }).apply(this, arguments);
}

function extendPrimitive$1(t, e) {
  const i = React__namespace.forwardRef((i, o) => {
    const a = t,
          s = { ...e.defaultProps,
      ...i
    };
    return React__namespace.createElement(a, n$2({}, s, {
      ref: o
    }));
  });
  return i.displayName = e.displayName || "Extended" + t.displayName, i;
}

function useSize(r) {
  const [t, i] = React__namespace.useState(void 0);
  return React__namespace.useEffect(() => {
    if (r.current) {
      const e = r.current,
            t = new ResizeObserver(r => {
        if (!Array.isArray(r)) return;
        if (!r.length) return;
        const t = r[0];
        let n, o;

        if ("borderBoxSize" in t) {
          const e = t.borderBoxSize,
                r = Array.isArray(e) ? e[0] : e;
          n = r.inlineSize, o = r.blockSize;
        } else {
          const r = e.getBoundingClientRect();
          n = r.width, o = r.height;
        }

        i({
          width: n,
          height: o
        });
      });
      return t.observe(e, {
        box: "border-box"
      }), () => {
        i(void 0), t.unobserve(e);
      };
    }
  }, [r]), t;
}

function observeElementRect(n, o) {
  const a = e$2.get(n);
  return void 0 === a ? (e$2.set(n, {
    rect: {},
    callbacks: [o]
  }), 1 === e$2.size && (t$3 = requestAnimationFrame(c$4))) : a.callbacks.push(o), () => {
    const c = e$2.get(n);
    if (void 0 === c) return;
    const a = c.callbacks.indexOf(o);
    a > -1 && c.callbacks.splice(a, 1), 0 === c.callbacks.length && (e$2.delete(n), 0 === e$2.size && cancelAnimationFrame(t$3));
  };
}
let t$3;
const e$2 = new Map();

function c$4() {
  const n = [];
  e$2.forEach((t, e) => {
    const c = e.getBoundingClientRect();
    var o, a;
    o = t.rect, a = c, (o.width !== a.width || o.height !== a.height || o.top !== a.top || o.right !== a.right || o.bottom !== a.bottom || o.left !== a.left) && (t.rect = c, n.push(t));
  }), n.forEach(t => {
    t.callbacks.forEach(e => e(t.rect));
  }), t$3 = requestAnimationFrame(c$4);
}

function useRect(o) {
  const [u, c] = React__namespace.useState();
  return useLayoutEffect(() => {
    if (o.current) {
      const r = observeElementRect(o.current, c);
      return () => {
        c(void 0), r();
      };
    }
  }, [o]), u;
}

function createContext$1(t) {
  const n = React__namespace.createContext(null);

  function r(t) {
    const {
      children: r,
      ...o
    } = t,
          c = React__namespace.useMemo(() => o, Object.values(o));
    return React__namespace.createElement(n.Provider, {
      value: c
    }, r);
  }

  return r.displayName = t + "Provider", [r, function (r) {
    const o = React__namespace.useContext(n);
    if (null === o) throw new Error("`".concat(r, "` must be used within `").concat(t, "`"));
    return o;
  }];
}

function composeRefs$1(...o) {
  return e => o.forEach(o => function (o, e) {
    "function" == typeof o ? o(e) : null != o && (o.current = e);
  }(o, e));
}
function useComposedRefs$1(...e) {
  return React__namespace.useCallback(composeRefs$1(...e), e);
}

function getPlacementData({
  anchorRect: c,
  popperSize: s,
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
  if (!c || !s || !w) return {
    popperStyles: r,
    arrowStyles: n$1
  };

  const y = function (e, o, r = 0, n = 0, i) {
    const c = i ? i.height : 0,
          a = t$2(o, e, "x"),
          p = t$2(o, e, "y"),
          s = p.before - r - c,
          f = p.after + r + c,
          l = a.before - r - c,
          d = a.after + r + c;
    return {
      top: {
        start: {
          x: a.start + n,
          y: s
        },
        center: {
          x: a.center,
          y: s
        },
        end: {
          x: a.end - n,
          y: s
        }
      },
      right: {
        start: {
          x: d,
          y: p.start + n
        },
        center: {
          x: d,
          y: p.center
        },
        end: {
          x: d,
          y: p.end - n
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
          y: p.start + n
        },
        center: {
          x: l,
          y: p.center
        },
        end: {
          x: l,
          y: p.end - n
        }
      }
    };
  }(s, c, h, g, f),
        b = y[d][x];

  if (!1 === u) {
    const t = e$1(b);
    let r = n$1;
    f && (r = i$1({
      popperSize: s,
      arrowSize: f,
      arrowOffset: l,
      side: d,
      align: x
    }));
    return {
      popperStyles: { ...t,
        "--radix-popper-transform-origin": o(s, d, x, l, f)
      },
      arrowStyles: r,
      placedSide: d,
      placedAlign: x
    };
  }

  const S = DOMRect.fromRect({ ...s,
    ...b
  }),
        O = (z = w, R = m, DOMRect.fromRect({
    width: z.width - 2 * R,
    height: z.height - 2 * R,
    x: z.left + R,
    y: z.top + R
  }));
  var z, R;

  const M = p$1(S, O),
        D = y[a(d)][x],
        A = function (t, e, o) {
    const r = a(t);
    return e[t] && !o[r] ? r : t;
  }(d, M, p$1(DOMRect.fromRect({ ...s,
    ...D
  }), O)),
        I = function (t, e, o, r, n) {
    const i = "top" === o || "bottom" === o,
          c = i ? "left" : "top",
          a = i ? "right" : "bottom",
          p = i ? "width" : "height",
          s = e[p] > t[p];
    if (("start" === r || "center" === r) && (n[c] && s || n[a] && !s)) return "end";
    if (("end" === r || "center" === r) && (n[a] && s || n[c] && !s)) return "start";
    return r;
  }(s, c, d, x, M),
        v = e$1(y[A][I]);

  let C = n$1;
  f && (C = i$1({
    popperSize: s,
    arrowSize: f,
    arrowOffset: l,
    side: A,
    align: I
  }));
  return {
    popperStyles: { ...v,
      "--radix-popper-transform-origin": o(s, A, I, l, f)
    },
    arrowStyles: C,
    placedSide: A,
    placedAlign: I
  };
}

function t$2(t, e, o) {
  const r = t["x" === o ? "left" : "top"],
        n = "x" === o ? "width" : "height",
        i = t[n],
        c = e[n];
  return {
    before: r - c,
    start: r,
    center: r + (i - c) / 2,
    end: r + i - c,
    after: r + i
  };
}

function e$1(t) {
  const e = Math.round(t.x + window.scrollX),
        o = Math.round(t.y + window.scrollY);
  return {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "max-content",
    willChange: "transform",
    transform: "translate3d(".concat(e, "px, ").concat(o, "px, 0)")
  };
}

function o(t, e, o, r, n) {
  const i = "top" === e || "bottom" === e,
        c = n ? n.width : 0,
        a = n ? n.height : 0,
        p = c / 2 + r;
  let s = "",
      f = "";
  return i ? (s = {
    start: "".concat(p, "px"),
    center: "center",
    end: "".concat(t.width - p, "px")
  }[o], f = "".concat("top" === e ? t.height + a : -a, "px")) : (s = "".concat("left" === e ? t.width + a : -a, "px"), f = {
    start: "".concat(p, "px"),
    center: "center",
    end: "".concat(t.height - p, "px")
  }[o]), "".concat(s, " ").concat(f);
}

const r = {
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: "none"
},
      n$1 = {
  position: "absolute",
  opacity: 0
};

function i$1({
  popperSize: t,
  arrowSize: e,
  arrowOffset: o,
  side: r,
  align: n
}) {
  const i = (t.width - e.width) / 2,
        a = (t.height - e.width) / 2,
        p = {
    top: 0,
    right: 90,
    bottom: 180,
    left: -90
  }[r],
        s = Math.max(e.width, e.height),
        f = {
    width: "".concat(s, "px"),
    height: "".concat(s, "px"),
    transform: "rotate(".concat(p, "deg)"),
    willChange: "transform",
    position: "absolute",
    [r]: "100%",
    direction: c$3(r, n)
  };
  return "top" !== r && "bottom" !== r || ("start" === n && (f.left = "".concat(o, "px")), "center" === n && (f.left = "".concat(i, "px")), "end" === n && (f.right = "".concat(o, "px"))), "left" !== r && "right" !== r || ("start" === n && (f.top = "".concat(o, "px")), "center" === n && (f.top = "".concat(a, "px")), "end" === n && (f.bottom = "".concat(o, "px"))), f;
}

function c$3(t, e) {
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

function p$1(t, e) {
  return {
    top: t.top < e.top,
    right: t.right > e.right,
    bottom: t.bottom > e.bottom,
    left: t.left < e.left
  };
}

function p() {
  return (p = Object.assign || function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];

      for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
    }

    return e;
  }).apply(this, arguments);
}

const [l$2, c$2] = createContext$1("Popper");
const Popper = React__namespace.forwardRef((e, i) => {
  const {
    anchorRef: c,
    side: f = "bottom",
    sideOffset: d,
    align: u = "center",
    alignOffset: w,
    collisionTolerance: m,
    avoidCollisions: y = !0,
    ...v
  } = e,
        [x, g] = React__namespace.useState(),
        h = useRect(c),
        R = React__namespace.useRef(null),
        E = useSize(R),
        A = React__namespace.useRef(null),
        O = useSize(A),
        P = useComposedRefs$1(i, R),
        S = function () {
    const [e, r] = React__namespace.useState(void 0);
    return React__namespace.useEffect(() => {
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
        b = S ? DOMRect.fromRect({ ...S,
    x: 0,
    y: 0
  }) : void 0,
        {
    popperStyles: z,
    arrowStyles: C,
    placedSide: T,
    placedAlign: j
  } = getPlacementData({
    anchorRect: h,
    popperSize: E,
    arrowSize: O,
    arrowOffset: x,
    side: f,
    sideOffset: d,
    align: u,
    alignOffset: w,
    shouldAvoidCollisions: y,
    collisionBoundariesRect: b,
    collisionTolerance: m
  }),
        k = void 0 !== T;

  return React__namespace.createElement("div", {
    style: z,
    "data-radix-popper-wrapper": ""
  }, React__namespace.createElement(l$2, {
    arrowRef: A,
    arrowStyles: C,
    onArrowOffsetChange: g
  }, React__namespace.createElement(Primitive$1, p({
    "data-side": T,
    "data-align": j
  }, v, {
    style: { ...v.style,
      animation: k ? void 0 : "none"
    },
    ref: P
  }))));
});
Popper.displayName = "Popper";
const PopperArrow = React__namespace.forwardRef(function (r, o) {
  const {
    offset: t,
    ...i
  } = r,
        n = c$2("PopperArrow"),
        {
    onArrowOffsetChange: a
  } = n;
  return React__namespace.useEffect(() => a(t), [a, t]), React__namespace.createElement("span", {
    style: { ...n.arrowStyles,
      pointerEvents: "none"
    }
  }, React__namespace.createElement("span", {
    ref: n.arrowRef,
    style: {
      display: "inline-block",
      verticalAlign: "top",
      pointerEvents: "auto"
    }
  }, React__namespace.createElement(Root$3, p({}, i, {
    ref: o,
    style: { ...i.style,
      display: "block"
    }
  }))));
});
PopperArrow.displayName = "PopperArrow";
const Root$2 = Popper;
const Arrow$1 = PopperArrow;

function useControllableState$1({
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
          c = useCallbackRef$1(r);
    return React__namespace.useEffect(() => {
      u.current !== a && (c(a), u.current = a);
    }, [a, u, c]), n;
  }({
    defaultProp: r,
    onChange: n
  }),
        c = void 0 !== o,
        f = c ? o : a,
        l = useCallbackRef$1(n);

  return [f, React__namespace.useCallback(e => {
    if (c) {
      const t = e,
            r = "function" == typeof e ? t(o) : e;
      r !== o && l(r);
    } else u(e);
  }, [c, o, u, l])];
}

function clamp(t, [n, r]) {
  return Math.min(r, Math.max(n, t));
}
function wrap(t, n) {
  return (n + t) % n;
}

const [i, c$1] = createContext$1("RovingFocusGroup");
function RovingFocusGroup(t) {
  const {
    children: r,
    orientation: n,
    loop: c,
    dir: u
  } = t,
        [s = !0, l] = useControllableState$1({
    prop: t.reachable,
    defaultProp: t.defaultReachable,
    onChange: t.onReachableChange
  }),
        [p, d] = React__namespace.useState(null),
        f = React__namespace.useCallback((o, e) => {
    d(t => s ? e || !t ? o : t : null);
  }, [s]);
  return React__namespace.createElement(i, {
    groupId: useId(),
    orientation: n,
    dir: u,
    loop: c,
    tabStopId: p,
    onTabStopIdChange: f,
    reachable: s,
    onReachableChange: l
  }, r);
}
RovingFocusGroup.displayName = "RovingFocusGroup";
function useRovingFocus({
  disabled: e,
  active: t
}) {
  const i = useId(),
        p = c$1("RovingFocusItem"),
        d = i === p.tabStopId,
        {
    onTabStopIdChange: f
  } = p;
  return React__namespace.useEffect(() => {
    f(i, t);
  }, [t, i, f]), e ? {
    tabIndex: -1,
    onMouseDown: o => o.preventDefault()
  } : {
    [l$1]: p.groupId,
    tabIndex: d ? 0 : -1,
    onFocus: () => {
      p.onReachableChange(!0), p.onTabStopIdChange(i);
    },
    onKeyDown: o => {
      const e = function (o, e, t) {
        const r = function (o, e) {
          return "rtl" !== e ? o : "ArrowLeft" === o ? "ArrowRight" : "ArrowRight" === o ? "ArrowLeft" : o;
        }(o.key, t);

        return "vertical" === e && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === e && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : u$1[r];
      }(o, p.orientation, p.dir);

      if (s$1.includes(o.key) && o.stopPropagation(), void 0 !== e) {
        o.preventDefault();
        const a = (t = p.groupId, Array.from(document.querySelectorAll("[".concat(l$1, '="').concat(t, '"]')))),
              i = a.length,
              c = document.activeElement,
              u = c ? a.indexOf(c) : -1;
        let s = {
          first: 0,
          last: i - 1,
          prev: u - 1,
          next: u + 1
        }[e];
        s = p.loop ? wrap(s, i) : clamp(s, [0, i - 1]);
        const d = a[s];
        d && setTimeout(() => d.focus());
      }

      var t;
    }
  };
}
const u$1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
},
      s$1 = Object.keys(u$1);
const l$1 = "data-radix-roving-focus-group-id";

const Presence = u => {
  const {
    present: r,
    children: o
  } = u,
        s = function (e) {
    const [u, r] = React__namespace.useState(),
          [o, s] = React__namespace.useState(),
          i = React__namespace.useRef(e),
          c = React__namespace.useRef(),
          d = e ? "mounted" : "unmounted",
          [m, a] = function (e, t) {
      return React__namespace.useReducer((e, n) => {
        const u = t[e][n];
        return null != u ? u : e;
      }, e);
    }(d, {
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
      if (u) {
        const e = getComputedStyle(u);
        c.current = t$1(e), s(e);
      }
    }, [u]), React__namespace.useEffect(() => {
      const n = i.current;

      if (n !== e) {
        const u = c.current,
              r = t$1(o);
        if (c.current = r, e) a("MOUNT");else if ("none" === (null == o ? void 0 : o.display)) a("UNMOUNT");else {
          const e = u !== r;
          a(n && e ? "ANIMATION_OUT" : "UNMOUNT");
        }
        i.current = e;
      }
    }, [e, o, a]), React__namespace.useEffect(() => {
      if (u) {
        const e = e => {
          const n = t$1(o),
                r = e.animationName === n;
          e.target === u && r && a("ANIMATION_END");
        };

        return u.addEventListener("animationcancel", e), u.addEventListener("animationend", e), () => {
          u.removeEventListener("animationcancel", e), u.removeEventListener("animationend", e);
        };
      }
    }, [u, e, o, a]), {
      ref: e => r(e),
      isPresent: ["mounted", "unmountSuspended"].includes(m)
    };
  }(r),
        i = "function" == typeof o ? o({
    present: s.isPresent
  }) : React__namespace.Children.only(o),
        c = useComposedRefs$1(s.ref, i.ref);

  return "function" == typeof o || s.isPresent ? React__namespace.cloneElement(i, {
    ref: c
  }) : null;
};

function t$1(e) {
  return (null == e ? void 0 : e.animationName) || "none";
}

Presence.displayName = "Presence";

function composeEventHandlers$1(e, n, {
  checkForDefaultPrevented: t = !0
} = {}) {
  return function (r) {
    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
  };
}

function x() {
  const e = React__namespace.useRef(0),
        t = React__namespace.useRef(""),
        o = React__namespace.useCallback(r => {
    t.current = r, window.clearTimeout(e.current), e.current = window.setTimeout(() => o(""), 1e3);
  }, []);
  return {
    onKeyDownCapture: e => {
      if (1 === e.key.length && !(e.ctrlKey || e.altKey || e.metaKey)) {
        const r = e.currentTarget;
        o(t.current + e.key), " " !== e.key || t.current.startsWith(" ") || e.stopPropagation();

        const n = document.activeElement,
              a = n ? y(n) : void 0,
              u = function (e, t, o) {
          const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                n = o ? e.indexOf(o) : -1;
          let a = (u = e, c = Math.max(n, 0), u.map((e, t) => u[(c + t) % u.length]));
          var u, c;
          1 === r.length && (a = a.filter(e => e !== o));
          const s = a.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
          return s !== o ? s : void 0;
        }(Array.from(r.querySelectorAll("[".concat(w, "]"))).map(y), t.current, a),
              c = r.querySelector("[".concat(w, '="').concat(u, '"]'));

        c && setTimeout(() => c.focus());
      }
    }
  };
}

const y = e => {
  var t;
  return null !== (t = e.getAttribute(w)) && void 0 !== t ? t : "";
},
      w = "data-radix-menu-typeahead-item";

function C() {
  return (C = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];

      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }

    return e;
  }).apply(this, arguments);
}

const b = ["ArrowDown", "PageUp", "Home"],
      D = [...b, "ArrowUp", "PageDown", "End"],
      [E, I] = createContext$1("Menu");
const Menu = React__namespace.forwardRef((e, t) => {
  const {
    forceMount: o,
    open: r = !1,
    ...n
  } = e;
  return React__namespace.createElement(Presence, {
    present: o || r
  }, React__namespace.createElement(R, C({
    "data-state": S(r)
  }, n, {
    ref: t,
    open: r
  })));
});
const R = React__namespace.forwardRef((s, i) => {
  const {
    open: l,
    onOpenChange: d,
    anchorRef: p,
    loop: v,
    trapFocus: y,
    onOpenAutoFocus: w,
    onCloseAutoFocus: I,
    disableOutsidePointerEvents: R,
    onEscapeKeyDown: g,
    onPointerDownOutside: F,
    onFocusOutside: P,
    onInteractOutside: S,
    onDismiss: A,
    disableOutsideScroll: O,
    portalled: K,
    ...G
  } = s,
        L = useCallbackRef$1(d),
        N = React__namespace.useRef(null),
        [T, V] = React__namespace.useState(0),
        [B, U] = React__namespace.useState(!1),
        q = x();
  React__namespace.useEffect(() => {
    V(B ? -1 : 0);
  }, [B]);
  const [j, W] = React__namespace.useState(!1),
        z = K ? Portal : React__namespace.Fragment,
        H = O ? t$a : React__namespace.Fragment;
  return useFocusGuards(), React__namespace.useEffect(() => {
    const t = N.current;
    if (t) return hideOthers(t);
  }, []), React__namespace.createElement(z, null, React__namespace.createElement(H, null, React__namespace.createElement(E, {
    menuRef: N,
    onItemsReachableChange: U,
    onOpenChange: L
  }, React__namespace.createElement(RovingFocusGroup, {
    reachable: B,
    onReachableChange: U,
    orientation: "vertical",
    loop: v
  }, React__namespace.createElement(FocusScope, {
    trapped: !j && y && l,
    onMountAutoFocus: w,
    onUnmountAutoFocus: e => {
      j ? e.preventDefault() : null == I || I(e);
    }
  }, e => React__namespace.createElement(DismissableLayer, {
    disableOutsidePointerEvents: R,
    onEscapeKeyDown: g,
    onPointerDownOutside: composeEventHandlers$1(F, e => {
      const t = 0 === e.button && !1 === e.ctrlKey;
      W(!R && t), e.defaultPrevented && W(!1);
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: composeEventHandlers$1(P, e => {
      y && e.preventDefault();
    }, {
      checkForDefaultPrevented: !1
    }),
    onInteractOutside: S,
    onDismiss: A
  }, t => React__namespace.createElement(Root$2, C({
    role: "menu"
  }, G, {
    ref: composeRefs$1(i, N, e.ref, t.ref),
    anchorRef: p,
    tabIndex: T,
    style: { ...t.style,
      outline: "none",
      ...G.style
    },
    onBlurCapture: composeEventHandlers$1(G.onBlurCapture, t.onBlurCapture, {
      checkForDefaultPrevented: !1
    }),
    onFocusCapture: composeEventHandlers$1(G.onFocusCapture, t.onFocusCapture, {
      checkForDefaultPrevented: !1
    }),
    onMouseDownCapture: composeEventHandlers$1(G.onMouseDownCapture, t.onMouseDownCapture, {
      checkForDefaultPrevented: !1
    }),
    onTouchStartCapture: composeEventHandlers$1(G.onTouchStartCapture, t.onTouchStartCapture, {
      checkForDefaultPrevented: !1
    }),
    onKeyDownCapture: composeEventHandlers$1(G.onKeyDownCapture, q.onKeyDownCapture),
    onKeyDown: composeEventHandlers$1(G.onKeyDown, e => {
      const t = N.current;

      if (e.target === t && D.includes(e.key)) {
        e.preventDefault();
        const o = Array.from(t.querySelectorAll(k)),
              r = b.includes(e.key) ? o[0] : o.reverse()[0];
        null == r || r.focus();
      }
    })
  }))))))));
});
Menu.displayName = "Menu";
const k = "[".concat("data-radix-menu-item", "]:not([data-disabled])");
const MenuItem = React__namespace.forwardRef((e, t) => {
  const {
    disabled: o,
    textValue: r,
    onSelect: n,
    ...a
  } = e,
        u = React__namespace.useRef(null),
        c = useComposedRefs$1(t, u),
        l = I("MenuItem"),
        d = useRovingFocus({
    disabled: o
  }),
        [m, p] = React__namespace.useState("");
  React__namespace.useEffect(() => {
    const e = u.current;
    var t;
    e && p((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
  }, [a.children]);

  const f = function ({
    textValue: e,
    disabled: t
  }) {
    return {
      [w]: t ? void 0 : e
    };
  }({
    textValue: null != r ? r : m,
    disabled: o
  }),
        x = () => {
    const e = u.current;

    if (!o && e) {
      var t;
      const o = new Event("menu.itemSelect", {
        bubbles: !0,
        cancelable: !0
      });
      if (e.dispatchEvent(o), o.defaultPrevented) return;
      null === (t = l.onOpenChange) || void 0 === t || t.call(l, !1);
    }
  };

  return React__namespace.useEffect(() => {
    const e = u.current;

    if (e) {
      const t = e => null == n ? void 0 : n(e);

      return e.addEventListener("menu.itemSelect", t), () => e.removeEventListener("menu.itemSelect", t);
    }
  }, [n]), React__namespace.createElement(Primitive$1, C({
    role: "menuitem",
    "aria-disabled": o || void 0
  }, a, d, f, {
    "data-radix-menu-item": "",
    ref: c,
    "data-disabled": o ? "" : void 0,
    onFocus: composeEventHandlers$1(a.onFocus, d.onFocus),
    onKeyDown: composeEventHandlers$1(a.onKeyDown, composeEventHandlers$1(d.onKeyDown, e => {
      o || "Enter" !== e.key && " " !== e.key || x();
    })),
    onMouseDown: composeEventHandlers$1(a.onMouseDown, d.onMouseDown),
    onMouseUp: composeEventHandlers$1(a.onMouseUp, x),
    onMouseMove: composeEventHandlers$1(a.onMouseMove, e => {
      if (!o) {
        e.currentTarget.focus();
      }
    }),
    onBlur: composeEventHandlers$1(a.onBlur, e => {
      l.onItemsReachableChange(!1);
    }),
    onMouseLeave: composeEventHandlers$1(a.onMouseLeave, e => {
      var t;
      null === (t = l.menuRef.current) || void 0 === t || t.focus();
    })
  }));
});
MenuItem.displayName = "MenuItem";
const MenuCheckboxItem = React__namespace.forwardRef((e, t) => {
  const {
    checked: o = !1,
    onCheckedChange: r,
    ...n
  } = e;
  return React__namespace.createElement(P.Provider, {
    value: o
  }, React__namespace.createElement(MenuItem, C({
    role: "menuitemcheckbox",
    "aria-checked": o
  }, n, {
    ref: t,
    "data-state": A(o),
    onSelect: composeEventHandlers$1(n.onSelect, () => null == r ? void 0 : r(!o), {
      checkForDefaultPrevented: !1
    })
  })));
});
MenuCheckboxItem.displayName = "MenuCheckboxItem";
const g = React__namespace.createContext({});
const MenuRadioGroup = React__namespace.forwardRef((e, t) => {
  const {
    value: o,
    onValueChange: r,
    ...n
  } = e,
        a = useCallbackRef$1(r),
        u = React__namespace.useMemo(() => ({
    value: o,
    onValueChange: a
  }), [o, a]);
  return React__namespace.createElement(g.Provider, {
    value: u
  }, React__namespace.createElement(MenuGroup, C({}, n, {
    ref: t
  })));
});
MenuRadioGroup.displayName = "MenuRadioGroup";
const MenuRadioItem = React__namespace.forwardRef((e, t) => {
  const {
    value: o,
    ...r
  } = e,
        n = React__namespace.useContext(g),
        a = o === n.value;
  return React__namespace.createElement(P.Provider, {
    value: a
  }, React__namespace.createElement(MenuItem, C({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": A(a),
    onSelect: composeEventHandlers$1(r.onSelect, () => {
      var e;
      return null === (e = n.onValueChange) || void 0 === e ? void 0 : e.call(n, o);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
});
MenuRadioItem.displayName = "MenuRadioItem";
const F = "span",
      P = React__namespace.createContext(!1);
const MenuItemIndicator = React__namespace.forwardRef((e, t) => {
  const {
    as: o = F,
    forceMount: r,
    ...n
  } = e,
        a = React__namespace.useContext(P);
  return React__namespace.createElement(Presence, {
    present: r || a
  }, React__namespace.createElement(Primitive$1, C({}, n, {
    as: o,
    ref: t,
    "data-state": A(a)
  })));
});
MenuItemIndicator.displayName = "MenuItemIndicator";
const MenuGroup = extendPrimitive$1(Primitive$1, {
  defaultProps: {
    role: "group"
  },
  displayName: "MenuGroup"
});
const MenuLabel = extendPrimitive$1(Primitive$1, {
  displayName: "MenuLabel"
});
const MenuSeparator = extendPrimitive$1(Primitive$1, {
  defaultProps: {
    role: "separator",
    "aria-orientation": "horizontal"
  },
  displayName: "MenuSeparator "
});
const MenuArrow = extendPrimitive$1(Arrow$1, {
  displayName: "MenuArrow"
});

function S(e) {
  return e ? "open" : "closed";
}

function A(e) {
  return e ? "checked" : "unchecked";
}

const Root$1 = Menu;
const Group = MenuGroup;
const Label$1 = MenuLabel;
const Item$1 = MenuItem;
const CheckboxItem = MenuCheckboxItem;
const RadioGroup = MenuRadioGroup;
const RadioItem = MenuRadioItem;
const ItemIndicator = MenuItemIndicator;
const Separator$1 = MenuSeparator;
const Arrow = MenuArrow;

function t() {
  return (t = Object.assign || function (r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }

    return r;
  }).apply(this, arguments);
}

const e = "div";
const Primitive = React__namespace.forwardRef((n, i) => {
  const {
    as: o = e,
    ...a
  } = n;
  return React__namespace.createElement(o, t({}, a, {
    ref: i
  }));
});
Primitive.displayName = "Primitive";

function n() {
  return (n = Object.assign || function (r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }

    return r;
  }).apply(this, arguments);
}

function extendPrimitive(t, e) {
  const i = React__namespace.forwardRef((i, o) => {
    const a = t,
          s = { ...e.defaultProps,
      ...i
    };
    return React__namespace.createElement(a, n({}, s, {
      ref: o
    }));
  });
  return i.displayName = e.displayName || "Extended" + t.displayName, i;
}

function useCallbackRef(r) {
  const t = React__namespace.useRef(r);
  return React__namespace.useEffect(() => {
    t.current = r;
  }), React__namespace.useCallback((...e) => {
    var r;
    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
  }, []);
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

function createContext(t) {
  const n = React__namespace.createContext(null);

  function r(t) {
    const {
      children: r,
      ...o
    } = t,
          c = React__namespace.useMemo(() => o, Object.values(o));
    return React__namespace.createElement(n.Provider, {
      value: c
    }, r);
  }

  return r.displayName = t + "Provider", [r, function (r) {
    const o = React__namespace.useContext(n);
    if (null === o) throw new Error("`".concat(r, "` must be used within `").concat(t, "`"));
    return o;
  }];
}

function composeRefs(...o) {
  return e => o.forEach(o => function (o, e) {
    "function" == typeof o ? o(e) : null != o && (o.current = e);
  }(o, e));
}
function useComposedRefs(...e) {
  return React__namespace.useCallback(composeRefs(...e), e);
}

function composeEventHandlers(e, n, {
  checkForDefaultPrevented: t = !0
} = {}) {
  return function (r) {
    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
  };
}

function u() {
  return (u = Object.assign || function (o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r]);
    }

    return o;
  }).apply(this, arguments);
}

const [s, c] = createContext("DropdownMenu");
const DropdownMenu = e => {
  const {
    children: n,
    open: r,
    defaultOpen: p,
    onOpenChange: a
  } = e,
        d = React__namespace.useRef(null),
        [u = !1, c] = useControllableState({
    prop: r,
    defaultProp: p,
    onChange: a
  });
  return React__namespace.createElement(s, {
    triggerRef: d,
    contentId: useId(),
    open: u,
    onOpenChange: c,
    onOpenToggle: React__namespace.useCallback(() => c(o => !o), [c])
  }, n);
};
DropdownMenu.displayName = "DropdownMenu";
const l = "button";
const DropdownMenuTrigger = React__namespace.forwardRef((o, e) => {
  const {
    as: r = l,
    ...t
  } = o,
        p = c("DropdownMenuTrigger"),
        s = useComposedRefs(e, p.triggerRef);
  return React__namespace.createElement(Primitive, u({
    type: "button",
    "aria-haspopup": "menu",
    "aria-expanded": !!p.open || void 0,
    "aria-controls": p.open ? p.contentId : void 0,
    "data-state": p.open ? "open" : "closed"
  }, t, {
    as: r,
    ref: s,
    onMouseDown: composeEventHandlers(o.onMouseDown, o => {
      0 === o.button && !1 === o.ctrlKey && p.onOpenToggle();
    }),
    onKeyDown: composeEventHandlers(o.onKeyDown, o => {
      [" ", "Enter", "ArrowUp", "ArrowDown"].includes(o.key) && (o.preventDefault(), p.onOpenChange(!0));
    })
  }));
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
const DropdownMenuContent = React__namespace.forwardRef((o, n) => {
  const {
    onCloseAutoFocus: r,
    disableOutsidePointerEvents: t = !0,
    disableOutsideScroll: p = !0,
    portalled: a = !0,
    ...s
  } = o,
        l = c("DropdownMenuContent");
  return React__namespace.createElement(Root$1, u({
    id: l.contentId
  }, s, {
    ref: n,
    disableOutsidePointerEvents: t,
    disableOutsideScroll: p,
    portalled: a,
    style: { ...o.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)"
    },
    open: l.open,
    onOpenChange: l.onOpenChange,
    anchorRef: o.anchorRef || l.triggerRef,
    trapFocus: !0,
    onCloseAutoFocus: composeEventHandlers(r, o => {
      var e;
      o.preventDefault(), null === (e = l.triggerRef.current) || void 0 === e || e.focus();
    }),
    onPointerDownOutside: composeEventHandlers(o.onPointerDownOutside, o => {
      var e;
      (null === (e = l.triggerRef.current) || void 0 === e ? void 0 : e.contains(o.target)) && o.preventDefault();
    }, {
      checkForDefaultPrevented: !1
    }),
    onDismiss: () => l.onOpenChange(!1)
  }));
});
DropdownMenuContent.displayName = "DropdownMenuContent";
extendPrimitive(Group, {
  displayName: "DropdownMenuGroup"
});
const DropdownMenuLabel = extendPrimitive(Label$1, {
  displayName: "DropdownMenuLabel"
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
