var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')


function build() {
    return gulp.src('L.Control.Range.js')
        .pipe(uglify())
        .pipe(rename('L.Control.Range-min.js'))
        .pipe(gulp.dest('./'))
}

function watch() {
    return gulp.watch('L.Control.Range.js', ['build']);
}

exports.build = build
exports.watch = watch
exports.default = build
