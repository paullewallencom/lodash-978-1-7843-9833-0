/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./LazyWrapper', './baseSlice'], function(LazyWrapper, baseSlice) {

  /**
   * Creates a clone of the `LazyWrapper` object.
   *
   * @private
   * @name clone
   * @memberOf LazyWrapper
   * @returns {Object} Returns the cloned `LazyWrapper` object.
   */
  function lazyClone() {
    var iteratees = this.iteratees,
        views = this.views,
        result = new LazyWrapper(this.wrapped);

    result.dir = this.dir;
    result.dropCount = this.dropCount;
    result.filtered = this.filtered;
    result.iteratees = iteratees ? baseSlice(iteratees) : null;
    result.takeCount = this.takeCount;
    result.views = views ? baseSlice(views) : null;
    return result;
  }

  return lazyClone;
});
