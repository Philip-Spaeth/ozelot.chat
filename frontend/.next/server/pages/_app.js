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

/***/ "./styles/Navbar.module.css":
/*!**********************************!*\
  !*** ./styles/Navbar.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Navbar_navbar__zhZYq\",\n\t\"navLeft\": \"Navbar_navLeft__6GX9H\",\n\t\"logo\": \"Navbar_logo__YNqJh\",\n\t\"navLinks\": \"Navbar_navLinks__fa9HS\",\n\t\"link\": \"Navbar_link__koQk0\",\n\t\"navRight\": \"Navbar_navRight__r7M1F\",\n\t\"logoutButton\": \"Navbar_logoutButton__ycrxT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzcz9lYzI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdmJhcl9uYXZiYXJfX3poWllxXCIsXG5cdFwibmF2TGVmdFwiOiBcIk5hdmJhcl9uYXZMZWZ0X182R1g5SFwiLFxuXHRcImxvZ29cIjogXCJOYXZiYXJfbG9nb19fWU5xSmhcIixcblx0XCJuYXZMaW5rc1wiOiBcIk5hdmJhcl9uYXZMaW5rc19fZmE5SFNcIixcblx0XCJsaW5rXCI6IFwiTmF2YmFyX2xpbmtfX2tvUWswXCIsXG5cdFwibmF2UmlnaHRcIjogXCJOYXZiYXJfbmF2UmlnaHRfX3I3TTFGXCIsXG5cdFwibG9nb3V0QnV0dG9uXCI6IFwiTmF2YmFyX2xvZ291dEJ1dHRvbl9feWNyeFRcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Navbar.module.css\n");

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_4__]);\n_context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// frontend/components/Navbar.js\n\n\n\n\n\n\nconst Navbar = ()=>{\n    const { user, handleLogout, loading } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const excludedPages = [\n        \"/login\",\n        \"/register\"\n    ];\n    const pathname = router.pathname;\n    if (loading) {\n        // Während des Ladens nichts anzeigen oder einen Ladeindikator\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLeft),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                        children: \"Ozelot.chat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navLinks),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navRight),\n                children: user && !excludedPages.includes(pathname) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoutButton),\n                    onClick: handleLogout,\n                    children: \"log out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\components\\\\Navbar.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7O0FBQ0c7QUFDTjtBQUNXO0FBQ2E7QUFDSjtBQUVqRCxNQUFNSyxTQUFTO0lBQ2IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDRyw2REFBV0E7SUFDOUQsTUFBTU0sU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLGdCQUFnQjtRQUFDO1FBQVU7S0FBWTtJQUM3QyxNQUFNQyxXQUFXRixPQUFPRSxRQUFRO0lBRWhDLElBQUlILFNBQVM7UUFDWCw4REFBOEQ7UUFDOUQsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVdULHlFQUFhOzswQkFDM0IsOERBQUNXO2dCQUFJRixXQUFXVCwwRUFBYzs7a0NBQzVCLDhEQUFDSCxrREFBSUE7d0JBQUNnQixNQUFLO3dCQUFJSixXQUFXVCx1RUFBVztrQ0FBRTs7Ozs7O2tDQUd2Qyw4REFBQ1c7d0JBQUlGLFdBQVdULDJFQUFlO2tDQUM3Qiw0RUFBQ0gsa0RBQUlBOzRCQUFDZ0IsTUFBSzs0QkFBSUosV0FBV1QsdUVBQVc7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVczQyw4REFBQ1c7Z0JBQUlGLFdBQVdULDJFQUFlOzBCQUM1QkUsUUFBUSxDQUFDSSxjQUFjWSxRQUFRLENBQUNYLDJCQUMvQiw4REFBQ1k7b0JBQU9WLFdBQVdULCtFQUFtQjtvQkFBRXFCLFNBQVNsQjs4QkFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekU7QUFFQSxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9jb21wb25lbnRzL05hdmJhci5qc1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Vc2VyQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXIsIGhhbmRsZUxvZ291dCwgbG9hZGluZyB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZXhjbHVkZWRQYWdlcyA9IFsnL2xvZ2luJywgJy9yZWdpc3RlciddO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgLy8gV8OkaHJlbmQgZGVzIExhZGVucyBuaWNodHMgYW56ZWlnZW4gb2RlciBlaW5lbiBMYWRlaW5kaWthdG9yXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGVmdH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgIE96ZWxvdC5jaGF0XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua3N9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgey8qIFdlaXRlcmUgTGlua3Mga8O2bm5lbiBoaWVyIGhpbnp1Z2Vmw7xndCB3ZXJkZW4gKi99XHJcbiAgICAgICAgICB7LyogQmVpc3BpZWw6XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgIMOcYmVyIHVuc1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdlJpZ2h0fT5cclxuICAgICAgICB7dXNlciAmJiAhZXhjbHVkZWRQYWdlcy5pbmNsdWRlcyhwYXRobmFtZSkgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXRCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgIGxvZyBvdXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsInN0eWxlcyIsIk5hdmJhciIsInVzZXIiLCJoYW5kbGVMb2dvdXQiLCJsb2FkaW5nIiwicm91dGVyIiwiZXhjbHVkZWRQYWdlcyIsInBhdGhuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwiZGl2IiwibmF2TGVmdCIsImhyZWYiLCJsb2dvIiwibmF2TGlua3MiLCJsaW5rIiwibmF2UmlnaHQiLCJpbmNsdWRlcyIsImJ1dHRvbiIsImxvZ291dEJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// frontend/context/UserContext.js\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nlet socket;\nconst UserProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // Anfangszustand: undefined\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Ladezustand\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Leeres Array\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Token aus dem lokalen Speicher abrufen\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            // Hier solltest du den Benutzernamen aus dem Token oder einer API abrufen\n            setUser({\n                token,\n                username: \"DeinBenutzername\"\n            }); // Beispiel: Füge den Benutzernamen hinzu\n        } else {\n            setUser(null);\n        }\n        setLoading(false); // Ladezustand beenden\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user && user.token) {\n            // Initialisiere Socket.io Verbindung\n            socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:5000\", {\n                auth: {\n                    token: user.token\n                }\n            });\n            // Empfang von Nachrichten\n            socket.on(\"receiveMessage\", (message)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        message\n                    ]);\n            });\n            // Fehlerbehandlung\n            socket.on(\"error\", (error)=>{\n                console.error(\"Socket.io Fehler:\", error);\n            });\n            return ()=>{\n                socket.disconnect();\n            };\n        }\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            if (user && user.token) {\n                try {\n                    const res = await fetch(\"http://localhost:5000/api/messages\", {\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            Authorization: `Bearer ${user.token}`\n                        }\n                    });\n                    if (res.ok) {\n                        const data = await res.json();\n                        setMessages(data);\n                    } else {\n                        console.error(\"Fehler beim Abrufen der Nachrichten:\", res.statusText);\n                    }\n                } catch (error) {\n                    console.error(\"Fehler beim Abrufen der Nachrichten:\", error);\n                }\n            }\n        };\n        fetchMessages();\n    }, [\n        user\n    ]);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        setUser(null);\n        setMessages([]); // Nachrichten löschen\n        router.push(\"/login\");\n        if (socket) socket.disconnect();\n    };\n    const sendMessage = (content)=>{\n        if (socket) {\n            socket.emit(\"sendMessage\", content);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            setUser,\n            handleLogout,\n            loading,\n            messages,\n            sendMessage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\context\\\\UserContext.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUFrQzs7QUFDeUI7QUFDbkI7QUFDRjtBQUUvQixNQUFNSyw0QkFBY0wsb0RBQWFBLEdBQUc7QUFFM0MsSUFBSU07QUFFRyxNQUFNQyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQ1UsWUFBWSw0QkFBNEI7SUFDekUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLE9BQU8sY0FBYztJQUM1RCxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUMsRUFBRSxHQUFHLGVBQWU7SUFDN0QsTUFBTWUsU0FBU2Isc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLHlDQUF5QztRQUN6QyxNQUFNZSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSUYsT0FBTztZQUNULDBFQUEwRTtZQUMxRVAsUUFBUTtnQkFBRU87Z0JBQU9HLFVBQVU7WUFBbUIsSUFBSSx5Q0FBeUM7UUFDN0YsT0FBTztZQUNMVixRQUFRO1FBQ1Y7UUFDQUcsV0FBVyxRQUFRLHNCQUFzQjtJQUMzQyxHQUFHLEVBQUU7SUFFTFgsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxRQUFRQSxLQUFLUSxLQUFLLEVBQUU7WUFDdEIscUNBQXFDO1lBQ3JDWCxTQUFTRixvREFBRUEsQ0FBQyx5QkFBeUI7Z0JBQ25DaUIsTUFBTTtvQkFDSkosT0FBT1IsS0FBS1EsS0FBSztnQkFDbkI7WUFDRjtZQUVBLDBCQUEwQjtZQUMxQlgsT0FBT2dCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQ0M7Z0JBQzNCUixZQUFZLENBQUNTLGVBQWlCOzJCQUFJQTt3QkFBY0Q7cUJBQVE7WUFDMUQ7WUFFQSxtQkFBbUI7WUFDbkJqQixPQUFPZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQ0c7Z0JBQ2xCQyxRQUFRRCxLQUFLLENBQUMscUJBQXFCQTtZQUNyQztZQUVBLE9BQU87Z0JBQ0xuQixPQUFPcUIsVUFBVTtZQUNuQjtRQUNGO0lBQ0YsR0FBRztRQUFDbEI7S0FBSztJQUVUUCxnREFBU0EsQ0FBQztRQUNSLE1BQU0wQixnQkFBZ0I7WUFDcEIsSUFBSW5CLFFBQVFBLEtBQUtRLEtBQUssRUFBRTtnQkFDdEIsSUFBSTtvQkFDRixNQUFNWSxNQUFNLE1BQU1DLE1BQU0sc0NBQXNDO3dCQUM1REMsU0FBUzs0QkFDUCxnQkFBZ0I7NEJBQ2hCQyxlQUFlLENBQUMsT0FBTyxFQUFFdkIsS0FBS1EsS0FBSyxDQUFDLENBQUM7d0JBQ3ZDO29CQUNGO29CQUVBLElBQUlZLElBQUlJLEVBQUUsRUFBRTt3QkFDVixNQUFNQyxPQUFPLE1BQU1MLElBQUlNLElBQUk7d0JBQzNCcEIsWUFBWW1CO29CQUNkLE9BQU87d0JBQ0xSLFFBQVFELEtBQUssQ0FBQyx3Q0FBd0NJLElBQUlPLFVBQVU7b0JBQ3RFO2dCQUNGLEVBQUUsT0FBT1gsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7Z0JBQ3hEO1lBQ0Y7UUFDRjtRQUVBRztJQUNGLEdBQUc7UUFBQ25CO0tBQUs7SUFFVCxNQUFNNEIsZUFBZTtRQUNuQm5CLGFBQWFvQixVQUFVLENBQUM7UUFDeEI1QixRQUFRO1FBQ1JLLFlBQVksRUFBRSxHQUFHLHNCQUFzQjtRQUN2Q0MsT0FBT3VCLElBQUksQ0FBQztRQUNaLElBQUlqQyxRQUFRQSxPQUFPcUIsVUFBVTtJQUMvQjtJQUVBLE1BQU1hLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSW5DLFFBQVE7WUFDVkEsT0FBT29DLElBQUksQ0FBQyxlQUFlRDtRQUM3QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNwQyxZQUFZc0MsUUFBUTtRQUFDQyxPQUFPO1lBQUVuQztZQUFNQztZQUFTMkI7WUFBY3pCO1lBQVNFO1lBQVUwQjtRQUFZO2tCQUN4RmhDOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzPzg2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQvY29udGV4dC9Vc2VyQ29udGV4dC5qc1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpOyAvLyBBbmZhbmdzenVzdGFuZDogdW5kZWZpbmVkXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIExhZGV6dXN0YW5kXHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8vIExlZXJlcyBBcnJheVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gVG9rZW4gYXVzIGRlbSBsb2thbGVuIFNwZWljaGVyIGFicnVmZW5cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgLy8gSGllciBzb2xsdGVzdCBkdSBkZW4gQmVudXR6ZXJuYW1lbiBhdXMgZGVtIFRva2VuIG9kZXIgZWluZXIgQVBJIGFicnVmZW5cclxuICAgICAgc2V0VXNlcih7IHRva2VuLCB1c2VybmFtZTogJ0RlaW5CZW51dHplcm5hbWUnIH0pOyAvLyBCZWlzcGllbDogRsO8Z2UgZGVuIEJlbnV0emVybmFtZW4gaGluenVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gTGFkZXp1c3RhbmQgYmVlbmRlblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyICYmIHVzZXIudG9rZW4pIHtcclxuICAgICAgLy8gSW5pdGlhbGlzaWVyZSBTb2NrZXQuaW8gVmVyYmluZHVuZ1xyXG4gICAgICBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDo1MDAwJywge1xyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgIHRva2VuOiB1c2VyLnRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRW1wZmFuZyB2b24gTmFjaHJpY2h0ZW5cclxuICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZV0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEZlaGxlcmJlaGFuZGx1bmdcclxuICAgICAgc29ja2V0Lm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvY2tldC5pbyBGZWhsZXI6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHVzZXIgJiYgdXNlci50b2tlbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9tZXNzYWdlcycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIudG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmVobGVyIGJlaW0gQWJydWZlbiBkZXIgTmFjaHJpY2h0ZW46JywgcmVzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGZWhsZXIgYmVpbSBBYnJ1ZmVuIGRlciBOYWNocmljaHRlbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoTWVzc2FnZXMoKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICBzZXRNZXNzYWdlcyhbXSk7IC8vIE5hY2hyaWNodGVuIGzDtnNjaGVuXHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICBpZiAoc29ja2V0KSBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGNvbnRlbnQpID0+IHtcclxuICAgIGlmIChzb2NrZXQpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywgY29udGVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyLCBoYW5kbGVMb2dvdXQsIGxvYWRpbmcsIG1lc3NhZ2VzLCBzZW5kTWVzc2FnZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiaW8iLCJVc2VyQ29udGV4dCIsInNvY2tldCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1bmRlZmluZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb3V0ZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VybmFtZSIsImF1dGgiLCJvbiIsIm1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXNjb25uZWN0IiwiZmV0Y2hNZXNzYWdlcyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJvayIsImRhdGEiLCJqc29uIiwic3RhdHVzVGV4dCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwiZW1pdCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/UserContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__]);\n([_context_UserContext__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// frontend/pages/_app.js\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUI7O0FBQ007QUFDdUI7QUFDWjtBQUUxQyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSiw4REFBWUE7OzBCQUNYLDhEQUFDQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kL3BhZ2VzL19hcHAuanNcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1VzZXJDb250ZXh0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJQcm92aWRlcj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1VzZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlVzZXJQcm92aWRlciIsIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();