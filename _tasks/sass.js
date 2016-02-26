var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var bSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('sass', function () {
  return gulp.src(config.source.sass + '*.scss')
    .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: config.autoprefixer_browsers
    }))
    .pipe($.cleanCss({
      processImport: true
    }))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.css))
    .pipe(gulp.dest(config.deploy.css))
    .pipe(bSync.stream())
    .pipe($.plumber.stop());
});