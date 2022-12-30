"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5905],{

/***/ 8317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(26478);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(13588);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(5002);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(70982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/index.js











const StyledFontAwesomeIcon = (0,styled_components_browser_esm["default"])(index_es/* FontAwesomeIcon */.G)`
  width: ${(0,build.pxToRem)(32)} !important;
  height: ${(0,build.pxToRem)(32)} !important;
  padding: ${(0,build.pxToRem)(9)};
  border-radius: ${(0,build.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.neutral150};
  path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const CloseButton = styled_components_browser_esm["default"].div`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,build.pxToRem)(8)};

  svg {
    width: ${(0,build.pxToRem)(10)};
    height: ${(0,build.pxToRem)(10)};
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(140)};
  height: ${(0,build.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${CloseButton} {
      display: block;
    }

    ${StyledFontAwesomeIcon} {
      background: ${({ theme }) => theme.colors.primary200};
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const StackCentered = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  align-items: center;
`;
function ComponentCard({ component, dzName, index, isActive, isInDevelopmentMode, onClick }) {
  const { modifiedData, removeComponentFromDynamicZone } = (0,useDataManager/* default */.Z)();
  const {
    schema: { icon, displayName }
  } = get_default()(modifiedData, ["components", component], {
    schema: { icon: null }
  });
  const onClose = (e) => {
    e.stopPropagation();
    removeComponentFromDynamicZone(dzName, index);
  };
  return /* @__PURE__ */ react.createElement("button", { type: "button", onClick }, /* @__PURE__ */ react.createElement(
    ComponentBox,
    {
      className: isActive ? "active" : "",
      borderRadius: "borderRadius",
      paddingLeft: 4,
      paddingRight: 4
    },
    /* @__PURE__ */ react.createElement(StackCentered, { spacing: 1 }, /* @__PURE__ */ react.createElement(StyledFontAwesomeIcon, { icon: icon || "dice-d6" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { maxWidth: `calc(${(0,build.pxToRem)(140)} - 32px)` }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", ellipsis: true }, displayName))),
    isInDevelopmentMode && /* @__PURE__ */ react.createElement(
      CloseButton,
      {
        role: "button",
        tabIndex: 0,
        onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && onClose(e),
        onClick: onClose
      },
      /* @__PURE__ */ react.createElement(Cross["default"], null)
    )
  ));
}
ComponentCard.defaultProps = {
  component: null,
  isActive: false,
  isInDevelopmentMode: false,
  onClick() {
  }
};
ComponentCard.propTypes = {
  component: (prop_types_default()).string,
  dzName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool,
  isInDevelopmentMode: (prop_types_default()).bool,
  onClick: (prop_types_default()).func
};
/* harmony default export */ const components_ComponentCard = (ComponentCard);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Tr/index.js


const Tr_Tr = styled_components_browser_esm["default"].tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,build.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,build.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({ isFromDynamicZone, isChildOfDynamicZone, theme }) => {
  if (isChildOfDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  if (isFromDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  return `background: ${theme.colors.neutral150};`;
}}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;
/* harmony default export */ const components_Tr = (Tr_Tr);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentList/index.js






function ComponentList({
  customRowComponent,
  component,
  isFromDynamicZone,
  isNestedInDZComponent,
  firstLoopComponentUid
}) {
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  const {
    schema: { attributes }
  } = get_default()(modifiedData, ["components", component], {
    schema: { attributes: [] }
  });
  return /* @__PURE__ */ react.createElement(components_Tr, { isChildOfDynamicZone: isFromDynamicZone, className: "component-row" }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      customRowComponent,
      items: attributes,
      targetUid: component,
      firstLoopComponentUid: firstLoopComponentUid || component,
      editTarget: "components",
      isFromDynamicZone,
      isNestedInDZComponent,
      isSub: true,
      secondLoopComponentUid: firstLoopComponentUid ? component : null
    }
  )));
}
ComponentList.defaultProps = {
  component: null,
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false
};
ComponentList.propTypes = {
  component: (prop_types_default()).string,
  customRowComponent: (prop_types_default()).func,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool
};
/* harmony default export */ const components_ComponentList = (ComponentList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DynamicZoneList/index.js
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














const StyledAddIcon = (0,styled_components_browser_esm["default"])(Plus["default"])`
  width: ${(0,build.pxToRem)(32)};
  height: ${(0,build.pxToRem)(32)};
  padding: ${(0,build.pxToRem)(9)};
  border-radius: ${(0,build.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.primary100};
  path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const FixedBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  height: ${(0,build.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const ScrollableStack = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  width: 100%;
  overflow-x: auto;
`;
const ComponentContentBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  padding-top: ${(0,build.pxToRem)(90)};
`;
const ComponentStack = (0,styled_components_browser_esm["default"])(Stack/* Stack */.K)`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(140)};
  height: ${(0,build.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;
function DynamicZoneList({ customRowComponent, components, addComponent, name, targetUid }) {
  const { isInDevelopmentMode } = (0,useDataManager/* default */.Z)();
  const [activeTab, setActiveTab] = (0,react.useState)(0);
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleClickAdd = () => {
    addComponent(name);
  };
  return /* @__PURE__ */ react.createElement(components_Tr, { className: "dynamiczone-row", isFromDynamicZone: true }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(FixedBox, { paddingLeft: 8 }, /* @__PURE__ */ react.createElement(ScrollableStack, { horizontal: true, spacing: 2 }, isInDevelopmentMode && /* @__PURE__ */ react.createElement("button", { type: "button", onClick: handleClickAdd }, /* @__PURE__ */ react.createElement(ComponentStack, { spacing: 1 }, /* @__PURE__ */ react.createElement(StyledAddIcon, null), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "primary600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("button.component.add"),
    formatMessage: "Add a component"
  })))), components.map((component, index) => {
    return /* @__PURE__ */ react.createElement(
      components_ComponentCard,
      {
        key: component,
        dzName: name,
        index,
        component,
        isActive: activeTab === index,
        isInDevelopmentMode,
        onClick: () => toggle(index)
      }
    );
  }))), /* @__PURE__ */ react.createElement(ComponentContentBox, null, components.map((component, index) => {
    const props = {
      customRowComponent,
      component
    };
    return /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        tabId: `${index}`,
        key: component,
        style: { display: activeTab === index ? "block" : "none" }
      },
      /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement(
        components_ComponentList,
        __spreadProps(__spreadValues({}, props), {
          isFromDynamicZone: true,
          targetUid,
          key: component
        })
      )))
    );
  }))));
}
DynamicZoneList.defaultProps = {
  addComponent() {
  },
  components: [],
  customRowComponent: null,
  name: null
};
DynamicZoneList.propTypes = {
  addComponent: (prop_types_default()).func,
  components: prop_types_default().instanceOf(Array),
  customRowComponent: (prop_types_default()).func,
  name: (prop_types_default()).string,
  targetUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/BoxWrapper.js


const BoxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral150};

    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;
/* harmony default export */ const List_BoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/NestedTFooter/index.js
var NestedTFooter_defProp = Object.defineProperty;
var NestedTFooter_getOwnPropSymbols = Object.getOwnPropertySymbols;
var NestedTFooter_hasOwnProp = Object.prototype.hasOwnProperty;
var NestedTFooter_propIsEnum = Object.prototype.propertyIsEnumerable;
var NestedTFooter_defNormalProp = (obj, key, value) => key in obj ? NestedTFooter_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var NestedTFooter_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (NestedTFooter_hasOwnProp.call(b, prop))
      NestedTFooter_defNormalProp(a, prop, b[prop]);
  if (NestedTFooter_getOwnPropSymbols)
    for (var prop of NestedTFooter_getOwnPropSymbols(b)) {
      if (NestedTFooter_propIsEnum.call(b, prop))
        NestedTFooter_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (NestedTFooter_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && NestedTFooter_getOwnPropSymbols)
    for (var prop of NestedTFooter_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && NestedTFooter_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






const IconBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme, color }) => theme.colors[`${color}600`]};
  }
`;
const ButtonBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`;
const NestedTFooter = (_a) => {
  var _b = _a, { children, icon, color } = _b, props = __objRest(_b, ["children", "icon", "color"]);
  return /* @__PURE__ */ react.createElement(ButtonBox, NestedTFooter_spreadValues({ paddingBottom: 4, paddingTop: 4, as: "button", type: "button" }, props), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(IconBox, { color, "aria-hidden": true, background: `${color}200` }, icon), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: `${color}600` }, children))));
};
NestedTFooter.propTypes = {
  color: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).string.isRequired,
  icon: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_NestedTFooter = (NestedTFooter);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/index.js
var List_defProp = Object.defineProperty;
var List_defProps = Object.defineProperties;
var List_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var List_getOwnPropSymbols = Object.getOwnPropertySymbols;
var List_hasOwnProp = Object.prototype.hasOwnProperty;
var List_propIsEnum = Object.prototype.propertyIsEnumerable;
var List_defNormalProp = (obj, key, value) => key in obj ? List_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var List_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (List_hasOwnProp.call(b, prop))
      List_defNormalProp(a, prop, b[prop]);
  if (List_getOwnPropSymbols)
    for (var prop of List_getOwnPropSymbols(b)) {
      if (List_propIsEnum.call(b, prop))
        List_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var List_spreadProps = (a, b) => List_defProps(a, List_getOwnPropDescs(b));
















function List({
  addComponentToDZ,
  customRowComponent,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  isMain,
  isNestedInDZComponent,
  isSub,
  items,
  secondLoopComponentUid,
  targetUid
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { isInDevelopmentMode, modifiedData, isInContentTypeView } = (0,useDataManager/* default */.Z)();
  const { onOpenModalAddField } = (0,useFormModalNavigation/* default */.Z)();
  const onClickAddField = () => {
    trackUsage("hasClickedCTBAddFieldBanner");
    onOpenModalAddField({ forTarget: editTarget, targetUid });
  };
  if (!targetUid) {
    return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      build.EmptyBodyTable,
      {
        colSpan: 2,
        content: {
          id: (0,getTrad/* default */.Z)("table.content.create-first-content-type"),
          defaultMessage: "Create your first Collection-Type"
        }
      }
    ));
  }
  if (items.length === 0 && isMain) {
    return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      build.EmptyBodyTable,
      {
        action: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClickAddField, size: "L", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), variant: "secondary" }, formatMessage({
          id: (0,getTrad/* default */.Z)("table.button.no-fields"),
          defaultMessage: "Add new field"
        })),
        colSpan: 2,
        content: isInContentTypeView ? {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.collection-type"),
          defaultMessage: "Add your first field to this Collection-Type"
        } : {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.component"),
          defaultMessage: "Add your first field to this component"
        }
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(List_BoxWrapper, null, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    List_spreadValues({
      paddingLeft: 6,
      paddingRight: isMain ? 6 : 0
    }, isMain && { style: { overflowX: "auto" } }),
    /* @__PURE__ */ react.createElement("table", null, isMain && /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement("th", { colSpan: "2" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement("tbody", null, items.map((item) => {
      const { type } = item;
      const CustomRow = customRowComponent;
      return /* @__PURE__ */ react.createElement(react.Fragment, { key: item.name }, /* @__PURE__ */ react.createElement(
        CustomRow,
        List_spreadProps(List_spreadValues({}, item), {
          isNestedInDZComponent,
          targetUid,
          editTarget,
          firstLoopComponentUid,
          isFromDynamicZone,
          secondLoopComponentUid
        })
      ), type === "component" && /* @__PURE__ */ react.createElement(
        components_ComponentList,
        List_spreadProps(List_spreadValues({}, item), {
          customRowComponent,
          targetUid,
          isNestedInDZComponent: isFromDynamicZone,
          editTarget,
          firstLoopComponentUid
        })
      ), type === "dynamiczone" && /* @__PURE__ */ react.createElement(
        components_DynamicZoneList,
        List_spreadProps(List_spreadValues({}, item), {
          customRowComponent,
          addComponent: addComponentToDZ,
          targetUid
        })
      ));
    })))
  ), isMain && isInDevelopmentMode && /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { icon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onClickAddField }, formatMessage({
    id: (0,getTrad/* default */.Z)(
      `form.button.add.field.to.${modifiedData.contentType ? modifiedData.contentType.schema.kind : editTarget || "collectionType"}`
    ),
    defaultMessage: "Add another field"
  })), isSub && isInDevelopmentMode && /* @__PURE__ */ react.createElement(
    components_NestedTFooter,
    {
      icon: /* @__PURE__ */ react.createElement(Plus["default"], null),
      onClick: onClickAddField,
      color: isFromDynamicZone ? "primary" : "neutral"
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)(`form.button.add.field.to.component`),
      defaultMessage: "Add another field"
    })
  ));
}
List.defaultProps = {
  addComponentToDZ() {
  },
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false,
  isMain: false,
  isSub: false,
  items: [],
  secondLoopComponentUid: null,
  targetUid: null
};
List.propTypes = {
  addComponentToDZ: (prop_types_default()).func,
  customRowComponent: (prop_types_default()).func,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool,
  isMain: (prop_types_default()).bool,
  items: prop_types_default().instanceOf(Array),
  secondLoopComponentUid: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  isSub: (prop_types_default()).bool
};
/* harmony default export */ const components_List = (List);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Lock.js
var n = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var m = (a, e, t) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, v = (a, e) => {
  for (var t in e || (e = {}))
    o.call(e, t) && m(a, t, e[t]);
  if (h)
    for (var t of h(e))
      r.call(e, t) && m(a, t, e[t]);
  return a;
};

function w(a) {
  return /* @__PURE__ */ react.createElement("svg", v({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    d: "M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",
    fill: "#8E8EA9"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/icons/Curve.js
var Curve_defProp = Object.defineProperty;
var Curve_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Curve_hasOwnProp = Object.prototype.hasOwnProperty;
var Curve_propIsEnum = Object.prototype.propertyIsEnumerable;
var Curve_defNormalProp = (obj, key, value) => key in obj ? Curve_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Curve_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Curve_hasOwnProp.call(b, prop))
      Curve_defNormalProp(a, prop, b[prop]);
  if (Curve_getOwnPropSymbols)
    for (var prop of Curve_getOwnPropSymbols(b)) {
      if (Curve_propIsEnum.call(b, prop))
        Curve_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const StyledBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme, color }) => theme.colors[color]};
    display: block;
  }
`;
const Svg = styled_components_browser_esm["default"].svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ react.createElement(StyledBox, null, /* @__PURE__ */ react.createElement(
  Svg,
  Curve_spreadValues({
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props),
  /* @__PURE__ */ react.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"
    }
  )
));
Curve.propTypes = {
  color: (prop_types_default()).string.isRequired
};
/* harmony default export */ const icons_Curve = (Curve);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/UpperFirst/index.js


const UpperFirst = ({ content }) => upperFirst_default()(content);
UpperFirst.defaultProps = {
  content: null
};
UpperFirst.propTypes = {
  content: (prop_types_default()).string
};
/* harmony default export */ const components_UpperFirst = (UpperFirst);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/BoxWrapper.js


const BoxWrapper_BoxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: relative;
`;
/* harmony default export */ const ListRow_BoxWrapper = (BoxWrapper_BoxWrapper);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js + 4 modules
var AttributeIcon = __webpack_require__(66848);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/DisplayedType.js





const DisplayedType = ({ type, customField, repeatable }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  let readableType = type;
  if (["integer", "biginteger", "float", "decimal"].includes(type)) {
    readableType = "number";
  } else if (["string"].includes(type)) {
    readableType = "text";
  }
  if (customField) {
    return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: (0,getTrad/* default */.Z)("attribute.customField"),
      defaultMessage: "Custom field"
    }));
  }
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${readableType}`),
    defaultMessage: type
  }), "\xA0", repeatable && formatMessage({
    id: (0,getTrad/* default */.Z)("component.repeatable"),
    defaultMessage: "(repeatable)"
  }));
};
DisplayedType.defaultProps = {
  customField: null,
  repeatable: false
};
DisplayedType.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customField: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool
};
/* harmony default export */ const ListRow_DisplayedType = (DisplayedType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/index.js
var ListRow_defProp = Object.defineProperty;
var ListRow_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListRow_hasOwnProp = Object.prototype.hasOwnProperty;
var ListRow_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListRow_defNormalProp = (obj, key, value) => key in obj ? ListRow_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListRow_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListRow_hasOwnProp.call(b, prop))
      ListRow_defNormalProp(a, prop, b[prop]);
  if (ListRow_getOwnPropSymbols)
    for (var prop of ListRow_getOwnPropSymbols(b)) {
      if (ListRow_propIsEnum.call(b, prop))
        ListRow_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




















function ListRow({
  configurable,
  customField,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  name,
  onClick,
  relation,
  repeatable,
  secondLoopComponentUid,
  target,
  targetUid,
  type
}) {
  const { contentTypes, isInDevelopmentMode, removeAttribute } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const isMorph = type === "relation" && relation.includes("morph");
  const ico = ["integer", "biginteger", "float", "decimal"].includes(type) ? "number" : type;
  const contentType = get_default()(contentTypes, [target], {});
  const contentTypeFriendlyName = get_default()(contentType, ["schema", "displayName"], "");
  const isPluginContentType = get_default()(contentType, "plugin");
  const src = target ? "relation" : ico;
  const handleClick = () => {
    if (isMorph) {
      return;
    }
    if (configurable !== false) {
      const attrType = type;
      onClick(
        editTarget,
        secondLoopComponentUid || firstLoopComponentUid || targetUid,
        name,
        attrType,
        customField
      );
    }
  };
  let loopNumber;
  if (secondLoopComponentUid && firstLoopComponentUid) {
    loopNumber = 2;
  } else if (firstLoopComponentUid) {
    loopNumber = 1;
  } else {
    loopNumber = 0;
  }
  return /* @__PURE__ */ react.createElement(
    ListRow_BoxWrapper,
    ListRow_spreadValues({
      as: "tr"
    }, (0,build.onRowClick)({
      fn: handleClick,
      condition: isInDevelopmentMode && configurable && !isMorph
    })),
    /* @__PURE__ */ react.createElement("td", { style: { position: "relative" } }, loopNumber !== 0 && /* @__PURE__ */ react.createElement(icons_Curve, { color: isFromDynamicZone ? "primary200" : "neutral150" }), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { paddingLeft: 2, spacing: 4, horizontal: true }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: src, customField }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, name))),
    /* @__PURE__ */ react.createElement("td", null, target ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: (0,getTrad/* default */.Z)(
        `modelPage.attribute.${isMorph ? "relation-polymorphic" : "relationWith"}`
      ),
      defaultMessage: "Relation with"
    }), "\xA0", /* @__PURE__ */ react.createElement("span", { style: { fontStyle: "italic" } }, /* @__PURE__ */ react.createElement(components_UpperFirst, { content: contentTypeFriendlyName }), "\xA0", isPluginContentType && `(${formatMessage({
      id: (0,getTrad/* default */.Z)(`from`),
      defaultMessage: "from"
    })}: ${isPluginContentType})`)) : /* @__PURE__ */ react.createElement(ListRow_DisplayedType, { type, customField, repeatable })),
    /* @__PURE__ */ react.createElement("td", null, isInDevelopmentMode ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, ListRow_spreadValues({ justifyContent: "flex-end" }, build.stopPropagation), configurable ? /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 1 }, !isMorph && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleClick,
        label: `${formatMessage({
          id: "app.utils.edit",
          defaultMessage: "Edit"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
      }
    ), /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: (e) => {
          e.stopPropagation();
          removeAttribute(
            editTarget,
            name,
            secondLoopComponentUid || firstLoopComponentUid || ""
          );
        },
        label: `${formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Trash["default"], null)
      }
    )) : /* @__PURE__ */ react.createElement(w, null)) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { height: (0,build.pxToRem)(32) }))
  );
}
ListRow.defaultProps = {
  configurable: true,
  customField: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  onClick() {
  },
  relation: "",
  repeatable: false,
  secondLoopComponentUid: null,
  target: null,
  targetUid: null,
  type: null
};
ListRow.propTypes = {
  configurable: (prop_types_default()).bool,
  customField: (prop_types_default()).string,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func,
  relation: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool,
  secondLoopComponentUid: (prop_types_default()).string,
  target: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_ListRow = ((0,react.memo)(ListRow));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getAttributeDisplayedType.js
const getAttributeDisplayedType = (type) => {
  let displayedType;
  switch (type) {
    case "date":
    case "datetime":
    case "time":
    case "timestamp":
      displayedType = "date";
      break;
    case "integer":
    case "biginteger":
    case "decimal":
    case "float":
      displayedType = "number";
      break;
    case "string":
    case "text":
      displayedType = "text";
      break;
    case "":
      displayedType = "relation";
      break;
    default:
      displayedType = type;
  }
  return displayedType;
};
/* harmony default export */ const utils_getAttributeDisplayedType = (getAttributeDisplayedType);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layer.js
var Layer = __webpack_require__(98432);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/LinkToCMSettingsView/index.js







const cmPermissions = {
  collectionTypesConfigurations: [
    {
      action: "plugin::content-manager.collection-types.configure-view",
      subject: null
    }
  ],
  componentsConfigurations: [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null
    }
  ],
  singleTypesConfigurations: [
    {
      action: "plugin::content-manager.single-types.configure-view",
      subject: null
    }
  ]
};
const LinkToCMSettingsView = ({
  disabled,
  isTemporary,
  isInContentTypeView,
  contentTypeKind,
  targetUid
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { collectionTypesConfigurations, componentsConfigurations, singleTypesConfigurations } = cmPermissions;
  const label = formatMessage({ id: "content-type-builder.form.button.configure-view" });
  let permissionsToApply = collectionTypesConfigurations;
  const handleClick = () => {
    if (isTemporary) {
      return false;
    }
    if (isInContentTypeView) {
      push(`/content-manager/collectionType/${targetUid}/configurations/edit`);
    } else {
      push(`/content-manager/components/${targetUid}/configurations/edit`);
    }
    return false;
  };
  if (isInContentTypeView && contentTypeKind === "singleType") {
    permissionsToApply = singleTypesConfigurations;
  }
  if (!isInContentTypeView) {
    permissionsToApply = componentsConfigurations;
  }
  return /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissionsToApply }, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      startIcon: /* @__PURE__ */ react.createElement(Layer/* default */.Z, null),
      variant: "tertiary",
      onClick: handleClick,
      disabled: isTemporary || disabled
    },
    label
  ));
};
LinkToCMSettingsView.defaultProps = {
  contentTypeKind: "collectionType",
  isInContentTypeView: true,
  isTemporary: false,
  targetUid: ""
};
LinkToCMSettingsView.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  contentTypeKind: (prop_types_default()).string,
  isInContentTypeView: (prop_types_default()).bool,
  isTemporary: (prop_types_default()).bool,
  targetUid: (prop_types_default()).string
};
/* harmony default export */ const ListView_LinkToCMSettingsView = ((0,react.memo)(LinkToCMSettingsView));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/index.js
var ListView_defProp = Object.defineProperty;
var ListView_defProps = Object.defineProperties;
var ListView_getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var ListView_spreadProps = (a, b) => ListView_defProps(a, ListView_getOwnPropDescs(b));
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
  const { initialData, modifiedData, isInDevelopmentMode, isInContentTypeView, submitData } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const match = (0,react_router_dom_min.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID");
  const {
    onOpenModalAddComponentsToDZ,
    onOpenModalAddField,
    onOpenModalEditField,
    onOpenModalEditSchema,
    onOpenModalEditCustomField
  } = (0,useFormModalNavigation/* default */.Z)();
  const firstMainDataPath = isInContentTypeView ? "contentType" : "component";
  const mainDataTypeAttributesPath = [firstMainDataPath, "schema", "attributes"];
  const targetUid = get_default()(modifiedData, [firstMainDataPath, "uid"]);
  const isTemporary = get_default()(modifiedData, [firstMainDataPath, "isTemporary"], false);
  const contentTypeKind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], null);
  const attributes = get_default()(modifiedData, mainDataTypeAttributesPath, []);
  const isFromPlugin = has_default()(initialData, [firstMainDataPath, "plugin"]);
  const hasModelBeenModified = !isEqual_default()(modifiedData, initialData);
  const forTarget = isInContentTypeView ? "contentType" : "component";
  const handleClickAddComponentToDZ = (dynamicZoneTarget) => {
    onOpenModalAddComponentsToDZ({ dynamicZoneTarget, targetUid });
  };
  const handleClickEditField = (forTarget2, targetUid2, attributeName, type, customField) => __async(void 0, null, function* () {
    const attributeType = utils_getAttributeDisplayedType(type);
    const step = type === "component" ? "2" : null;
    if (customField) {
      onOpenModalEditCustomField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        customFieldUid: customField
      });
    } else {
      onOpenModalEditField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        step
      });
    }
  });
  let label = get_default()(modifiedData, [firstMainDataPath, "schema", "displayName"], "");
  const kind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], "");
  const isCreatingFirstContentType = (match == null ? void 0 : match.params.currentUID) === "create-content-type";
  if (!label && isCreatingFirstContentType) {
    label = formatMessage({
      id: (0,getTrad/* default */.Z)("button.model.create"),
      defaultMessage: "Create new collection type"
    });
  }
  const onEdit = () => {
    const contentType = kind || firstMainDataPath;
    if (contentType === "collectionType") {
      trackUsage("willEditNameOfContentType");
    }
    if (contentType === "singleType") {
      trackUsage("willEditNameOfSingleType");
    }
    onOpenModalEditSchema({
      modalType: firstMainDataPath,
      forTarget: firstMainDataPath,
      targetUid,
      kind: contentType
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Prompt,
    {
      message: formatMessage({ id: (0,getTrad/* default */.Z)("prompt.unsaved") }),
      when: hasModelBeenModified
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      primaryAction: isInDevelopmentMode && /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null),
          variant: "secondary",
          onClick: () => {
            onOpenModalAddField({ forTarget, targetUid });
          }
        },
        formatMessage({ id: (0,getTrad/* default */.Z)("button.attributes.add.another") })
      ), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          onClick: () => submitData(),
          type: "submit",
          disabled: isEqual_default()(modifiedData, initialData)
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )),
      secondaryAction: isInDevelopmentMode && !isFromPlugin && !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null), variant: "tertiary", onClick: onEdit }, formatMessage({
        id: "app.utils.edit",
        defaultMessage: "Edit"
      })),
      title: upperFirst_default()(label),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("listView.headerLayout.description"),
        defaultMessage: "Build the data architecture of your content"
      }),
      navigationAction: /* @__PURE__ */ react.createElement(build.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/plugins/content-type-builder/" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(
    ListView_LinkToCMSettingsView,
    {
      key: "link-to-cm-settings-view",
      targetUid,
      isTemporary,
      isInContentTypeView,
      contentTypeKind,
      disabled: isCreatingFirstContentType
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      items: attributes,
      customRowComponent: (props) => /* @__PURE__ */ react.createElement(components_ListRow, ListView_spreadProps(ListView_spreadValues({}, props), { onClick: handleClickEditField })),
      addComponentToDZ: handleClickAddComponentToDZ,
      targetUid,
      editTarget: forTarget,
      isMain: true
    }
  )))));
};
/* harmony default export */ const pages_ListView = (ListView);


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



/***/ }),

/***/ 98432:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var v = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (t, e, a) => e in t ? v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, l = (t, e) => {
  for (var a in e || (e = {}))
    h.call(e, a) && r(t, a, e[a]);
  if (c)
    for (var a of c(e))
      i.call(e, a) && r(t, a, e[a]);
  return t;
};

function o(t) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", l({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",
    fill: "#212134"
  }));
}



/***/ })

}]);