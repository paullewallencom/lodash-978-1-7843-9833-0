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
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array} partialArgs The arguments to prepend to those provided.
   * @param {Array} partialHolders The `partialArgs` placeholder indexes.
   * @param {Array|Object} args The provided arguments.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgs(partialArgs, partialHolders, args) {
    var holdersLength = partialHolders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - holdersLength, 0),
        leftIndex = -1,
        leftLength = partialArgs.length,
        result = Array(argsLength + leftLength);

    while (++leftIndex < leftLength) {
      result[leftIndex] = partialArgs[leftIndex];
    }
    while (++argsIndex < holdersLength) {
      result[partialHolders[argsIndex]] = args[argsIndex];
    }
    while (argsLength--) {
      result[leftIndex++] = args[argsIndex++];
    }
    return result;
  }

  return composeArgs;
});
