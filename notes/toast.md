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

## Props 属性
当 ` props ` 中属性 ` type ` 为 ` Object ` 时， ` default ` 须是函数 ` return {} `
若不写 function return -> 复用性 -> 引用类型
- 单文件组件中 ` export default { 选项(用于构建组件) } ` -> ` Vue.component('xxx', { 选项(同上) }) `
- 若不写 function return 初始化组件时都要用同一选项，两个 ` toast ` 用同一选项，其一改变，第二个必受影响(引用类型)
- function return -> 每次创建新选项

## callback
```
callback(this) -> 回调(this 给到使用者)
```

## enableHTML
当用户传 HTML 时，可以使用 ` v-html `, 并且此时不能使用 ` <slot></slot> ` 标签，可以使用 ` <div v-html='$slot.default[0]'></div> `, 并且让用户传 ` enableHTML `

## flex -> shorthand property
` flex === flex-grow flex-shrink flex-basis `
- ` flex-grow ` -> 
- ` flex-shrink ` -> shrink -> 收缩、退缩、畏缩 -> Flex items will shrink to fill the container according to the ` flex-shrink ` number, when the default size of flex items is large than the flex container.
- ` flex-basis ` -> specifiles the initial ` main size ` of a flecx item. This property determines the size of the content-box unless specified otherwise using ` box-sizing `

## getBoundingClientRect()
The ` Element.getBoundingClientRect() ` methods returns the size of an element and its position relative to the viewport

## debugger
实际不为 0，js 打印出 0 ==> 异步问题

## nextTick()
- ` Vue.nextTick([callback, context]) ` -> 在下次 DOM 更新循环结束之后执行延时回调。在修改数据之后立即使用这个方法，获得更新后的 DOM。
- ` vm.$nextTick([callback]) ` -> 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 ` Vue.nextTick ` 一样，不同的是回调的 ` this ` 自动绑定到调用它的实例上。

## vm.$slots
用来访问被*插槽分发*的内容。每个*具名插槽*有其相应的属性(例如： ` slot="foo" ` 中的内容将会在 ` vm.$slots.foo ` 中被找到)。` default ` 属性包括了所有没有被包含在具名插槽中的节点。**在使用*渲染函数*书写一个组件时，访问 ` vm.slots ` 最有帮助。**

## classList()
The ` Element.classList ` is a read-only property which returns a live ` DOMTokenList ` collection of the class attributes of the element
- ` add(String [, String [, ...]]) ` -> Add specified class values. If these classes already exist in attribute of the element, then they are ignored.
- ` remove(String [, String [, ...]]) ` -> Remove specified class values, And removing a class that does not exist does not throw an error.
- ` item(Number) ` -> Return class value by index in collection
- ` toggle(String [, force]) ` -> When only one argument is present: Toggle class value. i.e., if class exists then remove it and return ` false `, if not, then add it and return ` true `. When a second argument is present: If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
- ` contains(String) ` -> Checks if specified class value exists in class attribute of the element.
- ` replace(oldClass, newClass) ` -> Replaces an exists class with a new class.


