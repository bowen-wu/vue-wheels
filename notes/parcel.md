## Parcel

1. 安装： ` npm i -D parcel-bundler `
2. Vue 使用 parcel： 在 package.json 中添加：
    ```
    {
    // ...
    "alias": {
        "vue" : "./node_modules/vue/dist/vue.common.js"
    }
    }
    ```
3. ` parcel build test/* --no-cache --no-minify `   -> 将 ES6 语法转化成浏览器或 node 可以识别的代码
    - ` test/* ` -> 指 test 下所有的一级文件
    - ` --no-cache ` -> 不要缓存
    - ` --no-minify ` -> 不要压缩