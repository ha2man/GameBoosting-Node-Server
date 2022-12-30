(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[1534],{

/***/ 44174:
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 81119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ 55189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(44174),
    baseAggregator = __webpack_require__(81119),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ 94654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    map = __webpack_require__(35161);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),

/***/ 7739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(89465),
    createAggregator = __webpack_require__(55189);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),

/***/ 35161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    isArray = __webpack_require__(1469);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 48734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ m),
/* harmony export */   "y": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72735);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13819);
/* harmony import */ var _helpers_useId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41762);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35961);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46273);








const b = ({ theme: r, expanded: e, variant: t, disabled: d, error: i }) => i ? `1px solid ${r.colors.danger600} !important` : d ? `1px solid ${r.colors.neutral150}` : e ? `1px solid ${r.colors.primary600}` : t === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, T = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z)``, E = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  border: ${b};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    ${T} {
      color: ${({ theme: r, expanded: e }) => e ? void 0 : r.colors.primary700};
    }

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z} {
      color: ${({ theme: r, expanded: e }) => e ? void 0 : r.colors.primary600};
    }

    & > ${_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .k} {
      background: ${({ theme: r }) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme: r }) => r.colors.primary200};
    }
  }
`, m = ({
  children: r,
  expanded: e,
  id: t,
  size: d,
  variant: i,
  disabled: n,
  error: s,
  hasErrorMessage: u,
  onToggle: g,
  toggle: f
}) => {
  const y = (0,_helpers_useId_js__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .M)("accordion", t);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccordionContext_js__WEBPACK_IMPORTED_MODULE_6__/* .AccordionContext.Provider */ .S.Provider, {
    value: { expanded: e, onToggle: g, toggle: f, id: y, size: d, variant: i, disabled: n }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(E, {
    "data-strapi-expanded": e,
    disabled: n,
    "aria-disabled": n,
    expanded: e,
    hasRadius: !0,
    variant: i,
    error: s
  }, r), s && u && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
    paddingTop: 1
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
    variant: "pi",
    textColor: "danger600"
  }, s)));
};
m.defaultProps = {
  disabled: !1,
  error: void 0,
  expanded: !1,
  hasErrorMessage: !0,
  id: void 0,
  toggle: void 0,
  size: "M",
  variant: "primary",
  onToggle: void 0
};
m.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  hasErrorMessage: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_7__.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf(["S", "M"]),
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_7__.func,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf(["primary", "secondary"])
};



/***/ }),

/***/ 63081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13819);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35961);
var u = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var c = (o, e, r) => e in o ? u(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, l = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && c(o, r, e[r]);
  if (i)
    for (var r of i(e))
      a.call(e, r) && c(o, r, e[r]);
  return o;
};
var p = (o, e) => {
  var r = {};
  for (var n in o)
    d.call(o, n) && e.indexOf(n) < 0 && (r[n] = o[n]);
  if (o != null && i)
    for (var n of i(o))
      e.indexOf(n) < 0 && a.call(o, n) && (r[n] = o[n]);
  return r;
};




const C = (r) => {
  var n = r, { children: o } = n, e = p(n, ["children"]);
  const { expanded: s, id: t } = (0,_AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .A)();
  if (!s)
    return null;
  const m = `accordion-content-${t}`, b = `accordion-label-${t}`, f = `accordion-desc-${t}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, l({
    role: "region",
    id: m,
    "aria-labelledby": b,
    "aria-describedby": f
  }, e), o);
};
C.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired
};



/***/ }),

/***/ 13819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ n),
/* harmony export */   "S": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const e = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(), n = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e);



/***/ }),

/***/ 74756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ M)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(13819);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.js
const l = ({ expanded: r, disabled: t, variant: a }) => {
  let e;
  return r ? e = "primary100" : t ? e = "neutral150" : a === "primary" ? e = "neutral0" : e = "neutral100", e;
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js
/* provided dependency */ var console = __webpack_require__(25108);
var O = Object.defineProperty;
var p = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var C = (o, e, r) => e in o ? O(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, g = (o, e) => {
  for (var r in e || (e = {}))
    T.call(e, r) && C(o, r, e[r]);
  if (p)
    for (var r of p(e))
      k.call(e, r) && C(o, r, e[r]);
  return o;
};
var E = (o, e) => {
  var r = {};
  for (var t in o)
    T.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
  if (o != null && p)
    for (var t of p(o))
      e.indexOf(t) < 0 && k.call(o, t) && (r[t] = o[t]);
  return r;
};












const K = (0,styled_components_browser_esm["default"])(TextButton/* TextButton */.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme: o, expanded: e }) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, N = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  min-height: ${({ theme: o, size: e }) => o.sizes.accordions[e]};
  border-radius: ${({ theme: o, expanded: e }) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme: o }) => o.colors.primary600};
      }
    }
  }
