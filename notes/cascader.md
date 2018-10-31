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
```

## 总结
1. 所有变量集中管理，建立 ` _var.scss ` 文件( 若文件不需要被编译，文件名前最好加 ` _ ` )
2. Vue 的组件属性不能以 ` data ` 开头
3. 如果不知道数据有多少层，但是需要循环显示 ==> 递归组件
4. 在 Vue 的组件中使用了和 ` name ` 相同的标签，那么标签就是自身组件