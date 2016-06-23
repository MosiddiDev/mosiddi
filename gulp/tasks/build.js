var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var babelify = require("babelify");
var config = require("../config");

// compile and build
gulp.task('build', function() {
    // Build resources
    gulp.src(config.resourcePattern)
        .pipe(gulp.dest(config.buildFolder + '/resources'));

    // Build fonts
    gulp.src(config.fontsPattern)
        .pipe(gulp.dest(config.buildFolder + '/fonts'));

    // Build css
    gulp.src(config.stylePattern)
        .pipe(gulp.dest(config.buildFolder + '/css'));

    // Build Index.html
    gulp.src(config.indexHtml)
        .pipe(gulp.dest(config.buildFolder));

    // Build and 'browserify' Js
    var b = browserify();
    b.transform(babelify);
    b.add(config.mainJsInput);

    return b.bundle()
        .pipe(source(config.mainJsInput))
        .pipe(rename(config.mainJsOutput))
        .pipe(gulp.dest(config.buildFolder));
});
