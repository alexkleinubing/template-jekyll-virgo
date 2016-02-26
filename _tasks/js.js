var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var bSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('js', function () {
  gulp.src(config.source.js + '*.js')
    .pipe($.plumber())
    .pipe($.include()).on('error', console.log)
    .pipe($.uglify())
    .pipe($.concat('scripts.min.js'))
    .pipe(gulp.dest(config.dest.js))
    .pipe(gulp.dest(config.deploy.js))
    .pipe(bSync.stream())
    .pipe($.plumber.stop());
});