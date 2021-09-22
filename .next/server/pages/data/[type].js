module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1Tbd":
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),

/***/ "2CrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const tosConstants = {
  AGREE_TOS: 'AGREE_TOS'
};
/* harmony default export */ __webpack_exports__["a"] = (tosConstants);

/***/ }),

/***/ "2hIF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addModFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeModFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addElectrophysiology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeElectrophysiology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setMorphology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clear; });
/* harmony import */ var _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GrzJ");

function addModFile(modFile) {
  return {
    type: _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_MOD_FILE,
    modFile
  };
}
function removeModFile(modFile) {
  return {
    type: _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REMOVE_MOD_FILE,
    modFile
  };
}
function addElectrophysiology(electrophysiology) {
  return {
    type: _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_ELECTROPHYSIOLOGY,
    electrophysiology
  };
}
function removeElectrophysiology(electrophysiology) {
  return {
    type: _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REMOVE_ELECTROPHYSIOLOGY,
    electrophysiology
  };
}
function setMorphology(morphology) {
  return {
    type: _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_MORPHOLOGY,
    morphology
  };
}
function clear() {
  return {
    type: _constants_hodgkinHuxley_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR
  };
}

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ERxI");


/***/ }),

/***/ "6cUu":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dialog-title": "dialog_dialog-title__1kJ7c",
	"dialog-subtitle": "dialog_dialog-subtitle__3p9YP"
};


/***/ }),

/***/ "8s5e":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"carousel-image": "carousel_carousel-image__jGsqk",
	"carousel-image-credits-label": "carousel_carousel-image-credits-label__2x5Un",
	"custom-carousel-caption": "carousel_custom-carousel-caption__3gs9O",
	"carousel-caption-header": "carousel_carousel-caption-header__3IA3i",
	"carousel-caption-content": "carousel_carousel-caption-content__4qqsk"
};


/***/ }),

/***/ "95fv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ FormFilter; });

// UNUSED EXPORTS: FilterBox

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: ./components/forms/filter.module.scss
var filter_module = __webpack_require__("Vbgd");
var filter_module_default = /*#__PURE__*/__webpack_require__.n(filter_module);

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__("N39q");

// EXTERNAL MODULE: ./components/buttons/buttons.tsx
var buttons = __webpack_require__("YK1M");

// EXTERNAL MODULE: external "material-ui-search-bar"
var external_material_ui_search_bar_ = __webpack_require__("OZcC");
var external_material_ui_search_bar_default = /*#__PURE__*/__webpack_require__.n(external_material_ui_search_bar_);

// CONCATENATED MODULE: ./components/customSearchBar/index.tsx
var __jsx = external_react_["createElement"];





function CustomSearchBar(props) {
  var _props$value, _props$value$trim;

  const showButton = (props === null || props === void 0 ? void 0 : (_props$value = props.value) === null || _props$value === void 0 ? void 0 : (_props$value$trim = _props$value.trim()) === null || _props$value$trim === void 0 ? void 0 : _props$value$trim.length) >= constants["a" /* default */].MIN_SEARCH_LENGTH;
  const searchBarContainerClassName = showButton ? 'col-md-10 col-sm-12' : 'col-12';
  return __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: searchBarContainerClassName
  }, __jsx(external_material_ui_search_bar_default.a, {
    value: props === null || props === void 0 ? void 0 : props.value,
    onChange: props === null || props === void 0 ? void 0 : props.onChange,
    onRequestSearch: props === null || props === void 0 ? void 0 : props.onRequestSearch,
    onCancelSearch: () => props === null || props === void 0 ? void 0 : props.onChange('')
  })), showButton ? __jsx("div", {
    className: "col-md-2 col-sm-12"
  }, __jsx(buttons["a" /* CustomButton */], {
    onClick: () => props === null || props === void 0 ? void 0 : props.onRequestSearch(),
    style: {
      fontSize: 16
    }
  }, __jsx(icons_["Search"], null))) : null);
}
// CONCATENATED MODULE: ./components/forms/filter.tsx
var filter_jsx = external_react_["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    zIndex: 10
  }
}));
const useTextFieldStyles = Object(core_["makeStyles"])({
  underline: {
    color: "#fff",
    "&:after": {
      borderBottomColor: "#fff",
      borderWidth: "1px"
    }
  }
});
const useLabelStyles = Object(core_["makeStyles"])(theme => ({
  headerLabel: {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  rootFilterLabel: {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  filterLabel: {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'capitalize'
  }
}));
const useIconStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    outline: 'none',
    '&:hover, &:focus': {
      outline: 'none'
    }
  }
}));
function FilterBox({
  filters,
  selectedFilters,
  onChangeFilters,
  closeFilters,
  applyFilters,
  resetFilters,
  variant
}) {
  const classes = useStyles();
  const textFieldStyles = useTextFieldStyles();
  const iconButtonClasses = useIconStyles();
  const labelStyles = useLabelStyles();
  const suggestionFilters = !!filters ? Object.keys(filters).map(key => filters[key]) : [];
  const [suggestionValue, setSuggestionValue] = external_react_["useState"](suggestionFilters.reduce((acc, item) => acc = _objectSpread(_objectSpread({}, acc), {}, {
    [item.key]: ''
  }), {}));

  const _onChangeMultipleFilter = (key, value, checked) => {
    let newFilters = [];

    if (!!key) {
      if (key.split('.').length === 1) {
        newFilters = !!selectedFilters && !!selectedFilters[key] ? [...selectedFilters[key]] : [];
      } else {
        const prefixKey = key.split('.')[0];
        const itemKey = key.split('.')[1];
        newFilters = !!selectedFilters && !!selectedFilters[prefixKey] && !!selectedFilters[prefixKey][itemKey] ? [...selectedFilters[prefixKey][itemKey]] : [];
      }

      if (!!checked) {
        newFilters.push(value);
      } else {
        const index = newFilters.findIndex(v => v === value);

        if (index > -1) {
          newFilters.splice(index, 1);
        }
      }

      onChangeFilters(key, newFilters);
    }
  };

  const _onChangeSuggestionValue = (key, text) => {
    setSuggestionValue(_objectSpread(_objectSpread({}, suggestionValue), {}, {
      [key]: text
    }));
  };

  const renderMultipleFilter = (key, item, values) => {
    var _item$values, _filterValues$filter;

    let itemValue = null;

    if (!!key) {
      if (key.split('.').length === 1) {
        var _selectedFilters$key;

        itemValue = !!selectedFilters ? (_selectedFilters$key = selectedFilters[key]) !== null && _selectedFilters$key !== void 0 ? _selectedFilters$key : null : null;
      } else {
        var _selectedFilters$pref;

        const prefixKey = key.split('.')[0];
        const itemKey = key.split('.')[1];
        itemValue = !!selectedFilters && selectedFilters[prefixKey] ? (_selectedFilters$pref = selectedFilters[prefixKey][itemKey]) !== null && _selectedFilters$pref !== void 0 ? _selectedFilters$pref : null : null;
      }
    }

    const filterValues = !!values ? values : (_item$values = item.values) !== null && _item$values !== void 0 ? _item$values : [];
    const hasSuggestionFilter = !!suggestionValue[key] && suggestionValue[key].trim().length >= constants["a" /* default */].SUGGESTION_MIN_LENGTH;
    const suggestionsItems = hasSuggestionFilter ? suggestionValue[key].split('|') : [];
    const filteredItems = hasSuggestionFilter ? (_filterValues$filter = filterValues.filter(item => suggestionsItems.map(suggest => item.toLowerCase().includes(suggest === null || suggest === void 0 ? void 0 : suggest.toLowerCase())).reduce((a, b) => a || b, false))) !== null && _filterValues$filter !== void 0 ? _filterValues$filter : [] : filterValues;
    const hasItems = !!filteredItems && filteredItems.length > 0;
    return filter_jsx("div", {
      className: "row"
    }, filter_jsx("div", {
      className: "col-12"
    }, filter_jsx(core_["TextField"], {
      fullWidth: true,
      key: `suggestion-${key}`,
      value: suggestionValue[key],
      label: item === null || item === void 0 ? void 0 : item.label,
      InputProps: {
        classes: textFieldStyles
      },
      InputLabelProps: {
        style: {
          color: (variant !== null && variant !== void 0 ? variant : 'dark') ? '#fff' : '#333',
          textTransform: 'capitalize'
        }
      },
      onChange: event => _onChangeSuggestionValue(key, event.target.value)
    })), hasItems ? filter_jsx("div", {
      className: "col-12"
    }, filter_jsx("span", {
      className: labelStyles === null || labelStyles === void 0 ? void 0 : labelStyles.filterLabel
    }, item === null || item === void 0 ? void 0 : item.label), filter_jsx("br", null), (filteredItems !== null && filteredItems !== void 0 ? filteredItems : []).map(value => {
      var _itemValue$includes;

      return filter_jsx(core_["FormControlLabel"], {
        control: filter_jsx(core_["Checkbox"], {
          key: value,
          style: {
            color: variant === 'dark' ? '#fff' : '#333'
          },
          checked: !!itemValue ? (_itemValue$includes = itemValue.includes(value)) !== null && _itemValue$includes !== void 0 ? _itemValue$includes : false : false,
          onChange: (event, checked) => _onChangeMultipleFilter(key, value, checked)
        }),
        label: value
      });
    })) : null);
  };

  const renderSuggestionFilter = (key, item) => {};

  const renderFilterMap = {
    'multiple': renderMultipleFilter,
    'suggestion': renderSuggestionFilter
  };

  const renderFilter = (key, filter, prefix_key) => {
    if (!filter.type && !!filter.items) {
      const filterKeys = !!filters ? Object.keys(filter.items) : [];
      const sortedFilterKeys = filterKeys === null || filterKeys === void 0 ? void 0 : filterKeys.map(itemKey => _objectSpread(_objectSpread({}, filter.items[itemKey]), {}, {
        'root_key': itemKey
      })).sort((item1, item2) => item1['order'] - item2['order']).map(item => item['root_key']);
      return filter_jsx("div", null, filter_jsx("span", {
        className: labelStyles === null || labelStyles === void 0 ? void 0 : labelStyles.rootFilterLabel
      }, filter === null || filter === void 0 ? void 0 : filter.label), filter_jsx("br", null), sortedFilterKeys.map(itemKey => renderFilter(itemKey, filter.items[itemKey], key)));
    }

    let values = null;

    if (!!filter.depends_on && filter.depends_on.length > 0) {
      const items = [];

      for (let dependency of filter.depends_on) {
        const dependencyPrefixKey = dependency.split('.')[0];
        const dependencyKey = dependency.split('.').length > 1 ? dependency.split('.')[1] : dependency.split('.')[0];

        if (dependencyPrefixKey !== dependencyKey) {
          var _selectedFilters$depe, _filter$values;

          const filterValues = !!selectedFilters && !!selectedFilters[dependencyPrefixKey] ? (_selectedFilters$depe = selectedFilters[dependencyPrefixKey][dependencyKey]) !== null && _selectedFilters$depe !== void 0 ? _selectedFilters$depe : [] : [];

          const _items = filter === null || filter === void 0 ? void 0 : (_filter$values = filter.values) === null || _filter$values === void 0 ? void 0 : _filter$values.filter(item => filterValues.includes(item.split(':')[0].trim()));

          items.push(..._items);
        } else {
          var _selectedFilters$depe2, _filter$values2;

          const filterValues = !!selectedFilters ? (_selectedFilters$depe2 = selectedFilters[dependencyKey]) !== null && _selectedFilters$depe2 !== void 0 ? _selectedFilters$depe2 : [] : [];

          const _items = filter === null || filter === void 0 ? void 0 : (_filter$values2 = filter.values) === null || _filter$values2 === void 0 ? void 0 : _filter$values2.filter(item => filterValues.includes(item.split(':')[0].trim()));

          items.push(..._items);
        }
      }

      values = items;

      if (items.length === 0) {
        values = filter.values;
      }
    }

    if (!!filter.values && filter.values.length > 0) {
      const computedKey = !!prefix_key && prefix_key.trim().length > 0 ? `${prefix_key}.${key}` : key;
      const renderMethod = renderFilterMap[filter.type];
      return renderMethod(computedKey, filter, values);
    }

    return filter_jsx("div", null);
  };

  const filterKeys = !!filters ? Object.keys(filters) : [];
  const sortedFilterKeys = filterKeys === null || filterKeys === void 0 ? void 0 : filterKeys.map(key => _objectSpread(_objectSpread({}, filters[key]), {}, {
    'root_key': key
  })).sort((item1, item2) => item1['order'] - item2['order']).map(item => item['root_key']);
  return filter_jsx(core_["Card"], {
    classes: classes
  }, filter_jsx("div", {
    className: `${filter_module_default.a['filter-box']} ${!!variant ? filter_module_default.a[variant] : ''}`
  }, filter_jsx("div", {
    className: "row"
  }, filter_jsx("div", {
    className: "col-9"
  }, filter_jsx(core_["Typography"], {
    variant: "subtitle2",
    className: labelStyles === null || labelStyles === void 0 ? void 0 : labelStyles.headerLabel
  }, "Filter")), filter_jsx("div", {
    className: "col-3 text-right"
  }, filter_jsx(core_["IconButton"], {
    className: iconButtonClasses.root,
    onClick: () => closeFilters()
  }, filter_jsx(icons_["Close"], {
    htmlColor: variant === 'dark' ? '#fff' : null
  })))), sortedFilterKeys.map(key => {
    const item = filters[key];
    return renderFilter(key, item);
  }), filter_jsx("div", {
    className: "row",
    style: {
      marginTop: 10
    }
  }, filter_jsx("div", {
    className: "col-6 text-right"
  }, filter_jsx(core_["Tooltip"], {
    title: "Reset Filters"
  }, filter_jsx(buttons["a" /* CustomButton */], {
    style: {
      float: 'right',
      minWidth: 200,
      fontSize: 16
    },
    variant: "secondary",
    className: iconButtonClasses.root,
    onClick: () => resetFilters(false)
  }, filter_jsx(icons_["ClearAll"], {
    htmlColor: variant === 'dark' ? '#fff' : null
  }), "Clear"))), filter_jsx("div", {
    className: "col-6 text-left"
  }, filter_jsx(core_["Tooltip"], {
    title: "Apply Filters"
  }, filter_jsx(buttons["a" /* CustomButton */], {
    style: {
      float: 'left',
      minWidth: 200,
      fontSize: 16
    },
    className: iconButtonClasses.root,
    onClick: () => applyFilters()
  }, filter_jsx(icons_["Check"], {
    htmlColor: variant === 'dark' ? '#fff' : null
  }), "Apply"))))));
}
function FormFilter({
  variant,
  query,
  filters,
  selectedFilters,
  selectedHitsPerPage,
  onQueryChange,
  onRequestSearch,
  onChangeHitsPerPage,
  onChangeFilters,
  applyFilters,
  resetFilters
}) {
  const [openFilter, setOpenFilter] = external_react_["useState"](false);
  const iconButtonClasses = useIconStyles();

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const _closeFilters = () => {
    setOpenFilter(false);
  };

  const _applyFilters = () => {
    applyFilters();
    setOpenFilter(false);
  };

  const _resetFilters = close => {
    resetFilters();

    if (close) {
      setOpenFilter(false);
    }
  };

  const hitsPerPageItems = [10, 20, 50, 100].map(item => filter_jsx(core_["ListItem"], {
    key: `hits_per_page-${item}`,
    value: item,
    style: {
      textAlign: 'right',
      outline: 'none',
      cursor: 'pointer'
    }
  }, item));
  return filter_jsx("div", null, filter_jsx("div", {
    className: "row"
  }, filter_jsx("div", {
    className: "col-md-9 col-sm-12"
  }, filter_jsx(CustomSearchBar, {
    value: query,
    onChange: onQueryChange,
    onRequestSearch: onRequestSearch,
    onCancelSearch: () => onQueryChange('')
  })), filter_jsx("div", {
    className: "col-md-3 col-sm-12 text-right"
  }, filter_jsx("div", {
    className: "row"
  }, filter_jsx("div", {
    className: "col-8"
  }, filter_jsx(core_["FormControl"], {
    style: {
      minWidth: '100%'
    }
  }, filter_jsx(core_["InputLabel"], {
    style: {
      color: '#fff'
    }
  }, "Hits per page"), filter_jsx(core_["Select"], {
    style: {
      color: variant === 'dark' ? '#fff' : '#000'
    },
    value: selectedHitsPerPage,
    onChange: event => onChangeHitsPerPage(event.target.value)
  }, hitsPerPageItems))), filter_jsx("div", {
    className: "col-4"
  }, filter_jsx(core_["Tooltip"], {
    title: 'Filter'
  }, filter_jsx(core_["IconButton"], {
    className: iconButtonClasses.root,
    onClick: toggleFilter
  }, filter_jsx(icons_["FilterList"], {
    htmlColor: variant === 'dark' ? '#fff' : null
  }))))))), filter_jsx("div", {
    className: "row",
    style: {
      marginTop: 10
    }
  }, filter_jsx("div", {
    className: "col-12"
  }, openFilter ? filter_jsx(FilterBox, {
    variant: variant,
    filters: filters,
    selectedFilters: selectedFilters,
    onChangeFilters: onChangeFilters,
    closeFilters: _closeFilters,
    applyFilters: _applyFilters,
    resetFilters: _resetFilters
  }) : null)));
}

