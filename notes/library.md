# Library

## chai.js

1. Assert -> 断言
    示例：
    ```
    console.assert(1 === 1) // 没有反应
    console.assert(1 === 2) // ERROR -> Assertion failed: console.assert
    ```

## chai-spies.js -> 

## Vue 框架
Vue 是一套用于构建用户界面的渐进式框架。MVVM 框架，只关注视图层，是一个创建单页面应用的 web 应用框架。它具有响应式的数据绑定和组合的视图组件,并且运用虚拟 DOM 从而使得性能得到大幅度提升
- 渐进式 -> 阶梯式向前，Vue 是轻量级的，它有很多独立的功能和库，我们会根据项目来选用 Vue 的一些功能

- 响应式数据绑定(数据驱动) -> 当数据发生变化时， vue 自动更新视图，它的原理主要是利用了 ` Object.definedProperty ` 中的 setter/getter 代理数据，监控对数据的操作，这也是为什么 vue 不支持 IE8 以及更早的 IE 浏览器的原因

- 组合的视图组件(组件化) -> UI 页面映射为组件书，划分组件可维护、可重用、可测试

- 虚拟DOM -> 虽然 js 运行速度很快，然而大量的 DOM 操作就会变得很慢，但是前端本身就是要通过 JS 处理 DOM 来更新视图数据的。这样在更新数据后会重新渲染页面，这样就造成在没有改变数据的地方也重新渲染了 DOM 节点，这样性能方面就会很受影响。**利用在内存中生成与真实 DOM 与之对应的数据结构，这个在内存中生成的结构称之为虚拟 DOM。**当数据发生变化时，能够智能的计算出重新渲染组件的最小代价并应用到 DOM 操作上

- MVC 与 MVVM -> MVC 指的是 **Model、View、Controller**， MVVM 指的是 **Model(数据层，即数据)、View(DOM 层或者用户界面)、ViewModel(处理数据和界面的中间层，即 Vue)**

- 单页面应用程序 -> 单页面程序往往需要路由，此时便需要 Vue-router 做路由，如果项目足够复杂，大量的使用组件并且难以去管理组件的状态，此时便需要使用 Vue-resource 来集中管理状态

## jQuery 库
jQuery 是一套跨浏览器的 JavaScript 库，简化 HTML 与 JavaScript 之间的操作。它具有 1. 操作页面对象， 2. 修改页面外观， 3. 优化 JavaScript 的事件机制，4. 为页面优化动画效果， 5. 优化 AJAX。它的优势在于：
- 轻量级

- 出色的浏览器兼容

- 出色的 DOM 操作

- 链式操作方式

- 隐式迭代集合

- 行为层与结构的分离

- 支持扩展

## Element UI 框架
一套基于 Vue 2.0 的桌面端组件库

## Bootstrap 框架
一套用于 HTML、CSS 和 JS 的前端组件库，用于开发响应式布局、移动设备优先的 Web 项目

## Velocity 库
简单易用、高性能、功能丰富的轻量级JS动画库。它能和 jQuery 完美协作，并和 ` $.animate() ` 有相同的 API，但它不依赖 jQuery，可单独使用。Velocity 不仅包含了 ` $.animate() ` 的全部功能，还拥有：**颜色动画、转换动画(transforms)、循环、缓动、SVG 动画**和**滚动动画**等特色功能。它比 ` $.animate() ` 更快更流畅，性能甚至高于 CSS3 animation，是 jQuery 和 CSS3 transition 的最佳组合，它支持所有现在浏览器，最低可兼容带 IE8 和 Android 2.3。

## Animation.css 库
一个有趣、炫酷的、跨浏览器的动画库

## PDF.js 库
一款使用 HTML5 Canvas 安全地渲染 PDF 文件以及遵从网页标准的网页浏览器渲染 PDF 文件的 JavaScript 库。