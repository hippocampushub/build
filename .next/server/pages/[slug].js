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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eL0V");


/***/ }),

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

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

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

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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

/***/ "ZB9j":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content-card-button": "contentCard_content-card-button__3KMQQ",
	"dark": "contentCard_dark__XyZzZ",
	"children-container": "contentCard_children-container__ZVPhn",
	"cta-container": "contentCard_cta-container__2mIEq",
	"arrow-container": "contentCard_arrow-container__ekP9F"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "eL0V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./helpers/dataHelper.ts
var dataHelper = __webpack_require__("hDQs");

// EXTERNAL MODULE: ./components/page/pageContainer.tsx + 11 modules
var pageContainer = __webpack_require__("TLva");

// EXTERNAL MODULE: ./components/page/pageSection.tsx
var pageSection = __webpack_require__("nSCH");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/cards/contentCard.module.scss
var contentCard_module = __webpack_require__("ZB9j");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/sanitizedHtml.tsx
var sanitizedHtml = __webpack_require__("Uv/k");

// EXTERNAL MODULE: ./components/buttons/buttons.tsx
var buttons = __webpack_require__("YK1M");

// CONCATENATED MODULE: ./components/cards/contentCard.tsx
var __jsx = external_react_["createElement"];






const useContentCardStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    borderRadius: 5,
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 20px'
  },
  mainContent: {
    flexGrow: 1
  },
  title: {
    color: '#fff',
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: '24px',
    textTransform: 'uppercase'
  }
}));

const ContentCard = ({
  title,
  content,
  actions,
  variant = 'dark'
}) => {
  const classes = useContentCardStyles();
  const router = Object(router_["useRouter"])();
  const textColor = variant === 'dark' ? '#fff' : '#333';

  const _goToLink = action => {
    var _action$url, _url$trim;

    const url = (_action$url = action === null || action === void 0 ? void 0 : action.url) !== null && _action$url !== void 0 ? _action$url : null;

    if (!!url && (url === null || url === void 0 ? void 0 : (_url$trim = url.trim()) === null || _url$trim === void 0 ? void 0 : _url$trim.length) > 0) {
      var _action$target, _target$trim;

      const target = (_action$target = action === null || action === void 0 ? void 0 : action.target) !== null && _action$target !== void 0 ? _action$target : null;

      if (!!target && (target === null || target === void 0 ? void 0 : (_target$trim = target.trim()) === null || _target$trim === void 0 ? void 0 : _target$trim.length) > 0 && target === '_blank') {
        window.open(url, '_blank');
      } else {
        router === null || router === void 0 ? void 0 : router.push(url);
      }
    }
  };

  return __jsx(core_["Card"], {
    className: `${classes.root} ${contentCard_module["content-card-button"]} ${contentCard_module[variant]}`
  }, __jsx(core_["CardContent"], {
    className: classes.content
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-9"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx(core_["Typography"], {
    style: {
      color: textColor,
      fontSize: 24,
      fontFamily: 'Titillium Web'
    }
  }, title))), __jsx("div", {
    className: "row",
    style: {
      marginTop: 10
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx(sanitizedHtml["a" /* SanitizedHtml */], {
    content: content,
    style: {
      color: textColor,
      fontSize: 16,
      fontFamily: 'Titillium Web'
    }
  })))), __jsx("div", {
    className: "col-3"
  }, (actions !== null && actions !== void 0 ? actions : []).map(item => __jsx("div", {
    className: "row",
    style: {
      marginTop: 10
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx(buttons["a" /* CustomButton */], {
    style: {
      fontSize: 14
    },
    onClick: () => _goToLink(item)
  }, item === null || item === void 0 ? void 0 : item.label))))))));
};


// EXTERNAL MODULE: ./pages/page.module.scss
var page_module = __webpack_require__("RQJL");
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);

// EXTERNAL MODULE: external "@material-ui/core/withWidth"
var withWidth_ = __webpack_require__("yFPR");
var withWidth_default = /*#__PURE__*/__webpack_require__.n(withWidth_);

// EXTERNAL MODULE: ./components/menu/sectionMenu.module.scss
var sectionMenu_module = __webpack_require__("ggGu");

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// CONCATENATED MODULE: ./helpers/uiHelper.ts
const allowSectionsMenuMinHeight = 790;

const isHeightUp = (elHeight, minHeight) => {
  return elHeight > minHeight;
};


