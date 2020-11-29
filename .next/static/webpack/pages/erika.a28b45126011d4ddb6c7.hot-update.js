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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




function Erika() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactsDetails, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange(event) {
        return setNumber(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);

  function salvarContato(contact) {
    var updatedContacts = contacts;
    updatedContacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
    }, contact.name, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 30
    }, this));
    setContacts(updatedContacts);
  }
}

_s(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function ContactsDetails() {
  _s2();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      contacts = _useState3[0],
      setContacts = _useState3[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
    children: contacts
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 12
  }, this);
}

_s2(ContactsDetails, "Wk/5gz66h597tqB1iDdgoAzWnmc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVyaWthIiwiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJjb250YWN0IiwidXBkYXRlZENvbnRhY3RzIiwiY29udGFjdHMiLCJwdXNoIiwic2V0Q29udGFjdHMiLCJDb250YWN0c0RldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLHNCQUNJO0FBQUEsNE1BR0k7QUFBQSw4QkFDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0tBWFFBLEs7O0FBYVQsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFJbkIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFPLFFBQUUsRUFBQyxNQUFWO0FBQWlCLGlCQUFXLEVBQUMsTUFBN0I7QUFBb0MsY0FBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsZUFBV0gsT0FBTyxDQUFDRyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFsQjtBQUFBO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU8saUJBQVcsRUFBQyxVQUFuQjtBQUE4QixVQUFJLEVBQUMsT0FBbkM7QUFBMkMsY0FBUSxFQUFFLGtCQUFDRixLQUFEO0FBQUEsZUFBV0QsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFwQjtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFO0FBQUEsZUFBTUMsYUFBYSxDQUFDO0FBQUVQLGNBQUksRUFBSkEsSUFBRjtBQUFRRSxnQkFBTSxFQUFOQTtBQUFSLFNBQUQsQ0FBbkI7QUFBQSxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKOztBQVFBLFdBQVNLLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWtFO0FBQzlELFFBQU1DLGVBQWUsR0FBR0MsUUFBeEI7QUFDQUQsbUJBQWUsQ0FBQ0UsSUFBaEIsZUFBcUI7QUFBQSw0QkFBK0JILE9BQU8sQ0FBQ1IsSUFBdkMsbUJBQTBEUSxPQUFPLENBQUNOLE1BQWxFO0FBQUEsT0FBU00sT0FBTyxDQUFDUixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJCO0FBQ0FZLGVBQVcsQ0FBQ0gsZUFBRCxDQUFYO0FBQ0g7QUFDSjs7R0FqQlFYLFc7O01BQUFBLFc7O0FBbUJULFNBQVNlLGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxtQkFDU2Qsc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDaEJXLFFBRGdCO0FBQUEsTUFDTkUsV0FETTs7QUFFdkIsc0JBQU87QUFBQSxjQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztJQUhRRyxlOztNQUFBQSxlO0FBT01oQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcmlrYS5hMjhiNDUxMjYwMTFkNGRkYjZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVyaWthKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBPbMOhLCB2b2PDqiBjaGVnb3UgbmEgbWluaGEgY2FzYS4gTWV1IG5vbWUgw6kgw4lyaWthLCBlIHNvdSB1bWEgZ2VyZW50ZSBkZSBjb250YXRvcyEg8J+TlvCfk5Xwn5Ox8J+RqVxyXG4gICAgICAgICAgICBBZGljaW9uZSBzZXVzIGNvbnRhdG9zIGFiYWl4bzpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RzRGV0YWlscyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibm9tZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwidGVsZWZvbmVcIiB0eXBlPVwicGhvbmVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2FsdmFyQ29udGF0byh7IG5hbWUsIG51bWJlciB9KX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gc2FsdmFyQ29udGF0byhjb250YWN0OiB7IG5hbWU6IHN0cmluZywgbnVtYmVyOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb250YWN0cyA9IGNvbnRhY3RzO1xyXG4gICAgICAgIHVwZGF0ZWRDb250YWN0cy5wdXNoKDxsaSBrZXk9e2NvbnRhY3QubmFtZX0+IE5vbWU6IHtjb250YWN0Lm5hbWV9IHwgVGVsZWZvbmU6IHtjb250YWN0Lm51bWJlcn0gPC9saT4pO1xyXG4gICAgICAgIHNldENvbnRhY3RzKHVwZGF0ZWRDb250YWN0cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RzRGV0YWlscygpIHtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgcmV0dXJuIDxvbD57Y29udGFjdHN9PC9vbD47XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJpa2E7Il0sInNvdXJjZVJvb3QiOiIifQ==