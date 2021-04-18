
 
const gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
//var babel = require('gulp-babel');


sass.compiler = require('node-sass');

function style() {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./build/css'))
}

// function script() {
//   return gulp.src(['./src/views/*.js'])
//     .pipe(babel())
//     .pipe(gulp.dest('build/assets/js/app'))
// }

function watch() {
 
  gulp.watch('./scss/*.scss', style);
//  gulp.watch('./src/views/*.js', script);

}

exports.style = style;
exports.watch = watch;
//exports.script = script;
