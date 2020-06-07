'use strict';
 
var gulp = require( 'gulp' );
var sass = require( 'gulp-dart-scss' );

function scssCompile(cb) {
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
    .pipe(scss().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task( 'sass:watch', function () {
    gulp.watch ( './sass/**/*.scss'['sass'] );
})
cb();
}
exports.default = scssCompile

