"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[1495],{

/***/ 82781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.js
var Envelop = __webpack_require__(23293);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(47560);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/Configuration.js










const DocumentationLink = styled_components_browser_esm["default"].a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const Configuration = ({ config }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Settings.email.plugin.title.config"),
    defaultMessage: "Configuration"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage(
    {
      id: (0,getTrad/* default */.Z)("Settings.email.plugin.text.configuration"),
      defaultMessage: "The plugin is configured through the {file} file, checkout this {link} for the documentation."
    },
    {
      file: "./config/plugins.js",
      link: /* @__PURE__ */ react.createElement(
        DocumentationLink,
        {
          href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        formatMessage({
          id: (0,getTrad/* default */.Z)("link"),
          defaultMessage: "Link"
        })
      )
    }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "shipper-email",
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.defaultFrom"),
        defaultMessage: "Default sender email"
      }),
      placeholder: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.placeholder.defaultFrom"),
        defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'"
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.settings.defaultFrom
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "response-email",
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.defaultReplyTo"),
        defaultMessage: "Default response email"
      }),
      placeholder: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),
        defaultMessage: `ex: Strapi '<'example@strapi.io'>'`
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.settings.defaultReplyTo
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      name: "email-provider",
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.provider"),
        defaultMessage: "Email provider"
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.provider
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: config.provider }, config.provider)
  ))));
};
Configuration.propTypes = {
  config: prop_types_default().shape({
    provider: (prop_types_default()).string,
    settings: prop_types_default().shape({
      defaultFrom: (prop_types_default()).string,
      defaultReplyTo: (prop_types_default()).string
    })
  }).isRequired
};
/* harmony default export */ const components_Configuration = (Configuration);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/schema.js


const schema = lib/* object */.Ry().shape({
  email: lib/* string */.Z_().email(build.translatedErrors.email).required(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/permissions.js
var permissions = __webpack_require__(61321);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/axiosInstance.js
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


const instance = axios_default().create({
  baseURL: ""
});
instance.interceptors.request.use(
  (config) => __async(void 0, null, function* () {
    config.headers = {
      Authorization: `Bearer ${build.auth.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  }),
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
      build.auth.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
const wrapper = (0,build.wrapAxiosInstance)(instance);
/* harmony default export */ const axiosInstance = (wrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/utils/api.js
var api_async = (__this, __arguments, generator) => {
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

const fetchEmailSettings = () => api_async(void 0, null, function* () {
  const { data } = yield axiosInstance.get("/email/settings");
  return data.config;
});
const postEmailTest = (body) => api_async(void 0, null, function* () {
  yield axiosInstance.post("/email/test", body);
});


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/EmailHeader.js





const EmailHeader = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    build.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.title"),
        defaultMessage: "Configuration"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      title: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.title"),
        defaultMessage: "Configuration"
      }),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.subTitle"),
        defaultMessage: "Test the settings for the Email plugin"
      })
    }
  ));
};
/* harmony default export */ const components_EmailHeader = (EmailHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js
var Settings_async = (__this, __arguments, generator) => {
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



















const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings */.Z.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
const SettingsPage = () => {
  var _a, _b;
  const toggleNotification = (0,build.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  (0,build.useFocusWhenNavigate)();
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [testAddress, setTestAddress] = (0,react.useState)("");
  const [isTestAddressValid, setIsTestAddressValid] = (0,react.useState)(false);
  const [config, setConfig] = (0,react.useState)({
    provider: "",
    settings: { defaultFrom: "", defaultReplyTo: "", testAddress: "" }
  });
  (0,react.useEffect)(() => {
    setIsLoading(true);
    fetchEmailSettings().then((config2) => {
      var _a2;
      notifyStatus(
        formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.data.loaded"),
          defaultMessage: "Email settings data has been loaded"
        })
      );
      setConfig(config2);
      const testAddressFound = (_a2 = config2 == null ? void 0 : config2.settings) == null ? void 0 : _a2.testAddress;
      if (testAddressFound) {
        setTestAddress(testAddressFound);
      }
    }).catch(
      () => toggleNotification({
        type: "warning",
        message: formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.config.error"),
          defaultMessage: "Failed to retrieve the email config"
        })
      })
    ).finally(() => setIsLoading(false));
  }, [formatMessage, toggleNotification, notifyStatus]);
  (0,react.useEffect)(() => {
    if (formErrors.email) {
      const input = document.querySelector("#test-address-input");
      input.focus();
    }
  }, [formErrors]);
  (0,react.useEffect)(() => {
    utils_schema.validate({ email: testAddress }, { abortEarly: false }).then(() => setIsTestAddressValid(true)).catch(() => setIsTestAddressValid(false));
  }, [testAddress]);
  const handleChange = (e) => {
    setTestAddress(() => e.target.value);
  };
  const handleSubmit = (event) => Settings_async(void 0, null, function* () {
    event.preventDefault();
    try {
      yield utils_schema.validate({ email: testAddress }, { abortEarly: false });
      setIsSubmitting(true);
      lockApp();
      postEmailTest({ to: testAddress }).then(() => {
        toggleNotification({
          type: "success",
          message: formatMessage(
            {
              id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.test.success"),
              defaultMessage: "Email test succeeded, check the {to} mailbox"
            },
            { to: testAddress }
          )
        });
      }).catch(() => {
        toggleNotification({
          type: "warning",
          message: formatMessage(
            {
              id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.test.error"),
              defaultMessage: "Failed to send a test mail to {to}"
            },
            { to: testAddress }
          )
        });
      }).finally(() => {
        setIsSubmitting(false);
        unlockApp();
      });
    } catch (error) {
      setFormErrors((0,build.getYupInnerErrors)(error));
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, { labelledBy: "title", "aria-busy": "true" }, /* @__PURE__ */ react.createElement(components_EmailHeader, null), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { labelledBy: "title", "aria-busy": isSubmitting }, /* @__PURE__ */ react.createElement(components_EmailHeader, null), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 7 }, /* @__PURE__ */ react.createElement(
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
    /* @__PURE__ */ react.createElement(components_Configuration, { config })
  ), /* @__PURE__ */ react.createElement(
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
      id: (0,getTrad/* default */.Z)("Settings.email.plugin.title.test"),
      defaultMessage: "Test email delivery"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5, alignItems: "end" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        id: "test-address-input",
        name: "test-address",
        onChange: handleChange,
        label: formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.testAddress"),
          defaultMessage: "Recipient email"
        }),
        value: testAddress,
        error: ((_a = formErrors.email) == null ? void 0 : _a.id) && formatMessage({
          id: (0,getTrad/* default */.Z)(`${(_b = formErrors.email) == null ? void 0 : _b.id}`),
          defaultMessage: "This is an invalid email"
        }),
        placeholder: formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.placeholder.testAddress"),
          defaultMessage: "ex: developer@example.com"
        })
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, s: 12 }, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        loading: isSubmitting,
        disabled: !isTestAddressValid,
        type: "submit",
        startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.Z, null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.button.test-email"),
        defaultMessage: "Send test email"
      })
    ))))
  )))));
};
/* harmony default export */ const Settings = (ProtectedSettingsPage);


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



/***/ }),

/***/ 23293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var r = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var h = (l, e, t) => e in l ? r(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, n = (l, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && h(l, t, e[t]);
  if (c)
    for (var t of c(e))
      m.call(e, t) && h(l, t, e[t]);
  return l;
};

function o(l) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",
    fill: "#32324D"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",
    fill: "#32324D"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",
    fill: "#32324D"
  }));
}



/***/ })

}]);