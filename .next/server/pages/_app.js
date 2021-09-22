module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "2CrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const tosConstants = {
  AGREE_TOS: 'AGREE_TOS'
};
/* harmony default export */ __webpack_exports__["a"] = (tosConstants);

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GrzJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const hodgkinHuxleyConstants = {
  SET_MORPHOLOGY: 'SET_MORPHOLOGY',
  ADD_MOD_FILE: 'ADD_MOD_FILE',
  REMOVE_MOD_FILE: 'REMOVE_MOD_FILE',
  ADD_ELECTROPHYSIOLOGY: 'ADD_ELECTROPHYSIOLOGY',
  REMOVE_ELECTROPHYSIOLOGY: 'REMOVE_ELECTROPHYSIOLOGY',
  CLEAR: 'CLEAR'
};
/* harmony default export */ __webpack_exports__["a"] = (hodgkinHuxleyConstants);

/***/ }),

/***/ "N39q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _process$env$BACKEND_, _process$env$BASE_URL, _process$env$BASE_URL2, _process$env$HODGKIN_, _process$env$SUGGESTI;

/* harmony default export */ __webpack_exports__["a"] = ({
  BACKEND_URL: (_process$env$BACKEND_ = "http://facility-hub.cineca.it:17895") !== null && _process$env$BACKEND_ !== void 0 ? _process$env$BACKEND_ : 'http://localhost:5000',
  BASE_URL: `${(_process$env$BASE_URL = "/build") !== null && _process$env$BASE_URL !== void 0 ? _process$env$BASE_URL : ''}`,
  BASE_DATA_URL: `${(_process$env$BASE_URL2 = "/build") !== null && _process$env$BASE_URL2 !== void 0 ? _process$env$BASE_URL2 : ''}/json_data`,
  EXTERNAL_API_URLS: {
    EBRAINS_KNOWLEDGE_GRAPH: "https://search.kg.ebrains.eu/api/groups/public/search",
    NEUROMORPHO: "http://neuromorpho.org/",
    HIPPOCAMPOME: "http://hippocampome.org/php/index.php",
    ALLEN_INSTITUTE: "https://celltypes.brain-map.org/experiment/electrophysiology/623308514 "
  },
  HHF_COMM: 'HHF-Comm',
  HFH_TOS: 'HFH_TOS',
  HODGKIN_HUXLEY_BASE_URL: (_process$env$HODGKIN_ = "https://hbp-bsp-hhnb.cineca.it/hh-neuron-builder") !== null && _process$env$HODGKIN_ !== void 0 ? _process$env$HODGKIN_ : "http://localhost/",
  ENDPOINTS: {
    config: 'config',
    menuItems: 'menu-items',
    homePage: 'home-page',
    homePage2: 'home-page2',
    pages: 'pages',
    posts: 'posts',
    news: 'news',
    contacts: 'contacts',
    datasets: 'datasets',
    models: 'models'
  },
  REQUEST_METHODS: {
    get: 'get',
    post: 'post'
  },
  DEFAULT_HITS_PER_PAGE: 20,
  MORPHOLOGY_VIEWER_BASE_URL: 'https://morph-view.apps.hbp.eu/?model=',
  SUGGESTION_MIN_LENGTH: (_process$env$SUGGESTI = 1) !== null && _process$env$SUGGESTI !== void 0 ? _process$env$SUGGESTI : 1,
  AUTH_COOKIE_KEY: 'hbp_auth_cookie',
  DATA_TYPE_LABELS: {
    connection: 'connections',
    electrophysiology: 'electrophysiology',
    morphology: 'morphologies'
  },
  SECTIONS: {
    mainContentTextStyle: {
      fontSize: 26,
      textAlign: 'justify'
    },
    rowContentTextStyle: {
      fontSize: 20,
      textAlign: 'justify'
    },
    rowContentImageStyle: {
      maxWidth: 400
    }
  },
  MIN_SEARCH_LENGTH: 1
});

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _app_App; });

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./helpers/storageHelper.ts
var _window$localStorage, _window;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class StorageHelper {
  static save(key, value) {
    var _this$_storage;

    (_this$_storage = this._storage) === null || _this$_storage === void 0 ? void 0 : _this$_storage.setItem(key, value);
  }

  static get(key) {
    var _this$_storage2;

    return (_this$_storage2 = this._storage) === null || _this$_storage2 === void 0 ? void 0 : _this$_storage2.getItem(key);
  }

  static delete(key) {
    var _this$_storage3;

    return (_this$_storage3 = this._storage) === null || _this$_storage3 === void 0 ? void 0 : _this$_storage3.removeItem(key);
  }

}

