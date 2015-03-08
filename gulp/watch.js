'use strict';

var gulp = require('gulp');

var watch = require('../gulp/config').watch;

gulp.task('watch', function () {
  gulp.watch(watch.html);
  gulp.watch(watch.styles, ['styles']);
});
