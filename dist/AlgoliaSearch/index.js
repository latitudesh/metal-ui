'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var react = require('@emotion/react');
var classNames = require('classnames');
var require$$0 = require('events');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

const TabControllerContext = /*#__PURE__*/React.createContext({});
const useTabController = () => React.useContext(TabControllerContext);
const navigationKeyTypes = {
  CURSOR: 'cursor',
  ARROW_DOWN: 'arrowDown',
  ARROW_UP: 'arrowUp',
  ENTER: 'enter'
};

const TabController = props => {
  const {
    children
  } = props; // keeps track of the currently focused element in the results panel

  const [activeElementIndex, setActiveElementIndex] = React.useState(0); // keeps track of the total number of elements that have been rendered

  const [totalElementsCount, setTotalElementsCount] = React.useState(0); // an array of integers, the number of results per section

  const [sectionLengthsArray, setSectionLengthsArray] = React.useState([0]); // height of the scrollable container

  const [scrollableWindowHeight, setScrollableWindowHeight] = React.useState(300);
  const [searchInputHeight, setSearchInputHeight] = React.useState(null);
  const [controlsHeight, setControlsHeight] = React.useState(null); // distance to top of the page from the scrollable container

  const [scrollableWindowTopOffset, setScrollableWindowTopOffset] = React.useState(0); // scroll distance to be set and read from

  const [scrollDistance, setScrollDistance] = React.useState(0); // boolean to set whether or not the search box has text

  const [isResultsWindowOpen, setIsResultsWindowOpen] = React.useState(false);
  const [scrollWindowRef, setScrollWindowRef] = React.useState(null);
  const [shouldBypassSearch, setShouldBypassSearch] = React.useState(true);
  const [enterKeyWasPressed, setEnterKeyWasPressed] = React.useState(false); // allows for manual scroll disabling

  const [isScrollDisabled, setIsScrollDisabled] = React.useState(false);

  const handleKeyNavigation = key => {
    switch (key) {
      case navigationKeyTypes.ARROW_UP:
        decrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ARROW_DOWN:
        incrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ENTER:
        setEnterKeyWasPressed(true);
        setShouldBypassSearch(true);
        break;
    }
  };

  const manuallySetActiveIndex = index => {
    setIsScrollDisabled(true);
    setActiveElementIndex(index);
  }; // resets the active element to the first one


  const resetActiveElementIndex = () => {
    setActiveElementIndex(0);
  }; // adds section results length


  const appendNewSectionLength = (sectionIndex, length) => {
    const copyOfSectionLengthsArray = [...sectionLengthsArray];
    copyOfSectionLengthsArray[sectionIndex] = length;
    setSectionLengthsArray(copyOfSectionLengthsArray);
    setTotalElementsCount(copyOfSectionLengthsArray.reduce((a, b) => a + b, 0));
  }; // increments the active index by 1 or resets to 0 if past total number of elements


  const incrementActiveElementIndex = () => {
    let nextIndex = activeElementIndex + 1;
    if (nextIndex >= totalElementsCount) nextIndex = 0;
    setIsScrollDisabled(false);
    setActiveElementIndex(nextIndex);
  }; // decrements the active index by 1 or resets to "totalElementsCount - 1" if index < 0


  const decrementActiveElementIndex = () => {
    let prevIndex = activeElementIndex - 1;
    if (prevIndex < 0) prevIndex = totalElementsCount - 1;
    setIsScrollDisabled(false);
    setActiveElementIndex(prevIndex);
  };

  return react.jsx(TabControllerContext.Provider, {
    value: {
      activeElementIndex,
      resetActiveElementIndex,
      appendNewSectionLength,
      sectionLengthsArray,
      manuallySetActiveIndex,
      setActiveElementIndex,
      totalElementsCount,
      scrollableWindowHeight,
      setScrollableWindowHeight,
      scrollableWindowTopOffset,
      setScrollableWindowTopOffset,
      scrollDistance,
      setScrollDistance,
      isResultsWindowOpen,
      setIsResultsWindowOpen,
      setScrollWindowRef,
      scrollWindowRef,
      shouldBypassSearch,
      setShouldBypassSearch,
      setEnterKeyWasPressed,
      enterKeyWasPressed,
      isScrollDisabled,
      handleKeyNavigation,
      searchInputHeight,
      setSearchInputHeight,
      controlsHeight,
      setControlsHeight
    }
  }, children);
};

function createBrowserLocalStorageCache(options) {
  const namespaceKey = `algoliasearch-client-js-${options.key}`; // eslint-disable-next-line functional/no-let

  let storage;

  const getStorage = () => {
    if (storage === undefined) {
      storage = options.localStorage || window.localStorage;
    }

    return storage;
  };

  const getNamespace = () => {
    return JSON.parse(getStorage().getItem(namespaceKey) || '{}');
  };

  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return Promise.resolve().then(() => {
        const keyAsString = JSON.stringify(key);
        const value = getNamespace()[keyAsString];
        return Promise.all([value || defaultValue(), value !== undefined]);
      }).then(([value, exists]) => {
        return Promise.all([value, exists || events.miss(value)]);
      }).then(([value]) => value);
    },

    set(key, value) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace(); // eslint-disable-next-line functional/immutable-data

        namespace[JSON.stringify(key)] = value;
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
        return value;
      });
    },

    delete(key) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace(); // eslint-disable-next-line functional/immutable-data

        delete namespace[JSON.stringify(key)];
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
      });
    },

    clear() {
      return Promise.resolve().then(() => {
        getStorage().removeItem(namespaceKey);
      });
    }

  };
} // @todo Add logger on options to debug when caches go wrong.


function createFallbackableCache(options) {
  const caches = [...options.caches];
  const current = caches.shift(); // eslint-disable-line functional/immutable-data

  if (current === undefined) {
    return createNullCache();
  }

  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return current.get(key, defaultValue, events).catch(() => {
        return createFallbackableCache({
          caches
        }).get(key, defaultValue, events);
      });
    },

    set(key, value) {
      return current.set(key, value).catch(() => {
        return createFallbackableCache({
          caches
        }).set(key, value);
      });
    },

    delete(key) {
      return current.delete(key).catch(() => {
        return createFallbackableCache({
          caches
        }).delete(key);
      });
    },

    clear() {
      return current.clear().catch(() => {
        return createFallbackableCache({
          caches
        }).clear();
      });
    }

  };
}

function createNullCache() {
  return {
    get(_key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const value = defaultValue();
      return value.then(result => Promise.all([result, events.miss(result)])).then(([result]) => result);
    },

    set(_key, value) {
      return Promise.resolve(value);
    },

    delete(_key) {
      return Promise.resolve();
    },

    clear() {
      return Promise.resolve();
    }

  };
}

function createInMemoryCache(options = {
  serializable: true
}) {
  // eslint-disable-next-line functional/no-let
  let cache = {};
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const keyAsString = JSON.stringify(key);

      if (keyAsString in cache) {
        return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
      }

      const promise = defaultValue();

      const miss = events && events.miss || (() => Promise.resolve());

      return promise.then(value => miss(value)).then(() => promise);
    },

    set(key, value) {
      // eslint-disable-next-line functional/immutable-data
      cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
      return Promise.resolve(value);
    },

    delete(key) {
      // eslint-disable-next-line functional/immutable-data
      delete cache[JSON.stringify(key)];
      return Promise.resolve();
    },

    clear() {
      cache = {};
      return Promise.resolve();
    }

  };
}

function createAuth(authMode, appId, apiKey) {
  const credentials = {
    'x-algolia-api-key': apiKey,
    'x-algolia-application-id': appId
  };
  return {
    headers() {
      return authMode === AuthMode.WithinHeaders ? credentials : {};
    },

    queryParameters() {
      return authMode === AuthMode.WithinQueryParameters ? credentials : {};
    }

  };
} // eslint-disable-next-line functional/prefer-readonly-type


function shuffle(array) {
  let c = array.length - 1; // eslint-disable-line functional/no-let
  // eslint-disable-next-line functional/no-loop-statement

  for (c; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = array[c];
    array[c] = array[b]; // eslint-disable-line functional/immutable-data, no-param-reassign

    array[b] = a; // eslint-disable-line functional/immutable-data, no-param-reassign
  }

  return array;
}

function addMethods(base, methods) {
  if (!methods) {
    return base;
  }

  Object.keys(methods).forEach(key => {
    // eslint-disable-next-line functional/immutable-data, no-param-reassign
    base[key] = methods[key](base);
  });
  return base;
}

function encode(format, ...args) {
  // eslint-disable-next-line functional/no-let
  let i = 0;
  return format.replace(/%s/g, () => encodeURIComponent(args[i++]));
}

const version$3 = '4.8.6';
const AuthMode = {
  /**
   * If auth credentials should be in query parameters.
   */
  WithinQueryParameters: 0,

  /**
   * If auth credentials should be in headers.
   */
  WithinHeaders: 1
};

function createMappedRequestOptions(requestOptions, timeout) {
  const options = requestOptions || {};
  const data = options.data || {};
  Object.keys(options).forEach(key => {
    if (['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(key) === -1) {
      data[key] = options[key]; // eslint-disable-line functional/immutable-data
    }
  });
  return {
    data: Object.entries(data).length > 0 ? data : undefined,
    timeout: options.timeout || timeout,
    headers: options.headers || {},
    queryParameters: options.queryParameters || {},
    cacheable: options.cacheable
  };
}

const CallEnum = {
  /**
   * If the host is read only.
   */
  Read: 1,

  /**
   * If the host is write only.
   */
  Write: 2,

  /**
   * If the host is both read and write.
   */
  Any: 3
};
const HostStatusEnum = {
  Up: 1,
  Down: 2,
  Timeouted: 3
}; // By default, API Clients at Algolia have expiration delay
// of 5 mins. In the JavaScript client, we have 2 mins.

const EXPIRATION_DELAY = 2 * 60 * 1000;

function createStatefulHost(host, status = HostStatusEnum.Up) {
  return { ...host,
    status,
    lastUpdate: Date.now()
  };
}

function isStatefulHostUp(host) {
  return host.status === HostStatusEnum.Up || Date.now() - host.lastUpdate > EXPIRATION_DELAY;
}

function isStatefulHostTimeouted(host) {
  return host.status === HostStatusEnum.Timeouted && Date.now() - host.lastUpdate <= EXPIRATION_DELAY;
}

function createStatelessHost(options) {
  if (typeof options === 'string') {
    return {
      protocol: 'https',
      url: options,
      accept: CallEnum.Any
    };
  }

  return {
    protocol: options.protocol || 'https',
    url: options.url,
    accept: options.accept || CallEnum.Any
  };
}

const MethodEnum = {
  Delete: 'DELETE',
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT'
};

function createRetryableOptions(hostsCache, statelessHosts) {
  return Promise.all(statelessHosts.map(statelessHost => {
    return hostsCache.get(statelessHost, () => {
      return Promise.resolve(createStatefulHost(statelessHost));
    });
  })).then(statefulHosts => {
    const hostsUp = statefulHosts.filter(host => isStatefulHostUp(host));
    const hostsTimeouted = statefulHosts.filter(host => isStatefulHostTimeouted(host));
    /**
     * Note, we put the hosts that previously timeouted on the end of the list.
     */

    const hostsAvailable = [...hostsUp, ...hostsTimeouted];
    const statelessHostsAvailable = hostsAvailable.length > 0 ? hostsAvailable.map(host => createStatelessHost(host)) : statelessHosts;
    return {
      getTimeout(timeoutsCount, baseTimeout) {
        /**
         * Imagine that you have 4 hosts, if timeouts will increase
         * on the following way: 1 (timeouted) > 4 (timeouted) > 5 (200)
         *
         * Note that, the very next request, we start from the previous timeout
         *
         *  5 (timeouted) > 6 (timeouted) > 7 ...
         *
         * This strategy may need to be reviewed, but is the strategy on the our
         * current v3 version.
         */
        const timeoutMultiplier = hostsTimeouted.length === 0 && timeoutsCount === 0 ? 1 : hostsTimeouted.length + 3 + timeoutsCount;
        return timeoutMultiplier * baseTimeout;
      },

      statelessHosts: statelessHostsAvailable
    };
  });
}

const isNetworkError = ({
  isTimedOut,
  status
}) => {
  return !isTimedOut && ~~status === 0;
};

const isRetryable = response => {
  const status = response.status;
  const isTimedOut = response.isTimedOut;
  return isTimedOut || isNetworkError(response) || ~~(status / 100) !== 2 && ~~(status / 100) !== 4;
};

const isSuccess = ({
  status
}) => {
  return ~~(status / 100) === 2;
};

const retryDecision = (response, outcomes) => {
  if (isRetryable(response)) {
    return outcomes.onRetry(response);
  }

  if (isSuccess(response)) {
    return outcomes.onSuccess(response);
  }

  return outcomes.onFail(response);
};

function retryableRequest(transporter, statelessHosts, request, requestOptions) {
  const stackTrace = []; // eslint-disable-line functional/prefer-readonly-type

  /**
   * First we prepare the payload that do not depend from hosts.
   */

  const data = serializeData(request, requestOptions);
  const headers = serializeHeaders(transporter, requestOptions);
  const method = request.method; // On `GET`, the data is proxied to query parameters.

  const dataQueryParameters = request.method !== MethodEnum.Get ? {} : { ...request.data,
    ...requestOptions.data
  };
  const queryParameters = {
    'x-algolia-agent': transporter.userAgent.value,
    ...transporter.queryParameters,
    ...dataQueryParameters,
    ...requestOptions.queryParameters
  };
  let timeoutsCount = 0; // eslint-disable-line functional/no-let

  const retry = (hosts, // eslint-disable-line functional/prefer-readonly-type
  getTimeout) => {
    /**
     * We iterate on each host, until there is no host left.
     */
    const host = hosts.pop(); // eslint-disable-line functional/immutable-data

    if (host === undefined) {
      throw createRetryError(stackTraceWithoutCredentials(stackTrace));
    }

    const payload = {
      data,
      headers,
      method,
      url: serializeUrl(host, request.path, queryParameters),
      connectTimeout: getTimeout(timeoutsCount, transporter.timeouts.connect),
      responseTimeout: getTimeout(timeoutsCount, requestOptions.timeout)
    };
    /**
     * The stackFrame is pushed to the stackTrace so we
     * can have information about onRetry and onFailure
     * decisions.
     */

    const pushToStackTrace = response => {
      const stackFrame = {
        request: payload,
        response,
        host,
        triesLeft: hosts.length
      }; // eslint-disable-next-line functional/immutable-data

      stackTrace.push(stackFrame);
      return stackFrame;
    };

    const decisions = {
      onSuccess: response => deserializeSuccess(response),

      onRetry(response) {
        const stackFrame = pushToStackTrace(response);
        /**
         * If response is a timeout, we increaset the number of
         * timeouts so we can increase the timeout later.
         */

        if (response.isTimedOut) {
          timeoutsCount++;
        }

        return Promise.all([
        /**
         * Failures are individually send the logger, allowing
         * the end user to debug / store stack frames even
         * when a retry error does not happen.
         */
        transporter.logger.info('Retryable failure', stackFrameWithoutCredentials(stackFrame)),
        /**
         * We also store the state of the host in failure cases. If the host, is
         * down it will remain down for the next 2 minutes. In a timeout situation,
         * this host will be added end of the list of hosts on the next request.
         */
        transporter.hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? HostStatusEnum.Timeouted : HostStatusEnum.Down))]).then(() => retry(hosts, getTimeout));
      },

      onFail(response) {
        pushToStackTrace(response);
        throw deserializeFailure(response, stackTraceWithoutCredentials(stackTrace));
      }

    };
    return transporter.requester.send(payload).then(response => {
      return retryDecision(response, decisions);
    });
  };
  /**
   * Finally, for each retryable host perform request until we got a non
   * retryable response. Some notes here:
   *
   * 1. The reverse here is applied so we can apply a `pop` later on => more performant.
   * 2. We also get from the retryable options a timeout multiplier that is tailored
   * for the current context.
   */


  return createRetryableOptions(transporter.hostsCache, statelessHosts).then(options => {
    return retry([...options.statelessHosts].reverse(), options.getTimeout);
  });
}

function createTransporter(options) {
  const {
    hostsCache,
    logger,
    requester,
    requestsCache,
    responsesCache,
    timeouts,
    userAgent,
    hosts,
    queryParameters,
    headers
  } = options;
  const transporter = {
    hostsCache,
    logger,
    requester,
    requestsCache,
    responsesCache,
    timeouts,
    userAgent,
    headers,
    queryParameters,
    hosts: hosts.map(host => createStatelessHost(host)),

    read(request, requestOptions) {
      /**
       * First, we compute the user request options. Now, keep in mind,
       * that using request options the user is able to modified the intire
       * payload of the request. Such as headers, query parameters, and others.
       */
      const mappedRequestOptions = createMappedRequestOptions(requestOptions, transporter.timeouts.read);

      const createRetryableRequest = () => {
        /**
         * Then, we prepare a function factory that contains the construction of
         * the retryable request. At this point, we may *not* perform the actual
         * request. But we want to have the function factory ready.
         */
        return retryableRequest(transporter, transporter.hosts.filter(host => (host.accept & CallEnum.Read) !== 0), request, mappedRequestOptions);
      };
      /**
       * Once we have the function factory ready, we need to determine of the
       * request is "cacheable" - should be cached. Note that, once again,
       * the user can force this option.
       */


      const cacheable = mappedRequestOptions.cacheable !== undefined ? mappedRequestOptions.cacheable : request.cacheable;
      /**
       * If is not "cacheable", we immediatly trigger the retryable request, no
       * need to check cache implementations.
       */

      if (cacheable !== true) {
        return createRetryableRequest();
      }
      /**
       * If the request is "cacheable", we need to first compute the key to ask
       * the cache implementations if this request is on progress or if the
       * response already exists on the cache.
       */


      const key = {
        request,
        mappedRequestOptions,
        transporter: {
          queryParameters: transporter.queryParameters,
          headers: transporter.headers
        }
      };
      /**
       * With the computed key, we first ask the responses cache
       * implemention if this request was been resolved before.
       */

      return transporter.responsesCache.get(key, () => {
        /**
         * If the request has never resolved before, we actually ask if there
         * is a current request with the same key on progress.
         */
        return transporter.requestsCache.get(key, () => {
          return transporter.requestsCache
          /**
           * Finally, if there is no request in progress with the same key,
           * this `createRetryableRequest()` will actually trigger the
           * retryable request.
           */
          .set(key, createRetryableRequest()).then(response => Promise.all([transporter.requestsCache.delete(key), response]), err => Promise.all([transporter.requestsCache.delete(key), Promise.reject(err)])).then(([_, response]) => response);
        });
      }, {
        /**
         * Of course, once we get this response back from the server, we
         * tell response cache to actually store the received response
         * to be used later.
         */
        miss: response => transporter.responsesCache.set(key, response)
      });
    },

    write(request, requestOptions) {
      /**
       * On write requests, no cache mechanisms are applied, and we
       * proxy the request immediately to the requester.
       */
      return retryableRequest(transporter, transporter.hosts.filter(host => (host.accept & CallEnum.Write) !== 0), request, createMappedRequestOptions(requestOptions, transporter.timeouts.write));
    }

  };
  return transporter;
}

function createUserAgent(version) {
  const userAgent = {
    value: `Algolia for JavaScript (${version})`,

    add(options) {
      const addedUserAgent = `; ${options.segment}${options.version !== undefined ? ` (${options.version})` : ''}`;

      if (userAgent.value.indexOf(addedUserAgent) === -1) {
        // eslint-disable-next-line functional/immutable-data
        userAgent.value = `${userAgent.value}${addedUserAgent}`;
      }

      return userAgent;
    }

  };
  return userAgent;
}

function deserializeSuccess(response) {
  // eslint-disable-next-line functional/no-try-statement
  try {
    return JSON.parse(response.content);
  } catch (e) {
    throw createDeserializationError(e.message, response);
  }
}