_defineProperty(StorageHelper, "_storage", void 0);

class LocalStorageHelper extends StorageHelper {
  static save(key, value) {
    if (!!value) {
      super.save(key, JSON.stringify(value));
    }
  }

  static get(key) {
    const retrievedValue = super.get(key);

    if (!!retrievedValue) {
      return JSON.parse(retrievedValue);
    }

    return null;
  }

  static delete(key) {
    return super.delete(key);
  }

}

_defineProperty(LocalStorageHelper, "_storage", false ? undefined : null);


// EXTERNAL MODULE: ./helpers/hashHelper.ts
var hashHelper = __webpack_require__("v1Az");

// EXTERNAL MODULE: ./constants/hodgkinHuxley.constants.ts
var hodgkinHuxley_constants = __webpack_require__("GrzJ");

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__("N39q");

// CONCATENATED MODULE: ./reducers/hodgkinHuxley.ts
var _storedHHFComm$morpho, _storedHHFComm$electr, _storedHHFComm$mod_fi;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { hodgkinHuxley_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hodgkinHuxley_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const _storedHHFComm = LocalStorageHelper.get(constants["a" /* default */].HHF_COMM);

const _defaultInitialState = !!_storedHHFComm ? {
  morphology: (_storedHHFComm$morpho = _storedHHFComm === null || _storedHHFComm === void 0 ? void 0 : _storedHHFComm.morphology) !== null && _storedHHFComm$morpho !== void 0 ? _storedHHFComm$morpho : null,
  electrophysiologies: (_storedHHFComm$electr = _storedHHFComm === null || _storedHHFComm === void 0 ? void 0 : _storedHHFComm.electrophysiologies) !== null && _storedHHFComm$electr !== void 0 ? _storedHHFComm$electr : [],
  modFiles: (_storedHHFComm$mod_fi = _storedHHFComm === null || _storedHHFComm === void 0 ? void 0 : _storedHHFComm.mod_files) !== null && _storedHHFComm$mod_fi !== void 0 ? _storedHHFComm$mod_fi : []
} : {
  morphology: null,
  electrophysiologies: [],
  modFiles: []
};

const _storeHHFComm = data => {
  if (!!data) {
    const newData = {};

    if (!!(data === null || data === void 0 ? void 0 : data.morphology)) {
      newData.morphology = data.morphology;
    }

    if (!!(data === null || data === void 0 ? void 0 : data.electrophysiologies)) {
      newData.electrophysiologies = data.electrophysiologies;
    }

    if (!!data.modFiles) {
      var _data$modFiles;

      newData.mod_files = (_data$modFiles = data.modFiles) !== null && _data$modFiles !== void 0 ? _data$modFiles : [];
    }

    LocalStorageHelper.save(constants["a" /* default */].HHF_COMM, newData);
  }
};

function hodgkinHuxley(initialState = _defaultInitialState, action) {
  var _action$electrophysio, _action$electrophysio2, _action$modFile, _action$modFile2;

  switch (action.type) {
    case hodgkinHuxley_constants["a" /* default */].SET_MORPHOLOGY:
      {
        var _action$morphology;

        const newState = _objectSpread(_objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState), {}, {
          type: action === null || action === void 0 ? void 0 : action.type,
          morphology: (_action$morphology = action === null || action === void 0 ? void 0 : action.morphology) !== null && _action$morphology !== void 0 ? _action$morphology : null
        });

        _storeHHFComm(newState);

        return newState;
      }

    case hodgkinHuxley_constants["a" /* default */].ADD_ELECTROPHYSIOLOGY:
      const _electrophysiology = (_action$electrophysio = action === null || action === void 0 ? void 0 : action.electrophysiology) !== null && _action$electrophysio !== void 0 ? _action$electrophysio : null;

      if (!!_electrophysiology) {
        var _ref, _initialState$electro;

        const electrophysiologies = (_ref = [...((_initialState$electro = initialState === null || initialState === void 0 ? void 0 : initialState.electrophysiologies) !== null && _initialState$electro !== void 0 ? _initialState$electro : [])]) !== null && _ref !== void 0 ? _ref : [];
        const index = electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.findIndex(item => Object(hashHelper["a" /* hashCode */])(JSON.stringify(_electrophysiology)) === Object(hashHelper["a" /* hashCode */])(JSON.stringify(item)));

        if (index === -1) {
          electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.push(_electrophysiology);
        }

        const newState = _objectSpread(_objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState), {}, {
          type: action === null || action === void 0 ? void 0 : action.type,
          electrophysiologies
        });

        _storeHHFComm(newState);

        return newState;
      }

      return _objectSpread({}, initialState);

    case hodgkinHuxley_constants["a" /* default */].REMOVE_ELECTROPHYSIOLOGY:
      const electrophysiology = (_action$electrophysio2 = action === null || action === void 0 ? void 0 : action.electrophysiology) !== null && _action$electrophysio2 !== void 0 ? _action$electrophysio2 : null;

      if (!!electrophysiology) {
        var _ref2, _initialState$electro2;

        const electrophysiologies = (_ref2 = [...((_initialState$electro2 = initialState === null || initialState === void 0 ? void 0 : initialState.electrophysiologies) !== null && _initialState$electro2 !== void 0 ? _initialState$electro2 : [])]) !== null && _ref2 !== void 0 ? _ref2 : [];
        const index = electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.findIndex(item => Object(hashHelper["a" /* hashCode */])(JSON.stringify(electrophysiology)) === Object(hashHelper["a" /* hashCode */])(JSON.stringify(item)));

        if (index > -1) {
          electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.splice(index, 1);
        }

        const newState = _objectSpread(_objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState), {}, {
          type: action === null || action === void 0 ? void 0 : action.type,
          electrophysiologies
        });

        _storeHHFComm(newState);

        return newState;
      }

      return _objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState);

    case hodgkinHuxley_constants["a" /* default */].ADD_MOD_FILE:
      const _modFile = (_action$modFile = action === null || action === void 0 ? void 0 : action.modFile) !== null && _action$modFile !== void 0 ? _action$modFile : null;

      if (!!_modFile) {
        var _ref3, _initialState$modFile;

        const modFiles = (_ref3 = [...((_initialState$modFile = initialState === null || initialState === void 0 ? void 0 : initialState.modFiles) !== null && _initialState$modFile !== void 0 ? _initialState$modFile : [])]) !== null && _ref3 !== void 0 ? _ref3 : [];
        const index = modFiles === null || modFiles === void 0 ? void 0 : modFiles.findIndex(item => Object(hashHelper["a" /* hashCode */])(JSON.stringify(_modFile)) === Object(hashHelper["a" /* hashCode */])(JSON.stringify(item)));

        if (index === -1) {
          modFiles === null || modFiles === void 0 ? void 0 : modFiles.push(_modFile);
        }

        const newState = _objectSpread(_objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState), {}, {
          type: action === null || action === void 0 ? void 0 : action.type,
          modFiles: modFiles
        });

        _storeHHFComm(newState);

        return newState;
      }

      return _objectSpread({}, initialState);

    case hodgkinHuxley_constants["a" /* default */].REMOVE_MOD_FILE:
      const modFile = (_action$modFile2 = action === null || action === void 0 ? void 0 : action.modFile) !== null && _action$modFile2 !== void 0 ? _action$modFile2 : null;

      if (!!modFile) {
        var _ref4, _initialState$modFile2;

        const modFiles = (_ref4 = [...((_initialState$modFile2 = initialState === null || initialState === void 0 ? void 0 : initialState.modFiles) !== null && _initialState$modFile2 !== void 0 ? _initialState$modFile2 : [])]) !== null && _ref4 !== void 0 ? _ref4 : [];
        const index = modFiles === null || modFiles === void 0 ? void 0 : modFiles.findIndex(item => Object(hashHelper["a" /* hashCode */])(JSON.stringify(modFile)) === Object(hashHelper["a" /* hashCode */])(JSON.stringify(item)));

        if (index > -1) {
          modFiles === null || modFiles === void 0 ? void 0 : modFiles.splice(index, 1);
        }

        const newState = _objectSpread(_objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState), {}, {
          type: action === null || action === void 0 ? void 0 : action.type,
          modFiles: modFiles
        });

        _storeHHFComm(newState);

        return newState;
      }

      return _objectSpread({}, initialState !== null && initialState !== void 0 ? initialState : _defaultInitialState);

    case hodgkinHuxley_constants["a" /* default */].CLEAR:
      LocalStorageHelper.delete(constants["a" /* default */].HHF_COMM);
      return {
        type: action === null || action === void 0 ? void 0 : action.type,
        morphology: null,
        modFiles: []
      };

    default:
      return _defaultInitialState;
  }
}
// EXTERNAL MODULE: ./constants/auth.constants.ts
var auth_constants = __webpack_require__("kkwK");

