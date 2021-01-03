/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./lang/clone', './lang/cloneDeep', './lang/isArguments', './lang/isArray', './lang/isBoolean', './lang/isDate', './lang/isElement', './lang/isEmpty', './lang/isEqual', './lang/isError', './lang/isFinite', './lang/isFunction', './lang/isNaN', './lang/isNative', './lang/isNull', './lang/isNumber', './lang/isObject', './lang/isPlainObject', './lang/isRegExp', './lang/isString', './lang/isUndefined'], function(clone, cloneDeep, isArguments, isArray, isBoolean, isDate, isElement, isEmpty, isEqual, isError, isFinite, isFunction, isNaN, isNative, isNull, isNumber, isObject, isPlainObject, isRegExp, isString, isUndefined) {

  return {
    'clone': clone,
    'cloneDeep': cloneDeep,
    'isArguments': isArguments,
    'isArray': isArray,
    'isBoolean': isBoolean,
    'isDate': isDate,
    'isElement': isElement,
    'isEmpty': isEmpty,
    'isEqual': isEqual,
    'isError': isError,
    'isFinite': isFinite,
    'isFunction': isFunction,
    'isNaN': isNaN,
    'isNative': isNative,
    'isNull': isNull,
    'isNumber': isNumber,
    'isObject': isObject,
    'isPlainObject': isPlainObject,
    'isRegExp': isRegExp,
    'isString': isString,
    'isUndefined': isUndefined
  };
});
