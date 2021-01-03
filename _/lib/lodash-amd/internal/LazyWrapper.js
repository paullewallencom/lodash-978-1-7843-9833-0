/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /** Used as references for `-Infinity` and `Infinity` */
  var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

  /**
   * Wraps `value` as a `LazyWrapper` object.
   *
   * @private
   * @param {*} value The value to wrap.
   * @returns {Object} Returns a `LazyWrapper` instance.
   */
  function LazyWrapper(value) {
    this.dir = 1;
    this.dropCount = 0;
    this.filtered = false;
    this.iteratees = null;
    this.takeCount = POSITIVE_INFINITY;
    this.views = null;
    this.wrapped = value;
  }

  return LazyWrapper;
});
