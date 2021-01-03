/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseForOwnRight', './isLength', './toObject'], function(baseForOwnRight, isLength, toObject) {

  /**
   * The base implementation of `_.forEachRight` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object|string} Returns `collection`.
   */
  function baseEachRight(collection, iteratee) {
    var length = collection ? collection.length : 0;
    if (!isLength(length)) {
      return baseForOwnRight(collection, iteratee);
    }
    var iterable = toObject(collection);
    while (length--) {
      if (iteratee(iterable[length], length, iterable) === false) {
        break;
      }
    }
    return collection;
  }

  return baseEachRight;
});
