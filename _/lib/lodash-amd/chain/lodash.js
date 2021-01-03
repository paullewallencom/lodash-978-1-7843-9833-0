/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/LodashWrapper', '../internal/baseSlice', '../lang/isArray'], function(LodashWrapper, baseSlice, isArray) {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates a `lodash` object which wraps `value` to enable intuitive chaining.
   * Explicit chaining may be enabled by using `_.chain`. Chaining is supported
   * in custom builds as long as the `_#value` method is implicitly or explicitly
   * included in the build.
   *
   * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
   * and `unshift`
   *
   * The chainable wrapper functions are:
   * `after`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`, `callback`,
   * `chain`, `chunk`, `compact`, `concat`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defer`, `delay`, `difference`, `drop`,
   * `dropRight`, `dropRightWhile`, `dropWhile`, `filter`, `flatten`,
   * `flattenDeep`, `flow`, `flowRight`, `forEach`, `forEachRight`, `forIn`,
   * `forInRight`, `forOwn`, `forOwnRight`, `functions`, `groupBy`, `indexBy`,
   * `initial`, `intersection`, `invert`, `invoke`, `keys`, `keysIn`, `map`,
   * `mapValues`, `matches`, `memoize`, `merge`, `mixin`, `negate`, `noop`,
   * `omit`, `once`, `pairs`, `partial`, `partialRight`, `partition`, `pick`,
   * `pluck`, `property`, `pull`, `pullAt`, `push`, `range`, `reject`, `remove`,
   * `rest`, `reverse`, `shuffle`, `slice`, `sort`, `sortBy`, `splice`, `take`,
   * `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`,
   * `times`, `toArray`, `transform`, `union`, `uniq`, `unshift`, `unzip`,
   * `values`, `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, and `zipObject`
   *
   * The non-chainable wrapper functions are:
   * `attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `contains`,
   * `deburr`, endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
   * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
   * `has`, `identity`, `indexOf`, `isArguments`, `isArray`, `isBoolean`, isDate`,
   * `isElement`, `isEmpty`, `isEqual`, `isError`, `isFinite`, `isFunction`,
   * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
   * `isRegExp`, `isString`, `isUndefined`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `max`, `min`, `noConflict`, `now`, `pad`, `padLeft`, `padRight`, `parseInt`,
   * `pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`, `runInContext`,
   * `shift`, `size`, `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`,
   * `startsWith`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`, `unescape`,
   * `uniqueId`, `value`, and `words`
   *
   * The wrapper function `sample` will return a wrapped value when `n` is provided,
   * otherwise it will return an unwrapped value.
   *
   * @name _
   * @constructor
   * @category Chain
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns a `lodash` instance.
   * @example
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // returns an unwrapped value
   * wrapped.reduce(function(sum, n) { return sum + n; });
   * // => 6
   *
   * // returns a wrapped value
   * var squares = wrapped.map(function(n) { return n * n; });
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash(value) {
    if (value && typeof value == 'object') {
      if (value instanceof LodashWrapper) {
        return value;
      }
      if (!isArray(value) && hasOwnProperty.call(value, '__wrapped__')) {
        return new LodashWrapper(value.__wrapped__, value.__chain__, baseSlice(value.__queue__));
      }
    }
    return new LodashWrapper(value);
  }

  // ensure `new LodashWrapper` is an instance of `lodash`
  LodashWrapper.prototype = lodash.prototype;

  return lodash;
});
