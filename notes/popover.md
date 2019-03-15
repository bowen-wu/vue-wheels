## Popover

## 用例图
- click | hover 触发
- 文字
- 复杂内容
- button

## API
```
<g-popover>
    <template slot="content" slot-scope="{close}">
        <div>内容</div>
    </template>
    <button>click</button>
</g-popover>
```

## 关闭重复问题
解决方案 ==> ` document ` 只管外面 + ` popover ` 只管里面

## 取消监听 document
解决方案 ==> 收拢 close

## 高内聚，低耦合

## 表驱动编程

## CSS -> filter(CSS 滤镜)
The ` filter ` CSS property lets you apply graphical effects like blurring or color shifting to an element. Filter are commonly used to adjust the rendering of images, backgrounds, and borders.
Included in the CSS standard are several functions that achieve predefined effects. You can also reference an SVG filter with a URL to an SVG filter element.
#### 函数
使用 CSS 滤镜属性，你需要设定下面某一函数的值。如果该值无效，函数返回 ` none `。除特殊说明外，函数的值如果接受百分比值，那么该函数也接受小数值。
- ` url() ` -> URL 函数接受一个 XML 文件，该文件设置了一个 SVG 滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。
    ```
    filter: url(resources.svg#c1);
    ```
- ` blur() ` -> 给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可以设置 css 长度值，但不接受百分比值。
    ```
    filter: blur(4px);
    ```
- ` brightness() ` -> 给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑；如果值是100%，则图像无变化；其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1.
    ```
    filter: brightness(0.5);
    ```
- ` contrast() ` -> 调整图像的对比度。值是0%的话，图像会全黑；值是100%，图像不变；值可以超过100%，意味着会运用更低的对比。若没有设定值，默认是1.
    ```
    filter: contast(200%);
    ```
- ` drop-shadow() ` -> 给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。函数接受 ` shadow ` 类型的值，除了 ` inset ` 关键字是不允许的。该函数与已有的 ` box-shadow ` 属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。` shadow ` 参数如下：
    - ` <offset-x> ` ` <offset-y> ` (必须) ==> 这是设置阴影偏移量的两个 ` <length> ` 值。` <offset-x> ` 设定水平方向距离，负值会使阴影出现在元素左边。` <offset-y> ` 设定垂直距离，负值会出现在元素上方。如果两个值都是0，则阴影出现在元素正后面(如果设置了 ` <blur-radius> ` and | or ` <spread-radius> `，会有模糊效果)。
    - ` <blur-radius> `(可选) ==> 这是第三个 ` <length> ` 值。值越大，越模糊，则阴影会变得更大更淡。不允许负值，若未设置，默认为0(则阴影的边界很锐利)。
    - ` <spread-radoius> `(可选) ==> 这是第四个 ` <length> ` 值。正值会使阴影扩张和变大，负值会使阴影缩小。若未设定，默认是0(阴影会和元素一样大小)。注意： Webkit，以及一些其他浏览器，不支持第四个长度，如果加了也不会渲染。
    - ` <color> `(可选) ==> 若未设定，颜色值基于浏览器。
    ```
    filter: drop-shadow(16px 16px 10px rdba(0, 0, 0, 0.2));
    ```
- ` grayscale() ` -> 将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，则默认为0。
    ```
    filter: grayscale(100%);
    ```
- ` hue-rotate() ` -> 给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若未设置，默认值是0deg。该值虽没有最大值，但超过360deg的值相当于又绕一圈。
    ```
    filter: hue-rotate(90deg);
    ```
- ` invert() ` -> 反转输入图像。之定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。若未设置，值默认为0.
    ```
    filter: invert(100%);
    ```
- ` opacity() ` -> 转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。若未设置，值默认是1.该函数与已有的 ` opacity ` 属性很相似，不同之处在于通过 ` filter `，一些浏览器为了提升性能会提供硬件加速。
    ```
    filter: opacity(50%);
    ```
- ` saturate() ` -> 转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化，其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。若未设置，值默认是1。
    ```
    filter: saturate(200%);
    ```
- ` sepia() ` -> 将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认为0。
    ```
    filter: sepia(100%);
    ```

## ` scope-slot `
- 预期：` function argument expression `
- 用法： 用于将元素或组件表示为作用域插槽。特性的值应该是可以出现在函数签名的参数位置的合法的 JavaScript 表达式。这意味着在支持的环境中，你还可以在表达式中使用 ES2015 解构。此属性不支持动态绑定。

## 作用域插槽
有的时候你希望*提供的组件带有一个可从子组件获取数据的可复用的插槽*。例如一个简单的 ` <todo-list> ` 组件的模板可能包含了如下代码：
```
<ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
        {{todo.text}}
    </li>
</ul>
```
但是在我们应用的某些部分，我们希望每个独立的代办项渲染出和 ` todo.text ` 不太一样的东西。这也是作用域插槽的用武之处。

为了让这个特性成为可能，你需要做的全部事情就是将代办项内容包裹在一个 ` <slot> ` 元素上，然后将所有和其上下文相关的数据传递给这个插槽：在这个例子中，这个数据是 ` todo ` 对象：
```
<ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
        <!-- 我们为每个 todo 准备一个插槽 -->
        <!-- 将 ` todo ` 对象作为一个插槽的 prop 传入 -->
        <slot v-bind:todo="todo">
            <!-- 回退的内容 -->
            {{todo.text}}
        </slot>
    </li>
</ul>
```
现在当我们使用 ` <todo-list> ` 组件的时候，我们可以选择为代办项定义一个不一样的 ` <template> ` 作为替代方案，并且可以通过 ` slot-scope ` 特性从子组件获取数据：
```
<todo-list v-bind:todos="todos">
    <!-- 将 ` slotProps ` 定义为插槽作用域的名字 -->
    <template slot-scope="slotProps">
        <!-- 为代办项定义一个模板 -->
        <!-- 通过 ` slotProps ` 定制每个代办项 -->
        <span v-if="slotProps.todo.isComplete">✔️</span>
        {{ slotProps.todo.text }}
    </template>
</todo-list>
```
注意： ` slot-scope ` 不再限制在 ` <template> ` 元素上使用，而可以用在插槽内的任何元素或组件上。

## 解构 ` slot-scope `
如果一个 JavaScript 表达式在一个函数定义的参数位置有效，那么这个表达式实际上就可以被 ` slot-scope ` 接受。也就是说你可以在支持的环境下，在这些表达式中使用 ES2015 解构语法。例如：
```
<todo-list v-bind:todos="todos">
    <template slot-scope="{ todo }">
        <span v-if="todo.isComplete">✔️</span>
        {{ todo.text }}
    </template>
</todo-list>
```
这会使作用有域插槽变得更干净一些。