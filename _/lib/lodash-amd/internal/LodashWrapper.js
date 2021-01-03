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
   * A fast path for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll=false] Enable chaining for all methods.
   * @param {Array} [queue=[]] Actions to peform to resolve the unwrapped value.
   * @returns {Object} Returns a `LodashWrapper` instance.
   */
  function LodashWrapper(value, chainAll, queue) {
    this.__chain__ = !!chainAll;
    this.__queue__ = queue || [];
    this.__wrapped__ = value;
  }

  return LodashWrapper;
});
