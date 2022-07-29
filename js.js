// JS的了解
// 是基于原型的动态语言，主要独特特性有 this、原型和原型链。
// JS 严格意义上来说分为：语言标准部分（ECMAScript）+ 宿主环境部分
// 语言标准部分
// 2015 年发布 ES6，引入诸多新特性使得能够编写大型项目变成可能，标准自 2015 之后以年号代号，每年一更
// 宿主环境部分
// 在浏览器宿主环境包括 DOM(文档对象模型) + BOM(浏览器对象模型) 等
// 在 Node，宿主环境包括一些文件、数据库、网络、与操作系统的交互等


// js多线程
// 其实JS为我们提供了一个Worker的类，它的作用就是为了解决这种阻塞的现象。当我们使用这个类的时候，它就会向浏览器申请一个新的线程。这个线程就用来单独执行一个js文件。
// let worker = new Worker("js/test22.js");
// 开启worker线程
// https://blog.csdn.net/qq_27674439/article/details/99655925


//node多线程
// https://blog.csdn.net/flytam/article/details/86608646
//定义之后，也是用new Worker


// node.js
// node.js 一种javascript的运行环境，能够使得javascript能够脱离浏览器运行。以前js只能在浏览器基础上运行，能够操作的也只是浏览器，比如浏览器上的放大缩小操作，
// 前提是浏览器开启的基础上进行操作（浏览器是客户端）。有了node.js之后，js可以在服务端进行操作，直接在系统上进行操作，可以打开、关闭浏览器等操作。
// 简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
// Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

// node.js与vue
// 使用Vue.js开发的前端项目如何部署？我们用到node.js中的程序打包工具比如webpack（node.js中的程序部署打包工具），
// 可以直接require引入之后将不同模块打包成单个js文件。同时这些工具提供各种自动化处理，让前端开发更爽。
// Vue.js开发有第三方支持的项目构建工具，vue-cli脚手架
// 与其说是VUE需要借助NODE开发前端项目，不如换个思路，在NODE中集成VUE开发前端项目，
// 所以，先安装Node,使用Node的npm先安装Vue，然后再安装vue-cli脚手架，最后通过vue-cli脚手架构建前端项目。



// ES6中的新特性
// ES6中的let命令，声明变量，用法和var差不多，但是let是为JavaScript新增了块级作用域，ES5中是没有块级作用域的，并且var有变量提升的概念
// let/const的暂时性死区：在此作用域中用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区。
//   var函数级作用域，const块级作用域，const必须初始化(声明的时候必须同时赋值)
//   var声明的变量会作为window的属性。let声明的变量不会作为window的属性。

// var a=10;
// function fun(){
// alert(a);
// let a=2;
// } 
// 会报错，不会输出10，暂时性死区

// var a=10;
// function fun(){
// alert(a);//10
// a=2;
// console.log(a);
// } 

// var a=10;
// function fun(){
// alert(a);//undefined，作用域一层一层的
// var a=2;
// } 

// var a=10;
// for(let i=0;i<1;i++){
//   console.log(a);//也会报错，暂时性死区，作用域一层一层的
//   let a=1;
// }

// ES6中变量的解构赋值，包括对象解构和数组解构以及混合解构，比如：var [a,b,c] = [0,1,2];
// ES6中的函数定义也不再使用关键字function，而是利用了箭头函数=>来进行定义；
// ES6中可以设置默认函数参数，如function A（x,y=9）{};
// ES6中新增了Set集合和Map集合；
// ES6新增了一个基本数据类型Symbol；
// for-of来自于迭代器(Iterator)
// Promiese
// Class
// 延展操作符...


// ES7新特性
// Array.prototype.includes()
//   arr.includes(x)     (两个等价)
//   arr.indexOf(x) >= 0
// 指数操作符
// **具有与Math.pow()


// ES8的特性
// async/await(可以加try+catch)
// Object.values()
//   Object.keys()获取键
//   Object.values()获取值，不包含继承的值
//   const values=Object.keys(obj).map(key=>obj[key]);
//   const values=Object.values(obj1);
// Object.entries()
//   键值对数组
//   for(let [key,value] of Object.entries(obj1))
// String padding
//   padStart、padEnd
//   String.padStart(targetLength,[padString])
//   argetLength:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
//   padString:(可选)填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为 " "。
//   console.log('0.0'.padStart(4,'10')) //10.0
//   console.log('0.0'.padStart(20))//                0.0
// 函数参数列表结尾允许逗号 var f = function(a,b,)
// Object.getOwnPropertyDescriptors()
//   用来获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。
// const obj2 = {
//   name: 'Jine',
//   get age() { return '18' }
// };
//   Object.getOwnPropertyDescriptors(obj2)
//   返回值
//   {
//     age: {
         //这些东西叫属性的描述符
//       configurable: true,//能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
//       enumerable: true,//对象属性是否可通过for-in循环，flase为不可循环，默认值为true
//       get: function age(){}, //the getter function
//       set: undefined
//     },
//     name: {
//       configurable: true,
//       enumerable: true,
//   		value:"Jine",
//   		writable:true//对象属性是否可修改,flase为不可修改，默认值为true
//     }
//   }

// 变量提升
// var提到最前面
// 如果省略var，则是var的全局变量，但严格模式会报错//var a=b=1;中，b为全局变量，严格模式失效
// 函数在运行的时候，会首先创建执行上下文，然后将执行上下文入栈，然后当此执行上下文处于栈顶时，开始运行执行上下文。
// 在创建执行上下文的过程中会做三件事：创建变量对象，创建作用域链，确定 this 指向，其中创建变量对象的过程中，首先会为 arguments 创建一个属性，值为 arguments，
//         arguments 是一个对应于传递给函数的参数的类数组对象arguments[0]，有length
//    然后会扫码 function 函数声明，创建一个同名属性，值为函数的引用，接着会扫码 var 变量声明，创建一个同名属性，值为 undefined，这就是变量提升。


//function q(){}会提前
//q=function(){}不会提前，这是匿名函数


// JS数据类型
// 基本类型：Number、Boolean、String、null、undefined、symbol（ES6 新增的），BigInt（ES2020） 
//    转类型:BigInt(number/string)
// 引用类型：Object，对象子类型（Array，Function）
// NaN是Not a Number表示非数字，typeof NaN === 'number'
// typeof null ==="object" //这是一个历史遗留问题
// undefined的数据类型就是undefined
// typeof检测基本数据类型，instanceof检测原型

// 栈(stack):由操作系统自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈；
// 堆(heap)：一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收，分配方式倒是类似于链表。
// 1.栈使用的是一级缓存， 他们通常都是被调用时处于存储空间中，调用完毕立即释放；
// 2.堆是存放在二级缓存中，生命周期由虚拟机的垃圾回收算法来决定（并不是一旦成为孤儿对象就能被回收）。所以调用这些对象的速度要相对来得低一些。
// 堆（数据结构）：堆可以被看成是一棵树，如：堆排序；
// 栈（数据结构）：一种先进后出的数据结构。
// 引用值是在栈内存里面放堆的地址


