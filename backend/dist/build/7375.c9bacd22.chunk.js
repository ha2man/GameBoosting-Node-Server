"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[7375],{

/***/ 67375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(47292);
// EXTERNAL MODULE: ./node_modules/date-fns/locale/index.js
var locale = __webpack_require__(73825);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/getDateOfExpiration.js


const getDateOfExpiration = (createdAt, duration, language = "en") => {
  if (duration && typeof duration === "number") {
    const durationInDays = duration / 24 / 60 / 60 / 1e3;
    return (0,date_fns.format)((0,date_fns.addDays)(new Date(createdAt), durationInDays), "PPP", {
      locale: locale[language]
    });
  }
  return "Unlimited";
};
/* harmony default export */ const utils_getDateOfExpiration = (getDateOfExpiration);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(build.translatedErrors.string).required(build.translatedErrors.required),
  type: yup_lib/* string */.Z_(build.translatedErrors.string).oneOf(["read-only", "full-access", "custom"]).required(build.translatedErrors.required),
  description: yup_lib/* string */.Z_().nullable(),
  lifespan: yup_lib/* number */.Rx().integer().min(0).nullable().defined(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/transformPermissionsData.js

const transformPermissionsData = (data) => {
  const layout = {
    allActionsIds: [],
    permissions: []
  };
  layout.permissions = Object.keys(data).map((apiId) => ({
    apiId,
    label: apiId.split("::")[1],
    controllers: (0,lodash.flatten)(
      Object.keys(data[apiId].controllers).map((controller) => ({
        controller,
        actions: (0,lodash.flatten)(
          data[apiId].controllers[controller].map((action) => {
            const actionId = `${apiId}.${controller}.${action}`;
            if (apiId.includes("api::")) {
              layout.allActionsIds.push(actionId);
            }
            return {
              action,
              actionId
            };
          })
        )
      }))
    )
  }));
  return layout;
};
/* harmony default export */ const utils_transformPermissionsData = (transformPermissionsData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js





// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/LoadingView/index.js








const LoadingView = ({ apiTokenName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: apiTokenName || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
};
LoadingView.defaultProps = {
  apiTokenName: null
};
LoadingView.propTypes = {
  apiTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.js
var Refresh = __webpack_require__(30815);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(61931);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/Regenerate/index.js
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







const Regenerate = ({ onRegenerate, idToRegenerate }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { regenerateData, isLoadingConfirmation } = (0,hooks/* useRegenerate */.rW)(idToRegenerate, onRegenerate);
  const handleConfirmRegeneration = () => __async(void 0, null, function* () {
    regenerateData();
    setShowConfirmDialog(false);
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      startIcon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
      type: "button",
      size: "S",
      variant: "tertiary",
      onClick: () => setShowConfirmDialog(true),
      name: "regenerate"
    },
    formatMessage({
      id: "Settings.apiTokens.regenerate",
      defaultMessage: "Regenerate"
    })
  ), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      bodyText: {
        id: "Settings.apiTokens.popUpWarning.message",
        defaultMessage: "Are you sure you want to regenerate this token?"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
      isConfirmButtonLoading: isLoadingConfirmation,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRegeneration,
      leftButtonText: {
        id: "Settings.apiTokens.Button.cancel",
        defaultMessage: "Cancel"
      },
      rightButtonText: {
        id: "Settings.apiTokens.Button.regenerate",
        defaultMessage: "Regenerate"
      },
      title: {
        id: "Settings.apiTokens.RegenerateDialog.title",
        defaultMessage: "Regenerate token"
      }
    }
  ));
};
Regenerate.defaultProps = { onRegenerate() {
} };
Regenerate.propTypes = {
  onRegenerate: (prop_types_default()).func,
  idToRegenerate: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired
};
/* harmony default export */ const components_Regenerate = (Regenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormHead/index.js
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










const FormHead = ({ apiToken, setApiToken, canEditInputs, canRegenerate, isSubmitting }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleRegenerate = (newKey) => {
    setApiToken(__spreadProps(__spreadValues({}, apiToken), {
      accessKey: newKey
    }));
  };
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: (apiToken == null ? void 0 : apiToken.name) || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      }),
      primaryAction: canEditInputs ? /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, canRegenerate && (apiToken == null ? void 0 : apiToken.id) && /* @__PURE__ */ react.createElement(components_Regenerate, { onRegenerate: handleRegenerate, idToRegenerate: apiToken == null ? void 0 : apiToken.id }), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          disabled: isSubmitting,
          loading: isSubmitting,
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          type: "submit",
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )) : canRegenerate && (apiToken == null ? void 0 : apiToken.id) && /* @__PURE__ */ react.createElement(components_Regenerate, { onRegenerate: handleRegenerate, idToRegenerate: apiToken == null ? void 0 : apiToken.id }),
      navigationAction: /* @__PURE__ */ react.createElement(build.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/api-tokens" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  );
};
FormHead.propTypes = {
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  canEditInputs: (prop_types_default()).bool.isRequired,
  canRegenerate: (prop_types_default()).bool.isRequired,
  setApiToken: (prop_types_default()).func.isRequired,
  isSubmitting: (prop_types_default()).bool.isRequired
};
FormHead.defaultProps = {
  apiToken: void 0
};
/* harmony default export */ const components_FormHead = (FormHead);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.js
var Duplicate = __webpack_require__(65186);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var react_copy_to_clipboard_lib = __webpack_require__(74855);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Key.js
var Key = __webpack_require__(69427);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContentBox/index.js








