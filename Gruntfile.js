module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      app: {
        files: [
          {
            src: [
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