/***/ }),

/***/ "BShw":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page": "page_page__1voGT",
	"dark": "page_dark__1vPWv",
	"main-page-container": "page_main-page-container__Q5a40",
	"main-container": "page_main-container__PcnHk",
	"with-fixed-header": "page_with-fixed-header__18Mix"
};


/***/ }),

/***/ "ERxI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__("cHt3");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: ./components/spinner/spinner.tsx
var spinner = __webpack_require__("rh/9");

// EXTERNAL MODULE: ./components/page/pageContainer.tsx + 11 modules
var pageContainer = __webpack_require__("TLva");

// EXTERNAL MODULE: ./components/cards/card.tsx
var card = __webpack_require__("zRuj");

// EXTERNAL MODULE: ./helpers/imageHelper.ts
var imageHelper = __webpack_require__("d0Tl");

// EXTERNAL MODULE: ./components/buttons/expandButton.tsx
var expandButton = __webpack_require__("jXXI");

// EXTERNAL MODULE: ./components/cards/datasetCard.module.scss
var datasetCard_module = __webpack_require__("SbOe");
var datasetCard_module_default = /*#__PURE__*/__webpack_require__.n(datasetCard_module);

// CONCATENATED MODULE: ./helpers/downloadHelper.ts
const downloadFile = url => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.download = '';
  link.click();
  link.remove();
};


// EXTERNAL MODULE: ./helpers/apiHelper.ts
var apiHelper = __webpack_require__("kzYg");

// CONCATENATED MODULE: ./components/cards/morphologyCard.tsx
var __jsx = external_react_["createElement"];











function _DataSetCard(props, ref) {
  var _dataSet$download_lin, _dataSet$page_link, _dataSet$source, _getImageUrlByPath, _dataSet$source2, _dataSet$name, _dataSet$species, _dataSet$region, _dataSet$cell_type, _dataSet$secondary_re, _dataSet$physical_int;

  const {
    dataSet,
    selectedForDownload,
    toggleSelectedForDownload,
    onClick
  } = props;
  const [actionsExpanded, setActionsExpanded] = external_react_["useState"](false);
  const [canOpenMorphologyViewer, setCanOpenMorphologyViewer] = external_react_["useState"](false);
  Object(external_react_["useEffect"])(() => {
    _checkIfMorphologyIsVisible();
  }, []);

  const _openMorphologyViewer = () => {
    if (!!(props === null || props === void 0 ? void 0 : props.openMorphologyViewer)) {
      props === null || props === void 0 ? void 0 : props.openMorphologyViewer({
        modelName: dataSet === null || dataSet === void 0 ? void 0 : dataSet.name,
        modelUrl: dataSet === null || dataSet === void 0 ? void 0 : dataSet.download_link,
        detailPage: dataSet === null || dataSet === void 0 ? void 0 : dataSet.page_link
      });
    }
  };

  const _openImageLightbox = url => {
    if (!!(props === null || props === void 0 ? void 0 : props.openImageLightbox)) {
      props.openImageLightbox(url);
    }
  };

  const _closeImageLightbox = () => {
    if (!!(props === null || props === void 0 ? void 0 : props.closeImageLightbox)) {
      props.closeImageLightbox();
    }
  };

  const _selectForModelBuilder = () => {
    if (!!(props === null || props === void 0 ? void 0 : props.selectForModelBuilder)) {
      props === null || props === void 0 ? void 0 : props.selectForModelBuilder(dataSet);
    }
  };

  const _checkIfMorphologyIsVisible = async () => {
    if (!!hasDownloadLink) {
      setCanOpenMorphologyViewer(await Object(apiHelper["a" /* checkMorphologyForShow */])(downloadLink));
    }
  };

  const downloadLink = (_dataSet$download_lin = dataSet === null || dataSet === void 0 ? void 0 : dataSet.download_link) !== null && _dataSet$download_lin !== void 0 ? _dataSet$download_lin : null;
  const hasDownloadLink = !!downloadLink;
  const pageLink = (_dataSet$page_link = dataSet === null || dataSet === void 0 ? void 0 : dataSet.page_link) !== null && _dataSet$page_link !== void 0 ? _dataSet$page_link : null;
  const hasPageLink = !!pageLink;
  const hasSource = !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.source) && (dataSet === null || dataSet === void 0 ? void 0 : (_dataSet$source = dataSet.source) === null || _dataSet$source === void 0 ? void 0 : _dataSet$source.trim().length) > 0;
  const hasImage = !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.icon);
  const imageUrl = (_getImageUrlByPath = Object(imageHelper["b" /* getImageUrlByPath */])(dataSet === null || dataSet === void 0 ? void 0 : dataSet.icon)) !== null && _getImageUrlByPath !== void 0 ? _getImageUrlByPath : Object(imageHelper["b" /* getImageUrlByPath */])('/assets/images/placeholder.png');
  const isInternal = hasSource && (dataSet === null || dataSet === void 0 ? void 0 : (_dataSet$source2 = dataSet.source) === null || _dataSet$source2 === void 0 ? void 0 : _dataSet$source2.toLowerCase()) === 'internal';
  return __jsx(card["a" /* CardContainer */], {
    key: `dataset-${dataSet === null || dataSet === void 0 ? void 0 : dataSet.id}`
  }, __jsx("div", {
    className: datasetCard_module_default.a['dataset-card-content']
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-2 col-sm-12"
  }, __jsx("img", {
    src: imageUrl,
    onClick: () => hasImage ? _openImageLightbox(imageUrl) : null,
    className: `${datasetCard_module_default.a['dataset-card-image']} ${!hasImage ? datasetCard_module_default.a['not-available'] : ''}`
  })), __jsx("div", {
    className: `${datasetCard_module_default.a['dataset-card-main-content']} col-md-7 col-sm-12`
  }, __jsx("div", {
    className: `row ${datasetCard_module_default.a['dataset-card-main-content-inner']}`
  }, __jsx("div", {
    className: "col-md-6 col-sm-12"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-name-label']
  }, "Name: "), __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-name-value']
  }, (_dataSet$name = dataSet === null || dataSet === void 0 ? void 0 : dataSet.name) !== null && _dataSet$name !== void 0 ? _dataSet$name : '')), __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-species-label']
  }, "Species: "), __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-species-value']
  }, (_dataSet$species = dataSet === null || dataSet === void 0 ? void 0 : dataSet.species) !== null && _dataSet$species !== void 0 ? _dataSet$species : '')), __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-region-label']
  }, "Region: "), __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-region-value']
  }, (_dataSet$region = dataSet === null || dataSet === void 0 ? void 0 : dataSet.region) !== null && _dataSet$region !== void 0 ? _dataSet$region : '')))), __jsx("div", {
    className: "col-md-6 col-sm-12"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-cell-type-label']
  }, "Cell Type: "), __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-cell-type-value']
  }, (_dataSet$cell_type = dataSet === null || dataSet === void 0 ? void 0 : dataSet.cell_type) !== null && _dataSet$cell_type !== void 0 ? _dataSet$cell_type : '')), __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-secondary-region-label']
  }, "Secondary Region: "), __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-secondary-region-value']
  }, (_dataSet$secondary_re = dataSet === null || dataSet === void 0 ? void 0 : dataSet.secondary_region) !== null && _dataSet$secondary_re !== void 0 ? _dataSet$secondary_re : '')), __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-physical-integrity-label']
  }, "Physical Integrity: "), __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-physical-integrity-value']
  }, (_dataSet$physical_int = dataSet === null || dataSet === void 0 ? void 0 : dataSet.physical_integrity) !== null && _dataSet$physical_int !== void 0 ? _dataSet$physical_int : '')))), __jsx("div", {
    className: "col-12 text-right"
  }, hasSource ? __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-source-label']
  }, "SOURCE: ", dataSet === null || dataSet === void 0 ? void 0 : dataSet.source) : null))))), __jsx("div", {
    className: `${datasetCard_module_default.a['dataset-card-actions-container']} col-md-3 col-sm-12`
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 text-left"
  }, __jsx("div", {
    className: "row"
  }, hasDownloadLink ? __jsx("div", {
    className: "col-12 text-center"
  }, __jsx(core_["FormControl"], null, __jsx(core_["FormControlLabel"], {
    control: __jsx(core_["Switch"], {
      defaultChecked: selectedForDownload,
      checked: selectedForDownload,
      onChange: (event, value) => toggleSelectedForDownload(dataSet['source_id'], value)
    }),
    label: 'Select for download'
  }))) : null, __jsx("div", {
    className: "col-12 text-center"
  }, hasDownloadLink ? __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, __jsx(core_["Tooltip"], {
    title: "Download"
  }, __jsx(expandButton["a" /* default */], {
    label: 'Download',
    icon: __jsx(icons_["CloudDownload"], null),
    expanded: actionsExpanded,
    onClick: () => !!(props === null || props === void 0 ? void 0 : props.askForDownload) ? props === null || props === void 0 ? void 0 : props.askForDownload({
      url: downloadLink,
      source: dataSet === null || dataSet === void 0 ? void 0 : dataSet.source
    }) : downloadFile(downloadLink)
  }))) : null, hasPageLink ? __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, __jsx(core_["Tooltip"], {
    title: isInternal ? 'View on Site (internal)' : 'View on Site'
  }, __jsx(expandButton["a" /* default */], {
    label: isInternal ? 'View on Site (internal)' : 'View on Site',
    icon: __jsx(icons_["Link"], {
      htmlColor: isInternal ? '#0F4C81' : '#000'
    }),
    expanded: actionsExpanded,
    onClick: () => window.open(pageLink)
  }))) : null, hasDownloadLink ? __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, __jsx(core_["Tooltip"], {
    title: "Add to HH Neuron Builder - Cart"
  }, __jsx(expandButton["a" /* default */], {
    label: 'Add to HH Neuron Builder - Cart',
    icon: __jsx(icons_["Send"], null),
    expanded: actionsExpanded,
    onClick: () => _selectForModelBuilder()
  }))) : null, hasDownloadLink && canOpenMorphologyViewer ? __jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, __jsx(core_["Tooltip"], {
    title: "Open Morphology Viewer"
  }, __jsx(expandButton["a" /* default */], {
    label: 'Open Morphology Viewer',
    icon: __jsx("img", {
      src: Object(imageHelper["b" /* getImageUrlByPath */])('/assets/icons/3d.svg')
    }),
    expanded: actionsExpanded,
    onClick: () => _openMorphologyViewer()
  }))) : null))))))));
}

const MorphologyCard = /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => _DataSetCard(props, ref));

// CONCATENATED MODULE: ./components/cards/electrophysiologyCard.tsx
var electrophysiologyCard_jsx = external_react_["createElement"];









