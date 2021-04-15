var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsif = require('tsify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsif)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
});