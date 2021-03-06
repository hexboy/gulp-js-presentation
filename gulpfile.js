var chalk = require('chalk');
var gulp = require('gulp');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var del = require('del');
var minify = require('gulp-minify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('clean', function() {
	return del(['./dist']);
});

gulp.task('copy', function() {
	return gulp.src([
		'src/*',
		'src/**/{/font/*,/img/**/*}',
		'!src/*.json'
	])
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	return gulp.src([
		'src/assets/scss/*.scss'
	])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions', '> 5%'],
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/assets/css'))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src([
		'src/assets/js/*.js'
	])
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/assets/js'));
});

gulp.task('minify-css', function() {
	return gulp.src([
		'src/assets/scss/*.scss'
	])
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions', '> 5%'],
			cascade: false
		}))
		.pipe(cssmin())
		.pipe(rev())
		.pipe(gulp.dest('dist/assets/css'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('rev/css'));
});

gulp.task('minify-js', function() {
	return gulp.src([
		'src/assets/js/*.js'
	])
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('all.js'))
		.pipe(minify({
			ext: {
				min: '.js'
			},
			noSource: true
		}))
		.pipe(rev())
		.pipe(gulp.dest('dist/assets/js'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('rev/js'));
});

gulp.task('rev-collector', function() {
	return gulp.src(['rev/**/*.json', 'src/**/*.html'])
		.pipe(revCollector({
			replaceReved: true,
			dirReplacements: {
				'css/': 'css',
				'js/': 'js'
			}
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('rev-clean', function() {
	return del(['./rev']);
});

gulp.task('default', function() {
	runSequence('clean', 'copy', 'js', 'css', function() {
		console.log(chalk.black.bgCyan('Finished'));
	});
});

gulp.task('build', function() {
	runSequence('clean', 'copy', 'minify-js', 'minify-css', 'rev-collector', 'rev-clean', function() {
		console.log(chalk.black.bgCyan('Finished'));
	});
});

gulp.task('serve', ['default'], function() {
	browserSync.init({
		server: './dist' // static server
	});
	gulp.watch('src/**/*.scss', ['css']);
	gulp.watch('./src/**/*.js', ['js']);
	gulp.watch('src/**/*.html', ['copy'])
		.on('change', browserSync.reload);
});

gulp.task('watch', ['default'], function() {
	gulp.watch([
		'./src/**/*.scss'
	], ['css']);

	gulp.watch([
		'./src/**/*.js'
	], ['js']);

	gulp.watch([
		'./src/**/*.html'
	], ['copy']);
});