function deserializeFailure({
  content,
  status
}, stackFrame) {
  // eslint-disable-next-line functional/no-let
  let message = content; // eslint-disable-next-line functional/no-try-statement

  try {
    message = JSON.parse(content).message;
  } catch (e) {// ..
  }

  return createApiError(message, status, stackFrame);
}

function serializeUrl(host, path, queryParameters) {
  const queryParametersAsString = serializeQueryParameters$1(queryParameters); // eslint-disable-next-line functional/no-let

  let url = `${host.protocol}://${host.url}/${path.charAt(0) === '/' ? path.substr(1) : path}`;

  if (queryParametersAsString.length) {
    url += `?${queryParametersAsString}`;
  }

  return url;
}

function serializeQueryParameters$1(parameters) {
  const isObjectOrArray = value => Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';

  return Object.keys(parameters).map(key => encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key])).join('&');
}

function serializeData(request, requestOptions) {
  if (request.method === MethodEnum.Get || request.data === undefined && requestOptions.data === undefined) {
    return undefined;
  }

  const data = Array.isArray(request.data) ? request.data : { ...request.data,
    ...requestOptions.data
  };
  return JSON.stringify(data);
}

function serializeHeaders(transporter, requestOptions) {
  const headers = { ...transporter.headers,
    ...requestOptions.headers
  };
  const serializedHeaders = {};
  Object.keys(headers).forEach(header => {
    const value = headers[header]; // @ts-ignore
    // eslint-disable-next-line functional/immutable-data

    serializedHeaders[header.toLowerCase()] = value;
  });
  return serializedHeaders;
}

function stackTraceWithoutCredentials(stackTrace) {
  return stackTrace.map(stackFrame => stackFrameWithoutCredentials(stackFrame));
}

function stackFrameWithoutCredentials(stackFrame) {
  const modifiedHeaders = stackFrame.request.headers['x-algolia-api-key'] ? {
    'x-algolia-api-key': '*****'
  } : {};
  return { ...stackFrame,
    request: { ...stackFrame.request,
      headers: { ...stackFrame.request.headers,
        ...modifiedHeaders
      }
    }
  };
}

function createApiError(message, status, transporterStackTrace) {
  return {
    name: 'ApiError',
    message,
    status,
    transporterStackTrace
  };
}

function createDeserializationError(message, response) {
  return {
    name: 'DeserializationError',
    message,
    response
  };
}

function createRetryError(transporterStackTrace) {
  return {
    name: 'RetryError',
    message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
    transporterStackTrace
  };
}

const createSearchClient = options => {
  const appId = options.appId;
  const auth = createAuth(options.authMode !== undefined ? options.authMode : AuthMode.WithinHeaders, appId, options.apiKey);
  const transporter = createTransporter({
    hosts: [{
      url: `${appId}-dsn.algolia.net`,
      accept: CallEnum.Read
    }, {
      url: `${appId}.algolia.net`,
      accept: CallEnum.Write
    }].concat(shuffle([{
      url: `${appId}-1.algolianet.com`
    }, {
      url: `${appId}-2.algolianet.com`
    }, {
      url: `${appId}-3.algolianet.com`
    }])),
    ...options,
    headers: { ...auth.headers(),
      ...{
        'content-type': 'application/x-www-form-urlencoded'
      },
      ...options.headers
    },
    queryParameters: { ...auth.queryParameters(),
      ...options.queryParameters
    }
  });
  const base = {
    transporter,
    appId,

    addAlgoliaAgent(segment, version) {
      transporter.userAgent.add({
        segment,
        version
      });
    },

    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => undefined);
    }

  };
  return addMethods(base, options.methods);
};

const initIndex = base => {
  return (indexName, options = {}) => {
    const searchIndex = {
      transporter: base.transporter,
      appId: base.appId,
      indexName
    };
    return addMethods(searchIndex, options.methods);
  };
};

const multipleQueries = base => {
  return (queries, requestOptions) => {
    const requests = queries.map(query => {
      return { ...query,
        params: serializeQueryParameters$1(query.params || {})
      };
    });
    return base.transporter.read({
      method: MethodEnum.Post,
      path: '1/indexes/*/queries',
      data: {
        requests
      },
      cacheable: true
    }, requestOptions);
  };
};

const multipleSearchForFacetValues = base => {
  return (queries, requestOptions) => {
    return Promise.all(queries.map(query => {
      const {
        facetName,
        facetQuery,
        ...params
      } = query.params;
      return initIndex(base)(query.indexName, {
        methods: {
          searchForFacetValues
        }
      }).searchForFacetValues(facetName, facetQuery, { ...requestOptions,
        ...params
      });
    }));
  };
};

const findAnswers = base => {
  return (query, queryLanguages, requestOptions) => {
    return base.transporter.read({
      method: MethodEnum.Post,
      path: encode('1/answers/%s/prediction', base.indexName),
      data: {
        query,
        queryLanguages
      },
      cacheable: true
    }, requestOptions);
  };
};

const search = base => {
  return (query, requestOptions) => {
    return base.transporter.read({
      method: MethodEnum.Post,
      path: encode('1/indexes/%s/query', base.indexName),
      data: {
        query
      },
      cacheable: true
    }, requestOptions);
  };
};

const searchForFacetValues = base => {
  return (facetName, facetQuery, requestOptions) => {
    return base.transporter.read({
      method: MethodEnum.Post,
      path: encode('1/indexes/%s/facets/%s/query', base.indexName, facetName),
      data: {
        facetQuery
      },
      cacheable: true
    }, requestOptions);
  };
};

const LogLevelEnum = {
  Debug: 1,
  Info: 2,
  Error: 3
};
/* eslint no-console: 0 */

function createConsoleLogger(logLevel) {
  return {
    debug(message, args) {
      if (LogLevelEnum.Debug >= logLevel) {
        console.debug(message, args);
      }

      return Promise.resolve();
    },

    info(message, args) {
      if (LogLevelEnum.Info >= logLevel) {
        console.info(message, args);
      }

      return Promise.resolve();
    },

    error(message, args) {
      console.error(message, args);
      return Promise.resolve();
    }

  };
}

function createBrowserXhrRequester() {
  return {
    send(request) {
      return new Promise(resolve => {
        const baseRequester = new XMLHttpRequest();
        baseRequester.open(request.method, request.url, true);
        Object.keys(request.headers).forEach(key => baseRequester.setRequestHeader(key, request.headers[key]));

        const createTimeout = (timeout, content) => {
          return setTimeout(() => {
            baseRequester.abort();
            resolve({
              status: 0,
              content,
              isTimedOut: true
            });
          }, timeout * 1000);
        };

        const connectTimeout = createTimeout(request.connectTimeout, 'Connection timeout'); // eslint-disable-next-line functional/no-let

        let responseTimeout; // eslint-disable-next-line functional/immutable-data

        baseRequester.onreadystatechange = () => {
          if (baseRequester.readyState > baseRequester.OPENED && responseTimeout === undefined) {
            clearTimeout(connectTimeout);
            responseTimeout = createTimeout(request.responseTimeout, 'Socket timeout');
          }
        }; // eslint-disable-next-line functional/immutable-data


        baseRequester.onerror = () => {
          // istanbul ignore next
          if (baseRequester.status === 0) {
            clearTimeout(connectTimeout);
            clearTimeout(responseTimeout);
            resolve({
              content: baseRequester.responseText || 'Network request failed',
              status: baseRequester.status,
              isTimedOut: false
            });
          }
        }; //  eslint-disable-next-line functional/immutable-data


        baseRequester.onload = () => {
          clearTimeout(connectTimeout);
          clearTimeout(responseTimeout);
          resolve({
            content: baseRequester.responseText,
            status: baseRequester.status,
            isTimedOut: false
          });
        };

        baseRequester.send(request.data);
      });
    }

  };
}

function algoliasearch(appId, apiKey, options) {
  const commonOptions = {
    appId,
    apiKey,
    timeouts: {
      connect: 1,
      read: 2,
      write: 30
    },
    requester: createBrowserXhrRequester(),
    logger: createConsoleLogger(LogLevelEnum.Error),
    responsesCache: createInMemoryCache(),
    requestsCache: createInMemoryCache({
      serializable: false
    }),
    hostsCache: createFallbackableCache({
      caches: [createBrowserLocalStorageCache({
        key: `${version$3}-${appId}`
      }), createInMemoryCache()]
    }),
    userAgent: createUserAgent(version$3).add({
      segment: 'Browser',
      version: 'lite'
    }),
    authMode: AuthMode.WithinQueryParameters
  };
  return createSearchClient({ ...commonOptions,
    ...options,
    methods: {
      search: multipleQueries,
      searchForFacetValues: multipleSearchForFacetValues,
      multipleQueries,
      multipleSearchForFacetValues,
      initIndex: base => indexName => {
        return initIndex(base)(indexName, {
          methods: {
            search,
            searchForFacetValues,
            findAnswers
          }
        });
      }
    }
  });
} // eslint-disable-next-line functional/immutable-data


algoliasearch.version = version$3;

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty$1(obj, key, value) {
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView; // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

      return true;
    } // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.


    var it;

    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;

      it = a.entries();

      while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;

      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;

      return true;
    } // END: Modifications


    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false; // END: fast-deep-equal
    // START: react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element) return false; // custom handling for React/Preact

    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements
        continue;
      } // all other properties should be traversed as usual


      if (!equal(a[keys[i]], b[keys[i]])) return false;
    } // END: react-fast-compare
    // START: fast-deep-equal


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

var shallowEqual = function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var hasOwn = Object.prototype.hasOwnProperty;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
};
var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'UnknownComponent';
};
var resolved = Promise.resolve();
var defer = function defer(f) {
  resolved.then(f);
};

var isPlainObject = function isPlainObject(value) {
  return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
};

var removeEmptyKey = function removeEmptyKey(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (!isPlainObject(value)) {
      return;
    }

    if (!objectHasKeys$4(value)) {
      delete obj[key];
    } else {
      removeEmptyKey(value);
    }
  });
  return obj;
};
function addAbsolutePositions(hits, hitsPerPage, page) {
  return hits.map(function (hit, index) {
    return _objectSpread({}, hit, {
      __position: hitsPerPage * page + index + 1
    });
  });
}
function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }

  return hits.map(function (hit) {
    return _objectSpread({}, hit, {
      __queryID: queryID
    });
  });
}
function objectHasKeys$4(object) {
  return object && Object.keys(object).length > 0;
} // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620

function omit$4(source, excluded) {
  if (source === null || source === undefined) {
    return {};
  }

  var target = {};
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var _key = sourceKeys[i];

    if (excluded.indexOf(_key) >= 0) {
      // eslint-disable-next-line no-continue
      continue;
    }

    target[_key] = source[_key];
  }

  return target;
}

var instantSearchContext = React.createContext({
  onInternalStateUpdate: function onInternalStateUpdate() {
    return undefined;
  },
  createHrefForState: function createHrefForState() {
    return '#';
  },
  onSearchForFacetValues: function onSearchForFacetValues() {
    return undefined;
  },
  onSearchStateChange: function onSearchStateChange() {
    return undefined;
  },
  onSearchParameters: function onSearchParameters() {
    return undefined;
  },
  store: {},
  widgetsManager: {},
  mainTargetedIndex: ''
});
var InstantSearchConsumer = instantSearchContext.Consumer,
    InstantSearchProvider = instantSearchContext.Provider;

var _createContext = React.createContext(undefined),
    IndexConsumer = _createContext.Consumer,
    IndexProvider = _createContext.Provider;

/**
 * Connectors are the HOC used to transform React components
 * into InstantSearch widgets.
 * In order to simplify the construction of such connectors
 * `createConnector` takes a description and transform it into
 * a connector.
 * @param {ConnectorDescription} connectorDesc the description of the connector
 * @return {Connector} a function that wraps a component into
 * an instantsearch connected one.
 */

