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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactsDetails, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
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
      onChange: function onChange(event) {
        return setName(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange(event) {
        return setNumber(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function ContactsDetails() {
  var element = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 21
  }, this);

  function addContact(params) {
    element.createChild('li');
  }
}

_c3 = ContactsDetails;

function salvarContato(obj) {
  console.log(obj);
  return false;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVyaWthIiwiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJDb250YWN0c0RldGFpbHMiLCJlbGVtZW50IiwiYWRkQ29udGFjdCIsInBhcmFtcyIsImNyZWF0ZUNoaWxkIiwib2JqIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2Isc0JBQ0k7QUFBQSw0TUFHSTtBQUFBLDhCQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7S0FYUUEsSzs7QUFhVCxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUluQixzQkFDSTtBQUFBLDRCQUNJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVcsRUFBQyxNQUE3QjtBQUFvQyxjQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWxCO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxpQkFBVyxFQUFDLFVBQW5CO0FBQThCLFVBQUksRUFBQyxPQUFuQztBQUEyQyxjQUFRLEVBQUUsa0JBQUNGLEtBQUQ7QUFBQSxlQUFXRCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUU7QUFBQSxlQUFNQyxhQUFhLENBQUM7QUFBQ1AsY0FBSSxFQUFKQSxJQUFEO0FBQU9FLGdCQUFNLEVBQU5BO0FBQVAsU0FBRCxDQUFuQjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7R0FYUUosVzs7TUFBQUEsVzs7QUFhVCxTQUFTVSxlQUFULEdBQTJCO0FBQ3ZCLE1BQU1DLE9BQU8sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFoQjs7QUFFQSxXQUFTQyxVQUFULENBQW9CQyxNQUFwQixFQUFpQztBQUM3QkYsV0FBTyxDQUFDRyxXQUFSLENBQW9CLElBQXBCO0FBQ0g7QUFDSjs7TUFOUUosZTs7QUFRVCxTQUFTRCxhQUFULENBQXVCTSxHQUF2QixFQUFpQztBQUM3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxTQUFPLEtBQVA7QUFDSDs7QUFFY2hCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VyaWthLjJjZWQ0ZGQ2ZWFiNmUzMTBmMzQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRXJpa2EoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIE9sw6EsIHZvY8OqIGNoZWdvdSBuYSBtaW5oYSBjYXNhLiBNZXUgbm9tZSDDqSDDiXJpa2EsIGUgc291IHVtYSBnZXJlbnRlIGRlIGNvbnRhdG9zISDwn5OW8J+TlfCfk7Hwn5GpXHJcbiAgICAgICAgICAgIEFkaWNpb25lIHNldXMgY29udGF0b3MgYWJhaXhvOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtLz5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0c0RldGFpbHMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibm9tZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0ZWxlZm9uZVwiIHR5cGU9XCJwaG9uZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE51bWJlcihldmVudC50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNhbHZhckNvbnRhdG8oe25hbWUsIG51bWJlcn0pfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdHNEZXRhaWxzKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IDx1bD48L3VsPjtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDb250YWN0KHBhcmFtczp0eXBlKSB7XHJcbiAgICAgICAgZWxlbWVudC5jcmVhdGVDaGlsZCgnbGknKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYWx2YXJDb250YXRvKG9iajogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcmlrYTsiXSwic291cmNlUm9vdCI6IiJ9