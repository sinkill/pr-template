var gulp = require('gulp'),
    changed = require('gulp-changed'),
    filter = require('gulp-filter'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    config = require('../config').paths;


gulp.task('copy', function () {
    gulp.src('app/resources/**/*')
        .pipe(changed(config.distPath))
        .pipe(gulpif(!gutil.env.robots, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
        .pipe(gulp.dest(config.distPath));
});
