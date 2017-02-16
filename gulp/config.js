'use strict';

var gutil = require('gulp-util'),
    env = gutil.env.env,
    buildPath = env ? 'public-temp' : 'public';

// Paths
module.exports = {
    paths: {
        appImages: 'app/images',
        appStylesHelpers: 'app/styles/helpers',
        publicPath: buildPath,
        build: buildPath + '/build/',
        images: buildPath + '/images/',
        sprites: buildPath + '/images/sprites/',
        vendors: buildPath + '/vendors/'
    }
};