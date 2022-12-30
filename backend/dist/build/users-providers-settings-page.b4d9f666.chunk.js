"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[2282],{

/***/ 8971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ProvidersPage": () => (/* binding */ ProvidersPage),
  "default": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(70982);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js



const callbackLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.redirectURL.front-end.label"),
  defaultMessage: "The redirect URL to your front-end app"
};
const callbackPlaceholder = {
  id: "http://www.client-app.com",
  defaultMessage: "http://www.client-app.com"
};
const enabledDescription = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.enabled.description"),
  defaultMessage: "If disabled, users won't be able to use this provider."
};
const enabledLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.enabled.label"),
  defaultMessage: "Enable"
};
const keyLabel = { id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.key.label"), defaultMessage: "Client ID" };
const hintLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.redirectURL.label"),
  defaultMessage: "The redirect URL to add in your {provider} application configurations"
};
const textPlaceholder = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.key.placeholder"),
  defaultMessage: "TEXT"
};
const secretLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.secret.label"),
  defaultMessage: "Client Secret"
};
const forms_forms = {
  email: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6
        }
      ]
    ],
    schema: yup_lib/* object */.Ry().shape({
      enabled: yup_lib/* bool */.Xg().required(build.translatedErrors.required)
    })
  },
  providers: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_lib/* object */.Ry().shape({
      enabled: yup_lib/* bool */.Xg().required(build.translatedErrors.required),
      key: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      secret: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      callback: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      })
    })
  },
  providersWithSubdomain: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.subdomain.label"),
            defaultMessage: "Host URI (Subdomain)"
          },
          name: "subdomain",
          type: "text",
          placeholder: {
            id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.subdomain.placeholder"),
            defaultMessage: "my.subdomain.com"
          },
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_lib/* object */.Ry().shape({
      enabled: yup_lib/* bool */.Xg().required(build.translatedErrors.required),
      key: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      secret: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      subdomain: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      callback: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      })
    })
  }
};
/* harmony default export */ const utils_forms = (forms_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/api.js
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

const fetchData = (toggleNotification) => __async(void 0, null, function* () {
  try {
    const { data } = yield utils/* axiosInstance.get */.be.get((0,utils/* getRequestURL */.Gc)("providers"));
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error("error");
  }
});
const putProvider = (body) => {
  return utils/* axiosInstance.put */.be.put((0,utils/* getRequestURL */.Gc)("providers"), body);
};

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/createProvidersArray.js

const createProvidersArray = (data) => {
  return (0,lodash.sortBy)(
    Object.keys(data).reduce((acc, current) => {
      const { icon: iconName, enabled, subdomain } = data[current];
      const icon = iconName === "envelope" ? ["fas", "envelope"] : ["fab", iconName];
      if (subdomain !== void 0) {
        acc.push({ name: current, icon, enabled, subdomain });
      } else {
        acc.push({ name: current, icon, enabled });
      }
      return acc;
    }, []),
    "name"
  );
};
/* harmony default export */ const utils_createProvidersArray = (createProvidersArray);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js + 1 modules
var ToggleInput = __webpack_require__(20707);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js
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





const Input = ({
  description,
  disabled,
  intlLabel,
  error,
  name,
  onChange,
  placeholder,
  providerToEditName,
  type,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const inputValue = name === "noName" ? `${strapi.backendURL}/api/connect/${providerToEditName}/callback` : value;
  const label = formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    __spreadValues({ provider: providerToEditName }, intlLabel.values)
  );
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    __spreadValues({ provider: providerToEditName }, description.values)
  ) : "";
  if (type === "bool") {
    return /* @__PURE__ */ react.createElement(
      ToggleInput/* ToggleInput */.s,
      {
        "aria-label": name,
        checked: value,
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
        onChange: (e) => {
          onChange({ target: { name, value: e.target.checked } });
        }
      }
    );
  }
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    __spreadValues({}, placeholder.values)
  ) : "";
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      "aria-label": name,
      disabled,
      error: errorMessage,
      label,
      name,
      onChange,
      placeholder: formattedPlaceholder,
      type,
      value: inputValue
    }
  );
};
Input.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  placeholder: null,
  value: ""
};
Input.propTypes = {
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
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  providerToEditName: (prop_types_default()).string.isRequired,
  type: (prop_types_default()).string.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string])
};
/* harmony default export */ const FormModal_Input = (Input);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js
var FormModal_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));











