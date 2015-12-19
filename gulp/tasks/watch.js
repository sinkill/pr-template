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
                reload('styles/base.min.css');
                reload('styles/common.min.css');
            }
        );
    });

    watch('dist/styles/**.css', function () {
        runSequence(
            'stylesBuild', function () {
                reload('dist/build/build.min.css');
            }
        );
    });

    watch('app/{pages,blocks}/**/*.jade', function () {
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
            'scripts',
            //'lint',
            reload
        );
    });

    watch('app/icons/**/*.svg', function () {
        runSequence(
            'icons',
            reload
        );
    });
});
