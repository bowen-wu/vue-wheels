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

- 按钮组边框多余 -> ` margin-left: -1px ` + ` position: relative; z-index: 1; `

- console.warn('这是在控制台打印出来的警告')
