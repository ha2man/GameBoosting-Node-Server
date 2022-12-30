"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[695],{

/***/ 85078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SettingsPage": () => (/* binding */ SettingsPage),
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js + 1 modules
var ToggleInput = __webpack_require__(20707);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(39844);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js
const init = (initialState) => {
  return initialState;
};
/* harmony default export */ const SettingsPage_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js


const initialState = {
  isLoading: true,
  isSubmiting: false,
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (drafState) => {
  switch (action.type) {
    case "CANCEL_CHANGES": {
      drafState.modifiedData = state.initialData;
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      drafState.isLoading = false;
      drafState.initialData = action.data;
      drafState.modifiedData = action.data;
      break;
    }
    case "ON_CHANGE": {
      set_default()(drafState, ["modifiedData", ...action.keys.split(".")], action.value);
      break;
    }
    case "ON_SUBMIT": {
      drafState.isSubmiting = true;
      break;
    }
    case "SUBMIT_SUCCEEDED": {
      drafState.initialData = state.modifiedData;
      drafState.isSubmiting = false;
      break;
    }
    case "ON_SUBMIT_ERROR": {
      drafState.isSubmiting = false;
      break;
    }
    default:
      return state;
  }
});
/* harmony default export */ const SettingsPage_reducer = (reducer);


// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/permissions.js
var permissions = __webpack_require__(16838);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




















const SettingsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const toggleNotification = (0,build.useNotification)();
  (0,build.useFocusWhenNavigate)();
  const [{ initialData, isLoading, isSubmiting, modifiedData }, dispatch] = (0,react.useReducer)(
    SettingsPage_reducer,
    initialState,
    SettingsPage_init
  );
  const isMounted = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    const getData = () => __async(void 0, null, function* () {
      try {
        const {
          data: { data }
        } = yield utils/* axiosInstance.get */.be.get((0,utils/* getRequestUrl */.IF)("settings"), {
          cancelToken: source.token
        });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        console.error(err);
      }
    });
    if (isMounted.current) {
      getData();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
      isMounted.current = false;
    };
  }, []);
  const isSaveButtonDisabled = isEqual_default()(initialData, modifiedData);
  const handleSubmit = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    if (isSaveButtonDisabled) {
      return;
    }
    lockApp();
    dispatch({ type: "ON_SUBMIT" });
    try {
      yield utils/* axiosInstance.put */.be.put((0,utils/* getRequestUrl */.IF)("settings"), modifiedData);
      dispatch({
        type: "SUBMIT_SUCCEEDED"
      });
      toggleNotification({
        type: "success",
        message: { id: "notification.form.success.fields" }
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: "ON_SUBMIT_ERROR" });
    }
    unlockApp();
  });
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    Helmet.Helmet,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("page.title"),
        defaultMessage: "Settings - Media Libray"
      })
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.header.label"),
        defaultMessage: "Media Library"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          disabled: isSaveButtonDisabled,
          "data-testid": "save-button",
          loading: isSubmiting,
          type: "submit",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.sub-header.label"),
        defaultMessage: "Configure the settings for the Media Library"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("settings.blockTitle"),
    defaultMessage: "Asset management"
  }))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "responsiveDimensions",
      "data-testid": "responsiveDimensions",
      checked: modifiedData.responsiveDimensions,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.description"),
        defaultMessage: "Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.label"),
        defaultMessage: "Responsive friendly upload"
      }),
      name: "responsiveDimensions",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "responsiveDimensions", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "sizeOptimization",
      "data-testid": "sizeOptimization",
      checked: modifiedData.sizeOptimization,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.description"),
        defaultMessage: "Enabling this option will reduce the image size and slightly reduce its quality."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.label"),
        defaultMessage: "Size optimization"
      }),
      name: "sizeOptimization",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "sizeOptimization", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "autoOrientation",
      "data-testid": "autoOrientation",
      checked: modifiedData.autoOrientation,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.description"),
        defaultMessage: "Enabling this option will automatically rotate the image according to EXIF orientation tag."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.label"),
        defaultMessage: "Auto orientation"
      }),
      name: "autoOrientation",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "autoOrientation", value: e.target.checked }
        });
      }
    }
  ))))))))));
};
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings */.Z.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
/* harmony default export */ const pages_SettingsPage = (ProtectedSettingsPage);


/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35961);



const p = ({ children: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
  paddingLeft: 10,
  paddingRight: 10
}, e);
p.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node.isRequired
};



/***/ }),

