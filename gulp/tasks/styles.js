var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    rupture = require('rupture'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    cmq = require('gulp-group-css-media-queries'),
    minifyCss = require('gulp-minify-css'),
    csscomb = require('gulp-csscomb'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    mainBowerFiles = require('main-bower-files'),
	errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config.js').paths;


gulp.task('styles', function () {
    gulp.src('*.styl', {
            cwd: 'app/styles',
            nonull: true
        })
		.pipe(plumber({errorHandler: errorHandler('Error in \'styles\' task')}))
        .pipe(stylus({
            errors: true,
            use: [
                rupture(),
                autoprefixer()
            ],
            sourcemap: gutil.env.debug ? {
                comment: false,
                inline: true
            } : true
        }))
        .pipe(gulpif(!gutil.env.debug, cmq()))
        //.pipe(gulpif(!gutil.env.debug, minifyCss()))
        .pipe(gulpif(gutil.env.csscomb, csscomb()))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.styles));
});


gulp.task('stylesBower', function () {
    gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest(config.styles));
});


gulp.task('stylesBuild', function () {
    gulp.src('./dist/styles/*.css')
        .pipe(concat('build.min.css'))
        .pipe(gulp.dest(config.build));
});
