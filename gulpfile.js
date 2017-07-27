
var gulp = require('gulp');

var browserSync = require('browser-sync').create();

// Static server
gulp.task('sync', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./*.*").on('change', browserSync.reload);    
});

gulp.task('default', ['sync']);
 