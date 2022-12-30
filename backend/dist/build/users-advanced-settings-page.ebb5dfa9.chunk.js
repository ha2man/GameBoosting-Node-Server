"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[9460],{

/***/ 98352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdvancedSettings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js

const layout = [
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email"),
      defaultMessage: "One account per email address"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email"),
      defaultMessage: "Disallow the user to create multiple accounts using the same email address with different authentication providers."
    },
    name: "unique_email",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.sign-up"),
      defaultMessage: "Enable sign-ups"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.sign-up"),
      defaultMessage: "When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."
    },
    name: "allow_register",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-reset-password"),
      defaultMessage: "Reset password page"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-reset-password"),
      defaultMessage: "URL of your application's reset password page."
    },
    placeholder: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.placeholder.email-reset-password"),
      defaultMessage: "ex: https://youtfrontend.com/reset-password"
    },
    name: "email_reset_password",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-confirmation"),
      defaultMessage: "Enable email confirmation"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-confirmation"),
      defaultMessage: "When enabled (ON), new registered users receive a confirmation email."
    },
    name: "email_confirmation",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),
      defaultMessage: "Redirection url"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),
      defaultMessage: "After you confirmed your email, choose where you will be redirected."
    },
    placeholder: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),
      defaultMessage: "ex: https://youtfrontend.com/email-confirmation"
    },
    name: "email_confirmation_redirection",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  }
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js


const URL_REGEX = new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))");
const schema = yup_lib/* object */.Ry().shape({
  email_confirmation_redirection: yup_lib/* mixed */.nK().when("email_confirmation", {
    is: true,
    then: yup_lib/* string */.Z_().matches(URL_REGEX).required(),
    otherwise: yup_lib/* string */.Z_().nullable()
  }),
  email_reset_password: yup_lib/* string */.Z_(build.translatedErrors.string).matches(URL_REGEX, build.translatedErrors.regex).nullable()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/api.js
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

const fetchData = () => __async(void 0, null, function* () {
  const { data } = yield utils/* axiosInstance.get */.be.get((0,utils/* getRequestURL */.Gc)("advanced"));
  return data;
});
const putAdvancedSettings = (body) => {
  return utils/* axiosInstance.put */.be.put((0,utils/* getRequestURL */.Gc)("advanced"), body);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var AdvancedSettings_async = (__this, __arguments, generator) => {
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




















const ProtectedAdvancedSettingsPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.readAdvancedSettings */.Z.readAdvancedSettings }, /* @__PURE__ */ react.createElement(AdvancedSettingsPage, null));
const AdvancedSettingsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const queryClient = (0,lib.useQueryClient)();
  (0,build.useFocusWhenNavigate)();
  const updatePermissions = (0,react.useMemo)(
    () => ({ update: permissions/* default.updateAdvancedSettings */.Z.updateAdvancedSettings }),
    []
  );
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,build.useRBAC)(updatePermissions);
  const { status: isLoadingData, data } = (0,lib.useQuery)("advanced", () => fetchData(), {
    onSuccess() {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("Form.advancedSettings.data.loaded"),
          defaultMessage: "Advanced settings data has been loaded"
        })
      );
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: (0,utils/* getTrad */.OB)("notification.error"), defaultMessage: "An error occured" }
      });
    }
  });
  const isLoading = isLoadingForPermissions || isLoadingData !== "success";
  const submitMutation = (0,lib.useMutation)((body) => putAdvancedSettings(body), {
    onSuccess() {
      return AdvancedSettings_async(this, null, function* () {
        yield queryClient.invalidateQueries("advanced");
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("notification.success.saved"), defaultMessage: "Saved" }
        });
        unlockApp();
      });
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: (0,utils/* getTrad */.OB)("notification.error"), defaultMessage: "An error occured" }
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = (body) => AdvancedSettings_async(void 0, null, function* () {
    lockApp();
    const urlConfirmation = body.email_confirmation ? body.email_confirmation_redirection : "";
    yield submitMutation.mutateAsync(__spreadProps(__spreadValues({}, body), { email_confirmation_redirection: urlConfirmation }));
  });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      build.SettingsPageTitle,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement(
    build.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
        defaultMessage: "Advanced Settings"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      onSubmit: handleSubmit,
      initialValues: data.settings,
      validateOnChange: false,
      validationSchema: utils_schema,
      enableReinitialize: true
    },
    ({ errors, values, handleChange, isSubmitting }) => {
      return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(
        HeaderLayout/* HeaderLayout */.T,
        {
          title: formatMessage({
            id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
            defaultMessage: "Advanced Settings"
          }),
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.z,
            {
              loading: isSubmitting,
              type: "submit",
              disabled: !canUpdate,
              startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
              size: "S"
            },
            formatMessage({ id: "global.save", defaultMessage: "Save" })
          )
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
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          Select/* Select */.P,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.OB)("EditForm.inputSelect.label.role"),
              defaultMessage: "Default role for authenticated users"
            }),
            value: values.default_role,
            hint: formatMessage({
              id: (0,utils/* getTrad */.OB)("EditForm.inputSelect.description.role"),
              defaultMessage: "It will attach the new authenticated user to the selected role."
            }),
            onChange: (e) => handleChange({ target: { name: "default_role", value: e } })
          },
          data.roles.map((role) => {
            return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: role.type, value: role.type }, role.name);
          })
        )), utils_layout.map((input) => {
          let value = values[input.name];
          if (!value) {
            value = input.type === "bool" ? false : "";
          }
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, __spreadValues({ key: input.name }, input.size), /* @__PURE__ */ react.createElement(
            build.GenericInput,
            __spreadProps(__spreadValues({}, input), {
              value,
              error: errors[input.name],
              disabled: input.name === "email_confirmation_redirection" && values.email_confirmation === false,
              onChange: handleChange
            })
          ));
        })))
      )));
    }
  ));
};
/* harmony default export */ const AdvancedSettings = (ProtectedAdvancedSettingsPage);


/***/ }),

/***/ 46979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
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


const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: ""
});
instance.interceptors.request.use(
  (config) => __async(void 0, null, function* () {
    config.headers = {
      Authorization: `Bearer ${_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.auth.getToken()}`,
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
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.auth.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
const wrapper = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.wrapAxiosInstance)(instance);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);


/***/ }),

/***/ 89031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "be": () => (/* reexport */ axiosInstance/* default */.Z),
  "YX": () => (/* reexport */ utils_cleanPermissions),
  "Gc": () => (/* reexport */ utils_getRequestURL),
  "OB": () => (/* reexport */ getTrad/* default */.Z)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/axiosInstance.js
var axiosInstance = __webpack_require__(46979);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if ((0,lodash.isEmpty)(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if ((0,lodash.isEmpty)(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js
var pluginId = __webpack_require__(31498);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js

const getRequestURL = (endPoint) => `/${pluginId/* default */.Z}/${endPoint}`;
/* harmony default export */ const utils_getRequestURL = (getRequestURL);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(84757);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js







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