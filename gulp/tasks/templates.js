var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    pug = require('gulp-pug'),
    inheritance = require('gulp-pug-inheritance'),
    cached = require('gulp-cached'),
    filter = require('gulp-filter'),
    prettify = require('gulp-prettify'),
    rename = require('gulp-rename'),
    errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config').paths;

gulp.task('templates', function () {
    gulp.src('app/**/*.pug')
        .pipe(plumber({errorHandler: errorHandler('Error in \'templates\' task')}))
        .pipe(cached('pug'))
        .pipe(gulpif(global.watch, inheritance({basedir: 'app', skip: 'node_modules'})))
        .pipe(filter(function (file) {
            return /app[\\\/]pages/.test(file.path);
        }))
        .pipe(pug())
        .pipe(prettify({
            brace_style: 'expand',
            indent_size: 1,
            indent_char: '\t',
            indent_inner_html: true,
            preserve_newlines: true
        }))
        .pipe(rename({dirname: '.'}))
        .pipe(gulp.dest(config.publicPath));
});