/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseCallback', '../internal/baseEach', '../internal/baseFind', '../array/findIndex', '../lang/isArray'], function(baseCallback, baseEach, baseFind, findIndex, isArray) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is bound to `thisArg` and
   * invoked with three arguments; (value, index|key, collection).
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
   * @alias detect
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration. If a property name or object is provided it is used to
   *  create a "_.pluck" or "_.where" style callback respectively.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36 },
   *   { 'user': 'fred',    'age': 40, 'blocked': true },
   *   { 'user': 'pebbles', 'age': 1 }
   * ];
   *
   * _.find(users, function(chr) {
   *   return chr.age < 40;
   * });
   * // => { 'user': 'barney', 'age': 36 }
   *
   * // using "_.where" callback shorthand
   * _.find(users, { 'age': 1 });
   * // =>  { 'user': 'pebbles', 'age': 1 }
   *
   * // using "_.pluck" callback shorthand
   * _.find(users, 'blocked');
   * // => { 'user': 'fred', 'age': 40, 'blocked': true }
   */
  function find(collection, predicate, thisArg) {
    if (isArray(collection)) {
      var index = findIndex(collection, predicate, thisArg);
      return index > -1 ? collection[index] : undefined;
    }
    predicate = baseCallback(predicate, thisArg, 3);
    return baseFind(collection, predicate, baseEach);
  }

  return find;
});