`, M = (Q) => {
  var f = Q, { title: o, description: e, as: r, togglePosition: t, action: u } = f, A = E(f, ["title", "description", "as", "togglePosition", "action"]);
  const s = (0,react.useRef)(null), { onToggle: h, toggle: y, expanded: n, id: m, size: a, variant: B, disabled: d } = (0,AccordionContext/* useAccordion */.A)(), I = `accordion-content-${m}`, b = `accordion-label-${m}`, S = `accordion-desc-${m}`, c = a === "M" ? 6 : 4, x = a === "M" ? c : c - 2, W = l({ expanded: n, disabled: d, variant: B }), j = {
    as: r,
    fontWeight: a === "S" ? "bold" : void 0,
    id: b,
    textColor: n ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: a === "M" ? "delta" : void 0
  }, D = n ? "primary600" : "neutral600", F = n ? "primary200" : "neutral200", $ = a === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, L = () => {
    d || (y && !h ? (console.warn(
      'Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'
    ), y()) : h());
  }, w = /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "center",
    borderRadius: "50%",
    height: $,
    width: $,
    transform: n ? "rotate(180deg)" : void 0,
    "data-strapi-dropdown": !0,
    disabled: d,
    "aria-hidden": !0,
    as: "span",
    background: F,
    cursor: d ? "not-allowed" : "pointer",
    onClick: () => {
      var v;
      return (v = s == null ? void 0 : s.current) == null ? void 0 : v.click();
    },
    shrink: 0
  }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, {
    as: CarretDown["default"],
    width: a === "M" ? `${11 / 16}rem` : `${8 / 16}rem`,
    color: n ? "primary600" : "neutral600"
  }));
  return /* @__PURE__ */ react.createElement(N, {
    paddingBottom: x,
    paddingLeft: c,
    paddingRight: c,
    paddingTop: x,
    background: W,
    expanded: n,
    size: a,
    justifyContent: "space-between",
    cursor: d ? "not-allowed" : ""
  }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    horizontal: !0,
    spacing: 3,
    flex: 1,
    maxWidth: "100%"
  }, t === "left" && w, /* @__PURE__ */ react.createElement(K, g({
    ref: s,
    onClick: L,
    "aria-disabled": d,
    "aria-expanded": n,
    "aria-controls": I,
    "aria-labelledby": b,
    "data-strapi-accordion-toggle": !0,
    expanded: n,
    type: "button",
    flex: 1,
    minWidth: 0
  }, A), /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Accordion/* AccordionTypography */.y, g({}, j), o), e && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    as: "p",
    id: S,
    textColor: D
  }, e))), t === "right" && /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    horizontal: !0,
    spacing: 3
  }, w, u), t === "left" && u));
};
M.defaultProps = {
  action: void 0,
  as: "span",
  description: void 0,
  variant: "primary",
  togglePosition: "right"
};
M.propTypes = {
  action: prop_types.node,
  as: prop_types.string,
  description: prop_types.string,
  title: prop_types.string.isRequired,
  togglePosition: prop_types.oneOf(["right", "left"]),
  variant: prop_types.oneOf(["primary", "secondary"])
};



/***/ }),

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 36989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 53192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ v)
/* harmony export */ });
/* unused harmony export subNavWidth */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11276);
var m = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? m(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, l = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && a(r, t, o[t]);
  if (i)
    for (var t of i(o))
      s.call(o, t) && a(r, t, o[t]);
  return r;
};
var n = (r, o) => {
  var t = {};
  for (var e in r)
    p.call(r, e) && o.indexOf(e) < 0 && (t[e] = r[e]);
  if (r != null && i)
    for (var e of i(r))
      o.indexOf(e) < 0 && s.call(r, e) && (t[e] = r[e]);
  return t;
};





const f = `${232 / 16}rem`, h = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r)`
  width: ${f};
  background: ${({ theme: r }) => r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
  z-index: 1;
`, v = (t) => {
  var e = t, { ariaLabel: r } = e, o = n(e, ["ariaLabel"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(h, l({
    "aria-label": r,
    as: "nav"
  }, o));
};
v.propTypes = {
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
};



/***/ }),

/***/ 38702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ f)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.js
var Search = __webpack_require__(97184);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.js
var Searchbar = __webpack_require__(49123);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/SearchForm.js
var SearchForm = __webpack_require__(8509);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/usePrevious.js

const usePrevious_s = (r) => {
  const e = (0,react.useRef)();
  return (0,react.useEffect)(() => {
    e.current = r;
  }), e.current;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.js














const u = (0,styled_components_browser_esm["default"])(Divider/* Divider */.i)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: l }) => l.colors.neutral200};
`, f = ({ as: l, label: g, searchLabel: s, searchable: h, onChange: b, value: E, onClear: S, onSubmit: y, id: C }) => {
  const [a, c] = (0,react.useState)(!1), m = usePrevious_s(a), v = (0,useId/* useId */.M)("subnav-searchbar-clear", C), o = (0,react.useRef)(), i = (0,react.useRef)();
  (0,react.useEffect)(() => {
    a && o.current && o.current.focus(), m && !a && i.current && i.current.focus();
  }, [a, m]);
  const B = () => {
    c((t) => !t);
  }, T = (t) => {
    S(t), o.current.focus();
  }, R = (t) => {
    var p;
    ((p = t.relatedTarget) == null ? void 0 : p.id) !== v && c(!1);
  }, L = (t) => {
    t.key === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE && c(!1);
  };
  return a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(SearchForm/* SearchForm */.U, null, /* @__PURE__ */ react.createElement(Searchbar/* Searchbar */.w, {
    name: "searchbar",
    value: E,
    onChange: b,
    placeholder: "e.g: strapi-plugin-abcd",
    onKeyDown: L,
    ref: o,
    onBlur: R,
    onClear: T,
    onSubmit: y,
    clearLabel: "Clear",
    size: "S"
  }, s)), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 2,
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(u, null))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 6,
    paddingTop: 6,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    variant: "beta",
    as: l
  }, g), h && /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, {
    ref: i,
    onClick: B,
    label: s,
    icon: /* @__PURE__ */ react.createElement(Search["default"], null)
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(u, null)));
};
f.defaultProps = {
  as: "h2",
  searchable: !1,
  onChange() {
  },
  onClear() {
  },
  onSubmit() {
  },
  value: "",
  searchLabel: "",
  id: void 0
};
f.propTypes = {
  as: prop_types.string,
  id: prop_types.string,
  label: prop_types.string.isRequired,
  onChange: prop_types.func,
  onClear: prop_types.func,
  onSubmit: prop_types.func,
  searchLabel: prop_types.string,
  searchable: prop_types.bool,
  value: prop_types.string
};



