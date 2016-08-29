var gulp = require("gulp");

gulp.task('watchFiles', function() {
  gulp.watch('css/**/*.scss', ['sass', 'minify-css']);
  gulp.watch('js/**/*.js', ['move']);
});
