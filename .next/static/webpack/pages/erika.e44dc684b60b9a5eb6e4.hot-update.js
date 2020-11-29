webpackHotUpdate_N_E("pages/erika",{

/***/ "./pages/erika/index.tsx":
/*!*******************************!*\
  !*** ./pages/erika/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\Alexsander Alves\\Desktop\\hello-world-next\\pages\\erika\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var contacts;
var setContacts;

function Erika() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);

  var _useState2 = Object(C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2);

  contacts = _useState2[0];
  setContacts = _useState2[1];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: ["Ol\xE1, bem-vindo ao \xC9rika's Contact Management. Eu sou a \xC9rika, a gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: ["Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 47
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ContactForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ContactsDetails, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(Erika, "4bWmwqNpSmwrWYwBxf0uO8LDcFo=");

_c = Erika;

function ContactForm() {
  _s2();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      number = _useState4[0],
      setNumber = _useState4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
      id: "name",
      placeholder: "nome",
      onChange: function onChange(event) {
        return setName(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange(event) {
        return setNumber(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
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
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s2(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function ContactsDetails() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
    children: contacts
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 12
  }, this);
}

_c3 = ContactsDetails;

function salvarContato(contact) {
  contacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
    children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
  }, Math.random(), true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 19
  }, this));
  setContacts(function () {
    return Object(C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(contacts);
  });
  console.log(contacts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJFcmlrYSIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJuYW1lIiwic2V0TmFtZSIsIm51bWJlciIsInNldE51bWJlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzYWx2YXJDb250YXRvIiwiQ29udGFjdHNEZXRhaWxzIiwiY29udGFjdCIsInB1c2giLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxRQUFKO0FBQ0EsSUFBSUMsV0FBSjs7QUFFQSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBRWFDLHNEQUFRLENBQUMsRUFBRCxDQUZyQjs7QUFBQTs7QUFFWkgsVUFGWTtBQUVGQyxhQUZFO0FBSWIsc0JBQ0k7QUFBQSw4S0FFSTtBQUFBLGdFQUNrQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGxDLGVBRUkscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSxxRUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQWRRQyxLOztLQUFBQSxLOztBQWdCVCxTQUFTRSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsbUJBQ0tELHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDWkUsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsbUJBRVNILHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVpJLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUluQixzQkFDSTtBQUFBLDRCQUNJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVcsRUFBQyxNQUE3QjtBQUFvQyxjQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWxCO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxpQkFBVyxFQUFDLFVBQW5CO0FBQThCLFVBQUksRUFBQyxPQUFuQztBQUEyQyxjQUFRLEVBQUUsa0JBQUNGLEtBQUQ7QUFBQSxlQUFXRCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUU7QUFBQSxlQUFNQyxhQUFhLENBQUM7QUFBRVAsY0FBSSxFQUFKQSxJQUFGO0FBQVFFLGdCQUFNLEVBQU5BO0FBQVIsU0FBRCxDQUFuQjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7SUFYUUgsVzs7TUFBQUEsVzs7QUFhVCxTQUFTUyxlQUFULEdBQTJCO0FBQ3ZCLHNCQUFPO0FBQUEsY0FBS2I7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7TUFGUWEsZTs7QUFJVCxTQUFTRCxhQUFULENBQXVCRSxPQUF2QixFQUFrRTtBQUU5RGQsVUFBUSxDQUFDZSxJQUFULGVBQWM7QUFBQSwwQkFBZ0NELE9BQU8sQ0FBQ1QsSUFBeEMsbUJBQTJEUyxPQUFPLENBQUNQLE1BQW5FO0FBQUEsS0FBU1MsSUFBSSxDQUFDQyxNQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFkO0FBQ0FoQixhQUFXLENBQUM7QUFBQSxzS0FBV0QsUUFBWDtBQUFBLEdBQUQsQ0FBWDtBQUNBa0IsU0FBTyxDQUFDQyxHQUFSLENBQVluQixRQUFaO0FBQ0g7O0FBRWNFLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VyaWthLmU0NGRjNjg0YjYwYjlhNWViNmU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgY29udGFjdHM7XHJcbmxldCBzZXRDb250YWN0cztcclxuXHJcbmZ1bmN0aW9uIEVyaWthKCkge1xyXG5cclxuICAgIFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgT2zDoSwgYmVtLXZpbmRvIGFvIMOJcmlrYSdzIENvbnRhY3QgTWFuYWdlbWVudC4gRXUgc291IGEgw4lyaWthLCBhIGdlcmVudGUgZGUgY29udGF0b3MhIPCfk5bwn5OV8J+TsfCfkalcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEFkaWNpb25lIHNldXMgY29udGF0b3MgYWJhaXhvOjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdHNEZXRhaWxzIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJub21lXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0ZWxlZm9uZVwiIHR5cGU9XCJwaG9uZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE51bWJlcihldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzYWx2YXJDb250YXRvKHsgbmFtZSwgbnVtYmVyIH0pfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdHNEZXRhaWxzKCkge1xyXG4gICAgcmV0dXJuIDxvbD57Y29udGFjdHN9PC9vbD5cclxufVxyXG5cclxuZnVuY3Rpb24gc2FsdmFyQ29udGF0byhjb250YWN0OiB7IG5hbWU6IHN0cmluZywgbnVtYmVyOiBzdHJpbmcgfSkge1xyXG4gICAgXHJcbiAgICBjb250YWN0cy5wdXNoKDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PiBOb21lOiB7Y29udGFjdC5uYW1lfSB8IFRlbGVmb25lOiB7Y29udGFjdC5udW1iZXJ9IDwvbGk+KTtcclxuICAgIHNldENvbnRhY3RzKCgpID0+IChbLi4uY29udGFjdHNdKSk7XHJcbiAgICBjb25zb2xlLmxvZyhjb250YWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=