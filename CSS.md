# CSS学习

1. ## 字体

   font-weight //粗细

   font-style //斜体

2. ## 修改技巧

   浏览器开发者环境进行更改，成功后再修改代码。

   可以加not排除特例。

   根据此方式，可以通过优先级，覆盖组件(重点：可对第三方组件的样式进行重构)的样式。

   calc()解决参数单位不一致问题 

   ::ng-deep用于需要用到全局的层级，但只作用于当前界面的修改

3. ## 位置

   margin/padding: 20px;（上、下、左、右各20px。）
   margin/padding: 20px 40px;（上、下20px；左、右40px。）
   margin/padding: 20px 40px 60px;（上20px；左、右40px；下60px。）
   margin/padding: 20px 40px 60px 80px;（上20px；右40px；下60px；左80px。）

4. ## 盒子

   使用给div使用display:inline会使div变内联元素，使得空div不显示，可采用float: left;

   两个div并排，可一个float: left;并固定宽度，另一个margin-left:固定宽度

5. ## 文档流

   文档流（流式布局）分为 普通流、定位流、浮动流。
   
   普通流中的布局规则默认为块级盒子从上到下，垂直排列；内联盒子从左到右，水平排列等。
   
   使用 position 会脱离常规流，成为定位流，并有其自己的定位规则；
   
   1. relative:  相对定位，相对于⾃⼰本⾝在正常⽂档流中的位置进⾏定位相对它原来的位置
   2. absolute: ⽣成绝对定位，相对于最近⼀级定位**不为static**的⽗元素进⾏定位。（⼦决⽗相）。
   3. fixed: （⽼版本IE不⽀持）⽣成绝对定位，相对于浏览器窗⼝或者frame进⾏定位跟⽗元素没关系。不随着滚动条的滚动⽽移动。固定在浏览器可视窗口的位置。
   4. sticky:  基于⽤户的滚动位置来定位。粘性定位的元素是依赖于⽤户的滚动，在 position:relative 与 position:fixed 定位之间切换。
   
   使用 float 会脱离常规流，成为浮动流，并有其自己的定位规则；
   
   table
   
   flex
   
   grid
   
5. ## 元素

   1. 块级元素
   
      ```html
      display:block/table 的元素
      <div></div>
      <ul></ul>
      <li></li>
      <h1></h1>
      <h2></h2>
      <p></p>
      ```
   
   2. 内联元素
   
      ```html
      display:inline/inline-block 的元素
      <span></span>
      <a></a>
      <img/>
      <b></b>
      <td></td>
      ```
   
   3. 空元素
   
      无闭合标签，例如<link xxxxx />
   
      ```html
      <hr>
      <img>
      <input>
      <link>
      <meta>
      ```
   
5. ## 图标如何对齐文本

   ```html
   <elem>
       <span><img /></span>文本
   </elem>
   ```
   
   ```css
   span {
       display: inline-flex;
       align-items: center;
   }
   span img {
       position: absolute;
       top: 0;
       left: 0;
       width: 1em;
       height: 1em;
   }
   ```
   
   或者用inline-block
   
   ```css
   span {
       position: relative;
       display: inline-block;
       line-height: 1; // 使文本高度为图标高度
       width: 1em; //图标大小，用来占位
   }
   ```
   
5. ## dispaly的属性

   1. inline
   
      共享一行 
   
      不能修改width、height属性，大小由内容撑开 
   
      padding属性 top、right、bottom、left设置都有效；margin属性只有left、right设置有效
   
   2. block
   
      独占一行，默认与父元素同宽 
   
      可以修改width、height属性 
   
      padding、margin四个方向的值设置均有效
   
   3. inline-block
   
      共享一行 
   
      可以修改width、height属性 
   
      padding、margin四个方向的值设置均有效
   
   4. flex
   
      独占一行 
   
      将对象作为弹性伸缩盒显示
   
   5. inline-flex
   
      共享一行 
   
      将对象作为内联块级弹性伸缩盒显示
   
