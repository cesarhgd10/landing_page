var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('css', function() {
    return gulp.src('assets/dist/sass/agency.scss')
    	.pipe(sass({style: 'compressed'}))
    	.pipe(autoprefixer('last 15 version'))
    	.pipe(gulp.dest('assets/dist/css/'));
});

gulp.task('default', function() {
    gulp.run('css');

    gulp.watch('assets/dist/sass/agency.scss');
});

