define([
	'../../lib/backbone',
	'../../lib/lodash-amd/array/slice',
	'../../lib/lodash-amd/array/takeRight',
	'../../lib/lodash-amd/array/dropWhile'
], function(Backbone, slice, takeRight, dropWhile) {
	function extendCollection(func, name) {
		Backbone.Collection.prototype[name] = function() {
			var args = slice(arguments);
			args.unshift(this.models);
			return func.apply(null, args);
		}
	}

	extendCollection(takeRight, 'takeRight');
	extendCollection(dropWhile, 'dropWhile');

	return Backbone;
});
