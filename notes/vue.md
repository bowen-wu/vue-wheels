## Vue

- 检测元素时应在 ` mounted ` 周期内

- ` vm.$el ` -> 表示 Vue 实例使用的根 DOM 元素。类型为 HTMLElement

- ` Vue.extend(options) ` -> 使用基础 Vue 构造器，创建一个 '子类'。参数是一个包含组件选项的对象(` {Object} option `)
    示例：
    ```
    HTML:
    <div id="example"></div>

    JS:
    // 创建构造器
    let Profile = Vue.extend({
        template: ` <p>{{firstName}} {{lastName}} Vue {{text}}</p> `,
        data() { // data 选项是特例，在 Vue.extend() 中它必须是函数
            return {
                firstName: '我',
                lastName: '是',
                text: '框架',
            }
        }
    });

    // 创建 Profile 实例，并挂载到一个元素上
    new Profile.$mount('#example');

    <!-- result -->
    <p>我是 Vue 框架</p>
    ```

- ` vm.$mount([elementOrSelector]) ` -> 如果 Vue 示例在实例化时没有收到 el 选项，则它处于 '未挂载' 状态，美哦与关联的 DOM 元素。可以使用 ` vm.$mount ` 手动地挂在一个未挂载的实例。如果没有提供 ` elementOrSelector ` 参数，模板将被渲染为文档之外的元素，并且你必须使用原生 DOM API 把它插入文档中。 这个方法返回实例自身，因而可以链式调用其他实例方法。
    示例：
    ```
    JS:
    let MyComponent = Vue.extend({
        template: `<div>Hello!</div>`,
    });

    // 创建并挂载到 #app (会替换 #app)
    new MyComponent().$mount('#app');

    // 同上
    new MyComponent({el: '#app'});

    // 或者，在文档之外渲染并且随后挂载
    let component = new MyComponent.$mount();
    document.getElementById('app').appendChild(component.$el);
    ```

- ` propsData ` -> 创建实例时传递 ` props `, 主要作用是方便测试。只用于 ` new ` 创建的实例中。
    示例：
    ```
    let Component = Vue.extend({
        props: ['msg'],
        template: `<div>{{ msg }}</div>`,
    });

    let vm = new Component({
        propsData: {
            msg: 'hello'
        }
    });
    ```

- ` v-on ` -> 绑定事件监听器。事件类型由参数决定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。用在普通元素上时，只能监听**原生 DOM 事件**。用在自定义元素组件上时，也可以监听子组件触发的**自定义事件**。在监听原生 DOM 事件时，方法以事件为唯一的参数。*如果使用内联语句，语句可以访问一个 ` $event ` 属性： ` v-on:click = "handle('ok', $event)" `*
    1. 修饰符：
        - ` .stop ` -> 调用 ` event.stopPropagation() `
        - ` .prevent ` -> 调用 ` event.preventDefault() `
        - ` .capture ` -> 添加事件监听器时使用 capture 模式
        - ` .self ` -> 只当事件是从监听器绑定的元素本身触发时才触发回调
        - ` .{KeyCode | KeyAlias} ` -> 只当事件是从特定键触发时才触发回调
        - ` .native ` -> 监听组件根元素的原生事件
        - ` .once ` -> 只触发一次回调
        - ` .left ` -> 只当点击鼠标左键时触发
        - ` .right ` -> 只当点击鼠标右键时触发
        - ` .middle ` -> 只当点击鼠标中键时触发
        - ` .passive ` -> 以 ` { passive: true } ` 模式添加监听器
    
    2. 示例： 
    ```
    <!-- 方法处理器 -->
    <button v-on:click="doThis"></button>

    <!-- 内联语句 -->
    <button v-on:click="doThat('hello', $event)"></button>

    <!-- 缩写 -->
    <button @click="doThis"></button>

    <!-- 停止冒泡 -->
    <button @click.stop="doThis"></button>

    <!-- 阻止默认行为 -->
    <button @click.prevent="doThis"></button>

    <!-- 阻止默认行为，没有表达式 -->
    <button @click.prevent></button>

    <!-- 串联修饰符 -->
    <button @click.stop.prevent="doThis"></button>

    <!-- 键修饰符，键别名 -->
    <button @keyup.enter="onEnter"></button>

    <!-- 键修饰符，键代码 -->
    <button @keyup.13="onEnter"></button>

    <!-- 点击回调只会触发一次 -->
    <button v-on:click.once="doThis"></button>

    <!-- 对象语法 -->
    <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

    <!-- 在子组件上监听自定义事件(当子组件触发 'my-event' 时将调用事件处理器) -->
    <my-component @my-event="handleThis"></my-component>

    <!-- 内联语句 -->
    <my-component @my-event="handleThis(123, $event)"></my-component>

    <!-- 组件中的原生事件 -->
    <my-component @click.native="onClick></my-component>
    ```

- ` vm.$on(event, callback) ` -> 监听当前实例上的自定义事件，事件可以由 ` vm.$emit ` 触发。回调函数会接收所有传入事件触发函数的额外参数。
    示例：
    ```
    vm.$on('test', (params) => {
        console.log('params', params);
    });

    vm.$emit('test', 'hi');
    ```
- ` vm.$emit(eventName, [...args]) ` -> 触发当前实例上的事件，附加参数都会传给监听器回调。
    [示例：](https://cn.vuejs.org/v2/api/#vm-emit)
    ```
    JS:
    Vue.component('magic-eight-ball', {
        data() {
            return {
                possibleAdvise: ['Yes', 'No', 'Maybe']
            }
        },
        methods: {
            giveAdvise() {
                let randomAdviseIndex = Math.floor(Math.random() * this.possibleAdvise.length);
                this.$emit('give-advise', $event, this.possbleAdvise[randomAdviseIndex]);
            },
        },
        template: `
            <button @click="giveAdvice">
                Click me for advice
            </button>
        `
    });
    
    HTML:
    <div id="example">
        <magic-eight-ball @give-advice="showAdvice"></magic-eight-ball>
    </div>

    JS:
    new Vue({
        el: '#example',
        methods: {
            showAdvice(event, advice) {
                console.log('event', event);
                alert(advice)
            },
        },
    });
    ```

- Vue 的 HTML 是 HTML 语法，不是 XML 语法 -> 不可以自闭和

- ` name ` -> 只有作为组件选项时起作用。类型为 String，允许组件模板递归地调用自身，注意，组件在全局使用 ` Vue.component() ` 注册时，全局 ID 自动作为组件的 name。指定 name 选项还可以便于调试，有名字的组件有更友好的警告信息。另外，当在有 ` vue-devtools `，未命名组件将显示成 ` <AnonymousComponent> `(匿名组件)，这很没有语义，通过提供 ` name ` 选项，可以获得更有语义信息的组件树。

- scoped -> 有范围的 CSS，编译出来的 CSS 具有组件属性

- ` template ` -> 一个字符串模板作为 Vue 实例的标识使用。模板将会**替换**挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。如果值以 ` # ` 开始，则它将被用作选择符，并使用匹配元素的 innerHTML 作为模板。常用的技巧是用 ` <script type="x-template"> ` 包含模板。

- 