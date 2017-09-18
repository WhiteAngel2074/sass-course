const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('style', () => {
  return gulp.src('./sass/style.scss')
    .pipe(sass())
    // destination
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  gulp.watch('/sass/**/*.scss', ['style'])
});

gulp.task('default', ['style']);
