## Tabs

## 流程
需求分析 -> UI -> 代码 -> 测试

## 用例图
- 切换 Tab
- Tab 有 icon
- 横 | 竖 Tab
- 右侧加按钮

## API
```
<g-tabs selected="tab1">
    <g-tabs-head>
        <g-tabs-item name="tab1"></g-tabs-item>
        <g-tabs-item name="tab2"></g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="tab2"></g-tabs-pane>
        <g-tabs-pane name="tab1"></g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```

## ` .sync `修饰符
- 使用场景 -> 对一个 ` prop ` 进行 '双向绑定'。**推荐使用以 ` update:my-prop-name ` 的模式触发事件**
- 为什么不使用真正的双向绑定 -> 真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。
- 例子： 在一个包含 ` title ` prop 的假设组件中，可以使用以下方法表达对其赋新值的意图
    ```
    this.$emit('update:title', newTitle);
    ```
    然后父组件可以监听那个事件并根据需要更新一个本地的数据属性。例如：
    ```
    <text-document
        v-bind:title="doc.title"
        v-on:update:title="doc.title = $event"
    ></text-document>
    ```
    为了方便，以上的这种模式提供一个缩写，即 ` .sync ` 修饰符：
    ```
    <text-document v-bind:title.sync="doc.title"></text-document>
    ```
    当我们用一个对象同时设置多个 prop 的时候，也可以将这个 ` .sync ` 修饰符和 ` v-bind ` 配合使用
    ```
    <text-document v-bind.sync="doc"></text-document>
    ```
    这样会把 ` doc ` 对象中的每一个属性( 如 ` title ` ) 都作为一个独立的 prop 穿进去，然后各自添加用于更新的 ` v-on ` 监听器

## 依赖注入
```

```

