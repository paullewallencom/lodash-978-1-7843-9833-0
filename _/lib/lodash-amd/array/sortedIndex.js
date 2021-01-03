/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseCallback', '../internal/baseSortedIndex', '../utility/identity'], function(baseCallback, baseSortedIndex, identity) {

  /**
   * Uses a binary search to determine the lowest index at which a value should
   * be inserted into a given sorted array in order to maintain the sort order
   * of the array. If an iteratee function is provided it is invoked for `value`
   * and each element of `array` to compute their sort ranking. The iteratee
   * is bound to `thisArg` and invoked with one argument; (value).
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
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function|Object|string} [iteratee=_.identity] The function invoked
   *  per iteration. If a property name or object is provided it is used to
   *  create a "_.pluck" or "_.where" style callback respectively.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedIndex([30, 50], 40);
   * // => 1
   *
   * _.sortedIndex([4, 4, 5, 5, 6, 6], 5);
   * // => 2
   *
   * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
   *
   * // using an iteratee function
   * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
   *   return this.data[word];
   * }, dict);
   * // => 1
   *
   * // using "_.pluck" callback shorthand
   * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
   * // => 1
   */
  function sortedIndex(array, value, iteratee, thisArg) {
    iteratee = iteratee == null ? identity : baseCallback(iteratee, thisArg, 1);
    return baseSortedIndex(array, value, iteratee);
  }

  return sortedIndex;
});
