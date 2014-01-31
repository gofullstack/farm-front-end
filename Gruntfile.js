module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      app: {
        files: [
          {
            src: [
              'bower_components/angular/angular.js',
              'bower_components/angular-touch/angular-touch.js',
              'bower_components/hammerjs/hammer.js',
              'bower_components/angular-gestures/gestures.js',
              'src/**/*.js'
            ],
            dest: 'www/js/index.js'
          }
        ]
      }
    },
    watch: {
      files: ["src/**"],
      tasks: ["concat:app"],
      options: {
        spawn: false,
      }
    },
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");

  grunt.registerTask("default", ["concat:app"]);
}
