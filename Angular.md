# Angular

1. 生命周期

   ngOnChanges()父组件给子组件传的参数发生了变化，发生在init之前

   ngOnInit()

   ngOnDestroy()

2. HTTP

   通过Rxjs来处理数据流

3. Form

   FormControl是为单个表单控件提供支持的类，它是Angular表单中的最基本的构造块，它装了这些字段的值(value)和状态(status)，比如是否有效、是否脏（被修改过）或是否有错误等，并提供了一系列公共API。
   
3. 细节

   []传入数据，()传出数据包括outer的函数，[()]双向
   
3. 国际化

   1. 内容复用
   
      "enterEventType": "Enter one ${0}",
   
      "userAccountName": "User name"
   
   2. 使用"{{'app.enterEventType' | i18n: ('app.userAccountName' | i18n)}}"
   
   3. 格式调整：使用innerHTML
   
3. ng-template标签

   相当于一个轻量级组件，可插入到页面中
   
3. router

   index.html中有app-root
   
   app.component中有router-outlet(一级)
   
   router-outlet对应的export是RouterModule
   
   在app-routing.module.ts中，其中的Routes的component为DefaultComponent，children中为子路由。keep类似vue的keep-alive表示该路由需要缓存。
   
   default.component调用sidebar，右侧的内容是nz-content中包router-outlet(二级)
   
3. 自定义组件

   组件调用自定义组件不需要单独import，只需要在app.module.ts中进群全局定义就行
   
3. 懒加载与预加载

   使用懒加载才会存在预加载的概念
   
   预加载是自己加载完了再去加载其他模块
   
   router的data添加preload属性配合preloadingStrategy与PreloadModules
   
   **尚未学习**
   
3. constructor和ngOnInit的区别

   constructor只用于setup依赖注入，以及初始化类的成员。
   
   当class被实例化时，constructor是默认被执行的方法，确保类和其子类都被正确地初始化。Angular依赖注入机制，会分析constructor的输入参数，当使用new MyClass创建class实例时，会试着去查找能匹配构造函数类型的providers，解析providers并将结果传递到类的构造函数里。
   
   其他所有业务相关的自定义初始化逻辑，均放在ngOnInit hook里完成。
   
   ngOnInit是一个生命周期钩子(需导入OnInit)，Angular调用ngOnInit时，向应用程序传递这样一个信息：Angular已经完成了Component的创建工作。
   
3. 

   





