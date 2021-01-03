/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../lang/isFunction'], function(isFunction) {

  /** Used as the `TypeError` message for "Functions" methods */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is coerced to a string and used as the
   * cache key. The `func` is invoked with the `this` binding of the memoized
   * function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the ES6 `Map` method interface
   * of `get`, `has`, and `set`. See the
   * [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoizing function.
   * @example
   *
   * var fibonacci = _.memoize(function(n) {
   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   * });
   *
   * fibonacci(9)
   * // => 34
   *
   * // modifying the result cache
   * var upperCase = _.memoize(function(string) {
   *   return string.toUpperCase();
   * });
   *
   * upperCase('fred');
   * // => 'FRED'
   *
   * upperCase.cache.set('fred, 'BARNEY');
   * upperCase('fred');
   * // => 'BARNEY'
   */
  function memoize(func, resolver) {
    if (!isFunction(func) || (resolver && !isFunction(resolver))) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var cache = memoized.cache,
          key = resolver ? resolver.apply(this, arguments) : arguments[0];

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, arguments);
      cache.set(key, result);
      return result;
    };
    memoized.cache = new memoize.Cache;
    return memoized;
  }

  /**
   * Creates the cache used by `_.memoize`.
   *
   * @private
   * @static
   * @name Cache
   * @memberOf _.memoize
   */
  function MemCache() {
    this.__wrapped__ = {};
  }

  /**
   * Gets the value associated with `key`.
   *
   * @private
   * @name get
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the value to retrieve.
   * @returns {*} Returns the cached value.
   */
  function memGet(key) {
    return this.__wrapped__[key];
  }

  /**
   * Checks if an entry for `key` exists.
   *
   * @private
   * @name get
   * @memberOf _.memoize.Cache
   * @param {string} key The name of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function memHas(key) {
    return key != '__proto__' && hasOwnProperty.call(this.__wrapped__, key);
  }

  /**
   * Sets the value associated with `key`.
   *
   * @private
   * @name get
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the cache object.
   */
  function memSet(key, value) {
    if (key != '__proto__') {
      this.__wrapped__[key] = value;
    }
    return this;
  }

  // add functions to the memoize cache
  MemCache.prototype.get = memGet;
  MemCache.prototype.has = memHas;
  MemCache.prototype.set = memSet;

  // assign cache to `_.memoize`
  memoize.Cache = MemCache;

  return memoize;
});
