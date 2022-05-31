// <!DOCTYPE html>
// <html>
//  <head>
// 	  <meta charset="utf-8">
// 	  <title>牛客教程(nowcoder.com)</title>
// 	  <style>
//      此处写css内容
// 	  </style>
//  </head>
//  <body>
//  </body>
// </html>


// HTML，CSS都对大小写不敏感，但为了更好的可读性和团队协作一般都小写，而在XHTML 中元素名称和属性是必须小写的。


// Q: 行内(inline)元素 设置margin-top和margin-bottom 是否起作用？
// A: 答案是起作用
// html 里的元素分为替换元素（replaced element）和非替换元素（non-replaced element）。
// 替换元素是指用作为其他内容占位符的一个元素。最典型的就是img，它只是指向一个图像文件。以及大多数表单元素也是替换，例如input等。
// 非替换元素是指内容包含在文档中的元素。例如，如果一个段落的文本内容都放在该元素本身之内，则这个段落就是一个非替换元素。
// 讨论margin-top和margin-bottom对行内元素是否起作用，则要对行内替换元素和行内非替换元素分别讨论。
// 首先我们应该明确外边距可以应用到行内元素，规范中是允许的，不过由于在向一个行内非替换元素应用外边距，对行高(line-height)没有任何影响。由于外边距实际上是透明的。所以对声明margin-top和margin-bottom没有任何视觉效果。其原因就在于行内非替换元素的外边距不会改变一个元素的行高。
// 而对于行内非替换元素的左右边距则不是这样，是有影响的。
// 而为替换元素设置的外边距会影响行高，可能会使行高增加或减少，这取决于上下外边距的值。行内替换元素的左右边距与非替换元素的左右边距的作用一样。

// Q: 对内联元素设置padding-top和padding-bottom是否会增加它的高度？（原题是Does setting padding-top and padding-bottom on an inline element add to its dimensions?）
// A: 答案是不会。对于行内元素，设置左右内边距，左右内边距将是可见的。而设置上下内边距，设置背景颜色后可以看见内边距区域有增加，
// 对于行内非替换元素，不会影响其行高，不会撑开父元素。而对于替换元素，则撑开了父元素。看下demo，更好的理解下：


// 行内元素和块级元素
// 行内元素：相邻的行内元素会排列在同一行，不会独占一行 设置宽高无效 span
// 块级元素：会独占一行 可以设置宽高等属性div
// 可变元素：根据上下文预警决定该元素为块元素还是内联元素
// 块级元素：div h1-h6 hr p ul ol table address blockquote dir from menu
// 行内元素：a br I em img input select span sub sup u textarea


//css两种盒模型，标准盒模型，怪异盒模型
// box-sizing: content-box 是W3C/标准盒子模型  盒子width指content
// box-sizing: border-box 是IE/怪异盒子模型    盒子width指content+padding+border 
//css3有一种新的叫做弹性盒子模型 父元素必须要加display:box 或 display:inline-box
    //弹性盒子的意义:当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式


// px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
// em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
// rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。




//x:nth-of-type(n)（css3中，同级的第n个x）


// margin-left 和 margin-top：影响自身元素，自身元素将向指定方向偏移
// margin-right在没有设置width属性时，宽度改变与数值有关(默认填满,但在flex中,宽度不改变)
// margin-bottom将影响后元素，使后元素向上偏移对应像素

// only 停止旧版本浏览器解析选择器的其余部分。


// screen关键词是指浏览器的视窗


// display:none和visibility:hidden都是把网页上某个元素隐藏起来的功能，但两者有所区别，使用visibility:hidden属性会使对象不可见，但该对象在网页所占的空间没有改变（看不见但摸得到），等于留出了一块空白区域，而 display:none属性会使这个对象彻底消失（看不见也摸不到）


// css3中box-shadow的溢出问题 子容器加了box-shadow在父容器中可能存在溢出 可以通过给父元素添加overflow:hidden解决
// box-shadow阴影被覆盖问题：
// 1.使用相对定位解决position:relative和z-index提高层数可以把阴影显示出来
// 2.开启gpu加速, 设置3d效果 { transform: translate3d(0, 0, 0); }


