var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    gulp.src('**/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
			browsers: ['>1%']
		}))
        .pipe(gulp.dest(''))
        
})

gulp.task('default', function() {
	gulp.watch('**/*.scss', ['sass']);
});
