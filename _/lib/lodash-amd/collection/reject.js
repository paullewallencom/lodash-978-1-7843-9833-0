/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/arrayFilter', '../internal/baseCallback', '../internal/baseFilter', '../lang/isArray'], function(arrayFilter, baseCallback, baseFilter, isArray) {

  /**
   * The opposite of `_.filter`; this method returns the elements of `collection`
   * that `predicate` does **not** return truthy for.
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
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration. If a property name or object is provided it is used to
   *  create a "_.pluck" or "_.where" style callback respectively.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {Array} Returns the new filtered array.
   * @example
   *
   * var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
   * // => [1, 3]
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40, 'blocked': true }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.reject(users, 'blocked');
   * // => [{ 'user': 'barney', 'age': 36 }]
   *
   * // using "_.where" callback shorthand
   * _.reject(users, { 'age': 36 });
   * // => [{ 'user': 'fred', 'age': 40, 'blocked': true }]
   */
  function reject(collection, predicate, thisArg) {
    var func = isArray(collection) ? arrayFilter : baseFilter;

    predicate = baseCallback(predicate, thisArg, 3);
    return func(collection, function(value, index, collection) {
      return !predicate(value, index, collection);
    });
  }

  return reject;
});
