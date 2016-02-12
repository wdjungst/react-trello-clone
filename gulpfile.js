var gulp = require('gulp');
var less = require('gulp-less');

var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./public/stylesheets/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest('./public/stylesheets'))

  .pipe(livereload());
});
gulp.task('watch', function() {
  gulp.watch('./public/stylesheets/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