function createConnectorWithoutContext(connectorDesc) {
  if (!connectorDesc.displayName) {
    throw new Error('`createConnector` requires you to provide a `displayName` property.');
  }

  var isWidget = typeof connectorDesc.getSearchParameters === 'function' || typeof connectorDesc.getMetadata === 'function' || typeof connectorDesc.transitionState === 'function';
  return function (Composed) {
    var Connector = /*#__PURE__*/function (_Component) {
      _inherits(Connector, _Component);

      function Connector(props) {
        var _this;

        _classCallCheck(this, Connector);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this, props));

        _defineProperty$1(_assertThisInitialized(_this), "unsubscribe", void 0);

        _defineProperty$1(_assertThisInitialized(_this), "unregisterWidget", void 0);

        _defineProperty$1(_assertThisInitialized(_this), "isUnmounting", false);

        _defineProperty$1(_assertThisInitialized(_this), "state", {
          providedProps: _this.getProvidedProps(_this.props)
        });

        _defineProperty$1(_assertThisInitialized(_this), "refine", function () {
          var _ref;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.props.contextValue.onInternalStateUpdate( // refine will always be defined here because the prop is only given conditionally
          (_ref = connectorDesc.refine).call.apply(_ref, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        _defineProperty$1(_assertThisInitialized(_this), "createURL", function () {
          var _ref2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.props.contextValue.createHrefForState( // refine will always be defined here because the prop is only given conditionally
          (_ref2 = connectorDesc.refine).call.apply(_ref2, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        _defineProperty$1(_assertThisInitialized(_this), "searchForFacetValues", function () {
          var _ref3;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this.props.contextValue.onSearchForFacetValues( // searchForFacetValues will always be defined here because the prop is only given conditionally
          (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        if (connectorDesc.getSearchParameters) {
          _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(_assertThisInitialized(_this)), {
            ais: _this.props.contextValue,
            multiIndexContext: _this.props.indexContextValue
          }, _this.props, connectorDesc.getMetadata && connectorDesc.getMetadata.bind(_assertThisInitialized(_this)));
        }

        return _this;
      }

      _createClass(Connector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribe = this.props.contextValue.store.subscribe(function () {
            if (!_this2.isUnmounting) {
              _this2.setState({
                providedProps: _this2.getProvidedProps(_this2.props)
              });
            }
          });

          if (isWidget) {
            this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (typeof connectorDesc.shouldComponentUpdate === 'function') {
            return connectorDesc.shouldComponentUpdate.call(this, this.props, nextProps, this.state, nextState);
          }

          var propsEqual = shallowEqual(this.props, nextProps);

          if (this.state.providedProps === null || nextState.providedProps === null) {
            if (this.state.providedProps === nextState.providedProps) {
              return !propsEqual;
            }

            return true;
          }

          return !propsEqual || !shallowEqual(this.state.providedProps, nextState.providedProps);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (!reactFastCompare(prevProps, this.props)) {
            this.setState({
              providedProps: this.getProvidedProps(this.props)
            });

            if (isWidget) {
              this.props.contextValue.widgetsManager.update();

              if (typeof connectorDesc.transitionState === 'function') {
                this.props.contextValue.onSearchStateChange(connectorDesc.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets));
              }
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isUnmounting = true;

          if (this.unsubscribe) {
            this.unsubscribe();
          }

          if (this.unregisterWidget) {
            this.unregisterWidget();

            if (typeof connectorDesc.cleanUp === 'function') {
              var nextState = connectorDesc.cleanUp.call(this, this.props, this.props.contextValue.store.getState().widgets);
              this.props.contextValue.store.setState(_objectSpread({}, this.props.contextValue.store.getState(), {
                widgets: nextState
              }));
              this.props.contextValue.onSearchStateChange(removeEmptyKey(nextState));
            }
          }
        }
      }, {
        key: "getProvidedProps",
        value: function getProvidedProps(props) {
          var _this$props$contextVa = this.props.contextValue.store.getState(),
              widgets = _this$props$contextVa.widgets,
              results = _this$props$contextVa.results,
              resultsFacetValues = _this$props$contextVa.resultsFacetValues,
              searching = _this$props$contextVa.searching,
              searchingForFacetValues = _this$props$contextVa.searchingForFacetValues,
              isSearchStalled = _this$props$contextVa.isSearchStalled,
              metadata = _this$props$contextVa.metadata,
              error = _this$props$contextVa.error;

          var searchResults = {
            results: results,
            searching: searching,
            searchingForFacetValues: searchingForFacetValues,
            isSearchStalled: isSearchStalled,
            error: error
          };
          return connectorDesc.getProvidedProps.call(this, props, widgets, searchResults, metadata, // @MAJOR: move this attribute on the `searchResults` it doesn't
          // makes sense to have it into a separate argument. The search
          // flags are on the object why not the results?
          resultsFacetValues);
        }
      }, {
        key: "getSearchParameters",
        value: function getSearchParameters(searchParameters) {
          if (typeof connectorDesc.getSearchParameters === 'function') {
            return connectorDesc.getSearchParameters.call(this, searchParameters, this.props, this.props.contextValue.store.getState().widgets);
          }

          return null;
        }
      }, {
        key: "getMetadata",
        value: function getMetadata(nextWidgetsState) {
          if (typeof connectorDesc.getMetadata === 'function') {
            return connectorDesc.getMetadata.call(this, this.props, nextWidgetsState);
          }

          return {};
        }
      }, {
        key: "transitionState",
        value: function transitionState(prevWidgetsState, nextWidgetsState) {
          if (typeof connectorDesc.transitionState === 'function') {
            return connectorDesc.transitionState.call(this, this.props, prevWidgetsState, nextWidgetsState);
          }

          return nextWidgetsState;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props;
              _this$props.contextValue;
              var props = _objectWithoutProperties(_this$props, ["contextValue"]);

          var providedProps = this.state.providedProps;

          if (providedProps === null) {
            return null;
          }

          var refineProps = typeof connectorDesc.refine === 'function' ? {
            refine: this.refine,
            createURL: this.createURL
          } : {};
          var searchForFacetValuesProps = typeof connectorDesc.searchForFacetValues === 'function' ? {
            searchForItems: this.searchForFacetValues
          } : {};
          return React__default['default'].createElement(Composed, _extends$1({}, props, providedProps, refineProps, searchForFacetValuesProps));
        }
      }]);

      return Connector;
    }(React.Component);

    _defineProperty$1(Connector, "displayName", "".concat(connectorDesc.displayName, "(").concat(getDisplayName(Composed), ")"));

    _defineProperty$1(Connector, "propTypes", connectorDesc.propTypes);

    _defineProperty$1(Connector, "defaultProps", connectorDesc.defaultProps);

    return Connector;
  };
}

var createConnectorWithContext = function createConnectorWithContext(connectorDesc) {
  return function (Composed) {
    var Connector = createConnectorWithoutContext(connectorDesc)(Composed);

    var ConnectorWrapper = function ConnectorWrapper(props) {
      return React__default['default'].createElement(InstantSearchConsumer, null, function (contextValue) {
        return React__default['default'].createElement(IndexConsumer, null, function (indexContextValue) {
          return React__default['default'].createElement(Connector, _extends$1({
            contextValue: contextValue,
            indexContextValue: indexContextValue
          }, props));
        });
      });
    };

    return ConnectorWrapper;
  };
};

var createConnector = createConnectorWithContext;

var HIGHLIGHT_TAGS = {
  highlightPreTag: "<ais-highlight-0000000000>",
  highlightPostTag: "</ais-highlight-0000000000>"
};

var version$2 = '6.10.3';

function getIndexId(context) {
  return hasMultipleIndices(context) ? context.multiIndexContext.targetedIndex : context.ais.mainTargetedIndex;
}
function getResults(searchResults, context) {
  if (searchResults.results) {
    if (searchResults.results.hits) {
      return searchResults.results;
    }

    var indexId = getIndexId(context);

    if (searchResults.results[indexId]) {
      return searchResults.results[indexId];
    }
  }

  return null;
}
function hasMultipleIndices(context) {
  return context && context.multiIndexContext;
} // eslint-disable-next-line max-params

function refineValue(searchState, nextRefinement, context, resetPage, namespace) {
  if (hasMultipleIndices(context)) {
    var indexId = getIndexId(context);
    return namespace ? refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) : refineMultiIndex(searchState, nextRefinement, indexId, resetPage);
  } else {
    // When we have a multi index page with shared widgets we should also
    // reset their page to 1 if the resetPage is provided. Otherwise the
    // indices will always be reset
    // see: https://github.com/algolia/react-instantsearch/issues/310
    // see: https://github.com/algolia/react-instantsearch/issues/637
    if (searchState.indices && resetPage) {
      Object.keys(searchState.indices).forEach(function (targetedIndex) {
        searchState = refineValue(searchState, {
          page: 1
        }, {
          multiIndexContext: {
            targetedIndex: targetedIndex
          }
        }, true, namespace);
      });
    }

    return namespace ? refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) : refineSingleIndex(searchState, nextRefinement, resetPage);
  }
}

function refineMultiIndex(searchState, nextRefinement, indexId, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? _objectSpread({}, searchState.indices, _defineProperty$1({}, indexId, _objectSpread({}, searchState.indices[indexId], nextRefinement, page))) : _objectSpread({}, searchState.indices, _defineProperty$1({}, indexId, _objectSpread({}, nextRefinement, page)));
  return _objectSpread({}, searchState, {
    indices: state
  });
}

function refineSingleIndex(searchState, nextRefinement, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return _objectSpread({}, searchState, nextRefinement, page);
} // eslint-disable-next-line max-params


function refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) {
  var _objectSpread4;

  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? _objectSpread({}, searchState.indices, _defineProperty$1({}, indexId, _objectSpread({}, searchState.indices[indexId], (_objectSpread4 = {}, _defineProperty$1(_objectSpread4, namespace, _objectSpread({}, searchState.indices[indexId][namespace], nextRefinement)), _defineProperty$1(_objectSpread4, "page", 1), _objectSpread4)))) : _objectSpread({}, searchState.indices, _defineProperty$1({}, indexId, _objectSpread(_defineProperty$1({}, namespace, nextRefinement), page)));
  return _objectSpread({}, searchState, {
    indices: state
  });
}

function refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return _objectSpread({}, searchState, _defineProperty$1({}, namespace, _objectSpread({}, searchState[namespace], nextRefinement)), page);
}

function getNamespaceAndAttributeName(id) {
  var parts = id.match(/^([^.]*)\.(.*)/);
  var namespace = parts && parts[1];
  var attributeName = parts && parts[2];
  return {
    namespace: namespace,
    attributeName: attributeName
  };
}

function hasRefinements(_ref) {
  var multiIndex = _ref.multiIndex,
      indexId = _ref.indexId,
      namespace = _ref.namespace,
      attributeName = _ref.attributeName,
      id = _ref.id,
      searchState = _ref.searchState;

  if (multiIndex && namespace) {
    return searchState.indices && searchState.indices[indexId] && searchState.indices[indexId][namespace] && Object.hasOwnProperty.call(searchState.indices[indexId][namespace], attributeName);
  }

  if (multiIndex) {
    return searchState.indices && searchState.indices[indexId] && Object.hasOwnProperty.call(searchState.indices[indexId], id);
  }

  if (namespace) {
    return searchState[namespace] && Object.hasOwnProperty.call(searchState[namespace], attributeName);
  }

  return Object.hasOwnProperty.call(searchState, id);
}

function getRefinements(_ref2) {
  var multiIndex = _ref2.multiIndex,
      indexId = _ref2.indexId,
      namespace = _ref2.namespace,
      attributeName = _ref2.attributeName,
      id = _ref2.id,
      searchState = _ref2.searchState;

  if (multiIndex && namespace) {
    return searchState.indices[indexId][namespace][attributeName];
  }

  if (multiIndex) {
    return searchState.indices[indexId][id];
  }

  if (namespace) {
    return searchState[namespace][attributeName];
  }

  return searchState[id];
}

function getCurrentRefinementValue(props, searchState, context, id, defaultValue) {
  var indexId = getIndexId(context);

  var _getNamespaceAndAttri = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri.namespace,
      attributeName = _getNamespaceAndAttri.attributeName;

  var multiIndex = hasMultipleIndices(context);
  var args = {
    multiIndex: multiIndex,
    indexId: indexId,
    namespace: namespace,
    attributeName: attributeName,
    id: id,
    searchState: searchState
  };
  var hasRefinementsValue = hasRefinements(args);

  if (hasRefinementsValue) {
    return getRefinements(args);
  }

  if (props.defaultRefinement) {
    return props.defaultRefinement;
  }

  return defaultValue;
}
function cleanUpValue(searchState, context, id) {
  var indexId = getIndexId(context);

  var _getNamespaceAndAttri2 = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri2.namespace,
      attributeName = _getNamespaceAndAttri2.attributeName;

  if (hasMultipleIndices(context) && Boolean(searchState.indices)) {
    return cleanUpValueWithMultiIndex({
      attribute: attributeName,
      searchState: searchState,
      indexId: indexId,
      id: id,
      namespace: namespace
    });
  }

  return cleanUpValueWithSingleIndex({
    attribute: attributeName,
    searchState: searchState,
    id: id,
    namespace: namespace
  });
}

function cleanUpValueWithSingleIndex(_ref3) {
  var searchState = _ref3.searchState,
      id = _ref3.id,
      namespace = _ref3.namespace,
      attribute = _ref3.attribute;

  if (namespace) {
    return _objectSpread({}, searchState, _defineProperty$1({}, namespace, omit$4(searchState[namespace], [attribute])));
  }

  return omit$4(searchState, [id]);
}

function cleanUpValueWithMultiIndex(_ref4) {
  var searchState = _ref4.searchState,
      indexId = _ref4.indexId,
      id = _ref4.id,
      namespace = _ref4.namespace,
      attribute = _ref4.attribute;
  var indexSearchState = searchState.indices[indexId];

  if (namespace && indexSearchState) {
    return _objectSpread({}, searchState, {
      indices: _objectSpread({}, searchState.indices, _defineProperty$1({}, indexId, _objectSpread({}, indexSearchState, _defineProperty$1({}, namespace, omit$4(indexSearchState[namespace], [attribute])))))
    });
  }

  if (indexSearchState) {
    return _objectSpread({}, searchState, {
      indices: _objectSpread({}, searchState.indices, _defineProperty$1({}, indexId, omit$4(indexSearchState, [id])))
    });
  }

  return searchState;
}

function getId$1() {
  return 'configure';
}

var connectConfigure = createConnector({
  displayName: 'AlgoliaConfigure',
  getProvidedProps: function getProvidedProps() {
    return {};
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    props.children;
        props.contextValue;
        props.indexContextValue;
        var items = _objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    return searchParameters.setQueryParameters(items);
  },
  transitionState: function transitionState(props, prevSearchState, nextSearchState) {
    var id = getId$1();

    props.children;
        props.contextValue;
        props.indexContextValue;
        var items = _objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    var propKeys = Object.keys(props);
    var nonPresentKeys = this._props ? Object.keys(this._props).filter(function (prop) {
      return propKeys.indexOf(prop) === -1;
    }) : [];
    this._props = props;

    var nextValue = _defineProperty$1({}, id, _objectSpread({}, omit$4(nextSearchState[id], nonPresentKeys), items));

    return refineValue(nextSearchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    var id = getId$1();
    var indexId = getIndexId({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var subState = hasMultipleIndices({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) && searchState.indices ? searchState.indices[indexId] : searchState;
    var configureKeys = subState && subState[id] ? Object.keys(subState[id]) : [];
    var configureState = configureKeys.reduce(function (acc, item) {
      if (!props[item]) {
        acc[item] = subState[id][item];
      }

      return acc;
    }, {});

    var nextValue = _defineProperty$1({}, id, configureState);

    return refineValue(searchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  }
});

/**
 * Configure is a widget that lets you provide raw search parameters
 * to the Algolia API.
 *
 * Any of the props added to this widget will be forwarded to Algolia. For more information
 * on the different parameters that can be set, have a look at the
 * [reference](https://www.algolia.com/doc/api-client/javascript/search#search-parameters).
 *
 * This widget can be used either with react-dom and react-native. It will not render anything
 * on screen, only configure some parameters.
 *
 * Read more in the [Search parameters](guide/Search_parameters.html) guide.
 * @name Configure
 * @kind widget
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <Hits />
 *   </InstantSearch>
 * );
 */

var Configure = connectConfigure(function Configure() {
  return null;
});

function clone(value) {
  if (typeof value === 'object' && value !== null) {
    return _merge(Array.isArray(value) ? [] : {}, value);
  }

  return value;
}

function isObjectOrArrayOrFunction(value) {
  return typeof value === 'function' || Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]';
}

function _merge(target, source) {
  if (target === source) {
    return target;
  }

  for (var key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      continue;
    }

    var sourceVal = source[key];
    var targetVal = target[key];

    if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
      continue;
    }

    if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {
      target[key] = _merge(targetVal, sourceVal);
    } else {
      target[key] = clone(sourceVal);
    }
  }

  return target;
}
/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */


function merge$4(target) {
  if (!isObjectOrArrayOrFunction(target)) {
    target = {};
  }

  for (var i = 1, l = arguments.length; i < l; i++) {
    var source = arguments[i];

    if (isObjectOrArrayOrFunction(source)) {
      _merge(target, source);
    }
  }

  return target;
}

var merge_1 = merge$4;

// it also preserve keys order

var defaultsPure$3 = function defaultsPure() {
  var sources = Array.prototype.slice.call(arguments);
  return sources.reduceRight(function (acc, source) {
    Object.keys(Object(source)).forEach(function (key) {
      if (source[key] === undefined) {
        return;
      }

      if (acc[key] !== undefined) {
        // remove if already added, so that we can add it in correct order
        delete acc[key];
      }

      acc[key] = source[key];
    });
    return acc;
  }, {});
};

function intersection$1(arr1, arr2) {
  return arr1.filter(function (value, index) {
    return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index
    /* skips duplicates */
    ;
  });
}

var intersection_1 = intersection$1;

var find$4 = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }
};

function valToNumber$1(v) {
  if (typeof v === 'number') {
    return v;
  } else if (typeof v === 'string') {
    return parseFloat(v);
  } else if (Array.isArray(v)) {
    return v.map(valToNumber$1);
  }

  throw new Error('The value should be a number, a parsable string or an array of those.');
}

var valToNumber_1 = valToNumber$1;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source === null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key;
  var i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var omit$3 = _objectWithoutPropertiesLoose;

function objectHasKeys$3(obj) {
  return obj && Object.keys(obj).length > 0;
}

var objectHasKeys_1 = objectHasKeys$3;

var isValidUserToken$1 = function isValidUserToken(userToken) {
  if (userToken === null) {
    return false;
  }

  return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};

/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */

var defaultsPure$2 = defaultsPure$3;

var omit$2 = omit$3;

var objectHasKeys$2 = objectHasKeys_1;

var lib = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function addRefinement(refinementList, attribute, value) {
    if (lib.isRefined(refinementList, attribute, value)) {
      return refinementList;
    }

    var valueAsString = '' + value;
    var facetRefinement = !refinementList[attribute] ? [valueAsString] : refinementList[attribute].concat(valueAsString);
    var mod = {};
    mod[attribute] = facetRefinement;
    return defaultsPure$2({}, mod, refinementList);
  },

  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function removeRefinement(refinementList, attribute, value) {
    if (value === undefined) {
      // we use the "filter" form of clearRefinement, since it leaves empty values as-is
      // the form with a string will remove the attribute completely
      return lib.clearRefinement(refinementList, function (v, f) {
        return attribute === f;
      });
    }

    var valueAsString = '' + value;
    return lib.clearRefinement(refinementList, function (v, f) {
      return attribute === f && valueAsString === v;
    });
  },

  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
    if (value === undefined) throw new Error('toggleRefinement should be used with a value');

    if (lib.isRefined(refinementList, attribute, value)) {
      return lib.removeRefinement(refinementList, attribute, value);
    }

    return lib.addRefinement(refinementList, attribute, value);
  },

  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
    if (attribute === undefined) {
      if (!objectHasKeys$2(refinementList)) {
        return refinementList;
      }

      return {};
    } else if (typeof attribute === 'string') {
      return omit$2(refinementList, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;
      var newRefinementList = Object.keys(refinementList).reduce(function (memo, key) {
        var values = refinementList[key] || [];
        var facetList = values.filter(function (value) {
          return !attribute(value, key, refinementType);
        });

        if (facetList.length !== values.length) {
          hasChanged = true;
        }

        memo[key] = facetList;
        return memo;
      }, {});
      if (hasChanged) return newRefinementList;
      return refinementList;
    }
  },

  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */
  isRefined: function isRefined(refinementList, attribute, refinementValue) {
    var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;

    if (refinementValue === undefined || !containsRefinements) {
      return containsRefinements;
    }

    var refinementValueAsString = '' + refinementValue;
    return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
  }
};
var RefinementList$1 = lib;

var merge$3 = merge_1;

var defaultsPure$1 = defaultsPure$3;

var intersection = intersection_1;

var find$3 = find$4;

var valToNumber = valToNumber_1;

var omit$1 = omit$3;

var objectHasKeys$1 = objectHasKeys_1;

var isValidUserToken = isValidUserToken$1;

var RefinementList = RefinementList$1;
/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 */


function isEqualNumericRefinement(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every(function (el, i) {
      return isEqualNumericRefinement(b[i], el);
    });
  }

  return a === b;
}
/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */


function findArray(array, searchedValue) {
  return find$3(array, function (currentValue) {
    return isEqualNumericRefinement(currentValue, searchedValue);
  });
}
/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */

/**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */

/**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */


function SearchParameters$2(newParameters) {
  var params = newParameters ? SearchParameters$2._parseNumbers(newParameters) : {};

  if (params.userToken !== undefined && !isValidUserToken(params.userToken)) {
    console.warn('[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}');
  }
  /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */


  this.facets = params.facets || [];
  /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */

  this.disjunctiveFacets = params.disjunctiveFacets || [];
  /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */

  this.hierarchicalFacets = params.hierarchicalFacets || []; // Refinements

  /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */

  this.facetsRefinements = params.facetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */

  this.facetsExcludes = params.facetsExcludes || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */

  this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */

  this.numericRefinements = params.numericRefinements || {};
  /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */

  this.tagRefinements = params.tagRefinements || [];
  /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */

  this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
  var self = this;
  Object.keys(params).forEach(function (paramName) {
    var isKeyKnown = SearchParameters$2.PARAMETERS.indexOf(paramName) !== -1;
    var isValueDefined = params[paramName] !== undefined;

    if (!isKeyKnown && isValueDefined) {
      self[paramName] = params[paramName];
    }
  });
}
/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */


SearchParameters$2.PARAMETERS = Object.keys(new SearchParameters$2());
/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */

SearchParameters$2._parseNumbers = function (partialState) {
  // Do not reparse numbers in SearchParameters, they ought to be parsed already
  if (partialState instanceof SearchParameters$2) return partialState;
  var numbers = {};
  var numberKeys = ['aroundPrecision', 'aroundRadius', 'getRankingInfo', 'minWordSizefor2Typos', 'minWordSizefor1Typo', 'page', 'maxValuesPerFacet', 'distinct', 'minimumAroundRadius', 'hitsPerPage', 'minProximity'];
  numberKeys.forEach(function (k) {
    var value = partialState[k];

    if (typeof value === 'string') {
      var parsedValue = parseFloat(value); // global isNaN is ok to use here, value is only number or NaN

      numbers[k] = isNaN(parsedValue) ? value : parsedValue;
    }
  }); // there's two formats of insideBoundingBox, we need to parse
  // the one which is an array of float geo rectangles

  if (Array.isArray(partialState.insideBoundingBox)) {
    numbers.insideBoundingBox = partialState.insideBoundingBox.map(function (geoRect) {
      if (Array.isArray(geoRect)) {
        return geoRect.map(function (value) {
          return parseFloat(value);
        });
      }

      return geoRect;
    });
  }

  if (partialState.numericRefinements) {
    var numericRefinements = {};
    Object.keys(partialState.numericRefinements).forEach(function (attribute) {
      var operators = partialState.numericRefinements[attribute] || {};
      numericRefinements[attribute] = {};
      Object.keys(operators).forEach(function (operator) {
        var values = operators[operator];
        var parsedValues = values.map(function (v) {
          if (Array.isArray(v)) {
            return v.map(function (vPrime) {
              if (typeof vPrime === 'string') {
                return parseFloat(vPrime);
              }

              return vPrime;
            });
          } else if (typeof v === 'string') {
            return parseFloat(v);
          }

          return v;
        });
        numericRefinements[attribute][operator] = parsedValues;
      });
    });
    numbers.numericRefinements = numericRefinements;
  }

  return merge$3({}, partialState, numbers);
};
/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */


SearchParameters$2.make = function makeSearchParameters(newParameters) {
  var instance = new SearchParameters$2(newParameters);
  var hierarchicalFacets = newParameters.hierarchicalFacets || [];
  hierarchicalFacets.forEach(function (facet) {
    if (facet.rootPath) {
      var currentRefinement = instance.getHierarchicalRefinement(facet.name);

      if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
        instance = instance.clearRefinements(facet.name);
      } // get it again in case it has been cleared


      currentRefinement = instance.getHierarchicalRefinement(facet.name);

      if (currentRefinement.length === 0) {
        instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
      }
    }
  });
  return instance;
};
/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */


SearchParameters$2.validate = function (currentState, parameters) {
  var params = parameters || {};

  if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
    return new Error('[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' + 'an error, if it is really what you want, you should first clear the tags with clearTags method.');
  }

  if (currentState.tagRefinements.length > 0 && params.tagFilters) {
    return new Error('[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' + 'an error, if it is not, you should first clear the tags with clearTags method.');
  }

  if (currentState.numericFilters && params.numericRefinements && objectHasKeys$1(params.numericRefinements)) {
    return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
  }

  if (objectHasKeys$1(currentState.numericRefinements) && params.numericFilters) {
    return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
  }

  return null;
};

