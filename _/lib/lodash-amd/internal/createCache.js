/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../lang/isNative', './root'], function(isNative, root) {

  /** Native method references */
  var Set = isNative(Set = root.Set) && Set;

  /**
   * Creates a cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [array=[]] The array to search.
   * @returns {Object} Returns the new cache object.
   */
  var createCache = Set && function(array) {
    var cache = new Set,
        length = array ? array.length : 0;

    cache.push = cache.add;
    while (length--) {
      cache.push(array[length]);
    }
    return cache;
  };

  return createCache;
});
