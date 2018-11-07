/* require */
var gulp         = require('gulp'),
		browserSync  = require('browser-sync').create(),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    notify       = require("gulp-notify"),
    combineMq    = require('gulp-combine-mq'),
    bro          = require("gulp-bro"),
    babelify     = require("babelify"),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    sourcemaps   = require('gulp-sourcemaps'),
    eslint       = require('gulp-eslint');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/**/*.scss", ['sass']);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
  gulp.watch("./js/**/*.js", ['scripts']).on('change', browserSync.reload);
});




gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});



/* es6, bundling and minification */
gulp.task('scripts', function() {
  gulp.src('./js/src/main.js')
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(bro({
      transform: [
        babelify,
      ]
    }))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js/dist'));
});




//run this command to minify css and concatenate same media queries into one
gulp.task('cssmini', function () {
  return gulp.src('style.css')
  .pipe(combineMq({
    beautify: false
  }))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('/'));
});



/* default task - start server, autoprefix and compile sass, reload */
gulp.task('default', ['serve']);