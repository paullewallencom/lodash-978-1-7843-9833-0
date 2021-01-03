/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./isArguments', './isArray', './isFunction', '../internal/isLength', './isString', '../object/keys'], function(isArguments, isArray, isFunction, isLength, isString, keys) {

  /**
   * Checks if a collection is empty. A value is considered empty unless it is
   * an array-like value with a length greater than `0` or an object with own
   * enumerable properties.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {Array|Object|string} value The value to inspect.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    var length = value.length;
    if (isLength(length) && (isArray(value) || isString(value) || isArguments(value) ||
        (typeof value == 'object' && isFunction(value.splice)))) {
      return !length;
    }
    return !keys(value).length;
  }

  return isEmpty;
});
