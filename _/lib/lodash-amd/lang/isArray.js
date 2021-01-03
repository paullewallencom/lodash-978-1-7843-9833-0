/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./isNative'], function(isNative) {

  /** `Object#toString` result references */
  var arrayClass = '[object Array]';

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to resolve the internal `[[Class]]` of values */
  var toString = objectProto.toString;

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * (function() { return _.isArray(arguments); })();
   * // => false
   */
  var isArray = nativeIsArray || function(value) {
    return (value && typeof value == 'object' && typeof value.length == 'number' &&
      toString.call(value) == arrayClass) || false;
  };

  return isArray;
});
