'use strict';

var react = require('@emotion/react');
var PropTypes = require('prop-types');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "fhgur2",
  styles: "display:inline-flex;position:relative;vertical-align:middle;height:0.5rem;text-align:center;opacity:0.5;width:2.5rem"
} : {
  name: "1v4ub7g-SpinningDots",
  styles: "display:inline-flex;position:relative;vertical-align:middle;height:0.5rem;text-align:center;opacity:0.5;width:2.5rem;label:SpinningDots;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "1lxykmj",
  styles: "display:flex;width:100%;justify-content:space-around"
} : {
  name: "12ggswq-SpinningDots",
  styles: "display:flex;width:100%;justify-content:space-around;label:SpinningDots;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

const SpinningDots = ({
  className,
  variant
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
  }, variant == "default" && {
    "--tw-text-opacity": "1",
    "color": "rgba(68, 68, 68, var(--tw-text-opacity))"
  }, variant == "light" && {
    "--tw-text-opacity": "1",
    "color": "rgba(229, 231, 235, var(--tw-text-opacity))"
  }, variant == "dark" && {
    "--tw-text-opacity": "1",
    "color": "rgba(17, 17, 17, var(--tw-text-opacity))"
  }], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFxQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB0dywgeyBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5cclxuY29uc3QgU3Bpbm5pbmdEb3RzID0gKHsgY2xhc3NOYW1lLCB2YXJpYW50IH0pID0+IHtcclxuICBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmkoKCkgPT4gW1xyXG4gICAgdHdgYW5pbWF0ZS1wdWxzZSBoLTAgdy0wIHJvdW5kZWQtZnVsbCBib3JkZXItd2lkdGhbM3B4XWAsXHJcbiAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmIHR3YHRleHQtYWNjZW50LXNpeGAsXHJcbiAgICB2YXJpYW50ID09IFwibGlnaHRcIiAmJiB0d2B0ZXh0LWFjY2VudC10aHJlZWAsXHJcbiAgICB2YXJpYW50ID09IFwiZGFya1wiICYmIHR3YHRleHQtYWNjZW50LWVpZ2h0YCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY3NzPXtbdHdgaW5saW5lIHAtMCBoLWF1dG8gdy1mdWxsIHRleHQtY2VudGVyYCwgY2xhc3NOYW1lICYmIGNsYXNzTmFtZV19XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHR3PVwiaW5saW5lLWZsZXggcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGgtMiB0ZXh0LWNlbnRlciBvcGFjaXR5LTUwIHctMTBcIj5cclxuICAgICAgICA8ZGl2IHR3PVwiZmxleCB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiLS4xNXNcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXHJcbn07XHJcblxyXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5pbmdEb3RzO1xyXG4iXX0= */");

  return react.jsx("div", {
    css: ["display:inline;padding:0px;height:auto;width:100%;text-align:center;", className && className, process.env.NODE_ENV === "production" ? "" : ";label:SpinningDots;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB0dywgeyBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5cclxuY29uc3QgU3Bpbm5pbmdEb3RzID0gKHsgY2xhc3NOYW1lLCB2YXJpYW50IH0pID0+IHtcclxuICBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmkoKCkgPT4gW1xyXG4gICAgdHdgYW5pbWF0ZS1wdWxzZSBoLTAgdy0wIHJvdW5kZWQtZnVsbCBib3JkZXItd2lkdGhbM3B4XWAsXHJcbiAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmIHR3YHRleHQtYWNjZW50LXNpeGAsXHJcbiAgICB2YXJpYW50ID09IFwibGlnaHRcIiAmJiB0d2B0ZXh0LWFjY2VudC10aHJlZWAsXHJcbiAgICB2YXJpYW50ID09IFwiZGFya1wiICYmIHR3YHRleHQtYWNjZW50LWVpZ2h0YCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY3NzPXtbdHdgaW5saW5lIHAtMCBoLWF1dG8gdy1mdWxsIHRleHQtY2VudGVyYCwgY2xhc3NOYW1lICYmIGNsYXNzTmFtZV19XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHR3PVwiaW5saW5lLWZsZXggcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGgtMiB0ZXh0LWNlbnRlciBvcGFjaXR5LTUwIHctMTBcIj5cclxuICAgICAgICA8ZGl2IHR3PVwiZmxleCB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiLS4xNXNcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXHJcbn07XHJcblxyXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5pbmdEb3RzO1xyXG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:SpinningDots;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB0dywgeyBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5cclxuY29uc3QgU3Bpbm5pbmdEb3RzID0gKHsgY2xhc3NOYW1lLCB2YXJpYW50IH0pID0+IHtcclxuICBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmkoKCkgPT4gW1xyXG4gICAgdHdgYW5pbWF0ZS1wdWxzZSBoLTAgdy0wIHJvdW5kZWQtZnVsbCBib3JkZXItd2lkdGhbM3B4XWAsXHJcbiAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmIHR3YHRleHQtYWNjZW50LXNpeGAsXHJcbiAgICB2YXJpYW50ID09IFwibGlnaHRcIiAmJiB0d2B0ZXh0LWFjY2VudC10aHJlZWAsXHJcbiAgICB2YXJpYW50ID09IFwiZGFya1wiICYmIHR3YHRleHQtYWNjZW50LWVpZ2h0YCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY3NzPXtbdHdgaW5saW5lIHAtMCBoLWF1dG8gdy1mdWxsIHRleHQtY2VudGVyYCwgY2xhc3NOYW1lICYmIGNsYXNzTmFtZV19XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHR3PVwiaW5saW5lLWZsZXggcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGgtMiB0ZXh0LWNlbnRlciBvcGFjaXR5LTUwIHctMTBcIj5cclxuICAgICAgICA8ZGl2IHR3PVwiZmxleCB3LWZ1bGwganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgIDxTdHlsZWRJY29uIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIi0uM3NcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiLS4xNXNcIiB9fSAvPlxyXG4gICAgICAgICAgPFN0eWxlZEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNwaW5uaW5nRG90cy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwiaW5oZXJpdFwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXSksXHJcbn07XHJcblxyXG5TcGlubmluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5pbmdEb3RzO1xyXG4iXX0= */"]
  }, react.jsx("span", {
    css: _ref$1
  }, react.jsx("div", {
    css: _ref2$1
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
  variant: PropTypes__default['default'].oneOf(["default", "inherit", "light", "dark"])
};
SpinningDots.defaultProps = {
  variant: "default"
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "ro053d",
  styles: "display:flex;margin-right:0.5rem"
} : {
  name: "qzicg-ButtonContent",
  styles: "display:flex;margin-right:0.5rem;label:ButtonContent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1h52dri",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : {
  name: "1661tgp-ButtonContent",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;label:ButtonContent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1gj7rap",
  styles: "display:flex;margin-left:0.5rem"
} : {
  name: "jqkqtd-ButtonContent",
  styles: "display:flex;margin-left:0.5rem;label:ButtonContent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
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
    }, process.env.NODE_ENV === "production" ? "" : ";label:ButtonContent;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBkaXNhYmxlZCxcbiAgaWNvbkJlZm9yZSxcbiAgaWNvbkFmdGVyLFxuICBvbkNsaWNrLFxuICBsYWJlbCxcbiAgdHlwZSxcbiAgc2l6ZSxcbiAgdmFyaWFudCxcbiAgYmxvY2ssXG4gIGlzTG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICAuLi5yZXN0XG59LCByZWYpID0+IHtcbiAgY29uc3QgQnV0dG9uQ29udGVudCA9IChcbiAgICA8ZGl2XG4gICAgICB0dz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIGNzcz17W2lzTG9hZGluZyA/IHR3YG9wYWNpdHktMGAgOiB0d2BvcGFjaXR5LTEwMGBdfVxuICAgID5cbiAgICAgIHtpY29uQmVmb3JlICYmIDxzcGFuIHR3PVwiZmxleCBtci0yXCI+e2Nsb25lRWxlbWVudChpY29uQmVmb3JlKX08L3NwYW4+fVxuICAgICAgPHNwYW4gdHc9XCJ0cnVuY2F0ZVwiPntsYWJlbH08L3NwYW4+XG4gICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHJlbGF0aXZlIGJvcmRlciBpdGVtcy1jZW50ZXIgZmxleCBmb250LW1lZGl1bSByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwIGp1c3RpZnktY2VudGVyIG1heC13LWZ1bGwgY3Vyc29yLXBvaW50ZXJgLFxuICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZm91ciBob3Zlcjp0ZXh0LWFjY2VudC1mb3VyIGFjdGl2ZTp0ZXh0LWFjY2VudC1mb3VyIGJnLWFjY2VudC10d28gaG92ZXI6YmctYWNjZW50LXR3byBhY3RpdmU6YmctYWNjZW50LXR3byBjdXJzb3Itbm90LWFsbG93ZWRgLFxuICAgICAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1hY2NlbnQtZml2ZSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy1mb3JlZ3JvdW5kIGhvdmVyOmJnLWFjY2VudC10d28gYWN0aXZlOmJnLWZvcmVncm91bmQgYWN0aXZlOnRleHQtd2hpdGVgLFxuICAgICAgICB2YXJpYW50ID09IFwic2Vjb25kYXJ5XCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItc2Vjb25kYXJ5IGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIHRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy13aGl0ZSBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLWVycm9yLWRhcmsgaG92ZXI6Ym9yZGVyLWVycm9yLWRhcmsgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWVycm9yLWRhcmsgYmctZXJyb3ItZGFyayBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcIm1pbmltYWxcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1hY2NlbnQtdGhyZWUgYWN0aXZlOmJnLWFjY2VudC10d28gdGV4dC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtYWNjZW50LXNldmVuIGFjdGl2ZTp0ZXh0LWFjY2VudC1maXZlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImJyYW5kLXBcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctYnJhbmQtdXYgaG92ZXI6Ymctb3BhY2l0eS05MCBhY3RpdmU6Ymctb3BhY2l0eS05MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1zXCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItYnJhbmQtZ3JheSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctdHJhbnNwYXJlbnQgaG92ZXI6b3BhY2l0eS04MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHNpemUgPT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgIGJsb2NrICYmIHR3YHctZnVsbGAsXG4gICAgICBdfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5pbmdEb3RzIHZhcmlhbnQ9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXt0d2BhYnNvbHV0ZWB9IC8+fVxuICAgICAge0J1dHRvbkNvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25CZWZvcmU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBpY29uQWZ0ZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJzZWNvbmRhcnlcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcIm1pbmltYWxcIixcbiAgICBcImJyYW5kLXBcIixcbiAgICBcImJyYW5kLXNcIixcbiAgXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbWFsbFwiLCBcIm5vcm1hbFwiLCBcImxhcmdlXCJdKSxcbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IFwibm9ybWFsXCIsXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICB0eXBlOiBcImJ1dHRvblwiLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:ButtonContent;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBkaXNhYmxlZCxcbiAgaWNvbkJlZm9yZSxcbiAgaWNvbkFmdGVyLFxuICBvbkNsaWNrLFxuICBsYWJlbCxcbiAgdHlwZSxcbiAgc2l6ZSxcbiAgdmFyaWFudCxcbiAgYmxvY2ssXG4gIGlzTG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICAuLi5yZXN0XG59LCByZWYpID0+IHtcbiAgY29uc3QgQnV0dG9uQ29udGVudCA9IChcbiAgICA8ZGl2XG4gICAgICB0dz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIGNzcz17W2lzTG9hZGluZyA/IHR3YG9wYWNpdHktMGAgOiB0d2BvcGFjaXR5LTEwMGBdfVxuICAgID5cbiAgICAgIHtpY29uQmVmb3JlICYmIDxzcGFuIHR3PVwiZmxleCBtci0yXCI+e2Nsb25lRWxlbWVudChpY29uQmVmb3JlKX08L3NwYW4+fVxuICAgICAgPHNwYW4gdHc9XCJ0cnVuY2F0ZVwiPntsYWJlbH08L3NwYW4+XG4gICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHJlbGF0aXZlIGJvcmRlciBpdGVtcy1jZW50ZXIgZmxleCBmb250LW1lZGl1bSByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwIGp1c3RpZnktY2VudGVyIG1heC13LWZ1bGwgY3Vyc29yLXBvaW50ZXJgLFxuICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZm91ciBob3Zlcjp0ZXh0LWFjY2VudC1mb3VyIGFjdGl2ZTp0ZXh0LWFjY2VudC1mb3VyIGJnLWFjY2VudC10d28gaG92ZXI6YmctYWNjZW50LXR3byBhY3RpdmU6YmctYWNjZW50LXR3byBjdXJzb3Itbm90LWFsbG93ZWRgLFxuICAgICAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1hY2NlbnQtZml2ZSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy1mb3JlZ3JvdW5kIGhvdmVyOmJnLWFjY2VudC10d28gYWN0aXZlOmJnLWZvcmVncm91bmQgYWN0aXZlOnRleHQtd2hpdGVgLFxuICAgICAgICB2YXJpYW50ID09IFwic2Vjb25kYXJ5XCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItc2Vjb25kYXJ5IGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIHRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy13aGl0ZSBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLWVycm9yLWRhcmsgaG92ZXI6Ym9yZGVyLWVycm9yLWRhcmsgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWVycm9yLWRhcmsgYmctZXJyb3ItZGFyayBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcIm1pbmltYWxcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1hY2NlbnQtdGhyZWUgYWN0aXZlOmJnLWFjY2VudC10d28gdGV4dC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtYWNjZW50LXNldmVuIGFjdGl2ZTp0ZXh0LWFjY2VudC1maXZlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImJyYW5kLXBcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctYnJhbmQtdXYgaG92ZXI6Ymctb3BhY2l0eS05MCBhY3RpdmU6Ymctb3BhY2l0eS05MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1zXCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItYnJhbmQtZ3JheSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctdHJhbnNwYXJlbnQgaG92ZXI6b3BhY2l0eS04MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHNpemUgPT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgIGJsb2NrICYmIHR3YHctZnVsbGAsXG4gICAgICBdfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5pbmdEb3RzIHZhcmlhbnQ9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXt0d2BhYnNvbHV0ZWB9IC8+fVxuICAgICAge0J1dHRvbkNvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25CZWZvcmU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBpY29uQWZ0ZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJzZWNvbmRhcnlcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcIm1pbmltYWxcIixcbiAgICBcImJyYW5kLXBcIixcbiAgICBcImJyYW5kLXNcIixcbiAgXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbWFsbFwiLCBcIm5vcm1hbFwiLCBcImxhcmdlXCJdKSxcbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IFwibm9ybWFsXCIsXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICB0eXBlOiBcImJ1dHRvblwiLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */"]
  }, iconBefore && react.jsx("span", {
    css: _ref
  }, /*#__PURE__*/React.cloneElement(iconBefore)), react.jsx("span", {
    css: _ref2
  }, label), iconAfter && react.jsx("span", {
    css: _ref3
  }, /*#__PURE__*/React.cloneElement(iconAfter)));
  return react.jsx("button", _extends$1({
    type: type,
    onClick: onClick,
    disabled: disabled || isLoading,
    className: className,
    ref: ref,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;position:relative;border-width:1px;align-items:center;display:flex;font-weight:500;border-radius:5px;:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}justify-content:center;max-width:100%;cursor:pointer;", disabled && {
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
    }, variant == "default" && !disabled && {
      "borderColor": "transparent",
      ":hover": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "secondary" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))",
      ":hover": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "danger" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(197, 0, 0, var(--tw-border-opacity))",
      ":hover": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(197, 0, 0, var(--tw-border-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(197, 0, 0, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(197, 0, 0, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "minimal" && !disabled && {
      "borderColor": "transparent",
      "backgroundColor": "transparent",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(51, 51, 51, var(--tw-text-opacity))"
      },
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-text-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }, variant == "brand-p" && !disabled && {
      "borderColor": "transparent",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "0.9"
      },
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(99, 89, 249, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "0.9",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "brand-s" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(128, 121, 139, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "opacity": "0.8"
      },
      "backgroundColor": "transparent",
      ":active": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, size == "small" && {
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "height": "2rem",
      "lineHeight": "1.25rem",
      "fontSize": "0.875rem"
    }, size == "normal" && {
      "paddingLeft": "1.5rem",
      "paddingRight": "1.5rem",
      "height": "2.25rem",
      "lineHeight": "1.25rem",
      "fontSize": "0.875rem"
    }, size == "large" && {
      "paddingLeft": "3rem",
      "paddingRight": "3rem",
      "height": "2.5rem",
      "lineHeight": "1.5rem",
      "fontSize": "1rem"
    }, block && {
      "width": "100%"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Button;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBkaXNhYmxlZCxcbiAgaWNvbkJlZm9yZSxcbiAgaWNvbkFmdGVyLFxuICBvbkNsaWNrLFxuICBsYWJlbCxcbiAgdHlwZSxcbiAgc2l6ZSxcbiAgdmFyaWFudCxcbiAgYmxvY2ssXG4gIGlzTG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICAuLi5yZXN0XG59LCByZWYpID0+IHtcbiAgY29uc3QgQnV0dG9uQ29udGVudCA9IChcbiAgICA8ZGl2XG4gICAgICB0dz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIGNzcz17W2lzTG9hZGluZyA/IHR3YG9wYWNpdHktMGAgOiB0d2BvcGFjaXR5LTEwMGBdfVxuICAgID5cbiAgICAgIHtpY29uQmVmb3JlICYmIDxzcGFuIHR3PVwiZmxleCBtci0yXCI+e2Nsb25lRWxlbWVudChpY29uQmVmb3JlKX08L3NwYW4+fVxuICAgICAgPHNwYW4gdHc9XCJ0cnVuY2F0ZVwiPntsYWJlbH08L3NwYW4+XG4gICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHJlbGF0aXZlIGJvcmRlciBpdGVtcy1jZW50ZXIgZmxleCBmb250LW1lZGl1bSByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwIGp1c3RpZnktY2VudGVyIG1heC13LWZ1bGwgY3Vyc29yLXBvaW50ZXJgLFxuICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZm91ciBob3Zlcjp0ZXh0LWFjY2VudC1mb3VyIGFjdGl2ZTp0ZXh0LWFjY2VudC1mb3VyIGJnLWFjY2VudC10d28gaG92ZXI6YmctYWNjZW50LXR3byBhY3RpdmU6YmctYWNjZW50LXR3byBjdXJzb3Itbm90LWFsbG93ZWRgLFxuICAgICAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1hY2NlbnQtZml2ZSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy1mb3JlZ3JvdW5kIGhvdmVyOmJnLWFjY2VudC10d28gYWN0aXZlOmJnLWZvcmVncm91bmQgYWN0aXZlOnRleHQtd2hpdGVgLFxuICAgICAgICB2YXJpYW50ID09IFwic2Vjb25kYXJ5XCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItc2Vjb25kYXJ5IGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIHRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy13aGl0ZSBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLWVycm9yLWRhcmsgaG92ZXI6Ym9yZGVyLWVycm9yLWRhcmsgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWVycm9yLWRhcmsgYmctZXJyb3ItZGFyayBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcIm1pbmltYWxcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1hY2NlbnQtdGhyZWUgYWN0aXZlOmJnLWFjY2VudC10d28gdGV4dC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtYWNjZW50LXNldmVuIGFjdGl2ZTp0ZXh0LWFjY2VudC1maXZlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImJyYW5kLXBcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctYnJhbmQtdXYgaG92ZXI6Ymctb3BhY2l0eS05MCBhY3RpdmU6Ymctb3BhY2l0eS05MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1zXCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItYnJhbmQtZ3JheSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctdHJhbnNwYXJlbnQgaG92ZXI6b3BhY2l0eS04MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHNpemUgPT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgIGJsb2NrICYmIHR3YHctZnVsbGAsXG4gICAgICBdfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5pbmdEb3RzIHZhcmlhbnQ9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXt0d2BhYnNvbHV0ZWB9IC8+fVxuICAgICAge0J1dHRvbkNvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25CZWZvcmU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBpY29uQWZ0ZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJzZWNvbmRhcnlcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcIm1pbmltYWxcIixcbiAgICBcImJyYW5kLXBcIixcbiAgICBcImJyYW5kLXNcIixcbiAgXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbWFsbFwiLCBcIm5vcm1hbFwiLCBcImxhcmdlXCJdKSxcbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IFwibm9ybWFsXCIsXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICB0eXBlOiBcImJ1dHRvblwiLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Button;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uaW5nRG90cyBmcm9tIFwiLi4vU3Bpbm5pbmdEb3RzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBkaXNhYmxlZCxcbiAgaWNvbkJlZm9yZSxcbiAgaWNvbkFmdGVyLFxuICBvbkNsaWNrLFxuICBsYWJlbCxcbiAgdHlwZSxcbiAgc2l6ZSxcbiAgdmFyaWFudCxcbiAgYmxvY2ssXG4gIGlzTG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICAuLi5yZXN0XG59LCByZWYpID0+IHtcbiAgY29uc3QgQnV0dG9uQ29udGVudCA9IChcbiAgICA8ZGl2XG4gICAgICB0dz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIGNzcz17W2lzTG9hZGluZyA/IHR3YG9wYWNpdHktMGAgOiB0d2BvcGFjaXR5LTEwMGBdfVxuICAgID5cbiAgICAgIHtpY29uQmVmb3JlICYmIDxzcGFuIHR3PVwiZmxleCBtci0yXCI+e2Nsb25lRWxlbWVudChpY29uQmVmb3JlKX08L3NwYW4+fVxuICAgICAgPHNwYW4gdHc9XCJ0cnVuY2F0ZVwiPntsYWJlbH08L3NwYW4+XG4gICAgICB7aWNvbkFmdGVyICYmIDxzcGFuIHR3PVwiZmxleCBtbC0yXCI+e2Nsb25lRWxlbWVudChpY29uQWZ0ZXIpfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpc0xvYWRpbmd9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YHJlbGF0aXZlIGJvcmRlciBpdGVtcy1jZW50ZXIgZmxleCBmb250LW1lZGl1bSByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwIGp1c3RpZnktY2VudGVyIG1heC13LWZ1bGwgY3Vyc29yLXBvaW50ZXJgLFxuICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZm91ciBob3Zlcjp0ZXh0LWFjY2VudC1mb3VyIGFjdGl2ZTp0ZXh0LWFjY2VudC1mb3VyIGJnLWFjY2VudC10d28gaG92ZXI6YmctYWNjZW50LXR3byBhY3RpdmU6YmctYWNjZW50LXR3byBjdXJzb3Itbm90LWFsbG93ZWRgLFxuICAgICAgICB2YXJpYW50ID09IFwiZGVmYXVsdFwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1hY2NlbnQtZml2ZSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy1mb3JlZ3JvdW5kIGhvdmVyOmJnLWFjY2VudC10d28gYWN0aXZlOmJnLWZvcmVncm91bmQgYWN0aXZlOnRleHQtd2hpdGVgLFxuICAgICAgICB2YXJpYW50ID09IFwic2Vjb25kYXJ5XCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItc2Vjb25kYXJ5IGhvdmVyOmJvcmRlci1mb3JlZ3JvdW5kIHRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtZm9yZWdyb3VuZCBiZy13aGl0ZSBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImRhbmdlclwiICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgdHdgYm9yZGVyLWVycm9yLWRhcmsgaG92ZXI6Ym9yZGVyLWVycm9yLWRhcmsgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWVycm9yLWRhcmsgYmctZXJyb3ItZGFyayBob3ZlcjpiZy1hY2NlbnQtdHdvIGFjdGl2ZTpiZy1mb3JlZ3JvdW5kIGFjdGl2ZTp0ZXh0LXdoaXRlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcIm1pbmltYWxcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1hY2NlbnQtdGhyZWUgYWN0aXZlOmJnLWFjY2VudC10d28gdGV4dC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtYWNjZW50LXNldmVuIGFjdGl2ZTp0ZXh0LWFjY2VudC1maXZlYCxcbiAgICAgICAgdmFyaWFudCA9PSBcImJyYW5kLXBcIiAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctYnJhbmQtdXYgaG92ZXI6Ymctb3BhY2l0eS05MCBhY3RpdmU6Ymctb3BhY2l0eS05MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1zXCIgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICB0d2Bib3JkZXItYnJhbmQtZ3JheSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgYmctdHJhbnNwYXJlbnQgaG92ZXI6b3BhY2l0eS04MCBhY3RpdmU6dGV4dC13aGl0ZWAsXG4gICAgICAgIHNpemUgPT0gXCJzbWFsbFwiICYmIHR3YHB4LTQgaC04IGxlYWRpbmctOCB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcIm5vcm1hbFwiICYmIHR3YHB4LTYgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgc2l6ZSA9PSBcImxhcmdlXCIgJiYgdHdgcHgtMTIgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWAsXG4gICAgICAgIGJsb2NrICYmIHR3YHctZnVsbGAsXG4gICAgICBdfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5pbmdEb3RzIHZhcmlhbnQ9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXt0d2BhYnNvbHV0ZWB9IC8+fVxuICAgICAge0J1dHRvbkNvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25CZWZvcmU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBpY29uQWZ0ZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJzZWNvbmRhcnlcIixcbiAgICBcImRhbmdlclwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcIm1pbmltYWxcIixcbiAgICBcImJyYW5kLXBcIixcbiAgICBcImJyYW5kLXNcIixcbiAgXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbWFsbFwiLCBcIm5vcm1hbFwiLCBcImxhcmdlXCJdKSxcbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IFwibm9ybWFsXCIsXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICB0eXBlOiBcImJ1dHRvblwiLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */"]
  }, rest), isLoading && react.jsx(SpinningDots, {
    variant: "inherit",
    className: {
      "position": "absolute"
    }
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
  variant: PropTypes__default['default'].oneOf(["default", "secondary", "danger", "disabled", "minimal", "brand-p", "brand-s"]),
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

module.exports = Button;
