"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3981],{

/***/ 11063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_HomePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/corner-ornament.svg
const corner_ornament_namespaceObject = __webpack_require__.p + "7e9af4fb7e723fcebf1f.svg";
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(61931);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js
const isGuidedTourCompleted = (guidedTourState) => Object.entries(guidedTourState).every(
  ([, section]) => Object.entries(section).every(([, step]) => step)
);
/* harmony default export */ const utils_isGuidedTourCompleted = (isGuidedTourCompleted);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.js
var ArrowRight = __webpack_require__(37323);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(96392);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(89285);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(99872);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js










const StepHomepage = ({ type, title, number, content, hasLine }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { minWidth: (0,build.pxToRem)(30), marginRight: 5 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, { type, number })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      justifyContent: "center",
      minWidth: (0,build.pxToRem)(30),
      marginBottom: 3,
      marginTop: 3,
      marginRight: 5
    },
    hasLine && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type, minHeight: type === constants/* IS_ACTIVE */.lW ? (0,build.pxToRem)(85) : (0,build.pxToRem)(65) })
  ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: 2 }, type === constants/* IS_ACTIVE */.lW && content)));
};
StepHomepage.defaultProps = {
  content: void 0,
  number: void 0,
  type: constants/* IS_NOT_DONE */.VM,
  hasLine: true
};
StepHomepage.propTypes = {
  content: (prop_types_default()).node,
  number: (prop_types_default()).number,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }).isRequired,
  type: prop_types_default().oneOf([constants/* IS_ACTIVE */.lW, constants/* IS_DONE */.hx, constants/* IS_NOT_DONE */.VM]),
  hasLine: (prop_types_default()).bool
};
/* harmony default export */ const Step = (StepHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js





const getType = (activeSectionIndex, index) => {
  if (activeSectionIndex === -1) {
    return constants/* IS_DONE */.hx;
  }
  if (index < activeSectionIndex) {
    return constants/* IS_DONE */.hx;
  }
  if (index > activeSectionIndex) {
    return constants/* IS_NOT_DONE */.VM;
  }
  return constants/* IS_ACTIVE */.lW;
};
const StepperHomepage = ({ sections, currentSectionKey }) => {
  const activeSectionIndex = sections.findIndex((section) => section.key === currentSectionKey);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, sections.map((section, index) => /* @__PURE__ */ react.createElement(
    Step,
    {
      key: section.key,
      title: section.title,
      content: section.content,
      number: index + 1,
      type: getType(activeSectionIndex, index),
      hasLine: index !== sections.length - 1
    }
  )));
};
StepperHomepage.defaultProps = {
  currentSectionKey: void 0
};
StepperHomepage.propTypes = {
  sections: prop_types_default().arrayOf(
    prop_types_default().shape({
      key: (prop_types_default()).string.isRequired,
      title: prop_types_default().shape({
        id: (prop_types_default()).string,
        defaultMessage: (prop_types_default()).string
      }).isRequired,
      content: (prop_types_default()).node
    })
  ).isRequired,
  currentSectionKey: (prop_types_default()).string
};
/* harmony default export */ const Stepper = (StepperHomepage);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(64729);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/index.js
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