const FormModal = ({
  headerBreadcrumbs,
  initialData,
  isSubmiting,
  layout,
  isOpen,
  onSubmit,
  onToggle,
  providerToEditName
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: headerBreadcrumbs.join(", ") }, headerBreadcrumbs.map((crumb) => /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, { key: crumb }, crumb)))), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      onSubmit: (values) => onSubmit(values),
      initialValues: initialData,
      validationSchema: layout.schema,
      validateOnChange: false
    },
    ({ errors, handleChange, values }) => {
      return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, layout.form.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: input.name, col: input.size, xs: 12 }, /* @__PURE__ */ react.createElement(
            FormModal_Input,
            __spreadProps(FormModal_spreadValues({}, input), {
              error: errors[input.name],
              onChange: handleChange,
              value: values[input.name],
              providerToEditName
            })
          ));
        });
      })))), /* @__PURE__ */ react.createElement(
        ModalFooter/* ModalFooter */.m,
        {
          startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onToggle, type: "button" }, formatMessage({
            id: "app.components.Button.cancel",
            defaultMessage: "Cancel"
          })),
          endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmiting }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
        }
      ));
    }
  ));
};
FormModal.defaultProps = {
  initialData: null,
  providerToEditName: null
};
FormModal.propTypes = {
  headerBreadcrumbs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  initialData: (prop_types_default()).object,
  layout: prop_types_default().shape({
    form: prop_types_default().arrayOf((prop_types_default()).array),
    schema: (prop_types_default()).object
  }).isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  isSubmiting: (prop_types_default()).bool.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  providerToEditName: (prop_types_default()).string
};
/* harmony default export */ const components_FormModal = (FormModal);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/index.js
var Providers_defProp = Object.defineProperty;
var Providers_defProps = Object.defineProperties;
var Providers_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Providers_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Providers_hasOwnProp = Object.prototype.hasOwnProperty;
var Providers_propIsEnum = Object.prototype.propertyIsEnumerable;
var Providers_defNormalProp = (obj, key, value) => key in obj ? Providers_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Providers_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Providers_hasOwnProp.call(b, prop))
      Providers_defNormalProp(a, prop, b[prop]);
  if (Providers_getOwnPropSymbols)
    for (var prop of Providers_getOwnPropSymbols(b)) {
      if (Providers_propIsEnum.call(b, prop))
        Providers_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Providers_spreadProps = (a, b) => Providers_defProps(a, Providers_getOwnPropDescs(b));
var Providers_async = (__this, __arguments, generator) => {
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





















const ProvidersPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const queryClient = (0,lib.useQueryClient)();
  const { trackUsage } = (0,build.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const [isSubmiting, setIsSubmiting] = (0,react.useState)(false);
  const [providerToEditName, setProviderToEditName] = (0,react.useState)(null);
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const updatePermissions = (0,react.useMemo)(() => {
    return { update: permissions/* default.updateProviders */.Z.updateProviders };
  }, []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,build.useRBAC)(updatePermissions);
  const {
    isLoading: isLoadingForData,
    data: modifiedData,
    isFetching
  } = (0,lib.useQuery)("get-providers", () => fetchData(toggleNotification), {
    onSuccess() {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("Providers.data.loaded"),
          defaultMessage: "Providers have been loaded"
        })
      );
    },
    initialData: {}
  });
  const isLoading = isLoadingForData || isFetching;
  const submitMutation = (0,lib.useMutation)(putProvider, {
    onSuccess() {
      return Providers_async(this, null, function* () {
        yield queryClient.invalidateQueries("get-providers");
        toggleNotification({
          type: "info",
          message: { id: (0,utils/* getTrad */.OB)("notification.success.submit") }
        });
        trackUsageRef.current("didEditAuthenticationProvider");
        setIsSubmiting(false);
        handleToggleModal();
        unlockApp();
      });
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
      unlockApp();
      setIsSubmiting(false);
    },
    refetchActive: false
  });
  const providers = (0,react.useMemo)(() => utils_createProvidersArray(modifiedData), [modifiedData]);
  const rowCount = providers.length;
  const isProviderWithSubdomain = (0,react.useMemo)(() => {
    if (!providerToEditName) {
      return false;
    }
    const providerToEdit = providers.find((obj) => obj.name === providerToEditName);
    return has_default()(providerToEdit, "subdomain");
  }, [providers, providerToEditName]);
  const pageTitle = formatMessage({
    id: (0,utils/* getTrad */.OB)("HeaderNav.link.providers"),
    defaultMessage: "Providers"
  });
  const layoutToRender = (0,react.useMemo)(() => {
    if (providerToEditName === "email") {
      return utils_forms.email;
    }
    if (isProviderWithSubdomain) {
      return utils_forms.providersWithSubdomain;
    }
    return utils_forms.providers;
  }, [providerToEditName, isProviderWithSubdomain]);
  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickEdit = (provider) => {
    if (canUpdate) {
      setProviderToEditName(provider.name);
      handleToggleModal();
    }
  };
  const handleSubmit = (values) => Providers_async(void 0, null, function* () {
    setIsSubmiting(true);
    lockApp();
    trackUsageRef.current("willEditAuthenticationProvider");
    const body = Providers_spreadProps(Providers_spreadValues({}, modifiedData), { [providerToEditName]: values });
    submitMutation.mutate({ providers: body });
  });
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: pageTitle }), /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.providers"),
        defaultMessage: "Providers"
      })
    }
  ), isLoading || isLoadingForPermissions ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 4, rowCount: rowCount + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({ id: (0,utils/* getTrad */.OB)("Providers.image"), defaultMessage: "Image" })))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.OB)("Providers.status"), defaultMessage: "Status" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, providers.map((provider) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    Providers_spreadValues({
      key: provider.name
    }, (0,build.onRowClick)({
      fn: () => handleClickEdit(provider),
      condition: canUpdate
    })),
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "" }, /* @__PURE__ */ react.createElement(index_es/* FontAwesomeIcon */.G, { icon: provider.icon })),
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "45%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", textColor: "neutral800" }, provider.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "65%" }, /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        textColor: provider.enabled ? "success600" : "danger600",
        "data-testid": `enable-${provider.name}`
      },
      provider.enabled ? formatMessage({
        id: "global.enabled",
        defaultMessage: "Enabled"
      }) : formatMessage({
        id: "global.disabled",
        defaultMessage: "Disabled"
      })
    )),
    /* @__PURE__ */ react.createElement(Cell.Td, Providers_spreadValues({}, build.stopPropagation), canUpdate && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: () => handleClickEdit(provider),
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
        label: "Edit"
      }
    ))
  )))))), /* @__PURE__ */ react.createElement(
    components_FormModal,
    {
      initialData: modifiedData[providerToEditName],
      isOpen,
      isSubmiting,
      layout: layoutToRender,
      headerBreadcrumbs: [
        formatMessage({
          id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.providers"),
          defaultMessage: "Edit Provider"
        }),
        upperFirst_default()(providerToEditName)
      ],
      onToggle: handleToggleModal,
      onSubmit: handleSubmit,
      providerToEditName
    }
  ));
};
const ProtectedProvidersPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.readProviders */.Z.readProviders }, /* @__PURE__ */ react.createElement(ProvidersPage, null));
/* harmony default export */ const Providers = (ProtectedProvidersPage);


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

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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