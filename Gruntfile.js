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
                    'src/css/arch.css': 'scss/app.scss'
                }        
            }
        },

        uglify: {
            options: {
                mangle: false,
                compress: false
            },
        
            jquery: {
                files: {
                    'src/js/vendor/jquery.min.js': ['js/vendor/jquery-1.11.2.js']
                }
            },

            arch: {
                files: {
                    'src/js/arch.min.js': [
                        'js/lib/app.js',
                        'js/lib/controller.js',
                        'js/lib/controller/reveal.js'
                    ],
                    'dist/arch.min.js': [
                        'js/lib/app.js',
                        'js/lib/controller.js'
                    ]
                }
            },

            init: {
                files: {
                    'src/js/init.min.js': ['js/initialise.js']
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

            uglify: {
                files: 'js/**/*.js',
                tasks: ['uglify']
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    keepalive: true,
                    base: 'src',
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build','watch']);
    grunt.registerTask('server', ['concurrent:server']);
}
