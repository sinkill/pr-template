var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    reload = require('browser-sync').reload,
    watch = require('gulp-watch');

gulp.task('watch', function () {
    global.watch = true;

    watch('app/sprites/**/*.png', gulp.start(
        'sprites'
    ));

    watch('app/{styles,blocks}/**/*.styl', function () {
        runSequence(
            'styles', function () {
                reload('public/build/build.min.css');
            }
        );
    });

    watch('app/{pages,blocks}/**/*.pug', function () {
        runSequence(
            'templates', function () {
                reload
            }
        );
    });

    watch('app/resources/**/*', function () {
        runSequence(
            'copy',
            reload
        );
    });

    watch('app/data/**/*', function () {
        runSequence(
            'data',
            reload
        );
    });

    watch('app/{scripts,blocks}/**/*.js', function () {
        runSequence(
            'scripts', function () {
                setTimeout(function () {
                    reload
                }, 500);
            }
        );
    });
});