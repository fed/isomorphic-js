/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 6789;
	var base = grunt.option('base') || '.';

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: port,
					base: base,
					livereload: true,
					open: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			gruntfile: {
				files: [ 'Gruntfile.js' ]
			},
			html: {
				files: [ 'index.html']
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

	// Default task
	grunt.registerTask( 'default', [ 'serve' ] );

};
