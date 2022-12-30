"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5516],{

/***/ 82679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MarketPlacePage": () => (/* binding */ MarketPlacePage),
  "default": () => (/* binding */ MarketplacePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.js
var Searchbar = __webpack_require__(49123);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 2 modules
var Tabs = __webpack_require__(60633);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/GridLayout.js


const i = styled_components_browser_esm["default"].div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: r }) => r.spaces[4]};
`;
i.propTypes = {
  children: prop_types.node.isRequired
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/EmptyNpmPackageSearch/EmptyNpmPackageGrid.js




const EmptyPluginCard = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyNpmPackageGrid = () => {
  return /* @__PURE__ */ react.createElement(i, null, Array(12).fill(null).map((_, idx) => /* @__PURE__ */ react.createElement(
    EmptyPluginCard,
    {
      key: `empty-plugin-card-${idx}`,
      height: "234px",
      hasRadius: true
    }
  )));
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/EmptyNpmPackageSearch/index.js








const EmptyNpmPackageSearch = ({ content }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative" }, /* @__PURE__ */ react.createElement(EmptyNpmPackageGrid, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "absolute", top: 11, width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", justifyContent: "center", direction: "column" }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: EmptyDocuments["default"], color: "", width: "160px", height: "88px" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "p", textColor: "neutral600" }, content)))));
};
EmptyNpmPackageSearch.propTypes = {
  content: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_EmptyNpmPackageSearch = (EmptyNpmPackageSearch);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(80994);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Upload.js
var Upload_i = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? Upload_i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, o = (t, e) => {
  for (var l in e || (e = {}))
    d.call(e, l) && n(t, l, e[l]);
  if (a)
    for (var l of a(e))
      r.call(e, l) && n(t, l, e[l]);
  return t;
};

function c(t) {
  return /* @__PURE__ */ react.createElement("svg", o({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.571 18.272H10.43v-8.47H2.487a.2.2 0 01-.14-.343L11.858.058a.2.2 0 01.282 0l9.513 9.4a.2.2 0 01-.14.343H13.57v8.47zM2.2 21.095a.2.2 0 00-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 00.2-.2v-2.424a.2.2 0 00-.2-.2H2.2z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/PageHeader/index.js







const PageHeader = ({ isOnline, npmPackageType }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const tracking = npmPackageType === "provider" ? "didSubmitProvider" : "didSubmitPlugin";
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: "global.marketplace",
        defaultMessage: "Marketplace"
      }),
      subtitle: formatMessage({
        id: "admin.pages.MarketPlacePage.subtitle",
        defaultMessage: "Get more out of Strapi"
      }),
      primaryAction: isOnline && /* @__PURE__ */ react.createElement(
        LinkButton/* LinkButton */.Q,
        {
          startIcon: /* @__PURE__ */ react.createElement(c, null),
          variant: "tertiary",
          href: `https://market.strapi.io/submit-${npmPackageType}`,
          onClick: () => trackUsage(tracking),
          isExternal: true
        },
        formatMessage({
          id: `admin.pages.MarketPlacePage.submit.${npmPackageType}.link`,
          defaultMessage: `Submit ${npmPackageType}`
        })
      )
    }
  );
};
/* harmony default export */ const components_PageHeader = (PageHeader);
PageHeader.defaultProps = {
  npmPackageType: "plugin"
};
PageHeader.propTypes = {
  isOnline: (prop_types_default()).bool.isRequired,
  npmPackageType: (prop_types_default()).string
};

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplaceProviders/utils/api.js
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

const MARKETPLACE_API_URL = "https://market-api.strapi.io";
const fetchMarketplaceProviders = (..._0) => __async(void 0, [..._0], function* (params = {}) {
  const { data } = yield axios_default().get(`${MARKETPLACE_API_URL}/providers`, {
    params
  });
  return data;
});


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplaceProviders/index.js



const useFetchMarketplaceProviders = (notifyLoad, params) => {
  const toggleNotification = (0,build.useNotification)();
  return (0,lib.useQuery)(["list-marketplace-providers", params], () => fetchMarketplaceProviders(params), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const hooks_useFetchMarketplaceProviders = (useFetchMarketplaceProviders);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplacePlugins/utils/api.js
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

const api_MARKETPLACE_API_URL = "https://market-api.strapi.io";
const fetchMarketplacePlugins = (..._0) => api_async(void 0, [..._0], function* (params = {}) {
  const { data: response } = yield axios_default().get(`${api_MARKETPLACE_API_URL}/plugins`, {
    params
  });
  const filteredResponse = __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((plugin) => plugin.attributes.strapiCompatibility === "v4")
  });
  return filteredResponse;
});


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplacePlugins/index.js



