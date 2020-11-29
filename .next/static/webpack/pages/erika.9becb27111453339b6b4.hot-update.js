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
  var alreadyExists = contacts.filter(function (contactItem) {
    return contactItem.props.children[1] === contactItem.name;
  })[0];

  if (alreadyExists) {
    contacts.map(function (contactItem) {
      if (contactItem.key === alreadyExists.key) {
        contactItem.prop.children[1] = contact.name;
        contactItem.prop.children[3] = contact.number;
        return;
      }
    });
  }

  contacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
    children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
  }, Math.random(), true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJFcmlrYSIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJuYW1lIiwic2V0TmFtZSIsIm51bWJlciIsInNldE51bWJlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzYWx2YXJDb250YXRvIiwiQ29udGFjdHNEZXRhaWxzIiwiY29udGFjdCIsImFscmVhZHlFeGlzdHMiLCJmaWx0ZXIiLCJjb250YWN0SXRlbSIsInByb3BzIiwiY2hpbGRyZW4iLCJtYXAiLCJrZXkiLCJwcm9wIiwicHVzaCIsIk1hdGgiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQUlBLFFBQUo7QUFDQSxJQUFJQyxXQUFKOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFFYUMsc0RBQVEsQ0FBQyxFQUFELENBRnJCOztBQUFBOztBQUVaSCxVQUZZO0FBRUZDLGFBRkU7QUFJYixzQkFDSTtBQUFBLDhLQUVJO0FBQUEsZ0VBQ2tDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEbEMsZUFFSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLHFFQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBZFFDLEs7O0tBQUFBLEs7O0FBZ0JULFNBQVNFLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxtQkFDS0Qsc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNaRSxJQURZO0FBQUEsTUFDTkMsT0FETTs7QUFBQSxtQkFFU0gsc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFWkksTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBSW5CLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxRQUFFLEVBQUMsTUFBVjtBQUFpQixpQkFBVyxFQUFDLE1BQTdCO0FBQW9DLGNBQVEsRUFBRSxrQkFBQ0MsS0FBRDtBQUFBLGVBQVdILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbEI7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFPLGlCQUFXLEVBQUMsVUFBbkI7QUFBOEIsVUFBSSxFQUFDLE9BQW5DO0FBQTJDLGNBQVEsRUFBRSxrQkFBQ0YsS0FBRDtBQUFBLGVBQVdELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBcEI7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQztBQUFFUCxjQUFJLEVBQUpBLElBQUY7QUFBUUUsZ0JBQU0sRUFBTkE7QUFBUixTQUFELENBQW5CO0FBQUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztJQVhRSCxXOztNQUFBQSxXOztBQWFULFNBQVNTLGVBQVQsR0FBMkI7QUFDdkIsc0JBQU87QUFBQSxjQUFLYjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztNQUZRYSxlOztBQUlULFNBQVNELGFBQVQsQ0FBdUJFLE9BQXZCLEVBQWtFO0FBQzlELE1BQU1DLGFBQWEsR0FBR2YsUUFBUSxDQUFDZ0IsTUFBVCxDQUFnQixVQUFBQyxXQUFXO0FBQUEsV0FBSUEsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxRQUFsQixDQUEyQixDQUEzQixNQUFrQ0YsV0FBVyxDQUFDWixJQUFsRDtBQUFBLEdBQTNCLEVBQW1GLENBQW5GLENBQXRCOztBQUNBLE1BQUlVLGFBQUosRUFBbUI7QUFDZmYsWUFBUSxDQUFDb0IsR0FBVCxDQUFhLFVBQUFILFdBQVcsRUFBSTtBQUN4QixVQUFJQSxXQUFXLENBQUNJLEdBQVosS0FBb0JOLGFBQWEsQ0FBQ00sR0FBdEMsRUFBMkM7QUFDdkNKLG1CQUFXLENBQUNLLElBQVosQ0FBaUJILFFBQWpCLENBQTBCLENBQTFCLElBQStCTCxPQUFPLENBQUNULElBQXZDO0FBQ0FZLG1CQUFXLENBQUNLLElBQVosQ0FBaUJILFFBQWpCLENBQTBCLENBQTFCLElBQStCTCxPQUFPLENBQUNQLE1BQXZDO0FBQ0E7QUFDSDtBQUNKLEtBTkQ7QUFPSDs7QUFDRFAsVUFBUSxDQUFDdUIsSUFBVCxlQUFjO0FBQUEsMEJBQWdDVCxPQUFPLENBQUNULElBQXhDLG1CQUEyRFMsT0FBTyxDQUFDUCxNQUFuRTtBQUFBLEtBQVNpQixJQUFJLENBQUNDLE1BQUwsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWQ7QUFDQXhCLGFBQVcsQ0FBQztBQUFBLHNLQUFXRCxRQUFYO0FBQUEsR0FBRCxDQUFYO0FBQ0EwQixTQUFPLENBQUNDLEdBQVIsQ0FBWTNCLFFBQVo7QUFDSDs7QUFFY0Usb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXJpa2EuOWJlY2IyNzExMTQ1MzMzOWI2YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmxldCBjb250YWN0cztcclxubGV0IHNldENvbnRhY3RzO1xyXG5cclxuZnVuY3Rpb24gRXJpa2EoKSB7XHJcblxyXG4gICAgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBPbMOhLCBiZW0tdmluZG8gYW8gw4lyaWthJ3MgQ29udGFjdCBNYW5hZ2VtZW50LiBFdSBzb3UgYSDDiXJpa2EsIGEgZ2VyZW50ZSBkZSBjb250YXRvcyEg8J+TlvCfk5Xwn5Ox8J+RqVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgQWRpY2lvbmUgc2V1cyBjb250YXRvcyBhYmFpeG86PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0c0RldGFpbHMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbWVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRlbGVmb25lXCIgdHlwZT1cInBob25lXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNhbHZhckNvbnRhdG8oeyBuYW1lLCBudW1iZXIgfSl9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0c0RldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gPG9sPntjb250YWN0c308L29sPlxyXG59XHJcblxyXG5mdW5jdGlvbiBzYWx2YXJDb250YXRvKGNvbnRhY3Q6IHsgbmFtZTogc3RyaW5nLCBudW1iZXI6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gY29udGFjdHMuZmlsdGVyKGNvbnRhY3RJdGVtID0+IGNvbnRhY3RJdGVtLnByb3BzLmNoaWxkcmVuWzFdID09PSBjb250YWN0SXRlbS5uYW1lKVswXTtcclxuICAgIGlmIChhbHJlYWR5RXhpc3RzKSB7XHJcbiAgICAgICAgY29udGFjdHMubWFwKGNvbnRhY3RJdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRhY3RJdGVtLmtleSA9PT0gYWxyZWFkeUV4aXN0cy5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhY3RJdGVtLnByb3AuY2hpbGRyZW5bMV0gPSBjb250YWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb250YWN0SXRlbS5wcm9wLmNoaWxkcmVuWzNdID0gY29udGFjdC5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29udGFjdHMucHVzaCg8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT4gTm9tZToge2NvbnRhY3QubmFtZX0gfCBUZWxlZm9uZToge2NvbnRhY3QubnVtYmVyfSA8L2xpPik7XHJcbiAgICBzZXRDb250YWN0cygoKSA9PiAoWy4uLmNvbnRhY3RzXSkpO1xyXG4gICAgY29uc29sZS5sb2coY29udGFjdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcmlrYTsiXSwic291cmNlUm9vdCI6IiJ9