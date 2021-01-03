/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeMax = Math.max;

  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array} partialRightArgs The arguments to append to those provided.
   * @param {Array} partialRightHolders The `partialRightArgs` placeholder indexes.
   * @param {Array|Object} args The provided arguments.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgsRight(partialRightArgs, partialRightHolders, args) {
    var holdersIndex = -1,
        holdersLength = partialRightHolders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - holdersLength, 0),
        rightIndex = -1,
        rightLength = partialRightArgs.length,
        result = Array(argsLength + rightLength);

    while (++argsIndex < argsLength) {
      result[argsIndex] = args[argsIndex];
    }
    var pad = argsIndex;
    while (++rightIndex < rightLength) {
      result[pad + rightIndex] = partialRightArgs[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      result[pad + partialRightHolders[holdersIndex]] = args[argsIndex++];
    }
    return result;
  }

  return composeArgsRight;
});
