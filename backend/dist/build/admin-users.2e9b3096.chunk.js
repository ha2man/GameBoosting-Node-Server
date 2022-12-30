"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5199],{

/***/ 57338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formDataModel = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataModel);


/***/ }),

/***/ 55867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ 46903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.js
var Envelop = __webpack_require__(23293);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/DynamicTable/TableRows/index.js
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};














const TableRows = ({
  canDelete,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      __spreadValues({
        key: data.id
      }, (0,build.onRowClick)({
        fn: () => push(`${pathname}/${data.id}`),
        condition: withBulkActions
      })),
      withMainAction && /* @__PURE__ */ react.createElement(Cell.Td, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          "aria-label": formatMessage(
            {
              id: "app.component.table.select.one-entry",
              defaultMessage: `Select {target}`
            },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          checked: isChecked,
          onChange: () => {
            onSelectRow({ name: data.id, value: !isChecked });
          }
        }
      )),
      headers.map((_a) => {
        var _b = _a, { key, cellFormatter, name } = _b, rest = __objRest(_b, ["key", "cellFormatter", "name"]);
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, typeof cellFormatter === "function" ? cellFormatter(data, __spreadValues({ key, name, formatMessage }, rest)) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, data[name] || "-"));
      }),
      withBulkActions && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => push(`${pathname}/${data.id}`),
          label: formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
        }
      ), canDelete && /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadValues({ paddingLeft: 1 }, build.stopPropagation), /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onClickDelete(data.id),
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Trash["default"], null)
        }
      ))))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  entriesToDelete: [],
  onClickDelete() {
  },
  onSelectRow() {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.js
var Filter = __webpack_require__(89597);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/Filters/index.js







const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const buttonRef = (0,react.useRef)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.Z, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    build.FilterPopoverURLQuery,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react.createElement(build.FilterListURLQuery, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types_default().arrayOf(
    prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      metadatas: prop_types_default().shape({ label: (prop_types_default()).string }),
      fieldSchema: prop_types_default().shape({ type: (prop_types_default()).string })
    })
  ).isRequired
};
/* harmony default export */ const ListPage_Filters = (Filters);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(81288);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/layout.js
const layout = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  firstname: yup_lib/* string */.Z_().trim().required(build.translatedErrors.required),
  lastname: yup_lib/* string */.Z_(),
  email: yup_lib/* string */.Z_().email(build.translatedErrors.email).required(build.translatedErrors.required),
  roles: yup_lib/* array */.IX().min(1, build.translatedErrors.required).required(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/stepper.js
const stepper = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};
/* harmony default export */ const utils_stepper = (stepper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/index.js
var formDataModel=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(97083)/* ["default"] */ .Z);}return (__webpack_require__(57338)/* ["default"] */ .Z);}();var roleSettingsForm=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(810)/* ["default"] */ .Z);}return (__webpack_require__(55867)/* ["default"] */ .Z);}();var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(12201)/* ["default"] */ .Z);}return (__webpack_require__(31605)/* ["default"] */ .Z);}();var ModalForm=function ModalForm(_ref){var queryName=_ref.queryName,onToggle=_ref.onToggle;var _useState=(0,react.useState)('create'),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),currentStep=_useState2[0],setStep=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),isSubmitting=_useState4[0],setIsSubmitting=_useState4[1];var _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),registrationToken=_useState6[0],setRegistrationToken=_useState6[1];var queryClient=(0,lib.useQueryClient)();var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,build.useNotification)();var _useOverlayBlocker=(0,build.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var postMutation=(0,lib.useMutation)(function(body){return core_utils/* axiosInstance.post */.be.post('/admin/users',body);},{onSuccess:function onSuccess(_ref2){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var data;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:data=_ref2.data;setRegistrationToken(data.data.registrationToken);_context.next=4;return queryClient.invalidateQueries(queryName);case 4:goNext();setIsSubmitting(false);case 6:case"end":return _context.stop();}}},_callee);}))();},onError:function onError(err){setIsSubmitting(false);toggleNotification({type:'warning',message:{id:'notification.error',defaultMessage:'An error occured'}});throw err;},onSettled:function onSettled(){unlockApp();}});var headerTitle=formatMessage({id:'Settings.permissions.users.create',defaultMessage:'Invite new user'});var handleSubmit=/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(body,_ref3){var setErrors,_err$response,_err$response$data;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setErrors=_ref3.setErrors;lockApp();setIsSubmitting(true);_context2.prev=3;_context2.next=6;return postMutation.mutateAsync(body);case 6:_context2.next=12;break;case 8:_context2.prev=8;_context2.t0=_context2["catch"](3);unlockApp();if((_context2.t0===null||_context2.t0===void 0?void 0:(_err$response=_context2.t0.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.error.message)==='Email already taken'){setErrors({email:_context2.t0.response.data.error.message});}case 12:case"end":return _context2.stop();}}},_callee2,null,[[3,8]]);}));return function handleSubmit(_x,_x2){return _ref4.apply(this,arguments);};}();var goNext=function goNext(){if(next){setStep(next);}else{onToggle();}};var _stepper$currentStep=utils_stepper[currentStep],buttonSubmitLabel=_stepper$currentStep.buttonSubmitLabel,isDisabled=_stepper$currentStep.isDisabled,next=_stepper$currentStep.next;var endActions=currentStep==='create'?/*#__PURE__*/react.createElement(Button/* Button */.z,{type:"submit",loading:isSubmitting},formatMessage(buttonSubmitLabel)):/*#__PURE__*/react.createElement(Button/* Button */.z,{type:"button",loading:isSubmitting,onClick:onToggle},formatMessage(buttonSubmitLabel));return/*#__PURE__*/react.createElement(ModalLayout/* ModalLayout */.P,{onClose:onToggle,labelledBy:"title"},/*#__PURE__*/react.createElement(ModalHeader/* ModalHeader */.x,null,/*#__PURE__*/react.createElement(Breadcrumbs/* Breadcrumbs */.O,{label:headerTitle},/*#__PURE__*/react.createElement(Breadcrumbs/* Crumb */.$,null,headerTitle))),/*#__PURE__*/react.createElement(dist.Formik,{initialValues:formDataModel,onSubmit:handleSubmit,validationSchema:utils_schema,validateOnChange:false},function(_ref5){var errors=_ref5.errors,handleChange=_ref5.handleChange,values=_ref5.values;return/*#__PURE__*/react.createElement(build.Form,null,/*#__PURE__*/react.createElement(ModalBody/* ModalBody */.f,null,/*#__PURE__*/react.createElement(Stack/* Stack */.K,{spacing:6},currentStep!=='create'&&/*#__PURE__*/react.createElement(MagicLink,{registrationToken:registrationToken}),/*#__PURE__*/react.createElement(Box/* Box */.x,null,/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"beta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'User details'})),/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingTop:4},/*#__PURE__*/react.createElement(Stack/* Stack */.K,{spacing:1},/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:5},utils_layout.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(build.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:isDisabled,error:errors[input.name],onChange:handleChange,value:values[input.name]})));});}))))),/*#__PURE__*/react.createElement(Box/* Box */.x,null,/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"beta",as:"h2"},formatMessage({id:'global.roles',defaultMessage:"User's role"})),/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingTop:4},/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:5},/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,{col:6,xs:12},/*#__PURE__*/react.createElement(SelectRoles/* default */.Z,{disabled:isDisabled,error:errors.roles,onChange:handleChange,value:values.roles})),roleSettingsForm.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(build.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:isDisabled,onChange:handleChange,value:values[input.name]})));});})))))),/*#__PURE__*/react.createElement(ModalFooter/* ModalFooter */.m,{startActions:/*#__PURE__*/react.createElement(Button/* Button */.z,{variant:"tertiary",onClick:onToggle,type:"button"},formatMessage({id:'app.components.Button.cancel',defaultMessage:'Cancel'})),endActions:endActions}));}));};ModalForm.propTypes={onToggle:(prop_types_default()).func.isRequired,queryName:(prop_types_default()).array.isRequired};/* harmony default export */ const ListPage_ModalForm = (ModalForm);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/PaginationFooter/index.js





const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(build.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(build.PaginationURLQuery, { pagination })));
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
/* harmony default export */ const ListPage_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/api.js
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

const fetchData = (search, notify) => __async(void 0, null, function* () {
  const {
    data: { data }
  } = yield core_utils/* axiosInstance.get */.be.get(`/admin/users${search}`);
  notify();
  return data;
});
const deleteData = (ids) => __async(void 0, null, function* () {
  yield core_utils/* axiosInstance.post */.be.post("/admin/users/batch-delete", { ids });
});


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/displayedFilters.js
const displayedFilters = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
/* harmony default export */ const utils_displayedFilters = (displayedFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/tableHeaders.js




const tableHeaders = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n"));
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(build.Status, { isActive, variant: isActive ? "success" : "danger" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, formatMessage({
        id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
        defaultMessage: isActive ? "Active" : "Inactive"
      })));
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/index.js
var ListPage_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListPage_hasOwnProp = Object.prototype.hasOwnProperty;
var ListPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListPage_defNormalProp = (obj, key, value) => key in obj ? ListPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListPage_hasOwnProp.call(b, prop))
      ListPage_defNormalProp(a, prop, b[prop]);
  if (ListPage_getOwnPropSymbols)
    for (var prop of ListPage_getOwnPropSymbols(b)) {
      if (ListPage_propIsEnum.call(b, prop))
        ListPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var ListPage_async = (__this, __arguments, generator) => {
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


















const ListPage = () => {
  const [isModalOpened, setIsModalOpen] = (0,react.useState)(false);
  const {
    allowedActions: { canCreate, canDelete, canRead }
  } = (0,build.useRBAC)(permissions/* default.settings.users */.Z.settings.users);
  const queryClient = (0,lib.useQueryClient)();
  const toggleNotification = (0,build.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { search } = (0,react_router_dom_min.useLocation)();
  (0,build.useFocusWhenNavigate)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const queryName = ["users", search];
  const headers = utils_tableHeaders.map((header) => __spreadProps(ListPage_spreadValues({}, header), {
    metadatas: __spreadProps(ListPage_spreadValues({}, header.metadatas), {
      label: formatMessage(header.metadatas.label)
    })
  }));
  const title = formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  });
  const notifyLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: title }
      )
    );
  };
  const { status, data, isFetching } = (0,lib.useQuery)(queryName, () => fetchData(search, notifyLoad), {
    enabled: canRead,
    keepPreviousData: true,
    retry: false,
    staleTime: 1e3 * 20,
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const deleteAllMutation = (0,lib.useMutation)((ids) => deleteData(ids), {
    onSuccess() {
      return ListPage_async(this, null, function* () {
        yield queryClient.invalidateQueries(queryName);
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
  });
  const isLoading = status !== "success" && status !== "error" || status === "success" && isFetching;
  const createAction = canCreate ? /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      "data-testid": "create-user-button",
      onClick: handleToggle,
      startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.Z, null),
      size: "S"
    },
    formatMessage({
      id: "Settings.permissions.users.create",
      defaultMessage: "Invite new user"
    })
  ) : void 0;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Users" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: createAction,
      title,
      subtitle: formatMessage({
        id: "Settings.permissions.users.listview.header.subtitle",
        defaultMessage: "All the users who have access to the Strapi admin panel"
      })
    }
  ), canRead && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        build.SearchURLQuery,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: title }
          )
        }
      ), /* @__PURE__ */ react.createElement(ListPage_Filters, { displayedFilters: utils_displayedFilters }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, { canRead }, !canRead && /* @__PURE__ */ react.createElement(build.NoPermissions, null), status === "error" && /* @__PURE__ */ react.createElement("div", null, "TODO: An error occurred"), canRead && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    build.DynamicTable,
    {
      contentType: "Users",
      isLoading,
      onConfirmDeleteAll: deleteAllMutation.mutateAsync,
      onConfirmDelete: (id) => deleteAllMutation.mutateAsync([id]),
      headers,
      rows: data == null ? void 0 : data.results,
      withBulkActions: true,
      withMainAction: canDelete
    },
    /* @__PURE__ */ react.createElement(
      DynamicTable_TableRows,
      {
        canDelete,
        headers,
        rows: (data == null ? void 0 : data.results) || [],
        withBulkActions: true,
        withMainAction: canDelete
      }
    )
  ), /* @__PURE__ */ react.createElement(ListPage_PaginationFooter, { pagination: data == null ? void 0 : data.pagination }))), isModalOpened && /* @__PURE__ */ react.createElement(ListPage_ModalForm, { onToggle: handleToggle, queryName }));
};
/* harmony default export */ const Users_ListPage = (ListPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.settings.users.main */.Z.settings.users.main }, /* @__PURE__ */ react.createElement(Users_ListPage, null));
/* harmony default export */ const Users_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 82464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12028);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65186);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74855);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);







