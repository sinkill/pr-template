var gulp = require('gulp'),
    svgSymbols = require('gulp-svg-symbols'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    path = require('path');


gulp.task('icons', function () {
    gulp.src('app/icons/**/*.svg')
        .pipe(svgSymbols({
            title: false,
            id: 'icon_%f',
            className: '%f',
            templates: [
                path.join(__dirname, '../helpers/svg.styl'),
                'default-svg'
            ]
        }))
        .pipe(gulpif(/\.styl$/, gulp.dest('app/styles/helpers')))
        .pipe(gulpif(/\.svg$/, rename('icon.svg')))
        .pipe(gulpif(/\.svg$/, gulp.dest('dist/images/')))
});