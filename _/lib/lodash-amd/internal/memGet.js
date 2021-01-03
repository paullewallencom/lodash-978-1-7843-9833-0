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
   * Gets the value associated with `key`.
   *
   * @private
   * @name get
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the value to retrieve.
   * @returns {*} Returns the cached value.
   */
  function memGet(key) {
    return this.__wrapped__[key];
  }

  return memGet;
});
