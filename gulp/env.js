'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var gutil = require("gulp-util");
var gulpNgConfig = require('gulp-ng-config');
var pathExists = require('path-exists');


gulp.task('env:production', function () {
  return config('production')
});

gulp.task('env:dev', function () {
  return config('development')
});

gulp.task('env', function () {
  checkSource()
  checkBuild()
})

function config(type) {

  checkSource()

  return gulp.src(conf.env.app)
    .pipe(gulpNgConfig('Main', {
      createModule: false,
      pretty: true,
      environment: [type],
      templateFilePath: conf.env.template
    }))
    .pipe(gulp.dest(path.resolve(conf.paths.app, 'main')))
}

function checkSource() {
  pathExists(conf.env.app).then(function (exists) {
    if (!exists) {
      gutil.log(`${gutil.colors.bgRed('File not found')}: The environnement file ${gutil.colors.yellow(conf.env.app)} not exists.`)
      gutil.log(`Copy and rename ${gutil.colors.green('env.json.example')} to fix it.\n`)
      process.exit(1)
    }
  })
}

function checkBuild() {
  pathExists(conf.env.build).then(function (exists) {
    if (!exists) {
      gutil.log(`${gutil.colors.bgRed('File not found')}: The environnement file ${gutil.colors.yellow(conf.env.build)} not exists.`)
      gutil.log(`Run ${gutil.colors.green('$ gulp env:[dev|st|production]')} to create one.\n`)
      process.exit(1)
    }
  })
}