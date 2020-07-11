var gulp = require('gulp');

//压缩html
//gulp中插件应用  下载插件 --> 取到插件 --> 应用插件
var htmlClean = require('gulp-htmlclean');
//压缩图片
var imageMin = require('gulp-imagemin');
//压缩JS插件
var uglify = require('gulp-uglify');
//去掉JS中的调试语句
var debug = require('gulp-strip-debug');
//处理less文件
var less = require('gulp-less');
//压缩css
var cleanCss = require('gulp-clean-css');
//给c3添加前缀   postcss autoprofixer
var postCss = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
//开启服务器
var connect = require('gulp-connect');




var folder = {
    src: 'src/',
    dist: 'dist/',
}

//判断当前环境变量
var devMod = process.env.NODE_ENV == 'development';
// export NODE_ENV=development/production    设置环境变量


console.log(devMod);

gulp.task('html', function(){
    var page = gulp.src(folder.src + 'html/*')
        .pipe(connect.reload())
        if(!devMod){
            page.pipe(htmlClean())
        }
        page.pipe(gulp.dest(folder.dist + 'html/'))
})

gulp.task('img', function(){
    var page = gulp.src(folder.src + 'img/*')
        if(!devMod){
            page.pipe(imageMin())
        }
        page.pipe(gulp.dest(folder.dist + 'img/'))
})

gulp.task('css',function(){
    var page = gulp.src(folder.src + 'css/*')
            .pipe(connect.reload())
            .pipe(less())
            .pipe(postCss([autoPrefixer()]))
        if(!devMod){
            page.pipe(cleanCss())
        }
        page.pipe(gulp.dest(folder.dist + 'css/'))
})

gulp.task('js', function(){
    var page = gulp.src(folder.src + 'js/*')
        .pipe(connect.reload())
        if(!devMod){
            page.pipe(debug())
                .pipe(uglify())
        }
        page.pipe(gulp.dest(folder.dist + 'js/'))
})

gulp.task('server', function(){
    connect.server({
        port: '8888',
        livereload: true,
    });
})

gulp.task('watch', function(){
    gulp.watch(folder.src + 'html/*', ['html']);
    // gulp.watch(folder.src + 'css/*', ['css']);
    gulp.watch(folder.src + 'css/*', ['css']);
    gulp.watch(folder.src + 'js/*', ['js']);
})




gulp.task('default',['html', 'css', 'js', 'img', 'server', 'watch'])

//less --> 自动添加css3前缀 --> 压缩 --> css文件

//gulp.src();
//gulp.dest();
//gulp.task();
//gulp.watch();

