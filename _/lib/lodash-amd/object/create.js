/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseAssign', '../internal/baseCreate'], function(baseAssign, baseCreate) {

  /**
   * Creates an object that inherits from the given `prototype` object. If a
   * `properties` object is provided its own enumerable properties are assigned
   * to the created object.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} prototype The object to inherit from.
   * @param {Object} [properties] The properties to assign to the object.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {Object} Returns the new object.
   * @example
   *
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * function Circle() {
   *   Shape.call(this);
   * }
   *
   * Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });
   *
   * var circle = new Circle;
   * circle instanceof Circle;
   * // => true
   *
   * circle instanceof Shape;
   * // => true
   */
  function create(prototype, properties, guard) {
    var result = baseCreate(prototype);
    properties = guard ? null : properties;
    return properties ? baseAssign(result, properties) : result;
  }

  return create;
});