const useFetchMarketplacePlugins = (notifyLoad, params) => {
  const toggleNotification = (0,build.useNotification)();
  return (0,lib.useQuery)(["list-marketplace-plugins", params], () => fetchMarketplacePlugins(params), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const hooks_useFetchMarketplacePlugins = (useFetchMarketplacePlugins);

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/icon_offline-cloud.svg
const icon_offline_cloud_namespaceObject = __webpack_require__.p + "9d5d788027e86620c234.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useNavigatorOnLine/index.js

const useNavigatorOnLine = () => {
  const onlineStatus = typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
  const [isOnline, setIsOnline] = (0,react.useState)(onlineStatus);
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);
  (0,react.useEffect)(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
};
/* harmony default export */ const hooks_useNavigatorOnLine = (useNavigatorOnLine);

;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/GlassesSquare.js
var GlassesSquare_r = Object.defineProperty;
var GlassesSquare_n = Object.getOwnPropertySymbols;
var GlassesSquare_o = Object.prototype.hasOwnProperty, GlassesSquare_d = Object.prototype.propertyIsEnumerable;
var f = (l, e, t) => e in l ? GlassesSquare_r(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, GlassesSquare_i = (l, e) => {
  for (var t in e || (e = {}))
    GlassesSquare_o.call(e, t) && f(l, t, e[t]);
  if (GlassesSquare_n)
    for (var t of GlassesSquare_n(e))
      GlassesSquare_d.call(e, t) && f(l, t, e[t]);
  return l;
};

function s(l) {
  return /* @__PURE__ */ react.createElement("svg", GlassesSquare_i({
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("path", {
    d: "M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",
    fill: "#AC73E6"
  }), /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0z",
    fill: "#fff"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(17772);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/MissingPluginBanner/index.js






const MissingPluginBanner = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  return /* @__PURE__ */ react.createElement(
    "a",
    {
      href: "https://strapi.canny.io/plugin-requests",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      style: { textDecoration: "none" },
      onClick: () => trackUsage("didMissMarketplacePlugin")
    },
    /* @__PURE__ */ react.createElement(
      build.ContentBox,
      {
        title: formatMessage({
          id: "admin.pages.MarketPlacePage.missingPlugin.title",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "admin.pages.MarketPlacePage.missingPlugin.description",
          defaultMessage: "Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"
        }),
        icon: /* @__PURE__ */ react.createElement(s, null),
        iconBackground: "alternative100",
        endAction: /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: ExternalLink["default"], color: "neutral600", width: 3, height: 3, marginLeft: 2 })
      }
    )
  );
};
/* harmony default export */ const components_MissingPluginBanner = (MissingPluginBanner);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(23450);
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(84495);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CheckCircle.js
var CheckCircle = __webpack_require__(86783);
// EXTERNAL MODULE: ./.cache/admin/src/assets/images/logo-strapi-2022.svg
var logo_strapi_2022 = __webpack_require__(61473);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(81249);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.js
var Duplicate = __webpack_require__(65186);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/CardButton.js








const TooltipButton = ({ description, installMessage, disabled, handleCopy, pluginName }) => /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { "data-testid": `tooltip-${pluginName}`, description }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
  Button/* Button */.z,
  {
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null),
    variant: "secondary",
    disabled,
    onClick: handleCopy
  },
  installMessage
)));
const CardButton = ({ strapiPeerDepVersion, strapiAppVersion, handleCopy, pluginName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const versionRange = semver_default().validRange(strapiPeerDepVersion);
  const isCompatible = semver_default().satisfies(strapiAppVersion, versionRange);
  const installMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.copy",
    defaultMessage: "Copy install command"
  });
  if (strapiAppVersion) {
    if (!versionRange) {
      return /* @__PURE__ */ react.createElement(
        TooltipButton,
        {
          installMessage,
          pluginName,
          description: formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version.null",
              defaultMessage: 'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'
            },
            { strapiAppVersion }
          ),
          handleCopy
        }
      );
    }
    if (!isCompatible) {
      return /* @__PURE__ */ react.createElement(
        TooltipButton,
        {
          installMessage,
          pluginName,
          description: formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version",
              defaultMessage: 'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'
            },
            {
              strapiAppVersion,
              versionRange
            }
          ),
          disabled: true
        }
      );
    }
  }
  return /* @__PURE__ */ react.createElement(Button/* Button */.z, { size: "S", startIcon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null), variant: "secondary", onClick: handleCopy }, installMessage);
};
TooltipButton.defaultProps = {
  disabled: false,
  handleCopy: null
};
TooltipButton.propTypes = {
  description: (prop_types_default()).string.isRequired,
  installMessage: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  handleCopy: (prop_types_default()).func,
  pluginName: (prop_types_default()).string.isRequired
};
CardButton.defaultProps = {
  strapiAppVersion: null,
  strapiPeerDepVersion: null
};
CardButton.propTypes = {
  strapiAppVersion: (prop_types_default()).string,
  strapiPeerDepVersion: (prop_types_default()).string,
  handleCopy: (prop_types_default()).func.isRequired,
  pluginName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_CardButton = (CardButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/InstallPluginButton.js









const InstallPluginButton = ({
  isInstalled,
  isInDevelopmentMode,
  commandToCopy,
  strapiAppVersion,
  strapiPeerDepVersion,
  pluginName
}) => {
  const toggleNotification = (0,build.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const handleCopy = () => {
    navigator.clipboard.writeText(commandToCopy);
    trackUsage("willInstallPlugin");
    toggleNotification({
      type: "success",
      message: { id: "admin.pages.MarketPlacePage.plugin.copy.success" }
    });
  };
  if (isInstalled) {
    return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: Check/* default */.Z, marginRight: 2, width: 12, height: 12, color: "success600" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega", textColor: "success600", fontWeight: "bold" }, formatMessage({
      id: "admin.pages.MarketPlacePage.plugin.installed",
      defaultMessage: "Installed"
    })));
  }
  if (isInDevelopmentMode) {
    return /* @__PURE__ */ react.createElement(
      NpmPackageCard_CardButton,
      {
        strapiAppVersion,
        strapiPeerDepVersion,
        handleCopy,
        pluginName
      }
    );
  }
  return null;
};
InstallPluginButton.defaultProps = {
  strapiAppVersion: null,
  strapiPeerDepVersion: null
};
InstallPluginButton.propTypes = {
  isInstalled: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool.isRequired,
  commandToCopy: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string,
  strapiPeerDepVersion: (prop_types_default()).string,
  pluginName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_InstallPluginButton = (InstallPluginButton);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Github.js
var Github = __webpack_require__(57750);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Download.js
var Download = __webpack_require__(7217);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Star.js
var m = Object.defineProperty;
var Star_r = Object.getOwnPropertySymbols;
var Star_o = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var Star_a = (l, e, t) => e in l ? m(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Star_n = (l, e) => {
  for (var t in e || (e = {}))
    Star_o.call(e, t) && Star_a(l, t, e[t]);
  if (Star_r)
    for (var t of Star_r(e))
      w.call(e, t) && Star_a(l, t, e[t]);
  return l;
};

function g(l) {
  return /* @__PURE__ */ react.createElement("svg", Star_n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react.createElement("path", {
    d: "M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z",
    fill: "#212134"
  }));
}


;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/PackageStats.js












const VerticalDivider = (0,styled_components_browser_esm["default"])(Divider/* Divider */.i)`
  width: ${(0,build.pxToRem)(12)};
  transform: rotate(90deg);
`;
const PackageStats = ({ githubStars, npmDownloads, npmPackageType }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 1 }, !!githubStars && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: Github/* default */.Z, height: (0,build.pxToRem)(12), width: (0,build.pxToRem)(12), "aria-hidden": true }), /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: g, height: (0,build.pxToRem)(12), width: (0,build.pxToRem)(12), color: "warning500", "aria-hidden": true }), /* @__PURE__ */ react.createElement(
    "p",
    {
      "aria-label": formatMessage(
        {
          id: `admin.pages.MarketPlacePage.${npmPackageType}.githubStars`,
          defaultMessage: `This {package} was starred {starsCount} on GitHub`
        },
        {
          starsCount: githubStars,
          package: npmPackageType
        }
      )
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral800", lineHeight: 16 }, githubStars)
  ), /* @__PURE__ */ react.createElement(VerticalDivider, { unsetMargin: false, background: "neutral200" })), /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: Download/* default */.Z, height: (0,build.pxToRem)(12), width: (0,build.pxToRem)(12), "aria-hidden": true }), /* @__PURE__ */ react.createElement(
    "p",
    {
      "aria-label": formatMessage(
        {
          id: `admin.pages.MarketPlacePage.${npmPackageType}.downloads`,
          defaultMessage: `This {package} has {downloadsCount} weekly downloads`
        },
        {
          downloadsCount: npmDownloads,
          package: npmPackageType
        }
      )
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral800", lineHeight: 16 }, npmDownloads)
  ));
};
PackageStats.defaultProps = {
  githubStars: 0,
  npmDownloads: 0
};
PackageStats.propTypes = {
  githubStars: (prop_types_default()).number,
  npmDownloads: (prop_types_default()).number,
  npmPackageType: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_PackageStats = (PackageStats);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/index.js


















const EllipsisText = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`;
const NpmPackageCard = ({
  npmPackage,
  isInstalled,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion
}) => {
  const { attributes } = npmPackage;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const commandToCopy = useYarn ? `yarn add ${attributes.npmPackageName}` : `npm install ${attributes.npmPackageName}`;
  const madeByStrapiMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",
    defaultMessage: "Made by Strapi"
  });
  const npmPackageHref = `https://market.strapi.io/${pluralize_default().plural(npmPackageType)}/${attributes.slug}`;
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      justifyContent: "space-between",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      height: "100%",
      alignItems: "normal",
      "data-testid": "npm-package-card"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "row", justifyContent: "space-between", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        as: "img",
        src: attributes.logo.url,
        alt: `${attributes.name} logo`,
        hasRadius: true,
        width: 11,
        height: 11
      }
    ), /* @__PURE__ */ react.createElement(
      NpmPackageCard_PackageStats,
      {
        githubStars: attributes.githubStars,
        npmDownloads: attributes.npmDownloads,
        npmPackageType
      }
    )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h3", variant: "delta" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center" }, attributes.name, attributes.validated && !attributes.madeByStrapi && /* @__PURE__ */ react.createElement(
      Tooltip/* Tooltip */.u,
      {
        description: formatMessage({
          id: "admin.pages.MarketPlacePage.plugin.tooltip.verified",
          defaultMessage: "Plugin verified by Strapi"
        })
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: CheckCircle["default"], marginLeft: 2, color: "success600" }))
    ), attributes.madeByStrapi && /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: madeByStrapiMessage }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        as: "img",
        src: logo_strapi_2022,
        alt: madeByStrapiMessage,
        marginLeft: 1,
        width: 6,
        height: "auto"
      }
    )))))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(EllipsisText, { as: "p", variant: "omega", textColor: "neutral600" }, attributes.description))),
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2, style: { alignSelf: "flex-end" }, paddingTop: 6 }, /* @__PURE__ */ react.createElement(
      LinkButton/* LinkButton */.Q,
      {
        size: "S",
        href: npmPackageHref,
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink["default"], null),
        "aria-label": formatMessage(
          {
            id: "admin.pages.MarketPlacePage.plugin.info.label",
            defaultMessage: "Learn more about {pluginName}"
          },
          { pluginName: attributes.name }
        ),
        variant: "tertiary",
        onClick: () => trackUsage("didPluginLearnMore")
      },
      formatMessage({
        id: "admin.pages.MarketPlacePage.plugin.info.text",
        defaultMessage: "More"
      })
    ), /* @__PURE__ */ react.createElement(
      NpmPackageCard_InstallPluginButton,
      {
        isInstalled,
        isInDevelopmentMode,
        commandToCopy,
        strapiAppVersion,
        strapiPeerDepVersion: attributes.strapiVersion,
        pluginName: attributes.name
      }
    ))
  );
};
NpmPackageCard.defaultProps = {
  isInDevelopmentMode: false,
  strapiAppVersion: null
};
NpmPackageCard.propTypes = {
  npmPackage: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    attributes: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      description: (prop_types_default()).string.isRequired,
      slug: (prop_types_default()).string.isRequired,
      npmPackageName: (prop_types_default()).string.isRequired,
      npmPackageUrl: (prop_types_default()).string.isRequired,
      repositoryUrl: (prop_types_default()).string.isRequired,
      logo: (prop_types_default()).object.isRequired,
      developerName: (prop_types_default()).string.isRequired,
      validated: (prop_types_default()).bool.isRequired,
      madeByStrapi: (prop_types_default()).bool.isRequired,
      strapiCompatibility: prop_types_default().oneOf(["v3", "v4"]),
      strapiVersion: (prop_types_default()).string,
      githubStars: (prop_types_default()).number,
      npmDownloads: (prop_types_default()).number
    }).isRequired
  }).isRequired,
  isInstalled: (prop_types_default()).bool.isRequired,
  useYarn: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool,
  npmPackageType: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string
};
/* harmony default export */ const components_NpmPackageCard = (NpmPackageCard);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesGrid/index.js




