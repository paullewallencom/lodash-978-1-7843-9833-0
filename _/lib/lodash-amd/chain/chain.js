/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./lodash'], function(lodash) {

  /**
   * Creates a `lodash` object that wraps `value` with explicit method
   * chaining enabled.
   *
   * @static
   * @memberOf _
   * @category Chain
   * @param {*} value The value to wrap.
   * @returns {Object} Returns the new `LodashWrapper` object.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36 },
   *   { 'user': 'fred',    'age': 40 },
   *   { 'user': 'pebbles', 'age': 1 }
   * ];
   *
   * var youngest = _.chain(users)
   *     .sortBy('age')
   *     .map(function(chr) { return chr.user + ' is ' + chr.age; })
   *     .first()
   *     .value();
   * // => 'pebbles is 1'
   */
  function chain(value) {
    var result = lodash(value);
    result.__chain__ = true;
    return result;
  }

  return chain;
});