function electrophysiologyCard_DataSetCard(props, ref) {
  var _dataSet$download_lin, _dataSet$page_link, _dataSet$source, _getImageUrlByPath, _dataSet$source2, _dataSet$name, _dataSet$papers, _dataSet$secondary_re, _dataSet$layers, _dataSet$layers2, _dataSet$etype;

  const {
    dataSet,
    selectedForDownload,
    toggleSelectedForDownload,
    onClick
  } = props;
  const [actionsExpanded, setActionsExpanded] = external_react_["useState"](false);

  const _onClick = () => {
    if (!!onClick) {
      onClick();
    }
  };

  const _openImageLightbox = url => {
    if (!!(props === null || props === void 0 ? void 0 : props.openImageLightbox)) {
      props.openImageLightbox(url);
    }
  };

  const _selectForModelBuilder = () => {
    if (!!(props === null || props === void 0 ? void 0 : props.selectForModelBuilder)) {
      props === null || props === void 0 ? void 0 : props.selectForModelBuilder(dataSet);
    }
  };

  const downloadLink = (_dataSet$download_lin = dataSet === null || dataSet === void 0 ? void 0 : dataSet.download_link) !== null && _dataSet$download_lin !== void 0 ? _dataSet$download_lin : null;
  const hasDownloadLink = !!downloadLink;
  const pageLink = (_dataSet$page_link = dataSet === null || dataSet === void 0 ? void 0 : dataSet.page_link) !== null && _dataSet$page_link !== void 0 ? _dataSet$page_link : null;
  const hasPageLink = !!pageLink;
  const hasSource = !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.source) && (dataSet === null || dataSet === void 0 ? void 0 : (_dataSet$source = dataSet.source) === null || _dataSet$source === void 0 ? void 0 : _dataSet$source.trim().length) > 0;
  const hasImage = !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.icon);
  const imageUrl = (_getImageUrlByPath = Object(imageHelper["b" /* getImageUrlByPath */])(dataSet === null || dataSet === void 0 ? void 0 : dataSet.icon)) !== null && _getImageUrlByPath !== void 0 ? _getImageUrlByPath : Object(imageHelper["b" /* getImageUrlByPath */])('/assets/images/placeholder.png');
  const isInternal = hasSource && (dataSet === null || dataSet === void 0 ? void 0 : (_dataSet$source2 = dataSet.source) === null || _dataSet$source2 === void 0 ? void 0 : _dataSet$source2.toLowerCase()) === 'internal';
  return electrophysiologyCard_jsx(card["a" /* CardContainer */], {
    key: `dataset-${dataSet === null || dataSet === void 0 ? void 0 : dataSet.id}`
  }, electrophysiologyCard_jsx("div", {
    className: datasetCard_module_default.a['dataset-card-content']
  }, electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-md-2 col-sm-12"
  }, electrophysiologyCard_jsx("img", {
    src: imageUrl,
    onClick: () => hasImage ? _openImageLightbox(imageUrl) : null,
    className: `${datasetCard_module_default.a['dataset-card-image']} ${!hasImage ? datasetCard_module_default.a['not-available'] : ''}`
  })), electrophysiologyCard_jsx("div", {
    className: `${datasetCard_module_default.a['dataset-card-main-content']} col-md-7 col-sm-12`
  }, electrophysiologyCard_jsx("div", {
    className: `row ${datasetCard_module_default.a['dataset-card-main-content-inner']}`
  }, electrophysiologyCard_jsx("div", {
    className: "col-6"
  }, electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-left"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-name-label']
  }, "Name: "), electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-name-value']
  }, (_dataSet$name = dataSet === null || dataSet === void 0 ? void 0 : dataSet.name) !== null && _dataSet$name !== void 0 ? _dataSet$name : '')), electrophysiologyCard_jsx("div", {
    className: "col-12 text-left"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-papers-label']
  }, "Paper(s): "), ((_dataSet$papers = dataSet === null || dataSet === void 0 ? void 0 : dataSet.papers) !== null && _dataSet$papers !== void 0 ? _dataSet$papers : []).map(item => !!(item === null || item === void 0 ? void 0 : item.url) ? electrophysiologyCard_jsx("a", {
    className: datasetCard_module_default.a['dataset-card-papers-value'],
    target: "_blank",
    href: item.url
  }, item.label) : electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-papers-value']
  }, item.label))))), electrophysiologyCard_jsx("div", {
    className: "col-6"
  }, electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-left"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-secondary-region-label']
  }, "Secondary Region: "), electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-secondary-region-value']
  }, ((_dataSet$secondary_re = dataSet === null || dataSet === void 0 ? void 0 : dataSet.secondary_region) !== null && _dataSet$secondary_re !== void 0 ? _dataSet$secondary_re : []).join(',')))), !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.layers) && (dataSet === null || dataSet === void 0 ? void 0 : (_dataSet$layers = dataSet.layers) === null || _dataSet$layers === void 0 ? void 0 : _dataSet$layers.length) > 0 ? electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-left"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-secondary-region-label']
  }, "Layers: "), electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-secondary-region-value']
  }, ((_dataSet$layers2 = dataSet === null || dataSet === void 0 ? void 0 : dataSet.layers) !== null && _dataSet$layers2 !== void 0 ? _dataSet$layers2 : []).join(',')))) : null, !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.etype) ? electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-left"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-cell-type-label']
  }, "E-Type: "), electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-cell-type-value']
  }, (_dataSet$etype = dataSet === null || dataSet === void 0 ? void 0 : dataSet.etype) !== null && _dataSet$etype !== void 0 ? _dataSet$etype : ''))) : null, electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-right"
  }, hasSource ? electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-source-label']
  }, "SOURCE: ", dataSet === null || dataSet === void 0 ? void 0 : dataSet.source) : null))))), electrophysiologyCard_jsx("div", {
    className: `${datasetCard_module_default.a['dataset-card-actions-container']} col-md-3 col-sm-12`
  }, electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-left"
  }, electrophysiologyCard_jsx("div", {
    className: "row"
  }, hasDownloadLink ? electrophysiologyCard_jsx("div", {
    className: "col-12"
  }, electrophysiologyCard_jsx("div", {
    className: "row"
  }, electrophysiologyCard_jsx("div", {
    className: "col-12 text-center"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, electrophysiologyCard_jsx(core_["Tooltip"], {
    title: "Download"
  }, electrophysiologyCard_jsx(expandButton["a" /* default */], {
    label: 'Download',
    icon: electrophysiologyCard_jsx(icons_["CloudDownload"], null),
    expanded: actionsExpanded,
    onClick: () => window.open(downloadLink)
  })))), electrophysiologyCard_jsx("div", {
    className: "col-12 text-center"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, electrophysiologyCard_jsx(core_["Tooltip"], {
    title: "Add to HH Neuron Builder Cart"
  }, electrophysiologyCard_jsx(expandButton["a" /* default */], {
    label: 'Add to HH Neuron Builder Cart',
    icon: electrophysiologyCard_jsx(icons_["Send"], null),
    expanded: actionsExpanded,
    onClick: () => _selectForModelBuilder()
  })))))) : null, hasPageLink ? electrophysiologyCard_jsx("div", {
    className: "col-12 text-center"
  }, electrophysiologyCard_jsx("span", {
    className: datasetCard_module_default.a['dataset-card-action']
  }, electrophysiologyCard_jsx(core_["Tooltip"], {
    title: isInternal ? 'View on Site (internal)' : 'View on Site'
  }, electrophysiologyCard_jsx(expandButton["a" /* default */], {
    label: isInternal ? 'View on Site (internal)' : 'View on Site',
    icon: electrophysiologyCard_jsx(icons_["Link"], {
      htmlColor: isInternal ? '#0F4C81' : '#000'
    }),
    expanded: actionsExpanded,
    onClick: () => window.open(pageLink)
  })))) : null)))))));
}

const ElectrophysiologyCard = /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => electrophysiologyCard_DataSetCard(props, ref));

// CONCATENATED MODULE: ./components/cards/connectionCard.tsx
var connectionCard_jsx = external_react_["createElement"];









function connectionCard_DataSetCard(props, ref) {
  const {
    dataSet,
    selectedForDownload,
    toggleSelectedForDownload,
    onClick
  } = props;
  const [actionsExpanded, setActionsExpanded] = external_react_["useState"](false);

  const _openImageLightbox = url => {
    if (!!(props === null || props === void 0 ? void 0 : props.openImageLightbox)) {
      props.openImageLightbox(url);
    }
  };

  const presynaptic = !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.presynaptic) ? dataSet === null || dataSet === void 0 ? void 0 : dataSet.presynaptic : null;
  const postsynaptyc = !!(dataSet === null || dataSet === void 0 ? void 0 : dataSet.postsynaptic) ? dataSet === null || dataSet === void 0 ? void 0 : dataSet.postsynaptic : null;

  const renderNeuron = (neuron, headerLabel) => {
    var _getImageUrlByPath, _neuron$name, _neuron$papers, _neuron$secondary_reg, _neuron$layers;

    const hasImage = !!(neuron === null || neuron === void 0 ? void 0 : neuron.icon);
    const imageUrl = (_getImageUrlByPath = Object(imageHelper["b" /* getImageUrlByPath */])(neuron === null || neuron === void 0 ? void 0 : neuron.icon)) !== null && _getImageUrlByPath !== void 0 ? _getImageUrlByPath : Object(imageHelper["b" /* getImageUrlByPath */])('/assets/images/placeholder.png');
    return connectionCard_jsx("div", {
      className: "col-md-6 col-sm-12"
    }, connectionCard_jsx("div", {
      className: "row",
      style: {
        height: '100%'
      }
    }, connectionCard_jsx("div", {
      className: "col-md-3 col-sm-12"
    }, connectionCard_jsx("img", {
      src: imageUrl,
      onClick: () => hasImage ? _openImageLightbox(imageUrl) : null,
      className: `${datasetCard_module_default.a['dataset-card-image']} ${!hasImage ? datasetCard_module_default.a['not-available'] : ''}`
    })), connectionCard_jsx("div", {
      className: `${datasetCard_module_default.a['dataset-card-main-content']} col-md-7 col-sm-12`
    }, connectionCard_jsx("div", {
      className: `row ${datasetCard_module_default.a['dataset-card-main-content-inner']}`
    }, connectionCard_jsx("div", {
      className: "col-12 text-left"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-name-label']
    }, headerLabel)), connectionCard_jsx("div", {
      className: "col-12 text-left"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-name-label']
    }, "Name: "), connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-name-value']
    }, (_neuron$name = neuron === null || neuron === void 0 ? void 0 : neuron.name) !== null && _neuron$name !== void 0 ? _neuron$name : '')), connectionCard_jsx("div", {
      className: "col-12 text-left"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-papers-label']
    }, "Paper(s): "), ((_neuron$papers = neuron === null || neuron === void 0 ? void 0 : neuron.papers) !== null && _neuron$papers !== void 0 ? _neuron$papers : []).map(item => !!(item === null || item === void 0 ? void 0 : item.url) ? connectionCard_jsx("a", {
      className: datasetCard_module_default.a['dataset-card-papers-value'],
      target: "_blank",
      href: item.url
    }, item.label) : connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-papers-value']
    }, item.label))), connectionCard_jsx("div", {
      className: "col-12 text-left"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-secondary-region-label']
    }, "Secondary Region: "), connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-secondary-region-value']
    }, ((_neuron$secondary_reg = neuron === null || neuron === void 0 ? void 0 : neuron.secondary_region) !== null && _neuron$secondary_reg !== void 0 ? _neuron$secondary_reg : []).join(','))), connectionCard_jsx("div", {
      className: "col-12 text-left"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-secondary-region-label']
    }, "Layers: "), connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-secondary-region-value']
    }, ((_neuron$layers = neuron === null || neuron === void 0 ? void 0 : neuron.layers) !== null && _neuron$layers !== void 0 ? _neuron$layers : []).join(','))), connectionCard_jsx("div", {
      className: "col-12 text-right"
    }, (neuron === null || neuron === void 0 ? void 0 : neuron.source) ? connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-source-label']
    }, "SOURCE: ", neuron === null || neuron === void 0 ? void 0 : neuron.source) : null))), connectionCard_jsx("div", {
      className: `${datasetCard_module_default.a['dataset-card-actions-container']} col-md-2 col-sm-12`
    }, connectionCard_jsx("div", {
      className: "row"
    }, connectionCard_jsx("div", {
      className: "col-12 text-left"
    }, connectionCard_jsx("div", {
      className: "row"
    }, !!(presynaptic === null || presynaptic === void 0 ? void 0 : presynaptic.download_link) ? connectionCard_jsx("div", {
      className: "col-12 text-center"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-action']
    }, connectionCard_jsx(core_["Tooltip"], {
      title: "Download"
    }, connectionCard_jsx(expandButton["a" /* default */], {
      label: 'Download',
      icon: connectionCard_jsx(icons_["CloudDownload"], null),
      expanded: actionsExpanded,
      onClick: () => window.open(presynaptic === null || presynaptic === void 0 ? void 0 : presynaptic.download_link)
    })))) : null, !!(neuron === null || neuron === void 0 ? void 0 : neuron.page_link) ? connectionCard_jsx("div", {
      className: "col-12 text-center"
    }, connectionCard_jsx("span", {
      className: datasetCard_module_default.a['dataset-card-action']
    }, connectionCard_jsx(core_["Tooltip"], {
      title: "View on Site"
    }, connectionCard_jsx(expandButton["a" /* default */], {
      label: 'View on Site',
      icon: connectionCard_jsx(icons_["Link"], null),
      expanded: actionsExpanded,
      onClick: () => window.open(neuron === null || neuron === void 0 ? void 0 : neuron.page_link)
    })))) : null))))));
  };

  return connectionCard_jsx(card["a" /* CardContainer */], {
    key: `dataset-${dataSet === null || dataSet === void 0 ? void 0 : dataSet.id}`
  }, connectionCard_jsx("div", {
    className: `${datasetCard_module_default.a['dataset-card-content']} ${datasetCard_module_default.a['connection']}`
  }, connectionCard_jsx("div", {
    className: "row"
  }, !!presynaptic ? renderNeuron(presynaptic, 'Presynaptic') : null, !!postsynaptyc ? renderNeuron(postsynaptyc, 'Postsynaptic') : null)));
}

const ConnectionCard = /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => connectionCard_DataSetCard(props, ref));

// EXTERNAL MODULE: ./components/buttons/buttons.tsx
var buttons = __webpack_require__("YK1M");

// EXTERNAL MODULE: ./actions/hodgkinHuxley.actions.ts
var hodgkinHuxley_actions = __webpack_require__("2hIF");

// EXTERNAL MODULE: ./components/forms/filter.tsx + 1 modules
var filter = __webpack_require__("95fv");

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__("N39q");

// EXTERNAL MODULE: ./pages/page.module.scss
var page_module = __webpack_require__("RQJL");
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);

// EXTERNAL MODULE: ./components/baloons/itemsCountBaloon.tsx + 1 modules
var itemsCountBaloon = __webpack_require__("Z7bq");

// EXTERNAL MODULE: ./components/dialogs/dialogContainer.tsx + 1 modules
var dialogContainer = __webpack_require__("Zq3K");

// CONCATENATED MODULE: ./components/dialogs/morphologyViewerDialog.tsx
var morphologyViewerDialog_jsx = external_react_["createElement"];




const useStyles = Object(core_["makeStyles"])(theme => ({
  dialog: {
    height: '80vh'
  },
  iframe: {
    width: '100%',
    height: '100%',
    minHeight: 400,
    border: 0
  }
}));
function MorphologyViewerDialog({
  open,
  onClose,
  modelName,
  modelUrl
}) {
  const classes = useStyles();
  return morphologyViewerDialog_jsx(dialogContainer["a" /* DialogContainer */], {
    open: open,
    fullWidth: true,
    maxWidth: 'lg',
    title: modelName !== null && modelName !== void 0 ? modelName : '',
    onClose: onClose,
    height: '80vh',
    className: classes.dialog
  }, morphologyViewerDialog_jsx("div", null, morphologyViewerDialog_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, morphologyViewerDialog_jsx("div", {
    className: "col-12"
  }, morphologyViewerDialog_jsx("iframe", {
    src: `${constants["a" /* default */].MORPHOLOGY_VIEWER_BASE_URL}${modelUrl}`,
    className: classes.iframe
  })))));
}
// EXTERNAL MODULE: ./components/hodgkin-huxley-baloon/index.tsx + 1 modules
var hodgkin_huxley_baloon = __webpack_require__("gXil");

// EXTERNAL MODULE: ./components/dialogs/agreeDownloadDialog.module.scss
var agreeDownloadDialog_module = __webpack_require__("yKw9");

// CONCATENATED MODULE: ./components/dialogs/agreeDownloadDialog.tsx

var agreeDownloadDialog_jsx = external_react_default.a.createElement;


function AgreeDownloadDialog({
  open,
  pageUrl,
  acceptDownloadCallback,
  cancelDownloadCallback
}) {
  const actions = [{
    label: 'Cancel',
    onClick: cancelDownloadCallback
  }, {
    label: 'Agree',
    onClick: acceptDownloadCallback
  }];
  return agreeDownloadDialog_jsx(dialogContainer["a" /* DialogContainer */], {
    className: agreeDownloadDialog_module["agree-download-dialog"],
    open: open,
    actions: actions,
    maxWidth: 'lg',
    onClose: cancelDownloadCallback
  }, !!pageUrl ? agreeDownloadDialog_jsx("iframe", {
    src: pageUrl,
    className: agreeDownloadDialog_module["content_iframe"]
  }) : null);
}
// EXTERNAL MODULE: ./node_modules/react-image-lightbox/style.css
var style = __webpack_require__("Y9L4");

// EXTERNAL MODULE: ./components/sanitizedHtml.tsx
var sanitizedHtml = __webpack_require__("Uv/k");

// CONCATENATED MODULE: ./components/dialogs/alertDialog.tsx
var alertDialog_jsx = external_react_["createElement"];



function AlertDialog({
  open,
  onClose,
  title = 'Warning',
  message
}) {
  return alertDialog_jsx(dialogContainer["a" /* DialogContainer */], {
    open: open,
    fullWidth: true,
    maxWidth: 'lg',
    title: title !== null && title !== void 0 ? title : '',
    onClose: onClose
  }, alertDialog_jsx("div", {
    style: {
      paddingBottom: 20
    }
  }, alertDialog_jsx("div", {
    className: "row"
  }, alertDialog_jsx("div", {
    className: "col-12"
  }, alertDialog_jsx(sanitizedHtml["a" /* SanitizedHtml */], {
    content: message
  })))));
}
// EXTERNAL MODULE: ./helpers/hashHelper.ts
var hashHelper = __webpack_require__("v1Az");

