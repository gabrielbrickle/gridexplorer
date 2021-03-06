var gulp = require('gulp'); // npm install gulp
var sass = require('gulp-sass'); // npm install gulp-sass
var browserify = require('gulp-browserify') // npm install gulp-browserify
var htmlmin = require('gulp-htmlmin');


gulp.task('default', ['html','css', 'js'])

gulp.task('css', function (){
  gulp.src('./sass/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public'))
});

gulp.task('html', function(){
  gulp.src('./index.html')
    // .pipe(htmlhint())
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./public'))
});

gulp.task('js', function(){
  gulp.src('./js/*.js')
    .pipe(browserify())
    .pipe(gulp.dest('./public'))
});

gulp.task('watch', function(){ //npm install gulp-watch
  gulp.watch('./sass/*.scss', ['css']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./js/*/*.js', ['js']);
});
