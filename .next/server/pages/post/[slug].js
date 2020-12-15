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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header/header.tsx":
/*!**************************************!*\
  !*** ./components/header/header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu */ \"./components/menu/menu.tsx\");\n\nvar _jsxFileName = \"/Users/antoninotocco/Workspace/cnr/hyppocampus-facility-hub-frontend/components/header/header.tsx\";\n\n\n\nfunction Header({\n  menuItems\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"row\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"col-12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          menuItems: menuItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4PzVlODYiXSwibmFtZXMiOlsiSGVhZGVyIiwibWVudUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFDQztBQUFELENBQWhCLEVBQTZCO0FBQ3pCLHNCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSSxxRUFBQyxrREFBRDtBQUFNLG1CQUFTLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztBQUVjRCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vbWVudS9tZW51XCI7XG5cbmZ1bmN0aW9uIEhlYWRlcih7bWVudUl0ZW1zfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51IG1lbnVJdGVtcz17bWVudUl0ZW1zfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/header.tsx\n");

/***/ }),

/***/ "./components/menu/menu.tsx":
/*!**********************************!*\
  !*** ./components/menu/menu.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ \"./data.ts\");\n\nvar _jsxFileName = \"/Users/antoninotocco/Workspace/cnr/hyppocampus-facility-hub-frontend/components/menu/menu.tsx\";\n\n\n\nconst Menu = ({\n  menuItems\n}) => {\n  const buildMenuItem = item => {\n    const linkUrl = item.type === _data__WEBPACK_IMPORTED_MODULE_2__[\"MenuItemType\"].post ? `/post/${item.post}` : '#';\n    console.log('@@@@@linkUrl');\n    console.log(linkUrl);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        className: \"nav-item\",\n        href: linkUrl,\n        children: item.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, undefined)\n    }, `menu-item-${item.id}`, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }, undefined);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"navbar navbar-expand-lg\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: \"navbar-brand\",\n      href: \"#\",\n      children: \"Navbar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"navbar-toggler\",\n      type: \"button\",\n      \"data-toggle\": \"collapse\",\n      \"data-target\": \"#navbarNav\",\n      \"aria-controls\": \"navbarNav\",\n      \"aria-expanded\": \"false\",\n      \"aria-label\": \"Toggle navigation\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"navbar-toggler-icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"collapse navbar-collapse\",\n      id: \"navbarNav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n        className: \"navbar-nav\",\n        children: menuItems.map(item => buildMenuItem(item))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 13\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS50c3g/N2E3MyJdLCJuYW1lcyI6WyJNZW51IiwibWVudUl0ZW1zIiwiYnVpbGRNZW51SXRlbSIsIml0ZW0iLCJsaW5rVXJsIiwidHlwZSIsIk1lbnVJdGVtVHlwZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJpZCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUUxQixRQUFNQyxhQUFhLEdBQUlDLElBQUQsSUFBVTtBQUM1QixVQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxLQUFjQyxrREFBWSxDQUFDQyxJQUEzQixHQUFtQyxTQUFRSixJQUFJLENBQUNJLElBQUssRUFBckQsR0FBeUQsR0FBekU7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBWjtBQUNBLHdCQUFRLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0oscUVBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFDLFVBQWhCO0FBQTJCLFlBQUksRUFBRUEsT0FBakM7QUFBQSxrQkFDS0QsSUFBSSxDQUFDTztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESSxPQUFnQixhQUFZUCxJQUFJLENBQUNRLEVBQUcsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUtILEdBVEQ7O0FBV0Esc0JBQVE7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSw0QkFDSjtBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQTRCLFVBQUksRUFBQyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESSxlQUVKO0FBQVEsZUFBUyxFQUFDLGdCQUFsQjtBQUFtQyxVQUFJLEVBQUMsUUFBeEM7QUFBaUQscUJBQVksVUFBN0Q7QUFBd0UscUJBQVksWUFBcEY7QUFDUSx1QkFBYyxXQUR0QjtBQUNrQyx1QkFBYyxPQURoRDtBQUN3RCxvQkFBVyxtQkFEbkU7QUFBQSw2QkFFSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkksZUFNSjtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUEwQyxRQUFFLEVBQUMsV0FBN0M7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFNLGlCQUFTLEVBQUMsWUFBaEI7QUFBQSxrQkFDS1YsU0FBUyxDQUFDVyxHQUFWLENBQWVULElBQUQsSUFBVUQsYUFBYSxDQUFDQyxJQUFELENBQXJDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFZSCxDQXpCRDs7QUEyQmVILG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZW51L21lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rLCBMaXN0LCBMaXN0SXRlbX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQge01lbnVJdGVtVHlwZX0gZnJvbSBcIi4uLy4uL2RhdGFcIjtcblxuY29uc3QgTWVudSA9ICh7bWVudUl0ZW1zfSkgPT4ge1xuXG4gICAgY29uc3QgYnVpbGRNZW51SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtVcmwgPSBpdGVtLnR5cGUgPT09IE1lbnVJdGVtVHlwZS5wb3N0ID8gYC9wb3N0LyR7aXRlbS5wb3N0fWAgOiAnIyc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQGxpbmtVcmwnKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlua1VybCk7XG4gICAgICAgIHJldHVybiAoPExpc3RJdGVtIGtleT17YG1lbnUtaXRlbS0ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdi1pdGVtJyBocmVmPXtsaW5rVXJsfT5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9MaXN0SXRlbT4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TmF2YmFyPC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IGJ1aWxkTWVudUl0ZW0oaXRlbSkpfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu/menu.tsx\n");

/***/ }),

