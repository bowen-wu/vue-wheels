# Vue UI 组件

[![Build Status](https://travis-ci.org/bowen-wu/vue-wheels.svg?branch=dev)](https://travis-ci.org/bowen-wu/vue-wheels)

## 介绍
为了学习 Vue 而做的 UI 组件

## 开始使用

1. 默认 CSS 设置
    - 使用 border-box

    ```
    *, *::before, *::after { box-sizing: border-box; }
    ```
    IE 8 及以上浏览器都支持此样式。

    - 默认 CSS 样式 -> (后续会改为 SCSS 变量)
    ```
    :root {
        --font-size: 14px;
        --line-height: 32px;
        --color: #333;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式。

2. npm 安装
    ```
    npm i --save vue-wheels-bowen
    ```

3. 引入
    ```
    // 引入组件 ` import {Button, ButtonGroup, Icon} from 'xxx' `
    import {Button, ButtonGroup, Icon} from 'vue-wheels-bowen';
    // 引入 CSS ` import 'xxx/dist/index.css' `
    import 'vue-wheels-bowen/dist/index.css';

    export default {
        name: 'app',
        components: {
            HelloWorld,
            'g-button': Button,
            'g-button-group': ButtonGroup,
            'g-icon': Icon,
        }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
