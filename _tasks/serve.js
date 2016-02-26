var config = require('../config.json');
var bSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('serve', ['sass', 'js', 'jekyll-rebuild'], function () {
  gulp.watch(config.source.sass + '**/*.scss', ['sass']);
  gulp.watch(config.source.js + '**/*.js', ['js']);
  gulp.watch(config.source.dir + '**/*.{html,md,markdown}', ['jekyll-rebuild']);
  bSync.init({
    notify: false,
    open: "external",
    server: config.site
  });
});