/***/ "./components/page/page.tsx":
/*!**********************************!*\
  !*** ./components/page/page.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header */ \"./components/header/header.tsx\");\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/antoninotocco/Workspace/cnr/hyppocampus-facility-hub-frontend/components/page/page.tsx\";\n\n\n\n\n\nfunction Page({\n  children,\n  title = 'Next.js App',\n  menuItems\n}) {\n  console.log('@@@@@title');\n  console.log(title);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        menuItems: menuItems\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 13\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UvcGFnZS50c3g/NmYyZiJdLCJuYW1lcyI6WyJQYWdlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm1lbnVJdGVtcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBOztBQU9BLFNBQVNBLElBQVQsQ0FBYztBQUFDQyxVQUFEO0FBQVdDLE9BQUssR0FBRyxhQUFuQjtBQUFrQ0M7QUFBbEMsQ0FBZCxFQUF3RTtBQUNwRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLHNCQUFRO0FBQUEsNEJBQ0oscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBLGtCQUFRQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREksZUFJSjtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNJLHFFQUFDLHNEQUFEO0FBQVEsaUJBQVMsRUFBRUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxrQkFDS0Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFXSDs7QUFFY0QsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2UvcGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RlZmF1bHRDb21wb25lbnRQcm9wc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL092ZXJyaWRhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyXCI7XG5cbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmludGVyZmFjZSBJUGFnZVByb3BzIGV4dGVuZHMgRGVmYXVsdENvbXBvbmVudFByb3BzPGFueT57XG4gICAgdGl0bGU/OiBzdHJpbmdcbiAgICBtZW51SXRlbXM/OiBhbnlbXVxufVxuXG5mdW5jdGlvbiBQYWdlKHtjaGlsZHJlbiwgdGl0bGUgPSAnTmV4dC5qcyBBcHAnLCBtZW51SXRlbXN9OiBJUGFnZVByb3BzKSB7XG4gICAgY29uc29sZS5sb2coJ0BAQEBAdGl0bGUnKTtcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cbiAgICAgICAgICAgIDxIZWFkZXIgbWVudUl0ZW1zPXttZW51SXRlbXN9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/page/page.tsx\n");

