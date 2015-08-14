module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('_public/package.json'),
    nwjs: {
      options: {
        build_dir: './dist',
        // specifiy what to build
        platforms: [
          'mac',
          ///'win',
          //'linux32',
          //'linux64'
        ]
      },
      src: './_public/**/*'
    },
  });

  grunt.loadNpmTasks('grunt-nw-builder');

  grunt.registerTask('default', ['nwjs']);
};