// CONCATENATED MODULE: ./constants/constants.ts
const dataTypes = {
  morphology: 'morphology',
  electrophysiology: 'electrophysiology',
  modFile: 'modFile'
};
// CONCATENATED MODULE: ./pages/data/[type].tsx
var _type_jsx = external_react_["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























const _typeCards = {
  'morphology': MorphologyCard,
  'electrophysiology': ElectrophysiologyCard,
  'connection': ConnectionCard
};

const lightboxStyles = () => {
  var _window$pageYOffset, _window;

  return {
    content: {
      top: ((_window$pageYOffset = (_window = window) === null || _window === void 0 ? void 0 : _window.pageYOffset) !== null && _window$pageYOffset !== void 0 ? _window$pageYOffset : 0) > 60 ? 0 : 60
    }
  };
};

const neurmorphoSource = 'neuromorpho';

const _DataPage = props => {
  var _page$variant;

  const [loading, setLoading] = external_react_["useState"](true);
  const [page, setPage] = external_react_["useState"]({});
  const [dataSets, setDataSets] = external_react_["useState"]([]);
  const [filters, setFilters] = external_react_["useState"](null);
  const [selectedFilters, setSelectedFilters] = external_react_["useState"](null);
  const [selectedQuery, setSelectedQuery] = external_react_["useState"]('');
  const [selectedForDownloads, setSelectedForDownloads] = external_react_["useState"]([]);
  const [numPage, setNumPage] = external_react_["useState"](0);
  const [totalPages, setTotalPages] = external_react_["useState"](1);
  const [totalItems, setTotalItems] = external_react_["useState"](0);
  const [hitsPerPage, setHitsPerPage] = external_react_["useState"](constants["a" /* default */].DEFAULT_HITS_PER_PAGE);
  const [openMorphologyViewer, setOpenMorphologyViewer] = external_react_["useState"](false);
  const [openAgreeDownloadDialog, setOpenAgreeDownloadDialog] = external_react_["useState"](false);
  const [selectedMorphologyViewerModel, setSelectedMorphologyViewerModel] = external_react_["useState"](null);
  const acceptDownloadCallback = external_react_["useRef"](() => null);
  const [openAlertDialog, setOpenAlertDialog] = external_react_["useState"](false);
  const [alertDialogMessage, setAlertDialogMessage] = external_react_["useState"](null);
  const [lightboxImg, setLightboxImg] = external_react_["useState"](null);
  const {
    params,
    selectedMorphologyForBuilding,
    selectedElectrophysiologiesForBuilding,
    selectedModFilesForBuilding,
    setMorphologyForBuilding,
    addElectrophysiologyForBuilding,
    removeElectrophysiologyForBuilding,
    removeModFileForBuilding,
    clearHodgkinHuxley
  } = props;
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    setup();
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (!openMorphologyViewer) {
      setSelectedMorphologyViewerModel(null);
    }
  }, [openMorphologyViewer]);

  const setup = async () => {
    try {
      var _url$searchParams, _query$trim;

      //const _page = await getPage('data');
      const url = new URL(window.location.href);
      const query = url === null || url === void 0 ? void 0 : (_url$searchParams = url.searchParams) === null || _url$searchParams === void 0 ? void 0 : _url$searchParams.get('query');

      const _filters = await Object(apiHelper["f" /* getFilters */])({
        indexName: 'dataset',
        type: params === null || params === void 0 ? void 0 : params.type
      });

      if (!!query && (query === null || query === void 0 ? void 0 : (_query$trim = query.trim()) === null || _query$trim === void 0 ? void 0 : _query$trim.length) > 0) {
        var _params$type;

        setSelectedQuery(query);
        await _search({
          data_type: (_params$type = params === null || params === void 0 ? void 0 : params.type) !== null && _params$type !== void 0 ? _params$type : null,
          query,
          filters: selectedFilters,
          page: numPage
        });
      } else {
        var _params$type2;

        const {
          total_page: _totalPages,
          total: _totalItems,
          items
        } = await Object(apiHelper["i" /* searchDatasets */])({
          data_type: (_params$type2 = params === null || params === void 0 ? void 0 : params.type) !== null && _params$type2 !== void 0 ? _params$type2 : null,
          query: selectedQuery,
          filters: selectedFilters,
          page: numPage
        });
        setTotalPages(_totalPages);
        setTotalItems(_totalItems);
        setDataSets(items);
      }

      setFilters(_filters);
      setLoading(false);
    } catch (error) {}
  };

  const _onChangeFilters = (key, value) => {
    if (!!key) {
      var _selectedFilters$pref;

      if (key.split('.').length === 1) {
        setSelectedFilters(_objectSpread(_objectSpread({}, selectedFilters), {}, {
          [key]: value
        }));
        return;
      }

      const prefixKey = key.split('.')[0];
      const itemKey = key.split('.')[1];
      const prefixKeyValue = !!selectedFilters ? (_selectedFilters$pref = selectedFilters[prefixKey]) !== null && _selectedFilters$pref !== void 0 ? _selectedFilters$pref : {} : {};
      setSelectedFilters(_objectSpread(_objectSpread({}, selectedFilters), {}, {
        [prefixKey]: _objectSpread(_objectSpread({}, prefixKeyValue), {}, {
          [itemKey]: value
        })
      }));
    }
  };

  const _onChangeQuery = async query => {
    var _query$trim2;

    setSelectedQuery(query);

    if ((query === null || query === void 0 ? void 0 : (_query$trim2 = query.trim()) === null || _query$trim2 === void 0 ? void 0 : _query$trim2.length) < constants["a" /* default */].MIN_SEARCH_LENGTH) {
      await _search({
        query
      });
    }
  };

  const _search = async ({
    query,
    filters,
    hitsPerPage
  } = {}) => {
    var _params$type3;

    console.log('@@@@requestSearch');
    const page = 0;
    setNumPage(0);
    setLoading(true);

    const _filters = filters !== undefined ? filters : selectedFilters;

    const {
      total_page: _totalPages,
      total: _totalItems,
      items
    } = await Object(apiHelper["i" /* searchDatasets */])({
      data_type: (_params$type3 = params === null || params === void 0 ? void 0 : params.type) !== null && _params$type3 !== void 0 ? _params$type3 : null,
      query: query !== null && query !== void 0 ? query : selectedQuery,
      filters: _filters,
      page,
      hitsPerPage
    });
    console.log('@@@@@@@totalPages', _totalPages);
    console.log('@@@@@@@totalItems', _totalItems);
    setDataSets(items);
    setTotalPages(_totalPages);
    setTotalItems(_totalItems);
    setLoading(false);
  };

  const _loadMore = async () => {
    var _params$type4;

    const page = numPage + 1;
    setNumPage(page);
    setLoading(true);
    const {
      total_page: _totalPages,
      total: _totalItems,
      items
    } = await Object(apiHelper["i" /* searchDatasets */])({
      data_type: (_params$type4 = params === null || params === void 0 ? void 0 : params.type) !== null && _params$type4 !== void 0 ? _params$type4 : null,
      query: selectedQuery,
      filters: selectedFilters,
      hitsPerPage,
      page
    });
    const allDataSets = [...dataSets, ...items];
    setDataSets(allDataSets);
    setTotalItems(_totalItems);
    setTotalPages(_totalPages);
    setLoading(false);
  };

  const _onHitsPerPageChange = async value => {
    setHitsPerPage(value);
    await _search({
      hitsPerPage: value
    });
  };

  const _applyFilters = async () => {
    await _search();
  };

  const _resetFilters = async () => {
    setSelectedFilters(null);
    await _search({
      query: '',
      filters: null
    });
  };

  const _downloadAll = () => {
    _askForDownload({
      all: true,
      callback: () => {
        window.open(Object(apiHelper["b" /* downloadAllDatasets */])(params === null || params === void 0 ? void 0 : params.type));
      }
    });
  };

  const _downloadSelectedDatasets = () => {
    _askForDownload({
      all: true,
      callback: () => {
        window.open(Object(apiHelper["d" /* downloadDatasets */])(selectedForDownloads));
      }
    });
  };

  const _openMorphologyViewer = async ({
    modelName,
    modelUrl,
    detailPage
  }) => {
    if (!(await Object(apiHelper["a" /* checkMorphologyForShow */])(modelUrl))) {
      _openAlertDialog(`The current morphology cannot be visualized in this viewer.<br/>Please visit the source <a href="${detailPage}" target="_blank">web page</a> of the morphology for further details.`);
    } else {
      setSelectedMorphologyViewerModel({
        modelName,
        modelUrl
      });
      setOpenMorphologyViewer(true);
    }
  };

  const _closeMorphologyViewer = () => {
    setOpenMorphologyViewer(false);
  };

  const _openAlertDialog = message => {
    setOpenAlertDialog(true);
    setAlertDialogMessage(message);
    return;
  };

  const _closeAlertDialog = () => {
    setOpenAlertDialog(false);
    setAlertDialogMessage(null);
  };

  const _onCloseLightBox = () => {
    setLightboxImg(null);
  };

  const _toggleSelectForDownload = async (id, selected) => {
    console.log('@@@@@@@toggleSelectForDownload', id, selected);

    if (selected) {
      const newValues = [...selectedForDownloads];
      newValues.push(id);
      setSelectedForDownloads(newValues);
    } else {
      const newValues = [...selectedForDownloads];
      const elIndex = newValues.indexOf(id);

      if (elIndex > -1) {
        newValues.splice(elIndex, 1);
        setSelectedForDownloads(newValues);
      }
    }
  };

  const _toggleElectrophysiologyForBuilding = selectedItem => {
    const index = (selectedElectrophysiologiesForBuilding !== null && selectedElectrophysiologiesForBuilding !== void 0 ? selectedElectrophysiologiesForBuilding : []).findIndex(item => Object(hashHelper["a" /* hashCode */])(JSON.stringify(selectedItem)) === Object(hashHelper["a" /* hashCode */])(JSON.stringify(item)));

    if (index === -1) {
      addElectrophysiologyForBuilding(selectedItem);
    } else {
      removeElectrophysiologyForBuilding(selectedItem);
    }
  };

  const _selectForModelBuilding = item => {
    if (!!item) {
      if ((item === null || item === void 0 ? void 0 : item.type) === dataTypes.morphology) {
        setMorphologyForBuilding(!!item ? {
          name: item === null || item === void 0 ? void 0 : item.name,
          url: item === null || item === void 0 ? void 0 : item.download_link
        } : null);
      } else if ((item === null || item === void 0 ? void 0 : item.type) === dataTypes.electrophysiology) {
        var _item$metadata;

        _toggleElectrophysiologyForBuilding({
          name: item === null || item === void 0 ? void 0 : item.name,
          url: item === null || item === void 0 ? void 0 : item.download_link,
          metadata: (_item$metadata = item === null || item === void 0 ? void 0 : item.metadata) !== null && _item$metadata !== void 0 ? _item$metadata : null
        });
      }
    }
  };

  const _askForDownload = ({
    url,
    callback,
    source,
    all = false
  }) => {
    if (!!source && (source === null || source === void 0 ? void 0 : source.toLowerCase()) === neurmorphoSource || all) {
      if (!!url && url.trim().length > 0) {
        acceptDownloadCallback.current = () => downloadFile(url);
      } else if (!!callback) {
        acceptDownloadCallback.current = callback;
      }

      setOpenAgreeDownloadDialog(true);
    } else {
      if (!!url && url.trim().length > 0) {
        downloadFile(url);
      } else if (!!callback) {
        callback();
      }
    }
  };

  const _acceptDownloadCallback = () => {
    setOpenAgreeDownloadDialog(false);

    if (!!(acceptDownloadCallback === null || acceptDownloadCallback === void 0 ? void 0 : acceptDownloadCallback.current)) {
      acceptDownloadCallback === null || acceptDownloadCallback === void 0 ? void 0 : acceptDownloadCallback.current();
      acceptDownloadCallback.current = null;
    }
  };

  const _cancelDownloadCallback = () => {
    setOpenAgreeDownloadDialog(false);

    if (!!(acceptDownloadCallback === null || acceptDownloadCallback === void 0 ? void 0 : acceptDownloadCallback.current)) {
      acceptDownloadCallback.current = null;
    }
  };

  const _getDataTypeLabel = type => {
    var _constants$DATA_TYPE_;

    return (_constants$DATA_TYPE_ = constants["a" /* default */].DATA_TYPE_LABELS[type]) !== null && _constants$DATA_TYPE_ !== void 0 ? _constants$DATA_TYPE_ : type;
  };

  const hasMoreItems = numPage < totalPages - 1;
  const hasData = !!dataSets && dataSets.length > 0;
  const hasDownloadableFiles = !!dataSets && dataSets.length > 0 && dataSets.filter(item => !!item.download_link).length > 0;
  const CardType = _typeCards[params === null || params === void 0 ? void 0 : params.type];
  const countBaloonClassName = !!hasDownloadableFiles && !!selectedForDownloads && selectedForDownloads.length > 0 ? 'col-md-6' : 'col-md-8';
  const downloadBlockClassName = !!hasDownloadableFiles && !!selectedForDownloads && selectedForDownloads.length > 0 ? 'col-md-6' : 'col-md-4';
  const pageVariant = (_page$variant = page === null || page === void 0 ? void 0 : page.variant) !== null && _page$variant !== void 0 ? _page$variant : 'dark';
  return _type_jsx(pageContainer["a" /* default */], {
    variant: pageVariant,
    mainClassName: 'with-fixed-header',
    fixedHeader: true
  }, _type_jsx("div", {
    className: `container ${page_module_default.a['page-container']}`
  }, _type_jsx("div", {
    className: "row"
  }, _type_jsx("div", {
    className: "col-12"
  }, _type_jsx(core_["Typography"], {
    variant: "h4",
    className: page_module_default.a['page-header-label']
  }, `DATA > ${_getDataTypeLabel(params === null || params === void 0 ? void 0 : params.type)}`))), _type_jsx("div", {
    className: "row"
  }, _type_jsx("div", {
    className: "col-12"
  }, page === null || page === void 0 ? void 0 : page.content)), _type_jsx("section", null, _type_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, _type_jsx("div", {
    className: "col-12"
  }, _type_jsx(filter["a" /* FormFilter */], {
    variant: pageVariant,
    query: selectedQuery,
    filters: filters,
    selectedFilters: selectedFilters,
    selectedHitsPerPage: hitsPerPage,
    onQueryChange: value => _onChangeQuery(value),
    onRequestSearch: () => _search(),
    onChangeHitsPerPage: value => _onHitsPerPageChange(value),
    onChangeFilters: (key, value) => _onChangeFilters(key, value),
    applyFilters: () => _applyFilters(),
    resetFilters: () => _resetFilters()
  }))), _type_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, _type_jsx("div", {
    className: countBaloonClassName
  }, _type_jsx(itemsCountBaloon["a" /* ItemsCountBaloon */], {
    label: "Total items",
    count: totalItems
  })), _type_jsx("div", {
    className: `${downloadBlockClassName} text-right`
  }, !!selectedForDownloads && selectedForDownloads.length > 0 ? _type_jsx(buttons["a" /* CustomButton */], {
    onClick: () => _downloadSelectedDatasets(),
    style: {
      float: 'right',
      marginRight: 10,
      fontSize: 16
    }
  }, _type_jsx(icons_["CloudDownload"], null), " ", _type_jsx("span", {
    style: {
      marginLeft: 5
    }
  }, "Download Selected")) : null)), _type_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, _type_jsx("div", {
    className: "col-12"
  }, _type_jsx(hodgkin_huxley_baloon["a" /* HodgkinHuxleyBaloon */], {
    variant: pageVariant,
    morphology: selectedMorphologyForBuilding,
    electrophysiologies: selectedElectrophysiologiesForBuilding,
    modFiles: selectedModFilesForBuilding,
    removeMorphology: () => setMorphologyForBuilding(null),
    removeElectrophysiology: item => removeElectrophysiologyForBuilding(item),
    removeModFile: item => removeModFileForBuilding(item),
    clear: () => clearHodgkinHuxley()
  }))), _type_jsx("div", {
    className: "row"
  }, _type_jsx("div", {
    className: "col-12 text-center"
  }, !hasData ? _type_jsx("p", null, loading ? '' : 'There are not data for search criteria') : _type_jsx("div", null, (dataSets !== null && dataSets !== void 0 ? dataSets : []).map(item => _type_jsx("div", {
    className: "row",
    key: `row-dataset-${item === null || item === void 0 ? void 0 : item.id}`
  }, _type_jsx("div", {
    className: "col-12"
  }, _type_jsx(CardType, {
    onClick: () => null,
    dataSet: item,
    selectedForDownload: selectedForDownloads.includes(item['source_id']),
    toggleSelectedForDownload: _toggleSelectForDownload,
    openMorphologyViewer: _openMorphologyViewer,
    openImageLightbox: url => setLightboxImg(url),
    closImageLightbox: () => setLightboxImg(null),
    selectForModelBuilder: _selectForModelBuilding,
    askForDownload: _askForDownload
  }))))))), hasMoreItems ? _type_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, _type_jsx("div", {
    className: "col-12 text-center"
  }, _type_jsx(buttons["a" /* CustomButton */], {
    variant: "primary",
    style: {
      margin: '0 auto',
      fontSize: 16
    },
    onClick: () => _loadMore()
  }, "Load More"))) : null), loading ? _type_jsx(spinner["a" /* default */], null) : null), _type_jsx(AlertDialog, {
    open: openAlertDialog,
    onClose: _closeAlertDialog,
    message: alertDialogMessage
  }), _type_jsx(MorphologyViewerDialog, {
    open: openMorphologyViewer,
    onClose: _closeMorphologyViewer,
    modelName: selectedMorphologyViewerModel === null || selectedMorphologyViewerModel === void 0 ? void 0 : selectedMorphologyViewerModel.modelName,
    modelUrl: selectedMorphologyViewerModel === null || selectedMorphologyViewerModel === void 0 ? void 0 : selectedMorphologyViewerModel.modelUrl
  }), !!lightboxImg ? _type_jsx(external_react_image_lightbox_default.a, {
    mainSrc: lightboxImg,
    reactModalStyle: lightboxStyles(),
    onCloseRequest: _onCloseLightBox
  }) : null, _type_jsx(AgreeDownloadDialog, {
    open: openAgreeDownloadDialog,
    pageUrl: 'https://facility-hub.cineca.it/neuro_morpho/useterm.jsp',
    acceptDownloadCallback: _acceptDownloadCallback,
    cancelDownloadCallback: _cancelDownloadCallback
  }));
};

