require.config({
	paths: {
		jquery: '../lib/jquery.min',
		lodash: '../lib/lodash',
		underscore: '../lib/lodash.backbone.min'
	},

	shim: {
		lodash: { exports: '_' },
		underscore: { exports: '_' }
	}
});
