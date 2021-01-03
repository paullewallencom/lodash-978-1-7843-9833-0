/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./object/assign', './object/create', './object/defaults', './object/findKey', './object/findLastKey', './object/forIn', './object/forInRight', './object/forOwn', './object/forOwnRight', './object/functions', './object/has', './object/invert', './object/keys', './object/keysIn', './object/mapValues', './object/merge', './object/omit', './object/pairs', './object/pick', './object/transform', './object/values', './object/valuesIn'], function(assign, create, defaults, findKey, findLastKey, forIn, forInRight, forOwn, forOwnRight, functions, has, invert, keys, keysIn, mapValues, merge, omit, pairs, pick, transform, values, valuesIn) {

  return {
    'assign': assign,
    'create': create,
    'defaults': defaults,
    'extend': assign,
    'findKey': findKey,
    'findLastKey': findLastKey,
    'forIn': forIn,
    'forInRight': forInRight,
    'forOwn': forOwn,
    'forOwnRight': forOwnRight,
    'functions': functions,
    'has': has,
    'invert': invert,
    'keys': keys,
    'keysIn': keysIn,
    'mapValues': mapValues,
    'merge': merge,
    'methods': functions,
    'omit': omit,
    'pairs': pairs,
    'pick': pick,
    'transform': transform,
    'values': values,
    'valuesIn': valuesIn
  };
});
