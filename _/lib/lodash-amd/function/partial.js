/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/basePartial', '../internal/replaceHolders', '../array/slice'], function(basePartial, replaceHolders, slice) {

  /** Used to compose bitmasks for wrapper metadata */
  var PARTIAL_FLAG = 32;

  /**
   * Creates a function that invokes `func` with `partial` arguments prepended
   * to those provided to the new function. This method is similar to `_.bind`
   * except it does **not** alter the `this` binding.
   *
   * **Note:** This method does not set the `length` property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [args] The arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * var greet = function(greeting, name) { return greeting + ' ' + name; };
   * var sayHelloTo = _.partial(greet, 'hello');
   * sayHelloTo('fred');
   * // => 'hello fred'
   */
  function partial(func) {
    var args = slice(arguments, 1),
        holders = replaceHolders(args, partial.placeholder);

    return basePartial(func, PARTIAL_FLAG, args, holders);
  }

  // assign default placeholders
  partial.placeholder = {};

  return partial;
});
