## Button

- ` :root ` -> ` :root ` css 伪类匹配文档树的根元素。对于 HTML 来说， ` :root ` 表示 ` <html> ` 元素，除了优先级更高之外，与 html 选择器相同。在声明全局 CSS 变量时， ` :root ` 很有用。

    示例：
    ```
    :root {
    --main-color: hotpink;
    --pane-padding: 5px 42px;
    }
    ```

- CSS 变量 -> 带有前缀 ` -- ` 的属性名，表示的是带有值的自定义属性，其可以通过 ` var ` 函数在全文档内复用。
    示例：
    ```
    :root {
        --color: #333;
        --bg-color: #ccc;
    }
    .class {
        color: var(--color);
        background-color: var(--bg-color);
    }
    ```

- ` $emit ` -> 触发当前实例上的事件，附加参数都会传给监听器回调。 ` vm.$emit(eventName, [...args]) `
    [示例：](https://cn.vuejs.org/v2/api/#vm-emit)
    ```
    JS:
    Vue.component('welcome-button', {
        template: `
            <button @click="$emit('welcome')">
                Click me to be welcomed.
            </button>
        `
    });
    
    HTML:
    <div id="example">
        <welcome-button @welcome="sayHi"></welcome-buttom>
    </div>

    JS:
    new Vue({
        el: '#example',
        methods: {
            sayHi() {
                alert('Hi');
            },
        },
    });
    ```

- 按钮组边框多余 -> ` margin-left: -1px ` + ` position: relative; z-index: 1; `

- ` vm.$el ` -> 表示 Vue 实例使用的根 DOM 元素。类型为 HTMLElement

- 检测元素时应在 ` mounted ` 周期内

- console.warn('这是在控制台打印出来的警告')
