/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseCallback', './isIterateeCall'], function(baseCallback, isIterateeCall) {

  /**
   * Creates a function that assigns properties of source object(s) to a given
   * destination object.
   *
   * @private
   * @param {Function} assigner The function to handle assigning values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return function() {
      var length = arguments.length,
          object = arguments[0];

      if (length < 2 || object == null) {
        return object;
      }
      if (length > 3 && isIterateeCall(arguments[1], arguments[2], arguments[3])) {
        length = 2;
      }
      // juggle arguments
      if (length > 3 && typeof arguments[length - 2] == 'function') {
        var customizer = baseCallback(arguments[--length - 1], arguments[length--], 5);
      } else if (length > 2 && typeof arguments[length - 1] == 'function') {
        customizer = arguments[--length];
      }
      var index = 0;
      while (++index < length) {
        assigner(object, arguments[index], customizer);
      }
      return object;
    };
  }

  return createAssigner;
});
