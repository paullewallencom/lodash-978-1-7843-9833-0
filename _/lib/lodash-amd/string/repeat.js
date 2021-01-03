/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/root'], function(root) {

  /** Native method references */
  var floor = Math.floor;

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeIsFinite = root.isFinite;

  /**
   * Repeats the given string `n` times.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to repeat.
   * @param {number} [n=0] The number of times to repeat the string.
   * @returns {string} Returns the repeated string.
   * @example
   *
   * _.repeat('*', 3);
   * // => '***'
   *
   * _.repeat('abc', 2);
   * // => 'abcabc'
   *
   * _.repeat('abc', 0);
   * // => ''
   */
  function repeat(string, n) {
    var result = '';
    n = +n;

    if (n < 1 || string == null || !nativeIsFinite(n)) {
      return result;
    }
    string = String(string);

    // leverage the exponentiation by squaring algorithm for a faster repeat
    // http://en.wikipedia.org/wiki/Exponentiation_by_squaring
    do {
      if (n % 2) {
        result += string;
      }
      n = floor(n / 2);
      string += string;
    } while (n);

    return result;
  }

  return repeat;
});
