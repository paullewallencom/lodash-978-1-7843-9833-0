/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./metaMap', '../utility/noop'], function(metaMap, noop) {

  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
  };

  return getData;
});
