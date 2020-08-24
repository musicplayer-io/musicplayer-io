var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var autoprefixer = require('gulp-autoprefixer');

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

gulp.task('default', gulp.series(['build'], function () {
  return gulp.src('./public/css/style.css')
  .pipe(sourcemaps.init())
  .pipe(minify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/css'))
}));
