/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/basePartial', '../internal/createWrapper', '../internal/replaceHolders', '../array/slice'], function(basePartial, createWrapper, replaceHolders, slice) {

  /** Used to compose bitmasks for wrapper metadata */
  var BIND_FLAG = 1,
      PARTIAL_FLAG = 32;

  /**
   * Creates a function that invokes `func` with the `this` binding of `thisArg`
   * and prepends any additional `bind` arguments to those provided to the bound
   * function.
   *
   * **Note:** Unlike native `Function#bind` this method does not set the `length`
   * property of bound functions.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to bind.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {...*} [args] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var func = function(greeting) {
   *   return greeting + ' ' + this.user;
   * };
   *
   * func = _.bind(func, { 'user': 'fred' }, 'hi');
   * func();
   * // => 'hi fred'
   */
  function bind(func, thisArg) {
    if (arguments.length < 3) {
      return createWrapper(func, BIND_FLAG, null, thisArg);
    }
    var args = slice(arguments, 2),
        holders = replaceHolders(args, bind.placeholder);

    return basePartial(func, BIND_FLAG | PARTIAL_FLAG, args, holders, thisArg);
  }

  // assign default placeholders
  bind.placeholder = {};

  return bind;
});
