/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/sidebar/SidebarProvider.tsx":
/*!****************************************************!*\
  !*** ./src/components/sidebar/SidebarProvider.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarProvider: () => (/* binding */ SidebarProvider),\n/* harmony export */   useSidebar: () => (/* binding */ useSidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst SidebarProvider = ({ children })=>{\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen((prev)=>!prev);\n    }, []);\n    const openSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen(true);\n    }, []);\n    const closeSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContext.Provider, {\n        value: {\n            isOpen,\n            toggleSidebar,\n            openSidebar,\n            closeSidebar\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/hiconnor/Desktop/Maven/frontend/src/components/sidebar/SidebarProvider.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSidebar = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SidebarContext);\n    if (!context) {\n        throw new Error(\"useSidebar must be used within a SidebarProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyRjtBQVMzRixNQUFNSywrQkFBaUJKLG9EQUFhQSxDQUFpQ0s7QUFFOUQsTUFBTUMsa0JBQXFELENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzdFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUSxnQkFBZ0JQLGtEQUFXQSxDQUFDO1FBQ2hDTSxVQUFVLENBQUNFLE9BQVMsQ0FBQ0E7SUFDdkIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsY0FBY1Qsa0RBQVdBLENBQUM7UUFDOUJNLFVBQVU7SUFDWixHQUFHLEVBQUU7SUFFTCxNQUFNSSxlQUFlVixrREFBV0EsQ0FBQztRQUMvQk0sVUFBVTtJQUNaLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTCxlQUFlVSxRQUFRO1FBQUNDLE9BQU87WUFDOUJQO1lBQ0FFO1lBQ0FFO1lBQ0FDO1FBQ0Y7a0JBQ0dOOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTVMsYUFBYTtJQUN4QixNQUFNQyxVQUFVaEIsaURBQVVBLENBQUNHO0lBQzNCLElBQUksQ0FBQ2EsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyUHJvdmlkZXIudHN4PzgyYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2lkZWJhckNvbnRleHRUeXBlIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICB0b2dnbGVTaWRlYmFyOiAoKSA9PiB2b2lkO1xuICBvcGVuU2lkZWJhcjogKCkgPT4gdm9pZDtcbiAgY2xvc2VTaWRlYmFyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaWRlYmFyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2lkZWJhckNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhclByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzT3BlbigocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb3BlblNpZGViYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VTaWRlYmFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRlYmFyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcbiAgICAgIGlzT3BlbiwgXG4gICAgICB0b2dnbGVTaWRlYmFyLCBcbiAgICAgIG9wZW5TaWRlYmFyLCBcbiAgICAgIGNsb3NlU2lkZWJhciBcbiAgICB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFNpZGViYXJDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VTaWRlYmFyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBTaWRlYmFyUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJTaWRlYmFyQ29udGV4dCIsInVuZGVmaW5lZCIsIlNpZGViYXJQcm92aWRlciIsImNoaWxkcmVuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlU2lkZWJhciIsInByZXYiLCJvcGVuU2lkZWJhciIsImNsb3NlU2lkZWJhciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTaWRlYmFyIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sidebar/SidebarProvider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_sidebar_SidebarProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/sidebar/SidebarProvider */ \"./src/components/sidebar/SidebarProvider.tsx\");\n// src/pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_SidebarProvider__WEBPACK_IMPORTED_MODULE_2__.SidebarProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/hiconnor/Desktop/Maven/frontend/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hiconnor/Desktop/Maven/frontend/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUNTO0FBRXlDO0FBRXhELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNILGdGQUFlQTtrQkFDZCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3BhZ2VzL19hcHAudHN4XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBTaWRlYmFyUHJvdmlkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyUHJvdmlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFNpZGViYXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1NpZGViYXJQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaWRlYmFyUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();