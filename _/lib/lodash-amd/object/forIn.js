/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseCallback', '../internal/baseFor', './keysIn'], function(baseCallback, baseFor, keysIn) {

  /**
   * Iterates over own and inherited enumerable properties of an object invoking
   * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
   * with three arguments; (value, key, object). Iterator functions may exit
   * iteration early by explicitly returning `false`.
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
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * Shape.prototype.z = 0;
   *
   * _.forIn(new Shape, function(value, key) {
   *   console.log(key);
   * });
   * // => logs 'x', 'y', and 'z' (iteration order is not guaranteed)
   */
  function forIn(object, iteratee, thisArg) {
    if (typeof iteratee != 'function' || typeof thisArg != 'undefined') {
      iteratee = baseCallback(iteratee, thisArg, 3);
    }
    return baseFor(object, iteratee, keysIn);
  }

  return forIn;
});