const HeaderContentBox = ({ apiToken }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const { trackUsage } = (0,build.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  return /* @__PURE__ */ react.createElement(
    build.ContentBox,
    {
      endAction: apiToken && /* @__PURE__ */ react.createElement("span", { style: { alignSelf: "start" } }, /* @__PURE__ */ react.createElement(
        react_copy_to_clipboard_lib.CopyToClipboard,
        {
          onCopy: () => {
            trackUsageRef.current("didCopyTokenKey");
            toggleNotification({
              type: "success",
              message: { id: "Settings.apiTokens.notification.copied" }
            });
          },
          text: apiToken
        },
        /* @__PURE__ */ react.createElement(
          IconButton/* IconButton */.h,
          {
            label: formatMessage({
              id: "app.component.CopyToClipboard.label",
              defaultMessage: "Copy to clipboard"
            }),
            noBorder: true,
            icon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null),
            style: { padding: 0, height: "1rem" }
          }
        )
      )),
      title: apiToken || formatMessage({
        id: "Settings.apiTokens.copy.editTitle",
        defaultMessage: "This token isn\u2019t accessible anymore."
      }),
      subtitle: apiToken ? formatMessage({
        id: "Settings.apiTokens.copy.lastWarning",
        defaultMessage: "Make sure to copy this token, you won\u2019t be able to see it again!"
      }) : formatMessage({
        id: "Settings.apiTokens.copy.editMessage",
        defaultMessage: "For security reasons, you can only see your token once."
      }),
      icon: /* @__PURE__ */ react.createElement(Key/* default */.Z, null),
      iconBackground: "neutral100"
    }
  );
};
HeaderContentBox.defaultProps = {
  apiToken: null
};
HeaderContentBox.propTypes = {
  apiToken: (prop_types_default()).string
};
/* harmony default export */ const ContentBox = (HeaderContentBox);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js + 1 modules
var Textarea = __webpack_require__(64256);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormApiTokenContainer/index.js












const FormApiTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  apiToken,
  onDispatch,
  setHasChangedPermissions
}) => {
  var _a, _b, _c, _d;
  const { formatMessage } = (0,react_intl.useIntl)();
  const [lang] = (0,build.usePersistentState)("strapi-admin-language", "en");
  const handleChangeSelectApiTokenType = ({ target: { value } }) => {
    setHasChangedPermissions(false);
    if (value === "full-access") {
      onDispatch({
        type: "SELECT_ALL_ACTIONS"
      });
    }
    if (value === "read-only") {
      onDispatch({
        type: "ON_CHANGE_READ_ONLY"
      });
    }
  };
  return /* @__PURE__ */ react.createElement(
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
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "name", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "name",
        error: errors.name ? formatMessage(
          ((_a = errors.name) == null ? void 0 : _a.id) ? errors.name : { id: errors.name, defaultMessage: errors.name }
        ) : null,
        label: formatMessage({
          id: "Settings.apiTokens.form.name",
          defaultMessage: "Name"
        }),
        onChange,
        value: values.name,
        disabled: !canEditInputs,
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "description", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      Textarea/* Textarea */.g,
      {
        label: formatMessage({
          id: "Settings.apiTokens.form.description",
          defaultMessage: "Description"
        }),
        name: "description",
        error: errors.description ? formatMessage(
          ((_b = errors.description) == null ? void 0 : _b.id) ? errors.description : {
            id: errors.description,
            defaultMessage: errors.description
          }
        ) : null,
        onChange,
        disabled: !canEditInputs
      },
      values.description
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "lifespan", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        name: "lifespan",
        label: formatMessage({
          id: "Settings.apiTokens.form.duration",
          defaultMessage: "Token duration"
        }),
        value: values.lifespan !== null ? values.lifespan : "0",
        error: errors.lifespan ? formatMessage(
          ((_c = errors.lifespan) == null ? void 0 : _c.id) ? errors.lifespan : { id: errors.lifespan, defaultMessage: errors.lifespan }
        ) : null,
        onChange: (value) => {
          onChange({ target: { name: "lifespan", value } });
        },
        required: true,
        disabled: !isCreating,
        placeholder: "Select"
      },
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "604800000" }, formatMessage({
        id: "Settings.apiTokens.duration.7-days",
        defaultMessage: "7 days"
      })),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "2592000000" }, formatMessage({
        id: "Settings.apiTokens.duration.30-days",
        defaultMessage: "30 days"
      })),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "7776000000" }, formatMessage({
        id: "Settings.apiTokens.duration.90-days",
        defaultMessage: "90 days"
      })),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "0" }, formatMessage({
        id: "Settings.apiTokens.duration.unlimited",
        defaultMessage: "Unlimited"
      }))
    ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, !isCreating && `${formatMessage({
      id: "Settings.apiTokens.duration.expiration-date",
      defaultMessage: "Expiration date"
    })}: ${utils_getDateOfExpiration(
      apiToken == null ? void 0 : apiToken.createdAt,
      parseInt(values.lifespan, 10),
      lang
    )}`)), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "type", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        name: "type",
        label: formatMessage({
          id: "Settings.apiTokens.form.type",
          defaultMessage: "Token type"
        }),
        value: values == null ? void 0 : values.type,
        error: errors.type ? formatMessage(
          ((_d = errors.type) == null ? void 0 : _d.id) ? errors.type : { id: errors.type, defaultMessage: errors.type }
        ) : null,
        onChange: (value) => {
          handleChangeSelectApiTokenType({ target: { value } });
          onChange({ target: { name: "type", value } });
        },
        placeholder: "Select",
        required: true,
        disabled: !canEditInputs
      },
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "read-only" }, formatMessage({
        id: "Settings.apiTokens.types.read-only",
        defaultMessage: "Read-only"
      })),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "full-access" }, formatMessage({
        id: "Settings.apiTokens.types.full-access",
        defaultMessage: "Full access"
      })),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "custom" }, formatMessage({
        id: "Settings.apiTokens.types.custom",
        defaultMessage: "Custom"
      }))
    ))))
  );
};
FormApiTokenContainer.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  onDispatch: (prop_types_default()).func.isRequired,
  setHasChangedPermissions: (prop_types_default()).func.isRequired
};
FormApiTokenContainer.defaultProps = {
  errors: {},
  apiToken: {}
};
/* harmony default export */ const components_FormApiTokenContainer = (FormApiTokenContainer);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.js
var Cog = __webpack_require__(78114);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
;// CONCATENATED MODULE: ./.cache/admin/src/contexts/ApiTokenPermissions/index.js
var ApiTokenPermissions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ApiTokenPermissions_hasOwnProp = Object.prototype.hasOwnProperty;
var ApiTokenPermissions_propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ApiTokenPermissions_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ApiTokenPermissions_getOwnPropSymbols)
    for (var prop of ApiTokenPermissions_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ApiTokenPermissions_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


const ApiTokenPermissionsContext = (0,react.createContext)({});
const ApiTokenPermissionsContextProvider = (_a) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContext.Provider, { value: rest }, children);
};
const useApiTokenPermissionsContext = () => (0,react.useContext)(ApiTokenPermissionsContext);
ApiTokenPermissionsContextProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/CheckBoxWrapper.js


