# CSS学习

1. ## 字体

   font-weight //粗细

   font-style //斜体

2. ## 修改技巧

   浏览器开发者环境进行更改，成功后再修改代码。

   可以加not排除特例。

   根据此方式，可以通过优先级，覆盖组件(重点：可对第三方组件的样式进行重构)的样式。

   calc()解决参数单位不一致问题 

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
   
5. 

   