//"dispaly: inline"


// 解决上下盒子margin重合？
// 加一个底边
// #div2 {
//   border:1px solid; 
// }


// 内联元素又名行内元素(inline element)，和其对应的是块元素(block element)
// 而当加入了css控制以后，块元素和内联元素的这种属性差异就不成为差异了。比如，我们完全可以把内联元素加上display:block这样的属性，让它也有每次都从新行开始的属性，即成为块元素同样我们可以把块元素加上display:inline这样的属性，让它也在一行上排列。

// 1. position: relative;相对定位
//   1> 不影响元素本身特性（无论区块元素还是内联元素会保留其原本特性
//   2> 不会使元素脱离文档流（元素原本位置会被保留，即改变位置也不会占用新位置）
//   3> 没有定位偏移量时对元素无影响（相对于自身原本位置进行偏移）
//   4>提升层级（用z-index样式的值可以改变一个定位元素的层级关系，从而改变元素的覆盖关系，值越大越在上面，z-index只能在position属性值为relative或absolute或fixed的元素上有效。）  （两个都为定位元素，后面的会覆盖前面的定位）
// 2. position: absolute;绝对定位
//   1> 使元素完全脱离文档流（在文档流中不再占位）
//   2> 使内联元素在设置宽高的时候支持宽高（改变内联元素的特性）
//   3> 使区块元素在未设置宽度时由内容撑开宽度（改变区块元素的特性）
//   4> 相对于最近一个有定位的父元素偏移（若其父元素没有定位则逐层上找，直到document——页面文档对象）
//   5> 相对定位一般配合绝对定位使用（将父元素设置相对定位，使其相对于父元素偏移）
//   6> 提升层级（同相对定位,z-index）
// 3. position: fixed;固定定位
//   fixed生成固定定位的元素，相对于浏览器窗口进行定位。
//   fixed定位使元素的位置与文档流无关，在文档流中不再占位。
//   fixed定位的元素和其他元素重叠。
// 4. position: static：默认值(这是默认值，重点)
// 默认布局。元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
// 5. position: sticky 粘性定位
// 粘性定位，该定位基于用户滚动的位置。
// 它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。
// 注意: Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix 。
// 6. position: inherit
// 规定应该从父元素继承 position 属性的值。
// 7. position: initial
// 设置该属性为默认值，详情查看CSS initial 关键字
// initial 关键字用于设置 CSS 属性为它的默认值。
// initial 关键字可用于任何 HTML 元素上的任何 CSS 属性。
// 8. position: unset
// 属性不设置。如果该属性默认是继承的，该值相当于 inherit；如果该属性是非继承属性，该值等同于 initial 不设置时的默认值。


// 画扇形，圆角的半径，左上，右上，右下，左下
// width: 100px;
// height: 100px;
// border-radius: 100px 0 0 0 ; //不是半径，四分之一，变弧的返回，从(0,0)到（100px,0）和(0,100px)，超了不管
// background: #ff0000; 

// 另解,画一个实心的边框，只有四分之一上色，其余透明
// width: 0;//必须为0，否则边框也会变形
// height: 0;
// border-radius: 100px;//从最左上角到中间的距离，大于border-width无用
// border-width: 100px;//边框的宽度，此处设为200px依然有效
// border-style: solid;//实心
// border-color: red transparent transparent transparent;

// 画三角
// .triangle {
//   width: 0;
//   height: 0;
//   border-bottom: 100px solid pink;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
// }


// CSS的选择器分类可以分为三大类：id选择器，类选择器，标签选择器。
// https://www.cnblogs.com/AIonTheRoad/p/11283100.html
// 选择器的优先级/权重
// !important，加在样式属性值后，权重值为 10000
// 内联样式，如：style=””，权重值为1000
// ID选择器，如：#content，权重值为100
// 类，伪类和属性选择器，如： class="content"、:hover 权重值为10
// 标签选择器和伪元素选择器，如：div、p、:before 权重值为1
// 通用选择器（*）、子选择器（>）、相邻选择器（+）、同胞选择器（~）、权重值为0
// 继承（Inherited） 权重值最低级 只要有人任意其他的选择器都会覆盖(细节)