SearchParameters$2.prototype = {
  constructor: SearchParameters$2,

  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */
  clearRefinements: function clearRefinements(attribute) {
    var patch = {
      numericRefinements: this._clearNumericRefinements(attribute),
      facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, 'conjunctiveFacet'),
      facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, 'exclude'),
      disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, 'disjunctiveFacet'),
      hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, 'hierarchicalFacet')
    };

    if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) {
      return this;
    }

    return this.setQueryParameters(patch);
  },

  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */
  clearTags: function clearTags() {
    if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
    return this.setQueryParameters({
      tagFilters: undefined,
      tagRefinements: []
    });
  },

  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */
  setIndex: function setIndex(index) {
    if (index === this.index) return this;
    return this.setQueryParameters({
      index: index
    });
  },

  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */
  setQuery: function setQuery(newQuery) {
    if (newQuery === this.query) return this;
    return this.setQueryParameters({
      query: newQuery
    });
  },

  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */
  setPage: function setPage(newPage) {
    if (newPage === this.page) return this;
    return this.setQueryParameters({
      page: newPage
    });
  },

  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */
  setFacets: function setFacets(facets) {
    return this.setQueryParameters({
      facets: facets
    });
  },

  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */
  setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
    return this.setQueryParameters({
      disjunctiveFacets: facets
    });
  },

  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */
  setHitsPerPage: function setHitsPerPage(n) {
    if (this.hitsPerPage === n) return this;
    return this.setQueryParameters({
      hitsPerPage: n
    });
  },

  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */
  setTypoTolerance: function setTypoTolerance(typoTolerance) {
    if (this.typoTolerance === typoTolerance) return this;
    return this.setQueryParameters({
      typoTolerance: typoTolerance
    });
  },

  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function (attribute, operator, v) {
    var value = valToNumber(v);
    if (this.isNumericRefined(attribute, operator, value)) return this;
    var mod = merge$3({}, this.numericRefinements);
    mod[attribute] = merge$3({}, mod[attribute]);

    if (mod[attribute][operator]) {
      // Array copy
      mod[attribute][operator] = mod[attribute][operator].slice(); // Add the element. Concat can't be used here because value can be an array.

      mod[attribute][operator].push(value);
    } else {
      mod[attribute][operator] = [value];
    }

    return this.setQueryParameters({
      numericRefinements: mod
    });
  },

  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function (facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }

    return this.facetsRefinements[facetName] || [];
  },

  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function (facetName) {
    if (!this.isDisjunctiveFacet(facetName)) {
      return [];
    }

    return this.disjunctiveFacetsRefinements[facetName] || [];
  },

  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function (facetName) {
    // we send an array but we currently do not support multiple
    // hierarchicalRefinements for a hierarchicalFacet
    return this.hierarchicalFacetsRefinements[facetName] || [];
  },

  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function (facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }

    return this.facetsExcludes[facetName] || [];
  },

  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */
  removeNumericRefinement: function (attribute, operator, paramValue) {
    if (paramValue !== undefined) {
      if (!this.isNumericRefined(attribute, operator, paramValue)) {
        return this;
      }

      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (value, key) {
          return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
        })
      });
    } else if (operator !== undefined) {
      if (!this.isNumericRefined(attribute, operator)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (value, key) {
          return key === attribute && value.op === operator;
        })
      });
    }

    if (!this.isNumericRefined(attribute)) return this;
    return this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function (value, key) {
        return key === attribute;
      })
    });
  },

  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */
  getNumericRefinements: function (facetName) {
    return this.numericRefinements[facetName] || {};
  },

  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  getNumericRefinement: function (attribute, operator) {
    return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
  },

  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */
  _clearNumericRefinements: function _clearNumericRefinements(attribute) {
    if (attribute === undefined) {
      if (!objectHasKeys$1(this.numericRefinements)) {
        return this.numericRefinements;
      }

      return {};
    } else if (typeof attribute === 'string') {
      return omit$1(this.numericRefinements, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;
      var numericRefinements = this.numericRefinements;
      var newNumericRefinements = Object.keys(numericRefinements).reduce(function (memo, key) {
        var operators = numericRefinements[key];
        var operatorList = {};
        operators = operators || {};
        Object.keys(operators).forEach(function (operator) {
          var values = operators[operator] || [];
          var outValues = [];
          values.forEach(function (value) {
            var predicateResult = attribute({
              val: value,
              op: operator
            }, key, 'numeric');
            if (!predicateResult) outValues.push(value);
          });

          if (outValues.length !== values.length) {
            hasChanged = true;
          }

          operatorList[operator] = outValues;
        });
        memo[key] = operatorList;
        return memo;
      }, {});
      if (hasChanged) return newNumericRefinements;
      return this.numericRefinements;
    }
  },

  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */
  addFacet: function addFacet(facet) {
    if (this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      facets: this.facets.concat([facet])
    });
  },

  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */
  addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
    if (this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([facet])
    });
  },

  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
    if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
      throw new Error('Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
    }

    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
    });
  },

  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addFacetRefinement: function addFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
    return this.setQueryParameters({
      facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
    });
  },

  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addExcludeRefinement: function addExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
    return this.setQueryParameters({
      facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
    });
  },

  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
    });
  },

  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */
  addTagRefinement: function addTagRefinement(tag) {
    if (this.isTagRefined(tag)) return this;
    var modification = {
      tagRefinements: this.tagRefinements.concat(tag)
    };
    return this.setQueryParameters(modification);
  },

  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */
  removeFacet: function removeFacet(facet) {
    if (!this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      facets: this.facets.filter(function (f) {
        return f !== facet;
      })
    });
  },

  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */
  removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
    if (!this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.filter(function (f) {
        return f !== facet;
      })
    });
  },

  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */
  removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
    if (!this.isHierarchicalFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.filter(function (f) {
        return f.name !== facet;
      })
    });
  },

  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */
  removeFacetRefinement: function removeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
    return this.setQueryParameters({
      facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
    });
  },

  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
    return this.setQueryParameters({
      facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
    });
  },

  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
    });
  },

  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */
  removeTagRefinement: function removeTagRefinement(tag) {
    if (!this.isTagRefined(tag)) return this;
    var modification = {
      tagRefinements: this.tagRefinements.filter(function (t) {
        return t !== tag;
      })
    };
    return this.setQueryParameters(modification);
  },

  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function toggleRefinement(facet, value) {
    return this.toggleFacetRefinement(facet, value);
  },

  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
    if (this.isHierarchicalFacet(facet)) {
      return this.toggleHierarchicalFacetRefinement(facet, value);
    } else if (this.isConjunctiveFacet(facet)) {
      return this.toggleConjunctiveFacetRefinement(facet, value);
    } else if (this.isDisjunctiveFacet(facet)) {
      return this.toggleDisjunctiveFacetRefinement(facet, value);
    }

    throw new Error('Cannot refine the undeclared facet ' + facet + '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
  },

  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
    });
  },

  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
    });
  },

  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
    });
  },

  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
    }

    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));

    var mod = {};
    var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && ( // remove current refinement:
    // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
    this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
    //  - refinement was 'beer > IPA > Flying dog'
    //  - call is toggleRefine('beer > IPA')
    //  - refinement should be `beer`
    this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);

    if (upOneOrMultipleLevel) {
      if (value.indexOf(separator) === -1) {
        // go back to root level
        mod[facet] = [];
      } else {
        mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
      }
    } else {
      mod[facet] = [value];
    }

    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure$1({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function (facet, path) {
    if (this.isHierarchicalFacetRefined(facet)) {
      throw new Error(facet + ' is already refined.');
    }

    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');
    }

    var mod = {};
    mod[facet] = [path];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure$1({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function (facet) {
    if (!this.isHierarchicalFacetRefined(facet)) {
      return this;
    }

    var mod = {};
    mod[facet] = [];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure$1({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */
  toggleTagRefinement: function toggleTagRefinement(tag) {
    if (this.isTagRefined(tag)) {
      return this.removeTagRefinement(tag);
    }

    return this.addTagRefinement(tag);
  },

  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isDisjunctiveFacet: function (facet) {
    return this.disjunctiveFacets.indexOf(facet) > -1;
  },

  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */
  isHierarchicalFacet: function (facetName) {
    return this.getHierarchicalFacetByName(facetName) !== undefined;
  },

  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isConjunctiveFacet: function (facet) {
    return this.facets.indexOf(facet) > -1;
  },

  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function isFacetRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }

    return RefinementList.isRefined(this.facetsRefinements, facet, value);
  },

  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function isExcludeRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }

    return RefinementList.isRefined(this.facetsExcludes, facet, value);
  },

  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      return false;
    }

    return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
  },

  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      return false;
    }

    var refinements = this.getHierarchicalRefinement(facet);

    if (!value) {
      return refinements.length > 0;
    }

    return refinements.indexOf(value) !== -1;
  },

  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function isNumericRefined(attribute, operator, value) {
    if (value === undefined && operator === undefined) {
      return !!this.numericRefinements[attribute];
    }

    var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;

    if (value === undefined || !isOperatorDefined) {
      return isOperatorDefined;
    }

    var parsedValue = valToNumber(value);
    var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
    return isOperatorDefined && isAttributeValueDefined;
  },

  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */
  isTagRefined: function isTagRefined(tag) {
    return this.tagRefinements.indexOf(tag) !== -1;
  },

  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
    var self = this; // attributes used for numeric filter can also be disjunctive

    var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function (facet) {
      return Object.keys(self.numericRefinements[facet]).length > 0;
    }), this.disjunctiveFacets);
    return Object.keys(this.disjunctiveFacetsRefinements).filter(function (facet) {
      return self.disjunctiveFacetsRefinements[facet].length > 0;
    }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
  },

  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
    var self = this;
    return intersection( // enforce the order between the two arrays,
    // so that refinement name index === hierarchical facet index
    this.hierarchicalFacets.map(function (facet) {
      return facet.name;
    }), Object.keys(this.hierarchicalFacetsRefinements).filter(function (facet) {
      return self.hierarchicalFacetsRefinements[facet].length > 0;
    }));
  },

  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */
  getUnrefinedDisjunctiveFacets: function () {
    var refinedFacets = this.getRefinedDisjunctiveFacets();
    return this.disjunctiveFacets.filter(function (f) {
      return refinedFacets.indexOf(f) === -1;
    });
  },
  managedParameters: ['index', 'facets', 'disjunctiveFacets', 'facetsRefinements', 'facetsExcludes', 'disjunctiveFacetsRefinements', 'numericRefinements', 'tagRefinements', 'hierarchicalFacets', 'hierarchicalFacetsRefinements'],
  getQueryParams: function getQueryParams() {
    var managedParameters = this.managedParameters;
    var queryParams = {};
    var self = this;
    Object.keys(this).forEach(function (paramName) {
      var paramValue = self[paramName];

      if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) {
        queryParams[paramName] = paramValue;
      }
    });
    return queryParams;
  },

  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function setParameter(parameter, value) {
    if (this[parameter] === value) return this;
    var modification = {};
    modification[parameter] = value;
    return this.setQueryParameters(modification);
  },

  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function setQueryParameters(params) {
    if (!params) return this;
    var error = SearchParameters$2.validate(this, params);

    if (error) {
      throw error;
    }

    var self = this;

    var nextWithNumbers = SearchParameters$2._parseNumbers(params);

    var previousPlainObject = Object.keys(this).reduce(function (acc, key) {
      acc[key] = self[key];
      return acc;
    }, {});
    var nextPlainObject = Object.keys(nextWithNumbers).reduce(function (previous, key) {
      var isPreviousValueDefined = previous[key] !== undefined;
      var isNextValueDefined = nextWithNumbers[key] !== undefined;

      if (isPreviousValueDefined && !isNextValueDefined) {
        return omit$1(previous, [key]);
      }

      if (isNextValueDefined) {
        previous[key] = nextWithNumbers[key];
      }

      return previous;
    }, previousPlainObject);
    return new this.constructor(nextPlainObject);
  },

  /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */
  resetPage: function () {
    if (this.page === undefined) {
      return this;
    }

    return this.setPage(0);
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function (hierarchicalFacet) {
    return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function (hierarchicalFacet) {
    return hierarchicalFacet.separator || ' > ';
  },

  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function (hierarchicalFacet) {
    return hierarchicalFacet.rootPath || null;
  },

  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function (hierarchicalFacet) {
    if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
      return hierarchicalFacet.showParentLevel;
    }

    return true;
  },

  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function (hierarchicalFacetName) {
    return find$3(this.hierarchicalFacets, function (f) {
      return f.name === hierarchicalFacetName;
    });
  },

  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function (facetName) {
    if (!this.isHierarchicalFacet(facetName)) {
      return [];
    }

    var refinement = this.getHierarchicalRefinement(facetName)[0];
    if (!refinement) return [];

    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));

    var path = refinement.split(separator);
    return path.map(function (part) {
      return part.trim();
    });
  },
  toString: function () {
    return JSON.stringify(this, null, 2);
  }
};
/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */

var SearchParameters_1 = SearchParameters$2;

function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined;
    var valIsNull = value === null;
    var othIsDefined = other !== undefined;
    var othIsNull = other === null;

    if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) {
      return 1;
    }

    if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) {
      return -1;
    }
  }

  return 0;
}
/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 */


function orderBy$2(collection, iteratees, orders) {
  if (!Array.isArray(collection)) {
    return [];
  }

  if (!Array.isArray(orders)) {
    orders = [];
  }

  var result = collection.map(function (value, index) {
    return {
      criteria: iteratees.map(function (iteratee) {
        return value[iteratee];
      }),
      index: index,
      value: value
    };
  });
  result.sort(function comparer(object, other) {
    var index = -1;

    while (++index < object.criteria.length) {
      var res = compareAscending(object.criteria[index], other.criteria[index]);

      if (res) {
        if (index >= orders.length) {
          return res;
        }

        if (orders[index] === 'desc') {
          return -res;
        }

        return res;
      }
    } // This ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.


    return object.index - other.index;
  });
  return result.map(function (res) {
    return res.value;
  });
}

var orderBy_1 = orderBy$2;

var compact$1 = function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
};

var findIndex$1 = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }

  return -1;
};

var find$2 = find$4;
/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */


var formatSort$1 = function formatSort(sortBy, defaults) {
  var defaultInstructions = (defaults || []).map(function (sort) {
    return sort.split(':');
  });
  return sortBy.reduce(function preparePredicate(out, sort) {
    var sortInstruction = sort.split(':');
    var matchingDefault = find$2(defaultInstructions, function (defaultInstruction) {
      return defaultInstruction[0] === sortInstruction[0];
    });

    if (sortInstruction.length > 1 || !matchingDefault) {
      out[0].push(sortInstruction[0]);
      out[1].push(sortInstruction[1]);
      return out;
    }

    out[0].push(matchingDefault[0]);
    out[1].push(matchingDefault[1]);
    return out;
  }, [[], []]);
};

var generateHierarchicalTree_1 = generateTrees;

var orderBy$1 = orderBy_1;

var find$1 = find$4;

var prepareHierarchicalFacetSortBy = formatSort$1;

function generateTrees(state) {
  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
    var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || '';

    var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);

    var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);

    var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
    var rootExhaustive = hierarchicalFacetResult.every(function (facetResult) {
      return facetResult.exhaustive;
    });
    var generateTreeFn = generateHierarchicalTree$1(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
    var results = hierarchicalFacetResult;

    if (hierarchicalRootPath) {
      results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
    }

    return results.reduce(generateTreeFn, {
      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
      count: null,
      // root level, no count
      isRefined: true,
      // root level, always refined
      path: null,
      // root level, no path
      exhaustive: rootExhaustive,
      data: null
    });
  };
}

function generateHierarchicalTree$1(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
  return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
    var parent = hierarchicalTree;

    if (currentHierarchicalLevel > 0) {
      var level = 0;
      parent = hierarchicalTree;

      while (level < currentHierarchicalLevel) {
        /**
         * @type {object[]]} hierarchical data
         */
        var data = parent && Array.isArray(parent.data) ? parent.data : [];
        parent = find$1(data, function (subtree) {
          return subtree.isRefined;
        });
        level++;
      }
    } // we found a refined parent, let's add current level data under it


    if (parent) {
      // filter values in case an object has multiple categories:
      //   {
      //     categories: {
      //       level0: ['beers', 'bières'],
      //       level1: ['beers > IPA', 'bières > Belges']
      //     }
      //   }
      //
      // If parent refinement is `beers`, then we do not want to have `bières > Belges`
      // showing up
      var picked = Object.keys(hierarchicalFacetResult.data).map(function (facetValue) {
        return [facetValue, hierarchicalFacetResult.data[facetValue]];
      }).filter(function (tuple) {
        var facetValue = tuple[0];
        return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
      });
      parent.data = orderBy$1(picked.map(function (tuple) {
        var facetValue = tuple[0];
        var facetCount = tuple[1];
        return format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, hierarchicalFacetResult.exhaustive);
      }), sortBy[0], sortBy[1]);
    }

    return hierarchicalTree;
  };
}

function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
  // we want the facetValue is a child of hierarchicalRootPath
  if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) {
    return false;
  } // we always want root levels (only when there is no prefix path)


  return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
  hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || // if current refinement is a root level and current facetValue is a root level,
  // keep the facetValue
  facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
  currentRefinement.indexOf(facetValue) === 0 || // facetValue is a child of the current parent, add it
  facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
}

function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
  var parts = facetValue.split(hierarchicalSeparator);
  return {
    name: parts[parts.length - 1].trim(),
    path: facetValue,
    count: facetCount,
    isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
    exhaustive: exhaustive,
    data: null
  };
}

var merge$2 = merge_1;

var defaultsPure = defaultsPure$3;

var orderBy = orderBy_1;

var compact = compact$1;

var find = find$4;

var findIndex = findIndex$1;

var formatSort = formatSort$1;

var generateHierarchicalTree = generateHierarchicalTree_1;
/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */

/**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */

/**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */

/**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */

/**
 * @param {string[]} attributes
 */


function getIndices(attributes) {
  var indices = {};
  attributes.forEach(function (val, idx) {
    indices[val] = idx;
  });
  return indices;
}

function assignFacetStats(dest, facetStats, key) {
  if (facetStats && facetStats[key]) {
    dest.stats = facetStats[key];
  }
}
/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */

/**
 * @param {HierarchicalFacet[]} hierarchicalFacets
 * @param {string} hierarchicalAttributeName
 */


function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
  return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
    var facetNames = hierarchicalFacet.attributes || [];
    return facetNames.indexOf(hierarchicalAttributeName) > -1;
  });
}
/*eslint-disable */

/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/

/*eslint-enable */


function SearchResults$2(state, results) {
  var mainSubResponse = results[0];
  this._rawResults = results;
  var self = this; // https://www.algolia.com/doc/api-reference/api-methods/search/#response

  Object.keys(mainSubResponse).forEach(function (key) {
    self[key] = mainSubResponse[key];
  });
  /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */

  /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */

  /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */

  /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */

  /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */

  /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */

  /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */

  /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */

  /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */

  /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */

  /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */

  /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */

  /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */

  /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * sum of the processing time of all the queries
   * @member {number}
   */

  this.processingTimeMS = results.reduce(function (sum, result) {
    return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
  }, 0);
  /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */

  this.disjunctiveFacets = [];
  /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */

  this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
    return [];
  });
  /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */

  this.facets = [];
  var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
  var facetsIndices = getIndices(state.facets);
  var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
  var nextDisjunctiveResult = 1; // Since we send request only for disjunctive facets that have been refined,
  // we get the facets information from the first, general, response.

  var mainFacets = mainSubResponse.facets || {};
  Object.keys(mainFacets).forEach(function (facetKey) {
    var facetValueObject = mainFacets[facetKey];
    var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);

    if (hierarchicalFacet) {
      // Place the hierarchicalFacet data at the correct index depending on
      // the attributes order that was defined at the helper initialization
      var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
      var idxAttributeName = findIndex(state.hierarchicalFacets, function (f) {
        return f.name === hierarchicalFacet.name;
      });
      self.hierarchicalFacets[idxAttributeName][facetIndex] = {
        attribute: facetKey,
        data: facetValueObject,
        exhaustive: mainSubResponse.exhaustiveFacetsCount
      };
    } else {
      var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
      var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
      var position;

      if (isFacetDisjunctive) {
        position = disjunctiveFacetsIndices[facetKey];
        self.disjunctiveFacets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
      }

      if (isFacetConjunctive) {
        position = facetsIndices[facetKey];
        self.facets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
      }
    }
  }); // Make sure we do not keep holes within the hierarchical facets

  this.hierarchicalFacets = compact(this.hierarchicalFacets); // aggregate the refined disjunctive facets

  disjunctiveFacets.forEach(function (disjunctiveFacet) {
    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets ? result.facets : {};
    var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet); // There should be only item in facets.

    Object.keys(facets).forEach(function (dfacet) {
      var facetResults = facets[dfacet];
      var position;

      if (hierarchicalFacet) {
        position = findIndex(state.hierarchicalFacets, function (f) {
          return f.name === hierarchicalFacet.name;
        });
        var attributeIndex = findIndex(self.hierarchicalFacets[position], function (f) {
          return f.attribute === dfacet;
        }); // previous refinements and no results so not able to find it

        if (attributeIndex === -1) {
          return;
        }

        self.hierarchicalFacets[position][attributeIndex].data = merge$2({}, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
      } else {
        position = disjunctiveFacetsIndices[dfacet];
        var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
        self.disjunctiveFacets[position] = {
          name: dfacet,
          data: defaultsPure({}, facetResults, dataFromMainRequest),
          exhaustive: result.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);

        if (state.disjunctiveFacetsRefinements[dfacet]) {
          state.disjunctiveFacetsRefinements[dfacet].forEach(function (refinementValue) {
            // add the disjunctive refinements if it is no more retrieved
            if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(refinementValue) > -1) {
              self.disjunctiveFacets[position].data[refinementValue] = 0;
            }
          });
        }
      }
    });
    nextDisjunctiveResult++;
  }); // if we have some root level values for hierarchical facets, merge them

  state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
    var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);

    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    var currentRefinement = state.getHierarchicalRefinement(refinedFacet); // if we are already at a root refinement (or no refinement at all), there is no
    // root level values request

    if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
      return;
    }

    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets ? result.facets : {};
    Object.keys(facets).forEach(function (dfacet) {
      var facetResults = facets[dfacet];
      var position = findIndex(state.hierarchicalFacets, function (f) {
        return f.name === hierarchicalFacet.name;
      });
      var attributeIndex = findIndex(self.hierarchicalFacets[position], function (f) {
        return f.attribute === dfacet;
      }); // previous refinements and no results so not able to find it

      if (attributeIndex === -1) {
        return;
      } // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
      // then the disjunctive values will be `beers` (count: 100),
      // but we do not want to display
      //   | beers (100)
      //     > IPA (5)
      // We want
      //   | beers (5)
      //     > IPA (5)


      var defaultData = {};

      if (currentRefinement.length > 0) {
        var root = currentRefinement[0].split(separator)[0];
        defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
      }

      self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
    });
    nextDisjunctiveResult++;
  }); // add the excludes

  Object.keys(state.facetsExcludes).forEach(function (facetName) {
    var excludes = state.facetsExcludes[facetName];
    var position = facetsIndices[facetName];
    self.facets[position] = {
      name: facetName,
      data: mainSubResponse.facets[facetName],
      exhaustive: mainSubResponse.exhaustiveFacetsCount
    };
    excludes.forEach(function (facetValue) {
      self.facets[position] = self.facets[position] || {
        name: facetName
      };
      self.facets[position].data = self.facets[position].data || {};
      self.facets[position].data[facetValue] = 0;
    });
  });
  /**
   * @type {Array}
   */

  this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
  /**
   * @type {Array}
   */

  this.facets = compact(this.facets);
  /**
   * @type {Array}
   */

  this.disjunctiveFacets = compact(this.disjunctiveFacets);
  this._state = state;
}
/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */


