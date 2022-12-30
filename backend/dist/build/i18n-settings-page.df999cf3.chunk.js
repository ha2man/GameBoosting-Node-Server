"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3552],{

/***/ 72751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js
var useLocales = __webpack_require__(8181);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(15559);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js


const localeFormSchema = (0,lib/* object */.Ry)().shape({
  code: (0,lib/* string */.Z_)().required(),
  displayName: (0,lib/* string */.Z_)().max(50, "Settings.locales.modal.locales.displayName.error").required(build.translatedErrors.required)
});
/* harmony default export */ const schemas = (localeFormSchema);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js
var constants = __webpack_require__(7982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js
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





const editLocale = (id, payload, toggleNotification) => __async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/i18n/locales/${id}`, {
      method: "PUT",
      body: payload
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.edit.success") }
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return null;
  }
});
const useEditLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const modifyLocale = (id, payload) => __async(void 0, null, function* () {
    setLoading(true);
    const editedLocale = yield editLocale(id, payload, toggleNotification);
    dispatch({ type: constants/* UPDATE_LOCALE */.OT, editedLocale });
    setLoading(false);
  });
  return { isEditing: isLoading, editLocale: modifyLocale };
};
/* harmony default export */ const hooks_useEditLocale = (useEditLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js
var useDefaultLocales_async = (__this, __arguments, generator) => {
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





const fetchDefaultLocalesList = (toggleNotification) => useDefaultLocales_async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)("/i18n/iso-locales", {
      method: "GET"
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return [];
  }
});
const useDefaultLocales = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,build.useNotification)();
  const { isLoading, data } = (0,react_query_lib.useQuery)(
    "default-locales",
    () => fetchDefaultLocalesList(toggleNotification).then((data2) => {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.loaded"),
          defaultMessage: "The locales have been successfully loaded."
        })
      );
      return data2;
    })
  );
  return { defaultLocales: data, isLoading };
};
/* harmony default export */ const hooks_useDefaultLocales = (useDefaultLocales);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js









const BaseForm = ({ locale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, errors } = (0,formik_dist.useFormikContext)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const localeDetails = !isLoading && defaultLocales.find((row) => row.code === locale.code);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: (localeDetails == null ? void 0 : localeDetails.code) || locale.code,
      disabled: true
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: (localeDetails == null ? void 0 : localeDetails.code) || locale.code }, (localeDetails == null ? void 0 : localeDetails.name) || locale.code)
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalEdit_BaseForm = (BaseForm);
BaseForm.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js






const AdvancedForm = ({ isDefaultLocale }) => {
  const { values, setFieldValue } = (0,formik_dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: "isDefault",
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault,
      disabled: isDefaultLocale
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
AdvancedForm.propTypes = {
  isDefaultLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const ModalEdit_AdvancedForm = (AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js
var ModalEdit_async = (__this, __arguments, generator) => {
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


















const ModalEdit = ({ locale, onClose }) => {
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const { isEditing, editLocale } = hooks_useEditLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleSubmit = (_0) => ModalEdit_async(void 0, [_0], function* ({ displayName, isDefault }) {
    yield editLocale(locale.id, { name: displayName, isDefault });
    yield refetchPermissions();
  });
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose, labelledBy: "edit-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      initialValues: {
        code: locale == null ? void 0 : locale.code,
        displayName: (locale == null ? void 0 : locale.name) || "",
        isDefault: Boolean(locale == null ? void 0 : locale.isDefault)
      },
      onSubmit: handleSubmit,
      validationSchema: schemas
    },
    /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "edit-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.edit"),
      defaultMessage: "Edit a locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalEdit_BaseForm, { locale })), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalEdit_AdvancedForm, { isDefaultLocale: Boolean(locale && locale.isDefault) }))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), disabled: isEditing }, formatMessage({ id: "global.save" }))
      }
    ))
  ));
};
ModalEdit.defaultProps = {
  locale: void 0
};
ModalEdit.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalEdit = (ModalEdit);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js
var useDeleteLocale_async = (__this, __arguments, generator) => {
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





const deleteLocale = (id, toggleNotification) => useDeleteLocale_async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/i18n/locales/${id}`, {
      method: "DELETE"
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.delete.success") }
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return e;
  }
});
const useDeleteLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const removeLocale = (id) => useDeleteLocale_async(void 0, null, function* () {
    setLoading(true);
    yield deleteLocale(id, toggleNotification);
    dispatch({ type: constants/* DELETE_LOCALE */.HC, id });
    setLoading(false);
  });
  return { isDeleting: isLoading, deleteLocale: removeLocale };
};
/* harmony default export */ const hooks_useDeleteLocale = (useDeleteLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js




const ModalDelete = ({ localeToDelete, onClose }) => {
  const { isDeleting, deleteLocale } = hooks_useDeleteLocale();
  const isOpened = Boolean(localeToDelete);
  const handleDelete = () => deleteLocale(localeToDelete.id).then(onClose);
  return /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isConfirmButtonLoading: isDeleting,
      onConfirm: handleDelete,
      onToggleDialog: onClose,
      isOpen: isOpened
    }
  );
};
ModalDelete.defaultProps = {
  localeToDelete: void 0
};
ModalDelete.propTypes = {
  localeToDelete: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalDelete = (ModalDelete);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js
var useAddLocale_async = (__this, __arguments, generator) => {
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






const addLocale = (_0, _1) => useAddLocale_async(void 0, [_0, _1], function* ({ code, name, isDefault }, toggleNotification) {
  const data = yield (0,build.request)("/i18n/locales", {
    method: "POST",
    body: {
      name,
      code,
      isDefault
    }
  });
  toggleNotification({
    type: "success",
    message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.success") }
  });
  return data;
});
const useAddLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const persistLocale = (locale) => useAddLocale_async(void 0, null, function* () {
    setLoading(true);
    try {
      const newLocale = yield addLocale(locale, toggleNotification);
      dispatch({ type: constants/* ADD_LOCALE */.xz, newLocale });
    } catch (e) {
      const message = get_default()(e, "response.payload.message", null);
      if (message && message.includes("already exists")) {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.alreadyExist") }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
      throw e;
    } finally {
      setLoading(false);
    }
  });
  return { isAdding: isLoading, addLocale: persistLocale };
};
/* harmony default export */ const hooks_useAddLocale = (useAddLocale);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js + 2 modules
var Combobox = __webpack_require__(31950);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js







const LocaleSelect = react.memo(({ value, onClear, onLocaleChange, error }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const { locales } = (0,useLocales/* default */.Z)();
  const options = (defaultLocales || []).map((locale) => ({
    label: locale.name,
    value: locale.code
  })).filter(({ value: v }) => {
    const foundLocale = locales.find(({ code }) => code === v);
    return !foundLocale || foundLocale.code === value;
  });
  const computedValue = value || "";
  return /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.h,
    {
      "aria-busy": isLoading,
      error,
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: computedValue,
      onClear: value ? onClear : void 0,
      onChange: (selectedLocaleKey) => {
        const selectedLocale = options.find((locale) => locale.value === selectedLocaleKey);
        if (selectedLocale) {
          onLocaleChange({ code: selectedLocale.value, displayName: selectedLocale.label });
        }
      },
      placeholder: formatMessage({
        id: "components.placeholder.select",
        defaultMessage: "Select"
      })
    },
    options.map((option) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: option.value, key: option.value }, option.label))
  );
});
LocaleSelect.defaultProps = {
  error: void 0,
  value: void 0,
  onClear() {
  },
  onLocaleChange: () => void 0
};
LocaleSelect.propTypes = {
  error: (prop_types_default()).string,
  onClear: (prop_types_default()).func,
  onLocaleChange: (prop_types_default()).func,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_LocaleSelect = (LocaleSelect);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js







const BaseForm_BaseForm = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, setFieldValue, errors } = (0,formik_dist.useFormikContext)();
  const handleLocaleChange = (0,react.useCallback)(
    (nextLocale) => {
      setFieldValue("displayName", nextLocale.displayName);
      setFieldValue("code", nextLocale.code);
    },
    [setFieldValue]
  );
  const handleClear = (0,react.useCallback)(() => {
    setFieldValue("displayName", "");
    setFieldValue("code", "");
  }, [setFieldValue]);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    components_LocaleSelect,
    {
      error: errors.code,
      value: values.code,
      onLocaleChange: handleLocaleChange,
      onClear: handleClear
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalCreate_BaseForm = (BaseForm_BaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js





const AdvancedForm_AdvancedForm = () => {
  const { values, setFieldValue } = (0,formik_dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
/* harmony default export */ const ModalCreate_AdvancedForm = (AdvancedForm_AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js
var ModalCreate_async = (__this, __arguments, generator) => {
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


















const initialFormValues = {
  code: "",
  displayName: "",
  isDefault: false
};
const ModalCreate = ({ onClose }) => {
  const { isAdding, addLocale } = hooks_useAddLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const handleLocaleAdd = (values) => ModalCreate_async(void 0, null, function* () {
    yield addLocale({
      code: values.code,
      name: values.displayName,
      isDefault: values.isDefault
    });
    yield refetchPermissions();
  });
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose, labelledBy: "add-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      initialValues: initialFormValues,
      onSubmit: handleLocaleAdd,
      validationSchema: schemas,
      validateOnChange: false
    },
    /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "add-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.add"),
      defaultMessage: "Add new locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2", variant: "beta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalCreate_BaseForm, null)), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(ModalCreate_AdvancedForm, null))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), disabled: isAdding }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
      }
    ))
  ));
};
ModalCreate.propTypes = {
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalCreate = (ModalCreate);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
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
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js
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












const LocaleTable = ({ locales, onDeleteLocale, onEditLocale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 4, rowCount: locales.length + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.id") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.displayName") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.default-locale") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, "Actions")))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, locales.map((locale) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    __spreadValues({
      key: locale.id
    }, (0,build.onRowClick)({
      fn: () => onEditLocale(locale),
      condition: onEditLocale
    })),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.id)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, locale.isDefault ? formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.default") }) : null)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
      Stack/* Stack */.K,
      __spreadValues({
        horizontal: true,
        spacing: 1,
        style: { justifyContent: "flex-end" }
      }, build.stopPropagation),
      onEditLocale && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onEditLocale(locale),
          label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.edit") }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
          noBorder: true
        }
      ),
      onDeleteLocale && !locale.isDefault && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onDeleteLocale(locale),
          label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.delete") }),
          icon: /* @__PURE__ */ react.createElement(Trash["default"], null),
          noBorder: true
        }
      )
    ))
  ))));
};
LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: void 0,
  onEditLocale: void 0
};
LocaleTable.propTypes = {
  locales: (prop_types_default()).array,
  onDeleteLocale: (prop_types_default()).func,
  onEditLocale: (prop_types_default()).func
};
/* harmony default export */ const LocaleList_LocaleTable = (LocaleTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js
















const LocaleList = ({ canUpdateLocale, canDeleteLocale, onToggleCreateModal, isCreating }) => {
  const [localeToDelete, setLocaleToDelete] = (0,react.useState)();
  const [localeToEdit, setLocaleToEdit] = (0,react.useState)();
  const { locales } = (0,useLocales/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,build.useFocusWhenNavigate)();
  const closeModalToDelete = () => setLocaleToDelete(void 0);
  const handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : void 0;
  const closeModalToEdit = () => setLocaleToEdit(void 0);
  const handleEditLocale = canUpdateLocale ? setLocaleToEdit : void 0;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onToggleCreateModal, size: "S" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })),
      title: formatMessage({ id: (0,utils/* getTrad */.O)("plugin.name") }),
      subtitle: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.description") })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, (locales == null ? void 0 : locales.length) > 0 ? /* @__PURE__ */ react.createElement(
    LocaleList_LocaleTable,
    {
      locales,
      onDeleteLocale: handleDeleteLocale,
      onEditLocale: handleEditLocale
    }
  ) : /* @__PURE__ */ react.createElement(
    dist.EmptyStateLayout,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments["default"], { width: void 0, height: void 0 }),
      content: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.empty.title") }),
      action: onToggleCreateModal ? /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onToggleCreateModal }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })) : null
    }
  )), isCreating && /* @__PURE__ */ react.createElement(components_ModalCreate, { onClose: onToggleCreateModal }), localeToEdit && /* @__PURE__ */ react.createElement(components_ModalEdit, { onClose: closeModalToEdit, locale: localeToEdit }), /* @__PURE__ */ react.createElement(components_ModalDelete, { localeToDelete, onClose: closeModalToDelete }));
};
LocaleList.defaultProps = {
  onToggleCreateModal: void 0
};
LocaleList.propTypes = {
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired,
  onToggleCreateModal: (prop_types_default()).func,
  isCreating: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_LocaleList = (LocaleList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js



const LocaleSettingsPage = ({
  canReadLocale,
  canCreateLocale,
  canDeleteLocale,
  canUpdateLocale
}) => {
  const [isOpenedCreateModal, setIsOpenedCreateModal] = (0,react.useState)(false);
  const handleToggleModalCreate = canCreateLocale ? () => setIsOpenedCreateModal((s) => !s) : void 0;
  return canReadLocale ? /* @__PURE__ */ react.createElement(
    components_LocaleList,
    {
      canUpdateLocale,
      canDeleteLocale,
      onToggleCreateModal: handleToggleModalCreate,
      isCreating: isOpenedCreateModal
    }
  ) : null;
};
LocaleSettingsPage.propTypes = {
  canReadLocale: (prop_types_default()).bool.isRequired,
  canCreateLocale: (prop_types_default()).bool.isRequired,
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const SettingsPage_LocaleSettingsPage = (LocaleSettingsPage);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/permissions.js
var permissions = __webpack_require__(2135);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js




const ProtectedLocaleSettingsPage = () => {
  const {
    isLoading,
    allowedActions: { canRead, canUpdate, canCreate, canDelete }
  } = (0,build.useRBAC)(permissions/* default */.Z);
  if (isLoading) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    SettingsPage_LocaleSettingsPage,
    {
      canReadLocale: canRead,
      canCreateLocale: canCreate,
      canUpdateLocale: canUpdate,
      canDeleteLocale: canDelete
    }
  );
};
/* harmony default export */ const SettingsPage = (ProtectedLocaleSettingsPage);


/***/ }),

/***/ 31950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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

/***/ 86783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var c = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, o = (t, e) => {
  for (var l in e || (e = {}))
    m.call(e, l) && n(t, l, e[l]);
  if (i)
    for (var l of i(e))
      a.call(e, l) && n(t, l, e[l]);
  return t;
};

function f(t) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", o({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-1.438-11.066L16.158 7.5 18 9.245l-7.438 7.18-4.462-4.1 1.84-1.745 2.622 2.354z",
    fill: "#212134"
  }));
}



/***/ })

}]);