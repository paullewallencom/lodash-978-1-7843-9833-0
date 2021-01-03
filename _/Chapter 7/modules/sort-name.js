define([ 'lodash' ], function(_) {
	return function(coll) {
		return _(coll)
			.sortBy(function(item) {
				return item.first + ' ' + item.last;
			});
	};
});
