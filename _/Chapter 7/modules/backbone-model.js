define([
	'underscore',
	'../../lib/backbone'
], function(_, Backbone) {
	return Backbone.Model.extend({
		parse: function(data) {
			return _.extend({
				name: data.first + ' ' + data.last
			}, data);
		}
	});
});