SearchResults$2.prototype.getFacetByName = function (name) {
  function predicate(facet) {
    return facet.name === name;
  }

  return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
};
/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */


function extractNormalizedFacetValues(results, attribute) {
  function predicate(facet) {
    return facet.name === attribute;
  }

  if (results._state.isConjunctiveFacet(attribute)) {
    var facet = find(results.facets, predicate);
    if (!facet) return [];
    return Object.keys(facet.data).map(function (name) {
      return {
        name: name,
        count: facet.data[name],
        isRefined: results._state.isFacetRefined(attribute, name),
        isExcluded: results._state.isExcludeRefined(attribute, name)
      };
    });
  } else if (results._state.isDisjunctiveFacet(attribute)) {
    var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
    if (!disjunctiveFacet) return [];
    return Object.keys(disjunctiveFacet.data).map(function (name) {
      return {
        name: name,
        count: disjunctiveFacet.data[name],
        isRefined: results._state.isDisjunctiveFacetRefined(attribute, name)
      };
    });
  } else if (results._state.isHierarchicalFacet(attribute)) {
    return find(results.hierarchicalFacets, predicate);
  }
}
/**
 * Sort nodes of a hierarchical facet results
 * @private
 * @param {HierarchicalFacet} node node to upon which we want to apply the sort
 */


function recSort(sortFn, node) {
  if (!node.data || node.data.length === 0) {
    return node;
  }

  var children = node.data.map(function (childNode) {
    return recSort(sortFn, childNode);
  });
  var sortedChildren = sortFn(children);
  var newNode = merge$2({}, node, {
    data: sortedChildren
  });
  return newNode;
}

SearchResults$2.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

function vanillaSortFn(order, data) {
  return data.sort(order);
}
/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */


SearchResults$2.prototype.getFacetValues = function (attribute, opts) {
  var facetValues = extractNormalizedFacetValues(this, attribute);

  if (!facetValues) {
    return undefined;
  }

  var options = defaultsPure({}, opts, {
    sortBy: SearchResults$2.DEFAULT_SORT
  });

  if (Array.isArray(options.sortBy)) {
    var order = formatSort(options.sortBy, SearchResults$2.DEFAULT_SORT);

    if (Array.isArray(facetValues)) {
      return orderBy(facetValues, order[0], order[1]);
    } // If facetValues is not an array, it's an object thus a hierarchical facet object


    return recSort(function (hierarchicalFacetValues) {
      return orderBy(hierarchicalFacetValues, order[0], order[1]);
    }, facetValues);
  } else if (typeof options.sortBy === 'function') {
    if (Array.isArray(facetValues)) {
      return facetValues.sort(options.sortBy);
    } // If facetValues is not an array, it's an object thus a hierarchical facet object


    return recSort(function (data) {
      return vanillaSortFn(options.sortBy, data);
    }, facetValues);
  }

  throw new Error('options.sortBy is optional but if defined it must be ' + 'either an array of string (predicates) or a sorting function');
};
/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */


SearchResults$2.prototype.getFacetStats = function (attribute) {
  if (this._state.isConjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.facets, attribute);
  } else if (this._state.isDisjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
  }

  return undefined;
};
/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */

/**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName
 */


function getFacetStatsIfAvailable(facetList, facetName) {
  var data = find(facetList, function (facet) {
    return facet.name === facetName;
  });
  return data && data.stats;
}
/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */


SearchResults$2.prototype.getRefinements = function () {
  var state = this._state;
  var results = this;
  var res = [];
  Object.keys(state.facetsRefinements).forEach(function (attributeName) {
    state.facetsRefinements[attributeName].forEach(function (name) {
      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
    });
  });
  Object.keys(state.facetsExcludes).forEach(function (attributeName) {
    state.facetsExcludes[attributeName].forEach(function (name) {
      res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
    });
  });
  Object.keys(state.disjunctiveFacetsRefinements).forEach(function (attributeName) {
    state.disjunctiveFacetsRefinements[attributeName].forEach(function (name) {
      res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
    });
  });
  Object.keys(state.hierarchicalFacetsRefinements).forEach(function (attributeName) {
    state.hierarchicalFacetsRefinements[attributeName].forEach(function (name) {
      res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
    });
  });
  Object.keys(state.numericRefinements).forEach(function (attributeName) {
    var operators = state.numericRefinements[attributeName];
    Object.keys(operators).forEach(function (operator) {
      operators[operator].forEach(function (value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: value,
          numericValue: value,
          operator: operator
        });
      });
    });
  });
  state.tagRefinements.forEach(function (name) {
    res.push({
      type: 'tag',
      attributeName: '_tags',
      name: name
    });
  });
  return res;
};
/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */

/**
 * @param {*} state
 * @param {*} type
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */


function getRefinement(state, type, attributeName, name, resultsFacets) {
  var facet = find(resultsFacets, function (f) {
    return f.name === attributeName;
  });
  var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
  var exhaustive = facet && facet.exhaustive || false;
  return {
    type: type,
    attributeName: attributeName,
    name: name,
    count: count,
    exhaustive: exhaustive
  };
}
/**
 * @param {*} state
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */


function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
  var facetDeclaration = state.getHierarchicalFacetByName(attributeName);

  var separator = state._getHierarchicalFacetSeparator(facetDeclaration);

  var split = name.split(separator);
  var rootFacet = find(resultsFacets, function (facet) {
    return facet.name === attributeName;
  });
  var facet = split.reduce(function (intermediateFacet, part) {
    var newFacet = intermediateFacet && find(intermediateFacet.data, function (f) {
      return f.name === part;
    });
    return newFacet !== undefined ? newFacet : intermediateFacet;
  }, rootFacet);
  var count = facet && facet.count || 0;
  var exhaustive = facet && facet.exhaustive || false;
  var path = facet && facet.path || '';
  return {
    type: 'hierarchical',
    attributeName: attributeName,
    name: path,
    count: count,
    exhaustive: exhaustive
  };
}

var SearchResults_1 = SearchResults$2;

function inherits$2(ctor, superCtor) {
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

var inherits_1 = inherits$2;

var events$1 = require$$0__default['default'];

var inherits$1 = inherits_1;
/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */


function DerivedHelper$1(mainHelper, fn) {
  this.main = mainHelper;
  this.fn = fn;
  this.lastResults = null;
}

inherits$1(DerivedHelper$1, events$1.EventEmitter);
/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */

DerivedHelper$1.prototype.detach = function () {
  this.removeAllListeners();
  this.main.detachDerivedHelper(this);
};

DerivedHelper$1.prototype.getModifiedState = function (parameters) {
  return this.fn(parameters);
};

var DerivedHelper_1 = DerivedHelper$1;

var merge$1 = merge_1;

var requestBuilder$1 = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */
  _getQueries: function getQueries(index, state) {
    var queries = []; // One query for the hits

    queries.push({
      indexName: index,
      params: requestBuilder$1._getHitsSearchParams(state)
    }); // One for each disjunctive facets

    state.getRefinedDisjunctiveFacets().forEach(function (refinedFacet) {
      queries.push({
        indexName: index,
        params: requestBuilder$1._getDisjunctiveFacetSearchParams(state, refinedFacet)
      });
    }); // maybe more to get the root level of hierarchical facets when activated

    state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
      var currentRefinement = state.getHierarchicalRefinement(refinedFacet); // if we are deeper than level 0 (starting from `beer > IPA`)
      // we want to get the root values

      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
        queries.push({
          indexName: index,
          params: requestBuilder$1._getDisjunctiveFacetSearchParams(state, refinedFacet, true)
        });
      }
    });
    return queries;
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */
  _getHitsSearchParams: function (state) {
    var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder$1._getHitsHierarchicalFacetsAttributes(state));

    var facetFilters = requestBuilder$1._getFacetFilters(state);

    var numericFilters = requestBuilder$1._getNumericFilters(state);

    var tagFilters = requestBuilder$1._getTagFilters(state);

    var additionalParams = {
      facets: facets,
      tagFilters: tagFilters
    };

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    return merge$1({}, state.getQueryParams(), additionalParams);
  },

  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */
  _getDisjunctiveFacetSearchParams: function (state, facet, hierarchicalRootLevel) {
    var facetFilters = requestBuilder$1._getFacetFilters(state, facet, hierarchicalRootLevel);

    var numericFilters = requestBuilder$1._getNumericFilters(state, facet);

    var tagFilters = requestBuilder$1._getTagFilters(state);

    var additionalParams = {
      hitsPerPage: 1,
      page: 0,
      attributesToRetrieve: [],
      attributesToHighlight: [],
      attributesToSnippet: [],
      tagFilters: tagFilters,
      analytics: false,
      clickAnalytics: false
    };
    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

    if (hierarchicalFacet) {
      additionalParams.facets = requestBuilder$1._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
    } else {
      additionalParams.facets = facet;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    return merge$1({}, state.getQueryParams(), additionalParams);
  },

  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function (state, facetName) {
    if (state.numericFilters) {
      return state.numericFilters;
    }

    var numericFilters = [];
    Object.keys(state.numericRefinements).forEach(function (attribute) {
      var operators = state.numericRefinements[attribute] || {};
      Object.keys(operators).forEach(function (operator) {
        var values = operators[operator] || [];

        if (facetName !== attribute) {
          values.forEach(function (value) {
            if (Array.isArray(value)) {
              var vs = value.map(function (v) {
                return attribute + operator + v;
              });
              numericFilters.push(vs);
            } else {
              numericFilters.push(attribute + operator + value);
            }
          });
        }
      });
    });
    return numericFilters;
  },

  /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */
  _getTagFilters: function (state) {
    if (state.tagFilters) {
      return state.tagFilters;
    }

    return state.tagRefinements.join(',');
  },

  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */
  _getFacetFilters: function (state, facet, hierarchicalRootLevel) {
    var facetFilters = [];
    var facetsRefinements = state.facetsRefinements || {};
    Object.keys(facetsRefinements).forEach(function (facetName) {
      var facetValues = facetsRefinements[facetName] || [];
      facetValues.forEach(function (facetValue) {
        facetFilters.push(facetName + ':' + facetValue);
      });
    });
    var facetsExcludes = state.facetsExcludes || {};
    Object.keys(facetsExcludes).forEach(function (facetName) {
      var facetValues = facetsExcludes[facetName] || [];
      facetValues.forEach(function (facetValue) {
        facetFilters.push(facetName + ':-' + facetValue);
      });
    });
    var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
    Object.keys(disjunctiveFacetsRefinements).forEach(function (facetName) {
      var facetValues = disjunctiveFacetsRefinements[facetName] || [];

      if (facetName === facet || !facetValues || facetValues.length === 0) {
        return;
      }

      var orFilters = [];
      facetValues.forEach(function (facetValue) {
        orFilters.push(facetName + ':' + facetValue);
      });
      facetFilters.push(orFilters);
    });
    var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
    Object.keys(hierarchicalFacetsRefinements).forEach(function (facetName) {
      var facetValues = hierarchicalFacetsRefinements[facetName] || [];
      var facetValue = facetValues[0];

      if (facetValue === undefined) {
        return;
      }

      var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);

      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);

      var attributeToRefine;
      var attributesIndex; // we ask for parent facet values only when the `facet` is the current hierarchical facet

      if (facet === facetName) {
        // if we are at the root level already, no need to ask for facet values, we get them from
        // the hits query
        if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) {
          return;
        }

        if (!rootPath) {
          attributesIndex = facetValue.split(separator).length - 2;
          facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
        } else {
          attributesIndex = rootPath.split(separator).length - 1;
          facetValue = rootPath;
        }

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      } else {
        attributesIndex = facetValue.split(separator).length - 1;
        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      }

      if (attributeToRefine) {
        facetFilters.push([attributeToRefine + ':' + facetValue]);
      }
    });
    return facetFilters;
  },
  _getHitsHierarchicalFacetsAttributes: function (state) {
    var out = [];
    return state.hierarchicalFacets.reduce( // ask for as much levels as there's hierarchical refinements
    function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
      var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0]; // if no refinement, ask for root level

      if (!hierarchicalRefinement) {
        allAttributes.push(hierarchicalFacet.attributes[0]);
        return allAttributes;
      }

      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      var level = hierarchicalRefinement.split(separator).length;
      var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
      return allAttributes.concat(newAttributes);
    }, out);
  },
  _getDisjunctiveHierarchicalFacetAttribute: function (state, hierarchicalFacet, rootLevel) {
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    if (rootLevel === true) {
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);

      var attributeIndex = 0;

      if (rootPath) {
        attributeIndex = rootPath.split(separator).length;
      }

      return [hierarchicalFacet.attributes[attributeIndex]];
    }

    var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || ''; // if refinement is 'beers > IPA > Flying dog',
    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

    var parentLevel = hierarchicalRefinement.split(separator).length - 1;
    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
  },
  getSearchForFacetQuery: function (facetName, query, maxFacetHits, state) {
    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
    var searchForFacetSearchParameters = {
      facetQuery: query,
      facetName: facetName
    };

    if (typeof maxFacetHits === 'number') {
      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
    }

    return merge$1({}, requestBuilder$1._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters);
  }
};
var requestBuilder_1 = requestBuilder$1;

var version$1 = '3.4.4';

var SearchParameters$1 = SearchParameters_1;

var SearchResults$1 = SearchResults_1;

var DerivedHelper = DerivedHelper_1;

var requestBuilder = requestBuilder_1;

var events = require$$0__default['default'];

var inherits = inherits_1;

var objectHasKeys = objectHasKeys_1;

var omit = omit$3;

var merge = merge_1;

var version = version$1;
/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */

/**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */

/**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */

/**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */

/**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */

/**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */

/**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */

/**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */


