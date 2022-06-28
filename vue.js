// react和vue有哪些不同，说说你对这两个框架的看法 
// 相同点
// 都支持服务器端渲染
// 都有Virtual DOM,组件化开发,通过props参数进行父子组件数据的传递,都实现webComponent规范
// 数据驱动视图
// 都有支持native的方案,React的React native,Vue的weex
// 不同点
// React严格上只针对MVC的view层,Vue则是MVVM模式
// virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,
// 所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
// 组件写法不一样, React推荐的做法是 JSX + inline style, 也就是把HTML和CSS全都写进JavaScript了,即'all in js'; 
// Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件但是会区分开标签;
// webpack:npm run build、设置代理(前后端分离开发，仅适用于开发环境)
// 数据绑定: vue实现了数据的双向绑定,react数据流动是单向的
// state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理


// Vue的性能优化
  // 1.路由懒加载
  // 主要作用是将路由对应的组件打包成一个个的js代码块
	// 只有在这个路由被访问到的时候，才加载对应的组件，否则不加载！
  // router.js
  // {
  //   path: 'goods_apply_record',
  //   component: () => import('@/views/goods_and_material/goods_apply_record'),
  //   meta: { title: '物品借领记录', icon: 'el-icon-tickets', roles: ['2', '3'] }
  // },
  // 2.防抖、节流
  // 3.在更多的情况下，使用v-if替代v-show
  // 4.keep-alive
  

  // VUE模板编译主要分为三个步骤:
  // 解析器阶段: 将 template 里面的代码解析成AST抽象语法树;
  // 优化器阶段: 将AST抽象语法树静态标签打上tag,防止重复渲染(AST是Abstract Syntax Tree的简称，Vue使用HTML的Parser将HTML模板解析为AST，并且对AST进行一些优化的标记处理，提取最大的静态树，方便Virtual DOM时直接跳过Diff。);
  // 代码生成器阶段: 优化后的AST抽象语法树通过generate函数生成render函数字符串；(然后通过render函数结合数据生成虚拟DOM，Diff和Patch后生成新的UI)


// Diff将新老VNode节点进行比对，然后将根据两者的比较结果进行最小单位地修改视图(patch)，而不是将整个视图根据新的VNode重绘，进而达到提升性能的目的。

// <template>标签本质上没有什么意义。
// template的作用是模板占位符，可帮助我们包裹元素，但在循环过程当中，template并不会被渲染到页面上.

// vue-router有两种模式
// hash模式背后的原理是onhashchange事件,可以在window对象上监听这个事件:
// history路由
//   随着history api的到来，前端路由开始进化了,前面的hashchange，你只能改变#后面的url片段，而history api则给了前端完全的自由
//   包括back,forward,go三个方法，对应浏览器的前进，后退，跳转操作
//   怕刷新,因为可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，会404


//双向绑定的原理
// Vue双向绑定原理是采用发布订阅者模式，在初始化时劫持数据的各个属性的setter/getter，在数据变动时发布消息给订阅者，触发响应的监听回调。
// 而每个组件都对应一个Watcher实例，它会在组件渲染的过程中把接触过的数据记录为依赖，当依赖的setter出发时，会通知Watcher，从而使组件重新渲染
//vue3.0与vue2.0的不一样
//2.0用Object.defineProperty()来劫持对象setter/getter属性
  // 无法有效的监测数组，例如使用索引(index)设置数组项时，不会被vue检测到。数组方法会被检测到
  // object的属性也一样(在data下面的两层了)
//3.0通过proxy代理进行数据劫持
  // Object.defineProperty要一个一个属性定义set与get 但是Proxy可以定义一个对象所有属性的get与set

//v-show与v-if
//v-show="布尔值"
// v-show是css切换，v-if是完整的销毁和重新创建。
// 频繁切换时用v-show，运行时较少改变时用v-if
// v-if=‘false’ v-if是条件渲染，当false的时候不会渲染,v-show会渲染，但不display


// 绑定 class 的数组用法//v-bind可以省略，直接写:class=
// 对象方法 v-bind:class="{'orange': isRipe, 'green': isNotRipe}"//布尔值
// 数组方法v-bind:class="[class1, class2]"
// 行内 v-bind:style="{color: color, fontSize: fontSize+'px' }"//是变量


//computed与watch的区别
// computed
// 1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
// 2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
// 3.computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
// 4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
// 5.如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。
// 有return
// a的值由b和c确定，改b和c触发get，改a触发set
// computed: {
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }
// computed: {
//   fullName: {
//       get(){
//           return this.firstName + ' ' + this.lastName
//       }，
//       set(newValue){
//           return this.firstName + ' ' + this.lastName
//       }
    
//   }
// }

