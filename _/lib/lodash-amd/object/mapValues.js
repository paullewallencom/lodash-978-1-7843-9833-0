/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseCallback', '../internal/baseForOwn'], function(baseCallback, baseForOwn) {

  /**
   * Creates an object with the same keys as `object` and values generated by
   * running each own enumerable property of `object` through `iteratee`. The
   * iteratee function is bound to `thisArg` and invoked with three arguments;
   * (value, key, object).
   *
   * If a property name is provided for `iteratee` the created "_.pluck" style
   * callback returns the property value of the given element.
   *
   * If an object is provided for `iteratee` the created "_.where" style callback
   * returns `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function|Object|string} [iteratee=_.identity] The function invoked
   *  per iteration. If a property name or object is provided it is used to
   *  create a "_.pluck" or "_.where" style callback respectively.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Object} Returns the new mapped object.
   * @example
   *
   * _.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(n) { return n * 3; });
   * // => { 'a': 3, 'b': 6, 'c': 9 }
   *
   * var users = {
   *   'fred': { 'user': 'fred', 'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * // using "_.pluck" callback shorthand
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 }
   */
  function mapValues(object, iteratee, thisArg) {
    iteratee = baseCallback(iteratee, thisArg, 3);

    var result = {}
    baseForOwn(object, function(value, key, object) {
      result[key] = iteratee(value, key, object);
    });
    return result;
  }

  return mapValues;
});