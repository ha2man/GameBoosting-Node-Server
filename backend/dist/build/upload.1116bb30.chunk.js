"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3650],{

/***/ 62694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(39844);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js + 7 modules
var UploadAssetDialog = __webpack_require__(33012);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditFolderDialog/index.js + 5 modules
var EditFolderDialog = __webpack_require__(78971);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js + 13 modules
var EditAssetDialog = __webpack_require__(59771);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/AssetList/index.js + 1 modules
var AssetList = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderList/index.js + 1 modules
var FolderList = __webpack_require__(9383);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SortPicker/index.js
var SortPicker = __webpack_require__(27954);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js
var useAssets = __webpack_require__(73817);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolders.js
var useFolders = __webpack_require__(44466);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js





const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(build.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(build.PaginationURLQuery, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useMediaLibraryPermissions.js
var useMediaLibraryPermissions = __webpack_require__(31817);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolder.js
var useFolder = __webpack_require__(42047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(49826);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(15537);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemove.js
var useBulkRemove = __webpack_require__(2967);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkDeleteButton.js
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








const BulkDeleteButton = ({ selected, onSuccess }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { isLoading, remove } = (0,useBulkRemove/* useBulkRemove */.K)();
  const handleConfirmRemove = () => __async(void 0, null, function* () {
    yield remove(selected);
    onSuccess();
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "danger-light",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Trash["default"], null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.delete", defaultMessage: "Delete" })
  ), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isConfirmButtonLoading: isLoading,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRemove
    }
  ));
};
BulkDeleteButton.propTypes = {
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Folder.js
var Folder = __webpack_require__(32605);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(55994);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkMove.js
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




const useBulkMove = () => {
  const toggleNotification = (0,build.useNotification)();
  const queryClient = (0,lib.useQueryClient)();
  const url = (0,utils/* getRequestUrl */.IF)("actions/bulk-move");
  const bulkMoveQuery = ({ destinationFolderId, filesAndFolders }) => {
    const payload = filesAndFolders.reduce((acc, selected) => {
      const { id, type } = selected;
      const key = type === "asset" ? "fileIds" : "folderIds";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(id);
      return acc;
    }, {});
    return utils/* axiosInstance.post */.be.post(url, __spreadProps(__spreadValues({}, payload), { destinationFolderId }));
  };
  const mutation = (0,lib.useMutation)(bulkMoveQuery, {
    onSuccess(res) {
      var _a;
      const {
        data: { data }
      } = res;
      if (((_a = data == null ? void 0 : data.files) == null ? void 0 : _a.length) > 0) {
        queryClient.refetchQueries([pluginId/* default */.Z, "assets"], { active: true });
        queryClient.refetchQueries([pluginId/* default */.Z, "asset-count"], { active: true });
      }
      queryClient.refetchQueries([pluginId/* default */.Z, "folders"], { active: true });
      toggleNotification({
        type: "success",
        message: {
          id: (0,utils/* getTrad */.OB)("modal.move.success-label"),
          defaultMessage: "Elements have been moved successfully."
        }
      });
    }
  });
  const move = (destinationFolderId, filesAndFolders) => mutation.mutateAsync({ destinationFolderId, filesAndFolders });
  return __spreadProps(__spreadValues({}, mutation), { move });
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SelectTree/index.js + 4 modules
var SelectTree = __webpack_require__(66951);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolderStructure.js + 1 modules
var useFolderStructure = __webpack_require__(20796);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/BulkMoveDialog.js
var BulkMoveDialog_async = (__this, __arguments, generator) => {
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



















const BulkMoveDialog = ({ onClose, selected, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { data: folderStructure, isLoading } = (0,useFolderStructure/* useFolderStructure */.v)();
  const { move } = useBulkMove();
  if (!folderStructure) {
    return null;
  }
  const handleSubmit = (_0, _1) => BulkMoveDialog_async(void 0, [_0, _1], function* (values, { setErrors }) {
    try {
      yield move(values.destination.value, selected);
      onClose();
    } catch (error) {
      const errors = (0,build.getAPIInnerErrors)(error, { getTrad: utils/* getTrad */.OB });
      const formikErrors = Object.entries(errors).reduce((acc, [key, error2]) => {
        acc[key || "destination"] = error2.defaultMessage;
        return acc;
      }, {});
      if (!isEmpty_default()(formikErrors)) {
        setErrors(formikErrors);
      }
    }
  });
  const handleClose = () => {
    onClose();
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
      id: (0,utils/* getTrad */.OB)("content.isLoading"),
      defaultMessage: "Content is loading."
    })))));
  }
  const initialFormData = {
    destination: {
      value: (currentFolder == null ? void 0 : currentFolder.id) || "",
      label: (currentFolder == null ? void 0 : currentFolder.name) || folderStructure[0].label
    }
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(dist.Formik, { validateOnChange: false, onSubmit: handleSubmit, initialValues: initialFormData }, ({ values, errors, setFieldValue }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.folder.move.title"),
    defaultMessage: "Move elements to"
  }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { xs: 12, col: 12 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { htmlFor: "folder-destination" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("form.input.label.folder-location"),
    defaultMessage: "Location"
  })), /* @__PURE__ */ react.createElement(
    SelectTree/* default */.Z,
    {
      options: folderStructure,
      onChange: (value) => {
        setFieldValue("destination", value);
      },
      defaultValue: values.destination,
      name: "destination",
      menuPortalTarget: document.querySelector("body"),
      inputId: "folder-destination",
      error: errors == null ? void 0 : errors.destination,
      ariaErrorMessage: "destination-error"
    }
  ), errors.destination && /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      variant: "pi",
      as: "p",
      id: "folder-destination-error",
      textColor: "danger600"
    },
    errors.destination
  ))))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleClose, variant: "tertiary", name: "cancel" }, formatMessage({ id: "cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isLoading }, formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }))
    }
  ))));
};
BulkMoveDialog.defaultProps = {
  currentFolder: void 0
};
BulkMoveDialog.propTypes = {
  onClose: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* FolderDefinition */.nx, constants/* AssetDefinition */.pw).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkMoveButton.js







