/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseRandom', './shuffle', '../internal/toIterable'], function(baseRandom, shuffle, toIterable) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeMin = Math.min;

  /**
   * Retrieves a random element or `n` random elements from a collection.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to sample.
   * @param {number} [n] The number of elements to sample.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {*} Returns the random sample(s).
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   *
   * _.sample([1, 2, 3, 4], 2);
   * // => [3, 1]
   */
  function sample(collection, n, guard) {
    if (guard || n == null) {
      collection = toIterable(collection);
      var length = collection.length;
      return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
    }
    var result = shuffle(collection);
    result.length = nativeMin(n < 0 ? 0 : (+n || 0), result.length);
    return result;
  }

  return sample;
});
