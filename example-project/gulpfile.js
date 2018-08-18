var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

var concat = require('gulp-concat');
var babel = require('gulp-babel');

var browserSync = require('browser-sync').create();

gulp.task('copy', function() {
    return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    return gulp.src('src/assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions', '> 5%'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
});


gulp.task('js', function(){
    return gulp.src('src/assets/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/assets/js'))
});

gulp.task('watch', ['default'], function() {
    gulp.watch([
        './src/**/*.scss'
    ], ['css']);

    gulp.watch([
        './src/**/*.js'
    ], ['js']);
});

gulp.task('serve', ['default'], function() {
    browserSync.init({
        // server: "./build" // static server
        proxy: "localhost/wordpress" // dynamic server
    });
    gulp.watch("src/assets/sass/*.scss", ['css']);
    gulp.watch("src/**/*.html", ['copy'])
    .on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js']);