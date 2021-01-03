/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseAt', '../internal/baseFlatten', '../internal/isLength', '../internal/toIterable'], function(baseAt, baseFlatten, isLength, toIterable) {

  /**
   * Creates an array of elements corresponding to the specified keys, or indexes,
   * of the collection. Keys may be specified as individual arguments or as arrays
   * of keys.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {...(number|number[]|string|string[])} [props] The property names
   *  or indexes of elements to pick, specified individually or in arrays.
   * @returns {Array} Returns the new array of picked elements.
   * @example
   *
   * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
   * // => ['a', 'c', 'e']
   *
   * _.at(['fred', 'barney', 'pebbles'], 0, 2);
   * // => ['fred', 'pebbles']
   */
  function at(collection) {
    if (!collection || isLength(collection.length)) {
      collection = toIterable(collection);
    }
    return baseAt(collection, baseFlatten(arguments, false, false, 1));
  }

  return at;
});
