var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    rupture = require('rupture'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    mainBowerFiles = require('main-bower-files'),
    errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config').paths;

var env = gutil.env.env;


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
        .pipe(concat('build.css'))
        .pipe(gulpif(!!env, cleanCSS()))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.build));
});

gulp.task('stylesExternals', function () {
    gulp.src(mainBowerFiles('**/*.css'))
        .pipe(concat('externals.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpif(!!env, cleanCSS()))
        .pipe(gulp.dest(config.build));

    gulp.src(mainBowerFiles('**/*.png'))
        .pipe(gulp.dest(config.build));
});