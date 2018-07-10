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