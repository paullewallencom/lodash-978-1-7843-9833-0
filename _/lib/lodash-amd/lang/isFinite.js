/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./isNative', '../internal/root'], function(isNative, root) {

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeIsFinite = root.isFinite,
      nativeNumIsFinite = isNative(nativeNumIsFinite = Number.isFinite) && nativeNumIsFinite;

  /**
   * Checks if `value` is a finite primitive number.
   *
   * **Note:** This method is based on ES6 `Number.isFinite`. See the
   * [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
   * @example
   *
   * _.isFinite(10);
   * // => true
   *
   * _.isFinite('10');
   * // => false
   *
   * _.isFinite(true);
   * // => false
   *
   * _.isFinite(Object(10));
   * // => false
   *
   * _.isFinite(Infinity);
   * // => false
   */
  var isFinite = nativeNumIsFinite || function(value) {
    return typeof value == 'number' && nativeIsFinite(value);
  };

  return isFinite;
});