// CONCATENATED MODULE: ./components/menu/sectionMenu.tsx
var sectionMenu_jsx = external_react_["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const drawerWidth = 300;
const useStyles = Object(styles_["makeStyles"])(theme => ({
  toolbar: _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  drawerPaper: {
    width: drawerWidth
  }
}));

function _SectionMenu({
  drawerOpen,
  sections,
  width,
  toggleDrawer
}) {
  var _container$clientHeig;

  const _goToSection = item => {
    window.location.href = `#${item === null || item === void 0 ? void 0 : item.id}`;
    toggleDrawer(false);
  };

  const classes = useStyles();
  const container = window !== undefined ? window.document.body : null;
  const containerHeight = (_container$clientHeig = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container$clientHeig !== void 0 ? _container$clientHeig : 0;
  return Object(withWidth_["isWidthUp"])('md', width) && isHeightUp(containerHeight, allowSectionsMenuMinHeight) ? sectionMenu_jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center"
  }, sectionMenu_jsx("div", {
    className: sectionMenu_module["section-menu-container"]
  }, sectionMenu_jsx("div", null, sectionMenu_jsx("div", {
    className: "row"
  }, sections === null || sections === void 0 ? void 0 : sections.map(item => sectionMenu_jsx("div", {
    className: "col-lg-12 col-md-6 col-sm-6 text-center"
  }, sectionMenu_jsx(buttons["a" /* CustomButton */], {
    style: {
      fontSize: 11,
      margin: '5px auto'
    },
    onClick: () => window.location.href = `#${item === null || item === void 0 ? void 0 : item.id}`
  }, item === null || item === void 0 ? void 0 : item.header))))))) : sectionMenu_jsx("div", null, sectionMenu_jsx(core_["Drawer"], {
    classes: {
      paper: classes.drawerPaper
    },
    container: container,
    open: drawerOpen,
    variant: "persistent"
  }, sectionMenu_jsx("div", {
    className: classes.toolbar
  }, sectionMenu_jsx(core_["IconButton"], {
    style: {
      outline: 'none'
    },
    onClick: () => toggleDrawer(false)
  }, sectionMenu_jsx(icons_["ChevronLeft"], null))), sectionMenu_jsx(core_["Divider"], null), sectionMenu_jsx("div", {
    className: "row"
  }, sections === null || sections === void 0 ? void 0 : sections.map(item => sectionMenu_jsx("div", {
    className: "col-12 text-center"
  }, sectionMenu_jsx(buttons["a" /* CustomButton */], {
    style: {
      fontSize: 11,
      margin: '5px auto'
    },
    onClick: () => _goToSection(item)
  }, item === null || item === void 0 ? void 0 : item.header))))));
}

const SectionMenu = withWidth_default()()(_SectionMenu);

// CONCATENATED MODULE: ./pages/[slug].tsx
var _slug_jsx = external_react_["createElement"];













