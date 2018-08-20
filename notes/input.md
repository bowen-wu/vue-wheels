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

```
<h3>normal</h3>
<div class="box">
    <g-input value="hi" @change="inputChange"></g-input>
</div>

<h3>账户密码 + 提示</h3>
<div class="box">
    <g-input placeholder="账户" tips-message="这是提示"></g-input>
</div>
<div class="box">
    <g-input type="password" placeholder="密码" tips-type="tips" tips-message="至少6个字符" :maxlength="maxlength"></g-input>
</div>

<h3>auto focus</h3>
<div class="box">
    <g-input :autofocus="true"></g-input>
</div>

<h3>用户名 + 密码登录 -> 不设置 label ，上下结构</h3>
<div class="box">
    用户名：
    <g-input class="user" placeholder="账户" tips-type="tips" :tips-message="userTips" :width="width"></g-input>
</div>
<div class="box">
    密码：
    <g-input class="password" type="password" placeholder="密码" :tips-message="passwordTips" :maxlength="maxlength" :width="width"></g-input>
</div>

<h3>用户名 + 密码登录 -> 不设置 label ，左右结构，对齐</h3>
<div class="box line">
    <span class="label">用户名：</span>
    <g-input placeholder="账户" :tips="userTips" :width="width" next-icon="tips"></g-input>
</div>
<div class="box line">
    <span class="label">密码：</span>
    <g-input type="password" placeholder="密码" :tips="passwordTips" :maxlength="maxlength" :width="width" next-icon="tips"></g-input>
</div>

<h3>用户名 + 密码登录 -> 设置 label ，左右结构 + 不对齐</h3>
<div class="box login">
    <g-input placeholder="账户" :tips="userTips" label="属性方式："></g-input>
</div>
<div class="box login">
    <g-input type="password" :tips="passwordTips" :maxlength="maxlength" :width="width" label="slot方式："></g-input>
</div>

<h3>disabled</h3>
<div class="box">
    <g-input value="啦啦啦" disabled></g-input>
</div>

<h3>readonly</h3>
<div class="box">
    <g-input value="啦啦啦" readonly></g-input>
</div>

<h3>error tips</h3>
<div class="box">
    <g-input value="啦啦啦" tips-type="error" tips-message="You are error"></g-input>
</div>

<h3>normal tips 上下结构</h3>
<div class="box">
    <g-input value="啦啦啦" tips-type="tips" tips-message="这是提示" tips-position="down"></g-input>
</div>

<h3>success tips</h3>
<div class="box">
    <g-input value="啦啦啦" tips-type="success"></g-input>
</div>

<h3>pre icon</h3>
<div class="box">
    <g-input value="啦啦啦" pre-icon="setting"></g-input>
</div>

<h3>next icon</h3>
<div class="box">
    <g-input value="啦啦啦" next-icon="tips"></g-input>
</div>

<h3>pre text</h3>
<div class="box">
    <g-input value="啦啦啦" pre-text="手机"></g-input>
</div>

<h3>next text</h3>
<div class="box">
    <g-input value="啦啦啦" next-text="搜索"></g-input>
</div>

<h3>clear</h3>
<div class="box">
    <g-input clearable></g-input>
</div>

<h3>v-model</h3>
<div class="box">
    <g-input v-model="message"></g-input>
    <p>{{message}}</p>
</div>
```