// watch
// 1. 不支持缓存，数据变，直接会触发相应的操作；
// 2.watch支持异步；
// 3.监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
// 4. 当一个属性发生变化时，需要执行对应的操作；一对多；
// 5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个属性，
// 　　immediate：组件加载立即触发回调函数执行，
// 　　deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。
//    注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。
// student:{
//   handler:function(newValue,oldValue){
//   },
//   immediate:true,
//   deep:true
// },
// 两种都可以
// student:function(newValue,oldValue){
// },



//事件修饰符
//绑定一个原生click时加native      @click.native  (element ui的组件直接@click即可)
// 父子组件之间的问题，例如给一个自定义子组件绑定事件的时候，要加上native，
// 如果使用router-link标签，加上@click事件，绑定的事件会无效，因为router-link的作用是单纯的路由跳转，会阻止click事件，
// 如果不加 .native, 事件是不会触发的，因此需要加上 .native 才会触发事件
//stop prevent self clock.ctrl.exact只有ctrl被按下时才会触发


//为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？
//存在引用问题。因为组件是用来复用的，JS 里对象是引用关系，这样作用域没有隔离(会调到同样的数据)，而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。
//组件需要复用，因此组件的作用域要确保在复用时相互隔离

// 动态组件
// <keep-alive>
//   <component v-bind:is="currentTabComponent"></component>//currentTabComponent是子组件的名称
// </keep-alive>

// vue-router中的应用，router-view当做是一个容器,它渲染的组件是用 vue-router 指定的
// include定义缓存白名单，keep-alive会缓存命中的组件；exclude定义缓存黑名单，被命中的组件将不会被缓存；max定义缓存组件上限，超出上限使用LRU的策略置换缓存数据。
// <keep-alive :include="whiteList" :exclude="blackList" :max="amount">
//     <router-view></router-view>
// </keep-alive>
// keep-alive用于保存组件的渲染状态，在动态组件间切换时避免重复渲染
// keep-alive是一个抽象组件：它自身不会渲染一个DOM元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。



// v-model本质上就是语法糖，即利用v-model绑定数据后，其实就是既绑定了数据，又添加了一个input事件监听
// 语法糖：指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。
// <input v-model='search' />
// 等于
// <input :value='search' v-on:input='search = $event.target.value'> 


//怎样理解单向数据流
//父组件用过prop把数据传给子组件，子组件无法修改，只能用$emit派发一个自定义事件，父组件接收到后，由父组件修改
  // <el-table :data="tableData">
  //  <el-table-column prop="type" label="类别" />
//子组件可以将prop的值拷贝到data中然后在data中修改
//如果是对 prop 值的转换，可以使用计算属性


//生命周期
// 创建前后 beforeCreate/created
// 在beforeCreate 阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象有了，el还没有。
// 载入前后 beforeMount/mounted
// 在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前未虚拟的DOM节点，data尚未替换。在mounted阶段，vue实例挂载完成，data成功渲染。
// 更新前后 beforeUpdate/updated
// 当data变化时，会触发beforeUpdate和updated方法。这两个不常用，不推荐使用。
// 销毁前后beforeDestory/destoryed
// beforeDestory是在vue实例销毁前触发，一般在这里要通过removeEventListener解除手动绑定的事件。实例销毁后，触发的destroyed。

//异步请求应放在哪个生命周期里调用
// created 阶段的优势是：请求时间比较早，页面 loading 时间相对较短；
// mounted 阶段的优势是：页面已经渲染完成，如果想请求之后进行 DOM 操作的话，必须在 mounted 阶段发起请求；
  // DOM操作
  // 通过使用 getElementById() 方法匹配元素的id属性来访问元素节点，对元素节点进行操作
  // 通过使用 getElementsByTagName() 方法匹配元素的tagName来访问元素节点，对元素节点进行操作
  // 通过使用 getElementsByClassName() 方法匹配元素的className来访问元素节点，对元素节点进行操作


// 触发钩子的完整顺序：
// 将路由导航、keep-alive、和组件生命周期钩子结合起来的，触发顺序，假设是从a组件离开，第一次进入b组件：
// 1. beforeRouteLeave:路由组件的组件离开路由前钩子，可取消路由离开。
// 2. beforeEach: 路由全局前置守卫，可用于登录验证、全局路由loading等。
// 3. beforeEnter: 路由独享守卫
// 4. beforeRouteEnter: 路由组件的组件进入路由前钩子。
// 5. beforeResolve:路由全局解析守卫
// 6. afterEach:路由全局后置钩子
// 7. beforeCreate:组件生命周期，不能访问this。
// 8. created:组件生命周期，可以访问this，不能访问dom。
// 9. beforeMount:组件生命周期
// 10. deactivated: 离开缓存组件a，或者触发a的beforeDestroy和destroyed组件销毁钩子。
// 11. mounted:访问/操作dom。
// 12. activated:进入缓存组件，进入a的嵌套子组件(如果有的话)。
// 13. 执行beforeRouteEnter回调函数next。


