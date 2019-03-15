## Enginneering

####  npm -D
    - npm i -D package-name -> 开发者使用(-D -> develop)
    - npm i package-name -> 用户使用

####  持续集成(Continuous Integration)
一种软件工程流程，是将所有软件工程师对于软件的工作副本持续集成到共用主线(mainline)的一种举措。
持续测试 + 持续交付 + 持续部署 + ......
- [Travis CI](https://travis-ci.org/)

    0. 在根目录创建 ` .trivis.yml ` 文件
        ```
        # 使用 node js
        language: node_js
        # node js 版本
        node_js:
        - "8"
        - "9"
        - "10"
        # 插件 -> chrome 稳定版
        addons: 
        chrome: stable
        # 
        sudo: required
        before_script:
        - "sudo chown root /opt/google/chrome/chrome-sandbox"
        - "sudo chmod 4755 /opt/google/chrome/chrome-sandbox"
        ```
    
    1. sign up(GitHub)

    2. click + ![TRAVIS CI](https://upload-images.jianshu.io/upload_images/9617841-d99e4fdb01bc35a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    3. Filter repositories![Filter repositories](https://upload-images.jianshu.io/upload_images/9617841-af883da2f2707f2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    4. click change to green ![](https://upload-images.jianshu.io/upload_images/9617841-a368f91e060f69e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    Travis 接入完成

    5. go to home ![home](https://upload-images.jianshu.io/upload_images/9617841-9cee99771a0ea8cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    6. auto run ![auto run](https://upload-images.jianshu.io/upload_images/9617841-66881dbae7e27fef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    7. auto run after every push

    8. 添加 Travis CI 标识
        - 谷歌 **Travis CI badge**
        - [URL](https://docs.travis-ci.com/user/status-images/)
        - Travis CI 官网
        - 点击图标，选择 Markdown，复制链接，粘贴到 README.md 文件中

- [Circle CI](https://circleci.com/)

#### npm 发布自己的包
- 确认代码测试通过
- 上传代码到 npmjs.org
    1. 更新 package.json -> version
    2. 创建 index.js, 在 index.js 中将你想要导出的内容全部导出，默认的程序入口，县引入要导出的，之后再导出
    3. ` npx parcel build index.js --no-cache --no-minify `
    4. 更新 package.json -> ` "main": "dist/index.js" `
    5. 登录 npm.js (如果注册需要确认邮箱)
    6. 根目录运行 ` npm adduser ` (需要更换为 npm 官方源)，logged in 
        - 更换官方源(设置淘宝镜像源： ` npm config set registry https://registry.npm.taobao.org/ -g `)
        - ` npm config list `
        - 注释 ` // registry = "https://regitry.npm.taobao.org/" ` 
        - ` npm adduser `
    7. npm publish(需要 push 之后再 publish)
    8. 使用
        - 复制 ` :root ` 样式
        - 引入组件 ` import {Button, ButtonGroup, Icon} from 'xxx' `
        - 引入 CSS ` import 'xxx/dist/index.css' `
        - 更新，如果发布新的需要使用方需要更新
    9. npm link -> 本地使用
        - 源码仓库 -> ` npm link ` -> 在本地注册(本机用户)
        - 测试仓库 -> ` npm link vue-wheels-bowen ` -> 使用本地注册包
- 添加 npm 标识

#### 单向数据流 
**数据只能从顶层更新，底层无权操作数据，只能通知**