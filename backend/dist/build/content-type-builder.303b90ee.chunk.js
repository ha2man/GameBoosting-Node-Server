(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8880],{

/***/ 66848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AttributeIcon)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Component.js
var Component = __webpack_require__(85038);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/CollectionType.js
var o = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var i = (l, e, t) => e in l ? o(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, n = (l, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && i(l, t, e[t]);
  if (r)
    for (var t of r(e))
      f.call(e, t) && i(l, t, e[t]);
  return l;
};

function m(l) {
  return /* @__PURE__ */ react.createElement("svg", n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("rect", {
    x: 0.5,
    y: 0.5,
    width: 31,
    height: 23,
    rx: 2.5,
    fill: "#4945FF",
    stroke: "#4945FF"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082zM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782z",
    fill: "#fff"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Date.js
var dist_Date = __webpack_require__(34668);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Boolean.js
var Boolean = __webpack_require__(14484);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/DynamicZone.js
var DynamicZone = __webpack_require__(65531);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Email.js
var Email = __webpack_require__(73145);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Enumeration.js
var Enumeration = __webpack_require__(82574);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Json.js
var Json = __webpack_require__(60133);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/RichText.js
var RichText_r = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, RichText_n = Object.prototype.propertyIsEnumerable;
var RichText_c = (a, e, t) => e in a ? RichText_r(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, RichText_i = (a, e) => {
  for (var t in e || (e = {}))
    v.call(e, t) && RichText_c(a, t, e[t]);
  if (h)
    for (var t of h(e))
      RichText_n.call(e, t) && RichText_c(a, t, e[t]);
  return a;
};

function RichText_o(a) {
  return /* @__PURE__ */ react.createElement("svg", RichText_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("rect", {
    x: 0.5,
    y: 0.5,
    width: 31,
    height: 23,
    rx: 2.5,
    fill: "#EAF5FF",
    stroke: "#B8E1FF"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.286 9.286v-.857a.397.397 0 00-.138-.302A.465.465 0 0018.82 8h-8.357a.465.465 0 00-.326.127.397.397 0 00-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 00.327-.127.397.397 0 00.138-.301zm2.785 2.713v.857a.397.397 0 01-.137.301.465.465 0 01-.327.128H10.464a.465.465 0 01-.326-.128.397.397 0 01-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 01.326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 01.137.302zm-1.857 3.574v.857a.397.397 0 01-.137.302.465.465 0 01-.327.127h-9.286a.465.465 0 01-.326-.127.397.397 0 01-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 01.326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 01.138.301z",
    fill: "#0C75AF"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Media.js
var Media = __webpack_require__(74525);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Password.js
var Password_n = Object.defineProperty;
var Password_r = Object.getOwnPropertySymbols;
var Password_o = Object.prototype.hasOwnProperty, Password_i = Object.prototype.propertyIsEnumerable;
var Password_c = (a, e, t) => e in a ? Password_n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, Password_h = (a, e) => {
  for (var t in e || (e = {}))
    Password_o.call(e, t) && Password_c(a, t, e[t]);
  if (Password_r)
    for (var t of Password_r(e))
      Password_i.call(e, t) && Password_c(a, t, e[t]);
  return a;
};

function s(a) {
  return /* @__PURE__ */ react.createElement("svg", Password_h({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    d: "M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",
    fill: "#FDF4DC",
    stroke: "#FAE7B9"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 012.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 00.433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 00-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887z",
    fill: "#D9822F"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Relation.js
var Relation = __webpack_require__(48394);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/SingleType.js
var SingleType_n = Object.defineProperty;
var SingleType_r = Object.getOwnPropertySymbols;
var SingleType_f = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var SingleType_i = (l, e, t) => e in l ? SingleType_n(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, SingleType_c = (l, e) => {
  for (var t in e || (e = {}))
    SingleType_f.call(e, t) && SingleType_i(l, t, e[t]);
  if (SingleType_r)
    for (var t of SingleType_r(e))
      a.call(e, t) && SingleType_i(l, t, e[t]);
  return l;
};

function SingleType_o(l) {
  return /* @__PURE__ */ react.createElement("svg", SingleType_c({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("rect", {
    x: 0.5,
    y: 0.5,
    width: 31,
    height: 23,
    rx: 2.5,
    fill: "#0C75AF",
    stroke: "#0C75AF"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71zM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781z",
    fill: "#fff"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Text.js
var Text = __webpack_require__(21210);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Uid.js
var Uid = __webpack_require__(3963);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Number.js
var dist_Number = __webpack_require__(31666);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





















const iconByTypes = {
  biginteger: dist_Number/* default */.Z,
  boolean: Boolean/* default */.Z,
  collectionType: m,
  component: Component/* default */.Z,
  contentType: m,
  date: dist_Date/* default */.Z,
  datetime: dist_Date/* default */.Z,
  decimal: dist_Number/* default */.Z,
  dynamiczone: DynamicZone/* default */.Z,
  email: Email/* default */.Z,
  enum: Enumeration/* default */.Z,
  enumeration: Enumeration/* default */.Z,
  file: Media/* default */.Z,
  files: Media/* default */.Z,
  float: dist_Number/* default */.Z,
  integer: dist_Number/* default */.Z,
  json: Json/* default */.Z,
  JSON: Json/* default */.Z,
  media: Media/* default */.Z,
  number: dist_Number/* default */.Z,
  password: s,
  relation: Relation/* default */.Z,
  richtext: RichText_o,
  singleType: SingleType_o,
  string: Text/* default */.Z,
  text: Text/* default */.Z,
  time: dist_Date/* default */.Z,
  timestamp: dist_Date/* default */.Z,
  uid: Uid/* default */.Z
};
const IconBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: ${(0,build.pxToRem)(32)};
  height: ${(0,build.pxToRem)(24)};
  box-sizing: content-box;
`;
const AttributeIcon = (_a) => {
  var _b = _a, { type, customField } = _b, rest = __objRest(_b, ["type", "customField"]);
  const customFieldsRegistry = (0,build.useCustomFields)();
  let Compo = iconByTypes[type];
  if (customField) {
    const { icon } = customFieldsRegistry.get(customField);
    if (icon) {
      Compo = icon;
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(IconBox, __spreadProps(__spreadValues({ as: Compo }, rest), { "aria-hidden": true }));
};
AttributeIcon.defaultProps = {
  customField: null
};
AttributeIcon.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customField: (prop_types_default()).string
};
/* harmony default export */ const components_AttributeIcon = (AttributeIcon);


/***/ }),

/***/ 7955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const DataManagerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataManagerContext);


/***/ }),

/***/ 98422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const FormModalNavigationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormModalNavigationContext);


/***/ }),

/***/ 13588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _contexts_DataManagerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7955);


const useDataManager = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_DataManagerContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDataManager);


/***/ }),

/***/ 26478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _contexts_FormModalNavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98422);


const useFormModalNavigation = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_FormModalNavigationContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormModalNavigation);


/***/ }),

/***/ 11593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/permissions.js
var permissions = __webpack_require__(57176);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pluginId.js
var pluginId = __webpack_require__(96124);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/contexts/DataManagerContext.js
var DataManagerContext = __webpack_require__(7955);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(26478);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/axiosInstance.js
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
  baseURL: `${""}/${pluginId/* default */.Z}`
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

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(5002);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/makeUnique.js
var makeUnique = __webpack_require__(85169);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var lodash_get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/toLower.js
var toLower = __webpack_require__(7334);
var toLower_default = /*#__PURE__*/__webpack_require__.n(toLower);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 2 modules
var Tabs = __webpack_require__(60633);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(13588);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelectNested.js
var MultiSelectNested = __webpack_require__(38953);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AllowedTypesSelect/index.js





const options = [
  {
    label: "All",
    children: [
      { label: "images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)", value: "images" },
      { label: "videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)", value: "videos" },
      { label: "audios (MP3, WAV, OGG)", value: "audios" },
      { label: "files (CSV, ZIP, PDF, Excel, JSON, ...)", value: "files" }
    ]
  }
];
const AllowedTypesSelect = ({ intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const displayedValue = value === null || value.length === 0 ? formatMessage({ id: "global.none", defaultMessage: "None" }) : [...value].sort().map((v) => upperFirst_default()(v)).join(", ");
  const label = intlLabel.id ? formatMessage({ id: intlLabel.id, defaultMessage: intlLabel.defaultMessage }) : name;
  return /* @__PURE__ */ react.createElement(
    MultiSelectNested/* MultiSelectNested */.Q,
    {
      id: "select1",
      label,
      customizeContent: () => displayedValue,
      onChange: (values) => {
        if (values.length > 0) {
          onChange({ target: { name, value: values, type: "allowed-types-select" } });
        } else {
          onChange({ target: { name, value: null, type: "allowed-types-select" } });
        }
      },
      options,
      value: value || []
    }
  );
};
AllowedTypesSelect.defaultProps = {
  value: null
};
AllowedTypesSelect.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array])
};
/* harmony default export */ const components_AllowedTypesSelect = (AllowedTypesSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/isAllowedContentTypesForRelations.js
const isAllowedContentTypesForRelations = (contentType) => {
  return contentType.kind === "collectionType" && (contentType.restrictRelationsTo === null || Array.isArray(contentType.restrictRelationsTo) && contentType.restrictRelationsTo.length > 0);
};
/* harmony default export */ const utils_isAllowedContentTypesForRelations = (isAllowedContentTypesForRelations);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/index.js



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/KeyboardNavigable/KeyboardNavigable.js
var KeyboardNavigable = __webpack_require__(17373);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js + 4 modules
var AttributeIcon = __webpack_require__(66848);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/OptionBoxWrapper/index.js


const BoxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary200};
  }
`;
/* harmony default export */ const OptionBoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/AttributeOption/index.js










const AttributeOption = ({ type }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { onClickSelectField } = (0,useFormModalNavigation/* default */.Z)();
  const handleClick = () => {
    const step = type === "component" ? "1" : null;
    onClickSelectField({
      attributeType: type,
      step
    });
  };
  return /* @__PURE__ */ react.createElement(OptionBoxWrapper, { padding: 4, as: "button", hasRadius: true, type: "button", onClick: handleClick }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage({ id: (0,getTrad/* default */.Z)(`attribute.${type}`), defaultMessage: type }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${type}.description`),
    defaultMessage: "A type for modeling data"
  }))))));
};
AttributeOption.defaultProps = {
  type: "text"
};
AttributeOption.propTypes = {
  type: (prop_types_default()).string
};
/* harmony default export */ const AttributeOptions_AttributeOption = (AttributeOption);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/utils/getPadding.js
const getPadding = (index) => {
  const isOdd = index % 2 === 1;
  const paddingLeft = isOdd ? 2 : 0;
  const paddingRight = isOdd ? 0 : 2;
  return { paddingLeft, paddingRight };
};
/* harmony default export */ const utils_getPadding = (getPadding);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/AttributeList/index.js








const AttributeList = ({ attributes }) => /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { tagName: "button" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 8 }, attributes.map((attributeRow, index) => {
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { key: index, gap: 0 }, attributeRow.map((attribute, index2) => {
    const { paddingLeft, paddingRight } = utils_getPadding(index2);
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: attribute, col: 6, style: { height: "100%" } }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        paddingLeft,
        paddingRight,
        paddingBottom: 1,
        style: { height: "100%" }
      },
      /* @__PURE__ */ react.createElement(AttributeOptions_AttributeOption, { type: attribute })
    ));
  }));
})));
AttributeList.propTypes = {
  attributes: (prop_types_default()).array.isRequired
};
/* harmony default export */ const AttributeOptions_AttributeList = (AttributeList);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/utils.js
var utils = __webpack_require__(92577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/constants.js
var constants = __webpack_require__(78474);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseButton/BaseButton.js
var BaseButton = __webpack_require__(21817);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.js
var L = Object.defineProperty, R = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var v = (e, r, t) => r in e ? L(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, g = (e, r) => {
  for (var t in r || (r = {}))
    b.call(r, t) && v(e, t, r[t]);
  if (a)
    for (var t of a(r))
      $.call(r, t) && v(e, t, r[t]);
  return e;
}, y = (e, r) => R(e, T(r));
var h = (e, r) => {
  var t = {};
  for (var o in e)
    b.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && a)
    for (var o of a(e))
      r.indexOf(o) < 0 && $.call(e, o) && (t[o] = e[o]);
  return t;
};









const C = (0,styled_components_browser_esm["default"])(BaseButton/* BaseButtonWrapper */.G)`
  padding: ${({ theme: e, size: r }) => `${r === "S" ? e.spaces[2] : "10px"} ${e.spaces[4]}`};
  background: ${({ theme: e }) => e.colors.buttonPrimary600};
  border: 1px solid ${({ theme: e }) => e.colors.buttonPrimary600};
  border-radius: ${({ theme: e }) => e.borderRadius};
  ${Box/* Box */.x} {
    display: flex;
    align-items: center;
  }
  ${Typography/* Typography */.Z} {
    color: ${({ theme: e }) => e.colors.buttonNeutral0};
  }
  &[aria-disabled='true'] {
    ${utils/* getDisabledStyle */.sg}
    &:active {
      ${utils/* getDisabledStyle */.sg}
    }
  }
  &:hover {
    ${utils/* getHoverStyle */.yP}
  }
  &:active {
    ${utils/* getActiveStyle */.tB}
  }
  ${utils/* getVariantStyle */.PD}
  /**
    Link specific properties
  */
  display: inline-flex;
  text-decoration: none;
  pointer-events: ${({ disabled: e }) => e ? "none" : void 0};
`, s = react.forwardRef(
  (V, E) => {
    var u = V, { variant: e, startIcon: r, endIcon: t, disabled: o, children: m, size: p, href: d, to: c } = u, k = h(u, ["variant", "startIcon", "endIcon", "disabled", "children", "size", "href", "to"]);
    const x = d ? "_blank" : void 0, B = d ? "noreferrer noopener" : void 0;
    return /* @__PURE__ */ react.createElement(C, y(g({
      ref: E,
      "aria-disabled": o,
      size: p,
      variant: e,
      target: x,
      rel: B,
      to: o ? void 0 : c,
      href: o ? "#" : d
    }, k), {
      as: c && !o ? react_router_dom_min.NavLink : "a"
    }), r && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      "aria-hidden": !0,
      paddingRight: 2
    }, r), p === "S" ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "pi",
      fontWeight: "bold"
    }, m) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      fontWeight: "bold"
    }, m), t && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      "aria-hidden": !0,
      paddingLeft: 2
    }, t));
  }
);
s.displayName = "LinkButton";
s.defaultProps = {
  disabled: !1,
  startIcon: void 0,
  endIcon: void 0,
  size: "S",
  variant: "default",
  onClick: void 0,
  href: void 0,
  to: void 0
};
s.propTypes = {
  children: prop_types.node.isRequired,
  disabled: prop_types.bool,
  endIcon: prop_types.element,
  href(e) {
    if (!e.disabled && !e.to && !e.href)
      return new Error("href must be defined");
  },
  onClick: prop_types.func,
  size: prop_types.oneOf(constants/* BUTTON_SIZES */.Gt),
  startIcon: prop_types.element,
  to(e) {
    if (!e.disabled && !e.href && !e.to)
      return new Error("to must be defined");
  },
  variant: prop_types.oneOf(constants/* VARIANTS */.ZC)
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/EmptyAttributes/index.js











const EmptyCard = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyCardGrid = () => {
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { wrap: "wrap", gap: 4 }, [...Array(4)].map((_, idx) => {
    return /* @__PURE__ */ react.createElement(
      EmptyCard,
      {
        key: `empty-card-${idx}`,
        height: "138px",
        width: "375px",
        hasRadius: true
      }
    );
  }));
};
const EmptyAttributes = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative" }, /* @__PURE__ */ react.createElement(EmptyCardGrid, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "absolute", top: 6, width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", justifyContent: "center", direction: "column" }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: EmptyDocuments["default"], color: "", width: "160px", height: "88px" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { textAlign: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.heading"),
    defaultMessage: "Nothing in here yet."
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.sub-heading"),
    defaultMessage: "Find what you are looking for through a wide range of extensions."
  }))))), /* @__PURE__ */ react.createElement(s, { to: "/marketplace", variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null) }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.button"),
    defaultMessage: "Add custom fields"
  })))));
};
/* harmony default export */ const AttributeOptions_EmptyAttributes = (EmptyAttributes);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/CustomFieldOption/index.js









const CustomFieldOption = ({ customFieldUid, customField }) => {
  const { type, intlLabel, intlDescription } = customField;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { onClickSelectCustomField } = (0,useFormModalNavigation/* default */.Z)();
  const handleClick = () => {
    onClickSelectCustomField({
      attributeType: type,
      customFieldUid
    });
  };
  return /* @__PURE__ */ react.createElement(OptionBoxWrapper, { padding: 4, as: "button", hasRadius: true, type: "button", onClick: handleClick }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type, customField: customFieldUid }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage(intlLabel))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(intlDescription))))));
};
CustomFieldOption.propTypes = {
  customFieldUid: (prop_types_default()).string.isRequired,
  customField: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired,
    icon: (prop_types_default()).func,
    intlLabel: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired,
    intlDescription: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const AttributeOptions_CustomFieldOption = (CustomFieldOption);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/CustomFieldsList/index.js












const CustomFieldsList = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const customFields = (0,build.useCustomFields)();
  const registeredCustomFields = Object.entries(customFields.getAll());
  if (!registeredCustomFields.length) {
    return /* @__PURE__ */ react.createElement(AttributeOptions_EmptyAttributes, null);
  }
  const sortedCustomFields = registeredCustomFields.sort(
    (a, b) => a[1].name > b[1].name ? 1 : -1
  );
  return /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { tagName: "button" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 3 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0 }, sortedCustomFields.map(([uid, customField], index) => {
    const { paddingLeft, paddingRight } = utils_getPadding(index);
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: uid, col: 6, style: { height: "100%" } }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        paddingLeft,
        paddingRight,
        paddingBottom: 1,
        style: { height: "100%" }
      },
      /* @__PURE__ */ react.createElement(AttributeOptions_CustomFieldOption, { key: uid, customFieldUid: uid, customField })
    ));
  })), /* @__PURE__ */ react.createElement(
    Link/* Link */.r,
    {
      href: "https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",
      isExternal: true
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.tabs.custom.howToLink"),
      defaultMessage: "How to add custom fields"
    })
  )));
};
/* harmony default export */ const AttributeOptions_CustomFieldsList = (CustomFieldsList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/index.js












const AttributeOptions = ({ attributes, forTarget, kind }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const defaultTabId = (0,getTrad/* default */.Z)("modalForm.tabs.default");
  const customTabId = (0,getTrad/* default */.Z)("modalForm.tabs.custom");
  const titleIdSuffix = forTarget.includes("component") ? "component" : kind;
  const titleId = (0,getTrad/* default */.Z)(`modalForm.sub-header.chooseAttribute.${titleIdSuffix}`);
  return /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, { padding: 6 }, /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("modalForm.tabs.label"),
        defaultMessage: "Default and Custom types tabs"
      }),
      id: "attribute-type-tabs",
      variant: "simple"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({ id: titleId, defaultMessage: "Select a field" })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({ id: defaultTabId, defaultMessage: "Default" })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({ id: customTabId, defaultMessage: "Custom" })))),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)),
    /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(AttributeOptions_AttributeList, { attributes })), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(AttributeOptions_CustomFieldsList, null)))
  ));
};
AttributeOptions.propTypes = {
  attributes: (prop_types_default()).array.isRequired,
  forTarget: (prop_types_default()).string.isRequired,
  kind: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_AttributeOptions = (AttributeOptions);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(47149);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/DialogBody.js
var DialogBody = __webpack_require__(47824);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/DialogFooter.js
var DialogFooter = __webpack_require__(98426);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js + 1 modules
var ToggleInput = __webpack_require__(20707);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExclamationMarkCircle.js
var ExclamationMarkCircle = __webpack_require__(51277);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DraftAndPublishToggle/index.js
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












const TypographyTextAlign = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  text-align: center;
`;
const DraftAndPublishToggle = ({
  description,
  disabled,
  intlLabel,
  isCreating,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showWarning, setShowWarning] = (0,react.useState)(false);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    __spreadValues({}, intlLabel.values)
  ) : name;
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    __spreadValues({}, description.values)
  ) : "";
  const handleToggle = () => setShowWarning((prev) => !prev);
  const handleConfirm = () => {
    onChange({ target: { name, value: false } });
    handleToggle();
  };
  const handleChange = ({ target: { checked } }) => {
    if (!checked && !isCreating) {
      handleToggle();
      return;
    }
    onChange({ target: { name, value: checked } });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      checked: value || false,
      disabled,
      hint,
      label,
      name,
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: handleChange
    }
  ), showWarning && /* @__PURE__ */ react.createElement(Dialog/* Dialog */.V, { onClose: handleToggle, title: "Confirmation", isOpen: showWarning }, /* @__PURE__ */ react.createElement(DialogBody/* DialogBody */.a, { icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle["default"], null) }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(TypographyTextAlign, { id: "confirm-description" }, formatMessage({
    id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.message"),
    defaultMessage: "If you disable the Draft/Publish system, your drafts will be deleted."
  }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, formatMessage({
    id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.second-message"),
    defaultMessage: "Are you sure you want to disable it?"
  }))))), /* @__PURE__ */ react.createElement(
    DialogFooter/* DialogFooter */.c,
    {
      startAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleToggle, variant: "tertiary" }, formatMessage({
        id: "components.popUpWarning.button.cancel",
        defaultMessage: "No, cancel"
      })),
      endAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "danger-light", onClick: handleConfirm }, formatMessage({
        id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.button.confirm"),
        defaultMessage: "Yes, disable"
      }))
    }
  )));
};
DraftAndPublishToggle.defaultProps = {
  description: null,
  disabled: false,
  value: false
};
DraftAndPublishToggle.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).bool
};
/* harmony default export */ const components_DraftAndPublishToggle = (DraftAndPublishToggle);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalHeader/index.js













const FormModalHeader = ({
  actionType,
  attributeName,
  attributeType,
  categoryName,
  contentTypeKind,
  dynamicZoneTarget,
  forTarget,
  modalType,
  targetUid,
  customFieldUid
}) => {
  var _a;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  let icon;
  let headers = [];
  const schema = ((_a = modifiedData == null ? void 0 : modifiedData[forTarget]) == null ? void 0 : _a[targetUid]) || (modifiedData == null ? void 0 : modifiedData[forTarget]) || null;
  let displayName = schema == null ? void 0 : schema.schema.displayName;
  if (modalType === "contentType") {
    icon = contentTypeKind;
  }
  if (["component", "editCategory"].includes(modalType)) {
    icon = "component";
  }
  const isCreatingMainSchema = ["component", "contentType"].includes(modalType);
  if (isCreatingMainSchema) {
    let headerId = (0,getTrad/* default */.Z)(`modalForm.component.header-${actionType}`);
    if (modalType === "contentType") {
      headerId = (0,getTrad/* default */.Z)(`modalForm.${contentTypeKind}.header-create`);
    }
    if (actionType === "edit") {
      headerId = (0,getTrad/* default */.Z)(`modalForm.header-edit`);
    }
    return /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: icon })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({ id: headerId }, { name: displayName })))));
  }
  headers = [
    {
      label: displayName,
      info: { category: (schema == null ? void 0 : schema.category) || null, name: schema == null ? void 0 : schema.schema.displayName }
    }
  ];
  if (modalType === "chooseAttribute") {
    icon = ["component", "components"].includes(forTarget) ? "component" : schema.schema.kind;
  }
  if (modalType === "addComponentToDynamicZone") {
    icon = "dynamiczone";
    headers.push({ label: dynamicZoneTarget });
  }
  if (modalType === "attribute" || modalType === "customField") {
    icon = attributeType;
    headers.push({ label: attributeName });
  }
  if (modalType === "editCategory") {
    const label = formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.header.categories"),
      defaultMessage: "Categories"
    });
    headers = [{ label }, { label: categoryName }];
  }
  const breadcrumbsLabel = headers.map(({ label }) => label).join(",");
  return /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 3 }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: icon, customField: customFieldUid }), /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: breadcrumbsLabel }, headers.map((header, index) => {
    var _a2;
    const label = upperFirst_default()(header.label);
    if (!label) {
      return null;
    }
    const key = `${header.label}.${index}`;
    if ((_a2 = header.info) == null ? void 0 : _a2.category) {
      const content = `${label} (${upperFirst_default()(header.info.category)} - ${upperFirst_default()(
        header.info.name
      )})`;
      return /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, { key }, content);
    }
    return /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, { key }, label);
  }))));
};
FormModalHeader.defaultProps = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  contentTypeKind: null,
  targetUid: null,
  customFieldUid: null
};
FormModalHeader.propTypes = {
  actionType: (prop_types_default()).string,
  attributeName: (prop_types_default()).string,
  attributeType: (prop_types_default()).string,
  categoryName: (prop_types_default()).string,
  contentTypeKind: (prop_types_default()).string,
  dynamicZoneTarget: (prop_types_default()).string,
  forTarget: prop_types_default().oneOf(["contentType", "component", "components"]),
  modalType: (prop_types_default()).string.isRequired,
  targetUid: (prop_types_default()).string,
  customFieldUid: (prop_types_default()).string
};
/* harmony default export */ const components_FormModalHeader = (FormModalHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalEndActions/index.js






const FormModalEndActions = ({
  categoryName,
  deleteCategory,
  deleteComponent,
  deleteContentType,
  isAttributeModal,
  isCustomFieldModal,
  isComponentAttribute,
  isComponentToDzModal,
  isContentTypeModal,
  isCreatingComponent,
  isCreatingComponentAttribute,
  isCreatingComponentInDz,
  isCreatingComponentWhileAddingAField,
  isCreatingContentType,
  isCreatingDz,
  isComponentModal,
  isDzAttribute,
  isEditingAttribute,
  isEditingCategory,
  isInFirstComponentStep,
  onSubmitAddComponentAttribute,
  onSubmitAddComponentToDz,
  onSubmitCreateContentType,
  onSubmitCreateComponent,
  onSubmitCreateDz,
  onSubmitEditAttribute,
  onSubmitEditCategory,
  onSubmitEditComponent,
  onSubmitEditContentType,
  onSubmitEditCustomFieldAttribute,
  onSubmitEditDz,
  onClickFinish
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (isComponentToDzModal) {
    if (isCreatingComponentInDz) {
      return /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentToDz(e, true);
          },
          startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null)
        },
        formatMessage({
          id: (0,getTrad/* default */.Z)("form.button.add-first-field-to-created-component"),
          defaultMessage: "Add first field to the component"
        })
      );
    }
    return /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "default",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentToDz(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    );
  }
  if (isAttributeModal && isDzAttribute && !isCreatingDz) {
    return /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "default",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditDz(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    );
  }
  if (isAttributeModal && isDzAttribute && isCreatingDz) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateDz(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-components-to-dynamiczone"),
        defaultMessage: "Add components to the zone"
      })
    ));
  }
  if (isAttributeModal && isComponentAttribute) {
    if (isInFirstComponentStep) {
      return /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentAttribute(e, true);
          }
        },
        isCreatingComponentAttribute ? formatMessage({
          id: (0,getTrad/* default */.Z)("form.button.configure-component"),
          defaultMessage: "Configure the component"
        }) : formatMessage({
          id: (0,getTrad/* default */.Z)("form.button.select-component"),
          defaultMessage: "Configure the component"
        })
      );
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentAttribute(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null)
      },
      isCreatingComponentWhileAddingAField ? formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-first-field-to-created-component"),
        defaultMessage: "Add first field to the component"
      }) : formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-field"),
        defaultMessage: "Add another field"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "default",
        type: "button",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitAddComponentAttribute(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    ));
  }
  if (isAttributeModal && !isComponentAttribute && !isDzAttribute) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "button" : "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditAttribute(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-field"),
        defaultMessage: "Add another field"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "submit" : "button",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditAttribute(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    ));
  }
  if (isContentTypeModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isCreatingContentType && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "button",
        variant: "danger",
        onClick: (e) => {
          e.preventDefault();
          deleteContentType();
        }
      },
      formatMessage({
        id: "global.delete",
        defaultMessage: "Delete"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditContentType(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    )), isCreatingContentType && /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateContentType(e, true);
        }
      },
      formatMessage({
        id: "global.continue",
        defaultMessage: "Continue"
      })
    ));
  }
  if (isComponentModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isCreatingComponent && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "button",
        variant: "danger",
        onClick: (e) => {
          e.preventDefault();
          deleteComponent();
        }
      },
      formatMessage({
        id: "global.delete",
        defaultMessage: "Delete"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditComponent(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    )), isCreatingComponent && /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateComponent(e, true);
        }
      },
      formatMessage({
        id: "global.continue",
        defaultMessage: "Continue"
      })
    ));
  }
  if (isEditingCategory) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "button",
        variant: "danger",
        onClick: (e) => {
          e.preventDefault();
          deleteCategory(categoryName);
        }
      },
      formatMessage({
        id: "global.delete",
        defaultMessage: "Delete"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditCategory(e);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "finish"
      })
    ));
  }
  if (isCustomFieldModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "button" : "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditCustomFieldAttribute(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-field"),
        defaultMessage: "Add another field"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "submit" : "button",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditCustomFieldAttribute(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    ));
  }
  return null;
};
FormModalEndActions.defaultProps = {
  categoryName: null,
  onClickFinish() {
  }
};
FormModalEndActions.propTypes = {
  categoryName: (prop_types_default()).string,
  deleteCategory: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  deleteContentType: (prop_types_default()).func.isRequired,
  isAttributeModal: (prop_types_default()).bool.isRequired,
  isCustomFieldModal: (prop_types_default()).bool.isRequired,
  isComponentAttribute: (prop_types_default()).bool.isRequired,
  isComponentModal: (prop_types_default()).bool.isRequired,
  isComponentToDzModal: (prop_types_default()).bool.isRequired,
  isContentTypeModal: (prop_types_default()).bool.isRequired,
  isCreatingComponent: (prop_types_default()).bool.isRequired,
  isCreatingComponentAttribute: (prop_types_default()).bool.isRequired,
  isCreatingComponentInDz: (prop_types_default()).bool.isRequired,
  isCreatingComponentWhileAddingAField: (prop_types_default()).bool.isRequired,
  isCreatingContentType: (prop_types_default()).bool.isRequired,
  isCreatingDz: (prop_types_default()).bool.isRequired,
  isDzAttribute: (prop_types_default()).bool.isRequired,
  isEditingAttribute: (prop_types_default()).bool.isRequired,
  isEditingCategory: (prop_types_default()).bool.isRequired,
  isInFirstComponentStep: (prop_types_default()).bool.isRequired,
  onSubmitAddComponentAttribute: (prop_types_default()).func.isRequired,
  onSubmitAddComponentToDz: (prop_types_default()).func.isRequired,
  onSubmitCreateContentType: (prop_types_default()).func.isRequired,
  onSubmitCreateComponent: (prop_types_default()).func.isRequired,
  onSubmitCreateDz: (prop_types_default()).func.isRequired,
  onSubmitEditAttribute: (prop_types_default()).func.isRequired,
  onSubmitEditCategory: (prop_types_default()).func.isRequired,
  onSubmitEditComponent: (prop_types_default()).func.isRequired,
  onSubmitEditContentType: (prop_types_default()).func.isRequired,
  onSubmitEditCustomFieldAttribute: (prop_types_default()).func.isRequired,
  onSubmitEditDz: (prop_types_default()).func.isRequired,
  onClickFinish: (prop_types_default()).func
};
/* harmony default export */ const components_FormModalEndActions = (FormModalEndActions);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalSubHeader/getModalTitleSubHeader.js

