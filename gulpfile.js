var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');

gulp.task('default', ['minify'], function() {

});

gulp.task('clean', function() {
  gulp.src('./public/*.html', { read: false })
    .pipe(rimraf());

  return gulp.src('./public/css/*', { read: false })
  .pipe(rimraf());
});

gulp.task('build', function() {
  return gulp.src('./src/style.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('minify', ['build'], function () {
  return gulp.src('./public/css/style.css')
  .pipe(sourcemaps.init())
  .pipe(minify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/css'))
  .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  watch('./src/**/*.less', batch(function (events, done) {
    gulp.start('minify', done);
  }));
  watch('./src/docs/*.jade', batch(function (events, done) {
    gulp.start('docs', done);
  }));
});