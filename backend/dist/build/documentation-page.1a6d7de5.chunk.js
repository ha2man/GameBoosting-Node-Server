"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[9789],{

/***/ 75730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_PluginPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(8934);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.js
var Refresh = __webpack_require__(30815);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/permissions.js
var permissions = __webpack_require__(80826);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/utils/index.js
var utils = __webpack_require__(93742);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/utils/openWithNewTab.js

const openWithNewTab = (path) => {
  const url = (() => {
    if ((0,lodash.startsWith)(path, "/")) {
      return `${strapi.backendURL}${path}`;
    }
    if ((0,lodash.startsWith)(path, "https") || (0,lodash.startsWith)(path, "http")) {
      return path;
    }
    return `${strapi.backendURL}/${path}`;
  })();
  window.open(url, "_blank");
  return window.focus();
};
/* harmony default export */ const utils_openWithNewTab = (openWithNewTab);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/utils/useReactQuery.js + 1 modules
var useReactQuery = __webpack_require__(4733);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-documentation/admin/src/pages/PluginPage/index.js
var __defProp = Object.defineProperty;
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


















const PluginPage = () => {
  var _a;
  (0,build.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { data, isLoading, deleteMutation, regenerateDocMutation } = (0,useReactQuery/* default */.Z)();
  const [showConfirmDelete, setShowConfirmDelete] = (0,react.useState)(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = (0,react.useState)(false);
  const [versionToDelete, setVersionToDelete] = (0,react.useState)();
  const colCount = 4;
  const rowCount = (((_a = data == null ? void 0 : data.docVersions) == null ? void 0 : _a.length) || 0) + 1;
  const openDocVersion = () => {
    const slash = (data == null ? void 0 : data.prefix.startsWith("/")) ? "" : "/";
    utils_openWithNewTab(`${slash}${data == null ? void 0 : data.prefix}/v${data == null ? void 0 : data.currentVersion}`);
  };
  const handleRegenerateDoc = (version) => {
    regenerateDocMutation.mutate({ version, prefix: data == null ? void 0 : data.prefix });
  };
  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleConfirmDelete = () => __async(void 0, null, function* () {
    setIsConfirmButtonLoading(true);
    yield deleteMutation.mutateAsync({ prefix: data == null ? void 0 : data.prefix, version: versionToDelete });
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  });
  const handleClickDelete = (version) => {
    setVersionToDelete(version);
    setShowConfirmDelete(!showConfirmDelete);
  };
  const title = formatMessage({
    id: (0,utils/* getTrad */.O)("plugin.name"),
    defaultMessage: "Documentation"
  });
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title,
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.O)("pages.PluginPage.header.description"),
        defaultMessage: "Configure the documentation plugin"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions/* default.open */.Z.open }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: openDocVersion, startIcon: /* @__PURE__ */ react.createElement(Eye["default"], null) }, formatMessage({
        id: (0,utils/* getTrad */.O)("pages.PluginPage.Button.open"),
        defaultMessage: "Open Documentation"
      })))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading && /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null, "Plugin is loading"), (data == null ? void 0 : data.docVersions.length) ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: (0,utils/* getTrad */.O)("pages.PluginPage.table.version"),
    defaultMessage: "Version"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: (0,utils/* getTrad */.O)("pages.PluginPage.table.generated"),
    defaultMessage: "Last Generated"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, data.docVersions.sort((a, b) => a.generatedDate < b.generatedDate ? 1 : -1).map((doc) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: doc.version }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, doc.version)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, doc.generatedDate)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, __spreadValues({ justifyContent: "end" }, build.stopPropagation), /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: openDocVersion,
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Eye["default"], null),
      label: formatMessage(
        {
          id: (0,utils/* getTrad */.O)("pages.PluginPage.table.icon.show"),
          defaultMessage: "Open {target}"
        },
        { target: `${doc.version}` }
      )
    }
  ), /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions/* default.regenerate */.Z.regenerate }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleRegenerateDoc(doc.version),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
      label: formatMessage(
        {
          id: (0,utils/* getTrad */.O)("pages.PluginPage.table.icon.regenerate"),
          defaultMessage: "Regenerate {target}"
        },
        { target: `${doc.version}` }
      )
    }
  )), /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions/* default.update */.Z.update }, doc.version !== data.currentVersion && /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickDelete(doc.version),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash["default"], null),
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: "Delete {target}"
        },
        { target: `${doc.version}` }
      )
    }
  )))))))) : /* @__PURE__ */ react.createElement(build.EmptyStateLayout, null)), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isConfirmButtonLoading,
      onConfirm: handleConfirmDelete,
      onToggleDialog: handleShowConfirmDelete,
      isOpen: showConfirmDelete
    }
  )));
};
/* harmony default export */ const pages_PluginPage = (PluginPage);


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



/***/ }),

/***/ 30815:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var o = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, i = (t, e) => {
  for (var l in e || (e = {}))
    r.call(e, l) && n(t, l, e[l]);
  if (a)
    for (var l of a(e))
      v.call(e, l) && n(t, l, e[l]);
  return t;
};

function d(t) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",
    fill: "#212134"
  }));
}



/***/ })

}]);