const Envelope = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "text",
  {
    transform: "translate(-23 -9)",
    fill: "#4B515A",
    fillRule: "evenodd",
    fontSize: "32",
    fontFamily: "AppleColorEmoji, Apple Color Emoji"
  },
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tspan", { x: "23", y: "36" }, "\u2709\uFE0F")
));
const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const handleCopy = () => {
    toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
  };
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.ContentBox,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, { onCopy: handleCopy, text: target }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_4__/* .IconButton */ .h, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null) })),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Envelope, null),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 31605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 81288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91216);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82562);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27821);
/* harmony import */ var _strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86647);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23998);
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








const rotation = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], null));
const fetchData = () => __async(void 0, null, function* () {
  const { data } = yield _core_utils__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.get */ .be.get("/admin/roles");
  return data.data;
});
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value,
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .W, { key: role.id, value: role.id }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 97083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_ListPage_ModalForm_utils_formDataModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57338);
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

const ssoInputsModel = strapi.features.isEnabled(strapi.features.SSO) ? {
  useSSORegistration: true
} : {};
const formDataModel = __spreadValues(__spreadValues({}, _admin_src_pages_SettingsPage_pages_Users_ListPage_ModalForm_utils_formDataModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z), ssoInputsModel);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataModel);


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = strapi.features.isEnabled(strapi.features.SSO) ? [
  [
    {
      intlLabel: {
        id: "Settings.permissions.users.form.sso",
        defaultMessage: "Connect with SSO"
      },
      hint: {
        id: "Settings.permissions.users.form.sso.description",
        defaultMessage: "When enabled (ON), users can login via SSO"
      },
      name: "useSSORegistration",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
] : [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ 12201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  if (registrationToken) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      {
        target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`
      },
      formatMessage({
        id: "app.components.Users.MagicLink.connect",
        defaultMessage: "Copy and share this link to give access to this user"
      })
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/login` }, formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 23293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var r = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var h = (l, e, t) => e in l ? r(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, n = (l, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && h(l, t, e[t]);
  if (c)
    for (var t of c(e))
      m.call(e, t) && h(l, t, e[t]);
  return l;
};

function o(l) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",
    fill: "#32324D"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",
    fill: "#32324D"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",
    fill: "#32324D"
  }));
}



/***/ })

}]);