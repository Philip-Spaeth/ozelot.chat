/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./components/MessageInput.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./components/MessageInput.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* frontend/components/MessageInput.module.css */\\r\\n\\r\\n.MessageInput_messageForm__AEYl8 {\\r\\n    display: flex;\\r\\n    align-items: center; /* Vertikale Ausrichtung der Elemente */\\r\\n    padding: 1rem;\\r\\n    background-color: hsl(0, 0%, 100%);\\r\\n    border: none;\\r\\n    position: fixed;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    \\r\\n  }\\r\\n  \\r\\n  .MessageInput_input__vpvA5 {\\r\\n    flex: 1 1;\\r\\n    padding: 0.5rem 1rem; /* Gleiche vertikale und horizontale Padding-Werte */\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 0.5rem;\\r\\n    margin-right: 0.5rem;\\r\\n    box-sizing: border-box;\\r\\n    font-size: 1rem; /* Konsistente Schriftgröße */\\r\\n  }\\r\\n  \\r\\n  .MessageInput_button__m0ws9 {\\r\\n    margin-top: 0.5rem;\\r\\n    padding: 0.5rem 1rem; /* Gleiche vertikale und horizontale Padding-Werte */\\r\\n    background-color: #1890ff;\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n    border-radius: 0.5rem;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n    box-sizing: border-box;\\r\\n    font-size: 1rem; /* Konsistente Schriftgröße */\\r\\n  }\\r\\n  \\r\\n  .MessageInput_button__m0ws9:hover {\\r\\n    background-color: #40a9ff;\\r\\n  }\\r\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://components/MessageInput.module.css\"],\"names\":[],\"mappings\":\"AAAA,gDAAgD;;AAEhD;IACI,aAAa;IACb,mBAAmB,EAAE,uCAAuC;IAC5D,aAAa;IACb,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,SAAS;IACT,OAAO;IACP,QAAQ;;EAEV;;EAEA;IACE,SAAO;IACP,oBAAoB,EAAE,oDAAoD;IAC1E,sBAAsB;IACtB,qBAAqB;IACrB,oBAAoB;IACpB,sBAAsB;IACtB,eAAe,EAAE,6BAA6B;EAChD;;EAEA;IACE,kBAAkB;IAClB,oBAAoB,EAAE,oDAAoD;IAC1E,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,sCAAsC;IACtC,sBAAsB;IACtB,eAAe,EAAE,6BAA6B;EAChD;;EAEA;IACE,yBAAyB;EAC3B\",\"sourcesContent\":[\"/* frontend/components/MessageInput.module.css */\\r\\n\\r\\n.messageForm {\\r\\n    display: flex;\\r\\n    align-items: center; /* Vertikale Ausrichtung der Elemente */\\r\\n    padding: 1rem;\\r\\n    background-color: hsl(0, 0%, 100%);\\r\\n    border: none;\\r\\n    position: fixed;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    \\r\\n  }\\r\\n  \\r\\n  .input {\\r\\n    flex: 1;\\r\\n    padding: 0.5rem 1rem; /* Gleiche vertikale und horizontale Padding-Werte */\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 0.5rem;\\r\\n    margin-right: 0.5rem;\\r\\n    box-sizing: border-box;\\r\\n    font-size: 1rem; /* Konsistente Schriftgröße */\\r\\n  }\\r\\n  \\r\\n  .button {\\r\\n    margin-top: 0.5rem;\\r\\n    padding: 0.5rem 1rem; /* Gleiche vertikale und horizontale Padding-Werte */\\r\\n    background-color: #1890ff;\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n    border-radius: 0.5rem;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n    box-sizing: border-box;\\r\\n    font-size: 1rem; /* Konsistente Schriftgröße */\\r\\n  }\\r\\n  \\r\\n  .button:hover {\\r\\n    background-color: #40a9ff;\\r\\n  }\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"messageForm\": \"MessageInput_messageForm__AEYl8\",\n\t\"input\": \"MessageInput_input__vpvA5\",\n\t\"button\": \"MessageInput_button__m0ws9\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vY29tcG9uZW50cy9NZXNzYWdlSW5wdXQubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EscUlBQXFJLHNCQUFzQiw2QkFBNkIsOERBQThELDJDQUEyQyxxQkFBcUIsd0JBQXdCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGVBQWUsd0NBQXdDLGtCQUFrQiw4QkFBOEIsb0ZBQW9GLDhCQUE4Qiw2QkFBNkIsK0JBQStCLHlCQUF5QixxQ0FBcUMseUNBQXlDLDJCQUEyQiw4QkFBOEIsdUZBQXVGLG9CQUFvQixxQkFBcUIsOEJBQThCLHdCQUF3QiwrQ0FBK0MsK0JBQStCLHlCQUF5QixxQ0FBcUMsK0NBQStDLGtDQUFrQyxPQUFPLGFBQWEsMkdBQTJHLE1BQU0sVUFBVSx3QkFBd0IsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSx3QkFBd0IsYUFBYSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGlHQUFpRyxzQkFBc0IsNkJBQTZCLDhEQUE4RCwyQ0FBMkMscUJBQXFCLHdCQUF3QixrQkFBa0IsZ0JBQWdCLGlCQUFpQixlQUFlLG9CQUFvQixnQkFBZ0IsOEJBQThCLG9GQUFvRiw4QkFBOEIsNkJBQTZCLCtCQUErQix5QkFBeUIscUNBQXFDLHFCQUFxQiwyQkFBMkIsOEJBQThCLHVGQUF1RixvQkFBb0IscUJBQXFCLDhCQUE4Qix3QkFBd0IsK0NBQStDLCtCQUErQix5QkFBeUIscUNBQXFDLDJCQUEyQixrQ0FBa0MsT0FBTyx5QkFBeUI7QUFDNTJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZUlucHV0Lm1vZHVsZS5jc3M/ZDE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZnJvbnRlbmQvY29tcG9uZW50cy9NZXNzYWdlSW5wdXQubW9kdWxlLmNzcyAqL1xcclxcblxcclxcbi5NZXNzYWdlSW5wdXRfbWVzc2FnZUZvcm1fX0FFWWw4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogVmVydGlrYWxlIEF1c3JpY2h0dW5nIGRlciBFbGVtZW50ZSAqL1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5NZXNzYWdlSW5wdXRfaW5wdXRfX3ZwdkE1IHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgLyogR2xlaWNoZSB2ZXJ0aWthbGUgdW5kIGhvcml6b250YWxlIFBhZGRpbmctV2VydGUgKi9cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtOyAvKiBLb25zaXN0ZW50ZSBTY2hyaWZ0Z3LDtsOfZSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTWVzc2FnZUlucHV0X2J1dHRvbl9fbTB3czkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAvKiBHbGVpY2hlIHZlcnRpa2FsZSB1bmQgaG9yaXpvbnRhbGUgUGFkZGluZy1XZXJ0ZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogS29uc2lzdGVudGUgU2NocmlmdGdyw7bDn2UgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLk1lc3NhZ2VJbnB1dF9idXR0b25fX20wd3M5OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwYTlmZjtcXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL01lc3NhZ2VJbnB1dC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFnRDs7QUFFaEQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVELGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7O0VBRVY7O0VBRUE7SUFDRSxTQUFPO0lBQ1Asb0JBQW9CLEVBQUUsb0RBQW9EO0lBQzFFLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlLEVBQUUsNkJBQTZCO0VBQ2hEOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFFLG9EQUFvRDtJQUMxRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsZUFBZSxFQUFFLDZCQUE2QjtFQUNoRDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBmcm9udGVuZC9jb21wb25lbnRzL01lc3NhZ2VJbnB1dC5tb2R1bGUuY3NzICovXFxyXFxuXFxyXFxuLm1lc3NhZ2VGb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogVmVydGlrYWxlIEF1c3JpY2h0dW5nIGRlciBFbGVtZW50ZSAqL1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAvKiBHbGVpY2hlIHZlcnRpa2FsZSB1bmQgaG9yaXpvbnRhbGUgUGFkZGluZy1XZXJ0ZSAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07IC8qIEtvbnNpc3RlbnRlIFNjaHJpZnRncsO2w59lICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAvKiBHbGVpY2hlIHZlcnRpa2FsZSB1bmQgaG9yaXpvbnRhbGUgUGFkZGluZy1XZXJ0ZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogS29uc2lzdGVudGUgU2NocmlmdGdyw7bDn2UgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MGE5ZmY7XFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZXNzYWdlRm9ybVwiOiBcIk1lc3NhZ2VJbnB1dF9tZXNzYWdlRm9ybV9fQUVZbDhcIixcblx0XCJpbnB1dFwiOiBcIk1lc3NhZ2VJbnB1dF9pbnB1dF9fdnB2QTVcIixcblx0XCJidXR0b25cIjogXCJNZXNzYWdlSW5wdXRfYnV0dG9uX19tMHdzOVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./components/MessageInput.module.css\n"));

/***/ })

});