/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/createCompounder'], function(createCompounder) {

  /**
   * Converts `string` to snake case.
   * See [Wikipedia](http://en.wikipedia.org/wiki/Snake_case) for more details.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to snake case.
   * @returns {string} Returns the snake cased string.
   * @example
   *
   * _.snakeCase('Hello world');
   * // => 'hello_world'
   *
   * _.snakeCase('--hello-world');
   * // => 'hello_world'
   *
   * _.snakeCase('helloWorld');
   * // => 'hello_world'
   */
  var snakeCase = createCompounder(function(result, word, index) {
    return result + (index ? '_' : '') + word.toLowerCase();
  });

  return snakeCase;
});
