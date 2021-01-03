/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./memGet', './memHas', './memSet'], function(memGet, memHas, memSet) {

  /**
   * Creates the cache used by `_.memoize`.
   *
   * @private
   * @static
   * @name Cache
   * @memberOf _.memoize
   */
  function MemCache() {
    this.__wrapped__ = {};
  }

  // add functions to the memoize cache
  MemCache.prototype.get = memGet;
  MemCache.prototype.has = memHas;
  MemCache.prototype.set = memSet;

  return MemCache;
});
