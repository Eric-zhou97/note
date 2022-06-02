# Angular

1. ## 生命周期

   ngOnChanges()父组件给子组件传的参数发生了变化，发生在init之前

   ngOnInit()

   ngOnDestroy()

2. HTTP

   通过Rxjs来处理数据流

3. Form

   FormControl是为单个表单控件提供支持的类，它是Angular表单中的最基本的构造块，它装了这些字段的值(value)和状态(status)，比如是否有效、是否脏（被修改过）或是否有错误等，并提供了一系列公共API。
   
3. 细节

   []传入数据，()传出数据，[()]双向
   
3. 国际化

   1. 内容复用
   
      "enterEventType": "Enter one ${0}",
   
      "userAccountName": "User name"
   
   2. 使用"{{'app.enterEventType' | i18n: ('app.userAccountName' | i18n)}}"
   
   3. 格式调整：使用innerHTML
   
3. 

   





