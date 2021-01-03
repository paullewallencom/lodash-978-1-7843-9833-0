/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./getView'], function(getView) {

  /** Used to indicate the type of lazy iteratees */
  var LAZY_FILTER_FLAG = 0,
      LAZY_MAP_FLAG = 1;

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeMin = Math.min;

  /**
   * Extracts the unwrapped value from its wrapper.
   *
   * @private
   * @name value
   * @memberOf LazyWrapper
   * @returns {*} Returns the unwrapped value.
   */
  function lazyValue() {
    var array = this.wrapped.value(),
        dir = this.dir,
        isRight = dir < 0,
        length = array.length,
        view = getView(0, length, this.views),
        start = view.start,
        end = view.end,
        dropCount = this.dropCount,
        takeCount = nativeMin(end - start, this.takeCount - dropCount),
        index = isRight ? end : start - 1,
        iteratees = this.iteratees,
        iterLength = iteratees ? iteratees.length : 0,
        resIndex = 0,
        result = [];

    outer:
    while (length-- && resIndex < takeCount) {
      index += dir;

      var iterIndex = -1,
          value = array[index];

      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex],
            iteratee = data.iteratee,
            computed = iteratee(value, index, array),
            type = data.type;

        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }
      if (dropCount) {
        dropCount--;
      } else {
        result[resIndex++] = value;
      }
    }
    return isRight ? result.reverse() : result;
  }

  return lazyValue;
});
