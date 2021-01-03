/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../lang/isArguments', '../lang/isArray', '../lang/isObject', '../support'], function(isArguments, isArray, isObject, support) {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * Shape.prototype.z = 0;
   *
   * _.keysIn(new Shape);
   * // => ['x', 'y', 'z'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (typeof length == 'number' && length > 0 &&
      (isArray(object) || (support.nonEnumArgs && isArguments(object))) && length) || 0;

    var keyIndex,
        Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype == object,
        maxIndex = length - 1,
        result = Array(length),
        skipIndexes = length > 0;

    while (++index < length) {
      result[index] = String(index);
    }
    for (var key in object) {
      if (!(skipIndexes && (keyIndex = +key, keyIndex > -1 && keyIndex <= maxIndex && keyIndex % 1 == 0)) &&
          !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  return keysIn;
});
