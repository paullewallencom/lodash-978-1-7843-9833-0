/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used by `_.template` to customize its `_.assign` use.
   *
   * **Note:** This method is like `assignDefaults` except that it ignores
   * inherited property values when checking if a property is `undefined`.
   *
   * @private
   * @param {*} objectValue The destination object property value.
   * @param {*} sourceValue The source object property value.
   * @param {string} key The key associated with the object and source values.
   * @param {Object} object The destination object.
   * @returns {*} Returns the value to assign to the destination object.
   */
  function assignOwnDefaults(objectValue, sourceValue, key, object) {
    return (typeof objectValue == 'undefined' || !hasOwnProperty.call(object, key))
      ? sourceValue
      : objectValue;
  }

  return assignOwnDefaults;
});