// 问：如何判断一个对象是不是空对象？
// Object.keys(obj).length === 0


// 问： <script src=’xxx’ ’xxx’/>外部js文件先加载还是onload先执行，为什么？
// onload 是所有加载完成之后执行的
  

//深浅拷贝/克隆
//浅拷贝，创建对象，遍历之后挨个赋值
//深拷贝，根据拷贝对象创建数组或对象(constructor)，根据遍历对象的属性(typeof)是否为对象，来决定是赋值还是递归调用深拷贝 
//深拷贝注意事项
  // 1.let target = Array.isArray( source ) ? [] : {} 
  // 2.if (source.hasOwnProperty(k))//非继承的
  // 3.typeof obj === 'object' && obj !== null//null用typeof是'object'
// 浅拷贝
// function ShallowCopy(source){
//   return JSON.parse(JSON.stringify(source));
//   return Object.assign(source);//或者
// }
// function ShallowCopy(obj1) {
//   var obj2 = Array.isArray(obj1) ? [] : {};
//   for (let i in obj1) {
//   obj2[i] = obj1[i];
//  }
//   return obj2;
// }
// 深拷贝
// funciton DeepCopy(source){
//   //非对象
//   if(typeof source!=='object'||source==null){
//     return source;
//   }
//   let target=Array.isArray(source)?[]:{};
//   for(let key in source){             //用of的话得用Object.keys(source)
//     //该属性非继承
//     if(source.hasOwnProperty(key)){
//       if(typeof source[key]==='object'){
//         target[key]=DeepCopy(source[key]);
//       }else{
//         target[key]=source[key];
//       }
//     }
//   }
//   return target;
// }


// ==与===的区别
// ===不会帮你进行类型转换


// 数组扁平化同理深拷贝，用concat拼接返回的数组，递归循环用map或reduce
// function flatten(arr) {  
//   return arr.reduce((result, item)=> {
//       return result.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// }
// function flatten(arr) {
//   return arr.toString().split(',').map(function(item) {
//       return Number(item);
//   })
// } 
// function flatten(arr) {
//   return arr.join(',').split(',').map(function(item) {
//       return parseInt(item);
//   })
// }
// while (arr.some(item => Array.isArray(item))) {//全部满足的是every，全满足才返回true
//   arr = [].concat(...arr);//扩展运算符可以将二维数组变成一维数组
// }
// reduce可用于按一定方式复制数组
// 使用yeild
// function* flatten(tree){
//   if(Array.isArray(tree)){
//       for(let i = 0 ;i<tree.length;i++){
//           yield* flatten(tree[i]);//返回是数组的话依次yield
//       }
//   }else{
//       yield tree;
//   }
// }
// for (const x of flatten(arr1)) {
//   list.push(x)
// }

// 生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。
// yield后面的返回值,返回到调用next()返回的对象的value里面
// 迭代
// 算是柯里化的应用，传入数组，返回一个可以迭代该数组的函数
// function makeIterator(array) {
//   let nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < array.length
//         ? { value: array[nextIndex++], done: false }
//         : { value: undefined, done: true };
//     },
//   };
// }
// 生成器
// function* makeGenerator(array) {
//   for (const item of array) {    //可以直接yield* array
//     yield item;
//   }
// }
// const gt = makeGenerator(['a', 'b']);  //这是一个迭代器可直接for of
// console.log(gt.next()); //=> { value: 'a', done: false } 从第一个开始

// class Classroom {
//   constructor(address, name, students) {
//     this.address = address;
//     this.name = name;
//     this.students = students;
//   }

//   *[Symbol.iterator]() {
//     yield* this.students;
//   }
// }
// const c1 = new Classroom('Beijing', 'Xuexi', ['Alice', 'Bruce', 'Celina']);
// const iterator = c1[Symbol.iterator]();//for(let name of iterator)





//js的遍历方法有哪些
//1.for
//2.arr.forEach( (v,i) => {console.log(v,i);},this);   不支持return
//3.for in（循环键名，一般用来遍历对象）for(let key in arr) key是键名    会遍历私有属性，一般不用
//    for in得到对象的key或（数组\字符串的下标）
//4.for of(es6)(item是value)
//5.filter返回新数组，可以用于删除不符合要求的元素//arr.filter((item)=>{return item>10});
//6.map映射返回新数组
//7.includes/find/findIndex
//8.some和every //some只要有一个满足条件，即为true
//9.reduce 
  // arr.reduce(function(prev,cur,index,arr){
  // }, init);
  // index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；

//数组转字符串，join，toString（该方法会产生逗号）
//json转换
// 转为字符串，var str=JSON.stringify(obj);
  // 注意事项，JSON.stringify会将value为undefined的数据省略
// 转为对象， var obj=JSON.parse(str);


//数组能调用的函数
// push、pop、splice添加或替换或删除[a,个数,...arr替换内容//...数组或者直接v1,v2,v3,v4,v5,vn]、slice截取[a,b)、shift从头部取出、unshift、sort
// find、findIndex
//    let result = a.find(item => item.name==='li')
//    console.log(result);//返回第一个符合的元素{name:'li',age:10}
// map/filter/reduce(result,next) 等函数式编程方法
// 还有一些原型链上的方法：toString/valueOf



// 如何判断数组类型
// arr instanceof Array  //true
// Array.isArray([]) //true
// Object.prototype.toString.call(arr) === '[object Array]'
//    这是object的toString(),Array的toString()覆写了，object要显示用JSON.stringify(object)
// typeof判断是object后判断constructor。(typeof arr =='object'&& arr.constructor==Array )
//    arr.constructor应该是向上找到原型的constructor



// 函数中的arguments是数组吗？类数组转数组的方法了解一下？(函数传参的隐藏属性)
// 1、属性为非负整数索引
// 2、有length属性
// 是类数组
// ... 
// Array.from(arguments)
// Array.prototype.slice.apply(arguments)//返回的是新数组，也能将类数组转为数组


// JS 隐式转换，显示转换
// 一般非基础类型进行转换时会先调用 valueOf，如果 valueOf 无法返回基本类型值，就会调用 toString


//三元运算
//(条件)?真结果:假结果


//常用图算法
//迪杰斯特拉？？？
//DFS深度优先搜索算法
// https://blog.csdn.net/weixin_38686780/article/details/77244247


//柯里化
//只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
//优势
//1.参数复用：例子，先传正则表达式的规则，返回test函数
//2.提前确认:根据不同条件返回函数，可以先确认返回的函数
//3.延迟运行：实现bind
// 性能
// 存取arguments对象通常要比存取命名参数要慢一点
// 一些老版本的浏览器在arguments.length的实现上是相当慢的
// 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
// 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上
//正则复用
// function curryingCheck(reg) {
//   return function(txt) {
//       return reg.test(txt)
//   }
// }
// var hasNumber = curryingCheck(/\d+/g)   //hasNumber('test1')
// var hasLetter = curryingCheck(/[a-z]+/g)
// 按参数数量柯里化递归
// function curry(fn,...args){
//   const argLength=fn.length;
//   return function(...nextArgs){
//     const allArgs=[...args,...nextArgs];
//     if(argLength<=allArgs.length){
//       return fn.call(this,...allArgs);
//     }else{
//       return curry.call(this,fn,...allArgs);
//     }
//   }
// }



