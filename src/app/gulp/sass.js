var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");

gulp.task('sass', function() {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../popup'));
});

gulp.task('minify-css', function(){
  return gulp.src([
      '../popup/*.css',
      '!../popup/*min.css'
    ])
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('../popup'));
});