const getStaticProps = ({
  params
}) => ({
  props: {
    params
  }
});

const getStaticPaths = async () => {
  const {
    values: types
  } = await Object(apiHelper["g" /* getTypes */])('dataset');
  const paths = (types !== null && types !== void 0 ? types : []).map(item => ({
    params: {
      type: item
    }
  }));
  return {
    paths,
    fallback: false
  };
};

const mapStateToProps = (state, props) => {
  var _state$hodgkinHuxley$, _state$hodgkinHuxley, _state$hodgkinHuxley$2, _state$hodgkinHuxley2, _state$hodgkinHuxley$3, _state$hodgkinHuxley3;

  return {
    selectedMorphologyForBuilding: (_state$hodgkinHuxley$ = state === null || state === void 0 ? void 0 : (_state$hodgkinHuxley = state.hodgkinHuxley) === null || _state$hodgkinHuxley === void 0 ? void 0 : _state$hodgkinHuxley.morphology) !== null && _state$hodgkinHuxley$ !== void 0 ? _state$hodgkinHuxley$ : null,
    selectedElectrophysiologiesForBuilding: (_state$hodgkinHuxley$2 = state === null || state === void 0 ? void 0 : (_state$hodgkinHuxley2 = state.hodgkinHuxley) === null || _state$hodgkinHuxley2 === void 0 ? void 0 : _state$hodgkinHuxley2.electrophysiologies) !== null && _state$hodgkinHuxley$2 !== void 0 ? _state$hodgkinHuxley$2 : null,
    selectedModFilesForBuilding: (_state$hodgkinHuxley$3 = state === null || state === void 0 ? void 0 : (_state$hodgkinHuxley3 = state.hodgkinHuxley) === null || _state$hodgkinHuxley3 === void 0 ? void 0 : _state$hodgkinHuxley3.modFiles) !== null && _state$hodgkinHuxley$3 !== void 0 ? _state$hodgkinHuxley$3 : []
  };
};

const mapDispatchToProps = dispatch => ({
  setMorphologyForBuilding: item => dispatch(Object(hodgkinHuxley_actions["f" /* setMorphology */])(item)),
  addElectrophysiologyForBuilding: item => dispatch(Object(hodgkinHuxley_actions["a" /* addElectrophysiology */])(item)),
  removeElectrophysiologyForBuilding: item => dispatch(Object(hodgkinHuxley_actions["d" /* removeElectrophysiology */])(item)),
  removeModFileForBuilding: item => dispatch(Object(hodgkinHuxley_actions["e" /* removeModFile */])(item)),
  clearHodgkinHuxley: () => dispatch(Object(hodgkinHuxley_actions["c" /* clear */])())
});

/* harmony default export */ var _type_ = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(_DataPage));


/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FKRD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tos-overlay-container": "tos_tos-overlay-container__2sRzx",
	"tos-overlay-main-container": "tos_tos-overlay-main-container__3uX59"
};


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

/***/ "KJnk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag-view": "tagView_tag-view__2R2Ix",
	"tag-view-label": "tagView_tag-view-label__1DDjv"
};


/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "L6ga":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"baloon-container": "baloon_baloon-container__uqYfO"
};


/***/ }),

/***/ "Lcuf":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"feedbackButton": "styles_feedbackButton__22mVO",
	"closeBtn": "styles_closeBtn__3_huh",
	"form": "styles_form__1siId",
	"formVisible": "styles_formVisible__2eNIb",
	"sendBtn": "styles_sendBtn__33wVA"
};


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

/***/ "OZcC":
/***/ (function(module, exports) {

module.exports = require("material-ui-search-bar");

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "RQJL":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page-container": "page_page-container__3LRmt",
	"page-columns-container": "page_page-columns-container__34P3E",
	"page-header-label": "page_page-header-label__O6BoI",
	"page-header-divider": "page_page-header-divider__1xXS6"
};


/***/ }),

/***/ "SbOe":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dataset-card-content": "datasetCard_dataset-card-content__4ZTnz",
	"dataset-card-image": "datasetCard_dataset-card-image__3pQ7g",
	"connection": "datasetCard_connection__3fLzL",
	"not-available": "datasetCard_not-available__-T2t3",
	"dataset-card-main-content": "datasetCard_dataset-card-main-content__V9nrN",
	"dataset-card-main-content-inner": "datasetCard_dataset-card-main-content-inner__3PYfY",
	"dataset-card-name-label": "datasetCard_dataset-card-name-label__YO9QS",
	"dataset-card-species-label": "datasetCard_dataset-card-species-label__oMqqv",
	"dataset-card-region-label": "datasetCard_dataset-card-region-label__2i8g6",
	"dataset-card-cell-type-label": "datasetCard_dataset-card-cell-type-label__2FFPc",
	"dataset-card-secondary-region-label": "datasetCard_dataset-card-secondary-region-label__1mDka",
	"dataset-card-physical-integrity-label": "datasetCard_dataset-card-physical-integrity-label__1jZA2",
	"dataset-card-papers-label": "datasetCard_dataset-card-papers-label__uoChL",
	"dataset-card-name-value": "datasetCard_dataset-card-name-value__2A3G8",
	"dataset-card-species-value": "datasetCard_dataset-card-species-value__pDj8Z",
	"dataset-card-region-value": "datasetCard_dataset-card-region-value__1R_DF",
	"dataset-card-cell-type-value": "datasetCard_dataset-card-cell-type-value__2FyrK",
	"dataset-card-secondary-region-value": "datasetCard_dataset-card-secondary-region-value__2qoIp",
	"dataset-card-physical-integrity-value": "datasetCard_dataset-card-physical-integrity-value__9wXRz",
	"dataset-card-papers-value": "datasetCard_dataset-card-papers-value__1YurG",
	"dataset-card-description": "datasetCard_dataset-card-description__1l1gG",
	"dataset-card-source-label": "datasetCard_dataset-card-source-label__1gKFK",
	"dataset-card-actions-container": "datasetCard_dataset-card-actions-container__175lR",
	"dataset-card-action": "datasetCard_dataset-card-action__1WAJP"
};


/***/ }),

/***/ "TLva":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__("N39q");

// CONCATENATED MODULE: ./data.ts
const MenuItemType = {
  section: 'section',
  url: 'url'
};
// CONCATENATED MODULE: ./helpers/postHelper.ts



function getPageUrl(menuItem) {
  var _menuItem$url, _constants$BASE_URL, _constants$BASE_URL2;

  if (!menuItem) return '#';
  if (!menuItem.type) return '#';
  if (!!menuItem && (menuItem === null || menuItem === void 0 ? void 0 : (_menuItem$url = menuItem.url) === null || _menuItem$url === void 0 ? void 0 : _menuItem$url.startsWith('http'))) return menuItem === null || menuItem === void 0 ? void 0 : menuItem.url;

  switch (menuItem.type) {
    case MenuItemType.url:
      const url = !!(menuItem === null || menuItem === void 0 ? void 0 : menuItem.url) ? `${(_constants$BASE_URL = constants["a" /* default */].BASE_URL) !== null && _constants$BASE_URL !== void 0 ? _constants$BASE_URL : ''}${menuItem.url}` : '/';
      return url;

    case MenuItemType.section:
      return !!(menuItem === null || menuItem === void 0 ? void 0 : menuItem.url) ? `${(_constants$BASE_URL2 = constants["a" /* default */].BASE_URL) !== null && _constants$BASE_URL2 !== void 0 ? _constants$BASE_URL2 : ''}${menuItem.url}` : '#';
  }
}


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/menu/menu.module.scss
var menu_module = __webpack_require__("X+dj");
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);

// EXTERNAL MODULE: ./helpers/imageHelper.ts
var imageHelper = __webpack_require__("d0Tl");

// CONCATENATED MODULE: ./helpers/arrayHelper.ts
const sortedArray = (items, field) => {
  return items.sort((item1, item2) => {
    return item1[field] === item2[field] ? 0 : item1[field] > item2[field] ? 1 : -1;
  });
};


// CONCATENATED MODULE: ./components/menu/menu.tsx

var __jsx = external_react_default.a.createElement;











const getBackgroundColor = () => {
  var _window;

  return ((_window = window) === null || _window === void 0 ? void 0 : _window.pageYOffset) > 60 ? '#393745' : 'transparent';
};

const useToolbarStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    background: 'transparent'
  }
}));
const useFixedToolbarStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    background: '#393745'
  }
}));
const useNavStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    padding: '0 1rem'
  }
}));
const useListStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    padding: 0
  }
}));

const MenuItem = ({
  item,
  isSubMenuItem = false
}) => {
  var _item$menuitems$lengt, _item$menuitems;

  const router = Object(router_["useRouter"])();
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);

  const buildSubMenu = (item, expanded) => {
    var _sortedArray;

    return __jsx("div", {
      className: `dropdown-menu ${menu_module_default.a['custom-dropdown-menu']} ${expanded ? 'show' : ''}`,
      "aria-labelledby": "navbarDropdownMenuLink",
      key: `sub-menu-dropdown-${item.id}`
    }, __jsx("ul", {
      className: menu_module_default.a['custom-dropdown-menu-list']
    }, (_sortedArray = sortedArray(item.menuitems, 'title')) === null || _sortedArray === void 0 ? void 0 : _sortedArray.map(subItem => __jsx(MenuItem, {
      key: `sub-menu-item-${subItem.id}`,
      item: subItem,
      isSubMenuItem: true
    }))));
  };

  const showDropDown = () => {
    setExpanded(true);
  };

  const hideDropDown = () => {
    setExpanded(false);
  };

  const toggleDropDown = () => {
    setExpanded(!expanded);
  };

  const linkUrl = getPageUrl(item);
  const isActiveLink = linkUrl === `${constants["a" /* default */].BASE_URL}${router === null || router === void 0 ? void 0 : router.asPath}`;
  const isDropDown = item.type === MenuItemType.section || ((_item$menuitems$lengt = (_item$menuitems = item.menuitems) === null || _item$menuitems === void 0 ? void 0 : _item$menuitems.length) !== null && _item$menuitems$lengt !== void 0 ? _item$menuitems$lengt : 0) > 0;
  return __jsx(core_["ListItem"], {
    onMouseEnter: isDropDown ? () => showDropDown() : null,
    onMouseLeave: isDropDown ? () => hideDropDown() : null,
    className: `${isSubMenuItem ? menu_module_default.a['sub-list-item'] : menu_module_default.a['list-item']} ${isActiveLink ? menu_module_default.a['active'] : ''} ${isDropDown ? 'dropdown' : ''}`
  }, __jsx(core_["Link"], {
    className: menu_module_default.a['link'],
    href: linkUrl
  }, item.title), isDropDown ? buildSubMenu(item, expanded) : null);
};

const Menu = ({
  logo,
  projectHeader,
  institutionHeader,
  institutionLogo,
  institutionUrl,
  menuItems,
  isSubMenuItem = false,
  fixed = false,
  transparent = false,
  showDrawerToggleButton = false,
  handleOpenDrawer = open => null
}) => {
  var _sortedArray2;

  const router = Object(router_["useRouter"])();
  const {
    0: scrolled,
    1: setScrolled
  } = Object(external_react_["useState"])(false);
  const {
    0: menuExpanded,
    1: setMenuExpanded
  } = Object(external_react_["useState"])(false);
  const toolbarClasses = !fixed || scrolled ? useFixedToolbarStyles() : useToolbarStyles();
  const navClasses = useNavStyles();
  const listClasses = useListStyles();

  const buildMenuItem = item => __jsx(MenuItem, {
    item: item,
    key: `menu-item-${item.id}`
  });

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const _listenForScroll = () => {
    if (!!window) {
      window.addEventListener('scroll', _onScrollTrigger);
    }
  };

  const _onScrollTrigger = () => {
    var _window$pageYOffset, _window2;

    setScrolled(((_window$pageYOffset = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.pageYOffset) !== null && _window$pageYOffset !== void 0 ? _window$pageYOffset : 0) > 60);
  };

  Object(external_react_["useEffect"])(() => {
    _listenForScroll();

    return () => {
      window.removeEventListener('scroll', _onScrollTrigger);
    };
  }, []);
  const appBarClasses = `${fixed ? menu_module_default.a['fixed-header'] : menu_module_default.a['default-header']} ${fixed && transparent && !scrolled ? menu_module_default.a['transparent'] : ''}`;
  const hasInstitutionLogo = !!institutionLogo;
  const hasInstitutionUrl = !!institutionUrl;
  return __jsx(core_["AppBar"], {
    position: "relative",
    className: appBarClasses
  }, __jsx(core_["Toolbar"], {
    className: menu_module_default.a['custom-menu-toolbar']
  }, __jsx("nav", {
    className: `navbar navbar-dark navbar-expand-lg ${menu_module_default.a['menu-navbar']}`
  }, __jsx("div", {
    className: "container-fluid"
  }, showDrawerToggleButton ? __jsx(core_["IconButton"], {
    style: {
      marginRight: 10,
      outline: 'none'
    },
    color: "inherit",
    "aria-label": "open drawer",
    onClick: () => handleOpenDrawer(true),
    edge: "start"
  }, __jsx(icons_["Menu"], null)) : null, hasInstitutionLogo && hasInstitutionUrl ? __jsx("a", {
    className: `navbar-brand ${menu_module_default.a['custom-navbar-brand']}`,
    href: institutionUrl,
    target: "_blank"
  }, __jsx("div", {
    className: menu_module_default.a['custom-navbar-logo-container']
  }, __jsx("img", {
    src: Object(imageHelper["a" /* getImageUrl */])(institutionLogo),
    className: menu_module_default.a['custom-navbar-logo']
  }))) : __jsx("div", null, hasInstitutionLogo ? __jsx("div", {
    className: menu_module_default.a['custom-navbar-logo-container']
  }, __jsx("img", {
    src: Object(imageHelper["a" /* getImageUrl */])(institutionLogo)
  })) : null), projectHeader ? __jsx("a", {
    className: `navbar-brand ${menu_module_default.a['custom-navbar-brand']}`,
    href: getPageUrl('/'),
    style: {
      marginRight: 20
    }
  }, __jsx(core_["Typography"], {
    variant: "h1",
    className: menu_module_default.a['header-project-label']
  }, projectHeader)) : null, __jsx("button", {
    className: `navbar-toggler ${menu_module_default.a['custom-navbar-toggler']}`,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    onClick: () => toggleMenu()
  })), __jsx("div", {
    className: `collapse navbar-collapse ${menuExpanded ? 'show' : ''}`,
    id: "navbarNav"
  }, __jsx(core_["List"], {
    className: "navbar-nav ml-auto",
    classes: listClasses
  }, (_sortedArray2 = sortedArray(menuItems, 'order')) === null || _sortedArray2 === void 0 ? void 0 : _sortedArray2.map(item => buildMenuItem(item))))))));
};

