/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/createPad', '../internal/root'], function(createPad, root) {

  /** Native method references */
  var ceil = Math.ceil,
      floor = Math.floor;

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeIsFinite = root.isFinite;

  /**
   * Pads `string` on the left and right sides if it is shorter then the given
   * padding length. The `chars` string may be truncated if the number of padding
   * characters can't be evenly divided by the padding length.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.pad('abc', 8);
   * // => '  abc   '
   *
   * _.pad('abc', 8, '_-');
   * // => '_-abc_-_'
   *
   * _.pad('abc', 3);
   * // => 'abc'
   */
  function pad(string, length, chars) {
    string = string == null ? '' : String(string);
    length = +length;

    var strLength = string.length;
    if (strLength >= length || !nativeIsFinite(length)) {
      return string;
    }
    var mid = (length - strLength) / 2,
        leftLength = floor(mid),
        rightLength = ceil(mid);

    chars = createPad('', rightLength, chars);
    return chars.slice(0, leftLength) + string + chars;
  }

  return pad;
});
