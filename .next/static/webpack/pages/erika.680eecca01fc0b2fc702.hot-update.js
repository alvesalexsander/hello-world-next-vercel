webpackHotUpdate_N_E("pages/erika",{

/***/ "./pages/erika/index.tsx":
/*!*******************************!*\
  !*** ./pages/erika/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Alexsander Alves\\Desktop\\hello-world-next\\pages\\erika\\index.tsx",
    _s = $RefreshSig$();



function Erika() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Erika;

function ContactForm() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      number = _useState2[0],
      setNumber = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "name",
      placeholder: "nome",
      onChange: function onChange() {
        return setName(prop.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange() {
        return setNumber(_this.prop.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function salvarContato(obj) {
  console.log(obj);
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (Erika);

var _c, _c2;

$RefreshReg$(_c, "Erika");
$RefreshReg$(_c2, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVyaWthIiwiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwicHJvcCIsInZhbHVlIiwic2FsdmFyQ29udGF0byIsIm9iaiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLHNCQUNJO0FBQUEsNE1BR0k7QUFBQSw2QkFDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7S0FWUUEsSzs7QUFZVCxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUluQixzQkFDSTtBQUFBLDRCQUNJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVcsRUFBQyxNQUE3QjtBQUFvQyxjQUFRLEVBQUU7QUFBQSxlQUFNRixPQUFPLENBQUNHLElBQUksQ0FBQ0MsS0FBTixDQUFiO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxpQkFBVyxFQUFDLFVBQW5CO0FBQThCLFVBQUksRUFBQyxPQUFuQztBQUEyQyxjQUFRLEVBQUU7QUFBQSxlQUFNRixTQUFTLENBQUMsS0FBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVgsQ0FBZjtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFO0FBQUEsZUFBTUMsYUFBYSxDQUFDO0FBQUNOLGNBQUksRUFBSkEsSUFBRDtBQUFPRSxnQkFBTSxFQUFOQTtBQUFQLFNBQUQsQ0FBbkI7QUFBQSxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBWFFKLFc7O01BQUFBLFc7O0FBYVQsU0FBU1EsYUFBVCxDQUF1QkMsR0FBdkIsRUFBaUM7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsU0FBTyxLQUFQO0FBQ0g7O0FBRWNWLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VyaWthLjY4MGVlY2NhMDFmYzBiMmZjNzAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRXJpa2EoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIE9sw6EsIHZvY8OqIGNoZWdvdSBuYSBtaW5oYSBjYXNhLiBNZXUgbm9tZSDDqSDDiXJpa2EsIGUgc291IHVtYSBnZXJlbnRlIGRlIGNvbnRhdG9zISDwn5OW8J+TlfCfk7Hwn5GpXHJcbiAgICAgICAgICAgIEFkaWNpb25lIHNldXMgY29udGF0b3MgYWJhaXhvOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbWVcIiBvbkNoYW5nZT17KCkgPT4gc2V0TmFtZShwcm9wLnZhbHVlKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwidGVsZWZvbmVcIiB0eXBlPVwicGhvbmVcIiBvbkNoYW5nZT17KCkgPT4gc2V0TnVtYmVyKHRoaXMucHJvcC52YWx1ZSl9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNhbHZhckNvbnRhdG8oe25hbWUsIG51bWJlcn0pfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gc2FsdmFyQ29udGF0byhvYmo6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJpa2E7Il0sInNvdXJjZVJvb3QiOiIifQ==