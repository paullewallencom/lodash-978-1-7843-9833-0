/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseIndexOf', './cacheIndexOf', './createCache'], function(baseIndexOf, cacheIndexOf, createCache) {

  /**
   * The base implementation of `_.difference` which accepts a single array
   * of values to exclude.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   */
  function baseDifference(array, values) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    var index = -1,
        indexOf = baseIndexOf,
        prereq = indexOf == baseIndexOf,
        isLarge = prereq && createCache && values && values.length >= 200,
        isCommon = prereq && !isLarge,
        result = [],
        valuesLength = values.length;

    if (isLarge) {
      indexOf = cacheIndexOf;
      values = createCache(values);
    }
    outer:
    while (++index < length) {
      var value = array[index];

      if (isCommon && value === value) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === value) {
            continue outer;
          }
        }
        result.push(value);
      }
      else if (indexOf(values, value) < 0) {
        result.push(value);
      }
    }
    return result;
  }

  return baseDifference;
});
