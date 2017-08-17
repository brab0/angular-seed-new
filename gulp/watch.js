'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var gutil = require("gulp-util");

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], function() {

    gulp.watch([path.join(conf.paths.app, '/*.html'), 'bower.json'], ['inject-reload']);

    gulp.watch([
        path.join(conf.paths.app, '/**/*.css'),
        path.join(conf.paths.app, '/**/*.less')
    ], function(event) {
        if (isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.app, '/**/*.js'), function(event) {
        if (isOnlyChange(event)) {
            gulp.start('scripts-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.app, '/**/*.html'), function(event) {
        browserSync.reload(event.path);
    });

    gulp.watch(path.join(conf.env.app), function(event) {
        if (event.type == 'deleted') {
            gutil.log(`The environnement file ${gutil.colors.yellow(conf.env.app)} ${gutil.colors.bgRed('has been deleted')}.`)
        }
    });

});