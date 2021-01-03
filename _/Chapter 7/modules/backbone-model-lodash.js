define([
	'../../lib/lodash-amd/object/assign',
	'../../lib/backbone'
], function(assign, Backbone) {
	return Backbone.Model.extend({
		parse: function(data) {
			return assign({
				name: data.first + ' ' + data.last
			}, data);
		}
	});
});
