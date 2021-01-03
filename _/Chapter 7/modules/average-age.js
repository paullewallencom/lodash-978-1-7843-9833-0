define([], function() {
	return function(coll, filter) {
		return _(coll)
			.filter(filter)
			.reduce(function(result, item) {
				return result + item.age;
			}, 0) / _.size(coll);
	};
});