// 组件间的通信/组件传参
// 父子 props(父到子，单向)/event $parent/$children ref provide/inject
// 兄弟 bus vuex
// 跨级 bus vuex provide.inject

//vuex就是store
//state, getters, mutations, actions, modules。//Action 可以包含任意异步操作,Action 提交的是 mutation，而不是直接变更状态。
//store.dispatch(),store.getters.
//搭配cookie或localstorage,需要刷新后仍然保存的,例如token使用
//相较本地存储当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会得到高效更新。//组件可以直接绑定store.getters.token(要import store from '@/store')
// 而本地存储改变了不会自动动态更新视图需要手动获取更新


//路由跳转方式
//<router-link to='home'> router-link标签会渲染为<a>标签，咋填template中的跳转都是这种；
//另一种是编程是导航 也就是通过js跳转 比如 router.push('/home')


//axios是通过promise实现对ajax技术的一种封装


//MVC(Model-View-Controller) Model->View(用户界面)->Controller(业务逻辑)->Model(数据保存)
//MVVM(Model-View-ViewModel) View<->ViewModel<-(Ajax请求，JSON返回)>Model(包含数据库)

// Vue的模式是m-v-vm模式，即（model-view-modelView），通过modelView作为中间层（即vm的实例），进行双向数据的绑定与变化。
// 通过建立虚拟dom树document.createDocumentFragment(),方法创建虚拟dom树。
// 一旦被监测的数据改变，会通过Object.defineProperty定义的数据拦截，截取到数据的变化。
// 截取到的数据变化，从而通过订阅——发布者模式，触发Watcher（观察者）,从而改变虚拟dom的中的具体数据。
// 最后，通过更新虚拟dom的元素值，从而改变最后渲染dom树的值，完成双向绑定


// nextTick()
// 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后，立即使用这个回调函数，获取更新后的 DOM。
// 修改数据
//vm.msg = 'Hello'
// DOM 还未更新
//Vue.nextTick(function () {
//  // DOM 更新
//})


// 理解Vue中的Render渲染函数
// VUE一般使用template来创建HTML，然后在有的时候，我们需要使用javascript来创建html，这时候我们需要使用render函数。
// render函数return一个createElement组件中的子元素存储在组件实列中 $slots.default 中。
// return createElement('h1', this.title); createElement返回的是包含的信息会告诉VUE页面上需要渲染什么样的节点及其子节点。我们称这样的节点为虚拟DOM，可以简写为VNode。


// slot插槽
// 1.单个插槽
// 当子组件模板只有一个没有属性的插槽时，父组件传入的整个内容片段将插入到插槽所在的 DOM 位置，并替换掉插槽标签本身。
// 最初在 <slot> 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。
// 2.命名插槽
// solt元素可以用一个特殊的特性name来进一步配置如何分发内容。多个插槽可以有不同的名字。
// 这样可以将父组件模板中 slot 位置，和子组件 slot 元素产生关联，便于插槽内容对应传递
// 3.作用域插槽scoped slots
// 可以访问组件内部数据的可复用插槽(reusable slot)
// 在父级中，具有特殊特性 slot-scope 的<template> 元素必须存在，表示它是作用域插槽的模板。slot-scope 的值将被用作一个临时变量名，此变量接收从子组件传递过来的 prop 对象。



//v-for
//v-for="(item,i) in list"
//v-for="item,key,index in list"


//自定义指令
//v-model、v-bind、v-on、v-show、v-if是指令
// //自定义全局的指令
// Vue.directive('focus', {
//   //第一个参数永远是el，表示原生的js对象
//   bind: function (el) { //当指令绑定到元素上的时候，会立即执行bind函数，只执行一次，此时元素还没有插入到DOM中,focus聚焦此时不会生效
//       el.focus()
//   },
//   inserted: function (el) { //当元素插入到DOM中的时候，会执行inserted函数，只执行一次
//       el.focus()
//   },
//   updated: function () { //当VNode的时候，会执行updated函数，可能出发多次
//   }
// });


//自定义组件，navbar那样？


//e-charts


//v-infinite-scroll
//eventlistener监听滚轮
//list.push


//远程搜索
//remote-method监听变化  用于select
//fetch-suggestions用于  el-autocomplete(类似input)


// echarts与vue(放入的是echarts实例)
// echarts的option配置项放在在data(){}或者computed(){}中
// 在mounted(){}生命周期去初始化数据，初始化echarts。(如果有数据的话,可直接在此阶段进行渲染,this.$nextTick()可以用作局部的数据更新后DOM更新结束后的操作)
// 在updated(){}生命周期中去setOption(option)渲染echarts。(数据驱动视图刷新)

// $nextTick用法：将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
// updated用法：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
// 父的beforeUpdate->子的beforeUpdate->子的updated->父updated->nextTick回调

