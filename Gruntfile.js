/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 6789;
  var base = grunt.option('base') || ['dist', '.'];

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    copy: {
      assets: {
        expand: true,
        cwd: 'src/assets',
        src: '**',
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      }
    },

    mustache_render: {
      slides: {
        options: {
          directory: './src/slides'
        },
        files: [
          {
            data: {},
            template: 'src/index.mustache',
            dest: 'dist/index.html'
          }
        ]
      }
    },

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
      slides: {
        files: ['src/**/*.mustache'],
        tasks: ['build']
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register custom tasks
  grunt.registerTask('build', ['clean', 'copy', 'mustache_render']);
  grunt.registerTask('serve', ['build', 'connect', 'watch']);
  grunt.registerTask('default', ['serve']);
};