function _Page({
  params,
  width
}) {
  var _container$clientHeig, _ref, _page$content_cards, _page$showTitle, _page$sections, _page$header_carousel, _page$variant, _page$content_cards2, _page$sections2, _page$sections3;

  const [page, setPage] = external_react_["useState"]({});
  const router = Object(router_["useRouter"])();
  const container = window !== undefined ? window.document.body : null;
  const [drawerOpen, setDrawerOpen] = external_react_["useState"](false);
  const [containerHeight, setContainerHeight] = external_react_["useState"]((_container$clientHeig = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container$clientHeig !== void 0 ? _container$clientHeig : 0);
  Object(external_react_["useEffect"])(() => {
    var _router$asPath, _router$asPath$match;

    const hash = router === null || router === void 0 ? void 0 : (_router$asPath = router.asPath) === null || _router$asPath === void 0 ? void 0 : (_router$asPath$match = _router$asPath.match(/#([a-z0-9]+)/gi)) === null || _router$asPath$match === void 0 ? void 0 : _router$asPath$match.toString();

    if (!!hash) {
      console.log('@@@@@@scroll to hash', hash);
      setTimeout(() => {
        var _document$getElementB;

        (_document$getElementB = document.getElementById(hash.substr(1, hash.length - 1))) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView();
      }, 1000);
    }
  }, []);

  const buildPageSection = (section, index) => {
    var _section$asContainer;

    return _slug_jsx(pageSection["a" /* default */], {
      sectionData: section,
      variant: !!section.variant ? section.variant : index % 2 === 0 ? 'light' : 'dark',
      asContainer: (_section$asContainer = section === null || section === void 0 ? void 0 : section.asContainer) !== null && _section$asContainer !== void 0 ? _section$asContainer : false
    });
  };

  const buildSectionsMenu = (sections = []) => {
    return _slug_jsx(SectionMenu, {
      drawerOpen: drawerOpen,
      toggleDrawer: open => setDrawerOpen(open),
      sections: sections
    });
  };

  const setup = async () => {
    const _page = await Object(dataHelper["e" /* getPage */])(params.slug);

    setPage(_page);
  };

  const _showSectionsMenu = (page === null || page === void 0 ? void 0 : page.enableSectionsMenu) && !!(page === null || page === void 0 ? void 0 : page.sections);

  const _sectionsContainerClasses = _showSectionsMenu && (isHeightUp(containerHeight, allowSectionsMenuMinHeight) ? 'col-lg-9  col-md-12 col-sm-12' : 'col-12');

  const _hasContentCards = ((_ref = (_page$content_cards = page === null || page === void 0 ? void 0 : page.content_cards) !== null && _page$content_cards !== void 0 ? _page$content_cards : []) === null || _ref === void 0 ? void 0 : _ref.length) > 0;

  const _showTitle = (_page$showTitle = page === null || page === void 0 ? void 0 : page.showTitle) !== null && _page$showTitle !== void 0 ? _page$showTitle : true;

  const _hasSections = !!(page === null || page === void 0 ? void 0 : page.sections) && (page === null || page === void 0 ? void 0 : (_page$sections = page.sections) === null || _page$sections === void 0 ? void 0 : _page$sections.length) > 0;

  const onSizeChanged = Object(core_["debounce"])(() => {
    var _container$clientHeig2;

    setContainerHeight((_container$clientHeig2 = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container$clientHeig2 !== void 0 ? _container$clientHeig2 : 0);
  }, 500);
  window.addEventListener('resize', onSizeChanged);
  Object(external_react_["useEffect"])(() => {
    setup();
  }, []);
  return _slug_jsx(pageContainer["a" /* default */], {
    headerCarousel: (_page$header_carousel = page.header_carousel) !== null && _page$header_carousel !== void 0 ? _page$header_carousel : null,
    fixedHeader: true,
    transparentHeader: false,
    showDrawerToggleButton: _showSectionsMenu && Object(core_["isWidthDown"])('lg', width),
    openDrawer: () => setDrawerOpen(true),
    variant: (_page$variant = page === null || page === void 0 ? void 0 : page.variant) !== null && _page$variant !== void 0 ? _page$variant : 'light',
    mainClassName: 'with-fixed-header'
  }, _slug_jsx("div", {
    className: `container ${page_module_default.a['page-container']}`
  }, _showTitle ? _slug_jsx("div", {
    className: "row"
  }, _slug_jsx("div", {
    className: "col-12"
  }, _slug_jsx(core_["Typography"], {
    variant: "h4",
    className: `${page_module_default.a['page-header-label']} text-center`
  }, page === null || page === void 0 ? void 0 : page.title), _slug_jsx("div", {
    className: page_module_default.a['page-header-divider']
  }))) : null, _hasContentCards ? _slug_jsx("div", {
    className: `container ${page_module["page-container"]}`
  }, ((_page$content_cards2 = page === null || page === void 0 ? void 0 : page.content_cards) !== null && _page$content_cards2 !== void 0 ? _page$content_cards2 : []).map(contentCard => _slug_jsx("div", {
    className: "row",
    style: {
      marginBottom: 40
    }
  }, _slug_jsx(ContentCard, {
    title: contentCard === null || contentCard === void 0 ? void 0 : contentCard.title,
    content: contentCard === null || contentCard === void 0 ? void 0 : contentCard.content,
    actions: contentCard === null || contentCard === void 0 ? void 0 : contentCard.actions
  })))) : null, _slug_jsx("div", {
    className: "row"
  }, _showSectionsMenu ? buildSectionsMenu((_page$sections2 = page === null || page === void 0 ? void 0 : page.sections) !== null && _page$sections2 !== void 0 ? _page$sections2 : []) : null, _hasSections ? _slug_jsx("div", {
    className: _sectionsContainerClasses
  }, ((_page$sections3 = page === null || page === void 0 ? void 0 : page.sections) !== null && _page$sections3 !== void 0 ? _page$sections3 : []).map((item, index) => buildPageSection(item, index))) : null)));
}

const getStaticProps = ({
  params
}) => ({
  props: {
    params
  }
});

const getStaticPaths = () => {
  return {
    paths: [{
      params: {
        slug: 'about'
      }
    }, {
      params: {
        slug: 'workflows'
      }
    }],
    fallback: false
  };
};


/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(core_["withWidth"])()(_Page));

/***/ }),

/***/ "ggGu":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section-menu-container": "sectionMenu_section-menu-container__3ECJK"
};


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

