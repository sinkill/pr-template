var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    jade = require('gulp-jade'),
    inheritance = require('gulp-jade-inheritance'),
    cached = require('gulp-cached'),
    filter = require('gulp-filter'),
    prettify = require('gulp-prettify'),
    rename = require('gulp-rename'),
    errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config.js').paths;

gulp.task('templates', function () {
    gulp.src('app/**/*.jade')
        .pipe(plumber({errorHandler: errorHandler('Error in \'templates\' task')}))
        .pipe(cached('jade'))
        .pipe(gulpif(global.watch, inheritance({basedir: 'app'})))
        .pipe(filter(function (file) {
            return /app[\\\/]pages/.test(file.path);
        }))
        .pipe(jade())
        .pipe(prettify({
            brace_style: 'expand',
            indent_size: 1,
            indent_char: '\t',
            indent_inner_html: true,
            preserve_newlines: true
        }))
        .pipe(rename({dirname: '.'}))
        .pipe(gulp.dest(config.distPath));
});