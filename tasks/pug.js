module.exports = function (gulp, $, browserSync) {
	var fs = require('fs');
	gulp.task('tao-html', function () {
		return gulp.src([
				'./src/templates/**/*.pug',
				'!./src/templates/{**/\_*,**/\_*/**}.pug'
			])
			.pipe($.plumber())
			.pipe($.pug({
				pretty: true
			}))
			.pipe(gulp.dest('./dist'))
	});
};