/***/ "nSCH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_validatorHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rqmy");
/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YK1M");
/* harmony import */ var _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pNLH");
/* harmony import */ var _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_section_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_imageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d0Tl");
/* harmony import */ var _sanitizedHtml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Uv/k");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("N39q");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];










function PageSection({
  sectionData,
  variant = 'light',
  asContainer = false,
  openImageCreditsDialog
}) {
  var _sectionData$fontSize, _sectionData$textAlig, _sectionData$content, _sectionData$rows;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const _goToUrl = async url => {
    if (!!url) {
      if (url.startsWith('http')) {
        window.open(url);
      } else {
        await router.push(url);
      }
    }
  };

  const mainContentTextStyle = {
    fontSize: (_sectionData$fontSize = sectionData === null || sectionData === void 0 ? void 0 : sectionData.fontSize) !== null && _sectionData$fontSize !== void 0 ? _sectionData$fontSize : _constants__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].SECTIONS.mainContentTextStyle.fontSize,
    textAlign: (_sectionData$textAlig = sectionData === null || sectionData === void 0 ? void 0 : sectionData.textAlign) !== null && _sectionData$textAlig !== void 0 ? _sectionData$textAlig : _constants__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].SECTIONS.mainContentTextStyle.textAlign
  };
  return __jsx("section", {
    id: sectionData.id,
    className: `${_page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section']} ${_page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a[variant]}`
  }, __jsx("div", {
    className: _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section-main-container']
  }, Object(_helpers_validatorHelper__WEBPACK_IMPORTED_MODULE_3__[/* checkIfNotEmpty */ "b"])(sectionData === null || sectionData === void 0 ? void 0 : sectionData.header) ? __jsx("div", {
    className: _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section-header']
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    align: "center",
    gutterBottom: true,
    className: _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section-header-label']
  }, sectionData.header), __jsx("div", {
    className: _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section-header-divider']
  })) : null, Object(_helpers_validatorHelper__WEBPACK_IMPORTED_MODULE_3__[/* checkIfNotEmpty */ "b"])(sectionData === null || sectionData === void 0 ? void 0 : sectionData.content) ? __jsx("div", {
    className: "row",
    style: {
      marginTop: 10
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx(_sanitizedHtml__WEBPACK_IMPORTED_MODULE_7__[/* SanitizedHtml */ "a"], {
    content: (_sectionData$content = sectionData.content) !== null && _sectionData$content !== void 0 ? _sectionData$content : '',
    style: mainContentTextStyle
  }))) : null, ((_sectionData$rows = sectionData === null || sectionData === void 0 ? void 0 : sectionData.rows) !== null && _sectionData$rows !== void 0 ? _sectionData$rows : []).map(row => {
    var _row$fontSize, _row$textAlign, _row$columns, _row$columns2, _row$id, _row$columns3;

    const rowContentTextStyle = {
      fontSize: (_row$fontSize = row === null || row === void 0 ? void 0 : row.fontSize) !== null && _row$fontSize !== void 0 ? _row$fontSize : _constants__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].SECTIONS.rowContentTextStyle.fontSize,
      textAlign: (_row$textAlign = row === null || row === void 0 ? void 0 : row.textAlign) !== null && _row$textAlign !== void 0 ? _row$textAlign : _constants__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].SECTIONS.mainContentTextStyle.textAlign
    };
    const hasColumns = ((_row$columns = row.columns) !== null && _row$columns !== void 0 ? _row$columns : []).length > 0;
    const colClassName = hasColumns ? `col-${Math.ceil(12 / ((_row$columns2 = row.columns) !== null && _row$columns2 !== void 0 ? _row$columns2 : []).length)}` : 'col-12';
    return __jsx("div", {
      className: asContainer ? 'container' : null,
      id: (_row$id = row === null || row === void 0 ? void 0 : row.id) !== null && _row$id !== void 0 ? _row$id : ''
    }, __jsx("div", {
      className: "row",
      style: {
        marginTop: 20
      }
    }, __jsx("div", {
      className: "col-12"
    }, Object(_helpers_validatorHelper__WEBPACK_IMPORTED_MODULE_3__[/* checkIfNotEmpty */ "b"])(row.header) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h6",
      gutterBottom: true,
      className: _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section-sub-header']
    }, row.header) : null)), __jsx("div", {
      className: "row",
      style: {
        marginTop: 20
      }
    }, ((_row$columns3 = row.columns) !== null && _row$columns3 !== void 0 ? _row$columns3 : []).map(col => {
      var _col$content, _col$image$maxWidth, _col$image, _constants$SECTIONS$r, _col$image2, _col$image4;

      return __jsx("div", {
        className: colClassName
      }, Object(_helpers_validatorHelper__WEBPACK_IMPORTED_MODULE_3__[/* checkIfNotEmpty */ "b"])(col.content) ? __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-12"
      }, __jsx(_sanitizedHtml__WEBPACK_IMPORTED_MODULE_7__[/* SanitizedHtml */ "a"], {
        content: (_col$content = col === null || col === void 0 ? void 0 : col.content) !== null && _col$content !== void 0 ? _col$content : '',
        style: rowContentTextStyle
      }))) : null, !!(col === null || col === void 0 ? void 0 : col.image) ? __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-12 text-center"
      }, __jsx("div", {
        style: {
          position: 'relative',
          display: 'inline-block'
        }
      }, __jsx("img", {
        src: Object(_helpers_imageHelper__WEBPACK_IMPORTED_MODULE_6__[/* getImageUrl */ "a"])(col === null || col === void 0 ? void 0 : col.image),
        style: {
          maxWidth: (_col$image$maxWidth = col === null || col === void 0 ? void 0 : (_col$image = col.image) === null || _col$image === void 0 ? void 0 : _col$image.maxWidth) !== null && _col$image$maxWidth !== void 0 ? _col$image$maxWidth : (_constants$SECTIONS$r = _constants__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].SECTIONS.rowContentImageStyle) === null || _constants$SECTIONS$r === void 0 ? void 0 : _constants$SECTIONS$r.maxWidth,
          width: '100%'
        }
      }), !!(col === null || col === void 0 ? void 0 : (_col$image2 = col.image) === null || _col$image2 === void 0 ? void 0 : _col$image2.imageCreditsLabel) ? __jsx("div", {
        className: _page_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-section-col-image-credits-label'],
        onClick: () => {
          var _col$image3;

          return openImageCreditsDialog(col === null || col === void 0 ? void 0 : (_col$image3 = col.image) === null || _col$image3 === void 0 ? void 0 : _col$image3.imageCreditsContent);
        }
      }, __jsx("span", null, col === null || col === void 0 ? void 0 : (_col$image4 = col.image) === null || _col$image4 === void 0 ? void 0 : _col$image4.imageCreditsLabel)) : null))) : null);
    }), !!row.cta ? __jsx("div", {
      className: "col-12 text-center",
      style: {
        marginTop: 40
      }
    }, __jsx(_buttons_buttons__WEBPACK_IMPORTED_MODULE_4__[/* CustomButton */ "a"], {
      onClick: () => {
        var _row$cta;

        return _goToUrl(row === null || row === void 0 ? void 0 : (_row$cta = row.cta) === null || _row$cta === void 0 ? void 0 : _row$cta.url);
      },
      variant: "primary",
      style: {
        margin: '0 auto',
        fontSize: 16
      },
      isCta: true
    }, row.cta.label)) : null));
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (PageSection);

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

/***/ "pNLH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page-section": "page-section_page-section__3rbo5",
	"light": "page-section_light__KY3Zx",
	"page-section-sub-header": "page-section_page-section-sub-header__2PZhA",
	"dark": "page-section_dark__12WnX",
	"page-section-header": "page-section_page-section-header__1aSgU",
	"page-section-header-label": "page-section_page-section-header-label__3O2wU",
	"page-section-main-container": "page-section_page-section-main-container__1uiC6",
	"page-section-header-divider": "page-section_page-section-header-divider__2JDjB",
	"page-section-col-image-credits-label": "page-section_page-section-col-image-credits-label__f7_Lx"
};


/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yFPR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });