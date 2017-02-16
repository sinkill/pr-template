var gulp = require('gulp'),
    changed = require('gulp-changed'),
    filter = require('gulp-filter'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    config = require('../config').paths;

gulp.task('copy', function () {
    gulp.src(['app/resources/**/*', 'app/resources/.htaccess'])
        .pipe(changed(config.publicPath))
        .pipe(gulpif(!gutil.env.robots, filter(function (file) {
            return !/resources[\\\/]robots\.txt/.test(file.path);
        })))
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(config.publicPath));
});