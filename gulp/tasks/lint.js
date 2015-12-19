var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    eslint = require('gulp-eslint'),
	errorHandler = require('gulp-plumber-error-handler');


gulp.task('lint', function () {
    gulp.src('**/*.js', {cwd: 'app'})
		.pipe(plumber({errorHandler: errorHandler('Error in \'lint\' task')}))
        .pipe(eslint())
        .pipe(eslint.format());
});