// 因此0.1+0.2!=0.3
// 如何表示数字？
// 第0位：符号位，0表示正数，1表示负数(s)
// 第1位到第11位：储存指数部分（e）
// 第12位到第63位：储存小数部分（即有效数字）f
// 运算过程：先将数字转换为二进制，再进行对阶运算，这两个过程会损失精度。
// 最大安全数字是 Math.pow(2, 53) - 1
// Number() 的存储空间是Math.pow(2, 53)，如果后台发送了一个超过最大自己的数字，会发生截断，等于 JS 能支持的最大数字。


// 事件传播机制（事件流）
// 冒泡和捕获
// 若第三参数为true,则采用事件捕获。若为false，则采用事件冒泡。  
// 事件捕获：当使用事件捕获时，父级元素先触发，子元素后触发。addeventlistener的第三个参数为true。（Netscape Communicator）
// 事件冒泡：当使用事件冒泡时，子级元素先触发，父元素后触发。（EI流）
// https://blog.csdn.net/qq_32766999/article/details/97233513
// 事件流：三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。 首先发生的事件捕获，为截获事件提供机会。然后是实际的目标接受事件。最后一个阶段是时间冒泡阶段，
// 可以在这个阶段对事件做出响应。 虽然捕获阶段在规范中规定不允许响应事件，但是实际上还是会执行，所以有两次机会获取到目标对象。
// 事件传播的阻止方法
// 在W3C中，使用stopPropagation()方法。
// 在IE下使用cancelBubble = true方法。
// 阻止默认行为：
// 在W3c中，使用preventDefault（）方法。
// 在IE下return false。


// 事件是如何实现的事件处理程序（Event Handler）
// DOM0 级事件，直接在 html 元素上绑定 on-event，比如 onclick，取消的话，dom.onclick = null，同一个事件只能有一个处理程序，后面的会覆盖前面的。
// DOM2 级事件，通过 addEventListener 注册事件，通过 removeEventListener 来删除事件，一个事件可以有多个事件处理程序，按顺序执行，捕获事件和冒泡事件
  // addEventListener中的第三个参数是useCapture, 一个bool类型。当为false时为冒泡时触发(由里向外)，true为捕获时触发(由外向里)。
  // removeEventListener要注意，不能用匿名函数
// DOM3 级事件，增加了事件类型，比如 UI 事件(load、scroll)，焦点事件，鼠标事件、文本事件、键盘事件等

// ps.
// DOM1 级事件，只有设计规范没有具体实现，所以一般跳过。


// 怎么加事件监听，两种
// 基于发布订阅模式，就是在浏览器加载的时候会读取事件相关的代码，但是只有实际等到具体的事件触发的时候才会执行。
  // 发布订阅，一些方法订阅了某一个消息，当这个消息发布了新的内容时，所有订阅该消息的方法(一个队列)会将改内容作为参数运行
// onclick 和 addEventListener


// 什么是事件委托？
// 事件委托也称之为事件代理（Event Delegation）。是JavaScript中常用绑定事件的常用技巧。
// 顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件委托给父元素，让父元素担当事件监听的职务。
// 事件代理的原理是DOM元素的事件冒泡(捕获也可，但事件冒泡的兼容性更好)。事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层。
//   实现当新增子对象时无需再次对其绑定
// 核心目的，减少绑定次数(e.target和e.currentTarget)
// 使用场景
// 当存在多个元素可以共用同一个监听器(list和item)
// 会新增对象时
// 问题：可能会增加CPU负载，因为容器级别的处理程序会对容器中任意位置的事件做出反应，而不管我们是否对该事件感兴趣。
// 但是，通常负载可以忽略不计，所以我们不考虑它

// new一个函数
// 构造调用：
// 创造一个全新的对象
// 这个对象会被执行 [[Prototype]] (_proto_)连接，将这个新对象的 [[Prototype]] 链接到这个构造函数.prototype 所指向的对象
// 这个新对象会绑定到函数调用的 this
// 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象
// 问：new 一个构造函数，如果函数返回 return {} 、 return null ， return 1 ， return true 会发生什么情况？
// 如果返回是一个对象则就是这个对象，否则返回 new 创建的新对象
// function funcNew(obj, ...args) {
//   const newObj = Object.create(obj.prototype);
  // const result = obj.apply(newObj, args); //newObj之前还有参数，现在赋予参数//F.apply(G, arguments);即G对象应用F对象的方法
//   return (typeof result === 'object' && result !== null) ? result : newObj;
// }
// 注意：[[Environment]] 指向全局词法环境，而不是函数所在的外部词法环境。因此，我们不能在 new Function 中直接使用外部变量,需要传参
// 用途：动态地接收来自服务器的代码并执行




// 说一下原型、原型链和原型链的继承吧
// 有的函数默认都会拥有一个名为 prototype 的共有且不可枚举的属性，它会指向另外一个对象，这个对象通常被称为函数的原型
// 每个对象都有一个__proto__属性，并且指向它的prototype原型对象
// prototype原型对象里的constructor指向构造函数本身
// 原型链
// 当对象查找一个属性的时候，如果没有在自身找到，那么就会查找自身的原型，如果原型还没有找到，那么会继续查找原型的原型，直到找到 Object.prototype 的原型时，此时原型为 null，查找停止。
// 这种通过通过原型链接的逐级向上的查找链被称为原型链
// 什么是原型继承？
// 一个对象可以使用另外一个对象的属性或者方法，就称之为继承。具体是通过将这个对象的原型设置为另外一个对象，这样根据原型链的规则，如果查找一个对象属性且在自身不存在时，就会查找另外一个对象，相当于一个对象可以使用另外一个对象的属性和方法了。


//symbol 有什么用处
//用来表示一个独一无二的变量防止命名冲突，还可以利用 symbol 不会被常规的方法（除了 Object.getOwnPropertySymbols 外）遍历到，所以可以用来模拟私有变量。
// 重点
//（都是es6新增的）主要用来提供遍历接口，布置了 symbol.iterator 的对象才可以使用 for···of 循环，可以统一处理数据结构。调用之后回返回一个遍历器对象，包含有一个 next 方法，使用 next 方法后有两个返回值 value 和 done 分别表示函数当前执行位置的值和是否遍历完毕。
// Symbol.for() 可以在全局访问 symbol


//问：闭包是什么？
//闭包是指有权访问另外一个函数作用域中的变量的函数
//闭包是一种特殊的对象，它由两部分组成：执行上下文（代号 A），以及在该执行上下文中创建的函数 （代号 B），当 B 执行时，如果访问了 A 中变量对象的值，那么闭包就会产生，且在 Chrome 中使用这个执行上下文 A 的函数名代指闭包。