/* harmony default export */ var menu = (Menu);
// EXTERNAL MODULE: external "react-material-ui-carousel"
var external_react_material_ui_carousel_ = __webpack_require__("uH4x");
var external_react_material_ui_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_material_ui_carousel_);

// EXTERNAL MODULE: ./components/carousel/carousel.module.scss
var carousel_module = __webpack_require__("8s5e");
var carousel_module_default = /*#__PURE__*/__webpack_require__.n(carousel_module);

// CONCATENATED MODULE: ./components/carousel/carousel.tsx

var carousel_jsx = external_react_default.a.createElement;




function ImagesCarousel({
  images,
  showImageCredits
}) {
  return carousel_jsx("div", null, carousel_jsx(external_react_material_ui_carousel_default.a, {
    indicators: false,
    navButtonsAlwaysInvisible: true
  }, images.map((carouselImage, index) => {
    var _carouselImage$captio, _carouselImage$captio2, _carouselImage$captio3, _carouselImage$captio4, _carouselImage$captio5;

    return carousel_jsx("div", {
      key: `carousel-image-${index}`
    }, carousel_jsx("img", {
      className: carousel_module_default.a['carousel-image'],
      src: Object(imageHelper["a" /* getImageUrl */])(carouselImage)
    }), (carouselImage === null || carouselImage === void 0 ? void 0 : carouselImage.caption) ? carousel_jsx("div", {
      className: `carousel-caption ${carousel_module_default.a['custom-carousel-caption']}`
    }, (carouselImage === null || carouselImage === void 0 ? void 0 : (_carouselImage$captio = carouselImage.caption) === null || _carouselImage$captio === void 0 ? void 0 : _carouselImage$captio.header) ? carousel_jsx(core_["Typography"], {
      variant: "h4",
      className: carousel_module_default.a['carousel-caption-header']
    }, (_carouselImage$captio2 = carouselImage === null || carouselImage === void 0 ? void 0 : (_carouselImage$captio3 = carouselImage.caption) === null || _carouselImage$captio3 === void 0 ? void 0 : _carouselImage$captio3.header) !== null && _carouselImage$captio2 !== void 0 ? _carouselImage$captio2 : '') : null, (carouselImage === null || carouselImage === void 0 ? void 0 : (_carouselImage$captio4 = carouselImage.caption) === null || _carouselImage$captio4 === void 0 ? void 0 : _carouselImage$captio4.content) ? carousel_jsx("span", {
      className: carousel_module_default.a['carousel-caption-content']
    }, carouselImage === null || carouselImage === void 0 ? void 0 : (_carouselImage$captio5 = carouselImage.caption) === null || _carouselImage$captio5 === void 0 ? void 0 : _carouselImage$captio5.content) : null) : null, (carouselImage === null || carouselImage === void 0 ? void 0 : carouselImage.imageCreditsLabel) ? carousel_jsx("div", {
      className: carousel_module_default.a['carousel-image-credits-label'],
      onClick: () => showImageCredits(carouselImage === null || carouselImage === void 0 ? void 0 : carouselImage.imageCreditsContent)
    }, carousel_jsx("span", null, carouselImage === null || carouselImage === void 0 ? void 0 : carouselImage.imageCreditsLabel)) : null);
  })));
}
// CONCATENATED MODULE: ./components/header/header.tsx
var header_jsx = external_react_["createElement"];



function Header({
  config,
  menuItems = [],
  carouselImages,
  fixedHeader = false,
  transparentHeader = false,
  openImageCreditsDialog,
  showDrawerToggleButton,
  openDrawer
}) {
  var _config$projectHeader, _config$institutionHe, _config$institutionLo;

  const hasCarouselImages = !!carouselImages && carouselImages.length > 0;
  return header_jsx("div", null, header_jsx(menu, {
    handleOpenDrawer: openDrawer,
    showDrawerToggleButton: showDrawerToggleButton,
    projectHeader: (_config$projectHeader = config === null || config === void 0 ? void 0 : config.projectHeader) !== null && _config$projectHeader !== void 0 ? _config$projectHeader : '',
    institutionHeader: (_config$institutionHe = config === null || config === void 0 ? void 0 : config.institutionHeader) !== null && _config$institutionHe !== void 0 ? _config$institutionHe : '',
    institutionLogo: (_config$institutionLo = config === null || config === void 0 ? void 0 : config.institutionLogo) !== null && _config$institutionLo !== void 0 ? _config$institutionLo : '',
    institutionUrl: config === null || config === void 0 ? void 0 : config.institutionUrl,
    menuItems: menuItems,
    fixed: fixedHeader,
    transparent: transparentHeader
  }), hasCarouselImages ? header_jsx(ImagesCarousel, {
    images: carouselImages,
    showImageCredits: openImageCreditsDialog
  }) : null);
}
// EXTERNAL MODULE: ./components/page/page.module.scss
var page_module = __webpack_require__("BShw");
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var external_ant_design_icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./config.ts
const accentColors = {
  yellow: '#ffc500',
  blue: '#84bbf8',
  lavender: '#657be1',
  green: '#33b080',
  grey: '#b2b3b3',
  orange: '#ed8048'
};
const hippocampus = {
  org: 'public',
  project: 'hippocampus-hub',
  datasetViewId: encodeURIComponent('https://bbp.epfl.ch/neurosciencegraph/data/views/es/dataset')
};
const deploymentUrl = 'https://hippocampushub.eu';
const basePath = '/build';
const isServer = true;
const isProduction = true;
const nexus = {
  url: process.env.NEXT_PUBLIC_NEXUS_URL,
  token: process.env.NEXT_PUBLIC_NEXUS_TOKEN
};
const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
const nexusPluginBaseUrl = process.env.NEXT_PUBLIC_NEXUS_PLUGIN_BASE_URL;
const feedbackUrl = "https://feedback-proxy-bsp-epfl.apps.hbp.eu";
const gtm = {
  id: 'G-SGZ83Y6E8H',
  cookiePrefsKey: 'bbpCookiePreferences'
};
// EXTERNAL MODULE: ./components/feedback/styles.module.scss
var styles_module = __webpack_require__("Lcuf");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./components/feedback/index.tsx
var feedback_jsx = external_react_default.a.createElement;






const {
  TextArea
} = external_antd_["Input"];
const {
  Option
} = external_antd_["Select"];
const FEEDBACK_CONTACT_KEY = 'feedbackContact';
const storage = false ? undefined : null;

const Feedback = () => {
  var _storage$getItem;

  const router = Object(router_["useRouter"])();
  const {
    0: formVisible,
    1: setFormVisible
  } = Object(external_react_["useState"])(false);
  const issueSelectRef = Object(external_react_["useRef"])(null);
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])(null);
  const {
    0: component,
    1: setComponent
  } = Object(external_react_["useState"])('');
  const {
    0: details,
    1: setDetails
  } = Object(external_react_["useState"])('');
  const {
    0: contact,
    1: setContact
  } = Object(external_react_["useState"])((_storage$getItem = storage === null || storage === void 0 ? void 0 : storage.getItem(FEEDBACK_CONTACT_KEY)) !== null && _storage$getItem !== void 0 ? _storage$getItem : '');
  const {
    0: sending,
    1: setSending
  } = Object(external_react_["useState"])(false);
  const {
    0: responseStatus,
    1: setResponseStatus
  } = Object(external_react_["useState"])(null);

  const onContactChange = value => {
    storage === null || storage === void 0 ? void 0 : storage.setItem(FEEDBACK_CONTACT_KEY, value);
    setContact(value);
  };

  const showForm = () => {
    var _issueSelectRef$curre;

    setFormVisible(true);
    issueSelectRef === null || issueSelectRef === void 0 ? void 0 : (_issueSelectRef$curre = issueSelectRef.current) === null || _issueSelectRef$curre === void 0 ? void 0 : _issueSelectRef$curre.focus();
  };

  const closeForm = () => {
    setFormVisible(false);
    setTimeout(() => {
      setType(null);
      setComponent('');
      setDetails('');
      setResponseStatus(null);
    }, 200);
  };

  const sendFeedback = async () => {
    setResponseStatus(null);
    setSending(true);
    const pageUrl = `${deploymentUrl}${router.basePath}${router.asPath}`;
    const labels = ['triage'];

    if (router.basePath.startsWith('/model')) {
      labels.push('section: explore');
    } else if (router.basePath.startsWith('/build')) {
      labels.push('section: build');
    }

    try {
      const res = await fetch(`${feedbackUrl}/hippocampushub/hh-feedback`, {
        method: 'POST',
        body: JSON.stringify({
          labels,
          title: details.slice(0, 100),
          body: [`Field | Element`, `--- | ---`, `Issue type | ${type || '--'}`, `Page URL | [${router.asPath}](${pageUrl})`, `Component | ${component || '--'}`, `Contact | ${contact || '--'}`, ``, `${details.slice(100)}`].join('\n')
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        setResponseStatus('success');
        setTimeout(closeForm, 1000);
      } else setResponseStatus('error');

      setSending(false);
    } catch (e) {
      setResponseStatus('error');
    } finally {
      setSending(false);
    }
  };

  return feedback_jsx("div", {
    className: `${formVisible ? styles_module_default.a.formVisible : ''}`
  }, feedback_jsx("div", {
    className: styles_module_default.a.feedbackButton,
    onClick: showForm
  }, "Feedback"), feedback_jsx("div", {
    id: "feedbackForm",
    className: styles_module_default.a.form
  }, feedback_jsx("div", {
    className: styles_module_default.a.closeBtn
  }, feedback_jsx(external_antd_["Button"], {
    shape: "circle",
    type: "primary",
    danger: true,
    icon: feedback_jsx(external_ant_design_icons_["CloseOutlined"], null),
    onClick: closeForm
  })), feedback_jsx(external_antd_["Form"], {
    size: "small",
    onSubmitCapture: sendFeedback
  }, feedback_jsx(external_antd_["Form"].Item, null, feedback_jsx(external_antd_["Select"], {
    placeholder: "Feedback type (optional)",
    ref: issueSelectRef,
    disabled: sending,
    getPopupContainer: () => document.getElementById('feedbackForm'),
    value: type,
    onChange: value => setType(value)
  }, feedback_jsx(Option, {
    value: "content"
  }, "Content"), feedback_jsx(Option, {
    value: "layout"
  }, "Layout, UI"), feedback_jsx(Option, {
    value: "navigation"
  }, "Navigation, UX"))), feedback_jsx(external_antd_["Form"].Item, null, feedback_jsx(external_antd_["Input"], {
    placeholder: "Component / page section (optional)",
    prefix: feedback_jsx(external_ant_design_icons_["GatewayOutlined"], null),
    disabled: sending,
    value: component,
    onChange: e => setComponent(e.target.value)
  })), feedback_jsx(external_antd_["Form"].Item, null, feedback_jsx(TextArea, {
    placeholder: "Tell us about your experience...",
    rows: 4,
    disabled: sending,
    autoSize: {
      minRows: 4,
      maxRows: 4
    },
    value: details,
    onChange: e => setDetails(e.target.value)
  })), feedback_jsx(external_antd_["Form"].Item, null, feedback_jsx(external_antd_["Input"], {
    placeholder: "Contact name / email (optional)",
    prefix: feedback_jsx(external_ant_design_icons_["UserOutlined"], null),
    disabled: sending,
    value: contact,
    onChange: e => onContactChange(e.target.value),
    onPressEnter: sendFeedback
  })), feedback_jsx(external_antd_["Form"].Item, {
    className: "text-right mb-0"
  }, responseStatus === 'success' && feedback_jsx("span", {
    className: "mr-1"
  }, "Sent, thank you!"), responseStatus === 'error' && feedback_jsx("span", {
    className: "mr-1 text-red"
  }, "Oops, something went wrong"), feedback_jsx(external_antd_["Button"], {
    className: styles_module_default.a.sendBtn,
    type: "primary",
    danger: true,
    disabled: !details || responseStatus === 'success',
    loading: sending,
    onClick: sendFeedback
  }, sending ? 'Sending' : 'Send')))));
};

/* harmony default export */ var feedback = (Feedback);
// EXTERNAL MODULE: ./components/footer/footer.module.scss
var footer_module = __webpack_require__("n5M9");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// EXTERNAL MODULE: ./components/sanitizedHtml.tsx
var sanitizedHtml = __webpack_require__("Uv/k");

// CONCATENATED MODULE: ./components/footer/footer.tsx

var footer_jsx = external_react_default.a.createElement;




function Footer({
  footer
}) {
  var _footer$header, _footer$rows, _footer$copyright;

  return footer_jsx("footer", {
    className: footer_module_default.a['footer']
  }, footer_jsx("div", {
    className: "container"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-12"
  }, footer_jsx(core_["Typography"], {
    variant: "h5",
    className: footer_module_default.a['footer-header']
  }, !!(footer === null || footer === void 0 ? void 0 : footer.logo) ? footer_jsx("div", {
    className: footer_module_default.a['footer-logo-container']
  }, footer_jsx("img", {
    src: Object(imageHelper["a" /* getImageUrl */])(footer === null || footer === void 0 ? void 0 : footer.logo),
    className: footer_module_default.a['footer-logo']
  })) : null, " ", footer_jsx(sanitizedHtml["a" /* SanitizedHtml */], {
    content: (_footer$header = footer === null || footer === void 0 ? void 0 : footer.header) !== null && _footer$header !== void 0 ? _footer$header : ''
  })))), footer === null || footer === void 0 ? void 0 : (_footer$rows = footer.rows) === null || _footer$rows === void 0 ? void 0 : _footer$rows.map(row => footer_jsx("div", {
    className: 'row',
    style: {
      marginTop: 20
    }
  }, row === null || row === void 0 ? void 0 : row.columns.map(column => {
    var _column$content;

    return footer_jsx(sanitizedHtml["a" /* SanitizedHtml */], {
      content: (_column$content = column === null || column === void 0 ? void 0 : column.content) !== null && _column$content !== void 0 ? _column$content : '',
      className: `col ${footer_module_default.a['footer-column']}`
    });
  }))), footer_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, footer_jsx("div", {
    className: "col-12"
  }, footer_jsx(core_["Typography"], {
    variant: "h5",
    className: footer_module_default.a['footer-copyright']
  }, (_footer$copyright = footer === null || footer === void 0 ? void 0 : footer.copyright) !== null && _footer$copyright !== void 0 ? _footer$copyright : '')))));
}
// EXTERNAL MODULE: ./helpers/dataHelper.ts
var dataHelper = __webpack_require__("hDQs");