const activeCheckboxWrapperStyles = styled_components_browser_esm.css`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const CheckBoxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/index.js













const Border = styled_components_browser_esm["default"].div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CollapsableContentType = ({
  controllers,
  label,
  orderNumber,
  disabled,
  onExpanded,
  indexExpandendCollapsedContent
}) => {
  const {
    value: { onChangeSelectAll, onChange, selectedActions, setSelectedAction, selectedAction }
  } = useApiTokenPermissionsContext();
  const [expanded, setExpanded] = (0,react.useState)(false);
  const handleExpandedAccordion = () => {
    setExpanded((s) => !s);
    onExpanded(orderNumber);
  };
  (0,react.useEffect)(() => {
    if (indexExpandendCollapsedContent !== null && indexExpandendCollapsedContent !== orderNumber && expanded) {
      setExpanded(false);
    }
  }, [indexExpandendCollapsedContent, orderNumber, expanded]);
  const isActionSelected = (actionId) => actionId === selectedAction;
  return /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded,
      onToggle: handleExpandedAccordion,
      variant: orderNumber % 2 ? "primary" : "secondary"
    },
    /* @__PURE__ */ react.createElement(AccordionToggle/* AccordionToggle */.B, { title: (0,lodash.capitalize)(label) }),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, controllers == null ? void 0 : controllers.map((controller) => {
      const allActionsSelected = controller.actions.every(
        (action) => selectedActions.includes(action.actionId)
      );
      const someActionsSelected = controller.actions.some(
        (action) => selectedActions.includes(action.actionId)
      );
      return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: `${label}.${controller == null ? void 0 : controller.controller}` }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "center", padding: 4 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, controller == null ? void 0 : controller.controller)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
        Checkbox/* Checkbox */.X,
        {
          value: allActionsSelected,
          indeterminate: !allActionsSelected && someActionsSelected,
          onValueChange: () => {
            onChangeSelectAll({ target: { value: [...controller.actions] } });
          },
          disabled
        },
        "Select all"
      ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, padding: 4 }, (controller == null ? void 0 : controller.actions) && (controller == null ? void 0 : controller.actions.map((action) => {
        return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: action.actionId }, /* @__PURE__ */ react.createElement(
          CheckBoxWrapper,
          {
            isActive: isActionSelected(action.actionId),
            padding: 2,
            hasRadius: true
          },
          /* @__PURE__ */ react.createElement(
            Checkbox/* Checkbox */.X,
            {
              value: selectedActions.includes(action.actionId),
              name: action.actionId,
              onValueChange: () => {
                onChange({ target: { value: action.actionId } });
              },
              disabled
            },
            action.action
          ),
          /* @__PURE__ */ react.createElement(
            "button",
            {
              type: "button",
              "data-testid": "action-cog",
              onClick: () => setSelectedAction({ target: { value: action.actionId } }),
              style: { display: "inline-flex", alignItems: "center" }
            },
            /* @__PURE__ */ react.createElement(Cog/* default */.Z, null)
          )
        ));
      }))));
    }))
  );
};
CollapsableContentType.defaultProps = {
  controllers: [],
  orderNumber: 0,
  disabled: false,
  onExpanded: () => null,
  indexExpandendCollapsedContent: null
};
CollapsableContentType.propTypes = {
  controllers: (prop_types_default()).array,
  orderNumber: (prop_types_default()).number,
  label: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  onExpanded: (prop_types_default()).func,
  indexExpandendCollapsedContent: (prop_types_default()).number
};
/* harmony default export */ const components_CollapsableContentType = (CollapsableContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContenTypesSection/index.js
var ContenTypesSection_defProp = Object.defineProperty;
var ContenTypesSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ContenTypesSection_hasOwnProp = Object.prototype.hasOwnProperty;
var ContenTypesSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var ContenTypesSection_defNormalProp = (obj, key, value) => key in obj ? ContenTypesSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ContenTypesSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ContenTypesSection_hasOwnProp.call(b, prop))
      ContenTypesSection_defNormalProp(a, prop, b[prop]);
  if (ContenTypesSection_getOwnPropSymbols)
    for (var prop of ContenTypesSection_getOwnPropSymbols(b)) {
      if (ContenTypesSection_propIsEnum.call(b, prop))
        ContenTypesSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ContenTypesSection_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ContenTypesSection_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ContenTypesSection_getOwnPropSymbols)
    for (var prop of ContenTypesSection_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ContenTypesSection_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const ContentTypesSection = (_a) => {
  var _b = _a, { section } = _b, props = ContenTypesSection_objRest(_b, ["section"]);
  const [indexExpandedCollpsedContent, setIndexExpandedCollpsedContent] = (0,react.useState)(null);
  const handleExpandedCollpsedContentIndex = (index) => setIndexExpandedCollpsedContent(index);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, background: "neutral0" }, section && section.map((api, index) => /* @__PURE__ */ react.createElement(
    components_CollapsableContentType,
    ContenTypesSection_spreadValues({
      key: api.apiId,
      label: api.label,
      controllers: api.controllers,
      orderNumber: index,
      indexExpandendCollapsedContent: indexExpandedCollpsedContent,
      onExpanded: handleExpandedCollpsedContentIndex,
      name: api.apiId
    }, props)
  )));
};
ContentTypesSection.defaultProps = {
  section: null
};
ContentTypesSection.propTypes = {
  section: prop_types_default().arrayOf((prop_types_default()).object)
};
/* harmony default export */ const ContenTypesSection = (ContentTypesSection);

// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(35161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(13217);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/index.js










const MethodBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
    id: "Settings.apiTokens.createPage.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, hasRadius: true, background: "neutral0", borderColor: "neutral200", spacing: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ActionBoundRoutes/index.js







const ActionBoundRoutes = () => {
  var _a;
  const {
    value: { selectedAction, routes }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,react_intl.useIntl)();
  const actionSection = selectedAction == null ? void 0 : selectedAction.split(".")[0];
  return /* @__PURE__ */ react.createElement(
    GridItem/* GridItem */.P,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, (_a = routes[actionSection]) == null ? void 0 : _a.map((route) => {
      var _a2, _b;
      return ((_b = (_a2 = route.config.auth) == null ? void 0 : _a2.scope) == null ? void 0 : _b.includes(selectedAction)) || route.handler === selectedAction ? /* @__PURE__ */ react.createElement(components_BoundRoute, { key: route.handler, route }) : null;
    })) : /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_ActionBoundRoutes = (ActionBoundRoutes);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/Permissions/index.js
var Permissions_defProp = Object.defineProperty;
var Permissions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Permissions_hasOwnProp = Object.prototype.hasOwnProperty;
var Permissions_propIsEnum = Object.prototype.propertyIsEnumerable;
var Permissions_defNormalProp = (obj, key, value) => key in obj ? Permissions_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Permissions_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Permissions_hasOwnProp.call(b, prop))
      Permissions_defNormalProp(a, prop, b[prop]);
  if (Permissions_getOwnPropSymbols)
    for (var prop of Permissions_getOwnPropSymbols(b)) {
      if (Permissions_propIsEnum.call(b, prop))
        Permissions_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Permissions_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Permissions_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Permissions_getOwnPropSymbols)
    for (var prop of Permissions_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Permissions_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








const Permissions = (_a) => {
  var props = Permissions_objRest(_a, []);
  const {
    value: { data }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.title",
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.description",
    defaultMessage: "Only actions bound by a route are listed below."
  }))), (data == null ? void 0 : data.permissions) && /* @__PURE__ */ react.createElement(ContenTypesSection, Permissions_spreadValues({ section: data == null ? void 0 : data.permissions }, props))), /* @__PURE__ */ react.createElement(components_ActionBoundRoutes, null));
};
/* harmony default export */ const components_Permissions = ((0,react.memo)(Permissions));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormBody/index.js







const FormBody = ({
  apiToken,
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  onDispatch,
  setHasChangedPermissions
}) => {
  return /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, Boolean(apiToken == null ? void 0 : apiToken.name) && /* @__PURE__ */ react.createElement(ContentBox, { apiToken: apiToken == null ? void 0 : apiToken.accessKey }), /* @__PURE__ */ react.createElement(
    components_FormApiTokenContainer,
    {
      errors,
      onChange,
      canEditInputs,
      isCreating,
      values,
      apiToken,
      onDispatch,
      setHasChangedPermissions
    }
  ), /* @__PURE__ */ react.createElement(
    components_Permissions,
    {
      disabled: !canEditInputs || (values == null ? void 0 : values.type) === "read-only" || (values == null ? void 0 : values.type) === "full-access"
    }
  )));
};
FormBody.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }).isRequired,
  onDispatch: (prop_types_default()).func.isRequired,
  setHasChangedPermissions: (prop_types_default()).func.isRequired
};
FormBody.defaultProps = {
  errors: {},
  apiToken: {}
};
/* harmony default export */ const components_FormBody = (FormBody);

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/init.js
var init_defProp = Object.defineProperty;
var init_defProps = Object.defineProperties;
var init_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var init_hasOwnProp = Object.prototype.hasOwnProperty;
var init_propIsEnum = Object.prototype.propertyIsEnumerable;
var init_defNormalProp = (obj, key, value) => key in obj ? init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (init_hasOwnProp.call(b, prop))
      init_defNormalProp(a, prop, b[prop]);
  if (init_getOwnPropSymbols)
    for (var prop of init_getOwnPropSymbols(b)) {
      if (init_propIsEnum.call(b, prop))
        init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var init_spreadProps = (a, b) => init_defProps(a, init_getOwnPropDescs(b));

const init = (state, permissions = []) => {
  return init_spreadProps(init_spreadValues({}, state), {
    selectedAction: null,
    routes: [],
    selectedActions: [],
    data: utils_transformPermissionsData(permissions)
  });
};
/* harmony default export */ const EditView_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/reducer.js
var reducer_defProp = Object.defineProperty;
var reducer_getOwnPropSymbols = Object.getOwnPropertySymbols;
var reducer_hasOwnProp = Object.prototype.hasOwnProperty;
var reducer_propIsEnum = Object.prototype.propertyIsEnumerable;
var reducer_defNormalProp = (obj, key, value) => key in obj ? reducer_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var reducer_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (reducer_hasOwnProp.call(b, prop))
      reducer_defNormalProp(a, prop, b[prop]);
  if (reducer_getOwnPropSymbols)
    for (var prop of reducer_getOwnPropSymbols(b)) {
      if (reducer_propIsEnum.call(b, prop))
        reducer_defNormalProp(a, prop, b[prop]);
    }
  return a;
};



const initialState = {
  data: {},
  selectedActions: []
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      if (draftState.selectedActions.includes(action.value)) {
        (0,lodash.pull)(draftState.selectedActions, action.value);
      } else {
        draftState.selectedActions.push(action.value);
      }
      break;
    }
    case "SELECT_ALL_IN_PERMISSION": {
      const areAllSelected = action.value.every(
        (item) => draftState.selectedActions.includes(item.actionId)
      );
      if (areAllSelected) {
        action.value.forEach((item) => {
          (0,lodash.pull)(draftState.selectedActions, item.actionId);
        });
      } else {
        action.value.forEach((item) => {
          draftState.selectedActions.push(item.actionId);
        });
      }
      break;
    }
    case "SELECT_ALL_ACTIONS": {
      draftState.selectedActions = [...draftState.data.allActionsIds];
      break;
    }
    case "ON_CHANGE_READ_ONLY": {
      const onlyReadOnlyActions = draftState.data.allActionsIds.filter(
        (actionId) => actionId.includes("find") || actionId.includes("findOne")
      );
      draftState.selectedActions = [...onlyReadOnlyActions];
      break;
    }
    case "UPDATE_PERMISSIONS_LAYOUT": {
      draftState.data = utils_transformPermissionsData(action.value);
      break;
    }
    case "UPDATE_ROUTES": {
      draftState.routes = reducer_spreadValues({}, action.value);
      break;
    }
    case "UPDATE_PERMISSIONS": {
      draftState.selectedActions = [...action.value];
      break;
    }
    case "SET_SELECTED_ACTION": {
      draftState.selectedAction = action.value;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const EditView_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/index.js
var EditView_defProp = Object.defineProperty;
var EditView_defProps = Object.defineProperties;
var EditView_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditView_hasOwnProp = Object.prototype.hasOwnProperty;
var EditView_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditView_defNormalProp = (obj, key, value) => key in obj ? EditView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditView_hasOwnProp.call(b, prop))
      EditView_defNormalProp(a, prop, b[prop]);
  if (EditView_getOwnPropSymbols)
    for (var prop of EditView_getOwnPropSymbols(b)) {
      if (EditView_propIsEnum.call(b, prop))
        EditView_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditView_spreadProps = (a, b) => EditView_defProps(a, EditView_getOwnPropDescs(b));
var EditView_async = (__this, __arguments, generator) => {
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

















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const ApiTokenCreateView = () => {
  var _a;
  (0,build.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const toggleNotification = (0,build.useNotification)();
  const history = (0,react_router_dom_min.useHistory)();
  const [apiToken, setApiToken] = (0,react.useState)(
    ((_a = history.location.state) == null ? void 0 : _a.apiToken.accessKey) ? EditView_spreadValues({}, history.location.state.apiToken) : null
  );
  const { trackUsage } = (0,build.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,build.useGuidedTour)();
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,build.useRBAC)(permissions/* default.settings.api-tokens */.Z.settings["api-tokens"]);
  const [state, dispatch] = (0,react.useReducer)(EditView_reducer, initialState, (state2) => EditView_init(state2, {}));
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/api-tokens/:id");
  const isCreating = id === "create";
  (0,lib.useQuery)(
    "content-api-permissions",
    () => EditView_async(void 0, null, function* () {
      const [permissions, routes] = yield Promise.all(
        ["/admin/content-api/permissions", "/admin/content-api/routes"].map((url) => EditView_async(void 0, null, function* () {
          const { data } = yield core_utils/* axiosInstance.get */.be.get(url);
          return data.data;
        }))
      );
      dispatch({
        type: "UPDATE_PERMISSIONS_LAYOUT",
        value: permissions
      });
      dispatch({
        type: "UPDATE_ROUTES",
        value: routes
      });
      if (apiToken) {
        if ((apiToken == null ? void 0 : apiToken.type) === "read-only") {
          dispatch({
            type: "ON_CHANGE_READ_ONLY"
          });
        }
        if ((apiToken == null ? void 0 : apiToken.type) === "full-access") {
          dispatch({
            type: "SELECT_ALL_ACTIONS"
          });
        }
        if ((apiToken == null ? void 0 : apiToken.type) === "custom") {
          dispatch({
            type: "UPDATE_PERMISSIONS",
            value: apiToken == null ? void 0 : apiToken.permissions
          });
        }
      }
    }),
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList");
  }, [isCreating]);
  const { status } = (0,lib.useQuery)(
    ["api-token", id],
    () => EditView_async(void 0, null, function* () {
      const {
        data: { data }
      } = yield core_utils/* axiosInstance.get */.be.get(`/admin/api-tokens/${id}`);
      setApiToken(EditView_spreadValues({}, data));
      if ((data == null ? void 0 : data.type) === "read-only") {
        dispatch({
          type: "ON_CHANGE_READ_ONLY"
        });
      }
      if ((data == null ? void 0 : data.type) === "full-access") {
        dispatch({
          type: "SELECT_ALL_ACTIONS"
        });
      }
      if ((data == null ? void 0 : data.type) === "custom") {
        dispatch({
          type: "UPDATE_PERMISSIONS",
          value: data == null ? void 0 : data.permissions
        });
      }
      return data;
    }),
    {
      enabled: !isCreating && !apiToken,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const handleSubmit = (body, actions) => EditView_async(void 0, null, function* () {
    var _a2, _b, _c, _d, _e;
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken");
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    try {
      const {
        data: { data: response }
      } = isCreating ? yield core_utils/* axiosInstance.post */.be.post(`/admin/api-tokens`, EditView_spreadProps(EditView_spreadValues({}, body), {
        lifespan: lifespanVal,
        permissions: body.type === "custom" ? state.selectedActions : null
      })) : yield core_utils/* axiosInstance.put */.be.put(`/admin/api-tokens/${id}`, {
        name: body.name,
        description: body.description,
        type: body.type,
        permissions: body.type === "custom" ? state.selectedActions : null
      });
      if (isCreating) {
        history.replace(`/settings/api-tokens/${response.id}`, { apiToken: response });
        setCurrentStep("apiTokens.success");
      }
      unlockApp();
      setApiToken(EditView_spreadValues({}, response));
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.tokencreated",
          defaultMessage: "API Token successfully created"
        }) : formatMessage({
          id: "notification.success.tokenedited",
          defaultMessage: "API Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: apiToken.type
      });
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      actions.setErrors(errors);
      if (((_c = (_b = (_a2 = err == null ? void 0 : err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message) === MSG_ERROR_NAME_TAKEN) {
        toggleNotification({
          type: "warning",
          message: err.response.data.message || "notification.error.tokennamenotunique"
        });
      } else {
        toggleNotification({
          type: "warning",
          message: ((_e = (_d = err == null ? void 0 : err.response) == null ? void 0 : _d.data) == null ? void 0 : _e.message) || "notification.error"
        });
      }
      unlockApp();
    }
  });
  const [hasChangedPermissions, setHasChangedPermissions] = (0,react.useState)(false);
  const handleChangeCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "ON_CHANGE",
      value
    });
  };
  const handleChangeSelectAllCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "SELECT_ALL_IN_PERMISSION",
      value
    });
  };
  const setSelectedAction = ({ target: { value } }) => {
    dispatch({
      type: "SET_SELECTED_ACTION",
      value
    });
  };
  const providerValue = EditView_spreadProps(EditView_spreadValues({}, state), {
    onChange: handleChangeCheckbox,
    onChangeSelectAll: handleChangeSelectAllCheckbox,
    setSelectedAction
  });
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !apiToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { apiTokenName: apiToken == null ? void 0 : apiToken.name });
  }
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContextProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      validationSchema: utils_schema,
      validateOnChange: false,
      initialValues: {
        name: (apiToken == null ? void 0 : apiToken.name) || "",
        description: (apiToken == null ? void 0 : apiToken.description) || "",
        type: apiToken == null ? void 0 : apiToken.type,
        lifespan: (apiToken == null ? void 0 : apiToken.lifespan) ? apiToken.lifespan.toString() : apiToken == null ? void 0 : apiToken.lifespan
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values, setFieldValue }) => {
      if (hasChangedPermissions && (values == null ? void 0 : values.type) !== "custom") {
        setFieldValue("type", "custom");
      }
      return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(
        components_FormHead,
        {
          apiToken,
          setApiToken,
          canEditInputs,
          canRegenerate,
          isSubmitting
        }
      ), /* @__PURE__ */ react.createElement(
        components_FormBody,
        {
          apiToken,
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          onDispatch: dispatch,
          setHasChangedPermissions
        }
      ));
    }
  )));
};
/* harmony default export */ const EditView = (ApiTokenCreateView);


/***/ })

}]);