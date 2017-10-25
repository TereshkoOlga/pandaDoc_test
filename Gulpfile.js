var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var paths = {
    html:['app/*.html'],
    css:['app/scss/**/*.scss'],
    scripts:['app/scripts/**/*.js']
};

gulp.task('sass', function(){
   gulp.src(paths.css)
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('app/css'))
       .pipe(reload({stream:true}));
});

gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(reload({stream:true}));
});

gulp.task('scripts', function(){
    gulp.src(paths.scripts)
        .pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('watcher', function(){
    gulp.watch(paths.css, ['sass']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watcher', 'browserSync']);