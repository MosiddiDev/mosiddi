"use strict";

var gulp = require("gulp");
var config = require("../config");
var browserSync = require('browser-sync');

gulp.task('default', ['server', 'build', 'watch'], function() {});
