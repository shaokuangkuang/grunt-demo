module.exports =function(grunt){
  grunt.initConfig({
  htmlhint: {
    options: {
      htmlhitrc:'.htmlhintrc'
    },
    src: ['*.html']
  },
 }); 
  grunt.loadNpmTasks('grunt-htmlhint');

  grunt.registerTask('default',['htmlhint'])
};