/***/ }),

/***/ 52305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27821);
/* harmony import */ var _strapi_icons_Dot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71818);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35961);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72735);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46273);
/* harmony import */ var _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63507);
var w = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? w(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, f = (e, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && m(e, o, r[o]);
  if (n)
    for (var o of n(r))
      u.call(r, o) && m(e, o, r[o]);
  return e;
};
var g = (e, r) => {
  var o = {};
  for (var t in e)
    d.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && n)
    for (var t of n(e))
      r.indexOf(t) < 0 && u.call(e, t) && (o[t] = e[t]);
  return o;
};








const k = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: e }) => e.colors.neutral800};
  svg > * {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }

  &.active {
    ${({ theme: e }) => `
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_strapi_icons_Dot__WEBPACK_IMPORTED_MODULE_4__["default"])`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: e, $active: r }) => r ? e.colors.primary600 : e.colors.neutral600};
  }
`, B = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, p = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((L, E) => {
  var c = L, { children: e, icon: r, withBullet: o, as: t, isSubSectionChild: h } = c, v = g(c, ["children", "icon", "withBullet", "as", "isSubSectionChild"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(k, f({
    as: t,
    icon: r,
    background: "neutral100",
    paddingLeft: h ? 9 : 7,
    paddingBottom: 2,
    paddingTop: 2,
    ref: E
  }, v), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k, null, r ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(B, null, r) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement($, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
    paddingLeft: 2
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
    as: "span"
  }, e))), o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
    as: _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k,
    paddingRight: 4
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement($, {
    $active: !0
  })));
});
p.displayName = "SubNavLink";
p.defaultProps = {
  as: _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f,
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
p.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_7__.elementType,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  isSubSectionChild: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  withBullet: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool
};



/***/ }),

/***/ 29489:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ p)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.js
var Badge = __webpack_require__(30190);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSectionLabel.js







const i = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  border: none;
  padding: 0;
  background: transparent;
`, f = styled_components_browser_esm["default"].div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, SubNavSectionLabel_m = ({ collapsable: t, label: a, onClick: d, ariaExpanded: o, ariaControls: c }) => t ? /* @__PURE__ */ react.createElement(i, {
  as: "button",
  onClick: d,
  "aria-expanded": o,
  "aria-controls": c,
  textAlign: "left"
}, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
  paddingRight: 1
}, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
  variant: "sigma",
  textColor: "neutral600"
}, a)), t && /* @__PURE__ */ react.createElement(f, {
  rotated: o
}, /* @__PURE__ */ react.createElement(CarretDown["default"], {
  "aria-hidden": !0
}))) : /* @__PURE__ */ react.createElement(i, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
  paddingRight: 1
}, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
  variant: "sigma",
  textColor: "neutral600"
}, a)));
SubNavSectionLabel_m.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  collapsable: !1,
  onClick() {
  }
};
SubNavSectionLabel_m.propTypes = {
  ariaControls: prop_types.string,
  ariaExpanded: prop_types.bool,
  collapsable: prop_types.bool,
  label: prop_types.string.isRequired,
  onClick: prop_types.func
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.js








const C = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
`, p = ({ collapsable: r, label: s, badgeLabel: o, children: d, id: m }) => {
  const [a, c] = (0,react.useState)(!0), n = (0,useId/* useId */.M)("subnav-list", m), u = () => {
    c((i) => !i);
  };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(C, {
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    position: "relative",
    paddingRight: o ? 6 : 0
  }, /* @__PURE__ */ react.createElement(SubNavSectionLabel_m, {
    onClick: u,
    ariaExpanded: a,
    ariaControls: n,
    collapsable: r,
    label: s
  }), o && /* @__PURE__ */ react.createElement(Badge/* Badge */.C, {
    backgroundColor: "neutral150",
    textColor: "neutral600",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)"
  }, o))), (!r || a) && /* @__PURE__ */ react.createElement("ol", {
    id: n
  }, react.Children.map(d, (i, g) => /* @__PURE__ */ react.createElement("li", {
    key: g
  }, i))));
};
p.defaultProps = {
  badgeLabel: null,
  collapsable: !1,
  id: void 0
};
p.propTypes = {
  badgeLabel: prop_types.string,
  children: prop_types.node.isRequired,
  collapsable: prop_types.bool,
  id: prop_types.string,
  label: prop_types.string.isRequired
};



/***/ }),

/***/ 34446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Stack_Stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7681);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35961);
var f = Object.defineProperty;
var p = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var m = (e, r, t) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, c = (e, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && m(e, t, r[t]);
  if (p)
    for (var t of p(r))
      a.call(r, t) && m(e, t, r[t]);
  return e;
};
var d = (e, r) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && p)
    for (var o of p(e))
      r.indexOf(o) < 0 && a.call(e, o) && (t[o] = e[o]);
  return t;
};




const S = (t) => {
  var o = t, { children: e } = o, r = d(o, ["children"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
    paddingTop: 2,
    paddingBottom: 4
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_2__/* .Stack */ .K, c({
    as: "ol",
    spacing: 2
  }, r), react__WEBPACK_IMPORTED_MODULE_0__.Children.map(e, (l, s) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: s
  }, l))));
};
S.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired
};



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 71818:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var h = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var l = (r, e, t) => e in r ? h(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, n = (r, e) => {
  for (var t in e || (e = {}))
    m.call(e, t) && l(r, t, e[t]);
  if (i)
    for (var t of i(e))
      w.call(e, t) && l(r, t, e[t]);
  return r;
};

function g(r) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", n({
    width: "1em",
    height: "1em",
    viewBox: "0 0 4 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 4,
    height: 4,
    rx: 2,
    fill: "#A5A5BA"
  }));
}



/***/ })

}]);