var gutil = require('gulp-util');

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap\.css/],
  directory: 'app/vendor'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

/**
 *  Environment files
 */
exports.env = {
  app: 'env.json',
  template: 'env.template',
  build: 'app/main/env.js'
}

exports.paths = {
  app: 'app',
  dist: 'dist',
  tmp: '.tmp'
};