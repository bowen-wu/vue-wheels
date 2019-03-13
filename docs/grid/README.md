---
sidebarDepth: 2
permalink: /grid
---

# Grid - 网格系统
通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
使用单一分栏创建基础的栅格布局。

<ClientOnly>
  <grid-demo type="basic"/>
</ClientOnly>

## 分栏间隔
分栏之间存在间隔。

<ClientOnly>
  <grid-demo type="gutter"/>
</ClientOnly>

## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<ClientOnly>
  <grid-demo type="mixin"/>
</ClientOnly>

## 分栏偏移
支持偏移指定的栏数。

<ClientOnly>
  <grid-demo type="offset"/>
</ClientOnly>

## 响应式布局
参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`sm`、`md`、`lg` 和 `xl`

<ClientOnly>
  <grid-demo type="responsive"/>
</ClientOnly>

## Attributes

// TODO: 使用 Table 组件写