/**
 * Created by liwenjun on 2017/9/1.
 */

const gulp = require('gulp');
const del = require('del');
const scss = require('gulp-sass');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
var flow = require('gulp-flowtype');

var src = {
    all:'src/**/*',
    scss:'src/**/*.scss',
    js:'src/**/*.js'
};

var outputFloder = 'outputs/';

gulp.task('compile:scss',function(){
    return gulp.src(src.scss)
        .pipe(scss())
        .pipe(gulp.dest(outputFloder));
});

gulp.task('compile:js',function(){
    return gulp.src(src.js)
        .pipe(flow({
            killFlow: false,
            abort: true
        }))
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
    runSequence('clean',['compile:js','compile:scss']);
});

gulp.task('clean',function(){
    // 整个目录删除
    return del(outputFloder);
});