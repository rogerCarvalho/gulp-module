var gulp = require('gulp');

var stylus = require('gulp-stylus');

var browserSync = require('browser-sync')

var config = require('../gulp/config').styles;

gulp.task('styles', function(){
	gulp.src(config.src)
		.pipe(stylus())
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream:true}))
});

// tentar trabalhar sem o browser-sync, usando wiredep e injection no watch