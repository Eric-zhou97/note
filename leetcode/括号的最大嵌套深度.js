//多用函数，快
var maxDepth = function(s) {
  let count=0,max=0;
  for(let c of s){
      if(c=='('){
          count++;
          max = Math.max(max, count);
      }else if(c==')'){
          count--;
      }
  }
  return max;
};