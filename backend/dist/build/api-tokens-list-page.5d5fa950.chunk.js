"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8056],{

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(36232);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(23998);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  },
  {
    name: "lastUsedAt",
    key: "lastUsedAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.lastUsedAt",
        defaultMessage: "Last used"
      },
      sortable: false
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/DeleteButton/index.js
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







const DeleteButton = ({ tokenName, onClickDelete }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadValues({ paddingLeft: 1 }, build.stopPropagation), /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => {
        trackUsage("willDeleteToken");
        onClickDelete();
      },
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: "Delete {target}"
        },
        { target: `${tokenName}` }
      ),
      name: "delete",
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash["default"], null)
    }
  ));
};
DeleteButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  onClickDelete: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_DeleteButton = (DeleteButton);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/DefaultButton/index.js






const MESSAGES_MAP = {
  edit: {
    id: "app.component.table.edit",
    defaultMessage: "Edit {target}"
  },
  read: {
    id: "app.component.table.read",
    defaultMessage: "Read {target}"
  }
};
const LinkStyled = (0,styled_components_browser_esm["default"])(build.Link)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
const DefaultButton = ({ tokenName, tokenId, buttonType, children }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  return /* @__PURE__ */ react.createElement(
    LinkStyled,
    {
      to: `${pathname}/${tokenId}`,
      title: formatMessage(MESSAGES_MAP[buttonType], { target: tokenName })
    },
    children
  );
};
DefaultButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  buttonType: (prop_types_default()).string,
  children: (prop_types_default()).node.isRequired
};
DefaultButton.defaultProps = {
  buttonType: "edit"
};
/* harmony default export */ const DynamicTable_DefaultButton = (DefaultButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/UpdateButton/index.js




const UpdateButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(DynamicTable_DefaultButton, { tokenName, tokenId }, /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null));
};
UpdateButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const DynamicTable_UpdateButton = (UpdateButton);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(8934);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/ReadButton/index.js




const ReadButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(DynamicTable_DefaultButton, { tokenName, tokenId, buttonType: "read" }, /* @__PURE__ */ react.createElement(Eye["default"], null));
};
ReadButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const DynamicTable_ReadButton = (ReadButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/index.js
var DynamicTable_defProp = Object.defineProperty;
var DynamicTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DynamicTable_hasOwnProp = Object.prototype.hasOwnProperty;
var DynamicTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var DynamicTable_defNormalProp = (obj, key, value) => key in obj ? DynamicTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DynamicTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DynamicTable_hasOwnProp.call(b, prop))
      DynamicTable_defNormalProp(a, prop, b[prop]);
  if (DynamicTable_getOwnPropSymbols)
    for (var prop of DynamicTable_getOwnPropSymbols(b)) {
      if (DynamicTable_propIsEnum.call(b, prop))
        DynamicTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const TableRows = ({ canDelete, canUpdate, canRead, onClickDelete, withBulkActions, rows }) => {
  const [{ query }] = (0,build.useQueryParams)();
  const [, sortOrder] = query.sort.split(":");
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const apiTokens = rows.sort((a, b) => {
    const comparaison = a.name.localeCompare(b.name);
    return sortOrder === "DESC" ? -comparaison : comparaison;
  });
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, apiTokens.map((apiToken) => {
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      DynamicTable_spreadValues({
        key: apiToken.id
      }, (0,build.onRowClick)({
        fn() {
          trackUsage("willEditTokenFromList");
          push(`${pathname}/${apiToken.id}`);
        },
        condition: canUpdate
      })),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800", fontWeight: "bold" }, apiToken.name)),
      /* @__PURE__ */ react.createElement(Cell.Td, { maxWidth: (0,build.pxToRem)(250) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800", ellipsis: true }, apiToken.description)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(build.RelativeTime, { timestamp: new Date(apiToken.createdAt) }))),
      /* @__PURE__ */ react.createElement(Cell.Td, null, apiToken.lastUsedAt && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(build.RelativeTime, { timestamp: new Date(apiToken.lastUsedAt) }))),
      withBulkActions && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, canUpdate && /* @__PURE__ */ react.createElement(DynamicTable_UpdateButton, { tokenName: apiToken.name, tokenId: apiToken.id }), !canUpdate && canRead && /* @__PURE__ */ react.createElement(DynamicTable_ReadButton, { tokenName: apiToken.name, tokenId: apiToken.id }), canDelete && /* @__PURE__ */ react.createElement(
        DynamicTable_DeleteButton,
        {
          tokenName: apiToken.name,
          onClickDelete: () => onClickDelete(apiToken.id)
        }
      )))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  canUpdate: false,
  canRead: false,
  onClickDelete() {
  },
  rows: [],
  withBulkActions: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  canUpdate: (prop_types_default()).bool,
  canRead: (prop_types_default()).bool,
  onClickDelete: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable = (TableRows);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/index.js
var ListView_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListView_hasOwnProp = Object.prototype.hasOwnProperty;
var ListView_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListView_defNormalProp = (obj, key, value) => key in obj ? ListView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListView_hasOwnProp.call(b, prop))
      ListView_defNormalProp(a, prop, b[prop]);
  if (ListView_getOwnPropSymbols)
    for (var prop of ListView_getOwnPropSymbols(b)) {
      if (ListView_propIsEnum.call(b, prop))
        ListView_defNormalProp(a, prop, b[prop]);
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














const ApiTokenListView = () => {
  (0,build.useFocusWhenNavigate)();
  const queryClient = (0,lib.useQueryClient)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = (0,build.useRBAC)(permissions/* default.settings.api-tokens */.Z.settings["api-tokens"]);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const { startSection } = (0,build.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("apiTokens");
    }
  }, []);
  (0,react.useEffect)(() => {
    push({ search: qs_lib_default().stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = utils_tableHeaders.map((header) => __spreadProps(ListView_spreadValues({}, header), {
    metadatas: __spreadProps(ListView_spreadValues({}, header.metadatas), {
      label: formatMessage(header.metadatas.label)
    })
  }));
  const {
    data: apiTokens,
    status,
    isFetching
  } = (0,lib.useQuery)(
    ["api-tokens"],
    () => __async(void 0, null, function* () {
      trackUsage("willAccessTokenList");
      const {
        data: { data }
      } = yield utils/* axiosInstance.get */.be.get(`/admin/api-tokens`);
      trackUsage("didAccessTokenList", { number: data.length });
      return data;
    }),
    {
      enabled: canRead,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const isLoading = canRead && (status !== "success" && status !== "error" || status === "success" && isFetching);
  const deleteMutation = (0,lib.useMutation)(
    (id) => __async(void 0, null, function* () {
      yield utils/* axiosInstance.delete */.be["delete"](`/admin/api-tokens/${id}`);
    }),
    {
      onSuccess() {
        return __async(this, null, function* () {
          yield queryClient.invalidateQueries(["api-tokens"]);
          trackUsage("didDeleteToken");
        });
      },
      onError(err) {
        var _a2, _b;
        if ((_b = (_a2 = err == null ? void 0 : err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b.data) {
          toggleNotification({ type: "warning", message: err.response.data.data });
        } else {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    }
  );
  const shouldDisplayDynamicTable = canRead && apiTokens;
  const shouldDisplayNoContent = canRead && !apiTokens && !canCreate;
  const shouldDisplayNoContentWithCreationButton = canRead && !apiTokens && canCreate;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "Settings.apiTokens.title", defaultMessage: "API Tokens" }),
      subtitle: formatMessage({
        id: "Settings.apiTokens.description",
        defaultMessage: "List of generated tokens to consume the API"
      }),
      primaryAction: canCreate ? /* @__PURE__ */ react.createElement(
        build.LinkButton,
        {
          "data-testid": "create-api-token-button",
          startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null),
          size: "S",
          onClick: () => trackUsage("willAddTokenFromList"),
          to: "/settings/api-tokens/create"
        },
        formatMessage({
          id: "Settings.apiTokens.create",
          defaultMessage: "Create new API Token"
        })
      ) : void 0
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, !canRead && /* @__PURE__ */ react.createElement(build.NoPermissions, null), shouldDisplayDynamicTable && /* @__PURE__ */ react.createElement(
    build.DynamicTable,
    {
      headers,
      contentType: "api-tokens",
      rows: apiTokens,
      withBulkActions: canDelete || canUpdate || canRead,
      isLoading,
      onConfirmDelete: (id) => deleteMutation.mutateAsync(id)
    },
    /* @__PURE__ */ react.createElement(
      DynamicTable,
      {
        canRead,
        canDelete,
        canUpdate,
        rows: apiTokens,
        withBulkActions: canDelete || canUpdate || canRead
      }
    )
  ), shouldDisplayNoContentWithCreationButton && /* @__PURE__ */ react.createElement(
    build.NoContent,
    {
      content: {
        id: "Settings.apiTokens.addFirstToken",
        defaultMessage: "Add your first API Token"
      },
      action: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null) }, formatMessage({
        id: "Settings.apiTokens.addNewToken",
        defaultMessage: "Add new API Token"
      }))
    }
  ), shouldDisplayNoContent && /* @__PURE__ */ react.createElement(
    build.NoContent,
    {
      content: {
        id: "Settings.apiTokens.emptyStateLayout",
        defaultMessage: "You don\u2019t have any content yet..."
      }
    }
  )));
};
/* harmony default export */ const ListView = (ApiTokenListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ProtectedListView/index.js




const ProtectedApiTokenListView = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings.api-tokens.main */.Z.settings["api-tokens"].main }, /* @__PURE__ */ react.createElement(ListView, null));
/* harmony default export */ const ProtectedListView = (ProtectedApiTokenListView);


/***/ })

}]);