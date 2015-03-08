'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

var paths = gulp.paths;

module.exports = {
	serve:{
		baseDir:[
	    paths.src
	  ],
	  files:[
	    paths.src + 'src/images/**/*',
	    paths.src + 'src/scripts/**/*',
	    paths.src + 'src/styles/**/*',
	    paths.src + '/*.html',
	  ]
	},

	watch:{
		html: paths.src + '/*.html',
  	styles: paths.src + '/styles/*.styl'
	},

	styles:{
		src: paths.src + '/styles/styles.styl',
		dest: paths.src +'/styles'
	}

};