// 闭包产生的本质
// 当前环境中存在指向父级作用域的引用
// 闭包的特性
//  1、让外部访问函数内部变量成为可能
//  2、局部变量会常驻在内存中s
//  3、可以避免使用全局变量，防止全局变量污染
//  4、会造成内存泄漏（有一块内存空间被长期占用，而不被释放）
// function foo () {
//   let index = 0
//   function baz () {
//     return index += 1//先加再返回,第一次返回是1
//   }
//   return baz
// }
// let bar = foo()
// bar() // 1
// bar() // 2
// 这样就实现了一个闭包，我每次调用bar的时候访问得都是同一个index，所以会出现一个累加的值
// 原本foo执行完毕之后会被回收，现在因为bar持有对foo的引用，所以foo并不会被回收，如果不需要的时候可以手动释放
// https://blog.csdn.net/qq_21923493/article/details/106331910

// 闭包的问题
// 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。
// 解决方法是，在退出函数之前，将不使用的局部变量全部删除。//delete obj.name;delete只能对象属性删除
// 准确的说是在 IE9 之前才会有闭包变量内存泄漏的问题。因为 IE9 之前采用的垃圾回收算法不是现在使用的清除标记算法，而是引用计数算法。s

// 问：let 闭包
// 闭包的本质应该是某个作用域链对外暴露了一个访问其内部变量的接口，且这个接口可访问的变量是可以被指定的。
// let 会产生临时性死区，无论这个变量是否是全局变量，只要在块里有人说他是let，那他就必须在赋值后使用，否则就报错。


// for let var闭包
// var声明的 i ，运行环境的 i 的值为10，但是let声明的 i，运  行环境中 i 的值是每一个循环创建匿名函数时候的 i。 
// 可以理解为let的每次循环都产生一个块级作用域，每次访问的也是自己的作用域中的数值，因此也是闭包
// 因此这里，let替换var，可以很好的解决闭包的问题。


// 什么是作用域？
// ES5 中只存在两种作用域：全局作用域和函数作用域。
// 在 JavaScript 中，我们将作用域定义为一套规则，这套规则用来管理引擎如何在当前作用域以及嵌套子作用域中根据标识符名称进行变量（变量名或者函数名）查找


// 什么是作用域链？
// 首先要了解作用域链，当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止
// 而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问。


// 一般如何产生闭包（模块）
// 1.返回函数（柯里化 bind）
// 2.函数当做参数传递(回调)


// 了解 this 嘛，bind，call，apply 具体指什么
// 都是函数的方法
// New 绑定 > 显示绑定 > 隐式绑定 > 默认绑定
// 如果需要使用 bind 的柯里化和 apply 的数组解构，绑定到 null，尽可能使用 Object.create(null) 创建一个 DMZ 对象
// f.bind(obj)，实际上可以理解为obj.f()，这时f函数体内的this自然指向的是obj；
// function foo() {
//   console.log(this.a); 
// }
// var a = 2;
// foo();
// 默认绑定，没有其他修饰（bind、apply、call)，在非严格模式下定义指向全局对象，在严格模式下定义指向 undefined
// 隐式绑定：调用位置是否有上下文对象，或者是否被某个对象拥有或者包含，那么隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。而且，对象属性链只有上一层或者说最后一层在调用位置中起作用
// 显示绑定：通过在函数上运行 call 和 apply ，来显示的绑定 this
// New 绑定时，如果是 new 一个硬绑定函数，那么会用 new 新建的对象替换这个硬绑定 this，

// this的意义，参考
// this代表正在执行当前函数的对象（object）

// a=function(){this.name='a'}
// b=function(){this.name='b'}
// fn=function(){
//   console.log(this.name);
// }
// fn.bind(a).call(b)//'a'
// fn.call(a).bind(b)//'a'加报错，bind时候已经不是一个函数了



// B.call(A, args1,args2);即A对象调用B对象的方法
// F.apply(G, arguments);即G对象应用F对象的方法
// call()的第一个参数是this要指向的对象，后面传入的是参数列表，参数可以是任意类型，当第一个参数为null、undefined的时候，默认指向window；
// apply()：第一个参数是this要指向的对象，第二个参数是数组(参数放到数组里)

// 问:如果一个构造函数，bind了一个对象，用这个构造函数创建出的实例会继承这个对象的属性吗？为什么？
// 不会继承，因为根据 this 绑定四大规则，new 绑定的优先级高于 bind 显示绑定
// 通过 new 进行构造函数调用时，会创建一个新对象，这个新对象会代替 bind 的对象绑定，作为此函数的 this，并且在此函数没有返回对象的情况下，返回这个新建的对象
// call()改过this的指向后，会再执行函数，bind()改过this后，不执行函数，会返回一个绑定新this的函数


//箭头函数和普通函数有啥区别？箭头函数能当构造函数吗？
// 普通函数通过 function 关键字定义， this 无法结合词法作用域使用，在运行时绑定，只取决于函数的调用方式，在哪里被调用，调用位置。（取决于调用者，和是否独立运行）
// 箭头函数使用被称为 “胖箭头” 的操作 => 定义，箭头函数不应用普通函数 this 绑定的四种规则，而是根据外层（函数或全局）的作用域来决定 this，且箭头函数的绑定无法被修改（new不能用）。
// 箭头函数常用于回调函数中，包括事件处理器或定时器
//   箭头函数和 var self = this，都试图取代传统的 this 运行机制，将 this 的绑定拉回到词法作用域
//   没有原型、没有 this、没有 super，没有 arguments，没有 new.target
//   不能通过 new 关键字调用
//     一个函数内部有两个方法：[[Call]] 和 [[Construct]]，在通过 new 进行函数调用时，会执行 [[construct]] 方法，创建一个实例对象，然后再执行这个函数体，将函数的 this 绑定在这个实例对象上
//     当直接调用时，执行 [[Call]] 方法，直接执行函数体
//     箭头函数没有 [[Construct]] 方法，不能被用作构造函数调用，当使用 new 进行函数调用时会报错。
//  箭头函数可能可以理解为对function使用构造函数继承法后生成的实例，原型不指向function(但这样this就不对了，不过this指向可以调的)
// 如果箭头函数中只有一句return，那么可以同时省略大括号与return；但如果使用了大括号，即使只有一句表达式，也必须有return。

// 匿名函数
// -/+/！function(){}()不推荐
// (function(){})()推荐
// return function(){};
// var fn=function(){}也属于匿名函数
// 通过匿名函数可以实现闭包。闭包是可以访问在函数作用域内定义的变量的函数。若要创建一个闭包，往往都需要用到匿名函数。
// 模拟块级作用域，减少全局变量。执行完匿名函数，存储在内存中相对应的变量会被销毁，从而节省内存。
// 再者，在大型多人开发的项目中，使用块级作用域，会大大降低命名冲突的问题，从而避免产生灾难性的后果。自此开发者再也不必担心搞乱全局作用域了。

// 箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。也就是说箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：
// 匿名函数不加this不影响访问在函数作用域内定义的变量，所以可以用于闭包