const BulkMoveButton = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleConfirmMove = () => {
    setShowConfirmDialog(false);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "secondary",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Folder/* default */.Z, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.move", defaultMessage: "Move" })
  ), showConfirmDialog && /* @__PURE__ */ react.createElement(
    BulkMoveDialog,
    {
      currentFolder,
      onClose: handleConfirmMove,
      selected
    }
  ));
};
BulkMoveButton.defaultProps = {
  currentFolder: void 0
};
BulkMoveButton.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkActions.js









const BulkActions = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
    {
      id: (0,getTrad/* default */.Z)("list.assets.selected"),
      defaultMessage: "{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"
    },
    {
      numberFolders: selected.filter(({ type }) => type === "folder").length,
      numberAssets: selected.filter(({ type }) => type === "asset").length
    }
  )), /* @__PURE__ */ react.createElement(BulkDeleteButton, { selected, onSuccess }), /* @__PURE__ */ react.createElement(BulkMoveButton, { currentFolder, selected, onSuccess }));
};
BulkActions.defaultProps = {
  currentFolder: void 0
};
BulkActions.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderCard/index.js + 9 modules
var FolderCard = __webpack_require__(98101);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.js
var Filter = __webpack_require__(89597);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterList/index.js + 1 modules
var FilterList = __webpack_require__(51386);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterPopover/index.js + 2 modules
var FilterPopover = __webpack_require__(45219);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/displayedFilters.js
var displayedFilters = __webpack_require__(97581);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Filters.js








