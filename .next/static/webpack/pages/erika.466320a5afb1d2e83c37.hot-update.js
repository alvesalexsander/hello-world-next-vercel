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
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ContactForm, {
        contactHandler: setContacts,
        contacts: contacts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
        children: contacts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
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

function ContactForm(props) {
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
} // function ContactsDetails() {
//     return <ol>{contacts}</ol>
// }


_s2(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;

function salvarContato(contact) {
  contacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
    children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
  }, Math.random(), true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 19
  }, this));
  setContacts(function () {
    return Object(C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(contacts);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJFcmlrYSIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJjb250YWN0IiwicHVzaCIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsUUFBSjtBQUNBLElBQUlDLFdBQUo7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7O0FBQUE7O0FBRVpILFVBRlk7QUFFRkMsYUFGRTtBQUliLHNCQUNJO0FBQUEsNE1BR0k7QUFBQSw4QkFDSSxxRUFBQyxXQUFEO0FBQWEsc0JBQWMsRUFBRUEsV0FBN0I7QUFBMEMsZ0JBQVEsRUFBRUQ7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxrQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0FkUUUsSzs7S0FBQUEsSzs7QUFnQlQsU0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQSxtQkFDQUYsc0RBQVEsQ0FBQyxFQUFELENBRFI7QUFBQSxNQUNqQkcsSUFEaUI7QUFBQSxNQUNYQyxPQURXOztBQUFBLG1CQUVJSixzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWpCSyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBSXhCLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxRQUFFLEVBQUMsTUFBVjtBQUFpQixpQkFBVyxFQUFDLE1BQTdCO0FBQW9DLGNBQVEsRUFBRSxrQkFBQ0MsS0FBRDtBQUFBLGVBQVdILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbEI7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFPLGlCQUFXLEVBQUMsVUFBbkI7QUFBOEIsVUFBSSxFQUFDLE9BQW5DO0FBQTJDLGNBQVEsRUFBRSxrQkFBQ0YsS0FBRDtBQUFBLGVBQVdELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBcEI7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQztBQUFFUCxjQUFJLEVBQUpBLElBQUY7QUFBUUUsZ0JBQU0sRUFBTkE7QUFBUixTQUFELENBQW5CO0FBQUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9ILEMsQ0FFRDtBQUNBO0FBQ0E7OztJQWZTSixXOztNQUFBQSxXOztBQWlCVCxTQUFTUyxhQUFULENBQXVCQyxPQUF2QixFQUFrRTtBQUM5RGQsVUFBUSxDQUFDZSxJQUFULGVBQWM7QUFBQSwwQkFBZ0NELE9BQU8sQ0FBQ1IsSUFBeEMsbUJBQTJEUSxPQUFPLENBQUNOLE1BQW5FO0FBQUEsS0FBU1EsSUFBSSxDQUFDQyxNQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFkO0FBQ0FoQixhQUFXLENBQUM7QUFBQSxzS0FBV0QsUUFBWDtBQUFBLEdBQUQsQ0FBWDtBQUNIOztBQUVjRSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcmlrYS40NjYzMjBhNWFmYjFkMmU4M2MzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGNvbnRhY3RzO1xyXG5sZXQgc2V0Q29udGFjdHM7XHJcblxyXG5mdW5jdGlvbiBFcmlrYSgpIHtcclxuXHJcbiAgICBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIE9sw6EsIHZvY8OqIGNoZWdvdSBuYSBtaW5oYSBjYXNhLiBNZXUgbm9tZSDDqSDDiXJpa2EsIGUgc291IHVtYSBnZXJlbnRlIGRlIGNvbnRhdG9zISDwn5OW8J+TlfCfk7Hwn5GpXHJcbiAgICAgICAgICAgIEFkaWNpb25lIHNldXMgY29udGF0b3MgYWJhaXhvOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIGNvbnRhY3RIYW5kbGVyPXtzZXRDb250YWN0c30gY29udGFjdHM9e2NvbnRhY3RzfS8+XHJcbiAgICAgICAgICAgICAgICA8b2w+e2NvbnRhY3RzfTwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybShwcm9wcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbWVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRlbGVmb25lXCIgdHlwZT1cInBob25lXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNhbHZhckNvbnRhdG8oeyBuYW1lLCBudW1iZXIgfSl9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBDb250YWN0c0RldGFpbHMoKSB7XHJcbi8vICAgICByZXR1cm4gPG9sPntjb250YWN0c308L29sPlxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBzYWx2YXJDb250YXRvKGNvbnRhY3Q6IHsgbmFtZTogc3RyaW5nLCBudW1iZXI6IHN0cmluZyB9KSB7XHJcbiAgICBjb250YWN0cy5wdXNoKDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PiBOb21lOiB7Y29udGFjdC5uYW1lfSB8IFRlbGVmb25lOiB7Y29udGFjdC5udW1iZXJ9IDwvbGk+KTtcclxuICAgIHNldENvbnRhY3RzKCgpID0+IChbLi4uY29udGFjdHNdKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=