// EXTERNAL MODULE: ./components/tos-overlay/tos.module.scss
var tos_module = __webpack_require__("FKRD");

// EXTERNAL MODULE: ./components/buttons/buttons.tsx
var buttons = __webpack_require__("YK1M");

// CONCATENATED MODULE: ./components/tos-overlay/tosOverlay.tsx
var tosOverlay_jsx = external_react_["createElement"];




function TosOverlay({
  tos,
  agreeTos
}) {
  var _tos$content;

  return tosOverlay_jsx("div", {
    className: tos_module["tos-overlay-container"]
  }, tosOverlay_jsx("div", {
    className: tos_module["tos-overlay-main-container"]
  }, tosOverlay_jsx("div", {
    className: "container-fluid"
  }, tosOverlay_jsx("div", {
    className: "row"
  }, tosOverlay_jsx("div", {
    className: "col-12"
  }, tosOverlay_jsx(sanitizedHtml["a" /* SanitizedHtml */], {
    content: (_tos$content = tos === null || tos === void 0 ? void 0 : tos.content) !== null && _tos$content !== void 0 ? _tos$content : '',
    style: {
      fontSize: 26
    }
  })), tosOverlay_jsx("div", {
    className: "col-12 text-right",
    style: {
      marginTop: 50
    }
  }, tosOverlay_jsx(buttons["a" /* CustomButton */], {
    style: {
      margin: '0 auto'
    },
    onClick: agreeTos
  }, "I Agree"))))));
}
// EXTERNAL MODULE: ./constants/tos.constants.ts
var tos_constants = __webpack_require__("2CrO");

// CONCATENATED MODULE: ./actions/tos.actions.ts


function tosAgree() {
  return {
    type: tos_constants["a" /* default */].AGREE_TOS
  };
}


// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// CONCATENATED MODULE: ./components/page/pageContainer.tsx
var pageContainer_jsx = external_react_["createElement"];














function _PageContainer(props, ref) {
  var _pageStyle, _props$variant, _props$fixedHeader, _props$transparentHea, _config$tos;

  const {
    children,
    title = 'Hippocampus Facility Hub',
    headerCarousel,
    showDrawerToggleButton,
    openDrawer
  } = props;
  const [menuItems, setMenuItems] = external_react_["useState"]([]);
  const [config, setConfig] = external_react_["useState"]({});
  const [loading, setLoading] = external_react_["useState"](true);

  const setup = async () => {
    const _menuItems = await Object(dataHelper["c" /* getMenuItems */])();

    const _config = await Object(dataHelper["a" /* getConfig */])();

    setMenuItems(_menuItems);
    setConfig(_config);
    setLoading(false);
  };

  Object(external_react_["useEffect"])(() => {
    setup();
  }, []);

  const _agreeTos = () => {
    if (!!(props === null || props === void 0 ? void 0 : props.tosAgree)) {
      props === null || props === void 0 ? void 0 : props.tosAgree();
    }
  };

  return pageContainer_jsx("div", {
    className: `${page_module_default.a.page} ${(_pageStyle = page_module_default.a[(_props$variant = props === null || props === void 0 ? void 0 : props.variant) !== null && _props$variant !== void 0 ? _props$variant : 'light']) !== null && _pageStyle !== void 0 ? _pageStyle : ''}`
  }, pageContainer_jsx(head_default.a, null, pageContainer_jsx("title", null, title), pageContainer_jsx("meta", {
    httpEquiv: "Content-Security-Policy",
    content: "upgrade-insecure-requests"
  }), pageContainer_jsx("meta", {
    name: "robots",
    content: "noindex,nofollow"
  }), pageContainer_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap",
    rel: "stylesheet"
  }), pageContainer_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    rel: "stylesheet"
  }), pageContainer_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
    rel: "stylesheet"
  }), pageContainer_jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), pageContainer_jsx("link", {
    rel: "stylesheet",
    href: "https://www.hippocampushub.eu/shared_css/main.min.css"
  }), props.tosAgreed ? pageContainer_jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-SGZ83Y6E8H",
    type: "text/javascript"
  }) : null, props.tosAgreed ? pageContainer_jsx("script", {
    async: true,
    src: `${constants["a" /* default */].BASE_URL}/assets/js/analytics.js`,
    type: "text/javascript"
  }) : null), pageContainer_jsx("div", {
    className: `container-fluid ${page_module_default.a['main-page-container']}`
  }, pageContainer_jsx(Header, {
    config: config.header,
    carouselImages: headerCarousel,
    menuItems: menuItems,
    showDrawerToggleButton: showDrawerToggleButton,
    openDrawer: openDrawer,
    fixedHeader: (_props$fixedHeader = props.fixedHeader) !== null && _props$fixedHeader !== void 0 ? _props$fixedHeader : false,
    transparentHeader: (_props$transparentHea = props.transparentHeader) !== null && _props$transparentHea !== void 0 ? _props$transparentHea : false,
    openImageCreditsDialog: props === null || props === void 0 ? void 0 : props.openImageCreditsDialog
  }), pageContainer_jsx("div", null, pageContainer_jsx("main", {
    className: `${page_module_default.a['main-container']} ${!!(props === null || props === void 0 ? void 0 : props.mainClassName) ? page_module_default.a[props === null || props === void 0 ? void 0 : props.mainClassName] : ''}`
  }, children, pageContainer_jsx(feedback, null)))), !(props === null || props === void 0 ? void 0 : props.tosAgreed) && !loading ? pageContainer_jsx(TosOverlay, {
    tos: (_config$tos = config === null || config === void 0 ? void 0 : config.tos) !== null && _config$tos !== void 0 ? _config$tos : null,
    agreeTos: props.agreeTos
  }) : null, pageContainer_jsx(Footer, {
    footer: config.footer
  }));
}

const mapStateToProps = (state, props) => {
  var _state$tos$agree, _state$tos;

  return {
    tosAgreed: (_state$tos$agree = state === null || state === void 0 ? void 0 : (_state$tos = state.tos) === null || _state$tos === void 0 ? void 0 : _state$tos.agree) !== null && _state$tos$agree !== void 0 ? _state$tos$agree : false
  };
};

const mapDispatchToProps = dispatch => ({
  agreeTos: () => dispatch(tosAgree())
});

const PageContainer = /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => _PageContainer(props, ref));
/* harmony default export */ var pageContainer = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(PageContainer));

/***/ }),

/***/ "Uv/k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizedHtml; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1Tbd");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SanitizedHtml({
  content,
  style,
  className
}) {
  return __jsx("div", {
    style: style !== null && style !== void 0 ? style : {},
    className: className !== null && className !== void 0 ? className : '',
    dangerouslySetInnerHTML: {
      __html: sanitize_html__WEBPACK_IMPORTED_MODULE_1___default()(content !== null && content !== void 0 ? content : '')
    }
  });
}

/***/ }),

/***/ "Vbgd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filter-box": "filter_filter-box__YSPnz",
	"dark": "filter_dark__3ZLNS",
	"select-box": "filter_select-box__30nzI"
};


/***/ }),

/***/ "X+dj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"default-header": "menu_default-header__3x-As",
	"fixed-header": "menu_fixed-header__2qctv",
	"transparent": "menu_transparent__3F4dc",
	"custom-menu-toolbar": "menu_custom-menu-toolbar__1Xm7m",
	"header-institution-label": "menu_header-institution-label__8O8Jp",
	"header-project-label": "menu_header-project-label__iTke5",
	"menu-navbar": "menu_menu-navbar__30Fjv",
	"list-item": "menu_list-item__24k9z",
	"link": "menu_link__1OlPi",
	"active": "menu_active__1lIOc",
	"custom-dropdown-menu": "menu_custom-dropdown-menu__13cn2",
	"custom-dropdown-menu-list": "menu_custom-dropdown-menu-list__1yNXv",
	"sub-list-item": "menu_sub-list-item__EK5ae",
	"circle-item": "menu_circle-item__HDle-",
	"custom-navbar-brand": "menu_custom-navbar-brand__2m98w",
	"custom-navbar-logo-container": "menu_custom-navbar-logo-container__NPhkp",
	"custom-navbar-logo": "menu_custom-navbar-logo__1QSKG",
	"custom-navbar-toggler": "menu_custom-navbar-toggler__37Bgr"
};


/***/ }),

/***/ "Y9L4":
/***/ (function(module, exports) {



/***/ }),

/***/ "YK1M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZRd");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



``;
function CustomButton({
  children,
  onClick,
  style,
  isCta,
  variant = 'primary'
}) {
  return __jsx("span", {
    className: `button-${variant} ${_button_module_scss__WEBPACK_IMPORTED_MODULE_2__["custom-button"]} text-center`,
    style: style,
    onClick: onClick
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: `${_button_module_scss__WEBPACK_IMPORTED_MODULE_2__["children-container"]} ${isCta ? _button_module_scss__WEBPACK_IMPORTED_MODULE_2__["cta-container"] : ''}`
  }, children), isCta ? __jsx("div", {
    className: `${_button_module_scss__WEBPACK_IMPORTED_MODULE_2__["arrow-container"]} text-center`
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"], {
    htmlColor: '#fff',
    fontSize: "small"
  })) : null));
}

/***/ }),

/***/ "Z7bq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ItemsCountBaloon; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/baloons/baloon.module.scss
var baloon_module = __webpack_require__("L6ga");
var baloon_module_default = /*#__PURE__*/__webpack_require__.n(baloon_module);

// CONCATENATED MODULE: ./components/baloons/baloon.tsx
var __jsx = external_react_["createElement"];


function Baloon({
  children
}) {
  return __jsx("div", {
    className: baloon_module_default.a['baloon-container']
  }, children);
}
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/baloons/itemsCountBaloon.tsx
var itemsCountBaloon_jsx = external_react_["createElement"];



const useBaloonLabelStyles = Object(core_["makeStyles"])(theme => ({
  label: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    marginRight: 5
  }
}));
function ItemsCountBaloon({
  label,
  count
}) {
  const baloonStyles = useBaloonLabelStyles();
  return itemsCountBaloon_jsx("div", null, itemsCountBaloon_jsx("span", {
    className: baloonStyles.label
  }, label), itemsCountBaloon_jsx(Baloon, null, count));
}

/***/ }),

/***/ "Zq3K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DialogContainer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./helpers/validatorHelper.ts
var validatorHelper = __webpack_require__("rqmy");

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// EXTERNAL MODULE: ./components/dialogs/dialog.module.scss
var dialog_module = __webpack_require__("6cUu");
var dialog_module_default = /*#__PURE__*/__webpack_require__.n(dialog_module);

// CONCATENATED MODULE: ./style/style.tsx

const useIconButtonStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    outline: 'none',
    '&:hover, &:focus': {
      outline: 'none'
    }
  }
}));

// EXTERNAL MODULE: ./components/buttons/buttons.tsx
var buttons = __webpack_require__("YK1M");

// CONCATENATED MODULE: ./components/dialogs/dialogContainer.tsx
var __jsx = external_react_["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const useDialogStyles = height => Object(core_["makeStyles"])(theme => ({
  paper: {
    borderTop: '10px solid #333',
    borderRadius: 10,
    height: height !== null && height !== void 0 ? height : 'auto'
  }
}));

function DialogContainer(_ref) {
  let {
    open,
    title,
    subtitle,
    children,
    actions,
    height,
    onClose
  } = _ref,
      props = _objectWithoutProperties(_ref, ["open", "title", "subtitle", "children", "actions", "height", "onClose"]);

  const classes = useDialogStyles(height)();
  const iconButtonStyles = useIconButtonStyles();
  return __jsx(core_["Dialog"], _extends({
    classes: classes,
    open: open
  }, props), __jsx(core_["DialogTitle"], null, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-10"
  }, Object(validatorHelper["b" /* checkIfNotEmpty */])(title) ? __jsx("p", {
    className: dialog_module_default.a['dialog-title']
  }, title) : null, Object(validatorHelper["b" /* checkIfNotEmpty */])(subtitle) ? __jsx("p", {
    className: dialog_module_default.a['dialog-subtitle']
  }, external_html_react_parser_default()(subtitle)) : null), __jsx("div", {
    className: "col-2 text-right"
  }, __jsx(core_["IconButton"], {
    onClick: onClose,
    className: iconButtonStyles.root
  }, __jsx(icons_["Close"], null))))), __jsx(core_["DialogContent"], null, children), !!actions && actions.length > 0 ? __jsx(core_["DialogActions"], null, actions === null || actions === void 0 ? void 0 : actions.map(item => __jsx(buttons["a" /* CustomButton */], {
    onClick: () => item.onClick()
  }, item.label))) : null);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHt3":
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "d0Tl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getImageUrlByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImageUrl; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("N39q");


function getImageUrlByPath(path) {
  if (!path) return null;
  if (path.startsWith('https')) return path;
  if (path.startsWith('http')) return path;
  const imagePath = `${_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_URL}${path}`;
  return imagePath;
}

function getImageUrl(image) {
  if (!image || !image.url) return null;
  if (image.url.startsWith('http')) return image.url;
  const imagePath = `${_constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_URL}${image.url}`;
  return imagePath;
}



/***/ }),

/***/ "dvUc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hodgkin-huxley-baloon": "hodgkin-huxley-baloon_hodgkin-huxley-baloon__1R4IV",
	"dark": "hodgkin-huxley-baloon_dark__3C_1v",
	"hodgkin-huxley-baloon-header-label": "hodgkin-huxley-baloon_hodgkin-huxley-baloon-header-label__Ooc-7",
	"hodgkin-huxley-baloon-label": "hodgkin-huxley-baloon_hodgkin-huxley-baloon-label__2KvqN"
};


/***/ }),

/***/ "gXil":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HodgkinHuxleyBaloon; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/buttons/buttons.tsx
var buttons = __webpack_require__("YK1M");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__("N39q");

// EXTERNAL MODULE: ./components/hodgkin-huxley-baloon/index.module.scss
var index_module = __webpack_require__("dvUc");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: ./components/tags/tagView.module.scss
var tagView_module = __webpack_require__("KJnk");

// CONCATENATED MODULE: ./components/tags/tagView.tsx
var __jsx = external_react_["createElement"];




const useIconButtonStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    padding: 0,
    outline: 'none',
    ['&:focus']: {
      outline: 'none'
    }
  }
}));
function TagView({
  label,
  item,
  onRemoveClicked
}) {
  const buttonClasses = useIconButtonStyles();
  return __jsx("div", {
    className: tagView_module["tag-view"]
  }, __jsx("span", {
    className: tagView_module["tag-view-label"]
  }, label), __jsx(core_["IconButton"], {
    className: buttonClasses.root,
    onClick: () => onRemoveClicked(item)
  }, __jsx(icons_["Close"], {
    htmlColor: '#fff',
    fontSize: 'small'
  })));
}
// EXTERNAL MODULE: ./helpers/hashHelper.ts
var hashHelper = __webpack_require__("v1Az");

