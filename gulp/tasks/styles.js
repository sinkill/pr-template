var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var rupture = require('rupture');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var cmq = require('gulp-group-css-media-queries');
var minifyCss = require('gulp-minify-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var errorHandler = require('gulp-plumber-error-handler');
var config = require('../config.js').paths;


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
        .pipe(gulpif(gutil.env.csscomb, csscomb()))
        .pipe(concat('build.css'))
        //.pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.build));
});

gulp.task('stylesExternals', function () {
    gulp.src(mainBowerFiles('**/*.css'))
        .pipe(concat('externals.css'))
        //.pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.build));

    gulp.src(mainBowerFiles('**/*.png'))
        .pipe(gulp.dest(config.build));
});