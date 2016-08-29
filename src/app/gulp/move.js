var gulp = require("gulp");

gulp.task('move', function() {
  return gulp.src('./js/**/*.js')
    .pipe(gulp.dest('../popup'));
});
