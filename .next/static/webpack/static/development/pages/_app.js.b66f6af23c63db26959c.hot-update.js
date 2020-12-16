webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
var _jsxFileName = "/Users/Philipp/Desktop/shop-frontend/components/Cart.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









 //import CartItem from './CartItem';


 //import TakeMyMoney from './TakeMyMoney';

var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
/* eslint-disable */

var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_3__["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, render);
  },
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: LOCAL_STATE_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, render);
  }
});
/* eslint-enable */

var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Composed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, function (_ref4) {
    var user = _ref4.user,
        toggleCart = _ref4.toggleCart,
        localState = _ref4.localState;
    var me = user.data.me;
    if (!me) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: localState.data.cartOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: toggleCart,
      title: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, me.name, "'s Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "You Have ", me.cart.length, " Item", me.cart.length === 1 ? '' : 's', " in your cart.")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart.js");
var _jsxFileName = "/Users/Philipp/Desktop/shop-frontend/components/Header.js";








next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.red;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid black;display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-auto-columns:1fr auto;border-bottom:1px solid black;}"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Shiva \u0950 Store"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _components_Signout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Signout */ "./components/Signout.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart.js");
var _jsxFileName = "/Users/Philipp/Desktop/shop-frontend/components/Nav.js";








var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Shop")), me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Sell")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/orders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Orders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/me",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Signout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _components_Cart__WEBPACK_IMPORTED_MODULE_6__["TOGGLE_CART_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, function (toggleCart) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: toggleCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "My Cart");
    })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Sign In")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "SickButton",
  componentId: "l04z44-0"
})(["background:#ff9000;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "Supreme",
  componentId: "xv30qb-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcTotalPrice; });
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart.js");





function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local Data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            //read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: _components_Cart__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STATE_QUERY"]
            }),
                cartOpen = _cache$readQuery.cartOpen; //write the cart State to the opposite of inital value


            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: true
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./node_modules/react-adopt/dist/index.m.js":
/*!**************************************************!*\
  !*** ./node_modules/react-adopt/dist/index.m.js ***!
  \**************************************************/
/*! exports provided: adopt, Adopt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adopt", function() { return adopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adopt", function() { return Adopt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;n>r;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);n.length>o;o++)0>t.indexOf(n[o])&&(r[n[o]]=e[n[o]])}return r}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var hoistNonReactStatics=createCommonjsModule(function(e,t){var r,n,o,a,s,i,p,c;e.exports=(r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=(p=Object.getPrototypeOf)&&p(Object),function e(t,u,l){if("string"!=typeof u){if(c){var f=p(u);f&&f!==c&&e(t,f,l)}var d=a(u);s&&(d=d.concat(s(u)));for(var y=0;d.length>y;++y){var m=d[y];if(!(r[m]||n[m]||l&&l[m])){var v=i(u,m);try{o(t,m,v)}catch(e){}}}return t}return t})}),getDisplayName_1=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}}),getDisplayName=unwrapExports(getDisplayName_1),values=Object.values,keys=Object.keys,assign=Object.assign;function omit(e,t){return keys(t).filter(function(t){return-1===e.indexOf(t)}).reduce(function(e,r){return __assign({},e,((n={})[r]=t[r],n));var n},{})}function prop(e,t){return t[e]}var isFn=function(e){return!!e&&"function"==typeof e},isValidRenderProp=function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(e)||isFn(e)};function adopt(e,t){if(!values(e).some(isValidRenderProp))throw Error("The render props object mapper just accept valid elements as value");var r=keys(e),n=function(e){var t=e.render,r=e.children,n=__rest(e,["render","children"]);return t&&isFn(t)?t(n):r&&isFn(r)&&r(n)};n.displayName="Adopt";return r.reduce(function(n,o,a){var s=prop(o,e),i=getDisplayName(n),p=getDisplayName(s),c=a===r.length-1,u=function(e){var r=e.render,a=e.children,i=__rest(e,["render","children"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,__assign({},i),function(e){var n=omit(keys(i),e),p=r&&isFn(r)?r:a,u=function(e){var r,a=assign({},n,((r={})[o]=e,r)),s=t&&isFn(t)&&c?t(a):a;return p&&isFn(p)?p(s):null};return isFn(s)?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,assign({},i,e,{render:u})):react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(s,{},u)})};return u.displayName=i+"("+p+")",isFn(s)?hoistNonReactStatics(u,s):u},n)}var Adopt=function(e){function t(t){var r=e.call(this,t)||this;return r.Composed=adopt(t.mapper,r.props.mapProps),r}return __extends(t,e),t.prototype.render=function(){var e=this.props,t=__rest(e,["mapper","mapProps"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.Composed,__assign({},t))},t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
//# sourceMappingURL=index.m.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.b66f6af23c63db26959c.hot-update.js.map