function AlgoliaSearchHelper$1(client, index, options) {
  if (typeof client.addAlgoliaAgent === 'function') {
    client.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters$1.make(opts);
  this.lastResults = null;
  this._queryId = 0;
  this._lastQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
}

inherits(AlgoliaSearchHelper$1, events.EventEmitter);
/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */

AlgoliaSearchHelper$1.prototype.search = function () {
  this._search({
    onlyWithDerivedHelpers: false
  });

  return this;
};

AlgoliaSearchHelper$1.prototype.searchOnlyWithDerivedHelpers = function () {
  this._search({
    onlyWithDerivedHelpers: true
  });

  return this;
};
/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */


AlgoliaSearchHelper$1.prototype.getQuery = function () {
  var state = this.state;
  return requestBuilder._getHitsSearchParams(state);
};
/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */


AlgoliaSearchHelper$1.prototype.searchOnce = function (options, cb) {
  var tempState = !options ? this.state : this.state.setQueryParameters(options);

  var queries = requestBuilder._getQueries(tempState.index, tempState);

  var self = this;
  this._currentNbQueries++;
  this.emit('searchOnce', {
    state: tempState
  });

  if (cb) {
    this.client.search(queries).then(function (content) {
      self._currentNbQueries--;

      if (self._currentNbQueries === 0) {
        self.emit('searchQueueEmpty');
      }

      cb(null, new SearchResults$1(tempState, content.results), tempState);
    }).catch(function (err) {
      self._currentNbQueries--;

      if (self._currentNbQueries === 0) {
        self.emit('searchQueueEmpty');
      }

      cb(err, null, tempState);
    });
    return undefined;
  }

  return this.client.search(queries).then(function (content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    return {
      content: new SearchResults$1(tempState, content.results),
      state: tempState,
      _originalResponse: content
    };
  }, function (e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};
/**
* Start the search for answers with the parameters set in the state.
* This method returns a promise.
* @param {Object} options - the options for answers API call
* @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
* @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
* @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
*
* @return {promise} the answer results
*/


AlgoliaSearchHelper$1.prototype.findAnswers = function (options) {
  var state = this.state;
  var derivedHelper = this.derivedHelpers[0];

  if (!derivedHelper) {
    return Promise.resolve([]);
  }

  var derivedState = derivedHelper.getModifiedState(state);
  var data = merge({
    attributesForPrediction: options.attributesForPrediction,
    nbHits: options.nbHits
  }, {
    params: omit(requestBuilder._getHitsSearchParams(derivedState), ['attributesToSnippet', 'hitsPerPage', 'restrictSearchableAttributes', 'snippetEllipsisText' // FIXME remove this line once the engine is fixed.
    ])
  });
  var errorMessage = 'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';

  if (typeof this.client.initIndex !== 'function') {
    throw new Error(errorMessage);
  }

  var index = this.client.initIndex(derivedState.index);

  if (typeof index.findAnswers !== 'function') {
    throw new Error(errorMessage);
  }

  return index.findAnswers(derivedState.query, options.queryLanguages, data);
};
/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */

/**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */

/**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */


AlgoliaSearchHelper$1.prototype.searchForFacetValues = function (facet, query, maxFacetHits, userState) {
  var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';

  if (!clientHasSFFV && typeof this.client.initIndex !== 'function') {
    throw new Error('search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues');
  }

  var state = this.state.setQueryParameters(userState || {});
  var isDisjunctive = state.isDisjunctiveFacet(facet);
  var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
  this._currentNbQueries++;
  var self = this;
  this.emit('searchForFacetValues', {
    state: state,
    facet: facet,
    query: query
  });
  var searchForFacetValuesPromise = clientHasSFFV ? this.client.searchForFacetValues([{
    indexName: state.index,
    params: algoliaQuery
  }]) : this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
  return searchForFacetValuesPromise.then(function addIsRefined(content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    content = Array.isArray(content) ? content[0] : content;
    content.facetHits.forEach(function (f) {
      f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.value) : state.isFacetRefined(facet, f.value);
    });
    return content;
  }, function (e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};
/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.setQuery = function (q) {
  this._change({
    state: this.state.resetPage().setQuery(q),
    isPageReset: true
  });

  return this;
};
/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */


AlgoliaSearchHelper$1.prototype.clearRefinements = function (name) {
  this._change({
    state: this.state.resetPage().clearRefinements(name),
    isPageReset: true
  });

  return this;
};
/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.clearTags = function () {
  this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: true
  });

  return this;
};
/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.addDisjunctiveFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */


AlgoliaSearchHelper$1.prototype.addDisjunctiveRefine = function () {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */


AlgoliaSearchHelper$1.prototype.addHierarchicalFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.addNumericRefinement = function (attribute, operator, value) {
  this._change({
    state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
    isPageReset: true
  });

  return this;
};
/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.addFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().addFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */


AlgoliaSearchHelper$1.prototype.addRefine = function () {
  return this.addFacetRefinement.apply(this, arguments);
};
/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.addFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().addExcludeRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */


AlgoliaSearchHelper$1.prototype.addExclude = function () {
  return this.addFacetExclusion.apply(this, arguments);
};
/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.addTag = function (tag) {
  this._change({
    state: this.state.resetPage().addTagRefinement(tag),
    isPageReset: true
  });

  return this;
};
/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.removeNumericRefinement = function (attribute, operator, value) {
  this._change({
    state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
    isPageReset: true
  });

  return this;
};
/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.removeDisjunctiveFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */


AlgoliaSearchHelper$1.prototype.removeDisjunctiveRefine = function () {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.removeHierarchicalFacetRefinement = function (facet) {
  this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
    isPageReset: true
  });

  return this;
};
/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.removeFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */


AlgoliaSearchHelper$1.prototype.removeRefine = function () {
  return this.removeFacetRefinement.apply(this, arguments);
};
/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.removeFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeExcludeRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */


AlgoliaSearchHelper$1.prototype.removeExclude = function () {
  return this.removeFacetExclusion.apply(this, arguments);
};
/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.removeTag = function (tag) {
  this._change({
    state: this.state.resetPage().removeTagRefinement(tag),
    isPageReset: true
  });

  return this;
};
/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.toggleFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */


AlgoliaSearchHelper$1.prototype.toggleExclude = function () {
  return this.toggleFacetExclusion.apply(this, arguments);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */


AlgoliaSearchHelper$1.prototype.toggleRefinement = function (facet, value) {
  return this.toggleFacetRefinement(facet, value);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.toggleFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().toggleFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */


AlgoliaSearchHelper$1.prototype.toggleRefine = function () {
  return this.toggleFacetRefinement.apply(this, arguments);
};
/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.toggleTag = function (tag) {
  this._change({
    state: this.state.resetPage().toggleTagRefinement(tag),
    isPageReset: true
  });

  return this;
};
/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */


AlgoliaSearchHelper$1.prototype.nextPage = function () {
  var page = this.state.page || 0;
  return this.setPage(page + 1);
};
/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */


AlgoliaSearchHelper$1.prototype.previousPage = function () {
  var page = this.state.page || 0;
  return this.setPage(page - 1);
};
/**
 * @private
 */


function setCurrentPage(page) {
  if (page < 0) throw new Error('Page requested below 0.');

  this._change({
    state: this.state.setPage(page),
    isPageReset: false
  });

  return this;
}
/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.setCurrentPage = setCurrentPage;
/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */

AlgoliaSearchHelper$1.prototype.setPage = setCurrentPage;
/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */

AlgoliaSearchHelper$1.prototype.setIndex = function (name) {
  this._change({
    state: this.state.resetPage().setIndex(name),
    isPageReset: true
  });

  return this;
};
/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */


AlgoliaSearchHelper$1.prototype.setQueryParameter = function (parameter, value) {
  this._change({
    state: this.state.resetPage().setQueryParameter(parameter, value),
    isPageReset: true
  });

  return this;
};
/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.setState = function (newState) {
  this._change({
    state: SearchParameters$1.make(newState),
    isPageReset: false
  });

  return this;
};
/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */


AlgoliaSearchHelper$1.prototype.overrideStateWithoutTriggeringChangeEvent = function (newState) {
  this.state = new SearchParameters$1(newState);
  return this;
};
/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */


AlgoliaSearchHelper$1.prototype.hasRefinements = function (attribute) {
  if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
    return true;
  } else if (this.state.isConjunctiveFacet(attribute)) {
    return this.state.isFacetRefined(attribute);
  } else if (this.state.isDisjunctiveFacet(attribute)) {
    return this.state.isDisjunctiveFacetRefined(attribute);
  } else if (this.state.isHierarchicalFacet(attribute)) {
    return this.state.isHierarchicalFacetRefined(attribute);
  } // there's currently no way to know that the user did call `addNumericRefinement` at some point
  // thus we cannot distinguish if there once was a numeric refinement that was cleared
  // so we will return false in every other situations to be consistent
  // while what we should do here is throw because we did not find the attribute in any type
  // of refinement


  return false;
};
/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */


AlgoliaSearchHelper$1.prototype.isExcluded = function (facet, value) {
  return this.state.isExcludeRefined(facet, value);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */


AlgoliaSearchHelper$1.prototype.isDisjunctiveRefined = function (facet, value) {
  return this.state.isDisjunctiveFacetRefined(facet, value);
};
/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */


AlgoliaSearchHelper$1.prototype.hasTag = function (tag) {
  return this.state.isTagRefined(tag);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */


AlgoliaSearchHelper$1.prototype.isTagRefined = function () {
  return this.hasTagRefinements.apply(this, arguments);
};
/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */


AlgoliaSearchHelper$1.prototype.getIndex = function () {
  return this.state.index;
};

function getCurrentPage() {
  return this.state.page;
}
/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */


AlgoliaSearchHelper$1.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */

AlgoliaSearchHelper$1.prototype.getPage = getCurrentPage;
/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */

AlgoliaSearchHelper$1.prototype.getTags = function () {
  return this.state.tagRefinements;
};
/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */


AlgoliaSearchHelper$1.prototype.getRefinements = function (facetName) {
  var refinements = [];

  if (this.state.isConjunctiveFacet(facetName)) {
    var conjRefinements = this.state.getConjunctiveRefinements(facetName);
    conjRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'conjunctive'
      });
    });
    var excludeRefinements = this.state.getExcludeRefinements(facetName);
    excludeRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'exclude'
      });
    });
  } else if (this.state.isDisjunctiveFacet(facetName)) {
    var disjRefinements = this.state.getDisjunctiveRefinements(facetName);
    disjRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'disjunctive'
      });
    });
  }

  var numericRefinements = this.state.getNumericRefinements(facetName);
  Object.keys(numericRefinements).forEach(function (operator) {
    var value = numericRefinements[operator];
    refinements.push({
      value: value,
      operator: operator,
      type: 'numeric'
    });
  });
  return refinements;
};
/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */


AlgoliaSearchHelper$1.prototype.getNumericRefinement = function (attribute, operator) {
  return this.state.getNumericRefinement(attribute, operator);
};
/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */


AlgoliaSearchHelper$1.prototype.getHierarchicalFacetBreadcrumb = function (facetName) {
  return this.state.getHierarchicalFacetBreadcrumb(facetName);
}; // /////////// PRIVATE

/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */


AlgoliaSearchHelper$1.prototype._search = function (options) {
  var state = this.state;
  var states = [];
  var mainQueries = [];

  if (!options.onlyWithDerivedHelpers) {
    mainQueries = requestBuilder._getQueries(state.index, state);
    states.push({
      state: state,
      queriesCount: mainQueries.length,
      helper: this
    });
    this.emit('search', {
      state: state,
      results: this.lastResults
    });
  }

  var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);

    var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);

    states.push({
      state: derivedState,
      queriesCount: derivedStateQueries.length,
      helper: derivedHelper
    });
    derivedHelper.emit('search', {
      state: derivedState,
      results: derivedHelper.lastResults
    });
    return derivedStateQueries;
  });
  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
  var queryId = this._queryId++;
  this._currentNbQueries++;

  try {
    this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error
    });
  }
};
/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */


AlgoliaSearchHelper$1.prototype._dispatchAlgoliaResponse = function (states, queryId, content) {
  // FIXME remove the number of outdated queries discarded instead of just one
  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;
  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
  var results = content.results.slice();
  states.forEach(function (s) {
    var state = s.state;
    var queriesCount = s.queriesCount;
    var helper = s.helper;
    var specificResults = results.splice(0, queriesCount);
    var formattedResponse = helper.lastResults = new SearchResults$1(state, specificResults);
    helper.emit('result', {
      results: formattedResponse,
      state: state
    });
  });
};

AlgoliaSearchHelper$1.prototype._dispatchAlgoliaError = function (queryId, error) {
  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;
  this.emit('error', {
    error: error
  });
  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};

AlgoliaSearchHelper$1.prototype.containsRefinement = function (query, facetFilters, numericFilters, tagFilters) {
  return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
};
/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */


AlgoliaSearchHelper$1.prototype._hasDisjunctiveRefinements = function (facet) {
  return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
};

AlgoliaSearchHelper$1.prototype._change = function (event) {
  var state = event.state;
  var isPageReset = event.isPageReset;

  if (state !== this.state) {
    this.state = state;
    this.emit('change', {
      state: this.state,
      results: this.lastResults,
      isPageReset: isPageReset
    });
  }
};
/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */


AlgoliaSearchHelper$1.prototype.clearCache = function () {
  this.client.clearCache && this.client.clearCache();
  return this;
};
/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */


AlgoliaSearchHelper$1.prototype.setClient = function (newClient) {
  if (this.client === newClient) return this;

  if (typeof newClient.addAlgoliaAgent === 'function') {
    newClient.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.client = newClient;
  return this;
};
/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */


AlgoliaSearchHelper$1.prototype.getClient = function () {
  return this.client;
};
/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */


AlgoliaSearchHelper$1.prototype.derive = function (fn) {
  var derivedHelper = new DerivedHelper(this, fn);
  this.derivedHelpers.push(derivedHelper);
  return derivedHelper;
};
/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */


AlgoliaSearchHelper$1.prototype.detachDerivedHelper = function (derivedHelper) {
  var pos = this.derivedHelpers.indexOf(derivedHelper);
  if (pos === -1) throw new Error('Derived helper already detached');
  this.derivedHelpers.splice(pos, 1);
};
/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */


AlgoliaSearchHelper$1.prototype.hasPendingRequests = function () {
  return this._currentNbQueries > 0;
};
/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */

/**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */


var algoliasearch_helper = AlgoliaSearchHelper$1;

var AlgoliaSearchHelper = algoliasearch_helper;

var SearchParameters = SearchParameters_1;

var SearchResults = SearchResults_1;
/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */


function algoliasearchHelper(client, index, opts) {
  return new AlgoliaSearchHelper(client, index, opts);
}
/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */


algoliasearchHelper.version = version$1;
/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */

algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;
/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */

algoliasearchHelper.SearchParameters = SearchParameters;
/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */

algoliasearchHelper.SearchResults = SearchResults;
var algoliasearchHelper_1 = algoliasearchHelper;

var algoliasearchHelper$1 = algoliasearchHelper_1;

function getIndexContext(props) {
  return {
    targetedIndex: props.indexId
  };
}
/**
 * The component that allows you to apply widgets to a dedicated index. It's
 * useful if you want to build an interface that targets multiple indices.
 *
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Index, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <SearchBox />
 *     <Index indexName="instant_search">
 *       <Hits />
 *     </Index>
 *     <Index indexName="bestbuy">
 *       <Hits />
 *     </Index>
 *   </InstantSearch>
 * );
 */


var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  _createClass(Index, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      return {
        indexContext: getIndexContext(props)
      };
    }
  }]);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty$1(_assertThisInitialized(_this), "state", {
      indexContext: getIndexContext(_this.props)
    });

    _defineProperty$1(_assertThisInitialized(_this), "unregisterWidget", void 0);

    _this.props.contextValue.onSearchParameters(_this.getSearchParameters.bind(_assertThisInitialized(_this)), {
      ais: _this.props.contextValue,
      multiIndexContext: _this.state.indexContext
    }, _this.props, undefined);

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.indexName !== prevProps.indexName) {
        this.props.contextValue.widgetsManager.update();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.unregisterWidget === 'function') {
        this.unregisterWidget();
      }
    }
  }, {
    key: "getSearchParameters",
    value: function getSearchParameters(searchParameters, props) {
      return searchParameters.setIndex(this.props ? this.props.indexName : props.indexName);
    }
  }, {
    key: "render",
    value: function render() {
      var childrenCount = React.Children.count(this.props.children);

      if (childrenCount === 0) {
        return null;
      }

      return React__default['default'].createElement(IndexProvider, {
        value: this.state.indexContext
      }, this.props.children);
    }
  }]);

  return Index;
}(React.Component);

_defineProperty$1(Index, "propTypes", {
  indexName: PropTypes__default['default'].string.isRequired,
  indexId: PropTypes__default['default'].string.isRequired,
  children: PropTypes__default['default'].node
});

var IndexWrapper = function IndexWrapper(props) {
  var inferredIndexId = props.indexName;
  return React__default['default'].createElement(InstantSearchConsumer, null, function (contextValue) {
    return React__default['default'].createElement(Index, _extends$1({
      contextValue: contextValue,
      indexId: inferredIndexId
    }, props));
  });
};

IndexWrapper.propTypes = {
  indexName: PropTypes__default['default'].string.isRequired,
  indexId: PropTypes__default['default'].string
};
var Index$1 = IndexWrapper;

function createWidgetsManager(onWidgetsUpdate) {
  var widgets = []; // Is an update scheduled?

  var scheduled = false; // The state manager's updates need to be batched since more than one
  // component can register or unregister widgets during the same tick.

  function scheduleUpdate() {
    if (scheduled) {
      return;
    }

    scheduled = true;
    defer(function () {
      scheduled = false;
      onWidgetsUpdate();
    });
  }

  return {
    registerWidget: function registerWidget(widget) {
      widgets.push(widget);
      scheduleUpdate();
      return function unregisterWidget() {
        widgets.splice(widgets.indexOf(widget), 1);
        scheduleUpdate();
      };
    },
    update: scheduleUpdate,
    getWidgets: function getWidgets() {
      return widgets;
    }
  };
}

function createStore(initialState) {
  var state = initialState;
  var listeners = [];
  return {
    getState: function getState() {
      return state;
    },
    setState: function setState(nextState) {
      state = nextState;
      listeners.forEach(function (listener) {
        return listener();
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        listeners.splice(listeners.indexOf(listener), 1);
      };
    }
  };
}

function addAlgoliaAgents(searchClient) {
  if (typeof searchClient.addAlgoliaAgent === 'function') {
    searchClient.addAlgoliaAgent("react (".concat(React.version, ")"));
    searchClient.addAlgoliaAgent("react-instantsearch (".concat(version$2, ")"));
  }
}

var isMultiIndexContext = function isMultiIndexContext(widget) {
  return hasMultipleIndices({
    ais: widget.props.contextValue,
    multiIndexContext: widget.props.indexContextValue
  });
};

var isTargetedIndexEqualIndex = function isTargetedIndexEqualIndex(widget, indexId) {
  return widget.props.indexContextValue.targetedIndex === indexId;
}; // Relying on the `indexId` is a bit brittle to detect the `Index` widget.
// Since it's a class we could rely on `instanceof` or similar. We never
// had an issue though. Works for now.


var isIndexWidget = function isIndexWidget(widget) {
  return Boolean(widget.props.indexId);
};

var isIndexWidgetEqualIndex = function isIndexWidgetEqualIndex(widget, indexId) {
  return widget.props.indexId === indexId;
};

var sortIndexWidgetsFirst = function sortIndexWidgetsFirst(firstWidget, secondWidget) {
  var isFirstWidgetIndex = isIndexWidget(firstWidget);
  var isSecondWidgetIndex = isIndexWidget(secondWidget);

  if (isFirstWidgetIndex && !isSecondWidgetIndex) {
    return -1;
  }

  if (!isFirstWidgetIndex && isSecondWidgetIndex) {
    return 1;
  }

  return 0;
}; // This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.


function serializeQueryParameters(parameters) {
  var isObjectOrArray = function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
  };

  var encode = function encode(format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var i = 0;
    return format.replace(/%s/g, function () {
      return encodeURIComponent(args[i++]);
    });
  };

  return Object.keys(parameters).map(function (key) {
    return encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
  }).join('&');
}
/**
 * Creates a new instance of the InstantSearchManager which controls the widgets and
 * trigger the search when the widgets are updated.
 * @param {string} indexName - the main index name
 * @param {object} initialState - initial widget state
 * @param {object} SearchParameters - optional additional parameters to send to the algolia API
 * @param {number} stalledSearchDelay - time (in ms) after the search is stalled
 * @return {InstantSearchManager} a new instance of InstantSearchManager
 */


