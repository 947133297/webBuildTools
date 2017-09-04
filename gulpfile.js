/**
 * Created by liwenjun on 2017/9/1.
 */

const gulp = require('gulp');
const del = require('del');
const scss = require('gulp-sass');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const flow = require('gulp-flowtype');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();

const src = {
    all:'src/**/*',
    scss:'src/**/*.scss',
    js:'src/**/*.js',
    html:'src/**/*.html'
};

const outputFloder = 'outputs/';

gulp.task('compile:scss',function(){
    return gulp.src(src.scss)
        .pipe(scss())
        .pipe(gulp.dest(outputFloder));
});

gulp.task('compile:js',function(){
    return gulp.src(src.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        // .pipe(flow({
        //     killFlow: false,
        //     abort: true
        // }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(outputFloder));
});

gulp.task('copy',function(){
    gulp.src(src.all)
        .pipe(gulp.dest(outputFloder));
});

gulp.task('compile',function(){
    runSequence('clean',['compile:js','compile:scss','compile:html']);
});

gulp.task('compile:html',function(){
    gulp.src(src.html)
        .pipe(gulp.dest(outputFloder));
});

gulp.task('watchJs',function(){
    gulp.watch(src.js).on('change', function(){
        //TODO 仅仅对更新了的文件进行重新编译
        runSequence('compile:js',function(){
            browserSync.reload();
        });
    });
    browserSync.init({
        proxy: {
            target: 'http://localhost:8888'
        },
    });
});

gulp.task('clean',function(){
    // 整个目录删除
    return del(outputFloder);
});
gulp.task('build', function() {
    runSequence('compile','watchJs');
});