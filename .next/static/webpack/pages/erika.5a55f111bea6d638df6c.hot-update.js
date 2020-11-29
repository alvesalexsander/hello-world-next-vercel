webpackHotUpdate_N_E("pages/erika",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/erika/index.tsx":
/*!*******************************!*\
  !*** ./pages/erika/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Alexsander Alves\\Desktop\\hello-world-next\\pages\\erika\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var contacts;
var setContacts;

function Erika() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContactForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContactsDetails, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = Erika;

function ContactForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      number = _useState2[0],
      setNumber = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      id: "name",
      placeholder: "nome",
      onChange: function onChange(event) {
        return setName(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange(event) {
        return setNumber(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      type: "button",
      onClick: function onClick() {
        return salvarContato({
          name: name,
          number: number
        });
      },
      children: "Salvar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);

  function salvarContato(contact) {
    var updatedContacts = contacts;
    updatedContacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
      children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
    }, contact.name, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 30
    }, this));
    setContacts(updatedContacts);
  }
}

_s(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function ContactsDetails() {
  _s2();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);

  var _useState4 = Object(C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2);

  contacts = _useState4[0];
  setContacts = _useState4[1];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ol", {
    children: contacts
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 12
  }, this);
}

_s2(ContactsDetails, "4bWmwqNpSmwrWYwBxf0uO8LDcFo=");

_c3 = ContactsDetails;
/* harmony default export */ __webpack_exports__["default"] = (Erika);

var _c, _c2, _c3;

$RefreshReg$(_c, "Erika");
$RefreshReg$(_c2, "ContactForm");
$RefreshReg$(_c3, "ContactsDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9lcmlrYS9pbmRleC50c3giXSwibmFtZXMiOlsiY29udGFjdHMiLCJzZXRDb250YWN0cyIsIkVyaWthIiwiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJjb250YWN0IiwidXBkYXRlZENvbnRhY3RzIiwicHVzaCIsIkNvbnRhY3RzRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNm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UDtBQUNIOztJQUhRZ0IsZTs7TUFBQUEsZTtBQU9NZCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcmlrYS41YTU1ZjExMWJlYTZkNjM4ZGY2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGNvbnRhY3RzO1xyXG5sZXQgc2V0Q29udGFjdHM7XHJcblxyXG5mdW5jdGlvbiBFcmlrYSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgT2zDoSwgdm9jw6ogY2hlZ291IG5hIG1pbmhhIGNhc2EuIE1ldSBub21lIMOpIMOJcmlrYSwgZSBzb3UgdW1hIGdlcmVudGUgZGUgY29udGF0b3MhIPCfk5bwn5OV8J+TsfCfkalcclxuICAgICAgICAgICAgQWRpY2lvbmUgc2V1cyBjb250YXRvcyBhYmFpeG86XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0c0RldGFpbHMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbWVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRlbGVmb25lXCIgdHlwZT1cInBob25lXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNhbHZhckNvbnRhdG8oeyBuYW1lLCBudW1iZXIgfSl9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhbHZhckNvbnRhdG8oY29udGFjdDogeyBuYW1lOiBzdHJpbmcsIG51bWJlcjogc3RyaW5nIH0pIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdHMgPSBjb250YWN0cztcclxuICAgICAgICB1cGRhdGVkQ29udGFjdHMucHVzaCg8bGkga2V5PXtjb250YWN0Lm5hbWV9PiBOb21lOiB7Y29udGFjdC5uYW1lfSB8IFRlbGVmb25lOiB7Y29udGFjdC5udW1iZXJ9IDwvbGk+KTtcclxuICAgICAgICBzZXRDb250YWN0cyh1cGRhdGVkQ29udGFjdHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0c0RldGFpbHMoKSB7XHJcbiAgICBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHJldHVybiA8b2w+e2NvbnRhY3RzfTwvb2w+O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=