var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    config = require('../config').paths;

var env = gutil.env.env;

gulp.task('externals', function () {
    var vendors = mainBowerFiles('**/*.js', {
        "overrides": {
            "es5-shim": {
                "ignore": true
            },
            "event-shim.js": {
                "ignore": true
            },
            "html5shiv": {
                "ignore": true
            },
            "css3-mediaqueries-js": {
                "ignore": true
            }
        }
    });

    gulp.src(vendors)
        .pipe(concat('_externals.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpif(!!env, uglify()))
        .pipe(gulp.dest(config.build));

    gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest(config.vendors));
});