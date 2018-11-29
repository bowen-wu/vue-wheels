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

- ` vm.$set(target, key, value) ` & ` Vue.set ` -> 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 ` Vue ` 无法探测普通的新增属性。( *注意：*对象不能是 ` Vue ` 实例，或者 ` Vue ` 实例的根数据对象。 )
    - target: ` {Object | Array} `
    - key: ` {string | number} `
    - value: ` {any} `

- ` Vue ` 不允许子组件修改 ` props `

### 自定义指令
当需要对普通 DOM 元素进行底层操作时，需要使用自定义指令。即*自定义指令*是**专门用来封装 DOM 操作的**。

#### 注册
1. 全局自定义指令
```
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: (el) => {
    // 聚焦元素
    el.focus()
  }
})
```
2. 局部自定义指令
组件中接受一个 ` directives ` 选项
```
directives: {
    focus: {
        // 指令的定义
        inserted: (el) => {
            el.focus();
        }
    },
}
```

#### 使用指令
```
<input v-focus />
```

#### 钩子函数
一个指令对象提供如下几个钩子函数：
- ` bind ` -> 只调用一次，指定第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
- ` inserted ` -> 被绑定元素插入父节点时调用( 仅保证父节点存在，但不一定已被插入文档中 )
- ` update ` -> 所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是可以通过比较更新前后的值来忽略不必要的模板更新
- ` componentUpdated ` -> 指令所在组件的 VNode **及其子 VNode** 全部更新后调用
- ` unbind ` -> 只调用一次，指令与元素解绑时调用

#### 钩子函数参数
指令钩子函数会被传入一下参数：
- ` el ` -> 指令所绑定的元素，可以用来直接操作 DOM
- ` binding ` -> 一个对象，包含以下属性
    - ` name ` -> 指令名，不包括 ` v- ` 前缀
    - ` value ` -> 指令的绑定值，例如： ` v-my-directive="1 + 1" ` 中，绑定值为 ` 2 `
    - ` oldValue ` -> 指令绑定的前一个值，仅在 ` update ` 和 ` componentUpdated ` 钩子中可用。无论值是否改变都可用
    - ` expression ` -> 字符串形式的指令表达式。例如： ` v-my-directive="1 + 1" ` 中，表达式为 ` "1 + 1" `
    - ` arg ` -> 传给指令的参数，可选。例如： ` v-my-directive:foo ` 中，参数为 ` "foo" `
    - ` modifiers ` -> 一个包含修饰符的对象。例如： ` v-my-directive.foo.bar ` 中，修饰符对象为 ` {foo: true, bar: true} `
- ` vnode ` -> Vue 编译生成的虚拟节点
- ` oldVnode ` -> 上一个虚拟节点，仅在 ` update ` 和 ` componentUpdated ` 钩子中可用
**注意**：除了 ` el ` 之外，其他参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 ` dataset ` 来进行

#### 函数简写
如果在 ` bind ` 和 ` update ` 时触发相同行为，而不关心其他的钩子，可以这样写：
```
Vue.directive('my-directive', (el, binding) => {
    // do something
});
```

#### 对象字面量
如果指令需要多个值，可以传入一个 JavaScript 对象字面量。指令函数能够接受所有合法的 JavaScript 表达式
```
// HTML
<div v-my-directive="{ color: '#fff', text: 'hello' }"></div>

// JS
Vue.directive('my-directive', {
    bind(el, binding) {
        console.log(binding.value.color) // ==> '#fff'
        console.log(binding.calue.text)  // ==> 'hello'
    },
});

```


### 响应式原理
` Vue ` 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 ` JavaScript ` 对象。而修改他们是，视图会进行更新。这使得状态管理非常简单直接，不过理解其工作原理同样重要，这样就可以回避一些常见的问题。

#### 如何追踪变化
- 当把一个普通的 JavaScript 对象传给 Vue 实例的 ` data ` 选项，Vue 将遍历对象所有的属性，并使用 ` Object.defineProperty ` 把这些属性全部转为 ` setter/getter ` 。 ` Object.defineProperty `  is an ES5-only and un-shimmable feature，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器。

- 这些 ` setter/getter ` 对用户来说是不可见的，但是在内部他们让 Vue 追踪依赖，在属性被访问和修改是通知变化。这里需要注意的问题是浏览器控制台在打印数据对象时 ` setter/getter ` 的格式化并不同，所以可能需要安装 ` vue-devtools ` 来获取更加友好的检查接口。

- 每个组件实例都有相应的 ` watcher ` 实例对象，他会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 ` setter ` 被调用时，会通知 ` watcher ` 重新计算，从而致使它关联的组件得以更新。

