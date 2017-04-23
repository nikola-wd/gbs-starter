/* require */
var gulp         = require('gulp'),
		browserSync  = require('browser-sync').create(),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    notify       = require("gulp-notify"),
    combineMq    = require('gulp-combine-mq');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/**/*.scss", ['sass']);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
  gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});


gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});






//run this command to minify css and concatenate same media queries into one
gulp.task('combineMq', function () {
    return gulp.src('style.css')
    .pipe(combineMq({
        beautify: false
    }))
    .pipe(gulp.dest('combinedMQ'));
});






/* default task - start server, autoprefix and compile sass, reload */
gulp.task('default', ['serve']);
