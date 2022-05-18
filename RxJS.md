<<<<<<< HEAD

## RxJS

([概览 | RxJS 中文文档](https://cn.rx.js.org/manual/overview.html)）可直接查看源码

1. ### 概览

   promise一旦创建即开始运行，而stream数据类型是惰性求值，需要订阅它让它流动起来，被称为pipeline。箭头函数即为消费者，当消费者一接收到数据，stream就结束了。

   ```typescript
   Stream(2017).subscribe(
     result => {
       console.log(result);
     }
   );
   ```

   面对象编程以**状态**为中心，函数式编程以**行为**为中心，RxJS是响应式编程其状态是**短暂的、瞬间的**，即RxJS中是永远不保留状态的。

   是惰性的，不订阅不会执行，类似Function。此外，订阅操作是独立的，即可以重复订阅,订阅到的数据是独立的。

   无需监听器和观察者列表

   处理数据流的时候类似迭代器，并且可以是异步的。这是Observable相较于Function、Generator、Promise、Observable的区别。

   ```javascript
   var observable = Rx.Observable.create(function (observer) {
     observer.next(1);
     observer.next(2);
     observer.next(3);
     setTimeout(() => {
       observer.next(4);
       observer.complete();
     }, 1000);
   });
   
   console.log('just before subscribe');
   observable.subscribe({
     next: x => console.log('got value ' + x),
     error: err => console.error('something wrong occurred: ' + err),
     complete: () => console.log('done'),
   });
   console.log('just after subscribe');
   ```

   输出结果：

   ```
   just before subscribe
   got value 1
   got value 2
   got value 3
   just after subscribe
   got value 4
   done
   ```

   多个请求可以用同一个errorHandler，然后用迭代器的方式处理所有error信息

   js实现和RxJS实现对比

   ```javascript
   var observable = Rx.Observable.create(function subscribe(observer) {
     // 追踪 interval 资源
     var intervalID = setInterval(() => {
       observer.next('hi');
     }, 1000);
     // 提供取消和清理 interval 资源的方法
     return function unsubscribe() {
       clearInterval(intervalID);
     };
   });
   var subscription = observable.subscribe(x => console.log(x));
   // 稍后：
   subscription.unsubscribe();
   ```

   ```javascript
   function subscribe(observer) {
     var intervalID = setInterval(() => {
       observer.next('hi');
     }, 1000);
     return function unsubscribe() {
       clearInterval(intervalID);
     };
   }
   var unsubscribe = subscribe({next: (x) => console.log(x)});
   // 稍后：
   unsubscribe(); // 清理资源
   ```

   subject相当于维护多个监听器的注册表，这与observable不同，之前发送的值不会重复发送。这意味着搭配errorHandler处理的时候，subscribe的位置需要考虑。但是，可以结合observable.subscribe(subject)实现对observable的多播。

   BehaviorSubject保存了最新值，会将该值发给用户。

   ReplaySubject(n)可以缓存n个值

   Subject.prototype.asObservable()防止泄露subject，在实例中使用的时候，每次都是新的subject调用asObservable，这意味着subject之前的数据并不会在新的observable返回值中出现（之后的数据，依然会进入生成的Observable）。但将subject作为参数调用asObservable的效果依然存疑，待定。

   zip和forkJoin可以合并多个Observable，类似promise.all

2. ### 生命周期

   ReplaySubject和Subject要考虑组件的生命周期与service生命周期的区别

   订阅的位置要进行考虑，例如由button触发，可能会导致重复的订阅。此外，订阅的生命周期跟组件的生命周期也不一样，subscription可以调用add/remove方法，管理子subscription，并最终一起unsubscribe()。

3. 











