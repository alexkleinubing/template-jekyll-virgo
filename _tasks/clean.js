var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('clean', function() {
  return gulp.src(config.site, {read: false})
    .pipe($.clean());
});