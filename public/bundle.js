"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // public/node_modules/darkreader/darkreader.js
  var require_darkreader = __commonJS({
    "public/node_modules/darkreader/darkreader.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DarkReader = {}));
      })(exports, function(exports2) {
        "use strict";
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __values(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function __read(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        }
        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        }
        var MessageType;
        (function(MessageType2) {
          MessageType2["UI_GET_DATA"] = "ui-get-data";
          MessageType2["UI_SUBSCRIBE_TO_CHANGES"] = "ui-subscribe-to-changes";
          MessageType2["UI_UNSUBSCRIBE_FROM_CHANGES"] = "ui-unsubscribe-from-changes";
          MessageType2["UI_CHANGE_SETTINGS"] = "ui-change-settings";
          MessageType2["UI_SET_THEME"] = "ui-set-theme";
          MessageType2["UI_SET_SHORTCUT"] = "ui-set-shortcut";
          MessageType2["UI_TOGGLE_ACTIVE_TAB"] = "ui-toggle-active-tab";
          MessageType2["UI_MARK_NEWS_AS_READ"] = "ui-mark-news-as-read";
          MessageType2["UI_MARK_NEWS_AS_DISPLAYED"] = "ui-mark-news-as-displayed";
          MessageType2["UI_LOAD_CONFIG"] = "ui-load-config";
          MessageType2["UI_APPLY_DEV_DYNAMIC_THEME_FIXES"] = "ui-apply-dev-dynamic-theme-fixes";
          MessageType2["UI_RESET_DEV_DYNAMIC_THEME_FIXES"] = "ui-reset-dev-dynamic-theme-fixes";
          MessageType2["UI_APPLY_DEV_INVERSION_FIXES"] = "ui-apply-dev-inversion-fixes";
          MessageType2["UI_RESET_DEV_INVERSION_FIXES"] = "ui-reset-dev-inversion-fixes";
          MessageType2["UI_APPLY_DEV_STATIC_THEMES"] = "ui-apply-dev-static-themes";
          MessageType2["UI_RESET_DEV_STATIC_THEMES"] = "ui-reset-dev-static-themes";
          MessageType2["UI_SAVE_FILE"] = "ui-save-file";
          MessageType2["UI_REQUEST_EXPORT_CSS"] = "ui-request-export-css";
          MessageType2["UI_COLOR_SCHEME_CHANGE"] = "ui-color-scheme-change";
          MessageType2["BG_CHANGES"] = "bg-changes";
          MessageType2["BG_ADD_CSS_FILTER"] = "bg-add-css-filter";
          MessageType2["BG_ADD_STATIC_THEME"] = "bg-add-static-theme";
          MessageType2["BG_ADD_SVG_FILTER"] = "bg-add-svg-filter";
          MessageType2["BG_ADD_DYNAMIC_THEME"] = "bg-add-dynamic-theme";
          MessageType2["BG_EXPORT_CSS"] = "bg-export-css";
          MessageType2["BG_UNSUPPORTED_SENDER"] = "bg-unsupported-sender";
          MessageType2["BG_CLEAN_UP"] = "bg-clean-up";
          MessageType2["BG_RELOAD"] = "bg-reload";
          MessageType2["BG_FETCH_RESPONSE"] = "bg-fetch-response";
          MessageType2["BG_UI_UPDATE"] = "bg-ui-update";
          MessageType2["BG_CSS_UPDATE"] = "bg-css-update";
          MessageType2["CS_COLOR_SCHEME_CHANGE"] = "cs-color-scheme-change";
          MessageType2["CS_FRAME_CONNECT"] = "cs-frame-connect";
          MessageType2["CS_FRAME_FORGET"] = "cs-frame-forget";
          MessageType2["CS_FRAME_FREEZE"] = "cs-frame-freeze";
          MessageType2["CS_FRAME_RESUME"] = "cs-frame-resume";
          MessageType2["CS_EXPORT_CSS_RESPONSE"] = "cs-export-css-response";
          MessageType2["CS_FETCH"] = "cs-fetch";
          MessageType2["CS_DARK_THEME_DETECTED"] = "cs-dark-theme-detected";
          MessageType2["CS_DARK_THEME_NOT_DETECTED"] = "cs-dark-theme-not-detected";
          MessageType2["CS_LOG"] = "cs-log";
        })(MessageType || (MessageType = {}));
        var isNavigatorDefined = typeof navigator !== "undefined";
        var userAgent = isNavigatorDefined ? navigator.userAgentData && Array.isArray(navigator.userAgentData.brands) ? navigator.userAgentData.brands.map(function(brand) {
          return "".concat(brand.brand.toLowerCase(), " ").concat(brand.version);
        }).join(" ") : navigator.userAgent.toLowerCase() : "some useragent";
        var platform = isNavigatorDefined ? navigator.userAgentData && typeof navigator.userAgentData.platform === "string" ? navigator.userAgentData.platform.toLowerCase() : navigator.platform.toLowerCase() : "some platform";
        var isChromium = userAgent.includes("chrome") || userAgent.includes("chromium");
        var isThunderbird = userAgent.includes("thunderbird");
        var isFirefox = userAgent.includes("firefox") || userAgent.includes("librewolf") || isThunderbird;
        userAgent.includes("vivaldi");
        userAgent.includes("yabrowser");
        userAgent.includes("opr") || userAgent.includes("opera");
        userAgent.includes("edg");
        var isSafari = userAgent.includes("safari") && !isChromium;
        var isWindows = platform.startsWith("win");
        var isMacOS = platform.startsWith("mac");
        isNavigatorDefined && navigator.userAgentData ? navigator.userAgentData.mobile : userAgent.includes("mobile");
        var isShadowDomSupported = typeof ShadowRoot === "function";
        var isMatchMediaChangeEventListenerSupported = typeof MediaQueryList === "function" && typeof MediaQueryList.prototype.addEventListener === "function";
        (function() {
          var m = userAgent.match(/chrom(?:e|ium)(?:\/| )([^ ]+)/);
          if (m && m[1]) {
            return m[1];
          }
          return "";
        })();
        (function() {
          var m = userAgent.match(/(?:firefox|librewolf)(?:\/| )([^ ]+)/);
          if (m && m[1]) {
            return m[1];
          }
          return "";
        })();
        var isDefinedSelectorSupported = function() {
          try {
            document.querySelector(":defined");
            return true;
          } catch (err) {
            return false;
          }
        }();
        var isCSSColorSchemePropSupported = function() {
          if (typeof document === "undefined") {
            return false;
          }
          var el = document.createElement("div");
          el.setAttribute("style", "color-scheme: dark");
          return el.style && el.style.colorScheme === "dark";
        }();
        function getOKResponse(url, mimeType, origin) {
          return __awaiter(this, void 0, void 0, function() {
            var response;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, fetch(url, {
                    cache: "force-cache",
                    credentials: "omit",
                    referrer: origin
                  })];
                case 1:
                  response = _a.sent();
                  if (isFirefox && mimeType === "text/css" && url.startsWith("moz-extension://") && url.endsWith(".css")) {
                    return [2, response];
                  }
                  if (mimeType && !response.headers.get("Content-Type").startsWith(mimeType)) {
                    throw new Error("Mime type mismatch when loading ".concat(url));
                  }
                  if (!response.ok) {
                    throw new Error("Unable to load ".concat(url, " ").concat(response.status, " ").concat(response.statusText));
                  }
                  return [2, response];
              }
            });
          });
        }
        function loadAsDataURL(url, mimeType) {
          return __awaiter(this, void 0, void 0, function() {
            var response;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, getOKResponse(url, mimeType)];
                case 1:
                  response = _a.sent();
                  return [4, readResponseAsDataURL(response)];
                case 2:
                  return [2, _a.sent()];
              }
            });
          });
        }
        function readResponseAsDataURL(response) {
          return __awaiter(this, void 0, void 0, function() {
            var blob, dataURL;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, response.blob()];
                case 1:
                  blob = _a.sent();
                  return [4, new Promise(function(resolve) {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                      return resolve(reader.result);
                    };
                    reader.readAsDataURL(blob);
                  })];
                case 2:
                  dataURL = _a.sent();
                  return [2, dataURL];
              }
            });
          });
        }
        var throwCORSError = function(url) {
          return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, Promise.reject(new Error([
                "Embedded Dark Reader cannot access a cross-origin resource",
                url,
                "Overview your URLs and CORS policies or use",
                "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.",
                "See if using `DarkReader.setFetchMethod(window.fetch)`",
                "before `DarkReader.enable()` works."
              ].join(" ")))];
            });
          });
        };
        var fetcher = throwCORSError;
        function setFetchMethod$1(fetch2) {
          if (fetch2) {
            fetcher = fetch2;
          } else {
            fetcher = throwCORSError;
          }
        }
        function callFetchMethod(url) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, fetcher(url)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        }
        if (!window.chrome) {
          window.chrome = {};
        }
        if (!chrome.runtime) {
          chrome.runtime = {};
        }
        var messageListeners = /* @__PURE__ */ new Set();
        function sendMessage() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function() {
            var id_1, _a, url, responseType, response, text_1, error_1;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!(args[0] && args[0].type === MessageType.CS_FETCH))
                    return [3, 8];
                  id_1 = args[0].id;
                  _b.label = 1;
                case 1:
                  _b.trys.push([1, 7, , 8]);
                  _a = args[0].data, url = _a.url, responseType = _a.responseType;
                  return [4, callFetchMethod(url)];
                case 2:
                  response = _b.sent();
                  if (!(responseType === "data-url"))
                    return [3, 4];
                  return [4, readResponseAsDataURL(response)];
                case 3:
                  text_1 = _b.sent();
                  return [3, 6];
                case 4:
                  return [4, response.text()];
                case 5:
                  text_1 = _b.sent();
                  _b.label = 6;
                case 6:
                  messageListeners.forEach(function(cb) {
                    return cb({ type: MessageType.BG_FETCH_RESPONSE, data: text_1, error: null, id: id_1 });
                  });
                  return [3, 8];
                case 7:
                  error_1 = _b.sent();
                  console.error(error_1);
                  messageListeners.forEach(function(cb) {
                    return cb({ type: MessageType.BG_FETCH_RESPONSE, data: null, error: error_1, id: id_1 });
                  });
                  return [3, 8];
                case 8:
                  return [2];
              }
            });
          });
        }
        function addMessageListener(callback) {
          messageListeners.add(callback);
        }
        if (typeof chrome.runtime.sendMessage === "function") {
          var nativeSendMessage_1 = chrome.runtime.sendMessage;
          chrome.runtime.sendMessage = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            sendMessage.apply(void 0, __spreadArray([], __read(args), false));
            nativeSendMessage_1.apply(chrome.runtime, args);
          };
        } else {
          chrome.runtime.sendMessage = sendMessage;
        }
        if (!chrome.runtime.onMessage) {
          chrome.runtime.onMessage = {};
        }
        if (typeof chrome.runtime.onMessage.addListener === "function") {
          var nativeAddListener_1 = chrome.runtime.onMessage.addListener;
          chrome.runtime.onMessage.addListener = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            addMessageListener(args[0]);
            nativeAddListener_1.apply(chrome.runtime.onMessage, args);
          };
        } else {
          chrome.runtime.onMessage.addListener = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return addMessageListener(args[0]);
          };
        }
        var ThemeEngines = {
          cssFilter: "cssFilter",
          svgFilter: "svgFilter",
          staticTheme: "staticTheme",
          dynamicTheme: "dynamicTheme"
        };
        var DEFAULT_COLORS = {
          darkScheme: {
            background: "#181a1b",
            text: "#e8e6e3"
          },
          lightScheme: {
            background: "#dcdad7",
            text: "#181a1b"
          }
        };
        var DEFAULT_THEME = {
          mode: 1,
          brightness: 100,
          contrast: 100,
          grayscale: 0,
          sepia: 0,
          useFont: false,
          fontFamily: isMacOS ? "Helvetica Neue" : isWindows ? "Segoe UI" : "Open Sans",
          textStroke: 0,
          engine: ThemeEngines.dynamicTheme,
          stylesheet: "",
          darkSchemeBackgroundColor: DEFAULT_COLORS.darkScheme.background,
          darkSchemeTextColor: DEFAULT_COLORS.darkScheme.text,
          lightSchemeBackgroundColor: DEFAULT_COLORS.lightScheme.background,
          lightSchemeTextColor: DEFAULT_COLORS.lightScheme.text,
          scrollbarColor: isMacOS ? "" : "auto",
          selectionColor: "auto",
          styleSystemControls: !isCSSColorSchemePropSupported,
          lightColorScheme: "Default",
          darkColorScheme: "Default",
          immediateModify: false
        };
        function isArrayLike(items) {
          return items.length != null;
        }
        function forEach(items, iterator) {
          var e_1, _a;
          if (isArrayLike(items)) {
            for (var i = 0, len = items.length; i < len; i++) {
              iterator(items[i]);
            }
          } else {
            try {
              for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                iterator(item);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return))
                  _a.call(items_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          }
        }
        function push(array, addition) {
          forEach(addition, function(a) {
            return array.push(a);
          });
        }
        function toArray(items) {
          var results = [];
          for (var i = 0, len = items.length; i < len; i++) {
            results.push(items[i]);
          }
          return results;
        }
        function logInfo() {
        }
        function logWarn() {
        }
        function throttle(callback) {
          var pending = false;
          var frameId = null;
          var lastArgs;
          var throttled = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            lastArgs = args;
            if (frameId) {
              pending = true;
            } else {
              callback.apply(void 0, __spreadArray([], __read(lastArgs), false));
              frameId = requestAnimationFrame(function() {
                frameId = null;
                if (pending) {
                  callback.apply(void 0, __spreadArray([], __read(lastArgs), false));
                  pending = false;
                }
              });
            }
          };
          var cancel = function() {
            cancelAnimationFrame(frameId);
            pending = false;
            frameId = null;
          };
          return Object.assign(throttled, { cancel });
        }
        function createAsyncTasksQueue() {
          var tasks = [];
          var frameId = null;
          function runTasks() {
            var task;
            while (task = tasks.shift()) {
              task();
            }
            frameId = null;
          }
          function add(task) {
            tasks.push(task);
            if (!frameId) {
              frameId = requestAnimationFrame(runTasks);
            }
          }
          function cancel() {
            tasks.splice(0);
            cancelAnimationFrame(frameId);
            frameId = null;
          }
          return { add, cancel };
        }
        function getDuration(time) {
          var duration = 0;
          if (time.seconds) {
            duration += time.seconds * 1e3;
          }
          if (time.minutes) {
            duration += time.minutes * 60 * 1e3;
          }
          if (time.hours) {
            duration += time.hours * 60 * 60 * 1e3;
          }
          if (time.days) {
            duration += time.days * 24 * 60 * 60 * 1e3;
          }
          return duration;
        }
        function removeNode(node) {
          node && node.parentNode && node.parentNode.removeChild(node);
        }
        function watchForNodePosition(node, mode, onRestore) {
          if (onRestore === void 0) {
            onRestore = Function.prototype;
          }
          var MAX_ATTEMPTS_COUNT = 10;
          var RETRY_TIMEOUT = getDuration({ seconds: 2 });
          var ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          var prevSibling = node.previousSibling;
          var parent = node.parentNode;
          if (!parent) {
            throw new Error("Unable to watch for node position: parent element not found");
          }
          if (mode === "prev-sibling" && !prevSibling) {
            throw new Error("Unable to watch for node position: there is no previous sibling");
          }
          var attempts = 0;
          var start = null;
          var timeoutId = null;
          var restore = throttle(function() {
            if (timeoutId) {
              return;
            }
            attempts++;
            var now = Date.now();
            if (start == null) {
              start = now;
            } else if (attempts >= MAX_ATTEMPTS_COUNT) {
              if (now - start < ATTEMPTS_INTERVAL) {
                timeoutId = setTimeout(function() {
                  start = null;
                  attempts = 0;
                  timeoutId = null;
                  restore();
                }, RETRY_TIMEOUT);
                return;
              }
              start = now;
              attempts = 1;
            }
            if (mode === "parent") {
              if (prevSibling && prevSibling.parentNode !== parent) {
                stop();
                return;
              }
            }
            if (mode === "prev-sibling") {
              if (prevSibling.parentNode == null) {
                stop();
                return;
              }
              if (prevSibling.parentNode !== parent) {
                updateParent(prevSibling.parentNode);
              }
            }
            parent.insertBefore(node, prevSibling ? prevSibling.nextSibling : parent.firstChild);
            observer2.takeRecords();
            onRestore && onRestore();
          });
          var observer2 = new MutationObserver(function() {
            if (mode === "parent" && node.parentNode !== parent || mode === "prev-sibling" && node.previousSibling !== prevSibling) {
              restore();
            }
          });
          var run = function() {
            observer2.observe(parent, { childList: true });
          };
          var stop = function() {
            clearTimeout(timeoutId);
            observer2.disconnect();
            restore.cancel();
          };
          var skip = function() {
            observer2.takeRecords();
          };
          var updateParent = function(parentNode) {
            parent = parentNode;
            stop();
            run();
          };
          run();
          return { run, stop, skip };
        }
        function iterateShadowHosts(root, iterator) {
          if (root == null) {
            return;
          }
          var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function(node2) {
              return node2.shadowRoot == null ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
            }
          });
          for (var node = root.shadowRoot ? walker.currentNode : walker.nextNode(); node != null; node = walker.nextNode()) {
            if (node.classList.contains("surfingkeys_hints_host")) {
              continue;
            }
            iterator(node);
            iterateShadowHosts(node.shadowRoot, iterator);
          }
        }
        var isDOMReady = function() {
          return document.readyState === "complete" || document.readyState === "interactive";
        };
        function setIsDOMReady(newFunc) {
          isDOMReady = newFunc;
        }
        var readyStateListeners = /* @__PURE__ */ new Set();
        function addDOMReadyListener(listener) {
          isDOMReady() ? listener() : readyStateListeners.add(listener);
        }
        function removeDOMReadyListener(listener) {
          readyStateListeners.delete(listener);
        }
        function isReadyStateComplete() {
          return document.readyState === "complete";
        }
        var readyStateCompleteListeners = /* @__PURE__ */ new Set();
        function addReadyStateCompleteListener(listener) {
          isReadyStateComplete() ? listener() : readyStateCompleteListeners.add(listener);
        }
        function cleanReadyStateCompleteListeners() {
          readyStateCompleteListeners.clear();
        }
        if (!isDOMReady()) {
          var onReadyStateChange_1 = function() {
            if (isDOMReady()) {
              readyStateListeners.forEach(function(listener) {
                return listener();
              });
              readyStateListeners.clear();
              if (isReadyStateComplete()) {
                document.removeEventListener("readystatechange", onReadyStateChange_1);
                readyStateCompleteListeners.forEach(function(listener) {
                  return listener();
                });
                readyStateCompleteListeners.clear();
              }
            }
          };
          document.addEventListener("readystatechange", onReadyStateChange_1);
        }
        var HUGE_MUTATIONS_COUNT = 1e3;
        function isHugeMutation(mutations) {
          if (mutations.length > HUGE_MUTATIONS_COUNT) {
            return true;
          }
          var addedNodesCount = 0;
          for (var i = 0; i < mutations.length; i++) {
            addedNodesCount += mutations[i].addedNodes.length;
            if (addedNodesCount > HUGE_MUTATIONS_COUNT) {
              return true;
            }
          }
          return false;
        }
        function getElementsTreeOperations(mutations) {
          var additions = /* @__PURE__ */ new Set();
          var deletions = /* @__PURE__ */ new Set();
          var moves = /* @__PURE__ */ new Set();
          mutations.forEach(function(m) {
            forEach(m.addedNodes, function(n) {
              if (n instanceof Element && n.isConnected) {
                additions.add(n);
              }
            });
            forEach(m.removedNodes, function(n) {
              if (n instanceof Element) {
                if (n.isConnected) {
                  moves.add(n);
                  additions.delete(n);
                } else {
                  deletions.add(n);
                }
              }
            });
          });
          var duplicateAdditions = [];
          var duplicateDeletions = [];
          additions.forEach(function(node) {
            if (additions.has(node.parentElement)) {
              duplicateAdditions.push(node);
            }
          });
          deletions.forEach(function(node) {
            if (deletions.has(node.parentElement)) {
              duplicateDeletions.push(node);
            }
          });
          duplicateAdditions.forEach(function(node) {
            return additions.delete(node);
          });
          duplicateDeletions.forEach(function(node) {
            return deletions.delete(node);
          });
          return { additions, moves, deletions };
        }
        var optimizedTreeObservers = /* @__PURE__ */ new Map();
        var optimizedTreeCallbacks = /* @__PURE__ */ new WeakMap();
        function createOptimizedTreeObserver(root, callbacks) {
          var observer2;
          var observerCallbacks;
          var domReadyListener;
          if (optimizedTreeObservers.has(root)) {
            observer2 = optimizedTreeObservers.get(root);
            observerCallbacks = optimizedTreeCallbacks.get(observer2);
          } else {
            var hadHugeMutationsBefore_1 = false;
            var subscribedForReadyState_1 = false;
            observer2 = new MutationObserver(function(mutations) {
              if (isHugeMutation(mutations)) {
                if (!hadHugeMutationsBefore_1 || isDOMReady()) {
                  observerCallbacks.forEach(function(_a) {
                    var onHugeMutations = _a.onHugeMutations;
                    return onHugeMutations(root);
                  });
                } else if (!subscribedForReadyState_1) {
                  domReadyListener = function() {
                    return observerCallbacks.forEach(function(_a) {
                      var onHugeMutations = _a.onHugeMutations;
                      return onHugeMutations(root);
                    });
                  };
                  addDOMReadyListener(domReadyListener);
                  subscribedForReadyState_1 = true;
                }
                hadHugeMutationsBefore_1 = true;
              } else {
                var elementsOperations_1 = getElementsTreeOperations(mutations);
                observerCallbacks.forEach(function(_a) {
                  var onMinorMutations = _a.onMinorMutations;
                  return onMinorMutations(elementsOperations_1);
                });
              }
            });
            observer2.observe(root, { childList: true, subtree: true });
            optimizedTreeObservers.set(root, observer2);
            observerCallbacks = /* @__PURE__ */ new Set();
            optimizedTreeCallbacks.set(observer2, observerCallbacks);
          }
          observerCallbacks.add(callbacks);
          return {
            disconnect: function() {
              observerCallbacks.delete(callbacks);
              if (domReadyListener) {
                removeDOMReadyListener(domReadyListener);
              }
              if (observerCallbacks.size === 0) {
                observer2.disconnect();
                optimizedTreeCallbacks.delete(observer2);
                optimizedTreeObservers.delete(root);
              }
            }
          };
        }
        var anchor;
        var parsedURLCache = /* @__PURE__ */ new Map();
        function fixBaseURL($url) {
          if (!anchor) {
            anchor = document.createElement("a");
          }
          anchor.href = $url;
          return anchor.href;
        }
        function parseURL($url, $base) {
          if ($base === void 0) {
            $base = null;
          }
          var key = "".concat($url).concat($base ? ";".concat($base) : "");
          if (parsedURLCache.has(key)) {
            return parsedURLCache.get(key);
          }
          if ($base) {
            var parsedURL_1 = new URL($url, fixBaseURL($base));
            parsedURLCache.set(key, parsedURL_1);
            return parsedURL_1;
          }
          var parsedURL = new URL(fixBaseURL($url));
          parsedURLCache.set($url, parsedURL);
          return parsedURL;
        }
        function getAbsoluteURL($base, $relative) {
          if ($relative.match(/^data\\?\:/)) {
            return $relative;
          }
          if (/^\/\//.test($relative)) {
            return "".concat(location.protocol).concat($relative);
          }
          var b = parseURL($base);
          var a = parseURL($relative, b.href);
          return a.href;
        }
        function isRelativeHrefOnAbsolutePath(href) {
          if (href.startsWith("data:")) {
            return true;
          }
          var url = parseURL(href);
          if (url.protocol !== location.protocol) {
            return false;
          }
          if (url.hostname !== location.hostname) {
            return false;
          }
          if (url.port !== location.port) {
            return false;
          }
          return url.pathname === location.pathname;
        }
        function iterateCSSRules(rules, iterate, onMediaRuleError) {
          forEach(rules, function(rule) {
            if (rule.selectorText) {
              iterate(rule);
            } else if (rule.href) {
              try {
                iterateCSSRules(rule.styleSheet.cssRules, iterate, onMediaRuleError);
              } catch (err) {
                logInfo("Found a non-loaded link.");
                onMediaRuleError && onMediaRuleError();
              }
            } else if (rule.media) {
              var media = Array.from(rule.media);
              var isScreenOrAllOrQuery = media.some(function(m) {
                return m.startsWith("screen") || m.startsWith("all") || m.startsWith("(");
              });
              var isPrintOrSpeech = media.some(function(m) {
                return m.startsWith("print") || m.startsWith("speech");
              });
              if (isScreenOrAllOrQuery || !isPrintOrSpeech) {
                iterateCSSRules(rule.cssRules, iterate, onMediaRuleError);
              }
            } else if (rule.conditionText) {
              if (CSS.supports(rule.conditionText)) {
                iterateCSSRules(rule.cssRules, iterate, onMediaRuleError);
              }
            } else {
              logWarn("CSSRule type not supported", rule);
            }
          });
        }
        var shorthandVarDependantProperties = [
          "background",
          "border",
          "border-color",
          "border-bottom",
          "border-left",
          "border-right",
          "border-top",
          "outline",
          "outline-color"
        ];
        var shorthandVarDepPropRegexps = isSafari ? shorthandVarDependantProperties.map(function(prop) {
          var regexp = new RegExp("".concat(prop, ":\\s*(.*?)\\s*;"));
          return [prop, regexp];
        }) : null;
        function iterateCSSDeclarations(style, iterate) {
          forEach(style, function(property) {
            var value = style.getPropertyValue(property).trim();
            if (!value) {
              return;
            }
            iterate(property, value);
          });
          var cssText = style.cssText;
          if (cssText.includes("var(")) {
            if (isSafari) {
              shorthandVarDepPropRegexps.forEach(function(_a) {
                var _b = __read(_a, 2), prop = _b[0], regexp = _b[1];
                var match = cssText.match(regexp);
                if (match && match[1]) {
                  var val = match[1].trim();
                  iterate(prop, val);
                }
              });
            } else {
              shorthandVarDependantProperties.forEach(function(prop) {
                var val = style.getPropertyValue(prop);
                if (val && val.includes("var(")) {
                  iterate(prop, val);
                }
              });
            }
          }
        }
        var cssURLRegex = /url\((('.*?')|(".*?")|([^\)]*?))\)/g;
        var cssImportRegex = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;
        function getCSSURLValue(cssURL) {
          return cssURL.trim().replace(/^url\((.*)\)$/, "$1").trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1").replace(/(?:\\(.))/g, "$1");
        }
        function getCSSBaseBath(url) {
          var cssURL = parseURL(url);
          return "".concat(cssURL.origin).concat(cssURL.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1"));
        }
        function replaceCSSRelativeURLsWithAbsolute($css, cssBasePath) {
          return $css.replace(cssURLRegex, function(match) {
            var pathValue = getCSSURLValue(match);
            try {
              return 'url("'.concat(getAbsoluteURL(cssBasePath, pathValue), '")');
            } catch (err) {
              return match;
            }
          });
        }
        var cssCommentsRegex = /\/\*[\s\S]*?\*\//g;
        function removeCSSComments($css) {
          return $css.replace(cssCommentsRegex, "");
        }
        var fontFaceRegex = /@font-face\s*{[^}]*}/g;
        function replaceCSSFontFace($css) {
          return $css.replace(fontFaceRegex, "");
        }
        function evalMath(expression) {
          var rpnStack = [];
          var workingStack = [];
          var lastToken;
          for (var i = 0, len = expression.length; i < len; i++) {
            var token = expression[i];
            if (!token || token === " ") {
              continue;
            }
            if (operators.has(token)) {
              var op = operators.get(token);
              while (workingStack.length) {
                var currentOp = operators.get(workingStack[0]);
                if (!currentOp) {
                  break;
                }
                if (op.lessOrEqualThan(currentOp)) {
                  rpnStack.push(workingStack.shift());
                } else {
                  break;
                }
              }
              workingStack.unshift(token);
            } else if (!lastToken || operators.has(lastToken)) {
              rpnStack.push(token);
            } else {
              rpnStack[rpnStack.length - 1] += token;
            }
            lastToken = token;
          }
          rpnStack.push.apply(rpnStack, __spreadArray([], __read(workingStack), false));
          var stack = [];
          for (var i = 0, len = rpnStack.length; i < len; i++) {
            var op = operators.get(rpnStack[i]);
            if (op) {
              var args = stack.splice(0, 2);
              stack.push(op.exec(args[1], args[0]));
            } else {
              stack.unshift(parseFloat(rpnStack[i]));
            }
          }
          return stack[0];
        }
        var Operator = function() {
          function Operator2(precedence, method) {
            this.precendce = precedence;
            this.execMethod = method;
          }
          Operator2.prototype.exec = function(left, right) {
            return this.execMethod(left, right);
          };
          Operator2.prototype.lessOrEqualThan = function(op) {
            return this.precendce <= op.precendce;
          };
          return Operator2;
        }();
        var operators = /* @__PURE__ */ new Map([
          ["+", new Operator(1, function(left, right) {
            return left + right;
          })],
          ["-", new Operator(1, function(left, right) {
            return left - right;
          })],
          ["*", new Operator(2, function(left, right) {
            return left * right;
          })],
          ["/", new Operator(2, function(left, right) {
            return left / right;
          })]
        ]);
        function getMatches(regex, input, group) {
          if (group === void 0) {
            group = 0;
          }
          var matches = [];
          var m;
          while (m = regex.exec(input)) {
            matches.push(m[group]);
          }
          return matches;
        }
        function formatCSS(text) {
          function trimLeft(text2) {
            return text2.replace(/^\s+/, "");
          }
          function getIndent(depth2) {
            if (depth2 === 0) {
              return "";
            }
            return " ".repeat(4 * depth2);
          }
          if (text.length < 5e4) {
            var emptyRuleRegexp = /[^{}]+{\s*}/;
            while (emptyRuleRegexp.test(text)) {
              text = text.replace(emptyRuleRegexp, "");
            }
          }
          var css = text.replace(/\s{2,}/g, " ").replace(/\{/g, "{\n").replace(/\}/g, "\n}\n").replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n").replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n").replace(/\n\s*\n/g, "\n").split("\n");
          var depth = 0;
          var formatted = [];
          for (var x = 0, len = css.length; x < len; x++) {
            var line = "".concat(css[x], "\n");
            if (line.includes("{")) {
              formatted.push(getIndent(depth++) + trimLeft(line));
            } else if (line.includes("}")) {
              formatted.push(getIndent(--depth) + trimLeft(line));
            } else {
              formatted.push(getIndent(depth) + trimLeft(line));
            }
          }
          return formatted.join("").trim();
        }
        function getParenthesesRange(input, searchStartIndex) {
          if (searchStartIndex === void 0) {
            searchStartIndex = 0;
          }
          var length = input.length;
          var depth = 0;
          var firstOpenIndex = -1;
          for (var i = searchStartIndex; i < length; i++) {
            if (depth === 0) {
              var openIndex = input.indexOf("(", i);
              if (openIndex < 0) {
                break;
              }
              firstOpenIndex = openIndex;
              depth++;
              i = openIndex;
            } else {
              var closingIndex = input.indexOf(")", i);
              if (closingIndex < 0) {
                break;
              }
              var openIndex = input.indexOf("(", i);
              if (openIndex < 0 || closingIndex < openIndex) {
                depth--;
                if (depth === 0) {
                  return { start: firstOpenIndex, end: closingIndex + 1 };
                }
                i = closingIndex;
              } else {
                depth++;
                i = openIndex;
              }
            }
          }
          return null;
        }
        var hslaParseCache = /* @__PURE__ */ new Map();
        var rgbaParseCache = /* @__PURE__ */ new Map();
        function parseColorWithCache($color) {
          $color = $color.trim();
          if (rgbaParseCache.has($color)) {
            return rgbaParseCache.get($color);
          }
          if ($color.includes("calc(")) {
            $color = lowerCalcExpression($color);
          }
          var color = parse($color);
          color && rgbaParseCache.set($color, color);
          return color;
        }
        function parseToHSLWithCache(color) {
          if (hslaParseCache.has(color)) {
            return hslaParseCache.get(color);
          }
          var rgb = parseColorWithCache(color);
          if (!rgb) {
            return null;
          }
          var hsl = rgbToHSL(rgb);
          hslaParseCache.set(color, hsl);
          return hsl;
        }
        function clearColorCache() {
          hslaParseCache.clear();
          rgbaParseCache.clear();
        }
        function hslToRGB(_a) {
          var h = _a.h, s = _a.s, l = _a.l, _b = _a.a, a = _b === void 0 ? 1 : _b;
          if (s === 0) {
            var _c = __read([l, l, l].map(function(x2) {
              return Math.round(x2 * 255);
            }), 3), r_1 = _c[0], b_1 = _c[1], g_1 = _c[2];
            return { r: r_1, g: g_1, b: b_1, a };
          }
          var c = (1 - Math.abs(2 * l - 1)) * s;
          var x = c * (1 - Math.abs(h / 60 % 2 - 1));
          var m = l - c / 2;
          var _d = __read((h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]).map(function(n) {
            return Math.round((n + m) * 255);
          }), 3), r = _d[0], g = _d[1], b = _d[2];
          return { r, g, b, a };
        }
        function rgbToHSL(_a) {
          var r255 = _a.r, g255 = _a.g, b255 = _a.b, _b = _a.a, a = _b === void 0 ? 1 : _b;
          var r = r255 / 255;
          var g = g255 / 255;
          var b = b255 / 255;
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var c = max - min;
          var l = (max + min) / 2;
          if (c === 0) {
            return { h: 0, s: 0, l, a };
          }
          var h = (max === r ? (g - b) / c % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4) * 60;
          if (h < 0) {
            h += 360;
          }
          var s = c / (1 - Math.abs(2 * l - 1));
          return { h, s, l, a };
        }
        function toFixed(n, digits) {
          if (digits === void 0) {
            digits = 0;
          }
          var fixed = n.toFixed(digits);
          if (digits === 0) {
            return fixed;
          }
          var dot = fixed.indexOf(".");
          if (dot >= 0) {
            var zerosMatch = fixed.match(/0+$/);
            if (zerosMatch) {
              if (zerosMatch.index === dot + 1) {
                return fixed.substring(0, dot);
              }
              return fixed.substring(0, zerosMatch.index);
            }
          }
          return fixed;
        }
        function rgbToString(rgb) {
          var r = rgb.r, g = rgb.g, b = rgb.b, a = rgb.a;
          if (a != null && a < 1) {
            return "rgba(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ", ").concat(toFixed(a, 2), ")");
          }
          return "rgb(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ")");
        }
        function rgbToHexString(_a) {
          var r = _a.r, g = _a.g, b = _a.b, a = _a.a;
          return "#".concat((a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map(function(x) {
            return "".concat(x < 16 ? "0" : "").concat(x.toString(16));
          }).join(""));
        }
        function hslToString(hsl) {
          var h = hsl.h, s = hsl.s, l = hsl.l, a = hsl.a;
          if (a != null && a < 1) {
            return "hsla(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%, ").concat(toFixed(a, 2), ")");
          }
          return "hsl(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%)");
        }
        var rgbMatch = /^rgba?\([^\(\)]+\)$/;
        var hslMatch = /^hsla?\([^\(\)]+\)$/;
        var hexMatch = /^#[0-9a-f]+$/i;
        function parse($color) {
          var c = $color.trim().toLowerCase();
          if (c.match(rgbMatch)) {
            return parseRGB(c);
          }
          if (c.match(hslMatch)) {
            return parseHSL(c);
          }
          if (c.match(hexMatch)) {
            return parseHex(c);
          }
          if (knownColors.has(c)) {
            return getColorByName(c);
          }
          if (systemColors.has(c)) {
            return getSystemColor(c);
          }
          if ($color === "transparent") {
            return { r: 0, g: 0, b: 0, a: 0 };
          }
          return null;
        }
        function getNumbers($color) {
          var numbers = [];
          var prevPos = 0;
          var isMining = false;
          var startIndex = $color.indexOf("(");
          $color = $color.substring(startIndex + 1, $color.length - 1);
          for (var i = 0; i < $color.length; i++) {
            var c = $color[i];
            if (c >= "0" && c <= "9" || c === "." || c === "+" || c === "-") {
              isMining = true;
            } else if (isMining && (c === " " || c === ",")) {
              numbers.push($color.substring(prevPos, i));
              isMining = false;
              prevPos = i + 1;
            } else if (!isMining) {
              prevPos = i + 1;
            }
          }
          if (isMining) {
            numbers.push($color.substring(prevPos, $color.length));
          }
          return numbers;
        }
        function getNumbersFromString(str, range, units) {
          var raw = getNumbers(str);
          var unitsList = Object.entries(units);
          var numbers = raw.map(function(r) {
            return r.trim();
          }).map(function(r, i) {
            var n;
            var unit = unitsList.find(function(_a) {
              var _b = __read(_a, 1), u = _b[0];
              return r.endsWith(u);
            });
            if (unit) {
              n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
            } else {
              n = parseFloat(r);
            }
            if (range[i] > 1) {
              return Math.round(n);
            }
            return n;
          });
          return numbers;
        }
        var rgbRange = [255, 255, 255, 1];
        var rgbUnits = { "%": 100 };
        function parseRGB($rgb) {
          var _a = __read(getNumbersFromString($rgb, rgbRange, rgbUnits), 4), r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? 1 : _b;
          return { r, g, b, a };
        }
        var hslRange = [360, 1, 1, 1];
        var hslUnits = { "%": 100, "deg": 360, "rad": 2 * Math.PI, "turn": 1 };
        function parseHSL($hsl) {
          var _a = __read(getNumbersFromString($hsl, hslRange, hslUnits), 4), h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? 1 : _b;
          return hslToRGB({ h, s, l, a });
        }
        function parseHex($hex) {
          var h = $hex.substring(1);
          switch (h.length) {
            case 3:
            case 4: {
              var _a = __read([0, 1, 2].map(function(i) {
                return parseInt("".concat(h[i]).concat(h[i]), 16);
              }), 3), r = _a[0], g = _a[1], b = _a[2];
              var a = h.length === 3 ? 1 : parseInt("".concat(h[3]).concat(h[3]), 16) / 255;
              return { r, g, b, a };
            }
            case 6:
            case 8: {
              var _b = __read([0, 2, 4].map(function(i) {
                return parseInt(h.substring(i, i + 2), 16);
              }), 3), r = _b[0], g = _b[1], b = _b[2];
              var a = h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
              return { r, g, b, a };
            }
          }
          return null;
        }
        function getColorByName($color) {
          var n = knownColors.get($color);
          return {
            r: n >> 16 & 255,
            g: n >> 8 & 255,
            b: n >> 0 & 255,
            a: 1
          };
        }
        function getSystemColor($color) {
          var n = systemColors.get($color);
          return {
            r: n >> 16 & 255,
            g: n >> 8 & 255,
            b: n >> 0 & 255,
            a: 1
          };
        }
        function lowerCalcExpression(color) {
          var searchIndex = 0;
          var replaceBetweenIndices = function(start, end, replacement) {
            color = color.substring(0, start) + replacement + color.substring(end);
          };
          while ((searchIndex = color.indexOf("calc(")) !== -1) {
            var range = getParenthesesRange(color, searchIndex);
            if (!range) {
              break;
            }
            var slice = color.slice(range.start + 1, range.end - 1);
            var includesPercentage = slice.includes("%");
            slice = slice.split("%").join("");
            var output = Math.round(evalMath(slice));
            replaceBetweenIndices(range.start - 4, range.end, output + (includesPercentage ? "%" : ""));
          }
          return color;
        }
        var knownColors = new Map(Object.entries({
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgrey: 11119017,
          darkgreen: 25600,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          grey: 8421504,
          green: 32768,
          greenyellow: 11403055,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgrey: 13882323,
          lightgreen: 9498256,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
        }));
        var systemColors = new Map(Object.entries({
          ActiveBorder: 3906044,
          ActiveCaption: 0,
          AppWorkspace: 11184810,
          Background: 6513614,
          ButtonFace: 16777215,
          ButtonHighlight: 15329769,
          ButtonShadow: 10461343,
          ButtonText: 0,
          CaptionText: 0,
          GrayText: 8355711,
          Highlight: 11720703,
          HighlightText: 0,
          InactiveBorder: 16777215,
          InactiveCaption: 16777215,
          InactiveCaptionText: 0,
          InfoBackground: 16514245,
          InfoText: 0,
          Menu: 16185078,
          MenuText: 16777215,
          Scrollbar: 11184810,
          ThreeDDarkShadow: 0,
          ThreeDFace: 12632256,
          ThreeDHighlight: 16777215,
          ThreeDLightShadow: 16777215,
          ThreeDShadow: 0,
          Window: 15527148,
          WindowFrame: 11184810,
          WindowText: 0,
          "-webkit-focus-ring-color": 15046400
        }).map(function(_a) {
          var _b = __read(_a, 2), key = _b[0], value = _b[1];
          return [key.toLowerCase(), value];
        }));
        function getSRGBLightness(r, g, b) {
          return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        }
        function scale(x, inLow, inHigh, outLow, outHigh) {
          return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
        }
        function clamp(x, min, max) {
          return Math.min(max, Math.max(min, x));
        }
        function multiplyMatrices(m1, m2) {
          var result = [];
          for (var i = 0, len = m1.length; i < len; i++) {
            result[i] = [];
            for (var j = 0, len2 = m2[0].length; j < len2; j++) {
              var sum2 = 0;
              for (var k = 0, len3 = m1[0].length; k < len3; k++) {
                sum2 += m1[i][k] * m2[k][j];
              }
              result[i][j] = sum2;
            }
          }
          return result;
        }
        function createFilterMatrix(config) {
          var m = Matrix.identity();
          if (config.sepia !== 0) {
            m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
          }
          if (config.grayscale !== 0) {
            m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
          }
          if (config.contrast !== 100) {
            m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
          }
          if (config.brightness !== 100) {
            m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
          }
          if (config.mode === 1) {
            m = multiplyMatrices(m, Matrix.invertNHue());
          }
          return m;
        }
        function applyColorMatrix(_a, matrix) {
          var _b = __read(_a, 3), r = _b[0], g = _b[1], b = _b[2];
          var rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
          var result = multiplyMatrices(matrix, rgb);
          return [0, 1, 2].map(function(i) {
            return clamp(Math.round(result[i][0] * 255), 0, 255);
          });
        }
        var Matrix = {
          identity: function() {
            return [
              [1, 0, 0, 0, 0],
              [0, 1, 0, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          invertNHue: function() {
            return [
              [0.333, -0.667, -0.667, 0, 1],
              [-0.667, 0.333, -0.667, 0, 1],
              [-0.667, -0.667, 0.333, 0, 1],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          brightness: function(v) {
            return [
              [v, 0, 0, 0, 0],
              [0, v, 0, 0, 0],
              [0, 0, v, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          contrast: function(v) {
            var t = (1 - v) / 2;
            return [
              [v, 0, 0, 0, t],
              [0, v, 0, 0, t],
              [0, 0, v, 0, t],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          sepia: function(v) {
            return [
              [0.393 + 0.607 * (1 - v), 0.769 - 0.769 * (1 - v), 0.189 - 0.189 * (1 - v), 0, 0],
              [0.349 - 0.349 * (1 - v), 0.686 + 0.314 * (1 - v), 0.168 - 0.168 * (1 - v), 0, 0],
              [0.272 - 0.272 * (1 - v), 0.534 - 0.534 * (1 - v), 0.131 + 0.869 * (1 - v), 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          grayscale: function(v) {
            return [
              [0.2126 + 0.7874 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0],
              [0.2126 - 0.2126 * (1 - v), 0.7152 + 0.2848 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0],
              [0.2126 - 0.2126 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 + 0.9278 * (1 - v), 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          }
        };
        function getBgPole(theme) {
          var isDarkScheme = theme.mode === 1;
          var prop = isDarkScheme ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor";
          return theme[prop];
        }
        function getFgPole(theme) {
          var isDarkScheme = theme.mode === 1;
          var prop = isDarkScheme ? "darkSchemeTextColor" : "lightSchemeTextColor";
          return theme[prop];
        }
        var colorModificationCache = /* @__PURE__ */ new Map();
        function clearColorModificationCache() {
          colorModificationCache.clear();
        }
        var rgbCacheKeys = ["r", "g", "b", "a"];
        var themeCacheKeys$1 = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        function getCacheId(rgb, theme) {
          var resultId = "";
          rgbCacheKeys.forEach(function(key) {
            resultId += "".concat(rgb[key], ";");
          });
          themeCacheKeys$1.forEach(function(key) {
            resultId += "".concat(theme[key], ";");
          });
          return resultId;
        }
        function modifyColorWithCache(rgb, theme, modifyHSL, poleColor, anotherPoleColor) {
          var fnCache;
          if (colorModificationCache.has(modifyHSL)) {
            fnCache = colorModificationCache.get(modifyHSL);
          } else {
            fnCache = /* @__PURE__ */ new Map();
            colorModificationCache.set(modifyHSL, fnCache);
          }
          var id = getCacheId(rgb, theme);
          if (fnCache.has(id)) {
            return fnCache.get(id);
          }
          var hsl = rgbToHSL(rgb);
          var pole = poleColor == null ? null : parseToHSLWithCache(poleColor);
          var anotherPole = anotherPoleColor == null ? null : parseToHSLWithCache(anotherPoleColor);
          var modified = modifyHSL(hsl, pole, anotherPole);
          var _a = hslToRGB(modified), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
          var matrix = createFilterMatrix(theme);
          var _b = __read(applyColorMatrix([r, g, b], matrix), 3), rf = _b[0], gf = _b[1], bf = _b[2];
          var color = a === 1 ? rgbToHexString({ r: rf, g: gf, b: bf }) : rgbToString({ r: rf, g: gf, b: bf, a });
          fnCache.set(id, color);
          return color;
        }
        function noopHSL(hsl) {
          return hsl;
        }
        function modifyColor(rgb, theme) {
          return modifyColorWithCache(rgb, theme, noopHSL);
        }
        function modifyLightSchemeColor(rgb, theme) {
          var poleBg = getBgPole(theme);
          var poleFg = getFgPole(theme);
          return modifyColorWithCache(rgb, theme, modifyLightModeHSL, poleFg, poleBg);
        }
        function modifyLightModeHSL(_a, poleFg, poleBg) {
          var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
          var isDark = l < 0.5;
          var isNeutral;
          if (isDark) {
            isNeutral = l < 0.2 || s < 0.12;
          } else {
            var isBlue = h > 200 && h < 280;
            isNeutral = s < 0.24 || l > 0.8 && isBlue;
          }
          var hx = h;
          var sx = l;
          if (isNeutral) {
            if (isDark) {
              hx = poleFg.h;
              sx = poleFg.s;
            } else {
              hx = poleBg.h;
              sx = poleBg.s;
            }
          }
          var lx = scale(l, 0, 1, poleFg.l, poleBg.l);
          return { h: hx, s: sx, l: lx, a };
        }
        var MAX_BG_LIGHTNESS = 0.4;
        function modifyBgHSL(_a, pole) {
          var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
          var isDark = l < 0.5;
          var isBlue = h > 200 && h < 280;
          var isNeutral = s < 0.12 || l > 0.8 && isBlue;
          if (isDark) {
            var lx_1 = scale(l, 0, 0.5, 0, MAX_BG_LIGHTNESS);
            if (isNeutral) {
              var hx_1 = pole.h;
              var sx = pole.s;
              return { h: hx_1, s: sx, l: lx_1, a };
            }
            return { h, s, l: lx_1, a };
          }
          var lx = scale(l, 0.5, 1, MAX_BG_LIGHTNESS, pole.l);
          if (isNeutral) {
            var hx_2 = pole.h;
            var sx = pole.s;
            return { h: hx_2, s: sx, l: lx, a };
          }
          var hx = h;
          var isYellow = h > 60 && h < 180;
          if (isYellow) {
            var isCloserToGreen = h > 120;
            if (isCloserToGreen) {
              hx = scale(h, 120, 180, 135, 180);
            } else {
              hx = scale(h, 60, 120, 60, 105);
            }
          }
          if (hx > 40 && hx < 80) {
            lx *= 0.75;
          }
          return { h: hx, s, l: lx, a };
        }
        function modifyBackgroundColor(rgb, theme) {
          if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
          }
          var pole = getBgPole(theme);
          return modifyColorWithCache(rgb, __assign(__assign({}, theme), { mode: 0 }), modifyBgHSL, pole);
        }
        var MIN_FG_LIGHTNESS = 0.55;
        function modifyBlueFgHue(hue) {
          return scale(hue, 205, 245, 205, 220);
        }
        function modifyFgHSL(_a, pole) {
          var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
          var isLight = l > 0.5;
          var isNeutral = l < 0.2 || s < 0.24;
          var isBlue = !isNeutral && h > 205 && h < 245;
          if (isLight) {
            var lx_2 = scale(l, 0.5, 1, MIN_FG_LIGHTNESS, pole.l);
            if (isNeutral) {
              var hx_3 = pole.h;
              var sx = pole.s;
              return { h: hx_3, s: sx, l: lx_2, a };
            }
            var hx_4 = h;
            if (isBlue) {
              hx_4 = modifyBlueFgHue(h);
            }
            return { h: hx_4, s, l: lx_2, a };
          }
          if (isNeutral) {
            var hx_5 = pole.h;
            var sx = pole.s;
            var lx_3 = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
            return { h: hx_5, s: sx, l: lx_3, a };
          }
          var hx = h;
          var lx;
          if (isBlue) {
            hx = modifyBlueFgHue(h);
            lx = scale(l, 0, 0.5, pole.l, Math.min(1, MIN_FG_LIGHTNESS + 0.05));
          } else {
            lx = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
          }
          return { h: hx, s, l: lx, a };
        }
        function modifyForegroundColor(rgb, theme) {
          if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
          }
          var pole = getFgPole(theme);
          return modifyColorWithCache(rgb, __assign(__assign({}, theme), { mode: 0 }), modifyFgHSL, pole);
        }
        function modifyBorderHSL(_a, poleFg, poleBg) {
          var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
          var isDark = l < 0.5;
          var isNeutral = l < 0.2 || s < 0.24;
          var hx = h;
          var sx = s;
          if (isNeutral) {
            if (isDark) {
              hx = poleFg.h;
              sx = poleFg.s;
            } else {
              hx = poleBg.h;
              sx = poleBg.s;
            }
          }
          var lx = scale(l, 0, 1, 0.5, 0.2);
          return { h: hx, s: sx, l: lx, a };
        }
        function modifyBorderColor(rgb, theme) {
          if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
          }
          var poleFg = getFgPole(theme);
          var poleBg = getBgPole(theme);
          return modifyColorWithCache(rgb, __assign(__assign({}, theme), { mode: 0 }), modifyBorderHSL, poleFg, poleBg);
        }
        function modifyShadowColor(rgb, filter2) {
          return modifyBackgroundColor(rgb, filter2);
        }
        function modifyGradientColor(rgb, filter2) {
          return modifyBackgroundColor(rgb, filter2);
        }
        function createTextStyle(config) {
          var lines = [];
          lines.push('*:not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {');
          if (config.useFont && config.fontFamily) {
            lines.push("  font-family: ".concat(config.fontFamily, " !important;"));
          }
          if (config.textStroke > 0) {
            lines.push("  -webkit-text-stroke: ".concat(config.textStroke, "px !important;"));
            lines.push("  text-stroke: ".concat(config.textStroke, "px !important;"));
          }
          lines.push("}");
          return lines.join("\n");
        }
        var FilterMode;
        (function(FilterMode2) {
          FilterMode2[FilterMode2["light"] = 0] = "light";
          FilterMode2[FilterMode2["dark"] = 1] = "dark";
        })(FilterMode || (FilterMode = {}));
        function getCSSFilterValue(config) {
          var filters = [];
          if (config.mode === FilterMode.dark) {
            filters.push("invert(100%) hue-rotate(180deg)");
          }
          if (config.brightness !== 100) {
            filters.push("brightness(".concat(config.brightness, "%)"));
          }
          if (config.contrast !== 100) {
            filters.push("contrast(".concat(config.contrast, "%)"));
          }
          if (config.grayscale !== 0) {
            filters.push("grayscale(".concat(config.grayscale, "%)"));
          }
          if (config.sepia !== 0) {
            filters.push("sepia(".concat(config.sepia, "%)"));
          }
          if (filters.length === 0) {
            return null;
          }
          return filters.join(" ");
        }
        function toSVGMatrix(matrix) {
          return matrix.slice(0, 4).map(function(m) {
            return m.map(function(m2) {
              return m2.toFixed(3);
            }).join(" ");
          }).join(" ");
        }
        function getSVGFilterMatrixValue(config) {
          return toSVGMatrix(createFilterMatrix(config));
        }
        var counter = 0;
        var resolvers$1 = /* @__PURE__ */ new Map();
        var rejectors = /* @__PURE__ */ new Map();
        function bgFetch(request) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, new Promise(function(resolve, reject) {
                var id = ++counter;
                resolvers$1.set(id, resolve);
                rejectors.set(id, reject);
                chrome.runtime.sendMessage({ type: MessageType.CS_FETCH, data: request, id });
              })];
            });
          });
        }
        chrome.runtime.onMessage.addListener(function(_a) {
          var type = _a.type, data = _a.data, error = _a.error, id = _a.id;
          if (type === MessageType.BG_FETCH_RESPONSE) {
            var resolve = resolvers$1.get(id);
            var reject = rejectors.get(id);
            resolvers$1.delete(id);
            rejectors.delete(id);
            if (error) {
              reject && reject(error);
            } else {
              resolve && resolve(data);
            }
          }
        });
        var AsyncQueue = function() {
          function AsyncQueue2() {
            this.queue = [];
            this.timerId = null;
            this.frameDuration = 1e3 / 60;
          }
          AsyncQueue2.prototype.addToQueue = function(entry) {
            this.queue.push(entry);
            this.startQueue();
          };
          AsyncQueue2.prototype.stopQueue = function() {
            if (this.timerId !== null) {
              cancelAnimationFrame(this.timerId);
              this.timerId = null;
            }
            this.queue = [];
          };
          AsyncQueue2.prototype.startQueue = function() {
            var _this = this;
            if (this.timerId) {
              return;
            }
            this.timerId = requestAnimationFrame(function() {
              _this.timerId = null;
              var start = Date.now();
              var cb;
              while (cb = _this.queue.shift()) {
                cb();
                if (Date.now() - start >= _this.frameDuration) {
                  _this.startQueue();
                  break;
                }
              }
            });
          };
          return AsyncQueue2;
        }();
        var imageManager = new AsyncQueue();
        function getImageDetails(url) {
          return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              return [2, new Promise(function(resolve, reject) {
                return __awaiter(_this, void 0, void 0, function() {
                  var dataURL, error_1, image_1, error_2;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        if (!url.startsWith("data:"))
                          return [3, 1];
                        dataURL = url;
                        return [3, 4];
                      case 1:
                        _a2.trys.push([1, 3, , 4]);
                        return [4, getImageDataURL(url)];
                      case 2:
                        dataURL = _a2.sent();
                        return [3, 4];
                      case 3:
                        error_1 = _a2.sent();
                        reject(error_1);
                        return [2];
                      case 4:
                        _a2.trys.push([4, 6, , 7]);
                        return [4, urlToImage(dataURL)];
                      case 5:
                        image_1 = _a2.sent();
                        imageManager.addToQueue(function() {
                          resolve(__assign({ src: url, dataURL, width: image_1.naturalWidth, height: image_1.naturalHeight }, analyzeImage(image_1)));
                        });
                        return [3, 7];
                      case 6:
                        error_2 = _a2.sent();
                        reject(error_2);
                        return [3, 7];
                      case 7:
                        return [2];
                    }
                  });
                });
              })];
            });
          });
        }
        function getImageDataURL(url) {
          return __awaiter(this, void 0, void 0, function() {
            var parsedURL;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  parsedURL = new URL(url);
                  if (!(parsedURL.origin === location.origin))
                    return [3, 2];
                  return [4, loadAsDataURL(url)];
                case 1:
                  return [2, _a.sent()];
                case 2:
                  return [4, bgFetch({ url, responseType: "data-url" })];
                case 3:
                  return [2, _a.sent()];
              }
            });
          });
        }
        function urlToImage(url) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, new Promise(function(resolve, reject) {
                var image = new Image();
                image.onload = function() {
                  return resolve(image);
                };
                image.onerror = function() {
                  return reject("Unable to load image ".concat(url));
                };
                image.src = url;
              })];
            });
          });
        }
        var MAX_ANALIZE_PIXELS_COUNT = 32 * 32;
        var canvas;
        var context;
        function createCanvas() {
          var maxWidth = MAX_ANALIZE_PIXELS_COUNT;
          var maxHeight = MAX_ANALIZE_PIXELS_COUNT;
          canvas = document.createElement("canvas");
          canvas.width = maxWidth;
          canvas.height = maxHeight;
          context = canvas.getContext("2d");
          context.imageSmoothingEnabled = false;
        }
        function removeCanvas() {
          canvas = null;
          context = null;
        }
        var MAX_IMAGE_SIZE = 5 * 1024 * 1024;
        function analyzeImage(image) {
          if (!canvas) {
            createCanvas();
          }
          var naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
          if (naturalHeight === 0 || naturalWidth === 0) {
            logWarn("logWarn(Image is empty ".concat(image.currentSrc, ")"));
            return null;
          }
          var size = naturalWidth * naturalHeight * 4;
          if (size > MAX_IMAGE_SIZE) {
            return {
              isDark: false,
              isLight: false,
              isTransparent: false,
              isLarge: false,
              isTooLarge: true
            };
          }
          var naturalPixelsCount = naturalWidth * naturalHeight;
          var k = Math.min(1, Math.sqrt(MAX_ANALIZE_PIXELS_COUNT / naturalPixelsCount));
          var width = Math.ceil(naturalWidth * k);
          var height = Math.ceil(naturalHeight * k);
          context.clearRect(0, 0, width, height);
          context.drawImage(image, 0, 0, naturalWidth, naturalHeight, 0, 0, width, height);
          var imageData = context.getImageData(0, 0, width, height);
          var d = imageData.data;
          var TRANSPARENT_ALPHA_THRESHOLD = 0.05;
          var DARK_LIGHTNESS_THRESHOLD = 0.4;
          var LIGHT_LIGHTNESS_THRESHOLD = 0.7;
          var transparentPixelsCount = 0;
          var darkPixelsCount = 0;
          var lightPixelsCount = 0;
          var i, x, y;
          var r, g, b, a;
          var l;
          for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
              i = 4 * (y * width + x);
              r = d[i + 0];
              g = d[i + 1];
              b = d[i + 2];
              a = d[i + 3];
              if (a / 255 < TRANSPARENT_ALPHA_THRESHOLD) {
                transparentPixelsCount++;
              } else {
                l = getSRGBLightness(r, g, b);
                if (l < DARK_LIGHTNESS_THRESHOLD) {
                  darkPixelsCount++;
                }
                if (l > LIGHT_LIGHTNESS_THRESHOLD) {
                  lightPixelsCount++;
                }
              }
            }
          }
          var totalPixelsCount = width * height;
          var opaquePixelsCount = totalPixelsCount - transparentPixelsCount;
          var DARK_IMAGE_THRESHOLD = 0.7;
          var LIGHT_IMAGE_THRESHOLD = 0.7;
          var TRANSPARENT_IMAGE_THRESHOLD = 0.1;
          var LARGE_IMAGE_PIXELS_COUNT = 800 * 600;
          return {
            isDark: darkPixelsCount / opaquePixelsCount >= DARK_IMAGE_THRESHOLD,
            isLight: lightPixelsCount / opaquePixelsCount >= LIGHT_IMAGE_THRESHOLD,
            isTransparent: transparentPixelsCount / totalPixelsCount >= TRANSPARENT_IMAGE_THRESHOLD,
            isLarge: naturalPixelsCount >= LARGE_IMAGE_PIXELS_COUNT,
            isTooLarge: false
          };
        }
        function getFilteredImageDataURL(_a, theme) {
          var dataURL = _a.dataURL, width = _a.width, height = _a.height;
          var matrix = getSVGFilterMatrixValue(theme);
          var svg = [
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.concat(width, '" height="').concat(height, '">'),
            "<defs>",
            '<filter id="darkreader-image-filter">',
            '<feColorMatrix type="matrix" values="'.concat(matrix, '" />'),
            "</filter>",
            "</defs>",
            '<image width="'.concat(width, '" height="').concat(height, '" filter="url(#darkreader-image-filter)" xlink:href="').concat(dataURL, '" />'),
            "</svg>"
          ].join("");
          return "data:image/svg+xml;base64,".concat(btoa(svg));
        }
        function cleanImageProcessingCache() {
          imageManager && imageManager.stopQueue();
          removeCanvas();
        }
        var gradientLength = "gradient".length;
        var conicGradient = "conic-";
        var conicGradientLength = conicGradient.length;
        var radialGradient = "radial-";
        var linearGradient = "linear-";
        function parseGradient(value) {
          var result = [];
          var index = 0;
          var startIndex = conicGradient.length;
          var _loop_1 = function() {
            var typeGradient;
            [linearGradient, radialGradient, conicGradient].find(function(possibleType) {
              if (index - possibleType.length >= 0) {
                var possibleGradient = value.substring(index - possibleType.length, index);
                if (possibleGradient === possibleType) {
                  if (value.slice(index - possibleType.length - 10, index - possibleType.length - 1) === "repeating") {
                    typeGradient = "repeating-".concat(possibleType, "gradient");
                    return true;
                  }
                  if (value.slice(index - possibleType.length - 8, index - possibleType.length - 1) === "-webkit") {
                    typeGradient = "-webkit-".concat(possibleType, "gradient");
                    return true;
                  }
                  typeGradient = "".concat(possibleType, "gradient");
                  return true;
                }
              }
            });
            if (!typeGradient) {
              return "break";
            }
            var _a = getParenthesesRange(value, index + gradientLength), start = _a.start, end = _a.end;
            var match = value.substring(start + 1, end - 1);
            startIndex = end + 1 + conicGradientLength;
            result.push({
              typeGradient,
              match,
              offset: typeGradient.length + 2,
              index: index - typeGradient.length + gradientLength,
              hasComma: true
            });
          };
          while ((index = value.indexOf("gradient", startIndex)) !== -1) {
            var state_1 = _loop_1();
            if (state_1 === "break")
              break;
          }
          if (result.length) {
            result[result.length - 1].hasComma = false;
          }
          return result;
        }
        function getPriority(ruleStyle, property) {
          return Boolean(ruleStyle && ruleStyle.getPropertyPriority(property));
        }
        function getModifiableCSSDeclaration(property, value, rule, variablesStore2, ignoreImageSelectors, isCancelled) {
          if (property.startsWith("--")) {
            var modifier = getVariableModifier(variablesStore2, property, value, rule, ignoreImageSelectors, isCancelled);
            if (modifier) {
              return { property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
          } else if (value.includes("var(")) {
            var modifier = getVariableDependantModifier(variablesStore2, property, value);
            if (modifier) {
              return { property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
          } else if (property === "color-scheme") {
            return null;
          } else if (property.includes("color") && property !== "-webkit-print-color-adjust" || property === "fill" || property === "stroke" || property === "stop-color") {
            var modifier = getColorModifier(property, value, rule);
            if (modifier) {
              return { property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
          } else if (property === "background-image" || property === "list-style-image") {
            var modifier = getBgImageModifier(value, rule, ignoreImageSelectors, isCancelled);
            if (modifier) {
              return { property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
          } else if (property.includes("shadow")) {
            var modifier = getShadowModifier(value);
            if (modifier) {
              return { property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
          }
          return null;
        }
        function joinSelectors() {
          var selectors = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            selectors[_i] = arguments[_i];
          }
          return selectors.filter(Boolean).join(", ");
        }
        function getModifiedUserAgentStyle(theme, isIFrame2, styleSystemControls) {
          var lines = [];
          if (!isIFrame2) {
            lines.push("html {");
            lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme), " !important;"));
            lines.push("}");
          }
          if (isCSSColorSchemePropSupported) {
            lines.push("html {");
            lines.push("    color-scheme: ".concat(theme.mode === 1 ? "dark" : "dark light", " !important;"));
            lines.push("}");
          }
          var bgSelectors = joinSelectors(isIFrame2 ? "" : "html, body", styleSystemControls ? "input, textarea, select, button, dialog" : "");
          if (bgSelectors) {
            lines.push("".concat(bgSelectors, " {"));
            lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme), ";"));
            lines.push("}");
          }
          lines.push("".concat(joinSelectors("html, body", styleSystemControls ? "input, textarea, select, button" : ""), " {"));
          lines.push("    border-color: ".concat(modifyBorderColor({ r: 76, g: 76, b: 76 }, theme), ";"));
          lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme), ";"));
          lines.push("}");
          lines.push("a {");
          lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 64, b: 255 }, theme), ";"));
          lines.push("}");
          lines.push("table {");
          lines.push("    border-color: ".concat(modifyBorderColor({ r: 128, g: 128, b: 128 }, theme), ";"));
          lines.push("}");
          lines.push("::placeholder {");
          lines.push("    color: ".concat(modifyForegroundColor({ r: 169, g: 169, b: 169 }, theme), ";"));
          lines.push("}");
          lines.push("input:-webkit-autofill,");
          lines.push("textarea:-webkit-autofill,");
          lines.push("select:-webkit-autofill {");
          lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 250, g: 255, b: 189 }, theme), " !important;"));
          lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme), " !important;"));
          lines.push("}");
          if (theme.scrollbarColor) {
            lines.push(getModifiedScrollbarStyle(theme));
          }
          if (theme.selectionColor) {
            lines.push(getModifiedSelectionStyle(theme));
          }
          return lines.join("\n");
        }
        function getSelectionColor(theme) {
          var backgroundColorSelection;
          var foregroundColorSelection;
          if (theme.selectionColor === "auto") {
            backgroundColorSelection = modifyBackgroundColor({ r: 0, g: 96, b: 212 }, __assign(__assign({}, theme), { grayscale: 0 }));
            foregroundColorSelection = modifyForegroundColor({ r: 255, g: 255, b: 255 }, __assign(__assign({}, theme), { grayscale: 0 }));
          } else {
            var rgb = parseColorWithCache(theme.selectionColor);
            var hsl = rgbToHSL(rgb);
            backgroundColorSelection = theme.selectionColor;
            if (hsl.l < 0.5) {
              foregroundColorSelection = "#FFF";
            } else {
              foregroundColorSelection = "#000";
            }
          }
          return { backgroundColorSelection, foregroundColorSelection };
        }
        function getModifiedSelectionStyle(theme) {
          var lines = [];
          var modifiedSelectionColor = getSelectionColor(theme);
          var backgroundColorSelection = modifiedSelectionColor.backgroundColorSelection;
          var foregroundColorSelection = modifiedSelectionColor.foregroundColorSelection;
          ["::selection", "::-moz-selection"].forEach(function(selection) {
            lines.push("".concat(selection, " {"));
            lines.push("    background-color: ".concat(backgroundColorSelection, " !important;"));
            lines.push("    color: ".concat(foregroundColorSelection, " !important;"));
            lines.push("}");
          });
          return lines.join("\n");
        }
        function getModifiedScrollbarStyle(theme) {
          var lines = [];
          var colorTrack;
          var colorIcons;
          var colorThumb;
          var colorThumbHover;
          var colorThumbActive;
          var colorCorner;
          if (theme.scrollbarColor === "auto") {
            colorTrack = modifyBackgroundColor({ r: 241, g: 241, b: 241 }, theme);
            colorIcons = modifyForegroundColor({ r: 96, g: 96, b: 96 }, theme);
            colorThumb = modifyBackgroundColor({ r: 176, g: 176, b: 176 }, theme);
            colorThumbHover = modifyBackgroundColor({ r: 144, g: 144, b: 144 }, theme);
            colorThumbActive = modifyBackgroundColor({ r: 96, g: 96, b: 96 }, theme);
            colorCorner = modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme);
          } else {
            var rgb = parseColorWithCache(theme.scrollbarColor);
            var hsl_1 = rgbToHSL(rgb);
            var isLight = hsl_1.l > 0.5;
            var lighten = function(lighter) {
              return __assign(__assign({}, hsl_1), { l: clamp(hsl_1.l + lighter, 0, 1) });
            };
            var darken = function(darker) {
              return __assign(__assign({}, hsl_1), { l: clamp(hsl_1.l - darker, 0, 1) });
            };
            colorTrack = hslToString(darken(0.4));
            colorIcons = hslToString(isLight ? darken(0.4) : lighten(0.4));
            colorThumb = hslToString(hsl_1);
            colorThumbHover = hslToString(lighten(0.1));
            colorThumbActive = hslToString(lighten(0.2));
          }
          lines.push("::-webkit-scrollbar {");
          lines.push("    background-color: ".concat(colorTrack, ";"));
          lines.push("    color: ".concat(colorIcons, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-thumb {");
          lines.push("    background-color: ".concat(colorThumb, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-thumb:hover {");
          lines.push("    background-color: ".concat(colorThumbHover, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-thumb:active {");
          lines.push("    background-color: ".concat(colorThumbActive, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-corner {");
          lines.push("    background-color: ".concat(colorCorner, ";"));
          lines.push("}");
          if (isFirefox) {
            lines.push("* {");
            lines.push("    scrollbar-color: ".concat(colorThumb, " ").concat(colorTrack, ";"));
            lines.push("}");
          }
          return lines.join("\n");
        }
        function getModifiedFallbackStyle(filter2, _a) {
          var strict = _a.strict;
          var lines = [];
          var isMicrosoft = ["microsoft.com", "docs.microsoft.com"].includes(location.hostname);
          lines.push("html, body, ".concat(strict ? "body :not(iframe)".concat(isMicrosoft ? ':not(div[style^="position:absolute;top:0;left:-"]' : "") : "body > :not(iframe)", " {"));
          lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, filter2), " !important;"));
          lines.push("    border-color: ".concat(modifyBorderColor({ r: 64, g: 64, b: 64 }, filter2), " !important;"));
          lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, filter2), " !important;"));
          lines.push("}");
          return lines.join("\n");
        }
        var unparsableColors = /* @__PURE__ */ new Set([
          "inherit",
          "transparent",
          "initial",
          "currentcolor",
          "none",
          "unset"
        ]);
        function getColorModifier(prop, value, rule) {
          if (unparsableColors.has(value.toLowerCase())) {
            return value;
          }
          var rgb = parseColorWithCache(value);
          if (!rgb) {
            return null;
          }
          if (prop.includes("background")) {
            if (rule.style.webkitMaskImage && rule.style.webkitMaskImage !== "none" || rule.style.webkitMask && !rule.style.webkitMask.startsWith("none") || rule.style.mask && rule.style.mask !== "none" || rule.style.getPropertyValue("mask-image") && rule.style.getPropertyValue("mask-image") !== "none") {
              return function(filter2) {
                return modifyForegroundColor(rgb, filter2);
              };
            }
            return function(filter2) {
              return modifyBackgroundColor(rgb, filter2);
            };
          }
          if (prop.includes("border") || prop.includes("outline")) {
            return function(filter2) {
              return modifyBorderColor(rgb, filter2);
            };
          }
          return function(filter2) {
            return modifyForegroundColor(rgb, filter2);
          };
        }
        var imageDetailsCache = /* @__PURE__ */ new Map();
        var awaitingForImageLoading = /* @__PURE__ */ new Map();
        function shouldIgnoreImage(selectorText, selectors) {
          if (!selectorText || selectors.length === 0) {
            return false;
          }
          if (selectors.some(function(s) {
            return s === "*";
          })) {
            return true;
          }
          var ruleSelectors = selectorText.split(/,\s*/g);
          var _loop_1 = function(i2) {
            var ignoredSelector = selectors[i2];
            if (ruleSelectors.some(function(s) {
              return s === ignoredSelector;
            })) {
              return { value: true };
            }
          };
          for (var i = 0; i < selectors.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
              return state_1.value;
          }
          return false;
        }
        function getBgImageModifier(value, rule, ignoreImageSelectors, isCancelled) {
          var _this = this;
          try {
            var gradients = parseGradient(value);
            var urls = getMatches(cssURLRegex, value);
            if (urls.length === 0 && gradients.length === 0) {
              return value;
            }
            var getIndices = function(matches) {
              var index = 0;
              return matches.map(function(match) {
                var valueIndex = value.indexOf(match, index);
                index = valueIndex + match.length;
                return { match, index: valueIndex };
              });
            };
            var matches_1 = gradients.map(function(i) {
              return __assign({ type: "gradient" }, i);
            }).concat(getIndices(urls).map(function(i) {
              return __assign({ type: "url", offset: 0 }, i);
            })).sort(function(a, b) {
              return a.index > b.index ? 1 : -1;
            });
            var getGradientModifier_1 = function(gradient) {
              var typeGradient = gradient.typeGradient, match = gradient.match, hasComma = gradient.hasComma;
              var partsRegex = /([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?([^\(\), ]|( (?!calc)))*),?/g;
              var colorStopRegex = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/;
              var parts = getMatches(partsRegex, match, 1).map(function(part) {
                part = part.trim();
                var rgb = parseColorWithCache(part);
                if (rgb) {
                  return function(filter2) {
                    return modifyGradientColor(rgb, filter2);
                  };
                }
                var space = part.lastIndexOf(" ");
                rgb = parseColorWithCache(part.substring(0, space));
                if (rgb) {
                  return function(filter2) {
                    return "".concat(modifyGradientColor(rgb, filter2), " ").concat(part.substring(space + 1));
                  };
                }
                var colorStopMatch = part.match(colorStopRegex);
                if (colorStopMatch) {
                  rgb = parseColorWithCache(colorStopMatch[3]);
                  if (rgb) {
                    return function(filter2) {
                      return "".concat(colorStopMatch[1], "(").concat(colorStopMatch[2] ? "".concat(colorStopMatch[2], ", ") : "").concat(modifyGradientColor(rgb, filter2), ")");
                    };
                  }
                }
                return function() {
                  return part;
                };
              });
              return function(filter2) {
                return "".concat(typeGradient, "(").concat(parts.map(function(modify) {
                  return modify(filter2);
                }).join(", "), ")").concat(hasComma ? ", " : "");
              };
            };
            var getURLModifier_1 = function(urlValue) {
              var _a;
              if (shouldIgnoreImage(rule.selectorText, ignoreImageSelectors)) {
                return null;
              }
              var url = getCSSURLValue(urlValue);
              var isURLEmpty = url.length === 0;
              var parentStyleSheet = rule.parentStyleSheet;
              var baseURL = parentStyleSheet && parentStyleSheet.href ? getCSSBaseBath(parentStyleSheet.href) : ((_a = parentStyleSheet.ownerNode) === null || _a === void 0 ? void 0 : _a.baseURI) || location.origin;
              url = getAbsoluteURL(baseURL, url);
              var absoluteValue = 'url("'.concat(url, '")');
              return function(filter2) {
                return __awaiter(_this, void 0, void 0, function() {
                  var imageDetails, awaiters_1, err_1, bgImageValue;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        if (isURLEmpty) {
                          return [2, "url('')"];
                        }
                        if (!imageDetailsCache.has(url))
                          return [3, 1];
                        imageDetails = imageDetailsCache.get(url);
                        return [3, 7];
                      case 1:
                        _a2.trys.push([1, 6, , 7]);
                        if (!awaitingForImageLoading.has(url))
                          return [3, 3];
                        awaiters_1 = awaitingForImageLoading.get(url);
                        return [4, new Promise(function(resolve) {
                          return awaiters_1.push(resolve);
                        })];
                      case 2:
                        imageDetails = _a2.sent();
                        if (!imageDetails) {
                          return [2, null];
                        }
                        return [3, 5];
                      case 3:
                        awaitingForImageLoading.set(url, []);
                        return [4, getImageDetails(url)];
                      case 4:
                        imageDetails = _a2.sent();
                        imageDetailsCache.set(url, imageDetails);
                        awaitingForImageLoading.get(url).forEach(function(resolve) {
                          return resolve(imageDetails);
                        });
                        awaitingForImageLoading.delete(url);
                        _a2.label = 5;
                      case 5:
                        if (isCancelled()) {
                          return [2, null];
                        }
                        return [3, 7];
                      case 6:
                        err_1 = _a2.sent();
                        logWarn(err_1);
                        if (awaitingForImageLoading.has(url)) {
                          awaitingForImageLoading.get(url).forEach(function(resolve) {
                            return resolve(null);
                          });
                          awaitingForImageLoading.delete(url);
                        }
                        return [2, absoluteValue];
                      case 7:
                        bgImageValue = getBgImageValue_1(imageDetails, filter2) || absoluteValue;
                        return [2, bgImageValue];
                    }
                  });
                });
              };
            };
            var getBgImageValue_1 = function(imageDetails, filter2) {
              var isDark = imageDetails.isDark, isLight = imageDetails.isLight, isTransparent = imageDetails.isTransparent, isLarge = imageDetails.isLarge, isTooLarge = imageDetails.isTooLarge, width = imageDetails.width;
              var result;
              if (isTooLarge) {
                result = 'url("'.concat(imageDetails.src, '")');
              } else if (isDark && isTransparent && filter2.mode === 1 && !isLarge && width > 2) {
                logInfo("Inverting dark image ".concat(imageDetails.src));
                var inverted = getFilteredImageDataURL(imageDetails, __assign(__assign({}, filter2), { sepia: clamp(filter2.sepia + 10, 0, 100) }));
                result = 'url("'.concat(inverted, '")');
              } else if (isLight && !isTransparent && filter2.mode === 1) {
                if (isLarge) {
                  result = "none";
                } else {
                  logInfo("Dimming light image ".concat(imageDetails.src));
                  var dimmed = getFilteredImageDataURL(imageDetails, filter2);
                  result = 'url("'.concat(dimmed, '")');
                }
              } else if (filter2.mode === 0 && isLight && !isLarge) {
                logInfo("Applying filter to image ".concat(imageDetails.src));
                var filtered = getFilteredImageDataURL(imageDetails, __assign(__assign({}, filter2), { brightness: clamp(filter2.brightness - 10, 5, 200), sepia: clamp(filter2.sepia + 10, 0, 100) }));
                result = 'url("'.concat(filtered, '")');
              } else {
                result = null;
              }
              return result;
            };
            var modifiers_1 = [];
            var matchIndex_1 = 0;
            var prevHasComma_1 = false;
            matches_1.forEach(function(_a, i) {
              var type = _a.type, match = _a.match, index = _a.index, typeGradient = _a.typeGradient, hasComma = _a.hasComma, offset = _a.offset;
              var matchStart = index;
              var prefixStart = matchIndex_1;
              var matchEnd = matchStart + match.length + offset;
              matchIndex_1 = matchEnd;
              if (prefixStart !== matchStart) {
                if (prevHasComma_1) {
                  modifiers_1.push(function() {
                    var betweenValue = value.substring(prefixStart, matchStart);
                    if (betweenValue[0] === ",") {
                      betweenValue = betweenValue.substring(1);
                    }
                    return betweenValue;
                  });
                } else {
                  modifiers_1.push(function() {
                    return value.substring(prefixStart, matchStart);
                  });
                }
              }
              prevHasComma_1 = hasComma || false;
              if (type === "url") {
                modifiers_1.push(getURLModifier_1(match));
              } else if (type === "gradient") {
                modifiers_1.push(getGradientModifier_1({ match, index, typeGradient, hasComma, offset }));
              }
              if (i === matches_1.length - 1) {
                modifiers_1.push(function() {
                  return value.substring(matchEnd);
                });
              }
            });
            return function(filter2) {
              var results = modifiers_1.filter(Boolean).map(function(modify) {
                return modify(filter2);
              });
              if (results.some(function(r) {
                return r instanceof Promise;
              })) {
                return Promise.all(results).then(function(asyncResults) {
                  return asyncResults.filter(Boolean).join("");
                });
              }
              var combinedResult = results.join("");
              if (combinedResult.endsWith(", initial")) {
                return combinedResult.slice(0, -9);
              }
              return combinedResult;
            };
          } catch (err) {
            return null;
          }
        }
        function getShadowModifierWithInfo(value) {
          try {
            var index_1 = 0;
            var colorMatches_1 = getMatches(/(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/ig, value, 2);
            var notParsed_1 = 0;
            var modifiers_2 = colorMatches_1.map(function(match, i) {
              var prefixIndex = index_1;
              var matchIndex = value.indexOf(match, index_1);
              var matchEnd = matchIndex + match.length;
              index_1 = matchEnd;
              var rgb = parseColorWithCache(match);
              if (!rgb) {
                notParsed_1++;
                return function() {
                  return value.substring(prefixIndex, matchEnd);
                };
              }
              return function(filter2) {
                return "".concat(value.substring(prefixIndex, matchIndex)).concat(modifyShadowColor(rgb, filter2)).concat(i === colorMatches_1.length - 1 ? value.substring(matchEnd) : "");
              };
            });
            return function(filter2) {
              var modified = modifiers_2.map(function(modify) {
                return modify(filter2);
              }).join("");
              return {
                matchesLength: colorMatches_1.length,
                unparseableMatchesLength: notParsed_1,
                result: modified
              };
            };
          } catch (err) {
            return null;
          }
        }
        function getShadowModifier(value) {
          var shadowModifier = getShadowModifierWithInfo(value);
          if (!shadowModifier) {
            return null;
          }
          return function(theme) {
            return shadowModifier(theme).result;
          };
        }
        function getVariableModifier(variablesStore2, prop, value, rule, ignoredImgSelectors, isCancelled) {
          return variablesStore2.getModifierForVariable({
            varName: prop,
            sourceValue: value,
            rule,
            ignoredImgSelectors,
            isCancelled
          });
        }
        function getVariableDependantModifier(variablesStore2, prop, value) {
          return variablesStore2.getModifierForVarDependant(prop, value);
        }
        function cleanModificationCache() {
          clearColorModificationCache();
          imageDetailsCache.clear();
          cleanImageProcessingCache();
          awaitingForImageLoading.clear();
        }
        var VAR_TYPE_BGCOLOR = 1 << 0;
        var VAR_TYPE_TEXTCOLOR = 1 << 1;
        var VAR_TYPE_BORDERCOLOR = 1 << 2;
        var VAR_TYPE_BGIMG = 1 << 3;
        var VariablesStore = function() {
          function VariablesStore2() {
            this.varTypes = /* @__PURE__ */ new Map();
            this.rulesQueue = [];
            this.definedVars = /* @__PURE__ */ new Set();
            this.varRefs = /* @__PURE__ */ new Map();
            this.unknownColorVars = /* @__PURE__ */ new Set();
            this.unknownBgVars = /* @__PURE__ */ new Set();
            this.undefinedVars = /* @__PURE__ */ new Set();
            this.initialVarTypes = /* @__PURE__ */ new Map();
            this.changedTypeVars = /* @__PURE__ */ new Set();
            this.typeChangeSubscriptions = /* @__PURE__ */ new Map();
            this.unstableVarValues = /* @__PURE__ */ new Map();
          }
          VariablesStore2.prototype.clear = function() {
            this.varTypes.clear();
            this.rulesQueue.splice(0);
            this.definedVars.clear();
            this.varRefs.clear();
            this.unknownColorVars.clear();
            this.unknownBgVars.clear();
            this.undefinedVars.clear();
            this.initialVarTypes.clear();
            this.changedTypeVars.clear();
            this.typeChangeSubscriptions.clear();
            this.unstableVarValues.clear();
          };
          VariablesStore2.prototype.isVarType = function(varName, typeNum) {
            return this.varTypes.has(varName) && (this.varTypes.get(varName) & typeNum) > 0;
          };
          VariablesStore2.prototype.addRulesForMatching = function(rules) {
            this.rulesQueue.push(rules);
          };
          VariablesStore2.prototype.matchVariablesAndDependants = function() {
            var _this = this;
            this.changedTypeVars.clear();
            this.initialVarTypes = new Map(this.varTypes);
            this.collectRootVariables();
            this.collectVariablesAndVarDep(this.rulesQueue);
            this.rulesQueue.splice(0);
            this.collectRootVarDependants();
            this.varRefs.forEach(function(refs, v) {
              refs.forEach(function(r) {
                if (_this.varTypes.has(v)) {
                  _this.resolveVariableType(r, _this.varTypes.get(v));
                }
              });
            });
            this.unknownColorVars.forEach(function(v) {
              if (_this.unknownBgVars.has(v)) {
                _this.unknownColorVars.delete(v);
                _this.unknownBgVars.delete(v);
                _this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
              } else if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR)) {
                _this.unknownColorVars.delete(v);
              } else {
                _this.undefinedVars.add(v);
              }
            });
            this.unknownBgVars.forEach(function(v) {
              var hasColor = _this.findVarRef(v, function(ref) {
                return _this.unknownColorVars.has(ref) || _this.isVarType(ref, VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR);
              }) != null;
              if (hasColor) {
                _this.itarateVarRefs(v, function(ref) {
                  _this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                });
              } else if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                _this.unknownBgVars.delete(v);
              } else {
                _this.undefinedVars.add(v);
              }
            });
            this.changedTypeVars.forEach(function(varName) {
              if (_this.typeChangeSubscriptions.has(varName)) {
                _this.typeChangeSubscriptions.get(varName).forEach(function(callback) {
                  callback();
                });
              }
            });
            this.changedTypeVars.clear();
          };
          VariablesStore2.prototype.getModifierForVariable = function(options) {
            var _this = this;
            return function(theme) {
              var varName = options.varName, sourceValue = options.sourceValue, rule = options.rule, ignoredImgSelectors = options.ignoredImgSelectors, isCancelled = options.isCancelled;
              var getDeclarations = function() {
                var declarations = [];
                var addModifiedValue = function(typeNum, varNameWrapper, colorModifier) {
                  if (!_this.isVarType(varName, typeNum)) {
                    return;
                  }
                  var property2 = varNameWrapper(varName);
                  var modifiedValue2;
                  if (isVarDependant(sourceValue)) {
                    if (isConstructedColorVar(sourceValue)) {
                      var value = insertVarValues(sourceValue, _this.unstableVarValues);
                      if (!value) {
                        value = typeNum === VAR_TYPE_BGCOLOR ? "#ffffff" : "#000000";
                      }
                      modifiedValue2 = colorModifier(value, theme);
                    } else {
                      modifiedValue2 = replaceCSSVariablesNames(sourceValue, function(v) {
                        return varNameWrapper(v);
                      }, function(fallback) {
                        return colorModifier(fallback, theme);
                      });
                    }
                  } else {
                    modifiedValue2 = colorModifier(sourceValue, theme);
                  }
                  declarations.push({
                    property: property2,
                    value: modifiedValue2
                  });
                };
                addModifiedValue(VAR_TYPE_BGCOLOR, wrapBgColorVariableName, tryModifyBgColor);
                addModifiedValue(VAR_TYPE_TEXTCOLOR, wrapTextColorVariableName, tryModifyTextColor);
                addModifiedValue(VAR_TYPE_BORDERCOLOR, wrapBorderColorVariableName, tryModifyBorderColor);
                if (_this.isVarType(varName, VAR_TYPE_BGIMG)) {
                  var property = wrapBgImgVariableName(varName);
                  var modifiedValue = sourceValue;
                  if (isVarDependant(sourceValue)) {
                    modifiedValue = replaceCSSVariablesNames(sourceValue, function(v) {
                      return wrapBgColorVariableName(v);
                    }, function(fallback) {
                      return tryModifyBgColor(fallback, theme);
                    });
                  }
                  var bgModifier = getBgImageModifier(modifiedValue, rule, ignoredImgSelectors, isCancelled);
                  modifiedValue = typeof bgModifier === "function" ? bgModifier(theme) : bgModifier;
                  declarations.push({
                    property,
                    value: modifiedValue
                  });
                }
                return declarations;
              };
              var callbacks = /* @__PURE__ */ new Set();
              var addListener = function(onTypeChange) {
                var callback = function() {
                  var decs = getDeclarations();
                  onTypeChange(decs);
                };
                callbacks.add(callback);
                _this.subscribeForVarTypeChange(varName, callback);
              };
              var removeListeners = function() {
                callbacks.forEach(function(callback) {
                  _this.unsubscribeFromVariableTypeChanges(varName, callback);
                });
              };
              return {
                declarations: getDeclarations(),
                onTypeChange: { addListener, removeListeners }
              };
            };
          };
          VariablesStore2.prototype.getModifierForVarDependant = function(property, sourceValue) {
            var _this = this;
            if (sourceValue.match(/^\s*(rgb|hsl)a?\(/)) {
              var isBg_1 = property.startsWith("background");
              var isText_1 = property === "color" || property === "caret-color";
              return function(theme) {
                var value = insertVarValues(sourceValue, _this.unstableVarValues);
                if (!value) {
                  value = isBg_1 ? "#ffffff" : "#000000";
                }
                var modifier = isBg_1 ? tryModifyBgColor : isText_1 ? tryModifyTextColor : tryModifyBorderColor;
                return modifier(value, theme);
              };
            }
            if (property === "background-color") {
              return function(theme) {
                return replaceCSSVariablesNames(sourceValue, function(v) {
                  return wrapBgColorVariableName(v);
                }, function(fallback) {
                  return tryModifyBgColor(fallback, theme);
                });
              };
            }
            if (property === "color" || property === "caret-color") {
              return function(theme) {
                return replaceCSSVariablesNames(sourceValue, function(v) {
                  return wrapTextColorVariableName(v);
                }, function(fallback) {
                  return tryModifyTextColor(fallback, theme);
                });
              };
            }
            if (property === "background" || property === "background-image" || property === "box-shadow") {
              return function(theme) {
                var unknownVars = /* @__PURE__ */ new Set();
                var modify = function() {
                  var variableReplaced = replaceCSSVariablesNames(sourceValue, function(v) {
                    if (_this.isVarType(v, VAR_TYPE_BGCOLOR)) {
                      return wrapBgColorVariableName(v);
                    }
                    if (_this.isVarType(v, VAR_TYPE_BGIMG)) {
                      return wrapBgImgVariableName(v);
                    }
                    unknownVars.add(v);
                    return v;
                  }, function(fallback) {
                    return tryModifyBgColor(fallback, theme);
                  });
                  if (property === "box-shadow") {
                    var shadowModifier = getShadowModifierWithInfo(variableReplaced);
                    var modifiedShadow = shadowModifier(theme);
                    if (modifiedShadow.unparseableMatchesLength !== modifiedShadow.matchesLength) {
                      return modifiedShadow.result;
                    }
                  }
                  return variableReplaced;
                };
                var modified = modify();
                if (unknownVars.size > 0) {
                  return new Promise(function(resolve) {
                    var firstUnknownVar = unknownVars.values().next().value;
                    var callback = function() {
                      _this.unsubscribeFromVariableTypeChanges(firstUnknownVar, callback);
                      var newValue = modify();
                      resolve(newValue);
                    };
                    _this.subscribeForVarTypeChange(firstUnknownVar, callback);
                  });
                }
                return modified;
              };
            }
            if (property.startsWith("border") || property.startsWith("outline")) {
              return function(theme) {
                return replaceCSSVariablesNames(sourceValue, function(v) {
                  return wrapBorderColorVariableName(v);
                }, function(fallback) {
                  return tryModifyBorderColor(fallback, theme);
                });
              };
            }
            return null;
          };
          VariablesStore2.prototype.subscribeForVarTypeChange = function(varName, callback) {
            if (!this.typeChangeSubscriptions.has(varName)) {
              this.typeChangeSubscriptions.set(varName, /* @__PURE__ */ new Set());
            }
            var rootStore = this.typeChangeSubscriptions.get(varName);
            if (!rootStore.has(callback)) {
              rootStore.add(callback);
            }
          };
          VariablesStore2.prototype.unsubscribeFromVariableTypeChanges = function(varName, callback) {
            if (this.typeChangeSubscriptions.has(varName)) {
              this.typeChangeSubscriptions.get(varName).delete(callback);
            }
          };
          VariablesStore2.prototype.collectVariablesAndVarDep = function(ruleList) {
            var _this = this;
            ruleList.forEach(function(rules) {
              iterateCSSRules(rules, function(rule) {
                rule.style && iterateCSSDeclarations(rule.style, function(property, value) {
                  if (isVariable(property)) {
                    _this.inspectVariable(property, value);
                  }
                  if (isVarDependant(value)) {
                    _this.inspectVarDependant(property, value);
                  }
                });
              });
            });
          };
          VariablesStore2.prototype.collectRootVariables = function() {
            var _this = this;
            iterateCSSDeclarations(document.documentElement.style, function(property, value) {
              if (isVariable(property)) {
                _this.inspectVariable(property, value);
              }
            });
          };
          VariablesStore2.prototype.inspectVariable = function(varName, value) {
            this.unstableVarValues.set(varName, value);
            if (isVarDependant(value) && isConstructedColorVar(value)) {
              this.unknownColorVars.add(varName);
              this.definedVars.add(varName);
            }
            if (this.definedVars.has(varName)) {
              return;
            }
            this.definedVars.add(varName);
            var color = parseColorWithCache(value);
            if (color) {
              this.unknownColorVars.add(varName);
            } else if (value.includes("url(") || value.includes("linear-gradient(") || value.includes("radial-gradient(")) {
              this.resolveVariableType(varName, VAR_TYPE_BGIMG);
            }
          };
          VariablesStore2.prototype.resolveVariableType = function(varName, typeNum) {
            var initialType = this.initialVarTypes.get(varName) || 0;
            var currentType = this.varTypes.get(varName) || 0;
            var newType = currentType | typeNum;
            this.varTypes.set(varName, newType);
            if (newType !== initialType || this.undefinedVars.has(varName)) {
              this.changedTypeVars.add(varName);
              this.undefinedVars.delete(varName);
            }
            this.unknownColorVars.delete(varName);
            this.unknownBgVars.delete(varName);
          };
          VariablesStore2.prototype.collectRootVarDependants = function() {
            var _this = this;
            iterateCSSDeclarations(document.documentElement.style, function(property, value) {
              if (isVarDependant(value)) {
                _this.inspectVarDependant(property, value);
              }
            });
          };
          VariablesStore2.prototype.inspectVarDependant = function(property, value) {
            var _this = this;
            if (isVariable(property)) {
              this.iterateVarDeps(value, function(ref) {
                if (!_this.varRefs.has(property)) {
                  _this.varRefs.set(property, /* @__PURE__ */ new Set());
                }
                _this.varRefs.get(property).add(ref);
              });
            } else if (property === "background-color" || property === "box-shadow") {
              this.iterateVarDeps(value, function(v) {
                return _this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
              });
            } else if (property === "color" || property === "caret-color") {
              this.iterateVarDeps(value, function(v) {
                return _this.resolveVariableType(v, VAR_TYPE_TEXTCOLOR);
              });
            } else if (property.startsWith("border") || property.startsWith("outline")) {
              this.iterateVarDeps(value, function(v) {
                return _this.resolveVariableType(v, VAR_TYPE_BORDERCOLOR);
              });
            } else if (property === "background" || property === "background-image") {
              this.iterateVarDeps(value, function(v) {
                if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                  return;
                }
                var isBgColor = _this.findVarRef(v, function(ref) {
                  return _this.unknownColorVars.has(ref) || _this.isVarType(ref, VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR);
                }) != null;
                _this.itarateVarRefs(v, function(ref) {
                  if (isBgColor) {
                    _this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                  } else {
                    _this.unknownBgVars.add(ref);
                  }
                });
              });
            }
          };
          VariablesStore2.prototype.iterateVarDeps = function(value, iterator) {
            var varDeps = /* @__PURE__ */ new Set();
            iterateVarDependencies(value, function(v) {
              return varDeps.add(v);
            });
            varDeps.forEach(function(v) {
              return iterator(v);
            });
          };
          VariablesStore2.prototype.findVarRef = function(varName, iterator, stack) {
            var e_1, _a;
            if (stack === void 0) {
              stack = /* @__PURE__ */ new Set();
            }
            if (stack.has(varName)) {
              return null;
            }
            stack.add(varName);
            var result = iterator(varName);
            if (result) {
              return varName;
            }
            var refs = this.varRefs.get(varName);
            if (!refs || refs.size === 0) {
              return null;
            }
            try {
              for (var refs_1 = __values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                var ref = refs_1_1.value;
                var found = this.findVarRef(ref, iterator, stack);
                if (found) {
                  return found;
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (refs_1_1 && !refs_1_1.done && (_a = refs_1.return))
                  _a.call(refs_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            return null;
          };
          VariablesStore2.prototype.itarateVarRefs = function(varName, iterator) {
            this.findVarRef(varName, function(ref) {
              iterator(ref);
              return false;
            });
          };
          VariablesStore2.prototype.setOnRootVariableChange = function(callback) {
            this.onRootVariableDefined = callback;
          };
          VariablesStore2.prototype.putRootVars = function(styleElement, theme) {
            var e_2, _a;
            var _this = this;
            var sheet = styleElement.sheet;
            if (sheet.cssRules.length > 0) {
              sheet.deleteRule(0);
            }
            var declarations = /* @__PURE__ */ new Map();
            iterateCSSDeclarations(document.documentElement.style, function(property2, value2) {
              if (isVariable(property2)) {
                if (_this.isVarType(property2, VAR_TYPE_BGCOLOR)) {
                  declarations.set(wrapBgColorVariableName(property2), tryModifyBgColor(value2, theme));
                }
                if (_this.isVarType(property2, VAR_TYPE_TEXTCOLOR)) {
                  declarations.set(wrapTextColorVariableName(property2), tryModifyTextColor(value2, theme));
                }
                if (_this.isVarType(property2, VAR_TYPE_BORDERCOLOR)) {
                  declarations.set(wrapBorderColorVariableName(property2), tryModifyBorderColor(value2, theme));
                }
                _this.subscribeForVarTypeChange(property2, _this.onRootVariableDefined);
              }
            });
            var cssLines = [];
            cssLines.push(":root {");
            try {
              for (var declarations_1 = __values(declarations), declarations_1_1 = declarations_1.next(); !declarations_1_1.done; declarations_1_1 = declarations_1.next()) {
                var _b = __read(declarations_1_1.value, 2), property = _b[0], value = _b[1];
                cssLines.push("    ".concat(property, ": ").concat(value, ";"));
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (declarations_1_1 && !declarations_1_1.done && (_a = declarations_1.return))
                  _a.call(declarations_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
            cssLines.push("}");
            var cssText = cssLines.join("\n");
            sheet.insertRule(cssText);
          };
          return VariablesStore2;
        }();
        var variablesStore = new VariablesStore();
        function getVariableRange(input, searchStart) {
          if (searchStart === void 0) {
            searchStart = 0;
          }
          var start = input.indexOf("var(", searchStart);
          if (start >= 0) {
            var range = getParenthesesRange(input, start + 3);
            if (range) {
              return { start, end: range.end };
            }
            return null;
          }
        }
        function getVariablesMatches(input) {
          var ranges = [];
          var i = 0;
          var range;
          while (range = getVariableRange(input, i)) {
            var start = range.start, end = range.end;
            ranges.push({ start, end, value: input.substring(start, end) });
            i = range.end + 1;
          }
          return ranges;
        }
        function replaceVariablesMatches(input, replacer) {
          var matches = getVariablesMatches(input);
          var matchesCount = matches.length;
          if (matchesCount === 0) {
            return input;
          }
          var inputLength = input.length;
          var replacements = matches.map(function(m) {
            return replacer(m.value);
          });
          var parts = [];
          parts.push(input.substring(0, matches[0].start));
          for (var i = 0; i < matchesCount; i++) {
            parts.push(replacements[i]);
            var start = matches[i].end;
            var end = i < matchesCount - 1 ? matches[i + 1].start : inputLength;
            parts.push(input.substring(start, end));
          }
          return parts.join("");
        }
        function getVariableNameAndFallback(match) {
          var commaIndex = match.indexOf(",");
          var name;
          var fallback;
          if (commaIndex >= 0) {
            name = match.substring(4, commaIndex).trim();
            fallback = match.substring(commaIndex + 1, match.length - 1).trim();
          } else {
            name = match.substring(4, match.length - 1).trim();
            fallback = "";
          }
          return { name, fallback };
        }
        function replaceCSSVariablesNames(value, nameReplacer, fallbackReplacer) {
          var matchReplacer = function(match) {
            var _a = getVariableNameAndFallback(match), name = _a.name, fallback = _a.fallback;
            var newName = nameReplacer(name);
            if (!fallback) {
              return "var(".concat(newName, ")");
            }
            var newFallback;
            if (isVarDependant(fallback)) {
              newFallback = replaceCSSVariablesNames(fallback, nameReplacer, fallbackReplacer);
            } else if (fallbackReplacer) {
              newFallback = fallbackReplacer(fallback);
            } else {
              newFallback = fallback;
            }
            return "var(".concat(newName, ", ").concat(newFallback, ")");
          };
          return replaceVariablesMatches(value, matchReplacer);
        }
        function iterateVarDependencies(value, iterator) {
          replaceCSSVariablesNames(value, function(varName) {
            iterator(varName);
            return varName;
          });
        }
        function wrapBgColorVariableName(name) {
          return "--darkreader-bg".concat(name);
        }
        function wrapTextColorVariableName(name) {
          return "--darkreader-text".concat(name);
        }
        function wrapBorderColorVariableName(name) {
          return "--darkreader-border".concat(name);
        }
        function wrapBgImgVariableName(name) {
          return "--darkreader-bgimg".concat(name);
        }
        function isVariable(property) {
          return property.startsWith("--");
        }
        function isVarDependant(value) {
          return value.includes("var(");
        }
        function isConstructedColorVar(value) {
          return value.match(/^\s*(rgb|hsl)a?\(/);
        }
        var rawValueRegex = /^\d{1,3}, ?\d{1,3}, ?\d{1,3}$/;
        function parseRawValue(color) {
          if (rawValueRegex.test(color)) {
            var splitted = color.split(",");
            var resultInRGB_1 = "rgb(";
            splitted.forEach(function(number) {
              resultInRGB_1 += "".concat(number.trim(), ", ");
            });
            resultInRGB_1 = resultInRGB_1.substring(0, resultInRGB_1.length - 2);
            resultInRGB_1 += ")";
            return { isRaw: true, color: resultInRGB_1 };
          }
          return { isRaw: false, color };
        }
        function handleRawValue(color, theme, modifyFunction) {
          var _a = parseRawValue(color), isRaw = _a.isRaw, newColor = _a.color;
          var rgb = parseColorWithCache(newColor);
          if (rgb) {
            var outputColor = modifyFunction(rgb, theme);
            if (isRaw) {
              var outputInRGB = parseColorWithCache(outputColor);
              return outputInRGB ? "".concat(outputInRGB.r, ", ").concat(outputInRGB.g, ", ").concat(outputInRGB.b) : outputColor;
            }
            return outputColor;
          }
          return newColor;
        }
        function tryModifyBgColor(color, theme) {
          return handleRawValue(color, theme, modifyBackgroundColor);
        }
        function tryModifyTextColor(color, theme) {
          return handleRawValue(color, theme, modifyForegroundColor);
        }
        function tryModifyBorderColor(color, theme) {
          return handleRawValue(color, theme, modifyBorderColor);
        }
        function insertVarValues(source, varValues, stack) {
          if (stack === void 0) {
            stack = /* @__PURE__ */ new Set();
          }
          var containsUnresolvedVar = false;
          var matchReplacer = function(match) {
            var _a = getVariableNameAndFallback(match), name = _a.name, fallback = _a.fallback;
            if (stack.has(name)) {
              containsUnresolvedVar = true;
              return null;
            }
            stack.add(name);
            var varValue = varValues.get(name) || fallback;
            var inserted = null;
            if (varValue) {
              if (isVarDependant(varValue)) {
                inserted = insertVarValues(varValue, varValues, stack);
              } else {
                inserted = varValue;
              }
            }
            if (!inserted) {
              containsUnresolvedVar = true;
              return null;
            }
            return inserted;
          };
          var replaced = replaceVariablesMatches(source, matchReplacer);
          if (containsUnresolvedVar) {
            return null;
          }
          return replaced;
        }
        var overrides = {
          "background-color": {
            customProp: "--darkreader-inline-bgcolor",
            cssProp: "background-color",
            dataAttr: "data-darkreader-inline-bgcolor"
          },
          "background-image": {
            customProp: "--darkreader-inline-bgimage",
            cssProp: "background-image",
            dataAttr: "data-darkreader-inline-bgimage"
          },
          "border-color": {
            customProp: "--darkreader-inline-border",
            cssProp: "border-color",
            dataAttr: "data-darkreader-inline-border"
          },
          "border-bottom-color": {
            customProp: "--darkreader-inline-border-bottom",
            cssProp: "border-bottom-color",
            dataAttr: "data-darkreader-inline-border-bottom"
          },
          "border-left-color": {
            customProp: "--darkreader-inline-border-left",
            cssProp: "border-left-color",
            dataAttr: "data-darkreader-inline-border-left"
          },
          "border-right-color": {
            customProp: "--darkreader-inline-border-right",
            cssProp: "border-right-color",
            dataAttr: "data-darkreader-inline-border-right"
          },
          "border-top-color": {
            customProp: "--darkreader-inline-border-top",
            cssProp: "border-top-color",
            dataAttr: "data-darkreader-inline-border-top"
          },
          "box-shadow": {
            customProp: "--darkreader-inline-boxshadow",
            cssProp: "box-shadow",
            dataAttr: "data-darkreader-inline-boxshadow"
          },
          "color": {
            customProp: "--darkreader-inline-color",
            cssProp: "color",
            dataAttr: "data-darkreader-inline-color"
          },
          "fill": {
            customProp: "--darkreader-inline-fill",
            cssProp: "fill",
            dataAttr: "data-darkreader-inline-fill"
          },
          "stroke": {
            customProp: "--darkreader-inline-stroke",
            cssProp: "stroke",
            dataAttr: "data-darkreader-inline-stroke"
          },
          "outline-color": {
            customProp: "--darkreader-inline-outline",
            cssProp: "outline-color",
            dataAttr: "data-darkreader-inline-outline"
          },
          "stop-color": {
            customProp: "--darkreader-inline-stopcolor",
            cssProp: "stop-color",
            dataAttr: "data-darkreader-inline-stopcolor"
          }
        };
        var overridesList = Object.values(overrides);
        var normalizedPropList = {};
        overridesList.forEach(function(_a) {
          var cssProp = _a.cssProp, customProp = _a.customProp;
          return normalizedPropList[customProp] = cssProp;
        });
        var INLINE_STYLE_ATTRS = ["style", "fill", "stop-color", "stroke", "bgcolor", "color"];
        var INLINE_STYLE_SELECTOR = INLINE_STYLE_ATTRS.map(function(attr) {
          return "[".concat(attr, "]");
        }).join(", ");
        function getInlineOverrideStyle() {
          return overridesList.map(function(_a) {
            var dataAttr = _a.dataAttr, customProp = _a.customProp, cssProp = _a.cssProp;
            return [
              "[".concat(dataAttr, "] {"),
              "  ".concat(cssProp, ": var(").concat(customProp, ") !important;"),
              "}"
            ].join("\n");
          }).join("\n");
        }
        function getInlineStyleElements(root) {
          var results = [];
          if (root instanceof Element && root.matches(INLINE_STYLE_SELECTOR)) {
            results.push(root);
          }
          if (root instanceof Element || isShadowDomSupported && root instanceof ShadowRoot || root instanceof Document) {
            push(results, root.querySelectorAll(INLINE_STYLE_SELECTOR));
          }
          return results;
        }
        var treeObservers = /* @__PURE__ */ new Map();
        var attrObservers = /* @__PURE__ */ new Map();
        function watchForInlineStyles(elementStyleDidChange, shadowRootDiscovered) {
          deepWatchForInlineStyles(document, elementStyleDidChange, shadowRootDiscovered);
          iterateShadowHosts(document.documentElement, function(host) {
            deepWatchForInlineStyles(host.shadowRoot, elementStyleDidChange, shadowRootDiscovered);
          });
        }
        function deepWatchForInlineStyles(root, elementStyleDidChange, shadowRootDiscovered) {
          if (treeObservers.has(root)) {
            treeObservers.get(root).disconnect();
            attrObservers.get(root).disconnect();
          }
          var discoveredNodes = /* @__PURE__ */ new WeakSet();
          function discoverNodes(node) {
            getInlineStyleElements(node).forEach(function(el) {
              if (discoveredNodes.has(el)) {
                return;
              }
              discoveredNodes.add(el);
              elementStyleDidChange(el);
            });
            iterateShadowHosts(node, function(n) {
              if (discoveredNodes.has(node)) {
                return;
              }
              discoveredNodes.add(node);
              shadowRootDiscovered(n.shadowRoot);
              deepWatchForInlineStyles(n.shadowRoot, elementStyleDidChange, shadowRootDiscovered);
            });
          }
          var treeObserver = createOptimizedTreeObserver(root, {
            onMinorMutations: function(_a) {
              var additions = _a.additions;
              additions.forEach(function(added) {
                return discoverNodes(added);
              });
            },
            onHugeMutations: function() {
              discoverNodes(root);
            }
          });
          treeObservers.set(root, treeObserver);
          var attemptCount = 0;
          var start = null;
          var ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          var RETRY_TIMEOUT = getDuration({ seconds: 2 });
          var MAX_ATTEMPTS_COUNT = 50;
          var cache = [];
          var timeoutId = null;
          var handleAttributeMutations = throttle(function(mutations) {
            mutations.forEach(function(m) {
              if (INLINE_STYLE_ATTRS.includes(m.attributeName)) {
                elementStyleDidChange(m.target);
              }
            });
          });
          var attrObserver = new MutationObserver(function(mutations) {
            if (timeoutId) {
              cache.push.apply(cache, __spreadArray([], __read(mutations), false));
              return;
            }
            attemptCount++;
            var now = Date.now();
            if (start == null) {
              start = now;
            } else if (attemptCount >= MAX_ATTEMPTS_COUNT) {
              if (now - start < ATTEMPTS_INTERVAL) {
                timeoutId = setTimeout(function() {
                  start = null;
                  attemptCount = 0;
                  timeoutId = null;
                  var attributeCache = cache;
                  cache = [];
                  handleAttributeMutations(attributeCache);
                }, RETRY_TIMEOUT);
                cache.push.apply(cache, __spreadArray([], __read(mutations), false));
                return;
              }
              start = now;
              attemptCount = 1;
            }
            handleAttributeMutations(mutations);
          });
          attrObserver.observe(root, {
            attributes: true,
            attributeFilter: INLINE_STYLE_ATTRS.concat(overridesList.map(function(_a) {
              var dataAttr = _a.dataAttr;
              return dataAttr;
            })),
            subtree: true
          });
          attrObservers.set(root, attrObserver);
        }
        function stopWatchingForInlineStyles() {
          treeObservers.forEach(function(o) {
            return o.disconnect();
          });
          attrObservers.forEach(function(o) {
            return o.disconnect();
          });
          treeObservers.clear();
          attrObservers.clear();
        }
        var inlineStyleCache = /* @__PURE__ */ new WeakMap();
        var filterProps = ["brightness", "contrast", "grayscale", "sepia", "mode"];
        function getInlineStyleCacheKey(el, theme) {
          return INLINE_STYLE_ATTRS.map(function(attr) {
            return "".concat(attr, '="').concat(el.getAttribute(attr), '"');
          }).concat(filterProps.map(function(prop) {
            return "".concat(prop, '="').concat(theme[prop], '"');
          })).join(" ");
        }
        function shouldIgnoreInlineStyle(element, selectors) {
          for (var i = 0, len = selectors.length; i < len; i++) {
            var ingnoredSelector = selectors[i];
            if (element.matches(ingnoredSelector)) {
              return true;
            }
          }
          return false;
        }
        function overrideInlineStyle(element, theme, ignoreInlineSelectors, ignoreImageSelectors) {
          var cacheKey = getInlineStyleCacheKey(element, theme);
          if (cacheKey === inlineStyleCache.get(element)) {
            return;
          }
          var unsetProps = new Set(Object.keys(overrides));
          function setCustomProp(targetCSSProp, modifierCSSProp, cssVal) {
            var isPropertyVariable = targetCSSProp.startsWith("--");
            var _a = isPropertyVariable ? {} : overrides[targetCSSProp], customProp = _a.customProp, dataAttr = _a.dataAttr;
            var mod = getModifiableCSSDeclaration(modifierCSSProp, cssVal, { style: element.style }, variablesStore, ignoreImageSelectors, null);
            if (!mod) {
              return;
            }
            var value2 = mod.value;
            if (typeof value2 === "function") {
              value2 = value2(theme);
            }
            if (isPropertyVariable && typeof value2 === "object") {
              var typedValue = value2;
              typedValue.declarations.forEach(function(_a2) {
                var property = _a2.property, value3 = _a2.value;
                !(value3 instanceof Promise) && element.style.setProperty(property, value3);
              });
            } else {
              element.style.setProperty(customProp, value2);
              if (!element.hasAttribute(dataAttr)) {
                element.setAttribute(dataAttr, "");
              }
              unsetProps.delete(targetCSSProp);
            }
          }
          if (ignoreInlineSelectors.length > 0) {
            if (shouldIgnoreInlineStyle(element, ignoreInlineSelectors)) {
              unsetProps.forEach(function(cssProp) {
                element.removeAttribute(overrides[cssProp].dataAttr);
              });
              return;
            }
          }
          if (element.hasAttribute("bgcolor")) {
            var value = element.getAttribute("bgcolor");
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
              value = "#".concat(value);
            }
            setCustomProp("background-color", "background-color", value);
          }
          if (element.hasAttribute("color") && element.rel !== "mask-icon") {
            var value = element.getAttribute("color");
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
              value = "#".concat(value);
            }
            setCustomProp("color", "color", value);
          }
          if (element instanceof SVGElement) {
            if (element.hasAttribute("fill")) {
              var SMALL_SVG_LIMIT_1 = 32;
              var value_1 = element.getAttribute("fill");
              if (value_1 !== "none") {
                if (!(element instanceof SVGTextElement)) {
                  var handleSVGElement = function() {
                    var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
                    var isBg = width > SMALL_SVG_LIMIT_1 || height > SMALL_SVG_LIMIT_1;
                    setCustomProp("fill", isBg ? "background-color" : "color", value_1);
                  };
                  if (isReadyStateComplete()) {
                    handleSVGElement();
                  } else {
                    addReadyStateCompleteListener(handleSVGElement);
                  }
                } else {
                  setCustomProp("fill", "color", value_1);
                }
              }
            }
            if (element.hasAttribute("stop-color")) {
              setCustomProp("stop-color", "background-color", element.getAttribute("stop-color"));
            }
          }
          if (element.hasAttribute("stroke")) {
            var value = element.getAttribute("stroke");
            setCustomProp("stroke", element instanceof SVGLineElement || element instanceof SVGTextElement ? "border-color" : "color", value);
          }
          element.style && iterateCSSDeclarations(element.style, function(property, value2) {
            if (property === "background-image" && value2.includes("url")) {
              return;
            }
            if (overrides.hasOwnProperty(property) || property.startsWith("--") && !normalizedPropList[property]) {
              setCustomProp(property, property, value2);
            } else {
              var overridenProp = normalizedPropList[property];
              if (overridenProp && (!element.style.getPropertyValue(overridenProp) && !element.hasAttribute(overridenProp))) {
                if (overridenProp === "background-color" && element.hasAttribute("bgcolor")) {
                  return;
                }
                element.style.setProperty(property, "");
              }
            }
          });
          if (element.style && element instanceof SVGTextElement && element.style.fill) {
            setCustomProp("fill", "color", element.style.getPropertyValue("fill"));
          }
          forEach(unsetProps, function(cssProp) {
            element.removeAttribute(overrides[cssProp].dataAttr);
          });
          inlineStyleCache.set(element, getInlineStyleCacheKey(element, theme));
        }
        var metaThemeColorName = "theme-color";
        var metaThemeColorSelector = 'meta[name="'.concat(metaThemeColorName, '"]');
        var srcMetaThemeColor = null;
        var observer = null;
        function changeMetaThemeColor(meta, theme) {
          srcMetaThemeColor = srcMetaThemeColor || meta.content;
          var color = parseColorWithCache(srcMetaThemeColor);
          if (!color) {
            return;
          }
          meta.content = modifyBackgroundColor(color, theme);
        }
        function changeMetaThemeColorWhenAvailable(theme) {
          var meta = document.querySelector(metaThemeColorSelector);
          if (meta) {
            changeMetaThemeColor(meta, theme);
          } else {
            if (observer) {
              observer.disconnect();
            }
            observer = new MutationObserver(function(mutations) {
              loop:
                for (var i = 0; i < mutations.length; i++) {
                  var addedNodes = mutations[i].addedNodes;
                  for (var j = 0; j < addedNodes.length; j++) {
                    var node = addedNodes[j];
                    if (node instanceof HTMLMetaElement && node.name === metaThemeColorName) {
                      observer.disconnect();
                      observer = null;
                      changeMetaThemeColor(node, theme);
                      break loop;
                    }
                  }
                }
            });
            observer.observe(document.head, { childList: true });
          }
        }
        function restoreMetaThemeColor() {
          if (observer) {
            observer.disconnect();
            observer = null;
          }
          var meta = document.querySelector(metaThemeColorSelector);
          if (meta && srcMetaThemeColor) {
            meta.content = srcMetaThemeColor;
          }
        }
        var themeCacheKeys = [
          "mode",
          "brightness",
          "contrast",
          "grayscale",
          "sepia",
          "darkSchemeBackgroundColor",
          "darkSchemeTextColor",
          "lightSchemeBackgroundColor",
          "lightSchemeTextColor"
        ];
        function getThemeKey(theme) {
          var resultKey = "";
          themeCacheKeys.forEach(function(key) {
            resultKey += "".concat(key, ":").concat(theme[key], ";");
          });
          return resultKey;
        }
        var asyncQueue = createAsyncTasksQueue();
        function createStyleSheetModifier() {
          var renderId = 0;
          var rulesTextCache = /* @__PURE__ */ new Set();
          var rulesModCache = /* @__PURE__ */ new Map();
          var varTypeChangeCleaners = /* @__PURE__ */ new Set();
          var prevFilterKey = null;
          var hasNonLoadedLink = false;
          var wasRebuilt = false;
          function shouldRebuildStyle() {
            return hasNonLoadedLink && !wasRebuilt;
          }
          function modifySheet(options) {
            var rules = options.sourceCSSRules;
            var theme = options.theme, ignoreImageAnalysis = options.ignoreImageAnalysis, force = options.force, prepareSheet = options.prepareSheet, isAsyncCancelled = options.isAsyncCancelled;
            var rulesChanged = rulesModCache.size === 0;
            var notFoundCacheKeys = new Set(rulesModCache.keys());
            var themeKey = getThemeKey(theme);
            var themeChanged = themeKey !== prevFilterKey;
            if (hasNonLoadedLink) {
              wasRebuilt = true;
            }
            var modRules = [];
            iterateCSSRules(rules, function(rule) {
              var cssText = rule.cssText;
              var textDiffersFromPrev = false;
              notFoundCacheKeys.delete(cssText);
              if (rule.parentRule instanceof CSSMediaRule) {
                cssText += ";".concat(rule.parentRule.media.mediaText);
              }
              if (!rulesTextCache.has(cssText)) {
                rulesTextCache.add(cssText);
                textDiffersFromPrev = true;
              }
              if (textDiffersFromPrev) {
                rulesChanged = true;
              } else {
                modRules.push(rulesModCache.get(cssText));
                return;
              }
              var modDecs = [];
              rule.style && iterateCSSDeclarations(rule.style, function(property, value) {
                var mod = getModifiableCSSDeclaration(property, value, rule, variablesStore, ignoreImageAnalysis, isAsyncCancelled);
                if (mod) {
                  modDecs.push(mod);
                }
              });
              var modRule = null;
              if (modDecs.length > 0) {
                var parentRule = rule.parentRule;
                modRule = { selector: rule.selectorText, declarations: modDecs, parentRule };
                modRules.push(modRule);
              }
              rulesModCache.set(cssText, modRule);
            }, function() {
              hasNonLoadedLink = true;
            });
            notFoundCacheKeys.forEach(function(key) {
              rulesTextCache.delete(key);
              rulesModCache.delete(key);
            });
            prevFilterKey = themeKey;
            if (!force && !rulesChanged && !themeChanged) {
              return;
            }
            renderId++;
            function setRule(target, index, rule) {
              var selector = rule.selector, declarations = rule.declarations;
              var getDeclarationText = function(dec) {
                var property = dec.property, value = dec.value, important = dec.important, sourceValue = dec.sourceValue;
                return "".concat(property, ": ").concat(value == null ? sourceValue : value).concat(important ? " !important" : "", ";");
              };
              var cssRulesText = "";
              declarations.forEach(function(declarations2) {
                cssRulesText += "".concat(getDeclarationText(declarations2), " ");
              });
              var ruleText = "".concat(selector, " { ").concat(cssRulesText, " }");
              target.insertRule(ruleText, index);
            }
            var asyncDeclarations = /* @__PURE__ */ new Map();
            var varDeclarations = /* @__PURE__ */ new Map();
            var asyncDeclarationCounter = 0;
            var varDeclarationCounter = 0;
            var rootReadyGroup = { rule: null, rules: [], isGroup: true };
            var groupRefs = /* @__PURE__ */ new WeakMap();
            function getGroup(rule) {
              if (rule == null) {
                return rootReadyGroup;
              }
              if (groupRefs.has(rule)) {
                return groupRefs.get(rule);
              }
              var group = { rule, rules: [], isGroup: true };
              groupRefs.set(rule, group);
              var parentGroup = getGroup(rule.parentRule);
              parentGroup.rules.push(group);
              return group;
            }
            varTypeChangeCleaners.forEach(function(clear) {
              return clear();
            });
            varTypeChangeCleaners.clear();
            modRules.filter(function(r) {
              return r;
            }).forEach(function(_a) {
              var selector = _a.selector, declarations = _a.declarations, parentRule = _a.parentRule;
              var group = getGroup(parentRule);
              var readyStyleRule = { selector, declarations: [], isGroup: false };
              var readyDeclarations = readyStyleRule.declarations;
              group.rules.push(readyStyleRule);
              function handleAsyncDeclaration(property, modified, important, sourceValue) {
                var asyncKey = ++asyncDeclarationCounter;
                var asyncDeclaration = { property, value: null, important, asyncKey, sourceValue };
                readyDeclarations.push(asyncDeclaration);
                var currentRenderId = renderId;
                modified.then(function(asyncValue) {
                  if (!asyncValue || isAsyncCancelled() || currentRenderId !== renderId) {
                    return;
                  }
                  asyncDeclaration.value = asyncValue;
                  asyncQueue.add(function() {
                    if (isAsyncCancelled() || currentRenderId !== renderId) {
                      return;
                    }
                    rebuildAsyncRule(asyncKey);
                  });
                });
              }
              function handleVarDeclarations(property, modified, important, sourceValue) {
                var _a2 = modified, varDecs = _a2.declarations, onTypeChange = _a2.onTypeChange;
                var varKey = ++varDeclarationCounter;
                var currentRenderId = renderId;
                var initialIndex = readyDeclarations.length;
                var oldDecs = [];
                if (varDecs.length === 0) {
                  var tempDec = { property, value: sourceValue, important, sourceValue, varKey };
                  readyDeclarations.push(tempDec);
                  oldDecs = [tempDec];
                }
                varDecs.forEach(function(mod) {
                  if (mod.value instanceof Promise) {
                    handleAsyncDeclaration(mod.property, mod.value, important, sourceValue);
                  } else {
                    var readyDec = { property: mod.property, value: mod.value, important, sourceValue, varKey };
                    readyDeclarations.push(readyDec);
                    oldDecs.push(readyDec);
                  }
                });
                onTypeChange.addListener(function(newDecs) {
                  if (isAsyncCancelled() || currentRenderId !== renderId) {
                    return;
                  }
                  var readyVarDecs = newDecs.map(function(mod) {
                    return { property: mod.property, value: mod.value, important, sourceValue, varKey };
                  });
                  var index = readyDeclarations.indexOf(oldDecs[0], initialIndex);
                  readyDeclarations.splice.apply(readyDeclarations, __spreadArray([index, oldDecs.length], __read(readyVarDecs), false));
                  oldDecs = readyVarDecs;
                  rebuildVarRule(varKey);
                });
                varTypeChangeCleaners.add(function() {
                  return onTypeChange.removeListeners();
                });
              }
              declarations.forEach(function(_a2) {
                var property = _a2.property, value = _a2.value, important = _a2.important, sourceValue = _a2.sourceValue;
                if (typeof value === "function") {
                  var modified = value(theme);
                  if (modified instanceof Promise) {
                    handleAsyncDeclaration(property, modified, important, sourceValue);
                  } else if (property.startsWith("--")) {
                    handleVarDeclarations(property, modified, important, sourceValue);
                  } else {
                    readyDeclarations.push({ property, value: modified, important, sourceValue });
                  }
                } else {
                  readyDeclarations.push({ property, value, important, sourceValue });
                }
              });
            });
            var sheet = prepareSheet();
            function buildStyleSheet() {
              function createTarget(group, parent) {
                var rule = group.rule;
                if (rule instanceof CSSMediaRule) {
                  var media = rule.media;
                  var index = parent.cssRules.length;
                  parent.insertRule("@media ".concat(media.mediaText, " {}"), index);
                  return parent.cssRules[index];
                }
                return parent;
              }
              function iterateReadyRules(group, target, styleIterator) {
                group.rules.forEach(function(r) {
                  if (r.isGroup) {
                    var t = createTarget(r, target);
                    iterateReadyRules(r, t, styleIterator);
                  } else {
                    styleIterator(r, target);
                  }
                });
              }
              iterateReadyRules(rootReadyGroup, sheet, function(rule, target) {
                var index = target.cssRules.length;
                rule.declarations.forEach(function(_a) {
                  var asyncKey = _a.asyncKey, varKey = _a.varKey;
                  if (asyncKey != null) {
                    asyncDeclarations.set(asyncKey, { rule, target, index });
                  }
                  if (varKey != null) {
                    varDeclarations.set(varKey, { rule, target, index });
                  }
                });
                setRule(target, index, rule);
              });
            }
            function rebuildAsyncRule(key) {
              var _a = asyncDeclarations.get(key), rule = _a.rule, target = _a.target, index = _a.index;
              target.deleteRule(index);
              setRule(target, index, rule);
              asyncDeclarations.delete(key);
            }
            function rebuildVarRule(key) {
              var _a = varDeclarations.get(key), rule = _a.rule, target = _a.target, index = _a.index;
              target.deleteRule(index);
              setRule(target, index, rule);
            }
            buildStyleSheet();
          }
          return { modifySheet, shouldRebuildStyle };
        }
        var STYLE_SELECTOR = 'style, link[rel*="stylesheet" i]:not([disabled])';
        function isFontsGoogleApiStyle(element) {
          if (!element.href) {
            return false;
          }
          try {
            var elementURL = new URL(element.href);
            return elementURL.hostname === "fonts.googleapis.com";
          } catch (err) {
            logInfo("Couldn't construct ".concat(element.href, " as URL"));
            return false;
          }
        }
        function shouldManageStyle(element) {
          return (element instanceof HTMLStyleElement || element instanceof SVGStyleElement || element instanceof HTMLLinkElement && element.rel && element.rel.toLowerCase().includes("stylesheet") && element.href && !element.disabled && (isFirefox ? !element.href.startsWith("moz-extension://") : true) && !isFontsGoogleApiStyle(element)) && !element.classList.contains("darkreader") && element.media.toLowerCase() !== "print" && !element.classList.contains("stylus");
        }
        function getManageableStyles(node, results, deep) {
          if (results === void 0) {
            results = [];
          }
          if (deep === void 0) {
            deep = true;
          }
          if (shouldManageStyle(node)) {
            results.push(node);
          } else if (node instanceof Element || isShadowDomSupported && node instanceof ShadowRoot || node === document) {
            forEach(node.querySelectorAll(STYLE_SELECTOR), function(style) {
              return getManageableStyles(style, results, false);
            });
            if (deep) {
              iterateShadowHosts(node, function(host) {
                return getManageableStyles(host.shadowRoot, results, false);
              });
            }
          }
          return results;
        }
        var syncStyleSet = /* @__PURE__ */ new WeakSet();
        var corsStyleSet = /* @__PURE__ */ new WeakSet();
        var canOptimizeUsingProxy$1 = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          canOptimizeUsingProxy$1 = true;
        });
        var loadingLinkCounter = 0;
        var rejectorsForLoadingLinks = /* @__PURE__ */ new Map();
        function cleanLoadingLinks() {
          rejectorsForLoadingLinks.clear();
        }
        function manageStyle(element, _a) {
          var update = _a.update, loadingStart = _a.loadingStart, loadingEnd = _a.loadingEnd;
          var prevStyles = [];
          var next = element;
          while ((next = next.nextElementSibling) && next.matches(".darkreader")) {
            prevStyles.push(next);
          }
          var corsCopy = prevStyles.find(function(el) {
            return el.matches(".darkreader--cors") && !corsStyleSet.has(el);
          }) || null;
          var syncStyle = prevStyles.find(function(el) {
            return el.matches(".darkreader--sync") && !syncStyleSet.has(el);
          }) || null;
          var corsCopyPositionWatcher = null;
          var syncStylePositionWatcher = null;
          var cancelAsyncOperations = false;
          var isOverrideEmpty = true;
          var sheetModifier = createStyleSheetModifier();
          var observer2 = new MutationObserver(function() {
            update();
          });
          var observerOptions = { attributes: true, childList: true, subtree: true, characterData: true };
          function containsCSSImport() {
            return element instanceof HTMLStyleElement && element.textContent.trim().match(cssImportRegex);
          }
          function hasImports(cssRules, checkCrossOrigin) {
            var result = false;
            if (cssRules) {
              var rule = void 0;
              cssRulesLoop:
                for (var i = 0, len = cssRules.length; i < len; i++) {
                  rule = cssRules[i];
                  if (rule.href) {
                    if (checkCrossOrigin) {
                      if (rule.href.startsWith("http") && !rule.href.startsWith(location.origin)) {
                        result = true;
                        break cssRulesLoop;
                      }
                    } else {
                      result = true;
                      break cssRulesLoop;
                    }
                  }
                }
            }
            return result;
          }
          function getRulesSync() {
            if (corsCopy) {
              return corsCopy.sheet.cssRules;
            }
            if (containsCSSImport()) {
              return null;
            }
            var cssRules = safeGetSheetRules();
            if (element instanceof HTMLLinkElement && !isRelativeHrefOnAbsolutePath(element.href) && hasImports(cssRules, false)) {
              return null;
            }
            if (hasImports(cssRules, true)) {
              return null;
            }
            return cssRules;
          }
          function insertStyle() {
            if (corsCopy) {
              if (element.nextSibling !== corsCopy) {
                element.parentNode.insertBefore(corsCopy, element.nextSibling);
              }
              if (corsCopy.nextSibling !== syncStyle) {
                element.parentNode.insertBefore(syncStyle, corsCopy.nextSibling);
              }
            } else if (element.nextSibling !== syncStyle) {
              element.parentNode.insertBefore(syncStyle, element.nextSibling);
            }
          }
          function createSyncStyle() {
            syncStyle = element instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style");
            syncStyle.classList.add("darkreader");
            syncStyle.classList.add("darkreader--sync");
            syncStyle.media = "screen";
            if (element.title) {
              syncStyle.title = element.title;
            }
            syncStyleSet.add(syncStyle);
          }
          var isLoadingRules = false;
          var wasLoadingError = false;
          var loadingLinkId = ++loadingLinkCounter;
          function getRulesAsync() {
            return __awaiter(this, void 0, void 0, function() {
              var cssText, cssBasePath, _a2, cssRules, accessError, fullCSSText;
              var _b;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    if (!(element instanceof HTMLLinkElement))
                      return [3, 7];
                    _a2 = __read(getRulesOrError(), 2), cssRules = _a2[0], accessError = _a2[1];
                    if (!(!cssRules && !accessError && !isSafari || isSafari && !element.sheet || isStillLoadingError(accessError)))
                      return [3, 5];
                    _c.label = 1;
                  case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4, linkLoading(element, loadingLinkId)];
                  case 2:
                    _c.sent();
                    return [3, 4];
                  case 3:
                    _c.sent();
                    wasLoadingError = true;
                    return [3, 4];
                  case 4:
                    if (cancelAsyncOperations) {
                      return [2, null];
                    }
                    _b = __read(getRulesOrError(), 2), cssRules = _b[0], accessError = _b[1];
                    _c.label = 5;
                  case 5:
                    if (cssRules) {
                      if (!hasImports(cssRules, false)) {
                        return [2, cssRules];
                      }
                    }
                    return [4, loadText(element.href)];
                  case 6:
                    cssText = _c.sent();
                    cssBasePath = getCSSBaseBath(element.href);
                    if (cancelAsyncOperations) {
                      return [2, null];
                    }
                    return [3, 8];
                  case 7:
                    if (containsCSSImport()) {
                      cssText = element.textContent.trim();
                      cssBasePath = getCSSBaseBath(location.href);
                    } else {
                      return [2, null];
                    }
                    _c.label = 8;
                  case 8:
                    if (!cssText)
                      return [3, 13];
                    _c.label = 9;
                  case 9:
                    _c.trys.push([9, 11, , 12]);
                    return [4, replaceCSSImports(cssText, cssBasePath)];
                  case 10:
                    fullCSSText = _c.sent();
                    corsCopy = createCORSCopy(element, fullCSSText);
                    return [3, 12];
                  case 11:
                    _c.sent();
                    return [3, 12];
                  case 12:
                    if (corsCopy) {
                      corsCopyPositionWatcher = watchForNodePosition(corsCopy, "prev-sibling");
                      return [2, corsCopy.sheet.cssRules];
                    }
                    _c.label = 13;
                  case 13:
                    return [2, null];
                }
              });
            });
          }
          function details(options) {
            var rules = getRulesSync();
            if (!rules) {
              if (options.secondRound) {
                return null;
              }
              if (isLoadingRules || wasLoadingError) {
                return null;
              }
              isLoadingRules = true;
              loadingStart();
              getRulesAsync().then(function(results) {
                isLoadingRules = false;
                loadingEnd();
                if (results) {
                  update();
                }
              }).catch(function(err) {
                isLoadingRules = false;
                loadingEnd();
              });
              return null;
            }
            return { rules };
          }
          var forceRenderStyle = false;
          function render(theme, ignoreImageAnalysis) {
            var rules = getRulesSync();
            if (!rules) {
              return;
            }
            cancelAsyncOperations = false;
            function removeCSSRulesFromSheet(sheet) {
              for (var i = sheet.cssRules.length - 1; i >= 0; i--) {
                sheet.deleteRule(i);
              }
            }
            function prepareOverridesSheet() {
              if (!syncStyle) {
                createSyncStyle();
              }
              syncStylePositionWatcher && syncStylePositionWatcher.stop();
              insertStyle();
              if (syncStyle.sheet == null) {
                syncStyle.textContent = "";
              }
              var sheet = syncStyle.sheet;
              removeCSSRulesFromSheet(sheet);
              if (syncStylePositionWatcher) {
                syncStylePositionWatcher.run();
              } else {
                syncStylePositionWatcher = watchForNodePosition(syncStyle, "prev-sibling", function() {
                  forceRenderStyle = true;
                  buildOverrides();
                });
              }
              return syncStyle.sheet;
            }
            function buildOverrides() {
              var force = forceRenderStyle;
              forceRenderStyle = false;
              sheetModifier.modifySheet({
                prepareSheet: prepareOverridesSheet,
                sourceCSSRules: rules,
                theme,
                ignoreImageAnalysis,
                force,
                isAsyncCancelled: function() {
                  return cancelAsyncOperations;
                }
              });
              isOverrideEmpty = syncStyle.sheet.cssRules.length === 0;
              if (sheetModifier.shouldRebuildStyle()) {
                addReadyStateCompleteListener(function() {
                  return update();
                });
              }
            }
            buildOverrides();
          }
          function getRulesOrError() {
            try {
              if (element.sheet == null) {
                return [null, null];
              }
              return [element.sheet.cssRules, null];
            } catch (err) {
              return [null, err];
            }
          }
          function isStillLoadingError(error) {
            return error && error.message && error.message.includes("loading");
          }
          function safeGetSheetRules() {
            var _a2 = __read(getRulesOrError(), 2), cssRules = _a2[0], err = _a2[1];
            if (err) {
              return null;
            }
            return cssRules;
          }
          function watchForSheetChanges() {
            watchForSheetChangesUsingProxy();
            if (!isThunderbird && !(canOptimizeUsingProxy$1 && element.sheet)) {
              watchForSheetChangesUsingRAF();
            }
          }
          var rulesChangeKey = null;
          var rulesCheckFrameId = null;
          function getRulesChangeKey() {
            var rules = safeGetSheetRules();
            return rules ? rules.length : null;
          }
          function didRulesKeyChange() {
            return getRulesChangeKey() !== rulesChangeKey;
          }
          function watchForSheetChangesUsingRAF() {
            rulesChangeKey = getRulesChangeKey();
            stopWatchingForSheetChangesUsingRAF();
            var checkForUpdate = function() {
              if (didRulesKeyChange()) {
                rulesChangeKey = getRulesChangeKey();
                update();
              }
              if (canOptimizeUsingProxy$1 && element.sheet) {
                stopWatchingForSheetChangesUsingRAF();
                return;
              }
              rulesCheckFrameId = requestAnimationFrame(checkForUpdate);
            };
            checkForUpdate();
          }
          function stopWatchingForSheetChangesUsingRAF() {
            cancelAnimationFrame(rulesCheckFrameId);
          }
          var areSheetChangesPending = false;
          function onSheetChange() {
            canOptimizeUsingProxy$1 = true;
            stopWatchingForSheetChangesUsingRAF();
            if (areSheetChangesPending) {
              return;
            }
            function handleSheetChanges() {
              areSheetChangesPending = false;
              if (cancelAsyncOperations) {
                return;
              }
              update();
            }
            areSheetChangesPending = true;
            if (typeof queueMicrotask === "function") {
              queueMicrotask(handleSheetChanges);
            } else {
              requestAnimationFrame(handleSheetChanges);
            }
          }
          function watchForSheetChangesUsingProxy() {
            element.addEventListener("__darkreader__updateSheet", onSheetChange);
          }
          function stopWatchingForSheetChangesUsingProxy() {
            element.removeEventListener("__darkreader__updateSheet", onSheetChange);
          }
          function stopWatchingForSheetChanges() {
            stopWatchingForSheetChangesUsingProxy();
            stopWatchingForSheetChangesUsingRAF();
          }
          function pause() {
            observer2.disconnect();
            cancelAsyncOperations = true;
            corsCopyPositionWatcher && corsCopyPositionWatcher.stop();
            syncStylePositionWatcher && syncStylePositionWatcher.stop();
            stopWatchingForSheetChanges();
          }
          function destroy() {
            pause();
            removeNode(corsCopy);
            removeNode(syncStyle);
            loadingEnd();
            if (rejectorsForLoadingLinks.has(loadingLinkId)) {
              var reject = rejectorsForLoadingLinks.get(loadingLinkId);
              rejectorsForLoadingLinks.delete(loadingLinkId);
              reject && reject();
            }
          }
          function watch() {
            observer2.observe(element, observerOptions);
            if (element instanceof HTMLStyleElement) {
              watchForSheetChanges();
            }
          }
          var maxMoveCount = 10;
          var moveCount = 0;
          function restore() {
            if (!syncStyle) {
              return;
            }
            moveCount++;
            if (moveCount > maxMoveCount) {
              return;
            }
            insertStyle();
            corsCopyPositionWatcher && corsCopyPositionWatcher.skip();
            syncStylePositionWatcher && syncStylePositionWatcher.skip();
            if (!isOverrideEmpty) {
              forceRenderStyle = true;
              update();
            }
          }
          return {
            details,
            render,
            pause,
            destroy,
            watch,
            restore
          };
        }
        function linkLoading(link, loadingId) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, new Promise(function(resolve, reject) {
                var cleanUp = function() {
                  link.removeEventListener("load", onLoad);
                  link.removeEventListener("error", onError);
                  rejectorsForLoadingLinks.delete(loadingId);
                };
                var onLoad = function() {
                  cleanUp();
                  resolve();
                };
                var onError = function() {
                  cleanUp();
                  reject("Linkelement ".concat(loadingId, " couldn't be loaded. ").concat(link.href));
                };
                rejectorsForLoadingLinks.set(loadingId, function() {
                  cleanUp();
                  reject();
                });
                link.addEventListener("load", onLoad);
                link.addEventListener("error", onError);
                if (!link.href) {
                  onError();
                }
              })];
            });
          });
        }
        function getCSSImportURL(importDeclaration) {
          return getCSSURLValue(importDeclaration.substring(7).trim().replace(/;$/, "").replace(/screen$/, ""));
        }
        function loadText(url) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!url.startsWith("data:"))
                    return [3, 3];
                  return [4, fetch(url)];
                case 1:
                  return [4, _a.sent().text()];
                case 2:
                  return [2, _a.sent()];
                case 3:
                  return [4, bgFetch({ url, responseType: "text", mimeType: "text/css", origin: window.location.origin })];
                case 4:
                  return [2, _a.sent()];
              }
            });
          });
        }
        function replaceCSSImports(cssText, basePath, cache) {
          if (cache === void 0) {
            cache = /* @__PURE__ */ new Map();
          }
          return __awaiter(this, void 0, void 0, function() {
            var importMatches, importMatches_1, importMatches_1_1, match, importURL, absoluteURL, importedCSS, e_1_1;
            var e_1, _a;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  cssText = removeCSSComments(cssText);
                  cssText = replaceCSSFontFace(cssText);
                  cssText = replaceCSSRelativeURLsWithAbsolute(cssText, basePath);
                  importMatches = getMatches(cssImportRegex, cssText);
                  _b.label = 1;
                case 1:
                  _b.trys.push([1, 10, 11, 12]);
                  importMatches_1 = __values(importMatches), importMatches_1_1 = importMatches_1.next();
                  _b.label = 2;
                case 2:
                  if (!!importMatches_1_1.done)
                    return [3, 9];
                  match = importMatches_1_1.value;
                  importURL = getCSSImportURL(match);
                  absoluteURL = getAbsoluteURL(basePath, importURL);
                  importedCSS = void 0;
                  if (!cache.has(absoluteURL))
                    return [3, 3];
                  importedCSS = cache.get(absoluteURL);
                  return [3, 7];
                case 3:
                  _b.trys.push([3, 6, , 7]);
                  return [4, loadText(absoluteURL)];
                case 4:
                  importedCSS = _b.sent();
                  cache.set(absoluteURL, importedCSS);
                  return [4, replaceCSSImports(importedCSS, getCSSBaseBath(absoluteURL), cache)];
                case 5:
                  importedCSS = _b.sent();
                  return [3, 7];
                case 6:
                  _b.sent();
                  importedCSS = "";
                  return [3, 7];
                case 7:
                  cssText = cssText.split(match).join(importedCSS);
                  _b.label = 8;
                case 8:
                  importMatches_1_1 = importMatches_1.next();
                  return [3, 2];
                case 9:
                  return [3, 12];
                case 10:
                  e_1_1 = _b.sent();
                  e_1 = { error: e_1_1 };
                  return [3, 12];
                case 11:
                  try {
                    if (importMatches_1_1 && !importMatches_1_1.done && (_a = importMatches_1.return))
                      _a.call(importMatches_1);
                  } finally {
                    if (e_1)
                      throw e_1.error;
                  }
                  return [7];
                case 12:
                  cssText = cssText.trim();
                  return [2, cssText];
              }
            });
          });
        }
        function createCORSCopy(srcElement, cssText) {
          if (!cssText) {
            return null;
          }
          var cors = document.createElement("style");
          cors.classList.add("darkreader");
          cors.classList.add("darkreader--cors");
          cors.media = "screen";
          cors.textContent = cssText;
          srcElement.parentNode.insertBefore(cors, srcElement.nextSibling);
          cors.sheet.disabled = true;
          corsStyleSet.add(cors);
          return cors;
        }
        var observers = [];
        var observedRoots;
        var undefinedGroups = /* @__PURE__ */ new Map();
        var elementsDefinitionCallback;
        function collectUndefinedElements(root) {
          if (!isDefinedSelectorSupported) {
            return;
          }
          forEach(root.querySelectorAll(":not(:defined)"), function(el) {
            var tag = el.tagName.toLowerCase();
            if (!tag.includes("-")) {
              var extendedTag = el.getAttribute("is");
              if (extendedTag) {
                tag = extendedTag;
              } else {
                return;
              }
            }
            if (!undefinedGroups.has(tag)) {
              undefinedGroups.set(tag, /* @__PURE__ */ new Set());
              customElementsWhenDefined(tag).then(function() {
                if (elementsDefinitionCallback) {
                  var elements = undefinedGroups.get(tag);
                  undefinedGroups.delete(tag);
                  elementsDefinitionCallback(Array.from(elements));
                }
              });
            }
            undefinedGroups.get(tag).add(el);
          });
        }
        var canOptimizeUsingProxy = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          canOptimizeUsingProxy = true;
        });
        var resolvers = /* @__PURE__ */ new Map();
        function handleIsDefined(e) {
          canOptimizeUsingProxy = true;
          if (resolvers.has(e.detail.tag)) {
            var resolve = resolvers.get(e.detail.tag);
            resolve();
          }
        }
        function customElementsWhenDefined(tag) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, new Promise(function(resolve) {
                if (window.customElements && typeof customElements.whenDefined === "function") {
                  customElements.whenDefined(tag).then(function() {
                    return resolve();
                  });
                } else if (canOptimizeUsingProxy) {
                  resolvers.set(tag, resolve);
                  document.dispatchEvent(new CustomEvent("__darkreader__addUndefinedResolver", { detail: { tag } }));
                } else {
                  var checkIfDefined_1 = function() {
                    var elements = undefinedGroups.get(tag);
                    if (elements && elements.size > 0) {
                      if (elements.values().next().value.matches(":defined")) {
                        resolve();
                      } else {
                        requestAnimationFrame(checkIfDefined_1);
                      }
                    }
                  };
                  requestAnimationFrame(checkIfDefined_1);
                }
              })];
            });
          });
        }
        function watchWhenCustomElementsDefined(callback) {
          elementsDefinitionCallback = callback;
        }
        function unsubscribeFromDefineCustomElements() {
          elementsDefinitionCallback = null;
          undefinedGroups.clear();
          document.removeEventListener("__darkreader__isDefined", handleIsDefined);
        }
        function watchForStyleChanges(currentStyles, update, shadowRootDiscovered) {
          stopWatchingForStyleChanges();
          var prevStyles = new Set(currentStyles);
          var prevStyleSiblings = /* @__PURE__ */ new WeakMap();
          var nextStyleSiblings = /* @__PURE__ */ new WeakMap();
          function saveStylePosition(style) {
            prevStyleSiblings.set(style, style.previousElementSibling);
            nextStyleSiblings.set(style, style.nextElementSibling);
          }
          function forgetStylePosition(style) {
            prevStyleSiblings.delete(style);
            nextStyleSiblings.delete(style);
          }
          function didStylePositionChange(style) {
            return style.previousElementSibling !== prevStyleSiblings.get(style) || style.nextElementSibling !== nextStyleSiblings.get(style);
          }
          currentStyles.forEach(saveStylePosition);
          function handleStyleOperations(operations) {
            var createdStyles = operations.createdStyles, removedStyles = operations.removedStyles, movedStyles = operations.movedStyles;
            createdStyles.forEach(function(s) {
              return saveStylePosition(s);
            });
            movedStyles.forEach(function(s) {
              return saveStylePosition(s);
            });
            removedStyles.forEach(function(s) {
              return forgetStylePosition(s);
            });
            createdStyles.forEach(function(s) {
              return prevStyles.add(s);
            });
            removedStyles.forEach(function(s) {
              return prevStyles.delete(s);
            });
            if (createdStyles.size + removedStyles.size + movedStyles.size > 0) {
              update({
                created: Array.from(createdStyles),
                removed: Array.from(removedStyles),
                moved: Array.from(movedStyles),
                updated: []
              });
            }
          }
          function handleMinorTreeMutations(_a) {
            var additions = _a.additions, moves = _a.moves, deletions = _a.deletions;
            var createdStyles = /* @__PURE__ */ new Set();
            var removedStyles = /* @__PURE__ */ new Set();
            var movedStyles = /* @__PURE__ */ new Set();
            additions.forEach(function(node) {
              return getManageableStyles(node).forEach(function(style) {
                return createdStyles.add(style);
              });
            });
            deletions.forEach(function(node) {
              return getManageableStyles(node).forEach(function(style) {
                return removedStyles.add(style);
              });
            });
            moves.forEach(function(node) {
              return getManageableStyles(node).forEach(function(style) {
                return movedStyles.add(style);
              });
            });
            handleStyleOperations({ createdStyles, removedStyles, movedStyles });
            additions.forEach(function(n) {
              iterateShadowHosts(n, subscribeForShadowRootChanges);
              collectUndefinedElements(n);
            });
          }
          function handleHugeTreeMutations(root) {
            var styles = new Set(getManageableStyles(root));
            var createdStyles = /* @__PURE__ */ new Set();
            var removedStyles = /* @__PURE__ */ new Set();
            var movedStyles = /* @__PURE__ */ new Set();
            styles.forEach(function(s) {
              if (!prevStyles.has(s)) {
                createdStyles.add(s);
              }
            });
            prevStyles.forEach(function(s) {
              if (!styles.has(s)) {
                removedStyles.add(s);
              }
            });
            styles.forEach(function(s) {
              if (!createdStyles.has(s) && !removedStyles.has(s) && didStylePositionChange(s)) {
                movedStyles.add(s);
              }
            });
            handleStyleOperations({ createdStyles, removedStyles, movedStyles });
            iterateShadowHosts(root, subscribeForShadowRootChanges);
            collectUndefinedElements(root);
          }
          function handleAttributeMutations(mutations) {
            var updatedStyles = /* @__PURE__ */ new Set();
            var removedStyles = /* @__PURE__ */ new Set();
            mutations.forEach(function(m) {
              var target = m.target;
              if (target.isConnected) {
                if (shouldManageStyle(target)) {
                  updatedStyles.add(target);
                } else if (target instanceof HTMLLinkElement && target.disabled) {
                  removedStyles.add(target);
                }
              }
            });
            if (updatedStyles.size + removedStyles.size > 0) {
              update({
                updated: Array.from(updatedStyles),
                created: [],
                removed: Array.from(removedStyles),
                moved: []
              });
            }
          }
          function observe(root) {
            var treeObserver = createOptimizedTreeObserver(root, {
              onMinorMutations: handleMinorTreeMutations,
              onHugeMutations: handleHugeTreeMutations
            });
            var attrObserver = new MutationObserver(handleAttributeMutations);
            attrObserver.observe(root, { attributes: true, attributeFilter: ["rel", "disabled", "media", "href"], subtree: true });
            observers.push(treeObserver, attrObserver);
            observedRoots.add(root);
          }
          function subscribeForShadowRootChanges(node) {
            var shadowRoot = node.shadowRoot;
            if (shadowRoot == null || observedRoots.has(shadowRoot)) {
              return;
            }
            observe(shadowRoot);
            shadowRootDiscovered(shadowRoot);
          }
          observe(document);
          iterateShadowHosts(document.documentElement, subscribeForShadowRootChanges);
          watchWhenCustomElementsDefined(function(hosts) {
            var newStyles = [];
            hosts.forEach(function(host) {
              return push(newStyles, getManageableStyles(host.shadowRoot));
            });
            update({ created: newStyles, updated: [], removed: [], moved: [] });
            hosts.forEach(function(host) {
              var shadowRoot = host.shadowRoot;
              if (shadowRoot == null) {
                return;
              }
              subscribeForShadowRootChanges(host);
              iterateShadowHosts(shadowRoot, subscribeForShadowRootChanges);
              collectUndefinedElements(shadowRoot);
            });
          });
          document.addEventListener("__darkreader__isDefined", handleIsDefined);
          collectUndefinedElements(document);
        }
        function resetObservers() {
          observers.forEach(function(o) {
            return o.disconnect();
          });
          observers.splice(0, observers.length);
          observedRoots = /* @__PURE__ */ new WeakSet();
        }
        function stopWatchingForStyleChanges() {
          resetObservers();
          unsubscribeFromDefineCustomElements();
        }
        function hexify(number) {
          return (number < 16 ? "0" : "") + number.toString(16);
        }
        function generateUID() {
          if ("randomUUID" in crypto) {
            var uuid = crypto.randomUUID();
            return uuid.substring(0, 8) + uuid.substring(9, 13) + uuid.substring(14, 18) + uuid.substring(19, 23) + uuid.substring(24);
          }
          return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(function(x) {
            return hexify(x);
          }).join("");
        }
        var adoptedStyleOverrides = /* @__PURE__ */ new WeakMap();
        var overrideList = /* @__PURE__ */ new WeakSet();
        function createAdoptedStyleSheetOverride(node) {
          var cancelAsyncOperations = false;
          function injectSheet(sheet, override) {
            var newSheets = __spreadArray([], __read(node.adoptedStyleSheets), false);
            var sheetIndex = newSheets.indexOf(sheet);
            var existingIndex = newSheets.indexOf(override);
            if (sheetIndex === existingIndex - 1) {
              return;
            }
            if (existingIndex >= 0) {
              newSheets.splice(existingIndex, 1);
            }
            newSheets.splice(sheetIndex + 1, 0, override);
            node.adoptedStyleSheets = newSheets;
          }
          function destroy() {
            cancelAsyncOperations = true;
            var newSheets = __spreadArray([], __read(node.adoptedStyleSheets), false);
            node.adoptedStyleSheets.forEach(function(adoptedStyleSheet) {
              if (overrideList.has(adoptedStyleSheet)) {
                var existingIndex = newSheets.indexOf(adoptedStyleSheet);
                if (existingIndex >= 0) {
                  newSheets.splice(existingIndex, 1);
                }
                adoptedStyleOverrides.delete(adoptedStyleSheet);
                overrideList.delete(adoptedStyleSheet);
              }
            });
            node.adoptedStyleSheets = newSheets;
          }
          function render(theme, ignoreImageAnalysis) {
            node.adoptedStyleSheets.forEach(function(sheet) {
              if (overrideList.has(sheet)) {
                return;
              }
              var rules = sheet.rules;
              var override = new CSSStyleSheet();
              function prepareOverridesSheet() {
                for (var i = override.cssRules.length - 1; i >= 0; i--) {
                  override.deleteRule(i);
                }
                injectSheet(sheet, override);
                adoptedStyleOverrides.set(sheet, override);
                overrideList.add(override);
                return override;
              }
              var sheetModifier = createStyleSheetModifier();
              sheetModifier.modifySheet({
                prepareSheet: prepareOverridesSheet,
                sourceCSSRules: rules,
                theme,
                ignoreImageAnalysis,
                force: false,
                isAsyncCancelled: function() {
                  return cancelAsyncOperations;
                }
              });
            });
          }
          return {
            render,
            destroy
          };
        }
        function injectProxy(enableStyleSheetsProxy) {
          document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));
          var addRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule");
          var insertRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule");
          var deleteRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule");
          var removeRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule");
          var documentStyleSheetsDescriptor = enableStyleSheetsProxy ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null;
          var shouldWrapHTMLElement = [
            "baidu.com",
            "baike.baidu.com",
            "ditu.baidu.com",
            "map.baidu.com",
            "maps.baidu.com",
            "haokan.baidu.com",
            "pan.baidu.com",
            "passport.baidu.com",
            "tieba.baidu.com",
            "www.baidu.com"
          ].includes(location.hostname);
          var getElementsByTagNameDescriptor = shouldWrapHTMLElement ? Object.getOwnPropertyDescriptor(Element.prototype, "getElementsByTagName") : null;
          var cleanUp = function() {
            Object.defineProperty(CSSStyleSheet.prototype, "addRule", addRuleDescriptor);
            Object.defineProperty(CSSStyleSheet.prototype, "insertRule", insertRuleDescriptor);
            Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", deleteRuleDescriptor);
            Object.defineProperty(CSSStyleSheet.prototype, "removeRule", removeRuleDescriptor);
            document.removeEventListener("__darkreader__cleanUp", cleanUp);
            document.removeEventListener("__darkreader__addUndefinedResolver", addUndefinedResolver);
            if (enableStyleSheetsProxy) {
              Object.defineProperty(Document.prototype, "styleSheets", documentStyleSheetsDescriptor);
            }
            if (shouldWrapHTMLElement) {
              Object.defineProperty(Element.prototype, "getElementsByTagName", getElementsByTagNameDescriptor);
            }
          };
          var addUndefinedResolver = function(e) {
            customElements.whenDefined(e.detail.tag).then(function() {
              document.dispatchEvent(new CustomEvent("__darkreader__isDefined", { detail: { tag: e.detail.tag } }));
            });
          };
          document.addEventListener("__darkreader__cleanUp", cleanUp);
          document.addEventListener("__darkreader__addUndefinedResolver", addUndefinedResolver);
          var updateSheetEvent = new Event("__darkreader__updateSheet");
          function proxyAddRule(selector, style, index) {
            addRuleDescriptor.value.call(this, selector, style, index);
            if (this.ownerNode && !this.ownerNode.classList.contains("darkreader")) {
              this.ownerNode.dispatchEvent(updateSheetEvent);
            }
            return -1;
          }
          function proxyInsertRule(rule, index) {
            var returnValue = insertRuleDescriptor.value.call(this, rule, index);
            if (this.ownerNode && !this.ownerNode.classList.contains("darkreader")) {
              this.ownerNode.dispatchEvent(updateSheetEvent);
            }
            return returnValue;
          }
          function proxyDeleteRule(index) {
            deleteRuleDescriptor.value.call(this, index);
            if (this.ownerNode && !this.ownerNode.classList.contains("darkreader")) {
              this.ownerNode.dispatchEvent(updateSheetEvent);
            }
          }
          function proxyRemoveRule(index) {
            removeRuleDescriptor.value.call(this, index);
            if (this.ownerNode && !this.ownerNode.classList.contains("darkreader")) {
              this.ownerNode.dispatchEvent(updateSheetEvent);
            }
          }
          function proxyDocumentStyleSheets() {
            var _this = this;
            var getCurrentValue = function() {
              var docSheets = documentStyleSheetsDescriptor.get.call(_this);
              var filteredSheets = __spreadArray([], __read(docSheets), false).filter(function(styleSheet) {
                return !styleSheet.ownerNode.classList.contains("darkreader");
              });
              filteredSheets.item = function(item) {
                return filteredSheets[item];
              };
              return Object.setPrototypeOf(filteredSheets, StyleSheetList.prototype);
            };
            var elements = getCurrentValue();
            var styleSheetListBehavior = {
              get: function(_, property) {
                return getCurrentValue()[property];
              }
            };
            elements = new Proxy(elements, styleSheetListBehavior);
            return elements;
          }
          function proxyGetElementsByTagName(tagName) {
            var _this = this;
            if (tagName !== "style") {
              return getElementsByTagNameDescriptor.value.call(this, tagName);
            }
            var getCurrentElementValue = function() {
              var elements2 = getElementsByTagNameDescriptor.value.call(_this, tagName);
              return Object.setPrototypeOf(__spreadArray([], __read(elements2), false).filter(function(element) {
                return !element.classList.contains("darkreader");
              }), NodeList.prototype);
            };
            var elements = getCurrentElementValue();
            var nodeListBehavior = {
              get: function(_, property) {
                return getCurrentElementValue()[Number(property) || property];
              }
            };
            elements = new Proxy(elements, nodeListBehavior);
            return elements;
          }
          Object.defineProperty(CSSStyleSheet.prototype, "addRule", Object.assign({}, addRuleDescriptor, { value: proxyAddRule }));
          Object.defineProperty(CSSStyleSheet.prototype, "insertRule", Object.assign({}, insertRuleDescriptor, { value: proxyInsertRule }));
          Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", Object.assign({}, deleteRuleDescriptor, { value: proxyDeleteRule }));
          Object.defineProperty(CSSStyleSheet.prototype, "removeRule", Object.assign({}, removeRuleDescriptor, { value: proxyRemoveRule }));
          if (enableStyleSheetsProxy) {
            Object.defineProperty(Document.prototype, "styleSheets", Object.assign({}, documentStyleSheetsDescriptor, { get: proxyDocumentStyleSheets }));
          }
          if (shouldWrapHTMLElement) {
            Object.defineProperty(Element.prototype, "getElementsByTagName", Object.assign({}, getElementsByTagNameDescriptor, { value: proxyGetElementsByTagName }));
          }
        }
        var INSTANCE_ID = generateUID();
        var styleManagers = /* @__PURE__ */ new Map();
        var adoptedStyleManagers = [];
        var filter = null;
        var fixes = null;
        var isIFrame$1 = null;
        var ignoredImageAnalysisSelectors = null;
        var ignoredInlineSelectors = null;
        function createOrUpdateStyle(className, root) {
          if (root === void 0) {
            root = document.head || document;
          }
          var element = root.querySelector(".".concat(className));
          if (!element) {
            element = document.createElement("style");
            element.classList.add("darkreader");
            element.classList.add(className);
            element.media = "screen";
            element.textContent = "";
          }
          return element;
        }
        function createOrUpdateScript(className, root) {
          if (root === void 0) {
            root = document.head || document;
          }
          var element = root.querySelector(".".concat(className));
          if (!element) {
            element = document.createElement("script");
            element.classList.add("darkreader");
            element.classList.add(className);
          }
          return element;
        }
        var nodePositionWatchers = /* @__PURE__ */ new Map();
        function setupNodePositionWatcher(node, alias) {
          nodePositionWatchers.has(alias) && nodePositionWatchers.get(alias).stop();
          nodePositionWatchers.set(alias, watchForNodePosition(node, "parent"));
        }
        function stopStylePositionWatchers() {
          forEach(nodePositionWatchers.values(), function(watcher) {
            return watcher.stop();
          });
          nodePositionWatchers.clear();
        }
        function createStaticStyleOverrides() {
          var fallbackStyle = createOrUpdateStyle("darkreader--fallback", document);
          fallbackStyle.textContent = getModifiedFallbackStyle(filter, { strict: true });
          document.head.insertBefore(fallbackStyle, document.head.firstChild);
          setupNodePositionWatcher(fallbackStyle, "fallback");
          var userAgentStyle = createOrUpdateStyle("darkreader--user-agent");
          userAgentStyle.textContent = getModifiedUserAgentStyle(filter, isIFrame$1, filter.styleSystemControls);
          document.head.insertBefore(userAgentStyle, fallbackStyle.nextSibling);
          setupNodePositionWatcher(userAgentStyle, "user-agent");
          var textStyle = createOrUpdateStyle("darkreader--text");
          if (filter.useFont || filter.textStroke > 0) {
            textStyle.textContent = createTextStyle(filter);
          } else {
            textStyle.textContent = "";
          }
          document.head.insertBefore(textStyle, fallbackStyle.nextSibling);
          setupNodePositionWatcher(textStyle, "text");
          var invertStyle = createOrUpdateStyle("darkreader--invert");
          if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
              "".concat(fixes.invert.join(", "), " {"),
              "    filter: ".concat(getCSSFilterValue(__assign(__assign({}, filter), { contrast: filter.mode === 0 ? filter.contrast : clamp(filter.contrast - 10, 0, 100) })), " !important;"),
              "}"
            ].join("\n");
          } else {
            invertStyle.textContent = "";
          }
          document.head.insertBefore(invertStyle, textStyle.nextSibling);
          setupNodePositionWatcher(invertStyle, "invert");
          var inlineStyle = createOrUpdateStyle("darkreader--inline");
          inlineStyle.textContent = getInlineOverrideStyle();
          document.head.insertBefore(inlineStyle, invertStyle.nextSibling);
          setupNodePositionWatcher(inlineStyle, "inline");
          var overrideStyle = createOrUpdateStyle("darkreader--override");
          overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
          document.head.appendChild(overrideStyle);
          setupNodePositionWatcher(overrideStyle, "override");
          var variableStyle = createOrUpdateStyle("darkreader--variables");
          var selectionColors = getSelectionColor(filter);
          var darkSchemeBackgroundColor = filter.darkSchemeBackgroundColor, darkSchemeTextColor = filter.darkSchemeTextColor, lightSchemeBackgroundColor = filter.lightSchemeBackgroundColor, lightSchemeTextColor = filter.lightSchemeTextColor, mode = filter.mode;
          var schemeBackgroundColor = mode === 0 ? lightSchemeBackgroundColor : darkSchemeBackgroundColor;
          var schemeTextColor = mode === 0 ? lightSchemeTextColor : darkSchemeTextColor;
          schemeBackgroundColor = modifyBackgroundColor(parseColorWithCache(schemeBackgroundColor), filter);
          schemeTextColor = modifyForegroundColor(parseColorWithCache(schemeTextColor), filter);
          variableStyle.textContent = [
            ":root {",
            "   --darkreader-neutral-background: ".concat(schemeBackgroundColor, ";"),
            "   --darkreader-neutral-text: ".concat(schemeTextColor, ";"),
            "   --darkreader-selection-background: ".concat(selectionColors.backgroundColorSelection, ";"),
            "   --darkreader-selection-text: ".concat(selectionColors.foregroundColorSelection, ";"),
            "}"
          ].join("\n");
          document.head.insertBefore(variableStyle, inlineStyle.nextSibling);
          setupNodePositionWatcher(variableStyle, "variables");
          var rootVarsStyle = createOrUpdateStyle("darkreader--root-vars");
          document.head.insertBefore(rootVarsStyle, variableStyle.nextSibling);
          var injectProxyArg = !(fixes && fixes.disableStyleSheetsProxy);
          {
            var proxyScript = createOrUpdateScript("darkreader--proxy");
            proxyScript.append("(".concat(injectProxy, ")(").concat(injectProxyArg, ")"));
            document.head.insertBefore(proxyScript, rootVarsStyle.nextSibling);
            proxyScript.remove();
          }
        }
        var shadowRootsWithOverrides = /* @__PURE__ */ new Set();
        function createShadowStaticStyleOverrides(root) {
          var inlineStyle = createOrUpdateStyle("darkreader--inline", root);
          inlineStyle.textContent = getInlineOverrideStyle();
          root.insertBefore(inlineStyle, root.firstChild);
          var overrideStyle = createOrUpdateStyle("darkreader--override", root);
          overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
          root.insertBefore(overrideStyle, inlineStyle.nextSibling);
          var invertStyle = createOrUpdateStyle("darkreader--invert", root);
          if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
              "".concat(fixes.invert.join(", "), " {"),
              "    filter: ".concat(getCSSFilterValue(__assign(__assign({}, filter), { contrast: filter.mode === 0 ? filter.contrast : clamp(filter.contrast - 10, 0, 100) })), " !important;"),
              "}"
            ].join("\n");
          } else {
            invertStyle.textContent = "";
          }
          root.insertBefore(invertStyle, overrideStyle.nextSibling);
          shadowRootsWithOverrides.add(root);
        }
        function replaceCSSTemplates($cssText) {
          return $cssText.replace(/\${(.+?)}/g, function(_, $color) {
            var color = parseColorWithCache($color);
            if (color) {
              return modifyColor(color, filter);
            }
            return $color;
          });
        }
        function cleanFallbackStyle() {
          var fallback = document.querySelector(".darkreader--fallback");
          if (fallback) {
            fallback.textContent = "";
          }
        }
        function createDynamicStyleOverrides() {
          cancelRendering();
          var allStyles = getManageableStyles(document);
          var newManagers = allStyles.filter(function(style) {
            return !styleManagers.has(style);
          }).map(function(style) {
            return createManager(style);
          });
          newManagers.map(function(manager) {
            return manager.details({ secondRound: false });
          }).filter(function(detail) {
            return detail && detail.rules.length > 0;
          }).forEach(function(detail) {
            variablesStore.addRulesForMatching(detail.rules);
          });
          variablesStore.matchVariablesAndDependants();
          variablesStore.setOnRootVariableChange(function() {
            variablesStore.putRootVars(document.head.querySelector(".darkreader--root-vars"), filter);
          });
          variablesStore.putRootVars(document.head.querySelector(".darkreader--root-vars"), filter);
          styleManagers.forEach(function(manager) {
            return manager.render(filter, ignoredImageAnalysisSelectors);
          });
          if (loadingStyles.size === 0) {
            cleanFallbackStyle();
          }
          newManagers.forEach(function(manager) {
            return manager.watch();
          });
          var inlineStyleElements = toArray(document.querySelectorAll(INLINE_STYLE_SELECTOR));
          iterateShadowHosts(document.documentElement, function(host) {
            createShadowStaticStyleOverrides(host.shadowRoot);
            var elements = host.shadowRoot.querySelectorAll(INLINE_STYLE_SELECTOR);
            if (elements.length > 0) {
              push(inlineStyleElements, elements);
            }
          });
          inlineStyleElements.forEach(function(el) {
            return overrideInlineStyle(el, filter, ignoredInlineSelectors, ignoredImageAnalysisSelectors);
          });
          handleAdoptedStyleSheets(document);
        }
        var loadingStylesCounter = 0;
        var loadingStyles = /* @__PURE__ */ new Set();
        function createManager(element) {
          var loadingStyleId = ++loadingStylesCounter;
          function loadingStart() {
            if (!isDOMReady() || !didDocumentShowUp) {
              loadingStyles.add(loadingStyleId);
              logInfo("Current amount of styles loading: ".concat(loadingStyles.size));
              var fallbackStyle = document.querySelector(".darkreader--fallback");
              if (!fallbackStyle.textContent) {
                fallbackStyle.textContent = getModifiedFallbackStyle(filter, { strict: false });
              }
            }
          }
          function loadingEnd() {
            loadingStyles.delete(loadingStyleId);
            logInfo("Removed loadingStyle ".concat(loadingStyleId, ", now awaiting: ").concat(loadingStyles.size));
            if (loadingStyles.size === 0 && isDOMReady()) {
              cleanFallbackStyle();
            }
          }
          function update() {
            var details = manager.details({ secondRound: true });
            if (!details) {
              return;
            }
            variablesStore.addRulesForMatching(details.rules);
            variablesStore.matchVariablesAndDependants();
            manager.render(filter, ignoredImageAnalysisSelectors);
          }
          var manager = manageStyle(element, { update, loadingStart, loadingEnd });
          styleManagers.set(element, manager);
          return manager;
        }
        function removeManager(element) {
          var manager = styleManagers.get(element);
          if (manager) {
            manager.destroy();
            styleManagers.delete(element);
          }
        }
        var throttledRenderAllStyles = throttle(function(callback) {
          styleManagers.forEach(function(manager) {
            return manager.render(filter, ignoredImageAnalysisSelectors);
          });
          adoptedStyleManagers.forEach(function(manager) {
            return manager.render(filter, ignoredImageAnalysisSelectors);
          });
          callback && callback();
        });
        var cancelRendering = function() {
          throttledRenderAllStyles.cancel();
        };
        function onDOMReady() {
          if (loadingStyles.size === 0) {
            cleanFallbackStyle();
            return;
          }
        }
        var documentVisibilityListener = null;
        var didDocumentShowUp = !document.hidden;
        function watchForDocumentVisibility(callback) {
          var alreadyWatching = Boolean(documentVisibilityListener);
          documentVisibilityListener = function() {
            if (!document.hidden) {
              stopWatchingForDocumentVisibility();
              callback();
              didDocumentShowUp = true;
            }
          };
          if (!alreadyWatching) {
            document.addEventListener("visibilitychange", documentVisibilityListener);
          }
        }
        function stopWatchingForDocumentVisibility() {
          document.removeEventListener("visibilitychange", documentVisibilityListener);
          documentVisibilityListener = null;
        }
        function createThemeAndWatchForUpdates() {
          createStaticStyleOverrides();
          function runDynamicStyle() {
            createDynamicStyleOverrides();
            watchForUpdates();
          }
          if (document.hidden && !filter.immediateModify) {
            watchForDocumentVisibility(runDynamicStyle);
          } else {
            runDynamicStyle();
          }
          changeMetaThemeColorWhenAvailable(filter);
        }
        function handleAdoptedStyleSheets(node) {
          try {
            if (Array.isArray(node.adoptedStyleSheets)) {
              if (node.adoptedStyleSheets.length > 0) {
                var newManger = createAdoptedStyleSheetOverride(node);
                adoptedStyleManagers.push(newManger);
                newManger.render(filter, ignoredImageAnalysisSelectors);
              }
            }
          } catch (err) {
          }
        }
        function watchForUpdates() {
          var managedStyles = Array.from(styleManagers.keys());
          watchForStyleChanges(managedStyles, function(_a) {
            var created = _a.created, updated = _a.updated, removed = _a.removed, moved = _a.moved;
            var stylesToRemove = removed;
            var stylesToManage = created.concat(updated).concat(moved).filter(function(style) {
              return !styleManagers.has(style);
            });
            var stylesToRestore = moved.filter(function(style) {
              return styleManagers.has(style);
            });
            stylesToRemove.forEach(function(style) {
              return removeManager(style);
            });
            var newManagers = stylesToManage.map(function(style) {
              return createManager(style);
            });
            newManagers.map(function(manager) {
              return manager.details({ secondRound: false });
            }).filter(function(detail) {
              return detail && detail.rules.length > 0;
            }).forEach(function(detail) {
              variablesStore.addRulesForMatching(detail.rules);
            });
            variablesStore.matchVariablesAndDependants();
            newManagers.forEach(function(manager) {
              return manager.render(filter, ignoredImageAnalysisSelectors);
            });
            newManagers.forEach(function(manager) {
              return manager.watch();
            });
            stylesToRestore.forEach(function(style) {
              return styleManagers.get(style).restore();
            });
          }, function(shadowRoot) {
            createShadowStaticStyleOverrides(shadowRoot);
            handleAdoptedStyleSheets(shadowRoot);
          });
          watchForInlineStyles(function(element) {
            overrideInlineStyle(element, filter, ignoredInlineSelectors, ignoredImageAnalysisSelectors);
            if (element === document.documentElement) {
              var styleAttr = element.getAttribute("style") || "";
              if (styleAttr.includes("--")) {
                variablesStore.matchVariablesAndDependants();
                variablesStore.putRootVars(document.head.querySelector(".darkreader--root-vars"), filter);
              }
            }
          }, function(root) {
            createShadowStaticStyleOverrides(root);
            var inlineStyleElements = root.querySelectorAll(INLINE_STYLE_SELECTOR);
            if (inlineStyleElements.length > 0) {
              forEach(inlineStyleElements, function(el) {
                return overrideInlineStyle(el, filter, ignoredInlineSelectors, ignoredImageAnalysisSelectors);
              });
            }
          });
          addDOMReadyListener(onDOMReady);
        }
        function stopWatchingForUpdates() {
          styleManagers.forEach(function(manager) {
            return manager.pause();
          });
          stopStylePositionWatchers();
          stopWatchingForStyleChanges();
          stopWatchingForInlineStyles();
          removeDOMReadyListener(onDOMReady);
          cleanReadyStateCompleteListeners();
        }
        var metaObserver;
        function addMetaListener() {
          metaObserver = new MutationObserver(function() {
            if (document.querySelector('meta[name="darkreader-lock"]')) {
              metaObserver.disconnect();
              removeDynamicTheme();
            }
          });
          metaObserver.observe(document.head, { childList: true, subtree: true });
        }
        function createDarkReaderInstanceMarker() {
          var metaElement = document.createElement("meta");
          metaElement.name = "darkreader";
          metaElement.content = INSTANCE_ID;
          document.head.appendChild(metaElement);
        }
        function isAnotherDarkReaderInstanceActive() {
          if (document.querySelector('meta[name="darkreader-lock"]')) {
            return true;
          }
          var meta = document.querySelector('meta[name="darkreader"]');
          if (meta) {
            if (meta.content !== INSTANCE_ID) {
              return true;
            }
            return false;
          }
          createDarkReaderInstanceMarker();
          addMetaListener();
          return false;
        }
        function createOrUpdateDynamicTheme(filterConfig, dynamicThemeFixes, iframe) {
          filter = filterConfig;
          fixes = dynamicThemeFixes;
          if (fixes) {
            ignoredImageAnalysisSelectors = Array.isArray(fixes.ignoreImageAnalysis) ? fixes.ignoreImageAnalysis : [];
            ignoredInlineSelectors = Array.isArray(fixes.ignoreInlineStyle) ? fixes.ignoreInlineStyle : [];
          } else {
            ignoredImageAnalysisSelectors = [];
            ignoredInlineSelectors = [];
          }
          if (filter.immediateModify) {
            setIsDOMReady(function() {
              return true;
            });
          }
          isIFrame$1 = iframe;
          if (document.head) {
            if (isAnotherDarkReaderInstanceActive()) {
              return;
            }
            document.documentElement.setAttribute("data-darkreader-mode", "dynamic");
            document.documentElement.setAttribute("data-darkreader-scheme", filter.mode ? "dark" : "dimmed");
            createThemeAndWatchForUpdates();
          } else {
            if (!isFirefox) {
              var fallbackStyle = createOrUpdateStyle("darkreader--fallback");
              document.documentElement.appendChild(fallbackStyle);
              fallbackStyle.textContent = getModifiedFallbackStyle(filter, { strict: true });
            }
            var headObserver_1 = new MutationObserver(function() {
              if (document.head) {
                headObserver_1.disconnect();
                if (isAnotherDarkReaderInstanceActive()) {
                  removeDynamicTheme();
                  return;
                }
                createThemeAndWatchForUpdates();
              }
            });
            headObserver_1.observe(document, { childList: true, subtree: true });
          }
        }
        function removeProxy() {
          document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));
          removeNode(document.head.querySelector(".darkreader--proxy"));
        }
        function removeDynamicTheme() {
          document.documentElement.removeAttribute("data-darkreader-mode");
          document.documentElement.removeAttribute("data-darkreader-scheme");
          cleanDynamicThemeCache();
          removeNode(document.querySelector(".darkreader--fallback"));
          if (document.head) {
            restoreMetaThemeColor();
            removeNode(document.head.querySelector(".darkreader--user-agent"));
            removeNode(document.head.querySelector(".darkreader--text"));
            removeNode(document.head.querySelector(".darkreader--invert"));
            removeNode(document.head.querySelector(".darkreader--inline"));
            removeNode(document.head.querySelector(".darkreader--override"));
            removeNode(document.head.querySelector(".darkreader--variables"));
            removeNode(document.head.querySelector(".darkreader--root-vars"));
            removeNode(document.head.querySelector('meta[name="darkreader"]'));
            removeProxy();
          }
          shadowRootsWithOverrides.forEach(function(root) {
            removeNode(root.querySelector(".darkreader--inline"));
            removeNode(root.querySelector(".darkreader--override"));
          });
          shadowRootsWithOverrides.clear();
          forEach(styleManagers.keys(), function(el) {
            return removeManager(el);
          });
          loadingStyles.clear();
          cleanLoadingLinks();
          forEach(document.querySelectorAll(".darkreader"), removeNode);
          adoptedStyleManagers.forEach(function(manager) {
            manager.destroy();
          });
          adoptedStyleManagers.splice(0);
          metaObserver && metaObserver.disconnect();
        }
        function cleanDynamicThemeCache() {
          variablesStore.clear();
          parsedURLCache.clear();
          stopWatchingForDocumentVisibility();
          cancelRendering();
          stopWatchingForUpdates();
          cleanModificationCache();
          clearColorCache();
        }
        var blobRegex = /url\(\"(blob\:.*?)\"\)/g;
        function replaceBlobs(text) {
          return __awaiter(this, void 0, void 0, function() {
            var promises, data;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  promises = [];
                  getMatches(blobRegex, text, 1).forEach(function(url) {
                    var promise = loadAsDataURL(url);
                    promises.push(promise);
                  });
                  return [4, Promise.all(promises)];
                case 1:
                  data = _a.sent();
                  return [2, text.replace(blobRegex, function() {
                    return 'url("'.concat(data.shift(), '")');
                  })];
              }
            });
          });
        }
        var banner = '/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/\n\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */\n';
        function collectCSS() {
          return __awaiter(this, void 0, void 0, function() {
            function addStaticCSS(selector, comment) {
              var staticStyle = document.querySelector(selector);
              if (staticStyle && staticStyle.textContent) {
                css.push("/* ".concat(comment, " */"));
                css.push(staticStyle.textContent);
                css.push("");
              }
            }
            var css, modifiedCSS, formattedCSS, _a, _b;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  css = [banner];
                  addStaticCSS(".darkreader--fallback", "Fallback Style");
                  addStaticCSS(".darkreader--user-agent", "User-Agent Style");
                  addStaticCSS(".darkreader--text", "Text Style");
                  addStaticCSS(".darkreader--invert", "Invert Style");
                  addStaticCSS(".darkreader--variables", "Variables Style");
                  modifiedCSS = [];
                  document.querySelectorAll(".darkreader--sync").forEach(function(element) {
                    forEach(element.sheet.cssRules, function(rule) {
                      rule && rule.cssText && modifiedCSS.push(rule.cssText);
                    });
                  });
                  if (!modifiedCSS.length)
                    return [3, 2];
                  formattedCSS = formatCSS(modifiedCSS.join("\n"));
                  css.push("/* Modified CSS */");
                  _b = (_a = css).push;
                  return [4, replaceBlobs(formattedCSS)];
                case 1:
                  _b.apply(_a, [_c.sent()]);
                  css.push("");
                  _c.label = 2;
                case 2:
                  addStaticCSS(".darkreader--override", "Override Style");
                  return [2, css.join("\n")];
              }
            });
          });
        }
        var isDarkReaderEnabled = false;
        var isIFrame = function() {
          try {
            return window.self !== window.top;
          } catch (err) {
            console.warn(err);
            return true;
          }
        }();
        function enable(themeOptions, fixes2) {
          if (themeOptions === void 0) {
            themeOptions = {};
          }
          if (fixes2 === void 0) {
            fixes2 = null;
          }
          var theme = __assign(__assign({}, DEFAULT_THEME), themeOptions);
          if (theme.engine !== ThemeEngines.dynamicTheme) {
            throw new Error("Theme engine is not supported.");
          }
          createOrUpdateDynamicTheme(theme, fixes2, isIFrame);
          isDarkReaderEnabled = true;
        }
        function isEnabled() {
          return isDarkReaderEnabled;
        }
        function disable() {
          removeDynamicTheme();
          isDarkReaderEnabled = false;
        }
        var darkScheme = matchMedia("(prefers-color-scheme: dark)");
        var store = {
          themeOptions: null,
          fixes: null
        };
        function handleColorScheme() {
          if (darkScheme.matches) {
            enable(store.themeOptions, store.fixes);
          } else {
            disable();
          }
        }
        function auto(themeOptions, fixes2) {
          if (themeOptions === void 0) {
            themeOptions = {};
          }
          if (fixes2 === void 0) {
            fixes2 = null;
          }
          if (themeOptions) {
            store = { themeOptions, fixes: fixes2 };
            handleColorScheme();
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme.addEventListener("change", handleColorScheme);
            } else {
              darkScheme.addListener(handleColorScheme);
            }
          } else {
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme.removeEventListener("change", handleColorScheme);
            } else {
              darkScheme.removeListener(handleColorScheme);
            }
            disable();
          }
        }
        function exportGeneratedCSS() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, collectCSS()];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        }
        var setFetchMethod = setFetchMethod$1;
        exports2.auto = auto;
        exports2.disable = disable;
        exports2.enable = enable;
        exports2.exportGeneratedCSS = exportGeneratedCSS;
        exports2.isEnabled = isEnabled;
        exports2.setFetchMethod = setFetchMethod;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // public/home.js
  var DarkReader = require_darkreader();
  DarkReader.setFetchMethod(window.fetch);
  document.getElementById("year").innerHTML = (/* @__PURE__ */ new Date()).getFullYear();
  var add_25 = 25;
  function is_hl_maths() {
    var bool_hl_maths = document.getElementById("bool_hl_maths");
    var adding_25_text = document.getElementById("adding_25_text");
    var value = bool_hl_maths.value;
    if (value == 1) {
      bool_hl_maths.value = 1;
      adding_25_text.style.opacity = "1";
      adding_25_text.style.transition = "0.2s";
      value = 1;
      add_25 = 25;
    } else {
      bool_hl_maths.value = 0;
      adding_25_text.style.opacity = "0";
      add_25 = 0;
      value = 0;
    }
    find_points_needed();
  }
  is_hl_maths();
  document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);
  var lcvp;
  function is_lcvp() {
    var lcvp_input = document.getElementById("lcvp");
    var value = lcvp_input.value;
    if (value == 1) {
      lcvp = true;
      lcvp_input.value = 1;
      value = 0;
    } else {
      value = 1;
      lcvp = false;
      lcvp_input.value = 0;
    }
    find_points_needed();
    return lcvp;
  }
  is_lcvp();
  document.getElementById("lcvp").addEventListener("click", is_lcvp);
  document.getElementById("adding_25_container").style.display = "none";
  var target_num;
  var hl_num;
  var ol_num;
  function adjustor(letter_grades) {
    var CHANGEABLES = ["h5", "h6", "h7", "o1", "o2", "o3"];
    var HL_SUBS = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"];
    var counted_hl = 0;
    var counted_ol = 0;
    var dict_changeables = {
      "h5": "o1",
      "h6": "o2",
      "h7": "o3",
      "o1": "h5",
      "o2": "h6",
      "o3": "h7"
    };
    var hl_index_changeables = [];
    var ol_index_changeables = [];
    for (var i = 0; i < letter_grades.length; i++) {
      var current = letter_grades[i];
      if (current in dict_changeables) {
        if (current in CHANGEABLES) {
          hl_index_changeables.push(i);
        } else {
          ol_index_changeables.push(i);
        }
      }
      if (HL_SUBS.includes(current)) {
        counted_hl += 1;
      } else {
        counted_ol += 1;
      }
    }
    var miss_matching_counts = counted_hl != hl_num && counted_ol != ol_num;
    if (miss_matching_counts) {
      var needed_hl = hl_num - counted_hl;
      var needed_ol = ol_num - counted_ol;
      if (needed_hl < 0) {
        needed_hl = 0;
      }
      if (needed_ol < 0) {
        needed_ol = 0;
      }
      var charges_needed = Math.max(needed_hl, needed_ol);
      var og_grade;
      var changed_grade;
      for (i = 0; i < charges_needed; i++) {
        var index = ol_index_changeables[i];
        og_grade = letter_grades[index];
        changed_grade = dict_changeables[og_grade];
        letter_grades[index] = changed_grade;
      }
    }
    if (lcvp) {
      var lcvp_modules = {
        66: "Distinction",
        46: "Merit",
        28: "Pass"
      };
      var lcvp_grades = ["h4", "h6", "o2", "o4"];
      var lcvp_points = {
        "h4": 66,
        "h6": 46,
        "o2": 46,
        "o4": 28
      };
      var collected_lcvp_points = [];
      for (i = 0; i < letter_grades.length; i++) {
        current = letter_grades[i];
        if (lcvp_grades.includes(current)) {
          collected_lcvp_points.push(lcvp_points[current]);
        } else {
          collected_lcvp_points.push(999);
        }
      }
      var min_lcvp_point = Math.min(...collected_lcvp_points);
      var min_lcvp_index = collected_lcvp_points.indexOf(min_lcvp_point);
      var valid_lcvp_change = min_lcvp_point != 999;
      if (valid_lcvp_change) {
        letter_grades[min_lcvp_index] = lcvp_modules[min_lcvp_point];
      }
    }
    return letter_grades;
  }
  function motivate() {
    seconds += 1;
    if (59 <= seconds && seconds <= 60) {
      document.getElementById("img-info").src = "images/joke.webp";
    } else {
      document.getElementById("img-info").src = "images/points-system.webp";
    }
    if (seconds > 60) {
      seconds = 0;
    }
  }
  var seconds = 0;
  var dt = /* @__PURE__ */ new Date();
  var month = dt.getMonth() + 1;
  if ([3, 4, 5].includes(month)) {
    setInterval(motivate, 1e3);
    motivate();
  }
  function gar_and_ptg(points_needed) {
    points_needed = points_needed.sort();
    var mixed_ranks = {
      100: "h1",
      88: "h2",
      77: "h3",
      66: "h4",
      56: "h5/o1",
      46: "h6/o2",
      37: "h7/o3",
      28: "o4",
      20: "o5",
      12: "o6"
    };
    if (hl_num > 0) {
      mixed_ranks[56] = "h5";
      mixed_ranks[46] = "h6";
      mixed_ranks[37] = "h7";
    }
    if (ol_num > 0) {
      mixed_ranks[56] = "o1";
      mixed_ranks[46] = "o2";
      mixed_ranks[37] = "o3";
    }
    var ranks = {
      "h1": 90,
      "h2": 80,
      "h3": 70,
      "h4": 60,
      "h5": 56,
      "h6": 46,
      "h7": 37,
      "Distinction": 66,
      "Merit": 46,
      "Pass": 28,
      "o1": 56,
      "o2": 46,
      "o3": 37,
      "o4": 28,
      "o5": 20,
      "o6": 12
    };
    if (hl_num > 0) {
      ranks["h5/o1"] = 50;
      ranks["h6/o2"] = 40;
      ranks["h7/o3"] = 30;
    } else {
      ranks["h5/o1"] = 90;
      ranks["h6/o2"] = 80;
      ranks["h7/o3"] = 70;
    }
    var grades_soultion = [];
    var total = 0;
    for (var i = 0; i < points_needed.length; i++) {
      if (points_needed[i] != 25) {
        grades_soultion.push(mixed_ranks[points_needed[i]]);
        total += ranks[mixed_ranks[points_needed[i]]];
      }
    }
    total = total / (hl_num + ol_num);
    var percentage_avg = String(Math.round(total)) + "%";
    grades_soultion = adjustor(grades_soultion);
    return [percentage_avg, grades_soultion];
  }
  function display_plus_25(bool_hl_maths) {
    var adding_25_container = document.getElementById("adding_25_container");
    if (bool_hl_maths) {
      adding_25_container.style = "display: block;";
    } else {
      adding_25_container.style.display = "none";
    }
  }
  function red_commas(grades) {
    grades = grades.toString();
    grades = grades.replaceAll(",", "<strong class='important-red'>,</strong>");
    return grades;
  }
  function single_change(grades, index, maths_plus_25) {
    const is_in_dict = [12, 20, 28, 37, 46, 56, 66, 77, 88, 100];
    var dict_changeables = {
      12: 20,
      20: 28,
      28: 37,
      37: 46,
      46: 56,
      56: 66,
      66: 77,
      77: 88,
      88: 100
    };
    if (is_in_dict.includes(grades[index])) {
      grades[index] = dict_changeables[grades[index]];
    }
    if (maths_plus_25 && grades.includes(25) == false) {
      grades.push(25);
    }
    return grades;
  }
  function sum(array) {
    return array.filter((el) => +el).reduce((acc, cv) => acc + cv, 0);
  }
  function starting_grades(hl_subs, ol_subs) {
    var grades = [];
    for (var i = 0; i < hl_subs; i++) {
      grades.push(37);
    }
    for (i = 0; i < ol_subs; i++) {
      grades.push(12);
    }
    return grades;
  }
  function highest_points_poss(hl_subs, ol_subs, maths_plus_25) {
    var counter = 0;
    counter += 100 * hl_subs + 56 * ol_subs;
    if (maths_plus_25) {
      counter += 25;
    }
    return counter;
  }
  function main(target, hl_subs, ol_subs, maths_plus_25) {
    var total_subs = hl_subs + ol_subs;
    var current_grades = starting_grades(hl_subs, ol_subs);
    var current_points = sum(current_grades);
    var index = 0;
    var max_limit = highest_points_poss(hl_subs, ol_subs, maths_plus_25);
    var within_range = current_points <= max_limit && target <= max_limit && current_points < target;
    while (within_range) {
      current_grades = single_change(current_grades, index, maths_plus_25);
      current_points = sum(current_grades);
      within_range = current_points <= max_limit && target <= max_limit && current_points < target;
      index += 1;
      if (index == total_subs) {
        index = 0;
      }
    }
    if (current_points < target) {
      current_grades = [];
      current_points = [];
    }
    return [current_grades, current_points];
  }
  function update_inputs() {
    var target_input = document.getElementById("target_text");
    target_input.addEventListener("input", function() {
      find_points_needed();
    });
    var hl_input = document.getElementById("hl_subs_text");
    hl_input.addEventListener("input", function() {
      find_points_needed();
    });
    var ol_input = document.getElementById("ol_subs_text");
    ol_input.addEventListener("input", function() {
      find_points_needed();
    });
  }
  update_inputs();
  document.getElementById("result_container").classList.add("hide");
  document.getElementById("invalid_input").style.display = "none";
  function pulseInputs() {
    let inputElement = ["target_text", "hl_subs_text", "ol_subs_text", "bool_hl_maths", "lcvp"];
    inputElement.forEach((id) => {
      document.getElementById(id).classList.add("pulseAnimation");
    });
    document.getElementById("calculator-container").addEventListener("click", () => {
      inputElement.forEach((id) => {
        document.getElementById(id).classList.remove("pulseAnimation");
      });
    });
  }
  pulseInputs();
  async function find_points_needed() {
    document.getElementById("result_container").classList.add("show");
    document.getElementById("result_container").classList.remove("hide");
    target_num = Number(document.getElementById("target_text").value);
    hl_num = Number(document.getElementById("hl_subs_text").value);
    ol_num = Number(document.getElementById("ol_subs_text").value);
    var invalid_target_input = target_num <= 0 || target_num > 625;
    var invalid_subs_input = hl_num < 0 || ol_num < 0 || hl_num > 6 || ol_num > 6 || hl_num + ol_num > 6;
    var max_pts = hl_num * 100 + ol_num * 56 + add_25;
    var invalid_range = max_pts >= target_num == false;
    const range_error_msg = "It's impossible to achieve ".concat(target_num, " CAO points with ").concat(hl_num, " higher-level subjects and ").concat(ol_num, " ordinary-level subjects.");
    const pts_error_msg = "Your inputted CAO points must be between 1 and 625.";
    const subs_error_msh = "This calculator will not allow for more than 6 subjects in total as inputs.";
    var error_status = "";
    if (invalid_range) {
      error_status += range_error_msg + "\n";
    }
    if (invalid_subs_input) {
      error_status += subs_error_msh + "\n";
    }
    if (invalid_target_input) {
      error_status += pts_error_msg + "\n";
    }
    if (error_status != "") {
      document.getElementById("invalid_input").style.display = "block";
      document.getElementById("invalid_input").style.color = "red";
      document.getElementById("invalid_input").innerHTML = error_status;
      document.getElementById("info_container").style.opacity = "1";
      document.getElementById("soultion_output").style.display = "none";
      document.getElementById("adding_25_container").style.opacity = "0";
    } else {
      document.getElementById("info_container").style.opacity = "1";
      document.getElementById("info_container").style.display = "block";
      document.getElementById("soultion_output").style.display = "block";
      document.getElementById("invalid_input").style.display = "none";
      var maths_plus_25;
      if (add_25 == 25) {
        maths_plus_25 = true;
      } else {
        maths_plus_25 = false;
      }
      var matches_info = main(target_num, hl_num, ol_num, maths_plus_25);
      var points_list = matches_info[0];
      var points_req = matches_info[1];
      if (points_list.includes(25)) {
        display_plus_25(true);
      } else {
        display_plus_25(false);
      }
      var output_info = gar_and_ptg(points_list);
      var grade_avg = output_info[0];
      var req_results = output_info[1];
      req_results = red_commas(req_results);
      document.getElementById("points_req").innerHTML = String(points_req);
      document.getElementById("req_results").innerHTML = String(req_results);
      document.getElementById("grade_avg_req").innerHTML = String(grade_avg);
    }
  }
  function gojodevIcon() {
    let gojodev2 = document.getElementById("fixed-gojodev");
    let welcome;
    if (window.innerWidth > 500) {
      welcome = document.querySelector(".welcome");
    } else {
      welcome = document.querySelector(".calculator");
    }
    gojodev2.style.display = "none";
    function isVisible() {
      var welcomeRect = welcome.getBoundingClientRect();
      return welcomeRect.bottom < 0;
    }
    function handleScroll() {
      if (isVisible()) {
        gojodev2.style.display = "block";
      } else {
        gojodev2.style.display = "none";
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }
  gojodevIcon();
  function gojodev() {
    let emmanuel = document.getElementById("gojodev");
    let index = 0;
    setInterval(() => {
      emmanuel.classList.remove("fadeIn");
      emmanuel.offsetWidth;
      emmanuel.classList.add("fadeIn");
      if (index == 0) {
        emmanuel.src = "images/gojodev.webp";
        index = 1;
      } else {
        emmanuel.src = "images/logo.webp";
        index = 0;
      }
    }, 3500);
  }
  gojodev();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2RhcmtyZWFkZXIvZGFya3JlYWRlci5qcyIsICJob21lLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIERhcmsgUmVhZGVyIHY0LjkuNTdcbiAqIGh0dHBzOi8vZGFya3JlYWRlci5vcmcvXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5EYXJrUmVhZGVyID0ge30pKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcbiAgICBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxuICAgIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcbiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuICAgIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuICAgIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG4gICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuICAgIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuICAgIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICAgICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgICAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICAgICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxuICAgIH1cblxuICAgIHZhciBNZXNzYWdlVHlwZTtcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlKSB7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfR0VUX0RBVEFcIl0gPSBcInVpLWdldC1kYXRhXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfU1VCU0NSSUJFX1RPX0NIQU5HRVNcIl0gPSBcInVpLXN1YnNjcmliZS10by1jaGFuZ2VzXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfVU5TVUJTQ1JJQkVfRlJPTV9DSEFOR0VTXCJdID0gXCJ1aS11bnN1YnNjcmliZS1mcm9tLWNoYW5nZXNcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9DSEFOR0VfU0VUVElOR1NcIl0gPSBcInVpLWNoYW5nZS1zZXR0aW5nc1wiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1NFVF9USEVNRVwiXSA9IFwidWktc2V0LXRoZW1lXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfU0VUX1NIT1JUQ1VUXCJdID0gXCJ1aS1zZXQtc2hvcnRjdXRcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9UT0dHTEVfQUNUSVZFX1RBQlwiXSA9IFwidWktdG9nZ2xlLWFjdGl2ZS10YWJcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9NQVJLX05FV1NfQVNfUkVBRFwiXSA9IFwidWktbWFyay1uZXdzLWFzLXJlYWRcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9NQVJLX05FV1NfQVNfRElTUExBWUVEXCJdID0gXCJ1aS1tYXJrLW5ld3MtYXMtZGlzcGxheWVkXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfTE9BRF9DT05GSUdcIl0gPSBcInVpLWxvYWQtY29uZmlnXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQVBQTFlfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPSBcInVpLWFwcGx5LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfUkVTRVRfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPSBcInVpLXJlc2V0LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQVBQTFlfREVWX0lOVkVSU0lPTl9GSVhFU1wiXSA9IFwidWktYXBwbHktZGV2LWludmVyc2lvbi1maXhlc1wiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1JFU0VUX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPSBcInVpLXJlc2V0LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9BUFBMWV9ERVZfU1RBVElDX1RIRU1FU1wiXSA9IFwidWktYXBwbHktZGV2LXN0YXRpYy10aGVtZXNcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9SRVNFVF9ERVZfU1RBVElDX1RIRU1FU1wiXSA9IFwidWktcmVzZXQtZGV2LXN0YXRpYy10aGVtZXNcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJVSV9TQVZFX0ZJTEVcIl0gPSBcInVpLXNhdmUtZmlsZVwiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIlVJX1JFUVVFU1RfRVhQT1JUX0NTU1wiXSA9IFwidWktcmVxdWVzdC1leHBvcnQtY3NzXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiVUlfQ09MT1JfU0NIRU1FX0NIQU5HRVwiXSA9IFwidWktY29sb3Itc2NoZW1lLWNoYW5nZVwiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0NIQU5HRVNcIl0gPSBcImJnLWNoYW5nZXNcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19BRERfQ1NTX0ZJTFRFUlwiXSA9IFwiYmctYWRkLWNzcy1maWx0ZXJcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19BRERfU1RBVElDX1RIRU1FXCJdID0gXCJiZy1hZGQtc3RhdGljLXRoZW1lXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQUREX1NWR19GSUxURVJcIl0gPSBcImJnLWFkZC1zdmctZmlsdGVyXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQUREX0RZTkFNSUNfVEhFTUVcIl0gPSBcImJnLWFkZC1keW5hbWljLXRoZW1lXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfRVhQT1JUX0NTU1wiXSA9IFwiYmctZXhwb3J0LWNzc1wiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX1VOU1VQUE9SVEVEX1NFTkRFUlwiXSA9IFwiYmctdW5zdXBwb3J0ZWQtc2VuZGVyXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfQ0xFQU5fVVBcIl0gPSBcImJnLWNsZWFuLXVwXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQkdfUkVMT0FEXCJdID0gXCJiZy1yZWxvYWRcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19GRVRDSF9SRVNQT05TRVwiXSA9IFwiYmctZmV0Y2gtcmVzcG9uc2VcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJCR19VSV9VUERBVEVcIl0gPSBcImJnLXVpLXVwZGF0ZVwiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIkJHX0NTU19VUERBVEVcIl0gPSBcImJnLWNzcy11cGRhdGVcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19DT0xPUl9TQ0hFTUVfQ0hBTkdFXCJdID0gXCJjcy1jb2xvci1zY2hlbWUtY2hhbmdlXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRlJBTUVfQ09OTkVDVFwiXSA9IFwiY3MtZnJhbWUtY29ubmVjdFwiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0ZSQU1FX0ZPUkdFVFwiXSA9IFwiY3MtZnJhbWUtZm9yZ2V0XCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfRlJBTUVfRlJFRVpFXCJdID0gXCJjcy1mcmFtZS1mcmVlemVcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GUkFNRV9SRVNVTUVcIl0gPSBcImNzLWZyYW1lLXJlc3VtZVwiO1xuICAgICAgICBNZXNzYWdlVHlwZVtcIkNTX0VYUE9SVF9DU1NfUkVTUE9OU0VcIl0gPSBcImNzLWV4cG9ydC1jc3MtcmVzcG9uc2VcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19GRVRDSFwiXSA9IFwiY3MtZmV0Y2hcIjtcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJDU19EQVJLX1RIRU1FX0RFVEVDVEVEXCJdID0gXCJjcy1kYXJrLXRoZW1lLWRldGVjdGVkXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfREFSS19USEVNRV9OT1RfREVURUNURURcIl0gPSBcImNzLWRhcmstdGhlbWUtbm90LWRldGVjdGVkXCI7XG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiQ1NfTE9HXCJdID0gXCJjcy1sb2dcIjtcbiAgICB9KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xuXG4gICAgdmFyIGlzTmF2aWdhdG9yRGVmaW5lZCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciB1c2VyQWdlbnQgPSBpc05hdmlnYXRvckRlZmluZWQgPyAobmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiYgQXJyYXkuaXNBcnJheShuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5icmFuZHMpKSA/XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnREYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGJyYW5kKSB7IHJldHVybiBcIlwiLmNvbmNhdChicmFuZC5icmFuZC50b0xvd2VyQ2FzZSgpLCBcIiBcIikuY29uY2F0KGJyYW5kLnZlcnNpb24pOyB9KS5qb2luKCcgJykgOiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbiAgICAgICAgOiAnc29tZSB1c2VyYWdlbnQnO1xuICAgIHZhciBwbGF0Zm9ybSA9IGlzTmF2aWdhdG9yRGVmaW5lZCA/IChuYXZpZ2F0b3IudXNlckFnZW50RGF0YSAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0gPT09ICdzdHJpbmcnKSA/XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgOiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKVxuICAgICAgICA6ICdzb21lIHBsYXRmb3JtJztcbiAgICB2YXIgaXNDaHJvbWl1bSA9IHVzZXJBZ2VudC5pbmNsdWRlcygnY2hyb21lJykgfHwgdXNlckFnZW50LmluY2x1ZGVzKCdjaHJvbWl1bScpO1xuICAgIHZhciBpc1RodW5kZXJiaXJkID0gdXNlckFnZW50LmluY2x1ZGVzKCd0aHVuZGVyYmlyZCcpO1xuICAgIHZhciBpc0ZpcmVmb3ggPSB1c2VyQWdlbnQuaW5jbHVkZXMoJ2ZpcmVmb3gnKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoJ2xpYnJld29sZicpIHx8IGlzVGh1bmRlcmJpcmQ7XG4gICAgdXNlckFnZW50LmluY2x1ZGVzKCd2aXZhbGRpJyk7XG4gICAgdXNlckFnZW50LmluY2x1ZGVzKCd5YWJyb3dzZXInKTtcbiAgICB1c2VyQWdlbnQuaW5jbHVkZXMoJ29wcicpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcygnb3BlcmEnKTtcbiAgICB1c2VyQWdlbnQuaW5jbHVkZXMoJ2VkZycpO1xuICAgIHZhciBpc1NhZmFyaSA9IHVzZXJBZ2VudC5pbmNsdWRlcygnc2FmYXJpJykgJiYgIWlzQ2hyb21pdW07XG4gICAgdmFyIGlzV2luZG93cyA9IHBsYXRmb3JtLnN0YXJ0c1dpdGgoJ3dpbicpO1xuICAgIHZhciBpc01hY09TID0gcGxhdGZvcm0uc3RhcnRzV2l0aCgnbWFjJyk7XG4gICAgKGlzTmF2aWdhdG9yRGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YSkgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5tb2JpbGUgOiB1c2VyQWdlbnQuaW5jbHVkZXMoJ21vYmlsZScpO1xuICAgIHZhciBpc1NoYWRvd0RvbVN1cHBvcnRlZCA9IHR5cGVvZiBTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nO1xuICAgIHZhciBpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkID0gKHR5cGVvZiBNZWRpYVF1ZXJ5TGlzdCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB0eXBlb2YgTWVkaWFRdWVyeUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpO1xuICAgICgoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbSA9IHVzZXJBZ2VudC5tYXRjaCgvY2hyb20oPzplfGl1bSkoPzpcXC98ICkoW14gXSspLyk7XG4gICAgICAgIGlmIChtICYmIG1bMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9KSkoKTtcbiAgICAoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG0gPSB1c2VyQWdlbnQubWF0Y2goLyg/OmZpcmVmb3h8bGlicmV3b2xmKSg/OlxcL3wgKShbXiBdKykvKTtcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0pKSgpO1xuICAgIHZhciBpc0RlZmluZWRTZWxlY3RvclN1cHBvcnRlZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6ZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICB2YXIgaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yLXNjaGVtZTogZGFyaycpO1xuICAgICAgICByZXR1cm4gZWwuc3R5bGUgJiYgZWwuc3R5bGUuY29sb3JTY2hlbWUgPT09ICdkYXJrJztcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlLCBvcmlnaW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiAnZm9yY2UtY2FjaGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyZXI6IG9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpcmVmb3ggJiYgbWltZVR5cGUgPT09ICd0ZXh0L2NzcycgJiYgdXJsLnN0YXJ0c1dpdGgoJ21vei1leHRlbnNpb246Ly8nKSAmJiB1cmwuZW5kc1dpdGgoJy5jc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pbWVUeXBlICYmICFyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuc3RhcnRzV2l0aChtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaW1lIHR5cGUgbWlzbWF0Y2ggd2hlbiBsb2FkaW5nIFwiLmNvbmNhdCh1cmwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gbG9hZCBcIi5jb25jYXQodXJsLCBcIiBcIikuY29uY2F0KHJlc3BvbnNlLnN0YXR1cywgXCIgXCIpLmNvbmNhdChyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRBc0RhdGFVUkwodXJsLCBtaW1lVHlwZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJsb2IsIGRhdGFVUkw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgcmVzcG9uc2UuYmxvYigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvYiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgZGF0YVVSTF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB0aHJvd0NPUlNFcnJvciA9IGZ1bmN0aW9uICh1cmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiwgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFtcbiAgICAgICAgICAgICAgICAgICAgJ0VtYmVkZGVkIERhcmsgUmVhZGVyIGNhbm5vdCBhY2Nlc3MgYSBjcm9zcy1vcmlnaW4gcmVzb3VyY2UnLFxuICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICdPdmVydmlldyB5b3VyIFVSTHMgYW5kIENPUlMgcG9saWNpZXMgb3IgdXNlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2BEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKGZldGNoOiAodXJsKSA9PiBQcm9taXNlPFJlc3BvbnNlPikpYC4nLFxuICAgICAgICAgICAgICAgICAgICAnU2VlIGlmIHVzaW5nIGBEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaClgJyxcbiAgICAgICAgICAgICAgICAgICAgJ2JlZm9yZSBgRGFya1JlYWRlci5lbmFibGUoKWAgd29ya3MuJ1xuICAgICAgICAgICAgICAgIF0uam9pbignICcpKSldO1xuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgZmV0Y2hlciA9IHRocm93Q09SU0Vycm9yO1xuICAgIGZ1bmN0aW9uIHNldEZldGNoTWV0aG9kJDEoZmV0Y2gpIHtcbiAgICAgICAgaWYgKGZldGNoKSB7XG4gICAgICAgICAgICBmZXRjaGVyID0gZmV0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbEZldGNoTWV0aG9kKHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgZmV0Y2hlcih1cmwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghd2luZG93LmNocm9tZSkge1xuICAgICAgICB3aW5kb3cuY2hyb21lID0ge307XG4gICAgfVxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUpIHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUgPSB7fTtcbiAgICB9XG4gICAgdmFyIG1lc3NhZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlkXzEsIF9hLCB1cmwsIHJlc3BvbnNlVHlwZSwgcmVzcG9uc2UsIHRleHRfMSwgZXJyb3JfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGFyZ3NbMF0gJiYgYXJnc1swXS50eXBlID09PSBNZXNzYWdlVHlwZS5DU19GRVRDSCkpIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZF8xID0gYXJnc1swXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCA3LCAsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gYXJnc1swXS5kYXRhLCB1cmwgPSBfYS51cmwsIHJlc3BvbnNlVHlwZSA9IF9hLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2FsbEZldGNoTWV0aG9kKHVybCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlc3BvbnNlVHlwZSA9PT0gJ2RhdGEtdXJsJykpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbNCwgcmVzcG9uc2UudGV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYih7IHR5cGU6IE1lc3NhZ2VUeXBlLkJHX0ZFVENIX1JFU1BPTlNFLCBkYXRhOiB0ZXh0XzEsIGVycm9yOiBudWxsLCBpZDogaWRfMSB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKHsgdHlwZTogTWVzc2FnZVR5cGUuQkdfRkVUQ0hfUkVTUE9OU0UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnJvcl8xLCBpZDogaWRfMSB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRNZXNzYWdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBuYXRpdmVTZW5kTWVzc2FnZV8xID0gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2U7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncyksIGZhbHNlKSk7XG4gICAgICAgICAgICBuYXRpdmVTZW5kTWVzc2FnZV8xLmFwcGx5KGNocm9tZS5ydW50aW1lLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID0gc2VuZE1lc3NhZ2U7XG4gICAgfVxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlKSB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSA9IHt9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbmF0aXZlQWRkTGlzdGVuZXJfMSA9IGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcjtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyKGFyZ3NbMF0pO1xuICAgICAgICAgICAgbmF0aXZlQWRkTGlzdGVuZXJfMS5hcHBseShjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE1lc3NhZ2VMaXN0ZW5lcihhcmdzWzBdKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgVGhlbWVFbmdpbmVzID0ge1xuICAgICAgICBjc3NGaWx0ZXI6ICdjc3NGaWx0ZXInLFxuICAgICAgICBzdmdGaWx0ZXI6ICdzdmdGaWx0ZXInLFxuICAgICAgICBzdGF0aWNUaGVtZTogJ3N0YXRpY1RoZW1lJyxcbiAgICAgICAgZHluYW1pY1RoZW1lOiAnZHluYW1pY1RoZW1lJyxcbiAgICB9O1xuXG4gICAgdmFyIERFRkFVTFRfQ09MT1JTID0ge1xuICAgICAgICBkYXJrU2NoZW1lOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE4MWExYicsXG4gICAgICAgICAgICB0ZXh0OiAnI2U4ZTZlMycsXG4gICAgICAgIH0sXG4gICAgICAgIGxpZ2h0U2NoZW1lOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2RjZGFkNycsXG4gICAgICAgICAgICB0ZXh0OiAnIzE4MWExYicsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICB2YXIgREVGQVVMVF9USEVNRSA9IHtcbiAgICAgICAgbW9kZTogMSxcbiAgICAgICAgYnJpZ2h0bmVzczogMTAwLFxuICAgICAgICBjb250cmFzdDogMTAwLFxuICAgICAgICBncmF5c2NhbGU6IDAsXG4gICAgICAgIHNlcGlhOiAwLFxuICAgICAgICB1c2VGb250OiBmYWxzZSxcbiAgICAgICAgZm9udEZhbWlseTogaXNNYWNPUyA/ICdIZWx2ZXRpY2EgTmV1ZScgOiBpc1dpbmRvd3MgPyAnU2Vnb2UgVUknIDogJ09wZW4gU2FucycsXG4gICAgICAgIHRleHRTdHJva2U6IDAsXG4gICAgICAgIGVuZ2luZTogVGhlbWVFbmdpbmVzLmR5bmFtaWNUaGVtZSxcbiAgICAgICAgc3R5bGVzaGVldDogJycsXG4gICAgICAgIGRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3I6IERFRkFVTFRfQ09MT1JTLmRhcmtTY2hlbWUuYmFja2dyb3VuZCxcbiAgICAgICAgZGFya1NjaGVtZVRleHRDb2xvcjogREVGQVVMVF9DT0xPUlMuZGFya1NjaGVtZS50ZXh0LFxuICAgICAgICBsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvcjogREVGQVVMVF9DT0xPUlMubGlnaHRTY2hlbWUuYmFja2dyb3VuZCxcbiAgICAgICAgbGlnaHRTY2hlbWVUZXh0Q29sb3I6IERFRkFVTFRfQ09MT1JTLmxpZ2h0U2NoZW1lLnRleHQsXG4gICAgICAgIHNjcm9sbGJhckNvbG9yOiBpc01hY09TID8gJycgOiAnYXV0bycsXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiAnYXV0bycsXG4gICAgICAgIHN0eWxlU3lzdGVtQ29udHJvbHM6ICFpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCxcbiAgICAgICAgbGlnaHRDb2xvclNjaGVtZTogJ0RlZmF1bHQnLFxuICAgICAgICBkYXJrQ29sb3JTY2hlbWU6ICdEZWZhdWx0JyxcbiAgICAgICAgaW1tZWRpYXRlTW9kaWZ5OiBmYWxzZSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNBcnJheUxpa2UoaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCAhPSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JFYWNoKGl0ZW1zLCBpdGVyYXRvcikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGl0ZW1zKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpdGVtc18xID0gX192YWx1ZXMoaXRlbXMpLCBpdGVtc18xXzEgPSBpdGVtc18xLm5leHQoKTsgIWl0ZW1zXzFfMS5kb25lOyBpdGVtc18xXzEgPSBpdGVtc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtc18xXzEgJiYgIWl0ZW1zXzFfMS5kb25lICYmIChfYSA9IGl0ZW1zXzEucmV0dXJuKSkgX2EuY2FsbChpdGVtc18xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHB1c2goYXJyYXksIGFkZGl0aW9uKSB7XG4gICAgICAgIGZvckVhY2goYWRkaXRpb24sIGZ1bmN0aW9uIChhKSB7IHJldHVybiBhcnJheS5wdXNoKGEpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9BcnJheShpdGVtcykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nSW5mbygpIHtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9nV2FybigpIHtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaykge1xuICAgICAgICB2YXIgcGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIHZhciBsYXN0QXJncztcbiAgICAgICAgdmFyIHRocm90dGxlZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgICAgICAgICBpZiAoZnJhbWVJZCkge1xuICAgICAgICAgICAgICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobGFzdEFyZ3MpLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGxhc3RBcmdzKSwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRocm90dGxlZCwgeyBjYW5jZWw6IGNhbmNlbCB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQXN5bmNUYXNrc1F1ZXVlKCkge1xuICAgICAgICB2YXIgdGFza3MgPSBbXTtcbiAgICAgICAgdmFyIGZyYW1lSWQgPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBydW5UYXNrcygpIHtcbiAgICAgICAgICAgIHZhciB0YXNrO1xuICAgICAgICAgICAgd2hpbGUgKCh0YXNrID0gdGFza3Muc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICB0YXNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGQodGFzaykge1xuICAgICAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIGlmICghZnJhbWVJZCkge1xuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuVGFza3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSgwKTtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgYWRkOiBhZGQsIGNhbmNlbDogY2FuY2VsIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24odGltZSkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSAwO1xuICAgICAgICBpZiAodGltZS5zZWNvbmRzKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLnNlY29uZHMgKiAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lLm1pbnV0ZXMpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUubWludXRlcyAqIDYwICogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZS5ob3Vycykge1xuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5ob3VycyAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lLmRheXMpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgICAgICBub2RlICYmIG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yTm9kZVBvc2l0aW9uKG5vZGUsIG1vZGUsIG9uUmVzdG9yZSkge1xuICAgICAgICBpZiAob25SZXN0b3JlID09PSB2b2lkIDApIHsgb25SZXN0b3JlID0gRnVuY3Rpb24ucHJvdG90eXBlOyB9XG4gICAgICAgIHZhciBNQVhfQVRURU1QVFNfQ09VTlQgPSAxMDtcbiAgICAgICAgdmFyIFJFVFJZX1RJTUVPVVQgPSBnZXREdXJhdGlvbih7IHNlY29uZHM6IDIgfSk7XG4gICAgICAgIHZhciBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHsgc2Vjb25kczogMTAgfSk7XG4gICAgICAgIHZhciBwcmV2U2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gd2F0Y2ggZm9yIG5vZGUgcG9zaXRpb246IHBhcmVudCBlbGVtZW50IG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlID09PSAncHJldi1zaWJsaW5nJyAmJiAhcHJldlNpYmxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHdhdGNoIGZvciBub2RlIHBvc2l0aW9uOiB0aGVyZSBpcyBubyBwcmV2aW91cyBzaWJsaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dGVtcHRzID0gMDtcbiAgICAgICAgdmFyIHN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdmFyIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHZhciByZXN0b3JlID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChzdGFydCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhdHRlbXB0cyA+PSBNQVhfQVRURU1QVFNfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPCBBVFRFTVBUU19JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xuICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RlID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZyAmJiBwcmV2U2libGluZy5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdwcmV2LXNpYmxpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJlbnQocHJldlNpYmxpbmcucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBwcmV2U2libGluZyA/IHByZXZTaWJsaW5nLm5leHRTaWJsaW5nIDogcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgICAgICAgICAgIG9uUmVzdG9yZSAmJiBvblJlc3RvcmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgobW9kZSA9PT0gJ3BhcmVudCcgJiYgbm9kZS5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHx8XG4gICAgICAgICAgICAgICAgKG1vZGUgPT09ICdwcmV2LXNpYmxpbmcnICYmIG5vZGUucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2U2libGluZykpIHtcbiAgICAgICAgICAgICAgICByZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwYXJlbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgcmVzdG9yZS5jYW5jZWwoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNraXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdXBkYXRlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICBydW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcnVuKCk7XG4gICAgICAgIHJldHVybiB7IHJ1bjogcnVuLCBzdG9wOiBzdG9wLCBza2lwOiBza2lwIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVTaGFkb3dIb3N0cyhyb290LCBpdGVyYXRvcikge1xuICAgICAgICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIocm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICAgIGFjY2VwdE5vZGU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2hhZG93Um9vdCA9PSBudWxsID8gTm9kZUZpbHRlci5GSUxURVJfU0tJUCA6IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIG5vZGUgPSAocm9vdC5zaGFkb3dSb290ID8gd2Fsa2VyLmN1cnJlbnROb2RlIDogd2Fsa2VyLm5leHROb2RlKCkpOyBub2RlICE9IG51bGw7IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdXJmaW5na2V5c19oaW50c19ob3N0JykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZXJhdG9yKG5vZGUpO1xuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUuc2hhZG93Um9vdCwgaXRlcmF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBpc0RPTVJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnO1xuICAgIH07XG4gICAgZnVuY3Rpb24gc2V0SXNET01SZWFkeShuZXdGdW5jKSB7XG4gICAgICAgIGlzRE9NUmVhZHkgPSBuZXdGdW5jO1xuICAgIH1cbiAgICB2YXIgcmVhZHlTdGF0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBhZGRET01SZWFkeUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGlzRE9NUmVhZHkoKSA/IGxpc3RlbmVyKCkgOiByZWFkeVN0YXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZURPTVJlYWR5TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1JlYWR5U3RhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSc7XG4gICAgfVxuICAgIHZhciByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgaXNSZWFkeVN0YXRlQ29tcGxldGUoKSA/IGxpc3RlbmVyKCkgOiByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYW5SZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xuICAgIH1cbiAgICBpZiAoIWlzRE9NUmVhZHkoKSkge1xuICAgICAgICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNET01SZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGlmIChpc1JlYWR5U3RhdGVDb21wbGV0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBvblJlYWR5U3RhdGVDaGFuZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIG9uUmVhZHlTdGF0ZUNoYW5nZV8xKTtcbiAgICB9XG4gICAgdmFyIEhVR0VfTVVUQVRJT05TX0NPVU5UID0gMTAwMDtcbiAgICBmdW5jdGlvbiBpc0h1Z2VNdXRhdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkZGVkTm9kZXNDb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhZGRlZE5vZGVzQ291bnQgKz0gbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGFkZGVkTm9kZXNDb3VudCA+IEhVR0VfTVVUQVRJT05TX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICB2YXIgYWRkaXRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICB2YXIgZGVsZXRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICB2YXIgbW92ZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICBmb3JFYWNoKG0uYWRkZWROb2RlcywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuYWRkKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yRWFjaChtLnJlbW92ZWROb2RlcywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVzLmFkZChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5kZWxldGUobik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGlvbnMuYWRkKG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZHVwbGljYXRlQWRkaXRpb25zID0gW107XG4gICAgICAgIHZhciBkdXBsaWNhdGVEZWxldGlvbnMgPSBbXTtcbiAgICAgICAgYWRkaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChhZGRpdGlvbnMuaGFzKG5vZGUucGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoZGVsZXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlRGVsZXRpb25zLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gYWRkaXRpb25zLmRlbGV0ZShub2RlKTsgfSk7XG4gICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBkZWxldGlvbnMuZGVsZXRlKG5vZGUpOyB9KTtcbiAgICAgICAgcmV0dXJuIHsgYWRkaXRpb25zOiBhZGRpdGlvbnMsIG1vdmVzOiBtb3ZlcywgZGVsZXRpb25zOiBkZWxldGlvbnMgfTtcbiAgICB9XG4gICAgdmFyIG9wdGltaXplZFRyZWVPYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG4gICAgdmFyIG9wdGltaXplZFRyZWVDYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCBjYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICB2YXIgb2JzZXJ2ZXJDYWxsYmFja3M7XG4gICAgICAgIHZhciBkb21SZWFkeUxpc3RlbmVyO1xuICAgICAgICBpZiAob3B0aW1pemVkVHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gb3B0aW1pemVkVHJlZU9ic2VydmVycy5nZXQocm9vdCk7XG4gICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcyA9IG9wdGltaXplZFRyZWVDYWxsYmFja3MuZ2V0KG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoYWRIdWdlTXV0YXRpb25zQmVmb3JlXzEgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVkRm9yUmVhZHlTdGF0ZV8xID0gZmFsc2U7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIdWdlTXV0YXRpb24obXV0YXRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhZEh1Z2VNdXRhdGlvbnNCZWZvcmVfMSB8fCBpc0RPTVJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uSHVnZU11dGF0aW9ucyA9IF9hLm9uSHVnZU11dGF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25IdWdlTXV0YXRpb25zKHJvb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXN1YnNjcmliZWRGb3JSZWFkeVN0YXRlXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVJlYWR5TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkh1Z2VNdXRhdGlvbnMgPSBfYS5vbkh1Z2VNdXRhdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uSHVnZU11dGF0aW9ucyhyb290KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihkb21SZWFkeUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmVfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHNPcGVyYXRpb25zXzEgPSBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25NaW5vck11dGF0aW9ucyA9IF9hLm9uTWlub3JNdXRhdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25NaW5vck11dGF0aW9ucyhlbGVtZW50c09wZXJhdGlvbnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuc2V0KHJvb3QsIG9ic2VydmVyKTtcbiAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5zZXQob2JzZXJ2ZXIsIG9ic2VydmVyQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5hZGQoY2FsbGJhY2tzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9tUmVhZHlMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZXJDYWxsYmFja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVDYWxsYmFja3MuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVkVHJlZU9ic2VydmVycy5kZWxldGUocm9vdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYW5jaG9yO1xuICAgIHZhciBwYXJzZWRVUkxDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBmaXhCYXNlVVJMKCR1cmwpIHtcbiAgICAgICAgaWYgKCFhbmNob3IpIHtcbiAgICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgfVxuICAgICAgICBhbmNob3IuaHJlZiA9ICR1cmw7XG4gICAgICAgIHJldHVybiBhbmNob3IuaHJlZjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VVUkwoJHVybCwgJGJhc2UpIHtcbiAgICAgICAgaWYgKCRiYXNlID09PSB2b2lkIDApIHsgJGJhc2UgPSBudWxsOyB9XG4gICAgICAgIHZhciBrZXkgPSBcIlwiLmNvbmNhdCgkdXJsKS5jb25jYXQoJGJhc2UgPyBcIjtcIi5jb25jYXQoJGJhc2UpIDogJycpO1xuICAgICAgICBpZiAocGFyc2VkVVJMQ2FjaGUuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkxDYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWRVUkxfMSA9IG5ldyBVUkwoJHVybCwgZml4QmFzZVVSTCgkYmFzZSkpO1xuICAgICAgICAgICAgcGFyc2VkVVJMQ2FjaGUuc2V0KGtleSwgcGFyc2VkVVJMXzEpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFVSTF8xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJzZWRVUkwgPSBuZXcgVVJMKGZpeEJhc2VVUkwoJHVybCkpO1xuICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoJHVybCwgcGFyc2VkVVJMKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZFVSTDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QWJzb2x1dGVVUkwoJGJhc2UsICRyZWxhdGl2ZSkge1xuICAgICAgICBpZiAoJHJlbGF0aXZlLm1hdGNoKC9eZGF0YVxcXFw/XFw6LykpIHtcbiAgICAgICAgICAgIHJldHVybiAkcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eXFwvXFwvLy50ZXN0KCRyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChsb2NhdGlvbi5wcm90b2NvbCkuY29uY2F0KCRyZWxhdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGIgPSBwYXJzZVVSTCgkYmFzZSk7XG4gICAgICAgIHZhciBhID0gcGFyc2VVUkwoJHJlbGF0aXZlLCBiLmhyZWYpO1xuICAgICAgICByZXR1cm4gYS5ocmVmO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1JlbGF0aXZlSHJlZk9uQWJzb2x1dGVQYXRoKGhyZWYpIHtcbiAgICAgICAgaWYgKGhyZWYuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVybCA9IHBhcnNlVVJMKGhyZWYpO1xuICAgICAgICBpZiAodXJsLnByb3RvY29sICE9PSBsb2NhdGlvbi5wcm90b2NvbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cmwuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybC5wb3J0ICE9PSBsb2NhdGlvbi5wb3J0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXRlcmF0ZUNTU1J1bGVzKHJ1bGVzLCBpdGVyYXRlLCBvbk1lZGlhUnVsZUVycm9yKSB7XG4gICAgICAgIGZvckVhY2gocnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRlKHJ1bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZS5ocmVmKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuc3R5bGVTaGVldC5jc3NSdWxlcywgaXRlcmF0ZSwgb25NZWRpYVJ1bGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcIkZvdW5kIGEgbm9uLWxvYWRlZCBsaW5rLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgb25NZWRpYVJ1bGVFcnJvciAmJiBvbk1lZGlhUnVsZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZS5tZWRpYSkge1xuICAgICAgICAgICAgICAgIHZhciBtZWRpYSA9IEFycmF5LmZyb20ocnVsZS5tZWRpYSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzU2NyZWVuT3JBbGxPclF1ZXJ5ID0gbWVkaWEuc29tZShmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zdGFydHNXaXRoKCdzY3JlZW4nKSB8fCBtLnN0YXJ0c1dpdGgoJ2FsbCcpIHx8IG0uc3RhcnRzV2l0aCgnKCcpOyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaXNQcmludE9yU3BlZWNoID0gbWVkaWEuc29tZShmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zdGFydHNXaXRoKCdwcmludCcpIHx8IG0uc3RhcnRzV2l0aCgnc3BlZWNoJyk7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChpc1NjcmVlbk9yQWxsT3JRdWVyeSB8fCAhaXNQcmludE9yU3BlZWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbk1lZGlhUnVsZUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChydWxlLmNvbmRpdGlvblRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoQ1NTLnN1cHBvcnRzKHJ1bGUuY29uZGl0aW9uVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uTWVkaWFSdWxlRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ1dhcm4oXCJDU1NSdWxlIHR5cGUgbm90IHN1cHBvcnRlZFwiLCBydWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzID0gW1xuICAgICAgICAnYmFja2dyb3VuZCcsXG4gICAgICAgICdib3JkZXInLFxuICAgICAgICAnYm9yZGVyLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20nLFxuICAgICAgICAnYm9yZGVyLWxlZnQnLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0JyxcbiAgICAgICAgJ2JvcmRlci10b3AnLFxuICAgICAgICAnb3V0bGluZScsXG4gICAgICAgICdvdXRsaW5lLWNvbG9yJyxcbiAgICBdO1xuICAgIHZhciBzaG9ydGhhbmRWYXJEZXBQcm9wUmVnZXhwcyA9IGlzU2FmYXJpID8gc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQocHJvcCwgXCI6XFxcXHMqKC4qPylcXFxccyo7XCIpKTtcbiAgICAgICAgcmV0dXJuIFtwcm9wLCByZWdleHBdO1xuICAgIH0pIDogbnVsbDtcbiAgICBmdW5jdGlvbiBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKHN0eWxlLCBpdGVyYXRlKSB7XG4gICAgICAgIGZvckVhY2goc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZXJhdGUocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgaWYgKGNzc1RleHQuaW5jbHVkZXMoJ3ZhcignKSkge1xuICAgICAgICAgICAgaWYgKGlzU2FmYXJpKSB7XG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kVmFyRGVwUHJvcFJlZ2V4cHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAyKSwgcHJvcCA9IF9iWzBdLCByZWdleHAgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gY3NzVGV4dC5tYXRjaChyZWdleHApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBtYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwuaW5jbHVkZXMoJ3ZhcignKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShwcm9wLCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNzc1VSTFJlZ2V4ID0gL3VybFxcKCgoJy4qPycpfChcIi4qP1wiKXwoW15cXCldKj8pKVxcKS9nO1xuICAgIHZhciBjc3NJbXBvcnRSZWdleCA9IC9AaW1wb3J0XFxzKih1cmxcXCgpPygoJy4rPycpfChcIi4rP1wiKXwoW15cXCldKj8pKVxcKT8gPyhzY3JlZW4pPzs/L2dpO1xuICAgIGZ1bmN0aW9uIGdldENTU1VSTFZhbHVlKGNzc1VSTCkge1xuICAgICAgICByZXR1cm4gY3NzVVJMLnRyaW0oKS5yZXBsYWNlKC9edXJsXFwoKC4qKVxcKSQvLCAnJDEnKS50cmltKCkucmVwbGFjZSgvXlwiKC4qKVwiJC8sICckMScpLnJlcGxhY2UoL14nKC4qKSckLywgJyQxJykucmVwbGFjZSgvKD86XFxcXCguKSkvZywgJyQxJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENTU0Jhc2VCYXRoKHVybCkge1xuICAgICAgICB2YXIgY3NzVVJMID0gcGFyc2VVUkwodXJsKTtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGNzc1VSTC5vcmlnaW4pLmNvbmNhdChjc3NVUkwucGF0aG5hbWUucmVwbGFjZSgvXFw/LiokLywgJycpLnJlcGxhY2UoLyhcXC8pKFteXFwvXSspJC9pLCAnJDEnKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NSZWxhdGl2ZVVSTHNXaXRoQWJzb2x1dGUoJGNzcywgY3NzQmFzZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShjc3NVUkxSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgcGF0aFZhbHVlID0gZ2V0Q1NTVVJMVmFsdWUobWF0Y2gpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ1cmwoXFxcIlwiLmNvbmNhdChnZXRBYnNvbHV0ZVVSTChjc3NCYXNlUGF0aCwgcGF0aFZhbHVlKSwgXCJcXFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgY3NzQ29tbWVudHNSZWdleCA9IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvL2c7XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ1NTQ29tbWVudHMoJGNzcykge1xuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGNzc0NvbW1lbnRzUmVnZXgsICcnKTtcbiAgICB9XG4gICAgdmFyIGZvbnRGYWNlUmVnZXggPSAvQGZvbnQtZmFjZVxccyp7W159XSp9L2c7XG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU0ZvbnRGYWNlKCRjc3MpIHtcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShmb250RmFjZVJlZ2V4LCAnJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZhbE1hdGgoZXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgcnBuU3RhY2sgPSBbXTtcbiAgICAgICAgdmFyIHdvcmtpbmdTdGFjayA9IFtdO1xuICAgICAgICB2YXIgbGFzdFRva2VuO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwcmVzc2lvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gZXhwcmVzc2lvbltpXTtcbiAgICAgICAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4gPT09ICcgJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wZXJhdG9ycy5oYXModG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wID0gb3BlcmF0b3JzLmdldCh0b2tlbik7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHdvcmtpbmdTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPcCA9IG9wZXJhdG9ycy5nZXQod29ya2luZ1N0YWNrWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50T3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcC5sZXNzT3JFcXVhbFRoYW4oY3VycmVudE9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnBuU3RhY2sucHVzaCh3b3JraW5nU3RhY2suc2hpZnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3b3JraW5nU3RhY2sudW5zaGlmdCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghbGFzdFRva2VuIHx8IG9wZXJhdG9ycy5oYXMobGFzdFRva2VuKSkge1xuICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcnBuU3RhY2tbcnBuU3RhY2subGVuZ3RoIC0gMV0gKz0gdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBycG5TdGFjay5wdXNoLmFwcGx5KHJwblN0YWNrLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQod29ya2luZ1N0YWNrKSwgZmFsc2UpKTtcbiAgICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBycG5TdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIG9wID0gb3BlcmF0b3JzLmdldChycG5TdGFja1tpXSk7XG4gICAgICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHN0YWNrLnNwbGljZSgwLCAyKTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG9wLmV4ZWMoYXJnc1sxXSwgYXJnc1swXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhY2sudW5zaGlmdChwYXJzZUZsb2F0KHJwblN0YWNrW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YWNrWzBdO1xuICAgIH1cbiAgICB2YXIgT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBPcGVyYXRvcihwcmVjZWRlbmNlLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHRoaXMucHJlY2VuZGNlID0gcHJlY2VkZW5jZTtcbiAgICAgICAgICAgIHRoaXMuZXhlY01ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgfVxuICAgICAgICBPcGVyYXRvci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY01ldGhvZChsZWZ0LCByaWdodCk7XG4gICAgICAgIH07XG4gICAgICAgIE9wZXJhdG9yLnByb3RvdHlwZS5sZXNzT3JFcXVhbFRoYW4gPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWNlbmRjZSA8PSBvcC5wcmVjZW5kY2U7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPcGVyYXRvcjtcbiAgICB9KCkpO1xuICAgIHZhciBvcGVyYXRvcnMgPSBuZXcgTWFwKFtcbiAgICAgICAgWycrJywgbmV3IE9wZXJhdG9yKDEsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCArIHJpZ2h0OyB9KV0sXG4gICAgICAgIFsnLScsIG5ldyBPcGVyYXRvcigxLCBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgLSByaWdodDsgfSldLFxuICAgICAgICBbJyonLCBuZXcgT3BlcmF0b3IoMiwgZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ICogcmlnaHQ7IH0pXSxcbiAgICAgICAgWycvJywgbmV3IE9wZXJhdG9yKDIsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCAvIHJpZ2h0OyB9KV0sXG4gICAgXSk7XG5cbiAgICBmdW5jdGlvbiBnZXRNYXRjaGVzKHJlZ2V4LCBpbnB1dCwgZ3JvdXApIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB2b2lkIDApIHsgZ3JvdXAgPSAwOyB9XG4gICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgIHZhciBtO1xuICAgICAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtW2dyb3VwXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcm1hdENTUyh0ZXh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIHRyaW1MZWZ0KHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL15cXHMrLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEluZGVudChkZXB0aCkge1xuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcgJy5yZXBlYXQoNCAqIGRlcHRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPCA1MDAwMCkge1xuICAgICAgICAgICAgdmFyIGVtcHR5UnVsZVJlZ2V4cCA9IC9bXnt9XSt7XFxzKn0vO1xuICAgICAgICAgICAgd2hpbGUgKGVtcHR5UnVsZVJlZ2V4cC50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShlbXB0eVJ1bGVSZWdleHAsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY3NzID0gKHRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9L2csICcgJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHsvZywgJ3tcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcfS9nLCAnXFxufVxcbicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw7KD8hW15cXCh8XFxcIl0qKFxcKXxcXFwiKSkvZywgJztcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLCg/IVteXFwofFxcXCJdKihcXCl8XFxcIikpL2csICcsXFxuJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG5cXHMqXFxuL2csICdcXG4nKVxuICAgICAgICAgICAgLnNwbGl0KCdcXG4nKSk7XG4gICAgICAgIHZhciBkZXB0aCA9IDA7XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDAsIGxlbiA9IGNzcy5sZW5ndGg7IHggPCBsZW47IHgrKykge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBcIlwiLmNvbmNhdChjc3NbeF0sIFwiXFxuXCIpO1xuICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoJ3snKSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5wdXNoKGdldEluZGVudChkZXB0aCsrKSArIHRyaW1MZWZ0KGxpbmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuaW5jbHVkZXMoJ1xcfScpKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkLnB1c2goZ2V0SW5kZW50KC0tZGVwdGgpICsgdHJpbUxlZnQobGluZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkLnB1c2goZ2V0SW5kZW50KGRlcHRoKSArIHRyaW1MZWZ0KGxpbmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkLmpvaW4oJycpLnRyaW0oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50aGVzZXNSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnRJbmRleCkge1xuICAgICAgICBpZiAoc2VhcmNoU3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHNlYXJjaFN0YXJ0SW5kZXggPSAwOyB9XG4gICAgICAgIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHZhciBkZXB0aCA9IDA7XG4gICAgICAgIHZhciBmaXJzdE9wZW5JbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gc2VhcmNoU3RhcnRJbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgb3BlbkluZGV4ID0gaW5wdXQuaW5kZXhPZignKCcsIGkpO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaXJzdE9wZW5JbmRleCA9IG9wZW5JbmRleDtcbiAgICAgICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvc2luZ0luZGV4ID0gaW5wdXQuaW5kZXhPZignKScsIGkpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9zaW5nSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3BlbkluZGV4ID0gaW5wdXQuaW5kZXhPZignKCcsIGkpO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuSW5kZXggPCAwIHx8IGNsb3NpbmdJbmRleCA8IG9wZW5JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0OiBmaXJzdE9wZW5JbmRleCwgZW5kOiBjbG9zaW5nSW5kZXggKyAxIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSA9IGNsb3NpbmdJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBoc2xhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICB2YXIgcmdiYVBhcnNlQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gcGFyc2VDb2xvcldpdGhDYWNoZSgkY29sb3IpIHtcbiAgICAgICAgJGNvbG9yID0gJGNvbG9yLnRyaW0oKTtcbiAgICAgICAgaWYgKHJnYmFQYXJzZUNhY2hlLmhhcygkY29sb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmdiYVBhcnNlQ2FjaGUuZ2V0KCRjb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRjb2xvci5pbmNsdWRlcygnY2FsYygnKSkge1xuICAgICAgICAgICAgJGNvbG9yID0gbG93ZXJDYWxjRXhwcmVzc2lvbigkY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb2xvciA9IHBhcnNlKCRjb2xvcik7XG4gICAgICAgIGNvbG9yICYmIHJnYmFQYXJzZUNhY2hlLnNldCgkY29sb3IsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZVRvSFNMV2l0aENhY2hlKGNvbG9yKSB7XG4gICAgICAgIGlmIChoc2xhUGFyc2VDYWNoZS5oYXMoY29sb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gaHNsYVBhcnNlQ2FjaGUuZ2V0KGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcik7XG4gICAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaHNsID0gcmdiVG9IU0wocmdiKTtcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuc2V0KGNvbG9yLCBoc2wpO1xuICAgICAgICByZXR1cm4gaHNsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckNvbG9yQ2FjaGUoKSB7XG4gICAgICAgIGhzbGFQYXJzZUNhY2hlLmNsZWFyKCk7XG4gICAgICAgIHJnYmFQYXJzZUNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhzbFRvUkdCKF9hKSB7XG4gICAgICAgIHZhciBoID0gX2EuaCwgcyA9IF9hLnMsIGwgPSBfYS5sLCBfYiA9IF9hLmEsIGEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIF9jID0gX19yZWFkKFtsLCBsLCBsXS5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCAqIDI1NSk7IH0pLCAzKSwgcl8xID0gX2NbMF0sIGJfMSA9IF9jWzFdLCBnXzEgPSBfY1syXTtcbiAgICAgICAgICAgIHJldHVybiB7IHI6IHJfMSwgZzogZ18xLCBiOiBiXzEsIGE6IGEgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9ICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgKiBzO1xuICAgICAgICB2YXIgeCA9IGMgKiAoMSAtIE1hdGguYWJzKChoIC8gNjApICUgMiAtIDEpKTtcbiAgICAgICAgdmFyIG0gPSBsIC0gYyAvIDI7XG4gICAgICAgIHZhciBfZCA9IF9fcmVhZCgoaCA8IDYwID8gW2MsIHgsIDBdIDpcbiAgICAgICAgICAgIGggPCAxMjAgPyBbeCwgYywgMF0gOlxuICAgICAgICAgICAgICAgIGggPCAxODAgPyBbMCwgYywgeF0gOlxuICAgICAgICAgICAgICAgICAgICBoIDwgMjQwID8gWzAsIHgsIGNdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPCAzMDAgPyBbeCwgMCwgY10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjLCAwLCB4XSkubWFwKGZ1bmN0aW9uIChuKSB7IHJldHVybiBNYXRoLnJvdW5kKChuICsgbSkgKiAyNTUpOyB9KSwgMyksIHIgPSBfZFswXSwgZyA9IF9kWzFdLCBiID0gX2RbMl07XG4gICAgICAgIHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmdiVG9IU0woX2EpIHtcbiAgICAgICAgdmFyIHIyNTUgPSBfYS5yLCBnMjU1ID0gX2EuZywgYjI1NSA9IF9hLmIsIF9iID0gX2EuYSwgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XG4gICAgICAgIHZhciByID0gcjI1NSAvIDI1NTtcbiAgICAgICAgdmFyIGcgPSBnMjU1IC8gMjU1O1xuICAgICAgICB2YXIgYiA9IGIyNTUgLyAyNTU7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgYyA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBoOiAwLCBzOiAwLCBsOiBsLCBhOiBhIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGggPSAobWF4ID09PSByID8gKCgoZyAtIGIpIC8gYykgJSA2KSA6XG4gICAgICAgICAgICBtYXggPT09IGcgPyAoKGIgLSByKSAvIGMgKyAyKSA6XG4gICAgICAgICAgICAgICAgKChyIC0gZykgLyBjICsgNCkpICogNjA7XG4gICAgICAgIGlmIChoIDwgMCkge1xuICAgICAgICAgICAgaCArPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHMgPSBjIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaCwgczogcywgbDogbCwgYTogYSB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0ZpeGVkKG4sIGRpZ2l0cykge1xuICAgICAgICBpZiAoZGlnaXRzID09PSB2b2lkIDApIHsgZGlnaXRzID0gMDsgfVxuICAgICAgICB2YXIgZml4ZWQgPSBuLnRvRml4ZWQoZGlnaXRzKTtcbiAgICAgICAgaWYgKGRpZ2l0cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpeGVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkb3QgPSBmaXhlZC5pbmRleE9mKCcuJyk7XG4gICAgICAgIGlmIChkb3QgPj0gMCkge1xuICAgICAgICAgICAgdmFyIHplcm9zTWF0Y2ggPSBmaXhlZC5tYXRjaCgvMCskLyk7XG4gICAgICAgICAgICBpZiAoemVyb3NNYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoLmluZGV4ID09PSBkb3QgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgZG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCB6ZXJvc01hdGNoLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZml4ZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJnYlRvU3RyaW5nKHJnYikge1xuICAgICAgICB2YXIgciA9IHJnYi5yLCBnID0gcmdiLmcsIGIgPSByZ2IuYiwgYSA9IHJnYi5hO1xuICAgICAgICBpZiAoYSAhPSBudWxsICYmIGEgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKFwiLmNvbmNhdCh0b0ZpeGVkKHIpLCBcIiwgXCIpLmNvbmNhdCh0b0ZpeGVkKGcpLCBcIiwgXCIpLmNvbmNhdCh0b0ZpeGVkKGIpLCBcIiwgXCIpLmNvbmNhdCh0b0ZpeGVkKGEsIDIpLCBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwicmdiKFwiLmNvbmNhdCh0b0ZpeGVkKHIpLCBcIiwgXCIpLmNvbmNhdCh0b0ZpeGVkKGcpLCBcIiwgXCIpLmNvbmNhdCh0b0ZpeGVkKGIpLCBcIilcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJnYlRvSGV4U3RyaW5nKF9hKSB7XG4gICAgICAgIHZhciByID0gX2EuciwgZyA9IF9hLmcsIGIgPSBfYS5iLCBhID0gX2EuYTtcbiAgICAgICAgcmV0dXJuIFwiI1wiLmNvbmNhdCgoYSAhPSBudWxsICYmIGEgPCAxID8gW3IsIGcsIGIsIE1hdGgucm91bmQoYSAqIDI1NSldIDogW3IsIGcsIGJdKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh4IDwgMTYgPyAnMCcgOiAnJykuY29uY2F0KHgudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgfSkuam9pbignJykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoc2xUb1N0cmluZyhoc2wpIHtcbiAgICAgICAgdmFyIGggPSBoc2wuaCwgcyA9IGhzbC5zLCBsID0gaHNsLmwsIGEgPSBoc2wuYTtcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiaHNsYShcIi5jb25jYXQodG9GaXhlZChoKSwgXCIsIFwiKS5jb25jYXQodG9GaXhlZChzICogMTAwKSwgXCIlLCBcIikuY29uY2F0KHRvRml4ZWQobCAqIDEwMCksIFwiJSwgXCIpLmNvbmNhdCh0b0ZpeGVkKGEsIDIpLCBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaHNsKFwiLmNvbmNhdCh0b0ZpeGVkKGgpLCBcIiwgXCIpLmNvbmNhdCh0b0ZpeGVkKHMgKiAxMDApLCBcIiUsIFwiKS5jb25jYXQodG9GaXhlZChsICogMTAwKSwgXCIlKVwiKTtcbiAgICB9XG4gICAgdmFyIHJnYk1hdGNoID0gL15yZ2JhP1xcKFteXFwoXFwpXStcXCkkLztcbiAgICB2YXIgaHNsTWF0Y2ggPSAvXmhzbGE/XFwoW15cXChcXCldK1xcKSQvO1xuICAgIHZhciBoZXhNYXRjaCA9IC9eI1swLTlhLWZdKyQvaTtcbiAgICBmdW5jdGlvbiBwYXJzZSgkY29sb3IpIHtcbiAgICAgICAgdmFyIGMgPSAkY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChjLm1hdGNoKHJnYk1hdGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUkdCKGMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLm1hdGNoKGhzbE1hdGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSFNMKGMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLm1hdGNoKGhleE1hdGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSGV4KGMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrbm93bkNvbG9ycy5oYXMoYykpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb2xvckJ5TmFtZShjKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3lzdGVtQ29sb3JzLmhhcyhjKSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFN5c3RlbUNvbG9yKGMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVycygkY29sb3IpIHtcbiAgICAgICAgdmFyIG51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIHByZXZQb3MgPSAwO1xuICAgICAgICB2YXIgaXNNaW5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAkY29sb3IuaW5kZXhPZignKCcpO1xuICAgICAgICAkY29sb3IgPSAkY29sb3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAxLCAkY29sb3IubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJGNvbG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYyA9ICRjb2xvcltpXTtcbiAgICAgICAgICAgIGlmIChjID49ICcwJyAmJiBjIDw9ICc5JyB8fCBjID09PSAnLicgfHwgYyA9PT0gJysnIHx8IGMgPT09ICctJykge1xuICAgICAgICAgICAgICAgIGlzTWluaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWluaW5nICYmIChjID09PSAnICcgfHwgYyA9PT0gJywnKSkge1xuICAgICAgICAgICAgICAgIG51bWJlcnMucHVzaCgkY29sb3Iuc3Vic3RyaW5nKHByZXZQb3MsIGkpKTtcbiAgICAgICAgICAgICAgICBpc01pbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFpc01pbmluZykge1xuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNNaW5pbmcpIHtcbiAgICAgICAgICAgIG51bWJlcnMucHVzaCgkY29sb3Iuc3Vic3RyaW5nKHByZXZQb3MsICRjb2xvci5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVyc0Zyb21TdHJpbmcoc3RyLCByYW5nZSwgdW5pdHMpIHtcbiAgICAgICAgdmFyIHJhdyA9IGdldE51bWJlcnMoc3RyKTtcbiAgICAgICAgdmFyIHVuaXRzTGlzdCA9IE9iamVjdC5lbnRyaWVzKHVuaXRzKTtcbiAgICAgICAgdmFyIG51bWJlcnMgPSByYXcubWFwKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnRyaW0oKTsgfSkubWFwKGZ1bmN0aW9uIChyLCBpKSB7XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciB1bml0ID0gdW5pdHNMaXN0LmZpbmQoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAxKSwgdSA9IF9iWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiByLmVuZHNXaXRoKHUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgICAgIG4gPSBwYXJzZUZsb2F0KHIuc3Vic3RyaW5nKDAsIHIubGVuZ3RoIC0gdW5pdFswXS5sZW5ndGgpKSAvIHVuaXRbMV0gKiByYW5nZVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG4gPSBwYXJzZUZsb2F0KHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJhbmdlW2ldID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICB9XG4gICAgdmFyIHJnYlJhbmdlID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xuICAgIHZhciByZ2JVbml0cyA9IHsgJyUnOiAxMDAgfTtcbiAgICBmdW5jdGlvbiBwYXJzZVJHQigkcmdiKSB7XG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChnZXROdW1iZXJzRnJvbVN0cmluZygkcmdiLCByZ2JSYW5nZSwgcmdiVW5pdHMpLCA0KSwgciA9IF9hWzBdLCBnID0gX2FbMV0sIGIgPSBfYVsyXSwgX2IgPSBfYVszXSwgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XG4gICAgICAgIHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEgfTtcbiAgICB9XG4gICAgdmFyIGhzbFJhbmdlID0gWzM2MCwgMSwgMSwgMV07XG4gICAgdmFyIGhzbFVuaXRzID0geyAnJSc6IDEwMCwgJ2RlZyc6IDM2MCwgJ3JhZCc6IDIgKiBNYXRoLlBJLCAndHVybic6IDEgfTtcbiAgICBmdW5jdGlvbiBwYXJzZUhTTCgkaHNsKSB7XG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChnZXROdW1iZXJzRnJvbVN0cmluZygkaHNsLCBoc2xSYW5nZSwgaHNsVW5pdHMpLCA0KSwgaCA9IF9hWzBdLCBzID0gX2FbMV0sIGwgPSBfYVsyXSwgX2IgPSBfYVszXSwgYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XG4gICAgICAgIHJldHVybiBoc2xUb1JHQih7IGg6IGgsIHM6IHMsIGw6IGwsIGE6IGEgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlSGV4KCRoZXgpIHtcbiAgICAgICAgdmFyIGggPSAkaGV4LnN1YnN0cmluZygxKTtcbiAgICAgICAgc3dpdGNoIChoLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIHBhcnNlSW50KFwiXCIuY29uY2F0KGhbaV0pLmNvbmNhdChoW2ldKSwgMTYpOyB9KSwgMyksIHIgPSBfYVswXSwgZyA9IF9hWzFdLCBiID0gX2FbMl07XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBoLmxlbmd0aCA9PT0gMyA/IDEgOiAocGFyc2VJbnQoXCJcIi5jb25jYXQoaFszXSkuY29uY2F0KGhbM10pLCAxNikgLyAyNTUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChbMCwgMiwgNF0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMiksIDE2KTsgfSksIDMpLCByID0gX2JbMF0sIGcgPSBfYlsxXSwgYiA9IF9iWzJdO1xuICAgICAgICAgICAgICAgIHZhciBhID0gaC5sZW5ndGggPT09IDYgPyAxIDogKHBhcnNlSW50KGguc3Vic3RyaW5nKDYsIDgpLCAxNikgLyAyNTUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JCeU5hbWUoJGNvbG9yKSB7XG4gICAgICAgIHZhciBuID0ga25vd25Db2xvcnMuZ2V0KCRjb2xvcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiAobiA+PiAxNikgJiAyNTUsXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxuICAgICAgICAgICAgYTogMVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTeXN0ZW1Db2xvcigkY29sb3IpIHtcbiAgICAgICAgdmFyIG4gPSBzeXN0ZW1Db2xvcnMuZ2V0KCRjb2xvcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiAobiA+PiAxNikgJiAyNTUsXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxuICAgICAgICAgICAgYTogMVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb3dlckNhbGNFeHByZXNzaW9uKGNvbG9yKSB7XG4gICAgICAgIHZhciBzZWFyY2hJbmRleCA9IDA7XG4gICAgICAgIHZhciByZXBsYWNlQmV0d2VlbkluZGljZXMgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIHJlcGxhY2VtZW50ICsgY29sb3Iuc3Vic3RyaW5nKGVuZCk7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlICgoc2VhcmNoSW5kZXggPSBjb2xvci5pbmRleE9mKCdjYWxjKCcpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoY29sb3IsIHNlYXJjaEluZGV4KTtcbiAgICAgICAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzbGljZSA9IGNvbG9yLnNsaWNlKHJhbmdlLnN0YXJ0ICsgMSwgcmFuZ2UuZW5kIC0gMSk7XG4gICAgICAgICAgICB2YXIgaW5jbHVkZXNQZXJjZW50YWdlID0gc2xpY2UuaW5jbHVkZXMoJyUnKTtcbiAgICAgICAgICAgIHNsaWNlID0gc2xpY2Uuc3BsaXQoJyUnKS5qb2luKCcnKTtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBNYXRoLnJvdW5kKGV2YWxNYXRoKHNsaWNlKSk7XG4gICAgICAgICAgICByZXBsYWNlQmV0d2VlbkluZGljZXMocmFuZ2Uuc3RhcnQgLSA0LCByYW5nZS5lbmQsIG91dHB1dCArIChpbmNsdWRlc1BlcmNlbnRhZ2UgPyAnJScgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgdmFyIGtub3duQ29sb3JzID0gbmV3IE1hcChPYmplY3QuZW50cmllcyh7XG4gICAgICAgIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gICAgICAgIGFxdWE6IDB4MDBmZmZmLFxuICAgICAgICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgICAgICAgYXp1cmU6IDB4ZjBmZmZmLFxuICAgICAgICBiZWlnZTogMHhmNWY1ZGMsXG4gICAgICAgIGJpc3F1ZTogMHhmZmU0YzQsXG4gICAgICAgIGJsYWNrOiAweDAwMDAwMCxcbiAgICAgICAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICAgICAgICBibHVlOiAweDAwMDBmZixcbiAgICAgICAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gICAgICAgIGJyb3duOiAweGE1MmEyYSxcbiAgICAgICAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgICAgICAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgICAgICAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gICAgICAgIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gICAgICAgIGNvcmFsOiAweGZmN2Y1MCxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICAgICAgICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gICAgICAgIGNyaW1zb246IDB4ZGMxNDNjLFxuICAgICAgICBjeWFuOiAweDAwZmZmZixcbiAgICAgICAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICAgICAgICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICAgICAgICBkYXJrZ3JheTogMHhhOWE5YTksXG4gICAgICAgIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgICAgICAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgICAgICAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgICAgICAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gICAgICAgIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICAgICAgICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgICAgICAgZGFya3JlZDogMHg4YjAwMDAsXG4gICAgICAgIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICAgICAgICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgICAgICAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gICAgICAgIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgICAgICAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gICAgICAgIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgICAgICAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICAgICAgICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgICAgICAgZGltZ3JleTogMHg2OTY5NjksXG4gICAgICAgIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICAgICAgICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICAgICAgICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgICAgICAgZnVjaHNpYTogMHhmZjAwZmYsXG4gICAgICAgIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gICAgICAgIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICAgICAgICBnb2xkOiAweGZmZDcwMCxcbiAgICAgICAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgICAgICAgZ3JheTogMHg4MDgwODAsXG4gICAgICAgIGdyZXk6IDB4ODA4MDgwLFxuICAgICAgICBncmVlbjogMHgwMDgwMDAsXG4gICAgICAgIGdyZWVueWVsbG93OiAweGFkZmYyZixcbiAgICAgICAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICAgICAgICBob3RwaW5rOiAweGZmNjliNCxcbiAgICAgICAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgICAgICAgaW5kaWdvOiAweDRiMDA4MixcbiAgICAgICAgaXZvcnk6IDB4ZmZmZmYwLFxuICAgICAgICBraGFraTogMHhmMGU2OGMsXG4gICAgICAgIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gICAgICAgIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gICAgICAgIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gICAgICAgIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICAgICAgICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gICAgICAgIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gICAgICAgIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gICAgICAgIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICAgICAgICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICAgICAgICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICAgICAgICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gICAgICAgIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICAgICAgICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gICAgICAgIGxpbWU6IDB4MDBmZjAwLFxuICAgICAgICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICAgICAgICBsaW5lbjogMHhmYWYwZTYsXG4gICAgICAgIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICAgICAgICBtYXJvb246IDB4ODAwMDAwLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgICAgICAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICAgICAgICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICAgICAgICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICAgICAgICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICAgICAgICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gICAgICAgIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgICAgICAgbmF2eTogMHgwMDAwODAsXG4gICAgICAgIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICAgICAgICBvbGl2ZTogMHg4MDgwMDAsXG4gICAgICAgIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gICAgICAgIG9yYW5nZTogMHhmZmE1MDAsXG4gICAgICAgIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gICAgICAgIG9yY2hpZDogMHhkYTcwZDYsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICAgICAgICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICAgICAgICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gICAgICAgIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICAgICAgICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICAgICAgICBwZXJ1OiAweGNkODUzZixcbiAgICAgICAgcGluazogMHhmZmMwY2IsXG4gICAgICAgIHBsdW06IDB4ZGRhMGRkLFxuICAgICAgICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgICAgICAgcHVycGxlOiAweDgwMDA4MCxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gICAgICAgIHJlZDogMHhmZjAwMDAsXG4gICAgICAgIHJvc3licm93bjogMHhiYzhmOGYsXG4gICAgICAgIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gICAgICAgIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgICAgICAgc2FsbW9uOiAweGZhODA3MixcbiAgICAgICAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gICAgICAgIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgICAgICAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICAgICAgICBzaWVubmE6IDB4YTA1MjJkLFxuICAgICAgICBzaWx2ZXI6IDB4YzBjMGMwLFxuICAgICAgICBza3libHVlOiAweDg3Y2VlYixcbiAgICAgICAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgICAgICAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgICAgICAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgICAgICAgc25vdzogMHhmZmZhZmEsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgICAgICAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgICAgICAgdGFuOiAweGQyYjQ4YyxcbiAgICAgICAgdGVhbDogMHgwMDgwODAsXG4gICAgICAgIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICAgICAgICB0b21hdG86IDB4ZmY2MzQ3LFxuICAgICAgICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICAgICAgICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICAgICAgICB3aGVhdDogMHhmNWRlYjMsXG4gICAgICAgIHdoaXRlOiAweGZmZmZmZixcbiAgICAgICAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gICAgICAgIHllbGxvdzogMHhmZmZmMDAsXG4gICAgICAgIHllbGxvd2dyZWVuOiAweDlhY2QzMixcbiAgICB9KSk7XG4gICAgdmFyIHN5c3RlbUNvbG9ycyA9IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoe1xuICAgICAgICBBY3RpdmVCb3JkZXI6IDB4M2I5OWZjLFxuICAgICAgICBBY3RpdmVDYXB0aW9uOiAweDAwMDAwMCxcbiAgICAgICAgQXBwV29ya3NwYWNlOiAweGFhYWFhYSxcbiAgICAgICAgQmFja2dyb3VuZDogMHg2MzYzY2UsXG4gICAgICAgIEJ1dHRvbkZhY2U6IDB4ZmZmZmZmLFxuICAgICAgICBCdXR0b25IaWdobGlnaHQ6IDB4ZTllOWU5LFxuICAgICAgICBCdXR0b25TaGFkb3c6IDB4OWZhMDlmLFxuICAgICAgICBCdXR0b25UZXh0OiAweDAwMDAwMCxcbiAgICAgICAgQ2FwdGlvblRleHQ6IDB4MDAwMDAwLFxuICAgICAgICBHcmF5VGV4dDogMHg3ZjdmN2YsXG4gICAgICAgIEhpZ2hsaWdodDogMHhiMmQ3ZmYsXG4gICAgICAgIEhpZ2hsaWdodFRleHQ6IDB4MDAwMDAwLFxuICAgICAgICBJbmFjdGl2ZUJvcmRlcjogMHhmZmZmZmYsXG4gICAgICAgIEluYWN0aXZlQ2FwdGlvbjogMHhmZmZmZmYsXG4gICAgICAgIEluYWN0aXZlQ2FwdGlvblRleHQ6IDB4MDAwMDAwLFxuICAgICAgICBJbmZvQmFja2dyb3VuZDogMHhmYmZjYzUsXG4gICAgICAgIEluZm9UZXh0OiAweDAwMDAwMCxcbiAgICAgICAgTWVudTogMHhmNmY2ZjYsXG4gICAgICAgIE1lbnVUZXh0OiAweGZmZmZmZixcbiAgICAgICAgU2Nyb2xsYmFyOiAweGFhYWFhYSxcbiAgICAgICAgVGhyZWVERGFya1NoYWRvdzogMHgwMDAwMDAsXG4gICAgICAgIFRocmVlREZhY2U6IDB4YzBjMGMwLFxuICAgICAgICBUaHJlZURIaWdobGlnaHQ6IDB4ZmZmZmZmLFxuICAgICAgICBUaHJlZURMaWdodFNoYWRvdzogMHhmZmZmZmYsXG4gICAgICAgIFRocmVlRFNoYWRvdzogMHgwMDAwMDAsXG4gICAgICAgIFdpbmRvdzogMHhlY2VjZWMsXG4gICAgICAgIFdpbmRvd0ZyYW1lOiAweGFhYWFhYSxcbiAgICAgICAgV2luZG93VGV4dDogMHgwMDAwMDAsXG4gICAgICAgICctd2Via2l0LWZvY3VzLXJpbmctY29sb3InOiAweGU1OTcwMFxuICAgIH0pLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAyKSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XG4gICAgICAgIHJldHVybiBba2V5LnRvTG93ZXJDYXNlKCksIHZhbHVlXTtcbiAgICB9KSk7XG4gICAgZnVuY3Rpb24gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKSB7XG4gICAgICAgIHJldHVybiAoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKSAvIDI1NTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpIHtcbiAgICAgICAgcmV0dXJuICh4IC0gaW5Mb3cpICogKG91dEhpZ2ggLSBvdXRMb3cpIC8gKGluSGlnaCAtIGluTG93KSArIG91dExvdztcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xhbXAoeCwgbWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB4KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG11bHRpcGx5TWF0cmljZXMobTEsIG0yKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG0xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4yID0gbTJbMF0ubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDAsIGxlbjMgPSBtMVswXS5sZW5ndGg7IGsgPCBsZW4zOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IG0xW2ldW2tdICogbTJba11bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtqXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpIHtcbiAgICAgICAgdmFyIG0gPSBNYXRyaXguaWRlbnRpdHkoKTtcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LnNlcGlhKGNvbmZpZy5zZXBpYSAvIDEwMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguZ3JheXNjYWxlKGNvbmZpZy5ncmF5c2NhbGUgLyAxMDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5jb250cmFzdChjb25maWcuY29udHJhc3QgLyAxMDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmJyaWdodG5lc3MoY29uZmlnLmJyaWdodG5lc3MgLyAxMDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5pbnZlcnROSHVlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBseUNvbG9yTWF0cml4KF9hLCBtYXRyaXgpIHtcbiAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAzKSwgciA9IF9iWzBdLCBnID0gX2JbMV0sIGIgPSBfYlsyXTtcbiAgICAgICAgdmFyIHJnYiA9IFtbciAvIDI1NV0sIFtnIC8gMjU1XSwgW2IgLyAyNTVdLCBbMV0sIFsxXV07XG4gICAgICAgIHZhciByZXN1bHQgPSBtdWx0aXBseU1hdHJpY2VzKG1hdHJpeCwgcmdiKTtcbiAgICAgICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGNsYW1wKE1hdGgucm91bmQocmVzdWx0W2ldWzBdICogMjU1KSwgMCwgMjU1KTsgfSk7XG4gICAgfVxuICAgIHZhciBNYXRyaXggPSB7XG4gICAgICAgIGlkZW50aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH0sXG4gICAgICAgIGludmVydE5IdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgWzAuMzMzLCAtMC42NjcsIC0wLjY2NywgMCwgMV0sXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgMC4zMzMsIC0wLjY2NywgMCwgMV0sXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgLTAuNjY3LCAwLjMzMywgMCwgMV0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgYnJpZ2h0bmVzczogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgW3YsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgdiwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJhc3Q6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB2YXIgdCA9ICgxIC0gdikgLyAyO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBbdiwgMCwgMCwgMCwgdF0sXG4gICAgICAgICAgICAgICAgWzAsIHYsIDAsIDAsIHRdLFxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCB0XSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXG4gICAgICAgICAgICBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXBpYTogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgWygwLjM5MyArIDAuNjA3ICogKDEgLSB2KSksICgwLjc2OSAtIDAuNzY5ICogKDEgLSB2KSksICgwLjE4OSAtIDAuMTg5ICogKDEgLSB2KSksIDAsIDBdLFxuICAgICAgICAgICAgICAgIFsoMC4zNDkgLSAwLjM0OSAqICgxIC0gdikpLCAoMC42ODYgKyAwLjMxNCAqICgxIC0gdikpLCAoMC4xNjggLSAwLjE2OCAqICgxIC0gdikpLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbKDAuMjcyIC0gMC4yNzIgKiAoMSAtIHYpKSwgKDAuNTM0IC0gMC41MzQgKiAoMSAtIHYpKSwgKDAuMTMxICsgMC44NjkgKiAoMSAtIHYpKSwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ3JheXNjYWxlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBbKDAuMjEyNiArIDAuNzg3NCAqICgxIC0gdikpLCAoMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSksICgwLjA3MjIgLSAwLjA3MjIgKiAoMSAtIHYpKSwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWygwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHYpKSwgKDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdikpLCAoMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSksIDAsIDBdLFxuICAgICAgICAgICAgICAgIFsoMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSksICgwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHYpKSwgKDAuMDcyMiArIDAuOTI3OCAqICgxIC0gdikpLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXG4gICAgICAgICAgICBdO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRCZ1BvbGUodGhlbWUpIHtcbiAgICAgICAgdmFyIGlzRGFya1NjaGVtZSA9IHRoZW1lLm1vZGUgPT09IDE7XG4gICAgICAgIHZhciBwcm9wID0gaXNEYXJrU2NoZW1lID8gJ2RhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3InIDogJ2xpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yJztcbiAgICAgICAgcmV0dXJuIHRoZW1lW3Byb3BdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRGZ1BvbGUodGhlbWUpIHtcbiAgICAgICAgdmFyIGlzRGFya1NjaGVtZSA9IHRoZW1lLm1vZGUgPT09IDE7XG4gICAgICAgIHZhciBwcm9wID0gaXNEYXJrU2NoZW1lID8gJ2RhcmtTY2hlbWVUZXh0Q29sb3InIDogJ2xpZ2h0U2NoZW1lVGV4dENvbG9yJztcbiAgICAgICAgcmV0dXJuIHRoZW1lW3Byb3BdO1xuICAgIH1cbiAgICB2YXIgY29sb3JNb2RpZmljYXRpb25DYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBjbGVhckNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUoKSB7XG4gICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgdmFyIHJnYkNhY2hlS2V5cyA9IFsncicsICdnJywgJ2InLCAnYSddO1xuICAgIHZhciB0aGVtZUNhY2hlS2V5cyQxID0gWydtb2RlJywgJ2JyaWdodG5lc3MnLCAnY29udHJhc3QnLCAnZ3JheXNjYWxlJywgJ3NlcGlhJywgJ2RhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3InLCAnZGFya1NjaGVtZVRleHRDb2xvcicsICdsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvcicsICdsaWdodFNjaGVtZVRleHRDb2xvciddO1xuICAgIGZ1bmN0aW9uIGdldENhY2hlSWQocmdiLCB0aGVtZSkge1xuICAgICAgICB2YXIgcmVzdWx0SWQgPSAnJztcbiAgICAgICAgcmdiQ2FjaGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmVzdWx0SWQgKz0gXCJcIi5jb25jYXQocmdiW2tleV0sIFwiO1wiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzJDEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXN1bHRJZCArPSBcIlwiLmNvbmNhdCh0aGVtZVtrZXldLCBcIjtcIik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0SWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUNvbG9yV2l0aENhY2hlKHJnYiwgdGhlbWUsIG1vZGlmeUhTTCwgcG9sZUNvbG9yLCBhbm90aGVyUG9sZUNvbG9yKSB7XG4gICAgICAgIHZhciBmbkNhY2hlO1xuICAgICAgICBpZiAoY29sb3JNb2RpZmljYXRpb25DYWNoZS5oYXMobW9kaWZ5SFNMKSkge1xuICAgICAgICAgICAgZm5DYWNoZSA9IGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuZ2V0KG1vZGlmeUhTTCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmbkNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgY29sb3JNb2RpZmljYXRpb25DYWNoZS5zZXQobW9kaWZ5SFNMLCBmbkNhY2hlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWQgPSBnZXRDYWNoZUlkKHJnYiwgdGhlbWUpO1xuICAgICAgICBpZiAoZm5DYWNoZS5oYXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm5DYWNoZS5nZXQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hTTChyZ2IpO1xuICAgICAgICB2YXIgcG9sZSA9IHBvbGVDb2xvciA9PSBudWxsID8gbnVsbCA6IHBhcnNlVG9IU0xXaXRoQ2FjaGUocG9sZUNvbG9yKTtcbiAgICAgICAgdmFyIGFub3RoZXJQb2xlID0gYW5vdGhlclBvbGVDb2xvciA9PSBudWxsID8gbnVsbCA6IHBhcnNlVG9IU0xXaXRoQ2FjaGUoYW5vdGhlclBvbGVDb2xvcik7XG4gICAgICAgIHZhciBtb2RpZmllZCA9IG1vZGlmeUhTTChoc2wsIHBvbGUsIGFub3RoZXJQb2xlKTtcbiAgICAgICAgdmFyIF9hID0gaHNsVG9SR0IobW9kaWZpZWQpLCByID0gX2EuciwgZyA9IF9hLmcsIGIgPSBfYS5iLCBhID0gX2EuYTtcbiAgICAgICAgdmFyIG1hdHJpeCA9IGNyZWF0ZUZpbHRlck1hdHJpeCh0aGVtZSk7XG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChhcHBseUNvbG9yTWF0cml4KFtyLCBnLCBiXSwgbWF0cml4KSwgMyksIHJmID0gX2JbMF0sIGdmID0gX2JbMV0sIGJmID0gX2JbMl07XG4gICAgICAgIHZhciBjb2xvciA9IChhID09PSAxID9cbiAgICAgICAgICAgIHJnYlRvSGV4U3RyaW5nKHsgcjogcmYsIGc6IGdmLCBiOiBiZiB9KSA6XG4gICAgICAgICAgICByZ2JUb1N0cmluZyh7IHI6IHJmLCBnOiBnZiwgYjogYmYsIGE6IGEgfSkpO1xuICAgICAgICBmbkNhY2hlLnNldChpZCwgY29sb3IpO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vb3BIU0woaHNsKSB7XG4gICAgICAgIHJldHVybiBoc2w7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUNvbG9yKHJnYiwgdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKHJnYiwgdGhlbWUsIG5vb3BIU0wpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpIHtcbiAgICAgICAgdmFyIHBvbGVCZyA9IGdldEJnUG9sZSh0aGVtZSk7XG4gICAgICAgIHZhciBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUocmdiLCB0aGVtZSwgbW9kaWZ5TGlnaHRNb2RlSFNMLCBwb2xlRmcsIHBvbGVCZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUxpZ2h0TW9kZUhTTChfYSwgcG9sZUZnLCBwb2xlQmcpIHtcbiAgICAgICAgdmFyIGggPSBfYS5oLCBzID0gX2EucywgbCA9IF9hLmwsIGEgPSBfYS5hO1xuICAgICAgICB2YXIgaXNEYXJrID0gbCA8IDAuNTtcbiAgICAgICAgdmFyIGlzTmV1dHJhbDtcbiAgICAgICAgaWYgKGlzRGFyaykge1xuICAgICAgICAgICAgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4xMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpc0JsdWUgPSBoID4gMjAwICYmIGggPCAyODA7XG4gICAgICAgICAgICBpc05ldXRyYWwgPSBzIDwgMC4yNCB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoeCA9IGg7XG4gICAgICAgIHZhciBzeCA9IGw7XG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcbiAgICAgICAgICAgIGlmIChpc0RhcmspIHtcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUJnLnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGx4ID0gc2NhbGUobCwgMCwgMSwgcG9sZUZnLmwsIHBvbGVCZy5sKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHgsIHM6IHN4LCBsOiBseCwgYTogYSB9O1xuICAgIH1cbiAgICB2YXIgTUFYX0JHX0xJR0hUTkVTUyA9IDAuNDtcbiAgICBmdW5jdGlvbiBtb2RpZnlCZ0hTTChfYSwgcG9sZSkge1xuICAgICAgICB2YXIgaCA9IF9hLmgsIHMgPSBfYS5zLCBsID0gX2EubCwgYSA9IF9hLmE7XG4gICAgICAgIHZhciBpc0RhcmsgPSBsIDwgMC41O1xuICAgICAgICB2YXIgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xuICAgICAgICB2YXIgaXNOZXV0cmFsID0gcyA8IDAuMTIgfHwgKGwgPiAwLjggJiYgaXNCbHVlKTtcbiAgICAgICAgaWYgKGlzRGFyaykge1xuICAgICAgICAgICAgdmFyIGx4XzEgPSBzY2FsZShsLCAwLCAwLjUsIDAsIE1BWF9CR19MSUdIVE5FU1MpO1xuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xuICAgICAgICAgICAgICAgIHZhciBoeF8xID0gcG9sZS5oO1xuICAgICAgICAgICAgICAgIHZhciBzeCA9IHBvbGUucztcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoOiBoeF8xLCBzOiBzeCwgbDogbHhfMSwgYTogYSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaDogaCwgczogcywgbDogbHhfMSwgYTogYSB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBseCA9IHNjYWxlKGwsIDAuNSwgMSwgTUFYX0JHX0xJR0hUTkVTUywgcG9sZS5sKTtcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xuICAgICAgICAgICAgdmFyIGh4XzIgPSBwb2xlLmg7XG4gICAgICAgICAgICB2YXIgc3ggPSBwb2xlLnM7XG4gICAgICAgICAgICByZXR1cm4geyBoOiBoeF8yLCBzOiBzeCwgbDogbHgsIGE6IGEgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaHggPSBoO1xuICAgICAgICB2YXIgaXNZZWxsb3cgPSBoID4gNjAgJiYgaCA8IDE4MDtcbiAgICAgICAgaWYgKGlzWWVsbG93KSB7XG4gICAgICAgICAgICB2YXIgaXNDbG9zZXJUb0dyZWVuID0gaCA+IDEyMDtcbiAgICAgICAgICAgIGlmIChpc0Nsb3NlclRvR3JlZW4pIHtcbiAgICAgICAgICAgICAgICBoeCA9IHNjYWxlKGgsIDEyMCwgMTgwLCAxMzUsIDE4MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoeCA9IHNjYWxlKGgsIDYwLCAxMjAsIDYwLCAxMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoeCA+IDQwICYmIGh4IDwgODApIHtcbiAgICAgICAgICAgIGx4ICo9IDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaDogaHgsIHM6IHMsIGw6IGx4LCBhOiBhIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9sZSA9IGdldEJnUG9sZSh0aGVtZSk7XG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShyZ2IsIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHsgbW9kZTogMCB9KSwgbW9kaWZ5QmdIU0wsIHBvbGUpO1xuICAgIH1cbiAgICB2YXIgTUlOX0ZHX0xJR0hUTkVTUyA9IDAuNTU7XG4gICAgZnVuY3Rpb24gbW9kaWZ5Qmx1ZUZnSHVlKGh1ZSkge1xuICAgICAgICByZXR1cm4gc2NhbGUoaHVlLCAyMDUsIDI0NSwgMjA1LCAyMjApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtb2RpZnlGZ0hTTChfYSwgcG9sZSkge1xuICAgICAgICB2YXIgaCA9IF9hLmgsIHMgPSBfYS5zLCBsID0gX2EubCwgYSA9IF9hLmE7XG4gICAgICAgIHZhciBpc0xpZ2h0ID0gbCA+IDAuNTtcbiAgICAgICAgdmFyIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMjQ7XG4gICAgICAgIHZhciBpc0JsdWUgPSAhaXNOZXV0cmFsICYmIGggPiAyMDUgJiYgaCA8IDI0NTtcbiAgICAgICAgaWYgKGlzTGlnaHQpIHtcbiAgICAgICAgICAgIHZhciBseF8yID0gc2NhbGUobCwgMC41LCAxLCBNSU5fRkdfTElHSFRORVNTLCBwb2xlLmwpO1xuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xuICAgICAgICAgICAgICAgIHZhciBoeF8zID0gcG9sZS5oO1xuICAgICAgICAgICAgICAgIHZhciBzeCA9IHBvbGUucztcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoOiBoeF8zLCBzOiBzeCwgbDogbHhfMiwgYTogYSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGh4XzQgPSBoO1xuICAgICAgICAgICAgaWYgKGlzQmx1ZSkge1xuICAgICAgICAgICAgICAgIGh4XzQgPSBtb2RpZnlCbHVlRmdIdWUoaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoOiBoeF80LCBzOiBzLCBsOiBseF8yLCBhOiBhIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xuICAgICAgICAgICAgdmFyIGh4XzUgPSBwb2xlLmg7XG4gICAgICAgICAgICB2YXIgc3ggPSBwb2xlLnM7XG4gICAgICAgICAgICB2YXIgbHhfMyA9IHNjYWxlKGwsIDAsIDAuNSwgcG9sZS5sLCBNSU5fRkdfTElHSFRORVNTKTtcbiAgICAgICAgICAgIHJldHVybiB7IGg6IGh4XzUsIHM6IHN4LCBsOiBseF8zLCBhOiBhIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGh4ID0gaDtcbiAgICAgICAgdmFyIGx4O1xuICAgICAgICBpZiAoaXNCbHVlKSB7XG4gICAgICAgICAgICBoeCA9IG1vZGlmeUJsdWVGZ0h1ZShoKTtcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1hdGgubWluKDEsIE1JTl9GR19MSUdIVE5FU1MgKyAwLjA1KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBseCA9IHNjYWxlKGwsIDAsIDAuNSwgcG9sZS5sLCBNSU5fRkdfTElHSFRORVNTKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBoOiBoeCwgczogcywgbDogbHgsIGE6IGEgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgdGhlbWUpIHtcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2xlID0gZ2V0RmdQb2xlKHRoZW1lKTtcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKHJnYiwgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwgeyBtb2RlOiAwIH0pLCBtb2RpZnlGZ0hTTCwgcG9sZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUJvcmRlckhTTChfYSwgcG9sZUZnLCBwb2xlQmcpIHtcbiAgICAgICAgdmFyIGggPSBfYS5oLCBzID0gX2EucywgbCA9IF9hLmwsIGEgPSBfYS5hO1xuICAgICAgICB2YXIgaXNEYXJrID0gbCA8IDAuNTtcbiAgICAgICAgdmFyIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMjQ7XG4gICAgICAgIHZhciBoeCA9IGg7XG4gICAgICAgIHZhciBzeCA9IHM7XG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcbiAgICAgICAgICAgIGlmIChpc0RhcmspIHtcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUJnLnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGx4ID0gc2NhbGUobCwgMCwgMSwgMC41LCAwLjIpO1xuICAgICAgICByZXR1cm4geyBoOiBoeCwgczogc3gsIGw6IGx4LCBhOiBhIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUJvcmRlckNvbG9yKHJnYiwgdGhlbWUpIHtcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xuICAgICAgICB2YXIgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKHJnYiwgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwgeyBtb2RlOiAwIH0pLCBtb2RpZnlCb3JkZXJIU0wsIHBvbGVGZywgcG9sZUJnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW9kaWZ5U2hhZG93Q29sb3IocmdiLCBmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCBmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dFN0eWxlKGNvbmZpZykge1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgbGluZXMucHVzaCgnKjpub3QocHJlLCBwcmUgKiwgY29kZSwgLmZhciwgLmZhLCAuZ2x5cGhpY29uLCBbY2xhc3MqPVwidmpzLVwiXSwgLmZhYiwgLmZhLWdpdGh1YiwgLmZhcywgLm1hdGVyaWFsLWljb25zLCAuaWNvZm9udCwgLnR5cGNuLCBtdSwgW2NsYXNzKj1cIm11LVwiXSwgLmdseXBoaWNvbiwgLmljb24pIHsnKTtcbiAgICAgICAgaWYgKGNvbmZpZy51c2VGb250ICYmIGNvbmZpZy5mb250RmFtaWx5KSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiICBmb250LWZhbWlseTogXCIuY29uY2F0KGNvbmZpZy5mb250RmFtaWx5LCBcIiAhaW1wb3J0YW50O1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy50ZXh0U3Ryb2tlID4gMCkge1xuICAgICAgICAgICAgbGluZXMucHVzaChcIiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogXCIuY29uY2F0KGNvbmZpZy50ZXh0U3Ryb2tlLCBcInB4ICFpbXBvcnRhbnQ7XCIpKTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIgIHRleHQtc3Ryb2tlOiBcIi5jb25jYXQoY29uZmlnLnRleHRTdHJva2UsIFwicHggIWltcG9ydGFudDtcIikpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIHZhciBGaWx0ZXJNb2RlO1xuICAgIChmdW5jdGlvbiAoRmlsdGVyTW9kZSkge1xuICAgICAgICBGaWx0ZXJNb2RlW0ZpbHRlck1vZGVbXCJsaWdodFwiXSA9IDBdID0gXCJsaWdodFwiO1xuICAgICAgICBGaWx0ZXJNb2RlW0ZpbHRlck1vZGVbXCJkYXJrXCJdID0gMV0gPSBcImRhcmtcIjtcbiAgICB9KShGaWx0ZXJNb2RlIHx8IChGaWx0ZXJNb2RlID0ge30pKTtcbiAgICBmdW5jdGlvbiBnZXRDU1NGaWx0ZXJWYWx1ZShjb25maWcpIHtcbiAgICAgICAgdmFyIGZpbHRlcnMgPSBbXTtcbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlID09PSBGaWx0ZXJNb2RlLmRhcmspIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCgnaW52ZXJ0KDEwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuYnJpZ2h0bmVzcyAhPT0gMTAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJicmlnaHRuZXNzKFwiLmNvbmNhdChjb25maWcuYnJpZ2h0bmVzcywgXCIlKVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5jb250cmFzdCAhPT0gMTAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJjb250cmFzdChcIi5jb25jYXQoY29uZmlnLmNvbnRyYXN0LCBcIiUpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLmdyYXlzY2FsZSAhPT0gMCkge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiZ3JheXNjYWxlKFwiLmNvbmNhdChjb25maWcuZ3JheXNjYWxlLCBcIiUpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLnNlcGlhICE9PSAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJzZXBpYShcIi5jb25jYXQoY29uZmlnLnNlcGlhLCBcIiUpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b1NWR01hdHJpeChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5zbGljZSgwLCA0KS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnRvRml4ZWQoMyk7IH0pLmpvaW4oJyAnKTsgfSkuam9pbignICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdGaWx0ZXJNYXRyaXhWYWx1ZShjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRvU1ZHTWF0cml4KGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpKTtcbiAgICB9XG5cbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHJlc29sdmVycyQxID0gbmV3IE1hcCgpO1xuICAgIHZhciByZWplY3RvcnMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gYmdGZXRjaChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICsrY291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVycyQxLnNldChpZCwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3RvcnMuc2V0KGlkLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBNZXNzYWdlVHlwZS5DU19GRVRDSCwgZGF0YTogcmVxdWVzdCwgaWQ6IGlkIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBfYS50eXBlLCBkYXRhID0gX2EuZGF0YSwgZXJyb3IgPSBfYS5lcnJvciwgaWQgPSBfYS5pZDtcbiAgICAgICAgaWYgKHR5cGUgPT09IE1lc3NhZ2VUeXBlLkJHX0ZFVENIX1JFU1BPTlNFKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHJlc29sdmVycyQxLmdldChpZCk7XG4gICAgICAgICAgICB2YXIgcmVqZWN0ID0gcmVqZWN0b3JzLmdldChpZCk7XG4gICAgICAgICAgICByZXNvbHZlcnMkMS5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcmVqZWN0b3JzLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIEFzeW5jUXVldWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBBc3luY1F1ZXVlKCkge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MDtcbiAgICAgICAgfVxuICAgICAgICBBc3luY1F1ZXVlLnByb3RvdHlwZS5hZGRUb1F1ZXVlID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFF1ZXVlKCk7XG4gICAgICAgIH07XG4gICAgICAgIEFzeW5jUXVldWUucHJvdG90eXBlLnN0b3BRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVySWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVySWQpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIH07XG4gICAgICAgIEFzeW5jUXVldWUucHJvdG90eXBlLnN0YXJ0UXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZXJJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB2YXIgY2I7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChjYiA9IF90aGlzLnF1ZXVlLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPj0gX3RoaXMuZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEFzeW5jUXVldWU7XG4gICAgfSgpKTtcblxuICAgIHZhciBpbWFnZU1hbmFnZXIgPSBuZXcgQXN5bmNRdWV1ZSgpO1xuICAgIGZ1bmN0aW9uIGdldEltYWdlRGV0YWlscyh1cmwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVVJMLCBlcnJvcl8xLCBpbWFnZV8xLCBlcnJvcl8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkwgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBnZXRJbWFnZURhdGFVUkwodXJsKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkwgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFs0LCA2LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdXJsVG9JbWFnZShkYXRhVVJMKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZU1hbmFnZXIuYWRkVG9RdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfX2Fzc2lnbih7IHNyYzogdXJsLCBkYXRhVVJMOiBkYXRhVVJMLCB3aWR0aDogaW1hZ2VfMS5uYXR1cmFsV2lkdGgsIGhlaWdodDogaW1hZ2VfMS5uYXR1cmFsSGVpZ2h0IH0sIGFuYWx5emVJbWFnZShpbWFnZV8xKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTsgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJbWFnZURhdGFVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWRVUkw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwYXJzZWRVUkwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW4pKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBsb2FkQXNEYXRhVVJMKHVybCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQsIGJnRmV0Y2goeyB1cmw6IHVybCwgcmVzcG9uc2VUeXBlOiAnZGF0YS11cmwnIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cmxUb0ltYWdlKHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoaW1hZ2UpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdChcIlVuYWJsZSB0byBsb2FkIGltYWdlIFwiLmNvbmNhdCh1cmwpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UID0gMzIgKiAzMjtcbiAgICB2YXIgY2FudmFzO1xuICAgIHZhciBjb250ZXh0O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIG1heFdpZHRoID0gTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UO1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTUFYX0FOQUxJWkVfUElYRUxTX0NPVU5UO1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FudmFzKCkge1xuICAgICAgICBjYW52YXMgPSBudWxsO1xuICAgICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIE1BWF9JTUFHRV9TSVpFID0gNSAqIDEwMjQgKiAxMDI0O1xuICAgIGZ1bmN0aW9uIGFuYWx5emVJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICAgICAgY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGlmIChuYXR1cmFsSGVpZ2h0ID09PSAwIHx8IG5hdHVyYWxXaWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgbG9nV2FybihcImxvZ1dhcm4oSW1hZ2UgaXMgZW1wdHkgXCIuY29uY2F0KGltYWdlLmN1cnJlbnRTcmMsIFwiKVwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l6ZSA9IG5hdHVyYWxXaWR0aCAqIG5hdHVyYWxIZWlnaHQgKiA0O1xuICAgICAgICBpZiAoc2l6ZSA+IE1BWF9JTUFHRV9TSVpFKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzRGFyazogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNMaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNMYXJnZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNUb29MYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hdHVyYWxQaXhlbHNDb3VudCA9IG5hdHVyYWxXaWR0aCAqIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHZhciBrID0gTWF0aC5taW4oMSwgTWF0aC5zcXJ0KE1BWF9BTkFMSVpFX1BJWEVMU19DT1VOVCAvIG5hdHVyYWxQaXhlbHNDb3VudCkpO1xuICAgICAgICB2YXIgd2lkdGggPSBNYXRoLmNlaWwobmF0dXJhbFdpZHRoICogayk7XG4gICAgICAgIHZhciBoZWlnaHQgPSBNYXRoLmNlaWwobmF0dXJhbEhlaWdodCAqIGspO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHZhciBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdmFyIGQgPSBpbWFnZURhdGEuZGF0YTtcbiAgICAgICAgdmFyIFRSQU5TUEFSRU5UX0FMUEhBX1RIUkVTSE9MRCA9IDAuMDU7XG4gICAgICAgIHZhciBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQgPSAwLjQ7XG4gICAgICAgIHZhciBMSUdIVF9MSUdIVE5FU1NfVEhSRVNIT0xEID0gMC43O1xuICAgICAgICB2YXIgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCA9IDA7XG4gICAgICAgIHZhciBkYXJrUGl4ZWxzQ291bnQgPSAwO1xuICAgICAgICB2YXIgbGlnaHRQaXhlbHNDb3VudCA9IDA7XG4gICAgICAgIHZhciBpLCB4LCB5O1xuICAgICAgICB2YXIgciwgZywgYiwgYTtcbiAgICAgICAgdmFyIGw7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpID0gNCAqICh5ICogd2lkdGggKyB4KTtcbiAgICAgICAgICAgICAgICByID0gZFtpICsgMF07XG4gICAgICAgICAgICAgICAgZyA9IGRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGIgPSBkW2kgKyAyXTtcbiAgICAgICAgICAgICAgICBhID0gZFtpICsgM107XG4gICAgICAgICAgICAgICAgaWYgKGEgLyAyNTUgPCBUUkFOU1BBUkVOVF9BTFBIQV9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGdldFNSR0JMaWdodG5lc3MociwgZywgYik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsIDwgREFSS19MSUdIVE5FU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrUGl4ZWxzQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobCA+IExJR0hUX0xJR0hUTkVTU19USFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0UGl4ZWxzQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQaXhlbHNDb3VudCA9IHdpZHRoICogaGVpZ2h0O1xuICAgICAgICB2YXIgb3BhcXVlUGl4ZWxzQ291bnQgPSB0b3RhbFBpeGVsc0NvdW50IC0gdHJhbnNwYXJlbnRQaXhlbHNDb3VudDtcbiAgICAgICAgdmFyIERBUktfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xuICAgICAgICB2YXIgTElHSFRfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xuICAgICAgICB2YXIgVFJBTlNQQVJFTlRfSU1BR0VfVEhSRVNIT0xEID0gMC4xO1xuICAgICAgICB2YXIgTEFSR0VfSU1BR0VfUElYRUxTX0NPVU5UID0gODAwICogNjAwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNEYXJrOiAoKGRhcmtQaXhlbHNDb3VudCAvIG9wYXF1ZVBpeGVsc0NvdW50KSA+PSBEQVJLX0lNQUdFX1RIUkVTSE9MRCksXG4gICAgICAgICAgICBpc0xpZ2h0OiAoKGxpZ2h0UGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCkgPj0gTElHSFRfSU1BR0VfVEhSRVNIT0xEKSxcbiAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQ6ICgodHJhbnNwYXJlbnRQaXhlbHNDb3VudCAvIHRvdGFsUGl4ZWxzQ291bnQpID49IFRSQU5TUEFSRU5UX0lNQUdFX1RIUkVTSE9MRCksXG4gICAgICAgICAgICBpc0xhcmdlOiAobmF0dXJhbFBpeGVsc0NvdW50ID49IExBUkdFX0lNQUdFX1BJWEVMU19DT1VOVCksXG4gICAgICAgICAgICBpc1Rvb0xhcmdlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJbWFnZURhdGFVUkwoX2EsIHRoZW1lKSB7XG4gICAgICAgIHZhciBkYXRhVVJMID0gX2EuZGF0YVVSTCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICB2YXIgbWF0cml4ID0gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUodGhlbWUpO1xuICAgICAgICB2YXIgc3ZnID0gW1xuICAgICAgICAgICAgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHdpZHRoPVxcXCJcIi5jb25jYXQod2lkdGgsIFwiXFxcIiBoZWlnaHQ9XFxcIlwiKS5jb25jYXQoaGVpZ2h0LCBcIlxcXCI+XCIpLFxuICAgICAgICAgICAgJzxkZWZzPicsXG4gICAgICAgICAgICAnPGZpbHRlciBpZD1cImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyXCI+JyxcbiAgICAgICAgICAgIFwiPGZlQ29sb3JNYXRyaXggdHlwZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIlwiLmNvbmNhdChtYXRyaXgsIFwiXFxcIiAvPlwiKSxcbiAgICAgICAgICAgICc8L2ZpbHRlcj4nLFxuICAgICAgICAgICAgJzwvZGVmcz4nLFxuICAgICAgICAgICAgXCI8aW1hZ2Ugd2lkdGg9XFxcIlwiLmNvbmNhdCh3aWR0aCwgXCJcXFwiIGhlaWdodD1cXFwiXCIpLmNvbmNhdChoZWlnaHQsIFwiXFxcIiBmaWx0ZXI9XFxcInVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpXFxcIiB4bGluazpocmVmPVxcXCJcIikuY29uY2F0KGRhdGFVUkwsIFwiXFxcIiAvPlwiKSxcbiAgICAgICAgICAgICc8L3N2Zz4nLFxuICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiLmNvbmNhdChidG9hKHN2ZykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCkge1xuICAgICAgICBpbWFnZU1hbmFnZXIgJiYgaW1hZ2VNYW5hZ2VyLnN0b3BRdWV1ZSgpO1xuICAgICAgICByZW1vdmVDYW52YXMoKTtcbiAgICB9XG5cbiAgICB2YXIgZ3JhZGllbnRMZW5ndGggPSAnZ3JhZGllbnQnLmxlbmd0aDtcbiAgICB2YXIgY29uaWNHcmFkaWVudCA9ICdjb25pYy0nO1xuICAgIHZhciBjb25pY0dyYWRpZW50TGVuZ3RoID0gY29uaWNHcmFkaWVudC5sZW5ndGg7XG4gICAgdmFyIHJhZGlhbEdyYWRpZW50ID0gJ3JhZGlhbC0nO1xuICAgIHZhciBsaW5lYXJHcmFkaWVudCA9ICdsaW5lYXItJztcbiAgICBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSBjb25pY0dyYWRpZW50Lmxlbmd0aDtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHlwZUdyYWRpZW50O1xuICAgICAgICAgICAgW2xpbmVhckdyYWRpZW50LCByYWRpYWxHcmFkaWVudCwgY29uaWNHcmFkaWVudF0uZmluZChmdW5jdGlvbiAocG9zc2libGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NzaWJsZUdyYWRpZW50ID0gdmFsdWUuc3Vic3RyaW5nKGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVHcmFkaWVudCA9PT0gcG9zc2libGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2xpY2UoaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMTAsIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDEpID09PSAncmVwZWF0aW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IFwicmVwZWF0aW5nLVwiLmNvbmNhdChwb3NzaWJsZVR5cGUsIFwiZ3JhZGllbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2xpY2UoaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gOCwgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMSkgPT09ICctd2Via2l0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IFwiLXdlYmtpdC1cIi5jb25jYXQocG9zc2libGVUeXBlLCBcImdyYWRpZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gXCJcIi5jb25jYXQocG9zc2libGVUeXBlLCBcImdyYWRpZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdHlwZUdyYWRpZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IGdldFBhcmVudGhlc2VzUmFuZ2UodmFsdWUsIGluZGV4ICsgZ3JhZGllbnRMZW5ndGgpLCBzdGFydCA9IF9hLnN0YXJ0LCBlbmQgPSBfYS5lbmQ7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5zdWJzdHJpbmcoc3RhcnQgKyAxLCBlbmQgLSAxKTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmQgKyAxICsgY29uaWNHcmFkaWVudExlbmd0aDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQ6IHR5cGVHcmFkaWVudCxcbiAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2gsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB0eXBlR3JhZGllbnQubGVuZ3RoICsgMixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXggLSB0eXBlR3JhZGllbnQubGVuZ3RoICsgZ3JhZGllbnRMZW5ndGgsXG4gICAgICAgICAgICAgICAgaGFzQ29tbWE6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKChpbmRleCA9IHZhbHVlLmluZGV4T2YoJ2dyYWRpZW50Jywgc3RhcnRJbmRleCkpICE9PSAtMSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKCk7XG4gICAgICAgICAgICBpZiAoc3RhdGVfMSA9PT0gXCJicmVha1wiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLmhhc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eShydWxlU3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bGVTdHlsZSAmJiBydWxlU3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShwcm9wZXJ0eSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24ocHJvcGVydHksIHZhbHVlLCBydWxlLCB2YXJpYWJsZXNTdG9yZSwgaWdub3JlSW1hZ2VTZWxlY3RvcnMsIGlzQ2FuY2VsbGVkKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKCctLScpKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRWYXJpYWJsZU1vZGlmaWVyKHZhcmlhYmxlc1N0b3JlLCBwcm9wZXJ0eSwgdmFsdWUsIHJ1bGUsIGlnbm9yZUltYWdlU2VsZWN0b3JzLCBpc0NhbmNlbGxlZCk7XG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBtb2RpZmllciwgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksIHNvdXJjZVZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCd2YXIoJykpIHtcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldFZhcmlhYmxlRGVwZW5kYW50TW9kaWZpZXIodmFyaWFibGVzU3RvcmUsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBtb2RpZmllciwgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksIHNvdXJjZVZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnY29sb3Itc2NoZW1lJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHByb3BlcnR5LmluY2x1ZGVzKCdjb2xvcicpICYmIHByb3BlcnR5ICE9PSAnLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3QnKSB8fFxuICAgICAgICAgICAgcHJvcGVydHkgPT09ICdmaWxsJyB8fFxuICAgICAgICAgICAgcHJvcGVydHkgPT09ICdzdHJva2UnIHx8XG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gJ3N0b3AtY29sb3InKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBnZXRDb2xvck1vZGlmaWVyKHByb3BlcnR5LCB2YWx1ZSwgcnVsZSk7XG4gICAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBtb2RpZmllciwgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksIHNvdXJjZVZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnYmFja2dyb3VuZC1pbWFnZScgfHwgcHJvcGVydHkgPT09ICdsaXN0LXN0eWxlLWltYWdlJykge1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKHZhbHVlLCBydWxlLCBpZ25vcmVJbWFnZVNlbGVjdG9ycywgaXNDYW5jZWxsZWQpO1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvcGVydHk6IHByb3BlcnR5LCB2YWx1ZTogbW9kaWZpZXIsIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLCBzb3VyY2VWYWx1ZTogdmFsdWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eS5pbmNsdWRlcygnc2hhZG93JykpIHtcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGdldFNoYWRvd01vZGlmaWVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHByb3BlcnR5OiBwcm9wZXJ0eSwgdmFsdWU6IG1vZGlmaWVyLCBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSwgc291cmNlVmFsdWU6IHZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGpvaW5TZWxlY3RvcnMoKSB7XG4gICAgICAgIHZhciBzZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHNlbGVjdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUodGhlbWUsIGlzSUZyYW1lLCBzdHlsZVN5c3RlbUNvbnRyb2xzKSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xuICAgICAgICBpZiAoIWlzSUZyYW1lKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKCdodG1sIHsnKTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KG1vZGlmeUJhY2tncm91bmRDb2xvcih7IHI6IDI1NSwgZzogMjU1LCBiOiAyNTUgfSwgdGhlbWUpLCBcIiAhaW1wb3J0YW50O1wiKSk7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKCd9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKCdodG1sIHsnKTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIgICAgY29sb3Itc2NoZW1lOiBcIi5jb25jYXQodGhlbWUubW9kZSA9PT0gMSA/ICdkYXJrJyA6ICdkYXJrIGxpZ2h0JywgXCIgIWltcG9ydGFudDtcIikpO1xuICAgICAgICAgICAgbGluZXMucHVzaCgnfScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiZ1NlbGVjdG9ycyA9IGpvaW5TZWxlY3RvcnMoaXNJRnJhbWUgPyAnJyA6ICdodG1sLCBib2R5Jywgc3R5bGVTeXN0ZW1Db250cm9scyA/ICdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uLCBkaWFsb2cnIDogJycpO1xuICAgICAgICBpZiAoYmdTZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJcIi5jb25jYXQoYmdTZWxlY3RvcnMsIFwiIHtcIikpO1xuICAgICAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQobW9kaWZ5QmFja2dyb3VuZENvbG9yKHsgcjogMjU1LCBnOiAyNTUsIGI6IDI1NSB9LCB0aGVtZSksIFwiO1wiKSk7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKCd9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbGluZXMucHVzaChcIlwiLmNvbmNhdChqb2luU2VsZWN0b3JzKCdodG1sLCBib2R5Jywgc3R5bGVTeXN0ZW1Db250cm9scyA/ICdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uJyA6ICcnKSwgXCIge1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYm9yZGVyLWNvbG9yOiBcIi5jb25jYXQobW9kaWZ5Qm9yZGVyQ29sb3IoeyByOiA3NiwgZzogNzYsIGI6IDc2IH0sIHRoZW1lKSwgXCI7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBjb2xvcjogXCIuY29uY2F0KG1vZGlmeUZvcmVncm91bmRDb2xvcih7IHI6IDAsIGc6IDAsIGI6IDAgfSwgdGhlbWUpLCBcIjtcIikpO1xuICAgICAgICBsaW5lcy5wdXNoKCd9Jyk7XG4gICAgICAgIGxpbmVzLnB1c2goJ2EgeycpO1xuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGNvbG9yOiBcIi5jb25jYXQobW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHsgcjogMCwgZzogNjQsIGI6IDI1NSB9LCB0aGVtZSksIFwiO1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgbGluZXMucHVzaCgndGFibGUgeycpO1xuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJvcmRlci1jb2xvcjogXCIuY29uY2F0KG1vZGlmeUJvcmRlckNvbG9yKHsgcjogMTI4LCBnOiAxMjgsIGI6IDEyOCB9LCB0aGVtZSksIFwiO1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgbGluZXMucHVzaCgnOjpwbGFjZWhvbGRlciB7Jyk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgY29sb3I6IFwiLmNvbmNhdChtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoeyByOiAxNjksIGc6IDE2OSwgYjogMTY5IH0sIHRoZW1lKSwgXCI7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaCgnfScpO1xuICAgICAgICBsaW5lcy5wdXNoKCdpbnB1dDotd2Via2l0LWF1dG9maWxsLCcpO1xuICAgICAgICBsaW5lcy5wdXNoKCd0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLCcpO1xuICAgICAgICBsaW5lcy5wdXNoKCdzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7Jyk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KG1vZGlmeUJhY2tncm91bmRDb2xvcih7IHI6IDI1MCwgZzogMjU1LCBiOiAxODkgfSwgdGhlbWUpLCBcIiAhaW1wb3J0YW50O1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgY29sb3I6IFwiLmNvbmNhdChtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoeyByOiAwLCBnOiAwLCBiOiAwIH0sIHRoZW1lKSwgXCIgIWltcG9ydGFudDtcIikpO1xuICAgICAgICBsaW5lcy5wdXNoKCd9Jyk7XG4gICAgICAgIGlmICh0aGVtZS5zY3JvbGxiYXJDb2xvcikge1xuICAgICAgICAgICAgbGluZXMucHVzaChnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoZW1lLnNlbGVjdGlvbkNvbG9yKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGdldE1vZGlmaWVkU2VsZWN0aW9uU3R5bGUodGhlbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGlvbkNvbG9yKHRoZW1lKSB7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb247XG4gICAgICAgIHZhciBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb247XG4gICAgICAgIGlmICh0aGVtZS5zZWxlY3Rpb25Db2xvciA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoeyByOiAwLCBnOiA5NiwgYjogMjEyIH0sIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGVtZSksIHsgZ3JheXNjYWxlOiAwIH0pKTtcbiAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IG1vZGlmeUZvcmVncm91bmRDb2xvcih7IHI6IDI1NSwgZzogMjU1LCBiOiAyNTUgfSwgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoZW1lKSwgeyBncmF5c2NhbGU6IDAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodGhlbWUuc2VsZWN0aW9uQ29sb3IpO1xuICAgICAgICAgICAgdmFyIGhzbCA9IHJnYlRvSFNMKHJnYik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSB0aGVtZS5zZWxlY3Rpb25Db2xvcjtcbiAgICAgICAgICAgIGlmIChoc2wubCA8IDAuNSkge1xuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9ICcjRkZGJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9ICcjMDAwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb246IGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiwgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uOiBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRTZWxlY3Rpb25TdHlsZSh0aGVtZSkge1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgdmFyIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IgPSBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSk7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZmllZFNlbGVjdGlvbkNvbG9yLmJhY2tncm91bmRDb2xvclNlbGVjdGlvbjtcbiAgICAgICAgdmFyIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uO1xuICAgICAgICBbJzo6c2VsZWN0aW9uJywgJzo6LW1vei1zZWxlY3Rpb24nXS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJcIi5jb25jYXQoc2VsZWN0aW9uLCBcIiB7XCIpKTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiwgXCIgIWltcG9ydGFudDtcIikpO1xuICAgICAgICAgICAgbGluZXMucHVzaChcIiAgICBjb2xvcjogXCIuY29uY2F0KGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiwgXCIgIWltcG9ydGFudDtcIikpO1xuICAgICAgICAgICAgbGluZXMucHVzaCgnfScpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xuICAgICAgICB2YXIgY29sb3JUcmFjaztcbiAgICAgICAgdmFyIGNvbG9ySWNvbnM7XG4gICAgICAgIHZhciBjb2xvclRodW1iO1xuICAgICAgICB2YXIgY29sb3JUaHVtYkhvdmVyO1xuICAgICAgICB2YXIgY29sb3JUaHVtYkFjdGl2ZTtcbiAgICAgICAgdmFyIGNvbG9yQ29ybmVyO1xuICAgICAgICBpZiAodGhlbWUuc2Nyb2xsYmFyQ29sb3IgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgY29sb3JUcmFjayA9IG1vZGlmeUJhY2tncm91bmRDb2xvcih7IHI6IDI0MSwgZzogMjQxLCBiOiAyNDEgfSwgdGhlbWUpO1xuICAgICAgICAgICAgY29sb3JJY29ucyA9IG1vZGlmeUZvcmVncm91bmRDb2xvcih7IHI6IDk2LCBnOiA5NiwgYjogOTYgfSwgdGhlbWUpO1xuICAgICAgICAgICAgY29sb3JUaHVtYiA9IG1vZGlmeUJhY2tncm91bmRDb2xvcih7IHI6IDE3NiwgZzogMTc2LCBiOiAxNzYgfSwgdGhlbWUpO1xuICAgICAgICAgICAgY29sb3JUaHVtYkhvdmVyID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHsgcjogMTQ0LCBnOiAxNDQsIGI6IDE0NCB9LCB0aGVtZSk7XG4gICAgICAgICAgICBjb2xvclRodW1iQWN0aXZlID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHsgcjogOTYsIGc6IDk2LCBiOiA5NiB9LCB0aGVtZSk7XG4gICAgICAgICAgICBjb2xvckNvcm5lciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcih7IHI6IDI1NSwgZzogMjU1LCBiOiAyNTUgfSwgdGhlbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodGhlbWUuc2Nyb2xsYmFyQ29sb3IpO1xuICAgICAgICAgICAgdmFyIGhzbF8xID0gcmdiVG9IU0wocmdiKTtcbiAgICAgICAgICAgIHZhciBpc0xpZ2h0ID0gaHNsXzEubCA+IDAuNTtcbiAgICAgICAgICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGxpZ2h0ZXIpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaHNsXzEpLCB7IGw6IGNsYW1wKGhzbF8xLmwgKyBsaWdodGVyLCAwLCAxKSB9KSk7IH07XG4gICAgICAgICAgICB2YXIgZGFya2VuID0gZnVuY3Rpb24gKGRhcmtlcikgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBoc2xfMSksIHsgbDogY2xhbXAoaHNsXzEubCAtIGRhcmtlciwgMCwgMSkgfSkpOyB9O1xuICAgICAgICAgICAgY29sb3JUcmFjayA9IGhzbFRvU3RyaW5nKGRhcmtlbigwLjQpKTtcbiAgICAgICAgICAgIGNvbG9ySWNvbnMgPSBoc2xUb1N0cmluZyhpc0xpZ2h0ID8gZGFya2VuKDAuNCkgOiBsaWdodGVuKDAuNCkpO1xuICAgICAgICAgICAgY29sb3JUaHVtYiA9IGhzbFRvU3RyaW5nKGhzbF8xKTtcbiAgICAgICAgICAgIGNvbG9yVGh1bWJIb3ZlciA9IGhzbFRvU3RyaW5nKGxpZ2h0ZW4oMC4xKSk7XG4gICAgICAgICAgICBjb2xvclRodW1iQWN0aXZlID0gaHNsVG9TdHJpbmcobGlnaHRlbigwLjIpKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5lcy5wdXNoKCc6Oi13ZWJraXQtc2Nyb2xsYmFyIHsnKTtcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoY29sb3JUcmFjaywgXCI7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBjb2xvcjogXCIuY29uY2F0KGNvbG9ySWNvbnMsIFwiO1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgbGluZXMucHVzaCgnOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7Jyk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVGh1bWIsIFwiO1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgbGluZXMucHVzaCgnOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7Jyk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVGh1bWJIb3ZlciwgXCI7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaCgnfScpO1xuICAgICAgICBsaW5lcy5wdXNoKCc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7Jyk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yVGh1bWJBY3RpdmUsIFwiO1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgbGluZXMucHVzaCgnOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIgeycpO1xuICAgICAgICBsaW5lcy5wdXNoKFwiICAgIGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvckNvcm5lciwgXCI7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaCgnfScpO1xuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKCcqIHsnKTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIgICAgc2Nyb2xsYmFyLWNvbG9yOiBcIi5jb25jYXQoY29sb3JUaHVtYiwgXCIgXCIpLmNvbmNhdChjb2xvclRyYWNrLCBcIjtcIikpO1xuICAgICAgICAgICAgbGluZXMucHVzaCgnfScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKGZpbHRlciwgX2EpIHtcbiAgICAgICAgdmFyIHN0cmljdCA9IF9hLnN0cmljdDtcbiAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgIHZhciBpc01pY3Jvc29mdCA9IFsnbWljcm9zb2Z0LmNvbScsICdkb2NzLm1pY3Jvc29mdC5jb20nXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIGxpbmVzLnB1c2goXCJodG1sLCBib2R5LCBcIi5jb25jYXQoc3RyaWN0ID8gXCJib2R5IDpub3QoaWZyYW1lKVwiLmNvbmNhdChpc01pY3Jvc29mdCA/ICc6bm90KGRpdltzdHlsZV49XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0Oi1cIl0nIDogJycpIDogJ2JvZHkgPiA6bm90KGlmcmFtZSknLCBcIiB7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQobW9kaWZ5QmFja2dyb3VuZENvbG9yKHsgcjogMjU1LCBnOiAyNTUsIGI6IDI1NSB9LCBmaWx0ZXIpLCBcIiAhaW1wb3J0YW50O1wiKSk7XG4gICAgICAgIGxpbmVzLnB1c2goXCIgICAgYm9yZGVyLWNvbG9yOiBcIi5jb25jYXQobW9kaWZ5Qm9yZGVyQ29sb3IoeyByOiA2NCwgZzogNjQsIGI6IDY0IH0sIGZpbHRlciksIFwiICFpbXBvcnRhbnQ7XCIpKTtcbiAgICAgICAgbGluZXMucHVzaChcIiAgICBjb2xvcjogXCIuY29uY2F0KG1vZGlmeUZvcmVncm91bmRDb2xvcih7IHI6IDAsIGc6IDAsIGI6IDAgfSwgZmlsdGVyKSwgXCIgIWltcG9ydGFudDtcIikpO1xuICAgICAgICBsaW5lcy5wdXNoKCd9Jyk7XG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgdmFyIHVucGFyc2FibGVDb2xvcnMgPSBuZXcgU2V0KFtcbiAgICAgICAgJ2luaGVyaXQnLFxuICAgICAgICAndHJhbnNwYXJlbnQnLFxuICAgICAgICAnaW5pdGlhbCcsXG4gICAgICAgICdjdXJyZW50Y29sb3InLFxuICAgICAgICAnbm9uZScsXG4gICAgICAgICd1bnNldCcsXG4gICAgXSk7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JNb2RpZmllcihwcm9wLCB2YWx1ZSwgcnVsZSkge1xuICAgICAgICBpZiAodW5wYXJzYWJsZUNvbG9ycy5oYXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh2YWx1ZSk7XG4gICAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcC5pbmNsdWRlcygnYmFja2dyb3VuZCcpKSB7XG4gICAgICAgICAgICBpZiAoKHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICYmIHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICE9PSAnbm9uZScpIHx8XG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFzayAmJiAhcnVsZS5zdHlsZS53ZWJraXRNYXNrLnN0YXJ0c1dpdGgoJ25vbmUnKSkgfHxcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5tYXNrICYmIHJ1bGUuc3R5bGUubWFzayAhPT0gJ25vbmUnKSB8fFxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hc2staW1hZ2UnKSAmJiBydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hc2staW1hZ2UnKSAhPT0gJ25vbmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7IHJldHVybiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCBmaWx0ZXIpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHsgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIGZpbHRlcik7IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3AuaW5jbHVkZXMoJ2JvcmRlcicpIHx8IHByb3AuaW5jbHVkZXMoJ291dGxpbmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHsgcmV0dXJuIG1vZGlmeUJvcmRlckNvbG9yKHJnYiwgZmlsdGVyKTsgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikgeyByZXR1cm4gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgZmlsdGVyKTsgfTtcbiAgICB9XG4gICAgdmFyIGltYWdlRGV0YWlsc0NhY2hlID0gbmV3IE1hcCgpO1xuICAgIHZhciBhd2FpdGluZ0ZvckltYWdlTG9hZGluZyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbWFnZShzZWxlY3RvclRleHQsIHNlbGVjdG9ycykge1xuICAgICAgICBpZiAoIXNlbGVjdG9yVGV4dCB8fCBzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzID09PSAnKic7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnVsZVNlbGVjdG9ycyA9IHNlbGVjdG9yVGV4dC5zcGxpdCgvLFxccyovZyk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBpZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG4gICAgICAgICAgICBpZiAocnVsZVNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzID09PSBpZ25vcmVkU2VsZWN0b3I7IH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJnSW1hZ2VNb2RpZmllcih2YWx1ZSwgcnVsZSwgaWdub3JlSW1hZ2VTZWxlY3RvcnMsIGlzQ2FuY2VsbGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZ3JhZGllbnRzID0gcGFyc2VHcmFkaWVudCh2YWx1ZSk7XG4gICAgICAgICAgICB2YXIgdXJscyA9IGdldE1hdGNoZXMoY3NzVVJMUmVnZXgsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh1cmxzLmxlbmd0aCA9PT0gMCAmJiBncmFkaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGdldEluZGljZXMgPSBmdW5jdGlvbiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMubWFwKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB2YWx1ZUluZGV4ICsgbWF0Y2gubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBtYXRjaDogbWF0Y2gsIGluZGV4OiB2YWx1ZUluZGV4IH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1hdGNoZXNfMSA9IGdyYWRpZW50cy5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChfX2Fzc2lnbih7IHR5cGU6ICdncmFkaWVudCcgfSwgaSkpOyB9KVxuICAgICAgICAgICAgICAgIC5jb25jYXQoZ2V0SW5kaWNlcyh1cmxzKS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChfX2Fzc2lnbih7IHR5cGU6ICd1cmwnLCBvZmZzZXQ6IDAgfSwgaSkpOyB9KSlcbiAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pbmRleCA+IGIuaW5kZXggPyAxIDogLTE7IH0pO1xuICAgICAgICAgICAgdmFyIGdldEdyYWRpZW50TW9kaWZpZXJfMSA9IGZ1bmN0aW9uIChncmFkaWVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlR3JhZGllbnQgPSBncmFkaWVudC50eXBlR3JhZGllbnQsIG1hdGNoID0gZ3JhZGllbnQubWF0Y2gsIGhhc0NvbW1hID0gZ3JhZGllbnQuaGFzQ29tbWE7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzUmVnZXggPSAvKFteXFwoXFwpLF0rKFxcKFteXFwoXFwpXSooXFwoW15cXChcXCldKlxcKSpbXlxcKFxcKV0qKT9cXCkpPyhbXlxcKFxcKSwgXXwoICg/IWNhbGMpKSkqKSw/L2c7XG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yU3RvcFJlZ2V4ID0gL14oZnJvbXxjb2xvci1zdG9wfHRvKVxcKChbXlxcKFxcKV0qPyxcXHMqKT8oLio/KVxcKSQvO1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGdldE1hdGNoZXMocGFydHNSZWdleCwgbWF0Y2gsIDEpLm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikgeyByZXR1cm4gbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIGZpbHRlcik7IH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlID0gcGFydC5sYXN0SW5kZXhPZignICcpO1xuICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQuc3Vic3RyaW5nKDAsIHNwYWNlKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7IHJldHVybiBcIlwiLmNvbmNhdChtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgZmlsdGVyKSwgXCIgXCIpLmNvbmNhdChwYXJ0LnN1YnN0cmluZyhzcGFjZSArIDEpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JTdG9wTWF0Y2ggPSBwYXJ0Lm1hdGNoKGNvbG9yU3RvcFJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yU3RvcE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yU3RvcE1hdGNoWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikgeyByZXR1cm4gXCJcIi5jb25jYXQoY29sb3JTdG9wTWF0Y2hbMV0sIFwiKFwiKS5jb25jYXQoY29sb3JTdG9wTWF0Y2hbMl0gPyBcIlwiLmNvbmNhdChjb2xvclN0b3BNYXRjaFsyXSwgXCIsIFwiKSA6ICcnKS5jb25jYXQobW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIGZpbHRlciksIFwiKVwiKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFydDsgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodHlwZUdyYWRpZW50LCBcIihcIikuY29uY2F0KHBhcnRzLm1hcChmdW5jdGlvbiAobW9kaWZ5KSB7IHJldHVybiBtb2RpZnkoZmlsdGVyKTsgfSkuam9pbignLCAnKSwgXCIpXCIpLmNvbmNhdChoYXNDb21tYSA/ICcsICcgOiAnJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0VVJMTW9kaWZpZXJfMSA9IGZ1bmN0aW9uICh1cmxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlSW1hZ2UocnVsZS5zZWxlY3RvclRleHQsIGlnbm9yZUltYWdlU2VsZWN0b3JzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IGdldENTU1VSTFZhbHVlKHVybFZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNVUkxFbXB0eSA9IHVybC5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudFN0eWxlU2hlZXQgPSBydWxlLnBhcmVudFN0eWxlU2hlZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2VVUkwgPSAocGFyZW50U3R5bGVTaGVldCAmJiBwYXJlbnRTdHlsZVNoZWV0LmhyZWYpID9cbiAgICAgICAgICAgICAgICAgICAgZ2V0Q1NTQmFzZUJhdGgocGFyZW50U3R5bGVTaGVldC5ocmVmKSA6XG4gICAgICAgICAgICAgICAgICAgICgoX2EgPSBwYXJlbnRTdHlsZVNoZWV0Lm93bmVyTm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJhc2VVUkkpIHx8IGxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgICAgICAgICB1cmwgPSBnZXRBYnNvbHV0ZVVSTChiYXNlVVJMLCB1cmwpO1xuICAgICAgICAgICAgICAgIHZhciBhYnNvbHV0ZVZhbHVlID0gXCJ1cmwoXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIilcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmaWx0ZXIpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRGV0YWlscywgYXdhaXRlcnNfMSwgZXJyXzEsIGJnSW1hZ2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVVJMRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgXCJ1cmwoJycpXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VEZXRhaWxzQ2FjaGUuaGFzKHVybCkpIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IGltYWdlRGV0YWlsc0NhY2hlLmdldCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA2LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5oYXModXJsKSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRlcnNfMSA9IGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmdldCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBhd2FpdGVyc18xLnB1c2gocmVzb2x2ZSk7IH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZURldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLnNldCh1cmwsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBnZXRJbWFnZURldGFpbHModXJsKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlsc0NhY2hlLnNldCh1cmwsIGltYWdlRGV0YWlscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmdldCh1cmwpLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUoaW1hZ2VEZXRhaWxzKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW5jZWxsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1dhcm4oZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmdldCh1cmwpLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUobnVsbCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZGVsZXRlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhYnNvbHV0ZVZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnSW1hZ2VWYWx1ZSA9IGdldEJnSW1hZ2VWYWx1ZV8xKGltYWdlRGV0YWlscywgZmlsdGVyKSB8fCBhYnNvbHV0ZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGJnSW1hZ2VWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pOyB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRCZ0ltYWdlVmFsdWVfMSA9IGZ1bmN0aW9uIChpbWFnZURldGFpbHMsIGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHZhciBpc0RhcmsgPSBpbWFnZURldGFpbHMuaXNEYXJrLCBpc0xpZ2h0ID0gaW1hZ2VEZXRhaWxzLmlzTGlnaHQsIGlzVHJhbnNwYXJlbnQgPSBpbWFnZURldGFpbHMuaXNUcmFuc3BhcmVudCwgaXNMYXJnZSA9IGltYWdlRGV0YWlscy5pc0xhcmdlLCBpc1Rvb0xhcmdlID0gaW1hZ2VEZXRhaWxzLmlzVG9vTGFyZ2UsIHdpZHRoID0gaW1hZ2VEZXRhaWxzLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzVG9vTGFyZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJ1cmwoXFxcIlwiLmNvbmNhdChpbWFnZURldGFpbHMuc3JjLCBcIlxcXCIpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0RhcmsgJiYgaXNUcmFuc3BhcmVudCAmJiBmaWx0ZXIubW9kZSA9PT0gMSAmJiAhaXNMYXJnZSAmJiB3aWR0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcIkludmVydGluZyBkYXJrIGltYWdlIFwiLmNvbmNhdChpbWFnZURldGFpbHMuc3JjKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnRlZCA9IGdldEZpbHRlcmVkSW1hZ2VEYXRhVVJMKGltYWdlRGV0YWlscywgX19hc3NpZ24oX19hc3NpZ24oe30sIGZpbHRlciksIHsgc2VwaWE6IGNsYW1wKGZpbHRlci5zZXBpYSArIDEwLCAwLCAxMDApIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJ1cmwoXFxcIlwiLmNvbmNhdChpbnZlcnRlZCwgXCJcXFwiKVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNMaWdodCAmJiAhaXNUcmFuc3BhcmVudCAmJiBmaWx0ZXIubW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcIkRpbW1pbmcgbGlnaHQgaW1hZ2UgXCIuY29uY2F0KGltYWdlRGV0YWlscy5zcmMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaW1tZWQgPSBnZXRGaWx0ZXJlZEltYWdlRGF0YVVSTChpbWFnZURldGFpbHMsIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcInVybChcXFwiXCIuY29uY2F0KGRpbW1lZCwgXCJcXFwiKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWx0ZXIubW9kZSA9PT0gMCAmJiBpc0xpZ2h0ICYmICFpc0xhcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oXCJBcHBseWluZyBmaWx0ZXIgdG8gaW1hZ2UgXCIuY29uY2F0KGltYWdlRGV0YWlscy5zcmMpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0gZ2V0RmlsdGVyZWRJbWFnZURhdGFVUkwoaW1hZ2VEZXRhaWxzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmlsdGVyKSwgeyBicmlnaHRuZXNzOiBjbGFtcChmaWx0ZXIuYnJpZ2h0bmVzcyAtIDEwLCA1LCAyMDApLCBzZXBpYTogY2xhbXAoZmlsdGVyLnNlcGlhICsgMTAsIDAsIDEwMCkgfSkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcInVybChcXFwiXCIuY29uY2F0KGZpbHRlcmVkLCBcIlxcXCIpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbW9kaWZpZXJzXzEgPSBbXTtcbiAgICAgICAgICAgIHZhciBtYXRjaEluZGV4XzEgPSAwO1xuICAgICAgICAgICAgdmFyIHByZXZIYXNDb21tYV8xID0gZmFsc2U7XG4gICAgICAgICAgICBtYXRjaGVzXzEuZm9yRWFjaChmdW5jdGlvbiAoX2EsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IF9hLnR5cGUsIG1hdGNoID0gX2EubWF0Y2gsIGluZGV4ID0gX2EuaW5kZXgsIHR5cGVHcmFkaWVudCA9IF9hLnR5cGVHcmFkaWVudCwgaGFzQ29tbWEgPSBfYS5oYXNDb21tYSwgb2Zmc2V0ID0gX2Eub2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaFN0YXJ0ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeFN0YXJ0ID0gbWF0Y2hJbmRleF8xO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBtYXRjaC5sZW5ndGggKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgbWF0Y2hJbmRleF8xID0gbWF0Y2hFbmQ7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeFN0YXJ0ICE9PSBtYXRjaFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SGFzQ29tbWFfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJldHdlZW5WYWx1ZSA9IHZhbHVlLnN1YnN0cmluZyhwcmVmaXhTdGFydCwgbWF0Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJldHdlZW5WYWx1ZVswXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJldHdlZW5WYWx1ZSA9IGJldHdlZW5WYWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXR3ZWVuVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyc18xLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHByZWZpeFN0YXJ0LCBtYXRjaFN0YXJ0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldkhhc0NvbW1hXzEgPSBoYXNDb21tYSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChnZXRVUkxNb2RpZmllcl8xKG1hdGNoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdncmFkaWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChnZXRHcmFkaWVudE1vZGlmaWVyXzEoeyBtYXRjaDogbWF0Y2gsIGluZGV4OiBpbmRleCwgdHlwZUdyYWRpZW50OiB0eXBlR3JhZGllbnQsIGhhc0NvbW1hOiBoYXNDb21tYSwgb2Zmc2V0OiBvZmZzZXQgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gbWF0Y2hlc18xLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzXzEucHVzaChmdW5jdGlvbiAoKSB7IHJldHVybiB2YWx1ZS5zdWJzdHJpbmcobWF0Y2hFbmQpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBtb2RpZmllcnNfMS5maWx0ZXIoQm9vbGVhbikubWFwKGZ1bmN0aW9uIChtb2RpZnkpIHsgcmV0dXJuIG1vZGlmeShmaWx0ZXIpOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5zb21lKGZ1bmN0aW9uIChyKSB7IHJldHVybiByIGluc3RhbmNlb2YgUHJvbWlzZTsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKGFzeW5jUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jUmVzdWx0cy5maWx0ZXIoQm9vbGVhbikuam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRSZXN1bHQgPSByZXN1bHRzLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIGlmIChjb21iaW5lZFJlc3VsdC5lbmRzV2l0aCgnLCBpbml0aWFsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVzdWx0LnNsaWNlKDAsIC05KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVzdWx0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhfMSA9IDA7XG4gICAgICAgICAgICB2YXIgY29sb3JNYXRjaGVzXzEgPSBnZXRNYXRjaGVzKC8oXnxcXHMpKD8hY2FsYykoW2Etel0rXFwoLis/XFwpfCNbMC05YS1mXSt8W2Etel0rKSguKj8oaW5zZXR8b3V0c2V0KT8oJHwsKSkvaWcsIHZhbHVlLCAyKTtcbiAgICAgICAgICAgIHZhciBub3RQYXJzZWRfMSA9IDA7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZXJzXzIgPSBjb2xvck1hdGNoZXNfMS5tYXAoZnVuY3Rpb24gKG1hdGNoLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeEluZGV4ID0gaW5kZXhfMTtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4XzEpO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaEVuZCA9IG1hdGNoSW5kZXggKyBtYXRjaC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaW5kZXhfMSA9IG1hdGNoRW5kO1xuICAgICAgICAgICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJnYikge1xuICAgICAgICAgICAgICAgICAgICBub3RQYXJzZWRfMSsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHByZWZpeEluZGV4LCBtYXRjaEVuZCk7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7IHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZS5zdWJzdHJpbmcocHJlZml4SW5kZXgsIG1hdGNoSW5kZXgpKS5jb25jYXQobW9kaWZ5U2hhZG93Q29sb3IocmdiLCBmaWx0ZXIpKS5jb25jYXQoaSA9PT0gY29sb3JNYXRjaGVzXzEubGVuZ3RoIC0gMSA/IHZhbHVlLnN1YnN0cmluZyhtYXRjaEVuZCkgOiAnJyk7IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkID0gbW9kaWZpZXJzXzIubWFwKGZ1bmN0aW9uIChtb2RpZnkpIHsgcmV0dXJuIG1vZGlmeShmaWx0ZXIpOyB9KS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiBjb2xvck1hdGNoZXNfMS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHVucGFyc2VhYmxlTWF0Y2hlc0xlbmd0aDogbm90UGFyc2VkXzEsXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbW9kaWZpZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2hhZG93TW9kaWZpZXIodmFsdWUpIHtcbiAgICAgICAgdmFyIHNoYWRvd01vZGlmaWVyID0gZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YWx1ZSk7XG4gICAgICAgIGlmICghc2hhZG93TW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHsgcmV0dXJuIHNoYWRvd01vZGlmaWVyKHRoZW1lKS5yZXN1bHQ7IH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlTW9kaWZpZXIodmFyaWFibGVzU3RvcmUsIHByb3AsIHZhbHVlLCBydWxlLCBpZ25vcmVkSW1nU2VsZWN0b3JzLCBpc0NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZSh7XG4gICAgICAgICAgICB2YXJOYW1lOiBwcm9wLFxuICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgcnVsZTogcnVsZSxcbiAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnM6IGlnbm9yZWRJbWdTZWxlY3RvcnMsXG4gICAgICAgICAgICBpc0NhbmNlbGxlZDogaXNDYW5jZWxsZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZURlcGVuZGFudE1vZGlmaWVyKHZhcmlhYmxlc1N0b3JlLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJEZXBlbmRhbnQocHJvcCwgdmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhbk1vZGlmaWNhdGlvbkNhY2hlKCkge1xuICAgICAgICBjbGVhckNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUoKTtcbiAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgY2xlYW5JbWFnZVByb2Nlc3NpbmdDYWNoZSgpO1xuICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5jbGVhcigpO1xuICAgIH1cblxuICAgIHZhciBWQVJfVFlQRV9CR0NPTE9SID0gMSA8PCAwO1xuICAgIHZhciBWQVJfVFlQRV9URVhUQ09MT1IgPSAxIDw8IDE7XG4gICAgdmFyIFZBUl9UWVBFX0JPUkRFUkNPTE9SID0gMSA8PCAyO1xuICAgIHZhciBWQVJfVFlQRV9CR0lNRyA9IDEgPDwgMztcbiAgICB2YXIgVmFyaWFibGVzU3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBWYXJpYWJsZXNTdG9yZSgpIHtcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB0aGlzLnZhclJlZnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnNwbGljZSgwKTtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzLmNsZWFyKCk7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pc1ZhclR5cGUgPSBmdW5jdGlvbiAodmFyTmFtZSwgdHlwZU51bSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnZhclR5cGVzLmhhcyh2YXJOYW1lKSAmJlxuICAgICAgICAgICAgICAgICh0aGlzLnZhclR5cGVzLmdldCh2YXJOYW1lKSAmIHR5cGVOdW0pID4gMCk7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5hZGRSdWxlc0Zvck1hdGNoaW5nID0gZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUucHVzaChydWxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGFudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzID0gbmV3IE1hcCh0aGlzLnZhclR5cGVzKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJpYWJsZXMoKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFZhcmlhYmxlc0FuZFZhckRlcCh0aGlzLnJ1bGVzUXVldWUpO1xuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnNwbGljZSgwKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJEZXBlbmRhbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnZhclJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmcywgdikge1xuICAgICAgICAgICAgICAgIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudmFyVHlwZXMuaGFzKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHIsIF90aGlzLnZhclR5cGVzLmdldCh2KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMudW5rbm93bkJnVmFycy5oYXModikpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodik7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHYpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUiB8IFZBUl9UWVBFX1RFWFRDT0xPUiB8IFZBUl9UWVBFX0JPUkRFUkNPTE9SKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVuZGVmaW5lZFZhcnMuYWRkKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ29sb3IgPSBfdGhpcy5maW5kVmFyUmVmKHYsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc1ZhclR5cGUocmVmLCBWQVJfVFlQRV9URVhUQ09MT1IgfCBWQVJfVFlQRV9CT1JERVJDT0xPUikpO1xuICAgICAgICAgICAgICAgIH0pICE9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0NvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLml0YXJhdGVWYXJSZWZzKHYsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR0NPTE9SKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SIHwgVkFSX1RZUEVfQkdJTUcpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5kZWZpbmVkVmFycy5hZGQodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh2YXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5nZXRNb2RpZmllckZvclZhcmlhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhck5hbWUgPSBvcHRpb25zLnZhck5hbWUsIHNvdXJjZVZhbHVlID0gb3B0aW9ucy5zb3VyY2VWYWx1ZSwgcnVsZSA9IG9wdGlvbnMucnVsZSwgaWdub3JlZEltZ1NlbGVjdG9ycyA9IG9wdGlvbnMuaWdub3JlZEltZ1NlbGVjdG9ycywgaXNDYW5jZWxsZWQgPSBvcHRpb25zLmlzQ2FuY2VsbGVkO1xuICAgICAgICAgICAgICAgIHZhciBnZXREZWNsYXJhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZE1vZGlmaWVkVmFsdWUgPSBmdW5jdGlvbiAodHlwZU51bSwgdmFyTmFtZVdyYXBwZXIsIGNvbG9yTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuaXNWYXJUeXBlKHZhck5hbWUsIHR5cGVOdW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdmFyTmFtZVdyYXBwZXIodmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnNlcnRWYXJWYWx1ZXMoc291cmNlVmFsdWUsIF90aGlzLnVuc3RhYmxlVmFyVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlTnVtID09PSBWQVJfVFlQRV9CR0NPTE9SID8gJyNmZmZmZmYnIDogJyMwMDAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSBjb2xvck1vZGlmaWVyKHZhbHVlLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHNvdXJjZVZhbHVlLCBmdW5jdGlvbiAodikgeyByZXR1cm4gdmFyTmFtZVdyYXBwZXIodik7IH0sIGZ1bmN0aW9uIChmYWxsYmFjaykgeyByZXR1cm4gY29sb3JNb2RpZmllcihmYWxsYmFjaywgdGhlbWUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gY29sb3JNb2RpZmllcihzb3VyY2VWYWx1ZSwgdGhlbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFZBUl9UWVBFX0JHQ09MT1IsIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lLCB0cnlNb2RpZnlCZ0NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShWQVJfVFlQRV9URVhUQ09MT1IsIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUsIHRyeU1vZGlmeVRleHRDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoVkFSX1RZUEVfQk9SREVSQ09MT1IsIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZSwgdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHZhck5hbWUsIFZBUl9UWVBFX0JHSU1HKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gd3JhcEJnSW1nVmFyaWFibGVOYW1lKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBzb3VyY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHNvdXJjZVZhbHVlLCBmdW5jdGlvbiAodikgeyByZXR1cm4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodik7IH0sIGZ1bmN0aW9uIChmYWxsYmFjaykgeyByZXR1cm4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZ01vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKG1vZGlmaWVkVmFsdWUsIHJ1bGUsIGlnbm9yZWRJbWdTZWxlY3RvcnMsIGlzQ2FuY2VsbGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSB0eXBlb2YgYmdNb2RpZmllciA9PT0gJ2Z1bmN0aW9uJyA/IGJnTW9kaWZpZXIodGhlbWUpIDogYmdNb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAob25UeXBlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNzID0gZ2V0RGVjbGFyYXRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UoZGVjcyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKHZhck5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyh2YXJOYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBnZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlOiB7IGFkZExpc3RlbmVyOiBhZGRMaXN0ZW5lciwgcmVtb3ZlTGlzdGVuZXJzOiByZW1vdmVMaXN0ZW5lcnMgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50ID0gZnVuY3Rpb24gKHByb3BlcnR5LCBzb3VyY2VWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChzb3VyY2VWYWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzQmdfMSA9IHByb3BlcnR5LnN0YXJ0c1dpdGgoJ2JhY2tncm91bmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNUZXh0XzEgPSAocHJvcGVydHkgPT09ICdjb2xvcicgfHwgcHJvcGVydHkgPT09ICdjYXJldC1jb2xvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5zZXJ0VmFyVmFsdWVzKHNvdXJjZVZhbHVlLCBfdGhpcy51bnN0YWJsZVZhclZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaXNCZ18xID8gJyNmZmZmZmYnIDogJyMwMDAwMDAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllciA9IGlzQmdfMSA/IHRyeU1vZGlmeUJnQ29sb3IgOiBpc1RleHRfMSA/IHRyeU1vZGlmeVRleHRDb2xvciA6IHRyeU1vZGlmeUJvcmRlckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZXIodmFsdWUsIHRoZW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnYmFja2dyb3VuZC1jb2xvcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoc291cmNlVmFsdWUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KTsgfSwgZnVuY3Rpb24gKGZhbGxiYWNrKSB7IHJldHVybiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSk7IH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjb2xvcicgfHwgcHJvcGVydHkgPT09ICdjYXJldC1jb2xvcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoc291cmNlVmFsdWUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKHYpOyB9LCBmdW5jdGlvbiAoZmFsbGJhY2spIHsgcmV0dXJuIHRyeU1vZGlmeVRleHRDb2xvcihmYWxsYmFjaywgdGhlbWUpOyB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnYmFja2dyb3VuZCcgfHwgcHJvcGVydHkgPT09ICdiYWNrZ3JvdW5kLWltYWdlJyB8fCBwcm9wZXJ0eSA9PT0gJ2JveC1zaGFkb3cnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdW5rbm93blZhcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVSZXBsYWNlZCA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhzb3VyY2VWYWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0lNRykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93blZhcnMuYWRkKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGZhbGxiYWNrKSB7IHJldHVybiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnYm94LXNoYWRvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93TW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhcmlhYmxlUmVwbGFjZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFNoYWRvdyA9IHNoYWRvd01vZGlmaWVyKHRoZW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRTaGFkb3cudW5wYXJzZWFibGVNYXRjaGVzTGVuZ3RoICE9PSBtb2RpZmllZFNoYWRvdy5tYXRjaGVzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZFNoYWRvdy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlUmVwbGFjZWQ7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZCA9IG1vZGlmeSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5rbm93blZhcnMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdFVua25vd25WYXIgPSB1bmtub3duVmFycy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKGZpcnN0VW5rbm93blZhciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBtb2RpZnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKGZpcnN0VW5rbm93blZhciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcGVydHkuc3RhcnRzV2l0aCgnYm9yZGVyJykgfHwgcHJvcGVydHkuc3RhcnRzV2l0aCgnb3V0bGluZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHNvdXJjZVZhbHVlLCBmdW5jdGlvbiAodikgeyByZXR1cm4gd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHYpOyB9LCBmdW5jdGlvbiAoZmFsbGJhY2spIHsgcmV0dXJuIHRyeU1vZGlmeUJvcmRlckNvbG9yKGZhbGxiYWNrLCB0aGVtZSk7IH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UgPSBmdW5jdGlvbiAodmFyTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLnNldCh2YXJOYW1lLCBuZXcgU2V0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJvb3RTdG9yZSA9IHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuZ2V0KHZhck5hbWUpO1xuICAgICAgICAgICAgaWYgKCFyb290U3RvcmUuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIHJvb3RTdG9yZS5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyA9IGZ1bmN0aW9uICh2YXJOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5nZXQodmFyTmFtZSkuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNvbGxlY3RWYXJpYWJsZXNBbmRWYXJEZXAgPSBmdW5jdGlvbiAocnVsZUxpc3QpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBydWxlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSAmJiBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKHJ1bGUuc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJEZXBlbmRhbnQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmNvbGxlY3RSb290VmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLCBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaW5zcGVjdFZhcmlhYmxlID0gZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzLnNldCh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpICYmIGlzQ29uc3RydWN0ZWRDb2xvclZhcih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuYWRkKHZhck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmaW5lZFZhcnMuaGFzKHZhck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5hZGQodmFyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygndXJsKCcpIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoJ2xpbmVhci1ncmFkaWVudCgnKSB8fFxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKCdyYWRpYWwtZ3JhZGllbnQoJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodmFyTmFtZSwgVkFSX1RZUEVfQkdJTUcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUucmVzb2x2ZVZhcmlhYmxlVHlwZSA9IGZ1bmN0aW9uICh2YXJOYW1lLCB0eXBlTnVtKSB7XG4gICAgICAgICAgICB2YXIgaW5pdGlhbFR5cGUgPSB0aGlzLmluaXRpYWxWYXJUeXBlcy5nZXQodmFyTmFtZSkgfHwgMDtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHRoaXMudmFyVHlwZXMuZ2V0KHZhck5hbWUpIHx8IDA7XG4gICAgICAgICAgICB2YXIgbmV3VHlwZSA9IGN1cnJlbnRUeXBlIHwgdHlwZU51bTtcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuc2V0KHZhck5hbWUsIG5ld1R5cGUpO1xuICAgICAgICAgICAgaWYgKG5ld1R5cGUgIT09IGluaXRpYWxUeXBlIHx8IHRoaXMudW5kZWZpbmVkVmFycy5oYXModmFyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5hZGQodmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodmFyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHZhck5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuY29sbGVjdFJvb3RWYXJEZXBlbmRhbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLCBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnNwZWN0VmFyRGVwZW5kYW50KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pbnNwZWN0VmFyRGVwZW5kYW50ID0gZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy52YXJSZWZzLmhhcyhwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnZhclJlZnMuc2V0KHByb3BlcnR5LCBuZXcgU2V0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhclJlZnMuZ2V0KHByb3BlcnR5KS5hZGQocmVmKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnYmFja2dyb3VuZC1jb2xvcicgfHwgcHJvcGVydHkgPT09ICdib3gtc2hhZG93Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnY29sb3InIHx8IHByb3BlcnR5ID09PSAnY2FyZXQtY29sb3InKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfVEVYVENPTE9SKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKCdib3JkZXInKSB8fCBwcm9wZXJ0eS5zdGFydHNXaXRoKCdvdXRsaW5lJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCBmdW5jdGlvbiAodikgeyByZXR1cm4gX3RoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CT1JERVJDT0xPUik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdiYWNrZ3JvdW5kJyB8fCBwcm9wZXJ0eSA9PT0gJ2JhY2tncm91bmQtaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SIHwgVkFSX1RZUEVfQkdJTUcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmdDb2xvciA9IF90aGlzLmZpbmRWYXJSZWYodiwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNWYXJUeXBlKHJlZiwgVkFSX1RZUEVfVEVYVENPTE9SIHwgVkFSX1RZUEVfQk9SREVSQ09MT1IpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgIT0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXRhcmF0ZVZhclJlZnModiwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmdDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR0NPTE9SKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVua25vd25CZ1ZhcnMuYWRkKHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuaXRlcmF0ZVZhckRlcHMgPSBmdW5jdGlvbiAodmFsdWUsIGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgdmFyRGVwcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGl0ZXJhdGVWYXJEZXBlbmRlbmNpZXModmFsdWUsIGZ1bmN0aW9uICh2KSB7IHJldHVybiB2YXJEZXBzLmFkZCh2KTsgfSk7XG4gICAgICAgICAgICB2YXJEZXBzLmZvckVhY2goZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGl0ZXJhdG9yKHYpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVmFyaWFibGVzU3RvcmUucHJvdG90eXBlLmZpbmRWYXJSZWYgPSBmdW5jdGlvbiAodmFyTmFtZSwgaXRlcmF0b3IsIHN0YWNrKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIGlmIChzdGFjayA9PT0gdm9pZCAwKSB7IHN0YWNrID0gbmV3IFNldCgpOyB9XG4gICAgICAgICAgICBpZiAoc3RhY2suaGFzKHZhck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5hZGQodmFyTmFtZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFyTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhck5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVmcyA9IHRoaXMudmFyUmVmcy5nZXQodmFyTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXJlZnMgfHwgcmVmcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHJlZnNfMSA9IF9fdmFsdWVzKHJlZnMpLCByZWZzXzFfMSA9IHJlZnNfMS5uZXh0KCk7ICFyZWZzXzFfMS5kb25lOyByZWZzXzFfMSA9IHJlZnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZiA9IHJlZnNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmRWYXJSZWYocmVmLCBpdGVyYXRvciwgc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmc18xXzEgJiYgIXJlZnNfMV8xLmRvbmUgJiYgKF9hID0gcmVmc18xLnJldHVybikpIF9hLmNhbGwocmVmc18xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5pdGFyYXRlVmFyUmVmcyA9IGZ1bmN0aW9uICh2YXJOYW1lLCBpdGVyYXRvcikge1xuICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHZhck5hbWUsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihyZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBWYXJpYWJsZXNTdG9yZS5wcm90b3R5cGUuc2V0T25Sb290VmFyaWFibGVDaGFuZ2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub25Sb290VmFyaWFibGVEZWZpbmVkID0gY2FsbGJhY2s7XG4gICAgICAgIH07XG4gICAgICAgIFZhcmlhYmxlc1N0b3JlLnByb3RvdHlwZS5wdXRSb290VmFycyA9IGZ1bmN0aW9uIChzdHlsZUVsZW1lbnQsIHRoZW1lKSB7XG4gICAgICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBzdHlsZUVsZW1lbnQuc2hlZXQ7XG4gICAgICAgICAgICBpZiAoc2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfQkdDT0xPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQod3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLCB0cnlNb2RpZnlCZ0NvbG9yKHZhbHVlLCB0aGVtZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX1RFWFRDT0xPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQod3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksIHRyeU1vZGlmeVRleHRDb2xvcih2YWx1ZSwgdGhlbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9CT1JERVJDT0xPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQod3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSwgdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IodmFsdWUsIHRoZW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZShwcm9wZXJ0eSwgX3RoaXMub25Sb290VmFyaWFibGVEZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjc3NMaW5lcyA9IFtdO1xuICAgICAgICAgICAgY3NzTGluZXMucHVzaCgnOnJvb3QgeycpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkZWNsYXJhdGlvbnNfMSA9IF9fdmFsdWVzKGRlY2xhcmF0aW9ucyksIGRlY2xhcmF0aW9uc18xXzEgPSBkZWNsYXJhdGlvbnNfMS5uZXh0KCk7ICFkZWNsYXJhdGlvbnNfMV8xLmRvbmU7IGRlY2xhcmF0aW9uc18xXzEgPSBkZWNsYXJhdGlvbnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKGRlY2xhcmF0aW9uc18xXzEudmFsdWUsIDIpLCBwcm9wZXJ0eSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwiICAgIFwiLmNvbmNhdChwcm9wZXJ0eSwgXCI6IFwiKS5jb25jYXQodmFsdWUsIFwiO1wiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvbnNfMV8xICYmICFkZWNsYXJhdGlvbnNfMV8xLmRvbmUgJiYgKF9hID0gZGVjbGFyYXRpb25zXzEucmV0dXJuKSkgX2EuY2FsbChkZWNsYXJhdGlvbnNfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goJ30nKTtcbiAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gY3NzTGluZXMuam9pbignXFxuJyk7XG4gICAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKGNzc1RleHQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVmFyaWFibGVzU3RvcmU7XG4gICAgfSgpKTtcbiAgICB2YXIgdmFyaWFibGVzU3RvcmUgPSBuZXcgVmFyaWFibGVzU3RvcmUoKTtcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZVJhbmdlKGlucHV0LCBzZWFyY2hTdGFydCkge1xuICAgICAgICBpZiAoc2VhcmNoU3RhcnQgPT09IHZvaWQgMCkgeyBzZWFyY2hTdGFydCA9IDA7IH1cbiAgICAgICAgdmFyIHN0YXJ0ID0gaW5wdXQuaW5kZXhPZigndmFyKCcsIHNlYXJjaFN0YXJ0KTtcbiAgICAgICAgaWYgKHN0YXJ0ID49IDApIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoaW5wdXQsIHN0YXJ0ICsgMyk7XG4gICAgICAgICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogcmFuZ2UuZW5kIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KSB7XG4gICAgICAgIHZhciByYW5nZXMgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgcmFuZ2U7XG4gICAgICAgIHdoaWxlICgocmFuZ2UgPSBnZXRWYXJpYWJsZVJhbmdlKGlucHV0LCBpKSkpIHtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHJhbmdlLnN0YXJ0LCBlbmQgPSByYW5nZS5lbmQ7XG4gICAgICAgICAgICByYW5nZXMucHVzaCh7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQsIHZhbHVlOiBpbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgfSk7XG4gICAgICAgICAgICBpID0gcmFuZ2UuZW5kICsgMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2VzO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyhpbnB1dCwgcmVwbGFjZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KTtcbiAgICAgICAgdmFyIG1hdGNoZXNDb3VudCA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICBpZiAobWF0Y2hlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB2YXIgcmVwbGFjZW1lbnRzID0gbWF0Y2hlcy5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIHJlcGxhY2VyKG0udmFsdWUpOyB9KTtcbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIHBhcnRzLnB1c2goaW5wdXQuc3Vic3RyaW5nKDAsIG1hdGNoZXNbMF0uc3RhcnQpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcGFydHMucHVzaChyZXBsYWNlbWVudHNbaV0pO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbWF0Y2hlc1tpXS5lbmQ7XG4gICAgICAgICAgICB2YXIgZW5kID0gaSA8IG1hdGNoZXNDb3VudCAtIDEgPyBtYXRjaGVzW2kgKyAxXS5zdGFydCA6IGlucHV0TGVuZ3RoO1xuICAgICAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpIHtcbiAgICAgICAgdmFyIGNvbW1hSW5kZXggPSBtYXRjaC5pbmRleE9mKCcsJyk7XG4gICAgICAgIHZhciBuYW1lO1xuICAgICAgICB2YXIgZmFsbGJhY2s7XG4gICAgICAgIGlmIChjb21tYUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIG5hbWUgPSBtYXRjaC5zdWJzdHJpbmcoNCwgY29tbWFJbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgZmFsbGJhY2sgPSBtYXRjaC5zdWJzdHJpbmcoY29tbWFJbmRleCArIDEsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBtYXRjaC5zdWJzdHJpbmcoNCwgbWF0Y2gubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgICAgICAgZmFsbGJhY2sgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBmYWxsYmFjazogZmFsbGJhY2sgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHZhbHVlLCBuYW1lUmVwbGFjZXIsIGZhbGxiYWNrUmVwbGFjZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoUmVwbGFjZXIgPSBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKSwgbmFtZSA9IF9hLm5hbWUsIGZhbGxiYWNrID0gX2EuZmFsbGJhY2s7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9IG5hbWVSZXBsYWNlcihuYW1lKTtcbiAgICAgICAgICAgIGlmICghZmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2YXIoXCIuY29uY2F0KG5ld05hbWUsIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdGYWxsYmFjaztcbiAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChmYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhmYWxsYmFjaywgbmFtZVJlcGxhY2VyLCBmYWxsYmFja1JlcGxhY2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZhbGxiYWNrUmVwbGFjZXIpIHtcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IGZhbGxiYWNrUmVwbGFjZXIoZmFsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSBmYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcInZhcihcIi5jb25jYXQobmV3TmFtZSwgXCIsIFwiKS5jb25jYXQobmV3RmFsbGJhY2ssIFwiKVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKHZhbHVlLCBtYXRjaFJlcGxhY2VyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXRlcmF0ZVZhckRlcGVuZGVuY2llcyh2YWx1ZSwgaXRlcmF0b3IpIHtcbiAgICAgICAgcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHZhbHVlLCBmdW5jdGlvbiAodmFyTmFtZSkge1xuICAgICAgICAgICAgaXRlcmF0b3IodmFyTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFyTmFtZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiLS1kYXJrcmVhZGVyLWJnXCIuY29uY2F0KG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiLS1kYXJrcmVhZGVyLXRleHRcIi5jb25jYXQobmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIi0tZGFya3JlYWRlci1ib3JkZXJcIi5jb25jYXQobmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIi0tZGFya3JlYWRlci1iZ2ltZ1wiLmNvbmNhdChuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYXJpYWJsZShwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gcHJvcGVydHkuc3RhcnRzV2l0aCgnLS0nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYXJEZXBlbmRhbnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKCd2YXIoJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQ29uc3RydWN0ZWRDb2xvclZhcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goL15cXHMqKHJnYnxoc2wpYT9cXCgvKTtcbiAgICB9XG4gICAgdmFyIHJhd1ZhbHVlUmVnZXggPSAvXlxcZHsxLDN9LCA/XFxkezEsM30sID9cXGR7MSwzfSQvO1xuICAgIGZ1bmN0aW9uIHBhcnNlUmF3VmFsdWUoY29sb3IpIHtcbiAgICAgICAgaWYgKHJhd1ZhbHVlUmVnZXgudGVzdChjb2xvcikpIHtcbiAgICAgICAgICAgIHZhciBzcGxpdHRlZCA9IGNvbG9yLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0SW5SR0JfMSA9ICdyZ2IoJztcbiAgICAgICAgICAgIHNwbGl0dGVkLmZvckVhY2goZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdEluUkdCXzEgKz0gXCJcIi5jb25jYXQobnVtYmVyLnRyaW0oKSwgXCIsIFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzdWx0SW5SR0JfMSA9IHJlc3VsdEluUkdCXzEuc3Vic3RyaW5nKDAsIHJlc3VsdEluUkdCXzEubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICByZXN1bHRJblJHQl8xICs9ICcpJztcbiAgICAgICAgICAgIHJldHVybiB7IGlzUmF3OiB0cnVlLCBjb2xvcjogcmVzdWx0SW5SR0JfMSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGlzUmF3OiBmYWxzZSwgY29sb3I6IGNvbG9yIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5RnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIF9hID0gcGFyc2VSYXdWYWx1ZShjb2xvciksIGlzUmF3ID0gX2EuaXNSYXcsIG5ld0NvbG9yID0gX2EuY29sb3I7XG4gICAgICAgIHZhciByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG5ld0NvbG9yKTtcbiAgICAgICAgaWYgKHJnYikge1xuICAgICAgICAgICAgdmFyIG91dHB1dENvbG9yID0gbW9kaWZ5RnVuY3Rpb24ocmdiLCB0aGVtZSk7XG4gICAgICAgICAgICBpZiAoaXNSYXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0SW5SR0IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG91dHB1dENvbG9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0SW5SR0IgPyBcIlwiLmNvbmNhdChvdXRwdXRJblJHQi5yLCBcIiwgXCIpLmNvbmNhdChvdXRwdXRJblJHQi5nLCBcIiwgXCIpLmNvbmNhdChvdXRwdXRJblJHQi5iKSA6IG91dHB1dENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdDb2xvcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5QmdDb2xvcihjb2xvciwgdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5QmFja2dyb3VuZENvbG9yKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5VGV4dENvbG9yKGNvbG9yLCB0aGVtZSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlUmF3VmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlCb3JkZXJDb2xvcihjb2xvciwgdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd1ZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5Qm9yZGVyQ29sb3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnNlcnRWYXJWYWx1ZXMoc291cmNlLCB2YXJWYWx1ZXMsIHN0YWNrKSB7XG4gICAgICAgIGlmIChzdGFjayA9PT0gdm9pZCAwKSB7IHN0YWNrID0gbmV3IFNldCgpOyB9XG4gICAgICAgIHZhciBjb250YWluc1VucmVzb2x2ZWRWYXIgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1hdGNoUmVwbGFjZXIgPSBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKSwgbmFtZSA9IF9hLm5hbWUsIGZhbGxiYWNrID0gX2EuZmFsbGJhY2s7XG4gICAgICAgICAgICBpZiAoc3RhY2suaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLmFkZChuYW1lKTtcbiAgICAgICAgICAgIHZhciB2YXJWYWx1ZSA9IHZhclZhbHVlcy5nZXQobmFtZSkgfHwgZmFsbGJhY2s7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0ZWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHZhclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhclZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGluc2VydFZhclZhbHVlcyh2YXJWYWx1ZSwgdmFyVmFsdWVzLCBzdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IHZhclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWluc1VucmVzb2x2ZWRWYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc2VydGVkO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVwbGFjZWQgPSByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyhzb3VyY2UsIG1hdGNoUmVwbGFjZXIpO1xuICAgICAgICBpZiAoY29udGFpbnNVbnJlc29sdmVkVmFyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVwbGFjZWQ7XG4gICAgfVxuXG4gICAgdmFyIG92ZXJyaWRlcyA9IHtcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB7XG4gICAgICAgICAgICBjdXN0b21Qcm9wOiAnLS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yJyxcbiAgICAgICAgICAgIGNzc1Byb3A6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgICAgIGRhdGFBdHRyOiAnZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiB7XG4gICAgICAgICAgICBjdXN0b21Qcm9wOiAnLS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlJyxcbiAgICAgICAgICAgIGNzc1Byb3A6ICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgICAgICAgICAgIGRhdGFBdHRyOiAnZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2JvcmRlci1jb2xvcic6IHtcbiAgICAgICAgICAgIGN1c3RvbVByb3A6ICctLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlcicsXG4gICAgICAgICAgICBjc3NQcm9wOiAnYm9yZGVyLWNvbG9yJyxcbiAgICAgICAgICAgIGRhdGFBdHRyOiAnZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXInLFxuICAgICAgICB9LFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1jb2xvcic6IHtcbiAgICAgICAgICAgIGN1c3RvbVByb3A6ICctLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b20nLFxuICAgICAgICAgICAgY3NzUHJvcDogJ2JvcmRlci1ib3R0b20tY29sb3InLFxuICAgICAgICAgICAgZGF0YUF0dHI6ICdkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b20nLFxuICAgICAgICB9LFxuICAgICAgICAnYm9yZGVyLWxlZnQtY29sb3InOiB7XG4gICAgICAgICAgICBjdXN0b21Qcm9wOiAnLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdCcsXG4gICAgICAgICAgICBjc3NQcm9wOiAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAgICAgICAgICAgZGF0YUF0dHI6ICdkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1sZWZ0JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2JvcmRlci1yaWdodC1jb2xvcic6IHtcbiAgICAgICAgICAgIGN1c3RvbVByb3A6ICctLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1yaWdodCcsXG4gICAgICAgICAgICBjc3NQcm9wOiAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgICAgICAgICAgIGRhdGFBdHRyOiAnZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItcmlnaHQnLFxuICAgICAgICB9LFxuICAgICAgICAnYm9yZGVyLXRvcC1jb2xvcic6IHtcbiAgICAgICAgICAgIGN1c3RvbVByb3A6ICctLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3AnLFxuICAgICAgICAgICAgY3NzUHJvcDogJ2JvcmRlci10b3AtY29sb3InLFxuICAgICAgICAgICAgZGF0YUF0dHI6ICdkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3AnLFxuICAgICAgICB9LFxuICAgICAgICAnYm94LXNoYWRvdyc6IHtcbiAgICAgICAgICAgIGN1c3RvbVByb3A6ICctLWRhcmtyZWFkZXItaW5saW5lLWJveHNoYWRvdycsXG4gICAgICAgICAgICBjc3NQcm9wOiAnYm94LXNoYWRvdycsXG4gICAgICAgICAgICBkYXRhQXR0cjogJ2RhdGEtZGFya3JlYWRlci1pbmxpbmUtYm94c2hhZG93JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2NvbG9yJzoge1xuICAgICAgICAgICAgY3VzdG9tUHJvcDogJy0tZGFya3JlYWRlci1pbmxpbmUtY29sb3InLFxuICAgICAgICAgICAgY3NzUHJvcDogJ2NvbG9yJyxcbiAgICAgICAgICAgIGRhdGFBdHRyOiAnZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcicsXG4gICAgICAgIH0sXG4gICAgICAgICdmaWxsJzoge1xuICAgICAgICAgICAgY3VzdG9tUHJvcDogJy0tZGFya3JlYWRlci1pbmxpbmUtZmlsbCcsXG4gICAgICAgICAgICBjc3NQcm9wOiAnZmlsbCcsXG4gICAgICAgICAgICBkYXRhQXR0cjogJ2RhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbCcsXG4gICAgICAgIH0sXG4gICAgICAgICdzdHJva2UnOiB7XG4gICAgICAgICAgICBjdXN0b21Qcm9wOiAnLS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2UnLFxuICAgICAgICAgICAgY3NzUHJvcDogJ3N0cm9rZScsXG4gICAgICAgICAgICBkYXRhQXR0cjogJ2RhdGEtZGFya3JlYWRlci1pbmxpbmUtc3Ryb2tlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ291dGxpbmUtY29sb3InOiB7XG4gICAgICAgICAgICBjdXN0b21Qcm9wOiAnLS1kYXJrcmVhZGVyLWlubGluZS1vdXRsaW5lJyxcbiAgICAgICAgICAgIGNzc1Byb3A6ICdvdXRsaW5lLWNvbG9yJyxcbiAgICAgICAgICAgIGRhdGFBdHRyOiAnZGF0YS1kYXJrcmVhZGVyLWlubGluZS1vdXRsaW5lJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3N0b3AtY29sb3InOiB7XG4gICAgICAgICAgICBjdXN0b21Qcm9wOiAnLS1kYXJrcmVhZGVyLWlubGluZS1zdG9wY29sb3InLFxuICAgICAgICAgICAgY3NzUHJvcDogJ3N0b3AtY29sb3InLFxuICAgICAgICAgICAgZGF0YUF0dHI6ICdkYXRhLWRhcmtyZWFkZXItaW5saW5lLXN0b3Bjb2xvcicsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICB2YXIgb3ZlcnJpZGVzTGlzdCA9IE9iamVjdC52YWx1ZXMob3ZlcnJpZGVzKTtcbiAgICB2YXIgbm9ybWFsaXplZFByb3BMaXN0ID0ge307XG4gICAgb3ZlcnJpZGVzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY3NzUHJvcCA9IF9hLmNzc1Byb3AsIGN1c3RvbVByb3AgPSBfYS5jdXN0b21Qcm9wO1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplZFByb3BMaXN0W2N1c3RvbVByb3BdID0gY3NzUHJvcDtcbiAgICB9KTtcbiAgICB2YXIgSU5MSU5FX1NUWUxFX0FUVFJTID0gWydzdHlsZScsICdmaWxsJywgJ3N0b3AtY29sb3InLCAnc3Ryb2tlJywgJ2JnY29sb3InLCAnY29sb3InXTtcbiAgICB2YXIgSU5MSU5FX1NUWUxFX1NFTEVDVE9SID0gSU5MSU5FX1NUWUxFX0FUVFJTLm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gXCJbXCIuY29uY2F0KGF0dHIsIFwiXVwiKTsgfSkuam9pbignLCAnKTtcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCkge1xuICAgICAgICByZXR1cm4gb3ZlcnJpZGVzTGlzdC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUF0dHIgPSBfYS5kYXRhQXR0ciwgY3VzdG9tUHJvcCA9IF9hLmN1c3RvbVByb3AsIGNzc1Byb3AgPSBfYS5jc3NQcm9wO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBcIltcIi5jb25jYXQoZGF0YUF0dHIsIFwiXSB7XCIpLFxuICAgICAgICAgICAgICAgIFwiICBcIi5jb25jYXQoY3NzUHJvcCwgXCI6IHZhcihcIikuY29uY2F0KGN1c3RvbVByb3AsIFwiKSAhaW1wb3J0YW50O1wiKSxcbiAgICAgICAgICAgICAgICAnfScsXG4gICAgICAgICAgICBdLmpvaW4oJ1xcbicpO1xuICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVFbGVtZW50cyhyb290KSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgRWxlbWVudCAmJiByb290Lm1hdGNoZXMoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgRWxlbWVudCB8fCAoaXNTaGFkb3dEb21TdXBwb3J0ZWQgJiYgcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHx8IHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgICAgICAgcHVzaChyZXN1bHRzLCByb290LnF1ZXJ5U2VsZWN0b3JBbGwoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHZhciB0cmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuICAgIHZhciBhdHRyT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIHdhdGNoRm9ySW5saW5lU3R5bGVzKGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcbiAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKGRvY3VtZW50LCBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKTtcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhob3N0LnNoYWRvd1Jvb3QsIGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKHJvb3QsIGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcbiAgICAgICAgaWYgKHRyZWVPYnNlcnZlcnMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICB0cmVlT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpc2NvdmVyZWROb2RlcyA9IG5ldyBXZWFrU2V0KCk7XG4gICAgICAgIGZ1bmN0aW9uIGRpc2NvdmVyTm9kZXMobm9kZSkge1xuICAgICAgICAgICAgZ2V0SW5saW5lU3R5bGVFbGVtZW50cyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKGVsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc2NvdmVyZWROb2Rlcy5hZGQoZWwpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZShlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzY292ZXJlZE5vZGVzLmFkZChub2RlKTtcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZChuLnNoYWRvd1Jvb3QpO1xuICAgICAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhuLnNoYWRvd1Jvb3QsIGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyZWVPYnNlcnZlciA9IGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCB7XG4gICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb25zID0gX2EuYWRkaXRpb25zO1xuICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhZGRlZCkgeyByZXR1cm4gZGlzY292ZXJOb2RlcyhhZGRlZCk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSHVnZU11dGF0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRpc2NvdmVyTm9kZXMocm9vdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdHJlZU9ic2VydmVycy5zZXQocm9vdCwgdHJlZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGF0dGVtcHRDb3VudCA9IDA7XG4gICAgICAgIHZhciBzdGFydCA9IG51bGw7XG4gICAgICAgIHZhciBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHsgc2Vjb25kczogMTAgfSk7XG4gICAgICAgIHZhciBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oeyBzZWNvbmRzOiAyIH0pO1xuICAgICAgICB2YXIgTUFYX0FUVEVNUFRTX0NPVU5UID0gNTA7XG4gICAgICAgIHZhciBjYWNoZSA9IFtdO1xuICAgICAgICB2YXIgdGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdmFyIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyA9IHRocm90dGxlKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgaWYgKElOTElORV9TVFlMRV9BVFRSUy5pbmNsdWRlcyhtLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZShtLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYXR0ck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLnB1c2guYXBwbHkoY2FjaGUsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChtdXRhdGlvbnMpLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dGVtcHRDb3VudCsrO1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXR0ZW1wdENvdW50ID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xuICAgICAgICAgICAgICAgIGlmIChub3cgLSBzdGFydCA8IEFUVEVNUFRTX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlQ2FjaGUgPSBjYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMoYXR0cmlidXRlQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBSRVRSWV9USU1FT1VUKTtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaC5hcHBseShjYWNoZSwgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKG11dGF0aW9ucyksIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XG4gICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhtdXRhdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXR0ck9ic2VydmVyLm9ic2VydmUocm9vdCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogSU5MSU5FX1NUWUxFX0FUVFJTLmNvbmNhdChvdmVycmlkZXNMaXN0Lm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUF0dHIgPSBfYS5kYXRhQXR0cjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUF0dHI7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgYXR0ck9ic2VydmVycy5zZXQocm9vdCwgYXR0ck9ic2VydmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCkge1xuICAgICAgICB0cmVlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uZGlzY29ubmVjdCgpOyB9KTtcbiAgICAgICAgYXR0ck9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLmRpc2Nvbm5lY3QoKTsgfSk7XG4gICAgICAgIHRyZWVPYnNlcnZlcnMuY2xlYXIoKTtcbiAgICAgICAgYXR0ck9ic2VydmVycy5jbGVhcigpO1xuICAgIH1cbiAgICB2YXIgaW5saW5lU3R5bGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdmFyIGZpbHRlclByb3BzID0gWydicmlnaHRuZXNzJywgJ2NvbnRyYXN0JywgJ2dyYXlzY2FsZScsICdzZXBpYScsICdtb2RlJ107XG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbCwgdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIElOTElORV9TVFlMRV9BVFRSU1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gXCJcIi5jb25jYXQoYXR0ciwgXCI9XFxcIlwiKS5jb25jYXQoZWwuZ2V0QXR0cmlidXRlKGF0dHIpLCBcIlxcXCJcIik7IH0pXG4gICAgICAgICAgICAuY29uY2F0KGZpbHRlclByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gXCJcIi5jb25jYXQocHJvcCwgXCI9XFxcIlwiKS5jb25jYXQodGhlbWVbcHJvcF0sIFwiXFxcIlwiKTsgfSkpXG4gICAgICAgICAgICAuam9pbignICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBzZWxlY3RvcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKGluZ25vcmVkU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvdmVycmlkZUlubGluZVN0eWxlKGVsZW1lbnQsIHRoZW1lLCBpZ25vcmVJbmxpbmVTZWxlY3RvcnMsIGlnbm9yZUltYWdlU2VsZWN0b3JzKSB7XG4gICAgICAgIHZhciBjYWNoZUtleSA9IGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpO1xuICAgICAgICBpZiAoY2FjaGVLZXkgPT09IGlubGluZVN0eWxlQ2FjaGUuZ2V0KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVuc2V0UHJvcHMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKG92ZXJyaWRlcykpO1xuICAgICAgICBmdW5jdGlvbiBzZXRDdXN0b21Qcm9wKHRhcmdldENTU1Byb3AsIG1vZGlmaWVyQ1NTUHJvcCwgY3NzVmFsKSB7XG4gICAgICAgICAgICB2YXIgaXNQcm9wZXJ0eVZhcmlhYmxlID0gdGFyZ2V0Q1NTUHJvcC5zdGFydHNXaXRoKCctLScpO1xuICAgICAgICAgICAgdmFyIF9hID0gaXNQcm9wZXJ0eVZhcmlhYmxlID8ge30gOiBvdmVycmlkZXNbdGFyZ2V0Q1NTUHJvcF0sIGN1c3RvbVByb3AgPSBfYS5jdXN0b21Qcm9wLCBkYXRhQXR0ciA9IF9hLmRhdGFBdHRyO1xuICAgICAgICAgICAgdmFyIG1vZCA9IGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihtb2RpZmllckNTU1Byb3AsIGNzc1ZhbCwgeyBzdHlsZTogZWxlbWVudC5zdHlsZSB9LCB2YXJpYWJsZXNTdG9yZSwgaWdub3JlSW1hZ2VTZWxlY3RvcnMsIG51bGwpO1xuICAgICAgICAgICAgaWYgKCFtb2QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBtb2QudmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSh0aGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVZhcmlhYmxlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHR5cGVkVmFsdWUuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IF9hLnByb3BlcnR5LCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAhKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkgJiYgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjdXN0b21Qcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShkYXRhQXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZGF0YUF0dHIsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5zZXRQcm9wcy5kZWxldGUodGFyZ2V0Q1NTUHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlnbm9yZUlubGluZVNlbGVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlSW5saW5lU3R5bGUoZWxlbWVudCwgaWdub3JlSW5saW5lU2VsZWN0b3JzKSkge1xuICAgICAgICAgICAgICAgIHVuc2V0UHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoY3NzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXNbY3NzUHJvcF0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2JnY29sb3InKSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2JnY29sb3InKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezN9JC9pKSB8fCB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIjXCIuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoJ2JhY2tncm91bmQtY29sb3InLCAnYmFja2dyb3VuZC1jb2xvcicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykgJiYgZWxlbWVudC5yZWwgIT09ICdtYXNrLWljb24nKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezN9JC9pKSB8fCB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIjXCIuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoJ2NvbG9yJywgJ2NvbG9yJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdmaWxsJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgU01BTExfU1ZHX0xJTUlUXzEgPSAzMjtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlXzEgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlU1ZHRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmcgPSAod2lkdGggPiBTTUFMTF9TVkdfTElNSVRfMSB8fCBoZWlnaHQgPiBTTUFMTF9TVkdfTElNSVRfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcCgnZmlsbCcsIGlzQmcgPyAnYmFja2dyb3VuZC1jb2xvcicgOiAnY29sb3InLCB2YWx1ZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZWFkeVN0YXRlQ29tcGxldGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNWR0VsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGhhbmRsZVNWR0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcCgnZmlsbCcsICdjb2xvcicsIHZhbHVlXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdzdG9wLWNvbG9yJykpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKCdzdG9wLWNvbG9yJywgJ2JhY2tncm91bmQtY29sb3InLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RvcC1jb2xvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3N0cm9rZScpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3Ryb2tlJyk7XG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKCdzdHJva2UnLCBlbGVtZW50IGluc3RhbmNlb2YgU1ZHTGluZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50ID8gJ2JvcmRlci1jb2xvcicgOiAnY29sb3InLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zdHlsZSAmJiBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKGVsZW1lbnQuc3R5bGUsIGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2JhY2tncm91bmQtaW1hZ2UnICYmIHZhbHVlLmluY2x1ZGVzKCd1cmwnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdmVycmlkZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpIHx8IChwcm9wZXJ0eS5zdGFydHNXaXRoKCctLScpICYmICFub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldKSkge1xuICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AocHJvcGVydHksIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcnJpZGVuUHJvcCA9IG5vcm1hbGl6ZWRQcm9wTGlzdFtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlblByb3AgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUob3ZlcnJpZGVuUHJvcCkgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKG92ZXJyaWRlblByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVuUHJvcCA9PT0gJ2JhY2tncm91bmQtY29sb3InICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdiZ2NvbG9yJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGUgJiYgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50ICYmIGVsZW1lbnQuc3R5bGUuZmlsbCkge1xuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcCgnZmlsbCcsICdjb2xvcicsIGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZmlsbCcpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JFYWNoKHVuc2V0UHJvcHMsIGZ1bmN0aW9uIChjc3NQcm9wKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXNbY3NzUHJvcF0uZGF0YUF0dHIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5saW5lU3R5bGVDYWNoZS5zZXQoZWxlbWVudCwgZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSkpO1xuICAgIH1cblxuICAgIHZhciBtZXRhVGhlbWVDb2xvck5hbWUgPSAndGhlbWUtY29sb3InO1xuICAgIHZhciBtZXRhVGhlbWVDb2xvclNlbGVjdG9yID0gXCJtZXRhW25hbWU9XFxcIlwiLmNvbmNhdChtZXRhVGhlbWVDb2xvck5hbWUsIFwiXFxcIl1cIik7XG4gICAgdmFyIHNyY01ldGFUaGVtZUNvbG9yID0gbnVsbDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKSB7XG4gICAgICAgIHNyY01ldGFUaGVtZUNvbG9yID0gc3JjTWV0YVRoZW1lQ29sb3IgfHwgbWV0YS5jb250ZW50O1xuICAgICAgICB2YXIgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHNyY01ldGFUaGVtZUNvbG9yKTtcbiAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1ldGEuY29udGVudCA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihjb2xvciwgdGhlbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VNZXRhVGhlbWVDb2xvcldoZW5BdmFpbGFibGUodGhlbWUpIHtcbiAgICAgICAgdmFyIG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IpO1xuICAgICAgICBpZiAobWV0YSkge1xuICAgICAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3IobWV0YSwgdGhlbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgbG9vcDogZm9yICh2YXIgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZGVkTm9kZXMgPSBtdXRhdGlvbnNbaV0uYWRkZWROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGFkZGVkTm9kZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCAmJiBub2RlLm5hbWUgPT09IG1ldGFUaGVtZUNvbG9yTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3Iobm9kZSwgdGhlbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzdG9yZU1ldGFUaGVtZUNvbG9yKCkge1xuICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWV0YVRoZW1lQ29sb3JTZWxlY3Rvcik7XG4gICAgICAgIGlmIChtZXRhICYmIHNyY01ldGFUaGVtZUNvbG9yKSB7XG4gICAgICAgICAgICBtZXRhLmNvbnRlbnQgPSBzcmNNZXRhVGhlbWVDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0aGVtZUNhY2hlS2V5cyA9IFtcbiAgICAgICAgJ21vZGUnLFxuICAgICAgICAnYnJpZ2h0bmVzcycsXG4gICAgICAgICdjb250cmFzdCcsXG4gICAgICAgICdncmF5c2NhbGUnLFxuICAgICAgICAnc2VwaWEnLFxuICAgICAgICAnZGFya1NjaGVtZUJhY2tncm91bmRDb2xvcicsXG4gICAgICAgICdkYXJrU2NoZW1lVGV4dENvbG9yJyxcbiAgICAgICAgJ2xpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yJyxcbiAgICAgICAgJ2xpZ2h0U2NoZW1lVGV4dENvbG9yJyxcbiAgICBdO1xuICAgIGZ1bmN0aW9uIGdldFRoZW1lS2V5KHRoZW1lKSB7XG4gICAgICAgIHZhciByZXN1bHRLZXkgPSAnJztcbiAgICAgICAgdGhlbWVDYWNoZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXN1bHRLZXkgKz0gXCJcIi5jb25jYXQoa2V5LCBcIjpcIikuY29uY2F0KHRoZW1lW2tleV0sIFwiO1wiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRLZXk7XG4gICAgfVxuICAgIHZhciBhc3luY1F1ZXVlID0gY3JlYXRlQXN5bmNUYXNrc1F1ZXVlKCk7XG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCkge1xuICAgICAgICB2YXIgcmVuZGVySWQgPSAwO1xuICAgICAgICB2YXIgcnVsZXNUZXh0Q2FjaGUgPSBuZXcgU2V0KCk7XG4gICAgICAgIHZhciBydWxlc01vZENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgdmFyVHlwZUNoYW5nZUNsZWFuZXJzID0gbmV3IFNldCgpO1xuICAgICAgICB2YXIgcHJldkZpbHRlcktleSA9IG51bGw7XG4gICAgICAgIHZhciBoYXNOb25Mb2FkZWRMaW5rID0gZmFsc2U7XG4gICAgICAgIHZhciB3YXNSZWJ1aWx0ID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZFJlYnVpbGRTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNOb25Mb2FkZWRMaW5rICYmICF3YXNSZWJ1aWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1vZGlmeVNoZWV0KG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBydWxlcyA9IG9wdGlvbnMuc291cmNlQ1NTUnVsZXM7XG4gICAgICAgICAgICB2YXIgdGhlbWUgPSBvcHRpb25zLnRoZW1lLCBpZ25vcmVJbWFnZUFuYWx5c2lzID0gb3B0aW9ucy5pZ25vcmVJbWFnZUFuYWx5c2lzLCBmb3JjZSA9IG9wdGlvbnMuZm9yY2UsIHByZXBhcmVTaGVldCA9IG9wdGlvbnMucHJlcGFyZVNoZWV0LCBpc0FzeW5jQ2FuY2VsbGVkID0gb3B0aW9ucy5pc0FzeW5jQ2FuY2VsbGVkO1xuICAgICAgICAgICAgdmFyIHJ1bGVzQ2hhbmdlZCA9IChydWxlc01vZENhY2hlLnNpemUgPT09IDApO1xuICAgICAgICAgICAgdmFyIG5vdEZvdW5kQ2FjaGVLZXlzID0gbmV3IFNldChydWxlc01vZENhY2hlLmtleXMoKSk7XG4gICAgICAgICAgICB2YXIgdGhlbWVLZXkgPSBnZXRUaGVtZUtleSh0aGVtZSk7XG4gICAgICAgICAgICB2YXIgdGhlbWVDaGFuZ2VkID0gKHRoZW1lS2V5ICE9PSBwcmV2RmlsdGVyS2V5KTtcbiAgICAgICAgICAgIGlmIChoYXNOb25Mb2FkZWRMaW5rKSB7XG4gICAgICAgICAgICAgICAgd2FzUmVidWlsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbW9kUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IHJ1bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dERpZmZlcnNGcm9tUHJldiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vdEZvdW5kQ2FjaGVLZXlzLmRlbGV0ZShjc3NUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5wYXJlbnRSdWxlIGluc3RhbmNlb2YgQ1NTTWVkaWFSdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQgKz0gXCI7XCIuY29uY2F0KHJ1bGUucGFyZW50UnVsZS5tZWRpYS5tZWRpYVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXJ1bGVzVGV4dENhY2hlLmhhcyhjc3NUZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBydWxlc1RleHRDYWNoZS5hZGQoY3NzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRleHREaWZmZXJzRnJvbVByZXYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGV4dERpZmZlcnNGcm9tUHJldikge1xuICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kUnVsZXMucHVzaChydWxlc01vZENhY2hlLmdldChjc3NUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1vZERlY3MgPSBbXTtcbiAgICAgICAgICAgICAgICBydWxlLnN0eWxlICYmIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMocnVsZS5zdHlsZSwgZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKHByb3BlcnR5LCB2YWx1ZSwgcnVsZSwgdmFyaWFibGVzU3RvcmUsIGlnbm9yZUltYWdlQW5hbHlzaXMsIGlzQXN5bmNDYW5jZWxsZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2REZWNzLnB1c2gobW9kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBtb2RSdWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobW9kRGVjcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRSdWxlID0gcnVsZS5wYXJlbnRSdWxlO1xuICAgICAgICAgICAgICAgICAgICBtb2RSdWxlID0geyBzZWxlY3RvcjogcnVsZS5zZWxlY3RvclRleHQsIGRlY2xhcmF0aW9uczogbW9kRGVjcywgcGFyZW50UnVsZTogcGFyZW50UnVsZSB9O1xuICAgICAgICAgICAgICAgICAgICBtb2RSdWxlcy5wdXNoKG1vZFJ1bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydWxlc01vZENhY2hlLnNldChjc3NUZXh0LCBtb2RSdWxlKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBoYXNOb25Mb2FkZWRMaW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm90Rm91bmRDYWNoZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcnVsZXNUZXh0Q2FjaGUuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldkZpbHRlcktleSA9IHRoZW1lS2V5O1xuICAgICAgICAgICAgaWYgKCFmb3JjZSAmJiAhcnVsZXNDaGFuZ2VkICYmICF0aGVtZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJJZCsrO1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gcnVsZS5zZWxlY3RvciwgZGVjbGFyYXRpb25zID0gcnVsZS5kZWNsYXJhdGlvbnM7XG4gICAgICAgICAgICAgICAgdmFyIGdldERlY2xhcmF0aW9uVGV4dCA9IGZ1bmN0aW9uIChkZWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gZGVjLnByb3BlcnR5LCB2YWx1ZSA9IGRlYy52YWx1ZSwgaW1wb3J0YW50ID0gZGVjLmltcG9ydGFudCwgc291cmNlVmFsdWUgPSBkZWMuc291cmNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm9wZXJ0eSwgXCI6IFwiKS5jb25jYXQodmFsdWUgPT0gbnVsbCA/IHNvdXJjZVZhbHVlIDogdmFsdWUpLmNvbmNhdChpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJycsIFwiO1wiKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBjc3NSdWxlc1RleHQgPSAnJztcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVjbGFyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1J1bGVzVGV4dCArPSBcIlwiLmNvbmNhdChnZXREZWNsYXJhdGlvblRleHQoZGVjbGFyYXRpb25zKSwgXCIgXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBydWxlVGV4dCA9IFwiXCIuY29uY2F0KHNlbGVjdG9yLCBcIiB7IFwiKS5jb25jYXQoY3NzUnVsZXNUZXh0LCBcIiB9XCIpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRSdWxlKHJ1bGVUZXh0LCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXN5bmNEZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB2YXIgdmFyRGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFyIGFzeW5jRGVjbGFyYXRpb25Db3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciB2YXJEZWNsYXJhdGlvbkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIHJvb3RSZWFkeUdyb3VwID0geyBydWxlOiBudWxsLCBydWxlczogW10sIGlzR3JvdXA6IHRydWUgfTtcbiAgICAgICAgICAgIHZhciBncm91cFJlZnMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocnVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RSZWFkeUdyb3VwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSZWZzLmhhcyhydWxlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBSZWZzLmdldChydWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGdyb3VwID0geyBydWxlOiBydWxlLCBydWxlczogW10sIGlzR3JvdXA6IHRydWUgfTtcbiAgICAgICAgICAgICAgICBncm91cFJlZnMuc2V0KHJ1bGUsIGdyb3VwKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50R3JvdXAgPSBnZXRHcm91cChydWxlLnBhcmVudFJ1bGUpO1xuICAgICAgICAgICAgICAgIHBhcmVudEdyb3VwLnJ1bGVzLnB1c2goZ3JvdXApO1xuICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjbGVhcikgeyByZXR1cm4gY2xlYXIoKTsgfSk7XG4gICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuY2xlYXIoKTtcbiAgICAgICAgICAgIG1vZFJ1bGVzLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gcjsgfSkuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBfYS5zZWxlY3RvciwgZGVjbGFyYXRpb25zID0gX2EuZGVjbGFyYXRpb25zLCBwYXJlbnRSdWxlID0gX2EucGFyZW50UnVsZTtcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwYXJlbnRSdWxlKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVhZHlTdHlsZVJ1bGUgPSB7IHNlbGVjdG9yOiBzZWxlY3RvciwgZGVjbGFyYXRpb25zOiBbXSwgaXNHcm91cDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICB2YXIgcmVhZHlEZWNsYXJhdGlvbnMgPSByZWFkeVN0eWxlUnVsZS5kZWNsYXJhdGlvbnM7XG4gICAgICAgICAgICAgICAgZ3JvdXAucnVsZXMucHVzaChyZWFkeVN0eWxlUnVsZSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihwcm9wZXJ0eSwgbW9kaWZpZWQsIGltcG9ydGFudCwgc291cmNlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFzeW5jS2V5ID0gKythc3luY0RlY2xhcmF0aW9uQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFzeW5jRGVjbGFyYXRpb24gPSB7IHByb3BlcnR5OiBwcm9wZXJ0eSwgdmFsdWU6IG51bGwsIGltcG9ydGFudDogaW1wb3J0YW50LCBhc3luY0tleTogYXN5bmNLZXksIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKGFzeW5jRGVjbGFyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFJlbmRlcklkID0gcmVuZGVySWQ7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLnRoZW4oZnVuY3Rpb24gKGFzeW5jVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXN5bmNWYWx1ZSB8fCBpc0FzeW5jQ2FuY2VsbGVkKCkgfHwgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb24udmFsdWUgPSBhc3luY1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNRdWV1ZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FzeW5jQ2FuY2VsbGVkKCkgfHwgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRBc3luY1J1bGUoYXN5bmNLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVWYXJEZWNsYXJhdGlvbnMocHJvcGVydHksIG1vZGlmaWVkLCBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IG1vZGlmaWVkLCB2YXJEZWNzID0gX2EuZGVjbGFyYXRpb25zLCBvblR5cGVDaGFuZ2UgPSBfYS5vblR5cGVDaGFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YXJLZXkgPSArK3ZhckRlY2xhcmF0aW9uQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbEluZGV4ID0gcmVhZHlEZWNsYXJhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkRGVjcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFyRGVjcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGVjID0geyBwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBzb3VyY2VWYWx1ZSwgaW1wb3J0YW50OiBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSwgdmFyS2V5OiB2YXJLZXkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2godGVtcERlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzID0gW3RlbXBEZWNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhckRlY3MuZm9yRWFjaChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kLnZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24obW9kLnByb3BlcnR5LCBtb2QudmFsdWUsIGltcG9ydGFudCwgc291cmNlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWR5RGVjID0geyBwcm9wZXJ0eTogbW9kLnByb3BlcnR5LCB2YWx1ZTogbW9kLnZhbHVlLCBpbXBvcnRhbnQ6IGltcG9ydGFudCwgc291cmNlVmFsdWU6IHNvdXJjZVZhbHVlLCB2YXJLZXk6IHZhcktleSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2gocmVhZHlEZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MucHVzaChyZWFkeURlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG5ld0RlY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FzeW5jQ2FuY2VsbGVkKCkgfHwgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkeVZhckRlY3MgPSBuZXdEZWNzLm1hcChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvcGVydHk6IG1vZC5wcm9wZXJ0eSwgdmFsdWU6IG1vZC52YWx1ZSwgaW1wb3J0YW50OiBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSwgdmFyS2V5OiB2YXJLZXkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcmVhZHlEZWNsYXJhdGlvbnMuaW5kZXhPZihvbGREZWNzWzBdLCBpbml0aWFsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMuc3BsaWNlLmFwcGx5KHJlYWR5RGVjbGFyYXRpb25zLCBfX3NwcmVhZEFycmF5KFtpbmRleCwgb2xkRGVjcy5sZW5ndGhdLCBfX3JlYWQocmVhZHlWYXJEZWNzKSwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MgPSByZWFkeVZhckRlY3M7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkVmFyUnVsZSh2YXJLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmFkZChmdW5jdGlvbiAoKSB7IHJldHVybiBvblR5cGVDaGFuZ2UucmVtb3ZlTGlzdGVuZXJzKCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gX2EucHJvcGVydHksIHZhbHVlID0gX2EudmFsdWUsIGltcG9ydGFudCA9IF9hLmltcG9ydGFudCwgc291cmNlVmFsdWUgPSBfYS5zb3VyY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkID0gdmFsdWUodGhlbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24ocHJvcGVydHksIG1vZGlmaWVkLCBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5LnN0YXJ0c1dpdGgoJy0tJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYXJEZWNsYXJhdGlvbnMocHJvcGVydHksIG1vZGlmaWVkLCBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goeyBwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiBtb2RpZmllZCwgaW1wb3J0YW50OiBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goeyBwcm9wZXJ0eTogcHJvcGVydHksIHZhbHVlOiB2YWx1ZSwgaW1wb3J0YW50OiBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlOiBzb3VyY2VWYWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBwcmVwYXJlU2hlZXQoKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkU3R5bGVTaGVldCgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXJnZXQoZ3JvdXAsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IGdyb3VwLnJ1bGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgQ1NTTWVkaWFSdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWEgPSBydWxlLm1lZGlhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRSdWxlKFwiQG1lZGlhIFwiLmNvbmNhdChtZWRpYS5tZWRpYVRleHQsIFwiIHt9XCIpLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpdGVyYXRlUmVhZHlSdWxlcyhncm91cCwgdGFyZ2V0LCBzdHlsZUl0ZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJ1bGVzLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRhcmdldChyLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVSZWFkeVJ1bGVzKHIsIHQsIHN0eWxlSXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVJdGVyYXRvcihyLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlcmF0ZVJlYWR5UnVsZXMocm9vdFJlYWR5R3JvdXAsIHNoZWV0LCBmdW5jdGlvbiAocnVsZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRhcmdldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXN5bmNLZXkgPSBfYS5hc3luY0tleSwgdmFyS2V5ID0gX2EudmFyS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jS2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5zZXQoYXN5bmNLZXksIHsgcnVsZTogcnVsZSwgdGFyZ2V0OiB0YXJnZXQsIGluZGV4OiBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJLZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY2xhcmF0aW9ucy5zZXQodmFyS2V5LCB7IHJ1bGU6IHJ1bGUsIHRhcmdldDogdGFyZ2V0LCBpbmRleDogaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVidWlsZEFzeW5jUnVsZShrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBhc3luY0RlY2xhcmF0aW9ucy5nZXQoa2V5KSwgcnVsZSA9IF9hLnJ1bGUsIHRhcmdldCA9IF9hLnRhcmdldCwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcbiAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYnVpbGRWYXJSdWxlKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHZhckRlY2xhcmF0aW9ucy5nZXQoa2V5KSwgcnVsZSA9IF9hLnJ1bGUsIHRhcmdldCA9IF9hLnRhcmdldCwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1aWxkU3R5bGVTaGVldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG1vZGlmeVNoZWV0OiBtb2RpZnlTaGVldCwgc2hvdWxkUmVidWlsZFN0eWxlOiBzaG91bGRSZWJ1aWxkU3R5bGUgfTtcbiAgICB9XG5cbiAgICB2YXIgU1RZTEVfU0VMRUNUT1IgPSAnc3R5bGUsIGxpbmtbcmVsKj1cInN0eWxlc2hlZXRcIiBpXTpub3QoW2Rpc2FibGVkXSknO1xuICAgIGZ1bmN0aW9uIGlzRm9udHNHb29nbGVBcGlTdHlsZShlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudC5ocmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50VVJMID0gbmV3IFVSTChlbGVtZW50LmhyZWYpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRVUkwuaG9zdG5hbWUgPT09ICdmb250cy5nb29nbGVhcGlzLmNvbSc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nSW5mbyhcIkNvdWxkbid0IGNvbnN0cnVjdCBcIi5jb25jYXQoZWxlbWVudC5ocmVmLCBcIiBhcyBVUkxcIikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3VsZE1hbmFnZVN0eWxlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICgoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSB8fFxuICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTdHlsZUVsZW1lbnQpIHx8XG4gICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVsICYmXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc3R5bGVzaGVldCcpICYmXG4gICAgICAgICAgICAgICAgZWxlbWVudC5ocmVmICYmXG4gICAgICAgICAgICAgICAgIWVsZW1lbnQuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAoaXNGaXJlZm94ID8gIWVsZW1lbnQuaHJlZi5zdGFydHNXaXRoKCdtb3otZXh0ZW5zaW9uOi8vJykgOiB0cnVlKSAmJlxuICAgICAgICAgICAgICAgICFpc0ZvbnRzR29vZ2xlQXBpU3R5bGUoZWxlbWVudCkpKSAmJlxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrcmVhZGVyJykgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEudG9Mb3dlckNhc2UoKSAhPT0gJ3ByaW50JyAmJlxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdHlsdXMnKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSwgcmVzdWx0cywgZGVlcCkge1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdm9pZCAwKSB7IHJlc3VsdHMgPSBbXTsgfVxuICAgICAgICBpZiAoZGVlcCA9PT0gdm9pZCAwKSB7IGRlZXAgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG91bGRNYW5hZ2VTdHlsZShub2RlKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50IHx8IChpc1NoYWRvd0RvbVN1cHBvcnRlZCAmJiBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkgfHwgbm9kZSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGZvckVhY2gobm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNUWUxFX1NFTEVDVE9SKSwgZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKHN0eWxlLCByZXN1bHRzLCBmYWxzZSk7IH0pO1xuICAgICAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgZnVuY3Rpb24gKGhvc3QpIHsgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMoaG9zdC5zaGFkb3dSb290LCByZXN1bHRzLCBmYWxzZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICB2YXIgc3luY1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcbiAgICB2YXIgY29yc1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcbiAgICB2YXIgY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkkMSA9IHRydWU7XG4gICAgfSk7XG4gICAgdmFyIGxvYWRpbmdMaW5rQ291bnRlciA9IDA7XG4gICAgdmFyIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBjbGVhbkxvYWRpbmdMaW5rcygpIHtcbiAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmNsZWFyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hbmFnZVN0eWxlKGVsZW1lbnQsIF9hKSB7XG4gICAgICAgIHZhciB1cGRhdGUgPSBfYS51cGRhdGUsIGxvYWRpbmdTdGFydCA9IF9hLmxvYWRpbmdTdGFydCwgbG9hZGluZ0VuZCA9IF9hLmxvYWRpbmdFbmQ7XG4gICAgICAgIHZhciBwcmV2U3R5bGVzID0gW107XG4gICAgICAgIHZhciBuZXh0ID0gZWxlbWVudDtcbiAgICAgICAgd2hpbGUgKChuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmcpICYmIG5leHQubWF0Y2hlcygnLmRhcmtyZWFkZXInKSkge1xuICAgICAgICAgICAgcHJldlN0eWxlcy5wdXNoKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3JzQ29weSA9IHByZXZTdHlsZXMuZmluZChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLm1hdGNoZXMoJy5kYXJrcmVhZGVyLS1jb3JzJykgJiYgIWNvcnNTdHlsZVNldC5oYXMoZWwpOyB9KSB8fCBudWxsO1xuICAgICAgICB2YXIgc3luY1N0eWxlID0gcHJldlN0eWxlcy5maW5kKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwubWF0Y2hlcygnLmRhcmtyZWFkZXItLXN5bmMnKSAmJiAhc3luY1N0eWxlU2V0LmhhcyhlbCk7IH0pIHx8IG51bGw7XG4gICAgICAgIHZhciBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciA9IG51bGw7XG4gICAgICAgIHZhciBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xuICAgICAgICB2YXIgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XG4gICAgICAgIHZhciBpc092ZXJyaWRlRW1wdHkgPSB0cnVlO1xuICAgICAgICB2YXIgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvYnNlcnZlck9wdGlvbnMgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBmdW5jdGlvbiBjb250YWluc0NTU0ltcG9ydCgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCAmJiBlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKS5tYXRjaChjc3NJbXBvcnRSZWdleCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFzSW1wb3J0cyhjc3NSdWxlcywgY2hlY2tDcm9zc09yaWdpbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgY3NzUnVsZXNMb29wOiBmb3IgKHZhciBpID0gMCwgbGVuID0gY3NzUnVsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IGNzc1J1bGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDcm9zc09yaWdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmhyZWYuc3RhcnRzV2l0aCgnaHR0cCcpICYmICFydWxlLmhyZWYuc3RhcnRzV2l0aChsb2NhdGlvbi5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGNzc1J1bGVzTG9vcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGNzc1J1bGVzTG9vcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNTeW5jKCkge1xuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcnNDb3B5LnNoZWV0LmNzc1J1bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ1NTSW1wb3J0KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjc3NSdWxlcyA9IHNhZmVHZXRTaGVldFJ1bGVzKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICFpc1JlbGF0aXZlSHJlZk9uQWJzb2x1dGVQYXRoKGVsZW1lbnQuaHJlZikgJiZcbiAgICAgICAgICAgICAgICBoYXNJbXBvcnRzKGNzc1J1bGVzLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNJbXBvcnRzKGNzc1J1bGVzLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlKCkge1xuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcgIT09IGNvcnNDb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29yc0NvcHksIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkubmV4dFNpYmxpbmcgIT09IHN5bmNTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN5bmNTdHlsZSwgY29yc0NvcHkubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcgIT09IHN5bmNTdHlsZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3luY1N0eWxlLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTeW5jU3R5bGUoKSB7XG4gICAgICAgICAgICBzeW5jU3R5bGUgPSBlbGVtZW50IGluc3RhbmNlb2YgU1ZHU3R5bGVFbGVtZW50ID9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N0eWxlJykgOlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzeW5jU3R5bGUuY2xhc3NMaXN0LmFkZCgnZGFya3JlYWRlcicpO1xuICAgICAgICAgICAgc3luY1N0eWxlLmNsYXNzTGlzdC5hZGQoJ2RhcmtyZWFkZXItLXN5bmMnKTtcbiAgICAgICAgICAgIHN5bmNTdHlsZS5tZWRpYSA9ICdzY3JlZW4nO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUpIHtcbiAgICAgICAgICAgICAgICBzeW5jU3R5bGUudGl0bGUgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3luY1N0eWxlU2V0LmFkZChzeW5jU3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgd2FzTG9hZGluZ0Vycm9yID0gZmFsc2U7XG4gICAgICAgIHZhciBsb2FkaW5nTGlua0lkID0gKytsb2FkaW5nTGlua0NvdW50ZXI7XG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQXN5bmMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzc1RleHQsIGNzc0Jhc2VQYXRoLCBfYSwgY3NzUnVsZXMsIGFjY2Vzc0Vycm9yLCBmdWxsQ1NTVGV4dDtcbiAgICAgICAgICAgICAgICB2YXIgX2I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkpIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3JlYWQoZ2V0UnVsZXNPckVycm9yKCksIDIpLCBjc3NSdWxlcyA9IF9hWzBdLCBhY2Nlc3NFcnJvciA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCghY3NzUnVsZXMgJiYgIWFjY2Vzc0Vycm9yICYmICFpc1NhZmFyaSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzU2FmYXJpICYmICFlbGVtZW50LnNoZWV0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N0aWxsTG9hZGluZ0Vycm9yKGFjY2Vzc0Vycm9yKSkpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBsaW5rTG9hZGluZyhlbGVtZW50LCBsb2FkaW5nTGlua0lkKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhc0xvYWRpbmdFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbnVsbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gX19yZWFkKGdldFJ1bGVzT3JFcnJvcigpLCAyKSwgY3NzUnVsZXMgPSBfYlswXSwgYWNjZXNzRXJyb3IgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzSW1wb3J0cyhjc3NSdWxlcywgZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGNzc1J1bGVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGxvYWRUZXh0KGVsZW1lbnQuaHJlZildO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQmFzZVBhdGggPSBnZXRDU1NCYXNlQmF0aChlbGVtZW50LmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBc3luY09wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBudWxsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnNDU1NJbXBvcnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoID0gZ2V0Q1NTQmFzZUJhdGgobG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG51bGxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjc3NUZXh0KSByZXR1cm4gWzMsIDEzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFs5LCAxMSwgLCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVwbGFjZUNTU0ltcG9ydHMoY3NzVGV4dCwgY3NzQmFzZVBhdGgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbENTU1RleHQgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHkgPSBjcmVhdGVDT1JTQ29weShlbGVtZW50LCBmdWxsQ1NTVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyID0gd2F0Y2hGb3JOb2RlUG9zaXRpb24oY29yc0NvcHksICdwcmV2LXNpYmxpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBjb3JzQ29weS5zaGVldC5jc3NSdWxlc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOiByZXR1cm4gWzIsIG51bGxdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXRhaWxzKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBydWxlcyA9IGdldFJ1bGVzU3luYygpO1xuICAgICAgICAgICAgaWYgKCFydWxlcykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlY29uZFJvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nUnVsZXMgfHwgd2FzTG9hZGluZ0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9hZGluZ1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgZ2V0UnVsZXNBc3luYygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHJ1bGVzOiBydWxlcyB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xuICAgICAgICAgICAgdmFyIHJ1bGVzID0gZ2V0UnVsZXNTeW5jKCk7XG4gICAgICAgICAgICBpZiAoIXJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVDU1NSdWxlc0Zyb21TaGVldChzaGVldCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzaGVldC5jc3NSdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXBhcmVPdmVycmlkZXNTaGVldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN5bmNTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTeW5jU3R5bGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3R5bGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoc3luY1N0eWxlLnNoZWV0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzaGVldCA9IHN5bmNTdHlsZS5zaGVldDtcbiAgICAgICAgICAgICAgICByZW1vdmVDU1NSdWxlc0Zyb21TaGVldChzaGVldCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlcikge1xuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIucnVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSB3YXRjaEZvck5vZGVQb3NpdGlvbihzeW5jU3R5bGUsICdwcmV2LXNpYmxpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkT3ZlcnJpZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1N0eWxlLnNoZWV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRPdmVycmlkZXMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcmNlID0gZm9yY2VSZW5kZXJTdHlsZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldDogcHJlcGFyZU92ZXJyaWRlc1NoZWV0LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpczogaWdub3JlSW1hZ2VBbmFseXNpcyxcbiAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZvcmNlLFxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjYW5jZWxBc3luY09wZXJhdGlvbnM7IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaXNPdmVycmlkZUVtcHR5ID0gc3luY1N0eWxlLnNoZWV0LmNzc1J1bGVzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRNb2RpZmllci5zaG91bGRSZWJ1aWxkU3R5bGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiB1cGRhdGUoKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVpbGRPdmVycmlkZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc09yRXJyb3IoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnNoZWV0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtlbGVtZW50LnNoZWV0LmNzc1J1bGVzLCBudWxsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW251bGwsIGVycl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTdGlsbExvYWRpbmdFcnJvcihlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNhZmVHZXRTaGVldFJ1bGVzKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKGdldFJ1bGVzT3JFcnJvcigpLCAyKSwgY3NzUnVsZXMgPSBfYVswXSwgZXJyID0gX2FbMV07XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXMoKSB7XG4gICAgICAgICAgICB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKTtcbiAgICAgICAgICAgIGlmICghaXNUaHVuZGVyYmlyZCAmJiAhKGNhbk9wdGltaXplVXNpbmdQcm94eSQxICYmIGVsZW1lbnQuc2hlZXQpKSB7XG4gICAgICAgICAgICAgICAgd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBydWxlc0NoYW5nZUtleSA9IG51bGw7XG4gICAgICAgIHZhciBydWxlc0NoZWNrRnJhbWVJZCA9IG51bGw7XG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQ2hhbmdlS2V5KCkge1xuICAgICAgICAgICAgdmFyIHJ1bGVzID0gc2FmZUdldFNoZWV0UnVsZXMoKTtcbiAgICAgICAgICAgIHJldHVybiBydWxlcyA/IHJ1bGVzLmxlbmd0aCA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGlkUnVsZXNLZXlDaGFuZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UnVsZXNDaGFuZ2VLZXkoKSAhPT0gcnVsZXNDaGFuZ2VLZXk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpIHtcbiAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XG4gICAgICAgICAgICB2YXIgY2hlY2tGb3JVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFJ1bGVzS2V5Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbk9wdGltaXplVXNpbmdQcm94eSQxICYmIGVsZW1lbnQuc2hlZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydWxlc0NoZWNrRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0ZvclVwZGF0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2hlY2tGb3JVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bGVzQ2hlY2tGcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBmdW5jdGlvbiBvblNoZWV0Q2hhbmdlKCkge1xuICAgICAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5JDEgPSB0cnVlO1xuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcbiAgICAgICAgICAgIGlmIChhcmVTaGVldENoYW5nZXNQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2hlZXRDaGFuZ2VzKCkge1xuICAgICAgICAgICAgICAgIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzayhoYW5kbGVTaGVldENoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZVNoZWV0Q2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0Jywgb25TaGVldENoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignX19kYXJrcmVhZGVyX191cGRhdGVTaGVldCcsIG9uU2hlZXRDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlcygpIHtcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKTtcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgJiYgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xuICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgcGF1c2UoKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY29yc0NvcHkpO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShzeW5jU3R5bGUpO1xuICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xuICAgICAgICAgICAgaWYgKHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5oYXMobG9hZGluZ0xpbmtJZCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0ID0gcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmdldChsb2FkaW5nTGlua0lkKTtcbiAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdMaW5rSWQpO1xuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3YXRjaCgpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHdhdGNoRm9yU2hlZXRDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heE1vdmVDb3VudCA9IDEwO1xuICAgICAgICB2YXIgbW92ZUNvdW50ID0gMDtcbiAgICAgICAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICAgICAgICAgIGlmICghc3luY1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW92ZUNvdW50Kys7XG4gICAgICAgICAgICBpZiAobW92ZUNvdW50ID4gbWF4TW92ZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5zZXJ0U3R5bGUoKTtcbiAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyICYmIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyLnNraXAoKTtcbiAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc2tpcCgpO1xuICAgICAgICAgICAgaWYgKCFpc092ZXJyaWRlRW1wdHkpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcbiAgICAgICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICAgICAgcGF1c2U6IHBhdXNlLFxuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHdhdGNoOiB3YXRjaCxcbiAgICAgICAgICAgIHJlc3RvcmU6IHJlc3RvcmUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmtMb2FkaW5nKGxpbmssIGxvYWRpbmdJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xlYW5VcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJMaW5rZWxlbWVudCBcIi5jb25jYXQobG9hZGluZ0lkLCBcIiBjb3VsZG4ndCBiZSBsb2FkZWQuIFwiKS5jb25jYXQobGluay5ocmVmKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLnNldChsb2FkaW5nSWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmsuaHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDU1NJbXBvcnRVUkwoaW1wb3J0RGVjbGFyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGdldENTU1VSTFZhbHVlKGltcG9ydERlY2xhcmF0aW9uLnN1YnN0cmluZyg3KS50cmltKCkucmVwbGFjZSgvOyQvLCAnJykucmVwbGFjZSgvc2NyZWVuJC8sICcnKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRUZXh0KHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdkYXRhOicpKSByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBmZXRjaCh1cmwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQsIChfYS5zZW50KCkpLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCwgYmdGZXRjaCh7IHVybDogdXJsLCByZXNwb25zZVR5cGU6ICd0ZXh0JywgbWltZVR5cGU6ICd0ZXh0L2NzcycsIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbiB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU0ltcG9ydHMoY3NzVGV4dCwgYmFzZVBhdGgsIGNhY2hlKSB7XG4gICAgICAgIGlmIChjYWNoZSA9PT0gdm9pZCAwKSB7IGNhY2hlID0gbmV3IE1hcCgpOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbXBvcnRNYXRjaGVzLCBpbXBvcnRNYXRjaGVzXzEsIGltcG9ydE1hdGNoZXNfMV8xLCBtYXRjaCwgaW1wb3J0VVJMLCBhYnNvbHV0ZVVSTCwgaW1wb3J0ZWRDU1MsIGVfMV8xO1xuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmVwbGFjZUNTU0ZvbnRGYWNlKGNzc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJlcGxhY2VDU1NSZWxhdGl2ZVVSTHNXaXRoQWJzb2x1dGUoY3NzVGV4dCwgYmFzZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlcyA9IGdldE1hdGNoZXMoY3NzSW1wb3J0UmVnZXgsIGNzc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDEwLCAxMSwgMTJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGNoZXNfMSA9IF9fdmFsdWVzKGltcG9ydE1hdGNoZXMpLCBpbXBvcnRNYXRjaGVzXzFfMSA9IGltcG9ydE1hdGNoZXNfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWltcG9ydE1hdGNoZXNfMV8xLmRvbmUpIHJldHVybiBbMywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGltcG9ydE1hdGNoZXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0VVJMID0gZ2V0Q1NTSW1wb3J0VVJMKG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlVVJMID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVBhdGgsIGltcG9ydFVSTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FjaGUuaGFzKGFic29sdXRlVVJMKSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gY2FjaGUuZ2V0KGFic29sdXRlVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgNiwgLCA3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGxvYWRUZXh0KGFic29sdXRlVVJMKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGFic29sdXRlVVJMLCBpbXBvcnRlZENTUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlcGxhY2VDU1NJbXBvcnRzKGltcG9ydGVkQ1NTLCBnZXRDU1NCYXNlQmF0aChhYnNvbHV0ZVVSTCksIGNhY2hlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnNwbGl0KG1hdGNoKS5qb2luKGltcG9ydGVkQ1NTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TWF0Y2hlc18xXzEgPSBpbXBvcnRNYXRjaGVzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzMsIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMV8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0geyBlcnJvcjogZV8xXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0TWF0Y2hlc18xXzEgJiYgIWltcG9ydE1hdGNoZXNfMV8xLmRvbmUgJiYgKF9hID0gaW1wb3J0TWF0Y2hlc18xLnJldHVybikpIF9hLmNhbGwoaW1wb3J0TWF0Y2hlc18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGNzc1RleHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQ09SU0NvcHkoc3JjRWxlbWVudCwgY3NzVGV4dCkge1xuICAgICAgICBpZiAoIWNzc1RleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgY29ycy5jbGFzc0xpc3QuYWRkKCdkYXJrcmVhZGVyJyk7XG4gICAgICAgIGNvcnMuY2xhc3NMaXN0LmFkZCgnZGFya3JlYWRlci0tY29ycycpO1xuICAgICAgICBjb3JzLm1lZGlhID0gJ3NjcmVlbic7XG4gICAgICAgIGNvcnMudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgICAgICBzcmNFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvcnMsIHNyY0VsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICBjb3JzLnNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29yc1N0eWxlU2V0LmFkZChjb3JzKTtcbiAgICAgICAgcmV0dXJuIGNvcnM7XG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmVycyA9IFtdO1xuICAgIHZhciBvYnNlcnZlZFJvb3RzO1xuICAgIHZhciB1bmRlZmluZWRHcm91cHMgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrO1xuICAgIGZ1bmN0aW9uIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KSB7XG4gICAgICAgIGlmICghaXNEZWZpbmVkU2VsZWN0b3JTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3JFYWNoKHJvb3QucXVlcnlTZWxlY3RvckFsbCgnOm5vdCg6ZGVmaW5lZCknKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKCF0YWcuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgIHZhciBleHRlbmRlZFRhZyA9IGVsLmdldEF0dHJpYnV0ZSgnaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5kZWRUYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gZXh0ZW5kZWRUYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF1bmRlZmluZWRHcm91cHMuaGFzKHRhZykpIHtcbiAgICAgICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuc2V0KHRhZywgbmV3IFNldCgpKTtcbiAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50c1doZW5EZWZpbmVkKHRhZykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmRlbGV0ZSh0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2soQXJyYXkuZnJvbShlbGVtZW50cykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZykuYWRkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSB0cnVlO1xuICAgIH0pO1xuICAgIHZhciByZXNvbHZlcnMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlSXNEZWZpbmVkKGUpIHtcbiAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc29sdmVycy5oYXMoZS5kZXRhaWwudGFnKSkge1xuICAgICAgICAgICAgdmFyIHJlc29sdmUgPSByZXNvbHZlcnMuZ2V0KGUuZGV0YWlsLnRhZyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3VzdG9tRWxlbWVudHNXaGVuRGVmaW5lZCh0YWcpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuY3VzdG9tRWxlbWVudHMgJiYgdHlwZW9mIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYW5PcHRpbWl6ZVVzaW5nUHJveHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlcnMuc2V0KHRhZywgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ19fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXInLCB7IGRldGFpbDogeyB0YWc6IHRhZyB9IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja0lmRGVmaW5lZF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLnZhbHVlcygpLm5leHQoKS52YWx1ZS5tYXRjaGVzKCc6ZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSWZEZWZpbmVkXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJZkRlZmluZWRfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2F0Y2hXaGVuQ3VzdG9tRWxlbWVudHNEZWZpbmVkKGNhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlRnJvbURlZmluZUN1c3RvbUVsZW1lbnRzKCkge1xuICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5jbGVhcigpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZCcsIGhhbmRsZUlzRGVmaW5lZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKGN1cnJlbnRTdHlsZXMsIHVwZGF0ZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCk7XG4gICAgICAgIHZhciBwcmV2U3R5bGVzID0gbmV3IFNldChjdXJyZW50U3R5bGVzKTtcbiAgICAgICAgdmFyIHByZXZTdHlsZVNpYmxpbmdzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdmFyIG5leHRTdHlsZVNpYmxpbmdzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVN0eWxlUG9zaXRpb24oc3R5bGUpIHtcbiAgICAgICAgICAgIHByZXZTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICBuZXh0U3R5bGVTaWJsaW5ncy5zZXQoc3R5bGUsIHN0eWxlLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9yZ2V0U3R5bGVQb3NpdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgcHJldlN0eWxlU2libGluZ3MuZGVsZXRlKHN0eWxlKTtcbiAgICAgICAgICAgIG5leHRTdHlsZVNpYmxpbmdzLmRlbGV0ZShzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGlkU3R5bGVQb3NpdGlvbkNoYW5nZShzdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChzdHlsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBwcmV2U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpIHx8XG4gICAgICAgICAgICAgICAgc3R5bGUubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBuZXh0U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U3R5bGVzLmZvckVhY2goc2F2ZVN0eWxlUG9zaXRpb24pO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdHlsZU9wZXJhdGlvbnMob3BlcmF0aW9ucykge1xuICAgICAgICAgICAgdmFyIGNyZWF0ZWRTdHlsZXMgPSBvcGVyYXRpb25zLmNyZWF0ZWRTdHlsZXMsIHJlbW92ZWRTdHlsZXMgPSBvcGVyYXRpb25zLnJlbW92ZWRTdHlsZXMsIG1vdmVkU3R5bGVzID0gb3BlcmF0aW9ucy5tb3ZlZFN0eWxlcztcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gc2F2ZVN0eWxlUG9zaXRpb24ocyk7IH0pO1xuICAgICAgICAgICAgbW92ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gc2F2ZVN0eWxlUG9zaXRpb24ocyk7IH0pO1xuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBmb3JnZXRTdHlsZVBvc2l0aW9uKHMpOyB9KTtcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcHJldlN0eWxlcy5hZGQocyk7IH0pO1xuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBwcmV2U3R5bGVzLmRlbGV0ZShzKTsgfSk7XG4gICAgICAgICAgICBpZiAoY3JlYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplICsgbW92ZWRTdHlsZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBBcnJheS5mcm9tKGNyZWF0ZWRTdHlsZXMpLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBBcnJheS5mcm9tKHJlbW92ZWRTdHlsZXMpLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlZDogQXJyYXkuZnJvbShtb3ZlZFN0eWxlcyksXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pbm9yVHJlZU11dGF0aW9ucyhfYSkge1xuICAgICAgICAgICAgdmFyIGFkZGl0aW9ucyA9IF9hLmFkZGl0aW9ucywgbW92ZXMgPSBfYS5tb3ZlcywgZGVsZXRpb25zID0gX2EuZGVsZXRpb25zO1xuICAgICAgICAgICAgdmFyIGNyZWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB2YXIgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHZhciBtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBjcmVhdGVkU3R5bGVzLmFkZChzdHlsZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiByZW1vdmVkU3R5bGVzLmFkZChzdHlsZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIG1vdmVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIG1vdmVkU3R5bGVzLmFkZChzdHlsZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyh7IGNyZWF0ZWRTdHlsZXM6IGNyZWF0ZWRTdHlsZXMsIHJlbW92ZWRTdHlsZXM6IHJlbW92ZWRTdHlsZXMsIG1vdmVkU3R5bGVzOiBtb3ZlZFN0eWxlcyB9KTtcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG4sIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMobik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVIdWdlVHJlZU11dGF0aW9ucyhyb290KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVzID0gbmV3IFNldChnZXRNYW5hZ2VhYmxlU3R5bGVzKHJvb3QpKTtcbiAgICAgICAgICAgIHZhciBjcmVhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgdmFyIHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB2YXIgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIGlmICghcHJldlN0eWxlcy5oYXMocykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5hZGQocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMocykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIGlmICghY3JlYXRlZFN0eWxlcy5oYXMocykgJiYgIXJlbW92ZWRTdHlsZXMuaGFzKHMpICYmIGRpZFN0eWxlUG9zaXRpb25DaGFuZ2UocykpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRTdHlsZXMuYWRkKHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGFuZGxlU3R5bGVPcGVyYXRpb25zKHsgY3JlYXRlZFN0eWxlczogY3JlYXRlZFN0eWxlcywgcmVtb3ZlZFN0eWxlczogcmVtb3ZlZFN0eWxlcywgbW92ZWRTdHlsZXM6IG1vdmVkU3R5bGVzIH0pO1xuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKHJvb3QsIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKTtcbiAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHZhciByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTWFuYWdlU3R5bGUodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFN0eWxlcy5hZGQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiYgdGFyZ2V0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IEFycmF5LmZyb20odXBkYXRlZFN0eWxlcyksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBBcnJheS5mcm9tKHJlbW92ZWRTdHlsZXMpLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlZDogW10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZShyb290KSB7XG4gICAgICAgICAgICB2YXIgdHJlZU9ic2VydmVyID0gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIHtcbiAgICAgICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zOiBoYW5kbGVNaW5vclRyZWVNdXRhdGlvbnMsXG4gICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zOiBoYW5kbGVIdWdlVHJlZU11dGF0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyk7XG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydyZWwnLCAnZGlzYWJsZWQnLCAnbWVkaWEnLCAnaHJlZiddLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLnB1c2godHJlZU9ic2VydmVyLCBhdHRyT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgb2JzZXJ2ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMobm9kZSkge1xuICAgICAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBub2RlLnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdCA9PSBudWxsIHx8IG9ic2VydmVkUm9vdHMuaGFzKHNoYWRvd1Jvb3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzZXJ2ZShzaGFkb3dSb290KTtcbiAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKHNoYWRvd1Jvb3QpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmUoZG9jdW1lbnQpO1xuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyk7XG4gICAgICAgIHdhdGNoV2hlbkN1c3RvbUVsZW1lbnRzRGVmaW5lZChmdW5jdGlvbiAoaG9zdHMpIHtcbiAgICAgICAgICAgIHZhciBuZXdTdHlsZXMgPSBbXTtcbiAgICAgICAgICAgIGhvc3RzLmZvckVhY2goZnVuY3Rpb24gKGhvc3QpIHsgcmV0dXJuIHB1c2gobmV3U3R5bGVzLCBnZXRNYW5hZ2VhYmxlU3R5bGVzKGhvc3Quc2hhZG93Um9vdCkpOyB9KTtcbiAgICAgICAgICAgIHVwZGF0ZSh7IGNyZWF0ZWQ6IG5ld1N0eWxlcywgdXBkYXRlZDogW10sIHJlbW92ZWQ6IFtdLCBtb3ZlZDogW10gfSk7XG4gICAgICAgICAgICBob3N0cy5mb3JFYWNoKGZ1bmN0aW9uIChob3N0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBob3N0LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKGhvc3QpO1xuICAgICAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhzaGFkb3dSb290LCBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHNoYWRvd1Jvb3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZCcsIGhhbmRsZUlzRGVmaW5lZCk7XG4gICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhkb2N1bWVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0T2JzZXJ2ZXJzKCkge1xuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAobykgeyByZXR1cm4gby5kaXNjb25uZWN0KCk7IH0pO1xuICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKDAsIG9ic2VydmVycy5sZW5ndGgpO1xuICAgICAgICBvYnNlcnZlZFJvb3RzID0gbmV3IFdlYWtTZXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCkge1xuICAgICAgICByZXNldE9ic2VydmVycygpO1xuICAgICAgICB1bnN1YnNjcmliZUZyb21EZWZpbmVDdXN0b21FbGVtZW50cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhleGlmeShudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICgobnVtYmVyIDwgMTYgPyAnMCcgOiAnJykgKyBudW1iZXIudG9TdHJpbmcoMTYpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVSUQoKSB7XG4gICAgICAgIGlmICgncmFuZG9tVVVJRCcgaW4gY3J5cHRvKSB7XG4gICAgICAgICAgICB2YXIgdXVpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgICAgICByZXR1cm4gdXVpZC5zdWJzdHJpbmcoMCwgOCkgKyB1dWlkLnN1YnN0cmluZyg5LCAxMykgKyB1dWlkLnN1YnN0cmluZygxNCwgMTgpICsgdXVpZC5zdWJzdHJpbmcoMTksIDIzKSArIHV1aWQuc3Vic3RyaW5nKDI0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSkpLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gaGV4aWZ5KHgpOyB9KS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICB2YXIgYWRvcHRlZFN0eWxlT3ZlcnJpZGVzID0gbmV3IFdlYWtNYXAoKTtcbiAgICB2YXIgb3ZlcnJpZGVMaXN0ID0gbmV3IFdlYWtTZXQoKTtcbiAgICBmdW5jdGlvbiBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpIHtcbiAgICAgICAgdmFyIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xuICAgICAgICBmdW5jdGlvbiBpbmplY3RTaGVldChzaGVldCwgb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIHZhciBuZXdTaGVldHMgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpLCBmYWxzZSk7XG4gICAgICAgICAgICB2YXIgc2hlZXRJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKHNoZWV0KTtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0gbmV3U2hlZXRzLmluZGV4T2Yob3ZlcnJpZGUpO1xuICAgICAgICAgICAgaWYgKHNoZWV0SW5kZXggPT09IGV4aXN0aW5nSW5kZXggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKHNoZWV0SW5kZXggKyAxLCAwLCBvdmVycmlkZSk7XG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBuZXdTaGVldHMgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpLCBmYWxzZSk7XG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5mb3JFYWNoKGZ1bmN0aW9uIChhZG9wdGVkU3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZUxpc3QuaGFzKGFkb3B0ZWRTdHlsZVNoZWV0KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKGFkb3B0ZWRTdHlsZVNoZWV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVPdmVycmlkZXMuZGVsZXRlKGFkb3B0ZWRTdHlsZVNoZWV0KTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVMaXN0LmRlbGV0ZShhZG9wdGVkU3R5bGVTaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZvckVhY2goZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlTGlzdC5oYXMoc2hlZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXQucnVsZXM7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJyaWRlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBvdmVycmlkZS5jc3NSdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGUuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmplY3RTaGVldChzaGVldCwgb3ZlcnJpZGUpO1xuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVPdmVycmlkZXMuc2V0KHNoZWV0LCBvdmVycmlkZSk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlTGlzdC5hZGQob3ZlcnJpZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldDogcHJlcGFyZU92ZXJyaWRlc1NoZWV0LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpczogaWdub3JlSW1hZ2VBbmFseXNpcyxcbiAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjYW5jZWxBc3luY09wZXJhdGlvbnM7IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5qZWN0UHJveHkoZW5hYmxlU3R5bGVTaGVldHNQcm94eSkge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZCcpKTtcbiAgICAgICAgdmFyIGFkZFJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ2FkZFJ1bGUnKTtcbiAgICAgICAgdmFyIGluc2VydFJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ2luc2VydFJ1bGUnKTtcbiAgICAgICAgdmFyIGRlbGV0ZVJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ2RlbGV0ZVJ1bGUnKTtcbiAgICAgICAgdmFyIHJlbW92ZVJ1bGVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ3JlbW92ZVJ1bGUnKTtcbiAgICAgICAgdmFyIGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yID0gZW5hYmxlU3R5bGVTaGVldHNQcm94eSA/XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKERvY3VtZW50LnByb3RvdHlwZSwgJ3N0eWxlU2hlZXRzJykgOiBudWxsO1xuICAgICAgICB2YXIgc2hvdWxkV3JhcEhUTUxFbGVtZW50ID0gW1xuICAgICAgICAgICAgJ2JhaWR1LmNvbScsXG4gICAgICAgICAgICAnYmFpa2UuYmFpZHUuY29tJyxcbiAgICAgICAgICAgICdkaXR1LmJhaWR1LmNvbScsXG4gICAgICAgICAgICAnbWFwLmJhaWR1LmNvbScsXG4gICAgICAgICAgICAnbWFwcy5iYWlkdS5jb20nLFxuICAgICAgICAgICAgJ2hhb2thbi5iYWlkdS5jb20nLFxuICAgICAgICAgICAgJ3Bhbi5iYWlkdS5jb20nLFxuICAgICAgICAgICAgJ3Bhc3Nwb3J0LmJhaWR1LmNvbScsXG4gICAgICAgICAgICAndGllYmEuYmFpZHUuY29tJyxcbiAgICAgICAgICAgICd3d3cuYmFpZHUuY29tJ1xuICAgICAgICBdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgdmFyIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvciA9IHNob3VsZFdyYXBIVE1MRWxlbWVudCA/XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnKSA6IG51bGw7XG4gICAgICAgIHZhciBjbGVhblVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU1N0eWxlU2hlZXQucHJvdG90eXBlLCAnYWRkUnVsZScsIGFkZFJ1bGVEZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ2luc2VydFJ1bGUnLCBpbnNlcnRSdWxlRGVzY3JpcHRvcik7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsICdkZWxldGVSdWxlJywgZGVsZXRlUnVsZURlc2NyaXB0b3IpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU1N0eWxlU2hlZXQucHJvdG90eXBlLCAncmVtb3ZlUnVsZScsIHJlbW92ZVJ1bGVEZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ19fZGFya3JlYWRlcl9fY2xlYW5VcCcsIGNsZWFuVXApO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlcicsIGFkZFVuZGVmaW5lZFJlc29sdmVyKTtcbiAgICAgICAgICAgIGlmIChlbmFibGVTdHlsZVNoZWV0c1Byb3h5KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERvY3VtZW50LnByb3RvdHlwZSwgJ3N0eWxlU2hlZXRzJywgZG9jdW1lbnRTdHlsZVNoZWV0c0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFdyYXBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2dldEVsZW1lbnRzQnlUYWdOYW1lJywgZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFkZFVuZGVmaW5lZFJlc29sdmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGUuZGV0YWlsLnRhZykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ19fZGFya3JlYWRlcl9faXNEZWZpbmVkJywgeyBkZXRhaWw6IHsgdGFnOiBlLmRldGFpbC50YWcgfSB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignX19kYXJrcmVhZGVyX19jbGVhblVwJywgY2xlYW5VcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ19fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXInLCBhZGRVbmRlZmluZWRSZXNvbHZlcik7XG4gICAgICAgIHZhciB1cGRhdGVTaGVldEV2ZW50ID0gbmV3IEV2ZW50KCdfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0Jyk7XG4gICAgICAgIGZ1bmN0aW9uIHByb3h5QWRkUnVsZShzZWxlY3Rvciwgc3R5bGUsIGluZGV4KSB7XG4gICAgICAgICAgICBhZGRSdWxlRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIHNlbGVjdG9yLCBzdHlsZSwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3duZXJOb2RlICYmICF0aGlzLm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmtyZWFkZXInKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJveHlJbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBpbnNlcnRSdWxlRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIHJ1bGUsIGluZGV4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm93bmVyTm9kZSAmJiAhdGhpcy5vd25lck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrcmVhZGVyJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByb3h5RGVsZXRlUnVsZShpbmRleCkge1xuICAgICAgICAgICAgZGVsZXRlUnVsZURlc2NyaXB0b3IudmFsdWUuY2FsbCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vd25lck5vZGUgJiYgIXRoaXMub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGFya3JlYWRlcicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwcm94eVJlbW92ZVJ1bGUoaW5kZXgpIHtcbiAgICAgICAgICAgIHJlbW92ZVJ1bGVEZXNjcmlwdG9yLnZhbHVlLmNhbGwodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3duZXJOb2RlICYmICF0aGlzLm93bmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmtyZWFkZXInKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJveHlEb2N1bWVudFN0eWxlU2hlZXRzKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBnZXRDdXJyZW50VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvY1NoZWV0cyA9IGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yLmdldC5jYWxsKF90aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRTaGVldHMgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZG9jU2hlZXRzKSwgZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXN0eWxlU2hlZXQub3duZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGFya3JlYWRlcicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzLml0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTaGVldHNbaXRlbV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKGZpbHRlcmVkU2hlZXRzLCBTdHlsZVNoZWV0TGlzdC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgICAgICAgdmFyIHN0eWxlU2hlZXRMaXN0QmVoYXZpb3IgPSB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRWYWx1ZSgpW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWxlbWVudHMgPSBuZXcgUHJveHkoZWxlbWVudHMsIHN0eWxlU2hlZXRMaXN0QmVoYXZpb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByb3h5R2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0YWdOYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvci52YWx1ZS5jYWxsKHRoaXMsIHRhZ05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGdldEN1cnJlbnRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHNCeVRhZ05hbWVEZXNjcmlwdG9yLnZhbHVlLmNhbGwoX3RoaXMsIHRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGVsZW1lbnRzKSwgZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrcmVhZGVyJyk7XG4gICAgICAgICAgICAgICAgfSksIE5vZGVMaXN0LnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSgpO1xuICAgICAgICAgICAgdmFyIG5vZGVMaXN0QmVoYXZpb3IgPSB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKVtOdW1iZXIocHJvcGVydHkpIHx8IHByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWxlbWVudHMgPSBuZXcgUHJveHkoZWxlbWVudHMsIG5vZGVMaXN0QmVoYXZpb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ2FkZFJ1bGUnLCBPYmplY3QuYXNzaWduKHt9LCBhZGRSdWxlRGVzY3JpcHRvciwgeyB2YWx1ZTogcHJveHlBZGRSdWxlIH0pKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU1N0eWxlU2hlZXQucHJvdG90eXBlLCAnaW5zZXJ0UnVsZScsIE9iamVjdC5hc3NpZ24oe30sIGluc2VydFJ1bGVEZXNjcmlwdG9yLCB7IHZhbHVlOiBwcm94eUluc2VydFJ1bGUgfSkpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsICdkZWxldGVSdWxlJywgT2JqZWN0LmFzc2lnbih7fSwgZGVsZXRlUnVsZURlc2NyaXB0b3IsIHsgdmFsdWU6IHByb3h5RGVsZXRlUnVsZSB9KSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSwgJ3JlbW92ZVJ1bGUnLCBPYmplY3QuYXNzaWduKHt9LCByZW1vdmVSdWxlRGVzY3JpcHRvciwgeyB2YWx1ZTogcHJveHlSZW1vdmVSdWxlIH0pKTtcbiAgICAgICAgaWYgKGVuYWJsZVN0eWxlU2hlZXRzUHJveHkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEb2N1bWVudC5wcm90b3R5cGUsICdzdHlsZVNoZWV0cycsIE9iamVjdC5hc3NpZ24oe30sIGRvY3VtZW50U3R5bGVTaGVldHNEZXNjcmlwdG9yLCB7IGdldDogcHJveHlEb2N1bWVudFN0eWxlU2hlZXRzIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkV3JhcEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdnZXRFbGVtZW50c0J5VGFnTmFtZScsIE9iamVjdC5hc3NpZ24oe30sIGdldEVsZW1lbnRzQnlUYWdOYW1lRGVzY3JpcHRvciwgeyB2YWx1ZTogcHJveHlHZXRFbGVtZW50c0J5VGFnTmFtZSB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgSU5TVEFOQ0VfSUQgPSBnZW5lcmF0ZVVJRCgpO1xuICAgIHZhciBzdHlsZU1hbmFnZXJzID0gbmV3IE1hcCgpO1xuICAgIHZhciBhZG9wdGVkU3R5bGVNYW5hZ2VycyA9IFtdO1xuICAgIHZhciBmaWx0ZXIgPSBudWxsO1xuICAgIHZhciBmaXhlcyA9IG51bGw7XG4gICAgdmFyIGlzSUZyYW1lJDEgPSBudWxsO1xuICAgIHZhciBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IG51bGw7XG4gICAgdmFyIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlU3R5bGUoY2xhc3NOYW1lLCByb290KSB7XG4gICAgICAgIGlmIChyb290ID09PSB2b2lkIDApIHsgcm9vdCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQ7IH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcmVhZGVyJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEgPSAnc2NyZWVuJztcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTY3JpcHQoY2xhc3NOYW1lLCByb290KSB7XG4gICAgICAgIGlmIChyb290ID09PSB2b2lkIDApIHsgcm9vdCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQ7IH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3JlYWRlcicpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHZhciBub2RlUG9zaXRpb25XYXRjaGVycyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIobm9kZSwgYWxpYXMpIHtcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuaGFzKGFsaWFzKSAmJiBub2RlUG9zaXRpb25XYXRjaGVycy5nZXQoYWxpYXMpLnN0b3AoKTtcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuc2V0KGFsaWFzLCB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCAncGFyZW50JykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wU3R5bGVQb3NpdGlvbldhdGNoZXJzKCkge1xuICAgICAgICBmb3JFYWNoKG5vZGVQb3NpdGlvbldhdGNoZXJzLnZhbHVlcygpLCBmdW5jdGlvbiAod2F0Y2hlcikgeyByZXR1cm4gd2F0Y2hlci5zdG9wKCk7IH0pO1xuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5jbGVhcigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpIHtcbiAgICAgICAgdmFyIGZhbGxiYWNrU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKCdkYXJrcmVhZGVyLS1mYWxsYmFjaycsIGRvY3VtZW50KTtcbiAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShmaWx0ZXIsIHsgc3RyaWN0OiB0cnVlIH0pO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShmYWxsYmFja1N0eWxlLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoZmFsbGJhY2tTdHlsZSwgJ2ZhbGxiYWNrJyk7XG4gICAgICAgIHZhciB1c2VyQWdlbnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoJ2RhcmtyZWFkZXItLXVzZXItYWdlbnQnKTtcbiAgICAgICAgdXNlckFnZW50U3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZFVzZXJBZ2VudFN0eWxlKGZpbHRlciwgaXNJRnJhbWUkMSwgZmlsdGVyLnN0eWxlU3lzdGVtQ29udHJvbHMpO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh1c2VyQWdlbnRTdHlsZSwgZmFsbGJhY2tTdHlsZS5uZXh0U2libGluZyk7XG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih1c2VyQWdlbnRTdHlsZSwgJ3VzZXItYWdlbnQnKTtcbiAgICAgICAgdmFyIHRleHRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoJ2RhcmtyZWFkZXItLXRleHQnKTtcbiAgICAgICAgaWYgKGZpbHRlci51c2VGb250IHx8IGZpbHRlci50ZXh0U3Ryb2tlID4gMCkge1xuICAgICAgICAgICAgdGV4dFN0eWxlLnRleHRDb250ZW50ID0gY3JlYXRlVGV4dFN0eWxlKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZXh0U3R5bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh0ZXh0U3R5bGUsIGZhbGxiYWNrU3R5bGUubmV4dFNpYmxpbmcpO1xuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodGV4dFN0eWxlLCAndGV4dCcpO1xuICAgICAgICB2YXIgaW52ZXJ0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKCdkYXJrcmVhZGVyLS1pbnZlcnQnKTtcbiAgICAgICAgaWYgKGZpeGVzICYmIEFycmF5LmlzQXJyYXkoZml4ZXMuaW52ZXJ0KSAmJiBmaXhlcy5pbnZlcnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgXCJcIi5jb25jYXQoZml4ZXMuaW52ZXJ0LmpvaW4oJywgJyksIFwiIHtcIiksXG4gICAgICAgICAgICAgICAgXCIgICAgZmlsdGVyOiBcIi5jb25jYXQoZ2V0Q1NTRmlsdGVyVmFsdWUoX19hc3NpZ24oX19hc3NpZ24oe30sIGZpbHRlciksIHsgY29udHJhc3Q6IGZpbHRlci5tb2RlID09PSAwID8gZmlsdGVyLmNvbnRyYXN0IDogY2xhbXAoZmlsdGVyLmNvbnRyYXN0IC0gMTAsIDAsIDEwMCkgfSkpLCBcIiAhaW1wb3J0YW50O1wiKSxcbiAgICAgICAgICAgICAgICAnfScsXG4gICAgICAgICAgICBdLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpbnZlcnRTdHlsZSwgdGV4dFN0eWxlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGludmVydFN0eWxlLCAnaW52ZXJ0Jyk7XG4gICAgICAgIHZhciBpbmxpbmVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoJ2RhcmtyZWFkZXItLWlubGluZScpO1xuICAgICAgICBpbmxpbmVTdHlsZS50ZXh0Q29udGVudCA9IGdldElubGluZU92ZXJyaWRlU3R5bGUoKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW5saW5lU3R5bGUsIGludmVydFN0eWxlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGlubGluZVN0eWxlLCAnaW5saW5lJyk7XG4gICAgICAgIHZhciBvdmVycmlkZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZSgnZGFya3JlYWRlci0tb3ZlcnJpZGUnKTtcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9IGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6ICcnO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG92ZXJyaWRlU3R5bGUpO1xuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIob3ZlcnJpZGVTdHlsZSwgJ292ZXJyaWRlJyk7XG4gICAgICAgIHZhciB2YXJpYWJsZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZSgnZGFya3JlYWRlci0tdmFyaWFibGVzJyk7XG4gICAgICAgIHZhciBzZWxlY3Rpb25Db2xvcnMgPSBnZXRTZWxlY3Rpb25Db2xvcihmaWx0ZXIpO1xuICAgICAgICB2YXIgZGFya1NjaGVtZUJhY2tncm91bmRDb2xvciA9IGZpbHRlci5kYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yLCBkYXJrU2NoZW1lVGV4dENvbG9yID0gZmlsdGVyLmRhcmtTY2hlbWVUZXh0Q29sb3IsIGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yID0gZmlsdGVyLmxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yLCBsaWdodFNjaGVtZVRleHRDb2xvciA9IGZpbHRlci5saWdodFNjaGVtZVRleHRDb2xvciwgbW9kZSA9IGZpbHRlci5tb2RlO1xuICAgICAgICB2YXIgc2NoZW1lQmFja2dyb3VuZENvbG9yID0gbW9kZSA9PT0gMCA/IGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yIDogZGFya1NjaGVtZUJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdmFyIHNjaGVtZVRleHRDb2xvciA9IG1vZGUgPT09IDAgPyBsaWdodFNjaGVtZVRleHRDb2xvciA6IGRhcmtTY2hlbWVUZXh0Q29sb3I7XG4gICAgICAgIHNjaGVtZUJhY2tncm91bmRDb2xvciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihwYXJzZUNvbG9yV2l0aENhY2hlKHNjaGVtZUJhY2tncm91bmRDb2xvciksIGZpbHRlcik7XG4gICAgICAgIHNjaGVtZVRleHRDb2xvciA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihwYXJzZUNvbG9yV2l0aENhY2hlKHNjaGVtZVRleHRDb2xvciksIGZpbHRlcik7XG4gICAgICAgIHZhcmlhYmxlU3R5bGUudGV4dENvbnRlbnQgPSBbXG4gICAgICAgICAgICBcIjpyb290IHtcIixcbiAgICAgICAgICAgIFwiICAgLS1kYXJrcmVhZGVyLW5ldXRyYWwtYmFja2dyb3VuZDogXCIuY29uY2F0KHNjaGVtZUJhY2tncm91bmRDb2xvciwgXCI7XCIpLFxuICAgICAgICAgICAgXCIgICAtLWRhcmtyZWFkZXItbmV1dHJhbC10ZXh0OiBcIi5jb25jYXQoc2NoZW1lVGV4dENvbG9yLCBcIjtcIiksXG4gICAgICAgICAgICBcIiAgIC0tZGFya3JlYWRlci1zZWxlY3Rpb24tYmFja2dyb3VuZDogXCIuY29uY2F0KHNlbGVjdGlvbkNvbG9ycy5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24sIFwiO1wiKSxcbiAgICAgICAgICAgIFwiICAgLS1kYXJrcmVhZGVyLXNlbGVjdGlvbi10ZXh0OiBcIi5jb25jYXQoc2VsZWN0aW9uQ29sb3JzLmZvcmVncm91bmRDb2xvclNlbGVjdGlvbiwgXCI7XCIpLFxuICAgICAgICAgICAgXCJ9XCJcbiAgICAgICAgXS5qb2luKCdcXG4nKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodmFyaWFibGVTdHlsZSwgaW5saW5lU3R5bGUubmV4dFNpYmxpbmcpO1xuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodmFyaWFibGVTdHlsZSwgJ3ZhcmlhYmxlcycpO1xuICAgICAgICB2YXIgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoJ2RhcmtyZWFkZXItLXJvb3QtdmFycycpO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShyb290VmFyc1N0eWxlLCB2YXJpYWJsZVN0eWxlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdmFyIGluamVjdFByb3h5QXJnID0gIShmaXhlcyAmJiBmaXhlcy5kaXNhYmxlU3R5bGVTaGVldHNQcm94eSk7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwcm94eVNjcmlwdCA9IGNyZWF0ZU9yVXBkYXRlU2NyaXB0KCdkYXJrcmVhZGVyLS1wcm94eScpO1xuICAgICAgICAgICAgcHJveHlTY3JpcHQuYXBwZW5kKFwiKFwiLmNvbmNhdChpbmplY3RQcm94eSwgXCIpKFwiKS5jb25jYXQoaW5qZWN0UHJveHlBcmcsIFwiKVwiKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShwcm94eVNjcmlwdCwgcm9vdFZhcnNTdHlsZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBwcm94eVNjcmlwdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpIHtcbiAgICAgICAgdmFyIGlubGluZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZSgnZGFya3JlYWRlci0taW5saW5lJywgcm9vdCk7XG4gICAgICAgIGlubGluZVN0eWxlLnRleHRDb250ZW50ID0gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpO1xuICAgICAgICByb290Lmluc2VydEJlZm9yZShpbmxpbmVTdHlsZSwgcm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgdmFyIG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKCdkYXJrcmVhZGVyLS1vdmVycmlkZScsIHJvb3QpO1xuICAgICAgICBvdmVycmlkZVN0eWxlLnRleHRDb250ZW50ID0gZml4ZXMgJiYgZml4ZXMuY3NzID8gcmVwbGFjZUNTU1RlbXBsYXRlcyhmaXhlcy5jc3MpIDogJyc7XG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKG92ZXJyaWRlU3R5bGUsIGlubGluZVN0eWxlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdmFyIGludmVydFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZSgnZGFya3JlYWRlci0taW52ZXJ0Jywgcm9vdCk7XG4gICAgICAgIGlmIChmaXhlcyAmJiBBcnJheS5pc0FycmF5KGZpeGVzLmludmVydCkgJiYgZml4ZXMuaW52ZXJ0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gW1xuICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KGZpeGVzLmludmVydC5qb2luKCcsICcpLCBcIiB7XCIpLFxuICAgICAgICAgICAgICAgIFwiICAgIGZpbHRlcjogXCIuY29uY2F0KGdldENTU0ZpbHRlclZhbHVlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXIpLCB7IGNvbnRyYXN0OiBmaWx0ZXIubW9kZSA9PT0gMCA/IGZpbHRlci5jb250cmFzdCA6IGNsYW1wKGZpbHRlci5jb250cmFzdCAtIDEwLCAwLCAxMDApIH0pKSwgXCIgIWltcG9ydGFudDtcIiksXG4gICAgICAgICAgICAgICAgJ30nLFxuICAgICAgICAgICAgXS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUoaW52ZXJ0U3R5bGUsIG92ZXJyaWRlU3R5bGUubmV4dFNpYmxpbmcpO1xuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuYWRkKHJvb3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTVGVtcGxhdGVzKCRjc3NUZXh0KSB7XG4gICAgICAgIHJldHVybiAkY3NzVGV4dC5yZXBsYWNlKC9cXCR7KC4rPyl9L2csIGZ1bmN0aW9uIChfLCAkY29sb3IpIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKTtcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlDb2xvcihjb2xvciwgZmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAkY29sb3I7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhbkZhbGxiYWNrU3R5bGUoKSB7XG4gICAgICAgIHZhciBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrcmVhZGVyLS1mYWxsYmFjaycpO1xuICAgICAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgICAgIGZhbGxiYWNrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRHluYW1pY1N0eWxlT3ZlcnJpZGVzKCkge1xuICAgICAgICBjYW5jZWxSZW5kZXJpbmcoKTtcbiAgICAgICAgdmFyIGFsbFN0eWxlcyA9IGdldE1hbmFnZWFibGVTdHlsZXMoZG9jdW1lbnQpO1xuICAgICAgICB2YXIgbmV3TWFuYWdlcnMgPSBhbGxTdHlsZXNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIGNyZWF0ZU1hbmFnZXIoc3R5bGUpOyB9KTtcbiAgICAgICAgbmV3TWFuYWdlcnNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1hbmFnZXIpIHsgcmV0dXJuIG1hbmFnZXIuZGV0YWlscyh7IHNlY29uZFJvdW5kOiBmYWxzZSB9KTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRldGFpbCkgeyByZXR1cm4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwOyB9KVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWwucnVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRhbnRzKCk7XG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLnNldE9uUm9vdFZhcmlhYmxlQ2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignLmRhcmtyZWFkZXItLXJvb3QtdmFycycpLCBmaWx0ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCcuZGFya3JlYWRlci0tcm9vdC12YXJzJyksIGZpbHRlcik7XG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikgeyByZXR1cm4gbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7IH0pO1xuICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VyKSB7IHJldHVybiBtYW5hZ2VyLndhdGNoKCk7IH0pO1xuICAgICAgICB2YXIgaW5saW5lU3R5bGVFbGVtZW50cyA9IHRvQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKTtcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKGhvc3Quc2hhZG93Um9vdCk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBob3N0LnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwdXNoKGlubGluZVN0eWxlRWxlbWVudHMsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlubGluZVN0eWxlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG92ZXJyaWRlSW5saW5lU3R5bGUoZWwsIGZpbHRlciwgaWdub3JlZElubGluZVNlbGVjdG9ycywgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpOyB9KTtcbiAgICAgICAgaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKGRvY3VtZW50KTtcbiAgICB9XG4gICAgdmFyIGxvYWRpbmdTdHlsZXNDb3VudGVyID0gMDtcbiAgICB2YXIgbG9hZGluZ1N0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBjcmVhdGVNYW5hZ2VyKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGxvYWRpbmdTdHlsZUlkID0gKytsb2FkaW5nU3R5bGVzQ291bnRlcjtcbiAgICAgICAgZnVuY3Rpb24gbG9hZGluZ1N0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKCFpc0RPTVJlYWR5KCkgfHwgIWRpZERvY3VtZW50U2hvd1VwKSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5hZGQobG9hZGluZ1N0eWxlSWQpO1xuICAgICAgICAgICAgICAgIGxvZ0luZm8oXCJDdXJyZW50IGFtb3VudCBvZiBzdHlsZXMgbG9hZGluZzogXCIuY29uY2F0KGxvYWRpbmdTdHlsZXMuc2l6ZSkpO1xuICAgICAgICAgICAgICAgIHZhciBmYWxsYmFja1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmtyZWFkZXItLWZhbGxiYWNrJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFmYWxsYmFja1N0eWxlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoZmlsdGVyLCB7IHN0cmljdDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdFbmQoKSB7XG4gICAgICAgICAgICBsb2FkaW5nU3R5bGVzLmRlbGV0ZShsb2FkaW5nU3R5bGVJZCk7XG4gICAgICAgICAgICBsb2dJbmZvKFwiUmVtb3ZlZCBsb2FkaW5nU3R5bGUgXCIuY29uY2F0KGxvYWRpbmdTdHlsZUlkLCBcIiwgbm93IGF3YWl0aW5nOiBcIikuY29uY2F0KGxvYWRpbmdTdHlsZXMuc2l6ZSkpO1xuICAgICAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCAmJiBpc0RPTVJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgICAgICB2YXIgZGV0YWlscyA9IG1hbmFnZXIuZGV0YWlscyh7IHNlY29uZFJvdW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKCFkZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWxzLnJ1bGVzKTtcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hbmFnZXIgPSBtYW5hZ2VTdHlsZShlbGVtZW50LCB7IHVwZGF0ZTogdXBkYXRlLCBsb2FkaW5nU3RhcnQ6IGxvYWRpbmdTdGFydCwgbG9hZGluZ0VuZDogbG9hZGluZ0VuZCB9KTtcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5zZXQoZWxlbWVudCwgbWFuYWdlcik7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVNYW5hZ2VyKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBzdHlsZU1hbmFnZXJzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgc3R5bGVNYW5hZ2Vycy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHRocm90dGxlZFJlbmRlckFsbFN0eWxlcyA9IHRocm90dGxlKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHsgcmV0dXJuIG1hbmFnZXIucmVuZGVyKGZpbHRlciwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpOyB9KTtcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikgeyByZXR1cm4gbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7IH0pO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICAgIHZhciBjYW5jZWxSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm90dGxlZFJlbmRlckFsbFN0eWxlcy5jYW5jZWwoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG9uRE9NUmVhZHkoKSB7XG4gICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XG4gICAgdmFyIGRpZERvY3VtZW50U2hvd1VwID0gIWRvY3VtZW50LmhpZGRlbjtcbiAgICBmdW5jdGlvbiB3YXRjaEZvckRvY3VtZW50VmlzaWJpbGl0eShjYWxsYmFjaykge1xuICAgICAgICB2YXIgYWxyZWFkeVdhdGNoaW5nID0gQm9vbGVhbihkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcik7XG4gICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JEb2N1bWVudFZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIGRpZERvY3VtZW50U2hvd1VwID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFhbHJlYWR5V2F0Y2hpbmcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIpO1xuICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCkge1xuICAgICAgICBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpO1xuICAgICAgICBmdW5jdGlvbiBydW5EeW5hbWljU3R5bGUoKSB7XG4gICAgICAgICAgICBjcmVhdGVEeW5hbWljU3R5bGVPdmVycmlkZXMoKTtcbiAgICAgICAgICAgIHdhdGNoRm9yVXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gJiYgIWZpbHRlci5pbW1lZGlhdGVNb2RpZnkpIHtcbiAgICAgICAgICAgIHdhdGNoRm9yRG9jdW1lbnRWaXNpYmlsaXR5KHJ1bkR5bmFtaWNTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBydW5EeW5hbWljU3R5bGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcldoZW5BdmFpbGFibGUoZmlsdGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKG5vZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzKSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNYW5nZXIgPSBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5wdXNoKG5ld01hbmdlcik7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hbmdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB3YXRjaEZvclVwZGF0ZXMoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VkU3R5bGVzID0gQXJyYXkuZnJvbShzdHlsZU1hbmFnZXJzLmtleXMoKSk7XG4gICAgICAgIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKG1hbmFnZWRTdHlsZXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGNyZWF0ZWQgPSBfYS5jcmVhdGVkLCB1cGRhdGVkID0gX2EudXBkYXRlZCwgcmVtb3ZlZCA9IF9hLnJlbW92ZWQsIG1vdmVkID0gX2EubW92ZWQ7XG4gICAgICAgICAgICB2YXIgc3R5bGVzVG9SZW1vdmUgPSByZW1vdmVkO1xuICAgICAgICAgICAgdmFyIHN0eWxlc1RvTWFuYWdlID0gY3JlYXRlZC5jb25jYXQodXBkYXRlZCkuY29uY2F0KG1vdmVkKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpOyB9KTtcbiAgICAgICAgICAgIHZhciBzdHlsZXNUb1Jlc3RvcmUgPSBtb3ZlZFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN0eWxlKSB7IHJldHVybiBzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSk7IH0pO1xuICAgICAgICAgICAgc3R5bGVzVG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIHJlbW92ZU1hbmFnZXIoc3R5bGUpOyB9KTtcbiAgICAgICAgICAgIHZhciBuZXdNYW5hZ2VycyA9IHN0eWxlc1RvTWFuYWdlXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIGNyZWF0ZU1hbmFnZXIoc3R5bGUpOyB9KTtcbiAgICAgICAgICAgIG5ld01hbmFnZXJzXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobWFuYWdlcikgeyByZXR1cm4gbWFuYWdlci5kZXRhaWxzKHsgc2Vjb25kUm91bmQ6IGZhbHNlIH0pOyB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRldGFpbCkgeyByZXR1cm4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwOyB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbC5ydWxlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xuICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikgeyByZXR1cm4gbWFuYWdlci5yZW5kZXIoZmlsdGVyLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7IH0pO1xuICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikgeyByZXR1cm4gbWFuYWdlci53YXRjaCgpOyB9KTtcbiAgICAgICAgICAgIHN0eWxlc1RvUmVzdG9yZS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkgeyByZXR1cm4gc3R5bGVNYW5hZ2Vycy5nZXQoc3R5bGUpLnJlc3RvcmUoKTsgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhzaGFkb3dSb290KTtcbiAgICAgICAgICAgIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhzaGFkb3dSb290KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdhdGNoRm9ySW5saW5lU3R5bGVzKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBvdmVycmlkZUlubGluZVN0eWxlKGVsZW1lbnQsIGZpbHRlciwgaWdub3JlZElubGluZVNlbGVjdG9ycywgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZUF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVBdHRyLmluY2x1ZGVzKCctLScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kYW50cygpO1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJy5kYXJrcmVhZGVyLS1yb290LXZhcnMnKSwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KTtcbiAgICAgICAgICAgIHZhciBpbmxpbmVTdHlsZUVsZW1lbnRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKElOTElORV9TVFlMRV9TRUxFQ1RPUik7XG4gICAgICAgICAgICBpZiAoaW5saW5lU3R5bGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yRWFjaChpbmxpbmVTdHlsZUVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG92ZXJyaWRlSW5saW5lU3R5bGUoZWwsIGZpbHRlciwgaWdub3JlZElubGluZVNlbGVjdG9ycywgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIob25ET01SZWFkeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKSB7XG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikgeyByZXR1cm4gbWFuYWdlci5wYXVzZSgpOyB9KTtcbiAgICAgICAgc3RvcFN0eWxlUG9zaXRpb25XYXRjaGVycygpO1xuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKTtcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCk7XG4gICAgICAgIHJlbW92ZURPTVJlYWR5TGlzdGVuZXIob25ET01SZWFkeSk7XG4gICAgICAgIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHZhciBtZXRhT2JzZXJ2ZXI7XG4gICAgZnVuY3Rpb24gYWRkTWV0YUxpc3RlbmVyKCkge1xuICAgICAgICBtZXRhT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlci1sb2NrXCJdJykpIHtcbiAgICAgICAgICAgICAgICBtZXRhT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWV0YU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpIHtcbiAgICAgICAgdmFyIG1ldGFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgICAgICBtZXRhRWxlbWVudC5uYW1lID0gJ2RhcmtyZWFkZXInO1xuICAgICAgICBtZXRhRWxlbWVudC5jb250ZW50ID0gSU5TVEFOQ0VfSUQ7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUVsZW1lbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyLWxvY2tcIl0nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJyk7XG4gICAgICAgIGlmIChtZXRhKSB7XG4gICAgICAgICAgICBpZiAobWV0YS5jb250ZW50ICE9PSBJTlNUQU5DRV9JRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpO1xuICAgICAgICBhZGRNZXRhTGlzdGVuZXIoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUR5bmFtaWNUaGVtZShmaWx0ZXJDb25maWcsIGR5bmFtaWNUaGVtZUZpeGVzLCBpZnJhbWUpIHtcbiAgICAgICAgZmlsdGVyID0gZmlsdGVyQ29uZmlnO1xuICAgICAgICBmaXhlcyA9IGR5bmFtaWNUaGVtZUZpeGVzO1xuICAgICAgICBpZiAoZml4ZXMpIHtcbiAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gQXJyYXkuaXNBcnJheShmaXhlcy5pZ25vcmVJbWFnZUFuYWx5c2lzKSA/IGZpeGVzLmlnbm9yZUltYWdlQW5hbHlzaXMgOiBbXTtcbiAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KGZpeGVzLmlnbm9yZUlubGluZVN0eWxlKSA/IGZpeGVzLmlnbm9yZUlubGluZVN0eWxlIDogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IFtdO1xuICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXIuaW1tZWRpYXRlTW9kaWZ5KSB7XG4gICAgICAgICAgICBzZXRJc0RPTVJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlzSUZyYW1lJDEgPSBpZnJhbWU7XG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XG4gICAgICAgICAgICBpZiAoaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWRhcmtyZWFkZXItbW9kZScsICdkeW5hbWljJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWRhcmtyZWFkZXItc2NoZW1lJywgZmlsdGVyLm1vZGUgPyAnZGFyaycgOiAnZGltbWVkJyk7XG4gICAgICAgICAgICBjcmVhdGVUaGVtZUFuZFdhdGNoRm9yVXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmFsbGJhY2tTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoJ2RhcmtyZWFkZXItLWZhbGxiYWNrJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZhbGxiYWNrU3R5bGUpO1xuICAgICAgICAgICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoZmlsdGVyLCB7IHN0cmljdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkT2JzZXJ2ZXJfMSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkT2JzZXJ2ZXJfMS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGhlbWVBbmRXYXRjaEZvclVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhlYWRPYnNlcnZlcl8xLm9ic2VydmUoZG9jdW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb3h5KCkge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnX19kYXJrcmVhZGVyX19jbGVhblVwJykpO1xuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignLmRhcmtyZWFkZXItLXByb3h5JykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVEeW5hbWljVGhlbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWRhcmtyZWFkZXItbW9kZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZGFya3JlYWRlci1zY2hlbWVcIik7XG4gICAgICAgIGNsZWFuRHluYW1pY1RoZW1lQ2FjaGUoKTtcbiAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFya3JlYWRlci0tZmFsbGJhY2snKSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XG4gICAgICAgICAgICByZXN0b3JlTWV0YVRoZW1lQ29sb3IoKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCcuZGFya3JlYWRlci0tdXNlci1hZ2VudCcpKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCcuZGFya3JlYWRlci0tdGV4dCcpKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCcuZGFya3JlYWRlci0taW52ZXJ0JykpO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJy5kYXJrcmVhZGVyLS1pbmxpbmUnKSk7XG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignLmRhcmtyZWFkZXItLW92ZXJyaWRlJykpO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJy5kYXJrcmVhZGVyLS12YXJpYWJsZXMnKSk7XG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignLmRhcmtyZWFkZXItLXJvb3QtdmFycycpKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJykpO1xuICAgICAgICAgICAgcmVtb3ZlUHJveHkoKTtcbiAgICAgICAgfVxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShyb290LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrcmVhZGVyLS1pbmxpbmUnKSk7XG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcignLmRhcmtyZWFkZXItLW92ZXJyaWRlJykpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmNsZWFyKCk7XG4gICAgICAgIGZvckVhY2goc3R5bGVNYW5hZ2Vycy5rZXlzKCksIGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlTWFuYWdlcihlbCk7IH0pO1xuICAgICAgICBsb2FkaW5nU3R5bGVzLmNsZWFyKCk7XG4gICAgICAgIGNsZWFuTG9hZGluZ0xpbmtzKCk7XG4gICAgICAgIGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhcmtyZWFkZXInKSwgcmVtb3ZlTm9kZSk7XG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuc3BsaWNlKDApO1xuICAgICAgICBtZXRhT2JzZXJ2ZXIgJiYgbWV0YU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYW5EeW5hbWljVGhlbWVDYWNoZSgpIHtcbiAgICAgICAgdmFyaWFibGVzU3RvcmUuY2xlYXIoKTtcbiAgICAgICAgcGFyc2VkVVJMQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JVcGRhdGVzKCk7XG4gICAgICAgIGNsZWFuTW9kaWZpY2F0aW9uQ2FjaGUoKTtcbiAgICAgICAgY2xlYXJDb2xvckNhY2hlKCk7XG4gICAgfVxuXG4gICAgdmFyIGJsb2JSZWdleCA9IC91cmxcXChcXFwiKGJsb2JcXDouKj8pXFxcIlxcKS9nO1xuICAgIGZ1bmN0aW9uIHJlcGxhY2VCbG9icyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlcywgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRNYXRjaGVzKGJsb2JSZWdleCwgdGV4dCwgMSkuZm9yRWFjaChmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBsb2FkQXNEYXRhVVJMKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBQcm9taXNlLmFsbChwcm9taXNlcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0ZXh0LnJlcGxhY2UoYmxvYlJlZ2V4LCBmdW5jdGlvbiAoKSB7IHJldHVybiBcInVybChcXFwiXCIuY29uY2F0KGRhdGEuc2hpZnQoKSwgXCJcXFwiKVwiKTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGJhbm5lciA9IFwiLypcXG4gICAgICAgICAgICAgICAgICAgICAgICBfX19fX19fXFxuICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgIFxcXFxcXG4gICAgICAgICAgICAgICAgICAgICAgLj09LiAgICAuPT0uXFxuICAgICAgICAgICAgICAgICAgICAgKCggICkpPT0oKCAgKSlcXG4gICAgICAgICAgICAgICAgICAgIC8gXFxcIj09XFxcIiAgICBcXFwiPT1cXFwiXFxcXFxcbiAgICAgICAgICAgICAgICAgICAvX19fX3x8IHx8IHx8X19fXFxcXFxcbiAgICAgICBfX19fX19fXyAgICAgX19fXyAgICBfX19fX19fXyAgX19fICAgIF9fX1xcbiAgICAgICB8ICBfX18gIFxcXFwgICAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgfCAgLyAgL1xcbiAgICAgICB8ICB8ICBcXFxcICBcXFxcIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF8vICAvXFxuICAgICAgIHwgIHwgICApICAvICAvX19cXFxcICBcXFxcIHwgIHxfXy8gIC98ICBfX18gIFxcXFxcXG4gICAgICAgfCAgfF9fLyAgLyAgX19fX19fICBcXFxcfCAgX19fXyAgXFxcXHwgIHwgIFxcXFwgIFxcXFxcXG5fX19fX19ffF9fX19fX18vX18vIF9fX18gXFxcXF9fXFxcXF9ffF9fX1xcXFxfX1xcXFxfX3xfX19cXFxcX19cXFxcX19fX1xcbnwgIF9fXyAgXFxcXCB8ICBfX19fLyAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgX19fX3wgIF9fXyAgXFxcXFxcbnwgIHwgIFxcXFwgIFxcXFx8ICB8X19fIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF9fX3wgIHwgIFxcXFwgIFxcXFxcXG58ICB8X18vICAvfCAgX19fXy8gIC9fX1xcXFwgIFxcXFwgfCAgfCAgICkgIHwgIF9fX198ICB8X18vICAvXFxufCAgX19fXyAgXFxcXHwgIHxfXy8gIF9fX19fXyAgXFxcXHwgIHxfXy8gIC98ICB8X19ffCAgX19fXyAgXFxcXFxcbnxfX3wgICBcXFxcX19cXFxcX19fXy9fXy8gICAgICBcXFxcX19cXFxcX19fX19fXy8gfF9fX19fX3xfX3wgICBcXFxcX19cXFxcXFxuICAgICAgICAgICAgICAgIGh0dHBzOi8vZGFya3JlYWRlci5vcmdcXG4qL1xcblxcbi8qISBEYXJrIHJlYWRlciBnZW5lcmF0ZWQgQ1NTIHwgTGljZW5zZWQgdW5kZXIgTUlUIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrcmVhZGVyL2RhcmtyZWFkZXIvYmxvYi9tYWluL0xJQ0VOU0UgKi9cXG5cIjtcbiAgICBmdW5jdGlvbiBjb2xsZWN0Q1NTKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTdGF0aWNDU1Moc2VsZWN0b3IsIGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGljU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGljU3R5bGUgJiYgc3RhdGljU3R5bGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goXCIvKiBcIi5jb25jYXQoY29tbWVudCwgXCIgKi9cIikpO1xuICAgICAgICAgICAgICAgICAgICBjc3MucHVzaChzdGF0aWNTdHlsZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNzcy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3NzLCBtb2RpZmllZENTUywgZm9ybWF0dGVkQ1NTLCBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MgPSBbYmFubmVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUygnLmRhcmtyZWFkZXItLWZhbGxiYWNrJywgJ0ZhbGxiYWNrIFN0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoJy5kYXJrcmVhZGVyLS11c2VyLWFnZW50JywgJ1VzZXItQWdlbnQgU3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN0YXRpY0NTUygnLmRhcmtyZWFkZXItLXRleHQnLCAnVGV4dCBTdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKCcuZGFya3JlYWRlci0taW52ZXJ0JywgJ0ludmVydCBTdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3RhdGljQ1NTKCcuZGFya3JlYWRlci0tdmFyaWFibGVzJywgJ1ZhcmlhYmxlcyBTdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRDU1MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXJrcmVhZGVyLS1zeW5jJykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvckVhY2goZWxlbWVudC5zaGVldC5jc3NSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSAmJiBydWxlLmNzc1RleHQgJiYgbW9kaWZpZWRDU1MucHVzaChydWxlLmNzc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVkQ1NTLmxlbmd0aCkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZENTUyA9IGZvcm1hdENTUyhtb2RpZmllZENTUy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MucHVzaCgnLyogTW9kaWZpZWQgQ1NTICovJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IChfYSA9IGNzcykucHVzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVwbGFjZUJsb2JzKGZvcm1hdHRlZENTUyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5hcHBseShfYSwgW19jLnNlbnQoKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTdGF0aWNDU1MoJy5kYXJrcmVhZGVyLS1vdmVycmlkZScsICdPdmVycmlkZSBTdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBjc3Muam9pbignXFxuJyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBpc0lGcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgZnVuY3Rpb24gZW5hYmxlKHRoZW1lT3B0aW9ucywgZml4ZXMpIHtcbiAgICAgICAgaWYgKHRoZW1lT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHRoZW1lT3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIGlmIChmaXhlcyA9PT0gdm9pZCAwKSB7IGZpeGVzID0gbnVsbDsgfVxuICAgICAgICB2YXIgdGhlbWUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9USEVNRSksIHRoZW1lT3B0aW9ucyk7XG4gICAgICAgIGlmICh0aGVtZS5lbmdpbmUgIT09IFRoZW1lRW5naW5lcy5keW5hbWljVGhlbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlbWUgZW5naW5lIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlT3JVcGRhdGVEeW5hbWljVGhlbWUodGhlbWUsIGZpeGVzLCBpc0lGcmFtZSk7XG4gICAgICAgIGlzRGFya1JlYWRlckVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiBpc0RhcmtSZWFkZXJFbmFibGVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcbiAgICAgICAgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZGFya1NjaGVtZSA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbiAgICB2YXIgc3RvcmUgPSB7XG4gICAgICAgIHRoZW1lT3B0aW9uczogbnVsbCxcbiAgICAgICAgZml4ZXM6IG51bGwsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBoYW5kbGVDb2xvclNjaGVtZSgpIHtcbiAgICAgICAgaWYgKGRhcmtTY2hlbWUubWF0Y2hlcykge1xuICAgICAgICAgICAgZW5hYmxlKHN0b3JlLnRoZW1lT3B0aW9ucywgc3RvcmUuZml4ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF1dG8odGhlbWVPcHRpb25zLCBmaXhlcykge1xuICAgICAgICBpZiAodGhlbWVPcHRpb25zID09PSB2b2lkIDApIHsgdGhlbWVPcHRpb25zID0ge307IH1cbiAgICAgICAgaWYgKGZpeGVzID09PSB2b2lkIDApIHsgZml4ZXMgPSBudWxsOyB9XG4gICAgICAgIGlmICh0aGVtZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN0b3JlID0geyB0aGVtZU9wdGlvbnM6IHRoZW1lT3B0aW9ucywgZml4ZXM6IGZpeGVzIH07XG4gICAgICAgICAgICBoYW5kbGVDb2xvclNjaGVtZSgpO1xuICAgICAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNvbG9yU2NoZW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUuYWRkTGlzdGVuZXIoaGFuZGxlQ29sb3JTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNvbG9yU2NoZW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUucmVtb3ZlTGlzdGVuZXIoaGFuZGxlQ29sb3JTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGV4cG9ydEdlbmVyYXRlZENTUygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGNvbGxlY3RDU1MoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2QkMTtcblxuICAgIGV4cG9ydHMuYXV0byA9IGF1dG87XG4gICAgZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbiAgICBleHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbiAgICBleHBvcnRzLmV4cG9ydEdlbmVyYXRlZENTUyA9IGV4cG9ydEdlbmVyYXRlZENTUztcbiAgICBleHBvcnRzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBleHBvcnRzLnNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2Q7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBEYXJrUmVhZGVyID0gcmVxdWlyZSgnZGFya3JlYWRlcicpO1xyXG5EYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhclwiKS5pbm5lckhUTUwgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4vLyBEYXJrUmVhZGVyLmF1dG8oKTtcclxuXHJcbi8vICEgdGhpcyB2YWx1ZSBpcyBnbG9iYWwgYW5kIHdpbGwgYmUgYWNjZXNzZWQgYnkgb3RoZXIgZnVuY3Rpb25zXHJcbnZhciBhZGRfMjUgPSAyNTtcclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBhZGRfMjUgdmFyaWFibGVcclxuICogdG9nZ2xlcyBkaXNwbGF5IG9mIHRoZSBidXR0b25cclxuICovXHJcbmZ1bmN0aW9uIGlzX2hsX21hdGhzKCkge1xyXG4gIHZhciBib29sX2hsX21hdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xyXG4gIHZhciBhZGRpbmdfMjVfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X3RleHRcIik7XHJcbiAgdmFyIHZhbHVlID0gYm9vbF9obF9tYXRocy52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgYm9vbF9obF9tYXRocy52YWx1ZSA9IDE7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjJzXCI7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBhZGRfMjUgPSAyNTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGJvb2xfaGxfbWF0aHMudmFsdWUgPSAwO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgYWRkXzI1ID0gMDtcclxuICAgIHZhbHVlID0gMDtcclxuICB9XHJcbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbn1cclxuaXNfaGxfbWF0aHMoKTtcclxuXHJcbi8vIFwibGlzdGVuc1wiIGZvciBhIGNsaWNrIGZyb20gdGhlIGlzX2hsX21hdGhzIGZ1bmN0aW9uXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vbF9obF9tYXRoc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaXNfaGxfbWF0aHMpO1xyXG5cclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBsY3ZwIHZhcmlhYmxlXHJcbiAqIHRvZ2dsZXMgZGlzcGxheSBvZiB0aGUgYnV0dG9uXHJcbiAqL1xyXG5cclxudmFyIGxjdnA7XHJcbmZ1bmN0aW9uIGlzX2xjdnAoKSB7XHJcbiAgdmFyIGxjdnBfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxjdnBcIik7XHJcbiAgdmFyIHZhbHVlID0gbGN2cF9pbnB1dC52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgbGN2cCA9IHRydWU7XHJcbiAgICBsY3ZwX2lucHV0LnZhbHVlID0gMTtcclxuICAgIHZhbHVlID0gMDtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhbHVlID0gMTtcclxuICAgIGxjdnAgPSBmYWxzZTtcclxuICAgIGxjdnBfaW5wdXQudmFsdWUgPSAwO1xyXG4gIH1cclxuICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICByZXR1cm4gbGN2cDtcclxufVxyXG5cclxuaXNfbGN2cCgpO1xyXG5cclxuLy8gXCJsaXN0ZW5zXCIgZm9yIGEgY2xpY2sgZnJvbSB0aGUgaXNfbGN2cCBmdW5jdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxjdnBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGlzX2xjdnApO1xyXG5cclxuLy8gaGlkZXMgdGhlIFwiQWRkaW5nICsyNVwiIHRleHQgYmVmb3JlIHRoZSBwYWdlIGxvYWRzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG52YXIgdGFyZ2V0X251bTtcclxudmFyIGhsX251bTtcclxudmFyIG9sX251bTtcclxuXHJcbi8qKlxyXG4gKiBBZGp1c3RzIHRoZSBncmFkZXMgdGhhdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGluIG9yZGluYXJ5IGxldmVsIGFuZCBoaWdoZXIgbGV2ZWwgZm9yIGNvcnJlY3Qgb3V0cHV0XHJcbiAqIGZvciBleGFtcGxlIGEgSDYgYW5kIE8yIGFyZSBib3RoIHdvcnRoIDQ2IHBvaW50c1xyXG4gKiBAcGFyYW0ge2FycmF5fSBsZXR0ZXJfZ3JhZGVzXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGp1c3RvcihsZXR0ZXJfZ3JhZGVzKSB7XHJcbiAgdmFyIENIQU5HRUFCTEVTID0gW1wiaDVcIiwgXCJoNlwiLCBcImg3XCIsIFwibzFcIiwgXCJvMlwiLCBcIm8zXCJdO1xyXG4gIHZhciBITF9TVUJTID0gW1wiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCIsIFwiaDdcIl07XHJcblxyXG4gIHZhciBjb3VudGVkX2hsID0gMDtcclxuICB2YXIgY291bnRlZF9vbCA9IDA7XHJcblxyXG4gIHZhciBkaWN0X2NoYW5nZWFibGVzID0ge1xyXG4gICAgXCJoNVwiOiBcIm8xXCIsXHJcbiAgICBcImg2XCI6IFwibzJcIixcclxuICAgIFwiaDdcIjogXCJvM1wiLFxyXG4gICAgXCJvMVwiOiBcImg1XCIsXHJcbiAgICBcIm8yXCI6IFwiaDZcIixcclxuICAgIFwibzNcIjogXCJoN1wiLFxyXG4gIH07XHJcblxyXG4gIHZhciBobF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xyXG4gIHZhciBvbF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjdXJyZW50ID0gbGV0dGVyX2dyYWRlc1tpXTtcclxuICAgIGlmIChjdXJyZW50IGluIGRpY3RfY2hhbmdlYWJsZXMpIHtcclxuICAgICAgaWYgKGN1cnJlbnQgaW4gQ0hBTkdFQUJMRVMpIHtcclxuICAgICAgICBobF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG9sX2luZGV4X2NoYW5nZWFibGVzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoSExfU1VCUy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICBjb3VudGVkX2hsICs9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY291bnRlZF9vbCArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG1pc3NfbWF0Y2hpbmdfY291bnRzID0gY291bnRlZF9obCAhPSBobF9udW0gJiYgY291bnRlZF9vbCAhPSBvbF9udW07XHJcblxyXG4gIGlmIChtaXNzX21hdGNoaW5nX2NvdW50cykge1xyXG4gICAgdmFyIG5lZWRlZF9obCA9IGhsX251bSAtIGNvdW50ZWRfaGw7XHJcbiAgICB2YXIgbmVlZGVkX29sID0gb2xfbnVtIC0gY291bnRlZF9vbDtcclxuXHJcbiAgICBpZiAobmVlZGVkX2hsIDwgMCkge1xyXG4gICAgICBuZWVkZWRfaGwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG5lZWRlZF9vbCA8IDApIHtcclxuICAgICAgbmVlZGVkX29sID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hhcmdlc19uZWVkZWQgPSBNYXRoLm1heChuZWVkZWRfaGwsIG5lZWRlZF9vbCk7XHJcbiAgICB2YXIgb2dfZ3JhZGU7XHJcbiAgICB2YXIgY2hhbmdlZF9ncmFkZTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBjaGFyZ2VzX25lZWRlZDsgaSsrKSB7XHJcblxyXG4gICAgICB2YXIgaW5kZXggPSBvbF9pbmRleF9jaGFuZ2VhYmxlc1tpXTtcclxuICAgICAgb2dfZ3JhZGUgPSBsZXR0ZXJfZ3JhZGVzW2luZGV4XTtcclxuXHJcbiAgICAgIGNoYW5nZWRfZ3JhZGUgPSBkaWN0X2NoYW5nZWFibGVzW29nX2dyYWRlXTtcclxuICAgICAgbGV0dGVyX2dyYWRlc1tpbmRleF0gPSBjaGFuZ2VkX2dyYWRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGxjdnApIHtcclxuICAgIHZhciBsY3ZwX21vZHVsZXMgPSB7XHJcbiAgICAgIDY2OiBcIkRpc3RpbmN0aW9uXCIsXHJcbiAgICAgIDQ2OiBcIk1lcml0XCIsXHJcbiAgICAgIDI4OiBcIlBhc3NcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGN2cF9ncmFkZXMgPSBbXCJoNFwiLCBcImg2XCIsIFwibzJcIiwgXCJvNFwiXTtcclxuXHJcbiAgICB2YXIgbGN2cF9wb2ludHMgPSB7XHJcbiAgICAgIFwiaDRcIjogNjYsXHJcbiAgICAgIFwiaDZcIjogNDYsXHJcbiAgICAgIFwibzJcIjogNDYsXHJcbiAgICAgIFwibzRcIjogMjhcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvbGxlY3RlZF9sY3ZwX3BvaW50cyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICAgIGlmIChsY3ZwX2dyYWRlcy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICAgIGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5wdXNoKGxjdnBfcG9pbnRzW2N1cnJlbnRdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaCg5OTkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgbWluX2xjdnBfcG9pbnQgPSBNYXRoLm1pbiguLi5jb2xsZWN0ZWRfbGN2cF9wb2ludHMpO1xyXG4gICAgdmFyIG1pbl9sY3ZwX2luZGV4ID0gY29sbGVjdGVkX2xjdnBfcG9pbnRzLmluZGV4T2YobWluX2xjdnBfcG9pbnQpO1xyXG4gICAgdmFyIHZhbGlkX2xjdnBfY2hhbmdlID0gbWluX2xjdnBfcG9pbnQgIT0gOTk5O1xyXG5cclxuICAgIGlmICh2YWxpZF9sY3ZwX2NoYW5nZSkge1xyXG4gICAgICBsZXR0ZXJfZ3JhZGVzW21pbl9sY3ZwX2luZGV4XSA9IGxjdnBfbW9kdWxlc1ttaW5fbGN2cF9wb2ludF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGV0dGVyX2dyYWRlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIHllYXJseSBqb2tlIHRoYXQgd2lsbCBiZSBhY3RpdmF0ZWQgaW4gbWF5IGFuZCBqdW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBtb3RpdmF0ZSgpIHtcclxuICBzZWNvbmRzICs9IDE7XHJcbiAgaWYgKDU5IDw9IHNlY29uZHMgJiYgc2Vjb25kcyA8PSA2MCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctaW5mb1wiKS5zcmMgPSBcImltYWdlcy9qb2tlLndlYnBcIjtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pbmZvXCIpLnNyYyA9IFwiaW1hZ2VzL3BvaW50cy1zeXN0ZW0ud2VicFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNlY29uZHMgPiA2MCkge1xyXG4gICAgc2Vjb25kcyA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgc2Vjb25kcyA9IDA7XHJcbnZhciBkdCA9IG5ldyBEYXRlKCk7XHJcbnZhciBtb250aCA9IGR0LmdldE1vbnRoKCkgKyAxOyAvLyBjYXVzZSBvZiAwIGluZGV4aW5nIG9mIHRoZSAxMiBtb250aHMgYmVjb21lcyAwIC0gMTFcclxuaWYgKFszLCA0LCA1XS5pbmNsdWRlcyhtb250aCkpIHtcclxuICBzZXRJbnRlcnZhbChtb3RpdmF0ZSwgMTAwMCk7XHJcbiAgbW90aXZhdGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdyYWRlIGF2ZXJhZ2UgYW5kIHBvaW50cyB0byBncmFkZXMgYXMgbGlzdCBvZiBudW1iZXJzXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHBvaW50c19uZWVkZWQgXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBnYXJfYW5kX3B0Zyhwb2ludHNfbmVlZGVkKSB7XHJcblxyXG4gIHBvaW50c19uZWVkZWQgPSBwb2ludHNfbmVlZGVkLnNvcnQoKTtcclxuXHJcbiAgdmFyIG1peGVkX3JhbmtzID0ge1xyXG4gICAgMTAwOiBcImgxXCIsXHJcbiAgICA4ODogXCJoMlwiLFxyXG4gICAgNzc6IFwiaDNcIixcclxuICAgIDY2OiBcImg0XCIsXHJcblxyXG4gICAgNTY6IFwiaDUvbzFcIixcclxuICAgIDQ2OiBcImg2L28yXCIsXHJcbiAgICAzNzogXCJoNy9vM1wiLFxyXG4gICAgMjg6IFwibzRcIixcclxuICAgIDIwOiBcIm81XCIsXHJcbiAgICAxMjogXCJvNlwiLFxyXG4gIH07XHJcblxyXG4gIGlmIChobF9udW0gPiAwKSB7XHJcbiAgICBtaXhlZF9yYW5rc1s1Nl0gPSBcImg1XCI7XHJcbiAgICBtaXhlZF9yYW5rc1s0Nl0gPSBcImg2XCI7XHJcbiAgICBtaXhlZF9yYW5rc1szN10gPSBcImg3XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2xfbnVtID4gMCkge1xyXG4gICAgbWl4ZWRfcmFua3NbNTZdID0gXCJvMVwiO1xyXG4gICAgbWl4ZWRfcmFua3NbNDZdID0gXCJvMlwiO1xyXG4gICAgbWl4ZWRfcmFua3NbMzddID0gXCJvM1wiO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJhbmtzID0ge1xyXG4gICAgXCJoMVwiOiA5MCxcclxuICAgIFwiaDJcIjogODAsXHJcbiAgICBcImgzXCI6IDcwLFxyXG4gICAgXCJoNFwiOiA2MCxcclxuICAgIFwiaDVcIjogNTYsXHJcbiAgICBcImg2XCI6IDQ2LFxyXG4gICAgXCJoN1wiOiAzNyxcclxuXHJcbiAgICBcIkRpc3RpbmN0aW9uXCI6IDY2LFxyXG4gICAgXCJNZXJpdFwiOiA0NixcclxuICAgIFwiUGFzc1wiOiAyOCxcclxuXHJcbiAgICBcIm8xXCI6IDU2LFxyXG4gICAgXCJvMlwiOiA0NixcclxuICAgIFwibzNcIjogMzcsXHJcbiAgICBcIm80XCI6IDI4LFxyXG4gICAgXCJvNVwiOiAyMCxcclxuICAgIFwibzZcIjogMTIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGhsX251bSA+IDApIHtcclxuICAgIHJhbmtzW1wiaDUvbzFcIl0gPSA1MDtcclxuICAgIHJhbmtzW1wiaDYvbzJcIl0gPSA0MDtcclxuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSAzMDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmFua3NbXCJoNS9vMVwiXSA9IDkwO1xyXG4gICAgcmFua3NbXCJoNi9vMlwiXSA9IDgwO1xyXG4gICAgcmFua3NbXCJoNy9vM1wiXSA9IDcwO1xyXG4gIH1cclxuXHJcbiAgdmFyIGdyYWRlc19zb3VsdGlvbiA9IFtdO1xyXG4gIHZhciB0b3RhbCA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHNfbmVlZGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocG9pbnRzX25lZWRlZFtpXSAhPSAyNSkge1xyXG4gICAgICBncmFkZXNfc291bHRpb24ucHVzaChtaXhlZF9yYW5rc1twb2ludHNfbmVlZGVkW2ldXSk7XHJcbiAgICAgIHRvdGFsICs9IHJhbmtzW21peGVkX3JhbmtzW3BvaW50c19uZWVkZWRbaV1dXTtcclxuICAgIH1cclxuICB9XHJcbiAgdG90YWwgPSB0b3RhbCAvIChobF9udW0gKyBvbF9udW0pO1xyXG4gIHZhciBwZXJjZW50YWdlX2F2ZyA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsKSkgKyBcIiVcIjtcclxuICBncmFkZXNfc291bHRpb24gPSBhZGp1c3RvcihncmFkZXNfc291bHRpb24pO1xyXG5cclxuICByZXR1cm4gW3BlcmNlbnRhZ2VfYXZnLCBncmFkZXNfc291bHRpb25dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5X3BsdXNfMjUoYm9vbF9obF9tYXRocykge1xyXG4gIHZhciBhZGRpbmdfMjVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpbmdfMjVfY29udGFpbmVyXCIpO1xyXG4gIGlmIChib29sX2hsX21hdGhzKSB7XHJcbiAgICBhZGRpbmdfMjVfY29udGFpbmVyLnN0eWxlID0gXCJkaXNwbGF5OiBibG9jaztcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkaW5nXzI1X2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWRfY29tbWFzKGdyYWRlcykge1xyXG4gIGdyYWRlcyA9IGdyYWRlcy50b1N0cmluZygpO1xyXG4gIGdyYWRlcyA9IGdyYWRlcy5yZXBsYWNlQWxsKFwiLFwiLCBcIjxzdHJvbmcgY2xhc3M9J2ltcG9ydGFudC1yZWQnPiw8L3N0cm9uZz5cIik7XHJcblxyXG4gIHJldHVybiBncmFkZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpbmNyZW1lbnRzIGEgZ3JhZGUncyB2YWx1ZSB0byB0aGUgbmV4dCBvbmVcclxuICogZm9yIGV4YW1wbGUgaW5jcmVtZW50IGEgZ3JhZGUgdGhhdCBoYXMgdGhlIHZhbHVlIG9mIDg4IHdpbGwgYmUgaW5jcmVhc2VkIHRvIDEwMFxyXG4gKiBAcGFyYW0ge2FycmF5fSBncmFkZXMgXHJcbiAqIEBwYXJhbSB7aW50fSBpbmRleCBcclxuICogQHBhcmFtIHtib29sZWFufSBtYXRoc19wbHVzXzI1IFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIHNpbmdsZV9jaGFuZ2UoZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSkge1xyXG4gIGNvbnN0IGlzX2luX2RpY3QgPSBbMTIsIDIwLCAyOCwgMzcsIDQ2LCA1NiwgNjYsIDc3LCA4OCwgMTAwXTtcclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIDEyOiAyMCxcclxuICAgIDIwOiAyOCxcclxuICAgIDI4OiAzNyxcclxuICAgIDM3OiA0NixcclxuICAgIDQ2OiA1NixcclxuICAgIDU2OiA2NixcclxuICAgIDY2OiA3NyxcclxuICAgIDc3OiA4OCxcclxuICAgIDg4OiAxMDBcclxuICB9O1xyXG5cclxuICBpZiAoaXNfaW5fZGljdC5pbmNsdWRlcyhncmFkZXNbaW5kZXhdKSkge1xyXG4gICAgZ3JhZGVzW2luZGV4XSA9IGRpY3RfY2hhbmdlYWJsZXNbZ3JhZGVzW2luZGV4XV07XHJcbiAgfVxyXG4gIGlmIChtYXRoc19wbHVzXzI1ICYmIChncmFkZXMuaW5jbHVkZXMoMjUpKSA9PSBmYWxzZSkge1xyXG4gICAgZ3JhZGVzLnB1c2goMjUpO1xyXG4gIH1cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW0oYXJyYXkpIHtcclxuICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsID0+ICtlbCkucmVkdWNlKChhY2MsIGN2KSA9PiBhY2MgKyBjdiwgMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZXMgYSBzdGFydGluZyBwb2ludCBvZiBhbiBhcnJheSBvZiB3aGljaCBpbmRpdmlkdWFsIHZhbHVlcyB3aWxsIGJlIGluY3JlYXNlZCBsYXRlciBcclxuICogQHBhcmFtIHtpbnR9IGhsX3N1YnMgXHJcbiAqIEBwYXJhbSB7aW50fSBvbF9zdWJzIFxyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRpbmdfZ3JhZGVzKGhsX3N1YnMsIG9sX3N1YnMpIHtcclxuICB2YXIgZ3JhZGVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBobF9zdWJzOyBpKyspIHtcclxuICAgIGdyYWRlcy5wdXNoKDM3KTtcclxuICB9XHJcbiAgZm9yIChpID0gMDsgaSA8IG9sX3N1YnM7IGkrKykge1xyXG4gICAgZ3JhZGVzLnB1c2goMTIpO1xyXG4gIH1cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdoZXN0X3BvaW50c19wb3NzKGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcclxuICB2YXIgY291bnRlciA9IDA7XHJcbiAgY291bnRlciArPSAoMTAwICogaGxfc3VicykgKyAoNTYgKiBvbF9zdWJzKTtcclxuICBpZiAobWF0aHNfcGx1c18yNSkge1xyXG4gICAgY291bnRlciArPSAyNTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG4vKipcclxuICogdGhpcyBpcyB3aG9sZSBhbGdvcm90aGltIGJlaGluZCBnZW5lcmF0ZSBjb3JyZWN0IG91dHB1dFxyXG4gKiBpbiBzaG9ydCBpdCBjcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IGFyZSBncmFkdWFsbHkgaW5jcmVhc2VkIHVudGlsIGl0J3Mgb3ZlcmFsbCB2YWx1ZSBpcyBpbmNyZWFzZWRcclxuICogdW50aWwgaXQgXCJyZWFjaGVzXCIgdGhlIGNhbyBwb2ludHMgdGFyZ2V0XHJcbiAqIEBwYXJhbSB7dGFyZ2V0fSB0YXJnZXQgXHJcbiAqIEBwYXJhbSB7aGxfc3Vic30gaGxfc3VicyBcclxuICogQHBhcmFtIHtvbF9zdWJzfSBvbF9zdWJzIFxyXG4gKiBAcGFyYW0ge21hdGhzX3BsdXNfMjV9IG1hdGhzX3BsdXNfMjUgXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFpbih0YXJnZXQsIGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcclxuICB2YXIgdG90YWxfc3VicyA9IGhsX3N1YnMgKyBvbF9zdWJzO1xyXG4gIHZhciBjdXJyZW50X2dyYWRlcyA9IHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKTtcclxuICB2YXIgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gIHZhciBpbmRleCA9IDA7XHJcbiAgdmFyIG1heF9saW1pdCA9IGhpZ2hlc3RfcG9pbnRzX3Bvc3MoaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSk7XHJcbiAgdmFyIHdpdGhpbl9yYW5nZSA9IGN1cnJlbnRfcG9pbnRzIDw9IG1heF9saW1pdCAmJiB0YXJnZXQgPD0gbWF4X2xpbWl0ICYmIChjdXJyZW50X3BvaW50cyA8IHRhcmdldCk7XHJcblxyXG4gIHdoaWxlICh3aXRoaW5fcmFuZ2UpIHtcclxuICAgIGN1cnJlbnRfZ3JhZGVzID0gc2luZ2xlX2NoYW5nZShjdXJyZW50X2dyYWRlcywgaW5kZXgsIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gICAgd2l0aGluX3JhbmdlID0gY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmIHRhcmdldCA8PSBtYXhfbGltaXQgJiYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KTtcclxuICAgIGluZGV4ICs9IDE7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IHRvdGFsX3N1YnMpIHtcclxuICAgICAgaW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KSB7XHJcbiAgICBjdXJyZW50X2dyYWRlcyA9IFtdO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBbXTtcclxuICB9XHJcbiAgcmV0dXJuIFtjdXJyZW50X2dyYWRlcywgY3VycmVudF9wb2ludHNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVfaW5wdXRzKCkge1xyXG4gIHZhciB0YXJnZXRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpO1xyXG4gIHRhcmdldF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBobF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGxfc3Vic190ZXh0XCIpO1xyXG4gIGhsX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICB9KTtcclxuXHJcbiAgdmFyIG9sX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbF9zdWJzX3RleHRcIik7XHJcbiAgb2xfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG51cGRhdGVfaW5wdXRzKCk7XHJcblxyXG4vLyB0byBoaWRlIHRoZSBib3ggb2Ygb3V0cHV0IHdoZW4gdGhlIHBhZ2UgbG9hZGVzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBjb2xsZWN0cyB0aGUgZGF0YSB2YWx1ZXMgZnJvbSB0aGUgSFRNTCAodGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0pXHJcbiAqIGhhbmRsZXMgZXJyb3IgY2FzZXMgYW5kIHN1Y2Nlc3NmdWxsIG91dHB1dFxyXG4gKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbmZ1bmN0aW9uIHB1bHNlSW5wdXRzKCkge1xyXG4gIGxldCBpbnB1dEVsZW1lbnQgPSBbXCJ0YXJnZXRfdGV4dFwiLCBcImhsX3N1YnNfdGV4dFwiLCBcIm9sX3N1YnNfdGV4dFwiLCBcImJvb2xfaGxfbWF0aHNcIiwgXCJsY3ZwXCJdO1xyXG5cclxuICBpbnB1dEVsZW1lbnQuZm9yRWFjaChpZCA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcInB1bHNlQW5pbWF0aW9uXCIpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3ItY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW5wdXRFbGVtZW50LmZvckVhY2goaWQgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnJlbW92ZShcInB1bHNlQW5pbWF0aW9uXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnB1bHNlSW5wdXRzKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaW5kX3BvaW50c19uZWVkZWQoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuXHJcbiAgdGFyZ2V0X251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpLnZhbHVlKTtcclxuICBobF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJobF9zdWJzX3RleHRcIikudmFsdWUpO1xyXG4gIG9sX251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sX3N1YnNfdGV4dFwiKS52YWx1ZSk7XHJcblxyXG4gIC8vIGNoZWNrIGZvciBpbnZhbGlkIGlucHV0XHJcbiAgdmFyIGludmFsaWRfdGFyZ2V0X2lucHV0ID0gKHRhcmdldF9udW0gPD0gMCkgfHwgKHRhcmdldF9udW0gPiA2MjUpO1xyXG4gIHZhciBpbnZhbGlkX3N1YnNfaW5wdXQgPSAoaGxfbnVtIDwgMCkgfHwgKG9sX251bSA8IDApIHx8IChobF9udW0gPiA2KSB8fCAob2xfbnVtID4gNikgfHwgKChobF9udW0gKyBvbF9udW0pID4gNik7XHJcbiAgdmFyIG1heF9wdHMgPSAoaGxfbnVtICogMTAwKSArIChvbF9udW0gKiA1NikgKyBhZGRfMjU7XHJcbiAgdmFyIGludmFsaWRfcmFuZ2UgPSAobWF4X3B0cyA+PSB0YXJnZXRfbnVtKSA9PSBmYWxzZTtcclxuXHJcbiAgY29uc3QgcmFuZ2VfZXJyb3JfbXNnID0gYEl0J3MgaW1wb3NzaWJsZSB0byBhY2hpZXZlICR7dGFyZ2V0X251bX0gQ0FPIHBvaW50cyB3aXRoICR7aGxfbnVtfSBoaWdoZXItbGV2ZWwgc3ViamVjdHMgYW5kICR7b2xfbnVtfSBvcmRpbmFyeS1sZXZlbCBzdWJqZWN0cy5gO1xyXG4gIGNvbnN0IHB0c19lcnJvcl9tc2cgPSBcIllvdXIgaW5wdXR0ZWQgQ0FPIHBvaW50cyBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNjI1LlwiO1xyXG4gIGNvbnN0IHN1YnNfZXJyb3JfbXNoID0gXCJUaGlzIGNhbGN1bGF0b3Igd2lsbCBub3QgYWxsb3cgZm9yIG1vcmUgdGhhbiA2IHN1YmplY3RzIGluIHRvdGFsIGFzIGlucHV0cy5cIjtcclxuXHJcbiAgdmFyIGVycm9yX3N0YXR1cyA9IFwiXCI7XHJcblxyXG4gIGlmIChpbnZhbGlkX3JhbmdlKSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gcmFuZ2VfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9IGlmIChpbnZhbGlkX3N1YnNfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBzdWJzX2Vycm9yX21zaCArIFwiXFxuXCI7XHJcbiAgfVxyXG4gIGlmIChpbnZhbGlkX3RhcmdldF9pbnB1dCkge1xyXG4gICAgZXJyb3Jfc3RhdHVzICs9IHB0c19lcnJvcl9tc2cgKyBcIlxcblwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yX3N0YXR1cyAhPSBcIlwiKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuaW5uZXJIVE1MID0gZXJyb3Jfc3RhdHVzO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb19jb250YWluZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VsdGlvbl9vdXRwdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpbmdfMjVfY29udGFpbmVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICB9XHJcblxyXG4gIGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX2NvbnRhaW5lclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdWx0aW9uX291dHB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhciBtYXRoc19wbHVzXzI1O1xyXG4gICAgaWYgKGFkZF8yNSA9PSAyNSkge1xyXG4gICAgICBtYXRoc19wbHVzXzI1ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtYXRoc19wbHVzXzI1ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgbWF0Y2hlc19pbmZvID0gbWFpbih0YXJnZXRfbnVtLCBobF9udW0sIG9sX251bSwgbWF0aHNfcGx1c18yNSk7XHJcbiAgICB2YXIgcG9pbnRzX2xpc3QgPSBtYXRjaGVzX2luZm9bMF07XHJcbiAgICB2YXIgcG9pbnRzX3JlcSA9IG1hdGNoZXNfaW5mb1sxXTtcclxuXHJcbiAgICBpZiAocG9pbnRzX2xpc3QuaW5jbHVkZXMoMjUpKSB7XHJcbiAgICAgIGRpc3BsYXlfcGx1c18yNSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG91dHB1dF9pbmZvID0gZ2FyX2FuZF9wdGcocG9pbnRzX2xpc3QpO1xyXG5cclxuICAgIHZhciBncmFkZV9hdmcgPSBvdXRwdXRfaW5mb1swXTtcclxuICAgIHZhciByZXFfcmVzdWx0cyA9IG91dHB1dF9pbmZvWzFdOyAvLyB0aGVzZSBhcmUgbGV0dGVyIGdyYWRlc1xyXG5cclxuICAgIHJlcV9yZXN1bHRzID0gcmVkX2NvbW1hcyhyZXFfcmVzdWx0cyk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2ludHNfcmVxXCIpLmlubmVySFRNTCA9IFN0cmluZyhwb2ludHNfcmVxKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxX3Jlc3VsdHNcIikuaW5uZXJIVE1MID0gU3RyaW5nKHJlcV9yZXN1bHRzKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhZGVfYXZnX3JlcVwiKS5pbm5lckhUTUwgPSBTdHJpbmcoZ3JhZGVfYXZnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvam9kZXZJY29uKCkge1xyXG4gIGxldCBnb2pvZGV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXhlZC1nb2pvZGV2XCIpO1xyXG4gIGxldCB3ZWxjb21lO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDUwMCkge1xyXG4gICAgd2VsY29tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZVwiKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB3ZWxjb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxjdWxhdG9yXCIpO1xyXG4gIH1cclxuICBnb2pvZGV2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xyXG4gICAgdmFyIHdlbGNvbWVSZWN0ID0gd2VsY29tZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB3ZWxjb21lUmVjdC5ib3R0b20gPCAwO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgaWYgKGlzVmlzaWJsZSgpKSB7XHJcbiAgICAgIGdvam9kZXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gIGhhbmRsZVNjcm9sbCgpO1xyXG59XHJcblxyXG5nb2pvZGV2SWNvbigpO1xyXG5cclxuZnVuY3Rpb24gZ29qb2RldigpIHtcclxuICBsZXQgZW1tYW51ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvam9kZXZcIik7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblxyXG4gICAgZW1tYW51ZWwuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICAgIGVtbWFudWVsLm9mZnNldFdpZHRoO1xyXG4gICAgZW1tYW51ZWwuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICBlbW1hbnVlbC5zcmMgPSBcImltYWdlcy9nb2pvZGV2LndlYnBcIjtcclxuXHJcbiAgICAgIGluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBlbW1hbnVlbC5zcmMgPSBcImltYWdlcy9sb2dvLndlYnBcIjtcclxuICAgICAgaW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIH0sIDM1MDApXHJcbn1cclxuXHJcbmdvam9kZXYoKSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUtBLE9BQUMsU0FBVSxRQUFRLFNBQVM7QUFDeEIsZUFBTyxZQUFZLFlBQVksT0FBTyxXQUFXLGNBQWMsUUFBUSxPQUFPLElBQzlFLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sS0FDdkUsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxRQUFRLE9BQU8sYUFBYSxDQUFDLENBQUM7QUFBQSxNQUM3RyxHQUFHLFNBQU8sU0FBVUEsVUFBUztBQUFFO0FBaUIzQixZQUFJLFdBQVcsV0FBVztBQUN0QixxQkFBVyxPQUFPLFVBQVUsU0FBU0MsVUFBUyxHQUFHO0FBQzdDLHFCQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLElBQUksR0FBRyxLQUFLO0FBQ2pELGtCQUFJLFVBQVUsQ0FBQztBQUNmLHVCQUFTLEtBQUs7QUFBRyxvQkFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUcsQ0FBQztBQUFHLG9CQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFBQSxZQUMvRTtBQUNBLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGlCQUFPLFNBQVMsTUFBTSxNQUFNLFNBQVM7QUFBQSxRQUN6QztBQUVBLGlCQUFTLFVBQVUsU0FBUyxZQUFZLEdBQUcsV0FBVztBQUNsRCxtQkFBUyxNQUFNLE9BQU87QUFBRSxtQkFBTyxpQkFBaUIsSUFBSSxRQUFRLElBQUksRUFBRSxTQUFVLFNBQVM7QUFBRSxzQkFBUSxLQUFLO0FBQUEsWUFBRyxDQUFDO0FBQUEsVUFBRztBQUMzRyxpQkFBTyxLQUFLLE1BQU0sSUFBSSxVQUFVLFNBQVUsU0FBUyxRQUFRO0FBQ3ZELHFCQUFTLFVBQVUsT0FBTztBQUFFLGtCQUFJO0FBQUUscUJBQUssVUFBVSxLQUFLLEtBQUssQ0FBQztBQUFBLGNBQUcsU0FBUyxHQUFHO0FBQUUsdUJBQU8sQ0FBQztBQUFBLGNBQUc7QUFBQSxZQUFFO0FBQzFGLHFCQUFTLFNBQVMsT0FBTztBQUFFLGtCQUFJO0FBQUUscUJBQUssVUFBVSxPQUFPLEVBQUUsS0FBSyxDQUFDO0FBQUEsY0FBRyxTQUFTLEdBQUc7QUFBRSx1QkFBTyxDQUFDO0FBQUEsY0FBRztBQUFBLFlBQUU7QUFDN0YscUJBQVMsS0FBSyxRQUFRO0FBQUUscUJBQU8sT0FBTyxRQUFRLE9BQU8sS0FBSyxJQUFJLE1BQU0sT0FBTyxLQUFLLEVBQUUsS0FBSyxXQUFXLFFBQVE7QUFBQSxZQUFHO0FBQzdHLGtCQUFNLFlBQVksVUFBVSxNQUFNLFNBQVMsY0FBYyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFBQSxVQUN4RSxDQUFDO0FBQUEsUUFDTDtBQUVBLGlCQUFTLFlBQVksU0FBUyxNQUFNO0FBQ2hDLGNBQUksSUFBSSxFQUFFLE9BQU8sR0FBRyxNQUFNLFdBQVc7QUFBRSxnQkFBSSxFQUFFLENBQUMsSUFBSTtBQUFHLG9CQUFNLEVBQUUsQ0FBQztBQUFHLG1CQUFPLEVBQUUsQ0FBQztBQUFBLFVBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQy9HLGlCQUFPLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLEdBQUcsVUFBVSxLQUFLLENBQUMsRUFBRSxHQUFHLE9BQU8sV0FBVyxlQUFlLEVBQUUsT0FBTyxRQUFRLElBQUksV0FBVztBQUFFLG1CQUFPO0FBQUEsVUFBTSxJQUFJO0FBQ3ZKLG1CQUFTLEtBQUssR0FBRztBQUFFLG1CQUFPLFNBQVUsR0FBRztBQUFFLHFCQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFBLFlBQUc7QUFBQSxVQUFHO0FBQ2pFLG1CQUFTLEtBQUssSUFBSTtBQUNkLGdCQUFJO0FBQUcsb0JBQU0sSUFBSSxVQUFVLGlDQUFpQztBQUM1RCxtQkFBTztBQUFHLGtCQUFJO0FBQ1Ysb0JBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxPQUFPLElBQUksRUFBRSxRQUFRLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRztBQUFNLHlCQUFPO0FBQzNKLG9CQUFJLElBQUksR0FBRztBQUFHLHVCQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUs7QUFDdEMsd0JBQVEsR0FBRyxDQUFDLEdBQUc7QUFBQSxrQkFDWCxLQUFLO0FBQUEsa0JBQUcsS0FBSztBQUFHLHdCQUFJO0FBQUk7QUFBQSxrQkFDeEIsS0FBSztBQUFHLHNCQUFFO0FBQVMsMkJBQU8sRUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLE1BQU0sTUFBTTtBQUFBLGtCQUN0RCxLQUFLO0FBQUcsc0JBQUU7QUFBUyx3QkFBSSxHQUFHLENBQUM7QUFBRyx5QkFBSyxDQUFDLENBQUM7QUFBRztBQUFBLGtCQUN4QyxLQUFLO0FBQUcseUJBQUssRUFBRSxJQUFJLElBQUk7QUFBRyxzQkFBRSxLQUFLLElBQUk7QUFBRztBQUFBLGtCQUN4QztBQUNJLHdCQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLFNBQVMsS0FBSyxFQUFFLEVBQUUsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxJQUFJO0FBQUUsMEJBQUk7QUFBRztBQUFBLG9CQUFVO0FBQzNHLHdCQUFJLEdBQUcsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxLQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFLO0FBQUUsd0JBQUUsUUFBUSxHQUFHLENBQUM7QUFBRztBQUFBLG9CQUFPO0FBQ3JGLHdCQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHO0FBQUUsd0JBQUUsUUFBUSxFQUFFLENBQUM7QUFBRywwQkFBSTtBQUFJO0FBQUEsb0JBQU87QUFDcEUsd0JBQUksS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUc7QUFBRSx3QkFBRSxRQUFRLEVBQUUsQ0FBQztBQUFHLHdCQUFFLElBQUksS0FBSyxFQUFFO0FBQUc7QUFBQSxvQkFBTztBQUNsRSx3QkFBSSxFQUFFLENBQUM7QUFBRyx3QkFBRSxJQUFJLElBQUk7QUFDcEIsc0JBQUUsS0FBSyxJQUFJO0FBQUc7QUFBQSxnQkFDdEI7QUFDQSxxQkFBSyxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQUEsY0FDN0IsU0FBUyxHQUFHO0FBQUUscUJBQUssQ0FBQyxHQUFHLENBQUM7QUFBRyxvQkFBSTtBQUFBLGNBQUcsVUFBRTtBQUFVLG9CQUFJLElBQUk7QUFBQSxjQUFHO0FBQ3pELGdCQUFJLEdBQUcsQ0FBQyxJQUFJO0FBQUcsb0JBQU0sR0FBRyxDQUFDO0FBQUcsbUJBQU8sRUFBRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLFFBQVEsTUFBTSxLQUFLO0FBQUEsVUFDbkY7QUFBQSxRQUNKO0FBRUEsaUJBQVMsU0FBUyxHQUFHO0FBQ2pCLGNBQUksSUFBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLFVBQVUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUk7QUFDNUUsY0FBSTtBQUFHLG1CQUFPLEVBQUUsS0FBSyxDQUFDO0FBQ3RCLGNBQUksS0FBSyxPQUFPLEVBQUUsV0FBVztBQUFVLG1CQUFPO0FBQUEsY0FDMUMsTUFBTSxXQUFZO0FBQ2Qsb0JBQUksS0FBSyxLQUFLLEVBQUU7QUFBUSxzQkFBSTtBQUM1Qix1QkFBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUFBLGNBQzFDO0FBQUEsWUFDSjtBQUNBLGdCQUFNLElBQUksVUFBVSxJQUFJLDRCQUE0QixpQ0FBaUM7QUFBQSxRQUN6RjtBQUVBLGlCQUFTLE9BQU8sR0FBRyxHQUFHO0FBQ2xCLGNBQUksSUFBSSxPQUFPLFdBQVcsY0FBYyxFQUFFLE9BQU8sUUFBUTtBQUN6RCxjQUFJLENBQUM7QUFBRyxtQkFBTztBQUNmLGNBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUc7QUFDL0IsY0FBSTtBQUNBLG9CQUFRLE1BQU0sVUFBVSxNQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHO0FBQU0saUJBQUcsS0FBSyxFQUFFLEtBQUs7QUFBQSxVQUM3RSxTQUNPLE9BQU87QUFBRSxnQkFBSSxFQUFFLE1BQWE7QUFBQSxVQUFHLFVBQ3RDO0FBQ0ksZ0JBQUk7QUFDQSxrQkFBSSxLQUFLLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRO0FBQUksa0JBQUUsS0FBSyxDQUFDO0FBQUEsWUFDbkQsVUFDQTtBQUFVLGtCQUFJO0FBQUcsc0JBQU0sRUFBRTtBQUFBLFlBQU87QUFBQSxVQUNwQztBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUVBLGlCQUFTLGNBQWMsSUFBSSxNQUFNLE1BQU07QUFDbkMsY0FBSSxRQUFRLFVBQVUsV0FBVztBQUFHLHFCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksR0FBRyxLQUFLO0FBQ2pGLGtCQUFJLE1BQU0sRUFBRSxLQUFLLE9BQU87QUFDcEIsb0JBQUksQ0FBQztBQUFJLHVCQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxHQUFHLENBQUM7QUFDbkQsbUJBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUFBLGNBQ2xCO0FBQUEsWUFDSjtBQUNBLGlCQUFPLEdBQUcsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssSUFBSSxDQUFDO0FBQUEsUUFDM0Q7QUFFQSxZQUFJO0FBQ0osU0FBQyxTQUFVQyxjQUFhO0FBQ3BCLFVBQUFBLGFBQVksYUFBYSxJQUFJO0FBQzdCLFVBQUFBLGFBQVkseUJBQXlCLElBQUk7QUFDekMsVUFBQUEsYUFBWSw2QkFBNkIsSUFBSTtBQUM3QyxVQUFBQSxhQUFZLG9CQUFvQixJQUFJO0FBQ3BDLFVBQUFBLGFBQVksY0FBYyxJQUFJO0FBQzlCLFVBQUFBLGFBQVksaUJBQWlCLElBQUk7QUFDakMsVUFBQUEsYUFBWSxzQkFBc0IsSUFBSTtBQUN0QyxVQUFBQSxhQUFZLHNCQUFzQixJQUFJO0FBQ3RDLFVBQUFBLGFBQVksMkJBQTJCLElBQUk7QUFDM0MsVUFBQUEsYUFBWSxnQkFBZ0IsSUFBSTtBQUNoQyxVQUFBQSxhQUFZLGtDQUFrQyxJQUFJO0FBQ2xELFVBQUFBLGFBQVksa0NBQWtDLElBQUk7QUFDbEQsVUFBQUEsYUFBWSw4QkFBOEIsSUFBSTtBQUM5QyxVQUFBQSxhQUFZLDhCQUE4QixJQUFJO0FBQzlDLFVBQUFBLGFBQVksNEJBQTRCLElBQUk7QUFDNUMsVUFBQUEsYUFBWSw0QkFBNEIsSUFBSTtBQUM1QyxVQUFBQSxhQUFZLGNBQWMsSUFBSTtBQUM5QixVQUFBQSxhQUFZLHVCQUF1QixJQUFJO0FBQ3ZDLFVBQUFBLGFBQVksd0JBQXdCLElBQUk7QUFDeEMsVUFBQUEsYUFBWSxZQUFZLElBQUk7QUFDNUIsVUFBQUEsYUFBWSxtQkFBbUIsSUFBSTtBQUNuQyxVQUFBQSxhQUFZLHFCQUFxQixJQUFJO0FBQ3JDLFVBQUFBLGFBQVksbUJBQW1CLElBQUk7QUFDbkMsVUFBQUEsYUFBWSxzQkFBc0IsSUFBSTtBQUN0QyxVQUFBQSxhQUFZLGVBQWUsSUFBSTtBQUMvQixVQUFBQSxhQUFZLHVCQUF1QixJQUFJO0FBQ3ZDLFVBQUFBLGFBQVksYUFBYSxJQUFJO0FBQzdCLFVBQUFBLGFBQVksV0FBVyxJQUFJO0FBQzNCLFVBQUFBLGFBQVksbUJBQW1CLElBQUk7QUFDbkMsVUFBQUEsYUFBWSxjQUFjLElBQUk7QUFDOUIsVUFBQUEsYUFBWSxlQUFlLElBQUk7QUFDL0IsVUFBQUEsYUFBWSx3QkFBd0IsSUFBSTtBQUN4QyxVQUFBQSxhQUFZLGtCQUFrQixJQUFJO0FBQ2xDLFVBQUFBLGFBQVksaUJBQWlCLElBQUk7QUFDakMsVUFBQUEsYUFBWSxpQkFBaUIsSUFBSTtBQUNqQyxVQUFBQSxhQUFZLGlCQUFpQixJQUFJO0FBQ2pDLFVBQUFBLGFBQVksd0JBQXdCLElBQUk7QUFDeEMsVUFBQUEsYUFBWSxVQUFVLElBQUk7QUFDMUIsVUFBQUEsYUFBWSx3QkFBd0IsSUFBSTtBQUN4QyxVQUFBQSxhQUFZLDRCQUE0QixJQUFJO0FBQzVDLFVBQUFBLGFBQVksUUFBUSxJQUFJO0FBQUEsUUFDNUIsR0FBRyxnQkFBZ0IsY0FBYyxDQUFDLEVBQUU7QUFFcEMsWUFBSSxxQkFBcUIsT0FBTyxjQUFjO0FBQzlDLFlBQUksWUFBWSxxQkFBc0IsVUFBVSxpQkFBaUIsTUFBTSxRQUFRLFVBQVUsY0FBYyxNQUFNLElBQ3pHLFVBQVUsY0FBYyxPQUFPLElBQUksU0FBVSxPQUFPO0FBQUUsaUJBQU8sR0FBRyxPQUFPLE1BQU0sTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFLE9BQU8sTUFBTSxPQUFPO0FBQUEsUUFBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksVUFBVSxVQUFVLFlBQVksSUFDM0s7QUFDTixZQUFJLFdBQVcscUJBQXNCLFVBQVUsaUJBQWlCLE9BQU8sVUFBVSxjQUFjLGFBQWEsV0FDeEcsVUFBVSxjQUFjLFNBQVMsWUFBWSxJQUFJLFVBQVUsU0FBUyxZQUFZLElBQzlFO0FBQ04sWUFBSSxhQUFhLFVBQVUsU0FBUyxRQUFRLEtBQUssVUFBVSxTQUFTLFVBQVU7QUFDOUUsWUFBSSxnQkFBZ0IsVUFBVSxTQUFTLGFBQWE7QUFDcEQsWUFBSSxZQUFZLFVBQVUsU0FBUyxTQUFTLEtBQUssVUFBVSxTQUFTLFdBQVcsS0FBSztBQUNwRixrQkFBVSxTQUFTLFNBQVM7QUFDNUIsa0JBQVUsU0FBUyxXQUFXO0FBQzlCLGtCQUFVLFNBQVMsS0FBSyxLQUFLLFVBQVUsU0FBUyxPQUFPO0FBQ3ZELGtCQUFVLFNBQVMsS0FBSztBQUN4QixZQUFJLFdBQVcsVUFBVSxTQUFTLFFBQVEsS0FBSyxDQUFDO0FBQ2hELFlBQUksWUFBWSxTQUFTLFdBQVcsS0FBSztBQUN6QyxZQUFJLFVBQVUsU0FBUyxXQUFXLEtBQUs7QUFDdkMsUUFBQyxzQkFBc0IsVUFBVSxnQkFBaUIsVUFBVSxjQUFjLFNBQVMsVUFBVSxTQUFTLFFBQVE7QUFDOUcsWUFBSSx1QkFBdUIsT0FBTyxlQUFlO0FBQ2pELFlBQUksMkNBQTRDLE9BQU8sbUJBQW1CLGNBQ3RFLE9BQU8sZUFBZSxVQUFVLHFCQUFxQjtBQUN6RCxTQUFFLFdBQVk7QUFDVixjQUFJLElBQUksVUFBVSxNQUFNLCtCQUErQjtBQUN2RCxjQUFJLEtBQUssRUFBRSxDQUFDLEdBQUc7QUFDWCxtQkFBTyxFQUFFLENBQUM7QUFBQSxVQUNkO0FBQ0EsaUJBQU87QUFBQSxRQUNYLEdBQUk7QUFDSixTQUFFLFdBQVk7QUFDVixjQUFJLElBQUksVUFBVSxNQUFNLHNDQUFzQztBQUM5RCxjQUFJLEtBQUssRUFBRSxDQUFDLEdBQUc7QUFDWCxtQkFBTyxFQUFFLENBQUM7QUFBQSxVQUNkO0FBQ0EsaUJBQU87QUFBQSxRQUNYLEdBQUk7QUFDSixZQUFJLDZCQUE4QixXQUFZO0FBQzFDLGNBQUk7QUFDQSxxQkFBUyxjQUFjLFVBQVU7QUFDakMsbUJBQU87QUFBQSxVQUNYLFNBQ08sS0FBSztBQUNSLG1CQUFPO0FBQUEsVUFDWDtBQUFBLFFBQ0osRUFBRztBQUNILFlBQUksZ0NBQWlDLFdBQVk7QUFDN0MsY0FBSSxPQUFPLGFBQWEsYUFBYTtBQUNqQyxtQkFBTztBQUFBLFVBQ1g7QUFDQSxjQUFJLEtBQUssU0FBUyxjQUFjLEtBQUs7QUFDckMsYUFBRyxhQUFhLFNBQVMsb0JBQW9CO0FBQzdDLGlCQUFPLEdBQUcsU0FBUyxHQUFHLE1BQU0sZ0JBQWdCO0FBQUEsUUFDaEQsRUFBRztBQUVILGlCQUFTLGNBQWMsS0FBSyxVQUFVLFFBQVE7QUFDMUMsaUJBQU8sVUFBVSxNQUFNLFFBQVEsUUFBUSxXQUFZO0FBQy9DLGdCQUFJO0FBQ0osbUJBQU8sWUFBWSxNQUFNLFNBQVUsSUFBSTtBQUNuQyxzQkFBUSxHQUFHLE9BQU87QUFBQSxnQkFDZCxLQUFLO0FBQUcseUJBQU8sQ0FBQyxHQUFHLE1BQU0sS0FBSztBQUFBLG9CQUN0QixPQUFPO0FBQUEsb0JBQ1AsYUFBYTtBQUFBLG9CQUNiLFVBQVU7QUFBQSxrQkFDZCxDQUFDLENBQUM7QUFBQSxnQkFDTixLQUFLO0FBQ0QsNkJBQVcsR0FBRyxLQUFLO0FBQ25CLHNCQUFJLGFBQWEsYUFBYSxjQUFjLElBQUksV0FBVyxrQkFBa0IsS0FBSyxJQUFJLFNBQVMsTUFBTSxHQUFHO0FBQ3BHLDJCQUFPLENBQUMsR0FBRyxRQUFRO0FBQUEsa0JBQ3ZCO0FBQ0Esc0JBQUksWUFBWSxDQUFDLFNBQVMsUUFBUSxJQUFJLGNBQWMsRUFBRSxXQUFXLFFBQVEsR0FBRztBQUN4RSwwQkFBTSxJQUFJLE1BQU0sbUNBQW1DLE9BQU8sR0FBRyxDQUFDO0FBQUEsa0JBQ2xFO0FBQ0Esc0JBQUksQ0FBQyxTQUFTLElBQUk7QUFDZCwwQkFBTSxJQUFJLE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxHQUFHLEVBQUUsT0FBTyxTQUFTLFFBQVEsR0FBRyxFQUFFLE9BQU8sU0FBUyxVQUFVLENBQUM7QUFBQSxrQkFDL0c7QUFDQSx5QkFBTyxDQUFDLEdBQUcsUUFBUTtBQUFBLGNBQzNCO0FBQUEsWUFDSixDQUFDO0FBQUEsVUFDTCxDQUFDO0FBQUEsUUFDTDtBQUNBLGlCQUFTLGNBQWMsS0FBSyxVQUFVO0FBQ2xDLGlCQUFPLFVBQVUsTUFBTSxRQUFRLFFBQVEsV0FBWTtBQUMvQyxnQkFBSTtBQUNKLG1CQUFPLFlBQVksTUFBTSxTQUFVLElBQUk7QUFDbkMsc0JBQVEsR0FBRyxPQUFPO0FBQUEsZ0JBQ2QsS0FBSztBQUFHLHlCQUFPLENBQUMsR0FBRyxjQUFjLEtBQUssUUFBUSxDQUFDO0FBQUEsZ0JBQy9DLEtBQUs7QUFDRCw2QkFBVyxHQUFHLEtBQUs7QUFDbkIseUJBQU8sQ0FBQyxHQUFHLHNCQUFzQixRQUFRLENBQUM7QUFBQSxnQkFDOUMsS0FBSztBQUFHLHlCQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUFBLGNBQ2hDO0FBQUEsWUFDSixDQUFDO0FBQUEsVUFDTCxDQUFDO0FBQUEsUUFDTDtBQUNBLGlCQUFTLHNCQUFzQixVQUFVO0FBQ3JDLGlCQUFPLFVBQVUsTUFBTSxRQUFRLFFBQVEsV0FBWTtBQUMvQyxnQkFBSSxNQUFNO0FBQ1YsbUJBQU8sWUFBWSxNQUFNLFNBQVUsSUFBSTtBQUNuQyxzQkFBUSxHQUFHLE9BQU87QUFBQSxnQkFDZCxLQUFLO0FBQUcseUJBQU8sQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDO0FBQUEsZ0JBQ2xDLEtBQUs7QUFDRCx5QkFBTyxHQUFHLEtBQUs7QUFDZix5QkFBTyxDQUFDLEdBQUksSUFBSSxRQUFRLFNBQVUsU0FBUztBQUNuQyx3QkFBSSxTQUFTLElBQUksV0FBVztBQUM1QiwyQkFBTyxZQUFZLFdBQVk7QUFBRSw2QkFBTyxRQUFRLE9BQU8sTUFBTTtBQUFBLG9CQUFHO0FBQ2hFLDJCQUFPLGNBQWMsSUFBSTtBQUFBLGtCQUM3QixDQUFDLENBQUU7QUFBQSxnQkFDWCxLQUFLO0FBQ0QsNEJBQVUsR0FBRyxLQUFLO0FBQ2xCLHlCQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsY0FDMUI7QUFBQSxZQUNKLENBQUM7QUFBQSxVQUNMLENBQUM7QUFBQSxRQUNMO0FBRUEsWUFBSSxpQkFBaUIsU0FBVSxLQUFLO0FBQUUsaUJBQU8sVUFBVSxRQUFRLFFBQVEsUUFBUSxXQUFZO0FBQ3ZGLG1CQUFPLFlBQVksTUFBTSxTQUFVLElBQUk7QUFDbkMscUJBQU8sQ0FBQyxHQUFHLFFBQVEsT0FBTyxJQUFJLE1BQU07QUFBQSxnQkFDNUI7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDSixFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQ3JCLENBQUM7QUFBQSxVQUNMLENBQUM7QUFBQSxRQUFHO0FBQ0osWUFBSSxVQUFVO0FBQ2QsaUJBQVMsaUJBQWlCQyxRQUFPO0FBQzdCLGNBQUlBLFFBQU87QUFDUCxzQkFBVUE7QUFBQSxVQUNkLE9BQ0s7QUFDRCxzQkFBVTtBQUFBLFVBQ2Q7QUFBQSxRQUNKO0FBQ0EsaUJBQVMsZ0JBQWdCLEtBQUs7QUFDMUIsaUJBQU8sVUFBVSxNQUFNLFFBQVEsUUFBUSxXQUFZO0FBQy9DLG1CQUFPLFlBQVksTUFBTSxTQUFVLElBQUk7QUFDbkMsc0JBQVEsR0FBRyxPQUFPO0FBQUEsZ0JBQ2QsS0FBSztBQUFHLHlCQUFPLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQztBQUFBLGdCQUMvQixLQUFLO0FBQUcseUJBQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQUEsY0FDaEM7QUFBQSxZQUNKLENBQUM7QUFBQSxVQUNMLENBQUM7QUFBQSxRQUNMO0FBRUEsWUFBSSxDQUFDLE9BQU8sUUFBUTtBQUNoQixpQkFBTyxTQUFTLENBQUM7QUFBQSxRQUNyQjtBQUNBLFlBQUksQ0FBQyxPQUFPLFNBQVM7QUFDakIsaUJBQU8sVUFBVSxDQUFDO0FBQUEsUUFDdEI7QUFDQSxZQUFJLG1CQUFtQixvQkFBSSxJQUFJO0FBQy9CLGlCQUFTLGNBQWM7QUFDbkIsY0FBSSxPQUFPLENBQUM7QUFDWixtQkFBUyxLQUFLLEdBQUcsS0FBSyxVQUFVLFFBQVEsTUFBTTtBQUMxQyxpQkFBSyxFQUFFLElBQUksVUFBVSxFQUFFO0FBQUEsVUFDM0I7QUFDQSxpQkFBTyxVQUFVLE1BQU0sUUFBUSxRQUFRLFdBQVk7QUFDL0MsZ0JBQUksTUFBTSxJQUFJLEtBQUssY0FBYyxVQUFVLFFBQVE7QUFDbkQsbUJBQU8sWUFBWSxNQUFNLFNBQVUsSUFBSTtBQUNuQyxzQkFBUSxHQUFHLE9BQU87QUFBQSxnQkFDZCxLQUFLO0FBQ0Qsc0JBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxTQUFTLFlBQVk7QUFBVywyQkFBTyxDQUFDLEdBQUcsQ0FBQztBQUNyRSx5QkFBTyxLQUFLLENBQUMsRUFBRTtBQUNmLHFCQUFHLFFBQVE7QUFBQSxnQkFDZixLQUFLO0FBQ0QscUJBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLHVCQUFLLEtBQUssQ0FBQyxFQUFFLE1BQU0sTUFBTSxHQUFHLEtBQUssZUFBZSxHQUFHO0FBQ25ELHlCQUFPLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUEsZ0JBQ25DLEtBQUs7QUFDRCw2QkFBVyxHQUFHLEtBQUs7QUFDbkIsc0JBQUksRUFBRSxpQkFBaUI7QUFBYSwyQkFBTyxDQUFDLEdBQUcsQ0FBQztBQUNoRCx5QkFBTyxDQUFDLEdBQUcsc0JBQXNCLFFBQVEsQ0FBQztBQUFBLGdCQUM5QyxLQUFLO0FBQ0QsMkJBQVMsR0FBRyxLQUFLO0FBQ2pCLHlCQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsZ0JBQ2hCLEtBQUs7QUFBRyx5QkFBTyxDQUFDLEdBQUcsU0FBUyxLQUFLLENBQUM7QUFBQSxnQkFDbEMsS0FBSztBQUNELDJCQUFTLEdBQUcsS0FBSztBQUNqQixxQkFBRyxRQUFRO0FBQUEsZ0JBQ2YsS0FBSztBQUNELG1DQUFpQixRQUFRLFNBQVUsSUFBSTtBQUFFLDJCQUFPLEdBQUcsRUFBRSxNQUFNLFlBQVksbUJBQW1CLE1BQU0sUUFBUSxPQUFPLE1BQU0sSUFBSSxLQUFLLENBQUM7QUFBQSxrQkFBRyxDQUFDO0FBQ25JLHlCQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsZ0JBQ2hCLEtBQUs7QUFDRCw0QkFBVSxHQUFHLEtBQUs7QUFDbEIsMEJBQVEsTUFBTSxPQUFPO0FBQ3JCLG1DQUFpQixRQUFRLFNBQVUsSUFBSTtBQUFFLDJCQUFPLEdBQUcsRUFBRSxNQUFNLFlBQVksbUJBQW1CLE1BQU0sTUFBTSxPQUFPLFNBQVMsSUFBSSxLQUFLLENBQUM7QUFBQSxrQkFBRyxDQUFDO0FBQ3BJLHlCQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsZ0JBQ2hCLEtBQUs7QUFBRyx5QkFBTyxDQUFDLENBQUM7QUFBQSxjQUNyQjtBQUFBLFlBQ0osQ0FBQztBQUFBLFVBQ0wsQ0FBQztBQUFBLFFBQ0w7QUFDQSxpQkFBUyxtQkFBbUIsVUFBVTtBQUNsQywyQkFBaUIsSUFBSSxRQUFRO0FBQUEsUUFDakM7QUFDQSxZQUFJLE9BQU8sT0FBTyxRQUFRLGdCQUFnQixZQUFZO0FBQ2xELGNBQUksc0JBQXNCLE9BQU8sUUFBUTtBQUN6QyxpQkFBTyxRQUFRLGNBQWMsV0FBWTtBQUNyQyxnQkFBSSxPQUFPLENBQUM7QUFDWixxQkFBUyxLQUFLLEdBQUcsS0FBSyxVQUFVLFFBQVEsTUFBTTtBQUMxQyxtQkFBSyxFQUFFLElBQUksVUFBVSxFQUFFO0FBQUEsWUFDM0I7QUFDQSx3QkFBWSxNQUFNLFFBQVEsY0FBYyxDQUFDLEdBQUcsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2hFLGdDQUFvQixNQUFNLE9BQU8sU0FBUyxJQUFJO0FBQUEsVUFDbEQ7QUFBQSxRQUNKLE9BQ0s7QUFDRCxpQkFBTyxRQUFRLGNBQWM7QUFBQSxRQUNqQztBQUNBLFlBQUksQ0FBQyxPQUFPLFFBQVEsV0FBVztBQUMzQixpQkFBTyxRQUFRLFlBQVksQ0FBQztBQUFBLFFBQ2hDO0FBQ0EsWUFBSSxPQUFPLE9BQU8sUUFBUSxVQUFVLGdCQUFnQixZQUFZO0FBQzVELGNBQUksc0JBQXNCLE9BQU8sUUFBUSxVQUFVO0FBQ25ELGlCQUFPLFFBQVEsVUFBVSxjQUFjLFdBQVk7QUFDL0MsZ0JBQUksT0FBTyxDQUFDO0FBQ1oscUJBQVMsS0FBSyxHQUFHLEtBQUssVUFBVSxRQUFRLE1BQU07QUFDMUMsbUJBQUssRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUFBLFlBQzNCO0FBQ0EsK0JBQW1CLEtBQUssQ0FBQyxDQUFDO0FBQzFCLGdDQUFvQixNQUFNLE9BQU8sUUFBUSxXQUFXLElBQUk7QUFBQSxVQUM1RDtBQUFBLFFBQ0osT0FDSztBQUNELGlCQUFPLFFBQVEsVUFBVSxjQUFjLFdBQVk7QUFDL0MsZ0JBQUksT0FBTyxDQUFDO0FBQ1oscUJBQVMsS0FBSyxHQUFHLEtBQUssVUFBVSxRQUFRLE1BQU07QUFDMUMsbUJBQUssRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUFBLFlBQzNCO0FBQ0EsbUJBQU8sbUJBQW1CLEtBQUssQ0FBQyxDQUFDO0FBQUEsVUFDckM7QUFBQSxRQUNKO0FBRUEsWUFBSSxlQUFlO0FBQUEsVUFDZixXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixjQUFjO0FBQUEsUUFDbEI7QUFFQSxZQUFJLGlCQUFpQjtBQUFBLFVBQ2pCLFlBQVk7QUFBQSxZQUNSLFlBQVk7QUFBQSxZQUNaLE1BQU07QUFBQSxVQUNWO0FBQUEsVUFDQSxhQUFhO0FBQUEsWUFDVCxZQUFZO0FBQUEsWUFDWixNQUFNO0FBQUEsVUFDVjtBQUFBLFFBQ0o7QUFDQSxZQUFJLGdCQUFnQjtBQUFBLFVBQ2hCLE1BQU07QUFBQSxVQUNOLFlBQVk7QUFBQSxVQUNaLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxVQUNULFlBQVksVUFBVSxtQkFBbUIsWUFBWSxhQUFhO0FBQUEsVUFDbEUsWUFBWTtBQUFBLFVBQ1osUUFBUSxhQUFhO0FBQUEsVUFDckIsWUFBWTtBQUFBLFVBQ1osMkJBQTJCLGVBQWUsV0FBVztBQUFBLFVBQ3JELHFCQUFxQixlQUFlLFdBQVc7QUFBQSxVQUMvQyw0QkFBNEIsZUFBZSxZQUFZO0FBQUEsVUFDdkQsc0JBQXNCLGVBQWUsWUFBWTtBQUFBLFVBQ2pELGdCQUFnQixVQUFVLEtBQUs7QUFBQSxVQUMvQixnQkFBZ0I7QUFBQSxVQUNoQixxQkFBcUIsQ0FBQztBQUFBLFVBQ3RCLGtCQUFrQjtBQUFBLFVBQ2xCLGlCQUFpQjtBQUFBLFVBQ2pCLGlCQUFpQjtBQUFBLFFBQ3JCO0FBRUEsaUJBQVMsWUFBWSxPQUFPO0FBQ3hCLGlCQUFPLE1BQU0sVUFBVTtBQUFBLFFBQzNCO0FBQ0EsaUJBQVMsUUFBUSxPQUFPLFVBQVU7QUFDOUIsY0FBSSxLQUFLO0FBQ1QsY0FBSSxZQUFZLEtBQUssR0FBRztBQUNwQixxQkFBUyxJQUFJLEdBQUcsTUFBTSxNQUFNLFFBQVEsSUFBSSxLQUFLLEtBQUs7QUFDOUMsdUJBQVMsTUFBTSxDQUFDLENBQUM7QUFBQSxZQUNyQjtBQUFBLFVBQ0osT0FDSztBQUNELGdCQUFJO0FBQ0EsdUJBQVMsVUFBVSxTQUFTLEtBQUssR0FBRyxZQUFZLFFBQVEsS0FBSyxHQUFHLENBQUMsVUFBVSxNQUFNLFlBQVksUUFBUSxLQUFLLEdBQUc7QUFDekcsb0JBQUksT0FBTyxVQUFVO0FBQ3JCLHlCQUFTLElBQUk7QUFBQSxjQUNqQjtBQUFBLFlBQ0osU0FDTyxPQUFPO0FBQUUsb0JBQU0sRUFBRSxPQUFPLE1BQU07QUFBQSxZQUFHLFVBQ3hDO0FBQ0ksa0JBQUk7QUFDQSxvQkFBSSxhQUFhLENBQUMsVUFBVSxTQUFTLEtBQUssUUFBUTtBQUFTLHFCQUFHLEtBQUssT0FBTztBQUFBLGNBQzlFLFVBQ0E7QUFBVSxvQkFBSTtBQUFLLHdCQUFNLElBQUk7QUFBQSxjQUFPO0FBQUEsWUFDeEM7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUNBLGlCQUFTLEtBQUssT0FBTyxVQUFVO0FBQzNCLGtCQUFRLFVBQVUsU0FBVSxHQUFHO0FBQUUsbUJBQU8sTUFBTSxLQUFLLENBQUM7QUFBQSxVQUFHLENBQUM7QUFBQSxRQUM1RDtBQUNBLGlCQUFTLFFBQVEsT0FBTztBQUNwQixjQUFJLFVBQVUsQ0FBQztBQUNmLG1CQUFTLElBQUksR0FBRyxNQUFNLE1BQU0sUUFBUSxJQUFJLEtBQUssS0FBSztBQUM5QyxvQkFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQUEsVUFDekI7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFFQSxpQkFBUyxVQUFVO0FBQUEsUUFDbkI7QUFDQSxpQkFBUyxVQUFVO0FBQUEsUUFDbkI7QUFFQSxpQkFBUyxTQUFTLFVBQVU7QUFDeEIsY0FBSSxVQUFVO0FBQ2QsY0FBSSxVQUFVO0FBQ2QsY0FBSTtBQUNKLGNBQUksWUFBYSxXQUFZO0FBQ3pCLGdCQUFJLE9BQU8sQ0FBQztBQUNaLHFCQUFTLEtBQUssR0FBRyxLQUFLLFVBQVUsUUFBUSxNQUFNO0FBQzFDLG1CQUFLLEVBQUUsSUFBSSxVQUFVLEVBQUU7QUFBQSxZQUMzQjtBQUNBLHVCQUFXO0FBQ1gsZ0JBQUksU0FBUztBQUNULHdCQUFVO0FBQUEsWUFDZCxPQUNLO0FBQ0QsdUJBQVMsTUFBTSxRQUFRLGNBQWMsQ0FBQyxHQUFHLE9BQU8sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNqRSx3QkFBVSxzQkFBc0IsV0FBWTtBQUN4QywwQkFBVTtBQUNWLG9CQUFJLFNBQVM7QUFDVCwyQkFBUyxNQUFNLFFBQVEsY0FBYyxDQUFDLEdBQUcsT0FBTyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2pFLDRCQUFVO0FBQUEsZ0JBQ2Q7QUFBQSxjQUNKLENBQUM7QUFBQSxZQUNMO0FBQUEsVUFDSjtBQUNBLGNBQUksU0FBUyxXQUFZO0FBQ3JCLGlDQUFxQixPQUFPO0FBQzVCLHNCQUFVO0FBQ1Ysc0JBQVU7QUFBQSxVQUNkO0FBQ0EsaUJBQU8sT0FBTyxPQUFPLFdBQVcsRUFBRSxPQUFlLENBQUM7QUFBQSxRQUN0RDtBQUNBLGlCQUFTLHdCQUF3QjtBQUM3QixjQUFJLFFBQVEsQ0FBQztBQUNiLGNBQUksVUFBVTtBQUNkLG1CQUFTLFdBQVc7QUFDaEIsZ0JBQUk7QUFDSixtQkFBUSxPQUFPLE1BQU0sTUFBTSxHQUFJO0FBQzNCLG1CQUFLO0FBQUEsWUFDVDtBQUNBLHNCQUFVO0FBQUEsVUFDZDtBQUNBLG1CQUFTLElBQUksTUFBTTtBQUNmLGtCQUFNLEtBQUssSUFBSTtBQUNmLGdCQUFJLENBQUMsU0FBUztBQUNWLHdCQUFVLHNCQUFzQixRQUFRO0FBQUEsWUFDNUM7QUFBQSxVQUNKO0FBQ0EsbUJBQVMsU0FBUztBQUNkLGtCQUFNLE9BQU8sQ0FBQztBQUNkLGlDQUFxQixPQUFPO0FBQzVCLHNCQUFVO0FBQUEsVUFDZDtBQUNBLGlCQUFPLEVBQUUsS0FBVSxPQUFlO0FBQUEsUUFDdEM7QUFFQSxpQkFBUyxZQUFZLE1BQU07QUFDdkIsY0FBSSxXQUFXO0FBQ2YsY0FBSSxLQUFLLFNBQVM7QUFDZCx3QkFBWSxLQUFLLFVBQVU7QUFBQSxVQUMvQjtBQUNBLGNBQUksS0FBSyxTQUFTO0FBQ2Qsd0JBQVksS0FBSyxVQUFVLEtBQUs7QUFBQSxVQUNwQztBQUNBLGNBQUksS0FBSyxPQUFPO0FBQ1osd0JBQVksS0FBSyxRQUFRLEtBQUssS0FBSztBQUFBLFVBQ3ZDO0FBQ0EsY0FBSSxLQUFLLE1BQU07QUFDWCx3QkFBWSxLQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUs7QUFBQSxVQUMzQztBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUVBLGlCQUFTLFdBQVcsTUFBTTtBQUN0QixrQkFBUSxLQUFLLGNBQWMsS0FBSyxXQUFXLFlBQVksSUFBSTtBQUFBLFFBQy9EO0FBQ0EsaUJBQVMscUJBQXFCLE1BQU0sTUFBTSxXQUFXO0FBQ2pELGNBQUksY0FBYyxRQUFRO0FBQUUsd0JBQVksU0FBUztBQUFBLFVBQVc7QUFDNUQsY0FBSSxxQkFBcUI7QUFDekIsY0FBSSxnQkFBZ0IsWUFBWSxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQzlDLGNBQUksb0JBQW9CLFlBQVksRUFBRSxTQUFTLEdBQUcsQ0FBQztBQUNuRCxjQUFJLGNBQWMsS0FBSztBQUN2QixjQUFJLFNBQVMsS0FBSztBQUNsQixjQUFJLENBQUMsUUFBUTtBQUNULGtCQUFNLElBQUksTUFBTSw2REFBNkQ7QUFBQSxVQUNqRjtBQUNBLGNBQUksU0FBUyxrQkFBa0IsQ0FBQyxhQUFhO0FBQ3pDLGtCQUFNLElBQUksTUFBTSxpRUFBaUU7QUFBQSxVQUNyRjtBQUNBLGNBQUksV0FBVztBQUNmLGNBQUksUUFBUTtBQUNaLGNBQUksWUFBWTtBQUNoQixjQUFJLFVBQVUsU0FBUyxXQUFZO0FBQy9CLGdCQUFJLFdBQVc7QUFDWDtBQUFBLFlBQ0o7QUFDQTtBQUNBLGdCQUFJLE1BQU0sS0FBSyxJQUFJO0FBQ25CLGdCQUFJLFNBQVMsTUFBTTtBQUNmLHNCQUFRO0FBQUEsWUFDWixXQUNTLFlBQVksb0JBQW9CO0FBQ3JDLGtCQUFJLE1BQU0sUUFBUSxtQkFBbUI7QUFDakMsNEJBQVksV0FBVyxXQUFZO0FBQy9CLDBCQUFRO0FBQ1IsNkJBQVc7QUFDWCw4QkFBWTtBQUNaLDBCQUFRO0FBQUEsZ0JBQ1osR0FBRyxhQUFhO0FBQ2hCO0FBQUEsY0FDSjtBQUNBLHNCQUFRO0FBQ1IseUJBQVc7QUFBQSxZQUNmO0FBQ0EsZ0JBQUksU0FBUyxVQUFVO0FBQ25CLGtCQUFJLGVBQWUsWUFBWSxlQUFlLFFBQVE7QUFDbEQscUJBQUs7QUFDTDtBQUFBLGNBQ0o7QUFBQSxZQUNKO0FBQ0EsZ0JBQUksU0FBUyxnQkFBZ0I7QUFDekIsa0JBQUksWUFBWSxjQUFjLE1BQU07QUFDaEMscUJBQUs7QUFDTDtBQUFBLGNBQ0o7QUFDQSxrQkFBSSxZQUFZLGVBQWUsUUFBUTtBQUNuQyw2QkFBYSxZQUFZLFVBQVU7QUFBQSxjQUN2QztBQUFBLFlBQ0o7QUFDQSxtQkFBTyxhQUFhLE1BQU0sY0FBYyxZQUFZLGNBQWMsT0FBTyxVQUFVO0FBQ25GLFlBQUFDLFVBQVMsWUFBWTtBQUNyQix5QkFBYSxVQUFVO0FBQUEsVUFDM0IsQ0FBQztBQUNELGNBQUlBLFlBQVcsSUFBSSxpQkFBaUIsV0FBWTtBQUM1QyxnQkFBSyxTQUFTLFlBQVksS0FBSyxlQUFlLFVBQ3pDLFNBQVMsa0JBQWtCLEtBQUssb0JBQW9CLGFBQWM7QUFDbkUsc0JBQVE7QUFBQSxZQUNaO0FBQUEsVUFDSixDQUFDO0FBQ0QsY0FBSSxNQUFNLFdBQVk7QUFDbEIsWUFBQUEsVUFBUyxRQUFRLFFBQVEsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLFVBQ2hEO0FBQ0EsY0FBSSxPQUFPLFdBQVk7QUFDbkIseUJBQWEsU0FBUztBQUN0QixZQUFBQSxVQUFTLFdBQVc7QUFDcEIsb0JBQVEsT0FBTztBQUFBLFVBQ25CO0FBQ0EsY0FBSSxPQUFPLFdBQVk7QUFDbkIsWUFBQUEsVUFBUyxZQUFZO0FBQUEsVUFDekI7QUFDQSxjQUFJLGVBQWUsU0FBVSxZQUFZO0FBQ3JDLHFCQUFTO0FBQ1QsaUJBQUs7QUFDTCxnQkFBSTtBQUFBLFVBQ1I7QUFDQSxjQUFJO0FBQ0osaUJBQU8sRUFBRSxLQUFVLE1BQVksS0FBVztBQUFBLFFBQzlDO0FBQ0EsaUJBQVMsbUJBQW1CLE1BQU0sVUFBVTtBQUN4QyxjQUFJLFFBQVEsTUFBTTtBQUNkO0FBQUEsVUFDSjtBQUNBLGNBQUksU0FBUyxTQUFTLGlCQUFpQixNQUFNLFdBQVcsY0FBYztBQUFBLFlBQ2xFLFlBQVksU0FBVUMsT0FBTTtBQUN4QixxQkFBT0EsTUFBSyxjQUFjLE9BQU8sV0FBVyxjQUFjLFdBQVc7QUFBQSxZQUN6RTtBQUFBLFVBQ0osQ0FBQztBQUNELG1CQUFTLE9BQVEsS0FBSyxhQUFhLE9BQU8sY0FBYyxPQUFPLFNBQVMsR0FBSSxRQUFRLE1BQU0sT0FBTyxPQUFPLFNBQVMsR0FBRztBQUNoSCxnQkFBSSxLQUFLLFVBQVUsU0FBUyx3QkFBd0IsR0FBRztBQUNuRDtBQUFBLFlBQ0o7QUFDQSxxQkFBUyxJQUFJO0FBQ2IsK0JBQW1CLEtBQUssWUFBWSxRQUFRO0FBQUEsVUFDaEQ7QUFBQSxRQUNKO0FBQ0EsWUFBSSxhQUFhLFdBQVk7QUFDekIsaUJBQU8sU0FBUyxlQUFlLGNBQWMsU0FBUyxlQUFlO0FBQUEsUUFDekU7QUFDQSxpQkFBUyxjQUFjLFNBQVM7QUFDNUIsdUJBQWE7QUFBQSxRQUNqQjtBQUNBLFlBQUksc0JBQXNCLG9CQUFJLElBQUk7QUFDbEMsaUJBQVMsb0JBQW9CLFVBQVU7QUFDbkMscUJBQVcsSUFBSSxTQUFTLElBQUksb0JBQW9CLElBQUksUUFBUTtBQUFBLFFBQ2hFO0FBQ0EsaUJBQVMsdUJBQXVCLFVBQVU7QUFDdEMsOEJBQW9CLE9BQU8sUUFBUTtBQUFBLFFBQ3ZDO0FBQ0EsaUJBQVMsdUJBQXVCO0FBQzVCLGlCQUFPLFNBQVMsZUFBZTtBQUFBLFFBQ25DO0FBQ0EsWUFBSSw4QkFBOEIsb0JBQUksSUFBSTtBQUMxQyxpQkFBUyw4QkFBOEIsVUFBVTtBQUM3QywrQkFBcUIsSUFBSSxTQUFTLElBQUksNEJBQTRCLElBQUksUUFBUTtBQUFBLFFBQ2xGO0FBQ0EsaUJBQVMsbUNBQW1DO0FBQ3hDLHNDQUE0QixNQUFNO0FBQUEsUUFDdEM7QUFDQSxZQUFJLENBQUMsV0FBVyxHQUFHO0FBQ2YsY0FBSSx1QkFBdUIsV0FBWTtBQUNuQyxnQkFBSSxXQUFXLEdBQUc7QUFDZCxrQ0FBb0IsUUFBUSxTQUFVLFVBQVU7QUFBRSx1QkFBTyxTQUFTO0FBQUEsY0FBRyxDQUFDO0FBQ3RFLGtDQUFvQixNQUFNO0FBQzFCLGtCQUFJLHFCQUFxQixHQUFHO0FBQ3hCLHlCQUFTLG9CQUFvQixvQkFBb0Isb0JBQW9CO0FBQ3JFLDRDQUE0QixRQUFRLFNBQVUsVUFBVTtBQUFFLHlCQUFPLFNBQVM7QUFBQSxnQkFBRyxDQUFDO0FBQzlFLDRDQUE0QixNQUFNO0FBQUEsY0FDdEM7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUNBLG1CQUFTLGlCQUFpQixvQkFBb0Isb0JBQW9CO0FBQUEsUUFDdEU7QUFDQSxZQUFJLHVCQUF1QjtBQUMzQixpQkFBUyxlQUFlLFdBQVc7QUFDL0IsY0FBSSxVQUFVLFNBQVMsc0JBQXNCO0FBQ3pDLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGNBQUksa0JBQWtCO0FBQ3RCLG1CQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3ZDLCtCQUFtQixVQUFVLENBQUMsRUFBRSxXQUFXO0FBQzNDLGdCQUFJLGtCQUFrQixzQkFBc0I7QUFDeEMscUJBQU87QUFBQSxZQUNYO0FBQUEsVUFDSjtBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUNBLGlCQUFTLDBCQUEwQixXQUFXO0FBQzFDLGNBQUksWUFBWSxvQkFBSSxJQUFJO0FBQ3hCLGNBQUksWUFBWSxvQkFBSSxJQUFJO0FBQ3hCLGNBQUksUUFBUSxvQkFBSSxJQUFJO0FBQ3BCLG9CQUFVLFFBQVEsU0FBVSxHQUFHO0FBQzNCLG9CQUFRLEVBQUUsWUFBWSxTQUFVLEdBQUc7QUFDL0Isa0JBQUksYUFBYSxXQUFXLEVBQUUsYUFBYTtBQUN2QywwQkFBVSxJQUFJLENBQUM7QUFBQSxjQUNuQjtBQUFBLFlBQ0osQ0FBQztBQUNELG9CQUFRLEVBQUUsY0FBYyxTQUFVLEdBQUc7QUFDakMsa0JBQUksYUFBYSxTQUFTO0FBQ3RCLG9CQUFJLEVBQUUsYUFBYTtBQUNmLHdCQUFNLElBQUksQ0FBQztBQUNYLDRCQUFVLE9BQU8sQ0FBQztBQUFBLGdCQUN0QixPQUNLO0FBQ0QsNEJBQVUsSUFBSSxDQUFDO0FBQUEsZ0JBQ25CO0FBQUEsY0FDSjtBQUFBLFlBQ0osQ0FBQztBQUFBLFVBQ0wsQ0FBQztBQUNELGNBQUkscUJBQXFCLENBQUM7QUFDMUIsY0FBSSxxQkFBcUIsQ0FBQztBQUMxQixvQkFBVSxRQUFRLFNBQVUsTUFBTTtBQUM5QixnQkFBSSxVQUFVLElBQUksS0FBSyxhQUFhLEdBQUc7QUFDbkMsaUNBQW1CLEtBQUssSUFBSTtBQUFBLFlBQ2hDO0FBQUEsVUFDSixDQUFDO0FBQ0Qsb0JBQVUsUUFBUSxTQUFVLE1BQU07QUFDOUIsZ0JBQUksVUFBVSxJQUFJLEtBQUssYUFBYSxHQUFHO0FBQ25DLGlDQUFtQixLQUFLLElBQUk7QUFBQSxZQUNoQztBQUFBLFVBQ0osQ0FBQztBQUNELDZCQUFtQixRQUFRLFNBQVUsTUFBTTtBQUFFLG1CQUFPLFVBQVUsT0FBTyxJQUFJO0FBQUEsVUFBRyxDQUFDO0FBQzdFLDZCQUFtQixRQUFRLFNBQVUsTUFBTTtBQUFFLG1CQUFPLFVBQVUsT0FBTyxJQUFJO0FBQUEsVUFBRyxDQUFDO0FBQzdFLGlCQUFPLEVBQUUsV0FBc0IsT0FBYyxVQUFxQjtBQUFBLFFBQ3RFO0FBQ0EsWUFBSSx5QkFBeUIsb0JBQUksSUFBSTtBQUNyQyxZQUFJLHlCQUF5QixvQkFBSSxRQUFRO0FBQ3pDLGlCQUFTLDRCQUE0QixNQUFNLFdBQVc7QUFDbEQsY0FBSUQ7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUNKLGNBQUksdUJBQXVCLElBQUksSUFBSSxHQUFHO0FBQ2xDLFlBQUFBLFlBQVcsdUJBQXVCLElBQUksSUFBSTtBQUMxQyxnQ0FBb0IsdUJBQXVCLElBQUlBLFNBQVE7QUFBQSxVQUMzRCxPQUNLO0FBQ0QsZ0JBQUksMkJBQTJCO0FBQy9CLGdCQUFJLDRCQUE0QjtBQUNoQyxZQUFBQSxZQUFXLElBQUksaUJBQWlCLFNBQVUsV0FBVztBQUNqRCxrQkFBSSxlQUFlLFNBQVMsR0FBRztBQUMzQixvQkFBSSxDQUFDLDRCQUE0QixXQUFXLEdBQUc7QUFDM0Msb0NBQWtCLFFBQVEsU0FBVSxJQUFJO0FBQ3BDLHdCQUFJLGtCQUFrQixHQUFHO0FBQ3pCLDJCQUFPLGdCQUFnQixJQUFJO0FBQUEsa0JBQy9CLENBQUM7QUFBQSxnQkFDTCxXQUNTLENBQUMsMkJBQTJCO0FBQ2pDLHFDQUFtQixXQUFZO0FBQUUsMkJBQU8sa0JBQWtCLFFBQVEsU0FBVSxJQUFJO0FBQzVFLDBCQUFJLGtCQUFrQixHQUFHO0FBQ3pCLDZCQUFPLGdCQUFnQixJQUFJO0FBQUEsb0JBQy9CLENBQUM7QUFBQSxrQkFBRztBQUNKLHNDQUFvQixnQkFBZ0I7QUFDcEMsOENBQTRCO0FBQUEsZ0JBQ2hDO0FBQ0EsMkNBQTJCO0FBQUEsY0FDL0IsT0FDSztBQUNELG9CQUFJLHVCQUF1QiwwQkFBMEIsU0FBUztBQUM5RCxrQ0FBa0IsUUFBUSxTQUFVLElBQUk7QUFDcEMsc0JBQUksbUJBQW1CLEdBQUc7QUFDMUIseUJBQU8saUJBQWlCLG9CQUFvQjtBQUFBLGdCQUNoRCxDQUFDO0FBQUEsY0FDTDtBQUFBLFlBQ0osQ0FBQztBQUNELFlBQUFBLFVBQVMsUUFBUSxNQUFNLEVBQUUsV0FBVyxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBQ3pELG1DQUF1QixJQUFJLE1BQU1BLFNBQVE7QUFDekMsZ0NBQW9CLG9CQUFJLElBQUk7QUFDNUIsbUNBQXVCLElBQUlBLFdBQVUsaUJBQWlCO0FBQUEsVUFDMUQ7QUFDQSw0QkFBa0IsSUFBSSxTQUFTO0FBQy9CLGlCQUFPO0FBQUEsWUFDSCxZQUFZLFdBQVk7QUFDcEIsZ0NBQWtCLE9BQU8sU0FBUztBQUNsQyxrQkFBSSxrQkFBa0I7QUFDbEIsdUNBQXVCLGdCQUFnQjtBQUFBLGNBQzNDO0FBQ0Esa0JBQUksa0JBQWtCLFNBQVMsR0FBRztBQUM5QixnQkFBQUEsVUFBUyxXQUFXO0FBQ3BCLHVDQUF1QixPQUFPQSxTQUFRO0FBQ3RDLHVDQUF1QixPQUFPLElBQUk7QUFBQSxjQUN0QztBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUVBLFlBQUk7QUFDSixZQUFJLGlCQUFpQixvQkFBSSxJQUFJO0FBQzdCLGlCQUFTLFdBQVcsTUFBTTtBQUN0QixjQUFJLENBQUMsUUFBUTtBQUNULHFCQUFTLFNBQVMsY0FBYyxHQUFHO0FBQUEsVUFDdkM7QUFDQSxpQkFBTyxPQUFPO0FBQ2QsaUJBQU8sT0FBTztBQUFBLFFBQ2xCO0FBQ0EsaUJBQVMsU0FBUyxNQUFNLE9BQU87QUFDM0IsY0FBSSxVQUFVLFFBQVE7QUFBRSxvQkFBUTtBQUFBLFVBQU07QUFDdEMsY0FBSSxNQUFNLEdBQUcsT0FBTyxJQUFJLEVBQUUsT0FBTyxRQUFRLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtBQUMvRCxjQUFJLGVBQWUsSUFBSSxHQUFHLEdBQUc7QUFDekIsbUJBQU8sZUFBZSxJQUFJLEdBQUc7QUFBQSxVQUNqQztBQUNBLGNBQUksT0FBTztBQUNQLGdCQUFJLGNBQWMsSUFBSSxJQUFJLE1BQU0sV0FBVyxLQUFLLENBQUM7QUFDakQsMkJBQWUsSUFBSSxLQUFLLFdBQVc7QUFDbkMsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxZQUFZLElBQUksSUFBSSxXQUFXLElBQUksQ0FBQztBQUN4Qyx5QkFBZSxJQUFJLE1BQU0sU0FBUztBQUNsQyxpQkFBTztBQUFBLFFBQ1g7QUFDQSxpQkFBUyxlQUFlLE9BQU8sV0FBVztBQUN0QyxjQUFJLFVBQVUsTUFBTSxZQUFZLEdBQUc7QUFDL0IsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxRQUFRLEtBQUssU0FBUyxHQUFHO0FBQ3pCLG1CQUFPLEdBQUcsT0FBTyxTQUFTLFFBQVEsRUFBRSxPQUFPLFNBQVM7QUFBQSxVQUN4RDtBQUNBLGNBQUksSUFBSSxTQUFTLEtBQUs7QUFDdEIsY0FBSSxJQUFJLFNBQVMsV0FBVyxFQUFFLElBQUk7QUFDbEMsaUJBQU8sRUFBRTtBQUFBLFFBQ2I7QUFDQSxpQkFBUyw2QkFBNkIsTUFBTTtBQUN4QyxjQUFJLEtBQUssV0FBVyxPQUFPLEdBQUc7QUFDMUIsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxNQUFNLFNBQVMsSUFBSTtBQUN2QixjQUFJLElBQUksYUFBYSxTQUFTLFVBQVU7QUFDcEMsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxJQUFJLGFBQWEsU0FBUyxVQUFVO0FBQ3BDLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGNBQUksSUFBSSxTQUFTLFNBQVMsTUFBTTtBQUM1QixtQkFBTztBQUFBLFVBQ1g7QUFDQSxpQkFBTyxJQUFJLGFBQWEsU0FBUztBQUFBLFFBQ3JDO0FBRUEsaUJBQVMsZ0JBQWdCLE9BQU8sU0FBUyxrQkFBa0I7QUFDdkQsa0JBQVEsT0FBTyxTQUFVLE1BQU07QUFDM0IsZ0JBQUksS0FBSyxjQUFjO0FBQ25CLHNCQUFRLElBQUk7QUFBQSxZQUNoQixXQUNTLEtBQUssTUFBTTtBQUNoQixrQkFBSTtBQUNBLGdDQUFnQixLQUFLLFdBQVcsVUFBVSxTQUFTLGdCQUFnQjtBQUFBLGNBQ3ZFLFNBQ08sS0FBSztBQUNSLHdCQUFRLDBCQUEwQjtBQUNsQyxvQ0FBb0IsaUJBQWlCO0FBQUEsY0FDekM7QUFBQSxZQUNKLFdBQ1MsS0FBSyxPQUFPO0FBQ2pCLGtCQUFJLFFBQVEsTUFBTSxLQUFLLEtBQUssS0FBSztBQUNqQyxrQkFBSSx1QkFBdUIsTUFBTSxLQUFLLFNBQVUsR0FBRztBQUFFLHVCQUFPLEVBQUUsV0FBVyxRQUFRLEtBQUssRUFBRSxXQUFXLEtBQUssS0FBSyxFQUFFLFdBQVcsR0FBRztBQUFBLGNBQUcsQ0FBQztBQUNqSSxrQkFBSSxrQkFBa0IsTUFBTSxLQUFLLFNBQVUsR0FBRztBQUFFLHVCQUFPLEVBQUUsV0FBVyxPQUFPLEtBQUssRUFBRSxXQUFXLFFBQVE7QUFBQSxjQUFHLENBQUM7QUFDekcsa0JBQUksd0JBQXdCLENBQUMsaUJBQWlCO0FBQzFDLGdDQUFnQixLQUFLLFVBQVUsU0FBUyxnQkFBZ0I7QUFBQSxjQUM1RDtBQUFBLFlBQ0osV0FDUyxLQUFLLGVBQWU7QUFDekIsa0JBQUksSUFBSSxTQUFTLEtBQUssYUFBYSxHQUFHO0FBQ2xDLGdDQUFnQixLQUFLLFVBQVUsU0FBUyxnQkFBZ0I7QUFBQSxjQUM1RDtBQUFBLFlBQ0osT0FDSztBQUNELHNCQUFRLDhCQUE4QixJQUFJO0FBQUEsWUFDOUM7QUFBQSxVQUNKLENBQUM7QUFBQSxRQUNMO0FBQ0EsWUFBSSxrQ0FBa0M7QUFBQSxVQUNsQztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDSjtBQUNBLFlBQUksNkJBQTZCLFdBQVcsZ0NBQWdDLElBQUksU0FBVSxNQUFNO0FBQzVGLGNBQUksU0FBUyxJQUFJLE9BQU8sR0FBRyxPQUFPLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsaUJBQU8sQ0FBQyxNQUFNLE1BQU07QUFBQSxRQUN4QixDQUFDLElBQUk7QUFDTCxpQkFBUyx1QkFBdUIsT0FBTyxTQUFTO0FBQzVDLGtCQUFRLE9BQU8sU0FBVSxVQUFVO0FBQy9CLGdCQUFJLFFBQVEsTUFBTSxpQkFBaUIsUUFBUSxFQUFFLEtBQUs7QUFDbEQsZ0JBQUksQ0FBQyxPQUFPO0FBQ1I7QUFBQSxZQUNKO0FBQ0Esb0JBQVEsVUFBVSxLQUFLO0FBQUEsVUFDM0IsQ0FBQztBQUNELGNBQUksVUFBVSxNQUFNO0FBQ3BCLGNBQUksUUFBUSxTQUFTLE1BQU0sR0FBRztBQUMxQixnQkFBSSxVQUFVO0FBQ1YseUNBQTJCLFFBQVEsU0FBVSxJQUFJO0FBQzdDLG9CQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDO0FBQ25ELG9CQUFJLFFBQVEsUUFBUSxNQUFNLE1BQU07QUFDaEMsb0JBQUksU0FBUyxNQUFNLENBQUMsR0FBRztBQUNuQixzQkFBSSxNQUFNLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFDeEIsMEJBQVEsTUFBTSxHQUFHO0FBQUEsZ0JBQ3JCO0FBQUEsY0FDSixDQUFDO0FBQUEsWUFDTCxPQUNLO0FBQ0QsOENBQWdDLFFBQVEsU0FBVSxNQUFNO0FBQ3BELG9CQUFJLE1BQU0sTUFBTSxpQkFBaUIsSUFBSTtBQUNyQyxvQkFBSSxPQUFPLElBQUksU0FBUyxNQUFNLEdBQUc7QUFDN0IsMEJBQVEsTUFBTSxHQUFHO0FBQUEsZ0JBQ3JCO0FBQUEsY0FDSixDQUFDO0FBQUEsWUFDTDtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQ0EsWUFBSSxjQUFjO0FBQ2xCLFlBQUksaUJBQWlCO0FBQ3JCLGlCQUFTLGVBQWUsUUFBUTtBQUM1QixpQkFBTyxPQUFPLEtBQUssRUFBRSxRQUFRLGlCQUFpQixJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsWUFBWSxJQUFJLEVBQUUsUUFBUSxZQUFZLElBQUksRUFBRSxRQUFRLGNBQWMsSUFBSTtBQUFBLFFBQzdJO0FBQ0EsaUJBQVMsZUFBZSxLQUFLO0FBQ3pCLGNBQUksU0FBUyxTQUFTLEdBQUc7QUFDekIsaUJBQU8sR0FBRyxPQUFPLE9BQU8sTUFBTSxFQUFFLE9BQU8sT0FBTyxTQUFTLFFBQVEsU0FBUyxFQUFFLEVBQUUsUUFBUSxrQkFBa0IsSUFBSSxDQUFDO0FBQUEsUUFDL0c7QUFDQSxpQkFBUyxtQ0FBbUMsTUFBTSxhQUFhO0FBQzNELGlCQUFPLEtBQUssUUFBUSxhQUFhLFNBQVUsT0FBTztBQUM5QyxnQkFBSSxZQUFZLGVBQWUsS0FBSztBQUNwQyxnQkFBSTtBQUNBLHFCQUFPLFFBQVMsT0FBTyxlQUFlLGFBQWEsU0FBUyxHQUFHLElBQUs7QUFBQSxZQUN4RSxTQUNPLEtBQUs7QUFDUixxQkFBTztBQUFBLFlBQ1g7QUFBQSxVQUNKLENBQUM7QUFBQSxRQUNMO0FBQ0EsWUFBSSxtQkFBbUI7QUFDdkIsaUJBQVMsa0JBQWtCLE1BQU07QUFDN0IsaUJBQU8sS0FBSyxRQUFRLGtCQUFrQixFQUFFO0FBQUEsUUFDNUM7QUFDQSxZQUFJLGdCQUFnQjtBQUNwQixpQkFBUyxtQkFBbUIsTUFBTTtBQUM5QixpQkFBTyxLQUFLLFFBQVEsZUFBZSxFQUFFO0FBQUEsUUFDekM7QUFFQSxpQkFBUyxTQUFTLFlBQVk7QUFDMUIsY0FBSSxXQUFXLENBQUM7QUFDaEIsY0FBSSxlQUFlLENBQUM7QUFDcEIsY0FBSTtBQUNKLG1CQUFTLElBQUksR0FBRyxNQUFNLFdBQVcsUUFBUSxJQUFJLEtBQUssS0FBSztBQUNuRCxnQkFBSSxRQUFRLFdBQVcsQ0FBQztBQUN4QixnQkFBSSxDQUFDLFNBQVMsVUFBVSxLQUFLO0FBQ3pCO0FBQUEsWUFDSjtBQUNBLGdCQUFJLFVBQVUsSUFBSSxLQUFLLEdBQUc7QUFDdEIsa0JBQUksS0FBSyxVQUFVLElBQUksS0FBSztBQUM1QixxQkFBTyxhQUFhLFFBQVE7QUFDeEIsb0JBQUksWUFBWSxVQUFVLElBQUksYUFBYSxDQUFDLENBQUM7QUFDN0Msb0JBQUksQ0FBQyxXQUFXO0FBQ1o7QUFBQSxnQkFDSjtBQUNBLG9CQUFJLEdBQUcsZ0JBQWdCLFNBQVMsR0FBRztBQUMvQiwyQkFBUyxLQUFLLGFBQWEsTUFBTSxDQUFDO0FBQUEsZ0JBQ3RDLE9BQ0s7QUFDRDtBQUFBLGdCQUNKO0FBQUEsY0FDSjtBQUNBLDJCQUFhLFFBQVEsS0FBSztBQUFBLFlBQzlCLFdBQ1MsQ0FBQyxhQUFhLFVBQVUsSUFBSSxTQUFTLEdBQUc7QUFDN0MsdUJBQVMsS0FBSyxLQUFLO0FBQUEsWUFDdkIsT0FDSztBQUNELHVCQUFTLFNBQVMsU0FBUyxDQUFDLEtBQUs7QUFBQSxZQUNyQztBQUNBLHdCQUFZO0FBQUEsVUFDaEI7QUFDQSxtQkFBUyxLQUFLLE1BQU0sVUFBVSxjQUFjLENBQUMsR0FBRyxPQUFPLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDNUUsY0FBSSxRQUFRLENBQUM7QUFDYixtQkFBUyxJQUFJLEdBQUcsTUFBTSxTQUFTLFFBQVEsSUFBSSxLQUFLLEtBQUs7QUFDakQsZ0JBQUksS0FBSyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUM7QUFDbEMsZ0JBQUksSUFBSTtBQUNKLGtCQUFJLE9BQU8sTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUM1QixvQkFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFDeEMsT0FDSztBQUNELG9CQUFNLFFBQVEsV0FBVyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFDekM7QUFBQSxVQUNKO0FBQ0EsaUJBQU8sTUFBTSxDQUFDO0FBQUEsUUFDbEI7QUFDQSxZQUFJLFdBQVksV0FBWTtBQUN4QixtQkFBU0UsVUFBUyxZQUFZLFFBQVE7QUFDbEMsaUJBQUssWUFBWTtBQUNqQixpQkFBSyxhQUFhO0FBQUEsVUFDdEI7QUFDQSxVQUFBQSxVQUFTLFVBQVUsT0FBTyxTQUFVLE1BQU0sT0FBTztBQUM3QyxtQkFBTyxLQUFLLFdBQVcsTUFBTSxLQUFLO0FBQUEsVUFDdEM7QUFDQSxVQUFBQSxVQUFTLFVBQVUsa0JBQWtCLFNBQVUsSUFBSTtBQUMvQyxtQkFBTyxLQUFLLGFBQWEsR0FBRztBQUFBLFVBQ2hDO0FBQ0EsaUJBQU9BO0FBQUEsUUFDWCxFQUFFO0FBQ0YsWUFBSSxZQUFZLG9CQUFJLElBQUk7QUFBQSxVQUNwQixDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsU0FBVSxNQUFNLE9BQU87QUFBRSxtQkFBTyxPQUFPO0FBQUEsVUFBTyxDQUFDLENBQUM7QUFBQSxVQUN0RSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsU0FBVSxNQUFNLE9BQU87QUFBRSxtQkFBTyxPQUFPO0FBQUEsVUFBTyxDQUFDLENBQUM7QUFBQSxVQUN0RSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsU0FBVSxNQUFNLE9BQU87QUFBRSxtQkFBTyxPQUFPO0FBQUEsVUFBTyxDQUFDLENBQUM7QUFBQSxVQUN0RSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsU0FBVSxNQUFNLE9BQU87QUFBRSxtQkFBTyxPQUFPO0FBQUEsVUFBTyxDQUFDLENBQUM7QUFBQSxRQUMxRSxDQUFDO0FBRUQsaUJBQVMsV0FBVyxPQUFPLE9BQU8sT0FBTztBQUNyQyxjQUFJLFVBQVUsUUFBUTtBQUFFLG9CQUFRO0FBQUEsVUFBRztBQUNuQyxjQUFJLFVBQVUsQ0FBQztBQUNmLGNBQUk7QUFDSixpQkFBUSxJQUFJLE1BQU0sS0FBSyxLQUFLLEdBQUk7QUFDNUIsb0JBQVEsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUFBLFVBQ3pCO0FBQ0EsaUJBQU87QUFBQSxRQUNYO0FBQ0EsaUJBQVMsVUFBVSxNQUFNO0FBQ3JCLG1CQUFTLFNBQVNDLE9BQU07QUFDcEIsbUJBQU9BLE1BQUssUUFBUSxRQUFRLEVBQUU7QUFBQSxVQUNsQztBQUNBLG1CQUFTLFVBQVVDLFFBQU87QUFDdEIsZ0JBQUlBLFdBQVUsR0FBRztBQUNiLHFCQUFPO0FBQUEsWUFDWDtBQUNBLG1CQUFPLElBQUksT0FBTyxJQUFJQSxNQUFLO0FBQUEsVUFDL0I7QUFDQSxjQUFJLEtBQUssU0FBUyxLQUFPO0FBQ3JCLGdCQUFJLGtCQUFrQjtBQUN0QixtQkFBTyxnQkFBZ0IsS0FBSyxJQUFJLEdBQUc7QUFDL0IscUJBQU8sS0FBSyxRQUFRLGlCQUFpQixFQUFFO0FBQUEsWUFDM0M7QUFBQSxVQUNKO0FBQ0EsY0FBSSxNQUFPLEtBQ04sUUFBUSxXQUFXLEdBQUcsRUFDdEIsUUFBUSxPQUFPLEtBQUssRUFDcEIsUUFBUSxPQUFPLE9BQU8sRUFDdEIsUUFBUSwyQkFBMkIsS0FBSyxFQUN4QyxRQUFRLDJCQUEyQixLQUFLLEVBQ3hDLFFBQVEsWUFBWSxJQUFJLEVBQ3hCLE1BQU0sSUFBSTtBQUNmLGNBQUksUUFBUTtBQUNaLGNBQUksWUFBWSxDQUFDO0FBQ2pCLG1CQUFTLElBQUksR0FBRyxNQUFNLElBQUksUUFBUSxJQUFJLEtBQUssS0FBSztBQUM1QyxnQkFBSSxPQUFPLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQ2pDLGdCQUFJLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDcEIsd0JBQVUsS0FBSyxVQUFVLE9BQU8sSUFBSSxTQUFTLElBQUksQ0FBQztBQUFBLFlBQ3RELFdBQ1MsS0FBSyxTQUFTLEdBQUksR0FBRztBQUMxQix3QkFBVSxLQUFLLFVBQVUsRUFBRSxLQUFLLElBQUksU0FBUyxJQUFJLENBQUM7QUFBQSxZQUN0RCxPQUNLO0FBQ0Qsd0JBQVUsS0FBSyxVQUFVLEtBQUssSUFBSSxTQUFTLElBQUksQ0FBQztBQUFBLFlBQ3BEO0FBQUEsVUFDSjtBQUNBLGlCQUFPLFVBQVUsS0FBSyxFQUFFLEVBQUUsS0FBSztBQUFBLFFBQ25DO0FBQ0EsaUJBQVMsb0JBQW9CLE9BQU8sa0JBQWtCO0FBQ2xELGNBQUkscUJBQXFCLFFBQVE7QUFBRSwrQkFBbUI7QUFBQSxVQUFHO0FBQ3pELGNBQUksU0FBUyxNQUFNO0FBQ25CLGNBQUksUUFBUTtBQUNaLGNBQUksaUJBQWlCO0FBQ3JCLG1CQUFTLElBQUksa0JBQWtCLElBQUksUUFBUSxLQUFLO0FBQzVDLGdCQUFJLFVBQVUsR0FBRztBQUNiLGtCQUFJLFlBQVksTUFBTSxRQUFRLEtBQUssQ0FBQztBQUNwQyxrQkFBSSxZQUFZLEdBQUc7QUFDZjtBQUFBLGNBQ0o7QUFDQSwrQkFBaUI7QUFDakI7QUFDQSxrQkFBSTtBQUFBLFlBQ1IsT0FDSztBQUNELGtCQUFJLGVBQWUsTUFBTSxRQUFRLEtBQUssQ0FBQztBQUN2QyxrQkFBSSxlQUFlLEdBQUc7QUFDbEI7QUFBQSxjQUNKO0FBQ0Esa0JBQUksWUFBWSxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQ3BDLGtCQUFJLFlBQVksS0FBSyxlQUFlLFdBQVc7QUFDM0M7QUFDQSxvQkFBSSxVQUFVLEdBQUc7QUFDYix5QkFBTyxFQUFFLE9BQU8sZ0JBQWdCLEtBQUssZUFBZSxFQUFFO0FBQUEsZ0JBQzFEO0FBQ0Esb0JBQUk7QUFBQSxjQUNSLE9BQ0s7QUFDRDtBQUNBLG9CQUFJO0FBQUEsY0FDUjtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQ0EsaUJBQU87QUFBQSxRQUNYO0FBRUEsWUFBSSxpQkFBaUIsb0JBQUksSUFBSTtBQUM3QixZQUFJLGlCQUFpQixvQkFBSSxJQUFJO0FBQzdCLGlCQUFTLG9CQUFvQixRQUFRO0FBQ2pDLG1CQUFTLE9BQU8sS0FBSztBQUNyQixjQUFJLGVBQWUsSUFBSSxNQUFNLEdBQUc7QUFDNUIsbUJBQU8sZUFBZSxJQUFJLE1BQU07QUFBQSxVQUNwQztBQUNBLGNBQUksT0FBTyxTQUFTLE9BQU8sR0FBRztBQUMxQixxQkFBUyxvQkFBb0IsTUFBTTtBQUFBLFVBQ3ZDO0FBQ0EsY0FBSSxRQUFRLE1BQU0sTUFBTTtBQUN4QixtQkFBUyxlQUFlLElBQUksUUFBUSxLQUFLO0FBQ3pDLGlCQUFPO0FBQUEsUUFDWDtBQUNBLGlCQUFTLG9CQUFvQixPQUFPO0FBQ2hDLGNBQUksZUFBZSxJQUFJLEtBQUssR0FBRztBQUMzQixtQkFBTyxlQUFlLElBQUksS0FBSztBQUFBLFVBQ25DO0FBQ0EsY0FBSSxNQUFNLG9CQUFvQixLQUFLO0FBQ25DLGNBQUksQ0FBQyxLQUFLO0FBQ04sbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxNQUFNLFNBQVMsR0FBRztBQUN0Qix5QkFBZSxJQUFJLE9BQU8sR0FBRztBQUM3QixpQkFBTztBQUFBLFFBQ1g7QUFDQSxpQkFBUyxrQkFBa0I7QUFDdkIseUJBQWUsTUFBTTtBQUNyQix5QkFBZSxNQUFNO0FBQUEsUUFDekI7QUFDQSxpQkFBUyxTQUFTLElBQUk7QUFDbEIsY0FBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxJQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3JFLGNBQUksTUFBTSxHQUFHO0FBQ1QsZ0JBQUksS0FBSyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLFNBQVVDLElBQUc7QUFBRSxxQkFBTyxLQUFLLE1BQU1BLEtBQUksR0FBRztBQUFBLFlBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFDckgsbUJBQU8sRUFBRSxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxFQUFLO0FBQUEsVUFDMUM7QUFDQSxjQUFJLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSztBQUNwQyxjQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSyxJQUFJLEtBQU0sSUFBSSxDQUFDO0FBQzFDLGNBQUksSUFBSSxJQUFJLElBQUk7QUFDaEIsY0FBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFDOUIsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFDZCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUNkLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQ2QsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxTQUFVLEdBQUc7QUFBRSxtQkFBTyxLQUFLLE9BQU8sSUFBSSxLQUFLLEdBQUc7QUFBQSxVQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDO0FBQzFILGlCQUFPLEVBQUUsR0FBTSxHQUFNLEdBQU0sRUFBSztBQUFBLFFBQ3BDO0FBQ0EsaUJBQVMsU0FBUyxJQUFJO0FBQ2xCLGNBQUksT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsSUFBSSxPQUFPLFNBQVMsSUFBSTtBQUM5RSxjQUFJLElBQUksT0FBTztBQUNmLGNBQUksSUFBSSxPQUFPO0FBQ2YsY0FBSSxJQUFJLE9BQU87QUFDZixjQUFJLE1BQU0sS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQzFCLGNBQUksTUFBTSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7QUFDMUIsY0FBSSxJQUFJLE1BQU07QUFDZCxjQUFJLEtBQUssTUFBTSxPQUFPO0FBQ3RCLGNBQUksTUFBTSxHQUFHO0FBQ1QsbUJBQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQU0sRUFBSztBQUFBLFVBQ3BDO0FBQ0EsY0FBSSxLQUFLLFFBQVEsS0FBTyxJQUFJLEtBQUssSUFBSyxJQUNsQyxRQUFRLEtBQU0sSUFBSSxLQUFLLElBQUksS0FDckIsSUFBSSxLQUFLLElBQUksS0FBTTtBQUM3QixjQUFJLElBQUksR0FBRztBQUNQLGlCQUFLO0FBQUEsVUFDVDtBQUNBLGNBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ25DLGlCQUFPLEVBQUUsR0FBTSxHQUFNLEdBQU0sRUFBSztBQUFBLFFBQ3BDO0FBQ0EsaUJBQVMsUUFBUSxHQUFHLFFBQVE7QUFDeEIsY0FBSSxXQUFXLFFBQVE7QUFBRSxxQkFBUztBQUFBLFVBQUc7QUFDckMsY0FBSSxRQUFRLEVBQUUsUUFBUSxNQUFNO0FBQzVCLGNBQUksV0FBVyxHQUFHO0FBQ2QsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxNQUFNLE1BQU0sUUFBUSxHQUFHO0FBQzNCLGNBQUksT0FBTyxHQUFHO0FBQ1YsZ0JBQUksYUFBYSxNQUFNLE1BQU0sS0FBSztBQUNsQyxnQkFBSSxZQUFZO0FBQ1osa0JBQUksV0FBVyxVQUFVLE1BQU0sR0FBRztBQUM5Qix1QkFBTyxNQUFNLFVBQVUsR0FBRyxHQUFHO0FBQUEsY0FDakM7QUFDQSxxQkFBTyxNQUFNLFVBQVUsR0FBRyxXQUFXLEtBQUs7QUFBQSxZQUM5QztBQUFBLFVBQ0o7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFDQSxpQkFBUyxZQUFZLEtBQUs7QUFDdEIsY0FBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUk7QUFDN0MsY0FBSSxLQUFLLFFBQVEsSUFBSSxHQUFHO0FBQ3BCLG1CQUFPLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsT0FBTyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUc7QUFBQSxVQUN2SDtBQUNBLGlCQUFPLE9BQU8sT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsT0FBTyxRQUFRLENBQUMsR0FBRyxHQUFHO0FBQUEsUUFDMUY7QUFDQSxpQkFBUyxlQUFlLElBQUk7QUFDeEIsY0FBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUc7QUFDekMsaUJBQU8sSUFBSSxRQUFRLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxTQUFVLEdBQUc7QUFDakcsbUJBQU8sR0FBRyxPQUFPLElBQUksS0FBSyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFBQSxVQUM3RCxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFBQSxRQUNmO0FBQ0EsaUJBQVMsWUFBWSxLQUFLO0FBQ3RCLGNBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJO0FBQzdDLGNBQUksS0FBSyxRQUFRLElBQUksR0FBRztBQUNwQixtQkFBTyxRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sUUFBUSxJQUFJLEdBQUcsR0FBRyxLQUFLLEVBQUUsT0FBTyxRQUFRLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRSxPQUFPLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLFVBQ3JJO0FBQ0EsaUJBQU8sT0FBTyxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksRUFBRSxPQUFPLFFBQVEsSUFBSSxHQUFHLEdBQUcsS0FBSyxFQUFFLE9BQU8sUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJO0FBQUEsUUFDeEc7QUFDQSxZQUFJLFdBQVc7QUFDZixZQUFJLFdBQVc7QUFDZixZQUFJLFdBQVc7QUFDZixpQkFBUyxNQUFNLFFBQVE7QUFDbkIsY0FBSSxJQUFJLE9BQU8sS0FBSyxFQUFFLFlBQVk7QUFDbEMsY0FBSSxFQUFFLE1BQU0sUUFBUSxHQUFHO0FBQ25CLG1CQUFPLFNBQVMsQ0FBQztBQUFBLFVBQ3JCO0FBQ0EsY0FBSSxFQUFFLE1BQU0sUUFBUSxHQUFHO0FBQ25CLG1CQUFPLFNBQVMsQ0FBQztBQUFBLFVBQ3JCO0FBQ0EsY0FBSSxFQUFFLE1BQU0sUUFBUSxHQUFHO0FBQ25CLG1CQUFPLFNBQVMsQ0FBQztBQUFBLFVBQ3JCO0FBQ0EsY0FBSSxZQUFZLElBQUksQ0FBQyxHQUFHO0FBQ3BCLG1CQUFPLGVBQWUsQ0FBQztBQUFBLFVBQzNCO0FBQ0EsY0FBSSxhQUFhLElBQUksQ0FBQyxHQUFHO0FBQ3JCLG1CQUFPLGVBQWUsQ0FBQztBQUFBLFVBQzNCO0FBQ0EsY0FBSSxXQUFXLGVBQWU7QUFDMUIsbUJBQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxVQUNwQztBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUNBLGlCQUFTLFdBQVcsUUFBUTtBQUN4QixjQUFJLFVBQVUsQ0FBQztBQUNmLGNBQUksVUFBVTtBQUNkLGNBQUksV0FBVztBQUNmLGNBQUksYUFBYSxPQUFPLFFBQVEsR0FBRztBQUNuQyxtQkFBUyxPQUFPLFVBQVUsYUFBYSxHQUFHLE9BQU8sU0FBUyxDQUFDO0FBQzNELG1CQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLO0FBQ3BDLGdCQUFJLElBQUksT0FBTyxDQUFDO0FBQ2hCLGdCQUFJLEtBQUssT0FBTyxLQUFLLE9BQU8sTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUs7QUFDN0QseUJBQVc7QUFBQSxZQUNmLFdBQ1MsYUFBYSxNQUFNLE9BQU8sTUFBTSxNQUFNO0FBQzNDLHNCQUFRLEtBQUssT0FBTyxVQUFVLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLHlCQUFXO0FBQ1gsd0JBQVUsSUFBSTtBQUFBLFlBQ2xCLFdBQ1MsQ0FBQyxVQUFVO0FBQ2hCLHdCQUFVLElBQUk7QUFBQSxZQUNsQjtBQUFBLFVBQ0o7QUFDQSxjQUFJLFVBQVU7QUFDVixvQkFBUSxLQUFLLE9BQU8sVUFBVSxTQUFTLE9BQU8sTUFBTSxDQUFDO0FBQUEsVUFDekQ7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFDQSxpQkFBUyxxQkFBcUIsS0FBSyxPQUFPLE9BQU87QUFDN0MsY0FBSSxNQUFNLFdBQVcsR0FBRztBQUN4QixjQUFJLFlBQVksT0FBTyxRQUFRLEtBQUs7QUFDcEMsY0FBSSxVQUFVLElBQUksSUFBSSxTQUFVLEdBQUc7QUFBRSxtQkFBTyxFQUFFLEtBQUs7QUFBQSxVQUFHLENBQUMsRUFBRSxJQUFJLFNBQVUsR0FBRyxHQUFHO0FBQ3pFLGdCQUFJO0FBQ0osZ0JBQUksT0FBTyxVQUFVLEtBQUssU0FBVSxJQUFJO0FBQ3BDLGtCQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQztBQUNoQyxxQkFBTyxFQUFFLFNBQVMsQ0FBQztBQUFBLFlBQ3ZCLENBQUM7QUFDRCxnQkFBSSxNQUFNO0FBQ04sa0JBQUksV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLFNBQVMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDO0FBQUEsWUFDakYsT0FDSztBQUNELGtCQUFJLFdBQVcsQ0FBQztBQUFBLFlBQ3BCO0FBQ0EsZ0JBQUksTUFBTSxDQUFDLElBQUksR0FBRztBQUNkLHFCQUFPLEtBQUssTUFBTSxDQUFDO0FBQUEsWUFDdkI7QUFDQSxtQkFBTztBQUFBLFVBQ1gsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksV0FBVyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7QUFDaEMsWUFBSSxXQUFXLEVBQUUsS0FBSyxJQUFJO0FBQzFCLGlCQUFTLFNBQVMsTUFBTTtBQUNwQixjQUFJLEtBQUssT0FBTyxxQkFBcUIsTUFBTSxVQUFVLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3pJLGlCQUFPLEVBQUUsR0FBTSxHQUFNLEdBQU0sRUFBSztBQUFBLFFBQ3BDO0FBQ0EsWUFBSSxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUM1QixZQUFJLFdBQVcsRUFBRSxLQUFLLEtBQUssT0FBTyxLQUFLLE9BQU8sSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO0FBQ3JFLGlCQUFTLFNBQVMsTUFBTTtBQUNwQixjQUFJLEtBQUssT0FBTyxxQkFBcUIsTUFBTSxVQUFVLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3pJLGlCQUFPLFNBQVMsRUFBRSxHQUFNLEdBQU0sR0FBTSxFQUFLLENBQUM7QUFBQSxRQUM5QztBQUNBLGlCQUFTLFNBQVMsTUFBTTtBQUNwQixjQUFJLElBQUksS0FBSyxVQUFVLENBQUM7QUFDeEIsa0JBQVEsRUFBRSxRQUFRO0FBQUEsWUFDZCxLQUFLO0FBQUEsWUFDTCxLQUFLLEdBQUc7QUFDSixrQkFBSSxLQUFLLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksU0FBVSxHQUFHO0FBQUUsdUJBQU8sU0FBUyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUFBLGNBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDdEksa0JBQUksSUFBSSxFQUFFLFdBQVcsSUFBSSxJQUFLLFNBQVMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUMzRSxxQkFBTyxFQUFFLEdBQU0sR0FBTSxHQUFNLEVBQUs7QUFBQSxZQUNwQztBQUFBLFlBQ0EsS0FBSztBQUFBLFlBQ0wsS0FBSyxHQUFHO0FBQ0osa0JBQUksS0FBSyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLFNBQVUsR0FBRztBQUFFLHVCQUFPLFNBQVMsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUFBLGNBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDL0gsa0JBQUksSUFBSSxFQUFFLFdBQVcsSUFBSSxJQUFLLFNBQVMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUNoRSxxQkFBTyxFQUFFLEdBQU0sR0FBTSxHQUFNLEVBQUs7QUFBQSxZQUNwQztBQUFBLFVBQ0o7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFDQSxpQkFBUyxlQUFlLFFBQVE7QUFDNUIsY0FBSSxJQUFJLFlBQVksSUFBSSxNQUFNO0FBQzlCLGlCQUFPO0FBQUEsWUFDSCxHQUFJLEtBQUssS0FBTTtBQUFBLFlBQ2YsR0FBSSxLQUFLLElBQUs7QUFBQSxZQUNkLEdBQUksS0FBSyxJQUFLO0FBQUEsWUFDZCxHQUFHO0FBQUEsVUFDUDtBQUFBLFFBQ0o7QUFDQSxpQkFBUyxlQUFlLFFBQVE7QUFDNUIsY0FBSSxJQUFJLGFBQWEsSUFBSSxNQUFNO0FBQy9CLGlCQUFPO0FBQUEsWUFDSCxHQUFJLEtBQUssS0FBTTtBQUFBLFlBQ2YsR0FBSSxLQUFLLElBQUs7QUFBQSxZQUNkLEdBQUksS0FBSyxJQUFLO0FBQUEsWUFDZCxHQUFHO0FBQUEsVUFDUDtBQUFBLFFBQ0o7QUFDQSxpQkFBUyxvQkFBb0IsT0FBTztBQUNoQyxjQUFJLGNBQWM7QUFDbEIsY0FBSSx3QkFBd0IsU0FBVSxPQUFPLEtBQUssYUFBYTtBQUMzRCxvQkFBUSxNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksY0FBYyxNQUFNLFVBQVUsR0FBRztBQUFBLFVBQ3pFO0FBQ0Esa0JBQVEsY0FBYyxNQUFNLFFBQVEsT0FBTyxPQUFPLElBQUk7QUFDbEQsZ0JBQUksUUFBUSxvQkFBb0IsT0FBTyxXQUFXO0FBQ2xELGdCQUFJLENBQUMsT0FBTztBQUNSO0FBQUEsWUFDSjtBQUNBLGdCQUFJLFFBQVEsTUFBTSxNQUFNLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDO0FBQ3RELGdCQUFJLHFCQUFxQixNQUFNLFNBQVMsR0FBRztBQUMzQyxvQkFBUSxNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNoQyxnQkFBSSxTQUFTLEtBQUssTUFBTSxTQUFTLEtBQUssQ0FBQztBQUN2QyxrQ0FBc0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLFVBQVUscUJBQXFCLE1BQU0sR0FBRztBQUFBLFVBQzlGO0FBQ0EsaUJBQU87QUFBQSxRQUNYO0FBQ0EsWUFBSSxjQUFjLElBQUksSUFBSSxPQUFPLFFBQVE7QUFBQSxVQUNyQyxXQUFXO0FBQUEsVUFDWCxjQUFjO0FBQUEsVUFDZCxNQUFNO0FBQUEsVUFDTixZQUFZO0FBQUEsVUFDWixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxnQkFBZ0I7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixZQUFZO0FBQUEsVUFDWixPQUFPO0FBQUEsVUFDUCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxZQUFZO0FBQUEsVUFDWixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxnQkFBZ0I7QUFBQSxVQUNoQixVQUFVO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixlQUFlO0FBQUEsVUFDZixVQUFVO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxVQUNoQixZQUFZO0FBQUEsVUFDWixZQUFZO0FBQUEsVUFDWixTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsVUFDZixlQUFlO0FBQUEsVUFDZixlQUFlO0FBQUEsVUFDZixlQUFlO0FBQUEsVUFDZixZQUFZO0FBQUEsVUFDWixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxZQUFZO0FBQUEsVUFDWixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxRQUFRO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFDVixlQUFlO0FBQUEsVUFDZixXQUFXO0FBQUEsVUFDWCxjQUFjO0FBQUEsVUFDZCxXQUFXO0FBQUEsVUFDWCxZQUFZO0FBQUEsVUFDWixXQUFXO0FBQUEsVUFDWCxzQkFBc0I7QUFBQSxVQUN0QixXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxZQUFZO0FBQUEsVUFDWixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixlQUFlO0FBQUEsVUFDZixjQUFjO0FBQUEsVUFDZCxnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixrQkFBa0I7QUFBQSxVQUNsQixZQUFZO0FBQUEsVUFDWixjQUFjO0FBQUEsVUFDZCxjQUFjO0FBQUEsVUFDZCxnQkFBZ0I7QUFBQSxVQUNoQixpQkFBaUI7QUFBQSxVQUNqQixtQkFBbUI7QUFBQSxVQUNuQixpQkFBaUI7QUFBQSxVQUNqQixpQkFBaUI7QUFBQSxVQUNqQixjQUFjO0FBQUEsVUFDZCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxXQUFXO0FBQUEsVUFDWCxRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxRQUFRO0FBQUEsVUFDUixlQUFlO0FBQUEsVUFDZixXQUFXO0FBQUEsVUFDWCxlQUFlO0FBQUEsVUFDZixlQUFlO0FBQUEsVUFDZixZQUFZO0FBQUEsVUFDWixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixZQUFZO0FBQUEsVUFDWixRQUFRO0FBQUEsVUFDUixlQUFlO0FBQUEsVUFDZixLQUFLO0FBQUEsVUFDTCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixRQUFRO0FBQUEsVUFDUixZQUFZO0FBQUEsVUFDWixVQUFVO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixXQUFXO0FBQUEsVUFDWCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxRQUFRO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxZQUFZO0FBQUEsVUFDWixRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsUUFDakIsQ0FBQyxDQUFDO0FBQ0YsWUFBSSxlQUFlLElBQUksSUFBSSxPQUFPLFFBQVE7QUFBQSxVQUN0QyxjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsVUFDZixjQUFjO0FBQUEsVUFDZCxZQUFZO0FBQUEsVUFDWixZQUFZO0FBQUEsVUFDWixpQkFBaUI7QUFBQSxVQUNqQixjQUFjO0FBQUEsVUFDZCxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxlQUFlO0FBQUEsVUFDZixnQkFBZ0I7QUFBQSxVQUNoQixpQkFBaUI7QUFBQSxVQUNqQixxQkFBcUI7QUFBQSxVQUNyQixnQkFBZ0I7QUFBQSxVQUNoQixVQUFVO0FB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O0FBRVosV0FBUyxVQUFVO0FBQ2pCLFFBQUksV0FBVyxTQUFTLGVBQWUsU0FBUztBQUNoRCxRQUFJLFFBQVE7QUFDWixnQkFBWSxNQUFNO0FBRWhCLGVBQVMsVUFBVSxPQUFPLFFBQVE7QUFDbEMsZUFBUztBQUNULGVBQVMsVUFBVSxJQUFJLFFBQVE7QUFFL0IsVUFBSSxTQUFTLEdBQUc7QUFDZCxpQkFBUyxNQUFNO0FBRWYsZ0JBQVE7QUFBQSxNQUNWLE9BQ0s7QUFDSCxpQkFBUyxNQUFNO0FBQ2YsZ0JBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRixHQUFHLElBQUk7QUFBQSxFQUNUO0FBRUEsVUFBUTsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJfX2Fzc2lnbiIsICJNZXNzYWdlVHlwZSIsICJmZXRjaCIsICJvYnNlcnZlciIsICJub2RlIiwgIk9wZXJhdG9yIiwgInRleHQiLCAiZGVwdGgiLCAieCIsICJzdW0iLCAiZmlsdGVyIiwgIkZpbHRlck1vZGUiLCAibSIsICJBc3luY1F1ZXVlIiwgIl9hIiwgInZhcmlhYmxlc1N0b3JlIiwgImlzSUZyYW1lIiwgImkiLCAiVmFyaWFibGVzU3RvcmUiLCAicHJvcGVydHkiLCAibW9kaWZpZWRWYWx1ZSIsICJ2YWx1ZSIsICJkZWNsYXJhdGlvbnMiLCAiZWxlbWVudHMiLCAiZml4ZXMiLCAiZ29qb2RldiJdCn0K