function createInstantSearchManager(_ref) {
  var indexName = _ref.indexName,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      searchClient = _ref.searchClient,
      resultsState = _ref.resultsState,
      stalledSearchDelay = _ref.stalledSearchDelay;
  var helper = algoliasearchHelper$1(searchClient, indexName, _objectSpread({}, HIGHLIGHT_TAGS));
  addAlgoliaAgents(searchClient);
  helper.on('search', handleNewSearch).on('result', handleSearchSuccess({
    indexId: indexName
  })).on('error', handleSearchError);
  var skip = false;
  var stalledSearchTimer = null;
  var initialSearchParameters = helper.state;
  var widgetsManager = createWidgetsManager(onWidgetsUpdate);
  hydrateSearchClient(searchClient, resultsState);
  var store = createStore({
    widgets: initialState,
    metadata: hydrateMetadata(resultsState),
    results: hydrateResultsState(resultsState),
    error: null,
    searching: false,
    isSearchStalled: true,
    searchingForFacetValues: false
  });

  function skipSearch() {
    skip = true;
  }

  function updateClient(client) {
    addAlgoliaAgents(client);
    helper.setClient(client);
    search();
  }

  function clearCache() {
    helper.clearCache();
    search();
  }

  function getMetadata(state) {
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getMetadata);
    }).map(function (widget) {
      return widget.getMetadata(state);
    });
  }

  function getSearchParameters() {
    var sharedParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      return !isMultiIndexContext(widget) && !isIndexWidget(widget);
    }).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, initialSearchParameters);
    var mainParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexEqualMainIndex = isMultiIndexContext(widget) && isTargetedIndexEqualIndex(widget, indexName);
      var subIndexEqualMainIndex = isIndexWidget(widget) && isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexEqualMainIndex || subIndexEqualMainIndex;
    }) // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, sharedParameters);
    var derivedIndices = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexNotEqualMainIndex = isMultiIndexContext(widget) && !isTargetedIndexEqualIndex(widget, indexName);
      var subIndexNotEqualMainIndex = isIndexWidget(widget) && !isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexNotEqualMainIndex || subIndexNotEqualMainIndex;
    }) // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (indices, widget) {
      var indexId = isMultiIndexContext(widget) ? widget.props.indexContextValue.targetedIndex : widget.props.indexId;
      var widgets = indices[indexId] || [];
      return _objectSpread({}, indices, _defineProperty$1({}, indexId, widgets.concat(widget)));
    }, {});
    var derivedParameters = Object.keys(derivedIndices).map(function (indexId) {
      return {
        parameters: derivedIndices[indexId].reduce(function (res, widget) {
          return widget.getSearchParameters(res);
        }, sharedParameters),
        indexId: indexId
      };
    });
    return {
      mainParameters: mainParameters,
      derivedParameters: derivedParameters
    };
  }

  function search() {
    if (!skip) {
      var _getSearchParameters = getSearchParameters(helper.state),
          mainParameters = _getSearchParameters.mainParameters,
          derivedParameters = _getSearchParameters.derivedParameters; // We have to call `slice` because the method `detach` on the derived
      // helpers mutates the value `derivedHelpers`. The `forEach` loop does
      // not iterate on each value and we're not able to correctly clear the
      // previous derived helpers (memory leak + useless requests).


      helper.derivedHelpers.slice().forEach(function (derivedHelper) {
        // Since we detach the derived helpers on **every** new search they
        // won't receive intermediate results in case of a stalled search.
        // Only the last result is dispatched by the derived helper because
        // they are not detached yet:
        //
        // - a -> main helper receives results
        // - ap -> main helper receives results
        // - app -> main helper + derived helpers receive results
        //
        // The quick fix is to avoid to detach them on search but only once they
        // received the results. But it means that in case of a stalled search
        // all the derived helpers not detached yet register a new search inside
        // the helper. The number grows fast in case of a bad network and it's
        // not deterministic.
        derivedHelper.detach();
      });
      derivedParameters.forEach(function (_ref2) {
        var indexId = _ref2.indexId,
            parameters = _ref2.parameters;
        var derivedHelper = helper.derive(function () {
          return parameters;
        });
        derivedHelper.on('result', handleSearchSuccess({
          indexId: indexId
        })).on('error', handleSearchError);
      });
      helper.setState(mainParameters);
      helper.search();
    }
  }

  function handleSearchSuccess(_ref3) {
    var indexId = _ref3.indexId;
    return function (event) {
      var state = store.getState();
      var isDerivedHelpersEmpty = !helper.derivedHelpers.length;
      var results = state.results ? state.results : {}; // Switching from mono index to multi index and vice versa must reset the
      // results to an empty object, otherwise we keep reference of stalled and
      // unused results.

      results = !isDerivedHelpersEmpty && results.getFacetByName ? {} : results;

      if (!isDerivedHelpersEmpty) {
        results = _objectSpread({}, results, _defineProperty$1({}, indexId, event.results));
      } else {
        results = event.results;
      }

      var currentState = store.getState();
      var nextIsSearchStalled = currentState.isSearchStalled;

      if (!helper.hasPendingRequests()) {
        clearTimeout(stalledSearchTimer);
        stalledSearchTimer = null;
        nextIsSearchStalled = false;
      }

      currentState.resultsFacetValues;
          var partialState = _objectWithoutProperties(currentState, ["resultsFacetValues"]);

      store.setState(_objectSpread({}, partialState, {
        results: results,
        isSearchStalled: nextIsSearchStalled,
        searching: false,
        error: null
      }));
    };
  }

  function handleSearchError(_ref4) {
    var error = _ref4.error;
    var currentState = store.getState();
    var nextIsSearchStalled = currentState.isSearchStalled;

    if (!helper.hasPendingRequests()) {
      clearTimeout(stalledSearchTimer);
      nextIsSearchStalled = false;
    }

    currentState.resultsFacetValues;
        var partialState = _objectWithoutProperties(currentState, ["resultsFacetValues"]);

    store.setState(_objectSpread({}, partialState, {
      isSearchStalled: nextIsSearchStalled,
      error: error,
      searching: false
    }));
  }

  function handleNewSearch() {
    if (!stalledSearchTimer) {
      stalledSearchTimer = setTimeout(function () {
        var _store$getState = store.getState();
            _store$getState.resultsFacetValues;
            var partialState = _objectWithoutProperties(_store$getState, ["resultsFacetValues"]);

        store.setState(_objectSpread({}, partialState, {
          isSearchStalled: true
        }));
      }, stalledSearchDelay);
    }
  }

  function hydrateSearchClient(client, results) {
    if (!results) {
      return;
    } // Disable cache hydration on:
    // - Algoliasearch API Client < v4 with cache disabled
    // - Third party clients (detected by the `addAlgoliaAgent` function missing)


    if ((!client.transporter || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
      return;
    } // Algoliasearch API Client >= v4
    // To hydrate the client we need to populate the cache with the data from
    // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
    // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
    // for us to compute the key the same way as `algoliasearch-client` we need
    // to populate it on a custom key and override the `search` method to
    // search on it first.


    if (client.transporter && !client._cacheHydrated) {
      client._cacheHydrated = true;
      var baseMethod = client.search;

      client.search = function (requests) {
        for (var _len2 = arguments.length, methodArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          methodArgs[_key2 - 1] = arguments[_key2];
        }

        var requestsWithSerializedParams = requests.map(function (request) {
          return _objectSpread({}, request, {
            params: serializeQueryParameters(request.params)
          });
        });
        return client.transporter.responsesCache.get({
          method: 'search',
          args: [requestsWithSerializedParams].concat(methodArgs)
        }, function () {
          return baseMethod.apply(void 0, [requests].concat(methodArgs));
        });
      };
    }

    if (Array.isArray(results.results)) {
      hydrateSearchClientWithMultiIndexRequest(client, results.results);
      return;
    }

    hydrateSearchClientWithSingleIndexRequest(client, results);
  }

  function hydrateSearchClientWithMultiIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.reduce(function (acc, result) {
          return acc.concat(result.rawResults.map(function (request) {
            return {
              indexName: request.index,
              params: request.params
            };
          }));
        }, [])]
      }, {
        results: results.reduce(function (acc, result) {
          return acc.concat(result.rawResults);
        }, [])
      });
      return;
    } // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240


    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        }));
      }, [])
    }));
    client.cache = _objectSpread({}, client.cache, _defineProperty$1({}, key, JSON.stringify({
      results: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults);
      }, [])
    })));
  }

  function hydrateSearchClientWithSingleIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        })]
      }, {
        results: results.rawResults
      });
      return;
    } // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240


    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.rawResults.map(function (request) {
        return {
          indexName: request.index,
          params: request.params
        };
      })
    }));
    client.cache = _objectSpread({}, client.cache, _defineProperty$1({}, key, JSON.stringify({
      results: results.rawResults
    })));
  }

  function hydrateResultsState(results) {
    if (!results) {
      return null;
    }

    if (Array.isArray(results.results)) {
      return results.results.reduce(function (acc, result) {
        return _objectSpread({}, acc, _defineProperty$1({}, result._internalIndexId, new algoliasearchHelper$1.SearchResults(new algoliasearchHelper$1.SearchParameters(result.state), result.rawResults)));
      }, {});
    }

    return new algoliasearchHelper$1.SearchResults(new algoliasearchHelper$1.SearchParameters(results.state), results.rawResults);
  } // Called whenever a widget has been rendered with new props.


  function onWidgetsUpdate() {
    var metadata = getMetadata(store.getState().widgets);
    store.setState(_objectSpread({}, store.getState(), {
      metadata: metadata,
      searching: true
    })); // Since the `getSearchParameters` method of widgets also depends on props,
    // the result search parameters might have changed.

    search();
  }

  function transitionState(nextSearchState) {
    var searchState = store.getState().widgets;
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.transitionState);
    }).reduce(function (res, widget) {
      return widget.transitionState(searchState, res);
    }, nextSearchState);
  }

  function onExternalStateUpdate(nextSearchState) {
    var metadata = getMetadata(nextSearchState);
    store.setState(_objectSpread({}, store.getState(), {
      widgets: nextSearchState,
      metadata: metadata,
      searching: true
    }));
    search();
  }

  function onSearchForFacetValues(_ref5) {
    var facetName = _ref5.facetName,
        query = _ref5.query,
        _ref5$maxFacetHits = _ref5.maxFacetHits,
        maxFacetHits = _ref5$maxFacetHits === void 0 ? 10 : _ref5$maxFacetHits; // The values 1, 100 are the min / max values that the engine accepts.
    // see: https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits

    var maxFacetHitsWithinRange = Math.max(1, Math.min(maxFacetHits, 100));
    store.setState(_objectSpread({}, store.getState(), {
      searchingForFacetValues: true
    }));
    helper.searchForFacetValues(facetName, query, maxFacetHitsWithinRange).then(function (content) {
      var _objectSpread7;

      store.setState(_objectSpread({}, store.getState(), {
        error: null,
        searchingForFacetValues: false,
        resultsFacetValues: _objectSpread({}, store.getState().resultsFacetValues, (_objectSpread7 = {}, _defineProperty$1(_objectSpread7, facetName, content.facetHits), _defineProperty$1(_objectSpread7, "query", query), _objectSpread7))
      }));
    }, function (error) {
      store.setState(_objectSpread({}, store.getState(), {
        searchingForFacetValues: false,
        error: error
      }));
    }).catch(function (error) {
      // Since setState is synchronous, any error that occurs in the render of a
      // component will be swallowed by this promise.
      // This is a trick to make the error show up correctly in the console.
      // See http://stackoverflow.com/a/30741722/969302
      setTimeout(function () {
        throw error;
      });
    });
  }

  function updateIndex(newIndex) {
    initialSearchParameters = initialSearchParameters.setIndex(newIndex); // No need to trigger a new search here as the widgets will also update and trigger it if needed.
  }

  function getWidgetsIds() {
    return store.getState().metadata.reduce(function (res, meta) {
      return typeof meta.id !== 'undefined' ? res.concat(meta.id) : res;
    }, []);
  }

  return {
    store: store,
    widgetsManager: widgetsManager,
    getWidgetsIds: getWidgetsIds,
    getSearchParameters: getSearchParameters,
    onSearchForFacetValues: onSearchForFacetValues,
    onExternalStateUpdate: onExternalStateUpdate,
    transitionState: transitionState,
    updateClient: updateClient,
    updateIndex: updateIndex,
    clearCache: clearCache,
    skipSearch: skipSearch
  };
}

function hydrateMetadata(resultsState) {
  if (!resultsState) {
    return [];
  } // add a value noop, which gets replaced once the widgets are mounted


  return resultsState.metadata.map(function (datum) {
    return _objectSpread({
      value: function value() {}
    }, datum, {
      items: datum.items && datum.items.map(function (item) {
        return _objectSpread({
          value: function value() {}
        }, item, {
          items: item.items && item.items.map(function (nestedItem) {
            return _objectSpread({
              value: function value() {}
            }, nestedItem);
          })
        });
      })
    });
  });
}

function isControlled(props) {
  return Boolean(props.searchState);
}
/**
 * @description
 * `<InstantSearch>` is the root component of all React InstantSearch implementations.
 * It provides all the connected components (aka widgets) a means to interact
 * with the searchState.
 * @kind widget
 * @name <InstantSearch>
 * @requirements You will need to have an Algolia account to be able to use this widget.
 * [Create one now](https://www.algolia.com/users/sign_up).
 * @propType {string} indexName - Main index in which to search.
 * @propType {boolean} [refresh=false] - Flag to activate when the cache needs to be cleared so that the front-end is updated when a change occurs in the index.
 * @propType {object} [searchClient] - Provide a custom search client.
 * @propType {func} [onSearchStateChange] - Function to be called everytime a new search is done. Useful for [URL Routing](guide/Routing.html).
 * @propType {object} [searchState] - Object to inject some search state. Switches the InstantSearch component in controlled mode. Useful for [URL Routing](guide/Routing.html).
 * @propType {func} [createURL] - Function to call when creating links, useful for [URL Routing](guide/Routing.html).
 * @propType {SearchResults|SearchResults[]} [resultsState] - Use this to inject the results that will be used at first rendering. Those results are found by using the `findResultsState` function. Useful for [Server Side Rendering](guide/Server-side_rendering.html).
 * @propType {number} [stalledSearchDelay=200] - The amount of time before considering that the search takes too much time. The time is expressed in milliseconds.
 * @propType {{ Root: string|function, props: object }} [root] - Use this to customize the root element. Default value: `{ Root: 'div' }`
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox />
 *     <Hits />
 *   </InstantSearch>
 * );
 */


var InstantSearch = /*#__PURE__*/function (_Component) {
  _inherits(InstantSearch, _Component);

  _createClass(InstantSearch, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextIsControlled = isControlled(nextProps);
      var previousSearchState = prevState.instantSearchManager.store.getState().widgets;
      var nextSearchState = nextProps.searchState;

      if (nextIsControlled && !reactFastCompare(previousSearchState, nextSearchState)) {
        prevState.instantSearchManager.onExternalStateUpdate(nextProps.searchState);
      }

      return {
        isControlled: nextIsControlled,
        contextValue: _objectSpread({}, prevState.contextValue, {
          mainTargetedIndex: nextProps.indexName
        })
      };
    }
  }]);

  function InstantSearch(props) {
    var _this;

    _classCallCheck(this, InstantSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantSearch).call(this, props));

    _defineProperty$1(_assertThisInitialized(_this), "isUnmounting", false);

    var instantSearchManager = createInstantSearchManager({
      indexName: _this.props.indexName,
      searchClient: _this.props.searchClient,
      initialState: _this.props.searchState || {},
      resultsState: _this.props.resultsState,
      stalledSearchDelay: _this.props.stalledSearchDelay
    });
    var contextValue = {
      store: instantSearchManager.store,
      widgetsManager: instantSearchManager.widgetsManager,
      mainTargetedIndex: _this.props.indexName,
      onInternalStateUpdate: _this.onWidgetsInternalStateUpdate.bind(_assertThisInitialized(_this)),
      createHrefForState: _this.createHrefForState.bind(_assertThisInitialized(_this)),
      onSearchForFacetValues: _this.onSearchForFacetValues.bind(_assertThisInitialized(_this)),
      onSearchStateChange: _this.onSearchStateChange.bind(_assertThisInitialized(_this)),
      onSearchParameters: _this.onSearchParameters.bind(_assertThisInitialized(_this))
    };
    _this.state = {
      isControlled: isControlled(_this.props),
      instantSearchManager: instantSearchManager,
      contextValue: contextValue
    };
    return _this;
  }

  _createClass(InstantSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevIsControlled = isControlled(prevProps);

      if (prevIsControlled && !this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
      }

      if (!prevIsControlled && this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
      }

      if (this.props.refresh !== prevProps.refresh && this.props.refresh) {
        this.state.instantSearchManager.clearCache();
      }

      if (prevProps.indexName !== this.props.indexName) {
        this.state.instantSearchManager.updateIndex(this.props.indexName);
      }

      if (prevProps.searchClient !== this.props.searchClient) {
        this.state.instantSearchManager.updateClient(this.props.searchClient);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
      this.state.instantSearchManager.skipSearch();
    }
  }, {
    key: "createHrefForState",
    value: function createHrefForState(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      return this.state.isControlled && this.props.createURL ? this.props.createURL(searchState, this.getKnownKeys()) : '#';
    }
  }, {
    key: "onWidgetsInternalStateUpdate",
    value: function onWidgetsInternalStateUpdate(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      this.onSearchStateChange(searchState);

      if (!this.state.isControlled) {
        this.state.instantSearchManager.onExternalStateUpdate(searchState);
      }
    }
  }, {
    key: "onSearchStateChange",
    value: function onSearchStateChange(searchState) {
      if (this.props.onSearchStateChange && !this.isUnmounting) {
        this.props.onSearchStateChange(searchState);
      }
    }
  }, {
    key: "onSearchParameters",
    value: function onSearchParameters(getSearchParameters, context, props, getMetadata) {
      if (this.props.onSearchParameters) {
        var _searchState = this.props.searchState ? this.props.searchState : {};

        this.props.onSearchParameters(getSearchParameters, context, props, _searchState);
      }

      if (this.props.widgetsCollector) {
        var _searchState2 = this.props.searchState ? this.props.searchState : {};

        this.props.widgetsCollector({
          getSearchParameters: getSearchParameters,
          getMetadata: getMetadata,
          context: context,
          props: props,
          searchState: _searchState2
        });
      }
    }
  }, {
    key: "onSearchForFacetValues",
    value: function onSearchForFacetValues(searchState) {
      this.state.instantSearchManager.onSearchForFacetValues(searchState);
    }
  }, {
    key: "getKnownKeys",
    value: function getKnownKeys() {
      return this.state.instantSearchManager.getWidgetsIds();
    }
  }, {
    key: "render",
    value: function render() {
      if (React.Children.count(this.props.children) === 0) {
        return null;
      }

      return React__default['default'].createElement(InstantSearchProvider, {
        value: this.state.contextValue
      }, this.props.children);
    }
  }]);

  return InstantSearch;
}(React.Component);

_defineProperty$1(InstantSearch, "defaultProps", {
  stalledSearchDelay: 200,
  refresh: false
});

_defineProperty$1(InstantSearch, "propTypes", {
  // @TODO: These props are currently constant.
  indexName: PropTypes__default['default'].string.isRequired,
  searchClient: PropTypes__default['default'].shape({
    search: PropTypes__default['default'].func.isRequired,
    searchForFacetValues: PropTypes__default['default'].func,
    addAlgoliaAgent: PropTypes__default['default'].func,
    clearCache: PropTypes__default['default'].func
  }).isRequired,
  createURL: PropTypes__default['default'].func,
  refresh: PropTypes__default['default'].bool,
  searchState: PropTypes__default['default'].object,
  onSearchStateChange: PropTypes__default['default'].func,
  onSearchParameters: PropTypes__default['default'].func,
  widgetsCollector: PropTypes__default['default'].func,
  resultsState: PropTypes__default['default'].oneOfType([PropTypes__default['default'].object, PropTypes__default['default'].array]),
  children: PropTypes__default['default'].node,
  stalledSearchDelay: PropTypes__default['default'].number
});

var InstantSearch$1 = InstantSearch;

/**
 * connectHits connector provides the logic to create connected
 * components that will render the results retrieved from
 * Algolia.
 *
 * To configure the number of hits retrieved, use [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or pass the hitsPerPage
 * prop to a [Configure](guide/Search_parameters.html) widget.
 *
 * **Warning:** you will need to use the **objectID** property available on every hit as a key
 * when iterating over them. This will ensure you have the best possible UI experience
 * especially on slow networks.
 * @name connectHits
 * @kind connector
 * @providedPropType {array.<object>} hits - the records that matched the search state
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Highlight, connectHits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const CustomHits = connectHits(({ hits }) => (
 *   <div>
 *     {hits.map(hit =>
 *       <p key={hit.objectID}>
 *         <Highlight attribute="name" hit={hit} />
 *       </p>
 *     )}
 *   </div>
 * ));
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <CustomHits />
 *   </InstantSearch>
 * );
 */

var connectHits = createConnector({
  displayName: 'AlgoliaHits',
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });

    if (!results) {
      return {
        hits: []
      };
    }

    var hitsWithPositions = addAbsolutePositions(results.hits, results.hitsPerPage, results.page);
    var hitsWithPositionsAndQueryID = addQueryID(hitsWithPositions, results.queryID);
    return {
      hits: hitsWithPositionsAndQueryID
    };
  },

  /**
   * Hits needs to be considered as a widget to trigger a search,
   * even if no other widgets are used.
   *
   * To be considered as a widget you need either:
   * - getSearchParameters
   * - getMetadata
   * - transitionState
   *
   * See: createConnector.tsx
   */
  getSearchParameters: function getSearchParameters(searchParameters) {
    return searchParameters;
  }
});

function getId() {
  return 'query';
}

function getCurrentRefinement(props, searchState, context) {
  var id = getId();
  var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');

  if (currentRefinement) {
    return currentRefinement;
  }

  return '';
}

function _refine(props, searchState, nextRefinement, context) {
  var id = getId();

  var nextValue = _defineProperty$1({}, id, nextRefinement);

  var resetPage = true;
  return refineValue(searchState, nextValue, context, resetPage);
}

function _cleanUp(props, searchState, context) {
  return cleanUpValue(searchState, context, getId());
}
/**
 * connectSearchBox connector provides the logic to build a widget that will
 * let the user search for a query
 * @name connectSearchBox
 * @kind connector
 * @propType {string} [defaultRefinement] - Provide a default value for the query
 * @providedPropType {function} refine - a function to change the current query
 * @providedPropType {string} currentRefinement - the current query used
 * @providedPropType {boolean} isSearchStalled - a flag that indicates if InstantSearch has detected that searches are stalled
 */


var connectSearchBox = createConnector({
  displayName: 'AlgoliaSearchBox',
  propTypes: {
    defaultRefinement: PropTypes__default['default'].string
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    return {
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isSearchStalled: searchResults.isSearchStalled
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }));
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = getId();
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return {
      id: id,
      index: getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: currentRefinement === null ? [] : [{
        label: "".concat(id, ": ").concat(currentRefinement),
        value: function value(nextState) {
          return _refine(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }]
    };
  }
});

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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "65loc0-Input",
  styles: "position:relative;label:Input;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
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
    }, process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */"]
  }, label), react.jsx("div", {
    css: _ref
  }, react.jsx("input", _extends({
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
    }, error && variant === "brand-dark" && [brandDarkStyles, `background-image: url(https://maxihost-assets.s3-sa-east-1.amazonaws.com/metal-ui/error-icon.svg);background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 9px;`], process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */"]
  }, rest))));
});
Input.propTypes = {
  onChange: PropTypes__default['default'].func,
  inputClassName: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string,
  defaultValue: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string.isRequired,
  error: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  variant: PropTypes__default['default'].oneOf(["brand", "brand-dark"])
};

