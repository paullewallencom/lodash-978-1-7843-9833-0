/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./find', '../utility/matches'], function(find, matches) {

  /**
   * Performs a deep comparison between each element in `collection` and the
   * source object, returning the first element that has equivalent property
   * values.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {Object} source The object of property values to match.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'employer': 'slate' },
   *   { 'user': 'fred',   'age': 40, 'employer': 'slate' }
   * ];
   *
   * _.findWhere(users, { 'employer': 'slate' });
   * // => { 'user': 'barney', 'age': 36, 'employer': 'slate' }
   *
   * _.findWhere(users, { 'age': 40 });
   * // =>  { 'user': 'fred', 'age': 40, 'employer': 'slate' }
   */
  function findWhere(collection, source) {
    return find(collection, matches(source));
  }

  return findWhere;
});
