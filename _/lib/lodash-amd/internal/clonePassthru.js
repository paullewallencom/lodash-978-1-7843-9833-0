/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./isCloneable'], function(isCloneable) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /**
   * Used by `_.matches` to clone `source` values, letting uncloneable values
   * passthu instead of returning empty objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   */
  function clonePassthru(value) {
    return isCloneable(value) ? undefined : value;
  }

  return clonePassthru;
});
