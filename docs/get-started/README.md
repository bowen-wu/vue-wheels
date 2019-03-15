---
title: '快速上手'
permalink: /get-started
---

# 快速上手
本节将介绍如何在项目中使用 vue-wheels-bowen。

## 引入 vue-wheels-bowen
你可以引入整个 vue-wheels-bowen，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 vue-wheels-bowen。

### 完整引入
在 main.js 中写入如下内容：
```
import Vue from 'vue';
import VueWheelsUI from 'vue-wheels-bowen';
import 'vue-wheels-bowen/dist/index.css';
import App from './App.vue';

Vue.use(VueWheelsUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 vue-wheels-bowen 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入
如果你只希望引入部分组件，比如 Button 和 Icon，那么需要在 main.js 中写入以下内容：
// TODO: 本章节尚待完善
```
import Vue from 'vue';
import {Button, ButtonGroup, Icon} from 'vue-wheels-bowen';
import 'vue-wheels-bowen/dist/index.css';
import App from './App.vue';

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

## 全局配置
// TODO: 本章节尚待完善

## 开始使用
至此，一个基于 Vue 和 vue-wheels-bowen 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。