const NpmPackagesGrid = ({
  npmPackages,
  installedPackageNames,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion
}) => {
  const isAlreadyInstalled = (0,react.useCallback)(
    (npmPackageName) => installedPackageNames.includes(npmPackageName),
    [installedPackageNames]
  );
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, npmPackages.map((npmPackage) => /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 4, s: 6, xs: 12, style: { height: "100%" }, key: npmPackage.id }, /* @__PURE__ */ react.createElement(
    components_NpmPackageCard,
    {
      npmPackage,
      isInstalled: isAlreadyInstalled(npmPackage.attributes.npmPackageName),
      useYarn,
      isInDevelopmentMode,
      npmPackageType,
      strapiAppVersion
    }
  ))));
};
NpmPackagesGrid.defaultProps = {
  installedPackageNames: [],
  strapiAppVersion: null
};
NpmPackagesGrid.propTypes = {
  npmPackages: (prop_types_default()).array.isRequired,
  installedPackageNames: prop_types_default().arrayOf((prop_types_default()).string),
  useYarn: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool.isRequired,
  npmPackageType: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string
};
/* harmony default export */ const components_NpmPackagesGrid = (NpmPackagesGrid);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/SortSelect/index.js






const SelectWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  span {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`;
const SortSelect = ({ sortQuery, handleSelectChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const sortTypes = {
    "name:asc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.alphabetical.selected",
        defaultMessage: "Sort by alphabetical order"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.alphabetical",
        defaultMessage: "Alphabetical order"
      }
    },
    "submissionDate:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.newest.selected",
        defaultMessage: "Sort by newest"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.newest",
        defaultMessage: "Newest"
      }
    },
    "githubStars:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.githubStars.selected",
        defaultMessage: "Sort by GitHub stars"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.githubStars",
        defaultMessage: "Number of GitHub stars"
      }
    },
    "npmDownloads:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.npmDownloads.selected",
        defaultMessage: "Sort by npm downloads"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.npmDownloads",
        defaultMessage: "Number of downloads"
      }
    }
  };
  return /* @__PURE__ */ react.createElement(SelectWrapper, null, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      size: "S",
      id: "sort-by-select",
      value: sortQuery,
      customizeContent: () => formatMessage(sortTypes[sortQuery].selected),
      onChange: (sortName) => {
        handleSelectChange({ sort: sortName });
      }
    },
    Object.entries(sortTypes).map(([sortName, messages]) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: sortName, value: sortName }, formatMessage(messages.option));
    })
  ));
};
SortSelect.propTypes = {
  sortQuery: (prop_types_default()).string.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_SortSelect = (SortSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tag/Tag.js
var Tag = __webpack_require__(72775);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.js
var Filter = __webpack_require__(89597);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(88533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.js
var FocusTrap = __webpack_require__(25896);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/FilterSelect.js



const FilterSelect = ({ message, value, onChange, possibleFilters, onClear, customizeContent }) => {
  const computeFilterMessage = (filterName, count) => {
    return `${filterName} (${count})`;
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      "data-testid": `${message}-button`,
      "aria-label": message,
      placeholder: message,
      size: "M",
      onChange,
      onClear,
      value,
      customizeContent,
      multi: true
    },
    Object.entries(possibleFilters).map(([filterName, count]) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { "data-testid": `${filterName}-${count}`, key: filterName, value: filterName }, computeFilterMessage(filterName, count));
    })
  );
};
FilterSelect.propTypes = {
  message: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  possibleFilters: (prop_types_default()).object.isRequired,
  onClear: (prop_types_default()).func.isRequired,
  customizeContent: (prop_types_default()).func.isRequired
};
/* harmony default export */ const NpmPackagesFilters_FilterSelect = (FilterSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/FiltersPopover.js








const FiltersPopover = ({
  source,
  onToggle,
  query,
  npmPackageType,
  possibleCategories,
  possibleCollections,
  handleSelectChange,
  handleSelectClear
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Popover/* Popover */.J, { source, padding: 3, spacing: 4, onBlur: () => {
  } }, /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.i, { onEscape: onToggle }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FilterSelect,
    {
      message: formatMessage({
        id: "admin.pages.MarketPlacePage.filters.collections",
        defaultMessage: "Collections"
      }),
      value: (query == null ? void 0 : query.collections) || [],
      onChange: (newCollections) => {
        const update = { collections: newCollections };
        handleSelectChange(update);
      },
      onClear: () => handleSelectClear("collections"),
      possibleFilters: possibleCollections,
      customizeContent: (values) => formatMessage(
        {
          id: "admin.pages.MarketPlacePage.filters.collectionsSelected",
          defaultMessage: "{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"
        },
        { count: values.length }
      )
    }
  )), npmPackageType === "plugin" && /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FilterSelect,
    {
      message: formatMessage({
        id: "admin.pages.MarketPlacePage.filters.categories",
        defaultMessage: "Categories"
      }),
      value: (query == null ? void 0 : query.categories) || [],
      onChange: (newCategories) => {
        const update = { categories: newCategories };
        handleSelectChange(update);
      },
      onClear: () => handleSelectClear("categories"),
      possibleFilters: possibleCategories,
      customizeContent: (values) => formatMessage(
        {
          id: "admin.pages.MarketPlacePage.filters.categoriesSelected",
          defaultMessage: "{count, plural, =0 {No categories} one {# category} other {# categories}} selected"
        },
        { count: values.length }
      ),
      name: "categories"
    }
  )))));
};
FiltersPopover.propTypes = {
  onToggle: (prop_types_default()).func.isRequired,
  source: prop_types_default().shape({ current: prop_types_default().instanceOf(Element) }).isRequired,
  query: (prop_types_default()).object.isRequired,
  npmPackageType: prop_types_default().oneOf(["plugin", "provider"]).isRequired,
  possibleCollections: (prop_types_default()).object.isRequired,
  possibleCategories: (prop_types_default()).object.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired,
  handleSelectClear: (prop_types_default()).func.isRequired
};
/* harmony default export */ const NpmPackagesFilters_FiltersPopover = (FiltersPopover);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/index.js










const FilterTag = ({ name, handleRemove }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 1 }, /* @__PURE__ */ react.createElement(Tag/* Tag */.V, { icon: /* @__PURE__ */ react.createElement(Cross["default"], null), onClick: handleRemove }, name));
};
const ButtonToggle = (0,styled_components_browser_esm["default"])(Button/* Button */.z)`
  height: ${({ theme }) => theme.sizes.input.S};
`;
const NpmPackagesFilters = ({
  possibleCollections,
  possibleCategories,
  npmPackageType,
  query,
  handleSelectClear,
  handleSelectChange
}) => {
  var _a, _b;
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const buttonRef = (0,react.useRef)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleToggle = () => setIsVisible((prev) => !prev);
  const handleTagRemove = (tagToRemove, filterType) => {
    const update = {
      [filterType]: query[filterType].filter((previousTag) => previousTag !== tagToRemove)
    };
    handleSelectChange(update);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
    ButtonToggle,
    {
      variant: "tertiary",
      ref: buttonRef,
      "data-testid": "filters-button",
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.Z, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FiltersPopover,
    {
      onToggle: handleToggle,
      source: buttonRef,
      query,
      handleSelectClear,
      handleSelectChange,
      possibleCollections,
      possibleCategories,
      npmPackageType
    }
  )), (_a = query.collections) == null ? void 0 : _a.map((collection) => /* @__PURE__ */ react.createElement(
    FilterTag,
    {
      name: collection,
      key: collection,
      handleRemove: () => handleTagRemove(collection, "collections")
    }
  )), npmPackageType === "plugin" && ((_b = query.categories) == null ? void 0 : _b.map((category) => /* @__PURE__ */ react.createElement(
    FilterTag,
    {
      name: category,
      key: category,
      handleRemove: () => handleTagRemove(category, "categories")
    }
  ))));
};
FilterTag.propTypes = {
  name: (prop_types_default()).string.isRequired,
  handleRemove: (prop_types_default()).func.isRequired
};
NpmPackagesFilters.propTypes = {
  npmPackageType: prop_types_default().oneOf(["plugin", "provider"]).isRequired,
  possibleCollections: (prop_types_default()).object.isRequired,
  possibleCategories: (prop_types_default()).object.isRequired,
  query: (prop_types_default()).object.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired,
  handleSelectClear: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_NpmPackagesFilters = (NpmPackagesFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/index.js
var MarketplacePage_defProp = Object.defineProperty;
var MarketplacePage_defProps = Object.defineProperties;
var MarketplacePage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MarketplacePage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MarketplacePage_hasOwnProp = Object.prototype.hasOwnProperty;
var MarketplacePage_propIsEnum = Object.prototype.propertyIsEnumerable;
var MarketplacePage_defNormalProp = (obj, key, value) => key in obj ? MarketplacePage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MarketplacePage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MarketplacePage_hasOwnProp.call(b, prop))
      MarketplacePage_defNormalProp(a, prop, b[prop]);
  if (MarketplacePage_getOwnPropSymbols)
    for (var prop of MarketplacePage_getOwnPropSymbols(b)) {
      if (MarketplacePage_propIsEnum.call(b, prop))
        MarketplacePage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MarketplacePage_spreadProps = (a, b) => MarketplacePage_defProps(a, MarketplacePage_getOwnPropDescs(b));
























const matchSearch = (npmPackages, search) => {
  return (0,match_sorter_cjs/* default */.ZP)(npmPackages, search, {
    keys: [
      {
        threshold: match_sorter_cjs/* default.rankings.WORD_STARTS_WITH */.ZP.rankings.WORD_STARTS_WITH,
        key: "attributes.name"
      },
      { threshold: match_sorter_cjs/* default.rankings.WORD_STARTS_WITH */.ZP.rankings.WORD_STARTS_WITH, key: "attributes.description" }
    ],
    baseSort: (a, b) => a.index < b.index ? -1 : 1
  });
};
const MarketPlacePage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const toggleNotification = (0,build.useNotification)();
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [{ query }, setQuery] = (0,build.useQueryParams)();
  const { autoReload: isInDevelopmentMode, dependencies, useYarn, strapiVersion } = (0,build.useAppInfos)();
  const isOnline = hooks_useNavigatorOnLine();
  const npmPackageType = (query == null ? void 0 : query.npmPackageType) || "plugin";
  const [tabQuery, setTabQuery] = (0,react.useState)({
    plugin: npmPackageType === "plugin" ? MarketplacePage_spreadValues({}, query) : {},
    provider: npmPackageType === "provider" ? MarketplacePage_spreadValues({}, query) : {}
  });
  (0,build.useFocusWhenNavigate)();
  const marketplaceTitle = formatMessage({
    id: "global.marketplace",
    defaultMessage: "Marketplace"
  });
  const notifyMarketplaceLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: marketplaceTitle }
      )
    );
  };
  const { status: marketplaceProvidersStatus, data: marketplaceProvidersResponse } = hooks_useFetchMarketplaceProviders(notifyMarketplaceLoad, tabQuery.provider);
  const { status: marketplacePluginsStatus, data: marketplacePluginsResponse } = hooks_useFetchMarketplacePlugins(notifyMarketplaceLoad, tabQuery.plugin);
  const isLoading = [marketplacePluginsStatus, marketplaceProvidersStatus].includes("loading");
  const hasFailed = [marketplacePluginsStatus, marketplaceProvidersStatus].includes("error");
  (0,react.useEffect)(() => {
    trackUsageRef.current("didGoToMarketplace");
  }, []);
  (0,react.useEffect)(() => {
    if (!isInDevelopmentMode) {
      toggleNotification({
        type: "info",
        message: {
          id: "admin.pages.MarketPlacePage.production",
          defaultMessage: "Manage plugins from the development environment"
        },
        blockTransition: true
      });
    }
  }, [toggleNotification, isInDevelopmentMode]);
  if (!isOnline) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(components_PageHeader, { isOnline }), /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        width: "100%",
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        style: { paddingTop: "120px" }
      },
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral700", variant: "alpha" }, formatMessage({
        id: "admin.pages.MarketPlacePage.offline.title",
        defaultMessage: "You are offline"
      }))),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral700", variant: "epsilon" }, formatMessage({
        id: "admin.pages.MarketPlacePage.offline.subtitle",
        defaultMessage: "You need to be connected to the Internet to access Strapi Market."
      }))),
      /* @__PURE__ */ react.createElement("img", { src: icon_offline_cloud_namespaceObject, alt: "offline", style: { width: "88px", height: "88px" } })
    )));
  }
  if (hasFailed) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(build.AnErrorOccurred, null))));
  }
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": true }, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  const pluginSearchResults = matchSearch(marketplacePluginsResponse.data, searchQuery);
  const providerSearchResults = matchSearch(marketplaceProvidersResponse.data, searchQuery);
  const emptySearchMessage = formatMessage(
    {
      id: "admin.pages.MarketPlacePage.search.empty",
      defaultMessage: 'No result for "{target}"'
    },
    { target: searchQuery }
  );
  const handleTabChange = (selected) => {
    const selectedTab = selected === 0 ? "plugin" : "provider";
    const hasTabQuery = tabQuery[selectedTab] && Object.keys(tabQuery[selectedTab]).length;
    if (hasTabQuery) {
      setQuery(MarketplacePage_spreadProps(MarketplacePage_spreadValues({}, tabQuery[selectedTab]), { npmPackageType: selectedTab }));
    } else {
      setQuery({
        npmPackageType: selectedTab,
        collections: [],
        categories: [],
        sort: "name:asc"
      });
    }
  };
  const handleSelectChange = (update) => {
    setQuery(update);
    setTabQuery((prev) => MarketplacePage_spreadProps(MarketplacePage_spreadValues({}, prev), {
      [npmPackageType]: MarketplacePage_spreadValues(MarketplacePage_spreadValues({}, prev[npmPackageType]), update)
    }));
  };
  const handleSelectClear = (filterType) => {
    setQuery({ [filterType]: [] }, "remove");
    setTabQuery((prev) => MarketplacePage_spreadProps(MarketplacePage_spreadValues({}, prev), { [npmPackageType]: {} }));
  };
  const installedPackageNames = Object.keys(dependencies);
  const possibleCollections = npmPackageType === "plugin" ? marketplacePluginsResponse.meta.collections : marketplaceProvidersResponse.meta.collections;
  const possibleCategories = marketplacePluginsResponse.meta.categories;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(
    Helmet.Helmet,
    {
      title: formatMessage({
        id: "admin.pages.MarketPlacePage.helmet",
        defaultMessage: "Marketplace - Plugins"
      })
    }
  ), /* @__PURE__ */ react.createElement(components_PageHeader, { isOnline, npmPackageType }), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { width: "25%", paddingBottom: 4 }, /* @__PURE__ */ react.createElement(
    Searchbar/* Searchbar */.w,
    {
      name: "searchbar",
      onClear: () => setSearchQuery(""),
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      clearLabel: formatMessage({
        id: "admin.pages.MarketPlacePage.search.clear",
        defaultMessage: "Clear the search"
      }),
      placeholder: formatMessage({
        id: "admin.pages.MarketPlacePage.search.placeholder",
        defaultMessage: "Search"
      })
    },
    formatMessage({
      id: "admin.pages.MarketPlacePage.search.placeholder",
      defaultMessage: "Search"
    })
  )), /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: formatMessage({
        id: "admin.pages.MarketPlacePage.tab-group.label",
        defaultMessage: "Plugins and Providers for Strapi"
      }),
      id: "tabs",
      variant: "simple",
      initialSelectedTabIndex: ["plugin", "provider"].indexOf(npmPackageType),
      onTabChange: handleTabChange
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
      id: "admin.pages.MarketPlacePage.plugins",
      defaultMessage: "Plugins"
    }), " ", "(", pluginSearchResults.length, ")"), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
      id: "admin.pages.MarketPlacePage.providers",
      defaultMessage: "Providers"
    }), " ", "(", providerSearchResults.length, ")"))),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingBottom: 4, gap: 2 }, /* @__PURE__ */ react.createElement(
      components_SortSelect,
      {
        sortQuery: (query == null ? void 0 : query.sort) || "name:asc",
        handleSelectChange
      }
    ), /* @__PURE__ */ react.createElement(
      components_NpmPackagesFilters,
      {
        npmPackageType,
        possibleCollections,
        possibleCategories,
        query: query || {},
        handleSelectChange,
        handleSelectClear
      }
    )),
    /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, searchQuery.length > 0 && !pluginSearchResults.length ? /* @__PURE__ */ react.createElement(components_EmptyNpmPackageSearch, { content: emptySearchMessage }) : /* @__PURE__ */ react.createElement(
      components_NpmPackagesGrid,
      {
        npmPackages: pluginSearchResults,
        installedPackageNames,
        useYarn,
        isInDevelopmentMode,
        npmPackageType: "plugin",
        strapiAppVersion: strapiVersion
      }
    )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, searchQuery.length > 0 && !providerSearchResults.length ? /* @__PURE__ */ react.createElement(components_EmptyNpmPackageSearch, { content: emptySearchMessage }) : /* @__PURE__ */ react.createElement(
      components_NpmPackagesGrid,
      {
        npmPackages: providerSearchResults,
        installedPackageNames,
        useYarn,
        isInDevelopmentMode,
        npmPackageType: "provider"
      }
    )))
  ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7 }, /* @__PURE__ */ react.createElement(components_MissingPluginBanner, null)))));
};
const ProtectedMarketPlace = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.marketplace.main */.Z.marketplace.main }, /* @__PURE__ */ react.createElement(MarketPlacePage, null));

/* harmony default export */ const MarketplacePage = (ProtectedMarketPlace);


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