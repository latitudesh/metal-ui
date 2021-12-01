'use strict';

var react$1 = require('react');
var react = require('@emotion/react');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

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

        mergedProps.theme = react$1.useContext(react.ThemeContext);
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
      var ele = /*#__PURE__*/react$1.createElement(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/react$1.createElement(react$1.Fragment, null, /*#__PURE__*/react$1.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
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
      return createStyled(nextTag, _extends$1({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

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

class Heading extends react$1.PureComponent {
  render() {
    const {
      className,
      color,
      size,
      ...props
    } = this.props;
    const HTag = `h${this.props.size}`;
    return react.jsx(HTag, _extends({
      className: classNames__default['default']("", className, {
        "text-4xl font-bold tracking-tighter": size == 1,
        "text-3xl font-semibold tracking-tighter": size == 2,
        "text-2xl font-semibold tracking-tight": size == 3,
        "text-xl font-semibold tracking-tight": size == 4,
        "text-lg font-semibold": size == 5,
        "text-normal font-normal": size == 6,
        "text-foreground": color == "default",
        "text-error": color == "danger"
      })
    }, props));
  }

}

_defineProperty(Heading, "propTypes", {
  /**
   * Each size represents its corresponding Heading element.
   */
  size: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * You can set any other available color
   */
  color: PropTypes__default['default'].oneOf(["default", "danger"]).isRequired,
  className: PropTypes__default['default'].string
});

_defineProperty(Heading, "defaultProps", {
  size: 1,
  color: "default",
  className: ""
});

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1lhdbhi",
  styles: "[role=\"tablist\"]{margin-left:2.5rem;margin-right:2.5rem;;}"
} : {
  name: "r3srxf-Nav",
  styles: "[role=\"tablist\"]{margin-left:2.5rem;margin-right:2.5rem;;};label:Nav;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vSGVhZGluZ1wiO1xuaW1wb3J0IHR3LCB7IHRoZW1lLCBjc3MsIHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQuZGl2KCgpID0+IFtcbiAgY3NzYFxuICAgIFtyb2xlPVwidGFibGlzdFwiXSB7XG4gICAgICAke3R3YG14LTEwYH1cbiAgICB9XG4gIGAsXG5dKTtcblxuY29uc3QgSGVhZGVyID0gKHsgdGl0bGUsIGFjdGlvbnMsIG5hdiwgY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4gKFxuICA8ZGl2XG4gICAgdHc9XCJyZWxhdGl2ZSB3LWZ1bGxcIlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJhY2tncm91bmRDb2xvcil9XG4gICAgY3NzPXtbIUJvb2xlYW4oYmFja2dyb3VuZENvbG9yKSAmJiB0d2BiZy13aGl0ZWBdfVxuICA+XG4gICAgPGRpdlxuICAgICAgdHc9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMTBcIlxuICAgICAgY3NzPXtbbmF2ID8gdHdgcHQtNCBwYi0xYCA6IHR3YHB5LTRgXX1cbiAgICA+XG4gICAgICA8ZGl2IHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWluLXctMCBweS0yXCI+XG4gICAgICAgIDxIZWFkaW5nIHNpemU9ezN9IHR3PVwidHJ1bmNhdGUgcHItMC41IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGlvbnMgJiYgKFxuICAgICAgICA8ZGl2IHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgbWwtMlwiPlxuICAgICAgICAgIDxkaXYgdHc9XCJpbmxpbmUtZmxleCBtbC0wXCI+e2FjdGlvbnN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICB7bmF2ICYmIDxOYXY+e25hdn08L05hdj59XG4gIDwvZGl2PlxuKTtcblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIGFjdGlvbnM6IG51bGwsXG4gIG5hdjogbnVsbCxcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgYWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXG4gIG5hdjogUHJvcFR5cGVzLm5vZGUsXG4gIGZpbHRlcnM6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Nav = createStyled("div", process.env.NODE_ENV === "production" ? {
  target: "e5yo00a0"
} : {
  target: "e5yo00a0",
  label: "Nav"
})(() => [_ref], process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vSGVhZGluZ1wiO1xuaW1wb3J0IHR3LCB7IHRoZW1lLCBjc3MsIHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBOYXYgPSBzdHlsZWQuZGl2KCgpID0+IFtcbiAgY3NzYFxuICAgIFtyb2xlPVwidGFibGlzdFwiXSB7XG4gICAgICAke3R3YG14LTEwYH1cbiAgICB9XG4gIGAsXG5dKTtcblxuY29uc3QgSGVhZGVyID0gKHsgdGl0bGUsIGFjdGlvbnMsIG5hdiwgY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4gKFxuICA8ZGl2XG4gICAgdHc9XCJyZWxhdGl2ZSB3LWZ1bGxcIlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGJhY2tncm91bmRDb2xvcil9XG4gICAgY3NzPXtbIUJvb2xlYW4oYmFja2dyb3VuZENvbG9yKSAmJiB0d2BiZy13aGl0ZWBdfVxuICA+XG4gICAgPGRpdlxuICAgICAgdHc9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMTBcIlxuICAgICAgY3NzPXtbbmF2ID8gdHdgcHQtNCBwYi0xYCA6IHR3YHB5LTRgXX1cbiAgICA+XG4gICAgICA8ZGl2IHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWluLXctMCBweS0yXCI+XG4gICAgICAgIDxIZWFkaW5nIHNpemU9ezN9IHR3PVwidHJ1bmNhdGUgcHItMC41IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGlvbnMgJiYgKFxuICAgICAgICA8ZGl2IHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgbWwtMlwiPlxuICAgICAgICAgIDxkaXYgdHc9XCJpbmxpbmUtZmxleCBtbC0wXCI+e2FjdGlvbnN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICB7bmF2ICYmIDxOYXY+e25hdn08L05hdj59XG4gIDwvZGl2PlxuKTtcblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIGFjdGlvbnM6IG51bGwsXG4gIG5hdjogbnVsbCxcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgYWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXG4gIG5hdjogUHJvcFR5cGVzLm5vZGUsXG4gIGZpbHRlcnM6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */");

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1ug6i4f",
  styles: "display:flex;flex-direction:row;align-items:center;min-width:0px;padding-top:0.5rem;padding-bottom:0.5rem"
} : {
  name: "ngnhbl-Header",
  styles: "display:flex;flex-direction:row;align-items:center;min-width:0px;padding-top:0.5rem;padding-bottom:0.5rem;label:Header;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1h5hd82",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:0.125rem;font-weight:600"
} : {
  name: "flu1o1-Header",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:0.125rem;font-weight:600;label:Header;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "psasdh",
  styles: "display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-left:0.5rem"
} : {
  name: "a0336k-Header",
  styles: "display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-left:0.5rem;label:Header;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "1kjf4md",
  styles: "display:inline-flex;margin-left:0px"
} : {
  name: "1m786tj-Header",
  styles: "display:inline-flex;margin-left:0px;label:Header;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Header = ({
  title,
  actions,
  nav,
  className,
  backgroundColor
}) => react.jsx("div", {
  className: classNames__default['default'](className, backgroundColor),
  css: ["position:relative;width:100%;", !Boolean(backgroundColor) && {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
  }, process.env.NODE_ENV === "production" ? "" : ";label:Header;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL0hlYWRpbmdcIjtcbmltcG9ydCB0dywgeyB0aGVtZSwgY3NzLCBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdigoKSA9PiBbXG4gIGNzc2BcbiAgICBbcm9sZT1cInRhYmxpc3RcIl0ge1xuICAgICAgJHt0d2BteC0xMGB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlLCBhY3Rpb25zLCBuYXYsIGNsYXNzTmFtZSwgYmFja2dyb3VuZENvbG9yIH0pID0+IChcbiAgPGRpdlxuICAgIHR3PVwicmVsYXRpdmUgdy1mdWxsXCJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgIGNzcz17WyFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgXX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTEwXCJcbiAgICAgIGNzcz17W25hdiA/IHR3YHB0LTQgcGItMWAgOiB0d2BweS00YF19XG4gICAgPlxuICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1pbi13LTAgcHktMlwiPlxuICAgICAgICA8SGVhZGluZyBzaXplPXszfSB0dz1cInRydW5jYXRlIHByLTAuNSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zICYmIChcbiAgICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG1sLTJcIj5cbiAgICAgICAgICA8ZGl2IHR3PVwiaW5saW5lLWZsZXggbWwtMFwiPnthY3Rpb25zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAge25hdiAmJiA8TmF2PntuYXZ9PC9OYXY+fVxuICA8L2Rpdj5cbik7XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBhY3Rpb25zOiBudWxsLFxuICBuYXY6IG51bGwsXG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICBuYXY6IFByb3BUeXBlcy5ub2RlLFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Header;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL0hlYWRpbmdcIjtcbmltcG9ydCB0dywgeyB0aGVtZSwgY3NzLCBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdigoKSA9PiBbXG4gIGNzc2BcbiAgICBbcm9sZT1cInRhYmxpc3RcIl0ge1xuICAgICAgJHt0d2BteC0xMGB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlLCBhY3Rpb25zLCBuYXYsIGNsYXNzTmFtZSwgYmFja2dyb3VuZENvbG9yIH0pID0+IChcbiAgPGRpdlxuICAgIHR3PVwicmVsYXRpdmUgdy1mdWxsXCJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgIGNzcz17WyFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgXX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTEwXCJcbiAgICAgIGNzcz17W25hdiA/IHR3YHB0LTQgcGItMWAgOiB0d2BweS00YF19XG4gICAgPlxuICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1pbi13LTAgcHktMlwiPlxuICAgICAgICA8SGVhZGluZyBzaXplPXszfSB0dz1cInRydW5jYXRlIHByLTAuNSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zICYmIChcbiAgICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG1sLTJcIj5cbiAgICAgICAgICA8ZGl2IHR3PVwiaW5saW5lLWZsZXggbWwtMFwiPnthY3Rpb25zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAge25hdiAmJiA8TmF2PntuYXZ9PC9OYXY+fVxuICA8L2Rpdj5cbik7XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBhY3Rpb25zOiBudWxsLFxuICBuYXY6IG51bGwsXG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICBuYXY6IFByb3BUeXBlcy5ub2RlLFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */"]
}, react.jsx("div", {
  css: ["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-left:2.5rem;padding-right:2.5rem;", nav ? {
    "paddingTop": "1rem",
    "paddingBottom": "0.25rem"
  } : {
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  }, process.env.NODE_ENV === "production" ? "" : ";label:Header;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL0hlYWRpbmdcIjtcbmltcG9ydCB0dywgeyB0aGVtZSwgY3NzLCBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdigoKSA9PiBbXG4gIGNzc2BcbiAgICBbcm9sZT1cInRhYmxpc3RcIl0ge1xuICAgICAgJHt0d2BteC0xMGB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlLCBhY3Rpb25zLCBuYXYsIGNsYXNzTmFtZSwgYmFja2dyb3VuZENvbG9yIH0pID0+IChcbiAgPGRpdlxuICAgIHR3PVwicmVsYXRpdmUgdy1mdWxsXCJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgIGNzcz17WyFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgXX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTEwXCJcbiAgICAgIGNzcz17W25hdiA/IHR3YHB0LTQgcGItMWAgOiB0d2BweS00YF19XG4gICAgPlxuICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1pbi13LTAgcHktMlwiPlxuICAgICAgICA8SGVhZGluZyBzaXplPXszfSB0dz1cInRydW5jYXRlIHByLTAuNSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zICYmIChcbiAgICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG1sLTJcIj5cbiAgICAgICAgICA8ZGl2IHR3PVwiaW5saW5lLWZsZXggbWwtMFwiPnthY3Rpb25zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAge25hdiAmJiA8TmF2PntuYXZ9PC9OYXY+fVxuICA8L2Rpdj5cbik7XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBhY3Rpb25zOiBudWxsLFxuICBuYXY6IG51bGwsXG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICBuYXY6IFByb3BUeXBlcy5ub2RlLFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Header;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL0hlYWRpbmdcIjtcbmltcG9ydCB0dywgeyB0aGVtZSwgY3NzLCBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdigoKSA9PiBbXG4gIGNzc2BcbiAgICBbcm9sZT1cInRhYmxpc3RcIl0ge1xuICAgICAgJHt0d2BteC0xMGB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlLCBhY3Rpb25zLCBuYXYsIGNsYXNzTmFtZSwgYmFja2dyb3VuZENvbG9yIH0pID0+IChcbiAgPGRpdlxuICAgIHR3PVwicmVsYXRpdmUgdy1mdWxsXCJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgIGNzcz17WyFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgXX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIHR3PVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTEwXCJcbiAgICAgIGNzcz17W25hdiA/IHR3YHB0LTQgcGItMWAgOiB0d2BweS00YF19XG4gICAgPlxuICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1pbi13LTAgcHktMlwiPlxuICAgICAgICA8SGVhZGluZyBzaXplPXszfSB0dz1cInRydW5jYXRlIHByLTAuNSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zICYmIChcbiAgICAgICAgPGRpdiB0dz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG1sLTJcIj5cbiAgICAgICAgICA8ZGl2IHR3PVwiaW5saW5lLWZsZXggbWwtMFwiPnthY3Rpb25zfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAge25hdiAmJiA8TmF2PntuYXZ9PC9OYXY+fVxuICA8L2Rpdj5cbik7XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBhY3Rpb25zOiBudWxsLFxuICBuYXY6IG51bGwsXG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICBuYXY6IFByb3BUeXBlcy5ub2RlLFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */"]
}, react.jsx("div", {
  css: _ref2
}, react.jsx(Heading, {
  size: 3,
  css: _ref3
}, title)), actions && react.jsx("div", {
  css: _ref4
}, react.jsx("div", {
  css: _ref5
}, actions))), nav && react.jsx(Nav, null, nav));

Header.defaultProps = {
  title: null,
  actions: null,
  nav: null
};
Header.propTypes = {
  title: PropTypes__default['default'].node,
  actions: PropTypes__default['default'].node,
  nav: PropTypes__default['default'].node,
  filters: PropTypes__default['default'].node
};

module.exports = Header;