const GuidedTourHomepage = () => {
  var _a;
  const { guidedTourState, setSkipped } = (0,build.useGuidedTour)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const sections = Object.entries(layout/* default */.Z).map(([key, val]) => ({
    key,
    title: val.home.title,
    content: /* @__PURE__ */ react.createElement(
      build.LinkButton,
      {
        onClick: () => trackUsage(val.home.trackingEvent),
        to: val.home.cta.target,
        endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null)
      },
      formatMessage(val.home.cta.title)
    )
  }));
  const enrichedSections = sections.map((section) => __spreadValues({
    isDone: Object.entries(guidedTourState[section.key]).every(([, value]) => value)
  }, section));
  const activeSection = (_a = enrichedSections.find((section) => !section.isDone)) == null ? void 0 : _a.key;
  const handleSkip = () => {
    setSkipped(true);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 7,
      paddingRight: 4,
      paddingLeft: 7,
      paddingBottom: 4,
      background: "neutral0"
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({
      id: "app.components.GuidedTour.title",
      defaultMessage: "3 steps to get started"
    })), /* @__PURE__ */ react.createElement(Stepper, { sections, currentSectionKey: activeSection })),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: handleSkip }, formatMessage({ id: "app.components.GuidedTour.skip", defaultMessage: "Skip the tour" })))
  );
};
/* harmony default export */ const Homepage = (GuidedTourHomepage);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(80994);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.js
var Link = __webpack_require__(36182);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Github.js
var Github = __webpack_require__(57750);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Discord.js
var r = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var s = (c, e, t) => e in c ? r(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t, a = (c, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && s(c, t, e[t]);
  if (l)
    for (var t of l(e))
      n.call(e, t) && s(c, t, e[t]);
  return c;
};

function h(c) {
  return /* @__PURE__ */ react.createElement("svg", a({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c), /* @__PURE__ */ react.createElement("path", {
    d: "M20.04 0H3.96A2.464 2.464 0 001.5 2.468v16.2a2.464 2.464 0 002.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0020.04 0zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 01-3.108-.012 10.086 10.086 0 01-1.764-.515 7.053 7.053 0 01-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 01-.048-.036 4.202 4.202 0 01-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0116.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33z",
    fill: "#7289DA"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Reddit.js
var Reddit_n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, e, l) => e in a ? Reddit_n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, Reddit_i = (a, e) => {
  for (var l in e || (e = {}))
    d.call(e, l) && c(a, l, e[l]);
  if (t)
    for (var l of t(e))
      o.call(e, l) && c(a, l, e[l]);
  return a;
};

function v(a) {
  return /* @__PURE__ */ react.createElement("svg", Reddit_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92zM17.94 10.34a1.73 1.73 0 011.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 010-.524 1.662 1.662 0 01-.461-.314 1.756 1.756 0 01-.076-2.46 1.697 1.697 0 012.425-.076 8.339 8.339 0 014.584-1.467l.868-4.136v-.006a.364.364 0 01.435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 011.295 1.058 1.188 1.188 0 01-1.044 1.313 1.18 1.18 0 01-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 014.526 1.467 1.71 1.71 0 011.125-.483zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 001.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194zm2.747 5.39a4.47 4.47 0 002.904-.919v.047a.339.339 0 00.006-.47.327.327 0 00-.465-.007 3.83 3.83 0 01-2.457.726 3.802 3.802 0 01-2.446-.75.314.314 0 00-.403 0 .327.327 0 00-.044.454 4.47 4.47 0 002.905.918zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 001.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194z",
    fill: "#FF4500"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Strapi.js
var Strapi_i = Object.defineProperty;
var Strapi_c = Object.getOwnPropertySymbols;
var Strapi_n = Object.prototype.hasOwnProperty, Strapi_r = Object.prototype.propertyIsEnumerable;
var f = (l, e, t) => e in l ? Strapi_i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Strapi_h = (l, e) => {
  for (var t in e || (e = {}))
    Strapi_n.call(e, t) && f(l, t, e[t]);
  if (Strapi_c)
    for (var t of Strapi_c(e))
      Strapi_r.call(e, t) && f(l, t, e[t]);
  return l;
};

function Strapi_d(l) {
  return /* @__PURE__ */ react.createElement("svg", Strapi_h({
    width: "1em",
    height: "1em",
    viewBox: "0 0 80 80",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("path", {
    d: "M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7z",
    fill: "#4945FF"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5z",
    fill: "#fff"
  }), /* @__PURE__ */ react.createElement("path", {
    fill: "#fff",
    d: "M41.5 38h.5v.5h-.5z"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 01-.5-.5V38zM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13zM28.3 38H15.2a.3.3 0 01-.2-.5l13.3-13.2V38z",
    fill: "#9593FF"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Twitter.js
var Twitter_c = Object.defineProperty;
var Twitter_r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, Twitter_o = Object.prototype.propertyIsEnumerable;
var Twitter_i = (a, e, t) => e in a ? Twitter_c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, Twitter_l = (a, e) => {
  for (var t in e || (e = {}))
    m.call(e, t) && Twitter_i(a, t, e[t]);
  if (Twitter_r)
    for (var t of Twitter_r(e))
      Twitter_o.call(e, t) && Twitter_i(a, t, e[t]);
  return a;
};

function Twitter_f(a) {
  return /* @__PURE__ */ react.createElement("svg", Twitter_l({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    d: "M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z",
    fill: "#1DA1F2"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Discourse.js
var Discourse_m = Object.defineProperty;
var Discourse_r = Object.getOwnPropertySymbols;
var Discourse_c = Object.prototype.hasOwnProperty, Discourse_h = Object.prototype.propertyIsEnumerable;
var Discourse_i = (l, e, t) => e in l ? Discourse_m(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Discourse_n = (l, e) => {
  for (var t in e || (e = {}))
    Discourse_c.call(e, t) && Discourse_i(l, t, e[t]);
  if (Discourse_r)
    for (var t of Discourse_r(e))
      Discourse_h.call(e, t) && Discourse_i(l, t, e[t]);
  return l;
};

function Discourse_f(l) {
  return /* @__PURE__ */ react.createElement("svg", Discourse_n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("path", {
    d: "M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0z",
    fill: "#231F20"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M12.22 4.564a7.43 7.43 0 00-3.644.956 7.346 7.346 0 00-2.692 2.614 7.26 7.26 0 00-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 006.355-.14 7.36 7.36 0 002.513-2.057 7.28 7.28 0 001.372-2.93 7.243 7.243 0 00-.035-3.228A7.281 7.281 0 0017.96 7.28a7.365 7.365 0 00-2.557-2.002 7.432 7.432 0 00-3.178-.715h-.007z",
    fill: "#FFF9AE"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.071 7.426a7.262 7.262 0 011.51 4.499 7.264 7.264 0 01-1.595 4.47 7.38 7.38 0 01-4.028 2.558 7.437 7.437 0 01-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 005.181.858 7.381 7.381 0 004.443-2.778 7.258 7.258 0 00-.833-9.693z",
    fill: "#00AEEF"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M16.713 6.078a7.253 7.253 0 01.86 8.928 7.361 7.361 0 01-3.736 2.962 7.437 7.437 0 01-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 005.24.313 7.362 7.362 0 004.123-3.22 7.249 7.249 0 00.914-5.123 7.296 7.296 0 00-2.757-4.427z",
    fill: "#00A94F"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M6.176 15.515a7.246 7.246 0 01-.26-4.876 7.312 7.312 0 012.9-3.95 7.427 7.427 0 019.26.735 7.387 7.387 0 00-4.603-2.771 7.431 7.431 0 00-5.277 1.068A7.311 7.311 0 005.06 10.06a7.249 7.249 0 00.676 5.294L4.4 19.607l1.776-4.092z",
    fill: "#F15D22"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M5.735 15.353a7.25 7.25 0 01-.764-4.818 7.294 7.294 0 012.465-4.222 7.415 7.415 0 014.596-1.744 7.42 7.42 0 014.681 1.509 7.404 7.404 0 00-4.865-2.26 7.421 7.421 0 00-5.12 1.61 7.293 7.293 0 00-2.66 4.626A7.256 7.256 0 005.28 15.24l-.877 4.37 1.332-4.257z",
    fill: "#E31B23"
  }));
}


;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/SocialLinks.js
















const StyledDiscord = (0,styled_components_browser_esm["default"])(h)`
  path {
    fill: #7289da !important;
  }
`;
const StyledReddit = (0,styled_components_browser_esm["default"])(v)`
  > path:first-child {
    fill: #ff4500;
  }
`;
const StyledStrapi = (0,styled_components_browser_esm["default"])(Strapi_d)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;
const StyledTwitter = (0,styled_components_browser_esm["default"])(Twitter_f)`
  path {
    fill: #1da1f2 !important;
  }
`;
const StyledDiscourse = (0,styled_components_browser_esm["default"])(Discourse_f)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;
const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/strapi/strapi/",
    icon: /* @__PURE__ */ react.createElement(Github/* default */.Z, { fill: "#7289DA" }),
    alt: "github"
  },
  {
    name: "Discord",
    link: "https://discord.strapi.io/",
    icon: /* @__PURE__ */ react.createElement(StyledDiscord, null),
    alt: "discord"
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/r/Strapi/",
    icon: /* @__PURE__ */ react.createElement(StyledReddit, null),
    alt: "reddit"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/strapijs",
    icon: /* @__PURE__ */ react.createElement(StyledTwitter, null),
    alt: "twitter"
  },
  {
    name: "Forum",
    link: "https://forum.strapi.io",
    icon: /* @__PURE__ */ react.createElement(StyledDiscourse, null),
    alt: "forum"
  },
  {
    name: "Blog",
    link: "https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "blog"
  },
  {
    name: "We are hiring!",
    link: "https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "career"
  }
];
const LinkCustom = (0,styled_components_browser_esm["default"])(LinkButton/* LinkButton */.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;
const GridGap = (0,styled_components_browser_esm["default"])(Grid/* Grid */.r)`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;
const SocialLinks = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      as: "aside",
      "aria-labelledby": "join-the-community",
      background: "neutral0",
      hasRadius: true,
      paddingRight: 5,
      paddingLeft: 5,
      paddingTop: 6,
      paddingBottom: 6,
      shadow: "tableShadow"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 5 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2", id: "join-the-community" }, formatMessage({
      id: "app.components.HomePage.community",
      defaultMessage: "Join the community"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600" }, formatMessage({
      id: "app.components.HomePage.community.content",
      defaultMessage: "Discuss with team members, contributors and developers on different channels"
    }))), /* @__PURE__ */ react.createElement(Link/* Link */.r, { href: "https://feedback.strapi.io/", isExternal: true, endIcon: /* @__PURE__ */ react.createElement(ExternalLink["default"], null) }, formatMessage({
      id: "app.components.HomePage.roadmap",
      defaultMessage: "See our road map"
    })))),
    /* @__PURE__ */ react.createElement(GridGap, null, socialLinks.map((socialLink) => {
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12, key: socialLink.name }, /* @__PURE__ */ react.createElement(
        LinkCustom,
        {
          size: "L",
          startIcon: socialLink.icon,
          variant: "tertiary",
          href: socialLink.link,
          isExternal: true
        },
        socialLink.name
      ));
    }))
  );
};
/* harmony default export */ const HomePage_SocialLinks = (SocialLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/HomeHeader.js










const WordWrap = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  word-break: break-word;
`;
const StackCustom = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  align-items: flex-start;
`;
const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 6, paddingBottom: 10 }, /* @__PURE__ */ react.createElement(StackCustom, { spacing: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h1", variant: "alpha" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcome.again",
    defaultMessage: "Welcome \u{1F44B}"
  }) : formatMessage({
    id: "app.components.HomePage.welcome",
    defaultMessage: "Welcome on board!"
  })), /* @__PURE__ */ react.createElement(WordWrap, { textColor: "neutral600", variant: "epsilon" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcomeBlock.content.again",
    defaultMessage: "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."
  }) : formatMessage({
    id: "app.components.HomePage.welcomeBlock.content",
    defaultMessage: "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"
  })), hasCreatedContentType ? /* @__PURE__ */ react.createElement(Link/* Link */.r, { isExternal: true, href: "https://strapi.io/blog" }, formatMessage({
    id: "app.components.HomePage.button.blog",
    defaultMessage: "See more on the blog"
  })) : /* @__PURE__ */ react.createElement(Button/* Button */.z, { size: "L", onClick: onCreateCT, endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null) }, formatMessage({
    id: "app.components.HomePage.create",
    defaultMessage: "Create your first Content type"
  })))));
};
HomeHeader.defaultProps = {
  hasCreatedContentType: void 0,
  onCreateCT: void 0
};
HomeHeader.propTypes = {
  hasCreatedContentType: (prop_types_default()).bool,
  onCreateCT: (prop_types_default()).func
};
/* harmony default export */ const HomePage_HomeHeader = (HomeHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/InformationSquare.js
var InformationSquare_h = Object.defineProperty;
var InformationSquare_n = Object.getOwnPropertySymbols;
var InformationSquare_i = Object.prototype.hasOwnProperty, InformationSquare_m = Object.prototype.propertyIsEnumerable;
var InformationSquare_r = (a, e, t) => e in a ? InformationSquare_h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, InformationSquare_f = (a, e) => {
  for (var t in e || (e = {}))
    InformationSquare_i.call(e, t) && InformationSquare_r(a, t, e[t]);
  if (InformationSquare_n)
    for (var t of InformationSquare_n(e))
      InformationSquare_m.call(e, t) && InformationSquare_r(a, t, e[t]);
  return a;
};

function InformationSquare_v(a) {
  return /* @__PURE__ */ react.createElement("svg", InformationSquare_f({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    d: "M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",
    fill: "#4945FF"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 01-.474.942 1.705 1.705 0 01-.887.504 1.64 1.64 0 01-1.002-.105 1.76 1.76 0 01-.778-.678A1.924 1.924 0 0114 9.841a1.9 1.9 0 01.508-1.302c.325-.345.766-.539 1.225-.539zM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24z",
    fill: "#fff"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/CodeSquare.js
var CodeSquare_i = Object.defineProperty;
var CodeSquare_v = Object.getOwnPropertySymbols;
var CodeSquare_o = Object.prototype.hasOwnProperty, CodeSquare_r = Object.prototype.propertyIsEnumerable;
var CodeSquare_n = (t, e, l) => e in t ? CodeSquare_i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, CodeSquare_f = (t, e) => {
  for (var l in e || (e = {}))
    CodeSquare_o.call(e, l) && CodeSquare_n(t, l, e[l]);
  if (CodeSquare_v)
    for (var l of CodeSquare_v(e))
      CodeSquare_r.call(e, l) && CodeSquare_n(t, l, e[l]);
  return t;
};

function CodeSquare_m(t) {
  return /* @__PURE__ */ react.createElement("svg", CodeSquare_f({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react.createElement("path", {
    d: "M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",
    fill: "#D9822F"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373zm-2.287 0l-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912z",
    fill: "#fff"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/PlaySquare.js
var PlaySquare_r = Object.defineProperty;
var PlaySquare_n = Object.getOwnPropertySymbols;
var PlaySquare_o = Object.prototype.hasOwnProperty, PlaySquare_d = Object.prototype.propertyIsEnumerable;
var PlaySquare_f = (a, e, l) => e in a ? PlaySquare_r(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, PlaySquare_i = (a, e) => {
  for (var l in e || (e = {}))
    PlaySquare_o.call(e, l) && PlaySquare_f(a, l, e[l]);
  if (PlaySquare_n)
    for (var l of PlaySquare_n(e))
      PlaySquare_d.call(e, l) && PlaySquare_f(a, l, e[l]);
  return a;
};

function PlaySquare_h(a) {
  return /* @__PURE__ */ react.createElement("svg", PlaySquare_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    d: "M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",
    fill: "#66B7F1"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10.921a.5.5 0 01.773-.419l8.582 5.579a.5.5 0 010 .838l-8.582 5.579a.5.5 0 01-.773-.42V10.922z",
    fill: "#fff"
  }));
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/FeatherSquare.js
var FeatherSquare_n = Object.defineProperty;
var FeatherSquare_l = Object.getOwnPropertySymbols;
var FeatherSquare_h = Object.prototype.hasOwnProperty, FeatherSquare_i = Object.prototype.propertyIsEnumerable;
var FeatherSquare_r = (t, a, e) => a in t ? FeatherSquare_n(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e, FeatherSquare_f = (t, a) => {
  for (var e in a || (a = {}))
    FeatherSquare_h.call(a, e) && FeatherSquare_r(t, e, a[e]);
  if (FeatherSquare_l)
    for (var e of FeatherSquare_l(a))
      FeatherSquare_i.call(a, e) && FeatherSquare_r(t, e, a[e]);
  return t;
};

function FeatherSquare_o(t) {
  return /* @__PURE__ */ react.createElement("svg", FeatherSquare_f({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react.createElement("path", {
    d: "M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",
    fill: "#9736E8"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M18.037 11.774a28.578 28.578 0 00-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 00-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 00.017-.167.183.183 0 00-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 01.024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 00-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 01.024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 00-.057-.157.177.177 0 00-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 01-.044.018.046.046 0 01-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 00-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 01.105-.021c.097 0 .177.064.2.16a.264.264 0 01-.046.228l-2.344 1.731z",
    fill: "#fff"
  }));
}


;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/ContentBlocks.js









const BlockLink = styled_components_browser_esm["default"].a`
  text-decoration: none;
`;
const ContentBlocks = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const handleClick = (eventName) => {
    trackUsage(eventName);
  };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 5 }, /* @__PURE__ */ react.createElement(
    BlockLink,
    {
      href: "https://strapi.io/resource-center",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonReadTheDocumentationSection")
    },
    /* @__PURE__ */ react.createElement(
      build.ContentBox,
      {
        title: formatMessage({
          id: "global.documentation",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.documentation.content",
          defaultMessage: "Discover the essential concepts, guides and instructions."
        }),
        icon: /* @__PURE__ */ react.createElement(InformationSquare_v, null),
        iconBackground: "primary100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    BlockLink,
    {
      href: "https://strapi.io/starters",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonCodeExampleSection")
    },
    /* @__PURE__ */ react.createElement(
      build.ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.code",
          defaultMessage: "Code example"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.code.content",
          defaultMessage: "Learn by using ready-made starters for your projects."
        }),
        icon: /* @__PURE__ */ react.createElement(CodeSquare_m, null),
        iconBackground: "warning100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    BlockLink,
    {
      href: "https://strapi.io/blog/categories/tutorials",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonTutorialSection")
    },
    /* @__PURE__ */ react.createElement(
      build.ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.tutorial",
          defaultMessage: "Tutorials"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.tutorial.content",
          defaultMessage: "Follow step-by-step instructions to use and customize Strapi."
        }),
        icon: /* @__PURE__ */ react.createElement(PlaySquare_h, null),
        iconBackground: "secondary100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    BlockLink,
    {
      href: "https://strapi.io/blog",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonBlogSection")
    },
    /* @__PURE__ */ react.createElement(
      build.ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.blog",
          defaultMessage: "Blog"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.blog.content",
          defaultMessage: "Read the latest news about Strapi and the ecosystem."
        }),
        icon: /* @__PURE__ */ react.createElement(FeatherSquare_o, null),
        iconBackground: "alternative100"
      }
    )
  ));
};
/* harmony default export */ const HomePage_ContentBlocks = (ContentBlocks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/index.js

















const LogoContainer = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150 / 16}rem;
  }
`;
const HomePage = () => {
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = (0,hooks/* useModels */.bP)();
  const { guidedTourState, isGuidedTourVisible, isSkipped } = (0,build.useGuidedTour)();
  const showGuidedTour = !utils_isGuidedTourCompleted(guidedTourState) && isGuidedTourVisible && !isSkipped;
  const { push } = (0,react_router_dom_min.useHistory)();
  const handleClick = (e) => {
    e.preventDefault();
    push("/plugins/content-type-builder/content-types/create-content-type");
  };
  const hasAlreadyCreatedContentTypes = (0,react.useMemo)(() => {
    const filterContentTypes = (contentTypes) => contentTypes.filter((c) => c.isDisplayed);
    return filterContentTypes(collectionTypes).length > 1 || filterContentTypes(singleTypes).length > 0;
  }, [collectionTypes, singleTypes]);
  if (isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(react_intl.FormattedMessage, { id: "HomePage.helmet.title", defaultMessage: "Homepage" }, (title) => /* @__PURE__ */ react.createElement(Helmet.Helmet, { title: title[0] })), /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(LogoContainer, null, /* @__PURE__ */ react.createElement("img", { alt: "", "aria-hidden": true, src: corner_ornament_namespaceObject })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 10 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, null, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 8, s: 12 }, /* @__PURE__ */ react.createElement(
    HomePage_HomeHeader,
    {
      onCreateCT: handleClick,
      hasCreatedContentType: hasAlreadyCreatedContentTypes
    }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 8, s: 12 }, showGuidedTour ? /* @__PURE__ */ react.createElement(Homepage, null) : /* @__PURE__ */ react.createElement(HomePage_ContentBlocks, null)), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 4, s: 12 }, /* @__PURE__ */ react.createElement(HomePage_SocialLinks, null))))));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));


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

/***/ 57750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var m = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var n = (i, e, t) => e in i ? m(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, r = (i, e) => {
  for (var t in e || (e = {}))
    o.call(e, t) && n(i, t, e[t]);
  if (l)
    for (var t of l(e))
      c.call(e, t) && n(i, t, e[t]);
  return i;
};

function w(i) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", r({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, i), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0112 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0z",
    fill: "#161614"
  }));
}



/***/ })

}]);