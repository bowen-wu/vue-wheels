## Collapse

## 用例图
- click 
- 可以多个同时展开 | 只能有一个展开

## API
```
<g-collapse>
    <g-collapse-item title="title1">content1</g-collapse-item>
    <g-collapse-item title="title2">content2</g-collapse-item>
</g-collapse>
```

## 总结
1. 所有的数据更新放置在一个地方做，所有的判断都让 collapse 做，collapse-item 只负责通知 collapse，等 collapse 通知 collapse-item 更改状态
2. **单向数据流** ==> 不要出现让两个东西互相让对方更新的状态
