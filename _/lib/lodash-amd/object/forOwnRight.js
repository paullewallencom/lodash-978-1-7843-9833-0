/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseCallback', '../internal/baseForRight', './keys'], function(baseCallback, baseForRight, keys) {

  /**
   * This method is like `_.forOwn` except that it iterates over properties of
   * `object` in the opposite order.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
   *   console.log(key);
   * });
   * // => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
   */
  function forOwnRight(object, iteratee, thisArg) {
    iteratee = baseCallback(iteratee, thisArg, 3);
    return baseForRight(object, iteratee, keys);
  }

  return forOwnRight;
});
