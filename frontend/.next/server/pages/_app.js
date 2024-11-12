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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarContext: () => (/* binding */ SidebarContext),\n/* harmony export */   SidebarProvider: () => (/* binding */ SidebarProvider),\n/* harmony export */   useSidebar: () => (/* binding */ useSidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// src/components/sidebar/SidebarProvider.tsx\n\n\nconst SidebarContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    isOpen: true,\n    toggleSidebar: ()=>{}\n});\nconst SidebarProvider = ({ children })=>{\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Handle client-side mounting\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    const toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen((prev)=>!prev);\n    }, []);\n    // Return null or a loading state while not mounted\n    if (!mounted) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: children\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContext.Provider, {\n        value: {\n            isOpen,\n            toggleSidebar\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/hiconnor/Desktop/Maven/frontend/src/components/sidebar/SidebarProvider.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n// Custom hook\nconst useSidebar = ()=>{\n    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(SidebarContext);\n    if (!context) {\n        throw new Error(\"useSidebar must be used within a SidebarProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUE2Qzs7QUFDOEI7QUFPcEUsTUFBTUksK0JBQWlCSiwwREFBbUIsQ0FBcUI7SUFDcEVNLFFBQVE7SUFDUkMsZUFBZSxLQUFPO0FBQ3hCLEdBQUc7QUFFSSxNQUFNQyxrQkFBcUQsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDN0UsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ssUUFBUU0sVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyw4QkFBOEI7SUFDOUJFLGdEQUFTQSxDQUFDO1FBQ1JRLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxNQUFNSixnQkFBZ0JMLGtEQUFXQSxDQUFDO1FBQ2hDVSxVQUFVLENBQUNDLE9BQVMsQ0FBQ0E7SUFDdkIsR0FBRyxFQUFFO0lBRUwsbURBQW1EO0lBQ25ELElBQUksQ0FBQ0gsU0FBUztRQUNaLHFCQUFPO3NCQUFHRDs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDTCxlQUFlVSxRQUFRO1FBQ3RCQyxPQUFPO1lBQ0xUO1lBQ0FDO1FBQ0Y7a0JBRUNFOzs7Ozs7QUFHUCxFQUFFO0FBRUYsY0FBYztBQUNQLE1BQU1PLGFBQWE7SUFDeEIsTUFBTUMsVUFBVWpCLHVEQUFnQixDQUFDSTtJQUNqQyxJQUFJLENBQUNhLFNBQVM7UUFDWixNQUFNLElBQUlFLE1BQU07SUFDbEI7SUFDQSxPQUFPRjtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhclByb3ZpZGVyLnRzeD84MmI1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhclByb3ZpZGVyLnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgU2lkZWJhckNvbnRleHRUeXBlID0ge1xuICBpc09wZW46IGJvb2xlYW47XG4gIHRvZ2dsZVNpZGViYXI6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgU2lkZWJhckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFNpZGViYXJDb250ZXh0VHlwZT4oe1xuICBpc09wZW46IHRydWUsXG4gIHRvZ2dsZVNpZGViYXI6ICgpID0+IHt9XG59KTtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBIYW5kbGUgY2xpZW50LXNpZGUgbW91bnRpbmdcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8vIFJldHVybiBudWxsIG9yIGEgbG9hZGluZyBzdGF0ZSB3aGlsZSBub3QgbW91bnRlZFxuICBpZiAoIW1vdW50ZWQpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzT3BlbixcbiAgICAgICAgdG9nZ2xlU2lkZWJhclxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TaWRlYmFyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8vIEN1c3RvbSBob29rXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU2lkZWJhckNvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVNpZGViYXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFNpZGViYXJQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaXNPcGVuIiwidG9nZ2xlU2lkZWJhciIsIlNpZGViYXJQcm92aWRlciIsImNoaWxkcmVuIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJzZXRJc09wZW4iLCJwcmV2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNpZGViYXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sidebar/SidebarProvider.tsx\n");

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