const getModalTitleSubHeader = ({ modalType, forTarget, kind, actionType, step }) => {
  switch (modalType) {
    case "chooseAttribute":
      return (0,getTrad/* default */.Z)(
        `modalForm.sub-header.chooseAttribute.${forTarget.includes("component") ? "component" : kind || "collectionType"}`
      );
    case "attribute": {
      return (0,getTrad/* default */.Z)(
        `modalForm.sub-header.attribute.${actionType}${step !== "null" && step !== null && actionType !== "edit" ? ".step" : ""}`
      );
    }
    case "customField": {
      return (0,getTrad/* default */.Z)(`modalForm.sub-header.attribute.${actionType}`);
    }
    case "addComponentToDynamicZone":
      return (0,getTrad/* default */.Z)("modalForm.sub-header.addComponentToDynamicZone");
    default:
      return (0,getTrad/* default */.Z)("configurations");
  }
};
/* harmony default export */ const FormModalSubHeader_getModalTitleSubHeader = (getModalTitleSubHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalSubHeader/index.js








const FormModalSubHeader = ({
  actionType,
  modalType,
  forTarget,
  kind,
  step,
  attributeType,
  attributeName,
  customField
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const intlLabel = modalType === "customField" ? customField.intlLabel : { id: (0,getTrad/* default */.Z)(`attribute.${attributeType}`) };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { direction: "column", alignItems: "flex-start", paddingBottom: 2, gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2", variant: "beta" }, formatMessage(
    {
      id: FormModalSubHeader_getModalTitleSubHeader({
        actionType,
        forTarget,
        kind,
        step,
        modalType
      }),
      defaultMessage: "Add new field"
    },
    {
      type: upperFirst_default()(formatMessage(intlLabel)),
      name: upperFirst_default()(attributeName),
      step
    }
  )), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${attributeType}.description`),
    defaultMessage: "A type for modeling data"
  })));
};
FormModalSubHeader.defaultProps = {
  actionType: null,
  modalType: null,
  forTarget: null,
  kind: null,
  step: null,
  attributeType: null,
  attributeName: null,
  customField: null
};
FormModalSubHeader.propTypes = {
  actionType: (prop_types_default()).string,
  modalType: (prop_types_default()).string,
  forTarget: (prop_types_default()).string,
  kind: (prop_types_default()).string,
  step: (prop_types_default()).string,
  attributeType: (prop_types_default()).string,
  attributeName: (prop_types_default()).string,
  customField: (prop_types_default()).object
};
/* harmony default export */ const components_FormModalSubHeader = (FormModalSubHeader);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/BooleanDefaultValueSelect/index.js
var BooleanDefaultValueSelect_defProp = Object.defineProperty;
var BooleanDefaultValueSelect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var BooleanDefaultValueSelect_hasOwnProp = Object.prototype.hasOwnProperty;
var BooleanDefaultValueSelect_propIsEnum = Object.prototype.propertyIsEnumerable;
var BooleanDefaultValueSelect_defNormalProp = (obj, key, value) => key in obj ? BooleanDefaultValueSelect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var BooleanDefaultValueSelect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (BooleanDefaultValueSelect_hasOwnProp.call(b, prop))
      BooleanDefaultValueSelect_defNormalProp(a, prop, b[prop]);
  if (BooleanDefaultValueSelect_getOwnPropSymbols)
    for (var prop of BooleanDefaultValueSelect_getOwnPropSymbols(b)) {
      if (BooleanDefaultValueSelect_propIsEnum.call(b, prop))
        BooleanDefaultValueSelect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const BooleanDefaultValueSelect = ({ intlLabel, name, options, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    BooleanDefaultValueSelect_spreadValues({}, intlLabel.values)
  ) : name;
  const handleChange = (value2) => {
    let nextValue = "";
    if (value2 === "true") {
      nextValue = true;
    }
    if (value2 === "false") {
      nextValue = false;
    }
    onChange({ target: { name, value: nextValue, type: "select-default-boolean" } });
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label,
      id: name,
      name,
      onChange: handleChange,
      value: (value === null ? "" : value).toString()
    },
    options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key, value: value2, disabled, hidden }, intlLabel2.defaultMessage);
    })
  );
};
BooleanDefaultValueSelect.defaultProps = {
  value: null
};
BooleanDefaultValueSelect.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).any
};
/* harmony default export */ const components_BooleanDefaultValueSelect = (BooleanDefaultValueSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.js
var themes_utils = __webpack_require__(15585);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CustomRadioGroup/components.js




const Wrapper = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,themes_utils/* inputFocusStyle */.k3)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    will-change: transform, opacity;
    background: ${({ theme }) => theme.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({ theme }) => theme.colors.neutral0};
      width: ${({ theme }) => theme.spaces[5]};
      height: ${({ theme }) => theme.spaces[5]};
      border: solid 1px ${({ theme }) => theme.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({ theme }) => theme.spaces[3]};
        height: ${({ theme }) => theme.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({ theme }) => theme.colors.primary100};
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    .checkmark {
      border: solid 1px ${({ theme }) => theme.colors.primary600};
      &::after {
        background: ${({ theme }) => theme.colors.primary600};
        transform: scale(1);
      }
    }
  }
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CustomRadioGroup/index.js








const CustomRadioGroup = ({ intlLabel, name, onChange, radios, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800", htmlFor: name, as: "label" }, formatMessage(intlLabel)), /* @__PURE__ */ react.createElement(Wrapper, { horizontal: true, spacing: 4, style: { alignItems: "stretch" } }, radios.map((radio) => {
    return /* @__PURE__ */ react.createElement("label", { htmlFor: radio.value.toString(), key: radio.value, className: "container" }, /* @__PURE__ */ react.createElement(
      "input",
      {
        id: radio.value.toString(),
        name,
        className: "option-input",
        checked: radio.value === value,
        value: radio.value,
        key: radio.value,
        onChange,
        type: "radio"
      }
    ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { className: "option", padding: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement("span", { className: "checkmark" })), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage(radio.title)), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(radio.description))))));
  })));
};
CustomRadioGroup.defaultProps = {
  radios: []
};
CustomRadioGroup.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  radios: prop_types_default().arrayOf(
    prop_types_default().shape({
      title: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }),
      description: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }),
      value: (prop_types_default()).any.isRequired
    })
  ),
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]).isRequired
};
/* harmony default export */ const components_CustomRadioGroup = (CustomRadioGroup);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/BooleanRadioGroup/index.js
var BooleanRadioGroup_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var BooleanRadioGroup_getOwnPropSymbols = Object.getOwnPropertySymbols;
var BooleanRadioGroup_hasOwnProp = Object.prototype.hasOwnProperty;
var BooleanRadioGroup_propIsEnum = Object.prototype.propertyIsEnumerable;
var BooleanRadioGroup_defNormalProp = (obj, key, value) => key in obj ? BooleanRadioGroup_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var BooleanRadioGroup_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (BooleanRadioGroup_hasOwnProp.call(b, prop))
      BooleanRadioGroup_defNormalProp(a, prop, b[prop]);
  if (BooleanRadioGroup_getOwnPropSymbols)
    for (var prop of BooleanRadioGroup_getOwnPropSymbols(b)) {
      if (BooleanRadioGroup_propIsEnum.call(b, prop))
        BooleanRadioGroup_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (BooleanRadioGroup_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && BooleanRadioGroup_getOwnPropSymbols)
    for (var prop of BooleanRadioGroup_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && BooleanRadioGroup_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const BooleanRadioGroup = (_a) => {
  var _b = _a, { onChange, name } = _b, rest = __objRest(_b, ["onChange", "name"]);
  const handleChange = (e) => {
    const checked = e.target.value !== "false";
    onChange({ target: { name, value: checked, type: "boolean-radio-group" } });
  };
  return /* @__PURE__ */ react.createElement(components_CustomRadioGroup, __spreadProps(BooleanRadioGroup_spreadValues({}, rest), { name, onChange: handleChange }));
};
BooleanRadioGroup.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_BooleanRadioGroup = (BooleanRadioGroup);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/NumberInput/NumberInput.js + 1 modules
var NumberInput = __webpack_require__(25666);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CheckboxWithNumberField/index.js
var CheckboxWithNumberField_defProp = Object.defineProperty;
var CheckboxWithNumberField_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CheckboxWithNumberField_hasOwnProp = Object.prototype.hasOwnProperty;
var CheckboxWithNumberField_propIsEnum = Object.prototype.propertyIsEnumerable;
var CheckboxWithNumberField_defNormalProp = (obj, key, value) => key in obj ? CheckboxWithNumberField_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CheckboxWithNumberField_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CheckboxWithNumberField_hasOwnProp.call(b, prop))
      CheckboxWithNumberField_defNormalProp(a, prop, b[prop]);
  if (CheckboxWithNumberField_getOwnPropSymbols)
    for (var prop of CheckboxWithNumberField_getOwnPropSymbols(b)) {
      if (CheckboxWithNumberField_propIsEnum.call(b, prop))
        CheckboxWithNumberField_defNormalProp(a, prop, b[prop]);
    }
  return a;
};








const CheckboxWithNumberField = ({ error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showInput, setShowInput] = (0,react.useState)(!!value || value === 0);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    CheckboxWithNumberField_spreadValues({}, intlLabel.values)
  ) : name;
  const type = modifiedData.type === "biginteger" ? "text" : "number";
  const disabled = !modifiedData.type;
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      id: name,
      name,
      onValueChange: (value2) => {
        const initValue = type === "text" ? "0" : 0;
        const nextValue = value2 ? initValue : null;
        onChange({ target: { name, value: nextValue } });
        setShowInput((prev) => !prev);
      },
      value: showInput
    },
    label
  ), showInput && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 6, style: { maxWidth: "200px" } }, type === "text" ? /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      "aria-label": label,
      disabled,
      error: errorMessage,
      id: name,
      name,
      onChange,
      value: value === null ? "" : value
    }
  ) : /* @__PURE__ */ react.createElement(
    NumberInput/* NumberInput */.Y,
    {
      "aria-label": label,
      disabled,
      error: errorMessage,
      id: name,
      name,
      onValueChange: (value2) => {
        onChange({ target: { name, value: value2, type } });
      },
      value: value || 0
    }
  )));
};
CheckboxWithNumberField.defaultProps = {
  error: null,
  value: null
};
CheckboxWithNumberField.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([
    (prop_types_default()).string,
    (prop_types_default()).object,
    (prop_types_default()).bool,
    (prop_types_default()).number
  ])
};
/* harmony default export */ const components_CheckboxWithNumberField = (CheckboxWithNumberField);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeRadioGroup/index.js
var ContentTypeRadioGroup_defProp = Object.defineProperty;
var ContentTypeRadioGroup_defProps = Object.defineProperties;
var ContentTypeRadioGroup_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ContentTypeRadioGroup_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ContentTypeRadioGroup_hasOwnProp = Object.prototype.hasOwnProperty;
var ContentTypeRadioGroup_propIsEnum = Object.prototype.propertyIsEnumerable;
var ContentTypeRadioGroup_defNormalProp = (obj, key, value) => key in obj ? ContentTypeRadioGroup_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ContentTypeRadioGroup_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ContentTypeRadioGroup_hasOwnProp.call(b, prop))
      ContentTypeRadioGroup_defNormalProp(a, prop, b[prop]);
  if (ContentTypeRadioGroup_getOwnPropSymbols)
    for (var prop of ContentTypeRadioGroup_getOwnPropSymbols(b)) {
      if (ContentTypeRadioGroup_propIsEnum.call(b, prop))
        ContentTypeRadioGroup_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ContentTypeRadioGroup_spreadProps = (a, b) => ContentTypeRadioGroup_defProps(a, ContentTypeRadioGroup_getOwnPropDescs(b));
var ContentTypeRadioGroup_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ContentTypeRadioGroup_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ContentTypeRadioGroup_getOwnPropSymbols)
    for (var prop of ContentTypeRadioGroup_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ContentTypeRadioGroup_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





const ContentTypeRadioGroup = (_a) => {
  var _b = _a, { onChange } = _b, rest = ContentTypeRadioGroup_objRest(_b, ["onChange"]);
  const toggleNotification = (0,build.useNotification)();
  const handleChange = (e) => {
    toggleNotification({
      type: "info",
      message: {
        id: (0,getTrad/* default */.Z)("contentType.kind.change.warning"),
        defaultMessage: "You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."
      }
    });
    onChange(e);
  };
  return /* @__PURE__ */ react.createElement(components_CustomRadioGroup, ContentTypeRadioGroup_spreadProps(ContentTypeRadioGroup_spreadValues({}, rest), { onChange: handleChange }));
};
ContentTypeRadioGroup.propTypes = {
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ContentTypeRadioGroup = (ContentTypeRadioGroup);

// EXTERNAL MODULE: ./node_modules/react-window/dist/index.cjs.js
var index_cjs = __webpack_require__(88180);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.js
var Searchbar = __webpack_require__(49123);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.js
var Search = __webpack_require__(97184);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(70982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentIconPicker/utils/getIndexFromColAndRow.js
const getIndexFromColAndRow = (columnIndex, rowIndex, numCols) => {
  return columnIndex + rowIndex * numCols;
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentIconPicker/Cell.js


const Cell = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  svg {
    z-index: 2;
    color: ${({ isSelected, theme }) => isSelected ? theme.colors.primary600 : theme.colors.neutral300};
  }
  ${({ isSelected, theme }) => {
  if (isSelected) {
    return `
      &::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        background-color: ${theme.colors.primary200};
        z-index: 1;
      }
    `;
  }
  return "";
}}
`;
/* harmony default export */ const ComponentIconPicker_Cell = (Cell);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentIconPicker/index.js
















const CELL_WIDTH = 42;
const COLUMN_COUNT = 18;
const ComponentIconPicker = ({ error, intlLabel, name, onChange, value }) => {
  const { allIcons } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const searchWrapperRef = (0,react.useRef)();
  const [showSearch, setShowSearch] = (0,react.useState)(false);
  const [search, setSearch] = (0,react.useState)("");
  const [icons, setIcons] = (0,react.useState)(allIcons);
  const toggleSearch = () => setShowSearch((prev) => !prev);
  (0,react.useEffect)(() => {
    if (showSearch) {
      searchWrapperRef.current.querySelector("input").focus();
    }
  }, [showSearch]);
  const handleChangeSearch = ({ target: { value: value2 } }) => {
    setSearch(value2);
    setIcons(() => allIcons.filter((icon) => icon.includes(value2)));
  };
  const IconRenderer = ({ columnIndex, rowIndex, style }) => {
    const icon = icons[getIndexFromColAndRow(columnIndex, rowIndex, COLUMN_COUNT)];
    return /* @__PURE__ */ react.createElement("div", { style, key: `col-${columnIndex}` }, icon && /* @__PURE__ */ react.createElement(
      ComponentIconPicker_Cell,
      {
        style: { width: "100%", height: "100%" },
        alignItems: "center",
        justifyContent: "center",
        onClick: () => {
          onChange({ target: { name, value: icon } });
        },
        isSelected: icon === value,
        as: "button",
        type: "button"
      },
      /* @__PURE__ */ react.createElement(index_es/* FontAwesomeIcon */.G, { icon })
    ));
  };
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      variant: "pi",
      fontWeight: "bold",
      textColor: "neutral800",
      htmlFor: name,
      as: "label"
    },
    formatMessage(intlLabel)
  ), showSearch ? /* @__PURE__ */ react.createElement("div", { ref: searchWrapperRef, style: { width: 206 } }, /* @__PURE__ */ react.createElement(
    Searchbar/* Searchbar */.w,
    {
      name: "searchbar",
      onBlur: () => {
        if (!search) {
          toggleSearch();
        }
      },
      onClear: () => {
        setSearch("");
        setIcons(allIcons);
        toggleSearch();
      },
      value: search,
      onChange: handleChangeSearch,
      clearLabel: "Clearing the icon search",
      placeholder: formatMessage({
        id: (0,getTrad/* default */.Z)("ComponentIconPicker.search.placeholder"),
        defaultMessage: "Search for an icon"
      }),
      size: "S"
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)("ComponentIconPicker.search.placeholder"),
      defaultMessage: "Search for an icon"
    })
  )) : /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { onClick: toggleSearch, "aria-label": "Edit", icon: /* @__PURE__ */ react.createElement(Search["default"], null), noBorder: true })), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 1, background: "neutral100", borderColor: error ? "danger600" : "", hasRadius: true }, /* @__PURE__ */ react.createElement(
    index_cjs/* FixedSizeGrid */.Ym,
    {
      columnCount: COLUMN_COUNT,
      columnWidth: CELL_WIDTH,
      height: 132,
      rowHeight: CELL_WIDTH,
      rowCount: Math.ceil(icons.length / COLUMN_COUNT),
      width: CELL_WIDTH * COLUMN_COUNT
    },
    IconRenderer
  )), error && /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      variant: "pi",
      id: `${name}-error`,
      textColor: "danger600",
      "data-strapi-field-error": true
    },
    errorMessage
  ))));
};
ComponentIconPicker.defaultProps = {
  error: null
};
ComponentIconPicker.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ComponentIconPicker = (ComponentIconPicker);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getRelationType.js
var getRelationType = __webpack_require__(1734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/SimpleMenu/SimpleMenu.js + 1 modules
var SimpleMenu = __webpack_require__(17205);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/constants.js
var FormModal_constants = __webpack_require__(59015);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationField/RelationTargetPicker/index.js








const RelationTargetPicker = ({ oneThatIsCreatingARelationWithAnother, target }) => {
  const { contentTypes, sortedContentTypesList } = (0,useDataManager/* default */.Z)();
  const dispatch = (0,lib.useDispatch)();
  const allowedContentTypesForRelation = sortedContentTypesList.filter(
    utils_isAllowedContentTypesForRelations
  );
  const plugin = get_default()(contentTypes, [target, "plugin"], null);
  const targetFriendlyName = get_default()(contentTypes, [target, "schema", "displayName"], "error");
  return /* @__PURE__ */ react.createElement(
    SimpleMenu/* SimpleMenu */.O,
    {
      id: "label",
      label: `${targetFriendlyName}
    ${plugin ? `(from: ${plugin})` : ""}`
    },
    allowedContentTypesForRelation.map(({ uid, title, restrictRelationsTo, plugin: plugin2 }) => {
      const handleChange = () => {
        const selectedContentTypeFriendlyName = plugin2 ? `${plugin2}_${title}` : title;
        dispatch({
          type: FormModal_constants/* ON_CHANGE_RELATION_TARGET */.aG,
          target: {
            value: uid,
            oneThatIsCreatingARelationWithAnother,
            selectedContentTypeFriendlyName,
            targetContentTypeAllowedRelations: restrictRelationsTo
          }
        });
      };
      return /* @__PURE__ */ react.createElement(SimpleMenu/* MenuItem */.s, { key: uid, onClick: handleChange }, title, "\xA0", plugin2 && /* @__PURE__ */ react.createElement(react.Fragment, null, "(from: ", plugin2, ")"));
    })
  );
};
RelationTargetPicker.defaultProps = {
  target: null
};
RelationTargetPicker.propTypes = {
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string.isRequired,
  target: (prop_types_default()).string
};
/* harmony default export */ const RelationField_RelationTargetPicker = (RelationTargetPicker);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationField/index.js









const RelationFormBox = ({
  disabled,
  error,
  header,
  isMain,
  name,
  onChange,
  oneThatIsCreatingARelationWithAnother,
  target,
  value
}) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", hasRadius: true, borderColor: "neutral200" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingTop: isMain ? 4 : 1, paddingBottom: isMain ? 3 : 1, justifyContent: "center" }, isMain ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800" }, header) : /* @__PURE__ */ react.createElement(
    RelationField_RelationTargetPicker,
    {
      target,
      oneThatIsCreatingARelationWithAnother
    }
  )), /* @__PURE__ */ react.createElement(Divider/* Divider */.i, { background: "neutral200" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4 }, /* @__PURE__ */ react.createElement(
    build.GenericInput,
    {
      disabled,
      error: (error == null ? void 0 : error.id) || null,
      intlLabel: {
        id: (0,getTrad/* default */.Z)("form.attribute.item.defineRelation.fieldName"),
        defaultMessage: "Field name"
      },
      name,
      onChange,
      type: "text",
      value
    }
  )));
};
RelationFormBox.defaultProps = {
  disabled: false,
  error: null,
  header: null,
  isMain: false,
  onChange() {
  },
  oneThatIsCreatingARelationWithAnother: null,
  target: null,
  value: ""
};
RelationFormBox.propTypes = {
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).object,
  header: (prop_types_default()).string,
  isMain: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func,
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string,
  target: (prop_types_default()).string,
  value: (prop_types_default()).string
};
/* harmony default export */ const RelationField = (RelationFormBox);

// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(39138);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(23450);
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/OneToOne.js
var o = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (l, e, t) => e in l ? o(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, m = (l, e) => {
  for (var t in e || (e = {}))
    r.call(e, t) && i(l, t, e[t]);
  if (n)
    for (var t of n(e))
      d.call(e, t) && i(l, t, e[t]);
  return l;
};

function f(l) {
  return /* @__PURE__ */ react.createElement("svg", m({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.6 14a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 14a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6.24 10.881H18v1.44H6.24v-1.44z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/OneWay.js
var OneWay_r = Object.defineProperty;
var OneWay_n = Object.getOwnPropertySymbols;
var OneWay_v = Object.prototype.hasOwnProperty, OneWay_d = Object.prototype.propertyIsEnumerable;
var OneWay_a = (l, e, t) => e in l ? OneWay_r(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, OneWay_i = (l, e) => {
  for (var t in e || (e = {}))
    OneWay_v.call(e, t) && OneWay_a(l, t, e[t]);
  if (OneWay_n)
    for (var t of OneWay_n(e))
      OneWay_d.call(e, t) && OneWay_a(l, t, e[t]);
  return l;
};

function OneWay_f(l) {
  return /* @__PURE__ */ react.createElement("svg", OneWay_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.128 12.321a3.601 3.601 0 110-1.44H18.72v-2.4L24 11.6l-5.28 3.12v-2.4H7.128zM6 11.6a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/ManyWays.js
var ManyWays_r = Object.defineProperty;
var ManyWays_n = Object.getOwnPropertySymbols;
var ManyWays_d = Object.prototype.hasOwnProperty, ManyWays_f = Object.prototype.propertyIsEnumerable;
var ManyWays_i = (t, e, l) => e in t ? ManyWays_r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, ManyWays_m = (t, e) => {
  for (var l in e || (e = {}))
    ManyWays_d.call(e, l) && ManyWays_i(t, l, e[l]);
  if (ManyWays_n)
    for (var l of ManyWays_n(e))
      ManyWays_f.call(e, l) && ManyWays_i(t, l, e[l]);
  return t;
};

function ManyWays_o(t) {
  return /* @__PURE__ */ react.createElement("svg", ManyWays_m({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.6 14.132a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6.24 11.011h13.44v1.44H6.24v-1.44z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5.872 10.43l8.347-6.176.86 1.163-8.347 6.176-.86-1.162zM5.9 13.087l8.346 6.177.864-1.168-8.347-6.176-.864 1.167zM18.72 8.613l5.28 3.12-5.28 3.12v-6.24z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12.72 2.633L18.82 2 16.43 7.649 12.72 2.633zM12.72 21.307l6.1.633-2.389-5.649-3.711 5.016z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/OneToMany.js
var z = Object.defineProperty;
var OneToMany_n = Object.getOwnPropertySymbols;
var OneToMany_o = Object.prototype.hasOwnProperty, OneToMany_r = Object.prototype.propertyIsEnumerable;
var OneToMany_m = (t, e, l) => e in t ? z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, OneToMany_i = (t, e) => {
  for (var l in e || (e = {}))
    OneToMany_o.call(e, l) && OneToMany_m(t, l, e[l]);
  if (OneToMany_n)
    for (var l of OneToMany_n(e))
      OneToMany_r.call(e, l) && OneToMany_m(t, l, e[l]);
  return t;
};

function OneToMany_f(t) {
  return /* @__PURE__ */ react.createElement("svg", OneToMany_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react.createElement("path", {
    d: "M6.24 11.28H18v1.44H6.24v-1.44z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5.871 10.699l8.347-6.176.86 1.162-8.347 6.177-.86-1.163zM5.899 13.354l8.346 6.176.864-1.167-8.347-6.176-.863 1.167z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.6 14.399a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 14.399a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM16.8 22.8a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM16.8 6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/ManyToOne.js
var ManyToOne_z = Object.defineProperty;
var ManyToOne_n = Object.getOwnPropertySymbols;
var ManyToOne_o = Object.prototype.hasOwnProperty, ManyToOne_r = Object.prototype.propertyIsEnumerable;
var ManyToOne_m = (t, e, l) => e in t ? ManyToOne_z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, ManyToOne_i = (t, e) => {
  for (var l in e || (e = {}))
    ManyToOne_o.call(e, l) && ManyToOne_m(t, l, e[l]);
  if (ManyToOne_n)
    for (var l of ManyToOne_n(e))
      ManyToOne_r.call(e, l) && ManyToOne_m(t, l, e[l]);
  return t;
};

function ManyToOne_f(t) {
  return /* @__PURE__ */ react.createElement("svg", ManyToOne_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react.createElement("path", {
    d: "M17.76 11.28H6v1.44h11.76v-1.44z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.129 10.699L9.782 4.523l-.86 1.162 8.347 6.177.86-1.163zM18.101 13.354L9.755 19.53l-.864-1.167 8.347-6.176.863 1.167z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.4 14.399a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM3.6 14.399a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM7.2 22.8a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM7.2 6a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/ManyToMany.js
var ManyToMany_d = Object.defineProperty;
var ManyToMany_n = Object.getOwnPropertySymbols;
var ManyToMany_i = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var ManyToMany_m = (a, e, l) => e in a ? ManyToMany_d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, ManyToMany_z = (a, e) => {
  for (var l in e || (e = {}))
    ManyToMany_i.call(e, l) && ManyToMany_m(a, l, e[l]);
  if (ManyToMany_n)
    for (var l of ManyToMany_n(e))
      M.call(e, l) && ManyToMany_m(a, l, e[l]);
  return a;
};

function ManyToMany_r(a) {
  return /* @__PURE__ */ react.createElement("svg", ManyToMany_z({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.4 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM3.6 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 22.8a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6.24 11.28H18v1.44H6.24v-1.44z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.6 22.8a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM3.6 6a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.328 13.863L6.49 19.765l-.652-1.307 11.838-5.902.652 1.307zM18.358 10.078L6.398 4.115l-.646 1.294 11.961 5.963.645-1.294z",
    fill: "#212134"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.323 18.83L6.252 12.813l-.643 1.29 12.071 6.019.643-1.29zM18.136 5.228L6.207 11.176l-.653-1.311 11.928-5.948.654 1.311z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationNaturePicker/components.js



const components_Wrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary600};
    z-index: 0;
  }
`;
const IconWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  background: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary100" : "neutral0"]};
  border: 1px solid
    ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral200"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const InfosWrapper = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationNaturePicker/index.js





















const relations = {
  oneWay: OneWay_f,
  oneToOne: f,
  oneToMany: OneToMany_f,
  manyToOne: ManyToOne_f,
  manyToMany: ManyToMany_r,
  manyWay: ManyWays_o
};
const RelationNaturePicker = ({
  naturePickerType,
  oneThatIsCreatingARelationWithAnother,
  relationType,
  target
}) => {
  const dispatch = (0,lib.useDispatch)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { contentTypes, modifiedData } = (0,useDataManager/* default */.Z)();
  const ctRelations = ["oneWay", "oneToOne", "oneToMany", "manyToOne", "manyToMany", "manyWay"];
  const componentRelations = ["oneWay", "manyWay"];
  const dataType = naturePickerType === "contentType" ? get_default()(modifiedData, [naturePickerType, "schema", "kind"], "") : naturePickerType;
  const relationsType = dataType === "collectionType" ? ctRelations : componentRelations;
  const areDisplayedNamesInverted = relationType === "manyToOne";
  const targetLabel = get_default()(contentTypes, [target, "schema", "displayName"], "unknown");
  const leftTarget = areDisplayedNamesInverted ? targetLabel : oneThatIsCreatingARelationWithAnother;
  const rightTarget = areDisplayedNamesInverted ? oneThatIsCreatingARelationWithAnother : targetLabel;
  const leftDisplayedValue = pluralize_default()(leftTarget, relationType === "manyToMany" ? 2 : 1);
  const restrictedRelations = get_default()(contentTypes, [target, "schema", "restrictRelationsTo"], null);
  const rightDisplayedValue = pluralize_default()(
    rightTarget,
    ["manyToMany", "oneToMany", "manyToOne", "manyWay"].includes(relationType) ? 2 : 1
  );
  if (!relationType) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(components_Wrapper, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingLeft: 9, paddingRight: 9, paddingTop: 1, justifyContent: "center" }, /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { tagName: "button" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 3, horizontal: true }, relationsType.map((relation) => {
    const Asset = relations[relation];
    const isEnabled = restrictedRelations === null || restrictedRelations.includes(relation);
    return /* @__PURE__ */ react.createElement(
      IconWrapper,
      {
        as: "button",
        isSelected: relationType === relation,
        disabled: !isEnabled,
        key: relation,
        onClick: () => {
          if (isEnabled) {
            dispatch({
              type: FormModal_constants/* ON_CHANGE_RELATION_TYPE */.QQ,
              target: {
                oneThatIsCreatingARelationWithAnother,
                targetContentType: target,
                value: relation
              }
            });
          }
        },
        padding: 2,
        type: "button"
      },
      /* @__PURE__ */ react.createElement(Asset, { key: relation })
    );
  }))))), /* @__PURE__ */ react.createElement(InfosWrapper, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, truncate_default()(leftDisplayedValue, { length: 24 }), "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "primary600" }, formatMessage({ id: (0,getTrad/* default */.Z)(`relation.${relationType}`) }), "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, truncate_default()(rightDisplayedValue, { length: 24 }))));
};
RelationNaturePicker.defaultProps = {
  relationType: null,
  target: null
};
RelationNaturePicker.propTypes = {
  naturePickerType: (prop_types_default()).string.isRequired,
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string.isRequired,
  relationType: (prop_types_default()).string,
  target: (prop_types_default()).string
};
/* harmony default export */ const Relation_RelationNaturePicker = (RelationNaturePicker);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/index.js






const Relation = ({ formErrors, mainBoxHeader, modifiedData, naturePickerType, onChange }) => {
  const relationType = (0,getRelationType/* default */.Z)(modifiedData.relation, modifiedData.targetAttribute);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { position: "relative" } }, /* @__PURE__ */ react.createElement(
    RelationField,
    {
      isMain: true,
      header: mainBoxHeader,
      error: (formErrors == null ? void 0 : formErrors.name) || null,
      name: "name",
      onChange,
      value: (modifiedData == null ? void 0 : modifiedData.name) || ""
    }
  ), /* @__PURE__ */ react.createElement(
    Relation_RelationNaturePicker,
    {
      naturePickerType,
      oneThatIsCreatingARelationWithAnother: mainBoxHeader,
      relationType,
      target: modifiedData.target
    }
  ), /* @__PURE__ */ react.createElement(
    RelationField,
    {
      disabled: ["oneWay", "manyWay"].includes(relationType),
      error: (formErrors == null ? void 0 : formErrors.targetAttribute) || null,
      name: "targetAttribute",
      onChange,
      oneThatIsCreatingARelationWithAnother: mainBoxHeader,
      target: modifiedData.target,
      value: (modifiedData == null ? void 0 : modifiedData.targetAttribute) || ""
    }
  ));
};
Relation.propTypes = {
  formErrors: (prop_types_default()).object.isRequired,
  mainBoxHeader: (prop_types_default()).string.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  naturePickerType: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_Relation = (Relation);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/nameToSlug.js
var nameToSlug = __webpack_require__(97406);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/PluralName/index.js
var PluralName_defProp = Object.defineProperty;
var PluralName_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PluralName_hasOwnProp = Object.prototype.hasOwnProperty;
var PluralName_propIsEnum = Object.prototype.propertyIsEnumerable;
var PluralName_defNormalProp = (obj, key, value) => key in obj ? PluralName_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PluralName_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PluralName_hasOwnProp.call(b, prop))
      PluralName_defNormalProp(a, prop, b[prop]);
  if (PluralName_getOwnPropSymbols)
    for (var prop of PluralName_getOwnPropSymbols(b)) {
      if (PluralName_propIsEnum.call(b, prop))
        PluralName_defNormalProp(a, prop, b[prop]);
    }
  return a;
};






const PluralName = ({ description, error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = (modifiedData == null ? void 0 : modifiedData.displayName) || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      const value2 = (0,nameToSlug/* default */.Z)(displayName);
      try {
        const plural = pluralize_default()(value2, 2);
        onChangeRef.current({ target: { name, value: plural } });
      } catch (err) {
        onChangeRef.current({ target: { name, value: value2 } });
      }
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    PluralName_spreadValues({}, description.values)
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      error: errorMessage,
      label,
      id: name,
      hint,
      name,
      onChange,
      value: value || ""
    }
  );
};
PluralName.defaultProps = {
  description: null,
  error: null,
  value: null
};
PluralName.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_PluralName = (PluralName);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js + 2 modules
var Combobox = __webpack_require__(31950);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectCategory/index.js





const SelectCategory = ({ error, intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { allComponentsCategories } = (0,useDataManager/* default */.Z)();
  const [categories, setCategories] = (0,react.useState)(allComponentsCategories);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2, type: "select-category" } });
  };
  const handleCreateOption = (value2) => {
    setCategories((prev) => [...prev, value2]);
    handleChange(value2);
  };
  return /* @__PURE__ */ react.createElement(
    Combobox/* CreatableCombobox */.X,
    {
      error: errorMessage,
      id: name,
      label,
      name,
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      value
    },
    categories.map((category) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: category, value: category }, category))
  );
};
SelectCategory.defaultProps = {
  error: null,
  value: null
};
SelectCategory.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectCategory = (SelectCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectComponent/index.js





const SelectComponent = ({
  error,
  intlLabel,
  isAddingAComponentToAnotherComponent,
  isCreating,
  isCreatingComponentWhileAddingAField,
  componentToCreate,
  name,
  onChange,
  targetUid,
  forTarget,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const { componentsGroupedByCategory, componentsThatHaveOtherComponentInTheirAttributes } = (0,useDataManager/* default */.Z)();
  const isTargetAComponent = ["component", "components"].includes(forTarget);
  let options = Object.entries(componentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const compos = components.map((component) => {
      return {
        uid: component.uid,
        label: component.schema.displayName,
        categoryName
      };
    });
    return [...acc, ...compos];
  }, []);
  if (isAddingAComponentToAnotherComponent) {
    options = options.filter((option) => {
      return !componentsThatHaveOtherComponentInTheirAttributes.includes(option.uid);
    });
  }
  if (isTargetAComponent) {
    options = options.filter((option) => {
      return option.uid !== targetUid;
    });
  }
  if (isCreatingComponentWhileAddingAField) {
    options = [
      {
        uid: value,
        label: componentToCreate.displayName,
        categoryName: componentToCreate.category
      }
    ];
  }
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      disabled: isCreatingComponentWhileAddingAField || !isCreating,
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: (value2) => {
        onChange({ target: { name, value: value2, type: "select-category" } });
      },
      value: value || ""
    },
    options.map((option) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: option.uid, value: option.uid }, `${option.categoryName} - ${option.label}`);
    })
  );
};
SelectComponent.defaultProps = {
  componentToCreate: null,
  error: null
};
SelectComponent.propTypes = {
  componentToCreate: (prop_types_default()).object,
  forTarget: (prop_types_default()).string.isRequired,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isAddingAComponentToAnotherComponent: (prop_types_default()).bool.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isCreatingComponentWhileAddingAField: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  targetUid: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_SelectComponent = (SelectComponent);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/findAttribute.js
const findAttribute = (attributes, attributeToFind) => {
  return attributes.find(({ name }) => name === attributeToFind);
};
/* harmony default export */ const utils_findAttribute = (findAttribute);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectComponents/index.js







const SelectComponents = ({ dynamicZoneTarget, intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { componentsGroupedByCategory, modifiedData } = (0,useDataManager/* default */.Z)();
  const dzSchema = utils_findAttribute(modifiedData.contentType.schema.attributes, dynamicZoneTarget) || {};
  const alreadyUsedComponents = dzSchema.components || [];
  const filteredComponentsGroupedByCategory = Object.keys(componentsGroupedByCategory).reduce(
    (acc, current) => {
      const filteredComponents = componentsGroupedByCategory[current].filter(({ uid }) => {
        return !alreadyUsedComponents.includes(uid);
      });
      if (filteredComponents.length > 0) {
        acc[current] = filteredComponents;
      }
      return acc;
    },
    {}
  );
  const options = Object.entries(filteredComponentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const section = {
      label: categoryName,
      children: components.map(({ uid, schema: { displayName } }) => {
        return { label: displayName, value: uid };
      })
    };
    acc.push(section);
    return acc;
  }, []);
  const displayedValue = formatMessage(
    {
      id: (0,getTrad/* default */.Z)("components.SelectComponents.displayed-value"),
      defaultMessage: "{number, plural, =0 {# components} one {# component} other {# components}} selected"
    },
    { number: value.length }
  );
  return /* @__PURE__ */ react.createElement(
    MultiSelectNested/* MultiSelectNested */.Q,
    {
      id: "select1",
      label: formatMessage(intlLabel),
      customizeContent: () => displayedValue,
      name,
      onChange: (values) => {
        onChange({ target: { name, value: values, type: "select-components" } });
      },
      options,
      value: value || []
    }
  );
};
SelectComponents.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  dynamicZoneTarget: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_SelectComponents = (SelectComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectDateType/index.js




const SelectDateType = ({ intlLabel, error, modifiedData, name, onChange, options, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (modifiedData.default !== void 0 && modifiedData.default !== null) {
      onChange({ target: { name: "default", value: null } });
    }
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: handleChange,
      value: value || ""
    },
    options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key, value: value2, disabled, hidden }, formatMessage(
        { id: intlLabel2.id, defaultMessage: intlLabel2.defaultMessage },
        intlLabel2.values
      ));
    })
  );
};
SelectDateType.defaultProps = {
  error: void 0,
  value: ""
};
SelectDateType.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectDateType = (SelectDateType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectNumber/index.js




const SelectNumber = ({ intlLabel, error, modifiedData, name, onChange, options, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (nextValue === "biginteger" && value !== "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
    if (["decimal", "float", "integer"].includes(nextValue) && value === "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: handleChange,
      value: value || ""
    },
    options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key, value: value2, disabled, hidden }, formatMessage(intlLabel2));
    })
  );
};
SelectNumber.defaultProps = {
  error: void 0,
  value: ""
};
SelectNumber.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectNumber = (SelectNumber);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SingularName/index.js
var SingularName_defProp = Object.defineProperty;
var SingularName_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SingularName_hasOwnProp = Object.prototype.hasOwnProperty;
var SingularName_propIsEnum = Object.prototype.propertyIsEnumerable;
var SingularName_defNormalProp = (obj, key, value) => key in obj ? SingularName_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SingularName_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SingularName_hasOwnProp.call(b, prop))
      SingularName_defNormalProp(a, prop, b[prop]);
  if (SingularName_getOwnPropSymbols)
    for (var prop of SingularName_getOwnPropSymbols(b)) {
      if (SingularName_propIsEnum.call(b, prop))
        SingularName_defNormalProp(a, prop, b[prop]);
    }
  return a;
};





const SingularName = ({ description, error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = (modifiedData == null ? void 0 : modifiedData.displayName) || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      onChangeRef.current({ target: { name, value: (0,nameToSlug/* default */.Z)(displayName) } });
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    SingularName_spreadValues({}, description.values)
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      error: errorMessage,
      label,
      id: name,
      hint,
      name,
      onChange,
      value: value || ""
    }
  );
};
SingularName.defaultProps = {
  description: null,
  error: null,
  value: null
};
SingularName.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SingularName = (SingularName);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/TabForm/index.js
var TabForm_defProp = Object.defineProperty;
var TabForm_defProps = Object.defineProperties;
var TabForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabForm_hasOwnProp = Object.prototype.hasOwnProperty;
var TabForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabForm_defNormalProp = (obj, key, value) => key in obj ? TabForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabForm_hasOwnProp.call(b, prop))
      TabForm_defNormalProp(a, prop, b[prop]);
  if (TabForm_getOwnPropSymbols)
    for (var prop of TabForm_getOwnPropSymbols(b)) {
      if (TabForm_propIsEnum.call(b, prop))
        TabForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TabForm_spreadProps = (a, b) => TabForm_defProps(a, TabForm_getOwnPropDescs(b));








const TabForm = ({ form, formErrors, genericInputProps, modifiedData, onChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return form.map((section, sectionIndex) => {
    if (section.items.length === 0) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: sectionIndex }, section.sectionTitle && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage(section.sectionTitle))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, section.items.map((input, i) => {
      const key = `${sectionIndex}.${i}`;
      const value = get_default()(modifiedData, input.name, "");
      const pluginOptionError = Object.keys(formErrors).find((key2) => key2 === input.name);
      const errorId = pluginOptionError ? formErrors[pluginOptionError].id : get_default()(
        formErrors,
        [
          ...input.name.split(".").filter((key2) => key2 !== "componentToCreate"),
          "id"
        ],
        null
      );
      if (input.type === "pushRight") {
        return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: input.size || 6, key: input.name || key }, /* @__PURE__ */ react.createElement("div", null));
      }
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: input.size || 6, key: input.name || key }, /* @__PURE__ */ react.createElement(
        build.GenericInput,
        TabForm_spreadProps(TabForm_spreadValues(TabForm_spreadValues({}, input), genericInputProps), {
          error: errorId,
          onChange,
          value
        })
      ));
    })));
  });
};
TabForm.propTypes = {
  form: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  formErrors: (prop_types_default()).object.isRequired,
  genericInputProps: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_TabForm = (TabForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js + 1 modules
var Textarea = __webpack_require__(64256);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/TextareaEnum/index.js
var TextareaEnum_defProp = Object.defineProperty;
var TextareaEnum_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TextareaEnum_hasOwnProp = Object.prototype.hasOwnProperty;
var TextareaEnum_propIsEnum = Object.prototype.propertyIsEnumerable;
var TextareaEnum_defNormalProp = (obj, key, value) => key in obj ? TextareaEnum_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TextareaEnum_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TextareaEnum_hasOwnProp.call(b, prop))
      TextareaEnum_defNormalProp(a, prop, b[prop]);
  if (TextareaEnum_getOwnPropSymbols)
    for (var prop of TextareaEnum_getOwnPropSymbols(b)) {
      if (TextareaEnum_propIsEnum.call(b, prop))
        TextareaEnum_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const TextareaEnum = ({
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    TextareaEnum_spreadValues({}, description.values)
  ) : "";
  const label = formatMessage(intlLabel);
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    TextareaEnum_spreadValues({}, placeholder.values)
  ) : "";
  const inputValue = Array.isArray(value) ? value.join("\n") : "";
  const handleChange = (e) => {
    const arrayValue = e.target.value.split("\n");
    onChange({ target: { name, value: arrayValue } });
  };
  return /* @__PURE__ */ react.createElement(
    Textarea/* Textarea */.g,
    {
      disabled,
      error: errorMessage,
      label,
      labelAction,
      id: name,
      hint,
      name,
      onChange: handleChange,
      placeholder: formattedPlaceholder,
      value: inputValue
    },
    inputValue
  );
};
TextareaEnum.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  labelAction: void 0,
  placeholder: null,
  value: ""
};
TextareaEnum.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  value: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).string])
};
/* harmony default export */ const components_TextareaEnum = (TextareaEnum);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/canEditContentType.js


const canEditContentType = (data, modifiedData) => {
  const kind = get_default()(data, ["contentType", "schema", "kind"], "");
  if (kind === "singleType" || kind === modifiedData.kind) {
    return true;
  }
  const contentTypeAttributes = get_default()(data, ["contentType", "schema", "attributes"], []);
  const relationAttributes = contentTypeAttributes.filter(({ relation, type, targetAttribute }) => {
    const relationType = (0,getRelationType/* default */.Z)(relation, targetAttribute);
    return type === "relation" && !["oneWay", "manyWay"].includes(relationType);
  });
  return relationAttributes.length === 0;
};
/* harmony default export */ const utils_canEditContentType = (canEditContentType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/getAttributesToDisplay.js
const getAttributes = (dataTarget = "", targetUid, nestedComponents) => {
  const defaultAttributes = [
    "text",
    "email",
    "richtext",
    "password",
    "number",
    "enumeration",
    "date",
    "media",
    "boolean",
    "json",
    "relation"
  ];
  const isPickingAttributeForAContentType = dataTarget === "contentType";
  const isNestedInAnotherComponent = nestedComponents.includes(targetUid);
  const canAddComponentInAnotherComponent = !isPickingAttributeForAContentType && !isNestedInAnotherComponent;
  if (isPickingAttributeForAContentType) {
    return [
      [...defaultAttributes, "uid"],
      ["component", "dynamiczone"]
    ];
  }
  if (canAddComponentInAnotherComponent) {
    return [defaultAttributes, ["component"]];
  }
  return [defaultAttributes];
};
/* harmony default export */ const getAttributesToDisplay = (getAttributes);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/getFormInputNames.js
const getFormInputNames = (form) => form.reduce((acc, current) => {
  const names = current.items.reduce((acc2, current2) => {
    if (current2.name) {
      acc2.push(current2.name);
    }
    return acc2;
  }, []);
  return [...acc, ...names];
}, []);
/* harmony default export */ const utils_getFormInputNames = (getFormInputNames);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/index.js




// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/createUid.js
var createUid = __webpack_require__(97392);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/form.js

const form_form = {
  base: {
    sections: [
      {
        sectionTitle: null,
        items: [
          {
            autoFocus: true,
            name: "name",
            type: "text",
            intlLabel: {
              id: "global.name",
              defaultMessage: "Name"
            },
            description: {
              id: (0,getTrad/* default */.Z)("modalForm.editCategory.base.name.description"),
              defaultMessage: "No space is allowed for the name of the category"
            }
          }
        ]
      }
    ]
  }
};
/* harmony default export */ const category_form = (form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/regex.js
const CATEGORY_NAME_REGEX = /^[A-Za-z][-_0-9A-Za-z]*$/;
/* harmony default export */ const regex = (CATEGORY_NAME_REGEX);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/createCategorySchema.js




const createCategorySchema = (usedCategoryNames) => {
  const shape = {
    name: yup_lib/* string */.Z_().matches(regex, build.translatedErrors.regex).test({
      name: "nameNotAllowed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !usedCategoryNames.includes((0,lodash.toLower)(value));
      }
    }).required(build.translatedErrors.required)
  };
  return yup_lib/* object */.Ry(shape);
};
/* harmony default export */ const category_createCategorySchema = (createCategorySchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/createComponentSchema.js






const createComponentSchema = (usedComponentNames, reservedNames, category) => {
  const shape = {
    displayName: yup_lib/* string */.Z_().test({
      name: "nameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,createUid/* createComponentUid */.N)(value, category);
        return !usedComponentNames.includes(name);
      }
    }).test({
      name: "nameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedNames.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    category: yup_lib/* string */.Z_().matches(regex, build.translatedErrors.regex).required(build.translatedErrors.required),
    icon: yup_lib/* string */.Z_()
  };
  return yup_lib/* object */.Ry(shape);
};
/* harmony default export */ const component_createComponentSchema = (createComponentSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/componentField.js

const componentField = {
  intlLabel: {
    id: "global.type",
    defaultMessage: "Type"
  },
  name: "createComponent",
  type: "boolean-radio-group",
  size: 12,
  radios: [
    {
      title: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.create"),
        defaultMessage: "Create a new component"
      },
      description: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.create.description"),
        defaultMessage: "A component is shared across types and components, it will be available and accessible everywhere."
      },
      value: true
    },
    {
      title: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.reuse-existing"),
        defaultMessage: "Use an existing component"
      },
      description: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.reuse-existing.description"),
        defaultMessage: "Reuse a component already created to keep your data consistent across content-types."
      },
      value: false
    }
  ]
};
/* harmony default export */ const component_componentField = (componentField);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/form.js

const componentForm = {
  base(prefix = "") {
    const sections = [
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}displayName`,
            type: "text",
            intlLabel: {
              id: (0,getTrad/* default */.Z)("contentType.displayName.label"),
              defaultMessage: "Display Name"
            }
          },
          {
            name: `${prefix}category`,
            type: "select-category",
            intlLabel: {
              id: (0,getTrad/* default */.Z)("modalForm.components.create-component.category.label"),
              defaultMessage: "Select a category or enter a name to create a new one"
            }
          }
        ]
      },
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}icon`,
            type: "component-icon-picker",
            size: 12,
            intlLabel: {
              id: (0,getTrad/* default */.Z)("modalForm.components.icon.label"),
              defaultMessage: "Icon"
            }
          }
        ]
      }
    ];
    return sections;
  },
  advanced() {
    const sections = [];
    return sections;
  }
};
/* harmony default export */ const component_form = (componentForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/attributeOptions.js

const attributeOptions = {
  default: {
    name: "default",
    type: "text",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
      defaultMessage: "Default value"
    }
  },
  max: {
    name: "max",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.maximum"),
      defaultMessage: "Maximum value"
    }
  },
  maxLength: {
    name: "maxLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.maximumLength"),
      defaultMessage: "Maximum length"
    }
  },
  min: {
    name: "min",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.minimum"),
      defaultMessage: "Minimum value"
    }
  },
  minLength: {
    name: "minLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.minimumLength"),
      defaultMessage: "Minimum length"
    }
  },
  private: {
    name: "private",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.privateField"),
      defaultMessage: "Private field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.privateField.description"),
      defaultMessage: "This field will not show up in the API response"
    }
  },
  regex: {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.text.regex"),
      defaultMessage: "RegExp pattern"
    },
    name: "regex",
    type: "text",
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.text.regex.description"),
      defaultMessage: "The text of the regular expression"
    }
  },
  required: {
    name: "required",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.requiredField"),
      defaultMessage: "Required field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.requiredField.description"),
      defaultMessage: "You won't be able to create an entry if this field is empty"
    }
  },
  unique: {
    name: "unique",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.uniqueField"),
      defaultMessage: "Unique field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.uniqueField.description"),
      defaultMessage: "You won't be able to create an entry if there is an existing entry with identical content"
    }
  }
};
/* harmony default export */ const attributes_attributeOptions = (attributeOptions);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/advancedForm.js
var advancedForm_defProp = Object.defineProperty;
var advancedForm_defProps = Object.defineProperties;
var advancedForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var advancedForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var advancedForm_hasOwnProp = Object.prototype.hasOwnProperty;
var advancedForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var advancedForm_defNormalProp = (obj, key, value) => key in obj ? advancedForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var advancedForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (advancedForm_hasOwnProp.call(b, prop))
      advancedForm_defNormalProp(a, prop, b[prop]);
  if (advancedForm_getOwnPropSymbols)
    for (var prop of advancedForm_getOwnPropSymbols(b)) {
      if (advancedForm_propIsEnum.call(b, prop))
        advancedForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var advancedForm_spreadProps = (a, b) => advancedForm_defProps(a, advancedForm_getOwnPropDescs(b));



const advancedForm = {
  boolean() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              type: "select-default-boolean",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              name: "default",
              options: [
                {
                  value: "true",
                  key: "true",
                  metadatas: { intlLabel: { id: "true", defaultMessage: "true" } }
                },
                {
                  value: "",
                  key: "null",
                  metadatas: { intlLabel: { id: "null", defaultMessage: "null" } }
                },
                {
                  value: "false",
                  key: "false",
                  metadatas: { intlLabel: { id: "false", defaultMessage: "false" } }
                }
              ]
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  component({ repeatable }, step) {
    if (step === "1") {
      return { sections: component_form.advanced("componentToCreate") };
    }
    if (repeatable) {
      return {
        sections: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [attributes_attributeOptions.required, attributes_attributeOptions["private"], attributes_attributeOptions.max, attributes_attributeOptions.min]
          }
        ]
      };
    }
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  date({ type }) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            advancedForm_spreadProps(advancedForm_spreadValues({}, attributes_attributeOptions["default"]), {
              type: type || "date",
              value: null,
              withDefaultValue: false,
              disabled: !type,
              autoFocus: false
            })
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.unique, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  dynamiczone() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.max, attributes_attributeOptions.min]
        }
      ]
    };
  },
  email() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            advancedForm_spreadProps(advancedForm_spreadValues({}, attributes_attributeOptions["default"]), {
              type: "email"
            })
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributes_attributeOptions.required,
            attributes_attributeOptions.unique,
            attributes_attributeOptions.maxLength,
            attributes_attributeOptions.minLength,
            attributes_attributeOptions["private"]
          ]
        }
      ]
    };
  },
  enumeration(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              name: "default",
              type: "select",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {},
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    }
                  }
                },
                ...(data.enum || []).filter((value, index) => data.enum.indexOf(value) === index && value).map((value) => {
                  return {
                    key: value,
                    value,
                    metadatas: {
                      intlLabel: { id: `${value}.no-override`, defaultMessage: value }
                    }
                  };
                })
              ]
            },
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.graphql"),
                defaultMessage: "Name override for GraphQL"
              },
              name: "enumName",
              type: "text",
              validations: {},
              description: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.graphql.description"),
                defaultMessage: "Allows you to override the default generated name for GraphQL"
              }
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  json() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.media.allowed-types"),
                defaultMessage: "Select allowed types of media"
              },
              name: "allowedTypes",
              type: "allowed-types-select",
              size: 7,
              value: "",
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  number(data) {
    const inputStep = data.type === "decimal" || data.type === "float" ? "any" : 1;
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              name: "default",
              type: data.type === "biginteger" ? "text" : "number",
              step: inputStep,
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.unique, attributes_attributeOptions.max, attributes_attributeOptions.min, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  password() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"]] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  richtext() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"]] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"], attributes_attributeOptions.regex] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributes_attributeOptions.required,
            attributes_attributeOptions.unique,
            attributes_attributeOptions.maxLength,
            attributes_attributeOptions.minLength,
            attributes_attributeOptions["private"]
          ]
        }
      ]
    };
  },
  uid(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [advancedForm_spreadProps(advancedForm_spreadValues({}, attributes_attributeOptions["default"]), { disabled: Boolean(data.targetField), type: "text" })]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions["private"]]
        }
      ]
    };
  }
};
/* harmony default export */ const attributes_advancedForm = (advancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/nameField.js

const nameField = {
  name: "name",
  type: "text",
  intlLabel: {
    id: "global.name",
    defaultMessage: "Name"
  },
  description: {
    id: (0,getTrad/* default */.Z)("modalForm.attribute.form.base.name.description"),
    defaultMessage: "No space is allowed for the name of the attribute"
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/baseForm.js
var baseForm_defProp = Object.defineProperty;
var baseForm_defProps = Object.defineProperties;
var baseForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var baseForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var baseForm_hasOwnProp = Object.prototype.hasOwnProperty;
var baseForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var baseForm_defNormalProp = (obj, key, value) => key in obj ? baseForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var baseForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (baseForm_hasOwnProp.call(b, prop))
      baseForm_defNormalProp(a, prop, b[prop]);
  if (baseForm_getOwnPropSymbols)
    for (var prop of baseForm_getOwnPropSymbols(b)) {
      if (baseForm_propIsEnum.call(b, prop))
        baseForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var baseForm_spreadProps = (a, b) => baseForm_defProps(a, baseForm_getOwnPropDescs(b));



const baseForm = {
  component(data, step) {
    if (step === "1") {
      const itemsToConcat = data.createComponent === true ? component_form.base("componentToCreate.") : [];
      return {
        sections: [{ sectionTitle: null, items: [component_componentField] }, ...itemsToConcat]
      };
    }
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              name: "component",
              type: "select-component",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("modalForm.attributes.select-component"),
                defaultMessage: "Select a component"
              },
              isMultiple: false
            }
          ]
        },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "repeatable",
              type: "boolean-radio-group",
              size: 12,
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.repeatable"),
                    defaultMessage: "Repeatable component"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.repeatable.description"),
                    defaultMessage: "Best for multiple instances (array) of ingredients, meta tags, etc.."
                  },
                  value: true
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.single"),
                    defaultMessage: "Single component"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.single.description"),
                    defaultMessage: "Best for grouping fields like full address, main information, etc..."
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  date() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              type: "select-date",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "date",
                  value: "date",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.date"),
                      defaultMessage: "date (ex: 01/01/{currentYear})",
                      values: { currentYear: new Date().getFullYear() }
                    }
                  }
                },
                {
                  key: "datetime",
                  value: "datetime",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.datetime"),
                      defaultMessage: "datetime (ex: 01/01/{currentYear} 00:00 AM)",
                      values: { currentYear: new Date().getFullYear() }
                    }
                  }
                },
                {
                  key: "time",
                  value: "time",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.time"),
                      defaultMessage: "time (ex: 00:00 AM)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  enumeration() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              name: "enum",
              type: "textarea-enum",
              size: 6,
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.rules"),
                defaultMessage: "Values (one line per value)"
              },
              placeholder: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.placeholder"),
                defaultMessage: "Ex:\nmorning\nnoon\nevening"
              },
              validations: {
                required: true
              }
            }
          ]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "multiple",
              size: 12,
              type: "boolean-radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.multiple"),
                    defaultMessage: "Multiple media"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.multiple.description"),
                    defaultMessage: "Best for sliders, carousels or multiple files download"
                  },
                  value: true
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.single"),
                    defaultMessage: "Single media"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.single.description"),
                    defaultMessage: "Best for avatar, profile picture or cover"
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  number() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.number.type"),
                defaultMessage: "Number format"
              },
              name: "type",
              type: "select-number",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "integer",
                  value: "integer",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.integer"),
                      defaultMessage: "integer (ex: 10)"
                    }
                  }
                },
                {
                  key: "biginteger",
                  value: "biginteger",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.biginteger"),
                      defaultMessage: "biginteger (ex: 123456789)"
                    }
                  }
                },
                {
                  key: "decimal",
                  value: "decimal",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.decimal"),
                      defaultMessage: "decimal (ex: 2.22)"
                    }
                  }
                },
                {
                  key: "float",
                  value: "float",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.float"),
                      defaultMessage: "decimal (ex: 3.3333333)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: { id: "FIXME", defaultMessage: "FIXME" },
              name: "relation",
              size: 12,
              type: "relation"
            }
          ]
        }
      ]
    };
  },
  string() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  uid(data, step, attributes) {
    const options = attributes.filter(({ type }) => ["string", "text"].includes(type)).map(({ name }) => ({
      key: name,
      value: name,
      metadatas: {
        intlLabel: { id: `${name}.no-override`, defaultMessage: name }
      }
    }));
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            baseForm_spreadProps(baseForm_spreadValues({}, nameField), {
              placeholder: {
                id: (0,getTrad/* default */.Z)("modalForm.attribute.form.base.name.placeholder"),
                defaultMessage: "e.g. Slug, SEO URL, Canonical URL"
              }
            }),
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("modalForm.attribute.target-field"),
                defaultMessage: "Attached field"
              },
              name: "targetField",
              type: "select",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: { intlLabel: { id: "global.none", defaultMessage: "None" } }
                },
                ...options
              ]
            }
          ]
        }
      ]
    };
  }
};
/* harmony default export */ const attributes_baseForm = (baseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/form.js


const attributes_form_form = {
  advanced: attributes_advancedForm,
  base: attributes_baseForm
};
/* harmony default export */ const attributes_form = (attributes_form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/commonBaseForm.js

const commonBaseForm = {
  sections: [{ sectionTitle: null, items: [nameField] }]
};
/* harmony default export */ const attributes_commonBaseForm = (commonBaseForm);

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(44908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/@sindresorhus/slugify/index.js
var slugify = __webpack_require__(46831);
var slugify_default = /*#__PURE__*/__webpack_require__.n(slugify);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/toRegressedEnumValue.js

const toRegressedEnumValue = (value) => slugify_default()(value, {
  decamelize: false,
  lowercase: false,
  separator: "_"
});
/* harmony default export */ const utils_toRegressedEnumValue = (toRegressedEnumValue);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/validation/common.js




const NAME_REGEX = /^[A-Za-z][_0-9A-Za-z]*$/;
const alreadyUsedAttributeNames = (usedNames) => {
  return {
    name: "attributeNameAlreadyUsed",
    message: build.translatedErrors.unique,
    test(value) {
      if (!value) {
        return false;
      }
      return !usedNames.includes(value);
    }
  };
};
const getUsedContentTypeAttributeNames = (ctShema, isEdition, attributeNameToEdit) => {
  const attributes = get(ctShema, ["schema", "attributes"], {});
  return Object.keys(attributes).filter((attr) => {
    if (isEdition) {
      return attr !== attributeNameToEdit;
    }
    return true;
  });
};
const isNameAllowed = (reservedNames) => {
  return {
    name: "forbiddenAttributeName",
    message: (0,getTrad/* default */.Z)("error.attributeName.reserved-name"),
    test(value) {
      if (!value) {
        return false;
      }
      return !reservedNames.includes(value);
    }
  };
};
const validators = {
  default: () => yup_lib/* string */.Z_().nullable(),
  max: () => yup_lib/* number */.Rx().integer().nullable(),
  min: () => yup_lib/* number */.Rx().integer().when("max", (max, schema) => {
    if (max) {
      return schema.max(max, (0,getTrad/* default */.Z)("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  maxLength: () => yup_lib/* number */.Rx().integer().positive((0,getTrad/* default */.Z)("error.validation.positive")).nullable(),
  minLength: () => yup_lib/* number */.Rx().integer().min(0).when("maxLength", (maxLength, schema) => {
    if (maxLength) {
      return schema.max(maxLength, (0,getTrad/* default */.Z)("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  name(usedNames, reservedNames) {
    return yup_lib/* string */.Z_().test(alreadyUsedAttributeNames(usedNames)).test(isNameAllowed(reservedNames)).matches(NAME_REGEX, build.translatedErrors.regex).required(build.translatedErrors.required);
  },
  required: () => yup_lib/* boolean */.O7(),
  type: () => yup_lib/* string */.Z_().required(build.translatedErrors.required),
  unique: () => yup_lib/* boolean */.O7().nullable()
};
const createTextShape = (usedAttributeNames, reservedNames) => {
  const shape = {
    name: validators.name(usedAttributeNames, reservedNames),
    type: validators.type(),
    default: validators.default(),
    unique: validators.unique(),
    required: validators.required(),
    maxLength: validators.maxLength(),
    minLength: validators.minLength(),
    regex: yup_lib/* string */.Z_().test({
      name: "isValidRegExpPattern",
      message: (0,getTrad/* default */.Z)("error.validation.regex"),
      test(value) {
        return new RegExp(value) !== null;
      }
    }).nullable()
  };
  return shape;
};
const isMinSuperiorThanMax = {
  name: "isMinSuperiorThanMax",
  message: (0,getTrad/* default */.Z)("error.validation.minSupMax"),
  test(min) {
    if (!min) {
      return true;
    }
    const { max } = this.parent;
    if (!max) {
      return true;
    }
    if (Number.isNaN((0,lodash.toNumber)(min))) {
      return true;
    }
    return (0,lodash.toNumber)(max) >= (0,lodash.toNumber)(min);
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/types.js







const types = {
  date(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  datetime(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  time(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  default(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  biginteger(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* string */.Z_().nullable().matches(/^-?\d*$/),
      unique: validators.unique(),
      required: validators.required(),
      max: yup_lib/* string */.Z_().nullable().matches(/^-?\d*$/, build.translatedErrors.regex),
      min: yup_lib/* string */.Z_().nullable().test(isMinSuperiorThanMax).matches(/^-?\d*$/, build.translatedErrors.regex)
    };
    return yup_lib/* object */.Ry(shape);
  },
  boolean(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      default: yup_lib/* boolean */.O7().nullable(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_lib/* object */.Ry(shape);
  },
  component(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min(),
      component: yup_lib/* string */.Z_().required(build.translatedErrors.required)
    };
    return yup_lib/* object */.Ry(shape);
  },
  decimal(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* number */.Rx(),
      required: validators.required(),
      max: yup_lib/* number */.Rx(),
      min: yup_lib/* number */.Rx().test(isMinSuperiorThanMax)
    };
    return yup_lib/* object */.Ry(shape);
  },
  dynamiczone(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_lib/* object */.Ry(shape);
  },
  email(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* string */.Z_().email().nullable(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_lib/* object */.Ry(shape);
  },
  enumeration(usedAttributeNames, reservedNames) {
    const GRAPHQL_ENUM_REGEX = /^[_A-Za-z][_0-9A-Za-z]*$/;
    const shape = {
      name: yup_lib/* string */.Z_().test(alreadyUsedAttributeNames(usedAttributeNames)).test(isNameAllowed(reservedNames)).matches(GRAPHQL_ENUM_REGEX, build.translatedErrors.regex).required(build.translatedErrors.required),
      type: validators.type(),
      default: validators["default"](),
      unique: validators.unique(),
      required: validators.required(),
      enum: yup_lib/* array */.IX().of(yup_lib/* string */.Z_()).min(1, build.translatedErrors.min).test({
        name: "areEnumValuesUnique",
        message: (0,getTrad/* default */.Z)("error.validation.enum-duplicate"),
        test(values) {
          const duplicates = uniq_default()(
            values.map(utils_toRegressedEnumValue).filter((value, index, values2) => values2.indexOf(value) !== index)
          );
          return !duplicates.length;
        }
      }).test({
        name: "doesNotHaveEmptyValues",
        message: (0,getTrad/* default */.Z)("error.validation.enum-empty-string"),
        test: (values) => !values.map(utils_toRegressedEnumValue).some((val) => val === "")
      }).test({
        name: "doesMatchRegex",
        message: (0,getTrad/* default */.Z)("error.validation.enum-regex"),
        test: (values) => values.map(utils_toRegressedEnumValue).every((value) => GRAPHQL_ENUM_REGEX.test(value))
      }),
      enumName: yup_lib/* string */.Z_().nullable()
    };
    return yup_lib/* object */.Ry(shape);
  },
  float(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      default: yup_lib/* number */.Rx(),
      max: yup_lib/* number */.Rx(),
      min: yup_lib/* number */.Rx().test(isMinSuperiorThanMax)
    };
    return yup_lib/* object */.Ry(shape);
  },
  integer(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* number */.Rx().integer(),
      unique: validators.unique(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_lib/* object */.Ry(shape);
  },
  json(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_lib/* object */.Ry(shape);
  },
  media(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      multiple: yup_lib/* boolean */.O7(),
      required: validators.required(),
      allowedTypes: yup_lib/* array */.IX().of(yup_lib/* string */.Z_().oneOf(["images", "videos", "files", "audios"])).min(1).nullable()
    };
    return yup_lib/* object */.Ry(shape);
  },
  password(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators["default"](),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_lib/* object */.Ry(shape);
  },
  relation(usedAttributeNames, reservedNames, alreadyTakenTargetAttributes, { initialData, modifiedData }) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      target: yup_lib/* string */.Z_().required(build.translatedErrors.required),
      relation: yup_lib/* string */.Z_().required(),
      type: yup_lib/* string */.Z_().required(),
      targetAttribute: yup_lib/* lazy */.Vo(() => {
        const relationType = (0,getRelationType/* default */.Z)(modifiedData.relation, modifiedData.targetAttribute);
        if (relationType === "oneWay" || relationType === "manyWay") {
          return yup_lib/* string */.Z_().nullable();
        }
        let schema = yup_lib/* string */.Z_().test(isNameAllowed(reservedNames));
        const initialForbiddenName = [
          ...alreadyTakenTargetAttributes.map(({ name }) => name),
          modifiedData.name
        ];
        let forbiddenTargetAttributeName = initialForbiddenName.filter(
          (val) => val !== initialData.targetAttribute
        );
        return schema.matches(NAME_REGEX, build.translatedErrors.regex).test({
          name: "forbiddenTargetAttributeName",
          message: (0,getTrad/* default */.Z)("error.validation.relation.targetAttribute-taken"),
          test(value) {
            if (!value) {
              return false;
            }
            return !forbiddenTargetAttributeName.includes(value);
          }
        }).required(build.translatedErrors.required);
      })
    };
    return yup_lib/* object */.Ry(shape);
  },
  richtext(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators["default"](),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_lib/* object */.Ry(shape);
  },
  string(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_lib/* object */.Ry(shape);
  },
  text(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_lib/* object */.Ry(shape);
  },
  uid(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_lib/* object */.Ry(shape);
  }
};
/* harmony default export */ const attributes_types = (types);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/form.js

const form_nameField = {
  name: "displayName",
  type: "text",
  intlLabel: {
    id: (0,getTrad/* default */.Z)("contentType.displayName.label"),
    defaultMessage: "Display name"
  }
};
const form_forms = {
  advanced: {
    default() {
      return {
        sections: [
          {
            sectionTitle: {
              id: (0,getTrad/* default */.Z)("form.contentType.divider.draft-publish"),
              defaultMessage: "Draft/Publish"
            },
            items: [
              {
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.draftAndPublish.label"),
                  defaultMessage: "Draft/publish system"
                },
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.draftAndPublish.description"),
                  defaultMessage: "Write a draft version of each entry before publishing it"
                },
                name: "draftAndPublish",
                type: "toggle-draft-publish",
                validations: {}
              }
            ]
          }
        ]
      };
    }
  },
  base: {
    create() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              form_nameField,
              {
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text-singular"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text-plural"
              }
            ]
          }
        ]
      };
    },
    edit() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              form_nameField,
              {
                disabled: true,
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                disabled: true,
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text"
              },
              {
                intlLabel: {
                  id: "global.type",
                  defaultMessage: "Type"
                },
                name: "kind",
                type: "content-type-radio-group",
                size: 12,
                radios: [
                  {
                    title: {
                      id: (0,getTrad/* default */.Z)("form.button.collection-type.name"),
                      defaultMessage: "Collection Type"
                    },
                    description: {
                      id: (0,getTrad/* default */.Z)("form.button.collection-type.description"),
                      defaultMessage: "Best for multiple instances like articles, products, comments, etc."
                    },
                    value: "collectionType"
                  },
                  {
                    title: {
                      id: (0,getTrad/* default */.Z)("form.button.single-type.name"),
                      defaultMessage: "Single Type"
                    },
                    description: {
                      id: (0,getTrad/* default */.Z)("form.button.single-type.description"),
                      defaultMessage: "Best for single instance like about us, homepage, etc."
                    },
                    value: "singleType"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }
};
/* harmony default export */ const contentType_form = (form_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/createContentTypeSchema.js





const createContentTypeSchema = ({
  usedContentTypeNames = [],
  reservedModels = [],
  singularNames = [],
  pluralNames = []
}) => {
  const shape = {
    displayName: yup_lib/* string */.Z_().test({
      name: "nameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,createUid/* createUid */.E)(value);
        return !usedContentTypeNames.includes(name);
      }
    }).test({
      name: "nameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    pluralName: yup_lib/* string */.Z_().test({
      name: "pluralNameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !pluralNames.includes(value);
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: (0,getTrad/* default */.Z)("error.contentType.pluralName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return context.parent.singularName !== value;
      }
    }).test({
      name: "pluralNameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    singularName: yup_lib/* string */.Z_().test({
      name: "singularNameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !singularNames.includes(value);
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: (0,getTrad/* default */.Z)("error.contentType.singularName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return context.parent.pluralName !== value;
      }
    }).test({
      name: "singularNameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    draftAndPublish: yup_lib/* boolean */.O7(),
    kind: yup_lib/* string */.Z_().oneOf(["singleType", "collectionType"])
  };
  return yup_lib/* object */.Ry(shape);
};
/* harmony default export */ const contentType_createContentTypeSchema = (createContentTypeSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/index.js



;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/dynamicZone/form.js


const dynamicZone_form_form = {
  advanced: {
    default() {
      return {
        sections: component_form.advanced("componentToCreate.")
      };
    }
  },
  base: {
    createComponent() {
      return {
        sections: [
          { sectionTitle: null, items: [component_componentField] },
          ...component_form.base("componentToCreate.")
        ]
      };
    },
    default() {
      return {
        sections: [
          { sectionTitle: null, items: [component_componentField] },
          {
            sectionTitle: null,
            items: [
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                name: "components",
                type: "select-components",
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("modalForm.attributes.select-components"),
                  defaultMessage: "Select the components"
                },
                isMultiple: true
              }
            ]
          }
        ]
      };
    }
  }
};
/* harmony default export */ const dynamicZone_form = (dynamicZone_form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/dynamicZone/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/utils/addItemsToFormSection.js
const addItemsToFormSection = (formTypeOptions, sections) => {
  formTypeOptions.forEach((item) => {
    if (!("sectionTitle" in item)) {
      sections[0].items.push(item);
      return;
    }
    sections.push(item);
  });
};
/* harmony default export */ const utils_addItemsToFormSection = (addItemsToFormSection);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/utils/getUsedAttributeNames.js
const getUsedAttributeNames = (attributes, schemaData) => {
  return attributes.filter(({ name }) => {
    return name !== schemaData.initialData.name;
  }).map(({ name }) => name);
};
/* harmony default export */ const utils_getUsedAttributeNames = (getUsedAttributeNames);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var forms_defProp = Object.defineProperty;
var forms_defProps = Object.defineProperties;
var forms_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var forms_getOwnPropSymbols = Object.getOwnPropertySymbols;
var forms_hasOwnProp = Object.prototype.hasOwnProperty;
var forms_propIsEnum = Object.prototype.propertyIsEnumerable;
var forms_defNormalProp = (obj, key, value) => key in obj ? forms_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var forms_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (forms_hasOwnProp.call(b, prop))
      forms_defNormalProp(a, prop, b[prop]);
  if (forms_getOwnPropSymbols)
    for (var prop of forms_getOwnPropSymbols(b)) {
      if (forms_propIsEnum.call(b, prop))
        forms_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var forms_spreadProps = (a, b) => forms_defProps(a, forms_getOwnPropDescs(b));
var forms_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (forms_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && forms_getOwnPropSymbols)
    for (var prop of forms_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && forms_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};











const forms_forms = {
  customField: {
    schema({
      schemaAttributes,
      attributeType,
      customFieldValidator,
      reservedNames,
      schemaData,
      ctbFormsAPI
    }) {
      const usedAttributeNames = utils_getUsedAttributeNames(schemaAttributes, schemaData);
      const attributeShape = attributes_types[attributeType](
        usedAttributeNames,
        reservedNames.attributes
      );
      return ctbFormsAPI.makeCustomFieldValidator(
        attributeShape,
        customFieldValidator,
        usedAttributeNames,
        reservedNames.attributes,
        schemaData
      );
    },
    form: {
      base({ customField }) {
        var _a;
        const sections = [{ sectionTitle: null, items: [nameField] }];
        if ((_a = customField.options) == null ? void 0 : _a.base) {
          utils_addItemsToFormSection(customField.options.base, sections);
        }
        return { sections };
      },
      advanced(_a) {
        var _b = _a, { customField, data, step, extensions } = _b, rest = forms_objRest(_b, ["customField", "data", "step", "extensions"]);
        var _a2;
        const sections = [{ sectionTitle: null, items: [] }];
        const injectedInputs = extensions.getAdvancedForm(["attribute", customField.type], forms_spreadValues({
          data,
          type: customField.type,
          step
        }, rest));
        if ((_a2 = customField.options) == null ? void 0 : _a2.advanced) {
          utils_addItemsToFormSection(customField.options.advanced, sections);
        }
        if (injectedInputs) {
          const extendedSettings = {
            sectionTitle: {
              id: (0,getTrad/* default */.Z)("modalForm.custom-fields.advanced.settings.extended"),
              defaultMessage: "Extended settings"
            },
            items: injectedInputs
          };
          sections.push(extendedSettings);
        }
        return { sections };
      }
    }
  },
  attribute: {
    schema(currentSchema, attributeType, reservedNames, alreadyTakenTargetContentTypeAttributes, options, extensions) {
      const attributes = get_default()(currentSchema, ["schema", "attributes"], []);
      const usedAttributeNames = utils_getUsedAttributeNames(attributes, options);
      try {
        let attributeShape = attributes_types[attributeType](
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options
        );
        return extensions.makeValidator(
          ["attribute", attributeType],
          attributeShape,
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options
        );
      } catch (err) {
        console.error("Error yup build schema", err);
        return attributes_types["default"](usedAttributeNames, reservedNames.attributes);
      }
    },
    form: {
      advanced(_c) {
        var _d = _c, { data, type, step, extensions } = _d, rest = forms_objRest(_d, ["data", "type", "step", "extensions"]);
        try {
          const baseForm = attributes_form.advanced[type](data, step).sections;
          const itemsToAdd = extensions.getAdvancedForm(["attribute", type], forms_spreadValues({
            data,
            type,
            step
          }, rest));
          const sections = baseForm.reduce((acc, current) => {
            if (current.sectionTitle === null) {
              acc.push(current);
            } else {
              acc.push(forms_spreadProps(forms_spreadValues({}, current), { items: [...current.items, ...itemsToAdd] }));
            }
            return acc;
          }, []);
          return { sections };
        } catch (err) {
          console.error(err);
          return { sections: [] };
        }
      },
      base({ data, type, step, attributes }) {
        try {
          return attributes_form.base[type](data, step, attributes);
        } catch (err) {
          return attributes_commonBaseForm;
        }
      }
    }
  },
  contentType: {
    schema(alreadyTakenNames, isEditing, ctUid, reservedNames, extensions, contentTypes) {
      const singularNames = Object.values(contentTypes).map((contentType) => {
        return contentType.schema.singularName;
      });
      const pluralNames = Object.values(contentTypes).map((contentType) => {
        return get_default()(contentType, ["schema", "pluralName"], "");
      });
      const takenNames = isEditing ? alreadyTakenNames.filter((uid) => uid !== ctUid) : alreadyTakenNames;
      const takenSingularNames = isEditing ? singularNames.filter((singName) => {
        const currentSingularName = get_default()(contentTypes, [ctUid, "schema", "singularName"], "");
        return currentSingularName !== singName;
      }) : singularNames;
      const takenPluralNames = isEditing ? pluralNames.filter((pluralName) => {
        const currentPluralName = get_default()(contentTypes, [ctUid, "schema", "pluralName"], "");
        return currentPluralName !== pluralName;
      }) : pluralNames;
      const contentTypeShape = contentType_createContentTypeSchema({
        usedContentTypeNames: takenNames,
        reservedModels: reservedNames.models,
        singularNames: takenSingularNames,
        pluralNames: takenPluralNames
      });
      return extensions.makeValidator(
        ["contentType"],
        contentTypeShape,
        takenNames,
        reservedNames.models,
        takenSingularNames,
        takenPluralNames
      );
    },
    form: {
      base({ actionType }) {
        if (actionType === "create") {
          return contentType_form.base.create();
        }
        return contentType_form.base.edit();
      },
      advanced(_e) {
        var _f = _e, { extensions } = _f, rest = forms_objRest(_f, ["extensions"]);
        const baseForm = contentType_form.advanced["default"](rest).sections;
        const itemsToAdd = extensions.getAdvancedForm(["contentType"]);
        return {
          sections: [
            ...baseForm,
            {
              sectionTitle: {
                id: "global.settings",
                defaultMessage: "Settings"
              },
              items: itemsToAdd
            }
          ]
        };
      }
    }
  },
  component: {
    schema(alreadyTakenAttributes, componentCategory, reservedNames, isEditing = false, compoUid = null) {
      const takenNames = isEditing ? alreadyTakenAttributes.filter((uid) => uid !== compoUid) : alreadyTakenAttributes;
      return component_createComponentSchema(takenNames, reservedNames.models, componentCategory);
    },
    form: {
      advanced() {
        return {
          sections: component_form.advanced()
        };
      },
      base() {
        return {
          sections: component_form.base()
        };
      }
    }
  },
  addComponentToDynamicZone: {
    form: {
      advanced() {
        return dynamicZone_form.advanced["default"]();
      },
      base({ data }) {
        const isCreatingComponent = get_default()(data, "createComponent", false);
        if (isCreatingComponent) {
          return dynamicZone_form.base.createComponent();
        }
        return dynamicZone_form.base["default"]();
      }
    }
  },
  editCategory: {
    schema(allCategories, initialData) {
      const allowedCategories = allCategories.filter((cat) => cat !== initialData.name).map((cat) => toLower_default()(cat));
      return category_createCategorySchema(allowedCategories);
    },
    form: {
      advanced: () => ({ sections: [] }),
      base() {
        return category_form.base;
      }
    }
  }
};
/* harmony default export */ const FormModal_forms = (forms_forms);

// EXTERNAL MODULE: ./node_modules/reselect/es/index.js + 1 modules
var es = __webpack_require__(20573);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/reducer.js + 1 modules
var reducer = __webpack_require__(88372);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/selectors.js



const formModalDomain = () => (state) => state[`${pluginId/* default */.Z}_formModal`] || reducer/* initialState */.E;
const makeSelectFormModal = () => (0,es/* createSelector */.P1)(formModalDomain(), (substate) => {
  return substate;
});
/* harmony default export */ const selectors = (makeSelectFormModal);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/index.js
/* provided dependency */ var FormModal_console = __webpack_require__(25108);
var FormModal_defProp = Object.defineProperty;
var FormModal_defProps = Object.defineProperties;
var FormModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var FormModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FormModal_hasOwnProp = Object.prototype.hasOwnProperty;
var FormModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var FormModal_defNormalProp = (obj, key, value) => key in obj ? FormModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FormModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FormModal_hasOwnProp.call(b, prop))
      FormModal_defNormalProp(a, prop, b[prop]);
  if (FormModal_getOwnPropSymbols)
    for (var prop of FormModal_getOwnPropSymbols(b)) {
      if (FormModal_propIsEnum.call(b, prop))
        FormModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FormModal_spreadProps = (a, b) => FormModal_defProps(a, FormModal_getOwnPropDescs(b));
var FormModal_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (FormModal_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && FormModal_getOwnPropSymbols)
    for (var prop of FormModal_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && FormModal_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FormModal_async = (__this, __arguments, generator) => {
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
















































const FormModal = () => {
  const {
    onCloseModal,
    onNavigateToChooseAttributeModal,
    onNavigateToAddCompoToDZModal,
    onNavigateToCreateComponentStep2,
    actionType,
    attributeName,
    attributeType,
    customFieldUid,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    modalType,
    isOpen,
    kind,
    step,
    targetUid
  } = (0,useFormModalNavigation/* default */.Z)();
  const customField = (0,build.useCustomFields)().get(customFieldUid);
  const tabGroupRef = (0,react.useRef)();
  const formModalSelector = (0,react.useMemo)(selectors, []);
  const dispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const reducerState = (0,lib.useSelector)((state) => formModalSelector(state), lib.shallowEqual);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { getPlugin } = (0,build.useStrapiApp)();
  const ctbPlugin = getPlugin(pluginId/* default */.Z);
  const ctbFormsAPI = ctbPlugin.apis.forms;
  const inputsFromPlugins = ctbFormsAPI.components.inputs;
  const {
    addAttribute,
    addCustomFieldAttribute,
    addCreatedComponentToDynamicZone,
    allComponentsCategories,
    changeDynamicZoneComponents,
    contentTypes,
    components,
    createSchema,
    deleteCategory,
    deleteData,
    editCategory,
    editCustomFieldAttribute,
    submitData,
    modifiedData: allDataSchema,
    nestedComponents,
    setModifiedData,
    sortedContentTypesList,
    updateSchema,
    reservedNames
  } = (0,useDataManager/* default */.Z)();
  const {
    componentToCreate,
    formErrors,
    initialData,
    isCreatingComponentWhileAddingAField,
    modifiedData
  } = reducerState;
  const pathToSchema = forTarget === "contentType" || forTarget === "component" ? [forTarget] : [forTarget, targetUid];
  (0,react.useEffect)(() => {
    if (isOpen) {
      const collectionTypesForRelation = sortedContentTypesList.filter(
        utils_isAllowedContentTypesForRelations
      );
      if (modalType === "editCategory") {
        setModifiedData();
      }
      if (actionType === "edit" && modalType === "attribute" && forTarget === "contentType") {
        trackUsage("willEditFieldOfContentType");
      }
      const pathToAttributes = [...pathToSchema, "schema", "attributes"];
      const foundDynamicZoneTarget = utils_findAttribute(get_default()(allDataSchema, pathToAttributes, []), dynamicZoneTarget) || null;
      if (modalType === "editCategory" && actionType === "edit") {
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          modalType,
          actionType,
          data: {
            name: categoryName
          }
        });
      }
      if (modalType === "contentType" && actionType === "create") {
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          modalType,
          actionType,
          data: {
            draftAndPublish: true
          },
          pluginOptions: {}
        });
      }
      if (modalType === "contentType" && actionType === "edit") {
        const { displayName, draftAndPublish, kind: kind2, pluginOptions, pluralName, singularName } = get_default()(
          allDataSchema,
          [...pathToSchema, "schema"],
          {
            displayName: null,
            pluginOptions: {},
            singularName: null,
            pluralName: null
          }
        );
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          actionType,
          modalType,
          data: {
            displayName,
            draftAndPublish,
            kind: kind2,
            pluginOptions,
            pluralName,
            singularName
          }
        });
      }
      if (modalType === "component" && actionType === "edit") {
        const data = get_default()(allDataSchema, pathToSchema, {});
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          actionType,
          modalType,
          data: {
            displayName: data.schema.displayName,
            category: data.category,
            icon: data.schema.icon
          }
        });
      }
      if (modalType === "addComponentToDynamicZone" && actionType === "edit") {
        const attributeToEdit = FormModal_spreadProps(FormModal_spreadValues({}, foundDynamicZoneTarget), {
          components: [],
          name: dynamicZoneTarget,
          createComponent: false,
          componentToCreate: { type: "component" }
        });
        dispatch({
          type: FormModal_constants/* SET_DYNAMIC_ZONE_DATA_SCHEMA */.VZ,
          attributeToEdit
        });
      }
      if (attributeType) {
        const attributeToEditNotFormatted = utils_findAttribute(
          get_default()(allDataSchema, pathToAttributes, []),
          attributeName
        );
        const attributeToEdit = FormModal_spreadProps(FormModal_spreadValues({}, attributeToEditNotFormatted), {
          name: attributeName
        });
        if (attributeType === "component" && actionType === "edit") {
          if (!attributeToEdit.repeatable) {
            set_default()(attributeToEdit, "repeatable", false);
          }
        }
        if (modalType === "customField") {
          dispatch({
            type: FormModal_constants/* SET_CUSTOM_FIELD_DATA_SCHEMA */.OY,
            customField,
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            forTarget
          });
        } else {
          dispatch({
            type: FormModal_constants/* SET_ATTRIBUTE_DATA_SCHEMA */.S0,
            attributeType,
            nameToSetForRelation: get_default()(collectionTypesForRelation, ["0", "title"], "error"),
            targetUid: get_default()(collectionTypesForRelation, ["0", "uid"], "error"),
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            step,
            forTarget
          });
        }
      }
    } else {
      dispatch({ type: FormModal_constants/* RESET_PROPS */.c2 });
    }
  }, [
    actionType,
    attributeName,
    attributeType,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    isOpen,
    modalType
  ]);
  const isCreatingContentType = modalType === "contentType";
  const isCreatingComponent = modalType === "component";
  const isCreatingAttribute = modalType === "attribute";
  const isCreatingCustomFieldAttribute = modalType === "customField";
  const isComponentAttribute = attributeType === "component" && isCreatingAttribute;
  const isCreating = actionType === "create";
  const isCreatingComponentFromAView = get_default()(modifiedData, "createComponent", false) || isCreatingComponentWhileAddingAField;
  const isInFirstComponentStep = step === "1";
  const isEditingCategory = modalType === "editCategory";
  const isPickingAttribute = modalType === "chooseAttribute";
  const uid = (0,createUid/* createUid */.E)(modifiedData.displayName || "");
  const attributes = get_default()(allDataSchema, [...pathToSchema, "schema", "attributes"], null);
  const checkFormValidity = () => FormModal_async(void 0, null, function* () {
    var _a;
    let schema;
    const dataToValidate = isCreatingComponentFromAView && step === "1" ? get_default()(modifiedData, "componentToCreate", {}) : modifiedData;
    if (isCreatingContentType) {
      schema = FormModal_forms.contentType.schema(
        Object.keys(contentTypes),
        actionType === "edit",
        get_default()(allDataSchema, [...pathToSchema, "uid"], null),
        reservedNames,
        ctbFormsAPI,
        contentTypes
      );
    } else if (isCreatingComponent) {
      schema = FormModal_forms.component.schema(
        Object.keys(components),
        modifiedData.category || "",
        reservedNames,
        actionType === "edit",
        get_default()(allDataSchema, [...pathToSchema, "uid"], null),
        ctbFormsAPI
      );
    } else if (isCreatingCustomFieldAttribute) {
      schema = FormModal_forms.customField.schema({
        schemaAttributes: get_default()(allDataSchema, [...pathToSchema, "schema", "attributes"], []),
        attributeType: customField.type,
        reservedNames,
        schemaData: { modifiedData, initialData },
        ctbFormsAPI,
        customFieldValidator: (_a = customField.options) == null ? void 0 : _a.validator
      });
    } else if (isComponentAttribute && isCreatingComponentFromAView && isInFirstComponentStep) {
      schema = FormModal_forms.component.schema(
        Object.keys(components),
        get_default()(modifiedData, "componentToCreate.category", ""),
        reservedNames,
        ctbFormsAPI
      );
    } else if (isCreatingAttribute && !isInFirstComponentStep) {
      const type = attributeType === "relation" ? "relation" : modifiedData.type;
      let alreadyTakenTargetContentTypeAttributes = [];
      if (type === "relation") {
        const targetContentTypeUID = get_default()(modifiedData, ["target"], null);
        const targetContentTypeAttributes = get_default()(
          contentTypes,
          [targetContentTypeUID, "schema", "attributes"],
          []
        );
        alreadyTakenTargetContentTypeAttributes = targetContentTypeAttributes.filter(
          ({ name: attrName }) => {
            if (actionType !== "edit") {
              return true;
            }
            return attrName !== initialData.targetAttribute;
          }
        );
      }
      schema = FormModal_forms.attribute.schema(
        get_default()(allDataSchema, pathToSchema, {}),
        type,
        reservedNames,
        alreadyTakenTargetContentTypeAttributes,
        { modifiedData, initialData },
        ctbFormsAPI
      );
    } else if (isEditingCategory) {
      schema = FormModal_forms.editCategory.schema(allComponentsCategories, initialData, ctbFormsAPI);
    } else {
      if (isInFirstComponentStep && isCreatingComponentFromAView) {
        schema = FormModal_forms.component.schema(
          Object.keys(components),
          get_default()(modifiedData, "componentToCreate.category", ""),
          reservedNames,
          ctbFormsAPI
        );
      } else {
        return;
      }
    }
    yield schema.validate(dataToValidate, { abortEarly: false });
  });
  const handleChange = (0,react.useCallback)(
    (_a) => {
      var { target: _b } = _a, _c = _b, { name, value, type } = _c, rest = FormModal_objRest(_c, ["name", "value", "type"]);
      const namesThatCanResetToNullValue = [
        "enumName",
        "max",
        "min",
        "maxLength",
        "minLength",
        "regex",
        "default"
      ];
      let val;
      if (namesThatCanResetToNullValue.includes(name) && value === "") {
        val = null;
      } else {
        val = value;
      }
      const clonedErrors = Object.assign({}, formErrors);
      if (name === "max") {
        delete clonedErrors.min;
      }
      if (name === "maxLength") {
        delete clonedErrors.minLength;
      }
      delete clonedErrors[name];
      dispatch({
        type: FormModal_constants/* SET_ERRORS */.Ey,
        errors: clonedErrors
      });
      dispatch(FormModal_spreadValues({
        type: FormModal_constants/* ON_CHANGE */.P0,
        keys: name.split("."),
        value: val
      }, rest));
    },
    [dispatch, formErrors]
  );
  const handleSubmit = (_0, ..._1) => FormModal_async(void 0, [_0, ..._1], function* (e, shouldContinue = isCreating) {
    e.preventDefault();
    try {
      yield checkFormValidity();
      sendButtonAddMoreFieldEvent(shouldContinue);
      const ctTargetUid = forTarget === "components" ? targetUid : uid;
      if (isCreatingContentType) {
        if (isCreating) {
          createSchema(FormModal_spreadProps(FormModal_spreadValues({}, modifiedData), { kind }), modalType, uid);
          push({ pathname: `/plugins/${pluginId/* default */.Z}/content-types/${uid}` });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          if (utils_canEditContentType(allDataSchema, modifiedData)) {
            onCloseModal();
            submitData(modifiedData);
          } else {
            toggleNotification({
              type: "warning",
              message: { id: "notification.contentType.relations.conflict" }
            });
          }
          return;
        }
      } else if (modalType === "component") {
        if (isCreating) {
          const componentUid = (0,createUid/* createComponentUid */.N)(modifiedData.displayName, modifiedData.category);
          const _a = modifiedData, { category } = _a, rest = FormModal_objRest(_a, ["category"]);
          createSchema(rest, "component", componentUid, category);
          push({
            pathname: `/plugins/${pluginId/* default */.Z}/component-categories/${category}/${componentUid}`
          });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: componentUid
          });
        } else {
          updateSchema(modifiedData, modalType, targetUid);
          onCloseModal();
          return;
        }
      } else if (isEditingCategory) {
        if (toLower_default()(initialData.name) === toLower_default()(modifiedData.name)) {
          onCloseModal();
          return;
        }
        editCategory(initialData.name, modifiedData);
        return;
      } else if (isCreatingCustomFieldAttribute) {
        const customFieldAttributeUpdate = {
          attributeToSet: FormModal_spreadProps(FormModal_spreadValues({}, modifiedData), { customField: customFieldUid }),
          forTarget,
          targetUid,
          initialAttribute: initialData
        };
        if (actionType === "edit") {
          editCustomFieldAttribute(customFieldAttributeUpdate);
        } else {
          addCustomFieldAttribute(customFieldAttributeUpdate);
        }
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          onCloseModal();
        }
        return;
      } else if (isCreatingAttribute && !isCreatingComponentFromAView) {
        const isDynamicZoneAttribute = attributeType === "dynamiczone";
        if (isDynamicZoneAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (isCreating) {
            dispatch({
              type: FormModal_constants/* RESET_PROPS_AND_SET_THE_FORM_FOR_ADDING_A_COMPO_TO_A_DZ */.I
            });
            tabGroupRef.current._handlers.setSelectedTabIndex(0);
            onNavigateToAddCompoToDZModal({ dynamicZoneTarget: modifiedData.name });
          } else {
            onCloseModal();
          }
          return;
        }
        if (!isComponentAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (shouldContinue) {
            onNavigateToChooseAttributeModal({
              forTarget,
              targetUid: ctTargetUid
            });
          } else {
            onCloseModal();
          }
          return;
        }
        if (isInFirstComponentStep) {
          onNavigateToCreateComponentStep2();
          dispatch({
            type: FormModal_constants/* RESET_PROPS_AND_SET_FORM_FOR_ADDING_AN_EXISTING_COMPO */.yC,
            forTarget
          });
          return;
        }
        addAttribute(
          modifiedData,
          forTarget,
          targetUid,
          actionType === "edit",
          initialData,
          true
        );
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid
          });
        } else {
          onCloseModal();
        }
      } else if (isCreatingAttribute && isCreatingComponentFromAView) {
        if (isInFirstComponentStep) {
          trackUsage("willCreateComponentFromAttributesModal");
          dispatch({
            type: FormModal_constants/* RESET_PROPS_AND_SAVE_CURRENT_DATA */.oF,
            forTarget
          });
          onNavigateToCreateComponentStep2();
          return;
        }
        const _b = componentToCreate, { category, type } = _b, rest = FormModal_objRest(_b, ["category", "type"]);
        const componentUid = (0,createUid/* createComponentUid */.N)(componentToCreate.displayName, category);
        createSchema(
          rest,
          type,
          componentUid,
          category,
          isCreatingComponentFromAView
        );
        addAttribute(modifiedData, forTarget, targetUid, false);
        dispatch({ type: FormModal_constants/* RESET_PROPS */.c2 });
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
        } else {
          onCloseModal();
        }
        return;
      } else {
        if (isInFirstComponentStep) {
          if (isCreatingComponentFromAView) {
            const _c = modifiedData.componentToCreate, { category, type } = _c, rest = FormModal_objRest(_c, ["category", "type"]);
            const componentUid = (0,createUid/* createComponentUid */.N)(
              modifiedData.componentToCreate.displayName,
              category
            );
            createSchema(
              rest,
              type,
              componentUid,
              category,
              isCreatingComponentFromAView
            );
            addCreatedComponentToDynamicZone(dynamicZoneTarget, [componentUid]);
            onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
          } else {
            changeDynamicZoneComponents(dynamicZoneTarget, modifiedData.components);
            onCloseModal();
          }
        } else {
          FormModal_console.error("This case is not handled");
        }
        return;
      }
      dispatch({
        type: FormModal_constants/* RESET_PROPS */.c2
      });
    } catch (err) {
      const errors = (0,build.getYupInnerErrors)(err);
      FormModal_console.log({ err, errors });
      dispatch({
        type: FormModal_constants/* SET_ERRORS */.Ey,
        errors
      });
    }
  });
  const handleClosed = () => {
    onCloseModal();
    dispatch({
      type: FormModal_constants/* RESET_PROPS */.c2
    });
  };
  const sendAdvancedTabEvent = (tab) => {
    if (tab !== "advanced") {
      return;
    }
    if (isCreatingContentType) {
      trackUsage("didSelectContentTypeSettings");
      return;
    }
    if (forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldSettings");
    }
  };
  const sendButtonAddMoreFieldEvent = (shouldContinue) => {
    if (modalType === "attribute" && forTarget === "contentType" && attributeType !== "dynamiczone" && shouldContinue) {
      trackUsage("willAddMoreFieldToContentType");
    }
  };
  const shouldDisableAdvancedTab = () => {
    if (modalType === "editCategory") {
      return true;
    }
    if (modalType === "component") {
      return true;
    }
    if (has_default()(modifiedData, "createComponent")) {
      return true;
    }
    return false;
  };
  const displayedAttributes = getAttributesToDisplay(
    forTarget,
    targetUid,
    nestedComponents
  );
  if (!isOpen) {
    return null;
  }
  if (!modalType) {
    return null;
  }
  const formToDisplay = get_default()(FormModal_forms, [modalType, "form"], {
    advanced: () => ({
      sections: []
    }),
    base: () => ({
      sections: []
    })
  });
  const isAddingAComponentToAnotherComponent = forTarget === "components" || forTarget === "component";
  const genericInputProps = {
    customInputs: FormModal_spreadValues({
      "allowed-types-select": components_AllowedTypesSelect,
      "boolean-radio-group": components_BooleanRadioGroup,
      "checkbox-with-number-field": components_CheckboxWithNumberField,
      "component-icon-picker": components_ComponentIconPicker,
      "content-type-radio-group": components_ContentTypeRadioGroup,
      "radio-group": components_CustomRadioGroup,
      relation: components_Relation,
      "select-category": components_SelectCategory,
      "select-component": components_SelectComponent,
      "select-components": components_SelectComponents,
      "select-default-boolean": components_BooleanDefaultValueSelect,
      "select-number": components_SelectNumber,
      "select-date": components_SelectDateType,
      "toggle-draft-publish": components_DraftAndPublishToggle,
      "text-plural": components_PluralName,
      "text-singular": components_SingularName,
      "textarea-enum": components_TextareaEnum
    }, inputsFromPlugins),
    componentToCreate,
    dynamicZoneTarget,
    formErrors,
    isAddingAComponentToAnotherComponent,
    isCreatingComponentWhileAddingAField,
    mainBoxHeader: get_default()(allDataSchema, [...pathToSchema, "schema", "displayName"], ""),
    modifiedData,
    naturePickerType: forTarget,
    isCreating,
    targetUid,
    forTarget
  };
  const advancedForm = formToDisplay.advanced({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseForm = formToDisplay.base({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseFormInputNames = utils_getFormInputNames(baseForm);
  const advancedFormInputNames = utils_getFormInputNames(advancedForm);
  const doesBaseFormHasError = Object.keys(formErrors).some(
    (key) => baseFormInputNames.includes(key)
  );
  const doesAdvancedFormHasError = Object.keys(formErrors).some(
    (key) => advancedFormInputNames.includes(key)
  );
  const schemaKind = get_default()(contentTypes, [targetUid, "schema", "kind"]);
  const checkIsEditingFieldName = () => actionType === "edit" && attributes.every(({ name }) => name !== (modifiedData == null ? void 0 : modifiedData.name));
  const handleClickFinish = () => {
    if (checkIsEditingFieldName()) {
      trackUsage("didEditFieldNameOnContentType");
    }
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClosed, labelledBy: "title" }, /* @__PURE__ */ react.createElement(
    components_FormModalHeader,
    {
      actionType,
      attributeName,
      categoryName,
      contentTypeKind: kind,
      dynamicZoneTarget,
      modalType,
      forTarget,
      targetUid,
      attributeType,
      customFieldUid
    }
  ), isPickingAttribute && /* @__PURE__ */ react.createElement(
    components_AttributeOptions,
    {
      attributes: displayedAttributes,
      forTarget,
      kind: schemaKind || "collectionType"
    }
  ), !isPickingAttribute && /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: "todo",
      id: "tabs",
      variant: "simple",
      ref: tabGroupRef,
      onTabChange: (selectedTab) => {
        if (selectedTab === 1) {
          sendAdvancedTabEvent("advanced");
        }
      }
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(
      components_FormModalSubHeader,
      {
        actionType,
        forTarget,
        kind,
        step,
        modalType,
        attributeType,
        attributeName,
        customField
      }
    ), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, { hasError: doesBaseFormHasError }, formatMessage({
      id: (0,getTrad/* default */.Z)("popUpForm.navContainer.base"),
      defaultMessage: "Basic settings"
    })), /* @__PURE__ */ react.createElement(
      Tabs/* Tab */.O,
      {
        hasError: doesAdvancedFormHasError,
        disabled: shouldDisableAdvancedTab()
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("popUpForm.navContainer.advanced"),
        defaultMessage: "Advanced settings"
      })
    ))),
    /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(
      components_TabForm,
      {
        form: baseForm,
        formErrors,
        genericInputProps,
        modifiedData,
        onChange: handleChange
      }
    ))), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(
      components_TabForm,
      {
        form: advancedForm,
        formErrors,
        genericInputProps,
        modifiedData,
        onChange: handleChange
      }
    )))))
  )), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      endActions: /* @__PURE__ */ react.createElement(
        components_FormModalEndActions,
        {
          deleteCategory,
          deleteContentType: deleteData,
          deleteComponent: deleteData,
          categoryName: initialData.name,
          isAttributeModal: modalType === "attribute",
          isCustomFieldModal: modalType === "customField",
          isComponentToDzModal: modalType === "addComponentToDynamicZone",
          isComponentAttribute: attributeType === "component",
          isComponentModal: modalType === "component",
          isContentTypeModal: modalType === "contentType",
          isCreatingComponent: actionType === "create",
          isCreatingDz: actionType === "create",
          isCreatingComponentAttribute: modifiedData.createComponent || false,
          isCreatingComponentInDz: modifiedData.createComponent || false,
          isCreatingComponentWhileAddingAField,
          isCreatingContentType: actionType === "create",
          isEditingAttribute: actionType === "edit",
          isDzAttribute: attributeType === "dynamiczone",
          isEditingCategory: modalType === "editCategory",
          isInFirstComponentStep: step === "1",
          onSubmitAddComponentAttribute: handleSubmit,
          onSubmitAddComponentToDz: handleSubmit,
          onSubmitCreateComponent: handleSubmit,
          onSubmitCreateContentType: handleSubmit,
          onSubmitCreateDz: handleSubmit,
          onSubmitEditAttribute: handleSubmit,
          onSubmitEditCategory: handleSubmit,
          onSubmitEditComponent: handleSubmit,
          onSubmitEditContentType: handleSubmit,
          onSubmitEditCustomFieldAttribute: handleSubmit,
          onSubmitEditDz: handleSubmit,
          onClickFinish: handleClickFinish
        }
      ),
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: handleClosed }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }))
    }
  )));
};
/* harmony default export */ const components_FormModal = (FormModal);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/createDataObject.js
const createDataObject = (arr) => arr.reduce((acc, current) => {
  acc[current.uid] = current;
  return acc;
}, {});
/* harmony default export */ const utils_createDataObject = (createDataObject);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/createModifiedDataSchema.js

const createModifiedDataSchema = (contentTypeSchema, retrievedComponents, allComponentsSchema, isInContentTypeView) => {
  const componentsAssociatedToContentType = retrievedComponents.reduce((acc, current) => {
    const componentSchema = get_default()(allComponentsSchema, current, {});
    acc[current] = componentSchema;
    return acc;
  }, {});
  const keyName = isInContentTypeView ? "contentType" : "component";
  const schema = {
    [keyName]: contentTypeSchema,
    components: componentsAssociatedToContentType
  };
  return schema;
};
/* harmony default export */ const utils_createModifiedDataSchema = (createModifiedDataSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveSpecificInfoFromComponents.js


const retrieveSpecificInfoFromComponents = (allComponents, keysToRetrieve) => {
  const allData = Object.keys(allComponents).map((compo) => {
    return (0,lodash.get)(allComponents, [compo, ...keysToRetrieve], "");
  });
  return (0,makeUnique/* default */.Z)(allData);
};
/* harmony default export */ const utils_retrieveSpecificInfoFromComponents = (retrieveSpecificInfoFromComponents);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveComponentsFromSchema.js
var retrieveComponentsFromSchema = __webpack_require__(19525);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveNestedComponents.js


const retrieveNestedComponents = (appComponents) => {
  const nestedComponents = Object.keys(appComponents).reduce((acc, current) => {
    const componentAttributes = (0,lodash.get)(appComponents, [current, "schema", "attributes"], []);
    const currentComponentNestedCompos = getComponentsFromComponent(componentAttributes);
    return [...acc, ...currentComponentNestedCompos];
  }, []);
  return (0,makeUnique/* default */.Z)(nestedComponents);
};
const getComponentsFromComponent = (componentAttributes) => {
  return componentAttributes.reduce((acc, current) => {
    const { type, component } = current;
    if (type === "component") {
      acc.push(component);
    }
    return acc;
  }, []);
};
/* harmony default export */ const utils_retrieveNestedComponents = (retrieveNestedComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveComponentsThatHaveComponents.js


const retrieveComponentsThatHaveComponents = (allComponents) => {
  const componentsThatHaveNestedComponents = Object.keys(allComponents).reduce((acc, current) => {
    const currentComponent = get_default()(allComponents, [current], {});
    const uid = currentComponent.uid;
    if (doesComponentHaveAComponentField(currentComponent)) {
      acc.push(uid);
    }
    return acc;
  }, []);
  return (0,makeUnique/* default */.Z)(componentsThatHaveNestedComponents);
};
const doesComponentHaveAComponentField = (component) => {
  const attributes = get_default()(component, ["schema", "attributes"], []);
  return attributes.some((attribute) => {
    const { type } = attribute;
    return type === "component";
  });
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/cleanData.js
var cleanData_defProp = Object.defineProperty;
var cleanData_defProps = Object.defineProperties;
var cleanData_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var cleanData_getOwnPropSymbols = Object.getOwnPropertySymbols;
var cleanData_hasOwnProp = Object.prototype.hasOwnProperty;
var cleanData_propIsEnum = Object.prototype.propertyIsEnumerable;
var cleanData_defNormalProp = (obj, key, value) => key in obj ? cleanData_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var cleanData_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (cleanData_hasOwnProp.call(b, prop))
      cleanData_defNormalProp(a, prop, b[prop]);
  if (cleanData_getOwnPropSymbols)
    for (var prop of cleanData_getOwnPropSymbols(b)) {
      if (cleanData_propIsEnum.call(b, prop))
        cleanData_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var cleanData_spreadProps = (a, b) => cleanData_defProps(a, cleanData_getOwnPropDescs(b));
var cleanData_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (cleanData_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && cleanData_getOwnPropSymbols)
    for (var prop of cleanData_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && cleanData_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const getCreatedAndModifiedComponents = (allComponents, initialComponents) => {
  const componentUIDsToReturn = Object.keys(allComponents).filter((compoUid) => {
    const currentCompo = (0,lodash.get)(allComponents, compoUid, {});
    const initialCompo = (0,lodash.get)(initialComponents, compoUid, {});
    const hasComponentBeenCreated = (0,lodash.get)(currentCompo, ["isTemporary"], false);
    const hasComponentBeenModified = !(0,lodash.isEqual)(currentCompo, initialCompo);
    return hasComponentBeenCreated || hasComponentBeenModified;
  });
  return (0,makeUnique/* default */.Z)(componentUIDsToReturn);
};
const formatComponent = (component, mainDataUID) => {
  const formattedAttributes = formatAttributes(
    (0,lodash.get)(component, "schema.attributes", []),
    mainDataUID
  );
  const compoUID = (0,lodash.get)(component, "isTemporary", false) ? { tmpUID: component.uid } : { uid: component.uid };
  const formattedComponent = Object.assign(
    {},
    compoUID,
    { category: component.category },
    (0,lodash.omit)(component.schema, "attributes"),
    { attributes: formattedAttributes }
  );
  return formattedComponent;
};
const formatMainDataType = (data, isComponent = false) => {
  const mainDataUID = (0,lodash.get)(data, "uid", null);
  const formattedAttributes = formatAttributes((0,lodash.get)(data, "schema.attributes", []), mainDataUID);
  const initObj = isComponent ? { category: (0,lodash.get)(data, "category", "") } : {};
  const formattedContentType = Object.assign(initObj, (0,lodash.omit)(data.schema, "attributes"), {
    attributes: formattedAttributes
  });
  delete formattedContentType.uid;
  delete formattedContentType.isTemporary;
  delete formattedContentType.visible;
  delete formattedContentType.restrictRelationsTo;
  return formattedContentType;
};
const formatAttributes = (attributes, mainDataUID) => {
  return attributes.reduce((acc, _a) => {
    var _b = _a, { name } = _b, rest = cleanData_objRest(_b, ["name"]);
    const currentAttribute = rest;
    const hasARelationWithMainDataUID = currentAttribute.target === mainDataUID;
    const isRelationType = currentAttribute.type === "relation";
    const currentTargetAttribute = (0,lodash.get)(currentAttribute, "targetAttribute", null);
    if (!hasARelationWithMainDataUID) {
      if (isRelationType) {
        const relationAttr = Object.assign({}, currentAttribute, {
          targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
        });
        acc[name] = removeNullKeys(relationAttr);
      } else {
        acc[name] = removeNullKeys(currentAttribute);
      }
    }
    if (hasARelationWithMainDataUID) {
      const target = currentAttribute.target;
      const formattedRelationAttribute = Object.assign({}, currentAttribute, {
        target,
        targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
      });
      acc[name] = removeNullKeys(formattedRelationAttribute);
    }
    if (currentAttribute.customField) {
      const customFieldAttribute = cleanData_spreadProps(cleanData_spreadValues({}, currentAttribute), { type: "customField" });
      acc[name] = removeNullKeys(customFieldAttribute);
    }
    return acc;
  }, {});
};
const formatRelationTargetAttribute = (targetAttribute) => targetAttribute === "-" ? null : targetAttribute;
const removeNullKeys = (obj) => Object.keys(obj).reduce((acc, current) => {
  if (obj[current] !== null && current !== "plugin") {
    acc[current] = obj[current];
  }
  return acc;
}, {});
const getComponentsToPost = (allComponents, initialComponents, mainDataUID, isCreatingData = false) => {
  const componentsToFormat = getCreatedAndModifiedComponents(allComponents, initialComponents);
  const formattedComponents = componentsToFormat.map((compoUID) => {
    const currentCompo = (0,lodash.get)(allComponents, compoUID, {});
    const formattedComponent = formatComponent(currentCompo, mainDataUID, isCreatingData);
    return formattedComponent;
  });
  return formattedComponents;
};
const sortContentType = (types) => (0,lodash.sortBy)(
  Object.keys(types).map((uid) => ({
    visible: types[uid].schema.visible,
    name: uid,
    title: types[uid].schema.displayName,
    plugin: types[uid].plugin || null,
    uid,
    to: `/plugins/${pluginId/* default */.Z}/content-types/${uid}`,
    kind: types[uid].schema.kind,
    restrictRelationsTo: types[uid].schema.restrictRelationsTo
  })).filter((obj) => obj !== null),
  (obj) => (0,lodash.camelCase)(obj.title)
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/serverRestartWatcher.js
const SERVER_HAS_NOT_BEEN_KILLED_MESSAGE = "did-not-kill-server";
const SERVER_HAS_BEEN_KILLED_MESSAGE = "server is down";
function serverRestartWatcher(response, didShutDownServer) {
  return new Promise((resolve) => {
    fetch(`${strapi.backendURL}/_health`, {
      method: "HEAD",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Keep-Alive": false
      }
    }).then((res) => {
      if (res.status >= 400) {
        throw new Error(SERVER_HAS_BEEN_KILLED_MESSAGE);
      }
      if (!didShutDownServer) {
        throw new Error(SERVER_HAS_NOT_BEEN_KILLED_MESSAGE);
      }
      resolve(response);
    }).catch((err) => {
      setTimeout(() => {
        return serverRestartWatcher(
          response,
          err.message !== SERVER_HAS_NOT_BEEN_KILLED_MESSAGE
        ).then(resolve);
      }, 100);
    });
  });
}

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/validateSchema.js
const validateSchema = (schema) => {
  const dynamicZoneAttributes = Object.values(schema.attributes).filter(
    ({ type }) => type === "dynamiczone"
  );
  return dynamicZoneAttributes.every(
    ({ components }) => Array.isArray(components) && components.length > 0
  );
};
/* harmony default export */ const utils_validateSchema = (validateSchema);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/constants.js
var DataManagerProvider_constants = __webpack_require__(92407);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/reducer.js
var DataManagerProvider_reducer = __webpack_require__(87431);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/selectors.js



const dataManagerProviderDomain = () => (state) => state[`${pluginId/* default */.Z}_dataManagerProvider`] || DataManagerProvider_reducer/* initialState */.E;
const makeSelectDataManagerProvider = () => (0,es/* createSelector */.P1)(dataManagerProviderDomain(), (substate) => {
  return substate;
});
/* harmony default export */ const DataManagerProvider_selectors = (makeSelectDataManagerProvider);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/formatSchemas.js
var formatSchemas_defProp = Object.defineProperty;
var formatSchemas_defProps = Object.defineProperties;
var formatSchemas_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatSchemas_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatSchemas_hasOwnProp = Object.prototype.hasOwnProperty;
var formatSchemas_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatSchemas_defNormalProp = (obj, key, value) => key in obj ? formatSchemas_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatSchemas_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatSchemas_hasOwnProp.call(b, prop))
      formatSchemas_defNormalProp(a, prop, b[prop]);
  if (formatSchemas_getOwnPropSymbols)
    for (var prop of formatSchemas_getOwnPropSymbols(b)) {
      if (formatSchemas_propIsEnum.call(b, prop))
        formatSchemas_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatSchemas_spreadProps = (a, b) => formatSchemas_defProps(a, formatSchemas_getOwnPropDescs(b));
const formatSchemas = (schemas) => {
  return Object.keys(schemas).reduce((acc, current) => {
    const schema = schemas[current].schema;
    acc[current] = formatSchemas_spreadProps(formatSchemas_spreadValues({}, schemas[current]), {
      schema: formatSchemas_spreadProps(formatSchemas_spreadValues({}, schema), { attributes: toAttributesArray(schema.attributes) })
    });
    return acc;
  }, {});
};
const toAttributesArray = (attributes) => {
  return Object.keys(attributes).reduce((acc, current) => {
    acc.push(formatSchemas_spreadProps(formatSchemas_spreadValues({}, attributes[current]), { name: current }));
    return acc;
  }, []);
};
/* harmony default export */ const utils_formatSchemas = (formatSchemas);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/index.js
/* provided dependency */ var DataManagerProvider_console = __webpack_require__(25108);
var DataManagerProvider_defProp = Object.defineProperty;
var DataManagerProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DataManagerProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var DataManagerProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var DataManagerProvider_defNormalProp = (obj, key, value) => key in obj ? DataManagerProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DataManagerProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DataManagerProvider_hasOwnProp.call(b, prop))
      DataManagerProvider_defNormalProp(a, prop, b[prop]);
  if (DataManagerProvider_getOwnPropSymbols)
    for (var prop of DataManagerProvider_getOwnPropSymbols(b)) {
      if (DataManagerProvider_propIsEnum.call(b, prop))
        DataManagerProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DataManagerProvider_async = (__this, __arguments, generator) => {
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



























const DataManagerProvider = ({
  allIcons,
  children,
  components,
  contentTypes,
  isLoading,
  isLoadingForDataToBeSet,
  initialData,
  modifiedData,
  reservedNames
}) => {
  const dispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,build.useAutoReloadOverlayBlocker)();
  const { setCurrentStep } = (0,build.useGuidedTour)();
  const { getPlugin } = (0,build.useStrapiApp)();
  const { apis } = getPlugin(pluginId/* default */.Z);
  const { autoReload } = (0,build.useAppInfos)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { onCloseModal } = (0,useFormModalNavigation/* default */.Z)();
  const contentTypeMatch = (0,react_router_dom_min.useRouteMatch)(`/plugins/${pluginId/* default */.Z}/content-types/:uid`);
  const componentMatch = (0,react_router_dom_min.useRouteMatch)(
    `/plugins/${pluginId/* default */.Z}/component-categories/:categoryUid/:componentUid`
  );
  const formatMessageRef = (0,react.useRef)();
  formatMessageRef.current = formatMessage;
  const isInDevelopmentMode = autoReload;
  const isInContentTypeView = contentTypeMatch !== null;
  const firstKeyToMainSchema = isInContentTypeView ? "contentType" : "component";
  const currentUid = isInContentTypeView ? (0,lodash.get)(contentTypeMatch, "params.uid", null) : (0,lodash.get)(componentMatch, "params.componentUid", null);
  const getDataRef = (0,react.useRef)();
  const endPoint = isInContentTypeView ? "content-types" : "components";
  getDataRef.current = () => DataManagerProvider_async(void 0, null, function* () {
    try {
      const [
        {
          data: { data: componentsArray }
        },
        {
          data: { data: contentTypesArray }
        },
        { data: reservedNames2 }
      ] = yield Promise.all(
        ["components", "content-types", "reserved-names"].map((endPoint2) => {
          return axiosInstance.get(endPoint2);
        })
      );
      const components2 = utils_createDataObject(componentsArray);
      const formattedComponents = utils_formatSchemas(components2);
      const contentTypes2 = utils_createDataObject(contentTypesArray);
      const formattedContentTypes = utils_formatSchemas(contentTypes2);
      dispatch({
        type: DataManagerProvider_constants/* GET_DATA_SUCCEEDED */.Id,
        components: formattedComponents,
        contentTypes: formattedContentTypes,
        reservedNames: reservedNames2
      });
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  (0,react.useEffect)(() => {
    getDataRef.current();
    return () => {
      dispatch({ type: DataManagerProvider_constants/* RELOAD_PLUGIN */.Zl });
    };
  }, []);
  (0,react.useEffect)(() => {
    if (!isLoading && currentUid) {
      setModifiedData();
    }
  }, [isLoading, pathname, currentUid]);
  (0,react.useEffect)(() => {
    if (!autoReload) {
      toggleNotification({
        type: "info",
        message: { id: (0,getTrad/* default */.Z)("notification.info.autoreaload-disable") }
      });
    }
  }, [autoReload, toggleNotification]);
  const addAttribute = (attributeToSet, forTarget, targetUid, isEditing = false, initialAttribute, shouldAddComponentToData = false) => {
    const actionType = isEditing ? DataManagerProvider_constants/* EDIT_ATTRIBUTE */.JO : DataManagerProvider_constants/* ADD_ATTRIBUTE */.gz;
    dispatch({
      type: actionType,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute,
      shouldAddComponentToData
    });
  };
  const addCustomFieldAttribute = ({ attributeToSet, forTarget, targetUid, initialAttribute }) => {
    dispatch({
      type: DataManagerProvider_constants/* ADD_CUSTOM_FIELD_ATTRIBUTE */.Ir,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const editCustomFieldAttribute = ({ attributeToSet, forTarget, targetUid, initialAttribute }) => {
    dispatch({
      type: DataManagerProvider_constants/* EDIT_CUSTOM_FIELD_ATTRIBUTE */.Ly,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const addCreatedComponentToDynamicZone = (dynamicZoneTarget, componentsToAdd) => {
    dispatch({
      type: DataManagerProvider_constants/* ADD_CREATED_COMPONENT_TO_DYNAMIC_ZONE */.Uu,
      dynamicZoneTarget,
      componentsToAdd
    });
  };
  const createSchema = (data, schemaType, uid, componentCategory, shouldAddComponentToData = false) => {
    const type = schemaType === "contentType" ? DataManagerProvider_constants/* CREATE_SCHEMA */.Sh : DataManagerProvider_constants/* CREATE_COMPONENT_SCHEMA */.VR;
    dispatch({
      type,
      data,
      componentCategory,
      schemaType,
      uid,
      shouldAddComponentToData
    });
  };
  const changeDynamicZoneComponents = (dynamicZoneTarget, newComponents) => {
    dispatch({
      type: DataManagerProvider_constants/* CHANGE_DYNAMIC_ZONE_COMPONENTS */.o_,
      dynamicZoneTarget,
      newComponents
    });
  };
  const removeAttribute = (mainDataKey, attributeToRemoveName, componentUid = "") => {
    const type = mainDataKey === "components" ? DataManagerProvider_constants/* REMOVE_FIELD_FROM_DISPLAYED_COMPONENT */.lw : DataManagerProvider_constants/* REMOVE_FIELD */.ai;
    if (mainDataKey === "contentType") {
      trackUsage("willDeleteFieldOfContentType");
    }
    dispatch({
      type,
      mainDataKey,
      attributeToRemoveName,
      componentUid
    });
  };
  const deleteCategory = (categoryUid) => DataManagerProvider_async(void 0, null, function* () {
    try {
      const requestURL = `/component-categories/${categoryUid}`;
      const userConfirm = window.confirm(
        formatMessage({
          id: (0,getTrad/* default */.Z)("popUpWarning.bodyMessage.category.delete")
        })
      );
      onCloseModal();
      if (userConfirm) {
        lockAppWithAutoreload();
        yield axiosInstance["delete"](requestURL);
        yield serverRestartWatcher(true);
        yield unlockAppWithAutoreload();
        yield updatePermissions();
      }
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const deleteData = () => DataManagerProvider_async(void 0, null, function* () {
    try {
      const requestURL = `/${endPoint}/${currentUid}`;
      const isTemporary = (0,lodash.get)(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const userConfirm = window.confirm(
        formatMessage({
          id: (0,getTrad/* default */.Z)(
            `popUpWarning.bodyMessage.${isInContentTypeView ? "contentType" : "component"}.delete`
          )
        })
      );
      onCloseModal();
      if (userConfirm) {
        if (isTemporary) {
          dispatch({ type: DataManagerProvider_constants/* DELETE_NOT_SAVED_TYPE */.Ap });
          return;
        }
        lockAppWithAutoreload();
        yield axiosInstance["delete"](requestURL);
        yield serverRestartWatcher(true);
        yield unlockAppWithAutoreload();
        yield updatePermissions();
      }
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const editCategory = (categoryUid, body) => DataManagerProvider_async(void 0, null, function* () {
    try {
      const requestURL = `/component-categories/${categoryUid}`;
      onCloseModal();
      lockAppWithAutoreload();
      yield axiosInstance.put(requestURL, body);
      yield serverRestartWatcher(true);
      yield unlockAppWithAutoreload();
      yield updatePermissions();
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const getAllComponentsThatHaveAComponentInTheirAttributes = () => {
    const allCompos = Object.assign({}, components, modifiedData.components);
    if (!isInContentTypeView) {
      const currentEditedCompo = (0,lodash.get)(modifiedData, "component", {});
      (0,lodash.set)(allCompos, (0,lodash.get)(currentEditedCompo, ["uid"], ""), currentEditedCompo);
    }
    const composWithCompos = retrieveComponentsThatHaveComponents(allCompos);
    return (0,makeUnique/* default */.Z)(composWithCompos);
  };
  const getAllNestedComponents = () => {
    const appNestedCompo = utils_retrieveNestedComponents(components);
    const editingDataNestedCompos = utils_retrieveNestedComponents(modifiedData.components || {});
    return (0,makeUnique/* default */.Z)([...editingDataNestedCompos, ...appNestedCompo]);
  };
  const removeComponentFromDynamicZone = (dzName, componentToRemoveIndex) => {
    dispatch({
      type: DataManagerProvider_constants/* REMOVE_COMPONENT_FROM_DYNAMIC_ZONE */.NG,
      dzName,
      componentToRemoveIndex
    });
  };
  const setModifiedData = () => {
    const currentSchemas = isInContentTypeView ? contentTypes : components;
    const schemaToSet = (0,lodash.get)(currentSchemas, currentUid, {
      schema: { attributes: [] }
    });
    const retrievedComponents = (0,retrieveComponentsFromSchema/* default */.Z)(
      schemaToSet.schema.attributes,
      components
    );
    const newSchemaToSet = utils_createModifiedDataSchema(
      schemaToSet,
      retrievedComponents,
      components,
      isInContentTypeView
    );
    const hasJustCreatedSchema = (0,lodash.get)(schemaToSet, "isTemporary", false) && (0,lodash.size)((0,lodash.get)(schemaToSet, "schema.attributes", [])) === 0;
    dispatch({
      type: DataManagerProvider_constants/* SET_MODIFIED_DATA */.xx,
      schemaToSet: newSchemaToSet,
      hasJustCreatedSchema
    });
  };
  const shouldRedirect = (0,react.useMemo)(() => {
    const dataSet = isInContentTypeView ? contentTypes : components;
    if (currentUid === "create-content-type") {
      return false;
    }
    return !Object.keys(dataSet).includes(currentUid) && !isLoading;
  }, [components, contentTypes, currentUid, isInContentTypeView, isLoading]);
  const redirectEndpoint = (0,react.useMemo)(() => {
    const allowedEndpoints = Object.keys(contentTypes).filter((uid) => (0,lodash.get)(contentTypes, [uid, "schema", "visible"], true)).sort();
    return (0,lodash.get)(allowedEndpoints, "0", "create-content-type");
  }, [contentTypes]);
  if (shouldRedirect) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: `/plugins/${pluginId/* default */.Z}/content-types/${redirectEndpoint}` });
  }
  const submitData = (additionalContentTypeData) => DataManagerProvider_async(void 0, null, function* () {
    var _a, _b;
    try {
      const isCreating = (0,lodash.get)(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const body = {
        components: getComponentsToPost(
          modifiedData.components,
          components,
          currentUid,
          isCreating
        )
      };
      if (isInContentTypeView) {
        const contentType = apis.forms.mutateContentTypeSchema(
          DataManagerProvider_spreadValues(DataManagerProvider_spreadValues({}, formatMainDataType(modifiedData.contentType)), additionalContentTypeData),
          initialData.contentType
        );
        const isValidSchema = utils_validateSchema(contentType);
        if (!isValidSchema) {
          toggleNotification({
            type: "warning",
            message: {
              id: (0,getTrad/* default */.Z)("notification.error.dynamiczone-min.validation"),
              defaultMessage: "At least one component is required in a dynamic zone to be able to save a content type"
            }
          });
          return;
        }
        body.contentType = contentType;
        trackUsage("willSaveContentType");
      } else {
        body.component = formatMainDataType(modifiedData.component, true);
        trackUsage("willSaveComponent");
      }
      lockAppWithAutoreload();
      const baseURL = `/${endPoint}`;
      const requestURL = isCreating ? baseURL : `${baseURL}/${currentUid}`;
      if (isCreating) {
        yield axiosInstance.post(requestURL, body);
      } else {
        yield axiosInstance.put(requestURL, body);
      }
      yield serverRestartWatcher(true);
      yield unlockAppWithAutoreload();
      if (isCreating && (((_a = initialData.contentType) == null ? void 0 : _a.schema.kind) === "collectionType" || ((_b = initialData.contentType) == null ? void 0 : _b.schema.kind) === "singleType")) {
        setCurrentStep("contentTypeBuilder.success");
      }
      if (isInContentTypeView) {
        trackUsage("didSaveContentType");
        const oldName = (0,lodash.get)(body, ["contentType", "schema", "name"], "");
        const newName = (0,lodash.get)(initialData, ["contentType", "schema", "name"], "");
        if (!isCreating && oldName !== newName) {
          trackUsage("didEditNameOfContentType");
        }
      } else {
        trackUsage("didSaveComponent");
      }
      yield updatePermissions();
    } catch (err) {
      if (!isInContentTypeView) {
        trackUsage("didNotSaveComponent");
      }
      DataManagerProvider_console.error({ err: err.response });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const updatePermissions = () => DataManagerProvider_async(void 0, null, function* () {
    yield refetchPermissions();
  });
  const updateSchema = (data, schemaType, componentUID) => {
    dispatch({
      type: DataManagerProvider_constants/* UPDATE_SCHEMA */.bi,
      data,
      schemaType,
      uid: componentUID
    });
  };
  return /* @__PURE__ */ react.createElement(
    DataManagerContext/* default.Provider */.Z.Provider,
    {
      value: {
        addAttribute,
        addCustomFieldAttribute,
        addCreatedComponentToDynamicZone,
        allComponentsCategories: utils_retrieveSpecificInfoFromComponents(components, ["category"]),
        allIcons,
        changeDynamicZoneComponents,
        components,
        componentsGroupedByCategory: (0,lodash.groupBy)(components, "category"),
        componentsThatHaveOtherComponentInTheirAttributes: getAllComponentsThatHaveAComponentInTheirAttributes(),
        contentTypes,
        createSchema,
        deleteCategory,
        deleteData,
        editCategory,
        editCustomFieldAttribute,
        isInDevelopmentMode,
        initialData,
        isInContentTypeView,
        modifiedData,
        nestedComponents: getAllNestedComponents(),
        removeAttribute,
        removeComponentFromDynamicZone,
        reservedNames,
        setModifiedData,
        sortedContentTypesList: sortContentType(contentTypes),
        submitData,
        updateSchema
      }
    },
    isLoadingForDataToBeSet ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(react.Fragment, null, children, isInDevelopmentMode && /* @__PURE__ */ react.createElement(components_FormModal, null))
  );
};
DataManagerProvider.defaultProps = {
  components: {}
};
DataManagerProvider.propTypes = {
  allIcons: (prop_types_default()).array.isRequired,
  children: (prop_types_default()).node.isRequired,
  components: (prop_types_default()).object,
  contentTypes: (prop_types_default()).object.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  isLoadingForDataToBeSet: (prop_types_default()).bool.isRequired,
  initialData: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  reservedNames: (prop_types_default()).object.isRequired
};
const mapStateToProps = DataManagerProvider_selectors();
const withConnect = (0,lib.connect)(mapStateToProps, null);
/* harmony default export */ const components_DataManagerProvider = ((0,redux.compose)(withConnect)((0,react.memo)(DataManagerProvider)));

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/contexts/FormModalNavigationContext.js
var FormModalNavigationContext = __webpack_require__(98422);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalNavigationProvider/constants.js
const INITIAL_STATE_DATA = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  modalType: null,
  isOpen: false,
  kind: null,
  step: null,
  targetUid: null,
  customFieldUid: null
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalNavigationProvider/index.js
var FormModalNavigationProvider_defProp = Object.defineProperty;
var FormModalNavigationProvider_defProps = Object.defineProperties;
var FormModalNavigationProvider_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var FormModalNavigationProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FormModalNavigationProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var FormModalNavigationProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var FormModalNavigationProvider_defNormalProp = (obj, key, value) => key in obj ? FormModalNavigationProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FormModalNavigationProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FormModalNavigationProvider_hasOwnProp.call(b, prop))
      FormModalNavigationProvider_defNormalProp(a, prop, b[prop]);
  if (FormModalNavigationProvider_getOwnPropSymbols)
    for (var prop of FormModalNavigationProvider_getOwnPropSymbols(b)) {
      if (FormModalNavigationProvider_propIsEnum.call(b, prop))
        FormModalNavigationProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FormModalNavigationProvider_spreadProps = (a, b) => FormModalNavigationProvider_defProps(a, FormModalNavigationProvider_getOwnPropDescs(b));





const FormModalNavigationProvider = ({ children }) => {
  const [state, setFormModalNavigationState] = (0,react.useState)(INITIAL_STATE_DATA);
  const { trackUsage } = (0,build.useTracking)();
  const onClickSelectCustomField = ({ attributeType, customFieldUid }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        actionType: "create",
        modalType: "customField",
        attributeType,
        customFieldUid
      });
    });
  };
  const onClickSelectField = ({ attributeType, step }) => {
    if (state.forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldType", { type: attributeType });
    }
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        actionType: "create",
        modalType: "attribute",
        step,
        attributeType
      });
    });
  };
  const onOpenModalAddComponentsToDZ = ({ dynamicZoneTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        dynamicZoneTarget,
        targetUid,
        modalType: "addComponentToDynamicZone",
        forTarget: "contentType",
        step: "1",
        actionType: "edit",
        isOpen: true
      });
    });
  };
  const onOpenModalAddField = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        actionType: "create",
        forTarget,
        targetUid,
        modalType: "chooseAttribute",
        isOpen: true
      });
    });
  };
  const onOpenModalCreateSchema = (nextState) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues(FormModalNavigationProvider_spreadValues({}, prevState), nextState), { isOpen: true });
    });
  };
  const onOpenModalEditCategory = (categoryName) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        categoryName,
        actionType: "edit",
        modalType: "editCategory",
        isOpen: true
      });
    });
  };
  const onOpenModalEditCustomField = ({
    forTarget,
    targetUid,
    attributeName,
    attributeType,
    customFieldUid
  }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        modalType: "customField",
        customFieldUid,
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        isOpen: true
      });
    });
  };
  const onOpenModalEditField = ({ forTarget, targetUid, attributeName, attributeType, step }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        modalType: "attribute",
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        step,
        isOpen: true
      });
    });
  };
  const onOpenModalEditSchema = ({ modalType, forTarget, targetUid, kind }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        modalType,
        actionType: "edit",
        forTarget,
        targetUid,
        kind,
        isOpen: true
      });
    });
  };
  const onCloseModal = () => {
    setFormModalNavigationState(INITIAL_STATE_DATA);
  };
  const onNavigateToChooseAttributeModal = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prev) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prev), {
        forTarget,
        targetUid,
        modalType: "chooseAttribute"
      });
    });
  };
  const onNavigateToCreateComponentStep2 = () => {
    setFormModalNavigationState((prev) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prev), {
        attributeType: "component",
        modalType: "attribute",
        step: "2"
      });
    });
  };
  const onNavigateToAddCompoToDZModal = ({ dynamicZoneTarget }) => {
    setFormModalNavigationState((prev) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prev), {
        dynamicZoneTarget,
        modalType: "addComponentToDynamicZone",
        actionType: "create",
        step: "1",
        attributeType: null,
        attributeName: null
      });
    });
  };
  return /* @__PURE__ */ react.createElement(
    FormModalNavigationContext/* default.Provider */.Z.Provider,
    {
      value: FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, state), {
        onClickSelectField,
        onClickSelectCustomField,
        onCloseModal,
        onNavigateToChooseAttributeModal,
        onNavigateToAddCompoToDZModal,
        onOpenModalAddComponentsToDZ,
        onNavigateToCreateComponentStep2,
        onOpenModalAddField,
        onOpenModalCreateSchema,
        onOpenModalEditCategory,
        onOpenModalEditField,
        onOpenModalEditCustomField,
        onOpenModalEditSchema,
        setFormModalNavigationState
      })
    },
    children
  );
};
FormModalNavigationProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_FormModalNavigationProvider = (FormModalNavigationProvider);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/RecursivePath/index.js



const ListView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | content-type-builder-recursive-path */ 5905).then(__webpack_require__.bind(__webpack_require__, 8317))
);
const RecursivePath = () => {
  const { url } = (0,react_router_dom_min.useRouteMatch)();
  const { categoryUid } = (0,react_router_dom_min.useParams)();
  return /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `${url}/:componentUid` }, /* @__PURE__ */ react.createElement(ListView, { categoryId: categoryUid }))));
};
/* harmony default export */ const pages_RecursivePath = (RecursivePath);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/App/utils/icons.json
const icons_namespaceObject = JSON.parse('["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","baby","baby-carriage","backspace","backward","bacon","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","biking","binoculars","biohazard","birthday-cake","blender","blender-phone","blind","blog","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","border-all","border-none","border-style","bowling-ball","box","box-open","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-arrows-alt","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","crutch","cube","cubes","cut","database","deaf","democrat","desktop","dharmachakra","diagnoses","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","dragon","draw-polygon","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","edit","egg","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","ethernet","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fan","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","first-aid","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","ghost","gift","gifts","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","globe","globe-africa","globe-americas","globe-asia","globe-europe","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","guitar","h-square","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","history","hockey-puck","holly-berry","home","horse","horse-head","hospital","hospital-alt","hospital-symbol","hot-tub","hotdog","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","hryvnia","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","igloo","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laptop-medical","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","meteor","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mitten","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","network-wired","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","otter","outdent","pager","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","pepper-hot","percent","percentage","person-booth","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","radiation","radiation-alt","rainbow","random","receipt","record-vinyl","recycle","redo","redo-alt","registered","remove-format","reply","reply-all","republican","restroom","retweet","ribbon","ring","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","sad-cry","sad-tear","satellite","satellite-dish","save","school","screwdriver","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","sitemap","skating","skiing","skiing-nordic","skull","skull-crossbones","slash","sleigh","sliders-h","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snowboarding","snowflake","snowman","snowplow","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","spa","space-shuttle","spell-check","spider","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","temperature-high","temperature-low","tenge","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toolbox","tools","tooth","torah","torii-gate","tractor","trademark","traffic-light","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","walking","wallet","warehouse","water","wave-square","weight","weight-hanging","wheelchair","wifi","wind","window-close","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"]');
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNav.js
var SubNav = __webpack_require__(53192);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.js + 1 modules
var SubNavHeader = __webpack_require__(38702);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSections.js
var SubNavSections = __webpack_require__(34446);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.js + 1 modules
var SubNavSection = __webpack_require__(29489);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLinkSection.js








const k = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: t }) => t.colors.neutral700};
    }
  }
`, SubNavLinkSection_v = styled_components_browser_esm["default"].button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, x = styled_components_browser_esm["default"].div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, l = ({ label: t, children: p, id: s }) => {
  const [r, m] = (0,react.useState)(!0), d = (0,useId/* useId */.M)("subnav-list", s), c = () => {
    m((n) => !n);
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(k, {
    paddingLeft: 7,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(SubNavLinkSection_v, {
    onClick: c,
    "aria-expanded": r,
    "aria-controls": d
  }, /* @__PURE__ */ react.createElement(x, {
    rotated: r
  }, /* @__PURE__ */ react.createElement(CarretDown["default"], {
    "aria-hidden": !0
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 2
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    as: "span",
    fontWeight: "semiBold",
    textColor: "neutral800"
  }, t))))), r && /* @__PURE__ */ react.createElement("ul", {
    id: d
  }, react.Children.map(p, (n, u) => /* @__PURE__ */ react.createElement("li", {
    key: u
  }, n))));
};
l.defaultProps = {
  id: void 0
};
l.propTypes = {
  children: prop_types.node.isRequired,
  id: prop_types.string,
  label: prop_types.string.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLink.js
var SubNavLink = __webpack_require__(52305);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeBuilderNav/useContentTypeBuilderMenu.js
var useContentTypeBuilderMenu_defProp = Object.defineProperty;
var useContentTypeBuilderMenu_defProps = Object.defineProperties;
var useContentTypeBuilderMenu_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useContentTypeBuilderMenu_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useContentTypeBuilderMenu_hasOwnProp = Object.prototype.hasOwnProperty;
var useContentTypeBuilderMenu_propIsEnum = Object.prototype.propertyIsEnumerable;
var useContentTypeBuilderMenu_defNormalProp = (obj, key, value) => key in obj ? useContentTypeBuilderMenu_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useContentTypeBuilderMenu_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useContentTypeBuilderMenu_hasOwnProp.call(b, prop))
      useContentTypeBuilderMenu_defNormalProp(a, prop, b[prop]);
  if (useContentTypeBuilderMenu_getOwnPropSymbols)
    for (var prop of useContentTypeBuilderMenu_getOwnPropSymbols(b)) {
      if (useContentTypeBuilderMenu_propIsEnum.call(b, prop))
        useContentTypeBuilderMenu_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useContentTypeBuilderMenu_spreadProps = (a, b) => useContentTypeBuilderMenu_defProps(a, useContentTypeBuilderMenu_getOwnPropDescs(b));











const useContentTypeBuilderMenu = () => {
  const {
    components,
    componentsGroupedByCategory,
    contentTypes,
    isInDevelopmentMode,
    sortedContentTypesList,
    modifiedData,
    initialData
  } = (0,useDataManager/* default */.Z)();
  const toggleNotification = (0,build.useNotification)();
  const { trackUsage } = (0,build.useTracking)();
  const [search, setSearch] = (0,react.useState)("");
  const { onOpenModalCreateSchema, onOpenModalEditCategory } = (0,useFormModalNavigation/* default */.Z)();
  const componentsData = sortBy_default()(
    Object.keys(componentsGroupedByCategory).map((category) => ({
      name: category,
      title: category,
      isEditable: isInDevelopmentMode,
      onClickEdit(e, data2) {
        e.stopPropagation();
        if (canOpenModalCreateCTorComponent) {
          onOpenModalEditCategory(data2.name);
        } else {
          toggleNotificationCannotCreateSchema();
        }
      },
      links: sortBy_default()(
        componentsGroupedByCategory[category].map((compo) => ({
          name: compo.uid,
          to: `/plugins/${pluginId/* default */.Z}/component-categories/${category}/${compo.uid}`,
          title: compo.schema.displayName
        })),
        (obj) => obj.title
      )
    })),
    (obj) => obj.title
  );
  const canOpenModalCreateCTorComponent = !Object.keys(contentTypes).some((ct) => contentTypes[ct].isTemporary === true) && !Object.keys(components).some((component) => components[component].isTemporary === true) && isEqual_default()(modifiedData, initialData);
  const handleClickOpenModalCreateCollectionType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateContentType`);
      const nextState = {
        modalType: "contentType",
        kind: "collectionType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateSingleType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateSingleType`);
      const nextState = {
        modalType: "contentType",
        kind: "singleType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateComponent = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage("willCreateComponent");
      const nextState = {
        modalType: "component",
        kind: null,
        actionType: "create",
        forTarget: "component"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const toggleNotificationCannotCreateSchema = () => {
    toggleNotification({
      type: "info",
      message: {
        id: `${(0,getTrad/* default */.Z)("notification.info.creating.notSaved")}`,
        defaultMessage: "Please save your work before creating a new collection type or component"
      }
    });
  };
  const displayedContentTypes = sortedContentTypesList.filter((obj) => obj.visible);
  const data = [
    {
      name: "models",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.models.name")}`,
        defaultMessage: "Collection Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.model.create")}`,
        defaultMessage: "Create new collection type",
        onClick: handleClickOpenModalCreateCollectionType
      },
      links: displayedContentTypes.filter((contentType) => contentType.kind === "collectionType")
    },
    {
      name: "singleTypes",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.single-types.name")}`,
        defaultMessage: "Single Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.single-types.create")}`,
        defaultMessage: "Create new single type",
        onClick: handleClickOpenModalCreateSingleType
      },
      links: displayedContentTypes.filter((singleType) => singleType.kind === "singleType")
    },
    {
      name: "components",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.components.name")}`,
        defaultMessage: "Components"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.component.create")}`,
        defaultMessage: "Create a new component",
        onClick: handleClickOpenModalCreateComponent
      },
      links: componentsData
    }
  ];
  const matchByTitle = (links) => (0,match_sorter_cjs/* default */.ZP)(links, toLower_default()(search), { keys: [(item) => toLower_default()(item.title)] });
  const getMenu = () => {
    return data.map((section) => {
      const hasChild = section.links.some((l) => !isEmpty_default()(l.links));
      if (hasChild) {
        return useContentTypeBuilderMenu_spreadProps(useContentTypeBuilderMenu_spreadValues({}, section), {
          links: section.links.map((l) => useContentTypeBuilderMenu_spreadProps(useContentTypeBuilderMenu_spreadValues({}, l), { links: matchByTitle(l.links) }))
        });
      }
      return useContentTypeBuilderMenu_spreadProps(useContentTypeBuilderMenu_spreadValues({}, section), {
        links: matchByTitle(section.links)
      });
    });
  };
  return { menu: getMenu(), searchValue: search, onSearchChange: setSearch };
};
/* harmony default export */ const ContentTypeBuilderNav_useContentTypeBuilderMenu = (useContentTypeBuilderMenu);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeBuilderNav/index.js










const ContentTypeBuilderNav = () => {
  const { menu, searchValue, onSearchChange } = ContentTypeBuilderNav_useContentTypeBuilderMenu();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    SubNav/* SubNav */.m,
    {
      ariaLabel: formatMessage({
        id: `${(0,getTrad/* default */.Z)("plugin.name")}`,
        defaultMessage: "Content-Types Builder"
      })
    },
    /* @__PURE__ */ react.createElement(
      SubNavHeader/* SubNavHeader */.p,
      {
        searchable: true,
        value: searchValue,
        onClear: () => onSearchChange(""),
        onChange: (e) => onSearchChange(e.target.value),
        label: formatMessage({
          id: `${(0,getTrad/* default */.Z)("plugin.name")}`,
          defaultMessage: "Content-Types Builder"
        }),
        searchLabel: formatMessage({
          id: "global.search",
          defaultMessage: "Search"
        })
      }
    ),
    /* @__PURE__ */ react.createElement(SubNavSections/* SubNavSections */.Z, null, menu.map((section) => /* @__PURE__ */ react.createElement(react.Fragment, { key: section.name }, /* @__PURE__ */ react.createElement(
      SubNavSection/* SubNavSection */.D,
      {
        label: formatMessage({
          id: section.title.id,
          defaultMessage: section.title.defaultMessage
        }),
        collapsable: true,
        badgeLabel: section.links.length.toString()
      },
      section.links.map((link) => {
        if (link.links) {
          return /* @__PURE__ */ react.createElement(l, { key: link.name, label: upperFirst_default()(link.title) }, link.links.map((subLink) => /* @__PURE__ */ react.createElement(
            SubNavLink/* SubNavLink */.E,
            {
              as: react_router_dom_min.NavLink,
              to: subLink.to,
              active: subLink.active,
              key: subLink.name,
              isSubSectionChild: true
            },
            upperFirst_default()(
              formatMessage({ id: subLink.name, defaultMessage: subLink.title })
            )
          )));
        }
        return /* @__PURE__ */ react.createElement(SubNavLink/* SubNavLink */.E, { as: react_router_dom_min.NavLink, to: link.to, active: link.active, key: link.name }, upperFirst_default()(formatMessage({ id: link.name, defaultMessage: link.title })));
      })
    ), section.customLink && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 7 }, /* @__PURE__ */ react.createElement(TextButton/* TextButton */.A, { onClick: section.customLink.onClick, startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), marginTop: 2 }, formatMessage({
      id: section.customLink.id,
      defaultMessage: section.customLink.defaultMessage
    }))))))
  );
};
/* harmony default export */ const components_ContentTypeBuilderNav = (ContentTypeBuilderNav);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/App/index.js













const App_ListView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | content-type-builder-list-view */ 5905).then(__webpack_require__.bind(__webpack_require__, 8317))
);
const App = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({
    id: `${pluginId/* default */.Z}.plugin.name`,
    defaultMessage: "Content Types Builder"
  });
  const { startSection } = (0,build.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentTypeBuilder");
    }
  }, []);
  return /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.main */.Z.main }, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title }), /* @__PURE__ */ react.createElement(components_FormModalNavigationProvider, null, /* @__PURE__ */ react.createElement(components_DataManagerProvider, { allIcons: icons_namespaceObject }, /* @__PURE__ */ react.createElement(Layout/* Layout */.A, { sideNav: /* @__PURE__ */ react.createElement(components_ContentTypeBuilderNav, null) }, /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: `/plugins/${pluginId/* default */.Z}/content-types/create-content-type`,
      component: App_ListView
    }
  ), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/plugins/${pluginId/* default */.Z}/content-types/:uid`, component: App_ListView }), /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: `/plugins/${pluginId/* default */.Z}/component-categories/:categoryUid`,
      component: pages_RecursivePath
    }
  )))))));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 5002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96124);

const getTrad = (id) => `${_pluginId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 89881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816),
    createBaseEach = __webpack_require__(99291);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 23933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ 69199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881),
    isArrayLike = __webpack_require__(98612);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 99291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(98612);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 96347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsRegExp = __webpack_require__(23933),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(31167);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 39138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(80531),
    castSlice = __webpack_require__(40180),
    hasUnicode = __webpack_require__(62689),
    isObject = __webpack_require__(13218),
    isRegExp = __webpack_require__(96347),
    stringSize = __webpack_require__(88016),
    stringToArray = __webpack_require__(83140),
    toInteger = __webpack_require__(40554),
    toString = __webpack_require__(79833);

/** Used as default options for `_.truncate`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);

  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += (result.length - end);
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

module.exports = truncate;


/***/ }),

/***/ 44908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(45652);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ n),
/* harmony export */   "O": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var _strapi_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16405);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72735);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35961);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46273);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63237);
var E = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, c = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && m(e, r, t[r]);
  if (l)
    for (var r of l(t))
      d.call(t, r) && m(e, r, t[r]);
  return e;
};
var u = (e, t) => {
  var r = {};
  for (var o in e)
    s.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      t.indexOf(o) < 0 && d.call(e, o) && (r[o] = e[o]);
  return r;
};