/***/ }),

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _process$env$BASE_URL;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  BASE_URL: (_process$env$BASE_URL = process.env.BASE_URL) !== null && _process$env$BASE_URL !== void 0 ? _process$env$BASE_URL : 'http://localhost:1337',\n  ENDPOINTS: {\n    menuItems: 'menuItems',\n    homePage: 'home-page',\n    posts: 'posts'\n  },\n  REQUEST_METHODS: {\n    get: 'get',\n    post: 'post'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMudHM/Mzc3ZiJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJFTkRQT0lOVFMiLCJtZW51SXRlbXMiLCJob21lUGFnZSIsInBvc3RzIiwiUkVRVUVTVF9NRVRIT0RTIiwiZ2V0IiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7O0FBQWU7QUFDWEEsVUFBUSwyQkFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQWQseUVBQTBCLHVCQUR2QjtBQUVYRyxXQUFTLEVBQUU7QUFDUEMsYUFBUyxFQUFFLFdBREo7QUFFUEMsWUFBUSxFQUFFLFdBRkg7QUFHUEMsU0FBSyxFQUFFO0FBSEEsR0FGQTtBQU9YQyxpQkFBZSxFQUFFO0FBQ2JDLE9BQUcsRUFBRSxLQURRO0FBRWJDLFFBQUksRUFBRTtBQUZPO0FBUE4sQ0FBZiIsImZpbGUiOiIuL2NvbnN0YW50cy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBCQVNFX1VSTDogcHJvY2Vzcy5lbnYuQkFTRV9VUkwgPz8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNycsXG4gICAgRU5EUE9JTlRTOiB7XG4gICAgICAgIG1lbnVJdGVtczogJ21lbnVJdGVtcycsXG4gICAgICAgIGhvbWVQYWdlOiAnaG9tZS1wYWdlJyxcbiAgICAgICAgcG9zdHM6ICdwb3N0cydcbiAgICB9LFxuICAgIFJFUVVFU1RfTUVUSE9EUzoge1xuICAgICAgICBnZXQ6ICdnZXQnLFxuICAgICAgICBwb3N0OiAncG9zdCdcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants.ts\n");

/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/*! exports provided: MenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItemType\", function() { return MenuItemType; });\nconst MenuItemType = {\n  section: 'section',\n  post: 'post'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLnRzPzA5NTAiXSwibmFtZXMiOlsiTWVudUl0ZW1UeXBlIiwic2VjdGlvbiIsInBvc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFNBQU8sRUFBRSxTQURlO0FBRXhCQyxNQUFJLEVBQUU7QUFGa0IsQ0FBckIiLCJmaWxlIjoiLi9kYXRhLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1lbnVJdGVtVHlwZSA9IHtcbiAgICBzZWN0aW9uOiAnc2VjdGlvbicsXG4gICAgcG9zdDogJ3Bvc3QnXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data.ts\n");

/***/ }),

/***/ "./helpers/apiHelper.ts":
/*!******************************!*\
  !*** ./helpers/apiHelper.ts ***!
  \******************************/
