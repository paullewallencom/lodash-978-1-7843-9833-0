/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseCallback', '../internal/baseFind', '../internal/baseForOwnRight'], function(baseCallback, baseFind, baseForOwnRight) {

  /**
   * This method is like `_.findKey` except that it iterates over elements of
   * a collection in the opposite order.
   *
   * If a property name is provided for `predicate` the created "_.pluck" style
   * callback returns the property value of the given element.
   *
   * If an object is provided for `predicate` the created "_.where" style callback
   * returns `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration. If a property name or object is provided it is used to
   *  create a "_.pluck" or "_.where" style callback respectively.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
   * @example
   *
   * var users = {
   *   'barney': { 'age': 36, 'blocked': true },
   *   'fred': { 'age': 40 },
   *   'pebbles': { 'age': 1, 'blocked': true }
   * };
   *
   * _.findLastKey(users, function(chr) {
   *   return chr.age < 40;
   * });
   * // => returns `pebbles`, assuming `_.findKey` returns `barney`
   *
   * // using "_.where" callback shorthand
   * _.findLastKey(users, { 'age': 40 });
   * // => 'fred'
   *
   * // using "_.pluck" callback shorthand
   * _.findLastKey(users, 'blocked');
   * // => 'pebbles'
   */
  function findLastKey(object, predicate, thisArg) {
    predicate = baseCallback(predicate, thisArg, 3);
    return baseFind(object, predicate, baseForOwnRight, true);
  }

  return findLastKey;
});
