webpackHotUpdate_N_E("pages/erika",{

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
    console.log(setContacts);
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
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJFcmlrYSIsIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsIm51bWJlciIsInNldE51bWJlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzYWx2YXJDb250YXRvIiwiY29udGFjdCIsInVwZGF0ZWRDb250YWN0cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQ29udGFjdHNEZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxRQUFKO0FBQ0EsSUFBSUMsV0FBSjs7QUFFQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2Isc0JBQ0k7QUFBQSw0TUFHSTtBQUFBLDhCQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7S0FYUUEsSzs7QUFhVCxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUluQixzQkFDSTtBQUFBLDRCQUNJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVcsRUFBQyxNQUE3QjtBQUFvQyxjQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWxCO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxpQkFBVyxFQUFDLFVBQW5CO0FBQThCLFVBQUksRUFBQyxPQUFuQztBQUEyQyxjQUFRLEVBQUUsa0JBQUNGLEtBQUQ7QUFBQSxlQUFXRCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUU7QUFBQSxlQUFNQyxhQUFhLENBQUM7QUFBRVAsY0FBSSxFQUFKQSxJQUFGO0FBQVFFLGdCQUFNLEVBQU5BO0FBQVIsU0FBRCxDQUFuQjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7O0FBUUEsV0FBU0ssYUFBVCxDQUF1QkMsT0FBdkIsRUFBa0U7QUFDOUQsUUFBTUMsZUFBZSxHQUFHZCxRQUF4QjtBQUNBYyxtQkFBZSxDQUFDQyxJQUFoQixlQUFxQjtBQUFBLDRCQUErQkYsT0FBTyxDQUFDUixJQUF2QyxtQkFBMERRLE9BQU8sQ0FBQ04sTUFBbEU7QUFBQSxPQUFTTSxPQUFPLENBQUNSLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckI7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVloQixXQUFaO0FBQ0FBLGVBQVcsQ0FBQ2EsZUFBRCxDQUFYO0FBQ0g7QUFDSjs7R0FsQlFYLFc7O01BQUFBLFc7O0FBb0JULFNBQVNlLGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxtQkFDR2Qsc0RBQVEsQ0FBQyxFQUFELENBRFg7O0FBQUE7O0FBQ3RCSixVQURzQjtBQUNaQyxhQURZO0FBRXZCLHNCQUFPO0FBQUEsY0FBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7SUFIUWtCLGU7O01BQUFBLGU7QUFPTWhCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VyaWthLjVkNTg0ZDY0OTk5M2QxM2UwYzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgY29udGFjdHM7XHJcbmxldCBzZXRDb250YWN0cztcclxuXHJcbmZ1bmN0aW9uIEVyaWthKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBPbMOhLCB2b2PDqiBjaGVnb3UgbmEgbWluaGEgY2FzYS4gTWV1IG5vbWUgw6kgw4lyaWthLCBlIHNvdSB1bWEgZ2VyZW50ZSBkZSBjb250YXRvcyEg8J+TlvCfk5Xwn5Ox8J+RqVxyXG4gICAgICAgICAgICBBZGljaW9uZSBzZXVzIGNvbnRhdG9zIGFiYWl4bzpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RzRGV0YWlscyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibm9tZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwidGVsZWZvbmVcIiB0eXBlPVwicGhvbmVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2FsdmFyQ29udGF0byh7IG5hbWUsIG51bWJlciB9KX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gc2FsdmFyQ29udGF0byhjb250YWN0OiB7IG5hbWU6IHN0cmluZywgbnVtYmVyOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb250YWN0cyA9IGNvbnRhY3RzO1xyXG4gICAgICAgIHVwZGF0ZWRDb250YWN0cy5wdXNoKDxsaSBrZXk9e2NvbnRhY3QubmFtZX0+IE5vbWU6IHtjb250YWN0Lm5hbWV9IHwgVGVsZWZvbmU6IHtjb250YWN0Lm51bWJlcn0gPC9saT4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNldENvbnRhY3RzKTtcclxuICAgICAgICBzZXRDb250YWN0cyh1cGRhdGVkQ29udGFjdHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0c0RldGFpbHMoKSB7XHJcbiAgICBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHJldHVybiA8b2w+e2NvbnRhY3RzfTwvb2w+O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=