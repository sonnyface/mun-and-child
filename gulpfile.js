/**
 *
 */



//创建gulp 对象,加载需要的功能模块
var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');


// 创建一个任务 用来 编译sass
gulp.task('compileSass',function () {
    sass("./src/sass/**/*.scss",{style:'compressed'}).pipe(gulp.dest("./dist/css"))
});

//压缩js
/*gulp.task('uglify',function () {
    gulp.src('./src/js/!*.js').pipe(
        uglify()
    ).pipe(gulp.dest("dist/js"))
});*/

gulp.task('concat',function () {
    gulp.src('./src/js/*.js').
    // pipe(concat('all.js')).  //合并
    // pipe(uglify()).         //压缩
    pipe(gulp.dest('./dist/js'));


})

//创建reload 任务，更新所有 html 页面
gulp.task('reload',function () {
    gulp.src('./**/*.html').pipe(connect.reload());
})

//压缩html任务
gulp.task('minify', function() {
    return gulp.src('./src/html/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/html'));
});

//压缩图片任务

gulp.task('imagemin', () =>
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);




//创建一个任务，观察 一个目录中的文件（./sass/**/*.scss）是否发生变化，
// 一旦发生变化就执行，compileSass
gulp.task('watch',function () {

    connect.server({
        livereload:true
    });

    gulp.watch('./src/sass/**/*.scss',['compileSass']);
    // gulp.watch('./js/*.js',['uglify']);

    gulp.watch('./src/js/*.js',['concat']);

    //监听所有的html 文件，如果有变化，就执行 reload任务

    gulp.watch('./src/html/**/*.html',['reload','minify'])

    // gulp.watch('./src/html/**/*.html',['minify']);

    gulp.watch('./src/images/*',['imagemin'])

})
