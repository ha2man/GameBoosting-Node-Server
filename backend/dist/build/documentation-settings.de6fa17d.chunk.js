"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8503],{

/***/ 31346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js + 1 modules
var ToggleInput = __webpack_require__(20707);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(8934);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EyeStriked.js
var EyeStriked = __webpack_require__(94123);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/permissions.js
var permissions = __webpack_require__(80826);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/utils/index.js
var utils = __webpack_require__(93742);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/utils/useReactQuery.js + 1 modules
var useReactQuery = __webpack_require__(4733);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldAction.js
var FieldAction = __webpack_require__(25752);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/components/FieldActionWrapper/index.js


const FieldActionWrapper = (0,styled_components_browser_esm["default"])(FieldAction/* FieldAction */.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
/* harmony default export */ const components_FieldActionWrapper = (FieldActionWrapper);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/utils/schema.js


const schema = lib/* object */.Ry().shape({
  restrictedAccess: lib/* boolean */.O7(),
  password: lib/* string */.Z_().when("restrictedAccess", (value, initSchema) => {
    return value ? initSchema.required(build.translatedErrors.required) : initSchema;
  })
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/SettingsPage/index.js





















const SettingsPage = () => {
  (0,build.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { submitMutation, data, isLoading } = (0,useReactQuery/* default */.Z)();
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const handleUpdateSettingsSubmit = (body) => {
    submitMutation.mutate({
      prefix: data == null ? void 0 : data.prefix,
      body
    });
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, isLoading ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null, "Plugin settings are loading") : /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      initialValues: {
        restrictedAccess: (data == null ? void 0 : data.documentationAccess.restrictedAccess) || false,
        password: ""
      },
      onSubmit: handleUpdateSettingsSubmit,
      validationSchema: utils_schema
    },
    ({ handleSubmit, values, handleChange, errors, setFieldTouched, setFieldValue }) => {
      return /* @__PURE__ */ react.createElement(build.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
        HeaderLayout/* HeaderLayout */.T,
        {
          title: formatMessage({
            id: (0,utils/* getTrad */.O)("plugin.name"),
            defaultMessage: "Documentation"
          }),
          subtitle: formatMessage({
            id: (0,utils/* getTrad */.O)("pages.SettingsPage.header.description"),
            defaultMessage: "Configure the documentation plugin"
          }),
          primaryAction: /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions/* default.update */.Z.update }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null) }, formatMessage({
            id: (0,utils/* getTrad */.O)("pages.SettingsPage.Button.save"),
            defaultMessage: "Save"
          })))
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7
        },
        /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
          id: "global.settings",
          defaultMessage: "Settings"
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          ToggleInput/* ToggleInput */.s,
          {
            name: "restrictedAccess",
            label: formatMessage({
              id: (0,utils/* getTrad */.O)("pages.SettingsPage.toggle.label"),
              defaultMessage: "Restricted Access"
            }),
            hint: formatMessage({
              id: (0,utils/* getTrad */.O)("pages.SettingsPage.toggle.hint"),
              defaultMessage: "Make the documentation endpoint private"
            }),
            checked: values.restrictedAccess,
            onChange: () => {
              if (values.restrictedAccess === true) {
                setFieldValue("password", "", false);
                setFieldTouched("password", false, false);
              }
              setFieldValue("restrictedAccess", !values.restrictedAccess, false);
            },
            onLabel: "On",
            offLabel: "Off"
          }
        )), values.restrictedAccess && /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          TextInput/* TextInput */.o,
          {
            label: formatMessage({
              id: "global.password",
              defaultMessage: "Password"
            }),
            name: "password",
            placeholder: "**********",
            type: passwordShown ? "text" : "password",
            value: values.password,
            onChange: handleChange,
            error: errors.password ? formatMessage({
              id: errors.password,
              defaultMessage: "Invalid value"
            }) : null,
            endAction: /* @__PURE__ */ react.createElement(
              components_FieldActionWrapper,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  passwordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                )
              },
              passwordShown ? /* @__PURE__ */ react.createElement(Eye["default"], null) : /* @__PURE__ */ react.createElement(EyeStriked["default"], null)
            )
          }
        ))))
      )));
    }
  ));
};
/* harmony default export */ const pages_SettingsPage = (SettingsPage);


/***/ }),

/***/ 4733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_useReactQuery)
});

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pluginId.js
var pluginId = __webpack_require__(49950);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/utils/api.js
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


const deleteDoc = ({ prefix, version }) => {
  return (0,build.request)(`${prefix}/deleteDoc/${version}`, { method: "DELETE" });
};
const fetchDocumentationVersions = (toggleNotification) => __async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/${pluginId/* default */.Z}/getInfos`, { method: "GET" });
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return null;
  }
});
const regenerateDoc = ({ prefix, version }) => {
  return (0,build.request)(`${prefix}/regenerateDoc`, { method: "POST", body: { version } });
};
const updateSettings = ({ prefix, body }) => (0,build.request)(`${prefix}/updateSettings`, { method: "PUT", body });


// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(798);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/utils/useReactQuery.js




const useReactQuery = () => {
  const queryClient = (0,lib.useQueryClient)();
  const toggleNotification = (0,build.useNotification)();
  const { isLoading, data } = (0,lib.useQuery)(
    "get-documentation",
    () => fetchDocumentationVersions(toggleNotification)
  );
  const handleError = (err) => {
    toggleNotification({
      type: "warning",
      message: err.response.payload.message
    });
  };
  const handleSuccess = (type, tradId) => {
    queryClient.invalidateQueries("get-documentation");
    toggleNotification({
      type,
      message: { id: (0,getTrad/* default */.Z)(tradId) }
    });
  };
  const deleteMutation = (0,lib.useMutation)(deleteDoc, {
    onSuccess: () => handleSuccess("info", "notification.delete.success"),
    onError: (error) => handleError(error)
  });
  const submitMutation = (0,lib.useMutation)(updateSettings, {
    onSuccess: () => handleSuccess("success", "notification.update.success"),
    onError: handleError
  });
  const regenerateDocMutation = (0,lib.useMutation)(regenerateDoc, {
    onSuccess: () => handleSuccess("info", "notification.generate.success"),
    onError: (error) => handleError(error)
  });
  return { data, isLoading, deleteMutation, submitMutation, regenerateDocMutation };
};
/* harmony default export */ const utils_useReactQuery = (useReactQuery);


/***/ }),

/***/ 798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49950);

const getTrad = (id) => `${_pluginId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 93742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* reexport safe */ _getTrad__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _getTrad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(798);



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