5. ## flex布局

   conten适用于多行，想要适用于单行需要flex-wrap:wrap;适用于多行时，`align-content:center将子项作为一个整体在交叉轴上对齐，单个子项并未在各自行居中对齐。
   
   flex-wrap:wrap;可以使align-content呈现单行对齐(本质上还是多行，第二行高度为0)。
   
   align-items:center使子项在自己所在行的交叉轴上居中对齐，单行多行皆可，单个子项也对齐。
   
   align-self使作用在单个子项上，可以覆盖住align-items的值。在align-content作用的父项中，align-self使子项以其整体的交叉轴对齐，即align-content依然会对子项有影响。
   
   
   
   和 x 和 y 轴不同的是，主轴(main axis)和交叉轴(cross axis)两条轴线可以变换位置。
   
   justify影响的是主轴，align影响的是交叉轴
   
   
   
   「flex line」依据 flex-direction 值的变化，有时候是 row，而有时候是 column
   
   flex-wrap: nowrap 建立的就是 single-line flex 容器，其中所有的子级 flex item 的位置都被强制安排在一条线上
   
   flex-wrap: wrap 或者 wrap-reverse 会产生一个 multi-line 的容器，在其中，flex 容器可以产生很多线（line）。
   
   
   
   flex:1 (flex-grow:1;flex-shrink:1;flex-basis:0%;)表示的含义是等分剩余空间
   
5. ## 3D

   在网页里，无论你搭建了怎样的三维场景，只要你希望它显示出来，就应该像这样把构成场景的三维物体都放在一个容器元素里，然后为容器元素添加摄像机属性（`perspective`和`perspective-origin`）。
   
   内容过多，需要单独研究。
   
5. ## overflow

   overflow:hidden;清除浮动
   
   1. 当父元素没设置高度的时候，子元素float的时候，父元素高度会塌陷，子元素溢出。当你在父元素parent加上，overflow: hidden;就会出现下面的效果。 父元素高度正常。
   2. overflow:hidden;会自动产生一个BFC，
   3. 浏览器在计算BFC的高度时：BFC浮动元素的高度也要参与计算，即父元素不会忽略自己里面的浮动元素的高度，如果你的父元素的高度设置的auto的话，那么它的高度就会等于浮动元素的高度。
   
   overflow:hidden;解决外边距折叠问题，原理同上。
   
12. ## BFC(块级格式化上下文)

    BFC它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，Block Formatting Context提供了一个环境，HTML在这个环境中按照一定的规则进行布局。

    - overflow: hidden
    - display: inline-block
    - position: absolute
    - position: fixed
    - display: table-cell
    - display: flex

    BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列

    BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签

    垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠

    计算BFC的高度时，浮动元素也参与计算

13. ## 浏览器的回流与重绘 (Reflow & Repaint)

    牵涉到性能问题，考虑开单章

    [浏览器的回流与重绘 (Reflow & Repaint) - 掘金 (juejin.cn)](https://juejin.cn/post/6844903569087266823)

    

5. ## margin

   margin加百分比的话是相对于父元素的content，因此margin：-100%是移到父元素content的最左侧，内容重叠。
   
   margin在没有padding没有border的情况下会存在margin覆盖/坍塌的情况
   
   圣杯布局(https://github.com/xluos/demo/blob/gh-pages/圣杯和双飞翼布局/圣杯.html)
   
   双飞翼布局(https://github.com/xluos/demo/blob/gh-pages/圣杯和双飞翼布局/双飞翼.html)
   
5. ## 渲染树(Render Tree)

   解析HTML构建DOM Tree
   
   解析CSS构建CSSOM Tree
   
   构建渲染树（Render Tree）
   
5. ## -webkit

   首先是 -webkit- ，这是一个前缀，浏览器厂商会在属性前加一个私有的前缀来支持新属性。这个前缀指能够在以webkit为内核的浏览器中正常使用。
   
   -webkit-fill-available  (撑满可用空间。)
   
17. 

    