// 伪类伪对象
// 冒号后紧跟伪类或者伪对象名称，冒号前后没有空格，否则解析为包含选择器
// link和:visited称为链接伪类，只能应用于锚元素；
// :hover(鼠标经过的样子),:active(鼠标按下的样子)和:focus称为动态伪类，理论上可以应用于任何元素.
// 伪类
// :focus	定义对象在成为输入焦点（该对象的onfocus事件发生时）的样式
// :first-child	定义对象的第一个子对象的样式
// :first　　	定义页岩 容器第一页使用的样式，仅适用于@page规则
// :left	定义页面容器位于装订线左边的所有页面使用的样式，仅适用于@page规则
// :right	定义页面容器位于装订线右边的所有页面使用的样式，仅适用于@page规则
// :lang	定义对象使用特殊语言的内容样式
// 伪对象
// :after	与content属性一起使用，定义在对象后的内容
// :before	与content属性一起使用，定义在对象前的内容
// :first-letter	定义对象内第一个字符的样式
// :first-line　　	定义对象内第一行的样式


//水平居中margin:auto//在flex中完全居中
//margin+transform//transform移动的是content，margin将顶点移动到了正中央，然后移动content使得原顶点成为中心
// translate()方法只能改变x轴，y轴上的位移。
// margin:50% auto;
// transform: translateY(-50%);//此处需要父元素加overflow:hidden或加上边框来防止外边距塌陷，内外两个盒子大小都要确定，方法不好

// absolute+transform
// position: absolute;//此处父元素需要已经定位position: relative;
// top:50%;
// left:50%;
// transform:translate(-50%,-50%);

//弹性窗口
//display:flex; 
// align-items:center;//使得子元素垂直居中
// justify-content:center;//使得子元素水平居中
//表格
//父元素display:table;//可省略
//子元素display:table-cell;
//text-align:center;//使得子元素水平居中
// vertical-align: middle;//使得子元素垂直居中



//flex布局
// 容器的6个属性：flex-direction、flex-wrap、flex-flow、justify-content、align-content、align-items
// flex-direction:属性在主轴上的方向。值为row | row-reverse | column | column-reverse；
// flex-wrap:默认情况下，项目在一行排列。这个属性决定当项目在一行排不下时，如何换行。值为:wrap | no-wrap || wrap-reverse
// flex-flow:是flex-direction 和flex-wrap的简写。
// justify-content:项目在主轴上的对齐方式。值为flex-start | flex-end | center | space-between | space-around
// align-items；项目在交叉轴上如何对齐。值为cross-start | cross-end | center | baseline | stretch 
// align-content:多根轴线的对齐方式。如果只有一根轴线，此属性不起作用。值为flex-start | flex-end | center | stretch | space-between | space-around
// 项目的6个属性：order、flex-grow、flex-shrink、flex-basis、flex、align-self

// css3的calc()
// calc()可以计算不同单位的值，也可以嵌套，不过符号之间一定要有空格，虽然"*"、"/"之间可以没有，建议还是加上空格。例如：width:calc(100% - 30px)；



//a标签的第一个功能：超链接
//锚的意思（定在某个点上）类似至顶部
//打电话、发邮件
//协议限定符，可强制执行javascript <a href="javascript:while(1){alert('让你看，看屁')}"> 点击我查询成绩</a>


// float浮动造成高度塌陷的解决办法
// 第一种方法：父元素添加高度
// 第二种方法：overflow:hidden;(可能显示不全)或者overflow:auto;(会出现滚动条)
// 第三种方法:在浮动的子元素下面添加一个空元素，添加属性clear:both;,设置为空
// 第四种方法:利用伪对象简化代码，.box1::after{content: "";height: 0;clear: both;display: block;}(父元素)


