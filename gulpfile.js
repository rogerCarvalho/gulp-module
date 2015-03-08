'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', function () {
    gulp.start('watch');
});
// task gulp serve para startar browsersync