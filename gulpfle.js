

//在这个文件里配置一些信息
//来支配gulp如何工作


//引入包
var gulp = require('gulp');

//gulp 是一个对象，此对象下有一系列方法可以实现
//压缩合并等功能
var cssmin = require('gulp-cssmin');

//通过任务来实现不同资源（css、js、images）
//进行不同的处理
gulp.task('css',function(){
	//通过gulp所要压缩资源的位置（路径）
	gulp.src('./css/main.css');

	//gulp是一个总指挥，不参与具体的事务
	//通过调用gulp插件（基于nodejs）来实现。

});

//调用任务，通过命令进行调用