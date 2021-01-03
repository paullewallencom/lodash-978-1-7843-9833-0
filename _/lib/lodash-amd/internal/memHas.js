/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if an entry for `key` exists.
   *
   * @private
   * @name get
   * @memberOf _.memoize.Cache
   * @param {string} key The name of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function memHas(key) {
    return key != '__proto__' && hasOwnProperty.call(this.__wrapped__, key);
  }

  return memHas;
});
