var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config.js').paths;


gulp.task('scripts', function () {
    gulp.src(['app/blocks/**/*.js', 'app/scripts/**/*.js'])
        .pipe(plumber({errorHandler: errorHandler('Error in \'scripts\' task')}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('_scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(config.build));
});