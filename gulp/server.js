'use strict';

var gulp = require('gulp');

var config = require('../gulp/config').serve;

var paths = gulp.paths;

var util = require('util');

var browserSync = require('browser-sync');

// var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === paths.src || (util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      // middleware: middleware,
      routes: routes
    },
    browser: browser
  });
}

gulp.task('serve', ['watch'], function () {
  browserSyncInit(config.baseDir, config.files);
});