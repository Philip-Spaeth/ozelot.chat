"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n// frontend/context/UserContext.js\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nlet socket;\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // Anfangszustand: undefined\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Ladezustand\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Leeres Array statt Testnachrichten\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Token aus dem lokalen Speicher abrufen\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            // Hier solltest du den Benutzernamen aus dem Token oder einer API abrufen\n            setUser({\n                token,\n                username: \"DeinBenutzername\"\n            }); // Beispiel: Füge den Benutzernamen hinzu\n        } else {\n            setUser(null);\n        }\n        setLoading(false); // Ladezustand beenden\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user && user.token) {\n            // Initialisiere Socket.io Verbindung\n            socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:5000\", {\n                auth: {\n                    token: user.token\n                }\n            });\n            // Empfang von Nachrichten\n            socket.on(\"receiveMessage\", (message)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        message\n                    ]);\n            });\n            // Fehlerbehandlung\n            socket.on(\"error\", (error)=>{\n                console.error(\"Socket.io Fehler:\", error);\n            });\n            return ()=>{\n                socket.disconnect();\n            };\n        }\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            if (user && user.token) {\n                try {\n                    const res = await fetch(\"http://localhost:5000/api/messages\", {\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: \"Bearer \".concat(user.token)\n                        }\n                    });\n                    if (res.ok) {\n                        const data = await res.json();\n                        setMessages(data);\n                    } else {\n                        console.error(\"Fehler beim Abrufen der Nachrichten:\", res.statusText);\n                    }\n                } catch (error) {\n                    console.error(\"Fehler beim Abrufen der Nachrichten:\", error);\n                }\n            }\n        };\n        fetchMessages();\n    }, [\n        user\n    ]);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        setUser(null);\n        setMessages([]); // Nachrichten löschen\n        router.push(\"/login\");\n        if (socket) socket.disconnect();\n    };\n    const sendMessage = (content)=>{\n        if (socket) {\n            socket.emit(\"sendMessage\", content);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            setUser,\n            handleLogout,\n            loading,\n            messages,\n            sendMessage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\context\\\\UserContext.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"21lzU6kvrwOqSULXT45CJxeWETg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserProvider;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzPzg2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQvY29udGV4dC9Vc2VyQ29udGV4dC5qc1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpOyAvLyBBbmZhbmdzenVzdGFuZDogdW5kZWZpbmVkXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIExhZGV6dXN0YW5kXHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8vIExlZXJlcyBBcnJheSBzdGF0dCBUZXN0bmFjaHJpY2h0ZW5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFRva2VuIGF1cyBkZW0gbG9rYWxlbiBTcGVpY2hlciBhYnJ1ZmVuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIC8vIEhpZXIgc29sbHRlc3QgZHUgZGVuIEJlbnV0emVybmFtZW4gYXVzIGRlbSBUb2tlbiBvZGVyIGVpbmVyIEFQSSBhYnJ1ZmVuXHJcbiAgICAgIHNldFVzZXIoeyB0b2tlbiwgdXNlcm5hbWU6ICdEZWluQmVudXR6ZXJuYW1lJyB9KTsgLy8gQmVpc3BpZWw6IEbDvGdlIGRlbiBCZW51dHplcm5hbWVuIGhpbnp1XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIExhZGV6dXN0YW5kIGJlZW5kZW5cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiB1c2VyLnRva2VuKSB7XHJcbiAgICAgIC8vIEluaXRpYWxpc2llcmUgU29ja2V0LmlvIFZlcmJpbmR1bmdcclxuICAgICAgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsIHtcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICB0b2tlbjogdXNlci50b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEVtcGZhbmcgdm9uIE5hY2hyaWNodGVuXHJcbiAgICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2UnLCAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1lc3NhZ2VdKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBGZWhsZXJiZWhhbmRsdW5nXHJcbiAgICAgIHNvY2tldC5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTb2NrZXQuaW8gRmVobGVyOicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyICYmIHVzZXIudG9rZW4pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbWVzc2FnZXMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLnRva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhkYXRhKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZlaGxlciBiZWltIEFicnVmZW4gZGVyIE5hY2hyaWNodGVuOicsIHJlcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmVobGVyIGJlaW0gQWJydWZlbiBkZXIgTmFjaHJpY2h0ZW46JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaE1lc3NhZ2VzKCk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgc2V0TWVzc2FnZXMoW10pOyAvLyBOYWNocmljaHRlbiBsw7ZzY2hlblxyXG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgaWYgKHNvY2tldCkgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChjb250ZW50KSA9PiB7XHJcbiAgICBpZiAoc29ja2V0KSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciwgaGFuZGxlTG9nb3V0LCBsb2FkaW5nLCBtZXNzYWdlcywgc2VuZE1lc3NhZ2UgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImlvIiwiVXNlckNvbnRleHQiLCJzb2NrZXQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidW5kZWZpbmVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlcm5hbWUiLCJhdXRoIiwib24iLCJtZXNzYWdlIiwicHJldk1lc3NhZ2VzIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlzY29ubmVjdCIsImZldGNoTWVzc2FnZXMiLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwib2siLCJkYXRhIiwianNvbiIsInN0YXR1c1RleHQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsImVtaXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/UserContext.js\n"));

/***/ })

});