// CONCATENATED MODULE: ./reducers/auth.ts
function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function auth(initialState = {}, action) {
  switch (action.type) {
    case auth_constants["a" /* default */].LOGIN_REQUEST:
      return auth_objectSpread(auth_objectSpread(auth_objectSpread({}, initialState), action), {}, {
        error: null
      });

    case auth_constants["a" /* default */].LOGIN_SUCCESS:
      return auth_objectSpread(auth_objectSpread(auth_objectSpread({}, initialState), action), {}, {
        error: null
      });

    case auth_constants["a" /* default */].LOGIN_ERROR:
      return auth_objectSpread(auth_objectSpread({}, initialState), action);

    case auth_constants["a" /* default */].VERIFY_TOKEN_REQUEST:
      return auth_objectSpread(auth_objectSpread(auth_objectSpread({}, initialState), action), {}, {
        error: null
      });

    case auth_constants["a" /* default */].VERIFY_TOKEN_SUCCESS:
      return auth_objectSpread(auth_objectSpread(auth_objectSpread({}, initialState), action), {}, {
        error: null
      });

    case auth_constants["a" /* default */].VERIFY_TOKEN_ERROR:
      return auth_objectSpread(auth_objectSpread({}, initialState), action);

    default:
      return auth_objectSpread({}, initialState);
  }
}
// EXTERNAL MODULE: ./constants/tos.constants.ts
var tos_constants = __webpack_require__("2CrO");