//map是键值对集合,key甚至可以是对象，set类似值唯一的数组
//可以用map和key存node来构建tree


// 数组去重
// Array.from(new Set([1, 1, 2, 2])) //无法去除{}
// object/map/includes/filter+indexOf/hasOwnProperty(要新建obj做存储)+filter等
// https://blog.csdn.net/weixin_40802058/article/details/87193344

// instanceof 如何使用
// 这是根据原型链来判断的，因此左侧必须要是对象
// 'hello tuture' instanceof String // false
// new String('hello tuture') instanceof String // true





// 对象与非对象
//   执行对象的 ToPrimitive(对象）然后继续进行比较


// Object.create和new的区别
// var o1 = new Base();的实质：

// var o1 = new Object();
// o1.[[Prototype]] = Base.prototype; //[[Prototype]]不能被取到，它相当于o1.__proto__ = Base.prototype
// Base.call(o1);

// var o2 = Object.create()的实质：//并没有继承constructor的内容
// Object.create =  function (o) {
//   var F = function () {};
//   F.prototype = o;
//   return new F();
// };

// 几种非主流继承方式

// 仅仅属性继承(只继承了构造函数，并未继承原型)
// function Teacher (name, age, subject) {
//     Person.call(this, name, age) // 继承，Person中的this指向了Teacher，因此Teacher继承了Person的属性
//     this.subject = subject
// }
// 方法都在构造函数中定义

// 仅仅方法继承(只继承了原型，并未继承构造函数，Person.prototype中没有构造函数的属性)
// 类的方法都定义在prototype里，那其实我们只需要把Person.prototype的备份赋值给Teacher.prototype即可
// Teacher.prototype = Object.create(Person.prototype)
// Object.create简单说就是新建一个对象，使用现有的对象赋值给新建对象的__proto__

// 继承最终方案(全都继承了)/寄生组合式继承
// function Teacher (name, age, subject) {
//     Person.call(this, name, age) // 继承，Person中的this指向了Teacher，因此Teacher继承了Person的属性
//     this.subject = subject
// }
// Teacher.prototype = Object.create(Person.prototype)
// Teacher.prototype.constructor = Teacher


// 常规继承方式
// 1.原型链继承
// function Parent () {
//   this.name = 'kevin';
// }
// Parent.prototype.getName = function () {
//   console.log(this.name);
// }
// function Child () {
// }
// Child.prototype = new Parent();
// var child1 = new Child();
// console.log(child1.getName()) // kevin
// 引用类型的属性被所有实例共享//不用push等，用等于，可以通过原型链特性解决，数组的话可以用深拷贝，一维数组直接arr=[...arr]
// 在创建 Child 的实例时，不能向Parent传参

// 2.借用构造函数(经典继承)
// function Parent (name) {
//   this.name = name;
// }
// function Child (name) {
//   Parent.call(this, name);
// }
// var child1 = new Child('kevin');
// console.log(child1.name); // kevin
// 避免了引用类型的属性被所有实例共享
// 可以在 Child 中向 Parent 传参
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法

// 3.组合继承
// function Parent (name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }
// Parent.prototype.getName = function () {
//   console.log(this.name)
// }
// function Child (name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

// 4.原型式继承
// function createObj(o) {
//   function F(){}
//   F.prototype = o;
//   return new F();
// }
// var person = {
//   name: 'kevin',
//   friends: ['daisy', 'kelly']
// }
// var person1 = createObj(person);
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

// 5. 寄生式继承
// function createObj (o) {
//   var clone = Object.create(o);
//   clone.sayName = function () {
//       console.log('hi');
//   }
//   return clone;
// }
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

// 6. 寄生组合式继承
// function Parent (name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }
// Parent.prototype.getName = function () {
//   console.log(this.name)
// }
// function Child (name, age) {    //重要部分
//   Parent.call(this, name);
//   this.age = age;
// }
// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }
// function prototype(child, parent) {
//   var prototype = object(parent.prototype);     //Object.creat()也可以
//   prototype.constructor = child;    //就是在实例的基础上覆盖constructor，以免改写Parant.prototype
//   child.prototype = prototype;
// }
// prototype(Child, Parent);


// 检查独有的属性
// 遍历对象属性时，每个可枚举的属性都会被枚举出来。 要检查是否具有自己定义的属性，而不是原型链上的属性，必须使用hasOwnProperty方法。
// hasOwnProperty 是 JavaScript 中唯一处理属性并且不会遍历原型链的方法。


// PWA和serviceWorker
// 渐进式网络应用（PWA）是谷歌在2015年底提出的概念。基本上算是web应用程序，但在外观和感觉上与原生app类似。支持PWA的网站可以提供脱机工作、推送通知和设备硬件访问等功能。
// Service Worker是浏览器在后台独立于网页运行的脚本，它打开了通向不需要网页或用户交互的功能的大门。 现在，它们已包括如推送通知和后台同步等功能。 
// 将来，Service Worker将会支持如定期同步或地理围栏等其他功能。 本教程讨论的核心功能是拦截和处理网络请求，包括通过程序来管理缓存中的响应。


// ES6中的class
// class User {...}做了什么呢：
// 1.	创建一个名为User的函数，该函数将成为类声明的结果
// 2.	在User.prototype中存储所有方法，例如showUInfo
// 之后，对于新对象，当我们调用一个方法的时候，它就是从原型中获取的，因此新的User对象就可以访问到类方法了。
// 类方法不可枚举
// 类总是严格模型


// ES6 static
// static关键字多用于静态方法和静态属性。
// Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()）
// 而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。



// JS脚本加载问题：async、defer
// 如果依赖其他脚本和 DOM 结果，使用 defer
// 如果与 DOM 和其他脚本依赖不强时，使用 async,解析后立即执行


// 什么是Async/Await?
// async/await是写异步代码的新方式，以前的方法有回调函数和Promise。
// async/await是基于Promise实现的，它不能用于普通的回调函数。
// async/await与Promise一样，是非阻塞的。
// async/await使得异步代码看起来像同步代码，这正是它的魔力所在。
// await关键字只能用在aync定义的函数内。async函数会隐式地返回一个promise，该promise的reosolve值就是函数return的值。
// await是一个让出线程的标志。await后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈的代码，
// 等本轮事件循环执行完了之后又会跳回到async函数中等待await后面表达式的返回值，
// 如果返回值为非promise则继续执行async函数后面的代码，否则将返回的promise放入promise队列。
// await如同他的语意，就是在等待，等待右侧的表达式完成。此时的await会让出线程，阻塞async内后续的代码，先去执行async外的代码。
// 等外面的同步代码执行完毕，才会执行里面的后续代码。就算await的不是promise对象，是一个同步函数，也会等这样操作。之后的代码依然是同步代码

// await console.log(1)与console.log(await 1)是不一样的，后面一个console.log是期约的then中执行的，前一个是同步任务

