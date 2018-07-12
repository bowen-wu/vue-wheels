## Vue

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

- ` vm.$mount([elementOrSelector]) `

- ` propsData `

- ` vm.$on(event, callback) `