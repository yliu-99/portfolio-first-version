import {
  require_prop_types
} from "./chunk-X3MDYGI3.js";
import {
  require_react
} from "./chunk-32EALFBN.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/sister/src/sister.js
var require_sister = __commonJS({
  "node_modules/sister/src/sister.js"(exports, module) {
    "use strict";
    var Sister;
    Sister = function() {
      var sister = {}, events = {};
      sister.on = function(name, handler) {
        var listener = { name, handler };
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
      };
      sister.off = function(listener) {
        var index = events[listener.name].indexOf(listener);
        if (index !== -1) {
          events[listener.name].splice(index, 1);
        }
      };
      sister.trigger = function(name, data) {
        var listeners = events[name], i;
        if (listeners) {
          i = listeners.length;
          while (i--) {
            listeners[i].handler(data);
          }
        }
      };
      return sister;
    };
    module.exports = Sister;
  }
});

// node_modules/load-script/index.js
var require_load_script = __commonJS({
  "node_modules/load-script/index.js"(exports, module) {
    module.exports = function load(src, opts, cb) {
      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      opts = opts || {};
      cb = cb || function() {
      };
      script.type = opts.type || "text/javascript";
      script.charset = opts.charset || "utf8";
      script.async = "async" in opts ? !!opts.async : true;
      script.src = src;
      if (opts.attrs) {
        setAttributes(script, opts.attrs);
      }
      if (opts.text) {
        script.text = "" + opts.text;
      }
      var onend = "onload" in script ? stdOnEnd : ieOnEnd;
      onend(script, cb);
      if (!script.onload) {
        stdOnEnd(script, cb);
      }
      head.appendChild(script);
    };
    function setAttributes(script, attrs) {
      for (var attr in attrs) {
        script.setAttribute(attr, attrs[attr]);
      }
    }
    function stdOnEnd(script, cb) {
      script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
      };
      script.onerror = function() {
        this.onerror = this.onload = null;
        cb(new Error("Failed to load " + this.src), script);
      };
    }
    function ieOnEnd(script, cb) {
      script.onreadystatechange = function() {
        if (this.readyState != "complete" && this.readyState != "loaded") return;
        this.onreadystatechange = null;
        cb(null, script);
      };
    }
  }
});

