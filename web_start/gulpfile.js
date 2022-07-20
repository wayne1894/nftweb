var gulp = require('gulp');
var gulpPlumber = require('gulp-plumber');// 錯誤處理
var merge= require('merge-stream');// merge-stream
var _del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var fileinclude = require('gulp-file-include'); //html檔案include

var sass = require('gulp-sass'); //編譯scss

//最小化檔案
var imagemin = require('gulp-imagemin'); //壓縮img 
var htmlmin = require('gulp-htmlmin'); // 壓縮html
var cssmin = require('gulp-minify-css'); // 壓縮css
var gulpUglify = require('gulp-uglify'); // 壓縮js

var hash_src = require("gulp-hash-src"); // 檔案後加hash


//browserSync
gulp.task('server', function () {
	browserSync.init({
		files : ['dist/*.html', 'dist/css/*.css', 'dist/js/*.js'],
		server : {
			baseDir : "./dist"
		}
	});
})

//gulp-file-include
gulp.task('fileinclude', function() {
  gulp.src(['src/*.html'])
	.pipe(gulpPlumber())
	.pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
	}))
	.pipe(gulp.dest('./dist'));
});

//gulp-sass
gulp.task('scss', function () {
    var scssStream = gulp.src(['src/css/*.scss'])
        .pipe(gulpPlumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

//gulp-imagemin
gulp.task('imagemin',function(){
    gulp.src(['dist/img/**'])
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('html', function () {
    gulp.src('dist/*.html')
//	  .pipe(htmlmin({collapseWhitespace: true})) 會把空白字串濾掉
      .pipe(hash_src({
          build_dir: "./dist",
          src_path: "./dist",
          query_name: "",
          hash_len: 8
        }))
	  .pipe(gulp.dest('./dist'));
});
gulp.task('cssmin', function () {
    gulp.src('dist/css/*.css')
	  .pipe(cssmin())
	  .pipe(gulp.dest('./dist/css'));
});
gulp.task('gulpUglify', function () {
    gulp.src('dist/js/*.js')
		.pipe(gulpUglify())
		.pipe(gulp.dest('./dist/js'));
});

//複製靜態檔案
gulp.task('copy', function() { 
  	gulp.src(['src/fonts/**'])
	  .pipe(gulp.dest('./dist/fonts'));
	gulp.src(['src/img/**'])
	  .pipe(gulp.dest('./dist/img'));
	gulp.src(['src/favicon.ico'])
	  .pipe(gulp.dest('./dist'));
    gulp.src(['src/js/**'])
	  .pipe(gulp.dest('./dist/js'));
});

//清除public資料夾檔案
gulp.task('clear', function(){ 
  return _del('./dist', {force:true});
});

//即時監控
//develop watch下的檔案 
gulp.task('watch', function () {
	gulp.watch(['src/*.html'], ['fileinclude']);
	gulp.watch(['src/include/*.html'], ['fileinclude']);
	gulp.watch(['src/css/*.scss','src/css/*/*.scss'], ['scss']);
	gulp.watch(['src/js/*.js','src/js/partials/**']);
	gulp.watch(['src/img/**','src/js/static'], ['copy']);
})

//預設執行 
gulp.task('default', ['watch','fileinclude','scss','server','copy']);

//build 最小化檔案
gulp.task('build', ['fileinclude','scss','copy','imagemin']);
//最小化檔案
gulp.task('deploy', ['html','cssmin','gulpUglify','imagemin']);