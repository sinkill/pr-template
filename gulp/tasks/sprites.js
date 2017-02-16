var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    spritesmith = require('gulp.spritesmith-multi'),
    merge = require('merge-stream'),
    path = require('path'),
    errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config').paths;

var spritesDirPath = 'app/sprites',
    imgPath = '../images/sprites/',
    tmplName = 'stylus_retina.template.handlebars',
    tmplPath = '../../node_modules/spritesmith-stylus-retina-template',
    cssTemplate = path.join(__dirname, tmplPath, tmplName);

gulp.task('sprites', function () {
    var spriteData = gulp.src(['app/sprites/**/*.png', '!app/sprites/*.png'])
        .pipe(plumber({errorHandler: errorHandler('Error in "sprites" task')}))
        .pipe(spritesmith({
            spritesmith: function (options) {
                options.imgPath = imgPath + options.imgName;
                options.retinaImgPath = imgPath + options.retinaImgName;
                options.cssName = options.cssName.replace(/\.css$/, '.styl');
                options.cssFormat = 'stylus';
                options.cssTemplate = cssTemplate;
                options.algorithm = 'binary-tree';
                options.padding = 8;

                return options;
            }
        }));

    var imgStream = spriteData.img.pipe(gulp.dest(config.sprites));
    var styleStream = spriteData.css.pipe(gulp.dest('app/styles/sprites'));

    return merge(imgStream, styleStream);
});