const valHasLength = value => {
  if (value.length >= 1) return true;
  return false;
};

const SearchBox = props => {
  const {
    currentRefinement,
    refine,
    id,
    placeholder,
    selectedText,
    inputProps,
    onSelect
  } = props;
  const {
    resetActiveElementIndex,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    setSearchInputHeight
  } = useTabController();
  const inputRef = React.useRef();
  const searchInputRef = React.useRef(null);
  React.useEffect(() => {
    refine(selectedText);
    inputRef.current.value = selectedText || "";
  }, [selectedText]);

  const handleOnChange = (value, e) => {
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      resetActiveElementIndex();
      refine(value);
    } else {
      e.preventDefault();
    }

    if (!(value !== null && value !== void 0 && value.length) && onSelect) {
      // Trigger on Select when field clears
      onSelect();
    }

    setIsResultsWindowOpen(valHasLength(value));
  };

  const checkIfResultsWindowShouldOpen = e => {
    const {
      value
    } = e.target;
    setIsResultsWindowOpen(valHasLength(value));
  };

  React.useEffect(() => {
    if (searchInputRef !== null && searchInputRef !== void 0 && searchInputRef.current) {
      setSearchInputHeight(searchInputRef.current.offsetHeight);
    }
  }, []);
  return react.jsx("div", {
    className: "ais-SearchBox pb-2",
    ref: searchInputRef
  }, react.jsx("form", {
    className: "ais-SearchBox-form m-0",
    noValidate: true,
    role: "search"
  }, react.jsx(Input, _extends({
    ref: inputRef,
    inputClassName: `${isResultsWindowOpen ? "focused" : ""} -mt-1 ais-SearchBox-input w-full`,
    value: currentRefinement,
    onChange: handleOnChange,
    onFocus: checkIfResultsWindowShouldOpen,
    "aria-label": "Search for a resource by typing here",
    placeholder: `${placeholder ? placeholder : "Search..."}`,
    id: `search-box-${id}`,
    autoComplete: "off",
    type: "search"
  }, inputProps))));
};

SearchBox.propTypes = {
  currentRefinement: PropTypes__default['default'].string.isRequired,
  refine: PropTypes__default['default'].func.isRequired,
  id: PropTypes__default['default'].string.isRequired,
  selectedText: PropTypes__default['default'].string
};
var SearchBox$1 = connectSearchBox(SearchBox);

var styles$1 = {
  resultPill: {
    display: 'block',
    cursor: 'pointer'
  },
  resultPillLink: {
    display: 'block'
  }
};

const ResultPill = props => {
  const {
    children,
    elementIndex,
    sectionIndex,
    formattedHitURL,
    noResults,
    onSelect
  } = props;
  const {
    activeElementIndex,
    sectionLengthsArray,
    isResultsWindowOpen,
    scrollWindowRef,
    scrollableWindowHeight,
    scrollableWindowTopOffset,
    setScrollDistance,
    enterKeyWasPressed,
    setEnterKeyWasPressed,
    manuallySetActiveIndex
  } = useTabController();
  const resultPillRef = React.useRef(null);
  const clickableLink = React.useRef(null);
  const currentElementIndex = (sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex;
  const isCurrentElement = activeElementIndex === currentElementIndex && isResultsWindowOpen && !noResults;
  React.useEffect(() => {
    if (isCurrentElement && enterKeyWasPressed) {
      if (formattedHitURL) {
        clickableLink.current.click();
      } else if (onSelect) {
        onSelect();
      } else {
        alert('The formattedHitURL or onSelect props were not found, it is used to format the url for the pill! Without it, we dont know where to send you :)');
      }

      setEnterKeyWasPressed(false);
    }

    if (isCurrentElement) {
      const activePillBoundingRect = resultPillRef.current.getBoundingClientRect();
      const resultPillOffset = activePillBoundingRect.top + activePillBoundingRect.height;
      const activePillTopOffset = resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop;
      let distToScroll = 0;

      if (activePillTopOffset > scrollableWindowHeight) {
        distToScroll = activePillTopOffset - scrollableWindowHeight;
      }

      setScrollDistance(distToScroll);
    }
  }, [isCurrentElement, scrollableWindowHeight, scrollableWindowTopOffset, scrollWindowRef, setScrollDistance, setEnterKeyWasPressed, enterKeyWasPressed]);

  const handleHoverSelection = () => {
    manuallySetActiveIndex((sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex);
  };

  if (noResults) {
    return react.jsx("li", {
      ref: resultPillRef,
      className: "mb-1",
      style: { ...styles$1.resultPill
      },
      tabIndex: 0,
      role: "option",
      "aria-selected": isCurrentElement,
      onMouseEnter: handleHoverSelection
    }, react.jsx("div", {
      ref: clickableLink,
      className: "px-2 border border-border rounded text-accent-eight",
      style: { ...styles$1.resultPillLink
      }
    }, children));
  }

  return react.jsx("li", {
    className: "mb-1",
    style: { ...styles$1.resultPill
    },
    tabIndex: 0,
    role: "option",
    "aria-selected": isCurrentElement,
    ref: resultPillRef,
    onMouseEnter: handleHoverSelection
  }, react.jsx("a", {
    ref: clickableLink,
    href: !onSelect ? formattedHitURL : null,
    onClick: onSelect,
    className: `px-2 rounded outline-none ${isCurrentElement ? 'bg-accent-two text-foreground' : 'text-accent-eight'}`,
    style: { ...styles$1.resultPillLink
    }
  }, children));
};

ResultPill.defaultProps = {
  elementIndex: null,
  sectionIndex: null,
  noResults: false,
  onSelect: null
};
ResultPill.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  elementIndex: PropTypes__default['default'].number,
  sectionIndex: PropTypes__default['default'].number,
  formattedHitURL: PropTypes__default['default'].string.isRequired,
  noResults: PropTypes__default['default'].bool,
  onSelect: PropTypes__default['default'].func
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
    return react.jsx(Tag, _extends({
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

const SectionTitle = ({
  title
}) => react.jsx("div", {
  className: "py-2 mb-2 top-0 bg-white border-b border-border"
}, react.jsx(Text, {
  is: "p"
}, title));

SectionTitle.propTypes = {
  title: PropTypes__default['default'].string.isRequired
};

const ResultsList = props => {
  const {
    hits,
    sectionTitle,
    sectionIndex,
    renderCardInfo,
    formatHitURL,
    onSelect,
    isSelectable
  } = props;
  const {
    appendNewSectionLength,
    shouldHideResults,
    setIsResultsWindowOpen
  } = useTabController();
  React.useEffect(() => {
    if (hits.length > 0) {
      appendNewSectionLength(sectionIndex, hits.length);
    } else {
      appendNewSectionLength(sectionIndex, 0);
    }
  }, [hits.length]); // eslint-disable-line

  const formattedHitURL = React.useCallback(hit => {
    return formatHitURL ? formatHitURL(hit) : null;
  }, [formatHitURL]);

  if (Array.isArray(hits) && hits.length > 0 && !shouldHideResults) {
    return react.jsx(React__default['default'].Fragment, null, react.jsx(SectionTitle, {
      title: sectionTitle
    }), react.jsx("ul", {
      role: "listbox"
    }, typeof renderCardInfo === 'function' && hits.map((hit, index) => {
      return react.jsx(ResultPill, {
        key: index,
        elementIndex: index,
        sectionIndex: sectionIndex,
        formattedHitURL: formattedHitURL(hit),
        onSelect: isSelectable ? () => {
          onSelect(hit);
          setIsResultsWindowOpen(false);
        } : null
      }, renderCardInfo(hit));
    })));
  }

  return null;
};

ResultsList.propTypes = {
  hits: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})).isRequired,
  sectionTitle: PropTypes__default['default'].string.isRequired,
  sectionIndex: PropTypes__default['default'].number.isRequired,
  renderCardInfo: PropTypes__default['default'].func.isRequired,
  formatHitURL: PropTypes__default['default'].func,
  onSelect: PropTypes__default['default'].func
};
var ResultsList$1 = connectHits(ResultsList);

const ArrowDown = () => {
  return react.jsx("svg", {
    width: "15",
    height: "15"
  }, react.jsx("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, react.jsx("path", {
    d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
  })));
};

const ArrowUp = () => {
  return react.jsx("svg", {
    width: "15",
    height: "15"
  }, react.jsx("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, react.jsx("path", {
    d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
  })));
};

var styles = {
  controlBar: {
    boxShadow: '0 -1px 0 0 #E2E8F0, 0 -3px 6px 0 #E2E8F0',
    display: 'flex',
    alignItems: 'center'
  },
  controlKey: {
    display: 'inline-block',
    boxShadow: 'inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4)',
    background: 'linear-gradient(-225deg,#d5dbe4,#f8f8f8)',
    padding: '.15rem'
  }
};

const Controls = () => {
  const controlsRef = React.useRef(null);
  const {
    setControlsHeight
  } = useTabController();
  React.useEffect(() => {
    if (controlsRef !== null && controlsRef !== void 0 && controlsRef.current) {
      setControlsHeight(controlsRef.current.offsetHeight);
    }
  }, []);
  return react.jsx("div", {
    className: "p-3 bg-white rounded-b-md",
    style: { ...styles.controlBar
    },
    ref: controlsRef
  }, react.jsx("span", {
    className: "mr-2 rounded-sm text-accent-four",
    style: { ...styles.controlKey
    }
  }, react.jsx(ArrowDown, null)), react.jsx("span", {
    className: "mr-2 rounded-sm text-accent-four",
    style: { ...styles.controlKey
    }
  }, react.jsx(ArrowUp, null)), react.jsx("small", {
    className: "text-accent-four"
  }, "to navigate"));
};

const Loader = () => {
  return react.jsx("svg", {
    className: "animate-spin mt-2 mb-2 ml-auto mr-auto h-8 w-8 text-accent-three",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, react.jsx("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), react.jsx("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
};

const NoResults = () => {
  return react.jsx("li", {
    className: "pb-2 pt-2",
    style: {
      display: "block"
    }
  }, react.jsx(Text, {
    is: "p",
    className: "p-2"
  }, "No results were found..."));
};

const SearchComponent = props => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    searchOperators,
    specialChar,
    scrollWindowHeight,
    customLoader,
    customNoResults,
    indexResultsLimit,
    className,
    placeholder,
    formatSelected,
    onSelect,
    inputProps
  } = props;
  const {
    activeElementIndex,
    scrollableWindowHeight,
    setScrollableWindowTopOffset,
    scrollableWindowTopOffset,
    scrollDistance,
    setScrollWindowRef,
    shouldBypassSearch,
    setShouldBypassSearch,
    setScrollableWindowHeight,
    isScrollDisabled,
    handleKeyNavigation,
    totalElementsCount,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    controlsHeight,
    searchInputHeight
  } = useTabController();
  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_SEARCH_KEY);
  const isSelectable = Boolean(onSelect);
  const searchClient = {
    search(requests) {
      if (shouldBypassSearch === true) return null;
      return algoliaClient.search(requests);
    }

  };
  const scrollWindowRef = React.useRef(null);
  const searchComponentRef = React.useRef(null);
  const [filterState, setFilterState] = React.useState("");
  const [conditionalOperands, setConditionalOperands] = React.useState(null);
  const [isSearchEmpty, setIsSearchEmpty] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState();

  const handleClickOutside = e => {
    if (searchComponentRef.current.contains(e.target)) {
      return;
    }

    setIsResultsWindowOpen(false);
  };

  React.useEffect(() => {
    setScrollWindowRef(scrollWindowRef);
  }, [setScrollWindowRef]);
  React.useEffect(() => {
    if (controlsHeight && searchInputHeight) {
      setScrollableWindowHeight(scrollWindowHeight - controlsHeight - searchInputHeight);
    } else {
      setScrollableWindowHeight(scrollWindowHeight);
    }
  }, [scrollWindowHeight, controlsHeight, searchInputHeight]);
  React.useEffect(() => {
    if (Array.isArray(searchOperators) && searchOperators.length > 0) {
      const sortedSearchOperators = searchOperators.sort((a, b) => a.length - b.length);
      const adjustedSearchOperators = sortedSearchOperators.map(condition => `${specialChar}${condition}`);
      setConditionalOperands(adjustedSearchOperators);
    }
  }, [specialChar, searchOperators]);
  React.useEffect(() => {
    const scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();

    if (scrollableResultsBoundingRect !== scrollableWindowTopOffset) {
      setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
    }
  }, [setScrollableWindowTopOffset, activeElementIndex]);
  React.useEffect(() => {
    if (typeof scrollDistance === "number" && isResultsWindowOpen && !isScrollDisabled) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, isResultsWindowOpen, isScrollDisabled]);
  React.useEffect(() => {
    let interval = null;

    if (totalElementsCount === 0) {
      setTimeout(() => {
        if (totalElementsCount === 0) {
          setIsSearchEmpty(true);
        }
      }, 800);
    } else {
      setIsSearchEmpty(false);
    }

    return clearInterval(interval);
  }, [totalElementsCount]);
  React.useEffect(() => {
    if (isResultsWindowOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResultsWindowOpen]);

  const handleOnSearchStateChange = ({
    query
  }) => {
    let filter = "";
    let operandFound = false;

    if (query) {
      conditionalOperands.forEach(operand => {
        const operandIndex = query.indexOf(operand);

        if (operandIndex !== -1) {
          const [fieldName, compareValue] = query.split(operand);
          filter = `${fieldName} ${operand.substr(specialChar.length)} ${compareValue}`;
          operandFound = true;
        }
      });

      if (!operandFound && query.indexOf(specialChar) !== -1) {
        const [fieldName, compareValue] = query.split(specialChar);
        filter = `${fieldName} = ${compareValue}`;
        operandFound = true;
      }

      setFilterState(operandFound ? filter : "");
    }
  };

  const configureFilterState = (searchConditions = null) => {
    if (Array.isArray(searchConditions) && searchConditions.length > 0) {
      const conditionalFilterState = searchConditions.reduce((acc, condition, index) => {
        const {
          conditionType,
          conditionString
        } = condition;

        if (index === 0) {
          if (filterState) return `${filterState} ${conditionType || "AND"} ${conditionString}`;
          return `${conditionString}`;
        }

        return `${acc} ${conditionType || "AND"} ${conditionString}`;
      }, "");
      return conditionalFilterState;
    }

    return filterState;
  };

  const handleOnKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        handleKeyNavigation(navigationKeyTypes.ARROW_DOWN);
        break;

      case 38:
        handleKeyNavigation(navigationKeyTypes.ARROW_UP);
        break;

      case 13:
        handleKeyNavigation(navigationKeyTypes.ENTER);
        e.stopPropagation();
        e.preventDefault();
        break;

      default:
        setShouldBypassSearch(false);
        break;
    }
  };

  const handleOnSelect = hit => {
    if (isSelectable) {
      setSelectedItem(hit);
      onSelect(hit);
    }
  };

  const LoaderToRender = customLoader ? customLoader : react.jsx(Loader, null);
  const NoResultsToRender = customNoResults ? customNoResults : react.jsx(NoResults, null);
  return react.jsx("div", {
    ref: searchComponentRef,
    className: className
  }, react.jsx(InstantSearch$1, {
    searchClient: searchClient,
    indexName: indices[0].indexName,
    onSearchStateChange: handleOnSearchStateChange
  }, react.jsx("div", {
    onKeyDown: handleOnKeyDown,
    role: "listbox",
    className: "relative"
  }, react.jsx(SearchBox$1, {
    id: ALGOLIA_APP_ID,
    selectedText: selectedItem ? formatSelected(selectedItem) : '',
    inputProps: inputProps,
    placeholder: placeholder,
    onSelect: handleOnSelect
  }), react.jsx("div", {
    className: "shadow-xl rounded absolute w-full bg-white border border-border",
    style: {
      visibility: `${isResultsWindowOpen ? "visible" : "hidden"}`
    }
  }, react.jsx("div", {
    className: "overflow-y-auto pl-2 pr-2",
    style: {
      maxHeight: `${scrollableWindowHeight}px`
    },
    ref: scrollWindowRef
  }, indices.map((algoliaIndice, sectionIndex) => {
    const {
      indexName,
      displayName,
      renderCardInfo,
      formatHitURL,
      searchConditions
    } = algoliaIndice;
    return react.jsx(Index$1, {
      key: sectionIndex,
      indexName: indexName,
      limit: 4
    }, react.jsx(Configure, {
      filters: configureFilterState(searchConditions),
      hitsPerPage: indexResultsLimit
    }), react.jsx(ResultsList$1, {
      sectionTitle: displayName,
      renderCardInfo: renderCardInfo,
      sectionIndex: sectionIndex,
      formatHitURL: formatHitURL,
      onSelect: handleOnSelect,
      isSelectable: isSelectable
    }));
  }), totalElementsCount === 0 && isSearchEmpty && NoResultsToRender, totalElementsCount === 0 && !isSearchEmpty && LoaderToRender), react.jsx(Controls, null)))));
};

SearchComponent.defaultProps = {
  scrollWindowHeight: 400,
  customLoader: null,
  customNoResults: null
};
SearchComponent.propTypes = {
  ALGOLIA_APP_ID: PropTypes__default['default'].string.isRequired,
  ALGOLIA_API_SEARCH_KEY: PropTypes__default['default'].string.isRequired,
  specialChar: PropTypes__default['default'].string.isRequired,
  searchOperators: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string).isRequired,
  indices: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    indexName: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    renderCardInfo: PropTypes__default['default'].func,
    formatHitURL: PropTypes__default['default'].func,
    searchConditions: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
      conditionType: PropTypes__default['default'].oneOf(["OR", "AND"]),
      conditionString: PropTypes__default['default'].string
    }))
  })).isRequired,
  scrollWindowHeight: PropTypes__default['default'].number,
  customLoader: PropTypes__default['default'].node,
  customNoResults: PropTypes__default['default'].node,
  indexResultsLimit: PropTypes__default['default'].number.isRequired,
  onSelect: PropTypes__default['default'].func,
  formatSelected: PropTypes__default['default'].func
};

const AlgoliaSearch = props => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY
  } = props;

  if (!ALGOLIA_APP_ID || !ALGOLIA_API_SEARCH_KEY) {
    return react.jsx(React__default['default'].Fragment, null, !ALGOLIA_APP_ID && react.jsx("h1", null, "ALGOLIA_APP_ID prop was not found and is required."), !ALGOLIA_API_SEARCH_KEY && react.jsx("h1", null, "ALGOLIA_API_SEARCH_KEY prop was not found and is required."));
  }

  return react.jsx(TabController, null, react.jsx(SearchComponent, props));
};

AlgoliaSearch.defaultProps = {
  indexResultsLimit: 8,
  scrollWindowHeight: 400,
  className: null,
  parentWindowHeight: null
};
AlgoliaSearch.propTypes = {
  /**
   * APP ID from your Algolia project.
   */
  ALGOLIA_APP_ID: PropTypes__default['default'].string.isRequired,

  /**
   * API Search Key from your Algolia Project.
   */
  ALGOLIA_API_SEARCH_KEY: PropTypes__default['default'].string.isRequired,
  specialChar: PropTypes__default['default'].string.isRequired,
  searchOperators: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string).isRequired,
  indices: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    indexName: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    renderCardInfo: PropTypes__default['default'].func,
    formatHitURL: PropTypes__default['default'].func,
    searchConditions: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
      conditionType: PropTypes__default['default'].oneOf(["OR", "AND"]),
      conditionString: PropTypes__default['default'].string
    }))
  })).isRequired,
  indexResultsLimit: PropTypes__default['default'].number,
  scrollWindowHeight: PropTypes__default['default'].number,
  customLoader: PropTypes__default['default'].node,
  customNoResults: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};

module.exports = AlgoliaSearch;