const Filters = () => {
  var _a;
  const buttonRef = (0,react.useRef)(null);
  const [isVisible, setVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const [{ query }, setQuery] = (0,build.useQueryParams)();
  const filters = ((_a = query == null ? void 0 : query.filters) == null ? void 0 : _a.$and) || [];
  const toggleFilter = () => setVisible((prev) => !prev);
  const handleRemoveFilter = (nextFilters) => {
    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };
  const handleSubmit = (filters2) => {
    trackUsage("didFilterMediaLibraryElements", {
      location: "content-manager",
      filter: Object.keys(filters2[filters2.length - 1])[0]
    });
    setQuery({ filters: { $and: filters2 }, page: 1 });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.Z, null),
      onClick: toggleFilter,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    FilterPopover/* default */.Z,
    {
      displayedFilters: displayedFilters/* default */.Z,
      filters,
      onSubmit: handleSubmit,
      onToggle: toggleFilter,
      source: buttonRef
    }
  ), /* @__PURE__ */ react.createElement(
    FilterList/* default */.Z,
    {
      appliedFilters: filters,
      filtersSchema: displayedFilters/* default */.Z,
      onRemoveFilter: handleRemoveFilter
    }
  ));
};

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(36232);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/Breadcrumbs/index.js + 9 modules
var Breadcrumbs = __webpack_require__(67851);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Header.js
var Header_defProp = Object.defineProperty;
var Header_defProps = Object.defineProperties;
var Header_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Header_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Header_hasOwnProp = Object.prototype.hasOwnProperty;
var Header_propIsEnum = Object.prototype.propertyIsEnumerable;
var Header_defNormalProp = (obj, key, value) => key in obj ? Header_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Header_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Header_hasOwnProp.call(b, prop))
      Header_defNormalProp(a, prop, b[prop]);
  if (Header_getOwnPropSymbols)
    for (var prop of Header_getOwnPropSymbols(b)) {
      if (Header_propIsEnum.call(b, prop))
        Header_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Header_spreadProps = (a, b) => Header_defProps(a, Header_getOwnPropDescs(b));















const Header = ({
  breadcrumbs,
  canCreate,
  folder,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog
}) => {
  var _a, _b;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const [{ query }] = (0,build.useQueryParams)();
  const backQuery = Header_spreadProps(Header_spreadValues({}, query), {
    folder: (_b = (_a = folder == null ? void 0 : folder.parent) == null ? void 0 : _a.id) != null ? _b : void 0
  });
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("plugin.name"),
        defaultMessage: `Media Library`
      }),
      subtitle: breadcrumbs && folder && /* @__PURE__ */ react.createElement(
        Breadcrumbs/* Breadcrumbs */.O,
        {
          as: "nav",
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("header.breadcrumbs.nav.label"),
            defaultMessage: "Folders navigation"
          }),
          breadcrumbs,
          currentFolderId: folder == null ? void 0 : folder.id
        }
      ),
      navigationAction: folder && /* @__PURE__ */ react.createElement(
        Link/* Link */.r,
        {
          startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
          to: `${pathname}?${(0,qs_lib.stringify)(backQuery, { encode: false })}`
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("header.actions.folder-level-up"),
          defaultMessage: "Back"
        })
      ),
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), variant: "secondary", onClick: onToggleEditFolderDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-folder"),
        defaultMessage: "Add new folder"
      })), /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onToggleUploadAssetDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })))
    }
  );
};
Header.defaultProps = {
  breadcrumbs: false,
  folder: null
};
Header.propTypes = {
  breadcrumbs: prop_types_default().oneOfType([constants/* BreadcrumbsDefinition */.Fv, (prop_types_default()).bool]),
  canCreate: (prop_types_default()).bool.isRequired,
  folder: constants/* FolderDefinition */.nx,
  onToggleEditFolderDialog: (prop_types_default()).func.isRequired,
  onToggleUploadAssetDialog: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPermissions.js
var EmptyPermissions = __webpack_require__(65169);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EmptyAssets/index.js + 1 modules
var EmptyAssets = __webpack_require__(70088);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/EmptyOrNoPermissions.js
var EmptyOrNoPermissions_defProp = Object.defineProperty;
var EmptyOrNoPermissions_defProps = Object.defineProperties;
var EmptyOrNoPermissions_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EmptyOrNoPermissions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EmptyOrNoPermissions_hasOwnProp = Object.prototype.hasOwnProperty;
var EmptyOrNoPermissions_propIsEnum = Object.prototype.propertyIsEnumerable;
var EmptyOrNoPermissions_defNormalProp = (obj, key, value) => key in obj ? EmptyOrNoPermissions_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EmptyOrNoPermissions_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EmptyOrNoPermissions_hasOwnProp.call(b, prop))
      EmptyOrNoPermissions_defNormalProp(a, prop, b[prop]);
  if (EmptyOrNoPermissions_getOwnPropSymbols)
    for (var prop of EmptyOrNoPermissions_getOwnPropSymbols(b)) {
      if (EmptyOrNoPermissions_propIsEnum.call(b, prop))
        EmptyOrNoPermissions_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EmptyOrNoPermissions_spreadProps = (a, b) => EmptyOrNoPermissions_defProps(a, EmptyOrNoPermissions_getOwnPropDescs(b));








const getContentIntlMessage = ({ isFiltering, canCreate, canRead }) => {
  if (isFiltering) {
    return {
      id: "list.assets-empty.title-withSearch",
      defaultMessage: "There are no elements with the applied filters"
    };
  }
  if (canRead) {
    if (canCreate) {
      return {
        id: "list.assets.empty-upload",
        defaultMessage: "Upload your first assets..."
      };
    }
    return {
      id: "list.assets.empty",
      defaultMessage: "Media Library is empty"
    };
  }
  return {
    id: "header.actions.no-permissions",
    defaultMessage: "No permissions to view"
  };
};
const EmptyOrNoPermissions = ({ canCreate, isFiltering, canRead, onActionClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const content = getContentIntlMessage({ isFiltering, canCreate, canRead });
  return /* @__PURE__ */ react.createElement(
    EmptyAssets/* EmptyAssets */.i,
    {
      icon: !canRead ? EmptyPermissions["default"] : null,
      action: canCreate && !isFiltering && /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onActionClick }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })),
      content: formatMessage(EmptyOrNoPermissions_spreadProps(EmptyOrNoPermissions_spreadValues({}, content), {
        id: (0,utils/* getTrad */.OB)(content.id)
      }))
    }
  );
};
EmptyOrNoPermissions.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  isFiltering: (prop_types_default()).bool.isRequired,
  onActionClick: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary.js
