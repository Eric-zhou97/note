//栈
//用栈来存下标
var dailyTemperatures = function(temperatures) {
  let ans=new Array(temperatures.length).fill(0);
  let stack=[];
  for(let i=0;i<temperatures.length;i++){
      //单调栈，遇到小的就全吐出来了
      //保证栈内是递减的
      while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]){
          let temp=stack.pop();
          ans[temp]=i-temp; 
      }
      stack.push(i);
  }
  return ans;
};