var gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('stylesDependences', function () {
    runSequence(
        [
            'stylesBower',
            'sprites',
            'icons',
            'styles'
        ],
        'stylesBuild'
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
            'tplsDependences',
            'scripts',
            //'lint',
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
        'tplsDependences',
        'scripts',
        'copy',
        'data',
        'externals'
    );
});
