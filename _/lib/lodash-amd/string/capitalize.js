/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /**
   * Capitalizes the first character of `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('fred');
   * // => 'Fred'
   */
  function capitalize(string) {
    string = string == null ? '' : String(string);
    return string ? (string.charAt(0).toUpperCase() + string.slice(1)) : string;
  }

  return capitalize;
});
