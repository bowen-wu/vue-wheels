---
sidebarDepth: 2
permalink: /toast
---

# Toast
通过屏幕上的消息提示提供关于操作的简短反馈

## 基础用法
适用性广泛的 Toast

<ClientOnly>
  <toast-demo type="basic"/>
</ClientOnly>

## 自定义弹出位置
可以让 Toast 从顶部、中部或底部弹出

<ClientOnly>
  <toast-demo type="position"/>
</ClientOnly>

## 自定义关闭按钮
可以自定义关闭按钮

<ClientOnly>
  <toast-demo type="closeButton"/>
</ClientOnly>

## 使用 HTML 片段
` text ` 属性支持传入 HTML 片段

<ClientOnly>
  <toast-demo type="html"/>
</ClientOnly>

## 全局方法
UI 库为 ` Vue.prototype ` 添加了全局方法 ` $toast `。因此在 vue instance 中可以采用本页面中的方式调用 Toast。

## Options

// TODO: 使用 Table 组件写
