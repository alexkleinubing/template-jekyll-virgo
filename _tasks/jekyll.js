var cp   = require('child_process');
var bSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('jekyll-build', function (done) {
  bSync.notify('Building');
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  bSync.reload();
});