#### 检测变化的注意事项
受现代 JavaScript 的限制，Vue **不能检测到对象属性的添加或删除**。由于 Vue 会在初始化实例时对属性执行 ` setter/getter ` 转化过程，所以属性必须在 ` data ` 对象上存在才能让 Vue 转化它，这样才能让它是响应式的。例如：
```
let vm = new Vue({
    data: {
        a: 1,
    }
})
// ` vm.a ` 是响应式的

vm.b = 2;
// ` vm.b ` 是非响应的
```
Vue 不允许在已经创建的实例上动态添加新的根级响应式属性( root-level reactive property )。然而它可以使用 ` Vue.$set(object, key, value) ` 方法将响应属性添加到嵌套的对象上：
```
Vue.set(vm.someObject, 'b', 2);
```
还可以使用 ` vm.$set ` 实例方法，这也是全局 ` Vue.set ` 方法的别名：
```
this.$set(this.someObject, 'b', 2);
```
有时你想向一个已有对象添加多个属性，例如使用 ` Object.assign() ` 或 ` _.extend() ` 方法来添加属性。但是这样添加到对象上的新属性不会触发更新。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性：
```
// 代替 ` Object.assign(this.someObject, {a: 1, b: 2}) `
this.someObject = Object.assign({}, this.someObject, {a: 1, b: 2});
```
#### 数组更新检测
##### 变异方法
Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新，如下：
- ` push() `
- ` pop() `
- ` shift() `
- ` unshift() `
- ` splice() `
- ` sort() `
- ` reverse() `

##### 替换数组
变异方法（mutation method），顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异（non-mutating method）方法，例如：` filter() ` 、 ` concat() ` 和 ` slice() ` 。这些不会改变原始数组，但**总是会返回一个新数组**。当使用非变异方法时，可以用新数组替换旧数组：
```
example1.items = example1.items.filter(item => item.message.match(/Foo/));
```
这样操作并不会导致 Vue 丢弃现有 DOM 并重新渲染整个列表。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

##### 注意事项
由于 JavaScript 的限制，**Vue 不能检测以下变动的数组**：
1. 当利用索引直接设置一个项时，例如： ` vm.items[indexOfItem] = newValue `
2. 当修改数组的长度时，例如： ` vm.items.length = newLength `
例如：
```
let vm = new Vue({
    data: {
        items: ['a', 'b', 'c']
    }
})
vm.items[1] = 'x'   // 不是响应式的
vm.items.length = 2  // 不是响应式的
```
为了解决第一类问题，以下两种当时都可以实现和 ` vm.items[indexOfItem] = newValue ` 相同的效果，同时也将触发状态更新：
```
// Vue.set
Vue.set(vm.items, indexOfItem, newValue);
// vm.$set
vm.$set(vm.items, indexOfItem, newValue);
```
```
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue);
```
为了解决第二类问题，可以使用 ` splice `
```
vm.items.splice(newLength);
```

#### 声明响应式属性
由于 Vue 不允许动态添加根级响应式属性，所以你必须在初始化实例前声明根级响应式属性，哪怕只是一个空置：
```
let vm = new Vue({
    data: {
        message: '',
    },
    template: `<div>{{ message }}</div>`
});

vm.message = 'hello';
```
如果未在 ` data ` 选项中声明 ` message `，Vue 将警告渲染函数正在试图访问的属性不存在。
这样的限制在背后是有其技术原因的，它消除了在依赖跟踪系统中的一类边界情况，也使 Vue 实例在类型检查系统的帮助下运行的更高效。并且在代码可维护方面也有一点重要的考虑： ` data ` 对象就想组件状态的概要，提前声明所有的响应式属性，可以让组件代码在以后重新阅读或其他开发人员阅读时更易于被理解。

#### 异步更新队列
Vue **异步**执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环 "tick" 中，Vue 刷新队列并执行实际（已去重的）工作。Vue 在内部尝试对异步队列使用原生的 ` Promise.then ` 和 ` MessageChannel `，如果执行环境不支持，会采用 ` setTimeout(fn, 0) ` 代替。
例如，当你设置 ` vm.someData = 'new Value' `，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个 "tick" 更新。多数情况不需要关心这个过程，但是如果要在 DOM 状态更新后做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员沿着 "数据驱动" 的方式思考，避免直接接触 DOM，但是有时确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 ` Vue.nextTick(callback) `。这样回调函数在 DOM 更新完成后就会调用。例如：
```
<div id="example">{{ message }}</div>
```
```
let vm = new Vue({
    el: '#example',
    data: {
        message: '123'
    },
});
vm.message = 'new message' // 更改数据
vm.$el.textContent === 'new message' // false
Vue.nextTick(() => {
    vm.$el.textContent === 'new message'  // true
})
```
在组件内使用 ` vm.$nextTick() ` 实例方法特别方便，因为它不需要全局 ` Vue `，并且回调函数中的 ` this ` 将自动绑定到当前的 Vue 实例上：
```
Vue.component('example', {
    template: '<span>{{ message }}</span>',
    data() {
        return {
            message: '没有更新',
        }
    },
    methods: {
        updateMessage() {
            this.message = '更新完成'
            console.log(this.$el.textContent)  // => '没有更新'
            this.$nextTick(() => {
                console.log(this.$el.textContent)  // => '更新完成'
            })
        },
    }
})
```
因为 ` $nextTick() ` 返回一个 Promise 对象，所以可以使用 ES6。
```
methods: {
    async updateMessage() {
        this.message = 'updated'
        console.log(this.$el.textContent) // => '未更新'
        await this.$nextTick()
        console.log(this.$el.textContent) // => '已更新'
    }
}
```