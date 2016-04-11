var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    gutil = require('gulp-util'),
    debuga = require('debuga');

gulp.task('server', function () {
    browserSync.init({
        files: ['dist/**/*'],
        open: !!gutil.env.open,
        reloadOnRestart: true,
        port: gutil.env.port || 3000,
        proxy: {
            target: 'http://babka.local'
            //middleware: function (req, res, next) {
            //console.log(req.url);
            //next();
            //}
        },
        tunnel: !!gutil.env.tunnel
    });
});