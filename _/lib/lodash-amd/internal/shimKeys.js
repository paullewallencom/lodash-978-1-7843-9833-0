/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../lang/isArguments', '../lang/isArray', '../object/keysIn', '../support'], function(isArguments, isArray, keysIn, support) {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A fallback implementation of `Object.keys` which creates an array of the
   * own enumerable property names of `object`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   */
  function shimKeys(object) {
    var props = keysIn(object),
        length = props.length,
        objLength = length && object.length;

    var allowIndexes = typeof objLength == 'number' && objLength > 0 &&
      (isArray(object) || (support.nonEnumArgs && isArguments(object)));

    var keyIndex,
        index = -1,
        result = [];

    while (++index < length) {
      var key = props[index];
      if ((allowIndexes && (keyIndex = +key, keyIndex > -1 && keyIndex < objLength && keyIndex % 1 == 0)) ||
          hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }

  return shimKeys;
});
