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
    