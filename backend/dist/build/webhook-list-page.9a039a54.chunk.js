"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[4121],{

/***/ 11199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Webhooks_ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Switch/Switch.js
var w = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var p = (e, t, r) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, b = (e, t) => {
  for (var r in t || (t = {}))
    m.call(t, r) && p(e, r, t[r]);
  if (i)
    for (var r of i(t))
      f.call(t, r) && p(e, r, t[r]);
  return e;
};
var h = (e, t) => {
  var r = {};
  for (var o in e)
    m.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && i)
    for (var o of i(e))
      t.indexOf(o) < 0 && f.call(e, o) && (r[o] = e[o]);
  return r;
};





const l = styled_components_browser_esm["default"].div`
  background: ${({ theme: e }) => e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels: e }) => e ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme: e }) => e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme: e }) => e.spaces[1]};
    top: ${({ theme: e }) => e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`, R = styled_components_browser_esm["default"].button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${l} {
    background: ${({ theme: e }) => e.colors.success500};
  }

  &[aria-checked='true'] ${l}:before {
    transform: translateX(1rem);
  }
`, c = react.forwardRef(
  (x, k) => {
    var u = x, { label: e, onChange: t, onLabel: r, offLabel: o, selected: s, visibleLabels: d } = u, $ = h(u, ["label", "onChange", "onLabel", "offLabel", "selected", "visibleLabels"]);
    return /* @__PURE__ */ react.createElement(R, b({
      ref: k,
      role: "switch",
      "aria-checked": s,
      "aria-label": e,
      onClick: t,
      visibleLabels: d,
      type: "button"
    }, $), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(l, null, /* @__PURE__ */ react.createElement("span", null, r), /* @__PURE__ */ react.createElement("span", null, o)), d && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      as: "span",
      "aria-hidden": !0,
      paddingLeft: 2,
      color: s ? "success600" : "danger600"
    }, s ? r : o)));
  }
);
c.defaultProps = {
  onLabel: "On",
  offLabel: "Off",
  visibleLabels: !1
};
c.propTypes = {
  label: prop_types.string.isRequired,
  offLabel: prop_types.string,
  onChange: prop_types.func.isRequired,
  onLabel: prop_types.string,
  selected: prop_types.bool.isRequired,
  visibleLabels: prop_types.bool
};
c.displayName = "Switch";


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/reducer.js


const initialState = {
  webhooks: [],
  webhooksToDelete: [],
  webhookToDelete: null,
  loadingWebhooks: true
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.webhooks = action.data;
      draftState.loadingWebhooks = false;
      break;
    }
    case "TOGGLE_LOADING": {
      draftState.loadingWebhooks = !state.loadingWebhooks;
      break;
    }
    case "SET_WEBHOOK_ENABLED": {
      set_default()(draftState, ["webhooks", ...action.keys], action.value);
      break;
    }
    case "SET_WEBHOOK_TO_DELETE": {
      draftState.webhookToDelete = action.id;
      break;
    }
    case "SET_WEBHOOKS_TO_DELETE": {
      if (action.value) {
        draftState.webhooksToDelete.push(action.id);
      } else {
        draftState.webhooksToDelete = state.webhooksToDelete.filter((id) => id !== action.id);
      }
      break;
    }
    case "SET_ALL_WEBHOOKS_TO_DELETE": {
      if (state.webhooksToDelete.length === 0) {
        draftState.webhooksToDelete = state.webhooks.map((webhook) => webhook.id);
      } else {
        draftState.webhooksToDelete = [];
      }
      break;
    }
    case "WEBHOOKS_DELETED": {
      draftState.webhooks = state.webhooks.filter(
        (webhook) => !state.webhooksToDelete.includes(webhook.id)
      );
      draftState.webhooksToDelete = [];
      break;
    }
    case "WEBHOOK_DELETED": {
      draftState.webhooks = state.webhooks.filter((_, index) => index !== action.index);
      draftState.webhookToDelete = null;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const ListView_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/index.js
/* provided dependency */ var console = __webpack_require__(25108);
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
























const ListView = () => {
  const {
    isLoading,
    allowedActions: { canCreate, canRead, canUpdate, canDelete }
  } = (0,build.useRBAC)(permissions/* default.settings.webhooks */.Z.settings.webhooks);
  const toggleNotification = (0,build.useNotification)();
  const isMounted = (0,react.useRef)(true);
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showModal, setShowModal] = (0,react.useState)(false);
  const [{ webhooks, webhooksToDelete, webhookToDelete, loadingWebhooks }, dispatch] = (0,react.useReducer)(
    ListView_reducer,
    initialState
  );
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  (0,build.useFocusWhenNavigate)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const rowsCount = webhooks.length;
  const webhooksToDeleteLength = webhooksToDelete.length;
  const getWebhookIndex = (id) => webhooks.findIndex((webhook) => webhook.id === id);
  (0,react.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react.useEffect)(() => {
    if (canRead) {
      fetchWebHooks();
    }
  }, [canRead]);
  const fetchWebHooks = () => __async(void 0, null, function* () {
    try {
      const { data } = yield (0,build.request)("/admin/webhooks", {
        method: "GET"
      });
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
        notifyStatus("webhooks have been loaded");
      }
    } catch (err) {
      console.log(err);
      if (isMounted.current) {
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
        dispatch({
          type: "TOGGLE_LOADING"
        });
      }
    }
  });
  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleConfirmDelete = () => {
    if (webhookToDelete) {
      handleConfirmDeleteOne();
    } else {
      handleConfirmDeleteAll();
    }
  };
  const handleConfirmDeleteOne = () => __async(void 0, null, function* () {
    try {
      yield (0,build.request)(`/admin/webhooks/${webhookToDelete}`, {
        method: "DELETE"
      });
      dispatch({
        type: "WEBHOOK_DELETED",
        index: getWebhookIndex(webhookToDelete)
      });
    } catch (err) {
      if (err.code !== 20) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
    setShowModal(false);
  });
  const handleConfirmDeleteAll = () => __async(void 0, null, function* () {
    const body = {
      ids: webhooksToDelete
    };
    try {
      yield (0,build.request)("/admin/webhooks/batch-delete", {
        method: "POST",
        body
      });
      if (isMounted.current) {
        dispatch({
          type: "WEBHOOKS_DELETED"
        });
      }
    } catch (err) {
      if (isMounted.current) {
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    }
    setShowModal(false);
  });
  const handleDeleteClick = (id) => {
    setShowModal(true);
    if (id !== "all") {
      dispatch({
        type: "SET_WEBHOOK_TO_DELETE",
        id
      });
    }
  };
  const handleEnabledChange = (value, id) => __async(void 0, null, function* () {
    const webhookIndex = getWebhookIndex(id);
    const initialWebhookProps = webhooks[webhookIndex];
    const keys = [webhookIndex, "isEnabled"];
    const body = __spreadProps(__spreadValues({}, initialWebhookProps), {
      isEnabled: value
    });
    delete body.id;
    try {
      dispatch({
        type: "SET_WEBHOOK_ENABLED",
        keys,
        value
      });
      yield (0,build.request)(`/admin/webhooks/${id}`, {
        method: "PUT",
        body
      });
    } catch (err) {
      if (isMounted.current) {
        dispatch({
          type: "SET_WEBHOOK_ENABLED",
          keys,
          value: !value
        });
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    }
  });
  const handleSelectAllCheckbox = () => {
    dispatch({
      type: "SET_ALL_WEBHOOKS_TO_DELETE"
    });
  };
  const handleSelectOneCheckbox = (value, id) => {
    dispatch({
      type: "SET_WEBHOOKS_TO_DELETE",
      value,
      id
    });
  };
  const handleGoTo = (to) => {
    push(`${pathname}/${to}`);
  };
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading || loadingWebhooks }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
      subtitle: formatMessage({
        id: "Settings.webhooks.list.description",
        defaultMessage: "Get POST changes notifications"
      }),
      primaryAction: canCreate && !loadingWebhooks && /* @__PURE__ */ react.createElement(build.LinkButton, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), variant: "default", to: `${pathname}/create`, size: "S" }, formatMessage({
        id: "Settings.webhooks.list.button.add",
        defaultMessage: "Create new webhook"
      }))
    }
  ), webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
        {
          id: "Settings.webhooks.to.delete",
          defaultMessage: "{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"
        },
        { webhooksToDeleteLength }
      )), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: () => handleDeleteClick("all"),
          startIcon: /* @__PURE__ */ react.createElement(Trash["default"], null),
          size: "L",
          variant: "danger-light"
        },
        formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading || loadingWebhooks ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)) : /* @__PURE__ */ react.createElement(react.Fragment, null, rowsCount > 0 ? /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount: 5,
      rowCount: rowsCount + 1,
      footer: /* @__PURE__ */ react.createElement(
        TFooter/* TFooter */.c,
        {
          onClick: () => canCreate ? handleGoTo("create") : {},
          icon: /* @__PURE__ */ react.createElement(Plus["default"], null)
        },
        formatMessage({
          id: "Settings.webhooks.list.button.add",
          defaultMessage: "Create new webhook"
        })
      )
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(
      BaseCheckbox/* BaseCheckbox */.C,
      {
        "aria-label": formatMessage({
          id: "global.select-all-entries",
          defaultMessage: "Select all entries"
        }),
        indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < rowsCount,
        value: webhooksToDeleteLength === rowsCount,
        onValueChange: handleSelectAllCheckbox
      }
    )), /* @__PURE__ */ react.createElement(Cell.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "60%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.form.url",
      defaultMessage: "URL"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.list.th.status",
      defaultMessage: "Status"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "Settings.webhooks.list.th.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, webhooks.map((webhook) => /* @__PURE__ */ react.createElement(
      Tr.Tr,
      __spreadValues({
        key: webhook.id
      }, (0,build.onRowClick)({
        fn: () => handleGoTo(webhook.id),
        condition: canUpdate
      })),
      /* @__PURE__ */ react.createElement(Cell.Td, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          "aria-label": `${formatMessage({
            id: "global.select",
            defaultMessage: "Select"
          })} ${webhook.name}`,
          value: webhooksToDelete == null ? void 0 : webhooksToDelete.includes(webhook.id),
          onValueChange: (value) => handleSelectOneCheckbox(value, webhook.id),
          id: "select",
          name: "select"
        }
      )),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", textColor: "neutral800" }, webhook.name)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, webhook.url)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(
        c,
        {
          onLabel: formatMessage({
            id: "global.enabled",
            defaultMessage: "Enabled"
          }),
          offLabel: formatMessage({
            id: "global.disabled",
            defaultMessage: "Disabled"
          }),
          label: `${webhook.name} ${formatMessage({
            id: "Settings.webhooks.list.th.status",
            defaultMessage: "Status"
          })}`,
          selected: webhook.isEnabled,
          onChange: () => handleEnabledChange(!webhook.isEnabled, webhook.id),
          visibleLabels: true
        }
      ))),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, __spreadValues({ horizontal: true, spacing: 1 }, build.stopPropagation), canUpdate && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => {
            handleGoTo(webhook.id);
          },
          label: formatMessage({
            id: "Settings.webhooks.events.update",
            defaultMessage: "Update"
          }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
          noBorder: true
        }
      ), canDelete && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => handleDeleteClick(webhook.id),
          label: formatMessage({
            id: "global.delete",
            defaultMessage: "Delete"
          }),
          icon: /* @__PURE__ */ react.createElement(Trash["default"], null),
          noBorder: true,
          id: `delete-${webhook.id}`
        }
      )))
    )))
  ) : /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments["default"], { width: "160px" }),
      content: formatMessage({
        id: "Settings.webhooks.list.empty.description",
        defaultMessage: "No webhooks found"
      }),
      action: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null),
          onClick: () => canCreate ? handleGoTo("create") : {}
        },
        formatMessage({
          id: "Settings.webhooks.list.button.add",
          defaultMessage: "Create new webhook"
        })
      )
    }
  )))), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isOpen: showModal,
      onToggleDialog: handleToggleModal,
      onConfirm: handleConfirmDelete
    }
  ));
};
/* harmony default export */ const Webhooks_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ProtectedListView/index.js




const ProtectedListView = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings.webhooks.main */.Z.settings.webhooks.main }, /* @__PURE__ */ react.createElement(Webhooks_ListView, null));
/* harmony default export */ const Webhooks_ProtectedListView = (ProtectedListView);


/***/ })

}]);