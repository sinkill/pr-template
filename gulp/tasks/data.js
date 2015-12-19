var gulp = require('gulp'),
    changed = require('gulp-changed'),
    config = require('../config').paths;


gulp.task('data', function () {
    gulp.src('app/data/**/*')
        .pipe(changed(config.data))
        .pipe(gulp.dest(config.data));
});