// async function async1() {
// 	console.log('async1 start');
// 	await async2();
// 	console.log('asnyc1 end');
// }
// async function async2() {
// 	console.log('async2');
// }
// console.log('script start');
// setTimeout(() => {
// 	console.log('setTimeOut');
// }, 0);
// async1();
// new Promise(function (reslove) {
// 	console.log('promise1');
// 	reslove();
// }).then(function () {
// 	console.log('promise2');
// })
// console.log('script end');

// script start
// async1 start
// async2
// promise1
// script end
// asnyc1 end
// promise2
// setTimeOut

// setTimeout(fn, 0)多久才执行，
// Event Loop
// JS是单线程的，一切多线程都是模拟出来的。
// setTimeout 按照顺序放到队列里面，然后等待函数调用栈清空之后才开始执行，而这些操作进入队列的顺序，则由设定的延迟时间来决定
// Event Loop即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。
// 先执行 Script 脚本，然后清空微任务队列，然后开始下一轮事件循环，继续先执行宏任务队列中的第一项，再清空微任务队列，如此往复。
  // （1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
  // （2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
  // （3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
  // （4）主线程不断重复上面的第三步。
// 宏任务与微步任务都是异步任务
// 宏任务：Script/setTimeout/setInterval/setImmediate/ I/O / UI Rendering
// 微任务：process.nextTick()/Promise  (process.nextTick()跟setTimeout比是微任务，直接进入微任务队列排队，不能设置时间)
// 上诉的 setTimeout 和 setInterval 等都是任务源，真正进入任务队列的是他们分发的任务。

// 有两个任务队列，宏任务队列和微任务队列，执行宏任务后，会将产生的微任务全执行完后才进行下一个宏任务

// 优先级
// setTimeout = setInterval 一个队列
// setTimeout > setImmediate 
// process.nextTick > Promise > setTimeout
// 微任务执行优先级高于宏任务

// setInterval
// 间歇调用与超时调用类似，只不过它会按照指定的时间间隔重复执行代码，直至间歇调用被取消或页面被卸载。
// 设置间歇调用的方法是setInterval()，它接收的参数与setTimeout()相同。取消间歇调用的重要性远高于超时调用。
// clearInterval()


// Promise
// 1、主要用于异步计算
// 2、可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果
// 3、可以在对象之间传递和操作promise，帮助我们处理队列


// 为什么会有promise？
// 为了避免界面冻结（任务）
// 同步：交付A并完成任务A后再继续执行任务B
// 异步：则是将耗时很长的A交付的工作交给系统之后，就去继续做B交付的工作。等到系统完成了前面的工作之后，再通过回调或者事件，继续做A剩下的工作。
// AB工作的完成顺序，和交付他们的时间顺序无关，所以叫“异步”。    //还是单线程
// 避免回调地狱(回调地狱是callback嵌套使用，可以用promise(function (resolve, reject){...}).then()分隔开，使用生成器配合co()模块)
// promise是一个对象，对象和函数的区别就是对象可以保存状态，函数不可以（闭包除外） 
// 并未剥夺函数return的能力，因此无需层层传递callback，进行回调获取数据 
// 代码风格，容易理解，便于维护 
// 多个异步等待合并便于解决

// cb就是callback的缩写
// 传入的就是cb
// push的东西就是cb
// 将函数作为参数传递，或者push，使得函数按规划顺序执行（例如:先执行异步再执行同步，这也是一种异步）

// 三个状态
// 1、pending[待定]初始状态
// 2、fulfilled[实现]操作成功
// 3、rejected[被否决]操作失败


// 状态改变，只有两种可能：
// 从pending变为fulfilled
// 从pending变为rejected。
// resolve作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

// new Promise是同步的任务，会被放到主进程中去立即执行。而.then()函数是异步任务

// .then()
// 返回一个新的Promise实例，所以它可以链式调用
// 接收两个函数作为参数，分别代表fulfilled（成功）和rejected（失败）  //.catch(()=>{})
// 当前面的Promise状态改变时，.then()根据其最终状态，选择特定的状态响应函数执行
// 如果返回新的promise，那么下一级.then()会在新的promise状态改变之后执行
// 如果返回其他任何值，则会立即执行下一级.then()， return什么该then就接受什么，如果then中没有return，则默认return的是 undefined.
// 错误处理的两种做法
// 第一种：reject('错误信息').then(() => {}, () => {错误处理逻辑})//里面有两个函数
// 第二种：throw new Error('错误信息').catch( () => {错误处理逻辑})
// then 的第一个函数出错了，后面的catch可以捕获，写到then的第二个函数则捕获不到
// catch也会返回一个promise实例，并且是resolved状态


// .all()
// Promise.all([p1, p2, p3])用于将多个promise实例，包装成一个新的Promise实例，返回的实例就是普通的promise
// 它接收一个数组作为参数
// 数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态改变
// 当所有的子Promise都完成，该Promise完成，返回值是全部值得数组
// 有任何一个失败，该Promise失败，返回值是第一个失败的子Promise结果


// .race()
// 类似于.all()，区别在于有任意一个实例完成就算完成。

// 常见的异步模式
// 回调函数
// 事件监听
// 发布/订阅模式
// Promise
// Generator
// async/await



// cookie、localstorage和sessionStorage
// cookie单个的最大存储为4k，如果大于4k，则存储失败，浏览器中找不到对应的cookie信息，cookie默认是会话级存储（如下图，与tab页共存亡，可以设置的），可以设置过期时间，(存储在客户端，根据用户设置的cookie保存时间来定，在设定时间到来之前都会一直存在；)
// localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据，使用的方法如上所示。localStorage有length属性，可以查看其有多少条记录的数据。
// sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的。sessionStorage也有length属性，其基本的判断和使用方法和localStorage的使用是一致的。



//URL拆解问题
//用split将字符串拆分为数组
//将HTTP header转换成js对象.split("\n")来切


//instanceof通过__proto__查找原型链，直到为null返回false或与rightValue的prototype相等返回true


//判断两个对象是否相等_.isEqual(x, y)
//同一内存或各个属性是否全都相等


//创建数组并赋值
// let arr= Array.apply(null, { length: 10 }).map((item,index)=>{
//   return index;
// });
// let arr= Array.from({length:10}).map((item,index)=>{
//   return index;
// });
// let arr=  new Array(10).fill(1).map((item,index)=>{
//   return index;
// });


// 防抖(使用闭包和定时器)
// 使用场景:滚动加载,输入实时搜索,页面resize
// 对于短时间内连续触发的事件（上面的滚动事件），防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次。
// function debounce(fn,delay){
//   let timer = null //借助闭包
//   let that=this;
//   return function(...args) {
//       if(timer){    //除了第一次，之后只要触发就会清除，确保事件只发生一次
//           clearTimeout(timer) 
//       }
//       timer = setTimeout(fn.bind(that,...args),delay) // timer是一个返回值，代表setTimeout的编号
//   }
// }
// function showTop  () {
//   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// 　　console.log('滚动条位置：' + scrollTop);
// }
// window.onscroll = debounce(showTop,1000) //这里本身就是一个函数，onscroll获取的本身就是return后的函数
// 这里传了参数，与window.onscroll = debounce是不一样的


