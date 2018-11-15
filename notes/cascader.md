## Cascader

## 用例图
- 点选 -> 弹出浮层(动态弹出) -> 点选 -> 叶子(选中) + 非叶子
- 键盘选
- 清空

## API
```
<cascader :source="source" @on-change="onChange"></cascader>

<cascader :source="source" @on-change="onChange">
    <g-button>toggle</g-button>
</cascader>

<g-cascader :source="source" :selected.sync="selected" cascaderHeight="200px"></g-cascader>

```

## 总结
1. 所有变量集中管理，建立 ` _var.scss ` 文件( 若文件不需要被编译，文件名前最好加 ` _ ` )
2. Vue 的组件属性不能以 ` data ` 开头
3. 如果不知道数据有多少层，但是需要循环显示 ==> 递归组件
4. 在 Vue 的组件中使用了和 ` name ` 相同的标签，那么标签就是自身组件
5. 定义变量时注意 v. 和 adj. 的使用
6. 计算属性：如果某一属性是根据另一个属性来变动，则使用计算属性
    - 自动更新
    - 若有特殊逻辑，可以在函数内实现
    - 模板 (template) 简洁
7. 将图标变小可以使用： ` transform: scale(0.5); `
8. 当选择 level 时 | 更新时，穿的数组后面的都不要 -> ` copyData.splice(this.level + 1) `
9. 输入框中先没有字后有字可能会造成一些问题 -> ` {{value || '&nbsp'}} `