var MediaLibrary_defProp = Object.defineProperty;
var MediaLibrary_defProps = Object.defineProperties;
var MediaLibrary_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MediaLibrary_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MediaLibrary_hasOwnProp = Object.prototype.hasOwnProperty;
var MediaLibrary_propIsEnum = Object.prototype.propertyIsEnumerable;
var MediaLibrary_defNormalProp = (obj, key, value) => key in obj ? MediaLibrary_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MediaLibrary_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MediaLibrary_hasOwnProp.call(b, prop))
      MediaLibrary_defNormalProp(a, prop, b[prop]);
  if (MediaLibrary_getOwnPropSymbols)
    for (var prop of MediaLibrary_getOwnPropSymbols(b)) {
      if (MediaLibrary_propIsEnum.call(b, prop))
        MediaLibrary_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MediaLibrary_spreadProps = (a, b) => MediaLibrary_defProps(a, MediaLibrary_getOwnPropDescs(b));

































const BoxWithHeight = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  max-width: 100%;
`;
const MediaLibrary = () => {
  var _a, _b, _c, _d;
  const { push } = (0,react_router_dom_min.useHistory)();
  const {
    canRead,
    canCreate,
    canUpdate,
    canCopyLink,
    canDownload,
    isLoading: permissionsLoading
  } = (0,useMediaLibraryPermissions/* useMediaLibraryPermissions */.y)();
  const currentFolderToEditRef = (0,react.useRef)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { trackUsage } = (0,build.useTracking)();
  const [{ query }, setQuery] = (0,build.useQueryParams)();
  const isFiltering = Boolean(query._q || query.filters);
  const {
    data: assetsData,
    isLoading: assetsLoading,
    errors: assetsError
  } = (0,useAssets/* useAssets */.L)({
    skipWhen: !canRead,
    query
  });
  const {
    data: folders = [],
    isLoading: foldersLoading,
    errors: foldersError
  } = (0,useFolders/* useFolders */.j)({
    enabled: canRead && ((_a = assetsData == null ? void 0 : assetsData.pagination) == null ? void 0 : _a.page) === 1 && !(0,utils/* containsAssetFilter */.rV)(query),
    query
  });
  const {
    data: currentFolder,
    isLoading: isCurrentFolderLoading,
    error: currentFolderError
  } = (0,useFolder/* useFolder */.W)(query == null ? void 0 : query.folder, {
    enabled: canRead && !!(query == null ? void 0 : query.folder)
  });
  if (((_b = currentFolderError == null ? void 0 : currentFolderError.response) == null ? void 0 : _b.status) === 404) {
    push(pathname);
  }
  const folderCount = folders.length;
  const assets = assetsData == null ? void 0 : assetsData.results;
  const assetCount = (_c = assets == null ? void 0 : assets.length) != null ? _c : 0;
  const isLoading = isCurrentFolderLoading || foldersLoading || permissionsLoading || assetsLoading;
  const [showUploadAssetDialog, setShowUploadAssetDialog] = (0,react.useState)(false);
  const [showEditFolderDialog, setShowEditFolderDialog] = (0,react.useState)(false);
  const [assetToEdit, setAssetToEdit] = (0,react.useState)(void 0);
  const [folderToEdit, setFolderToEdit] = (0,react.useState)(void 0);
  const [selected, { selectOne, selectAll }] = (0,build.useSelectionState)(["type", "id"], []);
  const toggleUploadAssetDialog = () => setShowUploadAssetDialog((prev) => !prev);
  const toggleEditFolderDialog = ({ created = false } = {}) => {
    if (created && (query == null ? void 0 : query.page) !== "1") {
      setQuery(MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, query), {
        page: 1
      }));
    }
    setShowEditFolderDialog((prev) => !prev);
  };
  const handleChangeSort = (value) => {
    trackUsage("didSortMediaLibraryElements", {
      location: "upload",
      sort: value
    });
    setQuery({ sort: value });
  };
  const handleEditFolder = (folder) => {
    setFolderToEdit(folder);
    setShowEditFolderDialog(true);
  };
  const handleEditFolderClose = (payload) => {
    setFolderToEdit(null);
    toggleEditFolderDialog(payload);
    if (currentFolderToEditRef.current) {
      currentFolderToEditRef.current.focus();
    }
  };
  const handleAssetDeleted = (numberOfAssets) => {
    if (numberOfAssets === assetCount && assetsData.pagination.page === assetsData.pagination.pageCount && assetsData.pagination.page > 1) {
      setQuery(MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, query), {
        page: assetsData.pagination.page - 1
      }));
    }
  };
  const handleBulkActionSuccess = () => {
    selectAll();
    handleAssetDeleted(selected.length);
  };
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    Header,
    {
      breadcrumbs: !isCurrentFolderLoading && (0,utils/* getBreadcrumbDataML */.M4)(currentFolder, { pathname, query }),
      canCreate,
      onToggleEditFolderDialog: toggleEditFolderDialog,
      onToggleUploadAssetDialog: toggleUploadAssetDialog,
      folder: currentFolder
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, canUpdate && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
        BoxWithHeight,
        {
          paddingLeft: 2,
          paddingRight: 2,
          background: "neutral0",
          hasRadius: true,
          borderColor: "neutral200"
        },
        /* @__PURE__ */ react.createElement(
          BaseCheckbox/* BaseCheckbox */.C,
          {
            "aria-label": formatMessage({
              id: (0,utils/* getTrad */.OB)("bulk.select.label"),
              defaultMessage: "Select all folders & assets"
            }),
            indeterminate: (selected == null ? void 0 : selected.length) > 0 && (selected == null ? void 0 : selected.length) !== assetCount + folderCount,
            value: (assetCount > 0 || folderCount > 0) && selected.length === assetCount + folderCount,
            onChange: (e) => {
              if (e.target.checked) {
                trackUsage("didSelectAllMediaLibraryElements");
              }
              selectAll([
                ...assets.map((asset) => MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, asset), { type: "asset" })),
                ...folders.map((folder) => MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, folder), { type: "folder" }))
              ]);
            }
          }
        )
      ), canRead && /* @__PURE__ */ react.createElement(SortPicker/* default */.Z, { onChangeSort: handleChangeSort }), canRead && /* @__PURE__ */ react.createElement(Filters, null)),
      endActions: /* @__PURE__ */ react.createElement(
        build.SearchURLQuery,
        {
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("search.label"),
            defaultMessage: "Search for an asset"
          }),
          trackedEvent: "didSearchMediaLibraryElements",
          trackedEventDetails: { location: "upload" }
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, selected.length > 0 && /* @__PURE__ */ react.createElement(
    BulkActions,
    {
      currentFolder,
      selected,
      onSuccess: handleBulkActionSuccess
    }
  ), isLoading && /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null), (assetsError || foldersError) && /* @__PURE__ */ react.createElement(build.AnErrorOccurred, null), folderCount === 0 && assetCount === 0 && /* @__PURE__ */ react.createElement(
    EmptyOrNoPermissions,
    {
      canCreate,
      canRead,
      isFiltering,
      onActionClick: toggleUploadAssetDialog
    }
  ), canRead && /* @__PURE__ */ react.createElement(react.Fragment, null, folderCount > 0 && /* @__PURE__ */ react.createElement(
    FolderList/* FolderList */.$,
    {
      title: (isFiltering && assetCount > 0 || !isFiltering) && formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("list.folders.title"),
          defaultMessage: "Folders ({count})"
        },
        { count: folderCount }
      ) || ""
    },
    folders.map((folder) => {
      const selectedFolders = selected.filter(({ type }) => type === "folder");
      const isSelected = !!selectedFolders.find(
        (currentFolder2) => currentFolder2.id === folder.id
      );
      const url = (0,utils/* getFolderURL */.Km)(pathname, query, folder);
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3, key: `folder-${folder.id}` }, /* @__PURE__ */ react.createElement(
        FolderCard/* FolderCard */.Ac,
        {
          ref: folderToEdit && folder.id === folderToEdit.id ? currentFolderToEditRef : void 0,
          ariaLabel: folder.name,
          id: `folder-${folder.id}`,
          to: url,
          startAction: selectOne && /* @__PURE__ */ react.createElement(
            FolderCard/* FolderCardCheckbox */.MM,
            {
              "data-testid": `folder-checkbox-${folder.id}`,
              value: isSelected,
              onChange: () => selectOne(MediaLibrary_spreadProps(MediaLibrary_spreadValues({}, folder), { type: "folder" }))
            }
          ),
          cardActions: /* @__PURE__ */ react.createElement(
            IconButton/* IconButton */.h,
            {
              icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
              "aria-label": formatMessage({
                id: (0,utils/* getTrad */.OB)("list.folder.edit"),
                defaultMessage: "Edit folder"
              }),
              onClick: () => handleEditFolder(folder)
            }
          )
        },
        /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBody */.Bu, null, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBodyAction */.u6, { to: url }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "h2", direction: "column", alignItems: "start", maxWidth: "100%" }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, { fontWeight: "semiBold", ellipsis: true }, folder.name, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, ":")), /* @__PURE__ */ react.createElement(
          TypographyMaxWidth,
          {
            as: "span",
            textColor: "neutral600",
            variant: "pi",
            ellipsis: true
          },
          formatMessage(
            {
              id: (0,utils/* getTrad */.OB)("list.folder.subtitle"),
              defaultMessage: "{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"
            },
            {
              folderCount: folder.children.count,
              filesCount: folder.files.count
            }
          )
        ))))
      ));
    })
  ), assetCount > 0 && folderCount > 0 && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)), assetCount > 0 && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    AssetList/* AssetList */.l,
    {
      assets,
      onEditAsset: setAssetToEdit,
      onSelectAsset: selectOne,
      selectedAssets: selected.filter(({ type }) => type === "asset"),
      title: (!isFiltering || isFiltering && folderCount > 0) && ((_d = assetsData == null ? void 0 : assetsData.pagination) == null ? void 0 : _d.page) === 1 && formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("list.assets.title"),
          defaultMessage: "Assets ({count})"
        },
        { count: assetCount }
      ) || ""
    }
  ), (assetsData == null ? void 0 : assetsData.pagination) && /* @__PURE__ */ react.createElement(PaginationFooter, { pagination: assetsData.pagination }))))), showUploadAssetDialog && /* @__PURE__ */ react.createElement(
    UploadAssetDialog/* UploadAssetDialog */.x,
    {
      onClose: toggleUploadAssetDialog,
      trackedLocation: "upload",
      folderId: query == null ? void 0 : query.folder
    }
  ), showEditFolderDialog && /* @__PURE__ */ react.createElement(
    EditFolderDialog/* EditFolderDialog */.f,
    {
      onClose: handleEditFolderClose,
      folder: folderToEdit,
      parentFolderId: query == null ? void 0 : query.folder,
      location: "upload"
    }
  ), assetToEdit && /* @__PURE__ */ react.createElement(
    EditAssetDialog/* EditAssetDialog */.s,
    {
      onClose: (editedAsset) => {
        if (editedAsset === null) {
          handleAssetDeleted(1);
        }
        setAssetToEdit(void 0);
      },
      asset: assetToEdit,
      canUpdate,
      canCopyLink,
      canDownload,
      trackedLocation: "upload"
    }
  ));
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js






const App = () => {
  const [{ rawQuery }, setQuery] = (0,build.useQueryParams)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({ id: (0,utils/* getTrad */.OB)("plugin.name"), defaultMessage: "Media Library" });
  (0,react.useEffect)(() => {
    if (!rawQuery) {
      setQuery({ sort: "updatedAt:DESC", page: 1, pageSize: 10 });
    }
  }, [rawQuery, setQuery]);
  if (rawQuery) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title }), /* @__PURE__ */ react.createElement(MediaLibrary, null));
  }
  return null;
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 36989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35961);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46273);





const l = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[2]};
  }

  margin-left: ${({ pullRight: t }) => t ? "auto" : void 0};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(l)`
  flex-shrink: 0;
`, p = ({ startActions: t, endActions: o }) => t || o ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
  paddingLeft: 10,
  paddingRight: 10
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
  paddingBottom: 4
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, {
  justifyContent: "space-between",
  alignItems: "flex-start"
}, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, {
  wrap: "wrap"
}, t), o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(m, {
  pullRight: !0
}, o)))) : null;
p.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
p.propTypes = {
  endActions: prop_types__WEBPACK_IMPORTED_MODULE_4__.node,
  startActions: prop_types__WEBPACK_IMPORTED_MODULE_4__.node
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

/***/ 23620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var _strapi_icons_ExternalLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17772);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49656);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72735);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35961);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15585);
var b = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var p = (e, r, o) => r in e ? b(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, v = (e, r) => {
  for (var o in r || (r = {}))
    f.call(r, o) && p(e, o, r[o]);
  if (i)
    for (var o of i(r))
      u.call(r, o) && p(e, o, r[o]);
  return e;
};
var y = (e, r) => {
  var o = {};
  for (var t in e)
    f.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && i)
    for (var t of i(e))
      r.indexOf(t) < 0 && u.call(e, t) && (o[t] = e[t]);
  return o;
};








const T = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled: e }) => e ? "none" : void 0};
  color: ${({ disabled: e, theme: r }) => e ? r.colors.neutral600 : r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme: e }) => e.colors.primary500};
  }

  &:active {
    color: ${({ theme: e }) => e.colors.primary700};
  }

  ${_themes_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .buttonFocusStyle */ .BF};
`, l = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x)`
  display: flex;
`, d = (_) => {
  var c = _, { href: e, to: r, children: o, disabled: t, startIcon: s, endIcon: m } = c, E = y(c, ["href", "to", "children", "disabled", "startIcon", "endIcon"]);
  const L = e ? "_blank" : void 0, $ = e ? "noreferrer noopener" : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(T, v({
    as: r && !t ? react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink : "a",
    target: L,
    rel: $,
    to: t ? void 0 : r,
    href: t ? "#" : e,
    disabled: t
  }, E), s && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, {
    as: "span",
    "aria-hidden": !0,
    paddingRight: 2
  }, s), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, null, o), m && !e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2
  }, m), e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons_ExternalLink__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};
d.displayName = "Link";
d.defaultProps = {
  endIcon: void 0,
  href: void 0,
  to: void 0,
  disabled: !1,
  startIcon: void 0
};
d.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  endIcon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  href(e) {
    if (!e.disabled && !e.to && !e.href)
      return new Error("href must be defined");
  },
  startIcon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  to(e) {
    if (!e.disabled && !e.href && !e.to)
      return new Error("to must be defined");
  }
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

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var l = (a, e, t) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, n = (a, e) => {
  for (var t in e || (e = {}))
    m.call(e, t) && l(a, t, e[t]);
  if (r)
    for (var t of r(e))
      w.call(e, t) && l(a, t, e[t]);
  return a;
};

function L(a) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",
    fill: "#212134"
  }));
}



/***/ })

}]);