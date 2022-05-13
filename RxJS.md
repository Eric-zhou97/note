<<<<<<< HEAD
## RxJS

([概览 | RxJS 中文文档](https://cn.rx.js.org/manual/overview.html)）可直接查看源码

promise一旦创建即开始运行，而stream数据类型是惰性求值，需要订阅它让它流动起来，被称为pipeline。箭头函数即为消费者，当消费者一接收到数据，stream就结束了。

```typescript
Stream(2017).subscribe(
  result => {
    console.log(result);
  }
);
```

面对象编程以**状态**为中心，函数式编程以**行为**为中心，RxJS是响应式编程其状态是**短暂的、瞬间的**，即RxJS中是永远不保留状态的。

测试。
=======
## RxJS

([概览 | RxJS 中文文档](https://cn.rx.js.org/manual/overview.html)）

promise一旦创建即开始运行，而stream数据类型是惰性求值，需要订阅它让它流动起来，被称为pipeline。箭头函数即为消费者，当消费者一接收到数据，stream就结束了。

```typescript
Stream(2017).subscribe(
  result => {
    console.log(result);
  }
);
```

面对象编程以**状态**为中心，函数式编程以**行为**为中心，RxJS是响应式编程其状态是**短暂的、瞬间的**，即RxJS中是永远不保留状态的。
>>>>>>> 7d17bbfe8fe14672de94ab2c74735fed16685c1f