// CONCATENATED MODULE: ./components/hodgkin-huxley-baloon/index.tsx
var hodgkin_huxley_baloon_jsx = external_react_["createElement"];







const useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    zIndex: 10
  }
}));
function HodgkinHuxleyBaloon({
  morphology,
  electrophysiologies,
  modFiles,
  removeMorphology,
  removeElectrophysiology,
  removeModFile,
  clear,
  variant
}) {
  const classes = useStyles();

  const _sendToHodgkinHuxley = () => {
    const HFFComm = {};

    if (!!morphology) {
      var _morphology$url;

      const fileUrlSplitted = ((_morphology$url = morphology === null || morphology === void 0 ? void 0 : morphology.url) !== null && _morphology$url !== void 0 ? _morphology$url : '').split('.');
      const fileExtension = fileUrlSplitted.length > 1 ? fileUrlSplitted[fileUrlSplitted.length - 1] : '';
      HFFComm.morphology = {
        name: encodeURIComponent(`${morphology === null || morphology === void 0 ? void 0 : morphology.name}`),
        url: encodeURIComponent(morphology === null || morphology === void 0 ? void 0 : morphology.url)
      };
    }

    if (!!electrophysiologies) {
      HFFComm.electrophysiologies = electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.map(item => {
        var _item$metadata$url, _item$metadata;

        return {
          name: encodeURIComponent(item === null || item === void 0 ? void 0 : item.name),
          url: encodeURIComponent(item === null || item === void 0 ? void 0 : item.url),
          metadata: encodeURIComponent((_item$metadata$url = item === null || item === void 0 ? void 0 : (_item$metadata = item.metadata) === null || _item$metadata === void 0 ? void 0 : _item$metadata.url) !== null && _item$metadata$url !== void 0 ? _item$metadata$url : null)
        };
      });
    }

    if (!!modFiles && (modFiles === null || modFiles === void 0 ? void 0 : modFiles.length) > 0) {
      HFFComm.modFiles = modFiles === null || modFiles === void 0 ? void 0 : modFiles.map(item => ({
        name: encodeURIComponent(item === null || item === void 0 ? void 0 : item.label),
        url: encodeURIComponent(item === null || item === void 0 ? void 0 : item.url)
      }));
    }

    if (!!window) {
      let url = `${constants["a" /* default */].HODGKIN_HUXLEY_BASE_URL}/`;

      if (Object.keys(HFFComm).length > 0) {
        url += `hhf-comm?hhf_dict=${JSON.stringify({
          [constants["a" /* default */].HHF_COMM]: HFFComm
        })}`;
      }

      window.open(url);
    } //_clear();

  };

  const _onRemoveMorphology = () => {
    if (!!removeMorphology) {
      removeMorphology();
    }
  };

  const _onRemoveElectrophysiology = item => {
    if (!!removeElectrophysiology) {
      removeElectrophysiology(item);
    }
  };

  const _onRemoveModFile = item => {
    if (!!removeModFile) {
      removeModFile(item);
    }
  };

  const _clear = () => {
    if (!!clear) {
      clear();
    }
  };

  const hasMorphology = !!morphology;
  const hasElectrophysiology = !!electrophysiologies && (electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.length) > 0;
  const hasModFiles = !!modFiles && (modFiles === null || modFiles === void 0 ? void 0 : modFiles.length) > 0;
  return hodgkin_huxley_baloon_jsx("div", null, hodgkin_huxley_baloon_jsx(core_["Card"], {
    classes: classes
  }, hodgkin_huxley_baloon_jsx("div", {
    className: `${index_module["hodgkin-huxley-baloon"]} ${!!variant ? index_module[variant] : null}`
  }, hodgkin_huxley_baloon_jsx("div", {
    className: "row"
  }, hodgkin_huxley_baloon_jsx("div", {
    className: "col-12"
  }, hodgkin_huxley_baloon_jsx(core_["Typography"], {
    className: index_module["hodgkin-huxley-baloon-header-label"],
    variant: "subtitle1"
  }, "Hodgkin-Huxley Neuron Builder")), hodgkin_huxley_baloon_jsx("div", {
    className: "col-6"
  }, hasMorphology ? hodgkin_huxley_baloon_jsx("div", {
    className: "row"
  }, hodgkin_huxley_baloon_jsx("div", {
    className: "col-12"
  }, hodgkin_huxley_baloon_jsx("span", {
    className: index_module["hodgkin-huxley-baloon-label"]
  }, "Morphology:"), hodgkin_huxley_baloon_jsx(TagView, {
    label: morphology === null || morphology === void 0 ? void 0 : morphology.name,
    item: morphology,
    onRemoveClicked: _onRemoveMorphology
  }))) : null, hasElectrophysiology ? hodgkin_huxley_baloon_jsx("div", {
    className: "row"
  }, hodgkin_huxley_baloon_jsx("div", {
    className: "col-12"
  }, hodgkin_huxley_baloon_jsx("span", {
    className: index_module["hodgkin-huxley-baloon-label"]
  }, "Electrophysiologies:"), electrophysiologies === null || electrophysiologies === void 0 ? void 0 : electrophysiologies.map(item => hodgkin_huxley_baloon_jsx(TagView, {
    key: `electrophysiology-${Object(hashHelper["a" /* hashCode */])(JSON.stringify(item))}`,
    label: item === null || item === void 0 ? void 0 : item.name,
    item: item,
    onRemoveClicked: _onRemoveElectrophysiology
  })))) : null, hasModFiles ? hodgkin_huxley_baloon_jsx("div", {
    className: "row",
    style: {
      marginTop: 20
    }
  }, hodgkin_huxley_baloon_jsx("div", {
    className: "col-12"
  }, hodgkin_huxley_baloon_jsx("span", {
    className: index_module["hodgkin-huxley-baloon-label"]
  }, "Mod File(s):"), modFiles === null || modFiles === void 0 ? void 0 : modFiles.map(item => hodgkin_huxley_baloon_jsx(TagView, {
    key: `model-${Object(hashHelper["a" /* hashCode */])(JSON.stringify(item))}`,
    label: item === null || item === void 0 ? void 0 : item.label,
    item: item,
    onRemoveClicked: _onRemoveModFile
  })))) : null), hodgkin_huxley_baloon_jsx("div", {
    className: "col-6 text-right"
  }, hodgkin_huxley_baloon_jsx(buttons["a" /* CustomButton */], {
    onClick: () => _sendToHodgkinHuxley(),
    style: {
      float: 'right',
      fontSize: 12
    },
    isCta: true
  }, "Launch HH Neuron Builder"), hasMorphology || hasModFiles ? hodgkin_huxley_baloon_jsx(buttons["a" /* CustomButton */], {
    onClick: () => _clear(),
    style: {
      float: 'right',
      fontSize: 12,
      marginRight: 20
    },
    isCta: true
  }, "CLEAR ALL") : null)))));
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hDQs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export STATUS_CODES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHomePage; });
/* unused harmony export getHomePage2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPage; });
/* unused harmony export getPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getNewsList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("N39q");


const STATUS_CODES = {
  OK: 200
};

const parseResponse = response => {
  if (!!response && response.status === 200) {
    if (!!response.data) {
      return response.data;
    }
  }

  return null;
};

const getJSONData = async url => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    const data = parseResponse(response);
    return data !== null && data !== void 0 ? data : {};
  } catch (error) {
    return {};
  }
};

const getJSONArrayData = async url => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    const data = parseResponse(response);
    return data !== null && data !== void 0 ? data : [];
  } catch (error) {
    return [];
  }
};

const getConfig = async () => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.config}.json`;
  return getJSONData(url);
};

const getMenuItems = async () => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.menuItems}.json`;
  return getJSONArrayData(url);
};

const getNewsList = async () => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.news}.json`;
  return getJSONData(url);
};

const getHomePage = async () => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.homePage}.json`;
  return getJSONData(url);
};

const getHomePage2 = async () => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.homePage2}.json`;
  return getJSONData(url);
};

const getPage = async slug => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.pages}/${slug}.json`;
  return getJSONData(url);
};

const getPost = async slug => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.posts}/${slug}.json`;
  return getJSONData(url);
};

const getModels = async () => {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].BASE_DATA_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ENDPOINTS.models}.json`;
  return getJSONArrayData(url);
};

const sendMessage = async (name, email, message) => {};



/***/ }),

/***/ "jXXI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZRd");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const ExpandButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => // @ts-ignore
__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({}, props, {
  ref: ref,
  onClick: props === null || props === void 0 ? void 0 : props.onClick,
  className: `${_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['expand-button']}`
}), (props === null || props === void 0 ? void 0 : props.expanded) ? __jsx("div", null, props === null || props === void 0 ? void 0 : props.icon, " ", props === null || props === void 0 ? void 0 : props.label) : __jsx("div", null, props === null || props === void 0 ? void 0 : props.icon)));
/* harmony default export */ __webpack_exports__["a"] = (ExpandButton);

/***/ }),

/***/ "kzYg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return searchDatasets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return searchModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return downloadAllDatasets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return downloadDatasets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return downloadAllModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return downloadModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return verifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkMorphologyForShow; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("N39q");
var _process$env$BACKEND_;



const BACKEND_URL = (_process$env$BACKEND_ = "http://facility-hub.cineca.it:17895") !== null && _process$env$BACKEND_ !== void 0 ? _process$env$BACKEND_ : 'http://localhost:5000';
const endpoints = {
  auth: {
    login: '/auth/login',
    verifyToken: '/auth/verifyToken'
  },
  search: {
    filters: indexName => `/filters/${indexName}`,
    types: indexName => `/types/${indexName}`,
    datasets: () => '/search/dataset',
    models: () => '/search/model'
  },
  download: {
    datasets: () => '/download/dataset',
    models: () => '/download/model'
  }
};

const _parseSuccessfullResponse = response => {
  try {
    if (!!response && response.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    throw error;
  }
};

const searchDatasets = async ({
  data_type = null,
  query,
  filters,
  page = 0,
  hitsPerPage = 20
}) => {
  const url = `${BACKEND_URL}${endpoints.search.datasets()}/${page}/${hitsPerPage}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
      data_type,
      query,
      filters
    });
    return _parseSuccessfullResponse(response);
  } catch (error) {
    console.error('@@@@error retrieving datasets');
    console.error(error);
  }
};

const searchModels = async ({
  query,
  filters,
  page = 0,
  hitsPerPage = 20
}) => {
  const url = `${BACKEND_URL}${endpoints.search.models()}/${page}/${hitsPerPage}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
      query,
      filters
    });
    return _parseSuccessfullResponse(response);
  } catch (error) {
    console.error('@@@@error retrieving datasets');
    console.error(error);
  }
};

const getFilters = async ({
  indexName,
  type
}) => {
  let url = `${BACKEND_URL}${endpoints.search.filters(indexName)}`;

  if (!!type) {
    url = `${url}/${type}`;
  }

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return _parseSuccessfullResponse(response);
  } catch (error) {
    console.error('@@@@error retrieving data filters');
    console.error(error);
  }
};

const getTypes = async indexName => {
  const url = `${BACKEND_URL}${endpoints.search.types(indexName)}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return _parseSuccessfullResponse(response);
  } catch (error) {
    console.error('@@@@@error retrieving data types');
    console.error(error);
  }
};

const downloadAllDatasets = type => {
  let url = `${BACKEND_URL}${endpoints.download.datasets()}/all`;

  if (!!type && type.trim().length > 0) {
    url += `?data_type=${type}`;
  }

  return url;
};

const downloadDatasets = (ids = []) => {
  const url = `${BACKEND_URL}${endpoints.download.datasets()}?ids=${ids.join(',')}`;
  return url;
};

const downloadAllModels = () => {
  const url = `${BACKEND_URL}${endpoints.download.datasets()}/all`;
  return url;
};

const downloadModels = (ids = []) => {
  const url = `${BACKEND_URL}${endpoints.download.datasets()}?ids=${ids.join(',')}`;
  return url;
};

const checkMorphologyForShow = async modelUrl => {
  try {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].MORPHOLOGY_VIEWER_BASE_URL}${modelUrl}`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return !!response && !!response.status && response.status === 200;
  } catch (error) {//console.error('@@@@@error retrieving data types');
    //console.error(error)
  }

  return false;
};

const login = async (username, password) => {
  const url = `${BACKEND_URL}${endpoints.auth.login}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
      username,
      password
    });

    if (response.status === 200) {
      return {
        success: true
      };
    }

    return {
      error: 'Something was wrong'
    };
  } catch (error) {
    return {
      error
    };
  }
};

const verifyToken = async token => {
  const url = `${BACKEND_URL}${endpoints.auth.verifyToken}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
      token
    });

    if (response.status === 200) {
      return {
        success: true
      };
    }

    return {
      error: 'Something was wrong'
    };
  } catch (error) {
    return {
      error
    };
  }
};



/***/ }),

/***/ "n5M9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__R8q5Y",
	"footer-logo-container": "footer_footer-logo-container__2ID3S",
	"footer-logo": "footer_footer-logo__3XZbF",
	"footer-image": "footer_footer-image__StbLA",
	"footer-header": "footer_footer-header__2haHO",
	"footer-copyright": "footer_footer-copyright__2GCLG",
	"footer-column": "footer_footer-column__93dXx"
};


/***/ }),

/***/ "nZRd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"custom-button": "button_custom-button__30Elz",
	"center": "button_center__3bpWD",
	"children-container": "button_children-container__1tPAc",
	"cta-container": "button_cta-container__3RK9o",
	"arrow-container": "button_arrow-container__21Psl",
	"active": "button_active__108Zl",
	"expand-button": "button_expand-button__3VNXB"
};


/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rh/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 10
  },
  spinnerContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  spinner: {
    color: '#fff'
  }
}));

const Spinner = () => {
  const styles = useStyles();
  return __jsx("div", {
    className: styles.container
  }, __jsx("div", {
    className: styles.spinnerContainer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    className: styles.spinner
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),

/***/ "rqmy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkIfEmailValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkIfNotEmpty; });
/* unused harmony export checkIfArrayNotEmpty */
const checkIfEmailValid = value => true;

const checkIfNotEmpty = value => !!value && value.trim().length > 0;

const checkIfArrayNotEmpty = value => !!value && value instanceof Array && value.length > 0;



/***/ }),

/***/ "uH4x":
/***/ (function(module, exports) {

module.exports = require("react-material-ui-carousel");

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



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yKw9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"agree-download-dialog": "agreeDownloadDialog_agree-download-dialog__1ryEO",
	"content_iframe": "agreeDownloadDialog_content_iframe__2O3cW"
};


/***/ }),

/***/ "zRuj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const useCardContainerStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  cardContainer: {
    marginTop: 20
  }
}));
const useCardStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    boxShadow: '0 0 10px #33333333',
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 5
  }
}));
const useCardContentStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: '0px !important',
    paddingBottom: '0px !important'
  }
}));

function _CardContainer(props, ref) {
  const cardStyles = useCardStyles();
  const cardContainerStyles = useCardContainerStyles();
  const cardContentStyles = useCardContentStyles();
  const {
    title,
    onClick,
    children
  } = props;
  const hasTitle = title && title.trim().length > 0;
  return __jsx("div", {
    className: cardContainerStyles.cardContainer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    classes: cardStyles,
    onClick: onClick
  }, hasTitle ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    style: {
      paddingTop: 0
    },
    title: title
  }) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    classes: cardContentStyles
  }, children)));
}

const CardContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => _CardContainer(props, ref));


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });