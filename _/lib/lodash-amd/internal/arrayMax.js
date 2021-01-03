/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /** Used as references for `-Infinity` and `Infinity` */
  var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;

  /**
   * A specialized version of `_.max` for arrays without support for iteratees.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   */
  function arrayMax(array) {
    var index = -1,
        length = array.length,
        result = NEGATIVE_INFINITY;

    while (++index < length) {
      var value = array[index];
      if (value > result) {
        result = value;
      }
    }
    return result;
  }

  return arrayMax;
});
