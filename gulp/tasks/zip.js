var gulp = require('gulp'),
    gutil = require('gulp-util'),
    zip = require('gulp-zip'),
    config = require('../config.js').paths;

var correctNumber = number => number < 10 ? '0' + number : number;

var getDateTime = function () {
	var now = new Date(),
		year = now.getFullYear(),
		month = correctNumber(now.getMonth() + 1),
		day = correctNumber(now.getDate()),
		hours = correctNumber(now.getHours()),
		minutes = correctNumber(now.getMinutes());

    return `${year}-${month}-${day}-${hours}${minutes}`;
};

gulp.task('zip', function () {
    var datetime = gutil.env.zipDateTime ? '-' + getDateTime : '';
    var zipName = 'dist' + datetime + '.zip';

    gulp.src('dist/**/*')
        .pipe(zip(zipName))
        .pipe(gulp.dest(config.distPath));
});
