"use strict";

var gulp = require("gulp");
var config = require("../config");
var browserSync = require('browser-sync');

gulp.task('watch', function() {
  gulp.watch(config.watchedFiles, ['build', browserSync.reload]);
});