// 节流
// 即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈
// function throttle(fn,delay){
//   let valid = true
//   return function() {
//      if(!valid){
//          //休息时间 暂不接客
//          return false 
//      }
//      // 工作时间，执行函数并且在间隔期内把状态位设为无效
//       valid = false
//       setTimeout(() => {
//           fn()
//           valid = true;
//       }, delay)
//   }
// }
// /* 请注意，节流函数并不止上面这种实现方案,
//  例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。Date.now() 
//  也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样
  // if(!timer){
  //   console.log(timer)
  //   timer = setTimeout(() => {
  //     fn();
  //     clearTimeout(timer)
  //     timer=0;
  //   }, delay)
  // }
// function showTop  () {
//   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// 　　console.log('滚动条位置：' + scrollTop);
// }
// window.onscroll = throttle(showTop,1000) 


// 跨域产生在发送请求时，当请求服务器和响应服务器不是同一台时，就会产生跨域
// 非同源的服务器互相访问时，就会产生跨域
// 浏览器为了数据安全，给XMLHTTPRequest施加了安全限制，只允许页面请求自己服务器的数据
// vue proxy 代理(开发环境)
// 后端设置允许请求头
//   nginx
//   CORS
//    Access-Control-Allow-Origin:*
//    Access-Control-Allow-Methods:POST,Get
// 将JSON升级成JSONP,在JSON的基础上，利用<script>标签可以跨域的特性，加上头设置(兼容性好，但只能用于get请求)


// 跨域单点登录
// 每页a.com.cn写COOKIES时，都调用了一个b.com.cn的写COOKIES的方法，达到的效果就是在b.com.cn里可以读到这个cookies。


// 常见的http状态码
// 1xx：表示请求已接收，继续处理。
// 100：这个状态码是告诉客户端应该继续发送请求，这个临时响应是用来通知客户端的，部分的请求服务器已经接受，但是客户端应继续发送求请求的剩余部分，如果请求已经完成，就忽略这个响应，而且服务器会在请求完成后向客户发送一个最终的结果
// 2xx：成功–表示请求已被成功接收、理解、接受。
// 200：这个是最常见的http状态码，表示服务器已经成功接受请求，并将返回客户端所请求的最终结果
// 202：表示服务器已经接受了请求，但是还没有处理，而且这个请求最终会不会处理还不确定
// 204：服务器成功处理了请求，但没有返回任何实体内容 ，可能会返回新的头部元信息
// 3xx：重定向–要完成请求必须进行更进一步的操作。
// 301：客户端请求的网页已经永久移动到新的位置，当链接发生变化时，返回301代码告诉客户端链接的变化，客户端保存新的链接，并向新的链接发出请求，已返回请求结果
// 304：客户端有缓存，客户端检查last modified，请求带If Modified Since， 静态页面默认带这个字段，动态页面默认都会刷新，动态页面可以设置If Modified Since，服务器检查最后缓存时间，有缓存
// 4xx：客户端错误–请求有语法错误或请求无法实现。
// 400: 表示请求报文中存在语法错误；
// 401: 未经许可，需要通过HTTP认证；
// 403: 服务器拒绝该次访问（访问权限出现问题）
// 404：请求失败，客户端请求的资源没有找到或者是不存在
// 5xx：服务器端错误–服务器未能实现合法的请求。
// 500：服务器遇到未知的错误，导致无法完成客户端当前的请求。
// 503：服务器由于临时的服务器过载或者是维护，无法解决当前的请求，以上http状态码是服务器经常返回的状态代码，用户只能通过浏览器的状态了解服务器是否正常运行，一般除了错误的状态码，都不会看到服务器的状态码的，新SEOer你们了解到了吗？内容编辑来自51特色购SEO优化人员，想了解更过状态码的知识可以加我好友，一起相互交流学习

// 缓存机制
// 1、浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识
// 2、浏览器每次拿到返回的请求结果都会将该结果和缓存标识存入浏览器缓存中
// 以上两点结论就是浏览器缓存机制的关键，他确保了每个请求的缓存存入与读取，只要我们再理解浏览器缓存的使用规则，那么所有的问题就迎刃而解了，本文也将围绕着这点进行详细分析。
// 根据是否需要向服务器重新发起HTTP请求将缓存过程分为两个部分，分别是强制缓存和协商缓存 
// 强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程
// 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程
//缓存相关的头部
// Expires	
//   1、HTTP 1.0 产物，可以在HTTP 1.0和1.1中使用，简单易用。
//   2、以时刻标识失效时间。	
//   1、时间是由服务器发送的(UTC)，如果服务器时间和客户端时间存在不一致，可能会出现问题。
//   2、存在版本问题，到期之前的修改客户端是不可知的。
// Cache-Control	
//   1、HTTP 1.1 产物，以时间间隔标识失效时间，解决了Expires服务器和客户端相对时间的问题。
//   2、比Expires多了很多选项设置。	
//   1、HTTP 1.1 才有的内容，不适用于HTTP 1.0 。
//   2、存在版本问题，到期之前的修改客户端是不可知的。
// Last-Modified	
//   1、不存在版本问题，每次请求都会去服务器进行校验。服务器对比最后修改时间如果相同则返回304，不同返回200以及资源内容。	
//   1、只要资源修改，无论内容是否发生实质性的变化，都会将该资源返回客户端。例如周期性重写，这种情况下该资源包含的数据实际上一样的。
//   2、以时刻作为标识，无法识别一秒内进行多次修改的情况。3、某些服务器不能精确的得到文件的最后修改时间。
// ETag	
//   1、可以更加精确的判断资源是否被修改，可以识别一秒内多次修改的情况。
//   2、不存在版本问题，每次请求都回去服务器进行校验。	
//   1、计算ETag值需要性能损耗。
//   2、分布式服务器存储的情况下，计算ETag的算法如果不一样，会导致浏览器从一台服务器上获得页面内容后到另外一台服务器上进行验证时发现ETag不匹配的情况。


// 浏览器输入url后发生了什么
// 1.DNS域名解析；
// 2.建立TCP连接；(应用层(http),传输层(tcp),网络层(ip),链路层(网络硬件))
//   三次握手建立连接
// 3.发送HTTP请求；
// 4.服务器处理请求；
// 5.返回响应结果；
// 6.关闭TCP连接；
// 7.浏览器解析HTML；
// 8.浏览器布局渲染；


// Cookie和session
// 客户端和服务端都能生成cookie，它用来存放一些不敏感的数据，数据类型只能是字符串（json）.
// 除了服务端之外，服务端生成session，客户端是不能生成session的。Session的信息是存放在服务端的，可以存放任意数据，java中session中可以存放任何数据类型。

// 鉴权Cookie
// Cookie(包含SessionId)
// axios.defaults.withCredentials = true

