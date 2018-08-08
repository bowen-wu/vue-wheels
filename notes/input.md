## Input

#### User case
- 输入
- 复制黏贴
- tab 键定位
- 敲击回车
- 不可输入
- 报错
- 提示
- 清空
- Status
    1. input
    2. focus
    3. hover
    4. disabled
    5. readonly
    6. normal -> 1 - 5
    7. error -> + input | + focus | + hover
    8. success -> + input | + focus | + hover
    9. warning -> + input | + focus | + hover

#### JS
- ` dispatchEvent ` -> 向一个指定的事件目标派发一个事件，以合适的顺序触发受影响的事件目标。标准事件处理规则(包括事件捕获和可选的冒泡过程)同样适用于通过手动的使用 ` dispatchEvent() ` 方法派发的事件