## Toast

## 用例图
1. 弹出 Toast 
    - 自动关闭 -> N 秒后自动关闭
    - 点击后关闭
    - 回调
2. 弹出第二个 Toast
    - 保证只有一个 Toast
    - 允许多个 Toast (同一位置)

## API
```
this.$toast('text');
```

## 插件
1. 原型链上直接加
```
Vue.prototype.$toast = () => {
    console.log('I am toast');
}
```
#### 弊端
- 不知使用者的 Vue 版本，引入 Vue 的问题，` import Vue from 'what' `
- 改写了 prototype, 如果用户之前有写这个 ` $toast ` 则覆盖

2. 使用 Plugin -> install + use
plugin/toast.js
```
export default {
    install(Vue, options) {
        Vue.prototype.$toast = () => {
            console.log('I am toast');
        }
    }
}
```

app.js
```
import ToastPlugin from './plugin/toast';

Vue.use(ToastPlugin);
```

#### [Vue document](https://cn.vuejs.org/v2/guide/plugins.html)
1. 开发插件
插件通常会为 Vue 添加全局功能。插件的范围没有限制，一般有一下几种
- 添加全局属性或方法
- 添加全局资源： 指令 | 过滤 | 过渡等
- 通过全局 mixin 方法添加一些组件选项
- 添加 Vue 实例方法，通过把他们添加到 Vue.prototype 上实现
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能

Vue.js 的插件应该有一个公开方法 ` install `。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
```
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

2. 使用插件
通过全局方法 ` Vue.use() ` 使用插件
```
Vue.use(MyPlugin)
```
也可以传入一个选项对象
```
Vue.use(MyPlugin, { someOption: true })
```
` Vue.use() `会自动阻止多次注册相同插件，届时只会注册一次该插件

## Vue 动态创建实例 (在 .js 文件中使用 .vue 文件)
```
import Toast from '../toast'

let Constructor = Vue.extend(Toast);
let toast = new Constructor();
toast.$slots.default = [message];
toast.$mount();
document.body.appendChild(toast.$el);
```

## 关闭 Toast
```
this.$el.remove();
this.$destroy();
```
