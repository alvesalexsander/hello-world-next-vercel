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



var contacts = [];

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
    children: ["Nome: ", contact.name, " | Telefone: ", contact.number]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwiRXJpa2EiLCJDb250YWN0Rm9ybSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic2FsdmFyQ29udGF0byIsIkNvbnRhY3RzRGV0YWlscyIsImNvbnRhY3QiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsRUFBakI7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLHNCQUNJO0FBQUEsNE1BR0k7QUFBQSw4QkFDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0tBWFFBLEs7O0FBYVQsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFJbkIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFPLFFBQUUsRUFBQyxNQUFWO0FBQWlCLGlCQUFXLEVBQUMsTUFBN0I7QUFBb0MsY0FBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsZUFBV0gsT0FBTyxDQUFDRyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFsQjtBQUFBO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU8saUJBQVcsRUFBQyxVQUFuQjtBQUE4QixVQUFJLEVBQUMsT0FBbkM7QUFBMkMsY0FBUSxFQUFFLGtCQUFDRixLQUFEO0FBQUEsZUFBV0QsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFwQjtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFO0FBQUEsZUFBTUMsYUFBYSxDQUFDO0FBQUVQLGNBQUksRUFBSkEsSUFBRjtBQUFRRSxnQkFBTSxFQUFOQTtBQUFSLFNBQUQsQ0FBbkI7QUFBQSxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBWFFKLFc7O01BQUFBLFc7O0FBYVQsU0FBU1UsZUFBVCxHQUEyQjtBQUN2QixzQkFBTztBQUFBLGNBQUtaO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O01BRlFZLGU7O0FBSVQsU0FBU0QsYUFBVCxDQUF1QkUsT0FBdkIsRUFBa0U7QUFDOURiLFVBQVEsQ0FBQ2MsSUFBVCxlQUFjO0FBQUEseUJBQThCRCxPQUFPLENBQUNULElBQXRDLG1CQUF5RFMsT0FBTyxDQUFDUCxNQUFqRTtBQUFBLEtBQVNPLE9BQU8sQ0FBQ1QsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFkO0FBQ0EsU0FBTyxLQUFQO0FBQ0g7O0FBRWNILG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VyaWthLjMwMTdhY2I5MjZlNzI5YzY3ZGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjb250YWN0cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gRXJpa2EoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIE9sw6EsIHZvY8OqIGNoZWdvdSBuYSBtaW5oYSBjYXNhLiBNZXUgbm9tZSDDqSDDiXJpa2EsIGUgc291IHVtYSBnZXJlbnRlIGRlIGNvbnRhdG9zISDwn5OW8J+TlfCfk7Hwn5GpXHJcbiAgICAgICAgICAgIEFkaWNpb25lIHNldXMgY29udGF0b3MgYWJhaXhvOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdHNEZXRhaWxzIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJub21lXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0ZWxlZm9uZVwiIHR5cGU9XCJwaG9uZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE51bWJlcihldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzYWx2YXJDb250YXRvKHsgbmFtZSwgbnVtYmVyIH0pfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdHNEZXRhaWxzKCkge1xyXG4gICAgcmV0dXJuIDxvbD57Y29udGFjdHN9PC9vbD47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhbHZhckNvbnRhdG8oY29udGFjdDogeyBuYW1lOiBzdHJpbmcsIG51bWJlcjogc3RyaW5nIH0pIHtcclxuICAgIGNvbnRhY3RzLnB1c2goPGxpIGtleT17Y29udGFjdC5uYW1lfT5Ob21lOiB7Y29udGFjdC5uYW1lfSB8IFRlbGVmb25lOiB7Y29udGFjdC5udW1iZXJ9PC9saT4pXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=