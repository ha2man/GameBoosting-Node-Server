"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[2544],{

/***/ 92100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Roles_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var src_permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/index.js + 53 modules
var Permissions = __webpack_require__(28834);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js + 1 modules
var Textarea = __webpack_require__(64256);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/RoleForm/index.js











const RoleForm = ({ disabled, role, values, errors, onChange, onBlur }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, role ? role.name : formatMessage({
    id: "global.details",
    defaultMessage: "Details"
  }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral500", variant: "pi" }, role ? role.description : formatMessage({
    id: "Settings.roles.form.description",
    defaultMessage: "Name and description of the role"
  })))), /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, variant: "secondary" }, formatMessage(
    {
      id: "Settings.roles.form.button.users-with-role",
      defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
    },
    { number: role.usersCount }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      disabled,
      name: "name",
      error: errors.name && formatMessage({ id: errors.name }),
      label: formatMessage({
        id: "global.name",
        defaultMessage: "Name"
      }),
      onChange,
      onBlur,
      value: values.name || ""
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Textarea/* Textarea */.g,
    {
      disabled,
      label: formatMessage({
        id: "global.description",
        defaultMessage: "Description"
      }),
      name: "description",
      error: errors.name && formatMessage({ id: errors.name }),
      onChange,
      onBlur
    },
    values.description || ""
  )))));
};
RoleForm.defaultProps = {
  disabled: false,
  role: null,
  values: { name: "", description: "" }
};
RoleForm.propTypes = {
  disabled: (prop_types_default()).bool,
  errors: (prop_types_default()).object.isRequired,
  onBlur: (prop_types_default()).func.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  role: (prop_types_default()).object,
  values: (prop_types_default()).object
};
/* harmony default export */ const components_RoleForm = (RoleForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/index.js



// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(61931);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/utils/schema.js


const schema = lib/* object */.Ry().shape({
  name: lib/* string */.Z_().required(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
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















const EditPage = () => {
  const toggleNotification = (0,build.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/roles/:id");
  const [isSubmitting, setIsSubmiting] = (0,react.useState)(false);
  const permissionsRef = (0,react.useRef)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { trackUsage } = (0,build.useTracking)();
  const { isLoading: isLayoutLoading, data: permissionsLayout } = (0,hooks/* useFetchPermissionsLayout */.U_)(id);
  const {
    role,
    permissions: rolePermissions,
    isLoading: isRoleLoading,
    onSubmitSucceeded
  } = (0,hooks/* useFetchRole */.Dq)(id);
  const handleEditRoleSubmit = (data) => __async(void 0, null, function* () {
    try {
      lockApp();
      setIsSubmiting(true);
      const { permissionsToSend, didUpdateConditions } = permissionsRef.current.getPermissions();
      yield (0,build.request)(`/admin/roles/${id}`, {
        method: "PUT",
        body: data
      });
      if (role.code !== "strapi-super-admin") {
        yield (0,build.request)(`/admin/roles/${id}/permissions`, {
          method: "PUT",
          body: {
            permissions: permissionsToSend
          }
        });
        if (didUpdateConditions) {
          trackUsage("didUpdateConditions");
        }
      }
      permissionsRef.current.setFormAfterSubmit();
      onSubmitSucceeded({ name: data.name, description: data.description });
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved" }
      });
    } catch (err) {
      console.error(err.response);
      const errorMessage = get_default()(err, "response.payload.message", "An error occured");
      const message = get_default()(err, "response.payload.data.permissions[0]", errorMessage);
      toggleNotification({
        type: "warning",
        message
      });
    } finally {
      setIsSubmiting(false);
      unlockApp();
    }
  });
  const isFormDisabled = role.code === "strapi-super-admin";
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      enableReinitialize: true,
      initialValues: {
        name: role.name,
        description: role.description
      },
      onSubmit: handleEditRoleSubmit,
      validationSchema: utils_schema,
      validateOnChange: false
    },
    ({ handleSubmit, values, errors, handleChange, handleBlur }) => /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            disabled: role.code === "strapi-super-admin",
            onClick: handleSubmit,
            loading: isSubmitting,
            size: "L"
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        )),
        title: formatMessage({
          id: "Settings.roles.edit.title",
          defaultMessage: "Edit a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        }),
        navigationAction: /* @__PURE__ */ react.createElement(build.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(
      components_RoleForm,
      {
        isLoading: isRoleLoading,
        disabled: isFormDisabled,
        errors,
        values,
        onChange: handleChange,
        onBlur: handleBlur,
        role
      }
    ), !isLayoutLoading && !isRoleLoading ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
      Permissions/* default */.Z,
      {
        isFormDisabled,
        permissions: rolePermissions,
        ref: permissionsRef,
        layout: permissionsLayout
      }
    )) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)))))
  ));
};
/* harmony default export */ const Roles_EditPage = (EditPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ProtectedEditPage/index.js





const ProtectedEditPage = () => {
  const permissions = (0,react.useMemo)(() => {
    return {
      read: src_permissions/* default.settings.roles.read */.Z.settings.roles.read,
      update: src_permissions/* default.settings.roles.update */.Z.settings.roles.update
    };
  }, []);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,build.useRBAC)(permissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: "/" });
  }
  return /* @__PURE__ */ react.createElement(Roles_EditPage, null);
};
/* harmony default export */ const Roles_ProtectedEditPage = (ProtectedEditPage);


/***/ })

}]);