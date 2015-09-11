var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

gulp.task('sprites', function () {
	return sprity.src({
		src: './img/*.png',
		style: './dist/sprite.css'
	}).pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sprites']);