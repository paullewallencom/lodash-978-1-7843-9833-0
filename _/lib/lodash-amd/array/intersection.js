/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseIndexOf', '../internal/cacheIndexOf', '../internal/createCache', '../lang/isArguments', '../lang/isArray'], function(baseIndexOf, cacheIndexOf, createCache, isArguments, isArray) {

  /**
   * Creates an array of unique values present in all provided arrays using
   * `SameValueZero` for equality comparisons.
   *
   * **Note:** `SameValueZero` comparisons are like strict equality comparisons,
   * e.g. `===`, except that `NaN` matches `NaN`. See the
   * [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of shared values.
   * @example
   *
   * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
   * // => [1, 2]
   */
  function intersection() {
    var args = [],
        argsIndex = -1,
        argsLength = arguments.length,
        caches = [],
        indexOf = baseIndexOf,
        prereq = createCache;

    while (++argsIndex < argsLength) {
      var value = arguments[argsIndex];
      if (isArray(value) || isArguments(value)) {
        args.push(value);
        caches.push(prereq && value.length >= 120 &&
          createCache(argsIndex && value));
      }
    }
    argsLength = args.length;
    var array = args[0],
        index = -1,
        length = array ? array.length : 0,
        result = [],
        seen = caches[0];

    outer:
    while (++index < length) {
      value = array[index];
      if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value)) < 0) {
        argsIndex = argsLength;
        while (--argsIndex) {
          var cache = caches[argsIndex];
          if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(value);
        }
        result.push(value);
      }
    }
    return result;
  }

  return intersection;
});
