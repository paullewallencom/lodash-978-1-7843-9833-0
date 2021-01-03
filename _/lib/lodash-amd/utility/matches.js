/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseClone', '../internal/baseIsEqual', '../internal/isCloneable', '../internal/isStrictComparable', '../object/keys'], function(baseClone, baseIsEqual, isCloneable, isStrictComparable, keys) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used by `_.matches` to clone `source` values, letting uncloneable values
   * passthu instead of returning empty objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   */
  function clonePassthru(value) {
    return isCloneable(value) ? undefined : value;
  }

  /**
   * Creates a "_.where" style predicate function which performs a deep comparison
   * between a given object and the `source` object, returning `true` if the given
   * object has equivalent property values, else `false`.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 40 },
   *   { 'user': 'barney', 'age': 36 }
   * ];
   *
   * var matchesAge = _.matches({ 'age': 36 });
   *
   * _.filter(users, matchesAge);
   * // => [{ 'user': 'barney', 'age': 36 }]
   *
   * _.find(users, matchesAge);
   * // => { 'user': 'barney', 'age': 36 }
   */
  function matches(source) {
    var props = keys(source),
        length = props.length;

    if (length == 1) {
      var key = props[0],
          value = source[key];

      if (isStrictComparable(value)) {
        return function(object) {
          return object != null && value === object[key] && hasOwnProperty.call(object, key);
        };
      }
    }
    var index = length,
        values = Array(length),
        strictCompareFlags = Array(length);

    while (index--) {
      value = source[props[index]];
      var isStrict = isStrictComparable(value);

      values[index] = isStrict ? value : baseClone(value, true, clonePassthru);
      strictCompareFlags[index] = isStrict;
    }
    return function(object) {
      index = length;
      if (object == null) {
        return !index;
      }
      while (index--) {
        if (strictCompareFlags[index]
              ? values[index] !== object[props[index]]
              : !hasOwnProperty.call(object, props[index])
            ) {
          return false;
        }
      }
      index = length;
      while (index--) {
        if (strictCompareFlags[index]
              ? !hasOwnProperty.call(object, props[index])
              : !baseIsEqual(values[index], object[props[index]], null, true)
            ) {
          return false;
        }
      }
      return true;
    };
  }

  return matches;
});
