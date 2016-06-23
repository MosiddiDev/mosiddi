"use strict";

var gulp = require("gulp");
var config = require("../config");
var browserSync = require('browser-sync');

// Start server instance with browser-sync
gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: config.serverIndex
    }
  });
});
