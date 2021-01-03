/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseAssign', './bufferClone', './isCloneable'], function(baseAssign, bufferClone, isCloneable) {

  /** Used to match `RegExp` flags from their coerced string values */
  var reFlags = /\w*$/;

  /** `Object#toString` result references */
  var argsClass = '[object Arguments]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  var arrayBufferClass = '[object ArrayBuffer]',
      float32Class = '[object Float32Array]',
      float64Class = '[object Float64Array]',
      int8Class = '[object Int8Array]',
      int16Class = '[object Int16Array]',
      int32Class = '[object Int32Array]',
      uint8Class = '[object Uint8Array]',
      uint8ClampedClass = '[object Uint8ClampedArray]',
      uint16Class = '[object Uint16Array]',
      uint32Class = '[object Uint32Array]';

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to resolve the internal `[[Class]]` of values */
  var toString = objectProto.toString;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {boolean} [isDeep=false] Specify a deep clone.
   * @returns {null|Object} Returns the initialized object clone.
   */
  function initObjectClone(object, isDeep) {
    if (!isCloneable(object)) {
      return null;
    }
    var Ctor = object.constructor,
        className = toString.call(object),
        isArgs = className == argsClass,
        isObj = className == objectClass;

    if (isObj && !(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
      Ctor = Object;
    }
    if (isArgs || isObj) {
      var result = isDeep ? new Ctor : baseAssign(new Ctor, object);
      if (isArgs) {
        result.length = object.length;
      }
      return result;
    }
    switch (className) {
      case arrayBufferClass:
        return bufferClone(object);

      case boolClass:
      case dateClass:
        return new Ctor(+object);

      case float32Class: case float64Class:
      case int8Class: case int16Class: case int32Class:
      case uint8Class: case uint8ClampedClass: case uint16Class: case uint32Class:
        var buffer = object.buffer;
        return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

      case numberClass:
      case stringClass:
        return new Ctor(object);

      case regexpClass:
        result = new Ctor(object.source, reFlags.exec(object));
        result.lastIndex = object.lastIndex;
    }
    return result;
  }

  return initObjectClone;
});
