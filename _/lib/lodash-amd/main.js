/**
 * @license
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./array', './chain', './collection', './function', './lang', './object', './string', './utility', './internal/LazyWrapper', './internal/LodashWrapper', './internal/arrayEach', './internal/baseCallback', './internal/baseForOwn', './internal/baseFunctions', './lang/isArray', './lang/isObject', './object/keys', './internal/lazyClone', './internal/lazyReverse', './internal/lazyValue', './chain/lodash', './utility/mixin', './support'], function(array, chain, collection, func, lang, object, string, utility, LazyWrapper, LodashWrapper, arrayEach, baseCallback, baseForOwn, baseFunctions, isArray, isObject, keys, lazyClone, lazyReverse, lazyValue, lodash, mixin, support) {

  /** Used as the semantic version number */
  var VERSION = '3.0.0-pre';

  /** Used to indicate the type of lazy iteratees */
  var LAZY_FILTER_FLAG = 0,
      LAZY_WHILE_FLAG = 2;

  /** Used for native method references */
  var arrayProto = Array.prototype;

  /** Native method references */
  var push = arrayProto.push,
      unshift = arrayProto.unshift;

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  // wrap `_.mixin` so it works when provided only one argument
mixin = (function(func) {
    return function(object, source, options) {
      var isObj = isObject(source),
          noOpts = options == null,
          props = noOpts && isObj && keys(source),
          methodNames = props && baseFunctions(source, props);

      if ((props && props.length && !methodNames.length) || (noOpts && !isObj)) {
        if (noOpts) {
          options = source;
        }
        source = object;
        object = this;
      }
      return func(object, source, options);
    };
  }(mixin));

  // add functions that return wrapped values when chaining
  lodash.after = func.after;
  lodash.assign = object.assign;
  lodash.at = collection.at;
  lodash.before = func.before;
  lodash.bind = func.bind;
  lodash.bindAll = func.bindAll;
  lodash.bindKey = func.bindKey;
  lodash.callback = utility.callback;
  lodash.chain = chain.chain;
  lodash.chunk = array.chunk;
  lodash.compact = array.compact;
  lodash.constant = utility.constant;
  lodash.countBy = collection.countBy;
  lodash.create = object.create;
  lodash.curry = func.curry;
  lodash.curryRight = func.curryRight;
  lodash.debounce = func.debounce;
  lodash.defaults = object.defaults;
  lodash.defer = func.defer;
  lodash.delay = func.delay;
  lodash.difference = array.difference;
  lodash.drop = array.drop;
  lodash.dropRight = array.dropRight;
  lodash.dropRightWhile = array.dropRightWhile;
  lodash.dropWhile = array.dropWhile;
  lodash.filter = collection.filter;
  lodash.flatten = array.flatten;
  lodash.flattenDeep = array.flattenDeep;
  lodash.flow = func.flow;
  lodash.flowRight = func.flowRight;
  lodash.forEach = collection.forEach;
  lodash.forEachRight = collection.forEachRight;
  lodash.forIn = object.forIn;
  lodash.forInRight = object.forInRight;
  lodash.forOwn = object.forOwn;
  lodash.forOwnRight = object.forOwnRight;
  lodash.functions = object.functions;
  lodash.groupBy = collection.groupBy;
  lodash.indexBy = collection.indexBy;
  lodash.initial = array.initial;
  lodash.intersection = array.intersection;
  lodash.invert = object.invert;
  lodash.invoke = collection.invoke;
  lodash.keys = keys;
  lodash.keysIn = object.keysIn;
  lodash.map = collection.map;
  lodash.mapValues = object.mapValues;
  lodash.matches = utility.matches;
  lodash.memoize = func.memoize;
  lodash.merge = object.merge;
  lodash.mixin = mixin;
  lodash.negate = func.negate;
  lodash.omit = object.omit;
  lodash.once = func.once;
  lodash.pairs = object.pairs;
  lodash.partial = func.partial;
  lodash.partialRight = func.partialRight;
  lodash.partition = collection.partition;
  lodash.pick = object.pick;
  lodash.pluck = collection.pluck;
  lodash.property = utility.property;
  lodash.pull = array.pull;
  lodash.pullAt = array.pullAt;
  lodash.range = utility.range;
  lodash.reject = collection.reject;
  lodash.remove = array.remove;
  lodash.rest = array.rest;
  lodash.shuffle = collection.shuffle;
  lodash.slice = array.slice;
  lodash.sortBy = collection.sortBy;
  lodash.take = array.take;
  lodash.takeRight = array.takeRight;
  lodash.takeRightWhile = array.takeRightWhile;
  lodash.takeWhile = array.takeWhile;
  lodash.tap = chain.tap;
  lodash.throttle = func.throttle;
  lodash.thru = chain.thru;
  lodash.times = utility.times;
  lodash.toArray = collection.toArray;
  lodash.transform = object.transform;
  lodash.union = array.union;
  lodash.uniq = array.uniq;
  lodash.unzip = array.unzip;
  lodash.values = object.values;
  lodash.valuesIn = object.valuesIn;
  lodash.where = collection.where;
  lodash.without = array.without;
  lodash.wrap = func.wrap;
  lodash.xor = array.xor;
  lodash.zip = array.zip;
  lodash.zipObject = array.zipObject;

  // add aliases
  lodash.backflow = func.flowRight;
  lodash.collect = collection.map;
  lodash.compose = func.flowRight;
  lodash.each = collection.forEach;
  lodash.eachRight = collection.forEachRight;
  lodash.extend = object.assign;
  lodash.iteratee = utility.callback;
  lodash.methods = object.functions;
  lodash.object = array.zipObject;
  lodash.select = collection.filter;
  lodash.tail = array.rest;
  lodash.unique = array.uniq;

  // add functions to `lodash.prototype`
  mixin(lodash, lodash);

  // add functions that return unwrapped values when chaining
  lodash.attempt = utility.attempt;
  lodash.camelCase = string.camelCase;
  lodash.capitalize = string.capitalize;
  lodash.clone = lang.clone;
  lodash.cloneDeep = lang.cloneDeep;
  lodash.contains = collection.contains;
  lodash.deburr = string.deburr;
  lodash.endsWith = string.endsWith;
  lodash.escape = string.escape;
  lodash.escapeRegExp = string.escapeRegExp;
  lodash.every = collection.every;
  lodash.find = collection.find;
  lodash.findIndex = array.findIndex;
  lodash.findKey = object.findKey;
  lodash.findLast = collection.findLast;
  lodash.findLastIndex = array.findLastIndex;
  lodash.findLastKey = object.findLastKey;
  lodash.findWhere = collection.findWhere;
  lodash.first = array.first;
  lodash.has = object.has;
  lodash.identity = utility.identity;
  lodash.indexOf = array.indexOf;
  lodash.isArguments = lang.isArguments;
  lodash.isArray = isArray;
  lodash.isBoolean = lang.isBoolean;
  lodash.isDate = lang.isDate;
  lodash.isElement = lang.isElement;
  lodash.isEmpty = lang.isEmpty;
  lodash.isEqual = lang.isEqual;
  lodash.isError = lang.isError;
  lodash.isFinite = lang.isFinite;
  lodash.isFunction = lang.isFunction;
  lodash.isNaN = lang.isNaN;
  lodash.isNative = lang.isNative;
  lodash.isNull = lang.isNull;
  lodash.isNumber = lang.isNumber;
  lodash.isObject = isObject;
  lodash.isPlainObject = lang.isPlainObject;
  lodash.isRegExp = lang.isRegExp;
  lodash.isString = lang.isString;
  lodash.isUndefined = lang.isUndefined;
  lodash.kebabCase = string.kebabCase;
  lodash.last = array.last;
  lodash.lastIndexOf = array.lastIndexOf;
  lodash.max = collection.max;
  lodash.min = collection.min;
  lodash.noConflict = utility.noConflict;
  lodash.noop = utility.noop;
  lodash.now = utility.now;
  lodash.pad = string.pad;
  lodash.padLeft = string.padLeft;
  lodash.padRight = string.padRight;
  lodash.parseInt = utility.parseInt;
  lodash.random = utility.random;
  lodash.reduce = collection.reduce;
  lodash.reduceRight = collection.reduceRight;
  lodash.repeat = string.repeat;
  lodash.result = utility.result;
  lodash.size = collection.size;
  lodash.snakeCase = string.snakeCase;
  lodash.some = collection.some;
  lodash.sortedIndex = array.sortedIndex;
  lodash.sortedLastIndex = array.sortedLastIndex;
  lodash.startsWith = string.startsWith;
  lodash.template = string.template;
  lodash.trim = string.trim;
  lodash.trimLeft = string.trimLeft;
  lodash.trimRight = string.trimRight;
  lodash.trunc = string.trunc;
  lodash.unescape = string.unescape;
  lodash.uniqueId = utility.uniqueId;
  lodash.words = string.words;

  // add aliases
  lodash.all = collection.every;
  lodash.any = collection.some;
  lodash.detect = collection.find;
  lodash.foldl = collection.reduce;
  lodash.foldr = collection.reduceRight;
  lodash.head = array.first;
  lodash.include = collection.contains;
  lodash.inject = collection.reduce;

  mixin(lodash, (function() {
    var source = {};
    baseForOwn(lodash, function(func, methodName) {
      if (!lodash.prototype[methodName]) {
        source[methodName] = func;
      }
    });
    return source;
  }()), false);

  // add functions capable of returning wrapped and unwrapped values when chaining
  lodash.sample = collection.sample;

  lodash.prototype.sample = function(n, guard) {
    n = guard ? null : n;
    if (!this.__chain__ && n == null) {
      return lodash.sample(this.value());
    }
    return this.thru(function(value) {
      return lodash.sample(value, n);
    });
  };

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type string
   */
  lodash.VERSION = VERSION;

  lodash.support = support;
  (lodash.templateSettings = string.templateSettings).imports._ = lodash;

  // assign default placeholders
  arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
    lodash[methodName].placeholder = lodash;
  });

  // add `LazyWrapper` methods that accept an `iteratee` value
  arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
    var isFilter = !index;

    LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
      iteratee = baseCallback(iteratee, thisArg, 3);

      var result = this.clone(),
          filtered = result.filtered,
          iteratees = result.iteratees || (result.iteratees = []);

      result.filtered = filtered || index == LAZY_FILTER_FLAG || (index == LAZY_WHILE_FLAG && result.dir < 0);
      iteratees.push({ 'iteratee': iteratee, 'type': index });
      return result;
    };
  });

  // add `LazyWrapper` methods for `_.drop` and `_.take` variants
  arrayEach(['drop', 'take'], function(methodName, index) {
    var countName = methodName + 'Count',
        whileName = methodName + 'While';

    LazyWrapper.prototype[methodName] = function(n) {
      n = n == null ? 1 : nativeMax(+n || 0, 0);

      var result = this.clone();
      if (result.filtered) {
        var value = result[countName];
        result[countName] = index ? nativeMin(value, n) : (value + n);
      } else {
        var views = result.views || (result.views = []);
        views.push({ 'size': n, 'type': methodName + (result.dir < 0 ? 'Right' : '') });
      }
      return result;
    };

    LazyWrapper.prototype[methodName + 'Right'] = function(n) {
      return this.reverse()[methodName](n).reverse();
    };

    LazyWrapper.prototype[methodName + 'RightWhile'] = function(predicate, thisArg) {
      return this.reverse()[whileName](predicate, thisArg).reverse();
    };
  });

  // add `LazyWrapper` methods for `_.first` and `_.last`
  arrayEach(['first', 'last'], function(methodName, index) {
    var takeName = 'take' + (index ? 'Right': '');

    LazyWrapper.prototype[methodName] = function() {
      return this[takeName](1).value()[0];
    };
  });

  // add `LazyWrapper` methods for `_.initial` and `_.rest`
  arrayEach(['initial', 'rest'], function(methodName, index) {
    var dropName = 'drop' + (index ? '' : 'Right');

    LazyWrapper.prototype[methodName] = function() {
      return this[dropName](1);
    };
  });

  LazyWrapper.prototype.dropWhile = function(iteratee, thisArg) {
    iteratee = baseCallback(iteratee, thisArg, 3);

    var done,
        lastIndex,
        isRight = this.dir < 0;

    return this.filter(function(value, index, array) {
      done = done && (isRight ? index < lastIndex : index > lastIndex);
      lastIndex = index;
      return done || (done = !iteratee(value, index, array));
    });
  };

  LazyWrapper.prototype.reject = function(iteratee, thisArg) {
    iteratee = baseCallback(iteratee, thisArg, 3);

    return this.filter(function(value, index, array) {
      return !iteratee(value, index, array);
    });
  };

  LazyWrapper.prototype.slice = function(start, end) {
    start = start == null ? 0 : (+start || 0);
    var result = start < 0 ? this.takeRight(-start) : this.drop(start);

    if (typeof end != 'undefined') {
      end = (+end || 0);
      result = end < 0 ? result.dropRight(-end) : result.take(end - start);
    }
    return result;
  };

  // add `LazyWrapper` methods to `LodashWrapper`
  baseForOwn(LazyWrapper.prototype, function(func, methodName) {
    var retUnwrapped = /^(?:first|last)$/.test(methodName);

    lodash.prototype[methodName] = function() {
      var args = arguments,
          chainAll = this.__chain__,
          value = this.__wrapped__,
          isLazy = value instanceof LazyWrapper;

      if (retUnwrapped && !chainAll) {
        return isLazy
          ? func.call(value)
          : lodash[methodName](this.value());
      }
      if (isLazy || isArray(value)) {
        var result = func.apply(isLazy ? value : new LazyWrapper(this), args);
        return new LodashWrapper(result, chainAll);
      }
      return this.thru(function(value) {
        var otherArgs = [value];
        push.apply(otherArgs, args);
        return lodash[methodName].apply(lodash, otherArgs);
      });
    };
  });

  // add `Array.prototype` functions to `LodashWrapper`
  arrayEach(['concat', 'join', 'pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
    var func = arrayProto[methodName],
        chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
        retUnwrapped = /^(?:join|pop|shift)$/.test(methodName);

    lodash.prototype[methodName] = function() {
      var args = arguments;
      if (retUnwrapped && !this.__chain__) {
        return func.apply(this.value(), args);
      }
      return this[chainName](function(value) {
        return func.apply(value, args);
      });
    };
  });

  // add functions to the lazy wrapper
  LazyWrapper.prototype.clone = lazyClone;
  LazyWrapper.prototype.reverse = lazyReverse;
  LazyWrapper.prototype.value = lazyValue;

  // add chaining functions to the lodash wrapper
  lodash.prototype.chain = chain.wrapperChain;
  lodash.prototype.reverse = chain.wrapperReverse;
  lodash.prototype.toString = chain.wrapperToString;
  lodash.prototype.toJSON = lodash.prototype.value = lodash.prototype.valueOf = chain.wrapperValueOf;

  // add function aliases to the lodash wrapper
  lodash.prototype.collect = lodash.prototype.map;
  lodash.prototype.head = lodash.prototype.first;
  lodash.prototype.select = lodash.prototype.filter;
  lodash.prototype.tail = lodash.prototype.rest;

  return lodash;
});
