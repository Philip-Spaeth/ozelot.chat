"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.module.css */ \"./components/Sidebar.module.css\");\n/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// frontend/components/Sidebar.js\n\nvar _s = $RefreshSig$();\n\n\nconst Sidebar = ()=>{\n    _s();\n    // Beispielhafte Chat-Items\n    const chatItems = [\n        {\n            id: 1,\n            name: \"Chat 1\"\n        },\n        {\n            id: 2,\n            name: \"Chat 2\"\n        },\n        {\n            id: 3,\n            name: \"Chat 3\"\n        },\n        {\n            id: 1,\n            name: \"Chat 1\"\n        },\n        {\n            id: 2,\n            name: \"Chat 2\"\n        },\n        {\n            id: 3,\n            name: \"Chat 3\"\n        },\n        {\n            id: 1,\n            name: \"Chat 1\"\n        },\n        {\n            id: 2,\n            name: \"Chat 2\"\n        },\n        {\n            id: 3,\n            name: \"Chat 3\"\n        },\n        {\n            id: 1,\n            name: \"Chat 1\"\n        },\n        {\n            id: 2,\n            name: \"Chat 2\"\n        },\n        {\n            id: 3,\n            name: \"Chat 3\"\n        },\n        {\n            id: 1,\n            name: \"Chat 1\"\n        },\n        {\n            id: 2,\n            name: \"Chat 2\"\n        },\n        {\n            id: 3,\n            name: \"Chat 3\"\n        }\n    ];\n    // Zustand für den Suchbegriff\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Filtere die Chat-Items basierend auf dem Suchbegriff\n    const filteredChatItems = chatItems.filter((chat)=>chat.name.toLowerCase().includes(searchTerm.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().sidebar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"search by username..\",\n                className: (_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchBar),\n                value: searchTerm,\n                onChange: (e)=>setSearchTerm(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Sidebar.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().chatList),\n                children: filteredChatItems.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().chatItem),\n                        children: chat.name\n                    }, chat.id, false, {\n                        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Sidebar.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Sidebar.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Sidebar.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"a1cMJ8t0eYFnsCEdGcHtaGJdbCM=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlDQUFpQzs7O0FBQ087QUFDRTtBQUUxQyxNQUFNRyxVQUFVOztJQUNkLDJCQUEyQjtJQUMzQixNQUFNQyxZQUFZO1FBQ2hCO1lBQUVDLElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO1FBQ3hCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFTO0tBQ3pCO0lBRUQsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3Qyx1REFBdUQ7SUFDdkQsTUFBTVEsb0JBQW9CTCxVQUFVTSxNQUFNLENBQUMsQ0FBQ0MsT0FDMUNBLEtBQUtMLElBQUksQ0FBQ00sV0FBVyxHQUFHQyxRQUFRLENBQUNOLFdBQVdLLFdBQVc7SUFHekQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdiLG9FQUFjOzswQkFFNUIsOERBQUNlO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaSixXQUFXYixzRUFBZ0I7Z0JBQzNCbUIsT0FBT2Q7Z0JBQ1BlLFVBQVUsQ0FBQ0MsSUFBTWYsY0FBY2UsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBSS9DLDhEQUFDSTtnQkFBR1YsV0FBV2IscUVBQWU7MEJBQzNCTyxrQkFBa0JrQixHQUFHLENBQUMsQ0FBQ2hCLHFCQUN0Qiw4REFBQ2lCO3dCQUFpQmIsV0FBV2IscUVBQWU7a0NBQ3pDUyxLQUFLTCxJQUFJO3VCQURISyxLQUFLTixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzFCO0dBakRNRjtLQUFBQTtBQW1ETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9jb21wb25lbnRzL1NpZGViYXIuanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZWJhci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgLy8gQmVpc3BpZWxoYWZ0ZSBDaGF0LUl0ZW1zXHJcbiAgY29uc3QgY2hhdEl0ZW1zID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ0NoYXQgMScgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdDaGF0IDInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnQ2hhdCAzJyB9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogJ0NoYXQgMScgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdDaGF0IDInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnQ2hhdCAzJyB9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogJ0NoYXQgMScgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdDaGF0IDInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnQ2hhdCAzJyB9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogJ0NoYXQgMScgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdDaGF0IDInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnQ2hhdCAzJyB9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogJ0NoYXQgMScgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdDaGF0IDInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnQ2hhdCAzJyB9LFxyXG4gIF07XHJcblxyXG4gIC8vIFp1c3RhbmQgZsO8ciBkZW4gU3VjaGJlZ3JpZmZcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIEZpbHRlcmUgZGllIENoYXQtSXRlbXMgYmFzaWVyZW5kIGF1ZiBkZW0gU3VjaGJlZ3JpZmZcclxuICBjb25zdCBmaWx0ZXJlZENoYXRJdGVtcyA9IGNoYXRJdGVtcy5maWx0ZXIoKGNoYXQpID0+XHJcbiAgICBjaGF0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgIHsvKiBTdWNobGVpc3RlICovfVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggYnkgdXNlcm5hbWUuLlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfVxyXG4gICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogQ2hhdC1MaXN0ZSAqL31cclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRMaXN0fT5cclxuICAgICAgICB7ZmlsdGVyZWRDaGF0SXRlbXMubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtjaGF0LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SXRlbX0+XHJcbiAgICAgICAgICAgIHtjaGF0Lm5hbWV9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWRlYmFyIiwiY2hhdEl0ZW1zIiwiaWQiLCJuYW1lIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmaWx0ZXJlZENoYXRJdGVtcyIsImZpbHRlciIsImNoYXQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lkZWJhciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoQmFyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ1bCIsImNoYXRMaXN0IiwibWFwIiwibGkiLCJjaGF0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n"));

/***/ })

});