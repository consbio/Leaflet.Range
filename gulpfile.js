var gulp = require('gulp');
var minify = require('gulp-minify');


function build() {
    return gulp.src('L.Control.Range.js')
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('./'))
}

function watch() {
    return gulp.watch('L.Control.Range.js', ['build']);
}

exports.build = build
exports.watch = watch
exports.default = build
