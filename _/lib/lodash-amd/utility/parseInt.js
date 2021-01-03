/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/root', '../string/trim'], function(root, trim) {

  /** Used to detect hexadecimal string values */
  var reHexPrefix = /^0[xX]/;

  /** Used to detect and test whitespace */
  var whitespace = (
    // whitespace
    ' \t\x0B\f\xA0\ufeff' +

    // line terminators
    '\n\r\u2028\u2029' +

    // unicode category "Zs" space separators
    '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
  );

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeParseInt = root.parseInt;

  /**
   * Converts `value` to an integer of the specified radix. If `radix` is
   * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
   * in which case a `radix` of `16` is used.
   *
   * **Note:** This method avoids differences in native ES3 and ES5 `parseInt`
   * implementations. See the [ES5 spec](http://es5.github.io/#E) for more details.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {string} value The value to parse.
   * @param {number} [radix] The radix to interpret `value` by.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.parseInt('08');
   * // => 8
   */
  function parseInt(value, radix, guard) {
    return nativeParseInt(value, guard ? 0 : radix);
  }
  // fallback for environments with pre-ES5 implementations
  if (nativeParseInt(whitespace + '08') != 8) {
    parseInt = function(value, radix, guard) {
      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt` and
      // Chrome fails to trim leading <BOM> whitespace characters.
      // See https://code.google.com/p/v8/issues/detail?id=3109
      value = trim(value);
      radix = guard ? 0 : +radix;
      return nativeParseInt(value, radix || (reHexPrefix.test(value) ? 16 : 10));
    };
  }

  return parseInt;
});
