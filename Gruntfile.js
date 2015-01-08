module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          //outputStyle: 'compressed'
          outputStyle: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {      
      grunt: { 
        files: ['Gruntfile.js'] 
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
    },

    connect: {
      server: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          keepalive: true,
          open: 'http://localhost:<%= connect.server.options.port %>'
        }
      }
    },

    concurrent: {
      server: ['connect:server', 'watch'],

      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('server', ['concurrent:server']);
}