// Token
// token主要是解决session的性能问题。客户端登录成功之后session存在内存。
// 一台服务器的内存也就那么大，内存总有一天会占满，而你内存越来越满，服务器的性能就越低。那怎么去解决的呢？就是这个token。
// Token其实也是一个字符串，它最大的一个特点就是不会存在服务端，还有一个特点就是不再依赖于cookie的形式，它可以是请求头或者是请求体的方式，
// 也就是Session依赖于cookie，由服务器生成，存储，验证，以cookie的方式存在于客户端，客户端以同样方式发送给服务端，session有状态。
// Token原理
// 一个token分为三个部分，第一部分是Header,第二部分是用户相关信息，第三个部分是签名，相当于一把锁，前两个部分通过HMAC-SHA256算法生成一把钥匙（密钥）。
// 我们只需要判断钥匙和锁是否匹配即可，但是我们不会直接拿密钥和签名对比，而是重新计算出一个签名（锁），比较两把锁是否相同。
// token是服务器算出来的，保存在客户端，服务器验证token信息



// WebSocket 协议在2008年诞生，2011年成为国际标准。现在所有浏览器都已经支持了。
// WebSocket 的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话。
  // 1、WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息，而HTTP是单向的；
  // 2、WebSocket是需要浏览器和服务器握手进行建立连接的，而http是浏览器发起向服务器的连接。


// http与https
// http是HTTP协议运行在TCP之上。所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。
// https是HTTP运行在SSL/TLS之上，SSL/TLS运行在TCP之上。所有传输的内容都经过加密，加密采用对称加密，(!!!重点，是对称加密)
// 但对称加密的密钥用服务器方的证书进行了非对称加密。此外客户端可以验证服务器端的身份，如果配置了客户端验证，服务器方也可以验证客户端的身份。
// https
// 完成TCP三次同步握手
// 客户端验证服务器数字证书，通过，进入步骤3
// DH算法协商对称加密算法的密钥、hash算法的密钥
// SSL安全加密隧道协商完成
// 网页以加密的方式传输，用协商的对称加密算法和密钥加密，保证数据机密性；用协商的hash算法进行数据完整性保护，保证数据不被篡改
// http的传输是不安全的,https是http+ssl证书进行加密的,所以比http安全


// 多页应用（MPA）	
// 项目中有多个完整的HTML页面	
// 使用超链接、JS实现页面跳转	
// 所有页面请求都是同步的——客户端在等待服务器给相应的时候，浏览器中一片空白
// 不便于实现两个页面间切换过场动画	
// 浏览器需要不停的创建完整的DOM树，删除完整的DOM树	
// 每个页面都需要加载自己的CSS和JS文件	

// 单页应用（SPA）
// 整个项目中只有一个完整的HTML页面；其他HTML文件都是HTML片段。
// 使用超链接、JS实现“伪跳转”
// 所有的“伪页面请求”都是异步请求——客户端在等待下一个页面片段到来时，仍可以显示前一个页面内容——浏览器体验更好
// 很容易实现两个伪页面间的过场切换动画
// 浏览器只需要创建一个完整的DOM树，此后的伪页面切换其实只是在换某个div中的内容
// 整个项目的CSS和JS文件只需要加载一次


// Nodejs是一个平台，构建在chrome的V8上（js语言解释器），采用事件驱动、非阻塞模型
// 为什么单线程却能够支持高并发？
// (1)前提：I/O密集型任务
// (2)单线程的解释：主线程一个，底层工作线程多个。
// (3)事件机制的底层依赖库：libuv、libeio、libev
// (4)nodejs运行机制：
//   a、V8引擎解析JavaScript脚本
//   b、解析后的代码，调用Node API
//   c、libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎
//   d、V8引擎再将结果返回给用户
// 单线程的好处：
//   (1)多线程占用内存高
//   (2)多线程间切换使得CPU开销大
//   (3)多线程由内存同步开销
//   (4)编写单线程程序简单
//   (5)线程安全
// 单线程的劣势：
//   (1)CPU密集型任务占用CPU时间长
//   (2)无法利用CPU的多核
//   (3)单线程抛出异常使得程序停止


// XSS攻击(跨站脚本攻击，全称为Cross-Site Scripting,例如可以将cookie传给其它网站)
// XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，
// 使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript，
// 前端注意
// .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等。
// 解决跨域时候的jsonp方法也存在XSS隐患,去请求别的域，得到别的域返回的数据，万一是个脚本，就注入到自己的代码里了
// 如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患。
// 防止cookie信息被盗
// cookie中可以设置HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。


// AST抽象语法树
// 把js代码进行了结构化的转化，转化为一种数据结构。这种数据结构其实就是一个大的json对象，
// const esprima = require('esprima');
// const ast = esprima.parseScript(code);
  // VUE模板编译主要分为三个步骤:
  // 解析器阶段: 将 template 里面的代码解析成AST抽象语法树;
  // 优化器阶段: 将AST抽象语法树静态标签打上tag,防止重复渲染(AST是Abstract Syntax Tree的简称，Vue使用HTML的Parser将HTML模板解析为AST，并且对AST进行一些优化的标记处理，提取最大的静态树，方便Virtual DOM时直接跳过Diff。);
  // 代码生成器阶段: 优化后的AST抽象语法树通过generate函数生成render函数字符串；(然后通过render函数结合数据生成虚拟DOM，Diff和Patch后生成新的UI)


// 每一秒一个数的方法
// 使用let
// for(let i = 0; i<6; i++){
//   setTimeout(function(){
//       console.log(i);
//   },i * 1000);
// }
// 闭包，这里访问的作用域是作为参数传进里层函数的值，最开始就被确定了
// for(var i=0; i<6; i++){
//   (function(j){
//       setTimeout(function(){
//           console.log(j);
//       },j*1000);
//   })(i);
// }
// 第三参数，原理同上,setTimeout的第三个参数
// for(var i=0;i<6;i++){
//   setTimeout(function(j){
//       console.log(j);
//   },i*1000,i);
// }

// concat与push的区别
// concat反参是数组
// push的反参是数组长度

// &&是逻辑运算,&是位运算
// true&true //1
// true&&true //true
// 1&1 //1
// 1&&1 //1
// 1&2 //0
// 1&&2 //1


// 判断字符是否为数字
// parseFloat('>').toString()==='NaN'


//字节面试题，已解决
// const request1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });

// const request2 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 500);
//   });
// const request3 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 300);
//   });
// const request4 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(4);
//     }, 400);
//   });
// // -----------------最多并发2个请求 
// function scheduler(n) {
//   // ------你的代码
//   let limit=[];
//     return async function(fn){
//         if(limit.length>=n){
//           await Promise.race(limit);
//         }
//         let request=fn().then((ans)=>{
//             limit.splice(limit.indexOf(request),1);
//             return new Promise((resolve, reject) => {resolve(ans)})
//         })
//         limit.push(request);
//         return request;
//     }
// }
// const addRequest = scheduler(2);
// addRequest(request1).then(res => {
//   console.log(res);
// });
// addRequest(request2).then(res => {
//   console.log(res);
// });
// addRequest(request3).then(res => {
//   console.log(res);
// });
// addRequest(request4).then(res => {
//   console.log(res);
// });