/***/ 67838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ m)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var dist = __webpack_require__(98402);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist.useCallbackRef)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js
var B = Object.defineProperty, H = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (e, n, t) => n in e ? B(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, l = (e, n) => {
  for (var t in n || (n = {}))
    E.call(n, t) && h(e, t, n[t]);
  if (p)
    for (var t of p(n))
      v.call(n, t) && h(e, t, n[t]);
  return e;
}, HeaderLayout_b = (e, n) => H(e, T(n));
var R = (e, n) => {
  var t = {};
  for (var a in e)
    E.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && p)
    for (var a of p(e))
      n.indexOf(a) < 0 && v.call(e, a) && (t[a] = e[a]);
  return t;
};








const j = () => {
  const e = (0,react.useRef)(null), [n, t] = (0,react.useState)(null), [a, o] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && t(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    e.current && t(e.current.getBoundingClientRect());
  }, [e]), {
    containerRef: a,
    isVisible: o,
    baseHeaderLayoutRef: e,
    headerSize: n
  };
}, m = (e) => {
  const { containerRef: n, isVisible: t, baseHeaderLayoutRef: a, headerSize: o } = j();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
    style: { height: o == null ? void 0 : o.height },
    ref: n
  }, t && /* @__PURE__ */ react.createElement(HeaderLayout_c, l({
    ref: a
  }, e))), !t && /* @__PURE__ */ react.createElement(HeaderLayout_c, HeaderLayout_b(l({}, e), {
    sticky: !0,
    width: o == null ? void 0 : o.width
  })));
};
m.displayName = "HeaderLayout";
const q = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(e) => e.width}px;
  z-index: 4;
  box-shadow: ${({ theme: e }) => e.shadows.tableShadow};
`, HeaderLayout_c = react.forwardRef(
  (z, L) => {
    var g = z, { navigationAction: e, primaryAction: n, secondaryAction: t, subtitle: a, title: o, sticky: w, width: x } = g, f = R(g, ["navigationAction", "primaryAction", "secondaryAction", "subtitle", "title", "sticky", "width"]);
    const y = typeof a == "string";
    return w ? /* @__PURE__ */ react.createElement(q, {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 3,
      paddingBottom: 3,
      background: "neutral0",
      width: x,
      "data-strapi-header-sticky": !0
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, e && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingRight: 3
    }, e), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, l({
      variant: "beta",
      as: "h1"
    }, f), o), y ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "pi",
      textColor: "neutral600"
    }, a) : a), t ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 4
    }, t) : null), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, n ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 2
    }, n) : void 0))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      ref: L,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 8,
      paddingTop: e ? 6 : 8,
      background: "neutral100",
      "data-strapi-header": !0
    }, e ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingBottom: 2
    }, e) : null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, l({
      as: "h1",
      variant: "alpha"
    }, f), o), t ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 4
    }, t) : null), n), y ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "epsilon",
      textColor: "neutral600",
      as: "p"
    }, a) : a);
  }
);
HeaderLayout_c.displayName = "BaseHeaderLayout";
HeaderLayout_c.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
HeaderLayout_c.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  sticky: prop_types.bool,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired,
  width: prop_types.number
};
m.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
m.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired
};



/***/ }),

/***/ 17034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35961);




const a = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: e }) => e ? "auto 1fr" : "1fr"};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  overflow-x: hidden;
`, i = ({ sideNav: e, children: n }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(a, {
  hasSideNav: Boolean(e)
}, e, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(m, {
  paddingBottom: 10
}, n));
i.defaultProps = {
  sideNav: void 0
};
i.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired,
  sideNav: prop_types__WEBPACK_IMPORTED_MODULE_3__.node
};



/***/ }),

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
var m = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var l = (e, o, t) => o in e ? m(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, s = (e, o) => {
  for (var t in o || (o = {}))
    a.call(o, t) && l(e, t, o[t]);
  if (i)
    for (var t of i(o))
      r.call(o, t) && l(e, t, o[t]);
  return e;
};
var p = (e, o) => {
  var t = {};
  for (var n in e)
    a.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && i)
    for (var n of i(e))
      o.indexOf(n) < 0 && r.call(e, n) && (t[n] = e[n]);
  return t;
};



const y = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, c = (t) => {
  var n = t, { labelledBy: e } = n, o = p(n, ["labelledBy"]);
  const d = e || "main-content-title";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(y, s({
    "aria-labelledby": d,
    id: "main-content",
    tabIndex: -1
  }, o));
};
c.defaultProps = {
  labelledBy: void 0
};
c.propTypes = {
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
};



/***/ })

}]);