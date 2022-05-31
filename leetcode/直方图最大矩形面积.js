var largestRectangleArea = function(heights) {
  // 单调栈
  var stack = [-1]; // -1是用来给最小的那个元素计算面积的
  const len = heights.length;
  var result = 0;
  var s; // 矩形面积的宽度
  for(let i = 0 ;i<len; i++) {
      //undefined>num为false，不会报错
      while(heights[stack[stack.length-1]]>heights[i]) {
          // 最终要的是此处面积计算方法：
          // s = 栈中取出来的矩形高度 * (当前的i值-当前栈顶元素的索引-1);
          // 栈内是单调递增的，因此只需要用最新pop出来的长度乘上宽度即可
          s = heights[stack.pop()]*(i-stack[stack.length-1]-1); 
          if(result<s) result = s;
      }
      stack.push(i);
  }
  // 处理栈中剩余的元素，假设栈遇到了0 (i应该取len了)
  while(heights[stack[stack.length-1]]>0) {
      s = heights[stack.pop()]*(len-stack[stack.length-1]-1);  
      if(result<s) result = s;
  }
  return result;
};