/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./keys'], function(keys) {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates an object composed of the inverted keys and values of `object`.
   * If `object` contains duplicate values, subsequent values overwrite property
   * assignments of previous values unless `multiValue` is `true`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to invert.
   * @param {boolean} [multiValue=false] Allow multiple values per key.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {Object} Returns the new inverted object.
   * @example
   *
   * _.invert({ 'first': 'fred', 'second': 'barney' });
   * // => { 'fred': 'first', 'barney': 'second' }
   *
   * // without `multiValue`
   * _.invert({ 'first': 'fred', 'second': 'barney', 'third': 'fred' });
   * // => { 'fred': 'third', 'barney': 'second' }
   *
   * // with `multiValue`
   * _.invert({ 'first': 'fred', 'second': 'barney', 'third': 'fred' }, true);
   * // => { 'fred': ['first', 'third'], 'barney': ['second'] }
   */
  function invert(object, multiValue, guard) {
    multiValue = guard ? null : multiValue;

    var index = -1,
        props = keys(object),
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index],
          value = object[key];

      if (multiValue) {
        if (hasOwnProperty.call(result, value)) {
          result[value].push(key);
        } else {
          result[value] = [key];
        }
      }
      else {
        result[value] = key;
      }
    }
    return result;
  }

  return invert;
});
