var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    config = require('../config.js').paths;


gulp.task('scripts', function () {
    gulp.src('app/**/*.js')
        .pipe(concat('_scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(config.build));
});