// node_modules/youtube-player/dist/loadYouTubeIframeApi.js
var require_loadYouTubeIframeApi = __commonJS({
  "node_modules/youtube-player/dist/loadYouTubeIframeApi.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _loadScript = require_load_script();
    var _loadScript2 = _interopRequireDefault(_loadScript);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function(emitter) {
      var iframeAPIReady = new Promise(function(resolve) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          resolve(window.YT);
          return;
        } else {
          var protocol = window.location.protocol === "http:" ? "http:" : "https:";
          (0, _loadScript2.default)(protocol + "//www.youtube.com/iframe_api", function(error) {
            if (error) {
              emitter.trigger("error", error);
            }
          });
        }
        var previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          if (previous) {
            previous();
          }
          resolve(window.YT);
        };
      });
      return iframeAPIReady;
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/youtube-player/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/youtube-player/node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/youtube-player/node_modules/debug/src/debug.js"(exports, module) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/youtube-player/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/youtube-player/node_modules/debug/src/browser.js"(exports, module) {
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/youtube-player/dist/functionNames.js
var require_functionNames = __commonJS({
  "node_modules/youtube-player/dist/functionNames.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"];
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/eventNames.js
var require_eventNames = __commonJS({
  "node_modules/youtube-player/dist/eventNames.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/constants/PlayerStates.js
var require_PlayerStates = __commonJS({
  "node_modules/youtube-player/dist/constants/PlayerStates.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/FunctionStateMap.js
var require_FunctionStateMap = __commonJS({
  "node_modules/youtube-player/dist/FunctionStateMap.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _PlayerStates = require_PlayerStates();
    var _PlayerStates2 = _interopRequireDefault(_PlayerStates);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
      pauseVideo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
        stateChangeRequired: false
      },
      playVideo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
        stateChangeRequired: false
      },
      seekTo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
        stateChangeRequired: true,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3e3
      }
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/YouTubePlayer.js
var require_YouTubePlayer = __commonJS({
  "node_modules/youtube-player/dist/YouTubePlayer.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _debug = require_browser();
    var _debug2 = _interopRequireDefault(_debug);
    var _functionNames = require_functionNames();
    var _functionNames2 = _interopRequireDefault(_functionNames);
    var _eventNames = require_eventNames();
    var _eventNames2 = _interopRequireDefault(_eventNames);
    var _FunctionStateMap = require_FunctionStateMap();
    var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var debug = (0, _debug2.default)("youtube-player");
    var YouTubePlayer = {};
    YouTubePlayer.proxyEvents = function(emitter) {
      var events = {};
      var _loop = function _loop2(eventName2) {
        var onEventName = "on" + eventName2.slice(0, 1).toUpperCase() + eventName2.slice(1);
        events[onEventName] = function(event) {
          debug('event "%s"', onEventName, event);
          emitter.trigger(eventName2, event);
        };
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventName = _step.value;
          _loop(eventName);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return events;
    };
    YouTubePlayer.promisifyPlayer = function(playerAPIReady) {
      var strictState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var functions = {};
      var _loop2 = function _loop22(functionName2) {
        if (strictState && _FunctionStateMap2.default[functionName2]) {
          functions[functionName2] = function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return playerAPIReady.then(function(player) {
              var stateInfo = _FunctionStateMap2.default[functionName2];
              var playerState = player.getPlayerState();
              var value = player[functionName2].apply(player, args);
              if (stateInfo.stateChangeRequired || // eslint-disable-next-line no-extra-parens
              Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
                return new Promise(function(resolve) {
                  var onPlayerStateChange = function onPlayerStateChange2() {
                    var playerStateAfterChange = player.getPlayerState();
                    var timeout = void 0;
                    if (typeof stateInfo.timeout === "number") {
                      timeout = setTimeout(function() {
                        player.removeEventListener("onStateChange", onPlayerStateChange2);
                        resolve();
                      }, stateInfo.timeout);
                    }
                    if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                      player.removeEventListener("onStateChange", onPlayerStateChange2);
                      clearTimeout(timeout);
                      resolve();
                    }
                  };
                  player.addEventListener("onStateChange", onPlayerStateChange);
                }).then(function() {
                  return value;
                });
              }
              return value;
            });
          };
        } else {
          functions[functionName2] = function() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return playerAPIReady.then(function(player) {
              return player[functionName2].apply(player, args);
            });
          };
        }
      };
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var functionName = _step2.value;
          _loop2(functionName);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      return functions;
    };
    exports.default = YouTubePlayer;
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/index.js
var require_dist = __commonJS({
  "node_modules/youtube-player/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _sister = require_sister();
    var _sister2 = _interopRequireDefault(_sister);
    var _loadYouTubeIframeApi = require_loadYouTubeIframeApi();
    var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);
    var _YouTubePlayer = require_YouTubePlayer();
    var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var youtubeIframeAPI = void 0;
    exports.default = function(maybeElementId) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var strictState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var emitter = (0, _sister2.default)();
      if (!youtubeIframeAPI) {
        youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
      }
      if (options.events) {
        throw new Error("Event handlers cannot be overwritten.");
      }
      if (typeof maybeElementId === "string" && !document.getElementById(maybeElementId)) {
        throw new Error('Element "' + maybeElementId + '" does not exist.');
      }
      options.events = _YouTubePlayer2.default.proxyEvents(emitter);
      var playerAPIReady = new Promise(function(resolve) {
        if ((typeof maybeElementId === "undefined" ? "undefined" : _typeof(maybeElementId)) === "object" && maybeElementId.playVideo instanceof Function) {
          var player = maybeElementId;
          resolve(player);
        } else {
          youtubeIframeAPI.then(function(YT) {
            var player2 = new YT.Player(maybeElementId, options);
            emitter.on("ready", function() {
              resolve(player2);
            });
            return null;
          });
        }
      });
      var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
      playerApi.on = emitter.on;
      playerApi.off = emitter.off;
      return playerApi;
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-youtube/dist/YouTube.esm.js
var import_prop_types = __toESM(require_prop_types());
var import_react = __toESM(require_react());
var import_fast_deep_equal = __toESM(require_fast_deep_equal());
var import_youtube_player = __toESM(require_dist());
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function shouldUpdateVideo(prevProps, props) {
  var _a, _b;
  if (prevProps.videoId !== props.videoId) {
    return true;
  }
  const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
  const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
  return __spreadProps(__spreadValues({}, opts), {
    height: 0,
    width: 0,
    playerVars: __spreadProps(__spreadValues({}, opts.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !(0, import_fast_deep_equal.default)(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
  var _a, _b, _c, _d;
  return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var defaultProps = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {
  },
  onError: () => {
  },
  onPlay: () => {
  },
  onPause: () => {
  },
  onEnd: () => {
  },
  onStateChange: () => {
  },
  onPlaybackRateChange: () => {
  },
  onPlaybackQualityChange: () => {
  }
};
var propTypes = {
  videoId: import_prop_types.default.string,
  id: import_prop_types.default.string,
  className: import_prop_types.default.string,
  iframeClassName: import_prop_types.default.string,
  style: import_prop_types.default.object,
  title: import_prop_types.default.string,
  loading: import_prop_types.default.oneOf(["lazy", "eager"]),
  opts: import_prop_types.default.objectOf(import_prop_types.default.any),
  onReady: import_prop_types.default.func,
  onError: import_prop_types.default.func,
  onPlay: import_prop_types.default.func,
  onPause: import_prop_types.default.func,
  onEnd: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onPlaybackRateChange: import_prop_types.default.func,
  onPlaybackQualityChange: import_prop_types.default.func
};
var _YouTube = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.destroyPlayerPromise = void 0;
    this.onPlayerReady = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerError = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerStateChange = (event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
      switch (event.data) {
        case _YouTube.PlayerState.ENDED:
          (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
          break;
        case _YouTube.PlayerState.PLAYING:
          (_f = (_e = this.props).onPlay) == null ? void 0 : _f.call(_e, event);
          break;
        case _YouTube.PlayerState.PAUSED:
          (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
          break;
        default:
      }
    };
    this.onPlayerPlaybackRateChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerPlaybackQualityChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
    };
    this.destroyPlayer = () => {
      if (this.internalPlayer) {
        this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0);
        return this.destroyPlayerPromise;
      }
      return Promise.resolve();
    };
    this.createPlayer = () => {
      if (typeof document === "undefined")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const playerOpts = __spreadProps(__spreadValues({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = (0, import_youtube_player.default)(this.container, playerOpts);
      this.internalPlayer.on("ready", this.onPlayerReady);
      this.internalPlayer.on("error", this.onPlayerError);
      this.internalPlayer.on("stateChange", this.onPlayerStateChange);
      this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
      this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
      if (this.props.title || this.props.loading) {
        this.internalPlayer.getIframe().then((iframe) => {
          if (this.props.title)
            iframe.setAttribute("title", this.props.title);
          if (this.props.loading)
            iframe.setAttribute("loading", this.props.loading);
        });
      }
    };
    this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer);
    this.updatePlayer = () => {
      var _a;
      (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe) => {
        if (this.props.id)
          iframe.setAttribute("id", this.props.id);
        else
          iframe.removeAttribute("id");
        if (this.props.iframeClassName)
          iframe.setAttribute("class", this.props.iframeClassName);
        else
          iframe.removeAttribute("class");
        if (this.props.opts && this.props.opts.width)
          iframe.setAttribute("width", this.props.opts.width.toString());
        else
          iframe.removeAttribute("width");
        if (this.props.opts && this.props.opts.height)
          iframe.setAttribute("height", this.props.opts.height.toString());
        else
          iframe.removeAttribute("height");
        if (this.props.title)
          iframe.setAttribute("title", this.props.title);
        else
          iframe.setAttribute("title", "YouTube video player");
        if (this.props.loading)
          iframe.setAttribute("loading", this.props.loading);
        else
          iframe.removeAttribute("loading");
      });
    };
    this.getInternalPlayer = () => {
      return this.internalPlayer;
    };
    this.updateVideo = () => {
      var _a, _b, _c, _d;
      if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
        (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
        return;
      }
      let autoplay = false;
      const opts = {
        videoId: this.props.videoId
      };
      if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
        autoplay = this.props.opts.playerVars.autoplay === 1;
        if ("start" in this.props.opts.playerVars) {
          opts.startSeconds = this.props.opts.playerVars.start;
        }
        if ("end" in this.props.opts.playerVars) {
          opts.endSeconds = this.props.opts.playerVars.end;
        }
      }
      if (autoplay) {
        (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
        return;
      }
      (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
    };
    this.refContainer = (container) => {
      this.container = container;
    };
    this.container = null;
    this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(prevProps) {
    return __async(this, null, function* () {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }
      if (shouldResetPlayer(prevProps, this.props)) {
        yield this.resetPlayer();
      }
      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return import_react.default.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, import_react.default.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
};
var YouTube = _YouTube;
YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var YouTube_default = YouTube;
export {
  YouTube_default as default
};
/*! Bundled license information:

sister/src/sister.js:
  (**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  *)
*/
//# sourceMappingURL=react-youtube.js.map
