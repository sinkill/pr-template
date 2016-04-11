var gulp = require('gulp');
var plumber = require('gulp-plumber');
var spritesmith = require('gulp.spritesmith-multi');
var merge = require('merge-stream');
var path = require('path');
var errorHandler = require('gulp-plumber-error-handler');
var config = require('../config.js').paths;

var spritesDirPath = 'app/sprites';
var imgPath = '../images/sprites/';
var tmplName = 'stylus_retina.template.handlebars';
var tmplPath = '../../node_modules/spritesmith-stylus-retina-template';
var cssTemplate = path.join(__dirname, tmplPath, tmplName);


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