// BFC
// Box：css布局的基本单位
// Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，
// 决定了这个 Box 的类型。不同类型的 Box，会参与不同的 Formatting Context（一个决定如何渲染文档的容器），
// 因此Box内的元素会以不同的方式渲染。
// Formatting Context
// Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，
// 它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context 
// (简称BFC)和 Inline formatting context (简称IFC)。
// BFC的布局规则
// 内部的Box会在垂直方向，一个接一个地放置。
// Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
// 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。
// 即使存在浮动也是如此。
// BFC的区域不会与float box重叠。
// BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
// 计算BFC的高度时，浮动元素也参与计算。
// 如何创建BFC
// 1、float的值不是none。
// 2、position的值不是static或者relative。
// 3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
// 4、overflow的值不是visible
// BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。


// css3的新特性
// css3中新增了一些选择器
// flex弹性布局、Grid栅格布局
// border-radius：创建圆角边框
// box-shadow：为元素添加阴影
// border-image：使用图片来绘制边框
// 背景：background-clip，background-size，background-break，background-origin
// 文字：text-decoration，text-shadow，text-overflow，word-wrap
// ss3新增了新的颜色表示方式rgba与hsla
// transition 过渡
// transform 转换
// animation 动画
// 渐变
// 多列布局、媒体查询、混合模式


// https://leetcode-cn.com/circle/discuss/NUpy8m/
// https://www.cnblogs.com/lauzhishuai/p/10994048.html
// https://codepen.io/RottenOrange/pen/xxEVzQo


// 重绘、回流
// 1、HTML解析为DOM树，CSS解析为CSSOM树，并行解析
// 2、DOM树和CSSOM树解析完成后合并为渲染树render tree
// 3、遇到外链或者需要下载的资源会重新发起HTTP请求
// 4、收到CSS文件后可能发生重绘或者回流
// 	重绘repaint：当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
// 回流reflow：当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
// -	页面首次渲染
// -	浏览器窗口大小发生改变
// -	元素尺寸或位置发生改变
// -	元素内容变化（文字数量或图片大小等等）
// -	元素字体大小变化
// -	添加或者删除可见的DOM元素
// -	激活CSS伪类（例如：:hover）
// -	查询某些属性或调用某些方法

// 避免回流：
// CSS
// -	避免使用table布局。
// -	尽可能在DOM树的最末端改变class。
// -	避免设置多层内联样式。
// -	将动画效果应用到position属性为absolute或fixed的元素上。
// -	避免使用CSS表达式（例如：calc()）。
// JavaScript
// -	避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
// -	避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
// -	也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
// -	避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
// -	对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。


// 1. 什么时候需要用语义化标签?
// 强SEO需求（搜索引擎会通过语义化标签增强文章的SEO搜索）
// 需要支持屏幕阅读器（屏幕阅读器是根据标签理解语义和段落的）
// 视觉呈现重要程度较低的程序(色彩搭配、 元素构成、文字排版应用、留白技巧等方面的要求比较低)

// 2.语义化标签好处
// HTML结构清晰
// 代码可读性较好
// 无障碍阅读
// 搜索引擎可以根据标签的语言确定上下文和权重问题(SEO优化)
// 移动设备能够更完美的展现网页（对css支持较弱的设备）
// 便于团队维护和开发

// 3.语义标签分两类
// 结构类
// header 头部
// footer 尾部
// aside 与主体内容不那么相关的部分
// section 块，里面的标题等呈现为文章的 下一级结构
// nav 导航
// article 文章
// 语义类，在文中有具体的含义，其实这种语义更多的是一种出版社出版文章排版的语义
// em b q s u mark figure cite del ……
// alt title name等属性对seo也有影响

// 4.常用语义化标签
// address 作者的联系方式
// date 日期
// hgroup 将标题划分为同一部分内

// 5. 总结
// 如果确实有兼容IE8及以下的需求，建议不写新标签。
// 语义化在机器翻译、盲人软件上比较重要。使用语义化不但搜索引擎上可以有好处，在机器翻译和盲人软件上也有很多好处，可以让相应开发者少很多工作。
// 语义类标签对开发者更为友好，使用语义类标签增强了可读性，即便是在没有 CSS 的时候，开发者也能够清晰地看出网页的结构
// 不恰当地使用语义标签，反而会造成负面作用。


// 动画
