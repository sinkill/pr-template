var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    spritesmith = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin'),
	errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config.js').paths;


gulp.task('sprites', function () {
    var spriteData = gulp.src('app/sprites/**/*.png', {read: false})
		.pipe(plumber({errorHandler: errorHandler('Error in \'sprites\' task')}))
        .pipe(spritesmith({
            imgName: 'sprites.png',
            cssName: 'sprites.styl',
            imgPath: '../images/sprites.png',
            cssFormat: 'stylus',
            algorithm: 'binary-tree',
            padding: 8,
            engine: 'pixelsmith',
            imgOpts: {
                format: 'png'
            }
        }));

    spriteData.img
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(gulp.dest(config.sprites));

    return spriteData.css.pipe(gulp.dest(config.appStylesHelpers));
});
