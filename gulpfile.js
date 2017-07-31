var gulp = require('gulp'),
		concatCSS = require('gulp-concat-css'),
		rename = require('gulp-rename'),
		notify = require('gulp-notify'),
		livereload = require('gulp-livereload'),
		autoprefixer = require('gulp-autoprefixer'),
		cssnano = require('gulp-cssnano');

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
		browserSync.init({
				proxy: "bymind.local"
		});
});

gulp.task('dev', function () {
	return gulp.src('dev/css/**/*.css')
		.pipe(concatCSS('bundle.css'))
		.pipe(autoprefixer({
				browsers: ['last 15 versions'],
				cascade: false
			}))
		.pipe(cssnano())
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest('prod/css'))
		.pipe(notify('Task "dev" done!'));
});

gulp.task('dev-php', function(){
	return gulp.src('dev/**/*.php')
		.pipe(gulp.dest('prod/'))
		.pipe(notify('Task "dev-php" done!'));
});

gulp.task('watch', function(){
	gulp.watch('dev/css/**/*.css', ['dev']);
	gulp.watch('dev/**/*.php', ['dev-php']);
	gulp.watch(['prod/**/*.css', 'prod/**/*.js', 'prod/**/*.php']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);

// @note sart gulp