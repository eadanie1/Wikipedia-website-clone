
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';

// Minify HTML
function minifyHTML() {
  return gulp.src('src/*html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
}

// Minify CSS
function minifyCSS() {
  return gulp.src('src/styles/*.scss')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'));
}

// Minify JS
function minifyJS() {
  
}