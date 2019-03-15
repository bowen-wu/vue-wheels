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

## 访问元素 & 组件
### 访问根实例
在每个 ` new Vue ` 实例的子组件中，其根实例可以通过 ` $root ` 属性可以进行访问。
```
new Vue({
    data: {
        foo: 1,
    },
    computed: {
        bar() { /* ... */ },
    },
    methods: {
        baz() { /* ... */ },
    },
});
```
所有的子组件都可以将这个实例作为一个全局 store 来访问或使用
```
// 获取根组件的数据
this.$root.foo

// 写入根组件的数据
this.$root.foo = 2

// 访问根组件的计算属性
this.$root.bar

// 调用根组件的方法
this.$root.baz()
```
### 访问父级组件实例
` $parent ` 属性可以用来从一个子组件访问父组件的实例。它提供了一种机会，可以在后期随时触达父级组件，以替代将数据以 ` prop ` 的方式传入子组件的方式(不要变更父级组件的数据，因为很难找出这个变更)。 

### 访问子组件实例或子元素
尽管存在 ` prop ` 和事件，有的时候仍可能需要在 JavaScript 里直接访问一个子组件，可以通过 ` ref ` 特性为这个子组件赋予一个 ID 引用。
```
<base-input ref="usernameInput"></base-input>

// 使用
this.$refs.usernameInput
```
访问这个 ` <base-input></base-input> ` 实例。该 ` <base-input> ` 组件也可以使用一个类似的 ` ref ` 提供对内部这个指定元素的访问，例如：
```
<input ref="input">
```
甚至可以通过其父级组件定义方法
```
methods: {
    // 用来从父级组件聚焦输入框
    focus() {
        this.$refs.input.focus();
    }
}
```
这样就允许父级组件通过下面的代码聚焦 ` <base-input> ` 里的输入框：
```
this.$refs.usernameInput.focus();
```
当 ` ref ` 和 ` v-for ` 一起使用的时候，你得到的引用将会是一个包含了对应数据源的这些子组件的**数组**
- 注意： ` $refs ` 只会在组件渲染完成之后生效，并且它们不是响应式的。这只意味着一个直接的子组件封装的 "逃生舱" --> *你应该避免在模板或计算属性中访问 ` $refs `*。
### [依赖注入](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5)
依赖注入可以很好的扩展到更深层级的件套组件上。使用 ` provide ` 和 ` inject ` 实例选项。
- ` provide ` 选项允许指定想要提供给后代组建的数据或方法。
- ` inject ` 选项用于接收指定的想要添加在这个实例上的属性。

[示例](https://jsfiddle.net/chrisvfritz/tdv8dt3s/)

- 相比 ` $parent ` 来说，依赖注入可以让我们在任意后代组件中访问想要的数据或方法，而不需要暴露整个*组件实例*。这允许我们更好的持续研发该组件，而不需要担心我们可能会改变或移除一些子组件依赖的东西。同时这些组件之间的接口是始终明确定义的，就和 ` props ` 一样。

- 实际上，可以把依赖注入看做一部分"大范围有效的 prop"，除了：

    1、祖先组件不需要知道哪些后代组件使用它提供的属性

    2、后代组件不需要知道被注入的属性来自哪里

- 负面影响： 

    1、 它将你的应用以目前的组件组织方式耦合了起来，使重构变得更加困难

    2、 依赖注入所提供的属性是非响应式的(出于设计的考虑，因为使用它们来创建一个中心化规模化的数据跟使用 ` $root ` 做这件事都是不够好的，或者如果你想在祖先组件中更新所提供的数据，那么这意味着你可能需要换用一个想 ` Vuex ` 这样真正的状态管理方案了。)。

## 事件
- 事件在哪个对象上调用，就要在哪个对象上监听
- ` Vue ` 事件系统不冒泡

## CSS
弹性盒模型中弹性项目中使用 ` margin-left: auto `，则此弹性项目右侧对齐。

## ` props ` 和 ` data `
- ` props ` -> 需要前端开发者传值入参
- ` data ` -> 不需要前端开发者传值，自身维护值

## ` v-if `
控制元素是否显示在 DOM 里，将 ` v-if ` 变为 ` true ` ==> 新增一个 **更新 UI 任务** 到任务队列中，先执行下面代码在出现