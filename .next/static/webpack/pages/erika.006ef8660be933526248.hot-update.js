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
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      contacts = _useState[0],
      setContacts = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Ol\xE1, voc\xEA chegou na minha casa. Meu nome \xE9 \xC9rika, e sou uma gerente de contatos! \uD83D\uDCD6\uD83D\uDCD5\uD83D\uDCF1\uD83D\uDC69 Adicione seus contatos abaixo:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContactForm, {
        contactHandler: setContacts,
        contacts: contacts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
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
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      placeholder: "telefone",
      type: "phone",
      onChange: function onChange(event) {
        return setNumber(event.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);

  function salvarContato(contact) {
    var updatedContacts = props.contacts;
    updatedContacts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [" Nome: ", contact.name, " | Telefone: ", contact.number, " "]
    }, Math.random(), true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 30
    }, this)); // console.log(setContacts);

    props.contactHandler(updatedContacts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJpa2EvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVyaWthIiwidXNlU3RhdGUiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhbHZhckNvbnRhdG8iLCJjb250YWN0IiwidXBkYXRlZENvbnRhY3RzIiwicHVzaCIsIk1hdGgiLCJyYW5kb20iLCJjb250YWN0SGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUVSQyxRQUZRO0FBQUEsTUFFRUMsV0FGRjs7QUFJYixzQkFDSTtBQUFBLDRNQUdJO0FBQUEsOEJBQ0kscUVBQUMsV0FBRDtBQUFhLHNCQUFjLEVBQUVBLFdBQTdCO0FBQTBDLGdCQUFRLEVBQUVEO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBZFFGLEs7O0tBQUFBLEs7O0FBZ0JULFNBQVNJLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsbUJBQ0FKLHNEQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDakJLLElBRGlCO0FBQUEsTUFDWEMsT0FEVzs7QUFBQSxtQkFFSU4sc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVqQk8sTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUl4QixzQkFDSTtBQUFBLDRCQUNJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsaUJBQVcsRUFBQyxNQUE3QjtBQUFvQyxjQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXSCxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWxCO0FBQUE7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxpQkFBVyxFQUFDLFVBQW5CO0FBQThCLFVBQUksRUFBQyxPQUFuQztBQUEyQyxjQUFRLEVBQUUsa0JBQUNGLEtBQUQ7QUFBQSxlQUFXRCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUU7QUFBQSxlQUFNQyxhQUFhLENBQUM7QUFBRVAsY0FBSSxFQUFKQSxJQUFGO0FBQVFFLGdCQUFNLEVBQU5BO0FBQVIsU0FBRCxDQUFuQjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7O0FBUUEsV0FBU0ssYUFBVCxDQUF1QkMsT0FBdkIsRUFBa0U7QUFDOUQsUUFBTUMsZUFBZSxHQUFHVixLQUFLLENBQUNILFFBQTlCO0FBQ0FhLG1CQUFlLENBQUNDLElBQWhCLGVBQXFCO0FBQUEsNEJBQWdDRixPQUFPLENBQUNSLElBQXhDLG1CQUEyRFEsT0FBTyxDQUFDTixNQUFuRTtBQUFBLE9BQVNTLElBQUksQ0FBQ0MsTUFBTCxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckIsRUFGOEQsQ0FHOUQ7O0FBQ0FiLFNBQUssQ0FBQ2MsY0FBTixDQUFxQkosZUFBckI7QUFDSDtBQUNKLEMsQ0FFRDtBQUNBO0FBQ0E7OztJQXRCU1gsVzs7TUFBQUEsVztBQXdCTUosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXJpa2EuMDA2ZWY4NjYwYmU5MzM1MjYyNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEVyaWthKCkge1xyXG5cclxuICAgIGxldCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIE9sw6EsIHZvY8OqIGNoZWdvdSBuYSBtaW5oYSBjYXNhLiBNZXUgbm9tZSDDqSDDiXJpa2EsIGUgc291IHVtYSBnZXJlbnRlIGRlIGNvbnRhdG9zISDwn5OW8J+TlfCfk7Hwn5GpXHJcbiAgICAgICAgICAgIEFkaWNpb25lIHNldXMgY29udGF0b3MgYWJhaXhvOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIGNvbnRhY3RIYW5kbGVyPXtzZXRDb250YWN0c30gY29udGFjdHM9e2NvbnRhY3RzfS8+XHJcbiAgICAgICAgICAgICAgICA8b2w+e2NvbnRhY3RzfTwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybShwcm9wcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbWVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRlbGVmb25lXCIgdHlwZT1cInBob25lXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNhbHZhckNvbnRhdG8oeyBuYW1lLCBudW1iZXIgfSl9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhbHZhckNvbnRhdG8oY29udGFjdDogeyBuYW1lOiBzdHJpbmcsIG51bWJlcjogc3RyaW5nIH0pIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdHMgPSBwcm9wcy5jb250YWN0cztcclxuICAgICAgICB1cGRhdGVkQ29udGFjdHMucHVzaCg8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT4gTm9tZToge2NvbnRhY3QubmFtZX0gfCBUZWxlZm9uZToge2NvbnRhY3QubnVtYmVyfSA8L2xpPik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2V0Q29udGFjdHMpO1xyXG4gICAgICAgIHByb3BzLmNvbnRhY3RIYW5kbGVyKHVwZGF0ZWRDb250YWN0cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIENvbnRhY3RzRGV0YWlscygpIHtcclxuLy8gICAgIHJldHVybiA8b2w+e2NvbnRhY3RzfTwvb2w+XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyaWthOyJdLCJzb3VyY2VSb290IjoiIn0=