/*! exports provided: STATUS_CODES, getMenuItems, getHomePage, getPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATUS_CODES\", function() { return STATUS_CODES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenuItems\", function() { return getMenuItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomePage\", function() { return getHomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPost\", function() { return getPost; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n\n\nconst STATUS_CODES = {\n  OK: 200\n};\n\nconst parseResponse = response => {\n  if (!!response && response.status === STATUS_CODES.OK && !!response.data) {\n    return response.data;\n  }\n\n  return null;\n};\n\nconst getMenuItems = async () => {\n  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BASE_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ENDPOINTS.menuItems}`;\n  const axiosConfig = {\n    url,\n    method: 'get'\n  };\n\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(axiosConfig);\n    const result = parseResponse(response);\n\n    if (!!result) {\n      return result;\n    }\n\n    return [];\n  } catch (error) {\n    console.log('@@@@@error');\n    console.log(error);\n  }\n\n  return [];\n};\n\nconst getHomePage = async () => {\n  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BASE_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ENDPOINTS.homePage}`;\n  const axiosConfig = {\n    url,\n    method: 'get'\n  };\n\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(axiosConfig);\n    const result = parseResponse(response);\n\n    if (!!result) {\n      return result;\n    }\n\n    return {};\n  } catch (error) {\n    console.log('@@@@@error');\n    console.log(error);\n  }\n\n  return {};\n};\n\nconst getPost = async slug => {\n  const url = `${_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BASE_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ENDPOINTS.posts}/slug/${slug}`;\n  const axiosConfig = {\n    url,\n    method: 'get'\n  };\n\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(axiosConfig);\n    const result = parseResponse(response);\n\n    if (!!result) {\n      return result;\n    }\n\n    return {};\n  } catch (error) {\n    console.log('@@@@@error');\n    console.log(error);\n  }\n\n  return {};\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2FwaUhlbHBlci50cz85MzM2Il0sIm5hbWVzIjpbIlNUQVRVU19DT0RFUyIsIk9LIiwicGFyc2VSZXNwb25zZSIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsImdldE1lbnVJdGVtcyIsInVybCIsImNvbnN0YW50cyIsIkJBU0VfVVJMIiwiRU5EUE9JTlRTIiwibWVudUl0ZW1zIiwiYXhpb3NDb25maWciLCJtZXRob2QiLCJheGlvcyIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEhvbWVQYWdlIiwiaG9tZVBhZ2UiLCJnZXRQb3N0Iiwic2x1ZyIsInBvc3RzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsSUFBRSxFQUFFO0FBRG9CLENBQXJCOztBQUlQLE1BQU1DLGFBQWEsR0FBSUMsUUFBRCxJQUFjO0FBQ2hDLE1BQUksQ0FBQyxDQUFDQSxRQUFGLElBQWNBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQkosWUFBWSxDQUFDQyxFQUEvQyxJQUFxRCxDQUFDLENBQUNFLFFBQVEsQ0FBQ0UsSUFBcEUsRUFBMEU7QUFDdEUsV0FBT0YsUUFBUSxDQUFDRSxJQUFoQjtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNILENBTEQ7O0FBT0EsTUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDN0IsUUFBTUMsR0FBRyxHQUFJLEdBQUVDLGtEQUFTLENBQUNDLFFBQVMsSUFBR0Qsa0RBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsU0FBVSxFQUFuRTtBQUNBLFFBQU1DLFdBQStCLEdBQUc7QUFDcENMLE9BRG9DO0FBRXBDTSxVQUFNLEVBQUU7QUFGNEIsR0FBeEM7O0FBSUEsTUFBSTtBQUNBLFVBQU1WLFFBQVEsR0FBRyxNQUFNVyw0Q0FBSyxDQUFDRixXQUFELENBQTVCO0FBQ0EsVUFBTUcsTUFBTSxHQUFHYixhQUFhLENBQUNDLFFBQUQsQ0FBNUI7O0FBQ0EsUUFBSSxDQUFDLENBQUNZLE1BQU4sRUFBYztBQUNWLGFBQU9BLE1BQVA7QUFDSDs7QUFDRCxXQUFPLEVBQVA7QUFDSCxHQVBELENBT0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDs7QUFDRCxTQUFPLEVBQVA7QUFDSCxDQWxCRDs7QUFvQkEsTUFBTUcsV0FBVyxHQUFHLFlBQVk7QUFDNUIsUUFBTVosR0FBRyxHQUFJLEdBQUVDLGtEQUFTLENBQUNDLFFBQVMsSUFBR0Qsa0RBQVMsQ0FBQ0UsU0FBVixDQUFvQlUsUUFBUyxFQUFsRTtBQUNBLFFBQU1SLFdBQStCLEdBQUc7QUFDcENMLE9BRG9DO0FBRXBDTSxVQUFNLEVBQUU7QUFGNEIsR0FBeEM7O0FBSUEsTUFBSTtBQUNBLFVBQU1WLFFBQVEsR0FBRyxNQUFNVyw0Q0FBSyxDQUFDRixXQUFELENBQTVCO0FBQ0EsVUFBTUcsTUFBTSxHQUFHYixhQUFhLENBQUNDLFFBQUQsQ0FBNUI7O0FBQ0EsUUFBSSxDQUFDLENBQUNZLE1BQU4sRUFBYztBQUNWLGFBQU9BLE1BQVA7QUFDSDs7QUFDRCxXQUFPLEVBQVA7QUFDSCxHQVBELENBT0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDs7QUFDRCxTQUFPLEVBQVA7QUFDSCxDQWxCRDs7QUFvQkEsTUFBTUssT0FBTyxHQUFHLE1BQU9DLElBQVAsSUFBd0I7QUFDcEMsUUFBTWYsR0FBRyxHQUFJLEdBQUVDLGtEQUFTLENBQUNDLFFBQVMsSUFBR0Qsa0RBQVMsQ0FBQ0UsU0FBVixDQUFvQmEsS0FBTSxTQUFRRCxJQUFLLEVBQTVFO0FBQ0EsUUFBTVYsV0FBK0IsR0FBRztBQUNwQ0wsT0FEb0M7QUFFcENNLFVBQU0sRUFBRTtBQUY0QixHQUF4Qzs7QUFJQSxNQUFJO0FBQ0EsVUFBTVYsUUFBUSxHQUFHLE1BQU1XLDRDQUFLLENBQUNGLFdBQUQsQ0FBNUI7QUFDQSxVQUFNRyxNQUFNLEdBQUdiLGFBQWEsQ0FBQ0MsUUFBRCxDQUE1Qjs7QUFDQSxRQUFJLENBQUMsQ0FBQ1ksTUFBTixFQUFjO0FBQ1YsYUFBT0EsTUFBUDtBQUNIOztBQUNELFdBQU8sRUFBUDtBQUNILEdBUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWM7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNIOztBQUNELFNBQU8sRUFBUDtBQUNILENBbEJEIiwiZmlsZSI6Ii4vaGVscGVycy9hcGlIZWxwZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHtBeGlvc1JlcXVlc3RDb25maWd9IGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgU1RBVFVTX0NPREVTID0ge1xuICAgIE9LOiAyMDBcbn1cblxuY29uc3QgcGFyc2VSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xuICAgIGlmICghIXJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gU1RBVFVTX0NPREVTLk9LICYmICEhcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGdldE1lbnVJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtjb25zdGFudHMuQkFTRV9VUkx9LyR7Y29uc3RhbnRzLkVORFBPSU5UUy5tZW51SXRlbXN9YDtcbiAgICBjb25zdCBheGlvc0NvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgICB1cmwsXG4gICAgICAgIG1ldGhvZDogJ2dldCdcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhheGlvc0NvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQGVycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuXG5jb25zdCBnZXRIb21lUGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtjb25zdGFudHMuQkFTRV9VUkx9LyR7Y29uc3RhbnRzLkVORFBPSU5UUy5ob21lUGFnZX1gO1xuICAgIGNvbnN0IGF4aW9zQ29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiAnZ2V0J1xuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhheGlvc0NvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQGVycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBnZXRQb3N0ID0gYXN5bmMgKHNsdWc6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAke2NvbnN0YW50cy5CQVNFX1VSTH0vJHtjb25zdGFudHMuRU5EUE9JTlRTLnBvc3RzfS9zbHVnLyR7c2x1Z31gO1xuICAgIGNvbnN0IGF4aW9zQ29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiAnZ2V0J1xuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhheGlvc0NvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQGVycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQge1xuICAgIGdldE1lbnVJdGVtcyxcbiAgICBnZXRIb21lUGFnZSxcbiAgICBnZXRQb3N0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/apiHelper.ts\n");

/***/ }),

