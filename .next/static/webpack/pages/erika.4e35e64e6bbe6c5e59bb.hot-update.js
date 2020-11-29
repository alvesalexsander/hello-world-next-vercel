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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Alexsander Alves\\Desktop\\hello-world-next\\pages\\erika\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




function Erika() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      contacts = _useState[0],
      setContacts = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContactForm, {
        contactHandler: setContacts,
        contacts: contacts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ol", {
        children: contacts
      }, void 0, false, {
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

_s(Erika, "Wk/5gz66h597tqB1iDdgoAzWnmc=");

_c = Erika;

function ContactForm(props) {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      number = _useState3[0],
      setNumber = _useState3[1];

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
    var _this = this;

    props.contactHandler(function (prevContacts) {
      return Object(C_Users_Alexsander_Alves_Desktop_hello_world_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevContacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
        children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
      }, Math.random(), true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 69
      }, _this)));
    });
    console.log(props.contacts);
  }
} // function ContactsDetails() {
//     return <ol>{contacts}</ol>
// }


_s2(ContactForm, "mgYk2feJE7Nd8w88JvjzPww6GtA=");

_c2 = ContactForm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVyaWthIiwidXNlU3RhdGUiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJjb250YWN0IiwiY29udGFjdEhhbmRsZXIiLCJwcmV2Q29udGFjdHMiLCJwdXNoIiwiTWF0aCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBRW1CQyxzREFBUSxDQUFDLEVBQUQsQ0FGM0I7QUFBQSxNQUVOQyxRQUZNO0FBQUEsTUFFSUMsV0FGSjs7QUFJYixzQkFDSTtBQUFBLDRNQUdJO0FBQUEsOEJBQ0kscUVBQUMsV0FBRDtBQUFhLHNCQUFjLEVBQUVBLFdBQTdCO0FBQTBDLGdCQUFRLEVBQUVEO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBZFFGLEs7O0tBQUFBLEs7O0FBZ0JULFNBQVNJLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsbUJBQ0FKLHNEQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDakJLLElBRGlCO0FBQUEsTUFDWEMsT0FEVzs7QUFBQSxtQkFFSU4sc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVqQk8sTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUl4QixzQkFDSTtBQUFBLDRCQUNJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVcsRUFBQyxNQUE3QjtBQUFvQyxjQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWxCO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxpQkFBVyxFQUFDLFVBQW5CO0FBQThCLFVBQUksRUFBQyxPQUFuQztBQUEyQyxjQUFRLEVBQUUsa0JBQUNGLEtBQUQ7QUFBQSxlQUFXRCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUU7QUFBQSxlQUFNQyxhQUFhLENBQUM7QUFBRVAsY0FBSSxFQUFKQSxJQUFGO0FBQVFFLGdCQUFNLEVBQU5BO0FBQVIsU0FBRCxDQUFuQjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7O0FBUUEsV0FBU0ssYUFBVCxDQUF1QkMsT0FBdkIsRUFBa0U7QUFBQTs7QUFDOURULFNBQUssQ0FBQ1UsY0FBTixDQUFxQixVQUFBQyxZQUFZO0FBQUEsd0tBQVNBLFlBQVksQ0FBQ0MsSUFBYixlQUFrQjtBQUFBLDhCQUFnQ0gsT0FBTyxDQUFDUixJQUF4QyxtQkFBMkRRLE9BQU8sQ0FBQ04sTUFBbkU7QUFBQSxTQUFTVSxJQUFJLENBQUNDLE1BQUwsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWxCLENBQVQ7QUFBQSxLQUFqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQUssQ0FBQ0gsUUFBbEI7QUFDSDtBQUNKLEMsQ0FFRDtBQUNBO0FBQ0E7OztJQXBCU0UsVzs7TUFBQUEsVztBQXNCTUosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXJpa2EuNGUzNWU2NGU2YmJlNmM1ZTU5YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEVyaWthKCkge1xyXG5cclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgT2zDoSwgdm9jw6ogY2hlZ291IG5hIG1pbmhhIGNhc2EuIE1ldSBub21lIMOpIMOJcmlrYSwgZSBzb3UgdW1hIGdlcmVudGUgZGUgY29udGF0b3MhIPCfk5bwn5OV8J+TsfCfkalcclxuICAgICAgICAgICAgQWRpY2lvbmUgc2V1cyBjb250YXRvcyBhYmFpeG86XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gY29udGFjdEhhbmRsZXI9e3NldENvbnRhY3RzfSBjb250YWN0cz17Y29udGFjdHN9Lz5cclxuICAgICAgICAgICAgICAgIDxvbD57Y29udGFjdHN9PC9vbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibm9tZVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwidGVsZWZvbmVcIiB0eXBlPVwicGhvbmVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2FsdmFyQ29udGF0byh7IG5hbWUsIG51bWJlciB9KX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gc2FsdmFyQ29udGF0byhjb250YWN0OiB7IG5hbWU6IHN0cmluZywgbnVtYmVyOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHByb3BzLmNvbnRhY3RIYW5kbGVyKHByZXZDb250YWN0cyA9PiAoWy4uLnByZXZDb250YWN0cy5wdXNoKDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PiBOb21lOiB7Y29udGFjdC5uYW1lfSB8IFRlbGVmb25lOiB7Y29udGFjdC5udW1iZXJ9IDwvbGk+KV0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5jb250YWN0cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIENvbnRhY3RzRGV0YWlscygpIHtcclxuLy8gICAgIHJldHVybiA8b2w+e2NvbnRhY3RzfTwvb2w+XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=