var gulp = require("gulp");
var requireDir = require('require-dir');

requireDir('./gulp', { resurse: true });

gulp.task('default', ['sass', 'minify-css']);
