'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('stylesDependences', function () {
    runSequence(
        'sprites',
        //'icons',
        'styles'
    );
});

gulp.task('tplsDependences', function () {
    runSequence(
        'templates'
    );
});

gulp.task('default', function () {
    runSequence(
        [
            'stylesDependences',
            'stylesExternals',
            'tplsDependences',
            'scripts',
            'copy',
            'data',
            'externals'
        ],
        'server',
        'watch'
    );
});

gulp.task('build', function () {
    runSequence(
        'stylesDependences',
        'stylesExternals',
        'tplsDependences',
        'scripts',
        'copy',
        'externals'
    );
});