/***/ "./helpers/propsHelper.ts":
/*!********************************!*\
  !*** ./helpers/propsHelper.ts ***!
  \********************************/
/*! exports provided: getMenuItemsProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenuItemsProps\", function() { return getMenuItemsProps; });\n/* harmony import */ var _apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHelper */ \"./helpers/apiHelper.ts\");\n\n\nasync function getMenuItemsProps() {\n  try {\n    const menuItems = await Object(_apiHelper__WEBPACK_IMPORTED_MODULE_0__[\"getMenuItems\"])();\n    return menuItems;\n  } catch (error) {\n    return [];\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3Byb3BzSGVscGVyLnRzPzZiMDUiXSwibmFtZXMiOlsiZ2V0TWVudUl0ZW1zUHJvcHMiLCJtZW51SXRlbXMiLCJnZXRNZW51SXRlbXMiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsaUJBQWYsR0FBbUM7QUFDL0IsTUFBSTtBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNQywrREFBWSxFQUFwQztBQUNBLFdBQU9ELFNBQVA7QUFDSCxHQUhELENBR0UsT0FBT0UsS0FBUCxFQUFjO0FBQ1osV0FBTyxFQUFQO0FBQ0g7QUFDSiIsImZpbGUiOiIuL2hlbHBlcnMvcHJvcHNIZWxwZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldE1lbnVJdGVtc30gZnJvbSBcIi4vYXBpSGVscGVyXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1lbnVJdGVtc1Byb3BzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGF3YWl0IGdldE1lbnVJdGVtcygpO1xuICAgICAgICByZXR1cm4gbWVudUl0ZW1zO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0TWVudUl0ZW1zUHJvcHNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/propsHelper.ts\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_propsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/propsHelper */ \"./helpers/propsHelper.ts\");\n/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/apiHelper */ \"./helpers/apiHelper.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/page/page */ \"./components/page/page.tsx\");\n\nvar _jsxFileName = \"/Users/antoninotocco/Workspace/cnr/hyppocampus-facility-hub-frontend/pages/post/[slug].tsx\";\n\n\n\n\n\nfunction Post({\n  menuItems,\n  post\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_page_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    menuItems: menuItems,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n            variant: \"h3\",\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12\",\n          children: post.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getServerSideProps({\n  params\n}) {\n  const {\n    slug\n  } = params;\n  const menuItems = await Object(_helpers_propsHelper__WEBPACK_IMPORTED_MODULE_1__[\"getMenuItemsProps\"])();\n  const post = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__[\"getPost\"])(slug);\n  return {\n    props: {\n      post,\n      menuItems\n    }\n  };\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS50c3g/M2Y5ZiJdLCJuYW1lcyI6WyJQb3N0IiwibWVudUl0ZW1zIiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInNsdWciLCJnZXRNZW51SXRlbXNQcm9wcyIsImdldFBvc3QiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQWQsRUFBaUM7QUFDN0Isc0JBQ0kscUVBQUMsNkRBQUQ7QUFBTSxhQUFTLEVBQUVELFNBQWpCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDSSxxRUFBQyw0REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQSxzQkFDS0MsSUFBSSxDQUFDQztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLG9CQUNLRCxJQUFJLENBQUNFO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0FBRUQsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0M7QUFBRCxDQUFsQyxFQUE0QztBQUN4QyxRQUFNO0FBQUNDO0FBQUQsTUFBU0QsTUFBZjtBQUNBLFFBQU1MLFNBQVMsR0FBRyxNQUFNTyw4RUFBaUIsRUFBekM7QUFDQSxRQUFNTixJQUFJLEdBQUcsTUFBTU8sa0VBQU8sQ0FBQ0YsSUFBRCxDQUExQjtBQUNBLFNBQU87QUFDSEcsU0FBSyxFQUFFO0FBQ0hSLFVBREc7QUFFSEQ7QUFGRztBQURKLEdBQVA7QUFNSDs7QUFHRDtBQUllRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0TWVudUl0ZW1zUHJvcHN9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3Byb3BzSGVscGVyXCI7XG5pbXBvcnQge2dldFBvc3R9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaUhlbHBlclwiO1xuaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2UvcGFnZVwiO1xuXG5mdW5jdGlvbiBQb3N0KHttZW51SXRlbXMsIHBvc3R9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2UgbWVudUl0ZW1zPXttZW51SXRlbXN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhZ2U+KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KSB7XG4gICAgY29uc3Qge3NsdWd9ID0gcGFyYW1zO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGF3YWl0IGdldE1lbnVJdGVtc1Byb3BzKCk7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3Qoc2x1Zyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIGdldFNlcnZlclNpZGVQcm9wc1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });