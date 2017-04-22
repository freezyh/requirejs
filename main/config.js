require.config({
    //应用程序的最顶层目录。可选的，如果设置了的话，r.js 会认为
    //脚本在这个路径的子目录中，应用程序的文件都会被拷贝到输出
    //目录（dir 定义的路径）。如果不设置，则使用下面的 baseUrl 路径。
    appDir: 'requirejs',
    //默认情况下，所有的模块都是相对于这个路径的。如果没有设置，则模块
    //的加载是相对于 build 文件所在的目录。另外，如果设置了appDir，
    //那么 baseUrl 应该定义为相对于 appDir 的路径。
　　baseUrl: "js",

　　paths: {
    　　"jquery": "jquery.min",
    　　"math": "math",
        "A": "a",
        "B": "b"
　　},
    shim: {
        "A": {
            exports: "A"    
        },
        "B": {
            deps: ['jquery'],  //该模块的依赖
　　　　　　exports: 'FnB'       //导出的模块
        }
    }
});
/*
require(['math'], function(math){
    console.info(math.add(1,1));
})
require(['jquery'], function(jquery){
    console.info("jquery has loaded");
    console.info($('h2').html());
})*/

require(['A'], function(A){
    fna();
})
require(['B'], function(FnB){
    fnb();
    fnbb();
})