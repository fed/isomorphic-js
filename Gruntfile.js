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
        files: ['Gruntfile.js']
      },
      html: {
        files: ['index.html']
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register custom tasks
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('default', ['serve']);
};
