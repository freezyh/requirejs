# requirejs
requirejs的基本使用


requirejs的压缩，未完善。。。
新建tool,r.js和build.js放到目录下
r.js自行下载

build.js
{  
    baseUrl: '../requirejs',
    dir: '../require-build',
    optimizeCss: "standard",
    removeCombined: true,
    fileExclusionRegExp: /^(r|build)\.js$/,
    modules: [
        {
            name: "js/a"
        },
        {
            name: "js/b"
        }
    ],
    paths:{
        "jquery": "jquery.min",
        "math": "math",
        "A": "a",
        "B": "b"
    }
    　　
    
}
