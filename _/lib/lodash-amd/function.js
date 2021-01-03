/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./function/after', './function/before', './function/bind', './function/bindAll', './function/bindKey', './function/curry', './function/curryRight', './function/debounce', './function/defer', './function/delay', './function/flow', './function/flowRight', './function/memoize', './function/negate', './function/once', './function/partial', './function/partialRight', './function/throttle', './function/wrap'], function(after, before, bind, bindAll, bindKey, curry, curryRight, debounce, defer, delay, flow, flowRight, memoize, negate, once, partial, partialRight, throttle, wrap) {

  return {
    'after': after,
    'backflow': flowRight,
    'before': before,
    'bind': bind,
    'bindAll': bindAll,
    'bindKey': bindKey,
    'compose': flowRight,
    'curry': curry,
    'curryRight': curryRight,
    'debounce': debounce,
    'defer': defer,
    'delay': delay,
    'flow': flow,
    'flowRight': flowRight,
    'memoize': memoize,
    'negate': negate,
    'once': once,
    'partial': partial,
    'partialRight': partialRight,
    'throttle': throttle,
    'wrap': wrap
  };
});
