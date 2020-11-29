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




var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
    contacts = _useState[0],
    setContact = _useState[1];

function Erika() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactsDetails, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = Erika;

function ContactForm() {
  _s();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      number = _useState3[0],
      setNumber = _useState3[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "name",
      placeholder: "nome",
      onChange: function onChange(event) {
        return setName(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange(event) {
        return setNumber(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function ContactsDetails() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
    children: contacts
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }, this);
}

_c3 = ContactsDetails;

function salvarContato(contact) {
  contacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
  }, contact.name, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 19
  }, this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29udGFjdHMiLCJzZXRDb250YWN0IiwiRXJpa2EiLCJDb250YWN0Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJDb250YWN0c0RldGFpbHMiLCJjb250YWN0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztnQkFFK0JBLHNEQUFRLENBQUMsRUFBRCxDO0lBQWhDQyxRO0lBQVVDLFU7O0FBRWpCLFNBQVNDLEtBQVQsR0FBaUI7QUFDYixzQkFDSTtBQUFBLDRNQUdJO0FBQUEsOEJBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztLQVhRQSxLOztBQWFULFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxtQkFDS0osc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNaSyxJQURZO0FBQUEsTUFDTkMsT0FETTs7QUFBQSxtQkFFU04sc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFWk8sTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBSW5CLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxRQUFFLEVBQUMsTUFBVjtBQUFpQixpQkFBVyxFQUFDLE1BQTdCO0FBQW9DLGNBQVEsRUFBRSxrQkFBQ0MsS0FBRDtBQUFBLGVBQVdILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbEI7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFPLGlCQUFXLEVBQUMsVUFBbkI7QUFBOEIsVUFBSSxFQUFDLE9BQW5DO0FBQTJDLGNBQVEsRUFBRSxrQkFBQ0YsS0FBRDtBQUFBLGVBQVdELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBcEI7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQztBQUFFUCxjQUFJLEVBQUpBLElBQUY7QUFBUUUsZ0JBQU0sRUFBTkE7QUFBUixTQUFELENBQW5CO0FBQUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztHQVhRSCxXOztNQUFBQSxXOztBQWFULFNBQVNTLGVBQVQsR0FBMkI7QUFDdkIsc0JBQU87QUFBQSxjQUFLWjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztNQUZRWSxlOztBQUlULFNBQVNELGFBQVQsQ0FBdUJFLE9BQXZCLEVBQWtFO0FBQzlEYixVQUFRLENBQUNjLElBQVQsZUFBYztBQUFBLDBCQUErQkQsT0FBTyxDQUFDVCxJQUF2QyxtQkFBMERTLE9BQU8sQ0FBQ1AsTUFBbEU7QUFBQSxLQUFTTyxPQUFPLENBQUNULElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBZDtBQUNBLFNBQU8sS0FBUDtBQUNIOztBQUVjRixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcmlrYS41ZjBhZDI0M2MzOGEyODM4M2QzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbmZ1bmN0aW9uIEVyaWthKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBPbMOhLCB2b2PDqiBjaGVnb3UgbmEgbWluaGEgY2FzYS4gTWV1IG5vbWUgw6kgw4lyaWthLCBlIHNvdSB1bWEgZ2VyZW50ZSBkZSBjb250YXRvcyEg8J+TlvCfk5Xwn5Ox8J+RqVxyXG4gICAgICAgICAgICBBZGljaW9uZSBzZXVzIGNvbnRhdG9zIGFiYWl4bzpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RzRGV0YWlscyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibm9tZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwidGVsZWZvbmVcIiB0eXBlPVwicGhvbmVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2FsdmFyQ29udGF0byh7IG5hbWUsIG51bWJlciB9KX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RzRGV0YWlscygpIHtcclxuICAgIHJldHVybiA8b2w+e2NvbnRhY3RzfTwvb2w+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYWx2YXJDb250YXRvKGNvbnRhY3Q6IHsgbmFtZTogc3RyaW5nLCBudW1iZXI6IHN0cmluZyB9KSB7XHJcbiAgICBjb250YWN0cy5wdXNoKDxsaSBrZXk9e2NvbnRhY3QubmFtZX0+IE5vbWU6IHtjb250YWN0Lm5hbWV9IHwgVGVsZWZvbmU6IHtjb250YWN0Lm51bWJlcn0gPC9saT4pXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=