// CONCATENATED MODULE: ./reducers/tos.ts
var _storedTOS$agree;

function tos_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tos_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tos_ownKeys(Object(source), true).forEach(function (key) { tos_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tos_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tos_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const _storedTOS = LocalStorageHelper.get(constants["a" /* default */].HFH_TOS);

const tos_defaultInitialState = {
  agree: (_storedTOS$agree = _storedTOS === null || _storedTOS === void 0 ? void 0 : _storedTOS.agree) !== null && _storedTOS$agree !== void 0 ? _storedTOS$agree : false
};

const _storeTOS = data => {
  if (!!data) {
    const newData = {
      agree: false
    };

    if (!!data.agree) {
      newData.agree = data.agree;
    }

    LocalStorageHelper.save(constants["a" /* default */].HFH_TOS, newData);
  }
};

function tos(initialState = tos_defaultInitialState, action) {
  switch (action.type) {
    case tos_constants["a" /* default */].AGREE_TOS:
      const newData = tos_objectSpread(tos_objectSpread({}, initialState), {}, {
        action: action.type,
        agree: true
      });

      _storeTOS(newData);

      return newData;

    default:
      return initialState;
  }
}
// CONCATENATED MODULE: ./reducers/index.ts




const rootReducer = Object(external_redux_["combineReducers"])({
  hodgkinHuxley: hodgkinHuxley,
  tos: tos,
  auth: auth
});

// CONCATENATED MODULE: ./store.ts


const store = Object(external_redux_["createStore"])(rootReducer);
/* harmony default export */ var store_0 = (store);
// EXTERNAL MODULE: ./style.scss
var style = __webpack_require__("h3ov");

// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;

function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const theme = _app_objectSpread({
  primary: '#f2f2f2'
}, Object(styles_["createMuiTheme"])());

class _app_App extends app_default.a {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(external_styled_components_["ThemeProvider"], {
      theme: theme
    }, __jsx(styles_["ThemeProvider"], {
      theme: theme
    }, __jsx(external_react_redux_["Provider"], {
      store: store_0
    }, __jsx(Component, pageProps))));
  }

}

/***/ }),

/***/ "h3ov":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kkwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const authConstants = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  VERIFY_TOKEN_REQUEST: 'VERIFY_TOKEN_REQUEST',
  VERIFY_TOKEN_SUCCESS: 'VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_ERROR: 'VERIFY_TOKEN_ERROR'
};
/* harmony default export */ __webpack_exports__["a"] = (authConstants);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "v1Az":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hashCode; });
const hashCode = value => {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    let character = value.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash;
  }

  return hash;
};



/***/ })

/******/ });