const C = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({ theme: e }) => e.colors.neutral500};
    }
  }
  :last-of-type ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x} {
    display: none;
  }
  :last-of-type ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
    color: ${({ theme: e }) => e.colors.neutral800};
    font-weight: ${({ theme: e }) => e.fontWeights.bold};
  }
`, n = ({ children: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(C, {
  inline: !0,
  as: "li"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
  variant: "pi",
  textColor: "neutral600"
}, e), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
  "aria-hidden": !0,
  paddingLeft: 3,
  paddingRight: 3
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
n.displayName = "Crumb";
n.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6__.node.isRequired
};
const f = prop_types__WEBPACK_IMPORTED_MODULE_6__.shape({ type: prop_types__WEBPACK_IMPORTED_MODULE_6__.oneOf([n]) }), b = (o) => {
  var p = o, { children: e, label: t } = p, r = u(p, ["children", "label"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, c({}, r), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_7__/* .VisuallyHidden */ .T, null, t), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    "aria-hidden": !0
  }, e));
};
b.displayName = "Breadcrumbs";
b.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6__.arrayOf(f), f]).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_6__.string.isRequired
};



/***/ }),

/***/ 31950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ O),
  "X": () => (/* binding */ oe)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
// EXTERNAL MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
var dist = __webpack_require__(70389);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/utils.js


const utils_t = {
  Close: "Close",
  CloseSelect: "CloseSelect",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  PageDown: "PageDown",
  PageUp: "PageUp",
  Previous: "Previous",
  Select: "Select",
  Space: "Space",
  Type: "Type"
}, f = {
  Close: "Close",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  Previous: "Previous",
  Select: "Select",
  UpLevel: "UpLevel"
};
function utils_d(e = [], r = null, o = []) {
  const s = String(r != null ? r : "").toLowerCase();
  return s ? e.filter((i) => i.props.children.toString().toLowerCase().includes(s) && o.indexOf(i) < 0) : e;
}
function utils_C(e, r) {
  if (!r && e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Open;
  if (e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Next;
  if (e === keyboardKeys/* KeyboardKeys.UP */.y.UP)
    return utils_t.Previous;
  if (e === keyboardKeys/* KeyboardKeys.HOME */.y.HOME)
    return utils_t.First;
  if (e === keyboardKeys/* KeyboardKeys.END */.y.END)
    return utils_t.Last;
  if (e === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE)
    return utils_t.Close;
  if (e === keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER)
    return utils_t.CloseSelect;
  if (e === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE || e === keyboardKeys/* KeyboardKeys.CLEAR */.y.CLEAR || e.length === 1)
    return utils_t.Type;
}
function utils_S(e, r, o) {
  switch (o) {
    case utils_t.First:
      return 0;
    case utils_t.Last:
      return r;
    case utils_t.Previous:
      return Math.max(0, e - 1);
    case utils_t.Next:
      return Math.min(r, e + 1);
    default:
      return e;
  }
}
function utils_P(e) {
  (0,dist/* default */.Z)(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: o, top: s, left: i }) => {
    o.scrollTop = s, o.scrollLeft = i;
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/components.js
var components = __webpack_require__(81318);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(88533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/components.js
var Combobox_components = __webpack_require__(74020);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxList.js



const ComboboxList_o = ({ options: i, activeOptionRef: r }) => ((0,react.useEffect)(() => {
  r.current && utils_P(r.current);
}, [r]), i);
ComboboxList_o.defaultProps = {
  activeOptionRef: void 0
};
ComboboxList_o.propTypes = {
  options: prop_types.array.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js
var Le = Object.defineProperty, we = Object.defineProperties;
var $e = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable;
var W = (o, i, a) => i in o ? Le(o, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[i] = a, D = (o, i) => {
  for (var a in i || (i = {}))
    G.call(i, a) && W(o, a, i[a]);
  if (w)
    for (var a of w(i))
      J.call(i, a) && W(o, a, i[a]);
  return o;
}, F = (o, i) => we(o, $e(i));
var Q = (o, i) => {
  var a = {};
  for (var p in o)
    G.call(o, p) && i.indexOf(p) < 0 && (a[p] = o[p]);
  if (o != null && w)
    for (var p of w(o))
      i.indexOf(p) < 0 && J.call(o, p) && (a[p] = o[p]);
  return a;
};

























const O = (tt) => {
  var N = tt, {
    children: o,
    clearLabel: i,
    creatable: a,
    createMessage: p,
    disabled: u,
    error: $,
    hasMoreItems: re,
    hint: A,
    label: E,
    labelAction: ne,
    loading: R,
    loadingMessage: ae,
    noOptionsMessage: ie,
    onChange: P,
    onClear: V,
    onCreateOption: le,
    onInputChange: K,
    onLoadMore: se,
    placeholder: ce,
    required: pe,
    value: m
  } = N, de = Q(N, [
    "children",
    "clearLabel",
    "creatable",
    "createMessage",
    "disabled",
    "error",
    "hasMoreItems",
    "hint",
    "label",
    "labelAction",
    "loading",
    "loadingMessage",
    "noOptionsMessage",
    "onChange",
    "onClear",
    "onCreateOption",
    "onInputChange",
    "onLoadMore",
    "placeholder",
    "required",
    "value"
  ]);
  const fe = () => {
    var t;
    return (t = o.find((n) => {
      var l;
      return ((l = n.props) == null ? void 0 : l.value.toLowerCase()) === m.toLowerCase();
    }).props) == null ? void 0 : t.children;
  }, [c, q] = (0,react.useState)(0), [ue, me] = (0,react.useState)(null), [f, H] = (0,react.useState)(o), [g, be] = (0,react.useState)(!1), [s, M] = (0,react.useState)(""), x = (0,react.useRef)(), L = (0,react.useRef)(!1), I = (0,react.useRef)(), U = (0,react.useRef)(), ge = (0,react.useRef)(), _ = (0,react.useRef)(!0), d = (0,useId/* useId */.M)("combobox"), S = `${d}-label`;
  if (!E && !de["aria-label"])
    throw new Error('The Combobox component needs a "label" or an "aria-label" props');
  (0,react.useEffect)(() => {
    H(utils_d(o, s));
  }, [s, o]), (0,react.useEffect)(() => {
    g && x.current && utils_P(x.current);
  }, [c, g]), (0,react.useLayoutEffect)(() => {
    _.current && (_.current = !1);
  }, [m]);
  const Ce = g ? `${d}-${c}` : "", j = () => {
    P(null), M("");
  }, he = (t) => {
    K && K(t);
    const n = I.current.value;
    H(utils_d(o, n)), q(0), me(null), s !== n && M(n), g || b(!0, !1);
  }, Ee = (t) => {
    const { key: n } = t, l = a && s ? f.length : f.length - 1, v = utils_C(n, g);
    switch (m && !s && n === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE && j(), v) {
      case utils_t.Next: {
        if (c === l) {
          C(0);
          break;
        }
        C(utils_S(c, l, v));
        break;
      }
      case utils_t.Previous: {
        if (c === 0) {
          C(l);
          break;
        }
        C(utils_S(c, l, v));
        break;
      }
      case utils_t.Last:
      case utils_t.First: {
        if (c === l) {
          C(0);
          break;
        }
        C(utils_S(c, l, v));
        break;
      }
      case utils_t.CloseSelect:
        t.preventDefault(), B(c);
        break;
      case utils_t.Close:
        t.preventDefault(), b(!1);
        break;
      case utils_t.Open:
        b(!0);
        break;
    }
  }, xe = (t) => {
    if (t.preventDefault(), m && !L.current && M(""), L.current) {
      L.current = !1;
      return;
    }
    b(!1, !1);
  }, C = (t) => {
    q(t);
  }, ve = (t) => {
    C(t), B(t);
  }, z = () => {
    L.current = !0;
  }, B = (t) => {
    const n = f[t];
    if (M(""), n) {
      P(n.props.value), b(!1);
      return;
    }
    a && (le(s), b(!1));
  }, b = (t, n = !0) => {
    be(t), n && I.current.focus();
  }, ye = react.Children.toArray(f).map((t, n) => {
    const l = c === n;
    return (0,react.cloneElement)(t, {
      id: `${d}-${n}`,
      "aria-selected": ue === n,
      "aria-posinset": n + 1,
      "aria-setsize": react.Children.toArray(f).length,
      ref(v) {
        l && (x.current = v);
      },
      onClick: () => ve(n),
      onMouseDown: z,
      isSelected: l
    });
  }), Ie = () => {
    I.current.focus(), V && V(), j();
  }, ke = () => {
    I.current.focus(), b(!0);
  }, Oe = () => {
    const t = f.findIndex((n) => {
      var l;
      return ((l = n.props) == null ? void 0 : l.children) === s;
    });
    return s && t === -1;
  }, Me = (t) => {
    t.preventDefault(), b(t, !0);
  };
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, {
    hint: A,
    error: $,
    id: d
  }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, {
    "aria-live": "polite",
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, m), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: E || A || $ ? 1 : 0
  }, E && /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, {
    action: ne,
    required: pe,
    id: S
  }, E), /* @__PURE__ */ react.createElement(Combobox_components/* MainRow */.d8, {
    ref: U,
    $disabled: u,
    hasError: $
  }, /* @__PURE__ */ react.createElement(Combobox_components/* InputContainer */.fv, {
    wrap: "wrap"
  }, !s && m && /* @__PURE__ */ react.createElement(Combobox_components/* ValueContainer */.K7, {
    id: `${d}-selected-value`
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, fe())), /* @__PURE__ */ react.createElement(Combobox_components/* Input */.II, {
    "aria-activedescendant": Ce,
    "aria-autocomplete": "list",
    "aria-controls": `${d}-listbox`,
    "aria-disabled": u,
    "aria-expanded": g,
    "aria-haspopup": "listbox",
    "aria-labelledby": E ? S : void 0,
    id: d,
    onBlur: u ? void 0 : xe,
    onClick: u ? void 0 : Me,
    onInput: u ? void 0 : he,
    onKeyDown: u ? void 0 : Ee,
    placeholder: m ? "" : ce,
    readOnly: u,
    ref: I,
    role: "combobox",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "off",
    type: "text",
    value: s
  })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, (m || s) && /* @__PURE__ */ react.createElement(components/* IconBox */.zb, {
    id: `${d}-clear`,
    "aria-label": i,
    disabled: u,
    paddingLeft: 3,
    as: "button",
    onClick: Ie,
    type: "button"
  }, /* @__PURE__ */ react.createElement(Cross["default"], null)), /* @__PURE__ */ react.createElement(components/* CaretBox */.AV, {
    disabled: u,
    paddingLeft: 3,
    "aria-hidden": !0,
    as: "button",
    onClick: ke,
    tabIndex: -1,
    type: "button"
  }, /* @__PURE__ */ react.createElement(CarretDown["default"], null)))), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)), g && /* @__PURE__ */ react.createElement(Popover/* Popover */.J, {
    id: `${d}-popover`,
    source: U,
    spacing: 4,
    fullWidth: !0,
    intersectionId: `${d}-listbox-popover-intersection`,
    onReachEnd: re && !R ? se : void 0
  }, /* @__PURE__ */ react.createElement("div", {
    role: "listbox",
    ref: ge,
    id: `${d}-listbox`,
    "aria-labelledby": E ? S : void 0
  }, (Boolean(f.length) || a) && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ComboboxList_o, {
    activeOptionRef: x,
    options: ye
  }), Oe() && a && /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, {
    isSelected: c === f.length,
    ref: (t) => {
      c === f.length && (x.current = t);
    },
    onMouseDown: z,
    onClick: () => B(),
    taindex: 0
  }, p(s))), !f.length && !a && !R && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    ref: x
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    textColor: "neutral800"
  }, ie(s))), R && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, {
    small: !0
  }, ae)))));
}, oe = (o) => /* @__PURE__ */ react.createElement(O, F(D({}, o), {
  creatable: !0
}));
O.defaultProps = {
  "aria-label": void 0,
  clearLabel: "clear",
  creatable: !1,
  createMessage: (o) => `Create "${o}"`,
  disabled: !1,
  error: void 0,
  hasMoreItems: !1,
  hint: void 0,
  label: void 0,
  loading: !1,
  loadingMessage: "Loading content...",
  noOptionsMessage: () => "No results found",
  onClear: void 0,
  onCreateOption: void 0,
  onInputChange: void 0,
  onLoadMore: void 0,
  placeholder: "Select or enter a value",
  value: void 0
};
oe.defaultProps = O.defaultProps;
O.propTypes = {
  "aria-label": prop_types.string,
  children: prop_types.oneOfType([prop_types.arrayOf(prop_types.node), prop_types.node]),
  clearLabel: prop_types.string,
  creatable: prop_types.bool,
  createMessage: prop_types.func,
  disabled: prop_types.bool,
  error: prop_types.string,
  hasMoreItems: prop_types.bool,
  hint: prop_types.oneOfType([prop_types.string, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  label: prop_types.string,
  labelAction: prop_types.element,
  loading: prop_types.bool,
  loadingMessage: prop_types.string,
  noOptionsMessage: prop_types.func,
  onChange: prop_types.func.isRequired,
  onClear: prop_types.func,
  onCreateOption: prop_types.func,
  onInputChange: prop_types.func,
  onLoadMore: prop_types.func,
  placeholder: prop_types.string,
  value: prop_types.string
};
oe.propTypes = F(D({}, O.propTypes), {
  onCreateOption: prop_types.func.isRequired
});



/***/ }),

/***/ 90608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72735);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74020);
var g = Object.defineProperty;
var p = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var d = (o, r, e) => r in o ? g(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, f = (o, r) => {
  for (var e in r || (r = {}))
    m.call(r, e) && d(o, e, r[e]);
  if (p)
    for (var e of p(r))
      l.call(r, e) && d(o, e, r[e]);
  return o;
};
var u = (o, r) => {
  var e = {};
  for (var t in o)
    m.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && p)
    for (var t of p(o))
      r.indexOf(t) < 0 && l.call(o, t) && (e[t] = o[t]);
  return e;
};




const n = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((h, t) => {
  var a = h, { isSelected: o, children: r } = a, e = u(a, ["isSelected", "children"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_js__WEBPACK_IMPORTED_MODULE_1__/* .OptionBox */ .Zq, f({
    hasRadius: !0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    role: "option",
    background: "neutral0",
    isSelected: o,
    ref: t
  }, e), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
    textColor: o ? "primary600" : "neutral800",
    fontWeight: o ? "bold" : null
  }, r));
});
n.defaultProps = {
  isSelected: !1
};
n.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.string, prop_types__WEBPACK_IMPORTED_MODULE_3__.number]).isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
};
n.displayName = "ComboboxOption";



/***/ }),

/***/ 74020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ g),
/* harmony export */   "K7": () => (/* binding */ p),
/* harmony export */   "Zq": () => (/* binding */ $),
/* harmony export */   "d8": () => (/* binding */ c),
/* harmony export */   "fv": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27821);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35961);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46273);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15585);




const c = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  position: relative;
  border: 1px solid ${({ theme: o, hasError: r }) => r ? o.colors.danger600 : o.colors.neutral200};
  padding-right: ${({ theme: o }) => o.spaces[3]};
  padding-left: ${({ theme: o }) => o.spaces[3]};
  border-radius: ${({ theme: o }) => o.borderRadius};
  background: ${({ theme: o }) => o.colors.neutral0};

  ${({ theme: o, $disabled: r }) => r ? `
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  ` : void 0}

  ${(0,_themes_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .inputFocusStyle */ .k3)()}
`, p = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`, u = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`, g = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40 / 16}rem;
  border: none;
  flex: 1;
  font-size: ${14 / 16}rem;
  color: ${({ theme: o }) => o.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`, $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({ isSelected: o, theme: r }) => o && `background: ${r.colors.primary100};`}

  &:hover {
    background: ${({ theme: o }) => o.colors.primary100};
  }
`;



/***/ }),

/***/ 71818:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var h = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var l = (r, e, t) => e in r ? h(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, n = (r, e) => {
  for (var t in e || (e = {}))
    m.call(e, t) && l(r, t, e[t]);
  if (i)
    for (var t of i(e))
      w.call(e, t) && l(r, t, e[t]);
  return r;
};

function g(r) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 4 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 4,
    height: 4,
    rx: 2,
    fill: "#A5A5BA"
  }));
}



/***/ })

}]);