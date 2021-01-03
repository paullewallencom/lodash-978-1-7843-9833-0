var grunt = require('grunt');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.initConfig({
	connect: {
		server: {
			options: {
				keepalive: true
			}
		}
	}
});
