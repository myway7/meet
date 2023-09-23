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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"tabContainer\": \"Home_tabContainer__3WHKZ\",\n\t\"tabSelect\": \"Home_tabSelect__HqI3i\",\n\t\"tabContent\": \"Home_tabContent__RLkmC\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWtpdC1tZWV0Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwidGFiQ29udGFpbmVyXCI6IFwiSG9tZV90YWJDb250YWluZXJfXzNXSEtaXCIsXG5cdFwidGFiU2VsZWN0XCI6IFwiSG9tZV90YWJTZWxlY3RfX0hxSTNpXCIsXG5cdFwidGFiQ29udGVudFwiOiBcIkhvbWVfdGFiQ29udGVudF9fUkxrbUNcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./lib/client-utils.ts":
/*!*****************************!*\
  !*** ./lib/client-utils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decodePassphrase\": () => (/* binding */ decodePassphrase),\n/* harmony export */   \"encodePassphrase\": () => (/* binding */ encodePassphrase),\n/* harmony export */   \"generateRoomId\": () => (/* binding */ generateRoomId),\n/* harmony export */   \"randomString\": () => (/* binding */ randomString),\n/* harmony export */   \"useServerUrl\": () => (/* binding */ useServerUrl)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useServerUrl(region) {\n    const { 0: serverUrl , 1: setServerUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        let endpoint = `/api/url`;\n        if (region) {\n            endpoint += `?region=${region}`;\n        }\n        fetch(endpoint).then(async (res)=>{\n            if (res.ok) {\n                const body = await res.json();\n                console.log(body);\n                setServerUrl(body.url);\n            } else {\n                throw Error(\"Error fetching server url, check server logs\");\n            }\n        });\n    });\n    return serverUrl;\n}\nfunction encodePassphrase(passphrase) {\n    return encodeURIComponent(passphrase);\n}\nfunction decodePassphrase(base64String) {\n    return decodeURIComponent(base64String);\n}\nfunction generateRoomId() {\n    return `${randomString(4)}-${randomString(4)}`;\n}\nfunction randomString(length) {\n    let result = \"\";\n    const characters = \"abcdefghijklmnopqrstuvwxyz0123456789\";\n    const charactersLength = characters.length;\n    for(let i = 0; i < length; i++){\n        result += characters.charAt(Math.floor(Math.random() * charactersLength));\n    }\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LXV0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFFckMsU0FBU0UsWUFBWSxDQUFDQyxNQUFlLEVBQUU7SUFDNUMsTUFBTSxLQUFDQyxTQUFTLE1BQUVDLFlBQVksTUFBSUosK0NBQVEsRUFBc0I7SUFDaEVELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlNLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUN6QixJQUFJSCxNQUFNLEVBQUU7WUFDVkcsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFSCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDREksS0FBSyxDQUFDRCxRQUFRLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLE9BQU9DLEdBQUcsR0FBSztZQUNsQyxJQUFJQSxHQUFHLENBQUNDLEVBQUUsRUFBRTtnQkFDVixNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7Z0JBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCTixZQUFZLENBQUNNLElBQUksQ0FBQ0ksR0FBRyxDQUFDLENBQUM7WUFDekIsT0FBTztnQkFDTCxNQUFNQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU9aLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRU0sU0FBU2EsZ0JBQWdCLENBQUNDLFVBQWtCLEVBQUU7SUFDbkQsT0FBT0Msa0JBQWtCLENBQUNELFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFFTSxTQUFTRSxnQkFBZ0IsQ0FBQ0MsWUFBb0IsRUFBRTtJQUNyRCxPQUFPQyxrQkFBa0IsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVNLFNBQVNFLGNBQWMsR0FBVztJQUN2QyxPQUFPLENBQUMsRUFBRUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRU0sU0FBU0EsWUFBWSxDQUFDQyxNQUFjLEVBQVU7SUFDbkQsSUFBSUMsTUFBTSxHQUFHLEVBQUU7SUFDZixNQUFNQyxVQUFVLEdBQUcsc0NBQXNDO0lBQ3pELE1BQU1DLGdCQUFnQixHQUFHRCxVQUFVLENBQUNGLE1BQU07SUFDMUMsSUFBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdKLE1BQU0sRUFBRUksQ0FBQyxFQUFFLENBQUU7UUFDL0JILE1BQU0sSUFBSUMsVUFBVSxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHTCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELE9BQU9GLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWtpdC1tZWV0Ly4vbGliL2NsaWVudC11dGlscy50cz8yZDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXJ2ZXJVcmwocmVnaW9uPzogc3RyaW5nKSB7XG4gIGNvbnN0IFtzZXJ2ZXJVcmwsIHNldFNlcnZlclVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYC9hcGkvdXJsYDtcbiAgICBpZiAocmVnaW9uKSB7XG4gICAgICBlbmRwb2ludCArPSBgP3JlZ2lvbj0ke3JlZ2lvbn1gO1xuICAgIH1cbiAgICBmZXRjaChlbmRwb2ludCkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgICAgc2V0U2VydmVyVXJsKGJvZHkudXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2ZXIgdXJsLCBjaGVjayBzZXJ2ZXIgbG9ncycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHNlcnZlclVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVBhc3NwaHJhc2UocGFzc3BocmFzZTogc3RyaW5nKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQocGFzc3BocmFzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQYXNzcGhyYXNlKGJhc2U2NFN0cmluZzogc3RyaW5nKSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYmFzZTY0U3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm9vbUlkKCk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyYW5kb21TdHJpbmcoNCl9LSR7cmFuZG9tU3RyaW5nKDQpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21TdHJpbmcobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VydmVyVXJsIiwicmVnaW9uIiwic2VydmVyVXJsIiwic2V0U2VydmVyVXJsIiwiZW5kcG9pbnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImJvZHkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVybCIsIkVycm9yIiwiZW5jb2RlUGFzc3BocmFzZSIsInBhc3NwaHJhc2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGVQYXNzcGhyYXNlIiwiYmFzZTY0U3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2VuZXJhdGVSb29tSWQiLCJyYW5kb21TdHJpbmciLCJsZW5ndGgiLCJyZXN1bHQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client-utils.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client-utils */ \"./lib/client-utils.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction DemoMeetingTab({ label  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const startMeeting = ()=>{\n        router.push(`/meeting/?roomName=${(0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_3__.generateRoomId)()}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabContent),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn\",\n            onClick: startMeeting,\n            children: \"Start Meeting\"\n        }, void 0, false, {\n            fileName: \"/Users/myway/js-project/meet/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myway/js-project/meet/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nconst Home = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { isLoggedIn , user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.userState);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(isLoggedIn);\n        console.log(user);\n        if (isLoggedIn) {\n            router.push(\"/\");\n        } else {\n            router.push(\"/login\");\n        }\n    }, [\n        isLoggedIn,\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DemoMeetingTab, {\n                label: \"Demo\"\n            }, void 0, false, {\n                fileName: \"/Users/myway/js-project/meet/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/myway/js-project/meet/pages/index.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDeUI7QUFDbEI7QUFDc0M7QUFFOUI7QUFFdkQsU0FBU00sY0FBYyxDQUFDLEVBQUVDLEtBQUssR0FBcUIsRUFBRTtJQUNwRCxNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsTUFBTVMsWUFBWSxHQUFHLElBQU07UUFDekJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUMsbUJBQW1CLEVBQUVOLGlFQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCwyRUFBaUI7a0JBRS9CLDRFQUFDVyxRQUFNO1lBQUNGLFNBQVMsRUFBQyxLQUFLO1lBQUNHLE9BQU8sRUFBRU4sWUFBWTtzQkFBRSxlQUUvQzs7Ozs7Z0JBQVM7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7QUFHRCxNQUFNTyxJQUFJLEdBQUcsSUFBTTtJQUNqQixNQUFNUixNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFDaUIsVUFBVSxHQUFDQyxJQUFJLEdBQUMsR0FBR2Isd0RBQVcsQ0FBQyxDQUFDYyxLQUFTLEdBQUdBLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO0lBQ25FbEIsZ0RBQVMsQ0FBQyxJQUFJO1FBQ1ptQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsVUFBVSxDQUFDO1FBQ3ZCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDO1FBQ2pCLElBQUdELFVBQVUsRUFBQztZQUNaVCxNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsT0FBSztZQUNIRixNQUFNLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUMsRUFBQztRQUFDTyxVQUFVO1FBQUNDLElBQUk7S0FBQyxDQUFDO0lBRXBCLHFCQUNFO2tCQUNFLDRFQUFDSyxNQUFJO1lBQUNYLFNBQVMsRUFBRVQscUVBQVc7c0JBbUIxQiw0RUFBQ0csY0FBYztnQkFBQ0MsS0FBSyxFQUFDLE1BQU07Ozs7O3lCQUFHOzs7OztxQkFDMUI7cUJBWU4sQ0FDSDtBQUNKLENBQUM7QUFFRCxpRUFBZVMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWtpdC1tZWV0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBlbmNvZGVQYXNzcGhyYXNlLCBnZW5lcmF0ZVJvb21JZCwgcmFuZG9tU3RyaW5nIH0gZnJvbSAnLi4vbGliL2NsaWVudC11dGlscyc7XG5pbXBvcnQge1VzZXJDdXJyZW50U3RhdGV9IGZyb20gXCIuLi9yZWR1eC9zbGljZXNcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIERlbW9NZWV0aW5nVGFiKHsgbGFiZWwgfTogeyBsYWJlbDogc3RyaW5nIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN0YXJ0TWVldGluZyA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL21lZXRpbmcvP3Jvb21OYW1lPSR7Z2VuZXJhdGVSb29tSWQoKX1gKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYkNvbnRlbnR9PlxuICAgICAgey8qIDxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5UcnkgTGl2ZUtpdCBNZWV0IGZvciBmcmVlIHdpdGggb3VyIGxpdmUgZGVtbyBwcm9qZWN0LjwvcD4gKi99XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuJyBvbkNsaWNrPXtzdGFydE1lZXRpbmd9PlxuICAgICAgICBTdGFydCBNZWV0aW5nXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge2lzTG9nZ2VkSW4sdXNlcn0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+c3RhdGUudXNlclN0YXRlKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc29sZS5sb2coaXNMb2dnZWRJbilcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIGlmKGlzTG9nZ2VkSW4pe1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXG4gICAgfWVsc2V7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgIH1cbiAgfSxbaXNMb2dnZWRJbix1c2VyXSlcbiBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9saXZla2l0LW1lZXQtaG9tZS5zdmdcIiBhbHQ9XCJMaXZlS2l0IE1lZXRcIiB3aWR0aD1cIjM2MFwiIGhlaWdodD1cIjQ1XCIgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBPcGVuIHNvdXJjZSB2aWRlbyBjb25mZXJlbmNpbmcgYXBwIGJ1aWx0IG9ueycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGl2ZWtpdC9jb21wb25lbnRzLWpzP3JlZj1tZWV0XCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgICAgTGl2ZUtpdCZuYnNwO0NvbXBvbmVudHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICx7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGl2ZWtpdC5pby9jbG91ZD9yZWY9bWVldFwiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgIExpdmVLaXQmbmJzcDtDbG91ZFxuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICBhbmQgTmV4dC5qcy5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8VGFicyBzZWxlY3RlZEluZGV4PXt0YWJJbmRleH0gb25UYWJTZWxlY3RlZD17b25UYWJTZWxlY3RlZH0+XG4gICAgICAgICAgPERlbW9NZWV0aW5nVGFiIGxhYmVsPVwiRGVtb1wiIC8+XG4gICAgICAgICAgPEN1c3RvbUNvbm5lY3Rpb25UYWIgbGFiZWw9XCJDdXN0b21cIiAvPlxuICAgICAgICA8L1RhYnM+ICovfVxuICAgICAgICA8RGVtb01lZXRpbmdUYWIgbGFiZWw9XCJEZW1vXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIHsvKiA8Zm9vdGVyIGRhdGEtbGstdGhlbWU9XCJkZWZhdWx0XCI+XG4gICAgICAgIEhvc3RlZCBvbnsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xpdmVraXQuaW8vY2xvdWQ/cmVmPW1lZXRcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgIExpdmVLaXQgQ2xvdWRcbiAgICAgICAgPC9hPlxuICAgICAgICAuIFNvdXJjZSBjb2RlIG9ueycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9saXZla2l0L21lZXQ/cmVmPW1lZXRcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgIEdpdEh1YlxuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJnZW5lcmF0ZVJvb21JZCIsInVzZVNlbGVjdG9yIiwiRGVtb01lZXRpbmdUYWIiLCJsYWJlbCIsInJvdXRlciIsInN0YXJ0TWVldGluZyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJDb250ZW50IiwiYnV0dG9uIiwib25DbGljayIsIkhvbWUiLCJpc0xvZ2dlZEluIiwidXNlciIsInN0YXRlIiwidXNlclN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();